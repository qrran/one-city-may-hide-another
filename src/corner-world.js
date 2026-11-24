import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// A small, entirely modeled street. Its four inhabitants share one continuous
// space rather than appearing in separate illustrations or camera cuts.
const palette = {
  edge: '#263b34', asphalt: '#35413d', curb: '#929184', paving: '#77796b',
  concrete: '#9d7966', tile: '#805b48', roof: '#3c5044', trim: '#f1d5b8',
  glass: '#9bb6a8', teal: '#356454', red: '#aa5746', cream: '#f8d2a5',
  warm: '#ffc78a', gold: '#e9b271', steel: '#516855', blue: '#547ead',
};

export function createCornerWorld(canvas,onFrame=()=>{}) {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#132a20');
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
  controls.minDistance = 6.5;
  controls.maxDistance = 55;
  controls.minPolarAngle = .24;
  controls.maxPolarAngle = Math.PI / 2.13;
  controls.enablePan = true;
  controls.panSpeed = .48;
  controls.rotateSpeed = .75;
  controls.zoomSpeed = .8;
  controls.update();

  scene.add(new THREE.HemisphereLight('#f2e6c6','#3e5348',2.05));
  const key = new THREE.DirectionalLight('#fdd8b0',1.9); key.position.set(-9,16,9); scene.add(key);
  const fill = new THREE.DirectionalLight('#85aa9c',1.1); fill.position.set(8,6,-10); scene.add(fill);
  const groundGlow = new THREE.PointLight('#ffd2a1', 22, 10, 2); groundGlow.position.set(-1.6,2.35,3); scene.add(groundGlow);
  const alleyGlow = new THREE.PointLight('#b9bb74', 13, 8, 2); alleyGlow.position.set(5.7,2,-4); scene.add(alleyGlow);
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
    ctx.fillStyle=fg; ctx.font='italic bold 64px Georgia, serif'; ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(text,256,67,486);
    const texture=new THREE.CanvasTexture(c); texture.colorSpace=THREE.SRGBColorSpace;
    mesh(new THREE.PlaneGeometry(w,h),new THREE.MeshBasicMaterial({map:texture}),x,y,z);
  }

  // The complete square plinth, with a corner road and an inset raised sidewalk.
  box('#26342d',0,-.65,0,17.5,1,17.5);
  box('#5b5749',0,-.18,0,17.5,.15,17.5);
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
    let m=mesh(new THREE.CircleGeometry(1,36),new THREE.MeshStandardMaterial({color:'#3f4b3f',metalness:.5,roughness:.19}),x,.055+(z<5&&x<5?.22:0),z);m.rotation.x=-Math.PI/2;m.scale.set(sx,sz,1);
    for(let k=0;k<9;k++) {
      const c=['#d89d65','#b7b97f','#90b4a3','#d4ad72'][Math.floor(random()*4)];
      box(c,x+range(-sx*.67,sx*.67),m.position.y+.007,z+range(-sz*.75,sz*.75),range(.035,.16),.008,range(.1,sz*.6),0,.22);
    }
  }

  // Brooklyn coffee shop: painted wood storefront, glass, brick and a warm bar.
  const sx=-1.7, sz=-.9, w=7.7, d=6, front=sz+d/2, right=sx+w/2;
  box('#6f7561',sx,.33,sz,w+.17,.22,d+.2);
  box('#dfc5a4',sx,.48,sz,w,.1,d);
  box(palette.concrete,sx,1.89,sz-d/2,w,2.85,.2);
  box(palette.tile,sx-w/2,1.89,sz,.18,2.85,d);
  box(palette.tile,right,1.89,sz-1.25,.18,2.85,3.5);
  // Window frames; the warm interior stays visible from two directions.
  for(let x=sx-w/2+.15;x<sx+w/2;x+=1.27) box('#244b3c',x,1.88,front,.14,2.68,.15);
  box('#244b3c',sx,3.22,front,w,.18,.16);
  box('#244b3c',sx,.6,front,w,.32,.16);
  box('#64836a',sx,1.57,front+.025,w,.07,.07);
  glass(sx,1.9,front-.035,w-.12,2.55);
  for(let z=sz+.45;z<=front;z+=.8)box('#244b3c',right,1.89,z,.15,2.7,.12);
  box('#244b3c',right,3.22,sz+1.5,.15,.18,3.05);box('#244b3c',right,.6,sz+1.5,.15,.32,3.05);
  glass(right-.025,1.91,sz+1.52,2.9,2.55,true);
  // Traditional shop door with brass handles and a dark green frame.
  for(const x of [sx-.72,sx+.72]) {
    box('#295342',x,1.88,front+.07,.095,2.5,.11);box('#bda26b',x,1.49,front+.135,.17,.045,.12);
  }
  for(const x of [sx-1.1,sx+1.1]) box('#3c604d',x,1.88,front+.08,.12,2.6,.1);
  box('#424f54',sx,.28,front+.5,2.4,.045,.75);
  for(let x=sx-1;x<sx+1;x+=.13)box('#5e6562',x,.307,front+.5,.025,.013,.66);
  // Pendant lamps, coffee beans, cups, and a wall of warm shelves behind the bar.
  for(const x of [-3.9,-1.5,.72]){line('#654e35',[x,3.28,1.1],[x,2.72,1.1],.025);cylinder('#a99a6d',x,2.68,1.1,.22,.17,.11);cylinder('#ffdf9d',x,2.58,1.1,.17,.045,.17,1.6);}
  const products=['#b97246','#c3ac7f','#ccad88','#8a9562','#e1c79c','#c7b49a','#e6ddbd'];
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
  shelf(sx-1.6,-3.6,3.7,3);
  // Bar, espresso machine, cup stacks, pastry case, and chalk menu.
  box('#654b34',sx-2.25,1.08,.94,2.5,1.15,1.15);box('#d6ae73',sx-2.25,1.68,.94,2.62,.13,1.3);
  box('#a8ada1',sx-2.35,1.94,1.04,1.03,.43,.58);box('#333e35',sx-2.35,1.99,1.35,.86,.23,.09);for(const x of [sx-2.65,sx-2.25,sx-1.85]){cylinder('#eee6cc',x,2.23,1.07,.10,.13,.10);cylinder('#be925e',x,1.78,1.38,.10,.14,.10);}
  box('#38473a',sx+.5,2.38,-3.74,2.7,1.05,.06);sign('COFFEE  ·  ESPRESSO',sx+.5,2.4,-3.695,2.53,.8,'#263b2d','#ede3bc');
  // Forest-green awning and sign, limestone cornices and a brick upper storey.
  box(palette.roof,sx,3.51,sz,w+.36,.42,d+.36);
  box('#2f493c',sx,3.75,sz,w+.4,.12,d+.4);
  box('#254d3b',sx,3.45,front+.17,w+.34,.63,.35);box('#254d3b',right+.17,3.45,sz,.35,.63,d+.28);
  for(const y of [3.18,3.72]){box('#c7b587',sx,y,front+.36,w+.4,.035,.06);box('#c7b587',right+.36,y,sz,.06,.035,d+.38);}
  sign('COFFEE',sx,3.45,front+.36,3.05,.53,'#254d3b','#efcf8e');
  const awning=mesh(new THREE.BoxGeometry(w-.18,.1,.95),mat('#42664c'),sx,2.99,front+.58);awning.rotation.x=.27;
  box('#bdaf7e',sx,2.84,front+1.0,w-.15,.09,.09);
  const sideAwning=mesh(new THREE.BoxGeometry(.94,.10,3.2),mat('#42664c'),right+.51,2.99,sz+1.4);sideAwning.rotation.z=-.27;
  box('#ac6b50',sx,4.65,sz,w,1.8,d);
  for(let y=3.88;y<5.52;y+=.22){box('#6c493e',sx,y,front+.008,w,.025,.025);box('#6c493e',right+.01,y,sz,.025,.025,d);}
  for(let i=0;i<4;i++){
    const x=sx-w/2+1.02+i*1.9;box('#5e453c',x,4.72,front+.04,1.27,1.38,.1);panel('#d9b17a',x,4.72,front+.10,1.03,1.13,false,.65);box('#3a5944',x,4.72,front+.14,.055,1.22,.07);box('#3a5944',x,4.72,front+.14,1.08,.058,.07);box('#bcaa87',x,4.03,front+.15,1.42,.12,.25);
  }
  for(let i=0;i<3;i++){const z=sz-1.8+i*1.8;box('#5e453c',right+.04,4.72,z,.1,1.38,1.14);panel('#e1b87b',right+.10,4.72,z,.88,1.1,true,.52);box('#3a5944',right+.15,4.72,z,.06,1.2,.06);box('#bba989',right+.14,4.03,z,.25,.12,1.3);}
  box('#363f36',sx,5.62,sz,w+.25,.22,d+.28);box('#8b7864',sx,5.76,sz,w+.45,.13,d+.42);
  // Iconic New York rooftop water tank, brick chimney and cornice.
  for(const x of [sx-2.65,sx-1.55])for(const z of [sz-1.24,sz-.17])line('#62564a',[x,5.78,z],[sx-2.1,6.39,sz-.7],.065);
  cylinder('#8f7556',sx-2.1,6.84,sz-.7,.7,.95,.7);cylinder('#655c49',sx-2.1,7.42,sz-.7,.79,.32,.04);
  for(let i=0;i<12;i++){const a=i*Math.PI/6;line('#6d5b46',[sx-2.1+.7*Math.cos(a),6.37,sz-.7+.7*Math.sin(a)],[sx-2.1+.7*Math.cos(a),7.31,sz-.7+.7*Math.sin(a)],.025);}
  box('#98664f',sx+.9,6.09,sz-1.2,.63,.63,.68);box('#b99b76',sx+.9,6.43,sz-1.2,.78,.12,.82);
  // Cafe tables and chairs on the sidewalk, bins and an umbrella rack.
  function cafeTable(x,z){cylinder('#566052',x,.65,z,.07,.78,.07);cylinder('#a27a4f',x,1.05,z,.47,.10,.47);cylinder('#f2d6ac',x+.13,1.18,z,.085,.16,.075);for(const side of [-1,1]){const cx=x+side*.68;box('#b78b54',cx,.58,z,.32,.09,.34);box('#b78b54',cx,.89,z-.15,.32,.32,.07);for(const dx of [-.12,.12])for(const dz of [-.12,.12])line('#485341',[cx+dx,.29,z+dz],[cx+dx,.57,z+dz],.028);}}
  cafeTable(-4.05,3.45);cafeTable(2.9,1.75);
  for(let i=0;i<3;i++) {const z=front-.22-i*.63;box('#a6a3aa',right+.49,.72,z,.65,.9,.53);box(['#568fa1','#b78075','#567d78'][i],right+.49,1.2,z,.68,.12,.55);box('#292f40',right+.49,1.27,z,.36,.015,.23);}
  panel('#463946',right+.125,1.95,sz-1.45,1.39,.92,true);
  for(let j=0;j<2;j++)for(let i=0;i<3;i++)panel(['#dbc8af','#a5b6bd','#d1a69e'][(i+j)%3],right+.15,2.15-j*.43,sz-1.9+i*.45,.35,.33,true);
  const ux=sx+1.55,uz=front+.53;
  for(const dx of [-.24,.24])for(const dz of [-.2,.2])line('#616c83',[ux+dx,.29,uz+dz],[ux+dx,1.15,uz+dz],.04);
  for(const dy of [.35,1.14]) {line('#777c8f',[ux-.24,dy,uz-.2],[ux+.24,dy,uz-.2]);line('#777c8f',[ux-.24,dy,uz+.2],[ux+.24,dy,uz+.2]);}
  for(let i=0;i<4;i++){const x=ux-.18+i*.12;line('#8c9db4',[x,.35,uz],[x+.12,1.39,uz],.035);wire('#394257',[[x+.12,1.39,uz],[x+.12,1.52,uz],[x+.22,1.55,uz],[x+.23,1.45,uz]],.025);}

  // A Brooklyn elevated line in patinated green steel; the city continues above the cafe.
  const rz=-6.32, trackY=4.55;
  for(const x of [-6.4,-1.4,3.7,7.3]) {
    box('#405f4b',x,2.12,rz,.36,4.2,.46);box('#71816a',x,4.11,rz,.78,.27,.75);
    line('#4a654d',[x-.73,3.2,rz],[x+.05,4.1,rz],.09);
  }
  box('#385946',0,4.33,rz,16.6,.55,2.12);box('#73816d',0,4.56,rz,16.65,.12,2.14);
  for(let x=-8;x<8.1;x+=.46)box('#42485e',x,4.66,rz,.17,.10,1.68);
  for(const z of [rz-.55,rz+.55])box('#9fa4ac',0,4.75,z,16.6,.1,.098);
  for(let x=-8.2;x<8.2;x+=.82){box('#5c735c',x,4.97,rz+1.01,.065,.66,.08);box('#89917b',x,5.3,rz+1.02,.82,.065,.065);box('#809079',x,4.32,rz+1.07,.06,.35,.06);}
  // Two local train cars and the seated passenger in the closest window.
  for(const [cx,len] of [[-4.1,6.8],[3.1,6.8]]) {
    box('#b2b4c3',cx,5.43,rz,len,1.52,1.62);
    box('#737b91',cx,6.25,rz,len-.18,.22,1.52);box('#3a516d',cx,4.92,rz,len,.13,1.67);
    box('#778786',cx,5.13,rz+.835,len,.10,.055,0,.02);
    for(let k=0;k<6;k++){
      const x=cx-len/2+.57+k*1.12;
      panel('#363b52',x,5.62,rz+.825,.86,.57);panel('#e7c18d',x,5.62,rz+.848,.73,.44,false,.85);
      panel('#697c91',x,5.62,rz-.825,.81,.53);box('#858ca0',x,5.62,rz+.875,.035,.52,.025);
      if(k%2===1){sphere('#555264',x+.18,5.72,rz+.866,.105,[1,1.05,.36]);box('#555264',x+.18,5.49,rz+.875,.17,.19,.025);}
    }
    for(const x of [cx-len/2+.13,cx+len/2-.13])box('#8c95a9',x,5.45,rz,.15,1.39,1.59);
  }
  panel('#e4dfe0',6.51,5.64,rz,.65,.5,true,.4);cylinder('#ef706c',6.53,5.16,rz+.48,.1,.06,.1,.8).rotation.z=Math.PI/2;
  // Brownstone apartments and the row of lit windows behind the elevated line.
  for(const [x,z,bw,bh] of [[-6.5,-7.91,2.5,6.6],[-2.95,-7.9,3,5.15],[1.05,-7.92,3.15,7.6],[4.4,-7.91,2.5,6.4]]) {
    box('#865a49',x,bh/2,z,bw,bh,1.35);box('#aa9175',x,bh+.11,z,bw+.12,.22,1.42);
    for(let yy=.55;yy<bh-.1;yy+=.22)box('#68483d',x,yy,z+.68,bw,.018,.02);
    for(let xx=x-bw/2+.35;xx<x+bw/2-.13;xx+=.65)for(let yy=.85;yy<bh-.3;yy+=.83){const lit=random()>.52;panel(lit?'#e7bf93':'#303d33',xx,yy,z+.71,.36,.48,false,lit?.45:0);box('#c2a482',xx,yy-.29,z+.744,.45,.06,.08);}
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
  // NYC traffic light, Broadway street sign and classic red hydrant.
  cylinder('#465f4c',4.64,2.05,4.8,.1,3.7,.07);cylinder('#4e6955',4.64,.48,4.8,.18,.4,.11);
  box('#c39a42',4.81,3.11,4.8,.39,.97,.28);
  for(const [y,c] of [[3.43,'#df6951'],[3.12,'#c7a354'],[2.81,'#7b9d64']]){const light=cylinder(c,4.81,y,4.96,.125,.07,.125,y===3.43?.85:0);light.rotation.x=Math.PI/2;}
  box('#3b6953',4.57,3.7,4.8,1.52,.28,.13);sign('BROADWAY',4.57,3.7,4.874,1.44,.24,'#3b6953','#eee6cb');
  cylinder('#a64c37',3.72,.65,4.55,.185,.53,.185);cylinder('#b85a3d',3.72,.97,4.55,.22,.18,.17);sphere('#ad5139',3.72,1.09,4.55,.16,[1,.64,1]);for(const side of [-1,1]){const hydrant=cylinder('#a64d36',3.72+side*.21,.72,4.55,.10,.17,.10);hydrant.rotation.z=Math.PI/2;}
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
  bike(3.48,-.7,-Math.PI/2);

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
  // Barista, behind the espresso machine, with a contrasting uniform and apron.
  person(-4.3,.22,'#77917b','#433a35',.1,.54);box('#dbd4b0',-4.3,1.41,.39,.29,.36,.025);
  // Delivery rider, waiting beside their bike away from the storefront.
  person(3.74,-.22,'#7e8864','#424c41',Math.PI/2);box('#b39865',3.95,1.16,-.22,.35,.46,.48,Math.PI/2);box('#ead1a0',4.14,1.16,-.22,.035,.12,.26);
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
  let raf=0, last=0, visible=true, disposed=false, flight=null;
  const anchors={commuter:[.24,2.5,3.4],clerk:[-4.3,2.1,.22],courier:[3.74,1.93,-.22],passenger:[4.45,6.05,rz+.87]};
  function render() {controls.update();renderer.render(scene,camera);const points={};for(const [key,xyz] of Object.entries(anchors)){const p=new THREE.Vector3(...xyz).project(camera);points[key]={x:(p.x+1)/2,y:(1-p.y)/2,visible:p.z>=-1&&p.z<=1&&Math.abs(p.x)<.95&&Math.abs(p.y)<.95};}onFrame(points);}
  function frame(t){raf=0;if(disposed||!visible||document.hidden)return;const dt=last?Math.min(.05,(t-last)/1000):0;last=t;if(!reduced)drawRain(dt);if(flight){const p=Math.min(1,Math.max(0,(t-flight.start)/flight.duration)),ease=p*p*(3-2*p);camera.position.lerpVectors(flight.from,flight.to,ease);controls.target.lerpVectors(flight.fromTarget,flight.toTarget,ease);if(p===1)flight=null;}render();if(!reduced||controls.enableDamping||flight)raf=requestAnimationFrame(frame);}
  function start(){if(!raf&&visible&&!document.hidden&&!disposed){last=0;raf=requestAnimationFrame(frame);}}
  controls.addEventListener('start',()=>{flight=null;});
  if(reduced)controls.addEventListener('change',start);
  function resize(){const {width,height}=canvas.getBoundingClientRect();if(!width||!height)return;renderer.setSize(width,height,false);camera.aspect=width/height;camera.updateProjectionMatrix();render();}
  const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
  const io=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting;if(visible)start();else{cancelAnimationFrame(raf);raf=0;}},{rootMargin:'180px'});io.observe(canvas);
  function visibility(){if(document.hidden){cancelAnimationFrame(raf);raf=0;}else start();}document.addEventListener('visibilitychange',visibility);
  function keyboard(e) {
    if(!['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','=','-','Home'].includes(e.key))return;e.preventDefault();
    flight=null;
    if(e.key==='Home'){controls.target.set(0,1.7,0);camera.position.set(24,21,26);controls.update();render();return;}
    const s=new THREE.Spherical().setFromVector3(camera.position.clone().sub(controls.target));
    if(e.key==='ArrowLeft')s.theta-=.14;if(e.key==='ArrowRight')s.theta+=.14;
    if(e.key==='ArrowUp')s.phi=Math.max(controls.minPolarAngle,s.phi-.1);if(e.key==='ArrowDown')s.phi=Math.min(controls.maxPolarAngle,s.phi+.1);
    if(e.key==='+'||e.key==='=')s.radius=Math.max(controls.minDistance,s.radius*.88);if(e.key==='-')s.radius=Math.min(controls.maxDistance,s.radius*1.14);
    camera.position.copy(controls.target).add(new THREE.Vector3().setFromSpherical(s));controls.update();render();
  }
  canvas.addEventListener('keydown',keyboard);start();
  const looks={
    overview:{pos:[24,21,26],target:[0,1.7,0]},
    commuter:{pos:[5,4.7,9.7],target:[.24,1.55,3.4]},
    clerk:{pos:[-9,3.8,7],target:[-4.3,1.8,.22]},
    courier:{pos:[10.5,3.55,2.8],target:[3.74,1.4,-.22]},
    passenger:{pos:[9.4,8.5,-.1],target:[4.45,5.7,rz+.87]},
  };
  function lookAt(key){
    const view=looks[key];if(!view)return;
    const to=new THREE.Vector3(...view.pos),toTarget=new THREE.Vector3(...view.target);
    if(reduced){camera.position.copy(to);controls.target.copy(toTarget);render();return;}
    flight={from:camera.position.clone(),fromTarget:controls.target.clone(),to,toTarget,start:performance.now(),duration:950};
    start();
  }
  return {lookAt,dispose(){disposed=true;flight=null;cancelAnimationFrame(raf);ro.disconnect();io.disconnect();document.removeEventListener('visibilitychange',visibility);canvas.removeEventListener('keydown',keyboard);controls.dispose();renderer.dispose();}};
}
