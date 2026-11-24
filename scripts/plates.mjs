// Original relief-print scenery. All shapes are authored here, including the figures.
import sharp from 'sharp';
import {mkdir} from 'node:fs/promises';
const out='public/plates';
await mkdir(out,{recursive:true});
const C={black:'#152729',deep:'#263a3a',slate:'#435b59',teal:'#6f8580',sage:'#99a59a',fog:'#b8baaa',
  ivory:'#f4e7ca',paper:'#e1cfab',ochre:'#c1a780',stone:'#a69377',rust:'#a94938',red:'#ba503c',brass:'#bd9e65',white:'#ffefd1'};
const {black,deep,slate,teal,sage,fog,ivory,paper,ochre,stone,rust,red,brass,white}=C;
const S=(d,fill,more='')=>'<path d="'+d+'" fill="'+fill+'" '+more+'/>';
const R=(x,y,w,h,fill,rx=0)=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="'+rx+'" fill="'+fill+'"/>';
const E=(x,y,rx,ry,fill)=>'<ellipse cx="'+x+'" cy="'+y+'" rx="'+rx+'" ry="'+ry+'" fill="'+fill+'"/>';
const L=(d,color,width=1,more='')=>S(d,'none','stroke="'+color+'" stroke-width="'+width+'" stroke-linecap="round" stroke-linejoin="round" '+more);
const G=(transform,inside,extra='')=>'<g transform="'+transform+'" '+extra+'>'+inside+'</g>';
const A=(n,f)=>Array.from({length:n},(_,i)=>f(i)).join('');
const T=(x,y,t,size,color,weight='normal',space=0,serif=false)=>'<text x="'+x+'" y="'+y+'" fill="'+color+'" font-family="'+(serif?'DejaVu Serif':'DejaVu Sans')+'" font-weight="'+weight+'" font-size="'+size+'" letter-spacing="'+space+'">'+t+'</text>';
const defs=`<defs>
 <pattern id="dots" width="5" height="5" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".65" fill="#213133" opacity=".34"/></pattern>
 <pattern id="shade" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(32)"><path d="M0 0v4" stroke="#1a2e2f" stroke-width=".8" opacity=".42"/></pattern>
 <pattern id="paperLines" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(38)"><path d="M0 0v6" stroke="#f0dfbd" stroke-width="1" opacity=".34"/></pattern>
 <linearGradient id="sky" x2="0" y2="1" gradientUnits="objectBoundingBox" gradientTransform="scale(1 1)"><stop stop-color="#c6d2c1"/><stop offset=".66" stop-color="#eddec2"/><stop offset="1" stop-color="#d4c5a6"/></linearGradient>
 <linearGradient id="glass"><stop stop-color="#233d3f"/><stop offset=".48" stop-color="#607571"/><stop offset="1" stop-color="#293e41"/></linearGradient>
 <linearGradient id="metal"><stop stop-color="#596e68"/><stop offset=".22" stop-color="#c5c9b4"/><stop offset=".44" stop-color="#e0d6b9"/><stop offset=".67" stop-color="#75877d"/><stop offset="1" stop-color="#a9b1a1"/></linearGradient>
 <linearGradient id="wall" x1="0" x2="1" y1="0" y2=".7"><stop stop-color="#edddbb"/><stop offset=".6" stop-color="#c6b291"/><stop offset="1" stop-color="#a49379"/></linearGradient>
 </defs>`;
