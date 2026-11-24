import {existsSync,mkdirSync,statSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
export function prepareRailFrames(){
  if(!existsSync('public/rail.mp4'))throw new Error('Build the rail shot first with npm run bake:rail or python scripts/rail_gl.py.');
  if(existsSync('public/rail-frames/000.jpg')&&existsSync('public/rail-frames/263.jpg')&&
    statSync('public/rail-frames/000.jpg').mtimeMs>=statSync('public/rail.mp4').mtimeMs)return;
  mkdirSync('public/rail-frames',{recursive:true});
  const result=spawnSync('ffmpeg',['-v','error','-y','-i','public/rail.mp4','-q:v','3','-start_number','0',
    'public/rail-frames/%03d.jpg'],{stdio:'inherit'});
  if(result.status!==0)throw new Error('Could not unpack the railway frames');
}
if(process.argv[1]?.endsWith('/frames.mjs'))prepareRailFrames();
