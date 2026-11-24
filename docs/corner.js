const stage=document.querySelector('#corner-stage');
const canvas=document.querySelector('#corner-canvas');
const poster=document.querySelector('#corner-poster');
const hint=document.querySelector('#corner-hint');
const markers=[...document.querySelectorAll('[data-corner-view]')];
const modes=[...document.querySelectorAll('[data-corner-mode]')];
const detail=document.querySelector('#corner-detail');
const close=document.querySelector('.detail-close');

// Image coordinates for the four actual figures in the finished illustration;
// the 3D edition uses each figure's projected position instead.
const stories={
  commuter:{xy:[.435,.675],title:'The commuter',copy:'For someone on the way home, this coffee shop is a brief pause between the train and the next obligation. The rain makes its warm light feel like an invitation to stop.',reflection:'A few minutes of rest can be another person’s whole evening.'},
  clerk:{xy:[.342,.589],title:'The barista',copy:'Behind the window, someone is still working. The coffee that marks the end of a commuter’s day is part of a barista’s shift: the same cups, the same counter, the next customer.',reflection:'One person’s pause is another person’s work.'},
  courier:{xy:[.718,.596],title:'The delivery rider',copy:'The wet street is not simply beautiful scenery. For the rider waiting for the next order, rain means a longer, colder journey. The city measures itself in distance and time.',reflection:'A familiar street has different distances for different people.'},
  passenger:{xy:[.779,.116],title:'The train passenger',copy:'From the elevated line, the coffee shop is a small rectangle of light passing a window. The passenger may never notice who is inside, or who has been standing in the rain.',reflection:'One glimpse of a place can hide all the lives within it.'},
};
let world, mode='art', initializing=false, selected=null;