const svg=(w,h,inside)=>'<svg xmlns="http://www.w3.org/2000/svg" width="'+w+'" height="'+h+'" viewBox="0 0 '+w+' '+h+'">'+defs+inside+'</svg>';
async function plate(name,w,h,art,scale=2){
  await sharp(Buffer.from(svg(w,h,art)),{density:Math.round(72*scale)}).png({palette:false}).toFile(out+'/'+name+'.png');
}
function random(seed){let n=seed>>>0;return()=>((n=(n*1664525+1013904223)>>>0)/4294967296);}
function tank(x,y,s=1){
  return G('translate('+x+' '+y+') scale('+s+')',
    L('M-19 29l-6 34m41-34 7 34m-44-20 40 14m0-14-40 14',slate,2.2)+
    S('M-23 -5Q0 -12 23 -5L21 29Q0 35 -21 29Z',stone)+R(-22,-4,45,34,'url(#shade)')+
    A(4,i=>L('M-22 '+(i*8-2)+'q22 4 44 0',deep,1))+
    S('M-29 -5L0 -20 29 -5Q2 0 -29 -5Z',deep)+L('M-23 -6L0 -17',sage,1.5)+L('M-2 -18v-5',black,1.8));
}
function facade(x,y,w,h,seed,kind=0){
  const rnd=random(seed), rows=Math.max(2,Math.floor(h/31)),cols=Math.max(2,Math.floor(w/23));
  const bg=[ochre,stone,sage,'#b6a184','#c3b395','#929a89'][kind%6], dark=[slate,deep,teal][kind%3];
  let a=R(x,y,w,h,bg)+R(x+w*.76,y,w*.24,h,'url(#dots)');
  for(let j=0;j<rows;j++){
    for(let k=0;k<cols;k++){
      const px=x+6+k*(w-11)/cols,py=y+9+j*(h-10)/rows,ww=(w-11)/cols*.59;
      a+=R(px-1.6,py-1.7,ww+3.5,15.8,kind%2?paper:stone)+R(px,py,ww,12.9,rnd()>.78?paper:dark)
        +R(px,py+5.7,ww,.9,bg)+R(px+ww*.51,py,.85,13,bg)+R(px-2,py+13,ww+4,1.5,dark);
    }
  }
  a+=R(x-2,y-3,w+4,3.4,dark)+R(x-1,y+1,w+2,2,paper);
  if(kind%3===0){
    const fx=x+w*.72;
    for(let j=0;j<rows-1;j++){
      const py=y+24+j*(h-10)/rows;
      a+=R(fx-12,py,24,1.6,deep)+L('M'+(fx-12)+' '+py+'v-7h24v7m-19 0v-6m5 6v-6m5 6v-6m6 6v-6',deep,1)
        +L('M'+(fx+9)+' '+py+'l-16 '+((h-10)/rows)+'m3 0 16 -'+((h-10)/rows),deep,1.3);
    }
  }
  return a;
}
function skyline(w,h,seed,base=365){
  const rnd=random(seed);let a=R(0,0,w,h,'url(#sky)')+E(w*.71,71,38,38,ivory);
  for(let x=-18;x<w+30;){const bw=20+rnd()*51,bh=58+rnd()*125;
    a+=R(x,base-bh,bw,bh,'#b6b8a4')+R(x+bw*.66,base-bh,bw*.34,bh,'url(#dots)');
    if(rnd()>.68)a+=R(x+bw*.38,base-bh-8,bw*.32,8,'#a6afa1');x+=bw+2;
  }
  let i=0;
  for(let x=-40;x<w+100;){const bw=69+rnd()*76,bh=85+rnd()*130;
    a+=facade(x,base-bh,bw,bh,seed+100+i,i%6);
    if(i%3===1)a+=tank(x+bw*.67,base-bh-26,.57);
    if(i%3===0)a+=L('M'+(x+bw*.28)+' '+(base-bh-2)+'v-21m-8 5h15m-11 5h8',slate,1.1);
    i++;x+=bw+2;
  }
  return a;
}
function walker(x,y,size,facing=1,coat=deep,variant=0){
  const shell=variant%2?'M-13 -68Q-10 -78 3 -77Q16 -75 19 -56L20 -29Q5 -24 -14 -32L-18 -48Z':'M-14 -70Q-7 -78 5 -75Q17 -72 17 -55L22 -30Q2 -26 -19 -32Z';
  return G('translate('+x+' '+y+') scale('+(size*facing)+' '+size+')',
    S('M-12 -36L3 -34 3 -21 -10 -5 -12 0 -20 0 -18 -4 -8 -24Z',black)+
    S('M3 -35L15 -31 12 -20 15 -5 22 -1 22 1 10 1Q7 0 7 -4L3 -20Z',slate)+
    S(shell,coat)+S('M-14 -65Q-21 -48 -17 -33L-12 -32 -7 -48Z',black)+
    S('M-8 -78L-7 -86 4 -88 7 -73 0 -66Z',stone)+
    S('M-10 -94Q-9 -105 1 -104Q10 -104 12 -97L12 -91 16 -87 13 -85 12 -80Q7 -78 0 -81L-5 -86 -10 -88Z',ochre)+
    S('M-11 -91Q-15 -106 -1 -108Q7 -110 12 -100L10 -95 1 -95 -3 -91 -6 -85 -10 -86Z',black)+
    S('M-13 -71L-4 -76 4 -70 12 -72 11 -67 4 -62Z',variant%3===0?rust:teal)+
    L('M-9 -61L-7 -43 -3 -35',teal,1.15)+
    (variant%2?S('M6 -60Q7 -65 11 -62L19 -48 29 -47 29 -42 15 -43 5 -53Z',slate):
      S('M8 -65Q13 -67 16 -62L24 -48 35 -53 38 -49 22 -40Q18 -40 15 -45L5 -56Z',slate))+
    (variant%2?S('M-16 -51q-8 -13 -13 -6l-2 25 13 4 7 -9z',teal)+L('M-24 -57q7-16 13-10',black,2):''));
}
function smallCup(x,y,s=1){
  return G('translate('+x+' '+y+') scale('+s+')',L('M11 5q14-4 12 5t-15 10',ivory,3.8)+S('M-12 0L-9 28Q0 32 9 28L13 0Z',ivory)+
    S('M-11 7L11 7 10 16 -10 16Z',rust)+E(0,.1,13.1,3.1,deep)+E(0,-.75,10.8,1.9,ochre)+L('M-9 22q8 3 16 0',stone,1));
}
function street(){
  let a=skyline(960,540,120,267)+R(0,258,960,165,stone);
  a+=facade(-15,72,180,220,55,1)+facade(165,54,155,244,130,0)+facade(321,91,123,209,145,4);
  a+=R(0,270,444,87,deep)+R(7,278,118,54,'url(#glass)')+R(149,280,70,74,slate)+R(244,277,184,62,'url(#glass)')+
    T(15,268,'ALTERATIONS',15,ivory,'bold',2)+T(271,267,'OPEN  DAILY',12,ivory,'bold',1.8)+
    S('M0 348L960 334V540H0Z',teal)+S('M0 352L960 334 960 397 0 430Z',paper)+
    L('M0 431L960 398',deep,3)+S('M0 448L960 412 960 420 0 456Z',sage)+
    S('M0 110L426 208 353 208 0 139Z',slate)+S('M0 119L408 214 229 195 0 153Z','url(#shade)');
  a+=walker(362,357,.65,1,teal,1)+walker(826,346,.54,-1,deep,0);
  a+=G('translate(530 152)',R(0,43,242,143,'url(#metal)')+R(3,50,236,81,deep)+
    R(12,54,90,68,'url(#glass)')+R(109,54,120,69,black)+R(3,128,238,6,paper)+
    R(-4,132,249,6,deep)+R(10,142,217,36,'url(#dots)')+R(10,180,217,5,deep)+
    E(31,189,13,13,black)+E(31,189,7,7,sage)+E(211,189,13,13,black)+E(211,189,7,7,sage)+
    S('M-12 48L18 19 195 14 248 45 243 53 0 54Z',ivory)+
    A(7,i=>S('M'+(-7+i*36)+' 46l17 -26 15 -1 -9 27Z',rust))+
    R(-3,46,248,9,rust)+R(19,154,87,16,black)+T(25,166,'COFFEE',12,ivory,'bold',2)+
    G('translate(146 117)',S('M-24 8L-19 -14Q-10 -29 5 -28Q22 -26 25 5Z',teal)+
      S('M-8 -33Q-11 -44 -2 -48Q11 -53 15 -41L13 -32 8 -28Z',ochre)+
      S('M-12 -42L-6 -53 9 -54 16 -46 22 -44 18 -41Z',ivory)+
      S('M-16 -13L-22 0 -37 3 -39 0 -26 -6 -22 -19Z',ochre))+
    smallCup(104,123,.33)+smallCup(98,124,.37)+
    R(8,63,31,36,paper)+A(4,i=>R(11,68+i*6,18-i*2,.9,slate)));
  a+=R(463,125,5.5,224,deep)+L('M465 133q0 -27 22-28h12',deep,4)+
    R(485,104,35,48,black,5)+R(489,108,26,38,stone,4)+R(492,111,20,32,deep,3);
  a+=A(7,i=>S('M'+(10+i*144)+' 517l78 -54 31 -1 -68 56Z',paper));
  return a;
}
function doorway(){
  let a=R(0,0,960,540,'url(#wall)')+R(0,0,251,362,slate)+R(0,0,251,362,'url(#dots)');
  for(let i=0;i<13;i++) {
    a+=L('M250 '+(i*25)+'H960',stone,1);
    for(let j=0;j<7;j++)a+=L('M'+(250+j*127+(i%2)*58)+' '+(i*25)+'v25',stone,.8);
  }
  // Entry opening and an elliptical fanlight.
  a+=S('M375 379V151C375 15 665 15 665 151V379Z',ochre)+
    S('M398 369V151C398 46 642 46 642 151V369Z',deep)+
    S('M410 150C413 60 626 60 631 150Z','url(#glass)')+
    A(9,i=>{let q=Math.PI+(i+1)*Math.PI/10;return L('M520 150L'+(520+109*Math.cos(q))+' '+(150+81*Math.sin(q)),brass,2.7);})+
    L('M410 151H631',brass,5)+R(405,159,227,209,black)+
    R(410,166,92,191,'url(#glass)')+R(416,173,80,77,teal)+R(417,260,79,85,slate)+
    R(415,250,84,7,brass)+R(498,164,6,192,brass)+
    S('M548 163L622 170 622 347 549 361Z',ochre)+
    S('M555 177L615 182 615 248 555 246Z','url(#glass)')+
    S('M555 257L616 255 616 337 555 347Z',slate)+
    L('M551 169v184',brass,4)+L('M560 244v21q0 7 4 6',paper,3);
  for(const x of [285,702]) {
    a+=R(x,35,58,302,stone)+R(x+3,36,43,300,paper)+R(x+14,41,17,291,ivory)
      +A(5,i=>L('M'+(x+7+i*8)+' 62v250',ochre,1.4))+
      R(x-6,29,69,8,teal)+R(x-9,20,76,10,ochre)+R(x-7,335,71,11,stone)+
      R(x-14,344,83,13,paper)+R(x-17,357,90,7,slate);
  }
  a+=R(0,357,960,4,slate);
  for(let i=0;i<8;i++){
    const y=363+i*17;
    a+=S('M0 '+y+'H960v10H0Z',i%2?paper:ochre)+R(0,y+10,960,7,i%2?stone:slate)+L('M0 '+y+'H960',ivory,1.3);
  }
  a+=S('M0 0L247 0 671 540 515 540Z','#293e3c','opacity=".37"')+
    S('M197 0L241 0 667 540 622 540Z','url(#shade)','opacity=".38"');
  // Left wall carries the street name, fine at classroom projection size.
  a+=R(34,167,184,40,black)+R(38,171,176,1.4,brass)+T(45,195,'W 116 ST',22,paper,'bold',1.1);
  a+=L('M85 442L240 335M82 444v38M147 402v28M231 344v19',black,4.5)+
    L('M718 425L885 334M722 424v36M786 388v29M877 341v20',deep,4.5)+
    S('M960 0H880Q895 24 874 32Q854 23 837 51Q813 45 799 72Q824 86 853 73Q884 93 901 70Q922 76 945 63Z',deep);
  return a;
}
function closeCounter(){
  let a=R(0,0,960,540,'url(#glass)')+R(0,0,960,540,'url(#dots)');
  a+=S('M0 0H493L192 292H0Z',teal)+S('M96 0h25L0 118V94Z',fog)+
    S('M213 0h12L0 214v-14Z',sage)+R(0,0,960,12,black)+R(31,0,15,310,deep)+
    R(49,0,3.5,310,paper)+R(636,0,10,320,black)+R(649,0,3,320,ochre)+
    G('translate(700 34) rotate(3)',R(0,0,206,172,paper)+R(9,9,187,155,ivory)+
      T(23,47,'COFFEE',32,deep,'bold',1)+R(22,59,157,2,rust)+T(22,86,'SMALL',13,deep,'bold',2)+
      T(22,110,'REGULAR',13,deep,'bold',2)+T(22,134,'CREAM',13,deep,'bold',2)+A(3,i=>R(133,78+i*24,35,1,stone)))+
    S('M0 322L960 259V540H0Z',ochre)+S('M0 321L960 256 960 269 0 338Z',paper)+
    S('M0 355L960 278 960 309 0 395Z','url(#shade)')+
    S('M0 474L960 371 960 540H0Z',stone)+L('M0 476L960 372',ivory,3)+
    E(524,384,149,17,'#817c68')+E(354,423,179,21,'#8b8068');
  return a;
}
function bigCup(){
  return L('M119 48Q161 27 154 65Q151 94 113 111',stone,13)+L('M120 45Q157 29 151 64Q147 91 112 105',ivory,8)+
    S('M12 24L28 145Q69 164 111 142L129 22Z',ivory)+
    S('M89 31L128 22 111 142Q98 148 86 150Z',ochre)+
    S('M18 56Q69 73 123 50L119 74Q72 96 21 79Z',rust)+
    S('M23 84Q74 102 119 79L117 89Q73 110 24 94Z',rust)+
    E(71,23,60,16,deep)+E(70,20,58,14,ivory)+E(70,20,51,9,stone)+
    E(70,21,45,6,deep)+L('M26 125q40 17 85-2',ochre,1.8)+L('M30 141q39 17 77-1',stone,2.2)+
    L('M30 37q18 5 39 5',white,2.5);
}
function hand(){
  return S('M-5 9Q62 8 97 25L147 62Q172 76 202 80L237 84Q265 89 261 98Q257 103 234 99L204 96 224 108Q249 115 244 124Q238 130 222 124L189 114 206 131Q220 143 211 148Q203 152 193 144L165 126 180 145Q188 156 181 160Q174 164 161 151L129 126Q115 118 96 111L51 88 -5 75Z',ochre)+
   S('M-2 12Q72 14 102 37L145 69Q167 83 197 86L231 90Q246 91 258 96L235 97 193 93Q163 89 144 80L113 69Z',paper)+
   L('M132 95q13 22 31 30m-12-31q12 15 33 24m-64-33q9 19 19 27m74-20-15-3',stone,2)+
   S('M0 0L62 5 94 32 73 96 0 80Z',slate)+S('M62 7L83 20 96 31 73 94 59 91Z',rust)+
   S('M0 4L57 9 74 21 56 81 0 72Z','url(#paperLines)')+L('M65 82l18-53',ivory,1.5);
}
function macroDoor(){
  return R(0,0,960,540,deep)+R(0,0,333,540,'url(#wall)')+
    A(7,i=>L('M0 '+(i*81)+'L319 '+(i*81-21),ochre,2))+
    R(264,0,41,540,slate)+R(272,0,5,540,paper)+R(310,0,93,540,black)+
    S('M489 0L960 0V540L425 540Z',brass)+
    S('M514 0H960V233L489 272Z','url(#glass)')+
    S('M536 0H672L490 225Z',sage)+S('M715 0h21L519 244l-28 3Z',teal)+
    S('M485 295L960 254V540H453Z','url(#glass)')+
    L('M494 0L435 540',paper,7)+L('M481 0L424 540',deep,8)+
    S('M537 186l23 3 -12 101 -25 3Z',stone)+
    L('M548 198l-9 9 -8 57 5 9',deep,12)+L('M548 196l-9 9 -8 57 5 9',paper,6)+
    E(603,320,3,4,ochre)+R(0,0,960,540,'url(#dots)');
}
function van(){
  return S('M8 30Q12 18 28 18L250 13Q267 12 279 20L320 58 363 70Q372 73 373 87L375 114 357 120H14L2 112Z',slate)+
    S('M19 27L244 22 251 85 13 93Z',sage)+S('M20 31L212 26 146 84 14 88Z','url(#shade)')+
    S('M270 24L285 32 313 60 267 61Z','url(#glass)')+R(265,66,10,2,ivory)+
    L('M256 24l5 89m-238-17 228-10',deep,2)+R(0,105,374,7,deep)+
    A(2,i=>G('translate('+(i?299:67)+' 112)',E(0,0,21,21,black)+E(0,0,12,12,stone)+E(0,0,6,6,slate)))+
    T(39,57,'FRESH BREAD',13,deep,'bold',2.4);
}
await plate('street',960,540,street());
await plate('entry',960,540,doorway());
await plate('panorama',1440,540,skyline(1440,540,47,422)+R(0,422,1440,118,slate));
await plate('counter',960,540,closeCounter());
await plate('door',960,540,macroDoor());
await plate('cup',164,166,bigCup(),3);
await plate('hand',271,166,hand(),3);
await plate('van',390,143,van(),2);
await plate('walker',110,126,walker(49,115,.97,1,deep,1),3);
await plate('walker2',110,126,walker(47,115,.99,-1,teal,0),3);
const rnd=random(1954),gr=Buffer.alloc(192*192*4);
for(let i=0;i<gr.length;i+=4){const v=rnd()>.48?245:26;gr[i]=v;gr[i+1]=v;gr[i+2]=v;gr[i+3]=Math.floor(6+rnd()*31);}
await sharp(gr,{raw:{width:192,height:192,channels:4}}).png().toFile(out+'/grain.png');
console.log('Cut and printed the eleven scene plates.');
