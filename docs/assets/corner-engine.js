/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */var Un={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Kl=0,Ca=1,jl=2;var Pa=1,Ql=2,on=3,gn=0,Ce=1,an=2,yn=0,qn=1,Ia=2,Da=3,La=4,tc=5,Pn=100,ec=101,nc=102,ic=103,sc=104,rc=200,oc=201,ac=202,lc=203,ur=204,dr=205,cc=206,hc=207,uc=208,dc=209,fc=210,pc=211,mc=212,gc=213,_c=214,Xr=0,qr=1,Yr=2,Yn=3,Zr=4,Jr=5,$r=6,Kr=7,Ua=0,xc=1,yc=2,vn=0,vc=1,Mc=2,Sc=3,jr=4,bc=5,Ec=6,Tc=7;var Na=300,ni=301,ii=302,Qr=303,to=304,Ls=306,fr=1e3,Cn=1001,pr=1002,Ie=1003,wc=1004;var Us=1005;var Je=1006,eo=1007;var Fn=1008;var Qe=1009,Fa=1010,Oa=1011,Oi=1012,no=1013,On=1014,tn=1015,Bi=1016,io=1017,so=1018,zi=1020,Ba=35902,za=35899,ka=1021,Va=1022,We=1023,wi=1026,ki=1027,ro=1028,oo=1029,Ha=1030,ao=1031;var lo=1033,Ns=33776,Fs=33777,Os=33778,Bs=33779,co=35840,ho=35841,uo=35842,fo=35843,po=36196,mo=37492,go=37496,_o=37808,xo=37809,yo=37810,vo=37811,Mo=37812,So=37813,bo=37814,Eo=37815,To=37816,wo=37817,Ao=37818,Ro=37819,Co=37820,Po=37821,Io=36492,Do=36494,Lo=36495,Uo=36283,No=36284,Fo=36285,Oo=36286;var rs=2300,mr=2301,hr=2302,Ma=2400,Sa=2401,ba=2402;var Ac=3200,Rc=3201;var Ga=0,Cc=1,Mn="",Me="srgb",Zn="srgb-linear",os="linear",Jt="srgb";var Wn=7680;var Ea=519,Pc=512,Ic=513,Dc=514,Wa=515,Lc=516,Uc=517,Nc=518,Fc=519,Ta=35044;var Xa="300 es",Ze=2e3,as=2001;var nn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}},ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bl=1234567,es=Math.PI/180,Ai=180/Math.PI;function Vi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]).toLowerCase()}function Ot(i,t,e){return Math.max(t,Math.min(e,i))}function qa(i,t){return(i%t+t)%t}function Th(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function wh(i,t,e){return i!==t?(e-i)/(t-i):0}function ns(i,t,e){return(1-e)*i+e*t}function Ah(i,t,e,n){return ns(i,t,1-Math.exp(-e*n))}function Rh(i,t=1){return t-Math.abs(qa(i,t*2)-t)}function Ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Ih(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Dh(i,t){return i+Math.random()*(t-i)}function Lh(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(bl=i);let t=bl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Nh(i){return i*es}function Fh(i){return i*Ai}function Oh(i){return(i&i-1)===0&&i!==0}function Bh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function zh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function kh(i,t,e,n,s){let r=Math.cos,o=Math.sin,a=r(e/2),c=o(e/2),l=r((t+n)/2),h=o((t+n)/2),d=r((t-n)/2),f=o((t-n)/2),p=r((n-t)/2),g=o((n-t)/2);switch(s){case"XYX":i.set(a*h,c*d,c*f,a*l);break;case"YZY":i.set(c*f,a*h,c*d,a*l);break;case"ZXZ":i.set(c*d,c*f,a*h,a*l);break;case"XZX":i.set(a*h,c*g,c*p,a*l);break;case"YXY":i.set(c*p,a*h,c*g,a*l);break;case"ZYZ":i.set(c*g,c*p,a*h,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ei(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ae(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Ya={DEG2RAD:es,RAD2DEG:Ai,generateUUID:Vi,clamp:Ot,euclideanModulo:qa,mapLinear:Th,inverseLerp:wh,lerp:ns,damp:Ah,pingpong:Rh,smoothstep:Ch,smootherstep:Ph,randInt:Ih,randFloat:Dh,randFloatSpread:Lh,seededRandom:Uh,degToRad:Nh,radToDeg:Fh,isPowerOfTwo:Oh,ceilPowerOfTwo:Bh,floorPowerOfTwo:zh,setQuaternionFromProperEuler:kh,normalize:Ae,denormalize:Ei},pt=class i{constructor(t=0,e=0){i.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},He=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],d=n[s+3],f=r[o+0],p=r[o+1],g=r[o+2],y=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=y;return}if(d!==y||c!==f||l!==p||h!==g){let m=1-a,u=c*f+l*p+h*g+d*y,R=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){let A=Math.sqrt(x),C=Math.atan2(A,u*R);m=Math.sin(m*C)/A,a=Math.sin(a*C)/A}let S=a*R;if(c=c*m+f*S,l=l*m+p*S,h=h*m+g*S,d=d*m+y*S,m===1-a){let A=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=A,l*=A,h*=A,d*=A}}t[e]=c,t[e+1]=l,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],d=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*d+c*p-l*f,t[e+1]=c*g+h*f+l*d-a*p,t[e+2]=l*g+h*p+a*f-c*d,t[e+3]=h*g-a*d-c*f-l*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),d=a(r/2),f=c(n/2),p=c(s/2),g=c(r/2);switch(o){case"XYZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d+f*p*g;break;case"YZX":this._x=f*h*d+l*p*g,this._y=l*p*d+f*h*g,this._z=l*h*g-f*p*d,this._w=l*h*d-f*p*g;break;case"XZY":this._x=f*h*d-l*p*g,this._y=l*p*d-f*h*g,this._z=l*h*g+f*p*d,this._w=l*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],h=e[6],d=e[10],f=n+a+d;if(f>0){let p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-c)*p,this._y=(r-l)*p,this._z=(o-s)*p}else if(n>a&&n>d){let p=2*Math.sqrt(1+n-a-d);this._w=(h-c)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+l)/p}else if(a>d){let p=2*Math.sqrt(1+a-n-d);this._w=(r-l)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(c+h)/p}else{let p=2*Math.sqrt(1+d-n-a);this._w=(o-s)/p,this._x=(r+l)/p,this._y=(c+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,h=e._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);let n=this._x,s=this._y,r=this._z,o=this._w,a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;let c=1-a*a;if(c<=Number.EPSILON){let p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}let l=Math.sqrt(c),h=Math.atan2(l,a),d=Math.sin((1-e)*h)/l,f=Math.sin(e*h)/l;return this._w=o*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class i{constructor(t=0,e=0,n=0){i.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(El.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(El.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=2*(o*s-a*n),h=2*(a*e-r*s),d=2*(r*n-o*e);return this.x=e+c*l+o*d-a*h,this.y=n+c*h+a*l-r*d,this.z=s+c*d+r*h-o*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Zo.copy(this).projectOnVector(t),this.sub(Zo)}reflect(t){return this.sub(Zo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Ot(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Zo=new I,El=new He,Ft=class i{constructor(t,e,n,s,r,o,a,c,l){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l)}set(t,e,n,s,r,o,a,c,l){let h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],d=n[7],f=n[2],p=n[5],g=n[8],y=s[0],m=s[3],u=s[6],R=s[1],x=s[4],S=s[7],A=s[2],C=s[5],D=s[8];return r[0]=o*y+a*R+c*A,r[3]=o*m+a*x+c*C,r[6]=o*u+a*S+c*D,r[1]=l*y+h*R+d*A,r[4]=l*m+h*x+d*C,r[7]=l*u+h*S+d*D,r[2]=f*y+p*R+g*A,r[5]=f*m+p*x+g*C,r[8]=f*u+p*S+g*D,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8];return e*o*h-e*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=h*o-a*l,f=a*c-h*r,p=l*r-o*c,g=e*d+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let y=1/g;return t[0]=d*y,t[1]=(s*l-h*n)*y,t[2]=(a*n-s*o)*y,t[3]=f*y,t[4]=(h*e-s*c)*y,t[5]=(s*r-a*e)*y,t[6]=p*y,t[7]=(n*c-l*e)*y,t[8]=(o*e-n*r)*y,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-s*l,s*c,-s*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Jo.makeScale(t,e)),this}rotate(t){return this.premultiply(Jo.makeRotation(-t)),this}translate(t,e){return this.premultiply(Jo.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Jo=new Ft;function Za(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function ls(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oc(){let i=ls("canvas");return i.style.display="block",i}var Tl={};function Ri(i){i in Tl||(Tl[i]=!0,console.warn(i))}function Bc(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var wl=new Ft().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Al=new Ft().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Vh(){let i={enabled:!0,workingColorSpace:Zn,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Jt&&(s.r=mn(s.r),s.g=mn(s.g),s.b=mn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Jt&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Mn?os:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ri("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ri("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Zn]:{primaries:t,whitePoint:n,transfer:os,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Me},outputColorSpaceConfig:{drawingBufferColorSpace:Me}},[Me]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:wl,fromXYZ:Al,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Me}}}),i}var Gt=Vh();function mn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var ui,gr=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ui===void 0&&(ui=ls("canvas")),ui.width=t.width,ui.height=t.height;let s=ui.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=ui}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ls("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=mn(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mn(e[n]/255)*255):e[n]=mn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Hh=0,Ci=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hh++}),this.uuid=Vi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push($o(s[o].image)):r.push($o(s[o]))}else r=$o(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function $o(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?gr.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var Gh=0,Ko=new I,Re=class i extends nn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Cn,s=Cn,r=Je,o=Fn,a=We,c=Qe,l=i.DEFAULT_ANISOTROPY,h=Mn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gh++}),this.uuid=Vi(),this.name="",this.source=new Ci(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ft,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ko).x}get height(){return this.source.getSize(Ko).y}get depth(){return this.source.getSize(Ko).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Na)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fr:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case pr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fr:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case pr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Re.DEFAULT_IMAGE=null;Re.DEFAULT_MAPPING=Na;Re.DEFAULT_ANISOTROPY=1;var Zt=class i{constructor(t=0,e=0,n=0,s=1){i.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],h=c[4],d=c[8],f=c[1],p=c[5],g=c[9],y=c[2],m=c[6],u=c[10];if(Math.abs(h-f)<.01&&Math.abs(d-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+y)<.1&&Math.abs(g+m)<.1&&Math.abs(l+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let x=(l+1)/2,S=(p+1)/2,A=(u+1)/2,C=(h+f)/4,D=(d+y)/4,F=(g+m)/4;return x>S&&x>A?x<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(x),s=C/n,r=D/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=C/s,r=F/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=D/r,s=F/r),this.set(n,s,r,e),this}let R=Math.sqrt((m-g)*(m-g)+(d-y)*(d-y)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(d-y)/R,this.z=(f-h)/R,this.w=Math.acos((l+p+u-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Ot(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_r=class extends nn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Je,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Zt(0,0,t,e),this.scissorTest=!1,this.viewport=new Zt(0,0,t,e);let s={width:t,height:e,depth:n.depth},r=new Re(s);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Je,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Ci(s)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},sn=class extends _r{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},cs=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var xr=class extends Re{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ie,this.minFilter=Ie,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var rn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Xe.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Xe.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Xe.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Xe):Xe.fromBufferAttribute(r,o),Xe.applyMatrix4(t.matrixWorld),this.expandByPoint(Xe);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Hs.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Hs.copy(n.boundingBox)),Hs.applyMatrix4(t.matrixWorld),this.union(Hs)}let s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Xe),Xe.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Yi),Gs.subVectors(this.max,Yi),di.subVectors(t.a,Yi),fi.subVectors(t.b,Yi),pi.subVectors(t.c,Yi),Sn.subVectors(fi,di),bn.subVectors(pi,fi),kn.subVectors(di,pi);let e=[0,-Sn.z,Sn.y,0,-bn.z,bn.y,0,-kn.z,kn.y,Sn.z,0,-Sn.x,bn.z,0,-bn.x,kn.z,0,-kn.x,-Sn.y,Sn.x,0,-bn.y,bn.x,0,-kn.y,kn.x,0];return!jo(e,di,fi,pi,Gs)||(e=[1,0,0,0,1,0,0,0,1],!jo(e,di,fi,pi,Gs))?!1:(Ws.crossVectors(Sn,bn),e=[Ws.x,Ws.y,Ws.z],jo(e,di,fi,pi,Gs))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Xe).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Xe).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(hn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),hn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),hn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),hn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),hn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),hn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),hn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),hn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(hn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},hn=[new I,new I,new I,new I,new I,new I,new I,new I],Xe=new I,Hs=new rn,di=new I,fi=new I,pi=new I,Sn=new I,bn=new I,kn=new I,Yi=new I,Gs=new I,Ws=new I,Vn=new I;function jo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Vn.fromArray(i,r);let a=s.x*Math.abs(Vn.x)+s.y*Math.abs(Vn.y)+s.z*Math.abs(Vn.z),c=t.dot(Vn),l=e.dot(Vn),h=n.dot(Vn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Wh=new rn,Zi=new I,Qo=new I,_n=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Wh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zi.subVectors(t,this.center);let e=Zi.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zi,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Qo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zi.copy(t.center).add(Qo)),this.expandByPoint(Zi.copy(t.center).sub(Qo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},un=new I,ta=new I,Xs=new I,En=new I,ea=new I,qs=new I,na=new I,Jn=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,un)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=un.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(un.copy(this.origin).addScaledVector(this.direction,e),un.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ta.copy(t).add(e).multiplyScalar(.5),Xs.copy(e).sub(t).normalize(),En.copy(this.origin).sub(ta);let r=t.distanceTo(e)*.5,o=-this.direction.dot(Xs),a=En.dot(this.direction),c=-En.dot(Xs),l=En.lengthSq(),h=Math.abs(1-o*o),d,f,p,g;if(h>0)if(d=o*c-a,f=o*a-c,g=r*h,d>=0)if(f>=-g)if(f<=g){let y=1/h;d*=y,f*=y,p=d*(d+o*f+2*a)+f*(o*d+f+2*c)+l}else f=r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f=-r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;else f<=-g?(d=Math.max(0,-(-o*r+a)),f=d>0?-r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l):f<=g?(d=0,f=Math.min(Math.max(-r,-c),r),p=f*(f+2*c)+l):(d=Math.max(0,-(o*r+a)),f=d>0?r:Math.min(Math.max(-r,-c),r),p=-d*d+f*(f+2*c)+l);else f=o>0?-r:r,d=Math.max(0,-(o*f+a)),p=-d*d+f*(f+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ta).addScaledVector(Xs,f),p}intersectSphere(t,e){un.subVectors(t.center,this.origin);let n=un.dot(this.direction),s=un.dot(un)-n*n,r=t.radius*t.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return l>=0?(n=(t.min.x-f.x)*l,s=(t.max.x-f.x)*l):(n=(t.max.x-f.x)*l,s=(t.min.x-f.x)*l),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),d>=0?(a=(t.min.z-f.z)*d,c=(t.max.z-f.z)*d):(a=(t.max.z-f.z)*d,c=(t.min.z-f.z)*d),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,un)!==null}intersectTriangle(t,e,n,s,r){ea.subVectors(e,t),qs.subVectors(n,t),na.crossVectors(ea,qs);let o=this.direction.dot(na),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;En.subVectors(this.origin,t);let c=a*this.direction.dot(qs.crossVectors(En,qs));if(c<0)return null;let l=a*this.direction.dot(ea.cross(En));if(l<0||c+l>o)return null;let h=-a*En.dot(na);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ee=class i{constructor(t,e,n,s,r,o,a,c,l,h,d,f,p,g,y,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,c,l,h,d,f,p,g,y,m)}set(t,e,n,s,r,o,a,c,l,h,d,f,p,g,y,m){let u=this.elements;return u[0]=t,u[4]=e,u[8]=n,u[12]=s,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=y,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){let e=this.elements,n=t.elements,s=1/mi.setFromMatrixColumn(t,0).length(),r=1/mi.setFromMatrixColumn(t,1).length(),o=1/mi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let f=o*h,p=o*d,g=a*h,y=a*d;e[0]=c*h,e[4]=-c*d,e[8]=l,e[1]=p+g*l,e[5]=f-y*l,e[9]=-a*c,e[2]=y-f*l,e[6]=g+p*l,e[10]=o*c}else if(t.order==="YXZ"){let f=c*h,p=c*d,g=l*h,y=l*d;e[0]=f+y*a,e[4]=g*a-p,e[8]=o*l,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=y+f*a,e[10]=o*c}else if(t.order==="ZXY"){let f=c*h,p=c*d,g=l*h,y=l*d;e[0]=f-y*a,e[4]=-o*d,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=y-f*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){let f=o*h,p=o*d,g=a*h,y=a*d;e[0]=c*h,e[4]=g*l-p,e[8]=f*l+y,e[1]=c*d,e[5]=y*l+f,e[9]=p*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){let f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=y-f*d,e[8]=g*d+p,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-l*h,e[6]=p*d+g,e[10]=f-y*d}else if(t.order==="XZY"){let f=o*c,p=o*l,g=a*c,y=a*l;e[0]=c*h,e[4]=-d,e[8]=l*h,e[1]=f*d+y,e[5]=o*h,e[9]=p*d-g,e[2]=g*d-p,e[6]=a*h,e[10]=y*d+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Xh,t,qh)}lookAt(t,e,n){let s=this.elements;return Ne.subVectors(t,e),Ne.lengthSq()===0&&(Ne.z=1),Ne.normalize(),Tn.crossVectors(n,Ne),Tn.lengthSq()===0&&(Math.abs(n.z)===1?Ne.x+=1e-4:Ne.z+=1e-4,Ne.normalize(),Tn.crossVectors(n,Ne)),Tn.normalize(),Ys.crossVectors(Ne,Tn),s[0]=Tn.x,s[4]=Ys.x,s[8]=Ne.x,s[1]=Tn.y,s[5]=Ys.y,s[9]=Ne.y,s[2]=Tn.z,s[6]=Ys.z,s[10]=Ne.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],d=n[5],f=n[9],p=n[13],g=n[2],y=n[6],m=n[10],u=n[14],R=n[3],x=n[7],S=n[11],A=n[15],C=s[0],D=s[4],F=s[8],b=s[12],E=s[1],U=s[5],V=s[9],N=s[13],k=s[2],Y=s[6],Z=s[10],et=s[14],G=s[3],ht=s[7],ft=s[11],Tt=s[15];return r[0]=o*C+a*E+c*k+l*G,r[4]=o*D+a*U+c*Y+l*ht,r[8]=o*F+a*V+c*Z+l*ft,r[12]=o*b+a*N+c*et+l*Tt,r[1]=h*C+d*E+f*k+p*G,r[5]=h*D+d*U+f*Y+p*ht,r[9]=h*F+d*V+f*Z+p*ft,r[13]=h*b+d*N+f*et+p*Tt,r[2]=g*C+y*E+m*k+u*G,r[6]=g*D+y*U+m*Y+u*ht,r[10]=g*F+y*V+m*Z+u*ft,r[14]=g*b+y*N+m*et+u*Tt,r[3]=R*C+x*E+S*k+A*G,r[7]=R*D+x*U+S*Y+A*ht,r[11]=R*F+x*V+S*Z+A*ft,r[15]=R*b+x*N+S*et+A*Tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],h=t[2],d=t[6],f=t[10],p=t[14],g=t[3],y=t[7],m=t[11],u=t[15];return g*(+r*c*d-s*l*d-r*a*f+n*l*f+s*a*p-n*c*p)+y*(+e*c*p-e*l*f+r*o*f-s*o*p+s*l*h-r*c*h)+m*(+e*l*d-e*a*p-r*o*d+n*o*p+r*a*h-n*l*h)+u*(-s*a*h-e*c*d+e*a*f+s*o*d-n*o*f+n*c*h)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],h=t[8],d=t[9],f=t[10],p=t[11],g=t[12],y=t[13],m=t[14],u=t[15],R=d*m*l-y*f*l+y*c*p-a*m*p-d*c*u+a*f*u,x=g*f*l-h*m*l-g*c*p+o*m*p+h*c*u-o*f*u,S=h*y*l-g*d*l+g*a*p-o*y*p-h*a*u+o*d*u,A=g*d*c-h*y*c-g*a*f+o*y*f+h*a*m-o*d*m,C=e*R+n*x+s*S+r*A;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let D=1/C;return t[0]=R*D,t[1]=(y*f*r-d*m*r-y*s*p+n*m*p+d*s*u-n*f*u)*D,t[2]=(a*m*r-y*c*r+y*s*l-n*m*l-a*s*u+n*c*u)*D,t[3]=(d*c*r-a*f*r-d*s*l+n*f*l+a*s*p-n*c*p)*D,t[4]=x*D,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*u+e*f*u)*D,t[6]=(g*c*r-o*m*r-g*s*l+e*m*l+o*s*u-e*c*u)*D,t[7]=(o*f*r-h*c*r+h*s*l-e*f*l-o*s*p+e*c*p)*D,t[8]=S*D,t[9]=(g*d*r-h*y*r-g*n*p+e*y*p+h*n*u-e*d*u)*D,t[10]=(o*y*r-g*a*r+g*n*l-e*y*l-o*n*u+e*a*u)*D,t[11]=(h*a*r-o*d*r-h*n*l+e*d*l+o*n*p-e*a*p)*D,t[12]=A*D,t[13]=(h*y*s-g*d*s+g*n*f-e*y*f-h*n*m+e*d*m)*D,t[14]=(g*a*s-o*y*s-g*n*c+e*y*c+o*n*m-e*a*m)*D,t[15]=(o*d*s-h*a*s+h*n*c-e*d*c-o*n*f+e*a*f)*D,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,h=o+o,d=a+a,f=r*l,p=r*h,g=r*d,y=o*h,m=o*d,u=a*d,R=c*l,x=c*h,S=c*d,A=n.x,C=n.y,D=n.z;return s[0]=(1-(y+u))*A,s[1]=(p+S)*A,s[2]=(g-x)*A,s[3]=0,s[4]=(p-S)*C,s[5]=(1-(f+u))*C,s[6]=(m+R)*C,s[7]=0,s[8]=(g+x)*D,s[9]=(m-R)*D,s[10]=(1-(f+y))*D,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements,r=mi.set(s[0],s[1],s[2]).length(),o=mi.set(s[4],s[5],s[6]).length(),a=mi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],qe.copy(this);let l=1/r,h=1/o,d=1/a;return qe.elements[0]*=l,qe.elements[1]*=l,qe.elements[2]*=l,qe.elements[4]*=h,qe.elements[5]*=h,qe.elements[6]*=h,qe.elements[8]*=d,qe.elements[9]*=d,qe.elements[10]*=d,e.setFromRotationMatrix(qe),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=Ze,c=!1){let l=this.elements,h=2*r/(e-t),d=2*r/(n-s),f=(e+t)/(e-t),p=(n+s)/(n-s),g,y;if(c)g=r/(o-r),y=o*r/(o-r);else if(a===Ze)g=-(o+r)/(o-r),y=-2*o*r/(o-r);else if(a===as)g=-o/(o-r),y=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=d,l[9]=p,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=Ze,c=!1){let l=this.elements,h=2/(e-t),d=2/(n-s),f=-(e+t)/(e-t),p=-(n+s)/(n-s),g,y;if(c)g=1/(o-r),y=o/(o-r);else if(a===Ze)g=-2/(o-r),y=-(o+r)/(o-r);else if(a===as)g=-1/(o-r),y=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=f,l[1]=0,l[5]=d,l[9]=0,l[13]=p,l[2]=0,l[6]=0,l[10]=g,l[14]=y,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},mi=new I,qe=new ee,Xh=new I(0,0,0),qh=new I(1,1,1),Tn=new I,Ys=new I,Ne=new I,Rl=new ee,Cl=new He,$e=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-Ot(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Rl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Rl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Cl.setFromEuler(this),this.setFromQuaternion(Cl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};$e.DEFAULT_ORDER="XYZ";var hs=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Yh=0,Pl=new I,gi=new He,dn=new ee,Zs=new I,Ji=new I,Zh=new I,Jh=new He,Il=new I(1,0,0),Dl=new I(0,1,0),Ll=new I(0,0,1),Ul={type:"added"},$h={type:"removed"},_i={type:"childadded",child:null},ia={type:"childremoved",child:null},fe=class i extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Yh++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new I,e=new $e,n=new He,s=new I(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ee},normalMatrix:{value:new Ft}}),this.matrix=new ee,this.matrixWorld=new ee,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.multiply(gi),this}rotateOnWorldAxis(t,e){return gi.setFromAxisAngle(t,e),this.quaternion.premultiply(gi),this}rotateX(t){return this.rotateOnAxis(Il,t)}rotateY(t){return this.rotateOnAxis(Dl,t)}rotateZ(t){return this.rotateOnAxis(Ll,t)}translateOnAxis(t,e){return Pl.copy(t).applyQuaternion(this.quaternion),this.position.add(Pl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Il,t)}translateY(t){return this.translateOnAxis(Dl,t)}translateZ(t){return this.translateOnAxis(Ll,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Zs.copy(t):Zs.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Ji.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?dn.lookAt(Ji,Zs,this.up):dn.lookAt(Zs,Ji,this.up),this.quaternion.setFromRotationMatrix(dn),s&&(dn.extractRotation(s.matrixWorld),gi.setFromRotationMatrix(dn),this.quaternion.premultiply(gi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Ul),_i.child=t,this.dispatchEvent(_i),_i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent($h),ia.child=t,this.dispatchEvent(ia),ia.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Ul),_i.child=t,this.dispatchEvent(_i),_i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,t,Zh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ji,Jh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(t.shapes,d)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(t.animations,c))}}if(e){let a=o(t.geometries),c=o(t.materials),l=o(t.textures),h=o(t.images),d=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}};fe.DEFAULT_UP=new I(0,1,0);fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ye=new I,fn=new I,sa=new I,pn=new I,xi=new I,yi=new I,Nl=new I,ra=new I,oa=new I,aa=new I,la=new Zt,ca=new Zt,ha=new Zt,Rn=class i{constructor(t=new I,e=new I,n=new I){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ye.subVectors(t,e),s.cross(Ye);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ye.subVectors(s,e),fn.subVectors(n,e),sa.subVectors(t,e);let o=Ye.dot(Ye),a=Ye.dot(fn),c=Ye.dot(sa),l=fn.dot(fn),h=fn.dot(sa),d=o*l-a*a;if(d===0)return r.set(0,0,0),null;let f=1/d,p=(l*c-a*h)*f,g=(o*h-a*c)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,pn)===null?!1:pn.x>=0&&pn.y>=0&&pn.x+pn.y<=1}static getInterpolation(t,e,n,s,r,o,a,c){return this.getBarycoord(t,e,n,s,pn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,pn.x),c.addScaledVector(o,pn.y),c.addScaledVector(a,pn.z),c)}static getInterpolatedAttribute(t,e,n,s,r,o){return la.setScalar(0),ca.setScalar(0),ha.setScalar(0),la.fromBufferAttribute(t,e),ca.fromBufferAttribute(t,n),ha.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(la,r.x),o.addScaledVector(ca,r.y),o.addScaledVector(ha,r.z),o}static isFrontFacing(t,e,n,s){return Ye.subVectors(n,e),fn.subVectors(t,e),Ye.cross(fn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ye.subVectors(this.c,this.b),fn.subVectors(this.a,this.b),Ye.cross(fn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,o,a;xi.subVectors(s,n),yi.subVectors(r,n),ra.subVectors(t,n);let c=xi.dot(ra),l=yi.dot(ra);if(c<=0&&l<=0)return e.copy(n);oa.subVectors(t,s);let h=xi.dot(oa),d=yi.dot(oa);if(h>=0&&d<=h)return e.copy(s);let f=c*d-h*l;if(f<=0&&c>=0&&h<=0)return o=c/(c-h),e.copy(n).addScaledVector(xi,o);aa.subVectors(t,r);let p=xi.dot(aa),g=yi.dot(aa);if(g>=0&&p<=g)return e.copy(r);let y=p*l-c*g;if(y<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(yi,a);let m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return Nl.subVectors(r,s),a=(d-h)/(d-h+(p-g)),e.copy(s).addScaledVector(Nl,a);let u=1/(m+y+f);return o=y*u,a=f*u,e.copy(n).addScaledVector(xi,o).addScaledVector(yi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},zc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wn={h:0,s:0,l:0},Js={h:0,s:0,l:0};function ua(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Bt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Me){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Gt.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=Gt.workingColorSpace){if(t=qa(t,1),e=Ot(e,0,1),n=Ot(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=ua(o,r,t+1/3),this.g=ua(o,r,t),this.b=ua(o,r,t-1/3)}return Gt.colorSpaceToWorking(this,s),this}setStyle(t,e=Me){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Me){let n=zc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mn(t.r),this.g=mn(t.g),this.b=mn(t.b),this}copyLinearToSRGB(t){return this.r=Ti(t.r),this.g=Ti(t.g),this.b=Ti(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Me){return Gt.workingToColorSpace(ve.copy(this),t),Math.round(Ot(ve.r*255,0,255))*65536+Math.round(Ot(ve.g*255,0,255))*256+Math.round(Ot(ve.b*255,0,255))}getHexString(t=Me){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(ve.copy(this),e);let n=ve.r,s=ve.g,r=ve.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let d=o-a;switch(l=h<=.5?d/(o+a):d/(2-o-a),o){case n:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-n)/d+2;break;case r:c=(n-s)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Me){Gt.workingToColorSpace(ve.copy(this),t);let e=ve.r,n=ve.g,s=ve.b;return t!==Me?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(wn),this.setHSL(wn.h+t,wn.s+e,wn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(wn),t.getHSL(Js);let n=ns(wn.h,Js.h,e),s=ns(wn.s,Js.s,e),r=ns(wn.l,Js.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ve=new Bt;Bt.NAMES=zc;var Kh=0,xn=class extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=qn,this.side=gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ur,this.blendDst=dr,this.blendEquation=Pn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Bt(0,0,0),this.blendAlpha=0,this.depthFunc=Yn,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ea,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wn,this.stencilZFail=Wn,this.stencilZPass=Wn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==qn&&(n.blending=this.blending),this.side!==gn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ur&&(n.blendSrc=this.blendSrc),this.blendDst!==dr&&(n.blendDst=this.blendDst),this.blendEquation!==Pn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Yn&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ea&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Wn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Wn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Wn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(e){let r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},$n=class extends xn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.combine=Ua,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var ue=new I,$s=new pt,jh=0,Se=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:jh++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ta,this.updateRanges=[],this.gpuType=tn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)$s.fromBufferAttribute(this,e),$s.applyMatrix3(t),this.setXY(e,$s.x,$s.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix3(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyMatrix4(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.applyNormalMatrix(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ue.fromBufferAttribute(this,e),ue.transformDirection(t),this.setXYZ(e,ue.x,ue.y,ue.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ei(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ei(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ei(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ei(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ei(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),s=Ae(s,this.array),r=Ae(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ta&&(t.usage=this.usage),t}};var us=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ds=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ne=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},Qh=0,ke=new ee,da=new fe,vi=new I,Fe=new rn,$i=new rn,_e=new I,be=class i extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qh++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Za(t)?ds:us)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Ft().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ke.makeRotationFromQuaternion(t),this.applyMatrix4(ke),this}rotateX(t){return ke.makeRotationX(t),this.applyMatrix4(ke),this}rotateY(t){return ke.makeRotationY(t),this.applyMatrix4(ke),this}rotateZ(t){return ke.makeRotationZ(t),this.applyMatrix4(ke),this}translate(t,e,n){return ke.makeTranslation(t,e,n),this.applyMatrix4(ke),this}scale(t,e,n){return ke.makeScale(t,e,n),this.applyMatrix4(ke),this}lookAt(t){return da.lookAt(t),da.updateMatrix(),this.applyMatrix4(da.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vi).negate(),this.translate(vi.x,vi.y,vi.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ne(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];Fe.setFromBufferAttribute(r),this.morphTargetsRelative?(_e.addVectors(this.boundingBox.min,Fe.min),this.boundingBox.expandByPoint(_e),_e.addVectors(this.boundingBox.max,Fe.max),this.boundingBox.expandByPoint(_e)):(this.boundingBox.expandByPoint(Fe.min),this.boundingBox.expandByPoint(Fe.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _n);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let n=this.boundingSphere.center;if(Fe.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(_e.addVectors(Fe.min,$i.min),Fe.expandByPoint(_e),_e.addVectors(Fe.max,$i.max),Fe.expandByPoint(_e)):(Fe.expandByPoint($i.min),Fe.expandByPoint($i.max))}Fe.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)_e.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(_e));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)_e.fromBufferAttribute(a,l),c&&(vi.fromBufferAttribute(t,l),_e.add(vi)),s=Math.max(s,n.distanceToSquared(_e))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Se(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],c=[];for(let F=0;F<n.count;F++)a[F]=new I,c[F]=new I;let l=new I,h=new I,d=new I,f=new pt,p=new pt,g=new pt,y=new I,m=new I;function u(F,b,E){l.fromBufferAttribute(n,F),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,E),f.fromBufferAttribute(r,F),p.fromBufferAttribute(r,b),g.fromBufferAttribute(r,E),h.sub(l),d.sub(l),p.sub(f),g.sub(f);let U=1/(p.x*g.y-g.x*p.y);isFinite(U)&&(y.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(U),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(U),a[F].add(y),a[b].add(y),a[E].add(y),c[F].add(m),c[b].add(m),c[E].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:t.count}]);for(let F=0,b=R.length;F<b;++F){let E=R[F],U=E.start,V=E.count;for(let N=U,k=U+V;N<k;N+=3)u(t.getX(N+0),t.getX(N+1),t.getX(N+2))}let x=new I,S=new I,A=new I,C=new I;function D(F){A.fromBufferAttribute(s,F),C.copy(A);let b=a[F];x.copy(b),x.sub(A.multiplyScalar(A.dot(b))).normalize(),S.crossVectors(C,b);let U=S.dot(c[F])<0?-1:1;o.setXYZW(F,x.x,x.y,x.z,U)}for(let F=0,b=R.length;F<b;++F){let E=R[F],U=E.start,V=E.count;for(let N=U,k=U+V;N<k;N+=3)D(t.getX(N+0)),D(t.getX(N+1)),D(t.getX(N+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);let s=new I,r=new I,o=new I,a=new I,c=new I,l=new I,h=new I,d=new I;if(t)for(let f=0,p=t.count;f<p;f+=3){let g=t.getX(f+0),y=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,y),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,y),l.fromBufferAttribute(n,m),a.add(h),c.add(h),l.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(y,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_e.fromBufferAttribute(t,e),_e.normalize(),t.setXYZ(e,_e.x,_e.y,_e.z)}toNonIndexed(){function t(a,c){let l=a.array,h=a.itemSize,d=a.normalized,f=new l.constructor(c.length*h),p=0,g=0;for(let y=0,m=c.length;y<m;y++){a.isInterleavedBufferAttribute?p=c[y]*a.data.stride+a.offset:p=c[y]*h;for(let u=0;u<h;u++)f[g++]=l[p++]}return new Se(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=t(c,n);e.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,d=l.length;h<d;h++){let f=l[h],p=t(f,n);c.push(p)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,f=l.length;d<f;d++){let p=l[d];h.push(p.toJSON(t.data))}h.length>0&&(s[c]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(e))}let r=t.morphAttributes;for(let l in r){let h=[],d=r[l];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(e));this.morphAttributes[l]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let l=0,h=o.length;l<h;l++){let d=o[l];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},Fl=new ee,Hn=new Jn,Ks=new _n,Ol=new I,js=new I,Qs=new I,tr=new I,fa=new I,er=new I,Bl=new I,nr=new I,Ee=class extends fe{constructor(t=new be,e=new $n){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let a=this.morphTargetInfluences;if(r&&a){er.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],d=r[c];h!==0&&(fa.fromBufferAttribute(d,t),o?er.addScaledVector(fa,h):er.addScaledVector(fa.sub(e),h))}e.add(er)}return e}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ks.copy(n.boundingSphere),Ks.applyMatrix4(r),Hn.copy(t.ray).recast(t.near),!(Ks.containsPoint(Hn.origin)===!1&&(Hn.intersectSphere(Ks,Ol)===null||Hn.origin.distanceToSquared(Ol)>(t.far-t.near)**2))&&(Fl.copy(r).invert(),Hn.copy(t.ray).applyMatrix4(Fl),!(n.boundingBox!==null&&Hn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Hn)))}_computeIntersections(t,e,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],u=o[m.materialIndex],R=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,A=x;S<A;S+=3){let C=a.getX(S),D=a.getX(S+1),F=a.getX(S+2);s=ir(this,u,t,n,l,h,d,C,D,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){let R=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);s=ir(this,o,t,n,l,h,d,R,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,y=f.length;g<y;g++){let m=f[g],u=o[m.materialIndex],R=Math.max(m.start,p.start),x=Math.min(c.count,Math.min(m.start+m.count,p.start+p.count));for(let S=R,A=x;S<A;S+=3){let C=S,D=S+1,F=S+2;s=ir(this,u,t,n,l,h,d,C,D,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,p.start),y=Math.min(c.count,p.start+p.count);for(let m=g,u=y;m<u;m+=3){let R=m,x=m+1,S=m+2;s=ir(this,o,t,n,l,h,d,R,x,S),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};function tu(i,t,e,n,s,r,o,a){let c;if(t.side===Ce?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,t.side===gn,a),c===null)return null;nr.copy(a),nr.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(nr);return l<e.near||l>e.far?null:{distance:l,point:nr.clone(),object:i}}function ir(i,t,e,n,s,r,o,a,c,l){i.getVertexPosition(a,js),i.getVertexPosition(c,Qs),i.getVertexPosition(l,tr);let h=tu(i,t,e,n,js,Qs,tr,Bl);if(h){let d=new I;Rn.getBarycoord(Bl,js,Qs,tr,d),s&&(h.uv=Rn.getInterpolatedAttribute(s,a,c,l,d,new pt)),r&&(h.uv1=Rn.getInterpolatedAttribute(r,a,c,l,d,new pt)),o&&(h.normal=Rn.getInterpolatedAttribute(o,a,c,l,d,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:c,c:l,normal:new I,materialIndex:0};Rn.getNormal(js,Qs,tr,f.normal),h.face=f,h.barycoord=d}return h}var Ke=class i extends be{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],d=[],f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ne(l,3)),this.setAttribute("normal",new ne(h,3)),this.setAttribute("uv",new ne(d,2));function g(y,m,u,R,x,S,A,C,D,F,b){let E=S/D,U=A/F,V=S/2,N=A/2,k=C/2,Y=D+1,Z=F+1,et=0,G=0,ht=new I;for(let ft=0;ft<Z;ft++){let Tt=ft*U-N;for(let kt=0;kt<Y;kt++){let Yt=kt*E-V;ht[y]=Yt*R,ht[m]=Tt*x,ht[u]=k,l.push(ht.x,ht.y,ht.z),ht[y]=0,ht[m]=0,ht[u]=C>0?1:-1,h.push(ht.x,ht.y,ht.z),d.push(kt/D),d.push(1-ft/F),et+=1}}for(let ft=0;ft<F;ft++)for(let Tt=0;Tt<D;Tt++){let kt=f+Tt+Y*ft,Yt=f+Tt+Y*(ft+1),Wt=f+(Tt+1)+Y*(ft+1),Ut=f+(Tt+1)+Y*ft;c.push(kt,Yt,Ut),c.push(Yt,Wt,Ut),G+=6}a.addGroup(p,G,b),p+=G,f+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function si(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Te(i){let t={};for(let e=0;e<i.length;e++){let n=si(i[e]);for(let s in n)t[s]=n[s]}return t}function eu(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ja(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}var kc={clone:si,merge:Te},nu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,iu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,je=class extends xn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nu,this.fragmentShader=iu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=si(t.uniforms),this.uniformsGroups=eu(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},fs=class extends fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ee,this.projectionMatrix=new ee,this.projectionMatrixInverse=new ee,this.coordinateSystem=Ze,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},An=new I,zl=new pt,kl=new pt,xe=class extends fs{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ai*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ai*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){An.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(An.x,An.y).multiplyScalar(-t/An.z),An.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(An.x,An.y).multiplyScalar(-t/An.z)}getViewSize(t,e){return this.getViewBounds(t,zl,kl),e.subVectors(kl,zl)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(es*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,e-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Mi=-90,Si=1,yr=class extends fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xe(Mi,Si,t,e);s.layers=this.layers,this.add(s);let r=new xe(Mi,Si,t,e);r.layers=this.layers,this.add(r);let o=new xe(Mi,Si,t,e);o.layers=this.layers,this.add(o);let a=new xe(Mi,Si,t,e);a.layers=this.layers,this.add(a);let c=new xe(Mi,Si,t,e);c.layers=this.layers,this.add(c);let l=new xe(Mi,Si,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,c]=e;for(let l of e)this.remove(l);if(t===Ze)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,d=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let y=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,c),t.setRenderTarget(n,4,s),t.render(e,l),n.texture.generateMipmaps=y,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},ps=class extends Re{constructor(t=[],e=ni,n,s,r,o,a,c,l,h){super(t,e,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},vr=class extends sn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ps(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ke(5,5,5),r=new je({name:"CubemapFromEquirect",uniforms:si(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ce,blending:yn});r.uniforms.tEquirect.value=e;let o=new Ee(s,r),a=e.minFilter;return e.minFilter===Fn&&(e.minFilter=Je),new yr(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}},Xn=class extends fe{constructor(){super(),this.isGroup=!0,this.type="Group"}},su={type:"move"},Pi=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(let y of t.hand.values()){let m=e.getJointPose(y,n),u=this._getHandJoint(l,y);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;l.inputState.pinching&&f>p+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&f<=p-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(su)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var ms=class extends fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $e,this.environmentIntensity=1,this.environmentRotation=new $e,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}};var Mr=class extends Re{constructor(t=null,e=1,n=1,s,r,o,a,c,l=Ie,h=Ie,d,f){super(null,o,a,c,l,h,s,r,d,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bi=new ee,Vl=new ee,sr=[],Hl=new rn,ru=new ee,Ki=new Ee,ji=new _n,_s=class extends Ee{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,ru)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new rn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),Hl.copy(t.boundingBox).applyMatrix4(bi),this.boundingBox.union(Hl)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new _n),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bi),ji.copy(t.boundingSphere).applyMatrix4(bi),this.boundingSphere.union(ji)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=t*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Ki.geometry=this.geometry,Ki.material=this.material,Ki.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ji.copy(this.boundingSphere),ji.applyMatrix4(n),t.ray.intersectsSphere(ji)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,bi),Vl.multiplyMatrices(n,bi),Ki.matrixWorld=Vl,Ki.raycast(t,sr);for(let o=0,a=sr.length;o<a;o++){let c=sr[o];c.instanceId=r,c.object=this,e.push(c)}sr.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Mr(new Float32Array(s*this.count),s,this.count,ro,tn));let r=this.morphTexture.source.data.data,o=0;for(let l=0;l<n.length;l++)o+=n[l];let a=this.geometry.morphTargetsRelative?1:1-o,c=s*t;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},pa=new I,ou=new I,au=new Ft,Ve=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=pa.subVectors(n,e).cross(ou.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||au.getNormalMatrix(t),s=this.coplanarPoint(pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Gn=new _n,lu=new pt(.5,.5),rr=new I,Ii=class{constructor(t=new Ve,e=new Ve,n=new Ve,s=new Ve,r=new Ve,o=new Ve){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ze,n=!1){let s=this.planes,r=t.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],d=r[5],f=r[6],p=r[7],g=r[8],y=r[9],m=r[10],u=r[11],R=r[12],x=r[13],S=r[14],A=r[15];if(s[0].setComponents(l-o,p-h,u-g,A-R).normalize(),s[1].setComponents(l+o,p+h,u+g,A+R).normalize(),s[2].setComponents(l+a,p+d,u+y,A+x).normalize(),s[3].setComponents(l-a,p-d,u-y,A-x).normalize(),n)s[4].setComponents(c,f,m,S).normalize(),s[5].setComponents(l-c,p-f,u-m,A-S).normalize();else if(s[4].setComponents(l-c,p-f,u-m,A-S).normalize(),e===Ze)s[5].setComponents(l+c,p+f,u+m,A+S).normalize();else if(e===as)s[5].setComponents(c,f,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Gn.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Gn.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Gn)}intersectsSprite(t){Gn.center.set(0,0,0);let e=lu.distanceTo(t.center);return Gn.radius=.7071067811865476+e,Gn.applyMatrix4(t.matrixWorld),this.intersectsSphere(Gn)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(rr.x=s.normal.x>0?t.max.x:t.min.x,rr.y=s.normal.y>0?t.max.y:t.min.y,rr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(rr)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Di=class extends xn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},Sr=new I,br=new I,Gl=new ee,Qi=new Jn,or=new _n,ma=new I,Wl=new I,Er=class extends fe{constructor(t=new be,e=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Sr.fromBufferAttribute(e,s-1),br.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Sr.distanceTo(br);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),or.copy(n.boundingSphere),or.applyMatrix4(s),or.radius+=r,t.ray.intersectsSphere(or)===!1)return;Gl.copy(s).invert(),Qi.copy(t.ray).applyMatrix4(Gl);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=l){let u=h.getX(y),R=h.getX(y+1),x=ar(this,t,Qi,c,u,R,y);x&&e.push(x)}if(this.isLineLoop){let y=h.getX(g-1),m=h.getX(p),u=ar(this,t,Qi,c,y,m,g-1);u&&e.push(u)}}else{let p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let y=p,m=g-1;y<m;y+=l){let u=ar(this,t,Qi,c,y,y+1,y);u&&e.push(u)}if(this.isLineLoop){let y=ar(this,t,Qi,c,g-1,p,g-1);y&&e.push(y)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function ar(i,t,e,n,s,r,o){let a=i.geometry.attributes.position;if(Sr.fromBufferAttribute(a,s),br.fromBufferAttribute(a,r),e.distanceSqToSegment(Sr,br,ma,Wl)>n)return;ma.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(ma);if(!(l<t.near||l>t.far))return{distance:l,point:Wl.clone().applyMatrix4(i.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:i}}var Xl=new I,ql=new I,xs=class extends Er{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Xl.fromBufferAttribute(e,s),ql.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Xl.distanceTo(ql);t.setAttribute("lineDistance",new ne(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var ys=class extends Re{constructor(t,e,n,s,r,o,a,c,l){super(t,e,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},vs=class extends Re{constructor(t,e,n=On,s,r,o,a=Ie,c=Ie,l,h=wi,d=1){if(h!==wi&&h!==ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:d};super(f,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ci(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Ms=class extends Re{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Ss=class i extends be{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],o=[],a=[],c=[],l=new I,h=new pt;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let d=0,f=3;d<=e;d++,f+=3){let p=n+d/e*s;l.x=t*Math.cos(p),l.y=t*Math.sin(p),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[f]/t+1)/2,h.y=(o[f+1]/t+1)/2,c.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ne(o,3)),this.setAttribute("normal",new ne(a,3)),this.setAttribute("uv",new ne(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Kn=class i extends be{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],p=[],g=0,y=[],m=n/2,u=0;R(),o===!1&&(t>0&&x(!0),e>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function R(){let S=new I,A=new I,C=0,D=(e-t)/n;for(let F=0;F<=r;F++){let b=[],E=F/r,U=E*(e-t)+t;for(let V=0;V<=s;V++){let N=V/s,k=N*c+a,Y=Math.sin(k),Z=Math.cos(k);A.x=U*Y,A.y=-E*n+m,A.z=U*Z,d.push(A.x,A.y,A.z),S.set(Y,D,Z).normalize(),f.push(S.x,S.y,S.z),p.push(N,1-E),b.push(g++)}y.push(b)}for(let F=0;F<s;F++)for(let b=0;b<r;b++){let E=y[b][F],U=y[b+1][F],V=y[b+1][F+1],N=y[b][F+1];(t>0||b!==0)&&(h.push(E,U,N),C+=3),(e>0||b!==r-1)&&(h.push(U,V,N),C+=3)}l.addGroup(u,C,0),u+=C}function x(S){let A=g,C=new pt,D=new I,F=0,b=S===!0?t:e,E=S===!0?1:-1;for(let V=1;V<=s;V++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;let U=g;for(let V=0;V<=s;V++){let k=V/s*c+a,Y=Math.cos(k),Z=Math.sin(k);D.x=b*Z,D.y=m*E,D.z=b*Y,d.push(D.x,D.y,D.z),f.push(0,E,0),C.x=Y*.5+.5,C.y=Z*.5*E+.5,p.push(C.x,C.y),g++}for(let V=0;V<s;V++){let N=A+V,k=U+V;S===!0?h.push(k,k+1,N):h.push(k+1,k,N),F+=3}l.addGroup(u,F,S===!0?1:2),u+=F}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},bs=class i extends Kn{constructor(t=1,e=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,t,e,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ge=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){console.warn("THREE.Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],f=n[s+1]-h,p=(o-h)/f;return(s+p)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=e||(o.isVector2?new pt:new I);return c.copy(a).sub(o).normalize(),c}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new I,s=[],r=[],o=[],a=new I,c=new ee;for(let p=0;p<=t;p++){let g=p/t;s[p]=this.getTangentAt(g,new I)}r[0]=new I,o[0]=new I;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),d<=l&&(l=d,n.set(0,1,0)),f<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let p=1;p<=t;p++){if(r[p]=r[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(s[p-1],s[p]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Ot(s[p-1].dot(s[p]),-1,1));r[p].applyMatrix4(c.makeRotationAxis(a,g))}o[p].crossVectors(s[p],r[p])}if(e===!0){let p=Math.acos(Ot(r[0].dot(r[t]),-1,1));p/=t,s[0].dot(a.crossVectors(r[0],r[t]))>0&&(p=-p);for(let g=1;g<=t;g++)r[g].applyMatrix4(c.makeRotationAxis(s[g],p*g)),o[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Es=class extends Ge{constructor(t=0,e=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(t,e=new pt){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+t*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=c-this.aX,p=l-this.aY;c=f*h-p*d+this.aX,l=f*d+p*h+this.aY}return n.set(c,l)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Tr=class extends Es{constructor(t,e,n,s,r,o){super(t,e,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function $a(){let i=0,t=0,e=0,n=0;function s(r,o,a,c){i=r,t=a,e=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,d){let f=(o-r)/l-(a-r)/(l+h)+(a-o)/h,p=(a-o)/h-(c-o)/(h+d)+(c-a)/d;f*=h,p*=h,s(o,a,f,p)},calc:function(r){let o=r*r,a=o*r;return i+t*r+e*o+n*a}}}var lr=new I,ga=new $a,_a=new $a,xa=new $a,Li=class extends Ge{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new I){let n=e,s=this.points,r=s.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(lr.subVectors(s[0],s[1]).add(s[0]),l=lr);let d=s[a%r],f=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(lr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=lr),this.curveType==="centripetal"||this.curveType==="chordal"){let p=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(d),p),y=Math.pow(d.distanceToSquared(f),p),m=Math.pow(f.distanceToSquared(h),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),ga.initNonuniformCatmullRom(l.x,d.x,f.x,h.x,g,y,m),_a.initNonuniformCatmullRom(l.y,d.y,f.y,h.y,g,y,m),xa.initNonuniformCatmullRom(l.z,d.z,f.z,h.z,g,y,m)}else this.curveType==="catmullrom"&&(ga.initCatmullRom(l.x,d.x,f.x,h.x,this.tension),_a.initCatmullRom(l.y,d.y,f.y,h.y,this.tension),xa.initCatmullRom(l.z,d.z,f.z,h.z,this.tension));return n.set(ga.calc(c),_a.calc(c),xa.calc(c)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Yl(i,t,e,n,s){let r=(n-t)*.5,o=(s-e)*.5,a=i*i,c=i*a;return(2*e-2*n+r+o)*c+(-3*e+3*n-2*r-o)*a+r*i+e}function cu(i,t){let e=1-i;return e*e*t}function hu(i,t){return 2*(1-i)*i*t}function uu(i,t){return i*i*t}function is(i,t,e,n){return cu(i,t)+hu(i,e)+uu(i,n)}function du(i,t){let e=1-i;return e*e*e*t}function fu(i,t){let e=1-i;return 3*e*e*i*t}function pu(i,t){return 3*(1-i)*i*i*t}function mu(i,t){return i*i*i*t}function ss(i,t,e,n,s){return du(i,t)+fu(i,e)+pu(i,n)+mu(i,s)}var wr=class extends Ge{constructor(t=new pt,e=new pt,n=new pt,s=new pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ss(t,s.x,r.x,o.x,a.x),ss(t,s.y,r.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ar=class extends Ge{constructor(t=new I,e=new I,n=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(ss(t,s.x,r.x,o.x,a.x),ss(t,s.y,r.y,o.y,a.y),ss(t,s.z,r.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Rr=class extends Ge{constructor(t=new pt,e=new pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cr=class extends Ge{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pr=class extends Ge{constructor(t=new pt,e=new pt,n=new pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new pt){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(is(t,s.x,r.x,o.x),is(t,s.y,r.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ts=class extends Ge{constructor(t=new I,e=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new I){let n=e,s=this.v0,r=this.v1,o=this.v2;return n.set(is(t,s.x,r.x,o.x),is(t,s.y,r.y,o.y),is(t,s.z,r.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ir=class extends Ge{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new pt){let n=e,s=this.points,r=(s.length-1)*t,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],d=s[o>s.length-3?s.length-1:o+2];return n.set(Yl(a,c.x,l.x,h.x,d.x),Yl(a,c.y,l.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new pt().fromArray(s))}return this}},gu=Object.freeze({__proto__:null,ArcCurve:Tr,CatmullRomCurve3:Li,CubicBezierCurve:wr,CubicBezierCurve3:Ar,EllipseCurve:Es,LineCurve:Rr,LineCurve3:Cr,QuadraticBezierCurve:Pr,QuadraticBezierCurve3:Ts,SplineCurve:Ir});var jn=class i extends be{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,d=t/a,f=e/c,p=[],g=[],y=[],m=[];for(let u=0;u<h;u++){let R=u*f-o;for(let x=0;x<l;x++){let S=x*d-r;g.push(S,-R,0),y.push(0,0,1),m.push(x/a),m.push(1-u/c)}}for(let u=0;u<c;u++)for(let R=0;R<a;R++){let x=R+l*u,S=R+l*(u+1),A=R+1+l*(u+1),C=R+1+l*u;p.push(x,S,C),p.push(S,A,C)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var ws=class i extends be{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],d=new I,f=new I,p=[],g=[],y=[],m=[];for(let u=0;u<=n;u++){let R=[],x=u/n,S=0;u===0&&o===0?S=.5/e:u===n&&c===Math.PI&&(S=-.5/e);for(let A=0;A<=e;A++){let C=A/e;d.x=-t*Math.cos(s+C*r)*Math.sin(o+x*a),d.y=t*Math.cos(o+x*a),d.z=t*Math.sin(s+C*r)*Math.sin(o+x*a),g.push(d.x,d.y,d.z),f.copy(d).normalize(),y.push(f.x,f.y,f.z),m.push(C+S,1-x),R.push(l++)}h.push(R)}for(let u=0;u<n;u++)for(let R=0;R<e;R++){let x=h[u][R+1],S=h[u][R],A=h[u+1][R],C=h[u+1][R+1];(u!==0||o>0)&&p.push(x,S,C),(u!==n-1||c<Math.PI)&&p.push(S,A,C)}this.setIndex(p),this.setAttribute("position",new ne(g,3)),this.setAttribute("normal",new ne(y,3)),this.setAttribute("uv",new ne(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var Ui=class i extends be{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);let o=[],a=[],c=[],l=[],h=new I,d=new I,f=new I;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){let y=g/s*r,m=p/n*Math.PI*2;d.x=(t+e*Math.cos(m))*Math.cos(y),d.y=(t+e*Math.cos(m))*Math.sin(y),d.z=e*Math.sin(m),a.push(d.x,d.y,d.z),h.x=t*Math.cos(y),h.y=t*Math.sin(y),f.subVectors(d,h).normalize(),c.push(f.x,f.y,f.z),l.push(g/s),l.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){let y=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,u=(s+1)*(p-1)+g,R=(s+1)*p+g;o.push(y,m,R),o.push(m,u,R)}this.setIndex(o),this.setAttribute("position",new ne(a,3)),this.setAttribute("normal",new ne(c,3)),this.setAttribute("uv",new ne(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}};var As=class i extends be{constructor(t=new Ts(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:s,closed:r};let o=t.computeFrenetFrames(e,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,c=new I,l=new pt,h=new I,d=[],f=[],p=[],g=[];y(),this.setIndex(g),this.setAttribute("position",new ne(d,3)),this.setAttribute("normal",new ne(f,3)),this.setAttribute("uv",new ne(p,2));function y(){for(let x=0;x<e;x++)m(x);m(r===!1?e:0),R(),u()}function m(x){h=t.getPointAt(x/e,h);let S=o.normals[x],A=o.binormals[x];for(let C=0;C<=s;C++){let D=C/s*Math.PI*2,F=Math.sin(D),b=-Math.cos(D);c.x=b*S.x+F*A.x,c.y=b*S.y+F*A.y,c.z=b*S.z+F*A.z,c.normalize(),f.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,d.push(a.x,a.y,a.z)}}function u(){for(let x=1;x<=e;x++)for(let S=1;S<=s;S++){let A=(s+1)*(x-1)+(S-1),C=(s+1)*x+(S-1),D=(s+1)*x+S,F=(s+1)*(x-1)+S;g.push(A,C,F),g.push(C,D,F)}}function R(){for(let x=0;x<=e;x++)for(let S=0;S<=s;S++)l.x=x/e,l.y=S/s,p.push(l.x,l.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new i(new gu[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Qn=class extends xn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ga,this.normalScale=new pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $e,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Rs=class extends Qn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ot(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Bt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Bt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Bt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Dr=class extends xn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ac,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lr=class extends xn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cr(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _u(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var ti=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<s)){for(let a=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=e[++n],t<s)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let o=0;o!==s;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Ur=class extends ti{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Ma,endingEnd:Ma}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,o=t+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Sa:r=t,a=2*e-n;break;case ba:r=s.length-2,a=e+s[r]-s[r+1];break;default:r=t,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Sa:o=t,c=2*n-e;break;case ba:o=1,c=n+s[1]-s[0];break;default:o=t-1,c=e}let l=(n-e)*.5,h=this.valueSize;this._weightPrev=l/(e-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-e)/(s-e),y=g*g,m=y*g,u=-f*m+2*f*y-f*g,R=(1+f)*m+(-1.5-2*f)*y+(-.5+f)*g+1,x=(-1-p)*m+(1.5+p)*y+.5*g,S=p*m-p*y;for(let A=0;A!==a;++A)r[A]=u*o[h+A]+R*o[l+A]+x*o[c+A]+S*o[d+A];return r}},Nr=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=t*a,l=c-a,h=(n-e)/(s-e),d=1-h;for(let f=0;f!==a;++f)r[f]=o[l+f]*d+o[c+f]*h;return r}},Fr=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Oe=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cr(e,this.TimeBufferType),this.values=cr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cr(t.times,Array),values:cr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Fr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Nr(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Ur(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case rs:e=this.InterpolantFactoryMethodDiscrete;break;case mr:e=this.InterpolantFactoryMethodLinear;break;case hr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return rs;case this.InterpolantFactoryMethodLinear:return mr;case this.InterpolantFactoryMethodSmooth:return hr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),t=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),t=!1;break}o=c}if(s!==void 0&&_u(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hr,r=t.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=t[a],h=t[a+1];if(l!==h&&(a!==1||l!==t[0]))if(s)c=!0;else{let d=a*n,f=d-n,p=d+n;for(let g=0;g!==n;++g){let y=e[d+g];if(y!==e[f+g]||y!==e[p+g]){c=!0;break}}}if(c){if(a!==o){t[o]=t[a];let d=a*n,f=o*n;for(let p=0;p!==n;++p)e[f+p]=e[d+p]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)e[c+l]=e[a+l];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}};Oe.prototype.ValueTypeName="";Oe.prototype.TimeBufferType=Float32Array;Oe.prototype.ValueBufferType=Float32Array;Oe.prototype.DefaultInterpolation=mr;var In=class extends Oe{constructor(t,e,n){super(t,e,n)}};In.prototype.ValueTypeName="bool";In.prototype.ValueBufferType=Array;In.prototype.DefaultInterpolation=rs;In.prototype.InterpolantFactoryMethodLinear=void 0;In.prototype.InterpolantFactoryMethodSmooth=void 0;var Or=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};Or.prototype.ValueTypeName="color";var Br=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};Br.prototype.ValueTypeName="number";var zr=class extends ti{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-e)/(s-e),l=t*a;for(let h=l+a;l!==h;l+=4)He.slerpFlat(r,0,o,l-a,o,l,c);return r}},Cs=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new zr(this.times,this.values,this.getValueSize(),t)}};Cs.prototype.ValueTypeName="quaternion";Cs.prototype.InterpolantFactoryMethodSmooth=void 0;var Dn=class extends Oe{constructor(t,e,n){super(t,e,n)}};Dn.prototype.ValueTypeName="string";Dn.prototype.ValueBufferType=Array;Dn.prototype.DefaultInterpolation=rs;Dn.prototype.InterpolantFactoryMethodLinear=void 0;Dn.prototype.InterpolantFactoryMethodSmooth=void 0;var kr=class extends Oe{constructor(t,e,n,s){super(t,e,n,s)}};kr.prototype.ValueTypeName="vector";var Vr=class{constructor(t,e,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=l.length;d<f;d+=2){let p=l[d],g=l[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}},Vc=new Vr,Hr=class{constructor(t){this.manager=t!==void 0?t:Vc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Hr.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ni=class extends fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Bt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}},Ps=class extends Ni{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Bt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}},ya=new ee,Zl=new I,Jl=new I,Gr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new pt(512,512),this.mapType=Qe,this.map=null,this.mapPass=null,this.matrix=new ee,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ii,this._frameExtents=new pt(1,1),this._viewportCount=1,this._viewports=[new Zt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;Zl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Zl),Jl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Jl),e.updateMatrixWorld(),ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ya,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var $l=new ee,ts=new I,va=new I,wa=class extends Gr{constructor(){super(new xe(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new pt(4,2),this._viewportCount=6,this._viewports=[new Zt(2,1,1,1),new Zt(0,1,1,1),new Zt(3,1,1,1),new Zt(1,1,1,1),new Zt(3,0,1,1),new Zt(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){let n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),ts.setFromMatrixPosition(t.matrixWorld),n.position.copy(ts),va.copy(n.position),va.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(va),n.updateMatrixWorld(),s.makeTranslation(-ts.x,-ts.y,-ts.z),$l.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix($l,n.coordinateSystem,n.reversedDepth)}},ei=class extends Ni{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new wa}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}},Is=class extends fs{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,o=n+t,a=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Aa=class extends Gr{constructor(){super(new Is(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Fi=class extends Ni{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(fe.DEFAULT_UP),this.updateMatrix(),this.target=new fe,this.shadow=new Aa}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}};var Wr=class extends xe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Ka="\\[\\]\\.:\\/",xu=new RegExp("["+Ka+"]","g"),ja="[^"+Ka+"]",yu="[^"+Ka.replace("\\.","")+"]",vu=/((?:WC+[\/:])*)/.source.replace("WC",ja),Mu=/(WCOD+)?/.source.replace("WCOD",yu),Su=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ja),bu=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ja),Eu=new RegExp("^"+vu+Mu+Su+bu+"$"),Tu=["material","materials","bones","map"],Ra=class{constructor(t,e,n){let s=n||oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},oe=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(xu,"")}static parseTrackName(t){let e=Eu.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Tu.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let c=n(a.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===l){l=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let o=t[s];if(o===void 0){let l=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};oe.Composite=Ra;oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};oe.prototype.GetterByBindingType=[oe.prototype._getValue_direct,oe.prototype._getValue_array,oe.prototype._getValue_arrayElement,oe.prototype._getValue_toArray];oe.prototype.SetterByBindingTypeAndVersioning=[[oe.prototype._setValue_direct,oe.prototype._setValue_direct_setNeedsUpdate,oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_array,oe.prototype._setValue_array_setNeedsUpdate,oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_arrayElement,oe.prototype._setValue_arrayElement_setNeedsUpdate,oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[oe.prototype._setValue_fromArray,oe.prototype._setValue_fromArray_setNeedsUpdate,oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var _g=new Float32Array(1);var Ln=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ot(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ot(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var Ds=class extends nn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function Qa(i,t,e,n){let s=wu(n);switch(e){case ka:return i*t;case ro:return i*t/s.components*s.byteLength;case oo:return i*t/s.components*s.byteLength;case Ha:return i*t*2/s.components*s.byteLength;case ao:return i*t*2/s.components*s.byteLength;case Va:return i*t*3/s.components*s.byteLength;case We:return i*t*4/s.components*s.byteLength;case lo:return i*t*4/s.components*s.byteLength;case Ns:case Fs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ho:case fo:return Math.max(i,16)*Math.max(t,8)/4;case co:case uo:return Math.max(i,8)*Math.max(t,8)/2;case po:case mo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case vo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Mo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case So:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case bo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Eo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case To:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case wo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Ao:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Ro:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Co:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Po:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Do:case Lo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Uo:case No:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Fo:case Oo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function wu(i){switch(i){case Qe:case Fa:return{byteLength:1,components:1};case Oi:case Oa:case Bi:return{byteLength:2,components:1};case io:case so:return{byteLength:2,components:4};case On:case no:case tn:return{byteLength:4,components:1};case Ba:case za:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function uh(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Ru(i){let t=new WeakMap;function e(a,c){let l=a.array,h=a.usage,d=l.byteLength,f=i.createBuffer();i.bindBuffer(c,f),i.bufferData(c,l,h),a.onUploadCallback();let p;if(l instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)p=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)p=i.SHORT;else if(l instanceof Uint32Array)p=i.UNSIGNED_INT;else if(l instanceof Int32Array)p=i.INT;else if(l instanceof Int8Array)p=i.BYTE;else if(l instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:f,type:p,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,c,l){let h=c.array,d=c.updateRanges;if(i.bindBuffer(l,a),d.length===0)i.bufferSubData(l,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){let g=d[f],y=d[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++f,d[f]=y)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){let y=d[p];i.bufferSubData(l,y.start*h.BYTES_PER_ELEMENT,h,y.start,y.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=t.get(a);c&&(i.deleteBuffer(c.buffer),t.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=t.get(a);if(l===void 0)t.set(a,e(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var Cu=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Pu=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Iu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Du=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Uu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Nu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ou=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,zu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ku=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Vu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Hu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Gu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Wu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Xu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Zu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ju=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$u=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ku=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ju=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Qu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,td=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ed=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,id=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,rd="gl_FragColor = linearToOutputTexel( gl_FragColor );",od=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ad=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,ld=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,cd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ud=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,dd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,md=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Md=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Sd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,bd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ed=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Td=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Ad=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Cd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Pd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Id=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ud=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Fd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bd=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,zd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,kd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Vd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Hd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Yd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$d=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ef=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nf=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,sf=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,rf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,of=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,af=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lf=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,hf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,df=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ff=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,_f=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,yf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,bf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Ef=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Tf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,wf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Af=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Rf=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Cf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Pf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,If=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Df=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Uf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ff=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Of=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vf=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Hf=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Gf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Wf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Yf=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Zf=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$f=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Kf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jf=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qf=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ep=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,np=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ip=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,sp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,op=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ap=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,zt={alphahash_fragment:Cu,alphahash_pars_fragment:Pu,alphamap_fragment:Iu,alphamap_pars_fragment:Du,alphatest_fragment:Lu,alphatest_pars_fragment:Uu,aomap_fragment:Nu,aomap_pars_fragment:Fu,batching_pars_vertex:Ou,batching_vertex:Bu,begin_vertex:zu,beginnormal_vertex:ku,bsdfs:Vu,iridescence_fragment:Hu,bumpmap_pars_fragment:Gu,clipping_planes_fragment:Wu,clipping_planes_pars_fragment:Xu,clipping_planes_pars_vertex:qu,clipping_planes_vertex:Yu,color_fragment:Zu,color_pars_fragment:Ju,color_pars_vertex:$u,color_vertex:Ku,common:ju,cube_uv_reflection_fragment:Qu,defaultnormal_vertex:td,displacementmap_pars_vertex:ed,displacementmap_vertex:nd,emissivemap_fragment:id,emissivemap_pars_fragment:sd,colorspace_fragment:rd,colorspace_pars_fragment:od,envmap_fragment:ad,envmap_common_pars_fragment:ld,envmap_pars_fragment:cd,envmap_pars_vertex:hd,envmap_physical_pars_fragment:Md,envmap_vertex:ud,fog_vertex:dd,fog_pars_vertex:fd,fog_fragment:pd,fog_pars_fragment:md,gradientmap_pars_fragment:gd,lightmap_pars_fragment:_d,lights_lambert_fragment:xd,lights_lambert_pars_fragment:yd,lights_pars_begin:vd,lights_toon_fragment:Sd,lights_toon_pars_fragment:bd,lights_phong_fragment:Ed,lights_phong_pars_fragment:Td,lights_physical_fragment:wd,lights_physical_pars_fragment:Ad,lights_fragment_begin:Rd,lights_fragment_maps:Cd,lights_fragment_end:Pd,logdepthbuf_fragment:Id,logdepthbuf_pars_fragment:Dd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Ud,map_fragment:Nd,map_pars_fragment:Fd,map_particle_fragment:Od,map_particle_pars_fragment:Bd,metalnessmap_fragment:zd,metalnessmap_pars_fragment:kd,morphinstance_vertex:Vd,morphcolor_vertex:Hd,morphnormal_vertex:Gd,morphtarget_pars_vertex:Wd,morphtarget_vertex:Xd,normal_fragment_begin:qd,normal_fragment_maps:Yd,normal_pars_fragment:Zd,normal_pars_vertex:Jd,normal_vertex:$d,normalmap_pars_fragment:Kd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Qd,clearcoat_pars_fragment:tf,iridescence_pars_fragment:ef,opaque_fragment:nf,packing:sf,premultiplied_alpha_fragment:rf,project_vertex:of,dithering_fragment:af,dithering_pars_fragment:lf,roughnessmap_fragment:cf,roughnessmap_pars_fragment:hf,shadowmap_pars_fragment:uf,shadowmap_pars_vertex:df,shadowmap_vertex:ff,shadowmask_pars_fragment:pf,skinbase_vertex:mf,skinning_pars_vertex:gf,skinning_vertex:_f,skinnormal_vertex:xf,specularmap_fragment:yf,specularmap_pars_fragment:vf,tonemapping_fragment:Mf,tonemapping_pars_fragment:Sf,transmission_fragment:bf,transmission_pars_fragment:Ef,uv_pars_fragment:Tf,uv_pars_vertex:wf,uv_vertex:Af,worldpos_vertex:Rf,background_vert:Cf,background_frag:Pf,backgroundCube_vert:If,backgroundCube_frag:Df,cube_vert:Lf,cube_frag:Uf,depth_vert:Nf,depth_frag:Ff,distanceRGBA_vert:Of,distanceRGBA_frag:Bf,equirect_vert:zf,equirect_frag:kf,linedashed_vert:Vf,linedashed_frag:Hf,meshbasic_vert:Gf,meshbasic_frag:Wf,meshlambert_vert:Xf,meshlambert_frag:qf,meshmatcap_vert:Yf,meshmatcap_frag:Zf,meshnormal_vert:Jf,meshnormal_frag:$f,meshphong_vert:Kf,meshphong_frag:jf,meshphysical_vert:Qf,meshphysical_frag:tp,meshtoon_vert:ep,meshtoon_frag:np,points_vert:ip,points_frag:sp,shadow_vert:rp,shadow_frag:op,sprite_vert:ap,sprite_frag:lp},ut={common:{diffuse:{value:new Bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ft}},envmap:{envMap:{value:null},envMapRotation:{value:new Ft},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ft}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ft}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ft},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ft},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ft},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ft}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ft}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ft}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0},uvTransform:{value:new Ft}},sprite:{diffuse:{value:new Bt(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ft},alphaMap:{value:null},alphaMapTransform:{value:new Ft},alphaTest:{value:0}}},ln={basic:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:zt.meshbasic_vert,fragmentShader:zt.meshbasic_frag},lambert:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshlambert_vert,fragmentShader:zt.meshlambert_frag},phong:{uniforms:Te([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)},specular:{value:new Bt(1118481)},shininess:{value:30}}]),vertexShader:zt.meshphong_vert,fragmentShader:zt.meshphong_frag},standard:{uniforms:Te([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag},toon:{uniforms:Te([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new Bt(0)}}]),vertexShader:zt.meshtoon_vert,fragmentShader:zt.meshtoon_frag},matcap:{uniforms:Te([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:zt.meshmatcap_vert,fragmentShader:zt.meshmatcap_frag},points:{uniforms:Te([ut.points,ut.fog]),vertexShader:zt.points_vert,fragmentShader:zt.points_frag},dashed:{uniforms:Te([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:zt.linedashed_vert,fragmentShader:zt.linedashed_frag},depth:{uniforms:Te([ut.common,ut.displacementmap]),vertexShader:zt.depth_vert,fragmentShader:zt.depth_frag},normal:{uniforms:Te([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:zt.meshnormal_vert,fragmentShader:zt.meshnormal_frag},sprite:{uniforms:Te([ut.sprite,ut.fog]),vertexShader:zt.sprite_vert,fragmentShader:zt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ft},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:zt.background_vert,fragmentShader:zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft}},vertexShader:zt.backgroundCube_vert,fragmentShader:zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:zt.cube_vert,fragmentShader:zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:zt.equirect_vert,fragmentShader:zt.equirect_frag},distanceRGBA:{uniforms:Te([ut.common,ut.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:zt.distanceRGBA_vert,fragmentShader:zt.distanceRGBA_frag},shadow:{uniforms:Te([ut.lights,ut.fog,{color:{value:new Bt(0)},opacity:{value:1}}]),vertexShader:zt.shadow_vert,fragmentShader:zt.shadow_frag}};ln.physical={uniforms:Te([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ft},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ft},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ft},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ft},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ft},sheen:{value:0},sheenColor:{value:new Bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ft},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ft},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ft},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ft},attenuationDistance:{value:0},attenuationColor:{value:new Bt(0)},specularColor:{value:new Bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ft},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ft},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ft}}]),vertexShader:zt.meshphysical_vert,fragmentShader:zt.meshphysical_frag};var Bo={r:0,b:0,g:0},ri=new $e,cp=new ee;function hp(i,t,e,n,s,r,o){let a=new Bt(0),c=r===!0?0:1,l,h,d=null,f=0,p=null;function g(x){let S=x.isScene===!0?x.background:null;return S&&S.isTexture&&(S=(x.backgroundBlurriness>0?e:t).get(S)),S}function y(x){let S=!1,A=g(x);A===null?u(a,c):A&&A.isColor&&(u(A,1),S=!0);let C=i.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(x,S){let A=g(S);A&&(A.isCubeTexture||A.mapping===Ls)?(h===void 0&&(h=new Ee(new Ke(1,1,1),new je({name:"BackgroundCubeMaterial",uniforms:si(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Ce,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),ri.copy(S.backgroundRotation),ri.x*=-1,ri.y*=-1,ri.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(ri.y*=-1,ri.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(cp.makeRotationFromEuler(ri)),h.material.toneMapped=Gt.getTransfer(A.colorSpace)!==Jt,(d!==A||f!==A.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=i.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Ee(new jn(2,2),new je({name:"BackgroundMaterial",uniforms:si(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Gt.getTransfer(A.colorSpace)!==Jt,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==i.toneMapping)&&(l.material.needsUpdate=!0,d=A,f=A.version,p=i.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function u(x,S){x.getRGB(Bo,Ja(i)),n.buffers.color.setClear(Bo.r,Bo.g,Bo.b,S,o)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,S=1){a.set(x),c=S,u(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(x){c=x,u(a,c)},render:y,addToRenderList:m,dispose:R}}function up(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,o=!1;function a(E,U,V,N,k){let Y=!1,Z=d(N,V,U);r!==Z&&(r=Z,l(r.object)),Y=p(E,N,V,k),Y&&g(E,N,V,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,S(E,U,V,N),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function h(E){return i.deleteVertexArray(E)}function d(E,U,V){let N=V.wireframe===!0,k=n[E.id];k===void 0&&(k={},n[E.id]=k);let Y=k[U.id];Y===void 0&&(Y={},k[U.id]=Y);let Z=Y[N];return Z===void 0&&(Z=f(c()),Y[N]=Z),Z}function f(E){let U=[],V=[],N=[];for(let k=0;k<e;k++)U[k]=0,V[k]=0,N[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:V,attributeDivisors:N,object:E,attributes:{},index:null}}function p(E,U,V,N){let k=r.attributes,Y=U.attributes,Z=0,et=V.getAttributes();for(let G in et)if(et[G].location>=0){let ft=k[G],Tt=Y[G];if(Tt===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(Tt=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(Tt=E.instanceColor)),ft===void 0||ft.attribute!==Tt||Tt&&ft.data!==Tt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==N}function g(E,U,V,N){let k={},Y=U.attributes,Z=0,et=V.getAttributes();for(let G in et)if(et[G].location>=0){let ft=Y[G];ft===void 0&&(G==="instanceMatrix"&&E.instanceMatrix&&(ft=E.instanceMatrix),G==="instanceColor"&&E.instanceColor&&(ft=E.instanceColor));let Tt={};Tt.attribute=ft,ft&&ft.data&&(Tt.data=ft.data),k[G]=Tt,Z++}r.attributes=k,r.attributesNum=Z,r.index=N}function y(){let E=r.newAttributes;for(let U=0,V=E.length;U<V;U++)E[U]=0}function m(E){u(E,0)}function u(E,U){let V=r.newAttributes,N=r.enabledAttributes,k=r.attributeDivisors;V[E]=1,N[E]===0&&(i.enableVertexAttribArray(E),N[E]=1),k[E]!==U&&(i.vertexAttribDivisor(E,U),k[E]=U)}function R(){let E=r.newAttributes,U=r.enabledAttributes;for(let V=0,N=U.length;V<N;V++)U[V]!==E[V]&&(i.disableVertexAttribArray(V),U[V]=0)}function x(E,U,V,N,k,Y,Z){Z===!0?i.vertexAttribIPointer(E,U,V,k,Y):i.vertexAttribPointer(E,U,V,N,k,Y)}function S(E,U,V,N){y();let k=N.attributes,Y=V.getAttributes(),Z=U.defaultAttributeValues;for(let et in Y){let G=Y[et];if(G.location>=0){let ht=k[et];if(ht===void 0&&(et==="instanceMatrix"&&E.instanceMatrix&&(ht=E.instanceMatrix),et==="instanceColor"&&E.instanceColor&&(ht=E.instanceColor)),ht!==void 0){let ft=ht.normalized,Tt=ht.itemSize,kt=t.get(ht);if(kt===void 0)continue;let Yt=kt.buffer,Wt=kt.type,Ut=kt.bytesPerElement,X=Wt===i.INT||Wt===i.UNSIGNED_INT||ht.gpuType===no;if(ht.isInterleavedBufferAttribute){let st=ht.data,gt=st.stride,It=ht.offset;if(st.isInstancedInterleavedBuffer){for(let bt=0;bt<G.locationSize;bt++)u(G.location+bt,st.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let bt=0;bt<G.locationSize;bt++)m(G.location+bt);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let bt=0;bt<G.locationSize;bt++)x(G.location+bt,Tt/G.locationSize,Wt,ft,gt*Ut,(It+Tt/G.locationSize*bt)*Ut,X)}else{if(ht.isInstancedBufferAttribute){for(let st=0;st<G.locationSize;st++)u(G.location+st,ht.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let st=0;st<G.locationSize;st++)m(G.location+st);i.bindBuffer(i.ARRAY_BUFFER,Yt);for(let st=0;st<G.locationSize;st++)x(G.location+st,Tt/G.locationSize,Wt,ft,Tt*Ut,Tt/G.locationSize*st*Ut,X)}}else if(Z!==void 0){let ft=Z[et];if(ft!==void 0)switch(ft.length){case 2:i.vertexAttrib2fv(G.location,ft);break;case 3:i.vertexAttrib3fv(G.location,ft);break;case 4:i.vertexAttrib4fv(G.location,ft);break;default:i.vertexAttrib1fv(G.location,ft)}}}}R()}function A(){F();for(let E in n){let U=n[E];for(let V in U){let N=U[V];for(let k in N)h(N[k].object),delete N[k];delete U[V]}delete n[E]}}function C(E){if(n[E.id]===void 0)return;let U=n[E.id];for(let V in U){let N=U[V];for(let k in N)h(N[k].object),delete N[k];delete U[V]}delete n[E.id]}function D(E){for(let U in n){let V=n[U];if(V[E.id]===void 0)continue;let N=V[E.id];for(let k in N)h(N[k].object),delete N[k];delete V[E.id]}}function F(){b(),o=!0,r!==s&&(r=s,l(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:b,dispose:A,releaseStatesOfGeometry:C,releaseStatesOfProgram:D,initAttributes:y,enableAttribute:m,disableUnusedAttributes:R}}function dp(i,t,e){let n;function s(l){n=l}function r(l,h){i.drawArrays(n,l,h),e.update(h,n,1)}function o(l,h,d){d!==0&&(i.drawArraysInstanced(n,l,h,d),e.update(h,n,d))}function a(l,h,d){if(d===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];e.update(p,n,1)}function c(l,h,d,f){if(d===0)return;let p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<l.length;g++)o(l[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,l,0,h,0,f,0,d);let g=0;for(let y=0;y<d;y++)g+=h[y]*f[y];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function fp(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let D=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(D.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(D){return!(D!==We&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(D){let F=D===Bi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(D!==Qe&&n.convert(D)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&D!==tn&&!F)}function c(D){if(D==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";D="mediump"}return D==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",h=c(l);h!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),u=i.getParameter(i.MAX_VERTEX_ATTRIBS),R=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),x=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,C=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:R,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:A,maxSamples:C}}function pp(i){let t=this,e=null,n=0,s=!1,r=!1,o=new Ve,a=new Ft,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let p=d.length!==0||f||n!==0||s;return s=f,n=d.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){e=h(d,f,0)},this.setState=function(d,f,p){let g=d.clippingPlanes,y=d.clipIntersection,m=d.clipShadows,u=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let R=r?0:n,x=R*4,S=u.clippingState||null;c.value=S,S=h(g,f,x,p);for(let A=0;A!==x;++A)S[A]=e[A];u.clippingState=S,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=R}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,f,p,g){let y=d!==null?d.length:0,m=null;if(y!==0){if(m=c.value,g!==!0||m===null){let u=p+y*4,R=f.matrixWorldInverse;a.getNormalMatrix(R),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=p;x!==y;++x,S+=4)o.copy(d[x]).applyMatrix4(R,a),o.normal.toArray(m,S),m[S+3]=o.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=y,t.numIntersection=0,m}}function mp(i){let t=new WeakMap;function e(o,a){return a===Qr?o.mapping=ni:a===to&&(o.mapping=ii),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qr||a===to)if(t.has(o)){let c=t.get(o).texture;return e(c,o.mapping)}else{let c=o.image;if(c&&c.height>0){let l=new vr(c.height);return l.fromEquirectangularTexture(i,o),t.set(o,l),o.addEventListener("dispose",s),e(l.texture,o.mapping)}else return null}}return o}function s(o){let a=o.target;a.removeEventListener("dispose",s);let c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}var Gi=4,Hc=[.125,.215,.35,.446,.526,.582],li=20,tl=new Is,Gc=new Bt,el=null,nl=0,il=0,sl=!1,ai=(1+Math.sqrt(5))/2,Hi=1/ai,Wc=[new I(-ai,Hi,0),new I(ai,Hi,0),new I(-Hi,0,ai),new I(Hi,0,ai),new I(0,ai,-Hi),new I(0,ai,Hi),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)],gp=new I,Vo=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100,r={}){let{size:o=256,position:a=gp}=r;el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,a),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(el,nl,il),this._renderer.xr.enabled=sl,t.scissorTest=!1,zo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ni||t.mapping===ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),el=this._renderer.getRenderTarget(),nl=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),sl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:Bi,format:We,colorSpace:Zn,depthBuffer:!1},s=Xc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Xc(t,e,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=_p(r)),this._blurMaterial=xp(r,t,e)}return s}_compileMaterial(t){let e=new Ee(this._lodPlanes[0],t);this._renderer.compile(e,tl)}_sceneToCubeUV(t,e,n,s,r){let c=new xe(90,1,e,n),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Gc),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));let y=new $n({name:"PMREM.Background",side:Ce,depthWrite:!1,depthTest:!1}),m=new Ee(new Ke,y),u=!1,R=t.background;R?R.isColor&&(y.color.copy(R),t.background=null,u=!0):(y.color.copy(Gc),u=!0);for(let x=0;x<6;x++){let S=x%3;S===0?(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[x],r.y,r.z)):S===1?(c.up.set(0,0,l[x]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[x],r.z)):(c.up.set(0,l[x],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[x]));let A=this._cubeSize;zo(s,S*A,x>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,c),d.render(t,c)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,t.background=R}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===ni||t.mapping===ii;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qc());let r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;let c=this._cubeSize;zo(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,tl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Wc[(s-r-1)%Wc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){let c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Ee(this._lodPlanes[s],l),f=l.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*li-1),y=r/g,m=isFinite(r)?1+Math.floor(h*y):li;m>li&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${li}`);let u=[],R=0;for(let D=0;D<li;++D){let F=D/y,b=Math.exp(-F*F/2);u.push(b),D===0?R+=b:D<m&&(R+=2*b)}for(let D=0;D<u.length;D++)u[D]=u[D]/R;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let S=this._sizeLods[s],A=3*S*(s>x-Gi?s-x+Gi:0),C=4*(this._cubeSize-S);zo(e,A,C,3*S,2*S),c.setRenderTarget(e),c.render(d,tl)}};function _p(i){let t=[],e=[],n=[],s=i,r=i-Gi+1+Hc.length;for(let o=0;o<r;o++){let a=Math.pow(2,s);e.push(a);let c=1/a;o>i-Gi?c=Hc[o-i+Gi-1]:o===0&&(c=0),n.push(c);let l=1/(a-2),h=-l,d=1+l,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,y=3,m=2,u=1,R=new Float32Array(y*g*p),x=new Float32Array(m*g*p),S=new Float32Array(u*g*p);for(let C=0;C<p;C++){let D=C%3*2/3-1,F=C>2?0:-1,b=[D,F,0,D+2/3,F,0,D+2/3,F+1,0,D,F,0,D+2/3,F+1,0,D,F+1,0];R.set(b,y*g*C),x.set(f,m*g*C);let E=[C,C,C,C,C,C];S.set(E,u*g*C)}let A=new be;A.setAttribute("position",new Se(R,y)),A.setAttribute("uv",new Se(x,m)),A.setAttribute("faceIndex",new Se(S,u)),t.push(A),s>Gi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Xc(i,t,e){let n=new sn(i,t,e);return n.texture.mapping=Ls,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function zo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function xp(i,t,e){let n=new Float32Array(li),s=new I(0,1,0);return new je({name:"SphericalGaussianBlur",defines:{n:li,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function qc(){return new je({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Yc(){return new je({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function pl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function yp(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let c=a.mapping,l=c===Qr||c===to,h=c===ni||c===ii;if(l||h){let d=t.get(a),f=d!==void 0?d.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Vo(i)),d=l?e.fromEquirectangular(a,d):e.fromCubemap(a,d),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),d.texture;if(d!==void 0)return d.texture;{let p=a.image;return l&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Vo(i)),d=l?e.fromEquirectangular(a):e.fromCubemap(a),d.texture.pmremVersion=a.pmremVersion,t.set(a,d),a.addEventListener("dispose",r),d.texture):null}}}return a}function s(a){let c=0,l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){let c=a.target;c.removeEventListener("dispose",r);let l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function vp(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ri("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function Mp(i,t,e,n){let s={},r=new WeakMap;function o(d){let f=d.target;f.index!==null&&t.remove(f.index);for(let g in f.attributes)t.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete s[f.id];let p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(d,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function c(d){let f=d.attributes;for(let p in f)t.update(f[p],i.ARRAY_BUFFER)}function l(d){let f=[],p=d.index,g=d.attributes.position,y=0;if(p!==null){let R=p.array;y=p.version;for(let x=0,S=R.length;x<S;x+=3){let A=R[x+0],C=R[x+1],D=R[x+2];f.push(A,C,C,D,D,A)}}else if(g!==void 0){let R=g.array;y=g.version;for(let x=0,S=R.length/3-1;x<S;x+=3){let A=x+0,C=x+1,D=x+2;f.push(A,C,C,D,D,A)}}else return;let m=new(Za(f)?ds:us)(f,1);m.version=y;let u=r.get(d);u&&t.remove(u),r.set(d,m)}function h(d){let f=r.get(d);if(f){let p=d.index;p!==null&&f.version<p.version&&l(d)}else l(d);return r.get(d)}return{get:a,update:c,getWireframeAttribute:h}}function Sp(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function l(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];e.update(m,n,1)}function d(f,p,g,y){if(g===0)return;let m=t.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)l(f[u]/o,p[u],y[u]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,y,0,g);let u=0;for(let R=0;R<g;R++)u+=p[R]*y[R];e.update(u,n,1)}}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function bp(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Ep(i,t,e){let n=new WeakMap,s=new Zt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==d){let b=function(){D.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,y=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],R=a.morphAttributes.color||[],x=0;p===!0&&(x=1),g===!0&&(x=2),y===!0&&(x=3);let S=a.attributes.position.count*x,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let C=new Float32Array(S*A*4*d),D=new cs(C,S,A,d);D.type=tn,D.needsUpdate=!0;let F=x*4;for(let E=0;E<d;E++){let U=m[E],V=u[E],N=R[E],k=S*A*4*E;for(let Y=0;Y<U.count;Y++){let Z=Y*F;p===!0&&(s.fromBufferAttribute(U,Y),C[k+Z+0]=s.x,C[k+Z+1]=s.y,C[k+Z+2]=s.z,C[k+Z+3]=0),g===!0&&(s.fromBufferAttribute(V,Y),C[k+Z+4]=s.x,C[k+Z+5]=s.y,C[k+Z+6]=s.z,C[k+Z+7]=0),y===!0&&(s.fromBufferAttribute(N,Y),C[k+Z+8]=s.x,C[k+Z+9]=s.y,C[k+Z+10]=s.z,C[k+Z+11]=N.itemSize===4?s.w:1)}}f={count:d,texture:D,size:new pt(S,A)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let p=0;for(let y=0;y<l.length;y++)p+=l[y];let g=a.morphTargetsRelative?1:1-p;c.getUniforms().setValue(i,"morphTargetBaseInfluence",g),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Tp(i,t,e,n){let s=new WeakMap;function r(c){let l=n.render.frame,h=c.geometry,d=t.get(c,h);if(s.get(d)!==l&&(t.update(d),s.set(d,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),s.get(c)!==l&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),s.set(c,l))),c.isSkinnedMesh){let f=c.skeleton;s.get(f)!==l&&(f.update(),s.set(f,l))}return d}function o(){s=new WeakMap}function a(c){let l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}var dh=new Re,Zc=new vs(1,1),fh=new cs,ph=new xr,mh=new ps,Jc=[],$c=[],Kc=new Float32Array(16),jc=new Float32Array(9),Qc=new Float32Array(4);function Xi(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Jc[s];if(r===void 0&&(r=new Float32Array(s),Jc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function pe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function me(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Go(i,t){let e=$c[t];e===void 0&&(e=new Int32Array(t),$c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function wp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function Ap(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2fv(this.addr,t),me(e,t)}}function Rp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;i.uniform3fv(this.addr,t),me(e,t)}}function Cp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4fv(this.addr,t),me(e,t)}}function Pp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Qc.set(n),i.uniformMatrix2fv(this.addr,!1,Qc),me(e,n)}}function Ip(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;jc.set(n),i.uniformMatrix3fv(this.addr,!1,jc),me(e,n)}}function Dp(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(pe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,n))return;Kc.set(n),i.uniformMatrix4fv(this.addr,!1,Kc),me(e,n)}}function Lp(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Up(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2iv(this.addr,t),me(e,t)}}function Np(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3iv(this.addr,t),me(e,t)}}function Fp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4iv(this.addr,t),me(e,t)}}function Op(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Bp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;i.uniform2uiv(this.addr,t),me(e,t)}}function zp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;i.uniform3uiv(this.addr,t),me(e,t)}}function kp(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;i.uniform4uiv(this.addr,t),me(e,t)}}function Vp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Zc.compareFunction=Wa,r=Zc):r=dh,e.setTexture2D(t||r,s)}function Hp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ph,s)}function Gp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||mh,s)}function Wp(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||fh,s)}function Xp(i){switch(i){case 5126:return wp;case 35664:return Ap;case 35665:return Rp;case 35666:return Cp;case 35674:return Pp;case 35675:return Ip;case 35676:return Dp;case 5124:case 35670:return Lp;case 35667:case 35671:return Up;case 35668:case 35672:return Np;case 35669:case 35673:return Fp;case 5125:return Op;case 36294:return Bp;case 36295:return zp;case 36296:return kp;case 35678:case 36198:case 36298:case 36306:case 35682:return Vp;case 35679:case 36299:case 36307:return Hp;case 35680:case 36300:case 36308:case 36293:return Gp;case 36289:case 36303:case 36311:case 36292:return Wp}}function qp(i,t){i.uniform1fv(this.addr,t)}function Yp(i,t){let e=Xi(t,this.size,2);i.uniform2fv(this.addr,e)}function Zp(i,t){let e=Xi(t,this.size,3);i.uniform3fv(this.addr,e)}function Jp(i,t){let e=Xi(t,this.size,4);i.uniform4fv(this.addr,e)}function $p(i,t){let e=Xi(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Kp(i,t){let e=Xi(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function jp(i,t){let e=Xi(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Qp(i,t){i.uniform1iv(this.addr,t)}function tm(i,t){i.uniform2iv(this.addr,t)}function em(i,t){i.uniform3iv(this.addr,t)}function nm(i,t){i.uniform4iv(this.addr,t)}function im(i,t){i.uniform1uiv(this.addr,t)}function sm(i,t){i.uniform2uiv(this.addr,t)}function rm(i,t){i.uniform3uiv(this.addr,t)}function om(i,t){i.uniform4uiv(this.addr,t)}function am(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||dh,r[o])}function lm(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||ph,r[o])}function cm(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||mh,r[o])}function hm(i,t,e){let n=this.cache,s=t.length,r=Go(e,s);pe(n,r)||(i.uniform1iv(this.addr,r),me(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||fh,r[o])}function um(i){switch(i){case 5126:return qp;case 35664:return Yp;case 35665:return Zp;case 35666:return Jp;case 35674:return $p;case 35675:return Kp;case 35676:return jp;case 5124:case 35670:return Qp;case 35667:case 35671:return tm;case 35668:case 35672:return em;case 35669:case 35673:return nm;case 5125:return im;case 36294:return sm;case 36295:return rm;case 36296:return om;case 35678:case 36198:case 36298:case 36306:case 35682:return am;case 35679:case 36299:case 36307:return lm;case 35680:case 36300:case 36308:case 36293:return cm;case 36289:case 36303:case 36311:case 36292:return hm}}var ol=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Xp(e.type)}},al=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=um(e.type)}},ll=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(t,e[a.id],n)}}},rl=/(\w+)(\])?(\[|\.)?/g;function th(i,t){i.seq.push(t),i.map[t.id]=t}function dm(i,t,e){let n=i.name,s=n.length;for(rl.lastIndex=0;;){let r=rl.exec(n),o=rl.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){th(e,l===void 0?new ol(a,i,t):new al(a,i,t));break}else{let d=e.map[a];d===void 0&&(d=new ll(a),th(e,d)),e=d}}}var Wi=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);dm(r,o,this)}}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){let a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let o=t[s];o.id in e&&n.push(o)}return n}};function eh(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var fm=37297,pm=0;function mm(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var nh=new Ft;function gm(i){Gt._getMatrix(nh,Gt.workingColorSpace,i);let t=`mat3( ${nh.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(i)){case os:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function ih(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+mm(i.getShaderSource(t),a)}else return r}function _m(i,t){let e=gm(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function xm(i,t){let e;switch(t){case vc:e="Linear";break;case Mc:e="Reinhard";break;case Sc:e="Cineon";break;case jr:e="ACESFilmic";break;case Ec:e="AgX";break;case Tc:e="Neutral";break;case bc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var ko=new I;function ym(){Gt.getLuminanceCoefficients(ko);let i=ko.x.toFixed(4),t=ko.y.toFixed(4),e=ko.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vm(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(zs).join(`
`)}function Mm(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Sm(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function zs(i){return i!==""}function sh(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var bm=/^[ \t]*#include +<([\w\d./]+)>/gm;function cl(i){return i.replace(bm,Tm)}var Em=new Map;function Tm(i,t){let e=zt[t];if(e===void 0){let n=Em.get(t);if(n!==void 0)e=zt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return cl(e)}var wm=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function oh(i){return i.replace(wm,Am)}function Am(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ah(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Rm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Pa?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Ql?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===on&&(t="SHADOWMAP_TYPE_VSM"),t}function Cm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ni:case ii:t="ENVMAP_TYPE_CUBE";break;case Ls:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Pm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Im(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ua:t="ENVMAP_BLENDING_MULTIPLY";break;case xc:t="ENVMAP_BLENDING_MIX";break;case yc:t="ENVMAP_BLENDING_ADD";break}return t}function Dm(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function Lm(i,t,e,n){let s=i.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,c=Rm(e),l=Cm(e),h=Pm(e),d=Im(e),f=Dm(e),p=vm(e),g=Mm(r),y=s.createProgram(),m,u,R=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(zs).join(`
`),u.length>0&&(u+=`
`)):(m=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(zs).join(`
`),u=[ah(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?zt.tonemapping_pars_fragment:"",e.toneMapping!==vn?xm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",zt.colorspace_pars_fragment,_m("linearToOutputTexel",e.outputColorSpace),ym(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(zs).join(`
`)),o=cl(o),o=sh(o,e),o=rh(o,e),a=cl(a),a=sh(a,e),a=rh(a,e),o=oh(o),a=oh(a),e.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",e.glslVersion===Xa?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xa?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);let x=R+m+o,S=R+u+a,A=eh(s,s.VERTEX_SHADER,x),C=eh(s,s.FRAGMENT_SHADER,S);s.attachShader(y,A),s.attachShader(y,C),e.index0AttributeName!==void 0?s.bindAttribLocation(y,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(y,0,"position"),s.linkProgram(y);function D(U){if(i.debug.checkShaderErrors){let V=s.getProgramInfoLog(y)||"",N=s.getShaderInfoLog(A)||"",k=s.getShaderInfoLog(C)||"",Y=V.trim(),Z=N.trim(),et=k.trim(),G=!0,ht=!0;if(s.getProgramParameter(y,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,y,A,C);else{let ft=ih(s,A,"vertex"),Tt=ih(s,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(y,s.VALIDATE_STATUS)+`

Material Name: `+U.name+`
Material Type: `+U.type+`

Program Info Log: `+Y+`
`+ft+`
`+Tt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(Z===""||et==="")&&(ht=!1);ht&&(U.diagnostics={runnable:G,programLog:Y,vertexShader:{log:Z,prefix:m},fragmentShader:{log:et,prefix:u}})}s.deleteShader(A),s.deleteShader(C),F=new Wi(s,y),b=Sm(s,y)}let F;this.getUniforms=function(){return F===void 0&&D(this),F};let b;this.getAttributes=function(){return b===void 0&&D(this),b};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(y,fm)),E},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(y),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=pm++,this.cacheKey=t,this.usedTimes=1,this.program=y,this.vertexShader=A,this.fragmentShader=C,this}var Um=0,hl=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new ul(t),e.set(t,n)),n}},ul=class{constructor(t){this.id=Um++,this.code=t,this.usedTimes=0}};function Nm(i,t,e,n,s,r,o){let a=new hs,c=new hl,l=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures,p=s.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(b){return l.add(b),b===0?"uv":`uv${b}`}function m(b,E,U,V,N){let k=V.fog,Y=N.geometry,Z=b.isMeshStandardMaterial?V.environment:null,et=(b.isMeshStandardMaterial?e:t).get(b.envMap||Z),G=et&&et.mapping===Ls?et.image.height:null,ht=g[b.type];b.precision!==null&&(p=s.getMaxPrecision(b.precision),p!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",p,"instead."));let ft=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tt=ft!==void 0?ft.length:0,kt=0;Y.morphAttributes.position!==void 0&&(kt=1),Y.morphAttributes.normal!==void 0&&(kt=2),Y.morphAttributes.color!==void 0&&(kt=3);let Yt,Wt,Ut,X;if(ht){let qt=ln[ht];Yt=qt.vertexShader,Wt=qt.fragmentShader}else Yt=b.vertexShader,Wt=b.fragmentShader,c.update(b),Ut=c.getVertexShaderID(b),X=c.getFragmentShaderID(b);let st=i.getRenderTarget(),gt=i.state.buffers.depth.getReversed(),It=N.isInstancedMesh===!0,bt=N.isBatchedMesh===!0,Vt=!!b.map,de=!!b.matcap,P=!!et,jt=!!b.aoMap,Lt=!!b.lightMap,Rt=!!b.bumpMap,xt=!!b.normalMap,Qt=!!b.displacementMap,_t=!!b.emissiveMap,Ct=!!b.metalnessMap,ae=!!b.roughnessMap,ie=b.anisotropy>0,T=b.clearcoat>0,_=b.dispersion>0,z=b.iridescence>0,j=b.sheen>0,nt=b.transmission>0,K=ie&&!!b.anisotropyMap,Et=T&&!!b.clearcoatMap,ct=T&&!!b.clearcoatNormalMap,yt=T&&!!b.clearcoatRoughnessMap,Mt=z&&!!b.iridescenceMap,ot=z&&!!b.iridescenceThicknessMap,M=j&&!!b.sheenColorMap,L=j&&!!b.sheenRoughnessMap,J=!!b.specularMap,H=!!b.specularColorMap,rt=!!b.specularIntensityMap,w=nt&&!!b.transmissionMap,$=nt&&!!b.thicknessMap,it=!!b.gradientMap,lt=!!b.alphaMap,tt=b.alphaTest>0,Q=!!b.alphaHash,St=!!b.extensions,Nt=vn;b.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Nt=i.toneMapping);let se={shaderID:ht,shaderType:b.type,shaderName:b.name,vertexShader:Yt,fragmentShader:Wt,defines:b.defines,customVertexShaderID:Ut,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:p,batching:bt,batchingColor:bt&&N._colorsTexture!==null,instancing:It,instancingColor:It&&N.instanceColor!==null,instancingMorph:It&&N.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:Zn,alphaToCoverage:!!b.alphaToCoverage,map:Vt,matcap:de,envMap:P,envMapMode:P&&et.mapping,envMapCubeUVHeight:G,aoMap:jt,lightMap:Lt,bumpMap:Rt,normalMap:xt,displacementMap:f&&Qt,emissiveMap:_t,normalMapObjectSpace:xt&&b.normalMapType===Cc,normalMapTangentSpace:xt&&b.normalMapType===Ga,metalnessMap:Ct,roughnessMap:ae,anisotropy:ie,anisotropyMap:K,clearcoat:T,clearcoatMap:Et,clearcoatNormalMap:ct,clearcoatRoughnessMap:yt,dispersion:_,iridescence:z,iridescenceMap:Mt,iridescenceThicknessMap:ot,sheen:j,sheenColorMap:M,sheenRoughnessMap:L,specularMap:J,specularColorMap:H,specularIntensityMap:rt,transmission:nt,transmissionMap:w,thicknessMap:$,gradientMap:it,opaque:b.transparent===!1&&b.blending===qn&&b.alphaToCoverage===!1,alphaMap:lt,alphaTest:tt,alphaHash:Q,combine:b.combine,mapUv:Vt&&y(b.map.channel),aoMapUv:jt&&y(b.aoMap.channel),lightMapUv:Lt&&y(b.lightMap.channel),bumpMapUv:Rt&&y(b.bumpMap.channel),normalMapUv:xt&&y(b.normalMap.channel),displacementMapUv:Qt&&y(b.displacementMap.channel),emissiveMapUv:_t&&y(b.emissiveMap.channel),metalnessMapUv:Ct&&y(b.metalnessMap.channel),roughnessMapUv:ae&&y(b.roughnessMap.channel),anisotropyMapUv:K&&y(b.anisotropyMap.channel),clearcoatMapUv:Et&&y(b.clearcoatMap.channel),clearcoatNormalMapUv:ct&&y(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:yt&&y(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Mt&&y(b.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&y(b.iridescenceThicknessMap.channel),sheenColorMapUv:M&&y(b.sheenColorMap.channel),sheenRoughnessMapUv:L&&y(b.sheenRoughnessMap.channel),specularMapUv:J&&y(b.specularMap.channel),specularColorMapUv:H&&y(b.specularColorMap.channel),specularIntensityMapUv:rt&&y(b.specularIntensityMap.channel),transmissionMapUv:w&&y(b.transmissionMap.channel),thicknessMapUv:$&&y(b.thicknessMap.channel),alphaMapUv:lt&&y(b.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(xt||ie),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!Y.attributes.uv&&(Vt||lt),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:gt,skinning:N.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:Tt,morphTextureStride:kt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:Nt,decodeVideoTexture:Vt&&b.map.isVideoTexture===!0&&Gt.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===an,flipSided:b.side===Ce,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:St&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&b.extensions.multiDraw===!0||bt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return se.vertexUv1s=l.has(1),se.vertexUv2s=l.has(2),se.vertexUv3s=l.has(3),l.clear(),se}function u(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let U in b.defines)E.push(U),E.push(b.defines[U]);return b.isRawShaderMaterial===!1&&(R(E,b),x(E,b),E.push(i.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function R(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),E.gradientMap&&a.enable(22),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function S(b){let E=g[b.type],U;if(E){let V=ln[E];U=kc.clone(V.uniforms)}else U=b.uniforms;return U}function A(b,E){let U;for(let V=0,N=h.length;V<N;V++){let k=h[V];if(k.cacheKey===E){U=k,++U.usedTimes;break}}return U===void 0&&(U=new Lm(i,E,b,r),h.push(U)),U}function C(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),b.destroy()}}function D(b){c.remove(b)}function F(){c.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:S,acquireProgram:A,releaseProgram:C,releaseShaderCache:D,programs:h,dispose:F}}function Fm(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Om(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ch(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(d,f,p,g,y,m){let u=i[t];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:y,group:m},i[t]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=y,u.group=m),t++,u}function a(d,f,p,g,y,m){let u=o(d,f,p,g,y,m);p.transmission>0?n.push(u):p.transparent===!0?s.push(u):e.push(u)}function c(d,f,p,g,y,m){let u=o(d,f,p,g,y,m);p.transmission>0?n.unshift(u):p.transparent===!0?s.unshift(u):e.unshift(u)}function l(d,f){e.length>1&&e.sort(d||Om),n.length>1&&n.sort(f||lh),s.length>1&&s.sort(f||lh)}function h(){for(let d=t,f=i.length;d<f;d++){let p=i[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:c,finish:h,sort:l}}function Bm(){let i=new WeakMap;function t(n,s){let r=i.get(n),o;return r===void 0?(o=new ch,i.set(n,[o])):s>=r.length?(o=new ch,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function zm(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Bt};break;case"SpotLight":e={position:new I,direction:new I,color:new Bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Bt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Bt,groundColor:new Bt};break;case"RectAreaLight":e={color:new Bt,position:new I,halfWidth:new I,halfHeight:new I};break}return i[t.id]=e,e}}}function km(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var Vm=0;function Hm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Gm(i){let t=new zm,e=km(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new I);let s=new I,r=new ee,o=new ee;function a(l){let h=0,d=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let p=0,g=0,y=0,m=0,u=0,R=0,x=0,S=0,A=0,C=0,D=0;l.sort(Hm);for(let b=0,E=l.length;b<E;b++){let U=l[b],V=U.color,N=U.intensity,k=U.distance,Y=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=V.r*N,d+=V.g*N,f+=V.b*N;else if(U.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(U.sh.coefficients[Z],N);D++}else if(U.isDirectionalLight){let Z=t.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),U.castShadow){let et=U.shadow,G=e.get(U);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.directionalShadow[p]=G,n.directionalShadowMap[p]=Y,n.directionalShadowMatrix[p]=U.shadow.matrix,R++}n.directional[p]=Z,p++}else if(U.isSpotLight){let Z=t.get(U);Z.position.setFromMatrixPosition(U.matrixWorld),Z.color.copy(V).multiplyScalar(N),Z.distance=k,Z.coneCos=Math.cos(U.angle),Z.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),Z.decay=U.decay,n.spot[y]=Z;let et=U.shadow;if(U.map&&(n.spotLightMap[A]=U.map,A++,et.updateMatrices(U),U.castShadow&&C++),n.spotLightMatrix[y]=et.matrix,U.castShadow){let G=e.get(U);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,n.spotShadow[y]=G,n.spotShadowMap[y]=Y,S++}y++}else if(U.isRectAreaLight){let Z=t.get(U);Z.color.copy(V).multiplyScalar(N),Z.halfWidth.set(U.width*.5,0,0),Z.halfHeight.set(0,U.height*.5,0),n.rectArea[m]=Z,m++}else if(U.isPointLight){let Z=t.get(U);if(Z.color.copy(U.color).multiplyScalar(U.intensity),Z.distance=U.distance,Z.decay=U.decay,U.castShadow){let et=U.shadow,G=e.get(U);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=Y,n.pointShadowMatrix[g]=U.shadow.matrix,x++}n.point[g]=Z,g++}else if(U.isHemisphereLight){let Z=t.get(U);Z.skyColor.copy(U.color).multiplyScalar(N),Z.groundColor.copy(U.groundColor).multiplyScalar(N),n.hemi[u]=Z,u++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ut.LTC_FLOAT_1,n.rectAreaLTC2=ut.LTC_FLOAT_2):(n.rectAreaLTC1=ut.LTC_HALF_1,n.rectAreaLTC2=ut.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let F=n.hash;(F.directionalLength!==p||F.pointLength!==g||F.spotLength!==y||F.rectAreaLength!==m||F.hemiLength!==u||F.numDirectionalShadows!==R||F.numPointShadows!==x||F.numSpotShadows!==S||F.numSpotMaps!==A||F.numLightProbes!==D)&&(n.directional.length=p,n.spot.length=y,n.rectArea.length=m,n.point.length=g,n.hemi.length=u,n.directionalShadow.length=R,n.directionalShadowMap.length=R,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=S,n.spotShadowMap.length=S,n.directionalShadowMatrix.length=R,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=S+A-C,n.spotLightMap.length=A,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=D,F.directionalLength=p,F.pointLength=g,F.spotLength=y,F.rectAreaLength=m,F.hemiLength=u,F.numDirectionalShadows=R,F.numPointShadows=x,F.numSpotShadows=S,F.numSpotMaps=A,F.numLightProbes=D,n.version=Vm++)}function c(l,h){let d=0,f=0,p=0,g=0,y=0,m=h.matrixWorldInverse;for(let u=0,R=l.length;u<R;u++){let x=l[u];if(x.isDirectionalLight){let S=n.directional[d];S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),d++}else if(x.isSpotLight){let S=n.spot[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(m),p++}else if(x.isRectAreaLight){let S=n.rectArea[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),r.copy(x.matrixWorld),r.premultiply(m),o.extractRotation(r),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let S=n.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){let S=n.hemi[y];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),y++}}}return{setup:a,setupView:c,state:n}}function hh(i){let t=new Gm(i),e=[],n=[];function s(h){l.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function c(h){t.setupView(e,h)}let l={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function Wm(i){let t=new WeakMap;function e(s,r=0){let o=t.get(s),a;return o===void 0?(a=new hh(i),t.set(s,[a])):r>=o.length?(a=new hh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Xm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,qm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Ym(i,t,e){let n=new Ii,s=new pt,r=new pt,o=new Zt,a=new Dr({depthPacking:Rc}),c=new Lr,l={},h=e.maxTextureSize,d={[gn]:Ce,[Ce]:gn,[an]:an},f=new je({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:Xm,fragmentShader:qm}),p=f.clone();p.defines.HORIZONTAL_PASS=1;let g=new be;g.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let y=new Ee(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pa;let u=this.type;this.render=function(C,D,F){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;let b=i.getRenderTarget(),E=i.getActiveCubeFace(),U=i.getActiveMipmapLevel(),V=i.state;V.setBlending(yn),V.buffers.depth.getReversed()===!0?V.buffers.color.setClear(0,0,0,0):V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);let N=u!==on&&this.type===on,k=u===on&&this.type!==on;for(let Y=0,Z=C.length;Y<Z;Y++){let et=C[Y],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let ht=G.getFrameExtents();if(s.multiply(ht),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ht.x),s.x=r.x*ht.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ht.y),s.y=r.y*ht.y,G.mapSize.y=r.y)),G.map===null||N===!0||k===!0){let Tt=this.type!==on?{minFilter:Ie,magFilter:Ie}:{};G.map!==null&&G.map.dispose(),G.map=new sn(s.x,s.y,Tt),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();let ft=G.getViewportCount();for(let Tt=0;Tt<ft;Tt++){let kt=G.getViewport(Tt);o.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),V.viewport(o),G.updateMatrices(et,Tt),n=G.getFrustum(),S(D,F,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===on&&R(G,F),G.needsUpdate=!1}u=this.type,m.needsUpdate=!1,i.setRenderTarget(b,E,U)};function R(C,D){let F=t.update(y);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new sn(s.x,s.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,i.setRenderTarget(C.mapPass),i.clear(),i.renderBufferDirect(D,null,F,f,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,i.setRenderTarget(C.map),i.clear(),i.renderBufferDirect(D,null,F,p,y,null)}function x(C,D,F,b){let E=null,U=F.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(U!==void 0)E=U;else if(E=F.isPointLight===!0?c:a,i.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0||D.alphaToCoverage===!0){let V=E.uuid,N=D.uuid,k=l[V];k===void 0&&(k={},l[V]=k);let Y=k[N];Y===void 0&&(Y=E.clone(),k[N]=Y,D.addEventListener("dispose",A)),E=Y}if(E.visible=D.visible,E.wireframe=D.wireframe,b===on?E.side=D.shadowSide!==null?D.shadowSide:D.side:E.side=D.shadowSide!==null?D.shadowSide:d[D.side],E.alphaMap=D.alphaMap,E.alphaTest=D.alphaToCoverage===!0?.5:D.alphaTest,E.map=D.map,E.clipShadows=D.clipShadows,E.clippingPlanes=D.clippingPlanes,E.clipIntersection=D.clipIntersection,E.displacementMap=D.displacementMap,E.displacementScale=D.displacementScale,E.displacementBias=D.displacementBias,E.wireframeLinewidth=D.wireframeLinewidth,E.linewidth=D.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let V=i.properties.get(E);V.light=F}return E}function S(C,D,F,b,E){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&E===on)&&(!C.frustumCulled||n.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,C.matrixWorld);let N=t.update(C),k=C.material;if(Array.isArray(k)){let Y=N.groups;for(let Z=0,et=Y.length;Z<et;Z++){let G=Y[Z],ht=k[G.materialIndex];if(ht&&ht.visible){let ft=x(C,ht,b,E);C.onBeforeShadow(i,C,D,F,N,ft,G),i.renderBufferDirect(F,null,N,ft,C,G),C.onAfterShadow(i,C,D,F,N,ft,G)}}}else if(k.visible){let Y=x(C,k,b,E);C.onBeforeShadow(i,C,D,F,N,Y,null),i.renderBufferDirect(F,null,N,Y,C,null),C.onAfterShadow(i,C,D,F,N,Y,null)}}let V=C.children;for(let N=0,k=V.length;N<k;N++)S(V[N],D,F,b,E)}function A(C){C.target.removeEventListener("dispose",A);for(let F in l){let b=l[F],E=C.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var Zm={[Xr]:qr,[Yr]:$r,[Zr]:Kr,[Yn]:Jr,[qr]:Xr,[$r]:Yr,[Kr]:Zr,[Jr]:Yn};function Jm(i,t){function e(){let w=!1,$=new Zt,it=null,lt=new Zt(0,0,0,0);return{setMask:function(tt){it!==tt&&!w&&(i.colorMask(tt,tt,tt,tt),it=tt)},setLocked:function(tt){w=tt},setClear:function(tt,Q,St,Nt,se){se===!0&&(tt*=Nt,Q*=Nt,St*=Nt),$.set(tt,Q,St,Nt),lt.equals($)===!1&&(i.clearColor(tt,Q,St,Nt),lt.copy($))},reset:function(){w=!1,it=null,lt.set(-1,0,0,0)}}}function n(){let w=!1,$=!1,it=null,lt=null,tt=null;return{setReversed:function(Q){if($!==Q){let St=t.get("EXT_clip_control");Q?St.clipControlEXT(St.LOWER_LEFT_EXT,St.ZERO_TO_ONE_EXT):St.clipControlEXT(St.LOWER_LEFT_EXT,St.NEGATIVE_ONE_TO_ONE_EXT),$=Q;let Nt=tt;tt=null,this.setClear(Nt)}},getReversed:function(){return $},setTest:function(Q){Q?st(i.DEPTH_TEST):gt(i.DEPTH_TEST)},setMask:function(Q){it!==Q&&!w&&(i.depthMask(Q),it=Q)},setFunc:function(Q){if($&&(Q=Zm[Q]),lt!==Q){switch(Q){case Xr:i.depthFunc(i.NEVER);break;case qr:i.depthFunc(i.ALWAYS);break;case Yr:i.depthFunc(i.LESS);break;case Yn:i.depthFunc(i.LEQUAL);break;case Zr:i.depthFunc(i.EQUAL);break;case Jr:i.depthFunc(i.GEQUAL);break;case $r:i.depthFunc(i.GREATER);break;case Kr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}lt=Q}},setLocked:function(Q){w=Q},setClear:function(Q){tt!==Q&&($&&(Q=1-Q),i.clearDepth(Q),tt=Q)},reset:function(){w=!1,it=null,lt=null,tt=null,$=!1}}}function s(){let w=!1,$=null,it=null,lt=null,tt=null,Q=null,St=null,Nt=null,se=null;return{setTest:function(qt){w||(qt?st(i.STENCIL_TEST):gt(i.STENCIL_TEST))},setMask:function(qt){$!==qt&&!w&&(i.stencilMask(qt),$=qt)},setFunc:function(qt,cn,en){(it!==qt||lt!==cn||tt!==en)&&(i.stencilFunc(qt,cn,en),it=qt,lt=cn,tt=en)},setOp:function(qt,cn,en){(Q!==qt||St!==cn||Nt!==en)&&(i.stencilOp(qt,cn,en),Q=qt,St=cn,Nt=en)},setLocked:function(qt){w=qt},setClear:function(qt){se!==qt&&(i.clearStencil(qt),se=qt)},reset:function(){w=!1,$=null,it=null,lt=null,tt=null,Q=null,St=null,Nt=null,se=null}}}let r=new e,o=new n,a=new s,c=new WeakMap,l=new WeakMap,h={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,u=null,R=null,x=null,S=null,A=null,C=null,D=new Bt(0,0,0),F=0,b=!1,E=null,U=null,V=null,N=null,k=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Z=!1,et=0,G=i.getParameter(i.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),Z=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),Z=et>=2);let ht=null,ft={},Tt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),Yt=new Zt().fromArray(Tt),Wt=new Zt().fromArray(kt);function Ut(w,$,it,lt){let tt=new Uint8Array(4),Q=i.createTexture();i.bindTexture(w,Q),i.texParameteri(w,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(w,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let St=0;St<it;St++)w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,lt,0,i.RGBA,i.UNSIGNED_BYTE,tt):i.texImage2D($+St,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,tt);return Q}let X={};X[i.TEXTURE_2D]=Ut(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=Ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=Ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=Ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),st(i.DEPTH_TEST),o.setFunc(Yn),Rt(!1),xt(Ca),st(i.CULL_FACE),jt(yn);function st(w){h[w]!==!0&&(i.enable(w),h[w]=!0)}function gt(w){h[w]!==!1&&(i.disable(w),h[w]=!1)}function It(w,$){return d[w]!==$?(i.bindFramebuffer(w,$),d[w]=$,w===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=$),w===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=$),!0):!1}function bt(w,$){let it=p,lt=!1;if(w){it=f.get($),it===void 0&&(it=[],f.set($,it));let tt=w.textures;if(it.length!==tt.length||it[0]!==i.COLOR_ATTACHMENT0){for(let Q=0,St=tt.length;Q<St;Q++)it[Q]=i.COLOR_ATTACHMENT0+Q;it.length=tt.length,lt=!0}}else it[0]!==i.BACK&&(it[0]=i.BACK,lt=!0);lt&&i.drawBuffers(it)}function Vt(w){return g!==w?(i.useProgram(w),g=w,!0):!1}let de={[Pn]:i.FUNC_ADD,[ec]:i.FUNC_SUBTRACT,[nc]:i.FUNC_REVERSE_SUBTRACT};de[ic]=i.MIN,de[sc]=i.MAX;let P={[rc]:i.ZERO,[oc]:i.ONE,[ac]:i.SRC_COLOR,[ur]:i.SRC_ALPHA,[fc]:i.SRC_ALPHA_SATURATE,[uc]:i.DST_COLOR,[cc]:i.DST_ALPHA,[lc]:i.ONE_MINUS_SRC_COLOR,[dr]:i.ONE_MINUS_SRC_ALPHA,[dc]:i.ONE_MINUS_DST_COLOR,[hc]:i.ONE_MINUS_DST_ALPHA,[pc]:i.CONSTANT_COLOR,[mc]:i.ONE_MINUS_CONSTANT_COLOR,[gc]:i.CONSTANT_ALPHA,[_c]:i.ONE_MINUS_CONSTANT_ALPHA};function jt(w,$,it,lt,tt,Q,St,Nt,se,qt){if(w===yn){y===!0&&(gt(i.BLEND),y=!1);return}if(y===!1&&(st(i.BLEND),y=!0),w!==tc){if(w!==m||qt!==b){if((u!==Pn||S!==Pn)&&(i.blendEquation(i.FUNC_ADD),u=Pn,S=Pn),qt)switch(w){case qn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFunc(i.ONE,i.ONE);break;case Da:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case La:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}else switch(w){case qn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ia:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Da:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case La:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",w);break}R=null,x=null,A=null,C=null,D.set(0,0,0),F=0,m=w,b=qt}return}tt=tt||$,Q=Q||it,St=St||lt,($!==u||tt!==S)&&(i.blendEquationSeparate(de[$],de[tt]),u=$,S=tt),(it!==R||lt!==x||Q!==A||St!==C)&&(i.blendFuncSeparate(P[it],P[lt],P[Q],P[St]),R=it,x=lt,A=Q,C=St),(Nt.equals(D)===!1||se!==F)&&(i.blendColor(Nt.r,Nt.g,Nt.b,se),D.copy(Nt),F=se),m=w,b=!1}function Lt(w,$){w.side===an?gt(i.CULL_FACE):st(i.CULL_FACE);let it=w.side===Ce;$&&(it=!it),Rt(it),w.blending===qn&&w.transparent===!1?jt(yn):jt(w.blending,w.blendEquation,w.blendSrc,w.blendDst,w.blendEquationAlpha,w.blendSrcAlpha,w.blendDstAlpha,w.blendColor,w.blendAlpha,w.premultipliedAlpha),o.setFunc(w.depthFunc),o.setTest(w.depthTest),o.setMask(w.depthWrite),r.setMask(w.colorWrite);let lt=w.stencilWrite;a.setTest(lt),lt&&(a.setMask(w.stencilWriteMask),a.setFunc(w.stencilFunc,w.stencilRef,w.stencilFuncMask),a.setOp(w.stencilFail,w.stencilZFail,w.stencilZPass)),_t(w.polygonOffset,w.polygonOffsetFactor,w.polygonOffsetUnits),w.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):gt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Rt(w){E!==w&&(w?i.frontFace(i.CW):i.frontFace(i.CCW),E=w)}function xt(w){w!==Kl?(st(i.CULL_FACE),w!==U&&(w===Ca?i.cullFace(i.BACK):w===jl?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):gt(i.CULL_FACE),U=w}function Qt(w){w!==V&&(Z&&i.lineWidth(w),V=w)}function _t(w,$,it){w?(st(i.POLYGON_OFFSET_FILL),(N!==$||k!==it)&&(i.polygonOffset($,it),N=$,k=it)):gt(i.POLYGON_OFFSET_FILL)}function Ct(w){w?st(i.SCISSOR_TEST):gt(i.SCISSOR_TEST)}function ae(w){w===void 0&&(w=i.TEXTURE0+Y-1),ht!==w&&(i.activeTexture(w),ht=w)}function ie(w,$,it){it===void 0&&(ht===null?it=i.TEXTURE0+Y-1:it=ht);let lt=ft[it];lt===void 0&&(lt={type:void 0,texture:void 0},ft[it]=lt),(lt.type!==w||lt.texture!==$)&&(ht!==it&&(i.activeTexture(it),ht=it),i.bindTexture(w,$||X[w]),lt.type=w,lt.texture=$)}function T(){let w=ft[ht];w!==void 0&&w.type!==void 0&&(i.bindTexture(w.type,null),w.type=void 0,w.texture=void 0)}function _(){try{i.compressedTexImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function z(){try{i.compressedTexImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function j(){try{i.texSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function nt(){try{i.texSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function K(){try{i.compressedTexSubImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Et(){try{i.compressedTexSubImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ct(){try{i.texStorage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function yt(){try{i.texStorage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function Mt(){try{i.texImage2D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function ot(){try{i.texImage3D(...arguments)}catch(w){console.error("THREE.WebGLState:",w)}}function M(w){Yt.equals(w)===!1&&(i.scissor(w.x,w.y,w.z,w.w),Yt.copy(w))}function L(w){Wt.equals(w)===!1&&(i.viewport(w.x,w.y,w.z,w.w),Wt.copy(w))}function J(w,$){let it=l.get($);it===void 0&&(it=new WeakMap,l.set($,it));let lt=it.get(w);lt===void 0&&(lt=i.getUniformBlockIndex($,w.name),it.set(w,lt))}function H(w,$){let lt=l.get($).get(w);c.get($)!==lt&&(i.uniformBlockBinding($,lt,w.__bindingPointIndex),c.set($,lt))}function rt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},ht=null,ft={},d={},f=new WeakMap,p=[],g=null,y=!1,m=null,u=null,R=null,x=null,S=null,A=null,C=null,D=new Bt(0,0,0),F=0,b=!1,E=null,U=null,V=null,N=null,k=null,Yt.set(0,0,i.canvas.width,i.canvas.height),Wt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:st,disable:gt,bindFramebuffer:It,drawBuffers:bt,useProgram:Vt,setBlending:jt,setMaterial:Lt,setFlipSided:Rt,setCullFace:xt,setLineWidth:Qt,setPolygonOffset:_t,setScissorTest:Ct,activeTexture:ae,bindTexture:ie,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:z,texImage2D:Mt,texImage3D:ot,updateUBOMapping:J,uniformBlockBinding:H,texStorage2D:ct,texStorage3D:yt,texSubImage2D:j,texSubImage3D:nt,compressedTexSubImage2D:K,compressedTexSubImage3D:Et,scissor:M,viewport:L,reset:rt}}function $m(i,t,e,n,s,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new pt,h=new WeakMap,d,f=new WeakMap,p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):ls("canvas")}function y(T,_,z){let j=1,nt=ie(T);if((nt.width>z||nt.height>z)&&(j=z/Math.max(nt.width,nt.height)),j<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let K=Math.floor(j*nt.width),Et=Math.floor(j*nt.height);d===void 0&&(d=g(K,Et));let ct=_?g(K,Et):d;return ct.width=K,ct.height=Et,ct.getContext("2d").drawImage(T,0,0,K,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+nt.width+"x"+nt.height+") to ("+K+"x"+Et+")."),ct}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+nt.width+"x"+nt.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){i.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function x(T,_,z,j,nt=!1){if(T!==null){if(i[T]!==void 0)return i[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),_===i.RGB&&(z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),z===i.UNSIGNED_INT_10F_11F_11F_REV&&(K=i.R11F_G11F_B10F)),_===i.RGBA){let Et=nt?os:Gt.getTransfer(j);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=Et===Jt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function S(T,_){let z;return T?_===null||_===On||_===zi?z=i.DEPTH24_STENCIL8:_===tn?z=i.DEPTH32F_STENCIL8:_===Oi&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===On||_===zi?z=i.DEPTH_COMPONENT24:_===tn?z=i.DEPTH_COMPONENT32F:_===Oi&&(z=i.DEPTH_COMPONENT16),z}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ie&&T.minFilter!==Je?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function C(T){let _=T.target;_.removeEventListener("dispose",C),F(_),_.isVideoTexture&&h.delete(_)}function D(T){let _=T.target;_.removeEventListener("dispose",D),E(_)}function F(T){let _=n.get(T);if(_.__webglInit===void 0)return;let z=T.source,j=f.get(z);if(j){let nt=j[_.__cacheKey];nt.usedTimes--,nt.usedTimes===0&&b(T),Object.keys(j).length===0&&f.delete(z)}n.remove(T)}function b(T){let _=n.get(T);i.deleteTexture(_.__webglTexture);let z=T.source,j=f.get(z);delete j[_.__cacheKey],o.memory.textures--}function E(T){let _=n.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),n.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(_.__webglFramebuffer[j]))for(let nt=0;nt<_.__webglFramebuffer[j].length;nt++)i.deleteFramebuffer(_.__webglFramebuffer[j][nt]);else i.deleteFramebuffer(_.__webglFramebuffer[j]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[j])}else{if(Array.isArray(_.__webglFramebuffer))for(let j=0;j<_.__webglFramebuffer.length;j++)i.deleteFramebuffer(_.__webglFramebuffer[j]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let j=0;j<_.__webglColorRenderbuffer.length;j++)_.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[j]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=T.textures;for(let j=0,nt=z.length;j<nt;j++){let K=n.get(z[j]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(z[j])}n.remove(T)}let U=0;function V(){U=0}function N(){let T=U;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),U+=1,T}function k(T){let _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function Y(T,_){let z=n.get(T);if(T.isVideoTexture&&Ct(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&z.__version!==T.version){let j=T.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(z,T,_);return}}else T.isExternalTexture&&(z.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function Z(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){X(z,T,_);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function et(T,_){let z=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&z.__version!==T.version){X(z,T,_);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function G(T,_){let z=n.get(T);if(T.version>0&&z.__version!==T.version){st(z,T,_);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let ht={[fr]:i.REPEAT,[Cn]:i.CLAMP_TO_EDGE,[pr]:i.MIRRORED_REPEAT},ft={[Ie]:i.NEAREST,[wc]:i.NEAREST_MIPMAP_NEAREST,[Us]:i.NEAREST_MIPMAP_LINEAR,[Je]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[Fn]:i.LINEAR_MIPMAP_LINEAR},Tt={[Pc]:i.NEVER,[Fc]:i.ALWAYS,[Ic]:i.LESS,[Wa]:i.LEQUAL,[Dc]:i.EQUAL,[Nc]:i.GEQUAL,[Lc]:i.GREATER,[Uc]:i.NOTEQUAL};function kt(T,_){if(_.type===tn&&t.has("OES_texture_float_linear")===!1&&(_.magFilter===Je||_.magFilter===eo||_.magFilter===Us||_.magFilter===Fn||_.minFilter===Je||_.minFilter===eo||_.minFilter===Us||_.minFilter===Fn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,ht[_.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,ht[_.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,ht[_.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ft[_.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ft[_.minFilter]),_.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Tt[_.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===Ie||_.minFilter!==Us&&_.minFilter!==Fn||_.type===tn&&t.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Yt(T,_){let z=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",C));let j=_.source,nt=f.get(j);nt===void 0&&(nt={},f.set(j,nt));let K=k(_);if(K!==T.__cacheKey){nt[K]===void 0&&(nt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,z=!0),nt[K].usedTimes++;let Et=nt[T.__cacheKey];Et!==void 0&&(nt[T.__cacheKey].usedTimes--,Et.usedTimes===0&&b(_)),T.__cacheKey=K,T.__webglTexture=nt[K].texture}return z}function Wt(T,_,z){return Math.floor(Math.floor(T/z)/_)}function Ut(T,_,z,j){let K=T.updateRanges;if(K.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,_.width,_.height,z,j,_.data);else{K.sort((ot,M)=>ot.start-M.start);let Et=0;for(let ot=1;ot<K.length;ot++){let M=K[Et],L=K[ot],J=M.start+M.count,H=Wt(L.start,_.width,4),rt=Wt(M.start,_.width,4);L.start<=J+1&&H===rt&&Wt(L.start+L.count-1,_.width,4)===H?M.count=Math.max(M.count,L.start+L.count-M.start):(++Et,K[Et]=L)}K.length=Et+1;let ct=i.getParameter(i.UNPACK_ROW_LENGTH),yt=i.getParameter(i.UNPACK_SKIP_PIXELS),Mt=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,_.width);for(let ot=0,M=K.length;ot<M;ot++){let L=K[ot],J=Math.floor(L.start/4),H=Math.ceil(L.count/4),rt=J%_.width,w=Math.floor(J/_.width),$=H,it=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),i.pixelStorei(i.UNPACK_SKIP_ROWS,w),e.texSubImage2D(i.TEXTURE_2D,0,rt,w,$,it,z,j,_.data)}T.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ct),i.pixelStorei(i.UNPACK_SKIP_PIXELS,yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Mt)}}function X(T,_,z){let j=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(j=i.TEXTURE_3D);let nt=Yt(T,_),K=_.source;e.bindTexture(j,T.__webglTexture,i.TEXTURE0+z);let Et=n.get(K);if(K.version!==Et.__version||nt===!0){e.activeTexture(i.TEXTURE0+z);let ct=Gt.getPrimaries(Gt.workingColorSpace),yt=_.colorSpace===Mn?null:Gt.getPrimaries(_.colorSpace),Mt=_.colorSpace===Mn||ct===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Mt);let ot=y(_.image,!1,s.maxTextureSize);ot=ae(_,ot);let M=r.convert(_.format,_.colorSpace),L=r.convert(_.type),J=x(_.internalFormat,M,L,_.colorSpace,_.isVideoTexture);kt(j,_);let H,rt=_.mipmaps,w=_.isVideoTexture!==!0,$=Et.__version===void 0||nt===!0,it=K.dataReady,lt=A(_,ot);if(_.isDepthTexture)J=S(_.format===ki,_.type),$&&(w?e.texStorage2D(i.TEXTURE_2D,1,J,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,J,ot.width,ot.height,0,M,L,null));else if(_.isDataTexture)if(rt.length>0){w&&$&&e.texStorage2D(i.TEXTURE_2D,lt,J,rt[0].width,rt[0].height);for(let tt=0,Q=rt.length;tt<Q;tt++)H=rt[tt],w?it&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,H.width,H.height,M,L,H.data):e.texImage2D(i.TEXTURE_2D,tt,J,H.width,H.height,0,M,L,H.data);_.generateMipmaps=!1}else w?($&&e.texStorage2D(i.TEXTURE_2D,lt,J,ot.width,ot.height),it&&Ut(_,ot,M,L)):e.texImage2D(i.TEXTURE_2D,0,J,ot.width,ot.height,0,M,L,ot.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){w&&$&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,J,rt[0].width,rt[0].height,ot.depth);for(let tt=0,Q=rt.length;tt<Q;tt++)if(H=rt[tt],_.format!==We)if(M!==null)if(w){if(it)if(_.layerUpdates.size>0){let St=Qa(H.width,H.height,_.format,_.type);for(let Nt of _.layerUpdates){let se=H.data.subarray(Nt*St/H.data.BYTES_PER_ELEMENT,(Nt+1)*St/H.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,Nt,H.width,H.height,1,M,se)}_.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,H.width,H.height,ot.depth,M,H.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,tt,J,H.width,H.height,ot.depth,0,H.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else w?it&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,tt,0,0,0,H.width,H.height,ot.depth,M,L,H.data):e.texImage3D(i.TEXTURE_2D_ARRAY,tt,J,H.width,H.height,ot.depth,0,M,L,H.data)}else{w&&$&&e.texStorage2D(i.TEXTURE_2D,lt,J,rt[0].width,rt[0].height);for(let tt=0,Q=rt.length;tt<Q;tt++)H=rt[tt],_.format!==We?M!==null?w?it&&e.compressedTexSubImage2D(i.TEXTURE_2D,tt,0,0,H.width,H.height,M,H.data):e.compressedTexImage2D(i.TEXTURE_2D,tt,J,H.width,H.height,0,H.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):w?it&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,H.width,H.height,M,L,H.data):e.texImage2D(i.TEXTURE_2D,tt,J,H.width,H.height,0,M,L,H.data)}else if(_.isDataArrayTexture)if(w){if($&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,J,ot.width,ot.height,ot.depth),it)if(_.layerUpdates.size>0){let tt=Qa(ot.width,ot.height,_.format,_.type);for(let Q of _.layerUpdates){let St=ot.data.subarray(Q*tt/ot.data.BYTES_PER_ELEMENT,(Q+1)*tt/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,M,L,St)}_.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,M,L,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,J,ot.width,ot.height,ot.depth,0,M,L,ot.data);else if(_.isData3DTexture)w?($&&e.texStorage3D(i.TEXTURE_3D,lt,J,ot.width,ot.height,ot.depth),it&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,M,L,ot.data)):e.texImage3D(i.TEXTURE_3D,0,J,ot.width,ot.height,ot.depth,0,M,L,ot.data);else if(_.isFramebufferTexture){if($)if(w)e.texStorage2D(i.TEXTURE_2D,lt,J,ot.width,ot.height);else{let tt=ot.width,Q=ot.height;for(let St=0;St<lt;St++)e.texImage2D(i.TEXTURE_2D,St,J,tt,Q,0,M,L,null),tt>>=1,Q>>=1}}else if(rt.length>0){if(w&&$){let tt=ie(rt[0]);e.texStorage2D(i.TEXTURE_2D,lt,J,tt.width,tt.height)}for(let tt=0,Q=rt.length;tt<Q;tt++)H=rt[tt],w?it&&e.texSubImage2D(i.TEXTURE_2D,tt,0,0,M,L,H):e.texImage2D(i.TEXTURE_2D,tt,J,M,L,H);_.generateMipmaps=!1}else if(w){if($){let tt=ie(ot);e.texStorage2D(i.TEXTURE_2D,lt,J,tt.width,tt.height)}it&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,M,L,ot)}else e.texImage2D(i.TEXTURE_2D,0,J,M,L,ot);m(_)&&u(j),Et.__version=K.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function st(T,_,z){if(_.image.length!==6)return;let j=Yt(T,_),nt=_.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+z);let K=n.get(nt);if(nt.version!==K.__version||j===!0){e.activeTexture(i.TEXTURE0+z);let Et=Gt.getPrimaries(Gt.workingColorSpace),ct=_.colorSpace===Mn?null:Gt.getPrimaries(_.colorSpace),yt=_.colorSpace===Mn||Et===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let Mt=_.isCompressedTexture||_.image[0].isCompressedTexture,ot=_.image[0]&&_.image[0].isDataTexture,M=[];for(let Q=0;Q<6;Q++)!Mt&&!ot?M[Q]=y(_.image[Q],!0,s.maxCubemapSize):M[Q]=ot?_.image[Q].image:_.image[Q],M[Q]=ae(_,M[Q]);let L=M[0],J=r.convert(_.format,_.colorSpace),H=r.convert(_.type),rt=x(_.internalFormat,J,H,_.colorSpace),w=_.isVideoTexture!==!0,$=K.__version===void 0||j===!0,it=nt.dataReady,lt=A(_,L);kt(i.TEXTURE_CUBE_MAP,_);let tt;if(Mt){w&&$&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,rt,L.width,L.height);for(let Q=0;Q<6;Q++){tt=M[Q].mipmaps;for(let St=0;St<tt.length;St++){let Nt=tt[St];_.format!==We?J!==null?w?it&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Nt.width,Nt.height,J,Nt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,rt,Nt.width,Nt.height,0,Nt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,0,0,Nt.width,Nt.height,J,H,Nt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St,rt,Nt.width,Nt.height,0,J,H,Nt.data)}}}else{if(tt=_.mipmaps,w&&$){tt.length>0&&lt++;let Q=ie(M[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,rt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,M[Q].width,M[Q].height,J,H,M[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,rt,M[Q].width,M[Q].height,0,J,H,M[Q].data);for(let St=0;St<tt.length;St++){let se=tt[St].image[Q].image;w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,se.width,se.height,J,H,se.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,rt,se.width,se.height,0,J,H,se.data)}}else{w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J,H,M[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,rt,J,H,M[Q]);for(let St=0;St<tt.length;St++){let Nt=tt[St];w?it&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,0,0,J,H,Nt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,St+1,rt,J,H,Nt.image[Q])}}}m(_)&&u(i.TEXTURE_CUBE_MAP),K.__version=nt.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function gt(T,_,z,j,nt,K){let Et=r.convert(z.format,z.colorSpace),ct=r.convert(z.type),yt=x(z.internalFormat,Et,ct,z.colorSpace),Mt=n.get(_),ot=n.get(z);if(ot.__renderTarget=_,!Mt.__hasExternalTextures){let M=Math.max(1,_.width>>K),L=Math.max(1,_.height>>K);nt===i.TEXTURE_3D||nt===i.TEXTURE_2D_ARRAY?e.texImage3D(nt,K,yt,M,L,_.depth,0,Et,ct,null):e.texImage2D(nt,K,yt,M,L,0,Et,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),_t(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,nt,ot.__webglTexture,0,Qt(_)):(nt===i.TEXTURE_2D||nt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&nt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,nt,ot.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(T,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,T),_.depthBuffer){let j=_.depthTexture,nt=j&&j.isDepthTexture?j.type:null,K=S(_.stencilBuffer,nt),Et=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Qt(_);_t(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,K,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,T)}else{let j=_.textures;for(let nt=0;nt<j.length;nt++){let K=j[nt],Et=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),yt=x(K.internalFormat,Et,ct,K.colorSpace),Mt=Qt(_);z&&_t(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Mt,yt,_.width,_.height):_t(_)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Mt,yt,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,yt,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let j=n.get(_.depthTexture);j.__renderTarget=_,(!j.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),Y(_.depthTexture,0);let nt=j.__webglTexture,K=Qt(_);if(_.depthTexture.format===wi)_t(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,nt,0);else if(_.depthTexture.format===ki)_t(_)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,nt,0);else throw new Error("Unknown depthTexture format")}function Vt(T){let _=n.get(T),z=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){let j=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),j){let nt=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,j.removeEventListener("dispose",nt)};j.addEventListener("dispose",nt),_.__depthDisposeCallback=nt}_.__boundDepthTexture=j}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");let j=T.texture.mipmaps;j&&j.length>0?bt(_.__webglFramebuffer[0],T):bt(_.__webglFramebuffer,T)}else if(z){_.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[j]),_.__webglDepthbuffer[j]===void 0)_.__webglDepthbuffer[j]=i.createRenderbuffer(),It(_.__webglDepthbuffer[j],T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,K)}}else{let j=T.texture.mipmaps;if(j&&j.length>0?e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),It(_.__webglDepthbuffer,T,!1);else{let nt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,nt,i.RENDERBUFFER,K)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function de(T,_,z){let j=n.get(T);_!==void 0&&gt(j.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Vt(T)}function P(T){let _=T.texture,z=n.get(T),j=n.get(_);T.addEventListener("dispose",D);let nt=T.textures,K=T.isWebGLCubeRenderTarget===!0,Et=nt.length>1;if(Et||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=_.version,o.memory.textures++),K){z.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[ct]=[];for(let yt=0;yt<_.mipmaps.length;yt++)z.__webglFramebuffer[ct][yt]=i.createFramebuffer()}else z.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let ct=0;ct<_.mipmaps.length;ct++)z.__webglFramebuffer[ct]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ct=0,yt=nt.length;ct<yt;ct++){let Mt=n.get(nt[ct]);Mt.__webglTexture===void 0&&(Mt.__webglTexture=i.createTexture(),o.memory.textures++)}if(T.samples>0&&_t(T)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let ct=0;ct<nt.length;ct++){let yt=nt[ct];z.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[ct]);let Mt=r.convert(yt.format,yt.colorSpace),ot=r.convert(yt.type),M=x(yt.internalFormat,Mt,ot,yt.colorSpace,T.isXRRenderTarget===!0),L=Qt(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,L,M,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,z.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),It(z.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),kt(i.TEXTURE_CUBE_MAP,_);for(let ct=0;ct<6;ct++)if(_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)gt(z.__webglFramebuffer[ct][yt],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,yt);else gt(z.__webglFramebuffer[ct],T,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(_)&&u(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ct=0,yt=nt.length;ct<yt;ct++){let Mt=nt[ct],ot=n.get(Mt),M=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(M=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(M,ot.__webglTexture),kt(M,Mt),gt(z.__webglFramebuffer,T,Mt,i.COLOR_ATTACHMENT0+ct,M,0),m(Mt)&&u(M)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ct=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,j.__webglTexture),kt(ct,_),_.mipmaps&&_.mipmaps.length>0)for(let yt=0;yt<_.mipmaps.length;yt++)gt(z.__webglFramebuffer[yt],T,_,i.COLOR_ATTACHMENT0,ct,yt);else gt(z.__webglFramebuffer,T,_,i.COLOR_ATTACHMENT0,ct,0);m(_)&&u(ct),e.unbindTexture()}T.depthBuffer&&Vt(T)}function jt(T){let _=T.textures;for(let z=0,j=_.length;z<j;z++){let nt=_[z];if(m(nt)){let K=R(T),Et=n.get(nt).__webglTexture;e.bindTexture(K,Et),u(K),e.unbindTexture()}}}let Lt=[],Rt=[];function xt(T){if(T.samples>0){if(_t(T)===!1){let _=T.textures,z=T.width,j=T.height,nt=i.COLOR_BUFFER_BIT,K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(T),ct=_.length>1;if(ct)for(let Mt=0;Mt<_.length;Mt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer);let yt=T.texture.mipmaps;yt&&yt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Mt=0;Mt<_.length;Mt++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(nt|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(nt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);let ot=n.get(_[Mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ot,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,nt,i.NEAREST),c===!0&&(Lt.length=0,Rt.length=0,Lt.push(i.COLOR_ATTACHMENT0+Mt),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Lt.push(K),Rt.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Rt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let Mt=0;Mt<_.length;Mt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[Mt]);let ot=n.get(_[Mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Mt,i.TEXTURE_2D,ot,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&c){let _=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function Qt(T){return Math.min(s.maxSamples,T.samples)}function _t(T){let _=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ct(T){let _=o.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function ae(T,_){let z=T.colorSpace,j=T.format,nt=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||z!==Zn&&z!==Mn&&(Gt.getTransfer(z)===Jt?(j!==We||nt!==Qe)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function ie(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=N,this.resetTextureUnits=V,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=de,this.setupRenderTarget=P,this.updateRenderTargetMipmap=jt,this.updateMultisampleRenderTarget=xt,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=_t}function Km(i,t){function e(n,s=Mn){let r,o=Gt.getTransfer(s);if(n===Qe)return i.UNSIGNED_BYTE;if(n===io)return i.UNSIGNED_SHORT_4_4_4_4;if(n===so)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ba)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===za)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Fa)return i.BYTE;if(n===Oa)return i.SHORT;if(n===Oi)return i.UNSIGNED_SHORT;if(n===no)return i.INT;if(n===On)return i.UNSIGNED_INT;if(n===tn)return i.FLOAT;if(n===Bi)return i.HALF_FLOAT;if(n===ka)return i.ALPHA;if(n===Va)return i.RGB;if(n===We)return i.RGBA;if(n===wi)return i.DEPTH_COMPONENT;if(n===ki)return i.DEPTH_STENCIL;if(n===ro)return i.RED;if(n===oo)return i.RED_INTEGER;if(n===Ha)return i.RG;if(n===ao)return i.RG_INTEGER;if(n===lo)return i.RGBA_INTEGER;if(n===Ns||n===Fs||n===Os||n===Bs)if(o===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ns)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ns)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Fs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===co||n===ho||n===uo||n===fo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===co)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ho)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===fo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===po||n===mo||n===go)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===po||n===mo)return o===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===go)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===_o||n===xo||n===yo||n===vo||n===Mo||n===So||n===bo||n===Eo||n===To||n===wo||n===Ao||n===Ro||n===Co||n===Po)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===_o)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===vo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Mo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===So)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===bo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Eo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===To)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wo)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ao)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ro)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Co)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Po)return o===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Do||n===Lo)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return o===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Do)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Lo)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Uo||n===No||n===Fo||n===Oo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Uo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===No)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Fo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Oo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var jm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,dl=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ms(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new je({vertexShader:jm,fragmentShader:Qm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ee(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},fl=class extends nn{constructor(t,e){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,d=null,f=null,p=null,g=null,y=typeof XRWebGLBinding<"u",m=new dl,u={},R=e.getContextAttributes(),x=null,S=null,A=[],C=[],D=new pt,F=null,b=new xe;b.viewport=new Zt;let E=new xe;E.viewport=new Zt;let U=[b,E],V=new Wr,N=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let st=A[X];return st===void 0&&(st=new Pi,A[X]=st),st.getTargetRaySpace()},this.getControllerGrip=function(X){let st=A[X];return st===void 0&&(st=new Pi,A[X]=st),st.getGripSpace()},this.getHand=function(X){let st=A[X];return st===void 0&&(st=new Pi,A[X]=st),st.getHandSpace()};function Y(X){let st=C.indexOf(X.inputSource);if(st===-1)return;let gt=A[st];gt!==void 0&&(gt.update(X.inputSource,X.frame,l||o),gt.dispatchEvent({type:X.type,data:X.inputSource}))}function Z(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",Z),s.removeEventListener("inputsourceschange",et);for(let X=0;X<A.length;X++){let st=C[X];st!==null&&(C[X]=null,A[X].disconnect(st))}N=null,k=null,m.reset();for(let X in u)delete u[X];t.setRenderTarget(x),p=null,f=null,d=null,s=null,S=null,Ut.stop(),n.isPresenting=!1,t.setPixelRatio(F),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&y&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(x=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",Z),s.addEventListener("inputsourceschange",et),R.xrCompatible!==!0&&await e.makeXRCompatible(),F=t.getPixelRatio(),t.getSize(D),y&&"createProjectionLayer"in XRWebGLBinding.prototype){let gt=null,It=null,bt=null;R.depth&&(bt=R.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=R.stencil?ki:wi,It=R.stencil?zi:On);let Vt={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:r};d=this.getBinding(),f=d.createProjectionLayer(Vt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),S=new sn(f.textureWidth,f.textureHeight,{format:We,type:Qe,depthTexture:new vs(f.textureWidth,f.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:R.stencil,colorSpace:t.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let gt={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new sn(p.framebufferWidth,p.framebufferHeight,{format:We,type:Qe,colorSpace:t.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),Ut.setContext(s),Ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(X){for(let st=0;st<X.removed.length;st++){let gt=X.removed[st],It=C.indexOf(gt);It>=0&&(C[It]=null,A[It].disconnect(gt))}for(let st=0;st<X.added.length;st++){let gt=X.added[st],It=C.indexOf(gt);if(It===-1){for(let Vt=0;Vt<A.length;Vt++)if(Vt>=C.length){C.push(gt),It=Vt;break}else if(C[Vt]===null){C[Vt]=gt,It=Vt;break}if(It===-1)break}let bt=A[It];bt&&bt.connect(gt)}}let G=new I,ht=new I;function ft(X,st,gt){G.setFromMatrixPosition(st.matrixWorld),ht.setFromMatrixPosition(gt.matrixWorld);let It=G.distanceTo(ht),bt=st.projectionMatrix.elements,Vt=gt.projectionMatrix.elements,de=bt[14]/(bt[10]-1),P=bt[14]/(bt[10]+1),jt=(bt[9]+1)/bt[5],Lt=(bt[9]-1)/bt[5],Rt=(bt[8]-1)/bt[0],xt=(Vt[8]+1)/Vt[0],Qt=de*Rt,_t=de*xt,Ct=It/(-Rt+xt),ae=Ct*-Rt;if(st.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ae),X.translateZ(Ct),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),bt[10]===-1)X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let ie=de+Ct,T=P+Ct,_=Qt-ae,z=_t+(It-ae),j=jt*P/T*ie,nt=Lt*P/T*ie;X.projectionMatrix.makePerspective(_,z,j,nt,ie,T),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Tt(X,st){st===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(st.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let st=X.near,gt=X.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(gt=m.depthFar)),V.near=E.near=b.near=st,V.far=E.far=b.far=gt,(N!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),N=V.near,k=V.far),V.layers.mask=X.layers.mask|6,b.layers.mask=V.layers.mask&3,E.layers.mask=V.layers.mask&5;let It=X.parent,bt=V.cameras;Tt(V,It);for(let Vt=0;Vt<bt.length;Vt++)Tt(bt[Vt],It);bt.length===2?ft(V,b,E):V.projectionMatrix.copy(b.projectionMatrix),kt(X,V,It)};function kt(X,st,gt){gt===null?X.matrix.copy(st.matrixWorld):(X.matrix.copy(gt.matrixWorld),X.matrix.invert(),X.matrix.multiply(st.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(st.projectionMatrix),X.projectionMatrixInverse.copy(st.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ai*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(f===null&&p===null))return c},this.setFoveation=function(X){c=X,f!==null&&(f.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(X){return u[X]};let Yt=null;function Wt(X,st){if(h=st.getViewerPose(l||o),g=st,h!==null){let gt=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let It=!1;gt.length!==V.cameras.length&&(V.cameras.length=0,It=!0);for(let P=0;P<gt.length;P++){let jt=gt[P],Lt=null;if(p!==null)Lt=p.getViewport(jt);else{let xt=d.getViewSubImage(f,jt);Lt=xt.viewport,P===0&&(t.setRenderTargetTextures(S,xt.colorTexture,xt.depthStencilTexture),t.setRenderTarget(S))}let Rt=U[P];Rt===void 0&&(Rt=new xe,Rt.layers.enable(P),Rt.viewport=new Zt,U[P]=Rt),Rt.matrix.fromArray(jt.transform.matrix),Rt.matrix.decompose(Rt.position,Rt.quaternion,Rt.scale),Rt.projectionMatrix.fromArray(jt.projectionMatrix),Rt.projectionMatrixInverse.copy(Rt.projectionMatrix).invert(),Rt.viewport.set(Lt.x,Lt.y,Lt.width,Lt.height),P===0&&(V.matrix.copy(Rt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),It===!0&&V.cameras.push(Rt)}let bt=s.enabledFeatures;if(bt&&bt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&y){d=n.getBinding();let P=d.getDepthInformation(gt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(bt&&bt.includes("camera-access")&&y){t.state.unbindTexture(),d=n.getBinding();for(let P=0;P<gt.length;P++){let jt=gt[P].camera;if(jt){let Lt=u[jt];Lt||(Lt=new Ms,u[jt]=Lt);let Rt=d.getCameraImage(jt);Lt.sourceTexture=Rt}}}}for(let gt=0;gt<A.length;gt++){let It=C[gt],bt=A[gt];It!==null&&bt!==void 0&&bt.update(It,st,l||o)}Yt&&Yt(X,st),st.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:st}),g=null}let Ut=new uh;Ut.setAnimationLoop(Wt),this.setAnimationLoop=function(X){Yt=X},this.dispose=function(){}}},oi=new $e,tg=new ee;function eg(i,t){function e(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function n(m,u){u.color.getRGB(m.fogColor.value,Ja(i)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,R,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(m,u):u.isMeshToonMaterial?(r(m,u),d(m,u)):u.isMeshPhongMaterial?(r(m,u),h(m,u)):u.isMeshStandardMaterial?(r(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,S)):u.isMeshMatcapMaterial?(r(m,u),g(m,u)):u.isMeshDepthMaterial?r(m,u):u.isMeshDistanceMaterial?(r(m,u),y(m,u)):u.isMeshNormalMaterial?r(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?c(m,u,R,x):u.isSpriteMaterial?l(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,e(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===Ce&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,e(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===Ce&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,e(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,e(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);let R=t.get(u),x=R.envMap,S=R.envMapRotation;x&&(m.envMap.value=x,oi.copy(S),oi.x*=-1,oi.y*=-1,oi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(oi.y*=-1,oi.z*=-1),m.envMapRotation.value.setFromMatrix4(tg.makeRotationFromEuler(oi)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function c(m,u,R,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*R,m.scale.value=x*.5,u.map&&(m.map.value=u.map,e(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function l(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,e(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,e(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,R){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Ce&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function y(m,u){let R=t.get(u).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function ng(i,t,e,n){let s={},r={},o=[],a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(R,x){let S=x.program;n.uniformBlockBinding(R,S)}function l(R,x){let S=s[R.id];S===void 0&&(g(R),S=h(R),s[R.id]=S,R.addEventListener("dispose",m));let A=x.program;n.updateUBOMapping(R,A);let C=t.render.frame;r[R.id]!==C&&(f(R),r[R.id]=C)}function h(R){let x=d();R.__bindingPointIndex=x;let S=i.createBuffer(),A=R.__size,C=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,A,C),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,S),S}function d(){for(let R=0;R<a;R++)if(o.indexOf(R)===-1)return o.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){let x=s[R.id],S=R.uniforms,A=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let C=0,D=S.length;C<D;C++){let F=Array.isArray(S[C])?S[C]:[S[C]];for(let b=0,E=F.length;b<E;b++){let U=F[b];if(p(U,C,b,A)===!0){let V=U.__offset,N=Array.isArray(U.value)?U.value:[U.value],k=0;for(let Y=0;Y<N.length;Y++){let Z=N[Y],et=y(Z);typeof Z=="number"||typeof Z=="boolean"?(U.__data[0]=Z,i.bufferSubData(i.UNIFORM_BUFFER,V+k,U.__data)):Z.isMatrix3?(U.__data[0]=Z.elements[0],U.__data[1]=Z.elements[1],U.__data[2]=Z.elements[2],U.__data[3]=0,U.__data[4]=Z.elements[3],U.__data[5]=Z.elements[4],U.__data[6]=Z.elements[5],U.__data[7]=0,U.__data[8]=Z.elements[6],U.__data[9]=Z.elements[7],U.__data[10]=Z.elements[8],U.__data[11]=0):(Z.toArray(U.__data,k),k+=et.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,V,U.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(R,x,S,A){let C=R.value,D=x+"_"+S;if(A[D]===void 0)return typeof C=="number"||typeof C=="boolean"?A[D]=C:A[D]=C.clone(),!0;{let F=A[D];if(typeof C=="number"||typeof C=="boolean"){if(F!==C)return A[D]=C,!0}else if(F.equals(C)===!1)return F.copy(C),!0}return!1}function g(R){let x=R.uniforms,S=0,A=16;for(let D=0,F=x.length;D<F;D++){let b=Array.isArray(x[D])?x[D]:[x[D]];for(let E=0,U=b.length;E<U;E++){let V=b[E],N=Array.isArray(V.value)?V.value:[V.value];for(let k=0,Y=N.length;k<Y;k++){let Z=N[k],et=y(Z),G=S%A,ht=G%et.boundary,ft=G+ht;S+=ht,ft!==0&&A-ft<et.storage&&(S+=A-ft),V.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=S,S+=et.storage}}}let C=S%A;return C>0&&(S+=A-C),R.__size=S,R.__cache={},this}function y(R){let x={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(x.boundary=4,x.storage=4):R.isVector2?(x.boundary=8,x.storage=8):R.isVector3||R.isColor?(x.boundary=16,x.storage=12):R.isVector4?(x.boundary=16,x.storage=16):R.isMatrix3?(x.boundary=48,x.storage=48):R.isMatrix4?(x.boundary=64,x.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),x}function m(R){let x=R.target;x.removeEventListener("dispose",m);let S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),i.deleteBuffer(s[x.id]),delete s[x.id],delete r[x.id]}function u(){for(let R in s)i.deleteBuffer(s[R]);o=[],s={},r={}}return{bind:c,update:l,dispose:u}}var Ho=class{constructor(t={}){let{canvas:e=Oc(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=new Uint32Array(4),y=new Int32Array(4),m=null,u=null,R=[],x=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let S=this,A=!1;this._outputColorSpace=Me;let C=0,D=0,F=null,b=-1,E=null,U=new Zt,V=new Zt,N=null,k=new Bt(0),Y=0,Z=e.width,et=e.height,G=1,ht=null,ft=null,Tt=new Zt(0,0,Z,et),kt=new Zt(0,0,Z,et),Yt=!1,Wt=new Ii,Ut=!1,X=!1,st=new ee,gt=new I,It=new Zt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Vt=!1;function de(){return F===null?G:1}let P=n;function jt(v,O){return e.getContext(v,O)}try{let v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"180"}`),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",tt,!1),P===null){let O="webgl2";if(P=jt(O,v),P===null)throw jt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Lt,Rt,xt,Qt,_t,Ct,ae,ie,T,_,z,j,nt,K,Et,ct,yt,Mt,ot,M,L,J,H,rt;function w(){Lt=new vp(P),Lt.init(),J=new Km(P,Lt),Rt=new fp(P,Lt,t,J),xt=new Jm(P,Lt),Rt.reversedDepthBuffer&&f&&xt.buffers.depth.setReversed(!0),Qt=new bp(P),_t=new Fm,Ct=new $m(P,Lt,xt,_t,Rt,J,Qt),ae=new mp(S),ie=new yp(S),T=new Ru(P),H=new up(P,T),_=new Mp(P,T,Qt,H),z=new Tp(P,_,T,Qt),ot=new Ep(P,Rt,Ct),ct=new pp(_t),j=new Nm(S,ae,ie,Lt,Rt,H,ct),nt=new eg(S,_t),K=new Bm,Et=new Wm(Lt),Mt=new hp(S,ae,ie,xt,z,p,c),yt=new Ym(S,z,Rt),rt=new ng(P,Qt,Rt,xt),M=new dp(P,Lt,Qt),L=new Sp(P,Lt,Qt),Qt.programs=j.programs,S.capabilities=Rt,S.extensions=Lt,S.properties=_t,S.renderLists=K,S.shadowMap=yt,S.state=xt,S.info=Qt}w();let $=new fl(S,P);this.xr=$,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let v=Lt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){let v=Lt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(v){v!==void 0&&(G=v,this.setSize(Z,et,!1))},this.getSize=function(v){return v.set(Z,et)},this.setSize=function(v,O,W=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=v,et=O,e.width=Math.floor(v*G),e.height=Math.floor(O*G),W===!0&&(e.style.width=v+"px",e.style.height=O+"px"),this.setViewport(0,0,v,O)},this.getDrawingBufferSize=function(v){return v.set(Z*G,et*G).floor()},this.setDrawingBufferSize=function(v,O,W){Z=v,et=O,G=W,e.width=Math.floor(v*W),e.height=Math.floor(O*W),this.setViewport(0,0,v,O)},this.getCurrentViewport=function(v){return v.copy(U)},this.getViewport=function(v){return v.copy(Tt)},this.setViewport=function(v,O,W,q){v.isVector4?Tt.set(v.x,v.y,v.z,v.w):Tt.set(v,O,W,q),xt.viewport(U.copy(Tt).multiplyScalar(G).round())},this.getScissor=function(v){return v.copy(kt)},this.setScissor=function(v,O,W,q){v.isVector4?kt.set(v.x,v.y,v.z,v.w):kt.set(v,O,W,q),xt.scissor(V.copy(kt).multiplyScalar(G).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(v){xt.setScissorTest(Yt=v)},this.setOpaqueSort=function(v){ht=v},this.setTransparentSort=function(v){ft=v},this.getClearColor=function(v){return v.copy(Mt.getClearColor())},this.setClearColor=function(){Mt.setClearColor(...arguments)},this.getClearAlpha=function(){return Mt.getClearAlpha()},this.setClearAlpha=function(){Mt.setClearAlpha(...arguments)},this.clear=function(v=!0,O=!0,W=!0){let q=0;if(v){let B=!1;if(F!==null){let at=F.texture.format;B=at===lo||at===ao||at===oo}if(B){let at=F.texture.type,dt=at===Qe||at===On||at===Oi||at===zi||at===io||at===so,vt=Mt.getClearColor(),mt=Mt.getClearAlpha(),Pt=vt.r,Dt=vt.g,wt=vt.b;dt?(g[0]=Pt,g[1]=Dt,g[2]=wt,g[3]=mt,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=Pt,y[1]=Dt,y[2]=wt,y[3]=mt,P.clearBufferiv(P.COLOR,0,y))}else q|=P.COLOR_BUFFER_BIT}O&&(q|=P.DEPTH_BUFFER_BIT),W&&(q|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",tt,!1),Mt.dispose(),K.dispose(),Et.dispose(),_t.dispose(),ae.dispose(),ie.dispose(),z.dispose(),H.dispose(),rt.dispose(),j.dispose(),$.dispose(),$.removeEventListener("sessionstart",en),$.removeEventListener("sessionend",_l),Bn.stop()};function it(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;let v=Qt.autoReset,O=yt.enabled,W=yt.autoUpdate,q=yt.needsUpdate,B=yt.type;w(),Qt.autoReset=v,yt.enabled=O,yt.autoUpdate=W,yt.needsUpdate=q,yt.type=B}function tt(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Q(v){let O=v.target;O.removeEventListener("dispose",Q),St(O)}function St(v){Nt(v),_t.remove(v)}function Nt(v){let O=_t.get(v).programs;O!==void 0&&(O.forEach(function(W){j.releaseProgram(W)}),v.isShaderMaterial&&j.releaseShaderCache(v))}this.renderBufferDirect=function(v,O,W,q,B,at){O===null&&(O=bt);let dt=B.isMesh&&B.matrixWorld.determinant()<0,vt=yh(v,O,W,q,B);xt.setMaterial(q,dt);let mt=W.index,Pt=1;if(q.wireframe===!0){if(mt=_.getWireframeAttribute(W),mt===void 0)return;Pt=2}let Dt=W.drawRange,wt=W.attributes.position,Ht=Dt.start*Pt,$t=(Dt.start+Dt.count)*Pt;at!==null&&(Ht=Math.max(Ht,at.start*Pt),$t=Math.min($t,(at.start+at.count)*Pt)),mt!==null?(Ht=Math.max(Ht,0),$t=Math.min($t,mt.count)):wt!=null&&(Ht=Math.max(Ht,0),$t=Math.min($t,wt.count));let he=$t-Ht;if(he<0||he===1/0)return;H.setup(B,q,vt,W,mt);let re,te=M;if(mt!==null&&(re=T.get(mt),te=L,te.setIndex(re)),B.isMesh)q.wireframe===!0?(xt.setLineWidth(q.wireframeLinewidth*de()),te.setMode(P.LINES)):te.setMode(P.TRIANGLES);else if(B.isLine){let At=q.linewidth;At===void 0&&(At=1),xt.setLineWidth(At*de()),B.isLineSegments?te.setMode(P.LINES):B.isLineLoop?te.setMode(P.LINE_LOOP):te.setMode(P.LINE_STRIP)}else B.isPoints?te.setMode(P.POINTS):B.isSprite&&te.setMode(P.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Ri("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Lt.get("WEBGL_multi_draw"))te.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{let At=B._multiDrawStarts,le=B._multiDrawCounts,Xt=B._multiDrawCount,Le=mt?T.get(mt).bytesPerElement:1,hi=_t.get(q).currentProgram.getUniforms();for(let Ue=0;Ue<Xt;Ue++)hi.setValue(P,"_gl_DrawID",Ue),te.render(At[Ue]/Le,le[Ue])}else if(B.isInstancedMesh)te.renderInstances(Ht,he,B.count);else if(W.isInstancedBufferGeometry){let At=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,le=Math.min(W.instanceCount,At);te.renderInstances(Ht,he,le)}else te.render(Ht,he)};function se(v,O,W){v.transparent===!0&&v.side===an&&v.forceSinglePass===!1?(v.side=Ce,v.needsUpdate=!0,Vs(v,O,W),v.side=gn,v.needsUpdate=!0,Vs(v,O,W),v.side=an):Vs(v,O,W)}this.compile=function(v,O,W=null){W===null&&(W=v),u=Et.get(W),u.init(O),x.push(u),W.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),v!==W&&v.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();let q=new Set;return v.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;let at=B.material;if(at)if(Array.isArray(at))for(let dt=0;dt<at.length;dt++){let vt=at[dt];se(vt,W,B),q.add(vt)}else se(at,W,B),q.add(at)}),u=x.pop(),q},this.compileAsync=function(v,O,W=null){let q=this.compile(v,O,W);return new Promise(B=>{function at(){if(q.forEach(function(dt){_t.get(dt).currentProgram.isReady()&&q.delete(dt)}),q.size===0){B(v);return}setTimeout(at,10)}Lt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let qt=null;function cn(v){qt&&qt(v)}function en(){Bn.stop()}function _l(){Bn.start()}let Bn=new uh;Bn.setAnimationLoop(cn),typeof self<"u"&&Bn.setContext(self),this.setAnimationLoop=function(v){qt=v,$.setAnimationLoop(v),v===null?Bn.stop():Bn.start()},$.addEventListener("sessionstart",en),$.addEventListener("sessionend",_l),this.render=function(v,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,O,F),u=Et.get(v,x.length),u.init(O),x.push(u),st.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Wt.setFromProjectionMatrix(st,Ze,O.reversedDepth),X=this.localClippingEnabled,Ut=ct.init(this.clippingPlanes,X),m=K.get(v,R.length),m.init(),R.push(m),$.enabled===!0&&$.isPresenting===!0){let at=S.xr.getDepthSensingMesh();at!==null&&qo(at,O,-1/0,S.sortObjects)}qo(v,O,0,S.sortObjects),m.finish(),S.sortObjects===!0&&m.sort(ht,ft),Vt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Vt&&Mt.addToRenderList(m,v),this.info.render.frame++,Ut===!0&&ct.beginShadows();let W=u.state.shadowsArray;yt.render(W,v,O),Ut===!0&&ct.endShadows(),this.info.autoReset===!0&&this.info.reset();let q=m.opaque,B=m.transmissive;if(u.setupLights(),O.isArrayCamera){let at=O.cameras;if(B.length>0)for(let dt=0,vt=at.length;dt<vt;dt++){let mt=at[dt];yl(q,B,v,mt)}Vt&&Mt.render(v);for(let dt=0,vt=at.length;dt<vt;dt++){let mt=at[dt];xl(m,v,mt,mt.viewport)}}else B.length>0&&yl(q,B,v,O),Vt&&Mt.render(v),xl(m,v,O);F!==null&&D===0&&(Ct.updateMultisampleRenderTarget(F),Ct.updateRenderTargetMipmap(F)),v.isScene===!0&&v.onAfterRender(S,v,O),H.resetDefaultState(),b=-1,E=null,x.pop(),x.length>0?(u=x[x.length-1],Ut===!0&&ct.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function qo(v,O,W,q){if(v.visible===!1)return;if(v.layers.test(O.layers)){if(v.isGroup)W=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(O);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Wt.intersectsSprite(v)){q&&It.setFromMatrixPosition(v.matrixWorld).applyMatrix4(st);let dt=z.update(v),vt=v.material;vt.visible&&m.push(v,dt,vt,W,It.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Wt.intersectsObject(v))){let dt=z.update(v),vt=v.material;if(q&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),It.copy(v.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),It.copy(dt.boundingSphere.center)),It.applyMatrix4(v.matrixWorld).applyMatrix4(st)),Array.isArray(vt)){let mt=dt.groups;for(let Pt=0,Dt=mt.length;Pt<Dt;Pt++){let wt=mt[Pt],Ht=vt[wt.materialIndex];Ht&&Ht.visible&&m.push(v,dt,Ht,W,It.z,wt)}}else vt.visible&&m.push(v,dt,vt,W,It.z,null)}}let at=v.children;for(let dt=0,vt=at.length;dt<vt;dt++)qo(at[dt],O,W,q)}function xl(v,O,W,q){let B=v.opaque,at=v.transmissive,dt=v.transparent;u.setupLightsView(W),Ut===!0&&ct.setGlobalState(S.clippingPlanes,W),q&&xt.viewport(U.copy(q)),B.length>0&&ks(B,O,W),at.length>0&&ks(at,O,W),dt.length>0&&ks(dt,O,W),xt.buffers.depth.setTest(!0),xt.buffers.depth.setMask(!0),xt.buffers.color.setMask(!0),xt.setPolygonOffset(!1)}function yl(v,O,W,q){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[q.id]===void 0&&(u.state.transmissionRenderTarget[q.id]=new sn(1,1,{generateMipmaps:!0,type:Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float")?Bi:Qe,minFilter:Fn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));let at=u.state.transmissionRenderTarget[q.id],dt=q.viewport||U;at.setSize(dt.z*S.transmissionResolutionScale,dt.w*S.transmissionResolutionScale);let vt=S.getRenderTarget(),mt=S.getActiveCubeFace(),Pt=S.getActiveMipmapLevel();S.setRenderTarget(at),S.getClearColor(k),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Vt&&Mt.render(W);let Dt=S.toneMapping;S.toneMapping=vn;let wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),u.setupLightsView(q),Ut===!0&&ct.setGlobalState(S.clippingPlanes,q),ks(v,W,q),Ct.updateMultisampleRenderTarget(at),Ct.updateRenderTargetMipmap(at),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ht=!1;for(let $t=0,he=O.length;$t<he;$t++){let re=O[$t],te=re.object,At=re.geometry,le=re.material,Xt=re.group;if(le.side===an&&te.layers.test(q.layers)){let Le=le.side;le.side=Ce,le.needsUpdate=!0,vl(te,W,q,At,le,Xt),le.side=Le,le.needsUpdate=!0,Ht=!0}}Ht===!0&&(Ct.updateMultisampleRenderTarget(at),Ct.updateRenderTargetMipmap(at))}S.setRenderTarget(vt,mt,Pt),S.setClearColor(k,Y),wt!==void 0&&(q.viewport=wt),S.toneMapping=Dt}function ks(v,O,W){let q=O.isScene===!0?O.overrideMaterial:null;for(let B=0,at=v.length;B<at;B++){let dt=v[B],vt=dt.object,mt=dt.geometry,Pt=dt.group,Dt=dt.material;Dt.allowOverride===!0&&q!==null&&(Dt=q),vt.layers.test(W.layers)&&vl(vt,O,W,mt,Dt,Pt)}}function vl(v,O,W,q,B,at){v.onBeforeRender(S,O,W,q,B,at),v.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),B.onBeforeRender(S,O,W,q,v,at),B.transparent===!0&&B.side===an&&B.forceSinglePass===!1?(B.side=Ce,B.needsUpdate=!0,S.renderBufferDirect(W,O,q,B,v,at),B.side=gn,B.needsUpdate=!0,S.renderBufferDirect(W,O,q,B,v,at),B.side=an):S.renderBufferDirect(W,O,q,B,v,at),v.onAfterRender(S,O,W,q,B,at)}function Vs(v,O,W){O.isScene!==!0&&(O=bt);let q=_t.get(v),B=u.state.lights,at=u.state.shadowsArray,dt=B.state.version,vt=j.getParameters(v,B.state,at,O,W),mt=j.getProgramCacheKey(vt),Pt=q.programs;q.environment=v.isMeshStandardMaterial?O.environment:null,q.fog=O.fog,q.envMap=(v.isMeshStandardMaterial?ie:ae).get(v.envMap||q.environment),q.envMapRotation=q.environment!==null&&v.envMap===null?O.environmentRotation:v.envMapRotation,Pt===void 0&&(v.addEventListener("dispose",Q),Pt=new Map,q.programs=Pt);let Dt=Pt.get(mt);if(Dt!==void 0){if(q.currentProgram===Dt&&q.lightsStateVersion===dt)return Sl(v,vt),Dt}else vt.uniforms=j.getUniforms(v),v.onBeforeCompile(vt,S),Dt=j.acquireProgram(vt,mt),Pt.set(mt,Dt),q.uniforms=vt.uniforms;let wt=q.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(wt.clippingPlanes=ct.uniform),Sl(v,vt),q.needsLights=Mh(v),q.lightsStateVersion=dt,q.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Dt,q.uniformsList=null,Dt}function Ml(v){if(v.uniformsList===null){let O=v.currentProgram.getUniforms();v.uniformsList=Wi.seqWithValue(O.seq,v.uniforms)}return v.uniformsList}function Sl(v,O){let W=_t.get(v);W.outputColorSpace=O.outputColorSpace,W.batching=O.batching,W.batchingColor=O.batchingColor,W.instancing=O.instancing,W.instancingColor=O.instancingColor,W.instancingMorph=O.instancingMorph,W.skinning=O.skinning,W.morphTargets=O.morphTargets,W.morphNormals=O.morphNormals,W.morphColors=O.morphColors,W.morphTargetsCount=O.morphTargetsCount,W.numClippingPlanes=O.numClippingPlanes,W.numIntersection=O.numClipIntersection,W.vertexAlphas=O.vertexAlphas,W.vertexTangents=O.vertexTangents,W.toneMapping=O.toneMapping}function yh(v,O,W,q,B){O.isScene!==!0&&(O=bt),Ct.resetTextureUnits();let at=O.fog,dt=q.isMeshStandardMaterial?O.environment:null,vt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Zn,mt=(q.isMeshStandardMaterial?ie:ae).get(q.envMap||dt),Pt=q.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Dt=!!W.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),wt=!!W.morphAttributes.position,Ht=!!W.morphAttributes.normal,$t=!!W.morphAttributes.color,he=vn;q.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(he=S.toneMapping);let re=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,te=re!==void 0?re.length:0,At=_t.get(q),le=u.state.lights;if(Ut===!0&&(X===!0||v!==E)){let we=v===E&&q.id===b;ct.setState(q,v,we)}let Xt=!1;q.version===At.__version?(At.needsLights&&At.lightsStateVersion!==le.state.version||At.outputColorSpace!==vt||B.isBatchedMesh&&At.batching===!1||!B.isBatchedMesh&&At.batching===!0||B.isBatchedMesh&&At.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&At.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&At.instancing===!1||!B.isInstancedMesh&&At.instancing===!0||B.isSkinnedMesh&&At.skinning===!1||!B.isSkinnedMesh&&At.skinning===!0||B.isInstancedMesh&&At.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&At.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&At.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&At.instancingMorph===!1&&B.morphTexture!==null||At.envMap!==mt||q.fog===!0&&At.fog!==at||At.numClippingPlanes!==void 0&&(At.numClippingPlanes!==ct.numPlanes||At.numIntersection!==ct.numIntersection)||At.vertexAlphas!==Pt||At.vertexTangents!==Dt||At.morphTargets!==wt||At.morphNormals!==Ht||At.morphColors!==$t||At.toneMapping!==he||At.morphTargetsCount!==te)&&(Xt=!0):(Xt=!0,At.__version=q.version);let Le=At.currentProgram;Xt===!0&&(Le=Vs(q,O,B));let hi=!1,Ue=!1,qi=!1,ce=Le.getUniforms(),Be=At.uniforms;if(xt.useProgram(Le.program)&&(hi=!0,Ue=!0,qi=!0),q.id!==b&&(b=q.id,Ue=!0),hi||E!==v){xt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ce.setValue(P,"projectionMatrix",v.projectionMatrix),ce.setValue(P,"viewMatrix",v.matrixWorldInverse);let Pe=ce.map.cameraPosition;Pe!==void 0&&Pe.setValue(P,gt.setFromMatrixPosition(v.matrixWorld)),Rt.logarithmicDepthBuffer&&ce.setValue(P,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ce.setValue(P,"isOrthographic",v.isOrthographicCamera===!0),E!==v&&(E=v,Ue=!0,qi=!0)}if(B.isSkinnedMesh){ce.setOptional(P,B,"bindMatrix"),ce.setOptional(P,B,"bindMatrixInverse");let we=B.skeleton;we&&(we.boneTexture===null&&we.computeBoneTexture(),ce.setValue(P,"boneTexture",we.boneTexture,Ct))}B.isBatchedMesh&&(ce.setOptional(P,B,"batchingTexture"),ce.setValue(P,"batchingTexture",B._matricesTexture,Ct),ce.setOptional(P,B,"batchingIdTexture"),ce.setValue(P,"batchingIdTexture",B._indirectTexture,Ct),ce.setOptional(P,B,"batchingColorTexture"),B._colorsTexture!==null&&ce.setValue(P,"batchingColorTexture",B._colorsTexture,Ct));let ze=W.morphAttributes;if((ze.position!==void 0||ze.normal!==void 0||ze.color!==void 0)&&ot.update(B,W,Le),(Ue||At.receiveShadow!==B.receiveShadow)&&(At.receiveShadow=B.receiveShadow,ce.setValue(P,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Be.envMap.value=mt,Be.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&O.environment!==null&&(Be.envMapIntensity.value=O.environmentIntensity),Ue&&(ce.setValue(P,"toneMappingExposure",S.toneMappingExposure),At.needsLights&&vh(Be,qi),at&&q.fog===!0&&nt.refreshFogUniforms(Be,at),nt.refreshMaterialUniforms(Be,q,G,et,u.state.transmissionRenderTarget[v.id]),Wi.upload(P,Ml(At),Be,Ct)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Wi.upload(P,Ml(At),Be,Ct),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ce.setValue(P,"center",B.center),ce.setValue(P,"modelViewMatrix",B.modelViewMatrix),ce.setValue(P,"normalMatrix",B.normalMatrix),ce.setValue(P,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){let we=q.uniformsGroups;for(let Pe=0,Yo=we.length;Pe<Yo;Pe++){let zn=we[Pe];rt.update(zn,Le),rt.bind(zn,Le)}}return Le}function vh(v,O){v.ambientLightColor.needsUpdate=O,v.lightProbe.needsUpdate=O,v.directionalLights.needsUpdate=O,v.directionalLightShadows.needsUpdate=O,v.pointLights.needsUpdate=O,v.pointLightShadows.needsUpdate=O,v.spotLights.needsUpdate=O,v.spotLightShadows.needsUpdate=O,v.rectAreaLights.needsUpdate=O,v.hemisphereLights.needsUpdate=O}function Mh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(v,O,W){let q=_t.get(v);q.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),_t.get(v.texture).__webglTexture=O,_t.get(v.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:W,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,O){let W=_t.get(v);W.__webglFramebuffer=O,W.__useDefaultFramebuffer=O===void 0};let Sh=P.createFramebuffer();this.setRenderTarget=function(v,O=0,W=0){F=v,C=O,D=W;let q=!0,B=null,at=!1,dt=!1;if(v){let mt=_t.get(v);if(mt.__useDefaultFramebuffer!==void 0)xt.bindFramebuffer(P.FRAMEBUFFER,null),q=!1;else if(mt.__webglFramebuffer===void 0)Ct.setupRenderTarget(v);else if(mt.__hasExternalTextures)Ct.rebindTextures(v,_t.get(v.texture).__webglTexture,_t.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){let wt=v.depthTexture;if(mt.__boundDepthTexture!==wt){if(wt!==null&&_t.has(wt)&&(v.width!==wt.image.width||v.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ct.setupDepthRenderbuffer(v)}}let Pt=v.texture;(Pt.isData3DTexture||Pt.isDataArrayTexture||Pt.isCompressedArrayTexture)&&(dt=!0);let Dt=_t.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Dt[O])?B=Dt[O][W]:B=Dt[O],at=!0):v.samples>0&&Ct.useMultisampledRTT(v)===!1?B=_t.get(v).__webglMultisampledFramebuffer:Array.isArray(Dt)?B=Dt[W]:B=Dt,U.copy(v.viewport),V.copy(v.scissor),N=v.scissorTest}else U.copy(Tt).multiplyScalar(G).floor(),V.copy(kt).multiplyScalar(G).floor(),N=Yt;if(W!==0&&(B=Sh),xt.bindFramebuffer(P.FRAMEBUFFER,B)&&q&&xt.drawBuffers(v,B),xt.viewport(U),xt.scissor(V),xt.setScissorTest(N),at){let mt=_t.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+O,mt.__webglTexture,W)}else if(dt){let mt=O;for(let Pt=0;Pt<v.textures.length;Pt++){let Dt=_t.get(v.textures[Pt]);P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0+Pt,Dt.__webglTexture,W,mt)}}else if(v!==null&&W!==0){let mt=_t.get(v.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,mt.__webglTexture,W)}b=-1},this.readRenderTargetPixels=function(v,O,W,q,B,at,dt,vt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let mt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt){xt.bindFramebuffer(P.FRAMEBUFFER,mt);try{let Pt=v.textures[vt],Dt=Pt.format,wt=Pt.type;if(!Rt.textureFormatReadable(Dt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Rt.textureTypeReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=v.width-q&&W>=0&&W<=v.height-B&&(v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),P.readPixels(O,W,q,B,J.convert(Dt),J.convert(wt),at))}finally{let Pt=F!==null?_t.get(F).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(v,O,W,q,B,at,dt,vt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let mt=_t.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&dt!==void 0&&(mt=mt[dt]),mt)if(O>=0&&O<=v.width-q&&W>=0&&W<=v.height-B){xt.bindFramebuffer(P.FRAMEBUFFER,mt);let Pt=v.textures[vt],Dt=Pt.format,wt=Pt.type;if(!Rt.textureFormatReadable(Dt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Rt.textureTypeReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ht=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.bufferData(P.PIXEL_PACK_BUFFER,at.byteLength,P.STREAM_READ),v.textures.length>1&&P.readBuffer(P.COLOR_ATTACHMENT0+vt),P.readPixels(O,W,q,B,J.convert(Dt),J.convert(wt),0);let $t=F!==null?_t.get(F).__webglFramebuffer:null;xt.bindFramebuffer(P.FRAMEBUFFER,$t);let he=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await Bc(P,he,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Ht),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,at),P.deleteBuffer(Ht),P.deleteSync(he),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,O=null,W=0){let q=Math.pow(2,-W),B=Math.floor(v.image.width*q),at=Math.floor(v.image.height*q),dt=O!==null?O.x:0,vt=O!==null?O.y:0;Ct.setTexture2D(v,0),P.copyTexSubImage2D(P.TEXTURE_2D,W,0,0,dt,vt,B,at),xt.unbindTexture()};let bh=P.createFramebuffer(),Eh=P.createFramebuffer();this.copyTextureToTexture=function(v,O,W=null,q=null,B=0,at=null){at===null&&(B!==0?(Ri("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),at=B,B=0):at=0);let dt,vt,mt,Pt,Dt,wt,Ht,$t,he,re=v.isCompressedTexture?v.mipmaps[at]:v.image;if(W!==null)dt=W.max.x-W.min.x,vt=W.max.y-W.min.y,mt=W.isBox3?W.max.z-W.min.z:1,Pt=W.min.x,Dt=W.min.y,wt=W.isBox3?W.min.z:0;else{let ze=Math.pow(2,-B);dt=Math.floor(re.width*ze),vt=Math.floor(re.height*ze),v.isDataArrayTexture?mt=re.depth:v.isData3DTexture?mt=Math.floor(re.depth*ze):mt=1,Pt=0,Dt=0,wt=0}q!==null?(Ht=q.x,$t=q.y,he=q.z):(Ht=0,$t=0,he=0);let te=J.convert(O.format),At=J.convert(O.type),le;O.isData3DTexture?(Ct.setTexture3D(O,0),le=P.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(Ct.setTexture2DArray(O,0),le=P.TEXTURE_2D_ARRAY):(Ct.setTexture2D(O,0),le=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,O.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,O.unpackAlignment);let Xt=P.getParameter(P.UNPACK_ROW_LENGTH),Le=P.getParameter(P.UNPACK_IMAGE_HEIGHT),hi=P.getParameter(P.UNPACK_SKIP_PIXELS),Ue=P.getParameter(P.UNPACK_SKIP_ROWS),qi=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,re.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,re.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Pt),P.pixelStorei(P.UNPACK_SKIP_ROWS,Dt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,wt);let ce=v.isDataArrayTexture||v.isData3DTexture,Be=O.isDataArrayTexture||O.isData3DTexture;if(v.isDepthTexture){let ze=_t.get(v),we=_t.get(O),Pe=_t.get(ze.__renderTarget),Yo=_t.get(we.__renderTarget);xt.bindFramebuffer(P.READ_FRAMEBUFFER,Pe.__webglFramebuffer),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Yo.__webglFramebuffer);for(let zn=0;zn<mt;zn++)ce&&(P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(v).__webglTexture,B,wt+zn),P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,_t.get(O).__webglTexture,at,he+zn)),P.blitFramebuffer(Pt,Dt,dt,vt,Ht,$t,dt,vt,P.DEPTH_BUFFER_BIT,P.NEAREST);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else if(B!==0||v.isRenderTargetTexture||_t.has(v)){let ze=_t.get(v),we=_t.get(O);xt.bindFramebuffer(P.READ_FRAMEBUFFER,bh),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,Eh);for(let Pe=0;Pe<mt;Pe++)ce?P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,ze.__webglTexture,B,wt+Pe):P.framebufferTexture2D(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,ze.__webglTexture,B),Be?P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,we.__webglTexture,at,he+Pe):P.framebufferTexture2D(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_2D,we.__webglTexture,at),B!==0?P.blitFramebuffer(Pt,Dt,dt,vt,Ht,$t,dt,vt,P.COLOR_BUFFER_BIT,P.NEAREST):Be?P.copyTexSubImage3D(le,at,Ht,$t,he+Pe,Pt,Dt,dt,vt):P.copyTexSubImage2D(le,at,Ht,$t,Pt,Dt,dt,vt);xt.bindFramebuffer(P.READ_FRAMEBUFFER,null),xt.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else Be?v.isDataTexture||v.isData3DTexture?P.texSubImage3D(le,at,Ht,$t,he,dt,vt,mt,te,At,re.data):O.isCompressedArrayTexture?P.compressedTexSubImage3D(le,at,Ht,$t,he,dt,vt,mt,te,re.data):P.texSubImage3D(le,at,Ht,$t,he,dt,vt,mt,te,At,re):v.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,at,Ht,$t,dt,vt,te,At,re.data):v.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,at,Ht,$t,re.width,re.height,te,re.data):P.texSubImage2D(P.TEXTURE_2D,at,Ht,$t,dt,vt,te,At,re);P.pixelStorei(P.UNPACK_ROW_LENGTH,Xt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Le),P.pixelStorei(P.UNPACK_SKIP_PIXELS,hi),P.pixelStorei(P.UNPACK_SKIP_ROWS,Ue),P.pixelStorei(P.UNPACK_SKIP_IMAGES,qi),at===0&&O.generateMipmaps&&P.generateMipmap(le),xt.unbindTexture()},this.initRenderTarget=function(v){_t.get(v).__webglFramebuffer===void 0&&Ct.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ct.setTextureCube(v,0):v.isData3DTexture?Ct.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ct.setTexture2DArray(v,0):Ct.setTexture2D(v,0),xt.unbindTexture()},this.resetState=function(){C=0,D=0,F=null,xt.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ze}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}};var gh={type:"change"},gl={type:"start"},xh={type:"end"},Wo=new Jn,_h=new Ve,sg=Math.cos(70*Ya.DEG2RAD),ge=new I,De=2*Math.PI,Kt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},ml=1e-6,Xo=class extends Ds{constructor(t,e=null){super(t,e),this.state=Kt.NONE,this.target=new I,this.cursor=new I,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Un.ROTATE,MIDDLE:Un.DOLLY,RIGHT:Un.PAN},this.touches={ONE:Nn.ROTATE,TWO:Nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new I,this._lastQuaternion=new He,this._lastTargetPosition=new I,this._quat=new He().setFromUnitVectors(t.up,new I(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Ln,this._sphericalDelta=new Ln,this._scale=1,this._panOffset=new I,this._rotateStart=new pt,this._rotateEnd=new pt,this._rotateDelta=new pt,this._panStart=new pt,this._panEnd=new pt,this._panDelta=new pt,this._dollyStart=new pt,this._dollyEnd=new pt,this._dollyDelta=new pt,this._dollyDirection=new I,this._mouse=new pt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=og.bind(this),this._onPointerDown=rg.bind(this),this._onPointerUp=ag.bind(this),this._onContextMenu=pg.bind(this),this._onMouseWheel=hg.bind(this),this._onKeyDown=ug.bind(this),this._onTouchStart=dg.bind(this),this._onTouchMove=fg.bind(this),this._onMouseDown=lg.bind(this),this._onMouseMove=cg.bind(this),this._interceptControlDown=mg.bind(this),this._interceptControlUp=gg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(gh),this.update(),this.state=Kt.NONE}update(t=null){let e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===Kt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=De:n>Math.PI&&(n-=De),s<-Math.PI?s+=De:s>Math.PI&&(s-=De),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){let a=ge.length();o=this._clampDistance(a*this._scale);let c=a-o;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let a=new I(this._mouse.x,this._mouse.y,0);a.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new I(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(a),this.object.updateMatrixWorld(),o=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Wo.origin.copy(this.object.position),Wo.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Wo.direction))<sg?this.object.lookAt(this.target):(_h.setFromNormalAndCoplanarPoint(this.object.up,this.target),Wo.intersectPlane(_h,this.target))))}else if(this.object.isOrthographicCamera){let o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>ml||8*(1-this._lastQuaternion.dot(this.object.quaternion))>ml||this._lastTargetPosition.distanceToSquared(this.target)>ml?(this.dispatchEvent(gh),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?De/60*this.autoRotateSpeed*t:De/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,o=n.width,a=n.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-De*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(De*this._rotateDelta.x/e.clientHeight),this._rotateUp(De*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new pt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function rg(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function og(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ag(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(xh),this.state=Kt.NONE;break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lg(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Un.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Kt.DOLLY;break;case Un.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}break;case Un.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Kt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Kt.PAN}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(gl)}function cg(i){switch(this.state){case Kt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Kt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Kt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hg(i){this.enabled===!1||this.enableZoom===!1||this.state!==Kt.NONE||(i.preventDefault(),this.dispatchEvent(gl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(xh))}function ug(i){this.enabled!==!1&&this._handleKeyDown(i)}function dg(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Nn.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Kt.TOUCH_ROTATE;break;case Nn.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Kt.TOUCH_PAN;break;default:this.state=Kt.NONE}break;case 2:switch(this.touches.TWO){case Nn.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Kt.TOUCH_DOLLY_PAN;break;case Nn.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Kt.TOUCH_DOLLY_ROTATE;break;default:this.state=Kt.NONE}break;default:this.state=Kt.NONE}this.state!==Kt.NONE&&this.dispatchEvent(gl)}function fg(i){switch(this._trackPointer(i),this.state){case Kt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Kt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Kt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Kt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Kt.NONE}}function pg(i){this.enabled!==!1&&i.preventDefault()}function mg(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function gg(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var ci={edge:"#263b34",asphalt:"#35413d",curb:"#929184",paving:"#77796b",concrete:"#9d7966",tile:"#805b48",roof:"#3c5044",trim:"#f1d5b8",glass:"#9bb6a8",teal:"#356454",red:"#aa5746",cream:"#f8d2a5",warm:"#ffc78a",gold:"#e9b271",steel:"#516855",blue:"#547ead"};function Mx(i,t=()=>{}){let e=new ms;e.background=new Bt("#132a20");let n=new Ho({canvas:i,antialias:!0,alpha:!1,powerPreference:"high-performance"});n.setPixelRatio(Math.min(window.devicePixelRatio||1,1.65)),n.outputColorSpace=Me,n.toneMapping=jr,n.toneMappingExposure=1.36;let s=new xe(34,1,.1,120);s.position.set(24,21,26);let r=new Xo(s,i);r.target.set(0,1.7,0),r.enableDamping=!0,r.dampingFactor=.085,r.minDistance=14,r.maxDistance=55,r.minPolarAngle=.24,r.maxPolarAngle=Math.PI/2.13,r.enablePan=!0,r.panSpeed=.48,r.rotateSpeed=.75,r.zoomSpeed=.8,r.update(),e.add(new Ps("#f2e6c6","#3e5348",2.05));let o=new Fi("#fdd8b0",1.9);o.position.set(-9,16,9),e.add(o);let a=new Fi("#85aa9c",1.1);a.position.set(8,6,-10),e.add(a);let c=new ei("#ffd2a1",22,10,2);c.position.set(-1.6,2.35,3),e.add(c);let l=new ei("#b9bb74",13,8,2);l.position.set(5.7,2,-4),e.add(l);let h=new ei("#ffbc85",15,10,2);h.position.set(-5.7,4.6,5.2),e.add(h);let d=new Ke(1,1,1),f=new Map,p=new Map,g=new fe,y=2719;function m(){return y=1664525*y+1013904223>>>0,y/4294967296}let u=(M,L)=>M+(L-M)*m();function R(M,L=0){let J=M+"|"+L;return f.has(J)||f.set(J,new Qn({color:M,roughness:.78,metalness:.07,emissive:M,emissiveIntensity:L,flatShading:!0})),f.get(J)}function x(M,L,J,H,rt,w,$,it=0,lt=0){let tt=R(M,lt);p.has(tt)||p.set(tt,[]),g.position.set(L,J,H),g.rotation.set(0,it,0),g.scale.set(rt,w,$),g.updateMatrix(),p.get(tt).push(g.matrix.clone())}function S(M,L,J,H,rt){let w=new Ee(M,L);return w.position.set(J,H,rt),e.add(w),w}function A(M,L,J,H,rt,w,$=rt,it=0){return S(new Kn($,rt,w,12),R(M,it),L,J,H)}function C(M,L,J,H,rt,w=[1,1,1]){let $=S(new ws(rt,12,8),R(M),L,J,H);return $.scale.set(...w),$}function D(M,L,J,H=.035,rt=0){let w=new I(...L),$=new I(...J),it=$.clone().sub(w),lt=S(new Kn(H,H,it.length(),8),R(M,rt),...w.clone().add($).multiplyScalar(.5).toArray());return lt.quaternion.setFromUnitVectors(new I(0,1,0),it.normalize()),lt}function F(M,L,J=.022){let H=new Li(L.map(rt=>new I(...rt)));S(new As(H,20,J,6,!1),R(M),0,0,0)}function b(M,L,J,H,rt,w,$=!1,it=0){x(M,L,J,H,$?.035:rt,w,$?rt:.035,0,it)}function E(M,L,J,H,rt,w=!1){let $=S(new Ke(w?.045:H,rt,w?H:.045),new Rs({color:"#a7c9df",transparent:!0,opacity:.15,roughness:.08,metalness:.15,depthWrite:!1}),M,L,J);$.renderOrder=3}function U(M,L,J,H,rt,w,$,it){let lt=document.createElement("canvas");lt.width=512,lt.height=128;let tt=lt.getContext("2d");tt.fillStyle=$,tt.fillRect(0,0,512,128),tt.fillStyle=it,tt.font="italic bold 64px Georgia, serif",tt.textAlign="center",tt.textBaseline="middle",tt.fillText(M,256,67,486);let Q=new ys(lt);Q.colorSpace=Me,S(new jn(rt,w),new $n({map:Q}),L,J,H)}x("#26342d",0,-.65,0,17.5,1,17.5),x("#5b5749",0,-.18,0,17.5,.15,17.5),x(ci.asphalt,0,-.055,0,17.3,.16,17.3),x(ci.curb,-1.7,.11,-1.2,13.8,.24,12.7),x(ci.paving,-1.75,.235,-1.2,13.65,.05,12.52);for(let M=-8.3;M<5.1;M+=.77)x("#5e586b",M,.266,4.72,.018,.008,.81);for(let M=-7.2;M<5;M+=.77)x("#5e586b",4.77,.266,M,.84,.008,.018);x("#b8945d",3.9,.275,4.68,1.62,.025,.43);for(let M=0;M<10;M++)x("#d7b870",3.18+M*.16,.294,4.68,.045,.013,.31);for(let M=2.9;M<8.2;M+=.76)x("#d6c8c9",M,.037,6.15,.48,.015,1.65);for(let M=-3;M<3;M+=2.45)x("#9ba5b7",7.22,.035,M,.09,.015,1.22);for(let M=5.55;M<8;M+=2.5)x("#a69b9d",-5.6,.035,M,.075,.015,1.28);x("#bcb3b1",-7.37,.035,6.64,.07,.02,2.26),x("#bcb3b1",-4.02,.035,6.64,.07,.02,2.26);for(let M of[-6.8,-4.6])x("#b8b4bb",M,.12,5.5,1.15,.22,.28);for(let M=-5.5;M<4.7;M+=1.15){x("#33364b",5.27,.03,M,.23,.04,.43);for(let L=-2;L<=2;L++)x("#828797",5.27,.053,M+L*.075,.23,.008,.015)}let V=[[-3,6.4,1.5,.52],[2.1,7.1,1.3,.67],[6.3,3.7,.63,1.1],[6.7,-1.3,.75,1.38],[-5.3,3.6,1.5,.35],[3.6,-2.4,.42,1.35],[.4,4,1.12,.4]];for(let[M,L,J,H]of V){let rt=S(new Ss(1,36),new Qn({color:"#3f4b3f",metalness:.5,roughness:.19}),M,.055+(L<5&&M<5?.22:0),L);rt.rotation.x=-Math.PI/2,rt.scale.set(J,H,1);for(let w=0;w<9;w++){let $=["#d89d65","#b7b97f","#90b4a3","#d4ad72"][Math.floor(m()*4)];x($,M+u(-J*.67,J*.67),rt.position.y+.007,L+u(-H*.75,H*.75),u(.035,.16),.008,u(.1,H*.6),0,.22)}}let N=-1.7,k=-.9,Y=7.7,Z=6,et=k+Z/2,G=N+Y/2;x("#6f7561",N,.33,k,Y+.17,.22,Z+.2),x("#dfc5a4",N,.48,k,Y,.1,Z),x(ci.concrete,N,1.89,k-Z/2,Y,2.85,.2),x(ci.tile,N-Y/2,1.89,k,.18,2.85,Z),x(ci.tile,G,1.89,k-1.25,.18,2.85,3.5);for(let M=N-Y/2+.15;M<N+Y/2;M+=1.27)x("#244b3c",M,1.88,et,.14,2.68,.15);x("#244b3c",N,3.22,et,Y,.18,.16),x("#244b3c",N,.6,et,Y,.32,.16),x("#64836a",N,1.57,et+.025,Y,.07,.07),E(N,1.9,et-.035,Y-.12,2.55);for(let M=k+.45;M<=et;M+=.8)x("#244b3c",G,1.89,M,.15,2.7,.12);x("#244b3c",G,3.22,k+1.5,.15,.18,3.05),x("#244b3c",G,.6,k+1.5,.15,.32,3.05),E(G-.025,1.91,k+1.52,2.9,2.55,!0);for(let M of[N-.72,N+.72])x("#295342",M,1.88,et+.07,.095,2.5,.11),x("#bda26b",M,1.49,et+.135,.17,.045,.12);for(let M of[N-1.1,N+1.1])x("#3c604d",M,1.88,et+.08,.12,2.6,.1);x("#424f54",N,.28,et+.5,2.4,.045,.75);for(let M=N-1;M<N+1;M+=.13)x("#5e6562",M,.307,et+.5,.025,.013,.66);for(let M of[-3.9,-1.5,.72])D("#654e35",[M,3.28,1.1],[M,2.72,1.1],.025),A("#a99a6d",M,2.68,1.1,.22,.17,.11),A("#ffdf9d",M,2.58,1.1,.17,.045,.17,1.6);let ht=["#b97246","#c3ac7f","#ccad88","#8a9562","#e1c79c","#c7b49a","#e6ddbd"];function ft(M,L,J,H=4){x("#b9aea3",M,1.29,L,J,1.6,.48);for(let rt=0;rt<H;rt++){let w=.58+rt*.4;x("#e3c9ac",M,w,L+.15,J+.06,.055,.79);for(let $=M-J/2+.11;$<M+J/2-.05;$+=.24){let it=u(.19,.29),lt=ht[Math.floor(m()*ht.length)];x(lt,$,w+.045+it/2,L+.47,.16,it,.16),x("#f8e4c6",$,w+.07,L+.558,.115,.055,.01)}}}ft(N-1.6,-3.6,3.7,3),x("#654b34",N-2.25,1.08,.94,2.5,1.15,1.15),x("#d6ae73",N-2.25,1.68,.94,2.62,.13,1.3),x("#a8ada1",N-2.35,1.94,1.04,1.03,.43,.58),x("#333e35",N-2.35,1.99,1.35,.86,.23,.09);for(let M of[N-2.65,N-2.25,N-1.85])A("#eee6cc",M,2.23,1.07,.1,.13,.1),A("#be925e",M,1.78,1.38,.1,.14,.1);x("#38473a",N+.5,2.38,-3.74,2.7,1.05,.06),U("COFFEE  \xB7  ESPRESSO",N+.5,2.4,-3.695,2.53,.8,"#263b2d","#ede3bc"),x(ci.roof,N,3.51,k,Y+.36,.42,Z+.36),x("#2f493c",N,3.75,k,Y+.4,.12,Z+.4),x("#254d3b",N,3.45,et+.17,Y+.34,.63,.35),x("#254d3b",G+.17,3.45,k,.35,.63,Z+.28);for(let M of[3.18,3.72])x("#c7b587",N,M,et+.36,Y+.4,.035,.06),x("#c7b587",G+.36,M,k,.06,.035,Z+.38);U("COFFEE",N,3.45,et+.36,3.05,.53,"#254d3b","#efcf8e");let Tt=S(new Ke(Y-.18,.1,.95),R("#42664c"),N,2.99,et+.58);Tt.rotation.x=.27,x("#bdaf7e",N,2.84,et+1,Y-.15,.09,.09);let kt=S(new Ke(.94,.1,3.2),R("#42664c"),G+.51,2.99,k+1.4);kt.rotation.z=-.27,x("#ac6b50",N,4.65,k,Y,1.8,Z);for(let M=3.88;M<5.52;M+=.22)x("#6c493e",N,M,et+.008,Y,.025,.025),x("#6c493e",G+.01,M,k,.025,.025,Z);for(let M=0;M<4;M++){let L=N-Y/2+1.02+M*1.9;x("#5e453c",L,4.72,et+.04,1.27,1.38,.1),b("#d9b17a",L,4.72,et+.1,1.03,1.13,!1,.65),x("#3a5944",L,4.72,et+.14,.055,1.22,.07),x("#3a5944",L,4.72,et+.14,1.08,.058,.07),x("#bcaa87",L,4.03,et+.15,1.42,.12,.25)}for(let M=0;M<3;M++){let L=k-1.8+M*1.8;x("#5e453c",G+.04,4.72,L,.1,1.38,1.14),b("#e1b87b",G+.1,4.72,L,.88,1.1,!0,.52),x("#3a5944",G+.15,4.72,L,.06,1.2,.06),x("#bba989",G+.14,4.03,L,.25,.12,1.3)}x("#363f36",N,5.62,k,Y+.25,.22,Z+.28),x("#8b7864",N,5.76,k,Y+.45,.13,Z+.42);for(let M of[N-2.65,N-1.55])for(let L of[k-1.24,k-.17])D("#62564a",[M,5.78,L],[N-2.1,6.39,k-.7],.065);A("#8f7556",N-2.1,6.84,k-.7,.7,.95,.7),A("#655c49",N-2.1,7.42,k-.7,.79,.32,.04);for(let M=0;M<12;M++){let L=M*Math.PI/6;D("#6d5b46",[N-2.1+.7*Math.cos(L),6.37,k-.7+.7*Math.sin(L)],[N-2.1+.7*Math.cos(L),7.31,k-.7+.7*Math.sin(L)],.025)}x("#98664f",N+.9,6.09,k-1.2,.63,.63,.68),x("#b99b76",N+.9,6.43,k-1.2,.78,.12,.82);function Yt(M,L){A("#566052",M,.65,L,.07,.78,.07),A("#a27a4f",M,1.05,L,.47,.1,.47),A("#f2d6ac",M+.13,1.18,L,.085,.16,.075);for(let J of[-1,1]){let H=M+J*.68;x("#b78b54",H,.58,L,.32,.09,.34),x("#b78b54",H,.89,L-.15,.32,.32,.07);for(let rt of[-.12,.12])for(let w of[-.12,.12])D("#485341",[H+rt,.29,L+w],[H+rt,.57,L+w],.028)}}Yt(-4.05,3.45),Yt(2.9,1.75);for(let M=0;M<3;M++){let L=et-.22-M*.63;x("#a6a3aa",G+.49,.72,L,.65,.9,.53),x(["#568fa1","#b78075","#567d78"][M],G+.49,1.2,L,.68,.12,.55),x("#292f40",G+.49,1.27,L,.36,.015,.23)}b("#463946",G+.125,1.95,k-1.45,1.39,.92,!0);for(let M=0;M<2;M++)for(let L=0;L<3;L++)b(["#dbc8af","#a5b6bd","#d1a69e"][(L+M)%3],G+.15,2.15-M*.43,k-1.9+L*.45,.35,.33,!0);let Wt=N+1.55,Ut=et+.53;for(let M of[-.24,.24])for(let L of[-.2,.2])D("#616c83",[Wt+M,.29,Ut+L],[Wt+M,1.15,Ut+L],.04);for(let M of[.35,1.14])D("#777c8f",[Wt-.24,M,Ut-.2],[Wt+.24,M,Ut-.2]),D("#777c8f",[Wt-.24,M,Ut+.2],[Wt+.24,M,Ut+.2]);for(let M=0;M<4;M++){let L=Wt-.18+M*.12;D("#8c9db4",[L,.35,Ut],[L+.12,1.39,Ut],.035),F("#394257",[[L+.12,1.39,Ut],[L+.12,1.52,Ut],[L+.22,1.55,Ut],[L+.23,1.45,Ut]],.025)}let X=-6.32,st=4.55;for(let M of[-6.4,-1.4,3.7,7.3])x("#405f4b",M,2.12,X,.36,4.2,.46),x("#71816a",M,4.11,X,.78,.27,.75),D("#4a654d",[M-.73,3.2,X],[M+.05,4.1,X],.09);x("#385946",0,4.33,X,16.6,.55,2.12),x("#73816d",0,4.56,X,16.65,.12,2.14);for(let M=-8;M<8.1;M+=.46)x("#42485e",M,4.66,X,.17,.1,1.68);for(let M of[X-.55,X+.55])x("#9fa4ac",0,4.75,M,16.6,.1,.098);for(let M=-8.2;M<8.2;M+=.82)x("#5c735c",M,4.97,X+1.01,.065,.66,.08),x("#89917b",M,5.3,X+1.02,.82,.065,.065),x("#809079",M,4.32,X+1.07,.06,.35,.06);for(let[M,L]of[[-4.1,6.8],[3.1,6.8]]){x("#b2b4c3",M,5.43,X,L,1.52,1.62),x("#737b91",M,6.25,X,L-.18,.22,1.52),x("#3a516d",M,4.92,X,L,.13,1.67),x("#778786",M,5.13,X+.835,L,.1,.055,0,.02);for(let J=0;J<6;J++){let H=M-L/2+.57+J*1.12;b("#363b52",H,5.62,X+.825,.86,.57),b("#e7c18d",H,5.62,X+.848,.73,.44,!1,.85),b("#697c91",H,5.62,X-.825,.81,.53),x("#858ca0",H,5.62,X+.875,.035,.52,.025),J%2===1&&(C("#555264",H+.18,5.72,X+.866,.105,[1,1.05,.36]),x("#555264",H+.18,5.49,X+.875,.17,.19,.025))}for(let J of[M-L/2+.13,M+L/2-.13])x("#8c95a9",J,5.45,X,.15,1.39,1.59)}b("#e4dfe0",6.51,5.64,X,.65,.5,!0,.4),A("#ef706c",6.53,5.16,X+.48,.1,.06,.1,.8).rotation.z=Math.PI/2;for(let[M,L,J,H]of[[-6.5,-7.91,2.5,6.6],[-2.95,-7.9,3,5.15],[1.05,-7.92,3.15,7.6],[4.4,-7.91,2.5,6.4]]){x("#865a49",M,H/2,L,J,H,1.35),x("#aa9175",M,H+.11,L,J+.12,.22,1.42);for(let rt=.55;rt<H-.1;rt+=.22)x("#68483d",M,rt,L+.68,J,.018,.02);for(let rt=M-J/2+.35;rt<M+J/2-.13;rt+=.65)for(let w=.85;w<H-.3;w+=.83){let $=m()>.52;b($?"#e7bf93":"#303d33",rt,w,L+.71,.36,.48,!1,$?.45:0),x("#c2a482",rt,w-.29,L+.744,.45,.06,.08)}}function gt(M,L,J){A("#555870",M,J/2,L,.16,J,.1),A("#31384b",M,.72,L,.2,1.4,.18);for(let H=0;H<5;H++)x("#d0a165",M,.42+H*.22,L+.19,.16,.13,.04);x("#55566a",M,J-.25,L,1.25,.16,.15),x("#72758a",M+.22,J-1.05,L,.55,.7,.42);for(let H of[-.5,.5])A("#c8bdad",M+H,J-.09,L,.075,.16)}gt(-6.15,3.77,6.85),gt(5.8,-4.5,7.05);for(let M=0;M<3;M++)F("#272d45",[[-6.15+M*.22,6.68,3.77],[-2,6.1-M*.12,1.2],[1.8,6.05-M*.07,-1.5],[5.8+M*.22,6.88,-4.5]],.023);F("#555a70",[[-6.15,4.7,3.77],[-5.8,4.8,4.25],[-5.65,4.62,4.75]],.075),A("#45506a",-5.65,4.57,4.75,.31,.22,.16),A("#ffcf91",-5.65,4.43,4.75,.23,.08,.23,1.1);for(let M=-8.15;M<=-4.55;M+=1.2)x("#8695aa",M,.67,5.08,.11,.83,.12);for(let M of[.56,.93])x("#b0aeba",-6.35,M,5.08,3.76,.09,.085);A("#465f4c",4.64,2.05,4.8,.1,3.7,.07),A("#4e6955",4.64,.48,4.8,.18,.4,.11),x("#c39a42",4.81,3.11,4.8,.39,.97,.28);for(let[M,L]of[[3.43,"#df6951"],[3.12,"#c7a354"],[2.81,"#7b9d64"]]){let J=A(L,4.81,M,4.96,.125,.07,.125,M===3.43?.85:0);J.rotation.x=Math.PI/2}x("#3b6953",4.57,3.7,4.8,1.52,.28,.13),U("BROADWAY",4.57,3.7,4.874,1.44,.24,"#3b6953","#eee6cb"),A("#a64c37",3.72,.65,4.55,.185,.53,.185),A("#b85a3d",3.72,.97,4.55,.22,.18,.17),C("#ad5139",3.72,1.09,4.55,.16,[1,.64,1]);for(let M of[-1,1]){let L=A("#a64d36",3.72+M*.21,.72,4.55,.1,.17,.1);L.rotation.z=Math.PI/2}function It(M,L,J=0){let H=(w,$,it=0)=>[M+w*Math.cos(J)-it*Math.sin(J),$,L+w*Math.sin(J)+it*Math.cos(J)];for(let w of[-.57,.57]){let $=H(w,.59),it=S(new Ui(.35,.055,8,24),R("#272b39"),...$);it.rotation.y=-J;let lt=S(new Ui(.31,.015,6,24),R("#aaaab0"),...$);lt.rotation.y=-J;for(let tt=0;tt<8;tt++){let Q=tt*Math.PI/4;D("#777d8d",$,H(w+Math.cos(Q)*.3,.59+Math.sin(Q)*.3),.012)}}let rt="#67a7a3";for(let[w,$]of[[[-.57,.59],[-.18,1.17]],[[-.18,1.17],[.4,1.15]],[[.4,1.15],[.57,.59]],[[-.57,.59],[.03,.65]],[[.03,.65],[.4,1.15]],[[-.18,1.17],[.03,.65]]])D(rt,H(...w),H(...$),.039);D("#9294a3",H(.4,1.15),H(.43,1.42),.035),D("#9294a3",H(.43,1.42,-.18),H(.43,1.42,.18),.035),D("#332f3b",H(-.3,1.25),H(-.06,1.25),.055)}It(3.48,-.7,-Math.PI/2);function bt(M,L,J,H,rt=0,w=.27){let $=(lt,tt,Q=0)=>[M+lt*Math.cos(rt)-Q*Math.sin(rt),w+tt,L+lt*Math.sin(rt)+Q*Math.cos(rt)];for(let lt of[-.13,.13]){D("#303749",$(lt,.08),$(lt,.62),.085);let tt=$(lt,.041,.065);x("#252b3d",...tt,.17,.1,.23,rt)}let it=$(0,.89);x(J,...it,.43,.64,.29,rt),C("#d3aa96",...$(0,1.37),.18,[.82,1,.83]),C(H,...$(0,1.46,-.035),.18,[.89,.73,.9]);for(let lt of[-.24,.24])D(J,$(lt*.7,1.09),$(lt,.66,.06),.073)}bt(.24,3.4,"#57798c","#283146",.1);let Vt=S(new bs(.76,.41,24),R("#8191b5"),.24,2.04,3.4);Vt.rotation.y=.12;for(let M=0;M<8;M++){let L=M*Math.PI/4;D("#596b98",[.24,2.245,3.4],[.24+.76*Math.cos(L),1.84,3.4+.76*Math.sin(L)],.018)}D("#484963",[.44,1.17,3.4],[.24,2.24,3.4],.023),bt(-4.3,.22,"#77917b","#433a35",.1,.54),x("#dbd4b0",-4.3,1.41,.39,.29,.36,.025),bt(3.74,-.22,"#7e8864","#424c41",Math.PI/2),x("#b39865",3.95,1.16,-.22,.35,.46,.48,Math.PI/2),x("#ead1a0",4.14,1.16,-.22,.035,.12,.26);for(let[M,L]of[[-7.9,2.8],[-7.8,-2.3],[4.5,-3.4],[-6.7,-4.4]]){x("#66606a",M,.41,L,.84,.31,.76);for(let J=0;J<8;J++){let H=M+u(-.29,.29),rt=L+u(-.23,.23),w=u(.42,.8);D("#567b72",[H,.52,rt],[H+.13,w,rt],.035),C(["#70988b","#7c8da6","#9c88b8"][J%3],H+.12,w,rt,.12,[1,.65,1])}}for(let[M,L]of p){let J=new _s(d,M,L.length);L.forEach((H,rt)=>J.setMatrixAt(rt,H)),J.computeBoundingSphere(),e.add(J)}let de=430,P=new Float32Array(de*6),jt=[];for(let M=0;M<de;M++)jt.push([u(-8.6,8.6),u(.3,9.3),u(-8.6,8.6),u(.23,.58)]);let Lt=new be,Rt=new Se(P,3);Lt.setAttribute("position",Rt);let xt=new xs(Lt,new Di({color:"#9db5de",transparent:!0,opacity:.31,depthWrite:!1}));xt.frustumCulled=!1,e.add(xt);function Qt(M){jt.forEach((L,J)=>{L[1]-=M*7.5,L[1]<.2&&(L[1]+=9.1);let H=J*6;P.set([L[0],L[1],L[2],L[0]+.07,L[1]+L[3],L[2]+.025],H)}),Rt.needsUpdate=!0}Qt(0);let _t=matchMedia("(prefers-reduced-motion: reduce)").matches;_t&&(r.enableDamping=!1);let Ct=0,ae=0,ie=!0,T=!1,_={commuter:[.24,2.5,3.4],clerk:[-4.3,2.1,.22],courier:[3.74,1.93,-.22],passenger:[4.45,6.05,X+.87]};function z(){r.update(),n.render(e,s);let M={};for(let[L,J]of Object.entries(_)){let H=new I(...J).project(s);M[L]={x:(H.x+1)/2,y:(1-H.y)/2,visible:H.z>=-1&&H.z<=1&&Math.abs(H.x)<.95&&Math.abs(H.y)<.95}}t(M)}function j(M){if(Ct=0,T||!ie||document.hidden)return;let L=ae?Math.min(.05,(M-ae)/1e3):0;ae=M,_t||Qt(L),z(),(!_t||r.enableDamping)&&(Ct=requestAnimationFrame(j))}function nt(){!Ct&&ie&&!document.hidden&&!T&&(ae=0,Ct=requestAnimationFrame(j))}_t&&r.addEventListener("change",nt);function K(){let{width:M,height:L}=i.getBoundingClientRect();!M||!L||(n.setSize(M,L,!1),s.aspect=M/L,s.updateProjectionMatrix(),z())}let Et=new ResizeObserver(K);Et.observe(i),K();let ct=new IntersectionObserver(([M])=>{ie=M.isIntersecting,ie?nt():(cancelAnimationFrame(Ct),Ct=0)},{rootMargin:"180px"});ct.observe(i);function yt(){document.hidden?(cancelAnimationFrame(Ct),Ct=0):nt()}document.addEventListener("visibilitychange",yt);function Mt(M){if(!["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","+","=","-","Home"].includes(M.key))return;if(M.preventDefault(),M.key==="Home"){r.target.set(0,1.7,0),s.position.set(24,21,26),r.update(),z();return}let L=new Ln().setFromVector3(s.position.clone().sub(r.target));M.key==="ArrowLeft"&&(L.theta-=.14),M.key==="ArrowRight"&&(L.theta+=.14),M.key==="ArrowUp"&&(L.phi=Math.max(r.minPolarAngle,L.phi-.1)),M.key==="ArrowDown"&&(L.phi=Math.min(r.maxPolarAngle,L.phi+.1)),(M.key==="+"||M.key==="=")&&(L.radius=Math.max(r.minDistance,L.radius*.88)),M.key==="-"&&(L.radius=Math.min(r.maxDistance,L.radius*1.14)),s.position.copy(r.target).add(new I().setFromSpherical(L)),r.update(),z()}i.addEventListener("keydown",Mt),nt();let ot={commuter:{pos:[9,8.7,15],target:[.3,1.4,2.7]},clerk:{pos:[-12,7,14],target:[-3.2,1.6,.8]},courier:{pos:[16,7,5.8],target:[3.35,1.4,.1]},passenger:{pos:[15,13,3],target:[1.4,4.7,-5.2]}};return{lookAt(M){let L=ot[M];L&&(r.target.set(...L.target),s.position.set(...L.pos),r.update(),z())},dispose(){T=!0,cancelAnimationFrame(Ct),Et.disconnect(),ct.disconnect(),document.removeEventListener("visibilitychange",yt),i.removeEventListener("keydown",Mt),r.dispose(),n.dispose()}}}export{Mx as createCornerWorld};
