// One clock drives the MP4 and Remotion Studio. Coordinates are in a 960 x 540 print.
export const names = ['street','entry','panorama','counter','door','cup','hand','van','walker','walker2','grain'] as const;
export type Plates = Record<typeof names[number], CanvasImageSource>;
export type Shot = {id:string;start:number;end:number};
export type Caption = {start:number;end:number;text:string};
type Ctx=CanvasRenderingContext2D;
const W=960,H=540,D='#17292b',P='#efdfbf',R='#b9503d',S='#687f79',G='#baa374';
const clamp=(x:number)=>Math.min(1,Math.max(0,x));
const ease=(x:number)=>{const z=clamp(x);return z*z*(3-2*z);};
const lerp=(a:number,b:number,f:number)=>a+(b-a)*f;
const pulse=(t:number,at:number,tail=.19)=>Math.exp(-(((t-at)/tail)**2));
const path=(c:Ctx,d:[number,number][],color:string,width=1,close=false)=>{
  c.beginPath();c.moveTo(...d[0]);for(const xy of d.slice(1))c.lineTo(...xy);
  if(close){c.closePath();c.fillStyle=color;c.fill();}
  else{c.strokeStyle=color;c.lineWidth=width;c.lineCap='round';c.lineJoin='round';c.stroke();}
};
function box(c:Ctx,x:number,y:number,w:number,h:number,color:string){c.fillStyle=color;c.fillRect(x,y,w,h);}
function ellipse(c:Ctx,x:number,y:number,rx:number,ry:number,color:string){
  c.fillStyle=color;c.beginPath();c.ellipse(x,y,rx,ry,0,0,Math.PI*2);c.fill();
}
function label(c:Ctx,text:string,x:number,y:number,size:number,color=P,font='CitySans',align:CanvasTextAlign='left'){
  c.textAlign=align;c.textBaseline='alphabetic';c.fillStyle=color;c.font=size+'px '+font;c.fillText(text,x,y);
}
function plate(c:Ctx,source:CanvasImageSource,x:number,y:number,w:number,h:number){c.drawImage(source,x,y,w,h);}
function shade(c:Ctx,x1:number,y1:number,x2:number,y2:number,start:string,end:string){
  const g=c.createLinearGradient(x1,y1,x2,y2);g.addColorStop(0,start);g.addColorStop(1,end);
  c.fillStyle=g;c.fillRect(0,0,W,H);
}
function camera(c:Ctx,z:number,x:number,y:number){c.translate(x,y);c.scale(z,z);c.translate(-x,-y);}
function withAlpha(c:Ctx,alpha:number,draw:()=>void){if(alpha>0){c.save();c.globalAlpha*=clamp(alpha);draw();c.restore();}}
function tag(c:Ctx,text:string,t:number){
  withAlpha(c,Math.min(ease(t/.65),ease((4-t)/.8)),()=>{
    c.font='13px CityMono';const width=c.measureText(text).width;
    box(c,41,40,width+27,29,'rgba(20,37,39,.88)');box(c,41,40,3.5,29,R);
    label(c,text,55,59,13,P,'CityMono');
  });
}

