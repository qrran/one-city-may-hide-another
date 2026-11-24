"""Compose a stereo street from oscillators, filtered noise, and the recorded voice cues."""
import json
import subprocess
import wave
from pathlib import Path
import numpy as np
from scipy import signal

score = json.loads(Path("src/score.json").read_text())
rate = 32000
length = score["duration"] * rate
time = np.arange(length, dtype=np.float32) / rate
rng = np.random.default_rng(116)
audio = np.zeros((length, 2), dtype=np.float32)
speech = np.zeros(length, dtype=np.float32)
out = Path("public")

def bed(start, end, edge=2):
    return (np.clip((time-start)/edge, 0, 1) * np.clip((end-time)/edge, 0, 1)).astype("f4")

def noise(low, high, count):
    sos = signal.butter(3, [low, high], fs=rate, btype="bandpass", output="sos")
    layer = signal.sosfilt(sos, rng.normal(0, 1, count)).astype("f4")
    return layer / (np.std(layer) + 1e-7)

def place(start, samples, gain, pan=0):
    begin = int(start*rate)
    n = min(len(samples), length-begin)
    if n <= 0:
        return
    angle = (pan+1)*np.pi/4
    audio[begin:begin+n, 0] += samples[:n]*gain*np.cos(angle)
    audio[begin:begin+n, 1] += samples[:n]*gain*np.sin(angle)

def ring(at, fundamental, gain, pan=0, sustain=1.0, ceramic=False):
    t = np.arange(int(rate*sustain), dtype="f4") / rate
    partials = [(1,1),(2.65,.31),(4.31,.14)] if ceramic else [(1,1),(2.01,.13),(3.02,.07)]
    timbre = sum(a*np.sin(2*np.pi*fundamental*r*t)*np.exp(-t*(4+r)/sustain) for r,a in partials)
    env = (1-np.exp(-t*(800 if ceramic else 16)))
    place(at, timbre*env, gain, pan)

air = .006 + .010*bed(15, 56) + .006*bed(85,147)
rail = bed(0,25,3) + .72*bed(69,85,3) + .75*bed(147,163,5)
for side in range(2):
    audio[:,side] += noise(135,2400,length)*air
    audio[:,side] += noise(38,305,length)*rail*(.045+.044*np.sin(time*.53+.3)**2)
audio += (np.sin(2*np.pi*48.3*time+.17*np.sin(time*.93))*(rail*.033))[:,None]

# Uneven double wheel joints travel across the stereo field.
for a,b in [(2,25),(69.4,84),(147.5,160)]:
    for moment in np.arange(a,b,.91):
        for delta, gain in [(0,.043),(.152,.026)]:
            t=np.arange(int(rate*.12),dtype="f4")/rate
            place(moment+delta, noise(140,1600,len(t))*np.exp(-t*47), gain,
                  float(.56*np.sin(moment*.48)))

# One passing delivery van masks the first two spoon taps. At the reprise it has moved on.
for a,b,gain in [(29.0,37.4,.16),(84.6,89.7,.06)]:
    mask = bed(a,b,(b-a)*.42)
    for side in range(2):
        audio[:,side] += noise(140,1900,length)*mask*gain
    audio += (np.sin(2*np.pi*(78*time+.31*np.sin(time*.82)))*mask*gain*.30)[:,None]

# Same two strikes with identical pitch, timing and pan in both passes.
for start,gain in [(34.20,.082),(92.08,.082),(107.90,.105),(158.95,.052)]:
    ring(start, 1575, gain, .22, .43, True)
    ring(start+.38, 1835, gain*.84, .22, .53, True)

# A hinge and the settling latch, once beneath footsteps and once in relative quiet.
for t0,vol in [(48.1,.027),(125.4,.039),(142.1,.053)]:
    t=np.arange(int(rate*.7),dtype="f4")/rate
    place(t0, np.sin(2*np.pi*(391*t+124*t*t))*np.sin(np.pi*t/.7)**2, vol, -.25)
    ring(t0+.73,230,vol*.92,-.25,.22,True)
