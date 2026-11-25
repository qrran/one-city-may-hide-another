// The soundscape is synthesized locally, with no recordings, adverts, or
// network dependencies. A deliberate click is required before any audio plays.
const toggle=document.querySelector('#sound-toggle');
const label=toggle.querySelector('.sound-label');
const coffee=document.querySelector('#corner');
const poem=document.querySelector('#poem');
const screening=document.querySelector('#screening');
let context,master,cityGain,rainGain,enabled=false,scheduled=false;

function randomGenerator(seed){return ()=>{seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;};}
function makeCity(ctx){
  const seconds=16,rate=ctx.sampleRate,length=seconds*rate,buffer=ctx.createBuffer(2,length,rate);
  for(let ch=0;ch<2;ch++){
    const r=randomGenerator(7201+ch*127),data=buffer.getChannelData(ch);let soft=0,deep=0;
    for(let i=0;i<length;i++){
      const white=r()*2-1;soft=.98*soft+.02*white;deep=.999*deep+.001*white;
      const t=i/rate,envelope=.74+.08*Math.sin(Math.PI*2*t/8)+.08*Math.cos(Math.PI*2*t/4);
      data[i]=envelope*(.48*soft+.8*deep+.045*white)+.012*Math.sin(Math.PI*2*48*t)+.008*Math.sin(Math.PI*2*96*t);
    }
  }
  return buffer;
}
function makeRain(ctx){
  const seconds=16,rate=ctx.sampleRate,length=seconds*rate,buffer=ctx.createBuffer(2,length,rate);
  for(let ch=0;ch<2;ch++){
    const r=randomGenerator(32987+ch*712),data=buffer.getChannelData(ch);let soft=0;
    for(let i=0;i<length;i++){
      const white=r()*2-1;soft=.72*soft+.28*white;
      const t=i/rate,drizzle=.75+.09*Math.sin(Math.PI*2*t/8)+.05*Math.cos(Math.PI*2*t/4);
      data[i]=drizzle*(.17*white+.31*soft);
    }
    // Many tiny, irregular drops on pavement and awnings. Circular indexing
    // keeps their tails continuous across the loop boundary.
    for(let n=0;n<1800;n++){
      const start=Math.floor(r()*length),decay=.003+r()*.017,amp=.033+r()*.105,size=Math.floor(rate*decay*4);
      for(let i=0;i<size;i++)data[(start+i)%length]+=(r()*2-1)*amp*Math.exp(-i/(decay*rate));
    }
  }
  return buffer;
}
function makeLoop(buffer,target,filters=[]){
  const src=context.createBufferSource();src.buffer=buffer;src.loop=true;
  let node=src;for(const [type,frequency] of filters){const filter=context.createBiquadFilter();filter.type=type;filter.frequency.value=frequency;node.connect(filter);node=filter;}
  node.connect(target);src.start();return src;
}
function initialize(){
  const Audio=window.AudioContext||window.webkitAudioContext;if(!Audio)throw new Error('Audio unavailable');
  context=new Audio();master=context.createGain();master.gain.value=0;master.connect(context.destination);
  cityGain=context.createGain();rainGain=context.createGain();cityGain.gain.value=0;rainGain.gain.value=0;cityGain.connect(master);rainGain.connect(master);
  makeLoop(makeCity(context),cityGain,[['highpass',32],['lowpass',600]]);
  makeLoop(makeRain(context),rainGain,[['highpass',500],['lowpass',7200]]);
}
function setGain(node,value,time=.6){if(!context||!node)return;node.gain.cancelScheduledValues(context.currentTime);node.gain.setTargetAtTime(value,context.currentTime,time);}
function sync(){
  scheduled=false;if(!context)return;
  const centre=window.innerHeight*.53,c=coffee.getBoundingClientRect(),p=poem.getBoundingClientRect();
  const atCoffee=c.top<=centre&&c.bottom>=centre,afterCoffee=p.top<=centre;
  // No ambience over the film's carefully mixed narration and sound score.
  setGain(master,enabled && !screening.open && !document.hidden ? .45 : 0,.35);
  setGain(cityGain,0,.7);
  setGain(rainGain,atCoffee ? .30 : afterCoffee ? .16 : .18,.7);
}
function schedule(){if(!scheduled){scheduled=true;requestAnimationFrame(sync);}}
function updateButton(){toggle.setAttribute('aria-pressed',String(enabled));label.textContent=enabled?'Rain on':'Rain off';const title=enabled?'Turn rain sound off':'Turn rain sound on';toggle.setAttribute('aria-label',title);toggle.title=title;}
toggle.addEventListener('click',async()=>{
  toggle.disabled=true;
  try{if(!context)initialize();if(context.state!=='running')await context.resume();enabled=!enabled;updateButton();sync();}
  catch(error){enabled=false;updateButton();label.textContent='Rain unavailable';toggle.setAttribute('aria-label','Rain sound unavailable');console.warn('Rain sound unavailable',error);}
  finally{toggle.disabled=false;}
});
window.addEventListener('scroll',schedule,{passive:true});window.addEventListener('resize',schedule);document.addEventListener('visibilitychange',sync);
new MutationObserver(sync).observe(screening,{attributes:true,attributeFilter:['open']});