export function railIndex(shot:Shot,t:number){
  let seconds:number;
  if(shot.id==='opening')seconds=t*1.06;
  else if(shot.id==='rail2')seconds=2.9+t*.91;
  else if(shot.id==='lastRail')seconds=7.5+t*.96;
  else return null;
  return Math.min(263,Math.floor(seconds*12));
}
function rail(c:Ctx,shot:Shot,t:number,railImage:CanvasImageSource){
  plate(c,railImage,0,0,W,H);
  shade(c,0,540,0,289,'rgba(19,37,36,.38)','rgba(19,37,36,0)');
  if(shot.id==='opening'){
    const a=ease((t-.45)/1.0)*ease((10.35-t)/1.25);
    withAlpha(c,a,()=>{
      shade(c,0,0,655,0,'rgba(15,33,36,.97)','rgba(15,33,36,0)');
      const shift=(1-ease((t-.4)/1.4))*13;
      c.translate(-shift,0);
      box(c,50,65,34,3.5,'#ce6250');
      label(c,'A NEW YORK POETRY FILM',50,94,13,P,'CityMono');
      label(c,'One City',44,185,68,'#f4e8ce','CitySerif');
      label(c,'May Hide',44,263,69,'#f4e8ce','CitySerif');
      label(c,'Another',44,342,73,'#f4e8ce','CitySerif');
      label(c,'after Kenneth Koch',52,402,17,P,'CitySerifItalic');
    });
  } else if(shot.id==='rail2') tag(c,'THE SAME MORNING',t);
}
function windowScene(c:Ctx,m:Plates,t:number){
  const drift=t*20;
  plate(c,m.panorama,-87-drift,-5+.65*Math.sin(t*12),1440,540);
  // A faint reflection shares the window with the water towers.
  withAlpha(c,.16+.09*Math.sin(t*.33),()=>{
    c.save();c.translate(506,143);c.scale(1.4,1.4);
    ellipse(c,57,47,30,43,P);path(c,[[36,68],[52,99],[89,97],[79,55]],P,1,true);
    path(c,[[30,45],[26,22],[31,3],[63,-6],[86,13],[91,35],[72,29],[45,28]],D,1,true);
    path(c,[[54,96],[44,103],[10,116],[-9,179],[119,187],[112,127],[81,101]],D,1,true);
    c.restore();
  });
  withAlpha(c,.28,()=>{path(c,[[269,30],[303,30],[103,387],[83,387]],P,1,true);
    path(c,[[322,30],[334,30],[145,387],[136,387]],P,1,true);});
  const post=1080-(t*243)%1360;
  box(c,post,54,18,353,'#304543');box(c,post+12,54,4,352,S);
  box(c,0,0,W,43,D);box(c,0,43,W,9,S);box(c,0,52,W,3,P);
  box(c,0,404,W,13,D);box(c,0,417,W,7,G);box(c,0,424,W,116,'#344e4d');
  path(c,[[0,420],[960,420],[960,452],[0,496]],'#48605c',1,true);
  box(c,35,40,17,364,D);box(c,51,40,3.5,364,S);box(c,769,43,22,365,D);
  box(c,774,43,4,365,G);box(c,784,43,3,365,'#b9c2ae');
  for(const px of [112,628]){
    c.save();c.translate(px,45);c.rotate(.02*Math.sin(2.5*t+px));
    path(c,[[0,0],[0,42]],D,4);c.strokeStyle=G;c.lineWidth=4;c.beginPath();
    c.moveTo(0,42);c.bezierCurveTo(-14,42,-20,72,-2,73);c.bezierCurveTo(18,75,15,43,0,42);c.stroke();c.restore();
  }
  tag(c,'UPTOWN',t);
}
function steam(c:Ctx,x:number,y:number,s:number,t:number){
  c.save();c.translate(x,y);c.scale(s,s);
  for(let i=0;i<3;i++){const p=(t*.20+i*.31)%1;
    c.strokeStyle='rgba(249,239,209,'+(.34*Math.sin(p*Math.PI))+')';c.lineWidth=1.55;
    const h=9+p*40;const dx=Math.sin(t*1.1+i*2)*4;
    c.beginPath();c.moveTo(dx-8+i*7,-p*14);
    c.bezierCurveTo(dx+8,-h*.38,dx-13,-h*.68,dx+4,-h);c.stroke();
  }c.restore();
}
function trafficLight(c:Ctx,t:number){
  const walk=t>8.4;
  const color=walk?'#efe4c6':'#d86c4d';
  ellipse(c,502,118,3.2,3.2,color);
  if(walk){path(c,[[502,124],[499,131],[495,135]],color,2.2);
    path(c,[[501,125],[505,129],[508,130]],color,2.3);}
  else {path(c,[[500,124],[500,132],[505,132],[506,126]],color,3.6);}
}
function streetScene(c:Ctx,m:Plates,shot:Shot,t:number){
  const second=shot.id==='corner2', dur=shot.end-shot.start, p=t/dur, clock=p*14;
  c.save();camera(c,(second?1.07:1.025)+p*(second ? .13 : .05),second?635:444,second?275:241);
  plate(c,m.street,0,0,W,H);
  trafficLight(c,clock);
  steam(c,628,275,.39,clock);
  const beat=pulse(clock,6.20)+pulse(clock,6.58);
  path(c,[[649,267],[637,269],[630,273+3*beat]],'#d6d6bf',1.2);
  const ax=125+clock*30;
  plate(c,m.walker2,ax,290+1.1*Math.sin(clock*8),77,87);
  if(!second){
    const x=-526+116*clock;
    plate(c,m.van,x,210,625,238);
  }else{
    const x=-526+116*(clock+6.3);
    plate(c,m.van,x,210,625,238);
  }
  // A fixed street pole crosses the composition optically during the push-in.
  box(c,83,0,9,427,D);box(c,89,0,2,427,S);
  c.restore();
  if(!second)tag(c,'BROADWAY',t);
}
function secondHand(c:Ctx,t:number){
  const wiggle=Math.sin(t*.95)*.65;
  c.save();c.translate(542,252+wiggle);
  path(c,[[-16,2],[-8,-1],[2,-1],[8,1],[8,3],[3,3],[7,5],[6,7],[-1,6],[-7,5],[-13,8]],'#d1ab7b',1,true);
  path(c,[[-24,2],[-14,1],[-12,8],[-23,12]],'#834536',1,true);
  c.restore();
}
function entryScene(c:Ctx,m:Plates,shot:Shot,t:number){
  const second=shot.id==='entry2',p=t/(shot.end-shot.start),clock=p*14;
  c.save();camera(c,(second?1.095:1.03)+.08*p,second?520:442,240);
  plate(c,m.entry,0,0,W,H);
  secondHand(c,clock);
  // The hand belongs to somebody just inside. Both visits contain it.
  const x=700-49*clock;
  plate(c,m.walker,x,244+2*Math.sin(clock*3.9)+clock*1.35,106,122);
  const front=second?-277-clock*12:1075-clock*100;
  plate(c,m.walker2,front,219+3.5*Math.sin(clock*6.8),232,267);
  c.restore();
  if(!second)tag(c,'WEST 116TH STREET',t);
}
function notebook(c:Ctx,t:number){
  box(c,0,0,W,H,'#344b48');c.save();camera(c,1.03+.004*t,500,250);c.rotate(-.018);
  path(c,[[59,24],[1000,-7],[990,552],[34,585]],'#263936',1,true);
  path(c,[[44,7],[984,-12],[971,570],[19,566]],'#dfd1b2',1,true);
  for(let i=0;i<16;i++)path(c,[[46,38+i*38],[990,30+i*38]],'rgba(98,121,114,.38)',.8);
  for(let i=0;i<8;i++)ellipse(c,67,40+i*75,6,6,'#51615a');
  path(c,[[102,8],[87,556]],'#b87567',1.3);
  label(c,'FIELD NOTES',137,93,15,D,'CityMono');label(c,'before class',826,90,15,S,'CitySerifItalic','right');
  label(c,'Brooklyn',126,247,54,D,'CitySerif');
  const d=ease((t-.6)/4.5);
  path(c,[[366,231],[366+226*d,228]],R,3);
  ellipse(c,366,231,4,4,R);
  withAlpha(c,ease((t-4.4)/1),()=>{ellipse(c,593,228,4,4,R);label(c,'class',619,247,58,D,'CitySerif');});
  c.strokeStyle='rgba(149,91,58,.23)';c.lineWidth=6;c.beginPath();c.ellipse(806,475,88,67,-.2,.12,5.75);c.stroke();
  c.restore();
}
function cupScene(c:Ctx,m:Plates,t:number){
  c.save();camera(c,1.025+.035*t/17,500,290);
  plate(c,m.counter,0,0,W,H);
  const slide=ease((t-9.9)/5.8);
  plate(c,m.cup,414,249,157,159);steam(c,475,270,1.15,t+2.9);
  const x=376-196*slide;
  plate(c,m.cup,x,256,200,202);steam(c,x+83,275,1.45,t);
  const tap=pulse(t,6.90,.115)+pulse(t,7.28,.115);
  const withdraw=ease((t-8.4)/2.7);
  c.save();c.translate(0,-56*withdraw);
  // The spoon's bowl meets the near rim exactly on each sound transient.
  path(c,[[334,171+6*tap],[423,245+10*tap],[456,265+13*tap]],D,5.6);
  path(c,[[334,170+6*tap],[424,243+10*tap],[458,263+13*tap]],'#b6c7b9',3.2);
  c.save();c.translate(456,264+13*tap);c.rotate(.39);ellipse(c,0,0,11,4,D);
  ellipse(c,-1,-1.2,9,2.6,'#c4d2c0');c.restore();
  plate(c,m.hand,28,43+7*tap,340,208);c.restore();
  c.restore();
}
function handScene(c:Ctx,m:Plates,t:number){
  c.save();camera(c,1.055+t*.004,458,260);plate(c,m.door,0,0,W,H);
  const hold=1-ease((t-7.3)/3.4);
  c.save();c.translate(26-110*(1-hold),111+6*(1-hold));c.rotate(-.052);
  plate(c,m.hand,0,0,496,303);c.restore();
  const swing=20*(1-hold);
  path(c,[[484-swing,0],[490-swing,0],[438-swing,540],[429-swing,540]],'#283c3c',1,true);
  c.restore();
}
function credits(c:Ctx,t:number){
  box(c,0,0,W,H,'#e7d8b7');
  path(c,[[0,131],[260,131],[375,65],[960,65]],'#6f8377',1.6);
  path(c,[[0,141],[267,141],[383,75],[960,75]],'#6f8377',1.2);
  const x=lerp(263,710,ease(t/8));
  ellipse(c,x,x<375?131-(x-260)*.573:65,4,4,R);
  label(c,'One City May Hide Another',64,239,51,D,'CitySerif');
  box(c,69,264,82,3,R);
  label(c,'A visual response to Kenneth Koch’s',69,320,23,D,'CitySans');
  label(c,'One Train May Hide Another',68,357,29,D,'CitySerifItalic');
  label(c,'Dan Lin  /  Modern Poetry',69,424,17,D,'CityMono');
}
function caption(c:Ctx,line:Caption,t:number){
  const a=Math.min(ease((t-line.start)/.12),ease((line.end-t)/.15));
  withAlpha(c,a,()=>{
    c.font='21px CitySans';
    const width=c.measureText(line.text).width;
    const x=(W-width)/2;
    c.fillStyle='rgba(15,28,29,.89)';c.beginPath();c.roundRect(x-14,469,width+28,40,3);c.fill();
    label(c,line.text,W/2,496,21,'#fff5dc','CitySans','center');
  });
}
export function paint(c:Ctx,t:number,shot:Shot,plates:Plates,railImage:CanvasImageSource|null,captions:Caption[]){
  const local=t-shot.start;
  c.save();box(c,0,0,W,H,D);
  switch(shot.id){
    case 'opening':case 'rail2':case 'lastRail': if(railImage)rail(c,shot,local,railImage);break;
    case 'window':windowScene(c,plates,local);break;
    case 'corner1':case 'corner2':streetScene(c,plates,shot,local);break;
    case 'entry1':case 'entry2':entryScene(c,plates,shot,local);break;
    case 'notebook':notebook(c,local);break;
    case 'cup':cupScene(c,plates,local);break;
    case 'hand':handScene(c,plates,local);break;
    case 'credits':credits(c,local);break;
  }
  const grain=c.createPattern(plates.grain,'repeat');
  if(grain){c.save();c.globalAlpha=.51;c.fillStyle=grain;c.fillRect(0,0,W,H);c.restore();}
  const line=captions.find(item=>item.start<=t&&item.end>t);
  if(line)caption(c,line,t);
  if(shot.id==='credits'&&local>9.36)withAlpha(c,ease((local-9.36)/.64),()=>box(c,0,0,W,H,D));
  c.restore();
}