for moment in list(np.arange(43,52,.48))+list(np.arange(119,124.5,.55)):
    t=np.arange(int(rate*.16),dtype="f4")/rate
    place(moment, noise(55,780,len(t))*np.exp(-t*32),.042,.34*np.cos(moment))

# An original three-note figure, with long gaps left in the mix for the location sounds.
for t0,notes,amp in [(1.6,[146.83,220,329.63],.051),(19,[164.81,246.94],.034),
    (39,[130.81,196,293.66],.035),(55.8,[146.83,220,329.63],.052),
    (69,[123.47,185,277.18],.042),(83,[146.83,220],.027),
    (100,[174.61,261.63],.028),(115.6,[146.83,220,329.63],.041),
    (135.4,[164.81,246.94],.029),(148.3,[146.83,220],.035),(163,[146.83,220,293.66],.044)]:
    for i,pitch in enumerate(notes):
        ring(t0+i*.68,pitch,amp*(1-i*.12),(-.33 if i%2==0 else .32),5.4)

captions=[]
for idx,(start,text) in enumerate(score["lines"]):
    with wave.open(str(out/"voice"/f"{idx:02}.wav")) as wav:
        sr=wav.getframerate()
        raw=np.frombuffer(wav.readframes(wav.getnframes()),dtype="<i2").astype("f4")/32768
    waveform=signal.resample_poly(raw, rate//np.gcd(sr,rate), sr//np.gcd(sr,rate)).astype("f4")
    rms=np.sqrt(np.mean(waveform**2))
    waveform *= min(.165/max(rms,.001), .8/(max(np.abs(waveform))+.001))
    begin=int(start*rate)
    speech[begin:begin+len(waveform)] += waveform
    next_start=score["lines"][idx+1][0] if idx+1<len(score["lines"]) else score["duration"]
    captions.append({"start":start-.07,"end":min(next_start-.2,start+max(2.4,len(waveform)/rate+.65)),"text":text})

def encode(name, mix):
    tail=np.clip((score["duration"]-time)/2.5,0,1)
    mix = np.tanh(mix*1.28) * .94 * tail[:,None]
    subprocess.run(["ffmpeg","-v","error","-y","-f","f32le","-ar",str(rate),"-ac","2","-i","-",
        "-ar","48000","-c:a","aac","-b:a","160k","-movflags","+faststart",str(out/name)],
        input=mix.astype("<f4").tobytes(),check=True)

encode("ambience.m4a",audio)
duck=np.ones(length,dtype="f4")
for caption in captions:
    duck -= .28*bed(caption["start"]-.18,caption["end"]+.12,.18)
encode("mix.m4a",audio*duck[:,None]+speech[:,None]*.94)
Path("src/captions.json").write_text(json.dumps(captions,indent=2)+"\n")
def stamp(t):
    ms=round(t*1000);return f"{ms//3600000:02}:{ms//60000%60:02}:{ms//1000%60:02},{ms%1000:03}"
descriptions=[(1.1,4.6,"[Train wheels strike pairs of joints in the rails.]"),
    (33.2,36.3,"[Traffic rises. A faint double tap.]"),
    (70.5,73.2,"[Rail wheels, again.]"),(91.7,94.5,"[Two light taps, now clear.]"),
    (107.6,110.4,"[A spoon rings twice against a cup.]"),
    (142.3,144.6,"[A door hinge. A soft click.]"),(158.7,161,"[Two taps in the distance.]")]
cc=sorted([(c['start'],c['end'],c['text']) for c in captions]+descriptions)
(out/"captions.srt").write_text("\n\n".join(f"{i+1}\n{stamp(a)} --> {stamp(b)}\n{text}" for i,(a,b,text) in enumerate(cc))+"\n")
print("Wrote the English screening mix, ambience take and timed captions.")
