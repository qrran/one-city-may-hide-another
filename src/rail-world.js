import * as THREE from 'three';

// Each material is an ink in the same small palette as the street drawings.
const ink = {
  dark: '#18282b', edge: '#314348', patina: '#617573', paper: '#eee0c4',
  silver: '#aeb9ab', cream: '#dac8a9', red: '#aa4033', glow: '#efd59c',
};
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const temp = new THREE.Object3D();

function noise(seed) {
  let state = seed >>> 0;
  return () => ((state = (1664525 * state + 1013904223) >>> 0) / 4294967296);
}

// Batch several hundred posts, sleepers, window frames and rivets into a few draws.
function masonry(group) {
  const batches = new Map();
  return {
    block(color, x, y, z, w, h, d, angle = 0) {
      if (!batches.has(color)) batches.set(color, []);
      temp.position.set(x, y, z);
      temp.rotation.set(0, 0, angle);
      temp.scale.set(w, h, d);
      temp.updateMatrix();
      batches.get(color).push(temp.matrix.clone());
    },
    finish() {
      for (const [color, matrices] of batches) {
        const material = new THREE.MeshLambertMaterial({color});
        const mesh = new THREE.InstancedMesh(boxGeometry, material, matrices.length);
        matrices.forEach((matrix, index) => mesh.setMatrixAt(index, matrix));
        mesh.computeBoundingSphere();
        group.add(mesh);
      }
    },
  };
}

function cylinder(group, top, bottom, height, color, x, y, z, sides = 14) {
  const mesh = new THREE.Mesh(new THREE.CylinderGeometry(top, bottom, height, sides),
    new THREE.MeshLambertMaterial({color}));
  mesh.position.set(x, y, z);
  group.add(mesh);
  return mesh;
}

function lettering(group, words, x, y, z, width, height, light, dark) {
  const letters={A:[14,17,17,31,17,17,17],B:[30,17,17,30,17,17,30],
    C:[15,16,16,16,16,16,15],K:[17,18,20,24,20,18,17],
    L:[16,16,16,16,16,16,31],N:[17,25,25,21,19,19,17],
    O:[14,17,17,17,17,17,14],R:[30,17,17,30,20,18,17],
    Y:[17,17,10,4,4,4,4]};
  const parts=masonry(group),dot=Math.min(height/9,width/(words.length*6+2));
  parts.block(dark,x,y,z,width,height,.03);
  [...words].forEach((letter,i)=>letters[letter].forEach((row,j)=>{
    for(let k=0;k<5;k++)if(row&(1<<(4-k))){
      parts.block(light,x+(i*6+k-words.length*3+1)*dot,y+(3-j)*dot,z+.024,dot*.96,dot*.96,.015);
    }
  }));
  parts.finish();
}

function carriage(color, stripe, withSign) {
  const train = new THREE.Group();
  const parts = masonry(train);
  for (let car = -2; car <= 2; car++) {
    const cx = car * 13.05;
    const box = (c, x, y, z, w, h, d) => parts.block(c, x + cx, y, z, w, h, d);
    box(ink.edge, 0, 0.81, 0, 12.65, 0.42, 2.23);
    box(color, 0, 1.5, 0, 12.8, 1.05, 2.58);
    box(color, 0, 3.12, 0, 12.81, 0.47, 2.59);
    box(ink.silver, 0, 3.39, 0, 12.59, 0.16, 2.44);
    box(ink.edge, 0, 3.55, 0.04, 10.9, 0.15, 1.72);
    for (const x of [-6.15, 6.15]) box(color, x, 2.35, 0, .43, 1.12, 2.58);
    for (const x of [-4.4, 4.4]) {
      box(ink.dark, x, .57, 0, 2.75, .37, 2.03);
      for (const dx of [-.65, .65]) {
        const wheel = cylinder(train, .37, .37, 2.28, ink.dark, cx+x+dx, .42, 0);
        wheel.rotation.x = Math.PI / 2;
      }
    }
    for (const side of [-1,1]) {
      const z = side * 1.296;
      box(stripe, 0, 1.87, z, 12.67, .12, .06);
      for (let rib = 0; rib < 4; rib++) box(ink.patina, 0, 1.08+rib*.145, z, 12.62, .028, .04);
      for (let bay = 0; bay < 10; bay++) {
        const x = -5.72 + bay*1.27;
        box(ink.edge, x, 2.44, z, .126, .98, .095);
        box(ink.cream, x+.09, 2.44, z+.007*side, .06, .9, .095);
      }
      for (const x of [-3.18, 3.18]) {
        box(color, x, 2.05, z, .95, 1.97, .12);
        box(ink.dark, x, 2.55, z+side*.08, .73, .56, .025);
        box(ink.edge, x, 1.97, z+side*.105, .034, 1.75, .028);
      }
      box(ink.dark, 0, 2.03, z, 12.46, .052, .1);
    }
    for (let p=0;p<4;p++) {
      const x=[-5.1,-1.8,1.35,4.9][p];
      box(ink.patina, x,1.98,-.15,.64,.63,.53);
      const head=cylinder(train,.23,.27,.4,ink.edge,cx+x,2.46,-.14,10);
      head.rotation.z=.1*(p-1.5);
    }
    if (withSign && car===0) lettering(train,'LOCAL',cx,3.12,1.32,1.65,.32,ink.glow,ink.dark);
  }
  parts.finish();
  return train;
}

