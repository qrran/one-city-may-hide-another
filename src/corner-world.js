import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// A small, entirely modeled street. Its four inhabitants share one continuous
// space rather than appearing in separate illustrations or camera cuts.
const palette = {
  edge: '#25283a', asphalt: '#30394f', curb: '#747484', paving: '#77717f',
  concrete: '#b7a5a2', tile: '#807888', roof: '#50516b', trim: '#f1d5b8',
  glass: '#8facb8', teal: '#48b7a7', red: '#e06c69', cream: '#f8d2a5',
  warm: '#ffc78a', gold: '#e9b271', steel: '#555c77', blue: '#547ead',
};

export function createCornerWorld(canvas) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#151a32');
  const renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:false, powerPreference:'high-performance'});
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.65));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.36;
  const camera = new THREE.PerspectiveCamera(34, 1, .1, 120);
  camera.position.set(24, 21, 26);
  const controls = new OrbitControls(camera, canvas);
  controls.target.set(0, 1.7, 0);
  controls.enableDamping = true;
  controls.dampingFactor = .085;
  controls.minDistance = 14;
  controls.maxDistance = 55;
  controls.minPolarAngle = .24;
  controls.maxPolarAngle = Math.PI / 2.13;
  controls.enablePan = true;
  controls.panSpeed = .48;
  controls.rotateSpeed = .75;
  controls.zoomSpeed = .8;
  controls.update();

  scene.add(new THREE.HemisphereLight('#d6dbff','#475067',2.3));
  const key = new THREE.DirectionalLight('#fdd8cf',2.4); key.position.set(-9,16,9); scene.add(key);
  const fill = new THREE.DirectionalLight('#7a9ce4',1.3); fill.position.set(8,6,-10); scene.add(fill);
  const groundGlow = new THREE.PointLight('#ffd2a1', 22, 10, 2); groundGlow.position.set(-1.6,2.35,3); scene.add(groundGlow);
  const alleyGlow = new THREE.PointLight('#5bbbd0', 13, 8, 2); alleyGlow.position.set(5.7,2,-4); scene.add(alleyGlow);
  const streetGlow = new THREE.PointLight('#ffbc85', 15, 10, 2); streetGlow.position.set(-5.7,4.6,5.2); scene.add(streetGlow);

  const boxGeo = new THREE.BoxGeometry(1,1,1);
  const materialCache = new Map(), batches = new Map(), dummy = new THREE.Object3D();
  let seed = 2719;
  function random() {seed = (1664525*seed + 1013904223) >>> 0; return seed / 4294967296;}
  const range = (a,b) => a+(b-a)*random();
  function mat(color, glow = 0) {
    const k = color+'|'+glow;
    if (!materialCache.has(k)) materialCache.set(k,new THREE.MeshStandardMaterial({color,roughness:.78,metalness:.07,emissive:color,emissiveIntensity:glow,flatShading:true}));
    return materialCache.get(k);
  }
  function box(c,x,y,z,w,h,d,ry=0,glow=0) {
    const material = mat(c,glow);
    if (!batches.has(material)) batches.set(material,[]);
    dummy.position.set(x,y,z); dummy.rotation.set(0,ry,0); dummy.scale.set(w,h,d); dummy.updateMatrix();
    batches.get(material).push(dummy.matrix.clone());
  }
  function mesh(geom, material, x,y,z) {
    const m=new THREE.Mesh(geom,material); m.position.set(x,y,z); scene.add(m); return m;
  }
  function cylinder(c,x,y,z,r,h,r2=r,glow=0) {return mesh(new THREE.CylinderGeometry(r2,r,h,12),mat(c,glow),x,y,z);}
  function sphere(c,x,y,z,r,scale=[1,1,1]) {let m=mesh(new THREE.SphereGeometry(r,12,8),mat(c),x,y,z); m.scale.set(...scale); return m;}
  function line(c,a,b,r=.035,glow=0) {
    const p=new THREE.Vector3(...a),q=new THREE.Vector3(...b),v=q.clone().sub(p);
    const m=mesh(new THREE.CylinderGeometry(r,r,v.length(),8),mat(c,glow),...p.clone().add(q).multiplyScalar(.5).toArray());
    m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize()); return m;
  }
  function wire(c,points,r=.022) {
    const curve=new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p)));
    mesh(new THREE.TubeGeometry(curve,20,r,6,false),mat(c),0,0,0);
  }
  function panel(c,x,y,z,w,h,side=false,glow=0) {box(c,x,y,z,side?.035:w,h,side?w:.035,0,glow);}
  function glass(x,y,z,w,h,side=false) {
    const m=mesh(new THREE.BoxGeometry(side?.045:w,h,side?w:.045),new THREE.MeshPhysicalMaterial({color:'#a7c9df',transparent:true,opacity:.15,roughness:.08,metalness:.15,depthWrite:false}),x,y,z);
    m.renderOrder=3;
  }
  function sign(text, x,y,z,w,h, bg,fg) {
    const c=document.createElement('canvas'); c.width=512; c.height=128;
    const ctx=c.getContext('2d'); ctx.fillStyle=bg; ctx.fillRect(0,0,512,128);
    ctx.fillStyle=fg; ctx.font='bold 48px system-ui, sans-serif'; ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,67,486);
    const texture=new THREE.CanvasTexture(c); texture.colorSpace=THREE.SRGBColorSpace;
    mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture}),x,y,z);
  }

  // The complete square plinth, with a corner road and an inset raised sidewalk.
  box('#202532',0,-.65,0,17.5,1,17.5);
  box('#464353',0,-.18,0,17.5,.15,17.5);
  box(palette.asphalt,0,-.055,0,17.3,.16,17.3);
  box(palette.curb,-1.7,.11,-1.2,13.8,.24,12.7);
  box(palette.paving,-1.75,.235,-1.2,13.65,.05,12.52);
  // Mark pavement slabs and contrasting tactile strips at the crossing.
  for(let x=-8.3;x<5.1;x+=.77) box('#5e586b',x,.266,4.72,.018,.008,.81);
  for(let z=-7.2;z<5;z+=.77) box('#5e586b',4.77,.266,z,.84,.008,.018);
  box('#b8945d',3.9,.275,4.68,1.62,.025,.43);
  for(let i=0;i<10;i++)box('#d7b870',3.18+i*.16,.294,4.68,.045,.013,.31);
  for(let x=2.9;x<8.2;x+=.76) box('#d6c8c9',x,.037,6.15,.48,.015,1.65);
  for(let z=-3;z<3;z+=2.45)box('#9ba5b7',7.22,.035,z,.09,.015,1.22);
  for(let z=5.55;z<8;z+=2.5)box('#a69b9d',-5.6,.035,z,.075,.015,1.28);
  box('#bcb3b1',-7.37,.035,6.64,.07,.02,2.26);box('#bcb3b1',-4.02,.035,6.64,.07,.02,2.26);
  for(const x of [-6.8,-4.6])box('#b8b4bb',x,.12,5.5,1.15,.22,.28);
  // Narrow drainage grates beside the curb.
  for(let z=-5.5;z<4.7;z+=1.15) {box('#33364b',5.27,.03,z,.23,.04,.43);for(let k=-2;k<=2;k++)box('#828797',5.27,.053,z+k*.075,.23,.008,.015);}

  // Wet pavement: dark, irregular puddles and low, broken ribbons of reflected light.
  const puddles = [[-3.0,6.4,1.5,.52],[2.1,7.1,1.3,.67],[6.3,3.7,.63,1.1],[6.7,-1.3,.75,1.38],[-5.3,3.6,1.5,.35],[3.6,-2.4,.42,1.35],[.4,4,1.12,.4]];
  for(const [x,z,sx,sz] of puddles) {
    let m=mesh(new THREE.CircleGeometry(1,36),new THREE.MeshStandardMaterial({color:'#39445e',metalness:.5,roughness:.19}),x,.055+(z<5&&x<5?.22:0),z);m.rotation.x=-Math.PI/2;m.scale.set(sx,sz,1);
    for(let k=0;k<9;k++) {
      const c=['#d78d83','#ba92bb','#5c9fbe','#c0a38a'][Math.floor(random()*4)];
      box(c,x+range(-sx*.67,sx*.67),m.position.y+.007,z+range(-sz*.75,sz*.75),range(.035,.16),.008,range(.1,sz*.6),0,.22);
    }
  }

  // Store: real transparent glazing, illuminated shelves, counter, side wall and roof.
  const sx=-1.7, sz=-.9, w=7.7, d=6, front=sz+d/2, right=sx+w/2;
  box('#877b82',sx,.33,sz,w+.17,.22,d+.2);
  box('#dfc5a4',sx,.48,sz,w,.1,d);
  box(palette.concrete,sx,1.89,sz-d/2,w,2.85,.2);
  box(palette.tile,sx-w/2,1.89,sz,.18,2.85,d);
  box(palette.tile,right,1.89,sz-1.25,.18,2.85,3.5);
  // Window frames; the warm interior stays visible from two directions.
  for(let x=sx-w/2+.15;x<sx+w/2;x+=1.27) box('#514d5c',x,1.88,front,.095,2.68,.13);
  box('#514d5c',sx,3.22,front,w,.15,.16);
  box('#514d5c',sx,.6,front,w,.13,.16);
  box('#64838a',sx,1.57,front+.025,w,.063,.07);
  glass(sx,1.9,front-.035,w-.12,2.55);
  for(let z=sz+.45;z<=front;z+=.8)box('#514d5c',right,1.89,z,.13,2.7,.09);
  box('#514d5c',right,3.22,sz+1.5,.15,.15,3.05);box('#514d5c',right,.6,sz+1.5,.15,.13,3.05);
  glass(right-.025,1.91,sz+1.52,2.9,2.55,true);
  // Sliding doors and handles, recessed into the center bay.
  for(const x of [sx-.72,sx+.72]) {
    box('#4c5361',x,1.88,front+.07,.055,2.5,.11);box('#9fa9ad',x,1.49,front+.135,.17,.045,.12);
  }
  for(const x of [sx-1.1,sx+1.1]) box('#716d73',x,1.88,front+.08,.08,2.6,.1);
  box('#424f54',sx,.28,front+.5,2.4,.045,.75);
  for(let x=sx-1;x<sx+1;x+=.13)box('#5e6562',x,.307,front+.5,.025,.013,.66);
  // Interior fluorescent strips and shelves stocked with individually colored objects.
  for(const z of [-3.3,-1.4,.2])box('#fff2c6',sx,3.06,z,6.7,.055,.08,0,1.8);
  const products=['#d98a67','#b7d7bd','#c65559','#b6a2d6','#f3d397','#6fa1c4','#dcd7bf'];
  function shelf(x,z,ww,levels=4) {
    box('#b9aea3',x,1.29,z,ww,1.6,.48);
    for(let l=0;l<levels;l++) {
      const y=.58+l*.4; box('#e3c9ac',x,y,z+.15,ww+.06,.055,.79);
      for(let px=x-ww/2+.11;px<x+ww/2-.05;px+=.24) {
        const ht=range(.19,.29), cc=products[Math.floor(random()*products.length)];
        box(cc,px,y+.045+ht/2,z+.47,.16,ht,.16);
        box('#f8e4c6',px,y+.07,z+.558,.115,.055,.01);
      }
    }
  }
  shelf(sx,-3.6,6.8);shelf(sx-.2,-1.2,3.4,3);shelf(sx+.3,.05,3.4,3);
  // Counter and register visible at the front left side.
  box('#945d5d',sx-2.75,1.08,.94,1.65,1.15,1.15);box('#edd0a7',sx-2.75,1.68,.94,1.78,.13,1.3);
  box('#343747',sx-3.02,1.91,1.02,.47,.38,.4);panel('#80b2a7',sx-3.02,1.97,1.23,.37,.2,false,.3);
  // Eaves, animated-looking striped sign, rooftop slab and seams.
  box(palette.roof,sx,3.51,sz,w+.36,.42,d+.36);
  box('#35374e',sx,3.75,sz,w+.4,.12,d+.4);
  box('#ded0bd',sx,3.35,front+.17,w+.34,.45,.35,0,.13);
  box('#eadcc0',right+.17,3.35,sz,.35,.45,d+.28,0,.1);
  for (const [color,y] of [[palette.red,3.47],[palette.cream,3.35],[palette.teal,3.23]]) {
    box(color,sx,y,front+.36,w+.4,.105,.09,0,.28);box(color,right+.36,y,sz,.09,.105,d+.38,0,.28);
  }
  box('#fbddac',sx,3.88,front+.25,3.2,.62,.23,0,.55);sign('コンビニ · 24H',sx,3.88,front+.38,3.05,.54,'#f7e0ae','#354c51');
  for(let x=sx-w/2+.4;x<sx+w/2;x+=.55)box('#68667d',x,3.818,sz,.016,.014,d-.17);
  for(let z=sz-d/2+.45;z<sz+d/2;z+=.58)box('#68667d',sx,3.82,z,w-.2,.014,.016);
  box('#858b9f',sx-2.1,4.02,sz-1.65,1.55,.43,.98);box('#4d5670',sx-2.1,4.02,sz-1.14,1.25,.32,.035);
  for(let i=0;i<10;i++)box('#9b9fb0',sx-2.65+i*.12,4.02,sz-1.112,.035,.32,.024);
  box('#6c6f84',sx+.45,4.04,sz-.9,1.4,.46,1.1);box('#858b9b',sx+.45,4.3,sz-.9,1.46,.09,1.16);
  // Roof parapet and a small wall-mounted air-conditioning unit.
  box('#75758a',sx,3.94,sz-d/2,w+.4,.24,.17);box('#75758a',sx-w/2,3.94,sz,.17,.24,d+.35);
  box('#a5a4b7',right+.16,2.55,sz-1.8,.35,.58,.92);for(let i=0;i<7;i++)box('#606579',right+.35,2.33+i*.07,sz-1.8,.03,.025,.75);
  // Vending machine, recycling bins, posters and umbrella rack.
  const vx=sx-4.1, vz=front+.12;
  box('#5689ad',vx,1.15,vz,.96,1.75,.74);box('#2d435a',vx,1.38,vz+.39,.72,1.08,.03);
  for(let r=0;r<4;r++)for(let col=0;col<4;col++)box(products[(r+col*2)%products.length],vx-.27+col*.18,1.77-r*.23,vz+.42,.12,.17,.035,0,.35);
  panel('#cdd5dd',vx,.66,vz+.4,.7,.19,false,.18);panel('#283449',vx,.62,vz+.434,.4,.075);
  for(let i=0;i<3;i++) {const z=front-.22-i*.63;box('#a6a3aa',right+.49,.72,z,.65,.9,.53);box(['#568fa1','#b78075','#567d78'][i],right+.49,1.2,z,.68,.12,.55);box('#292f40',right+.49,1.27,z,.36,.015,.23);}
  panel('#463946',right+.125,1.95,sz-1.45,1.39,.92,true);
  for(let j=0;j<2;j++)for(let i=0;i<3;i++)panel(['#dbc8af','#a5b6bd','#d1a69e'][(i+j)%3],right+.15,2.15-j*.43,sz-1.9+i*.45,.35,.33,true);
  const ux=sx+1.55,uz=front+.53;
  for(const dx of [-.24,.24])for(const dz of [-.2,.2])line('#616c83',[ux+dx,.29,uz+dz],[ux+dx,1.15,uz+dz],.04);
  for(const dy of [.35,1.14]) {line('#777c8f',[ux-.24,dy,uz-.2],[ux+.24,dy,uz-.2]);line('#777c8f',[ux-.24,dy,uz+.2],[ux+.24,dy,uz+.2]);}
  for(let i=0;i<4;i++){const x=ux-.18+i*.12;line('#8c9db4',[x,.35,uz],[x+.12,1.39,uz],.035);wire('#394257',[[x+.12,1.39,uz],[x+.12,1.52,uz],[x+.22,1.55,uz],[x+.23,1.45,uz]],.025);}

  // Railway beyond the store; a train reveals the second layer of the street.
  const rz=-6.32, trackY=4.55;
  for(const x of [-6.4,-1.4,3.7,7.3]) {
    box('#4c526b',x,2.12,rz,.36,4.2,.46);box('#6c7186',x,4.11,rz,.78,.27,.75);
    line('#51566c',[x-.73,3.2,rz],[x+.05,4.1,rz],.09);
  }
  box('#485168',0,4.33,rz,16.6,.55,2.12);box('#777788',0,4.56,rz,16.65,.12,2.14);
  for(let x=-8;x<8.1;x+=.46)box('#42485e',x,4.66,rz,.17,.10,1.68);
  for(const z of [rz-.55,rz+.55])box('#9fa4ac',0,4.75,z,16.6,.1,.098);
  for(let x=-8.2;x<8.2;x+=.82){box('#676a82',x,4.97,rz+1.01,.065,.66,.08);box('#848897',x,5.3,rz+1.02,.82,.065,.065);}
  // Two local train cars and the seated passenger in the closest window.
  for(const [cx,len] of [[-4.1,6.8],[3.1,6.8]]) {
    box('#b2b4c3',cx,5.43,rz,len,1.52,1.62);
    box('#737b91',cx,6.25,rz,len-.18,.22,1.52);box('#3a516d',cx,4.92,rz,len,.13,1.67);
    box('#65aaa8',cx,5.13,rz+.835,len,.19,.055,0,.1);
    for(let k=0;k<6;k++){
      const x=cx-len/2+.57+k*1.12;
      panel('#363b52',x,5.62,rz+.825,.86,.57);panel('#e7c18d',x,5.62,rz+.848,.73,.44,false,.85);
      panel('#697c91',x,5.62,rz-.825,.81,.53);box('#858ca0',x,5.62,rz+.875,.035,.52,.025);
      if(k%2===1){sphere('#555264',x+.18,5.72,rz+.866,.105,[1,1.05,.36]);box('#555264',x+.18,5.49,rz+.875,.17,.19,.025);}
    }
    for(const x of [cx-len/2+.13,cx+len/2-.13])box('#8c95a9',x,5.45,rz,.15,1.39,1.59);
  }
  panel('#e4dfe0',6.51,5.64,rz,.65,.5,true,.4);cylinder('#ef706c',6.53,5.16,rz+.48,.1,.06,.1,.8).rotation.z=Math.PI/2;
  // Back row of apartment blocks with small lit windows, all inside the plinth.
  for(const [x,z,bw,bh] of [[-6.5,-7.91,2.5,6.6],[-2.95,-7.9,3,5.15],[1.05,-7.92,3.15,7.6],[4.4,-7.91,2.5,6.4]]) {
    box('#41445c',x,bh/2,z,bw,bh,1.35);box('#616079',x,bh+.11,z,bw+.12,.22,1.42);
    for(let xx=x-bw/2+.35;xx<x+bw/2-.13;xx+=.65)for(let yy=.85;yy<bh-.3;yy+=.83){const lit=random()>.52;panel(lit?'#e7bf93':'#303a52',xx,yy,z+.69,.36,.48,false,lit?.45:0);}
  }

  // Street fixtures, electrical wires, lamp and guard rails.
  function utilityPole(x,z,h) {
    cylinder('#555870',x,h/2,z,.16,h,.1);cylinder('#31384b',x,.72,z,.2,1.4,.18);
    for(let i=0;i<5;i++)box('#d0a165',x,.42+i*.22,z+.19,.16,.13,.04);
    box('#55566a',x,h-.25,z,1.25,.16,.15);box('#72758a',x+.22,h-1.05,z,.55,.7,.42);
    for(const dx of [-.5,.5])cylinder('#c8bdad',x+dx,h-.09,z,.075,.16);
  }
  utilityPole(-6.15,3.77,6.85);utilityPole(5.8,-4.5,7.05);
  for(let i=0;i<3;i++)wire('#272d45',[[-6.15+i*.22,6.68,3.77],[-2,6.1-i*.12,1.2],[1.8,6.05-i*.07,-1.5],[5.8+i*.22,6.88,-4.5]],.023);
  wire('#555a70',[[-6.15,4.7,3.77],[-5.8,4.8,4.25],[-5.65,4.62,4.75]],.075);
  cylinder('#45506a',-5.65,4.57,4.75,.31,.22,.16);cylinder('#ffcf91',-5.65,4.43,4.75,.23,.08,.23,1.1);
  for (let x=-8.15;x<=-4.55;x+=1.2)box('#8695aa',x,.67,5.08,.11,.83,.12);
  for(const y of [.56,.93])box('#b0aeba',-6.35,y,5.08,3.76,.09,.085);
  cylinder('#73819b',4.64,1.46,4.8,.065,2.55);const streetSign=mesh(new THREE.CircleGeometry(.31,24),mat('#b45d62'),4.64,2.53,4.86);box('#e9c4bc',4.64,2.53,4.871,.44,.08,.025);
  // A simple bicycle, capable of being recognized from every direction.
  function bike(x,z,ry=0) {
    const at=(px,py,pz=0)=>[x+px*Math.cos(ry)-pz*Math.sin(ry),py,z+px*Math.sin(ry)+pz*Math.cos(ry)];
    for(const px of [-.57,.57]){
      const p=at(px,.59);const tire=mesh(new THREE.TorusGeometry(.35,.055,8,24),mat('#272b39'),...p);tire.rotation.y=-ry;
      const rim=mesh(new THREE.TorusGeometry(.31,.015,6,24),mat('#aaaab0'),...p);rim.rotation.y=-ry;
      for(let i=0;i<8;i++){let a=i*Math.PI/4;line('#777d8d',p,at(px+Math.cos(a)*.3,.59+Math.sin(a)*.3),.012);}
    }
    const c='#67a7a3';for(const [p,q] of [[[-.57,.59],[-.18,1.17]],[[-.18,1.17],[.4,1.15]],[[.4,1.15],[.57,.59]],[[-.57,.59],[.03,.65]],[[.03,.65],[.4,1.15]],[[-.18,1.17],[.03,.65]]])line(c,at(...p),at(...q),.039);
    line('#9294a3',at(.4,1.15),at(.43,1.42),.035);line('#9294a3',at(.43,1.42,-.18),at(.43,1.42,.18),.035);
    line('#332f3b',at(-.3,1.25),at(-.06,1.25),.055);
  }
  bike(3.32,.64,-Math.PI/2);bike(-3.97,3.47,.13);

  // Small figures with separate silhouettes. A single instant in four lives.
  function person(x,z,coat,hood,angle=0,base=.27) {
    const at=(a,b,c=0)=>[x+a*Math.cos(angle)-c*Math.sin(angle),base+b,z+a*Math.sin(angle)+c*Math.cos(angle)];
    for(const a of [-.13,.13]){line('#303749',at(a,.08),at(a,.62),.085);let p=at(a,.041,.065);box('#252b3d',...p,.17,.10,.23,angle);}
    let p=at(0,.89);box(coat,...p,.43,.64,.29,angle);sphere('#d3aa96',...at(0,1.37),.18,[.82,1,.83]);
    sphere(hood,...at(0,1.46,-.035),.18,[.89,.73,.9]);
    for(const a of [-.24,.24])line(coat,at(a*.7,1.09),at(a,.66,.06),.073);
  }
  // The commuter: dark raincoat, umbrella turned toward the bright door.
  person(.24,3.4,'#57798c','#283146',.1);
  const umbrella=mesh(new THREE.ConeGeometry(.76,.41,24),mat('#8191b5'),.24,2.04,3.4);umbrella.rotation.y=.12;
  for(let i=0;i<8;i++){const a=i*Math.PI/4;line('#596b98',[.24,2.245,3.4],[.24+.76*Math.cos(a),1.84,3.4+.76*Math.sin(a)],.018);}
  line('#484963',[.44,1.17,3.4],[.24,2.24,3.4],.023);
  // Clerk, behind the counter, with a contrasting uniform and apron.
  person(-4.3,.22,'#6aa79d','#433a49',.1,.54);box('#dbd4b0',-4.3,1.41,.39,.29,.36,.025);
  // Delivery rider, waiting beside their bike away from the storefront.
  person(3.74,-.22,'#b87a67','#424a5b',Math.PI/2);box('#be9571',3.95,1.16,-.22,.35,.46,.48,Math.PI/2);box('#ead1a0',4.14,1.16,-.22,.035,.12,.26);
  // A few plants in the quiet corners help soften the hard edges.
  for(const [x,z] of [[-7.9,2.8],[-7.8,-2.3],[4.5,-3.4],[-6.7,-4.4]]) {
    box('#66606a',x,.41,z,.84,.31,.76);
    for(let i=0;i<8;i++){const xx=x+range(-.29,.29),zz=z+range(-.23,.23),h=range(.42,.8);line('#567b72',[xx,.52,zz],[xx+.13,h,zz],.035);sphere(['#70988b','#7c8da6','#9c88b8'][i%3],xx+.12,h,zz,.12,[1,.65,1]);}
  }

  for(const [material, matrices] of batches) {
    const m=new THREE.InstancedMesh(boxGeo,material,matrices.length);
    matrices.forEach((matrix,i)=>m.setMatrixAt(i,matrix));m.computeBoundingSphere();scene.add(m);
  }

  // Fine rain is spatial (not a screen overlay) and stays inside the base boundary.
  const rainCount=430, rainPos=new Float32Array(rainCount*6), drops=[];
  for(let i=0;i<rainCount;i++)drops.push([range(-8.6,8.6),range(.3,9.3),range(-8.6,8.6),range(.23,.58)]);
  const rainGeometry=new THREE.BufferGeometry(), rainAttr=new THREE.BufferAttribute(rainPos,3);rainGeometry.setAttribute('position',rainAttr);
  const rain=new THREE.LineSegments(rainGeometry,new THREE.LineBasicMaterial({color:'#9db5de',transparent:true,opacity:.31,depthWrite:false}));rain.frustumCulled=false;scene.add(rain);
  function drawRain(dt) {
    drops.forEach((p,i)=>{p[1]-=dt*7.5;if(p[1]<.2)p[1]+=9.1;const k=i*6;rainPos.set([p[0],p[1],p[2],p[0]+.07,p[1]+p[3],p[2]+.025],k);});rainAttr.needsUpdate=true;
  }
  drawRain(0);
  const reduced=matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(reduced)controls.enableDamping=false;
  let raf=0, last=0, visible=true, disposed=false;
  function render() {controls.update();renderer.render(scene,camera);}
  function frame(t){raf=0;if(disposed||!visible||document.hidden)return;const dt=last?Math.min(.05,(t-last)/1000):0;last=t;if(!reduced)drawRain(dt);render();if(!reduced||controls.enableDamping)raf=requestAnimationFrame(frame);}
  function start(){if(!raf&&visible&&!document.hidden&&!disposed){last=0;raf=requestAnimationFrame(frame);}}
  if(reduced)controls.addEventListener('change',start);
  function resize(){const {width,height}=canvas.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();render();}
  const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else{cancelAnimationFrame(raf);raf=0;}},{rootMargin:'180px'});io.observe(canvas);
  function visibility(){if(document.hidden){cancelAnimationFrame(raf);raf=0;}else start();}document.addEventListener('visibilitychange',visibility);
  function keyboard(e) {
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(e.key))return;e.preventDefault();
    if(e.key==='Home'){controls.target.set(0,1.7,0);camera.position.set(24,21,26);controls.update();render();return;}
    const s=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
    if(e.key==='ArrowLeft')s.theta-=.14;if(e.key==='ArrowRight')s.theta+=.14;
    if(e.key==='ArrowUp')s.phi=Math.max(controls.minPolarAngle,s.phi-.1);if(e.key==='ArrowDown')s.phi=Math.min(controls.maxPolarAngle,s.phi+.1);
    if(e.key==='+'||e.key==='=')s.radius=Math.max(controls.minDistance,s.radius*.88);if(e.key==='-')s.radius=Math.min(controls.maxDistance,s.radius*1.14);
    camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(s));controls.update();render();
  }
  canvas.addEventListener('keydown',keyboard);start();
  const looks={
    commuter:{pos:[9,8.7,15],target:[.3,1.4,2.7]},
    clerk:{pos:[-12,7,14],target:[-3.2,1.6,.8]},
    courier:{pos:[16,7,5.8],target:[3.35,1.4,.1]},
    passenger:{pos:[15,13,3],target:[1.4,4.7,-5.2]},
  };
  return {lookAt(key){const view=looks[key];if(!view)return;controls.target.set(...view.target);camera.position.set(...view.pos);controls.update();render();},dispose(){disposed=true;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('keydown',keyboard);controls.dispose();renderer.dispose();}};
}
