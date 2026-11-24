"""Bake the Three.js set without a display server. Requires moderngl and an EGL driver."""
import json
import subprocess
from pathlib import Path
import moderngl
import numpy as np

subprocess.run(["node", "scripts/rail-mesh.mjs"], check=True)
ctx = moderngl.create_standalone_context(backend="egl")
size = (1440, 810)
ctx.enable(moderngl.DEPTH_TEST | moderngl.CULL_FACE)
fbo = ctx.simple_framebuffer(size, components=3)
surface = ctx.simple_framebuffer(size, components=3, samples=min(4, ctx.max_samples))
program = ctx.program(vertex_shader="""
#version 330
in vec3 pos; in vec3 normal; in vec3 ink; in float branch;
uniform mat4 camera; uniform vec2 slide; uniform vec3 eye;
out vec3 lit;
void main(){
  vec3 p=pos+vec3(branch<.5?0.:(branch<1.5?slide.x:slide.y),0.,0.);
  float key=max(dot(normal,normalize(vec3(-.65,1.,.55))),0.);
  float shade=.73+.23*key+.08*normal.y;
  vec3 base=clamp(ink*shade+vec3(.012,.009,0.),0.,1.);
  float d=length(p-eye);
  float fog=1.-exp(-.00019*d*d);
  lit=mix(base,vec3(.905,.851,.741),fog);
  gl_Position=camera*vec4(p,1.);
}""", fragment_shader="""
#version 330
in vec3 lit; out vec4 pixel; void main(){pixel=vec4(lit,1.);}
""")
buffer = ctx.buffer(Path(".cache/rail-mesh.bin").read_bytes())
vao = ctx.vertex_array(program, [(buffer, "3f 3f 3f 1f", "pos", "normal", "ink", "branch")])
frames = json.loads(Path(".cache/rail-camera.json").read_text())
Path("public").mkdir(exist_ok=True)
encoder = subprocess.Popen(["ffmpeg", "-loglevel", "error", "-y", "-f", "rawvideo",
    "-pix_fmt", "rgb24", "-s", "1440x810", "-r", "12", "-i", "-", "-vf", "vflip",
    "-c:v", "libx264", "-threads", "2", "-preset", "fast", "-crf", "17",
    "-pix_fmt", "yuv420p", "-movflags", "+faststart", "public/rail.mp4"], stdin=subprocess.PIPE)
for index, frame in enumerate(frames):
    surface.use()
    surface.clear(.925,.875,.765,1.,depth=1.)
    program["camera"].write(np.asarray(frame["m"], dtype="f4").tobytes())
    program["eye"].value = tuple(frame["eye"])
    program["slide"].value = (frame["near"], frame["far"])
    vao.render()
    ctx.copy_framebuffer(fbo, surface)
    encoder.stdin.write(fbo.read(components=3, alignment=1))
    if index % 60 == 0:
        print(f"Projecting rail frame {index}/{len(frames)}", flush=True)
encoder.stdin.close()
if encoder.wait() != 0:
    raise RuntimeError("The rail encoder did not finish.")