function neighborhood(scene) {
  const random = noise(116);
  const pieces = masonry(scene);
  const brick = ['#7f8175','#8a7968','#698180','#978773','#b4a189'];
  for (let row=0;row<3;row++) {
    let x = -118;
    while (x<112) {
      const w=3.1+random()*7.8, z=-13-row*15-random()*4;
      const h=4+random()*(row===0?6:12);
      const level=-3.4+h;
      const color=brick[Math.floor(random()*brick.length)];
      pieces.block(color,x,level/2-2,z,w,h,4.5);
      const roof=level/2-2+h/2;
      pieces.block(ink.patina,x,roof+.09,z,w+.22,.17,4.67);
      if (row===0) {
        for(let wx=x-w/2+.55;wx<x+w/2-.2;wx+=1.1) {
          for(let wy=roof-.7;wy>-1.3;wy-=1.25) {
            pieces.block(random()>.86?ink.cream:ink.edge,wx,wy,z+2.265,.42,.66,.028);
            pieces.block(color,wx,wy+.06,z+2.3,.44,.047,.031);
          }
        }
      } else {
        const lightWindow=row===1?'#899b92':'#acb1a0';
        for(let wx=x-w/2+.65;wx<x+w/2-.35;wx+=1.22){
          for(let wy=roof-.9;wy>-.6;wy-=1.6)pieces.block(lightWindow,wx,wy,z+2.28,.57,.64,.035);
        }
      }
      if (random()<.27) {
        for(const leg of [-.53,.53]) pieces.block(ink.edge,x+leg,roof+.55,z,.075,1.1,.11);
        cylinder(scene,.82,.76,1.6,ink.patina,x,roof+1.84,z);
        cylinder(scene,.03,1.01,.57,ink.edge,x,roof+2.91,z);
      }
      x+=w+1+random()*1.8;
    }
  }
  pieces.block('#87958b',0,-4.8,0,275,.22,110);
  for(let x=-65;x<75;x+=7.5){
    pieces.block(ink.cream,x,-4.65,7.9,2,.03,.12);
    pieces.block(ink.patina,x,-4.68,-.8,3.6,.032,3.4,-.05);
  }
  for(const z of [-4.8,1.5]) {
    pieces.block(ink.edge,0,-.35,z,180,.42,3.1);
    for(const offset of [-.94,.94]) pieces.block(ink.silver,0,.036,z+offset,180,.12,.12);
    for(let x=-88;x<89;x+=.66) pieces.block(ink.dark,x,-.078,z,.22,.15,2.68);
  }
  // Cross-braced steelwork. The foreground columns briefly divide the image like line breaks.
  for (let x=-65;x<70;x+=9) {
    for (const z of [-7.6,5.2]) {
      pieces.block(ink.edge,x,-2.25,z,.39,4,.48);
      pieces.block(ink.patina,x-.22,-2.25,z+.22,.09,3.8,.08);
    }
    pieces.block(ink.edge,x+4.5,-1.28,4.52,9.05,.32,.28);
    pieces.block(ink.edge,x+.02,-.62,-1.25,.42,.53,13.5);
    pieces.block(ink.patina,x+.02,-.42,-1.25,.54,.095,13.5);
    pieces.block(ink.edge,x+2.2,-1.85,4.52,5,.19,.17,-.36);
    pieces.block(ink.edge,x+6.8,-1.85,4.52,5,.19,.17,.36);
  }
  pieces.block(ink.dark,0,-.05,-8.4,143,.55,3.65);
  pieces.block(ink.cream,0,.265,-6.67,143,.08,.25);
  for (let x=-48;x<=45;x+=8) {
    pieces.block(ink.dark,x,2.46,-8.15,.13,4.66,.18);
    pieces.block(ink.edge,x+.38,4.73,-8.15,.88,.12,.16);
    pieces.block(ink.cream,x+.77,4.6,-8.15,.6,.14,.34);
    for(let k=0;k<6;k++) pieces.block(ink.edge,x+k*1.23,.91,-9.65,.057,1.39,.055);
  }
  pieces.block(ink.patina,0,1.58,-9.65,110,.09,.1);
  // Overhead power lines and the street-facing edge of the elevated line.
  for(let z=0;z<3;z++)pieces.block(ink.edge,0,7.7+z*.22,-11.5-z*.28,149,.036,.037);
  // Three platform figures, each assembled as a distinct silhouette.
  for (const [x,c] of [[-14,ink.red],[-5,ink.edge],[8,ink.dark],[17,ink.red]]) {
    pieces.block(c,x,1.2,-7.35,.44,1.06,.33,.04);
    cylinder(scene,.17,.17,.30,ink.edge,x,1.91,-7.35);
    for(const dx of [-.12,.12]) pieces.block(ink.dark,x+dx,.57,-7.35,.13,.54,.18);
  }
  lettering(scene,'BROOKLYN',-2.7,3.2,-8.02,4.5,.82,ink.paper,ink.dark);
  pieces.finish();
}

