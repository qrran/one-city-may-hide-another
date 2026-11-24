const dialog = document.querySelector('#screening');
const movie = document.querySelector('#movie');
const filmStatus = document.querySelector('#film-status');
let startAt = 0;
let opener;

function positionMovie() {
  if (movie.readyState >= 1) movie.currentTime = startAt;
}

movie.addEventListener('loadedmetadata', positionMovie);
movie.addEventListener('error', () => {
  filmStatus.textContent = 'This browser could not play the video. The 1080p download is available below the player.';
  filmStatus.hidden = false;
});

for (const link of document.querySelectorAll('[data-film-time]')) {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || typeof dialog.showModal !== 'function') return;
    event.preventDefault();
    opener = link;
    startAt = Number(link.dataset.filmTime);
    filmStatus.hidden = true;
    dialog.showModal();
    document.body.classList.add('screen-open');
    document.querySelector('#close-screen').focus({preventScroll:true});
    positionMovie();
    movie.play().catch(() => {
      if (!dialog.open || movie.error) return;
      filmStatus.textContent = 'Press play in the video controls to begin.';
      filmStatus.hidden = false;
    });
  });
}
document.querySelector('#close-screen').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
dialog.addEventListener('close', () => {
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
function useRenderedRail() {
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
  footage.src = 'assets/rail-angles.mp4';
  footage.load();
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
