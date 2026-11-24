const stage = document.querySelector('#corner-stage');
const canvas = document.querySelector('#corner-canvas');
const poster = document.querySelector('#corner-poster');
const hint = document.querySelector('#corner-hint');
const stories = [...document.querySelectorAll('[data-corner-view]')];
let world;

function fallback() {
  world?.dispose(); world=undefined;
  canvas.hidden=true; poster.hidden=false;
  stories.forEach(button=>{button.disabled=true;button.setAttribute('aria-pressed','false');});
  hint.textContent='Concept artwork shown. The rotatable scene requires a browser with WebGL 2.';
}

async function initialize() {
  try {
    const {createCornerWorld}=await import('./assets/corner-engine.js');
    canvas.hidden=false;
    world=createCornerWorld(canvas);
    poster.hidden=true;
    stories.forEach(button=>{button.disabled=false;});
  } catch(error) {console.warn('Street corner renderer unavailable:',error);fallback();}
}
const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){observer.disconnect();initialize();}},{rootMargin:'260px'});
observer.observe(stage);
canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();fallback();});
stories.forEach(button=>button.addEventListener('click',()=>{
  if(!world)return;
  world.lookAt(button.dataset.cornerView);
  stories.forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
  if(matchMedia('(max-width:950px)').matches)stage.scrollIntoView({block:'start',behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}));
canvas.addEventListener('pointerdown',()=>stories.forEach(button=>button.setAttribute('aria-pressed','false')));
canvas.addEventListener('keydown',()=>stories.forEach(button=>button.setAttribute('aria-pressed','false')));
