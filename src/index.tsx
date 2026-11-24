import React,{useLayoutEffect,useRef,useState} from 'react';
import {AbsoluteFill,Audio,Composition,continueRender,delayRender,cancelRender,registerRoot,staticFile,useCurrentFrame} from 'remotion';
import {names,paint,railIndex,type Plates} from './paint';
import score from './score.json';
import captions from './captions.json';

const images=new Map<string,Promise<HTMLImageElement>>();
function imageAt(url:string){
  let job=images.get(url);
  if(!job){
    job=new Promise<HTMLImageElement>((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>reject(new Error('Cannot load '+url));img.src=staticFile(url);});
    images.set(url,job);
    // Long Studio sessions only need the last few rail exposures. The eleven plates stay resident.
    if(images.size>34){
      const expired=[...images.keys()].find(key=>key.startsWith('rail-frames/'));if(expired)images.delete(expired);
    }
  }
  return job;
}
let assets:Promise<Plates>|undefined;
function loadAssets(){
  if(!assets)assets=(async()=>{
    await Promise.all(Object.entries({CitySerif:'serif',CitySerifItalic:'italic',CitySans:'sans',CityMono:'mono'})
      .map(async([name,file])=>{const face=new FontFace(name,'url('+staticFile('fonts/'+file+'.ttf')+')');document.fonts.add(await face.load());}));
    return Object.fromEntries(await Promise.all(names.map(async name=>[name,await imageAt('plates/'+name+'.png')]))) as Plates;
  })();
  return assets;
}
function Film(){
  const frame=useCurrentFrame(),canvas=useRef<HTMLCanvasElement>(null);
  const [ready]=useState(()=>delayRender('Prepare the first print'));
  const firstExposure=useRef(true);
  useLayoutEffect(()=>{
    let active=true;
    const wait=delayRender('Draw exposure '+frame);
    const t=Math.floor(frame/2)/12;
    const shot=score.shots.find(s=>s.start<=t&&s.end>t)!;
    const index=railIndex(shot,t-shot.start);
    Promise.all([loadAssets(),index===null?null:imageAt('rail-frames/'+String(index).padStart(3,'0')+'.jpg')])
      .then(([plates,rail])=>{
        if(active&&canvas.current){
          const ctx=canvas.current.getContext('2d')!;
          ctx.setTransform(2,0,0,2,0,0);ctx.imageSmoothingQuality='high';
          paint(ctx,t,shot,plates,rail,captions);
          if(firstExposure.current){continueRender(ready);firstExposure.current=false;}
        }
        continueRender(wait);
      }).catch(e=>cancelRender(e));
    return ()=>{active=false;};
  },[frame,ready]);
  return <AbsoluteFill style={{background:'#17292b'}}><canvas ref={canvas} width={1920} height={1080}/><Audio src={staticFile('mix.m4a')}/></AbsoluteFill>;
}
const Root=()=><Composition id="OneCity" component={Film} durationInFrames={score.duration*score.fps} fps={score.fps} width={1920} height={1080}/>;
registerRoot(Root);
