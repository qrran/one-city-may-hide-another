import {createRailWorld} from './rail-world.js';

const canvas=document.querySelector('canvas');
const baked=new URLSearchParams(location.search).has('bake');
const slider=document.querySelector('#time');
const button=document.querySelector('#play');
const readout=document.querySelector('output');
let seconds=0, look=0, target=0, playing=!matchMedia('(prefers-reduced-motion: reduce)').matches;
if(baked) document.body.classList.add('bare');
try {
  const width=baked?1440:Math.min(1920,Math.round(innerWidth*devicePixelRatio));
  const height=baked?810:Math.round(width*innerHeight/innerWidth);
  const world=createRailWorld(canvas,width,height);
  window.railFrame=(time)=>{
    world.draw(time,0);
    return canvas.toDataURL('image/jpeg',.94).split(',')[1];
  };
  if(!baked) {
    let previous=0;
    const updateButton=()=>{button.textContent=playing?'Pause':'Play';};
    updateButton();
    button.onclick=()=>{playing=!playing;updateButton();};
    slider.oninput=()=>{playing=false;seconds=Number(slider.value);updateButton();};
    canvas.onpointermove=e=>{target=2*e.clientX/innerWidth-1;};
    canvas.onpointerleave=()=>{target=0;};
    canvas.onkeydown=e=>{
      if(e.key==='ArrowLeft'||e.key==='ArrowRight'){
        e.preventDefault();
        target=Math.max(-1,Math.min(1,target+(e.key==='ArrowLeft'?-.22:.22)));
      }
    };
    addEventListener('resize',()=>{
      const w=Math.min(1920,Math.round(innerWidth*devicePixelRatio));
      world.resize(w,Math.round(w*innerHeight/innerWidth));
    });
    const step=now=>{
      if(playing)seconds=(seconds+Math.min(.1,(now-(previous||now))/1000))%22;
      previous=now;look+=(target-look)*.065;
      slider.value=seconds; readout.textContent=seconds.toFixed(1)+' s';
      world.draw(seconds,look);requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
} catch(error) {
  document.querySelector('#fallback').hidden=false;
  window.railError=String(error);
}
