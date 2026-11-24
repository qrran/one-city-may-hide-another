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
function layoutArt(){
  if(mode!=='art')return;
  const w=stage.clientWidth,h=stage.clientHeight,ratio=(poster.naturalWidth||1672)/(poster.naturalHeight||941);
  const iw=Math.min(w,h*ratio),ih=iw/ratio,ox=(w-iw)/2,oy=(h-ih)/2;
  markers.forEach(marker=>{const [x,y]=stories[marker.dataset.cornerView].xy;positionMarker(marker,ox+iw*x,oy+ih*y);});
  document.querySelector('#corner-markers').classList.add('ready');
}
function layoutModel(points){
  if(mode!=='model')return;
  const w=stage.clientWidth,h=stage.clientHeight;
  markers.forEach(marker=>{const point=points[marker.dataset.cornerView];if(point)positionMarker(marker,point.x*w,point.y*h,point.visible);});
}
function openStory(marker){
  if(selected===marker&&!detail.hidden){closeStory();return;}
  const story=stories[marker.dataset.cornerView];selected=marker;
  markers.forEach(item=>item.setAttribute('aria-expanded',String(item===marker)));
  document.querySelector('#corner-detail-title').textContent=story.title;
  document.querySelector('#corner-detail-copy').textContent=story.copy;
  document.querySelector('#corner-detail-reflection').textContent=story.reflection;
  detail.hidden=false;
}
function closeStory({focus=false}={}){
  detail.hidden=true;markers.forEach(marker=>marker.setAttribute('aria-expanded','false'));
  if(focus)selected?.focus({preventScroll:true});selected=null;
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
    const {createCornerWorld}=await import('./assets/corner-engine.js?v=brooklyn-coffee-1');
    mode='model';canvas.hidden=false;
    world=createCornerWorld(canvas,layoutModel);poster.hidden=true;
    updateModes();hint.textContent='Drag to rotate · Scroll or pinch to zoom · Right-drag to pan · Home to reset.';
    closeStory();
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