export function createRailSet(width,height) {
  const scene=new THREE.Scene();
  scene.background=new THREE.Color('#ecddc2');
  scene.fog=new THREE.FogExp2('#e2d6bb',.020);
  scene.add(new THREE.HemisphereLight('#fff1d1','#778987',2.1));
  const key=new THREE.DirectionalLight('#ffedcd',2.45);
  key.position.set(-8,15,7); scene.add(key);
  const camera=new THREE.PerspectiveCamera(31,width/height,.2,220);
  neighborhood(scene);
  const near=carriage(ink.silver,ink.edge,true),far=carriage('#a89c83',ink.red,false);
  near.userData.trainId=1;far.userData.trainId=2;
  near.position.z=1.5; far.position.z=-4.8;
  scene.add(far,near);
  const ease = x => { x=Math.min(1,Math.max(0,x)); return x*x*(3-2*x); };
  function position(seconds, look=0) {
    const p=Math.min(22,Math.max(0,seconds));
    near.position.x=-43 + 98*ease((p+.7)/17);
    far.position.x=34 - p*1.9;
    camera.position.set(13.7-.16*p+look*4.2,4.35+.04*p+look*.45,20.8-.11*p);
    camera.lookAt(-2.5+.03*p,2.13,-3.7+look*.8);
    camera.updateMatrixWorld();
  }
  return {scene,camera,near,far,position};
}

export function createRailWorld(canvas, width, height) {
  const renderer=new THREE.WebGLRenderer({canvas,antialias:true,preserveDrawingBuffer:true,powerPreference:'high-performance'});
  renderer.setPixelRatio(1);renderer.setSize(width,height,false);
  renderer.outputColorSpace=THREE.SRGBColorSpace;
  const {scene,camera,position}=createRailSet(width,height);
  function draw(seconds,look=0){position(seconds,look);renderer.render(scene,camera);}
  draw(0);
  return {draw, resize(w,h){renderer.setSize(w,h,false);camera.aspect=w/h;camera.updateProjectionMatrix();}, dispose(){renderer.dispose();}};
}
