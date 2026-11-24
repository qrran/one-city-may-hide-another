import {build} from 'esbuild';
import {chromium} from 'playwright-core';
import {createServer} from 'node:http';
import {mkdir,writeFile} from 'node:fs/promises';
import {existsSync} from 'node:fs';
import {spawn} from 'node:child_process';
import {once} from 'node:events';
import path from 'node:path';

const action=process.argv[2]||'explore';
const result=await build({entryPoints:['src/rail-view.js'],bundle:true,minify:true,write:false,legalComments:'inline',target:'es2020'});
const title='One City May Hide Another';
const html=`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title} · Rail study</title>
<style>*{box-sizing:border-box}body{margin:0;overflow:hidden;background:#1a2829;color:#f5e9cd;font:16px system-ui,sans-serif}canvas{width:100vw;height:100vh;display:block;touch-action:pan-y}header,footer{position:fixed;left:0;right:0;padding:clamp(16px,3vw,42px);pointer-events:none}header{top:0;padding-bottom:75px;background:linear-gradient(#152121a6,transparent)}h1{font:normal clamp(28px,4.3vw,58px) Georgia,serif;margin:0}p{margin:8px 0 0}footer{bottom:0;background:linear-gradient(transparent,#142124e6);display:flex;gap:18px;align-items:center;flex-wrap:wrap}button,input{pointer-events:auto;accent-color:#c76048}button{font:inherit;color:#f6e9cc;border:1px solid #f6e9cc;background:#1b292a;padding:.45em 1.1em;cursor:pointer}input{width:min(380px,48vw)}output{font-variant-numeric:tabular-nums}#help{font-size:13px}#fallback{position:absolute;left:8%;top:45%;background:#1b292a;padding:20px}.bare header,.bare footer{display:none}</style>
<canvas tabindex="0" aria-label="A moving three-dimensional model of two New York trains. Use the left and right arrow keys to look around."></canvas><header><h1>${title}</h1><p>Brooklyn, seen from the other platform.</p></header><footer><button id="play">Pause</button><input id="time" type="range" aria-label="Rail sequence time" min="0" max="22" step=".01"><output>0.0 s</output><span id="help">Move the pointer or use the arrow keys to shift your view.</span></footer><p id="fallback" hidden>This scene requires WebGL 2. The MP4 edition contains the same railway shot.</p>
<script>${result.outputFiles[0].text.replaceAll('</script','<\\/script')}</script></html>`;
if(action==='bundle') {
  await mkdir('dist',{recursive:true});
  await writeFile('dist/NYC-Rail-Study.html',html);
  process.exit(0);
}
const server=createServer((_,res)=>{res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});res.end(html);});
await new Promise(r=>server.listen(action==='bake'?0:4173,'127.0.0.1',r));
const url='http://127.0.0.1:'+server.address().port;
if(action==='explore') console.log('Rail study available at '+url);
else if(action==='bake') {
  const binary=process.env.CHROME_BIN || ['/usr/bin/chromium','/usr/bin/google-chrome','/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(existsSync);
  const browser=await chromium.launch({executablePath:binary,headless:true,args:['--no-sandbox','--disable-dev-shm-usage','--use-angle=swiftshader','--enable-unsafe-swiftshader']});
  try {
    const page=await browser.newPage({viewport:{width:1440,height:810}});
    await page.goto(url+'/?bake');await page.waitForFunction(()=>window.railFrame||window.railError);
    const error=await page.evaluate(()=>window.railError);
    if(error)throw new Error(error);
    await mkdir('public',{recursive:true});await mkdir('out',{recursive:true});
    const output=path.resolve('public/rail.mp4');
    const ff=spawn('ffmpeg',['-v','error','-y','-f','image2pipe','-framerate','12','-vcodec','mjpeg','-i','pipe:0','-an','-c:v','libx264','-threads','2','-preset','fast','-crf','16','-pix_fmt','yuv420p','-movflags','+faststart',output],{stdio:['pipe','inherit','inherit']});
    const closed=once(ff,'close');
    for(let frame=0;frame<264;frame++) {
      const data=await page.evaluate(t=>window.railFrame(t),frame/12);
      const bytes=Buffer.from(data,'base64');
      if(frame===128)await writeFile('out/rail-still.jpg',bytes);
      if(!ff.stdin.write(bytes))await once(ff.stdin,'drain');
      if(frame%48===0)console.log('Rail set '+frame+' / 264');
    }
    ff.stdin.end();
    if((await closed)[0]!==0)throw new Error('Rail encoder failed');
    console.log('Rail shot baked to public/rail.mp4');
  } finally {await browser.close();server.close();}
} else {server.close();throw new Error('Use explore, bundle, or bake');}
