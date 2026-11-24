const dialog = document.querySelector('#screening');
const movie = document.querySelector('#movie');
const filmStatus = document.querySelector('#film-status');
const filmPath = 'assets/one-city-web.mp4';
let opener;
let session = 0;
let storedMovie;
let rangeCapability;

async function localMedia(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error('Media download failed.');
  const bytes = await response.blob();
  return URL.createObjectURL(new Blob([bytes], {type:'video/mp4'}));
}

function fileCanSeek() {
  rangeCapability ??= fetch(filmPath, {method:'HEAD'})
    .then(response => /bytes/i.test(response.headers.get('Accept-Ranges') || ''))
    .catch(() => false);
  return rangeCapability;
}

function mediaEvent(element, name, timeout, action) {
  return new Promise((resolve, reject) => {
    const finish = ok => {
      clearTimeout(timer);
      element.removeEventListener(name, success);
      element.removeEventListener('error', failure);
      if (ok) resolve();
      else reject(new Error('Media did not become ready.'));
    };
    const success = () => finish(true);
    const failure = () => finish(false);
    const timer = setTimeout(failure, timeout);
    element.addEventListener(name, success, {once:true});
    element.addEventListener('error', failure, {once:true});
    try { action?.(); } catch { failure(); }
  });
}

async function selectSource(src, ticket) {
  if (ticket !== session) return false;
  const absolute = new URL(src, document.baseURI).href;
  if (movie.currentSrc !== absolute || movie.readyState < 1) {
    await mediaEvent(movie, 'loadedmetadata', 18000, () => {
      movie.src = absolute;
      movie.load();
    });
  }
  return ticket === session;
}

async function seekMovie(target, ticket) {
  if (ticket !== session) return false;
  if (Math.abs(movie.currentTime - target) <= .35) return true;
  await mediaEvent(movie, 'seeked', 3000, () => { movie.currentTime = target; });
  return ticket === session && Math.abs(movie.currentTime - target) <= .35;
}

async function openFilm(target, ticket) {
  const current = () => ticket === session && dialog.open;
  const status = message => {
    if (!current()) return;
    filmStatus.textContent = message;
    filmStatus.hidden = false;
  };
  const cached = () => {
    storedMovie ??= localMedia(filmPath).catch(error => { storedMovie = undefined; throw error; });
    return storedMovie;
  };
  try {
    if (target > 0) status('Opening the selected scene…');
    let src = filmPath;
    if (storedMovie || (target > 0 && !await fileCanSeek())) src = await cached();
    if (!current() || !await selectSource(src, ticket)) return;
    let positioned = false;
    try { positioned = await seekMovie(target, ticket); } catch { /* A server can advertise ranges without honoring a seek. */ }
    if (!current()) return;
    if (!positioned) {
      src = await cached();
      if (!await selectSource(src, ticket)) return;
      if (!await seekMovie(target, ticket)) throw new Error('Chapter unavailable.');
    }
    if (!current()) return;
    filmStatus.hidden = true;
    try { await movie.play(); }
    catch { status('Press play in the video controls to begin.'); }
  } catch {
    status('The video could not load. You can download the 1080p film below the player.');
  }
}

for (const link of document.querySelectorAll('[data-film-time]')) {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    opener = link;
    movie.pause();
    filmStatus.hidden = true;
    dialog.showModal();
    document.body.classList.add('screen-open');
    document.querySelector('#close-screen').focus({preventScroll:true});
    openFilm(Number(link.dataset.filmTime), ++session);
  });
}
document.querySelector('#close-screen').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
  session++;
  movie.pause();
  document.body.classList.remove('screen-open');
  opener?.focus({preventScroll:true});
});
movie.addEventListener('playing', () => { filmStatus.hidden = true; });

const stage = document.querySelector('#rail-stage');
const canvas = document.querySelector('#rail-canvas');
const footage = document.querySelector('#rail-footage');
const poster = document.querySelector('#rail-poster');
const filmedStage = document.querySelector('#rail-fallback');
const controls = document.querySelector('#rail-controls');
const playRail = document.querySelector('#rail-play');
const timeline = document.querySelector('#rail-time');
const lookRange = document.querySelector('#rail-look');
const readout = document.querySelector('#rail-clock');
const hint = document.querySelector('#rail-hint');
const duration = Number(timeline.max);
let seconds = Number(timeline.value);
let viewpoint = 0;
let playing = false;
let inView = false;
let initializing = false;
let usingFootage = false;
let world;
let animation = 0;
let previousTick = 0;
let drag;
const clamp = (x, lo, hi) => Math.max(lo, Math.min(hi, x));

