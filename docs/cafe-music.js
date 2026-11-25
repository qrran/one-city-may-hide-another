// Official YouTube release, embedded with visible controls and attribution.
const toggle=document.querySelector('#music-toggle');
const panel=document.querySelector('#music-panel');
const sizeButton=document.querySelector('#music-size');
const status=document.querySelector('#music-status');
const host=document.querySelector('#youtube-player');
const film=document.querySelector('#screening');
const videoId='-Ovr9zyafzs';
const trackName='STUDY Café · Cafe Music BGM channel';
let frame,player,playerReady=false,playing=false,resumeAfterFilm=false,apiRequested=false,generation=0;

function updateLabel(){toggle.querySelector('.sound-label').textContent=playing?'Music on':'Music';}
function unmount(){
  generation++;playing=false;playerReady=false;updateLabel();
  try{player?.destroy();}catch{}
  player=undefined;frame=undefined;host.replaceChildren();
}
function bindPlayer(){
  if(!frame||player||!window.YT?.Player)return;
  const current=generation;
  try{player=new YT.Player(frame,{
    events:{
      onReady:event=>{
        if(current!==generation)return;playerReady=true;
        if(panel.hidden||film.open){event.target.pauseVideo();return;}
        event.target.setVolume(42);
        status.textContent='Press Play if the music does not start automatically.';
      },
      onStateChange:event=>{
        if(current!==generation)return;
        playing=event.data===YT.PlayerState.PLAYING;updateLabel();
        if(playing){status.textContent=trackName;if(film.open||panel.hidden)event.target.pauseVideo();}
      },
      onAutoplayBlocked:()=>{if(current===generation)status.textContent='Press Play on the YouTube player to start listening.';},
      onError:()=>{if(current===generation){playing=false;updateLabel();status.textContent='YouTube cannot play the song in this browser. Use the official video link below.';}}
    }
  });}catch{status.textContent='Press Play in the official YouTube player.';}
}
function loadApi(){
  if(window.YT?.Player){bindPlayer();return;}
  if(apiRequested)return;apiRequested=true;
  window.onYouTubeIframeAPIReady=bindPlayer;
  const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.async=true;
  script.addEventListener('error',()=>{apiRequested=false;status.textContent='Use the embedded player’s Play button.';});
  document.body.append(script);
}
function mount(autoplay=true){
  if(frame||panel.hidden||film.open)return;
  generation++;
  frame=document.createElement('iframe');
  const url=new URL(`https://www.youtube-nocookie.com/embed/${videoId}`);
  for(const [key,value] of Object.entries({autoplay:autoplay?'1':'0',enablejsapi:'1',playsinline:'1',origin:location.origin,loop:'1',playlist:videoId,rel:'0'}))url.searchParams.set(key,value);
  frame.src=url.href;frame.title='STUDY Café by Cafe Music BGM channel — YouTube';
  frame.allow='autoplay; encrypted-media; picture-in-picture; fullscreen';frame.allowFullscreen=true;
  frame.referrerPolicy='strict-origin-when-cross-origin';
  host.replaceChildren(frame);status.textContent=trackName;
  loadApi();
}
function setCompact(compact){
  panel.classList.toggle('is-compact',compact);
  const action=compact?'Expand music player':'Minimize music player';
  sizeButton.textContent=compact?'＋':'−';sizeButton.title=action;sizeButton.setAttribute('aria-label',action);sizeButton.setAttribute('aria-expanded',String(!compact));
}
function closePlayer(){resumeAfterFilm=false;unmount();panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open music player');toggle.title='Play STUDY Café';}
function openPlayer(){setCompact(true);panel.hidden=false;toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Stop music playback');toggle.title='Stop music playback';mount(true);}
toggle.addEventListener('click',()=>panel.hidden?openPlayer():closePlayer());
sizeButton.addEventListener('click',()=>setCompact(!panel.classList.contains('is-compact')));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&!panel.hidden&&!film.open&&!panel.classList.contains('is-compact'))setCompact(true);});
new MutationObserver(()=>{
  if(film.open){resumeAfterFilm=playing;if(playerReady)player.pauseVideo();else unmount();}
  else if(!panel.hidden){if(playerReady&&resumeAfterFilm)player.playVideo();else if(!frame)mount(false);resumeAfterFilm=false;}
}).observe(film,{attributes:true,attributeFilter:['open']});
