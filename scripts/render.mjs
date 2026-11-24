import {createCanvas,GlobalFonts,loadImage} from '@napi-rs/canvas';
import {existsSync} from 'node:fs';
import {mkdir,readFile,writeFile} from 'node:fs/promises';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import path from 'node:path';
import {build} from 'esbuild';
import {pathToFileURL} from 'node:url';
import {prepareRailFrames} from './frames.mjs';

const args=process.argv.slice(2);
const stillArg=args.indexOf('--stills');
const prefixArg=args.indexOf('--duration');
const score=JSON.parse(await readFile('src/score.json','utf8'));
const lines=JSON.parse(await readFile('src/captions.json','utf8'));
const duration=prefixArg===-1?score.duration:Number(args[prefixArg+1]);
if(!(duration>0&&duration<=score.duration))throw new Error('Duration is outside the film');
await mkdir('.cache',{recursive:true});await mkdir('out/stills',{recursive:true});
await build({entryPoints:['src/paint.ts'],outfile:'.cache/paint.mjs',bundle:true,platform:'node',format:'esm'});
const {paint,railIndex,names}=await import(pathToFileURL(path.resolve('.cache/paint.mjs')));
for(const [alias,file] of Object.entries({CitySerif:'serif',CitySerifItalic:'italic',CitySans:'sans',CityMono:'mono'})){
  if(!GlobalFonts.registerFromPath('public/fonts/'+file+'.ttf',alias))throw new Error('Missing print face '+file);
}
prepareRailFrames();
const plates=Object.fromEntries(await Promise.all(names.map(async name=>[name,await loadImage('public/plates/'+name+'.png')])));
const w=1920,h=1080,canvas=createCanvas(w,h),ctx=canvas.getContext('2d');
ctx.scale(w/960,h/540);ctx.imageSmoothingQuality='high';
let prior=-1,railPicture=null;
async function draw(t){
  const shot=score.shots.find(s=>s.start<=t&&s.end>t);
  if(!shot)throw new Error('Unknown frame '+t);
  const index=railIndex(shot,t-shot.start);
  if(index!==null&&prior!==index){
    railPicture=await loadImage('public/rail-frames/'+String(index).padStart(3,'0')+'.jpg');prior=index;
  }
  paint(ctx,t,shot,plates,railPicture,lines);
}
if(stillArg!==-1) {
  for(const t of args[stillArg+1].split(',').map(Number)){
    await draw(t);await writeFile('out/stills/'+String(t).padStart(3,'0')+'.jpg',await canvas.encode('jpeg',88));
  }
}else{
  const filename=duration===score.duration?'out/One-City-May-Hide-Another.mp4':'out/Excerpt.mp4';
  for(const item of ['public/mix.m4a','public/ambience.m4a','public/captions.srt']){
    if(!existsSync(item))throw new Error('Missing audio preparation '+item);
  }
  const inputs=['-f','rawvideo','-pixel_format','rgba','-video_size',w+'x'+h,'-framerate','12','-i','pipe:0',
    '-i','public/mix.m4a','-i','public/ambience.m4a','-i','public/captions.srt'];
  const ff=spawn('ffmpeg',['-v','error','-y',...inputs,'-map','0:v','-map','1:a','-map','2:a','-map','3:s',
    '-t',String(duration),'-vf','fps=24,scale=out_color_matrix=bt709,format=yuv420p','-c:v','libx264',
    '-colorspace','bt709','-color_trc','bt709','-color_primaries','bt709','-threads','3','-preset','veryfast','-crf','19',
    '-c:a','copy','-c:s','mov_text','-disposition:a:0','default','-disposition:a:1','0','-disposition:s:0','0',
    '-metadata:s:a:0','language=eng','-metadata:s:a:0','handler_name=English narration and soundscape',
    '-metadata:s:a:1','language=zxx','-metadata:s:a:1','handler_name=Soundscape only',
    '-metadata:s:s:0','language=eng','-metadata:s:s:0','handler_name=English CC',
    '-metadata','title=One City May Hide Another','-movflags','+faststart',filename],{stdio:['pipe','inherit','inherit']});
  const closed=once(ff,'close');
  for(let i=0;i<duration*12;i++){
    await draw(i/12);
    if(!ff.stdin.write(canvas.data()))await once(ff.stdin,'drain');
    if(i%120===0)console.log('Printing seconds '+i/12+'–'+Math.min(duration,i/12+10));
  }
  ff.stdin.end();
  if((await closed)[0]!==0)throw new Error('The screening export failed.');
  console.log('Exported '+filename);
}
