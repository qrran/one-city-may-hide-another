"""Build the original English voice take with Kokoro v1 and the af_heart preset.

Supply the two npm archives documented in README, or keep the included voice stems.
Only named model parts and a single voice tensor are read. Nothing is extracted as a path.
"""
import argparse
import hashlib
import json
import tarfile
import wave
from pathlib import Path
import numpy as np
import onnxruntime as ort
from kokoro_onnx import Kokoro

parser = argparse.ArgumentParser()
parser.add_argument("model_archive", type=Path)
parser.add_argument("voices_archive", type=Path)
args = parser.parse_args()
cache = Path(".cache/voice-model")
cache.mkdir(parents=True, exist_ok=True)
with tarfile.open(args.model_archive) as tar:
    model = b"".join(tar.extractfile(f"package/kokoro-q8.part{i}.bin").read() for i in range(6))
if hashlib.sha256(model).hexdigest() != "fbae9257e1e05ffc727e951ef9b9c98418e6d79f1c9b6b13bd59f5c9028a1478":
    raise ValueError("Unexpected model checksum")
model_path = cache / "kokoro.onnx"
model_path.write_bytes(model)
del model
with tarfile.open(args.voices_archive) as tar:
    raw = tar.extractfile("package/voices/af_heart.bin").read()
voice = np.frombuffer(raw, dtype="<f4").reshape(-1, 1, 256)
voice_path = cache / "voices.npz"
np.savez(voice_path, af_heart=voice)
options = ort.SessionOptions()
options.intra_op_num_threads = 2
options.inter_op_num_threads = 1
sess = ort.InferenceSession(str(model_path), sess_options=options, providers=["CPUExecutionProvider"])
speech = Kokoro.from_session(sess, str(voice_path))
destination = Path("public/voice")
destination.mkdir(parents=True, exist_ok=True)
score = json.loads(Path("src/score.json").read_text())
for number, (_, text) in enumerate(score["lines"]):
    samples, sr = speech.create(text, voice="af_heart", speed=.96, lang="en-us")
    speaking = np.where(np.abs(samples) > .009)[0]
    if len(speaking):
        samples = samples[max(0, speaking[0]-int(sr*.07)):speaking[-1]+int(sr*.21)]
    with wave.open(str(destination / f"{number:02}.wav"), "wb") as dest:
        dest.setparams((1, 2, sr, 0, "NONE", ""))
        dest.writeframes(np.int16(np.clip(samples, -1, 1)*32760).tobytes())
    print(f"Voice {number+1}/{len(score['lines'])}  {len(samples)/sr:.2f}s", flush=True)
