// Spotify's official player only. No extracted audio or account credentials.
const toggle=document.querySelector('#music-toggle');
const panel=document.querySelector('#music-panel');
const close=document.querySelector('#music-close');
const status=document.querySelector('#music-status');
const film=document.querySelector('#screening');
const track='spotify:track:6SitvaVffWFtfATmX3iRT8';
const embedUrl='https://open.spotify.com/embed/track/6SitvaVffWFtfATmX3iRT8';
let api,controller,loading=false,ready=false,playing=false,wantsPlay=false,resumeAfterFilm=false, fallback=false;

function fallbackPlayer(message='Press Play in the Spotify player to listen here.'){
  fallback=true;ready=false;controller=undefined;
  let host=document.querySelector('#spotify-player');if(!host){host=document.createElement('div');host.id='spotify-player';panel.insertBefore(host,status);}
  if(host.tagName==='IFRAME'){const container=document.createElement('div');container.id='spotify-player';host.replaceWith(container);host=container;}
  const iframe=document.createElement('iframe');iframe.src=embedUrl;iframe.title='Spotify: STUDY Café by Cafe Music BGM channel';iframe.width='100%';iframe.height='152';iframe.allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
  if(!panel.hidden&&!film.open)host.replaceChildren(iframe);status.textContent=message;
}
function ensurePlayer(){
  if(controller||loading||fallback)return;
  loading=true;
  window.onSpotifyIframeApiReady=IFrameAPI=>{
    api=IFrameAPI;
    if(fallback)return;
    try{api.createController(document.querySelector('#spotify-player'),{uri:track,width:'100%',height:152},c=>{
      controller=c;loading=false;
      c.addListener('ready',()=>{
        ready=true;status.textContent='Press Play if your browser does not start the music automatically.';
        if(wantsPlay&&!panel.hidden&&!film.open)c.play();
      });
      c.addListener('playback_update',event=>{
        if(!event.data)return;playing=!event.data.isPaused&&!event.data.isBuffering;
        toggle.querySelector('.sound-label').textContent=playing?'Music on':'Music';
        if(playing){status.textContent='STUDY Café · Cafe Music BGM channel';if(film.open||panel.hidden)c.pause();}
      });
      c.addListener('playback_started',()=>{playing=true;status.textContent='STUDY Café · Cafe Music BGM channel';if(film.open||panel.hidden)c.pause();});
    });}catch(error){loading=false;fallbackPlayer();}
  };
  const script=document.createElement('script');script.src='https://open.spotify.com/embed/iframe-api/v1';script.async=true;
  script.addEventListener('error',()=>{loading=false;fallbackPlayer('Press Play in the official player. If it cannot load, use Spotify below.');});
  document.body.append(script);
  setTimeout(()=>{if(!ready&&!fallback){loading=false;try{controller?.destroy();}catch{}if(!document.querySelector('#spotify-player')){const host=document.createElement('div');host.id='spotify-player';panel.insertBefore(host,status);}fallbackPlayer();}},10000);
}
function closePlayer(){wantsPlay=false;resumeAfterFilm=false;controller?.pause();playing=false;toggle.querySelector('.sound-label').textContent='Music';if(fallback)document.querySelector('#spotify-player')?.replaceChildren();panel.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open music player');}
function openPlayer(){panel.hidden=false;toggle.setAttribute('aria-expanded','true');toggle.setAttribute('aria-label','Close music player');wantsPlay=true;if(fallback){fallbackPlayer();return;}ensurePlayer();if(ready&&!film.open)controller.play();}
toggle.addEventListener('click',()=>{if(panel.hidden)openPlayer();else closePlayer();});
close.addEventListener('click',()=>{closePlayer();toggle.focus();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!panel.hidden&&!film.open){closePlayer();toggle.focus();}});
new MutationObserver(()=>{
  if(film.open){resumeAfterFilm=playing;if(controller)controller.pause();else if(fallback)document.querySelector('#spotify-player')?.replaceChildren();}
  else if(!panel.hidden){if(controller&&resumeAfterFilm)controller.resume();else if(fallback)fallbackPlayer();resumeAfterFilm=false;}
}).observe(film,{attributes:true,attributeFilter:['open']});