function positionMarker(marker,x,y,visible=true){
  marker.hidden=!visible;
  marker.style.setProperty('--x',`${x}px`);marker.style.setProperty('--y',`${y}px`);
}
// Position the annotation in the free space around its circle. The other
// marker hit areas are obstacles, so readers can open stories in any order.
function positionDetail(){
  if(!selected||detail.hidden)return;
  const bounds=stage.getBoundingClientRect(),w=stage.clientWidth,h=stage.clientHeight;
  const pw=detail.offsetWidth,ph=detail.offsetHeight,pad=12,gap=14;
  const x=parseFloat(selected.style.getPropertyValue('--x')),y=parseFloat(selected.style.getPropertyValue('--y'));
  if(!Number.isFinite(x)||!Number.isFinite(y)||!pw||!ph)return;
  const rectOf=el=>{const r=el.getBoundingClientRect();return {x:r.left-bounds.left,y:r.top-bounds.top,w:r.width,h:r.height}};
  const active=rectOf(selected);
  const obstacles=markers.filter(marker=>marker!==selected&&!marker.hidden).map(marker=>({priority:180,...rectOf(marker)}));
  for(const selector of ['.corner-heading','.corner-bottom']){const el=stage.querySelector(selector);if(el)obstacles.push({priority:2,...rectOf(el)});}
  const overlap=(a,b)=>Math.max(0,Math.min(a.x+a.w,b.x+b.w+5)-Math.max(a.x,b.x-5))*Math.max(0,Math.min(a.y+a.h,b.y+b.h+5)-Math.max(a.y,b.y-5));
  const clamp=(n,min,max)=>Math.min(Math.max(n,min),Math.max(min,max));
  const proposals=[
    ['right',active.x+active.w+gap,y-ph/2],['left',x-pw-28,y-ph/2],
    ['above',x-pw/2,y-ph-28],['below',x-pw/2,y+28],
    ['right',active.x+active.w+gap,y-ph+22],['left',x-pw-28,y+12],
  ];
  for(const other of obstacles.filter(item=>item.priority===180)){
    proposals.push(['below',x-pw/2,other.y+other.h+gap],['above',x-pw/2,other.y-ph-gap]);
  }
  const choices=proposals.map(([side,rawX,rawY])=>{
    const box={x:clamp(rawX,pad,w-pw-pad),y:clamp(rawY,pad,h-ph-pad),w:pw,h:ph};
    const collision=obstacles.reduce((sum,other)=>sum+other.priority*overlap(box,other),0)+220*overlap(box,{x:x-21,y:y-21,w:42,h:42});
    const shift=Math.abs(rawX-box.x)+Math.abs(rawY-box.y);
    const distance=Math.hypot(Math.max(box.x-x,x-box.x-pw,0),Math.max(box.y-y,y-box.y-ph,0));
    return {side,box,score:collision+shift*4+distance*.6+(detail.dataset.placement===side?0:12)};
  }).sort((a,b)=>a.score-b.score);
  const best=choices[0];detail.dataset.placement=best.side;
  detail.style.left=`${best.box.x}px`;detail.style.top=`${best.box.y}px`;
  const offset=best.side==='left'||best.side==='right'?clamp(y-best.box.y,17,ph-17):clamp(x-best.box.x,17,pw-17);
  detail.style.setProperty('--tip-offset',`${offset}px`);
}
function layoutArt(){
  if(mode!=='art')return;
  const w=stage.clientWidth,h=stage.clientHeight,ratio=(poster.naturalWidth||1672)/(poster.naturalHeight||941);
  const iw=Math.min(w,h*ratio),ih=iw/ratio,ox=(w-iw)/2,oy=(h-ih)/2;
  markers.forEach(marker=>{const [x,y]=stories[marker.dataset.cornerView].xy;positionMarker(marker,ox+iw*x,oy+ih*y);});
  document.querySelector('#corner-markers').classList.add('ready');
  positionDetail();
}
function layoutModel(points){
  if(mode!=='model')return;
  const w=stage.clientWidth,h=stage.clientHeight;
  markers.forEach(marker=>{const point=points[marker.dataset.cornerView];if(point)positionMarker(marker,point.x*w,point.y*h,point.visible);});
  positionDetail();
}
function openStory(marker){
  if(selected===marker&&!detail.hidden){closeStory();return;}
  const story=stories[marker.dataset.cornerView];selected=marker;
  markers.forEach(item=>item.setAttribute('aria-expanded',String(item===marker)));
  document.querySelector('#corner-detail-title').textContent=story.title;
  document.querySelector('#corner-detail-copy').textContent=story.copy;
  document.querySelector('#corner-detail-reflection').textContent=story.reflection;
  detail.hidden=false;
  positionDetail();
  if(mode==='model')world?.lookAt(marker.dataset.cornerView);
}
function closeStory({focus=false,restore=true}={}){
  detail.hidden=true;markers.forEach(marker=>marker.setAttribute('aria-expanded','false'));
  if(focus)selected?.focus({preventScroll:true});selected=null;
  if(restore&&mode==='model')world?.lookAt('overview');
}
function updateModes(){modes.forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.cornerMode===mode)));}
function showArt(message='Choose a glowing circle to reveal a hidden life.'){
  mode='art';world?.dispose();world=undefined;
  canvas.hidden=true;poster.hidden=false;hint.textContent=message;
  updateModes();layoutArt();
}
async function showModel(){
  if(mode==='model'||initializing)return;
  initializing=true;const button=modes.find(item=>item.dataset.cornerMode==='model');button.disabled=true;
  hint.textContent='Preparing the rotatable model…';
  try{
    const {createCornerWorld}=await import('./assets/corner-engine.js?v=brooklyn-coffee-2');
    mode='model';canvas.hidden=false;
    world=createCornerWorld(canvas,layoutModel);poster.hidden=true;
    updateModes();hint.textContent='Drag to rotate · Scroll or pinch to zoom · Right-drag to pan · Home to reset.';
    closeStory({restore:false});
  }catch(error){console.warn('Street corner renderer unavailable:',error);showArt('3D rendering is unavailable in this browser. You can still explore every story here.');}
  finally{initializing=false;button.disabled=false;}
}
markers.forEach(marker=>marker.addEventListener('click',()=>openStory(marker)));
modes.forEach(button=>button.addEventListener('click',()=>{if(button.dataset.cornerMode==='model')showModel();else if(!initializing)showArt();}));
close.addEventListener('click',()=>closeStory({focus:true}));
stage.addEventListener('keydown',event=>{if(event.key==='Escape'&&!detail.hidden){event.preventDefault();closeStory({focus:true});}});
poster.addEventListener('load',layoutArt);
new ResizeObserver(layoutArt).observe(stage);
canvas.addEventListener('webglcontextlost',event=>{event.preventDefault();showArt('The 3D view was interrupted. You can still explore every story in the illustration.');});
layoutArt();