function updateClock() {
  timeline.value = seconds;
  readout.textContent = seconds.toFixed(1) + ' / 22 s';
}
function drawRail() {
  if (world) world.draw(seconds, viewpoint);
}
function canRun() {
  return playing && inView && !document.hidden && !dialog.open;
}
function tick(time) {
  animation = 0;
  if (!canRun() || !world) return;
  if (previousTick) seconds = (seconds + Math.min(.14, (time - previousTick) / 1000)) % duration;
  previousTick = time;
  drawRail();
  updateClock();
  animation = requestAnimationFrame(tick);
}
function updatePlayback() {
  cancelAnimationFrame(animation);
  animation = 0;
  previousTick = 0;
  if (usingFootage) {
    if (canRun()) footage.play().catch(() => { if (canRun()) setPlaying(false); });
    else footage.pause();
  } else if (world && canRun()) {
    animation = requestAnimationFrame(tick);
  }
}
function setPlaying(value) {
  playing = value;
  playRail.setAttribute('aria-pressed', String(value));
  playRail.querySelector('span').textContent = value ? 'Pause trains' : 'Play trains';
  updatePlayback();
}
function resizeRail() {
  const {width, height} = stage.getBoundingClientRect();
  if (usingFootage) {
    footage.style.width = Math.ceil(Math.max(width, height * 960 / 432)) + 'px';
    return;
  }
  if (!world) return;
  const scale = Math.min(window.devicePixelRatio || 1, 1.5, 1500 / Math.max(1, width));
  world.resize(Math.max(1, Math.round(width*scale)), Math.max(1, Math.round(height*scale)));
  drawRail();
}
async function useRenderedRail() {
  if (usingFootage) return;
  usingFootage = true;
  world?.dispose();
  world = undefined;
  canvas.hidden = true;
  lookRange.step = '.5';
  changeView(viewpoint);
  resizeRail();
  hint.textContent = 'Five filmed viewpoints. Drag left or right, use the arrow keys, or move the Viewpoint slider.';
  footage.addEventListener('loadedmetadata', () => {
    footage.currentTime = seconds;
    filmedStage.hidden = false;
    poster.hidden = true;
    controls.hidden = false;
    updatePlayback();
  }, {once:true});
  footage.addEventListener('timeupdate', () => {
    if (playing && !footage.seeking) {
      seconds = footage.currentTime;
      updateClock();
    }
  });
  footage.addEventListener('error', () => {
    setPlaying(false);
    controls.hidden = true;
    filmedStage.hidden = true;
    document.querySelector('#look-control').hidden = true;
    poster.hidden = false;
    hint.textContent = 'The railway could not load. The elevated line also opens the full film.';
  });
  try {
    footage.src = await localMedia('assets/rail-angles.mp4');
    footage.load();
  } catch {
    hint.textContent = 'The railway video could not load. The elevated line also opens the full film.';
  }
}
async function initializeRail() {
  if (initializing) return;
  initializing = true;
  try {
    const {createRailWorld} = await import('./assets/rail-engine.js');
    world = createRailWorld(canvas, 640, 320);
    resizeRail();
    canvas.hidden = false;
    poster.hidden = true;
    controls.hidden = false;
    updatePlayback();
  } catch {
    useRenderedRail();
  }
}
canvas.addEventListener('webglcontextlost', event => {
  event.preventDefault();
  useRenderedRail();
});
playRail.addEventListener('click', () => setPlaying(!playing));
timeline.addEventListener('input', () => {
  setPlaying(false);
  seconds = Number(timeline.value);
  if (usingFootage && footage.readyState >= 1) footage.currentTime = seconds;
  drawRail();
  updateClock();
});
function changeView(value) {
  viewpoint = clamp(value, -1, 1);
  if (usingFootage) {
    const angleIndex = Math.round((viewpoint + 1) * 2);
    viewpoint = angleIndex / 2 - 1;
    // The five views share a single video clock. Center the selected frame in the clipped stage.
    footage.style.setProperty('--tile-center', (-10 - 20 * angleIndex) + '%');
    lookRange.setAttribute('aria-valuetext', ['Far left', 'Left', 'Center', 'Right', 'Far right'][angleIndex]);
  }
  lookRange.value = viewpoint;
  drawRail();
}
lookRange.addEventListener('input', () => changeView(Number(lookRange.value)));
for (const surface of [canvas, filmedStage]) {
  surface.addEventListener('keydown', event => {
    if (!['ArrowLeft', 'ArrowRight'].includes(event.key)) return;
    event.preventDefault();
    const step = usingFootage ? .5 : .15;
    changeView(viewpoint + (event.key === 'ArrowLeft' ? -step : step));
  });
  surface.addEventListener('pointerdown', event => {
    if (drag || event.button !== 0) return;
    drag = {id:event.pointerId, x:event.clientX, view:viewpoint};
    surface.setPointerCapture(event.pointerId);
  });
  surface.addEventListener('pointermove', event => {
    if (drag?.id !== event.pointerId) return;
    changeView(drag.view + (event.clientX - drag.x) * 3 / Math.max(1, stage.clientWidth));
  });
  const stopDrag = () => { drag = undefined; };
  surface.addEventListener('lostpointercapture', stopDrag);
  surface.addEventListener('pointercancel', stopDrag);
  surface.addEventListener('pointerup', stopDrag);
}

if ('ResizeObserver' in window) new ResizeObserver(resizeRail).observe(stage);
else window.addEventListener('resize', resizeRail);
if ('IntersectionObserver' in window) {
  new IntersectionObserver(([item]) => {
    inView = item.isIntersecting;
    if (inView) initializeRail();
    updatePlayback();
  }, {rootMargin:'60px'}).observe(stage);
} else {
  inView = true;
  initializeRail();
}
new MutationObserver(updatePlayback).observe(dialog, {attributes:true, attributeFilter:['open']});
document.addEventListener('visibilitychange', updatePlayback);
