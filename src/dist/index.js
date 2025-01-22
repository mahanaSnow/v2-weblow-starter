(function(ws){typeof define=="function"&&define.amd?define(ws):ws()})(function(){"use strict";var ws=document.createElement("style");ws.textContent=`body{margin:0;padding:0}
/*$vite$:1*/`,document.head.appendChild(ws);function Xd(){console.log("Nav Component Animation Starter Initialized")}console.log("navigationnnnnnnnn");function Yd(){console.log("Button Component Animation Starter Initialized")}/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/const Da="172",qd=0,du=1,$d=2,pu=1,Kd=2,ai=3,Ci=0,tn=1,li=2,Ri=0,Pr=1,mu=2,_u=3,gu=4,Zd=5,Ji=100,jd=101,Jd=102,Qd=103,ep=104,tp=200,np=201,ip=202,rp=203,La=204,Ia=205,sp=206,op=207,ap=208,lp=209,cp=210,up=211,fp=212,hp=213,dp=214,Ua=0,Fa=1,Na=2,Dr=3,Oa=4,Ba=5,za=6,ka=7,vu=0,pp=1,mp=2,Pi=0,_p=1,gp=2,vp=3,xp=4,yp=5,Sp=6,Mp=7,xu=300,Lr=301,Ir=302,Va=303,Ha=304,vo=306,xo=1e3,Kn=1001,yo=1002,Fn=1003,Ep=1004,So=1005,nn=1006,Ga=1007,Qi=1008,ci=1009,yu=1010,Su=1011,As=1012,Wa=1013,er=1014,ui=1015,Cs=1016,Xa=1017,Ya=1018,Ur=1020,Mu=35902,Eu=1021,Tu=1022,En=1023,bu=1024,wu=1025,Fr=1026,Nr=1027,Au=1028,qa=1029,Cu=1030,$a=1031,Ka=1033,Mo=33776,Eo=33777,To=33778,bo=33779,Za=35840,ja=35841,Ja=35842,Qa=35843,el=36196,tl=37492,nl=37496,il=37808,rl=37809,sl=37810,ol=37811,al=37812,ll=37813,cl=37814,ul=37815,fl=37816,hl=37817,dl=37818,pl=37819,ml=37820,_l=37821,wo=36492,gl=36494,vl=36495,Ru=36283,xl=36284,yl=36285,Sl=36286,Tp=3200,bp=3201,wp=0,Ap=1,Di="",Tn="srgb",Or="srgb-linear",Ao="linear",ft="srgb",Br=7680,Pu=519,Cp=512,Rp=513,Pp=514,Du=515,Dp=516,Lp=517,Ip=518,Up=519,Lu=35044,Iu="300 es",fi=2e3,Co=2001;let zr=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}};const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ml=Math.PI/180,El=180/Math.PI;function Rs(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Wt[r&255]+Wt[r>>8&255]+Wt[r>>16&255]+Wt[r>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]).toLowerCase()}function je(r,e,t){return Math.max(e,Math.min(t,r))}function Fp(r,e){return(r%e+e)%e}function Tl(r,e,t){return(1-t)*r+t*e}function Ps(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function rn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class at{constructor(e=0,t=0){at.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,i,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=i,f[2]=a,f[3]=t,f[4]=s,f[5]=l,f[6]=n,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],f=n[4],h=n[7],d=n[2],u=n[5],g=n[8],_=i[0],m=i[3],p=i[6],T=i[1],E=i[4],y=i[7],w=i[2],A=i[5],b=i[8];return s[0]=o*_+a*T+l*w,s[3]=o*m+a*E+l*A,s[6]=o*p+a*y+l*b,s[1]=c*_+f*T+h*w,s[4]=c*m+f*E+h*A,s[7]=c*p+f*y+h*b,s[2]=d*_+u*T+g*w,s[5]=d*m+u*E+g*A,s[8]=d*p+u*y+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return t*o*f-t*a*c-n*s*f+n*a*l+i*s*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,u=c*s-o*l,g=t*h+n*d+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=h*_,e[1]=(i*c-f*n)*_,e[2]=(a*n-i*o)*_,e[3]=d*_,e[4]=(f*t-i*l)*_,e[5]=(i*s-a*t)*_,e[6]=u*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(bl.makeScale(e,t)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,t){return this.premultiply(bl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new We;function Uu(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Ds(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Np(){const r=Ds("canvas");return r.style.display="block",r}const Fu={};function kr(r){r in Fu||(Fu[r]=!0,console.warn(r))}function Op(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}function Bp(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function zp(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Nu=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ou=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kp(){const r={enabled:!0,workingColorSpace:Or,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ft&&(i.r=hi(i.r),i.g=hi(i.g),i.b=hi(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ft&&(i.r=Vr(i.r),i.g=Vr(i.g),i.b=Vr(i.b))),i},fromWorkingColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},toWorkingColorSpace:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Di?Ao:this.spaces[i].transfer},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Or]:{primaries:e,whitePoint:n,transfer:Ao,toXYZ:Nu,fromXYZ:Ou,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Tn},outputColorSpaceConfig:{drawingBufferColorSpace:Tn}},[Tn]:{primaries:e,whitePoint:n,transfer:ft,toXYZ:Nu,fromXYZ:Ou,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Tn}}}),r}const tt=kp();function hi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Vr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Hr;class Vp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Hr===void 0&&(Hr=Ds("canvas")),Hr.width=e.width,Hr.height=e.height;const n=Hr.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Hr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ds("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=hi(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(hi(t[n]/255)*255):t[n]=hi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Hp=0;class Bu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Hp++}),this.uuid=Rs(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(wl(i[o].image)):s.push(wl(i[o]))}else s=wl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function wl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Vp.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Gp=0;class Bt extends zr{constructor(e=Bt.DEFAULT_IMAGE,t=Bt.DEFAULT_MAPPING,n=Kn,i=Kn,s=nn,o=Qi,a=En,l=ci,c=Bt.DEFAULT_ANISOTROPY,f=Di){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gp++}),this.uuid=Rs(),this.name="",this.source=new Bu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new at(0,0),this.repeat=new at(1,1),this.center=new at(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xo:e.x=e.x-Math.floor(e.x);break;case Kn:e.x=e.x<0?0:1;break;case yo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xo:e.y=e.y-Math.floor(e.y);break;case Kn:e.y=e.y<0?0:1;break;case yo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bt.DEFAULT_IMAGE=null,Bt.DEFAULT_MAPPING=xu,Bt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,n=0,i=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],u=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,y=(u+1)/2,w=(p+1)/2,A=(f+d)/4,b=(h+_)/4,C=(g+m)/4;return E>y&&E>w?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=A/n,s=b/n):y>w?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=A/i,s=C/i):w<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(w),n=b/s,i=C/s),this.set(n,i,s,t),this}let T=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(d-f)*(d-f));return Math.abs(T)<.001&&(T=1),this.x=(m-g)/T,this.y=(h-_)/T,this.z=(d-f)/T,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this.w=je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this.w=je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Wp extends zr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:nn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new Bu(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tr extends Wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class zu extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xp extends Bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Fn,this.minFilter=Fn,this.wrapR=Kn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ls{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],f=n[i+2],h=n[i+3];const d=s[o+0],u=s[o+1],g=s[o+2],_=s[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=u,e[t+2]=g,e[t+3]=_;return}if(h!==_||l!==d||c!==u||f!==g){let m=1-a;const p=l*d+c*u+f*g+h*_,T=p>=0?1:-1,E=1-p*p;if(E>Number.EPSILON){const w=Math.sqrt(E),A=Math.atan2(w,p*T);m=Math.sin(m*A)/w,a=Math.sin(a*A)/w}const y=a*T;if(l=l*m+d*y,c=c*m+u*y,f=f*m+g*y,h=h*m+_*y,m===1-a){const w=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=w,c*=w,f*=w,h*=w}}e[t]=l,e[t+1]=c,e[t+2]=f,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,o){const a=n[i],l=n[i+1],c=n[i+2],f=n[i+3],h=s[o],d=s[o+1],u=s[o+2],g=s[o+3];return e[t]=a*g+f*h+l*u-c*d,e[t+1]=l*g+f*d+c*h-a*u,e[t+2]=c*g+f*u+a*d-l*h,e[t+3]=f*g-a*h-l*d-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),f=a(i/2),h=a(s/2),d=l(n/2),u=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*u*g,this._y=c*u*h-d*f*g,this._z=c*f*g+d*u*h,this._w=c*f*h-d*u*g;break;case"YXZ":this._x=d*f*h+c*u*g,this._y=c*u*h-d*f*g,this._z=c*f*g-d*u*h,this._w=c*f*h+d*u*g;break;case"ZXY":this._x=d*f*h-c*u*g,this._y=c*u*h+d*f*g,this._z=c*f*g+d*u*h,this._w=c*f*h-d*u*g;break;case"ZYX":this._x=d*f*h-c*u*g,this._y=c*u*h+d*f*g,this._z=c*f*g-d*u*h,this._w=c*f*h+d*u*g;break;case"YZX":this._x=d*f*h+c*u*g,this._y=c*u*h+d*f*g,this._z=c*f*g-d*u*h,this._w=c*f*h-d*u*g;break;case"XZY":this._x=d*f*h-c*u*g,this._y=c*u*h-d*f*g,this._z=c*f*g+d*u*h,this._w=c*f*h+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],f=t[6],h=t[10],d=n+a+h;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-l)*u,this._y=(s-c)*u,this._z=(o-i)*u}else if(n>a&&n>h){const u=2*Math.sqrt(1+n-a-h);this._w=(f-l)/u,this._x=.25*u,this._y=(i+o)/u,this._z=(s+c)/u}else if(a>h){const u=2*Math.sqrt(1+a-n-h);this._w=(s-c)/u,this._x=(i+o)/u,this._y=.25*u,this._z=(l+f)/u}else{const u=2*Math.sqrt(1+h-n-a);this._w=(o-i)/u,this._x=(s+c)/u,this._y=(l+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,f=t._w;return this._x=n*f+o*a+i*c-s*l,this._y=i*f+o*l+s*a-n*c,this._z=s*f+o*c+n*l-i*a,this._w=o*f-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const u=1-t;return this._w=u*o+t*this._w,this._x=u*n+t*this._x,this._y=u*i+t*this._y,this._z=u*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-t)*f)/c,d=Math.sin(t*f)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,n=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ku.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ku.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),f=2*(a*t-s*i),h=2*(s*n-o*t);return this.x=t+l*c+o*h-a*f,this.y=n+l*f+a*c-s*h,this.z=i+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=je(this.x,e.x,t.x),this.y=je(this.y,e.y,t.y),this.z=je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=je(this.x,e,t),this.y=je(this.y,e,t),this.z=je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new q,ku=new Ls;class Is{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Us),Po.subVectors(this.max,Us),Gr.subVectors(e.a,Us),Wr.subVectors(e.b,Us),Xr.subVectors(e.c,Us),Li.subVectors(Wr,Gr),Ii.subVectors(Xr,Wr),nr.subVectors(Gr,Xr);let t=[0,-Li.z,Li.y,0,-Ii.z,Ii.y,0,-nr.z,nr.y,Li.z,0,-Li.x,Ii.z,0,-Ii.x,nr.z,0,-nr.x,-Li.y,Li.x,0,-Ii.y,Ii.x,0,-nr.y,nr.x,0];return!Cl(t,Gr,Wr,Xr,Po)||(t=[1,0,0,0,1,0,0,0,1],!Cl(t,Gr,Wr,Xr,Po))?!1:(Do.crossVectors(Li,Ii),t=[Do.x,Do.y,Do.z],Cl(t,Gr,Wr,Xr,Po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(di),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const di=[new q,new q,new q,new q,new q,new q,new q,new q],Nn=new q,Ro=new Is,Gr=new q,Wr=new q,Xr=new q,Li=new q,Ii=new q,nr=new q,Us=new q,Po=new q,Do=new q,ir=new q;function Cl(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){ir.fromArray(r,s);const a=i.x*Math.abs(ir.x)+i.y*Math.abs(ir.y)+i.z*Math.abs(ir.z),l=e.dot(ir),c=t.dot(ir),f=n.dot(ir);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Yp=new Is,Fs=new q,Rl=new q;class Pl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Yp.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fs.subVectors(e,this.center);const t=Fs.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fs,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Rl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fs.copy(e.center).add(Rl)),this.expandByPoint(Fs.copy(e.center).sub(Rl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pi=new q,Dl=new q,Lo=new q,Ui=new q,Ll=new q,Io=new q,Il=new q;class qp{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,pi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=pi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(pi.copy(this.origin).addScaledVector(this.direction,t),pi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Dl.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Ui.copy(this.origin).sub(Dl);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Ui.dot(this.direction),l=-Ui.dot(Lo),c=Ui.lengthSq(),f=Math.abs(1-o*o);let h,d,u,g;if(f>0)if(h=o*l-a,d=o*a-l,g=s*f,h>=0)if(d>=-g)if(d<=g){const _=1/f;h*=_,d*=_,u=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),u=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-s,-l),s),u=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),u=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),u=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Dl).addScaledVector(Lo,d),u}intersectSphere(e,t){pi.subVectors(e.center,this.origin);const n=pi.dot(this.direction),i=pi.dot(pi)-n*n,s=e.radius*e.radius;if(i>s)return null;const o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,pi)!==null}intersectTriangle(e,t,n,i,s){Ll.subVectors(t,e),Io.subVectors(n,e),Il.crossVectors(Ll,Io);let o=this.direction.dot(Il),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(Ui,Io));if(l<0)return null;const c=a*this.direction.dot(Ll.cross(Ui));if(c<0||l+c>o)return null;const f=-a*Ui.dot(Il);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ct{constructor(e,t,n,i,s,o,a,l,c,f,h,d,u,g,_,m){Ct.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,f,h,d,u,g,_,m)}set(e,t,n,i,s,o,a,l,c,f,h,d,u,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=f,p[10]=h,p[14]=d,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,u=o*h,g=a*f,_=a*h;t[0]=l*f,t[4]=-l*h,t[8]=c,t[1]=u+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+u*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*f,u=l*h,g=c*f,_=c*h;t[0]=d+_*a,t[4]=g*a-u,t[8]=o*c,t[1]=o*h,t[5]=o*f,t[9]=-a,t[2]=u*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*f,u=l*h,g=c*f,_=c*h;t[0]=d-_*a,t[4]=-o*h,t[8]=g+u*a,t[1]=u+g*a,t[5]=o*f,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*f,u=o*h,g=a*f,_=a*h;t[0]=l*f,t[4]=g*c-u,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=u*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=_-d*h,t[8]=g*h+u,t[1]=h,t[5]=o*f,t[9]=-a*f,t[2]=-c*f,t[6]=u*h+g,t[10]=d-_*h}else if(e.order==="XZY"){const d=o*l,u=o*c,g=a*l,_=a*c;t[0]=l*f,t[4]=-h,t[8]=c*f,t[1]=d*h+_,t[5]=o*f,t[9]=u*h-g,t[2]=g*h-u,t[6]=a*f,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($p,e,Kp)}lookAt(e,t,n){const i=this.elements;return hn.subVectors(e,t),hn.lengthSq()===0&&(hn.z=1),hn.normalize(),Fi.crossVectors(n,hn),Fi.lengthSq()===0&&(Math.abs(n.z)===1?hn.x+=1e-4:hn.z+=1e-4,hn.normalize(),Fi.crossVectors(n,hn)),Fi.normalize(),Uo.crossVectors(hn,Fi),i[0]=Fi.x,i[4]=Uo.x,i[8]=hn.x,i[1]=Fi.y,i[5]=Uo.y,i[9]=hn.y,i[2]=Fi.z,i[6]=Uo.z,i[10]=hn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],f=n[1],h=n[5],d=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],T=n[3],E=n[7],y=n[11],w=n[15],A=i[0],b=i[4],C=i[8],v=i[12],S=i[1],P=i[5],z=i[9],I=i[13],k=i[2],$=i[6],B=i[10],K=i[14],H=i[3],le=i[7],de=i[11],ae=i[15];return s[0]=o*A+a*S+l*k+c*H,s[4]=o*b+a*P+l*$+c*le,s[8]=o*C+a*z+l*B+c*de,s[12]=o*v+a*I+l*K+c*ae,s[1]=f*A+h*S+d*k+u*H,s[5]=f*b+h*P+d*$+u*le,s[9]=f*C+h*z+d*B+u*de,s[13]=f*v+h*I+d*K+u*ae,s[2]=g*A+_*S+m*k+p*H,s[6]=g*b+_*P+m*$+p*le,s[10]=g*C+_*z+m*B+p*de,s[14]=g*v+_*I+m*K+p*ae,s[3]=T*A+E*S+y*k+w*H,s[7]=T*b+E*P+y*$+w*le,s[11]=T*C+E*z+y*B+w*de,s[15]=T*v+E*I+y*K+w*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],u=e[14],g=e[3],_=e[7],m=e[11],p=e[15];return g*(+s*l*h-i*c*h-s*a*d+n*c*d+i*a*u-n*l*u)+_*(+t*l*u-t*c*d+s*o*d-i*o*u+i*c*f-s*l*f)+m*(+t*c*h-t*a*u-s*o*h+n*o*u+s*a*f-n*c*f)+p*(-i*a*f-t*l*h+t*a*d+i*o*h-n*o*d+n*l*f)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],u=e[11],g=e[12],_=e[13],m=e[14],p=e[15],T=h*m*c-_*d*c+_*l*u-a*m*u-h*l*p+a*d*p,E=g*d*c-f*m*c-g*l*u+o*m*u+f*l*p-o*d*p,y=f*_*c-g*h*c+g*a*u-o*_*u-f*a*p+o*h*p,w=g*h*l-f*_*l-g*a*d+o*_*d+f*a*m-o*h*m,A=t*T+n*E+i*y+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=T*b,e[1]=(_*d*s-h*m*s-_*i*u+n*m*u+h*i*p-n*d*p)*b,e[2]=(a*m*s-_*l*s+_*i*c-n*m*c-a*i*p+n*l*p)*b,e[3]=(h*l*s-a*d*s-h*i*c+n*d*c+a*i*u-n*l*u)*b,e[4]=E*b,e[5]=(f*m*s-g*d*s+g*i*u-t*m*u-f*i*p+t*d*p)*b,e[6]=(g*l*s-o*m*s-g*i*c+t*m*c+o*i*p-t*l*p)*b,e[7]=(o*d*s-f*l*s+f*i*c-t*d*c-o*i*u+t*l*u)*b,e[8]=y*b,e[9]=(g*h*s-f*_*s-g*n*u+t*_*u+f*n*p-t*h*p)*b,e[10]=(o*_*s-g*a*s+g*n*c-t*_*c-o*n*p+t*a*p)*b,e[11]=(f*a*s-o*h*s-f*n*c+t*h*c+o*n*u-t*a*u)*b,e[12]=w*b,e[13]=(f*_*i-g*h*i+g*n*d-t*_*d-f*n*m+t*h*m)*b,e[14]=(g*a*i-o*_*i-g*n*l+t*_*l+o*n*m-t*a*m)*b,e[15]=(o*h*i-f*a*i+f*n*l-t*h*l-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,f*a+n,f*l-i*o,0,c*l-i*a,f*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,f=o+o,h=a+a,d=s*c,u=s*f,g=s*h,_=o*f,m=o*h,p=a*h,T=l*c,E=l*f,y=l*h,w=n.x,A=n.y,b=n.z;return i[0]=(1-(_+p))*w,i[1]=(u+y)*w,i[2]=(g-E)*w,i[3]=0,i[4]=(u-y)*A,i[5]=(1-(d+p))*A,i[6]=(m+T)*A,i[7]=0,i[8]=(g+E)*b,i[9]=(m-T)*b,i[10]=(1-(d+_))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let s=Yr.set(i[0],i[1],i[2]).length();const o=Yr.set(i[4],i[5],i[6]).length(),a=Yr.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),e.x=i[12],e.y=i[13],e.z=i[14],On.copy(this);const c=1/s,f=1/o,h=1/a;return On.elements[0]*=c,On.elements[1]*=c,On.elements[2]*=c,On.elements[4]*=f,On.elements[5]*=f,On.elements[6]*=f,On.elements[8]*=h,On.elements[9]*=h,On.elements[10]*=h,t.setFromRotationMatrix(On),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=fi){const l=this.elements,c=2*s/(t-e),f=2*s/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let u,g;if(a===fi)u=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Co)u=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=fi){const l=this.elements,c=1/(t-e),f=1/(n-i),h=1/(o-s),d=(t+e)*c,u=(n+i)*f;let g,_;if(a===fi)g=(o+s)*h,_=-2*h;else if(a===Co)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Yr=new q,On=new Ct,$p=new q(0,0,0),Kp=new q(1,1,1),Fi=new q,Uo=new q,hn=new q,Vu=new Ct,Hu=new Ls;class mi{constructor(e=0,t=0,n=0,i=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],f=i[9],h=i[2],d=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-je(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,u),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,u));break;case"XZY":this._z=Math.asin(-je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hu.setFromEuler(this),this.setFromQuaternion(Hu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";class Gu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zp=0;const Wu=new q,qr=new Ls,_i=new Ct,Fo=new q,Ns=new q,jp=new q,Jp=new Ls,Xu=new q(1,0,0),Yu=new q(0,1,0),qu=new q(0,0,1),$u={type:"added"},Qp={type:"removed"},$r={type:"childadded",child:null},Ul={type:"childremoved",child:null};class dn extends zr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zp++}),this.uuid=Rs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=dn.DEFAULT_UP.clone();const e=new q,t=new mi,n=new Ls,i=new q(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new We}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=dn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Gu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.multiply(qr),this}rotateOnWorldAxis(e,t){return qr.setFromAxisAngle(e,t),this.quaternion.premultiply(qr),this}rotateX(e){return this.rotateOnAxis(Xu,e)}rotateY(e){return this.rotateOnAxis(Yu,e)}rotateZ(e){return this.rotateOnAxis(qu,e)}translateOnAxis(e,t){return Wu.copy(e).applyQuaternion(this.quaternion),this.position.add(Wu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Xu,e)}translateY(e){return this.translateOnAxis(Yu,e)}translateZ(e){return this.translateOnAxis(qu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_i.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Fo.copy(e):Fo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ns.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_i.lookAt(Ns,Fo,this.up):_i.lookAt(Fo,Ns,this.up),this.quaternion.setFromRotationMatrix(_i),i&&(_i.extractRotation(i.matrixWorld),qr.setFromRotationMatrix(_i),this.quaternion.premultiply(qr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($u),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qp),Ul.child=e,this.dispatchEvent(Ul),Ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_i.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_i.multiply(e.parent.matrixWorld)),e.applyMatrix4(_i),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($u),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,e,jp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ns,Jp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),u=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}dn.DEFAULT_UP=new q(0,1,0),dn.DEFAULT_MATRIX_AUTO_UPDATE=!0,dn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new q,gi=new q,Fl=new q,vi=new q,Kr=new q,Zr=new q,Ku=new q,Nl=new q,Ol=new q,Bl=new q,zl=new bt,kl=new bt,Vl=new bt;class zn{constructor(e=new q,t=new q,n=new q){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Bn.subVectors(e,t),i.cross(Bn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Bn.subVectors(i,t),gi.subVectors(n,t),Fl.subVectors(e,t);const o=Bn.dot(Bn),a=Bn.dot(gi),l=Bn.dot(Fl),c=gi.dot(gi),f=gi.dot(Fl),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,u=(c*l-a*f)*d,g=(o*f-a*l)*d;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(o,vi.y),l.addScaledVector(a,vi.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return zl.setScalar(0),kl.setScalar(0),Vl.setScalar(0),zl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,n),Vl.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(zl,s.x),o.addScaledVector(kl,s.y),o.addScaledVector(Vl,s.z),o}static isFrontFacing(e,t,n,i){return Bn.subVectors(n,t),gi.subVectors(e,t),Bn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Bn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return zn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return zn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let o,a;Kr.subVectors(i,n),Zr.subVectors(s,n),Nl.subVectors(e,n);const l=Kr.dot(Nl),c=Zr.dot(Nl);if(l<=0&&c<=0)return t.copy(n);Ol.subVectors(e,i);const f=Kr.dot(Ol),h=Zr.dot(Ol);if(f>=0&&h<=f)return t.copy(i);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),t.copy(n).addScaledVector(Kr,o);Bl.subVectors(e,s);const u=Kr.dot(Bl),g=Zr.dot(Bl);if(g>=0&&u<=g)return t.copy(s);const _=u*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(Zr,a);const m=f*g-u*h;if(m<=0&&h-f>=0&&u-g>=0)return Ku.subVectors(s,i),a=(h-f)/(h-f+(u-g)),t.copy(i).addScaledVector(Ku,a);const p=1/(m+_+d);return o=_*p,a=d*p,t.copy(n).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Zu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},No={h:0,s:0,l:0};function Hl(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class ht{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Tn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,tt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=tt.workingColorSpace){return this.r=e,this.g=t,this.b=n,tt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=tt.workingColorSpace){if(e=Fp(e,1),t=je(t,0,1),n=je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Hl(o,s,e+1/3),this.g=Hl(o,s,e),this.b=Hl(o,s,e-1/3)}return tt.toWorkingColorSpace(this,i),this}setStyle(e,t=Tn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Tn){const n=Zu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hi(e.r),this.g=hi(e.g),this.b=hi(e.b),this}copyLinearToSRGB(e){return this.r=Vr(e.r),this.g=Vr(e.g),this.b=Vr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Tn){return tt.fromWorkingColorSpace(Xt.copy(this),e),Math.round(je(Xt.r*255,0,255))*65536+Math.round(je(Xt.g*255,0,255))*256+Math.round(je(Xt.b*255,0,255))}getHexString(e=Tn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=tt.workingColorSpace){tt.fromWorkingColorSpace(Xt.copy(this),t);const n=Xt.r,i=Xt.g,s=Xt.b,o=Math.max(n,i,s),a=Math.min(n,i,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,t=tt.workingColorSpace){return tt.fromWorkingColorSpace(Xt.copy(this),t),e.r=Xt.r,e.g=Xt.g,e.b=Xt.b,e}getStyle(e=Tn){tt.fromWorkingColorSpace(Xt.copy(this),e);const t=Xt.r,n=Xt.g,i=Xt.b;return e!==Tn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+t,Ni.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ni),e.getHSL(No);const n=Tl(Ni.h,No.h,t),i=Tl(Ni.s,No.s,t),s=Tl(Ni.l,No.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Xt=new ht;ht.NAMES=Zu;let em=0;class Oo extends zr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:em++}),this.uuid=Rs(),this.name="",this.type="Material",this.blending=Pr,this.side=Ci,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=La,this.blendDst=Ia,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=Dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Pr&&(n.blending=this.blending),this.side!==Ci&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==La&&(n.blendSrc=this.blendSrc),this.blendDst!==Ia&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ju extends Oo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=vu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Rt=new q,Bo=new at;class Zn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Lu,this.updateRanges=[],this.gpuType=ui,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix3(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyMatrix4(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.applyNormalMatrix(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Rt.fromBufferAttribute(this,t),Rt.transformDirection(e),this.setXYZ(t,Rt.x,Rt.y,Rt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ps(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=rn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ps(t,this.array)),t}setX(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ps(t,this.array)),t}setY(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ps(t,this.array)),t}setZ(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ps(t,this.array)),t}setW(e,t){return this.normalized&&(t=rn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),i=rn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=rn(t,this.array),n=rn(n,this.array),i=rn(i,this.array),s=rn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Lu&&(e.usage=this.usage),e}}class Ju extends Zn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Qu extends Zn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class rr extends Zn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let tm=0;const bn=new Ct,Gl=new dn,jr=new q,pn=new Is,Os=new Is,zt=new q;class sr extends zr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:tm++}),this.uuid=Rs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Uu(e)?Qu:Ju)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return bn.makeRotationFromQuaternion(e),this.applyMatrix4(bn),this}rotateX(e){return bn.makeRotationX(e),this.applyMatrix4(bn),this}rotateY(e){return bn.makeRotationY(e),this.applyMatrix4(bn),this}rotateZ(e){return bn.makeRotationZ(e),this.applyMatrix4(bn),this}translate(e,t,n){return bn.makeTranslation(e,t,n),this.applyMatrix4(bn),this}scale(e,t,n){return bn.makeScale(e,t,n),this.applyMatrix4(bn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(jr).negate(),this.translate(jr.x,jr.y,jr.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new rr(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(zt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(zt),zt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(zt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];Os.setFromBufferAttribute(a),this.morphTargetsRelative?(zt.addVectors(pn.min,Os.min),pn.expandByPoint(zt),zt.addVectors(pn.max,Os.max),pn.expandByPoint(zt)):(pn.expandByPoint(Os.min),pn.expandByPoint(Os.max))}pn.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)zt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(zt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)zt.fromBufferAttribute(a,c),l&&(jr.fromBufferAttribute(e,c),zt.add(jr)),i=Math.max(i,n.distanceToSquared(zt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Zn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new q,l[C]=new q;const c=new q,f=new q,h=new q,d=new at,u=new at,g=new at,_=new q,m=new q;function p(C,v,S){c.fromBufferAttribute(n,C),f.fromBufferAttribute(n,v),h.fromBufferAttribute(n,S),d.fromBufferAttribute(s,C),u.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),f.sub(c),h.sub(c),u.sub(d),g.sub(d);const P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(h,-u.y).multiplyScalar(P),m.copy(h).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(P),a[C].add(_),a[v].add(_),a[S].add(_),l[C].add(m),l[v].add(m),l[S].add(m))}let T=this.groups;T.length===0&&(T=[{start:0,count:e.count}]);for(let C=0,v=T.length;C<v;++C){const S=T[C],P=S.start,z=S.count;for(let I=P,k=P+z;I<k;I+=3)p(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new q,y=new q,w=new q,A=new q;function b(C){w.fromBufferAttribute(i,C),A.copy(w);const v=a[C];E.copy(v),E.sub(w.multiplyScalar(w.dot(v))).normalize(),y.crossVectors(A,v);const P=y.dot(l[C])<0?-1:1;o.setXYZW(C,E.x,E.y,E.z,P)}for(let C=0,v=T.length;C<v;++C){const S=T[C],P=S.start,z=S.count;for(let I=P,k=P+z;I<k;I+=3)b(e.getX(I+0)),b(e.getX(I+1)),b(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Zn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,u=n.count;d<u;d++)n.setXYZ(d,0,0,0);const i=new q,s=new q,o=new q,a=new q,l=new q,c=new q,f=new q,h=new q;if(e)for(let d=0,u=e.count;d<u;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),f.subVectors(o,s),h.subVectors(i,s),f.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(f),l.add(f),c.add(f),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,u=t.count;d<u;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),f.subVectors(o,s),h.subVectors(i,s),f.cross(h),n.setXYZ(d+0,f.x,f.y,f.z),n.setXYZ(d+1,f.x,f.y,f.z),n.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)zt.fromBufferAttribute(e,t),zt.normalize(),e.setXYZ(t,zt.x,zt.y,zt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let u=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?u=l[_]*a.data.stride+a.offset:u=l[_]*f;for(let p=0;p<f;p++)d[g++]=c[u++]}return new Zn(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new sr,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],u=e(d,n);l.push(u)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const u=c[h];f.push(u.toJSON(e.data))}f.length>0&&(i[l]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const f=i[c];this.setAttribute(c,f.clone(t))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,u=h.length;d<u;d++)f.push(h[d].clone(t));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ef=new Ct,or=new qp,zo=new Pl,tf=new q,ko=new q,Vo=new q,Ho=new q,Wl=new q,Go=new q,nf=new q,Wo=new q;class jn extends dn{constructor(e=new sr,t=new ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){const a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(s&&a){Go.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Wl.fromBufferAttribute(h,e),o?Go.addScaledVector(Wl,f):Go.addScaledVector(Wl.sub(t),f))}t.add(Go)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),zo.copy(n.boundingSphere),zo.applyMatrix4(s),or.copy(e.ray).recast(e.near),!(zo.containsPoint(or.origin)===!1&&(or.intersectSphere(zo,tf)===null||or.origin.distanceToSquared(tf)>(e.far-e.near)**2))&&(ef.copy(s).invert(),or.copy(e.ray).applyMatrix4(ef),!(n.boundingBox!==null&&or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,or)))}_computeIntersections(e,t,n){let i;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,u=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,u.start),E=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let y=T,w=E;y<w;y+=3){const A=a.getX(y),b=a.getX(y+1),C=a.getX(y+2);i=Xo(this,p,e,n,c,f,h,A,b,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(a.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const T=a.getX(m),E=a.getX(m+1),y=a.getX(m+2);i=Xo(this,o,e,n,c,f,h,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=o[m.materialIndex],T=Math.max(m.start,u.start),E=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let y=T,w=E;y<w;y+=3){const A=y,b=y+1,C=y+2;i=Xo(this,p,e,n,c,f,h,A,b,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(l.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const T=m,E=m+1,y=m+2;i=Xo(this,o,e,n,c,f,h,T,E,y),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function nm(r,e,t,n,i,s,o,a){let l;if(e.side===tn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Ci,a),l===null)return null;Wo.copy(a),Wo.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Wo);return c<t.near||c>t.far?null:{distance:c,point:Wo.clone(),object:r}}function Xo(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,ko),r.getVertexPosition(l,Vo),r.getVertexPosition(c,Ho);const f=nm(r,e,t,n,ko,Vo,Ho,nf);if(f){const h=new q;zn.getBarycoord(nf,ko,Vo,Ho,h),i&&(f.uv=zn.getInterpolatedAttribute(i,a,l,c,h,new at)),s&&(f.uv1=zn.getInterpolatedAttribute(s,a,l,c,h,new at)),o&&(f.normal=zn.getInterpolatedAttribute(o,a,l,c,h,new q),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new q,materialIndex:0};zn.getNormal(ko,Vo,Ho,d.normal),f.face=d,f.barycoord=h}return f}class Bs extends sr{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};const a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,u=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new rr(c,3)),this.setAttribute("normal",new rr(f,3)),this.setAttribute("uv",new rr(h,2));function g(_,m,p,T,E,y,w,A,b,C,v){const S=y/b,P=w/C,z=y/2,I=w/2,k=A/2,$=b+1,B=C+1;let K=0,H=0;const le=new q;for(let de=0;de<B;de++){const ae=de*P-I;for(let ve=0;ve<$;ve++){const Ue=ve*S-z;le[_]=Ue*T,le[m]=ae*E,le[p]=k,c.push(le.x,le.y,le.z),le[_]=0,le[m]=0,le[p]=A>0?1:-1,f.push(le.x,le.y,le.z),h.push(ve/b),h.push(1-de/C),K+=1}}for(let de=0;de<C;de++)for(let ae=0;ae<b;ae++){const ve=d+ae+$*de,Ue=d+ae+$*(de+1),W=d+(ae+1)+$*(de+1),ie=d+(ae+1)+$*de;l.push(ve,Ue,ie),l.push(Ue,W,ie),H+=6}a.addGroup(u,H,v),u+=H,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bs(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Jr(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function jt(r){const e={};for(let t=0;t<r.length;t++){const n=Jr(r[t]);for(const i in n)e[i]=n[i]}return e}function im(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function rf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:tt.workingColorSpace}const rm={clone:Jr,merge:jt};var sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,om=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xi extends Oo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sm,this.fragmentShader=om,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Jr(e.uniforms),this.uniformsGroups=im(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class sf extends dn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=fi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new q,of=new at,af=new at;class kn extends sf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=El*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ml*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return El*2*Math.atan(Math.tan(Ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,t){return this.getViewBounds(e,of,af),t.subVectors(af,of)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ml*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Qr=-90,es=1;class am extends dn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new kn(Qr,es,e,t);i.layers=this.layers,this.add(i);const s=new kn(Qr,es,e,t);s.layers=this.layers,this.add(s);const o=new kn(Qr,es,e,t);o.layers=this.layers,this.add(o);const a=new kn(Qr,es,e,t);a.layers=this.layers,this.add(a);const l=new kn(Qr,es,e,t);l.layers=this.layers,this.add(l);const c=new kn(Qr,es,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(const c of t)this.remove(c);if(e===fi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Co)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,f),e.setRenderTarget(h,d,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class lf extends Bt{constructor(e,t,n,i,s,o,a,l,c,f){e=e!==void 0?e:[],t=t!==void 0?t:Lr,super(e,t,n,i,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class lm extends tr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new lf(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:nn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Bs(5,5,5),s=new xi({name:"CubemapFromEquirect",uniforms:Jr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:tn,blending:Ri});s.uniforms.tEquirect.value=t;const o=new jn(i,s),a=t.minFilter;return t.minFilter===Qi&&(t.minFilter=nn),new am(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}}class cm extends dn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xl=new q,um=new q,fm=new We;class ar{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Xl.subVectors(n,t).cross(um.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Xl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||fm.getNormalMatrix(e),i=this.coplanarPoint(Xl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const lr=new Pl,Yo=new q;class cf{constructor(e=new ar,t=new ar,n=new ar,i=new ar,s=new ar,o=new ar){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=fi){const n=this.planes,i=e.elements,s=i[0],o=i[1],a=i[2],l=i[3],c=i[4],f=i[5],h=i[6],d=i[7],u=i[8],g=i[9],_=i[10],m=i[11],p=i[12],T=i[13],E=i[14],y=i[15];if(n[0].setComponents(l-s,d-c,m-u,y-p).normalize(),n[1].setComponents(l+s,d+c,m+u,y+p).normalize(),n[2].setComponents(l+o,d+f,m+g,y+T).normalize(),n[3].setComponents(l-o,d-f,m-g,y-T).normalize(),n[4].setComponents(l-a,d-h,m-_,y-E).normalize(),t===fi)n[5].setComponents(l+a,d+h,m+_,y+E).normalize();else if(t===Co)n[5].setComponents(a,h,_,E).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),lr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),lr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(lr)}intersectsSprite(e){return lr.center.set(0,0,0),lr.radius=.7071067811865476,lr.applyMatrix4(e.matrixWorld),this.intersectsSphere(lr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Yo.x=i.normal.x>0?e.max.x:e.min.x,Yo.y=i.normal.y>0?e.max.y:e.min.y,Yo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Yo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class qo extends dn{constructor(){super(),this.isGroup=!0,this.type="Group"}}class hm extends Bt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isVideoTexture=!0,this.minFilter=o!==void 0?o:nn,this.magFilter=s!==void 0?s:nn,this.generateMipmaps=!1;const f=this;function h(){f.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class $o extends Bt{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class uf extends Bt{constructor(e,t,n,i,s,o,a,l,c,f=Fr){if(f!==Fr&&f!==Nr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===Fr&&(n=er),n===void 0&&f===Nr&&(n=Ur),super(null,i,s,o,a,l,f,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Fn,this.minFilter=l!==void 0?l:Fn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class zs extends sr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,f=l+1,h=e/a,d=t/l,u=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const T=p*d-o;for(let E=0;E<c;E++){const y=E*h-s;g.push(y,-T,0),_.push(0,0,1),m.push(E/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let T=0;T<a;T++){const E=T+c*p,y=T+c*(p+1),w=T+1+c*(p+1),A=T+1+c*p;u.push(E,y,A),u.push(y,w,A)}this.setIndex(u),this.setAttribute("position",new rr(g,3)),this.setAttribute("normal",new rr(_,3)),this.setAttribute("uv",new rr(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.width,e.height,e.widthSegments,e.heightSegments)}}class dm extends Oo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pm extends Oo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ff={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(this.files[r]=e)},get:function(r){if(this.enabled!==!1)return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};class mm{constructor(e,t,n){const i=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(f){a++,s===!1&&i.onStart!==void 0&&i.onStart(f,o,a),s=!0},this.itemEnd=function(f){o++,i.onProgress!==void 0&&i.onProgress(f,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(f){i.onError!==void 0&&i.onError(f)},this.resolveURL=function(f){return l?l(f):f},this.setURLModifier=function(f){return l=f,this},this.addHandler=function(f,h){return c.push(f,h),this},this.removeHandler=function(f){const h=c.indexOf(f);return h!==-1&&c.splice(h,2),this},this.getHandler=function(f){for(let h=0,d=c.length;h<d;h+=2){const u=c[h],g=c[h+1];if(u.global&&(u.lastIndex=0),u.test(f))return g}return null}}}const _m=new mm;class Yl{constructor(e){this.manager=e!==void 0?e:_m,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Yl.DEFAULT_MATERIAL_NAME="__DEFAULT";class gm extends Yl{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ff.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=Ds("img");function l(){f(),ff.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){f(),i&&i(h),s.manager.itemError(e),s.manager.itemEnd(e)}function f(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vm extends Yl{constructor(e){super(e)}load(e,t,n,i){const s=new Bt,o=new gm(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class hf extends sf{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class xm extends kn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}function df(r,e,t,n){const i=ym(n);switch(t){case Eu:return r*e;case bu:return r*e;case wu:return r*e*2;case Au:return r*e/i.components*i.byteLength;case qa:return r*e/i.components*i.byteLength;case Cu:return r*e*2/i.components*i.byteLength;case $a:return r*e*2/i.components*i.byteLength;case Tu:return r*e*3/i.components*i.byteLength;case En:return r*e*4/i.components*i.byteLength;case Ka:return r*e*4/i.components*i.byteLength;case Mo:case Eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case To:case bo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ja:case Qa:return Math.max(r,16)*Math.max(e,8)/4;case Za:case Ja:return Math.max(r,8)*Math.max(e,8)/2;case el:case tl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case nl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case il:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case rl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case sl:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case ol:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case al:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ll:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case cl:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ul:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case fl:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case hl:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case dl:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case pl:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case ml:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case _l:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case wo:case gl:case vl:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Ru:case xl:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yl:case Sl:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ym(r){switch(r){case ci:case yu:return{byteLength:1,components:1};case As:case Su:case Cs:return{byteLength:2,components:1};case Xa:case Ya:return{byteLength:2,components:4};case er:case Wa:case ui:return{byteLength:4,components:1};case Mu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Da}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Da);/**
* @license
* Copyright 2010-2024 Three.js Authors
* SPDX-License-Identifier: MIT
*/function pf(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Sm(r){const e=new WeakMap;function t(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,f),a.onUploadCallback();let u;if(c instanceof Float32Array)u=r.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=r.SHORT;else if(c instanceof Uint32Array)u=r.UNSIGNED_INT;else if(c instanceof Int32Array)u=r.INT;else if(c instanceof Int8Array)u=r.BYTE;else if(c instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const f=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,f);else{h.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<h.length;u++){const g=h[d],_=h[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,h[d]=_)}h.length=d+1;for(let u=0,g=h.length;u<g;u++){const _=h[u];r.bufferSubData(c,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Mm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Em=`#ifdef USE_ALPHAHASH
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
#endif`,Tm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,bm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Am=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Cm=`#ifdef USE_AOMAP
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
#endif`,Rm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Pm=`#ifdef USE_BATCHING
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
#endif`,Dm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Lm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Im=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Um=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Fm=`#ifdef USE_IRIDESCENCE
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
#endif`,Nm=`#ifdef USE_BUMPMAP
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
#endif`,Om=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Bm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,zm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,km=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Hm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Xm=`#define PI 3.141592653589793
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
} // validated`,Ym=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,qm=`vec3 transformedNormal = objectNormal;
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
#endif`,$m=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Km=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,e_=`#ifdef USE_ENVMAP
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
#endif`,t_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,n_=`#ifdef USE_ENVMAP
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
#endif`,i_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,o_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,l_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,c_=`#ifdef USE_GRADIENTMAP
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
}`,u_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,f_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d_=`uniform bool receiveShadow;
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
#endif`,p_=`#ifdef USE_ENVMAP
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
#endif`,m_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,__=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,v_=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x_=`PhysicalMaterial material;
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
#endif`,y_=`struct PhysicalMaterial {
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
}`,S_=`
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
#endif`,M_=`#if defined( RE_IndirectDiffuse )
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
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,T_=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,b_=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,w_=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,A_=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,C_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,R_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,P_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,D_=`#if defined( USE_POINTS_UV )
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
#endif`,L_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,I_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,F_=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,N_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`#ifdef USE_MORPHTARGETS
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
#endif`,B_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,z_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,k_=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,G_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,W_=`#ifdef USE_NORMALMAP
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
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,K_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Z_=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,j_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Q_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,eg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ng=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ig=`#if NUM_SPOT_LIGHT_COORDS > 0
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
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
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
#endif`,rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,og=`float getShadowMask() {
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
}`,ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,lg=`#ifdef USE_SKINNING
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
#endif`,cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ug=`#ifdef USE_SKINNING
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
#endif`,fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,pg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,mg=`#ifdef USE_TRANSMISSION
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
#endif`,_g=`#ifdef USE_TRANSMISSION
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
#endif`,gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ye={alphahash_fragment:Mm,alphahash_pars_fragment:Em,alphamap_fragment:Tm,alphamap_pars_fragment:bm,alphatest_fragment:wm,alphatest_pars_fragment:Am,aomap_fragment:Cm,aomap_pars_fragment:Rm,batching_pars_vertex:Pm,batching_vertex:Dm,begin_vertex:Lm,beginnormal_vertex:Im,bsdfs:Um,iridescence_fragment:Fm,bumpmap_pars_fragment:Nm,clipping_planes_fragment:Om,clipping_planes_pars_fragment:Bm,clipping_planes_pars_vertex:zm,clipping_planes_vertex:km,color_fragment:Vm,color_pars_fragment:Hm,color_pars_vertex:Gm,color_vertex:Wm,common:Xm,cube_uv_reflection_fragment:Ym,defaultnormal_vertex:qm,displacementmap_pars_vertex:$m,displacementmap_vertex:Km,emissivemap_fragment:Zm,emissivemap_pars_fragment:jm,colorspace_fragment:Jm,colorspace_pars_fragment:Qm,envmap_fragment:e_,envmap_common_pars_fragment:t_,envmap_pars_fragment:n_,envmap_pars_vertex:i_,envmap_physical_pars_fragment:p_,envmap_vertex:r_,fog_vertex:s_,fog_pars_vertex:o_,fog_fragment:a_,fog_pars_fragment:l_,gradientmap_pars_fragment:c_,lightmap_pars_fragment:u_,lights_lambert_fragment:f_,lights_lambert_pars_fragment:h_,lights_pars_begin:d_,lights_toon_fragment:m_,lights_toon_pars_fragment:__,lights_phong_fragment:g_,lights_phong_pars_fragment:v_,lights_physical_fragment:x_,lights_physical_pars_fragment:y_,lights_fragment_begin:S_,lights_fragment_maps:M_,lights_fragment_end:E_,logdepthbuf_fragment:T_,logdepthbuf_pars_fragment:b_,logdepthbuf_pars_vertex:w_,logdepthbuf_vertex:A_,map_fragment:C_,map_pars_fragment:R_,map_particle_fragment:P_,map_particle_pars_fragment:D_,metalnessmap_fragment:L_,metalnessmap_pars_fragment:I_,morphinstance_vertex:U_,morphcolor_vertex:F_,morphnormal_vertex:N_,morphtarget_pars_vertex:O_,morphtarget_vertex:B_,normal_fragment_begin:z_,normal_fragment_maps:k_,normal_pars_fragment:V_,normal_pars_vertex:H_,normal_vertex:G_,normalmap_pars_fragment:W_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:q_,iridescence_pars_fragment:$_,opaque_fragment:K_,packing:Z_,premultiplied_alpha_fragment:j_,project_vertex:J_,dithering_fragment:Q_,dithering_pars_fragment:eg,roughnessmap_fragment:tg,roughnessmap_pars_fragment:ng,shadowmap_pars_fragment:ig,shadowmap_pars_vertex:rg,shadowmap_vertex:sg,shadowmask_pars_fragment:og,skinbase_vertex:ag,skinning_pars_vertex:lg,skinning_vertex:cg,skinnormal_vertex:ug,specularmap_fragment:fg,specularmap_pars_fragment:hg,tonemapping_fragment:dg,tonemapping_pars_fragment:pg,transmission_fragment:mg,transmission_pars_fragment:_g,uv_pars_fragment:gg,uv_pars_vertex:vg,uv_vertex:xg,worldpos_vertex:yg,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
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
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
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
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
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
}`,depth_frag:`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
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
}`,distanceRGBA_frag:`#define DISTANCE
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
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
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
}`,linedashed_frag:`uniform vec3 diffuse;
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
}`,meshbasic_vert:`#include <common>
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
}`,meshbasic_frag:`uniform vec3 diffuse;
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
}`,meshlambert_vert:`#define LAMBERT
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
}`,meshlambert_frag:`#define LAMBERT
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
}`,meshmatcap_vert:`#define MATCAP
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
}`,meshmatcap_frag:`#define MATCAP
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
}`,meshnormal_vert:`#define NORMAL
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
}`,meshnormal_frag:`#define NORMAL
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
}`,meshphong_vert:`#define PHONG
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
}`,meshphong_frag:`#define PHONG
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
}`,meshphysical_vert:`#define STANDARD
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
}`,meshphysical_frag:`#define STANDARD
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
}`,meshtoon_vert:`#define TOON
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
}`,meshtoon_frag:`#define TOON
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
}`,points_vert:`uniform float size;
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
}`,points_frag:`uniform vec3 diffuse;
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
}`,shadow_vert:`#include <common>
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
}`,shadow_frag:`uniform vec3 color;
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
}`,sprite_vert:`uniform float rotation;
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
}`,sprite_frag:`uniform vec3 diffuse;
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
}`},fe={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new at(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new at(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Jn={basic:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:Ye.meshbasic_vert,fragmentShader:Ye.meshbasic_frag},lambert:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ye.meshlambert_vert,fragmentShader:Ye.meshlambert_frag},phong:{uniforms:jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30}}]),vertexShader:Ye.meshphong_vert,fragmentShader:Ye.meshphong_frag},standard:{uniforms:jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag},toon:{uniforms:jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new ht(0)}}]),vertexShader:Ye.meshtoon_vert,fragmentShader:Ye.meshtoon_frag},matcap:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:Ye.meshmatcap_vert,fragmentShader:Ye.meshmatcap_frag},points:{uniforms:jt([fe.points,fe.fog]),vertexShader:Ye.points_vert,fragmentShader:Ye.points_frag},dashed:{uniforms:jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ye.linedashed_vert,fragmentShader:Ye.linedashed_frag},depth:{uniforms:jt([fe.common,fe.displacementmap]),vertexShader:Ye.depth_vert,fragmentShader:Ye.depth_frag},normal:{uniforms:jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:Ye.meshnormal_vert,fragmentShader:Ye.meshnormal_frag},sprite:{uniforms:jt([fe.sprite,fe.fog]),vertexShader:Ye.sprite_vert,fragmentShader:Ye.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ye.background_vert,fragmentShader:Ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ye.backgroundCube_vert,fragmentShader:Ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ye.cube_vert,fragmentShader:Ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ye.equirect_vert,fragmentShader:Ye.equirect_frag},distanceRGBA:{uniforms:jt([fe.common,fe.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ye.distanceRGBA_vert,fragmentShader:Ye.distanceRGBA_frag},shadow:{uniforms:jt([fe.lights,fe.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:Ye.shadow_vert,fragmentShader:Ye.shadow_frag}};Jn.physical={uniforms:jt([Jn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new at(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new at},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new at},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ye.meshphysical_vert,fragmentShader:Ye.meshphysical_frag};const Ko={r:0,b:0,g:0},cr=new mi,Sg=new Ct;function Mg(r,e,t,n,i,s,o){const a=new ht(0);let l=s===!0?0:1,c,f,h=null,d=0,u=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const w=g(E);w===null?p(a,l):w&&w.isColor&&(p(w,1),y=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(E,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===vo)?(f===void 0&&(f=new jn(new Bs(1,1,1),new xi({name:"BackgroundCubeMaterial",uniforms:Jr(Jn.backgroundCube.uniforms),vertexShader:Jn.backgroundCube.vertexShader,fragmentShader:Jn.backgroundCube.fragmentShader,side:tn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,b,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(f)),cr.copy(y.backgroundRotation),cr.x*=-1,cr.y*=-1,cr.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(cr.y*=-1,cr.z*=-1),f.material.uniforms.envMap.value=w,f.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Sg.makeRotationFromEuler(cr)),f.material.toneMapped=tt.getTransfer(w.colorSpace)!==ft,(h!==w||d!==w.version||u!==r.toneMapping)&&(f.material.needsUpdate=!0,h=w,d=w.version,u=r.toneMapping),f.layers.enableAll(),E.unshift(f,f.geometry,f.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new jn(new zs(2,2),new xi({name:"BackgroundMaterial",uniforms:Jr(Jn.background.uniforms),vertexShader:Jn.background.vertexShader,fragmentShader:Jn.background.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=tt.getTransfer(w.colorSpace)!==ft,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(h!==w||d!==w.version||u!==r.toneMapping)&&(c.material.needsUpdate=!0,h=w,d=w.version,u=r.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function p(E,y){E.getRGB(Ko,rf(r)),n.buffers.color.setClear(Ko.r,Ko.g,Ko.b,y,o)}function T(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),c!==void 0&&(c.geometry.dispose(),c.material.dispose())}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,p(a,l)},render:_,addToRenderList:m,dispose:T}}function Eg(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,o=!1;function a(S,P,z,I,k){let $=!1;const B=h(I,z,P);s!==B&&(s=B,c(s.object)),$=u(S,I,z,k),$&&g(S,I,z,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,y(S,P,z,I),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function f(S){return r.deleteVertexArray(S)}function h(S,P,z){const I=z.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let $=k[P.id];$===void 0&&($={},k[P.id]=$);let B=$[I];return B===void 0&&(B=d(l()),$[I]=B),B}function d(S){const P=[],z=[],I=[];for(let k=0;k<t;k++)P[k]=0,z[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:I,object:S,attributes:{},index:null}}function u(S,P,z,I){const k=s.attributes,$=P.attributes;let B=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){const de=k[H];let ae=$[H];if(ae===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(ae=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(ae=S.instanceColor)),de===void 0||de.attribute!==ae||ae&&de.data!==ae.data)return!0;B++}return s.attributesNum!==B||s.index!==I}function g(S,P,z,I){const k={},$=P.attributes;let B=0;const K=z.getAttributes();for(const H in K)if(K[H].location>=0){let de=$[H];de===void 0&&(H==="instanceMatrix"&&S.instanceMatrix&&(de=S.instanceMatrix),H==="instanceColor"&&S.instanceColor&&(de=S.instanceColor));const ae={};ae.attribute=de,de&&de.data&&(ae.data=de.data),k[H]=ae,B++}s.attributes=k,s.attributesNum=B,s.index=I}function _(){const S=s.newAttributes;for(let P=0,z=S.length;P<z;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const z=s.newAttributes,I=s.enabledAttributes,k=s.attributeDivisors;z[S]=1,I[S]===0&&(r.enableVertexAttribArray(S),I[S]=1),k[S]!==P&&(r.vertexAttribDivisor(S,P),k[S]=P)}function T(){const S=s.newAttributes,P=s.enabledAttributes;for(let z=0,I=P.length;z<I;z++)P[z]!==S[z]&&(r.disableVertexAttribArray(z),P[z]=0)}function E(S,P,z,I,k,$,B){B===!0?r.vertexAttribIPointer(S,P,z,k,$):r.vertexAttribPointer(S,P,z,I,k,$)}function y(S,P,z,I){_();const k=I.attributes,$=z.getAttributes(),B=P.defaultAttributeValues;for(const K in $){const H=$[K];if(H.location>=0){let le=k[K];if(le===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(le=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(le=S.instanceColor)),le!==void 0){const de=le.normalized,ae=le.itemSize,ve=e.get(le);if(ve===void 0)continue;const Ue=ve.buffer,W=ve.type,ie=ve.bytesPerElement,me=W===r.INT||W===r.UNSIGNED_INT||le.gpuType===Wa;if(le.isInterleavedBufferAttribute){const ue=le.data,Se=ue.stride,Fe=le.offset;if(ue.isInstancedInterleavedBuffer){for(let Be=0;Be<H.locationSize;Be++)p(H.location+Be,ue.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let Be=0;Be<H.locationSize;Be++)m(H.location+Be);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let Be=0;Be<H.locationSize;Be++)E(H.location+Be,ae/H.locationSize,W,de,Se*ie,(Fe+ae/H.locationSize*Be)*ie,me)}else{if(le.isInstancedBufferAttribute){for(let ue=0;ue<H.locationSize;ue++)p(H.location+ue,le.meshPerAttribute);S.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let ue=0;ue<H.locationSize;ue++)m(H.location+ue);r.bindBuffer(r.ARRAY_BUFFER,Ue);for(let ue=0;ue<H.locationSize;ue++)E(H.location+ue,ae/H.locationSize,W,de,ae*ie,ae/H.locationSize*ue*ie,me)}}else if(B!==void 0){const de=B[K];if(de!==void 0)switch(de.length){case 2:r.vertexAttrib2fv(H.location,de);break;case 3:r.vertexAttrib3fv(H.location,de);break;case 4:r.vertexAttrib4fv(H.location,de);break;default:r.vertexAttrib1fv(H.location,de)}}}}T()}function w(){C();for(const S in n){const P=n[S];for(const z in P){const I=P[z];for(const k in I)f(I[k].object),delete I[k];delete P[z]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const P=n[S.id];for(const z in P){const I=P[z];for(const k in I)f(I[k].object),delete I[k];delete P[z]}delete n[S.id]}function b(S){for(const P in n){const z=n[P];if(z[S.id]===void 0)continue;const I=z[S.id];for(const k in I)f(I[k].object),delete I[k];delete z[S.id]}}function C(){v(),o=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:v,dispose:w,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:_,enableAttribute:m,disableUnusedAttributes:T}}function Tg(r,e,t){let n;function i(c){n=c}function s(c,f){r.drawArrays(n,c,f),t.update(f,n,1)}function o(c,f,h){h!==0&&(r.drawArraysInstanced(n,c,f,h),t.update(f,n,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,f,0,h);let u=0;for(let g=0;g<h;g++)u+=f[g];t.update(u,n,1)}function l(c,f,h,d){if(h===0)return;const u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)o(c[g],f[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,f,0,d,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function bg(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(b){return!(b!==En&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const C=b===Cs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==ci&&n.convert(b)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==ui&&!C)}function l(b){if(b==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),T=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),w=g>0,A=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:y,vertexTextures:w,maxSamples:A}}function wg(r){const e=this;let t=null,n=0,i=!1,s=!1;const o=new ar,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const u=h.length!==0||d||n!==0||i;return i=d,n=h.length,u},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=f(h,d,0)},this.setState=function(h,d,u){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=r.get(h);if(!i||g===null||g.length===0||s&&!m)s?f(null):c();else{const T=s?0:n,E=T*4;let y=p.clippingState||null;l.value=y,y=f(g,d,E,u);for(let w=0;w!==E;++w)y[w]=t[w];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(h,d,u,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=u+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,y=u;E!==_;++E,y+=4)o.copy(h[E]).applyMatrix4(T,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function Ag(r){let e=new WeakMap;function t(o,a){return a===Va?o.mapping=Lr:a===Ha&&(o.mapping=Ir),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Va||a===Ha)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new lm(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const ts=4,mf=[.125,.215,.35,.446,.526,.582],ur=20,ql=new hf,_f=new ht;let $l=null,Kl=0,Zl=0,jl=!1;const fr=(1+Math.sqrt(5))/2,ns=1/fr,gf=[new q(-fr,ns,0),new q(fr,ns,0),new q(-ns,0,fr),new q(ns,0,fr),new q(0,fr,-ns),new q(0,fr,ns),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class vf{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,i,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget($l,Kl,Zl),this._renderer.xr.enabled=jl,e.scissorTest=!1,Zo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Lr||e.mapping===Ir?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),$l=this._renderer.getRenderTarget(),Kl=this._renderer.getActiveCubeFace(),Zl=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:nn,minFilter:nn,generateMipmaps:!1,type:Cs,format:En,colorSpace:Or,depthBuffer:!1},i=xf(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=xf(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Cg(s)),this._blurMaterial=Rg(s,e,t)}return i}_compileMaterial(e){const t=new jn(this._lodPlanes[0],e);this._renderer.compile(t,ql)}_sceneToCubeUV(e,t,n,i){const a=new kn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(_f),f.toneMapping=Pi,f.autoClear=!1;const u=new ju({name:"PMREM.Background",side:tn,depthWrite:!1,depthTest:!1}),g=new jn(new Bs,u);let _=!1;const m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,_=!0):(u.color.copy(_f),_=!0);for(let p=0;p<6;p++){const T=p%3;T===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):T===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const E=this._cubeSize;Zo(i,T*E,p>2?E:0,E,E),f.setRenderTarget(i),_&&f.render(g,a),f.render(e,a)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Lr||e.mapping===Ir;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sf()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const s=i?this._cubemapMaterial:this._equirectMaterial,o=new jn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Zo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,ql)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let s=1;s<i;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=gf[(i-s-1)%gf.length];this._blur(e,s-1,s,o,a)}t.autoClear=n}_blur(e,t,n,i,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new jn(this._lodPlanes[i],c),d=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*u):2*Math.PI/(2*ur-1),_=s/g,m=isFinite(s)?1+Math.floor(f*_):ur;m>ur&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ur}`);const p=[];let T=0;for(let b=0;b<ur;++b){const C=b/_,v=Math.exp(-C*C/2);p.push(v),b===0?T+=v:b<m&&(T+=2*v)}for(let b=0;b<p.length;b++)p[b]=p[b]/T;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=g,d.mipInt.value=E-n;const y=this._sizeLods[i],w=3*y*(i>E-ts?i-E+ts:0),A=4*(this._cubeSize-y);Zo(t,w,A,3*y,2*y),l.setRenderTarget(t),l.render(h,ql)}}function Cg(r){const e=[],t=[],n=[];let i=r;const s=r-ts+1+mf.length;for(let o=0;o<s;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ts?l=mf[o-r+ts-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],u=6,g=6,_=3,m=2,p=1,T=new Float32Array(_*g*u),E=new Float32Array(m*g*u),y=new Float32Array(p*g*u);for(let A=0;A<u;A++){const b=A%3*2/3-1,C=A>2?0:-1,v=[b,C,0,b+2/3,C,0,b+2/3,C+1,0,b,C,0,b+2/3,C+1,0,b,C+1,0];T.set(v,_*g*A),E.set(d,m*g*A);const S=[A,A,A,A,A,A];y.set(S,p*g*A)}const w=new sr;w.setAttribute("position",new Zn(T,_)),w.setAttribute("uv",new Zn(E,m)),w.setAttribute("faceIndex",new Zn(y,p)),e.push(w),i>ts&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function xf(r,e,t){const n=new tr(r,e,t);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zo(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function Rg(r,e,t){const n=new Float32Array(ur),i=new q(0,1,0);return new xi({name:"SphericalGaussianBlur",defines:{n:ur,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function yf(){return new xi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Sf(){return new xi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function Pg(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Va||l===Ha,f=l===Lr||l===Ir;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new vf(r)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const u=a.image;return c&&u&&u.height>0||f&&u&&i(u)?(t===null&&(t=new vf(r)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Dg(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&kr("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Lg(r,e,t,n){const i={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",o),delete i[d.id];const u=s.get(d);u&&(e.remove(u),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const u in d)e.update(d[u],r.ARRAY_BUFFER)}function c(h){const d=[],u=h.index,g=h.attributes.position;let _=0;if(u!==null){const T=u.array;_=u.version;for(let E=0,y=T.length;E<y;E+=3){const w=T[E+0],A=T[E+1],b=T[E+2];d.push(w,A,A,b,b,w)}}else if(g!==void 0){const T=g.array;_=g.version;for(let E=0,y=T.length/3-1;E<y;E+=3){const w=E+0,A=E+1,b=E+2;d.push(w,A,A,b,b,w)}}else return;const m=new(Uu(d)?Qu:Ju)(d,1);m.version=_;const p=s.get(h);p&&e.remove(p),s.set(h,m)}function f(h){const d=s.get(h);if(d){const u=h.index;u!==null&&d.version<u.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function Ig(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,u){r.drawElements(n,u,s,d*o),t.update(u,n,1)}function c(d,u,g){g!==0&&(r.drawElementsInstanced(n,u,s,d*o,g),t.update(u,n,g))}function f(d,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function h(d,u,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,u[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,s,d,0,_,0,g);let p=0;for(let T=0;T<g;T++)p+=u[T]*_[T];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Ug(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function Fg(r,e,t){const n=new WeakMap,i=new bt;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let v=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const u=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;u===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let y=a.attributes.position.count*E,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const A=new Float32Array(y*w*4*h),b=new zu(A,y,w,h);b.type=ui,b.needsUpdate=!0;const C=E*4;for(let S=0;S<h;S++){const P=m[S],z=p[S],I=T[S],k=y*w*4*S;for(let $=0;$<P.count;$++){const B=$*C;u===!0&&(i.fromBufferAttribute(P,$),A[k+B+0]=i.x,A[k+B+1]=i.y,A[k+B+2]=i.z,A[k+B+3]=0),g===!0&&(i.fromBufferAttribute(z,$),A[k+B+4]=i.x,A[k+B+5]=i.y,A[k+B+6]=i.z,A[k+B+7]=0),_===!0&&(i.fromBufferAttribute(I,$),A[k+B+8]=i.x,A[k+B+9]=i.y,A[k+B+10]=i.z,A[k+B+11]=I.itemSize===4?i.w:1)}}d={count:h,texture:b,size:new at(y,w)},n.set(a,d),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let u=0;for(let _=0;_<c.length;_++)u+=c[_];const g=a.morphTargetsRelative?1:1-u;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function Ng(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,f=l.geometry,h=e.get(l,f);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}const Mf=new Bt,Ef=new uf(1,1),Tf=new zu,bf=new Xp,wf=new lf,Af=[],Cf=[],Rf=new Float32Array(16),Pf=new Float32Array(9),Df=new Float32Array(4);function is(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Af[i];if(s===void 0&&(s=new Float32Array(i),Af[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function It(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ut(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function jo(r,e){let t=Cf[e];t===void 0&&(t=new Int32Array(e),Cf[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Og(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function Bg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2fv(this.addr,e),Ut(t,e)}}function zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(It(t,e))return;r.uniform3fv(this.addr,e),Ut(t,e)}}function kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4fv(this.addr,e),Ut(t,e)}}function Vg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Df.set(n),r.uniformMatrix2fv(this.addr,!1,Df),Ut(t,n)}}function Hg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Pf.set(n),r.uniformMatrix3fv(this.addr,!1,Pf),Ut(t,n)}}function Gg(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(It(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ut(t,e)}else{if(It(t,n))return;Rf.set(n),r.uniformMatrix4fv(this.addr,!1,Rf),Ut(t,n)}}function Wg(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function Xg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2iv(this.addr,e),Ut(t,e)}}function Yg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3iv(this.addr,e),Ut(t,e)}}function qg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4iv(this.addr,e),Ut(t,e)}}function $g(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Kg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(It(t,e))return;r.uniform2uiv(this.addr,e),Ut(t,e)}}function Zg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(It(t,e))return;r.uniform3uiv(this.addr,e),Ut(t,e)}}function jg(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(It(t,e))return;r.uniform4uiv(this.addr,e),Ut(t,e)}}function Jg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Ef.compareFunction=Du,s=Ef):s=Mf,t.setTexture2D(e||s,i)}function Qg(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||bf,i)}function ev(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wf,i)}function tv(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Tf,i)}function nv(r){switch(r){case 5126:return Og;case 35664:return Bg;case 35665:return zg;case 35666:return kg;case 35674:return Vg;case 35675:return Hg;case 35676:return Gg;case 5124:case 35670:return Wg;case 35667:case 35671:return Xg;case 35668:case 35672:return Yg;case 35669:case 35673:return qg;case 5125:return $g;case 36294:return Kg;case 36295:return Zg;case 36296:return jg;case 35678:case 36198:case 36298:case 36306:case 35682:return Jg;case 35679:case 36299:case 36307:return Qg;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(r,e){r.uniform1fv(this.addr,e)}function rv(r,e){const t=is(e,this.size,2);r.uniform2fv(this.addr,t)}function sv(r,e){const t=is(e,this.size,3);r.uniform3fv(this.addr,t)}function ov(r,e){const t=is(e,this.size,4);r.uniform4fv(this.addr,t)}function av(r,e){const t=is(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function lv(r,e){const t=is(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function cv(r,e){const t=is(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function uv(r,e){r.uniform1iv(this.addr,e)}function fv(r,e){r.uniform2iv(this.addr,e)}function hv(r,e){r.uniform3iv(this.addr,e)}function dv(r,e){r.uniform4iv(this.addr,e)}function pv(r,e){r.uniform1uiv(this.addr,e)}function mv(r,e){r.uniform2uiv(this.addr,e)}function _v(r,e){r.uniform3uiv(this.addr,e)}function gv(r,e){r.uniform4uiv(this.addr,e)}function vv(r,e,t){const n=this.cache,i=e.length,s=jo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Mf,s[o])}function xv(r,e,t){const n=this.cache,i=e.length,s=jo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||bf,s[o])}function yv(r,e,t){const n=this.cache,i=e.length,s=jo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wf,s[o])}function Sv(r,e,t){const n=this.cache,i=e.length,s=jo(t,i);It(n,s)||(r.uniform1iv(this.addr,s),Ut(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Tf,s[o])}function Mv(r){switch(r){case 5126:return iv;case 35664:return rv;case 35665:return sv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return uv;case 35667:case 35671:return fv;case 35668:case 35672:return hv;case 35669:case 35673:return dv;case 5125:return pv;case 36294:return mv;case 36295:return _v;case 36296:return gv;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Sv}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nv(t.type)}}class Tv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mv(t.type)}}class bv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,o=i.length;s!==o;++s){const a=i[s];a.setValue(e,t[a.id],n)}}}const Ql=/(\w+)(\])?(\[|\.)?/g;function Lf(r,e){r.seq.push(e),r.map[e.id]=e}function wv(r,e,t){const n=r.name,i=n.length;for(Ql.lastIndex=0;;){const s=Ql.exec(n),o=Ql.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Lf(t,c===void 0?new Ev(a,r,e):new Tv(a,r,e));break}else{let h=t.map[a];h===void 0&&(h=new bv(a),Lf(t,h)),t=h}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const s=e.getActiveUniform(t,i),o=e.getUniformLocation(t,s.name);wv(s,o,this)}}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function If(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const Av=37297;let Cv=0;function Rv(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const Uf=new We;function Pv(r){tt._getMatrix(Uf,tt.workingColorSpace,r);const e=`mat3( ${Uf.elements.map(t=>t.toFixed(4))} )`;switch(tt.getTransfer(r)){case Ao:return[e,"LinearTransferOETF"];case ft:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Ff(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),i=r.getShaderInfoLog(e).trim();if(n&&i==="")return"";const s=/ERROR: 0:(\d+)/.exec(i);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+i+`

`+Rv(r.getShaderSource(e),o)}else return i}function Dv(r,e){const t=Pv(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Lv(r,e){let t;switch(e){case _p:t="Linear";break;case gp:t="Reinhard";break;case vp:t="Cineon";break;case xp:t="ACESFilmic";break;case Sp:t="AgX";break;case Mp:t="Neutral";break;case yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Qo=new q;function Iv(){tt.getLuminanceCoefficients(Qo);const r=Qo.x.toFixed(4),e=Qo.y.toFixed(4),t=Qo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uv(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function Fv(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Nv(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),o=s.name;let a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function ks(r){return r!==""}function Nf(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Of(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function ec(r){return r.replace(Ov,zv)}const Bv=new Map;function zv(r,e){let t=Ye[e];if(t===void 0){const n=Bv.get(e);if(n!==void 0)t=Ye[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ec(t)}const kv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bf(r){return r.replace(kv,Vv)}function Vv(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function zf(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Hv(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===pu?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===Kd?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===ai&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Lr:case Ir:e="ENVMAP_TYPE_CUBE";break;case vo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case Ir:e="ENVMAP_MODE_REFRACTION";break}return e}function Xv(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case vu:e="ENVMAP_BLENDING_MULTIPLY";break;case pp:e="ENVMAP_BLENDING_MIX";break;case mp:e="ENVMAP_BLENDING_ADD";break}return e}function Yv(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function qv(r,e,t,n){const i=r.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Hv(t),c=Gv(t),f=Wv(t),h=Xv(t),d=Yv(t),u=Uv(t),g=Fv(s),_=i.createProgram();let m,p,T=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[zf(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+f:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Pi?"#define TONE_MAPPING":"",t.toneMapping!==Pi?Ye.tonemapping_pars_fragment:"",t.toneMapping!==Pi?Lv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ye.colorspace_pars_fragment,Dv("linearToOutputTexel",t.outputColorSpace),Iv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=ec(o),o=Nf(o,t),o=Of(o,t),a=ec(a),a=Nf(a,t),a=Of(a,t),o=Bf(o),a=Bf(a),t.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Iu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Iu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=T+m+o,y=T+p+a,w=If(i,i.VERTEX_SHADER,E),A=If(i,i.FRAGMENT_SHADER,y);i.attachShader(_,w),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function b(P){if(r.debug.checkShaderErrors){const z=i.getProgramInfoLog(_).trim(),I=i.getShaderInfoLog(w).trim(),k=i.getShaderInfoLog(A).trim();let $=!0,B=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if($=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,w,A);else{const K=Ff(i,w,"vertex"),H=Ff(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+z+`
`+K+`
`+H)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(I===""||k==="")&&(B=!1);B&&(P.diagnostics={runnable:$,programLog:z,vertexShader:{log:I,prefix:m},fragmentShader:{log:k,prefix:p}})}i.deleteShader(w),i.deleteShader(A),C=new Jo(i,_),v=Nv(i,_)}let C;this.getUniforms=function(){return C===void 0&&b(this),C};let v;this.getAttributes=function(){return v===void 0&&b(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,Av)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Cv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=w,this.fragmentShader=A,this}let $v=0;class Kv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Zv(e),t.set(e,n)),n}}class Zv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function jv(r,e,t,n,i,s,o){const a=new Gu,l=new Kv,c=new Set,f=[],h=i.logarithmicDepthBuffer,d=i.vertexTextures;let u=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,P,z,I){const k=z.fog,$=I.geometry,B=v.isMeshStandardMaterial?z.environment:null,K=(v.isMeshStandardMaterial?t:e).get(v.envMap||B),H=K&&K.mapping===vo?K.image.height:null,le=g[v.type];v.precision!==null&&(u=i.getMaxPrecision(v.precision),u!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));const de=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,ae=de!==void 0?de.length:0;let ve=0;$.morphAttributes.position!==void 0&&(ve=1),$.morphAttributes.normal!==void 0&&(ve=2),$.morphAttributes.color!==void 0&&(ve=3);let Ue,W,ie,me;if(le){const O=Jn[le];Ue=O.vertexShader,W=O.fragmentShader}else Ue=v.vertexShader,W=v.fragmentShader,l.update(v),ie=l.getVertexShaderID(v),me=l.getFragmentShaderID(v);const ue=r.getRenderTarget(),Se=r.state.buffers.depth.getReversed(),Fe=I.isInstancedMesh===!0,Be=I.isBatchedMesh===!0,nt=!!v.map,Xe=!!v.matcap,mt=!!K,D=!!v.aoMap,Ve=!!v.lightMap,$e=!!v.bumpMap,Oe=!!v.normalMap,Ee=!!v.displacementMap,ut=!!v.emissiveMap,Pe=!!v.metalnessMap,R=!!v.roughnessMap,x=v.anisotropy>0,V=v.clearcoat>0,J=v.dispersion>0,te=v.iridescence>0,Z=v.sheen>0,Ae=v.transmission>0,he=x&&!!v.anisotropyMap,Me=V&&!!v.clearcoatMap,Ke=V&&!!v.clearcoatNormalMap,se=V&&!!v.clearcoatRoughnessMap,Te=te&&!!v.iridescenceMap,De=te&&!!v.iridescenceThicknessMap,Ne=Z&&!!v.sheenColorMap,ye=Z&&!!v.sheenRoughnessMap,qe=!!v.specularMap,He=!!v.specularColorMap,it=!!v.specularIntensityMap,U=Ae&&!!v.transmissionMap,ce=Ae&&!!v.thicknessMap,Y=!!v.gradientMap,Q=!!v.alphaMap,_e=v.alphaTest>0,pe=!!v.alphaHash,ne=!!v.extensions;let L=Pi;v.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(L=r.toneMapping);const j={shaderID:le,shaderType:v.type,shaderName:v.name,vertexShader:Ue,fragmentShader:W,defines:v.defines,customVertexShaderID:ie,customFragmentShaderID:me,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:Be,batchingColor:Be&&I._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&I.instanceColor!==null,instancingMorph:Fe&&I.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ue===null?r.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Or,alphaToCoverage:!!v.alphaToCoverage,map:nt,matcap:Xe,envMap:mt,envMapMode:mt&&K.mapping,envMapCubeUVHeight:H,aoMap:D,lightMap:Ve,bumpMap:$e,normalMap:Oe,displacementMap:d&&Ee,emissiveMap:ut,normalMapObjectSpace:Oe&&v.normalMapType===Ap,normalMapTangentSpace:Oe&&v.normalMapType===wp,metalnessMap:Pe,roughnessMap:R,anisotropy:x,anisotropyMap:he,clearcoat:V,clearcoatMap:Me,clearcoatNormalMap:Ke,clearcoatRoughnessMap:se,dispersion:J,iridescence:te,iridescenceMap:Te,iridescenceThicknessMap:De,sheen:Z,sheenColorMap:Ne,sheenRoughnessMap:ye,specularMap:qe,specularColorMap:He,specularIntensityMap:it,transmission:Ae,transmissionMap:U,thicknessMap:ce,gradientMap:Y,opaque:v.transparent===!1&&v.blending===Pr&&v.alphaToCoverage===!1,alphaMap:Q,alphaTest:_e,alphaHash:pe,combine:v.combine,mapUv:nt&&_(v.map.channel),aoMapUv:D&&_(v.aoMap.channel),lightMapUv:Ve&&_(v.lightMap.channel),bumpMapUv:$e&&_(v.bumpMap.channel),normalMapUv:Oe&&_(v.normalMap.channel),displacementMapUv:Ee&&_(v.displacementMap.channel),emissiveMapUv:ut&&_(v.emissiveMap.channel),metalnessMapUv:Pe&&_(v.metalnessMap.channel),roughnessMapUv:R&&_(v.roughnessMap.channel),anisotropyMapUv:he&&_(v.anisotropyMap.channel),clearcoatMapUv:Me&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:Ke&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:De&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(v.sheenRoughnessMap.channel),specularMapUv:qe&&_(v.specularMap.channel),specularColorMapUv:He&&_(v.specularColorMap.channel),specularIntensityMapUv:it&&_(v.specularIntensityMap.channel),transmissionMapUv:U&&_(v.transmissionMap.channel),thicknessMapUv:ce&&_(v.thicknessMap.channel),alphaMapUv:Q&&_(v.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Oe||x),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!$.attributes.uv&&(nt||Q),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Se,skinning:I.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:ve,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:L,decodeVideoTexture:nt&&v.map.isVideoTexture===!0&&tt.getTransfer(v.map.colorSpace)===ft,decodeVideoTextureEmissive:ut&&v.emissiveMap.isVideoTexture===!0&&tt.getTransfer(v.emissiveMap.colorSpace)===ft,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===li,flipSided:v.side===tn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ne&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&v.extensions.multiDraw===!0||Be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return j.vertexUv1s=c.has(1),j.vertexUv2s=c.has(2),j.vertexUv3s=c.has(3),c.clear(),j}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)S.push(P),S.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(T(S,v),E(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function T(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function E(v,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),v.push(a.mask)}function y(v){const S=g[v.type];let P;if(S){const z=Jn[S];P=rm.clone(z.uniforms)}else P=v.uniforms;return P}function w(v,S){let P;for(let z=0,I=f.length;z<I;z++){const k=f[z];if(k.cacheKey===S){P=k,++P.usedTimes;break}}return P===void 0&&(P=new qv(r,S,v,s),f.push(P)),P}function A(v){if(--v.usedTimes===0){const S=f.indexOf(v);f[S]=f[f.length-1],f.pop(),v.destroy()}}function b(v){l.remove(v)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:y,acquireProgram:w,releaseProgram:A,releaseShaderCache:b,programs:f,dispose:C}}function Jv(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Qv(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function kf(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Vf(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,u,g,_,m){let p=r[e];return p===void 0?(p={id:h.id,object:h,geometry:d,material:u,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},r[e]=p):(p.id=h.id,p.object=h,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),e++,p}function a(h,d,u,g,_,m){const p=o(h,d,u,g,_,m);u.transmission>0?n.push(p):u.transparent===!0?i.push(p):t.push(p)}function l(h,d,u,g,_,m){const p=o(h,d,u,g,_,m);u.transmission>0?n.unshift(p):u.transparent===!0?i.unshift(p):t.unshift(p)}function c(h,d){t.length>1&&t.sort(h||Qv),n.length>1&&n.sort(d||kf),i.length>1&&i.sort(d||kf)}function f(){for(let h=e,d=r.length;h<d;h++){const u=r[h];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:f,sort:c}}function e0(){let r=new WeakMap;function e(n,i){const s=r.get(n);let o;return s===void 0?(o=new Vf,r.set(n,[o])):i>=s.length?(o=new Vf,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function t0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new ht};break;case"SpotLight":t={position:new q,direction:new q,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new q,halfWidth:new q,halfHeight:new q};break}return r[e.id]=t,t}}}function n0(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new at,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let i0=0;function r0(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function s0(r){const e=new t0,t=n0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new q);const i=new q,s=new Ct,o=new Ct;function a(c){let f=0,h=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,T=0,E=0,y=0,w=0,A=0,b=0;c.sort(r0);for(let v=0,S=c.length;v<S;v++){const P=c[v],z=P.color,I=P.intensity,k=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=z.r*I,h+=z.g*I,d+=z.b*I;else if(P.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(P.sh.coefficients[B],I);b++}else if(P.isDirectionalLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.directionalShadow[u]=H,n.directionalShadowMap[u]=$,n.directionalShadowMatrix[u]=P.shadow.matrix,T++}n.directional[u]=B,u++}else if(P.isSpotLight){const B=e.get(P);B.position.setFromMatrixPosition(P.matrixWorld),B.color.copy(z).multiplyScalar(I),B.distance=k,B.coneCos=Math.cos(P.angle),B.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),B.decay=P.decay,n.spot[_]=B;const K=P.shadow;if(P.map&&(n.spotLightMap[w]=P.map,w++,K.updateMatrices(P),P.castShadow&&A++),n.spotLightMatrix[_]=K.matrix,P.castShadow){const H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,n.spotShadow[_]=H,n.spotShadowMap[_]=$,y++}_++}else if(P.isRectAreaLight){const B=e.get(P);B.color.copy(z).multiplyScalar(I),B.halfWidth.set(P.width*.5,0,0),B.halfHeight.set(0,P.height*.5,0),n.rectArea[m]=B,m++}else if(P.isPointLight){const B=e.get(P);if(B.color.copy(P.color).multiplyScalar(P.intensity),B.distance=P.distance,B.decay=P.decay,P.castShadow){const K=P.shadow,H=t.get(P);H.shadowIntensity=K.intensity,H.shadowBias=K.bias,H.shadowNormalBias=K.normalBias,H.shadowRadius=K.radius,H.shadowMapSize=K.mapSize,H.shadowCameraNear=K.camera.near,H.shadowCameraFar=K.camera.far,n.pointShadow[g]=H,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=P.shadow.matrix,E++}n.point[g]=B,g++}else if(P.isHemisphereLight){const B=e.get(P);B.skyColor.copy(P.color).multiplyScalar(I),B.groundColor.copy(P.groundColor).multiplyScalar(I),n.hemi[p]=B,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==T||C.numPointShadows!==E||C.numSpotShadows!==y||C.numSpotMaps!==w||C.numLightProbes!==b)&&(n.directional.length=u,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=y+w-A,n.spotLightMap.length=w,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=b,C.directionalLength=u,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=T,C.numPointShadows=E,C.numSpotShadows=y,C.numSpotMaps=w,C.numLightProbes=b,n.version=i0++)}function l(c,f){let h=0,d=0,u=0,g=0,_=0;const m=f.matrixWorldInverse;for(let p=0,T=c.length;p<T;p++){const E=c[p];if(E.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),h++}else if(E.isSpotLight){const y=n.spot[u];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(m),u++}else if(E.isRectAreaLight){const y=n.rectArea[g];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(E.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(E.width*.5,0,0),y.halfHeight.set(0,E.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(E.isPointLight){const y=n.point[d];y.position.setFromMatrixPosition(E.matrixWorld),y.position.applyMatrix4(m),d++}else if(E.isHemisphereLight){const y=n.hemi[_];y.direction.setFromMatrixPosition(E.matrixWorld),y.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Hf(r){const e=new s0(r),t=[],n=[];function i(f){c.camera=f,t.length=0,n.length=0}function s(f){t.push(f)}function o(f){n.push(f)}function a(){e.setup(t)}function l(f){e.setupView(t,f)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function o0(r){let e=new WeakMap;function t(i,s=0){const o=e.get(i);let a;return o===void 0?(a=new Hf(r),e.set(i,[a])):s>=o.length?(a=new Hf(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}const a0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,l0=`uniform sampler2D shadow_pass;
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
}`;function c0(r,e,t){let n=new cf;const i=new at,s=new at,o=new bt,a=new dm({depthPacking:bp}),l=new pm,c={},f=t.maxTextureSize,h={[Ci]:tn,[tn]:Ci,[li]:li},d=new xi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new at},radius:{value:4}},vertexShader:a0,fragmentShader:l0}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new Zn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new jn(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pu;let p=this.type;this.render=function(A,b,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const v=r.getRenderTarget(),S=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),z=r.state;z.setBlending(Ri),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const I=p!==ai&&this.type===ai,k=p===ai&&this.type!==ai;for(let $=0,B=A.length;$<B;$++){const K=A[$],H=K.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const le=H.getFrameExtents();if(i.multiply(le),s.copy(H.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/le.x),i.x=s.x*le.x,H.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/le.y),i.y=s.y*le.y,H.mapSize.y=s.y)),H.map===null||I===!0||k===!0){const ae=this.type!==ai?{minFilter:Fn,magFilter:Fn}:{};H.map!==null&&H.map.dispose(),H.map=new tr(i.x,i.y,ae),H.map.texture.name=K.name+".shadowMap",H.camera.updateProjectionMatrix()}r.setRenderTarget(H.map),r.clear();const de=H.getViewportCount();for(let ae=0;ae<de;ae++){const ve=H.getViewport(ae);o.set(s.x*ve.x,s.y*ve.y,s.x*ve.z,s.y*ve.w),z.viewport(o),H.updateMatrices(K,ae),n=H.getFrustum(),y(b,C,H.camera,K,this.type)}H.isPointLightShadow!==!0&&this.type===ai&&T(H,C),H.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,P)};function T(A,b){const C=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,u.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new tr(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(b,null,C,d,_,null),u.uniforms.shadow_pass.value=A.mapPass.texture,u.uniforms.resolution.value=A.mapSize,u.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(b,null,C,u,_,null)}function E(A,b,C,v){let S=null;const P=C.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?l:a,r.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const z=S.uuid,I=b.uuid;let k=c[z];k===void 0&&(k={},c[z]=k);let $=k[I];$===void 0&&($=S.clone(),k[I]=$,b.addEventListener("dispose",w)),S=$}if(S.visible=b.visible,S.wireframe=b.wireframe,v===ai?S.side=b.shadowSide!==null?b.shadowSide:b.side:S.side=b.shadowSide!==null?b.shadowSide:h[b.side],S.alphaMap=b.alphaMap,S.alphaTest=b.alphaTest,S.map=b.map,S.clipShadows=b.clipShadows,S.clippingPlanes=b.clippingPlanes,S.clipIntersection=b.clipIntersection,S.displacementMap=b.displacementMap,S.displacementScale=b.displacementScale,S.displacementBias=b.displacementBias,S.wireframeLinewidth=b.wireframeLinewidth,S.linewidth=b.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const z=r.properties.get(S);z.light=C}return S}function y(A,b,C,v,S){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===ai)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,A.matrixWorld);const I=e.update(A),k=A.material;if(Array.isArray(k)){const $=I.groups;for(let B=0,K=$.length;B<K;B++){const H=$[B],le=k[H.materialIndex];if(le&&le.visible){const de=E(A,le,v,S);A.onBeforeShadow(r,A,b,C,I,de,H),r.renderBufferDirect(C,null,I,de,A,H),A.onAfterShadow(r,A,b,C,I,de,H)}}}else if(k.visible){const $=E(A,k,v,S);A.onBeforeShadow(r,A,b,C,I,$,null),r.renderBufferDirect(C,null,I,$,A,null),A.onAfterShadow(r,A,b,C,I,$,null)}}const z=A.children;for(let I=0,k=z.length;I<k;I++)y(z[I],b,C,v,S)}function w(A){A.target.removeEventListener("dispose",w);for(const C in c){const v=c[C],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const u0={[Ua]:Fa,[Na]:za,[Oa]:ka,[Dr]:Ba,[Fa]:Ua,[za]:Na,[ka]:Oa,[Ba]:Dr};function f0(r,e){function t(){let U=!1;const ce=new bt;let Y=null;const Q=new bt(0,0,0,0);return{setMask:function(_e){Y!==_e&&!U&&(r.colorMask(_e,_e,_e,_e),Y=_e)},setLocked:function(_e){U=_e},setClear:function(_e,pe,ne,L,j){j===!0&&(_e*=L,pe*=L,ne*=L),ce.set(_e,pe,ne,L),Q.equals(ce)===!1&&(r.clearColor(_e,pe,ne,L),Q.copy(ce))},reset:function(){U=!1,Y=null,Q.set(-1,0,0,0)}}}function n(){let U=!1,ce=!1,Y=null,Q=null,_e=null;return{setReversed:function(pe){if(ce!==pe){const ne=e.get("EXT_clip_control");ce?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT);const L=_e;_e=null,this.setClear(L)}ce=pe},getReversed:function(){return ce},setTest:function(pe){pe?ue(r.DEPTH_TEST):Se(r.DEPTH_TEST)},setMask:function(pe){Y!==pe&&!U&&(r.depthMask(pe),Y=pe)},setFunc:function(pe){if(ce&&(pe=u0[pe]),Q!==pe){switch(pe){case Ua:r.depthFunc(r.NEVER);break;case Fa:r.depthFunc(r.ALWAYS);break;case Na:r.depthFunc(r.LESS);break;case Dr:r.depthFunc(r.LEQUAL);break;case Oa:r.depthFunc(r.EQUAL);break;case Ba:r.depthFunc(r.GEQUAL);break;case za:r.depthFunc(r.GREATER);break;case ka:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Q=pe}},setLocked:function(pe){U=pe},setClear:function(pe){_e!==pe&&(ce&&(pe=1-pe),r.clearDepth(pe),_e=pe)},reset:function(){U=!1,Y=null,Q=null,_e=null,ce=!1}}}function i(){let U=!1,ce=null,Y=null,Q=null,_e=null,pe=null,ne=null,L=null,j=null;return{setTest:function(O){U||(O?ue(r.STENCIL_TEST):Se(r.STENCIL_TEST))},setMask:function(O){ce!==O&&!U&&(r.stencilMask(O),ce=O)},setFunc:function(O,ee,oe){(Y!==O||Q!==ee||_e!==oe)&&(r.stencilFunc(O,ee,oe),Y=O,Q=ee,_e=oe)},setOp:function(O,ee,oe){(pe!==O||ne!==ee||L!==oe)&&(r.stencilOp(O,ee,oe),pe=O,ne=ee,L=oe)},setLocked:function(O){U=O},setClear:function(O){j!==O&&(r.clearStencil(O),j=O)},reset:function(){U=!1,ce=null,Y=null,Q=null,_e=null,pe=null,ne=null,L=null,j=null}}}const s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let f={},h={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,w=null,A=null,b=new ht(0,0,0),C=0,v=!1,S=null,P=null,z=null,I=null,k=null;const $=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let B=!1,K=0;const H=r.getParameter(r.VERSION);H.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(H)[1]),B=K>=1):H.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),B=K>=2);let le=null,de={};const ae=r.getParameter(r.SCISSOR_BOX),ve=r.getParameter(r.VIEWPORT),Ue=new bt().fromArray(ae),W=new bt().fromArray(ve);function ie(U,ce,Y,Q){const _e=new Uint8Array(4),pe=r.createTexture();r.bindTexture(U,pe),r.texParameteri(U,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(U,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ne=0;ne<Y;ne++)U===r.TEXTURE_3D||U===r.TEXTURE_2D_ARRAY?r.texImage3D(ce,0,r.RGBA,1,1,Q,0,r.RGBA,r.UNSIGNED_BYTE,_e):r.texImage2D(ce+ne,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,_e);return pe}const me={};me[r.TEXTURE_2D]=ie(r.TEXTURE_2D,r.TEXTURE_2D,1),me[r.TEXTURE_CUBE_MAP]=ie(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),me[r.TEXTURE_2D_ARRAY]=ie(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),me[r.TEXTURE_3D]=ie(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ue(r.DEPTH_TEST),o.setFunc(Dr),$e(!1),Oe(du),ue(r.CULL_FACE),D(Ri);function ue(U){f[U]!==!0&&(r.enable(U),f[U]=!0)}function Se(U){f[U]!==!1&&(r.disable(U),f[U]=!1)}function Fe(U,ce){return h[U]!==ce?(r.bindFramebuffer(U,ce),h[U]=ce,U===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ce),U===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ce),!0):!1}function Be(U,ce){let Y=u,Q=!1;if(U){Y=d.get(ce),Y===void 0&&(Y=[],d.set(ce,Y));const _e=U.textures;if(Y.length!==_e.length||Y[0]!==r.COLOR_ATTACHMENT0){for(let pe=0,ne=_e.length;pe<ne;pe++)Y[pe]=r.COLOR_ATTACHMENT0+pe;Y.length=_e.length,Q=!0}}else Y[0]!==r.BACK&&(Y[0]=r.BACK,Q=!0);Q&&r.drawBuffers(Y)}function nt(U){return g!==U?(r.useProgram(U),g=U,!0):!1}const Xe={[Ji]:r.FUNC_ADD,[jd]:r.FUNC_SUBTRACT,[Jd]:r.FUNC_REVERSE_SUBTRACT};Xe[Qd]=r.MIN,Xe[ep]=r.MAX;const mt={[tp]:r.ZERO,[np]:r.ONE,[ip]:r.SRC_COLOR,[La]:r.SRC_ALPHA,[cp]:r.SRC_ALPHA_SATURATE,[ap]:r.DST_COLOR,[sp]:r.DST_ALPHA,[rp]:r.ONE_MINUS_SRC_COLOR,[Ia]:r.ONE_MINUS_SRC_ALPHA,[lp]:r.ONE_MINUS_DST_COLOR,[op]:r.ONE_MINUS_DST_ALPHA,[up]:r.CONSTANT_COLOR,[fp]:r.ONE_MINUS_CONSTANT_COLOR,[hp]:r.CONSTANT_ALPHA,[dp]:r.ONE_MINUS_CONSTANT_ALPHA};function D(U,ce,Y,Q,_e,pe,ne,L,j,O){if(U===Ri){_===!0&&(Se(r.BLEND),_=!1);return}if(_===!1&&(ue(r.BLEND),_=!0),U!==Zd){if(U!==m||O!==v){if((p!==Ji||y!==Ji)&&(r.blendEquation(r.FUNC_ADD),p=Ji,y=Ji),O)switch(U){case Pr:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mu:r.blendFunc(r.ONE,r.ONE);break;case _u:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gu:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Pr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case mu:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case _u:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case gu:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}T=null,E=null,w=null,A=null,b.set(0,0,0),C=0,m=U,v=O}return}_e=_e||ce,pe=pe||Y,ne=ne||Q,(ce!==p||_e!==y)&&(r.blendEquationSeparate(Xe[ce],Xe[_e]),p=ce,y=_e),(Y!==T||Q!==E||pe!==w||ne!==A)&&(r.blendFuncSeparate(mt[Y],mt[Q],mt[pe],mt[ne]),T=Y,E=Q,w=pe,A=ne),(L.equals(b)===!1||j!==C)&&(r.blendColor(L.r,L.g,L.b,j),b.copy(L),C=j),m=U,v=!1}function Ve(U,ce){U.side===li?Se(r.CULL_FACE):ue(r.CULL_FACE);let Y=U.side===tn;ce&&(Y=!Y),$e(Y),U.blending===Pr&&U.transparent===!1?D(Ri):D(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),o.setFunc(U.depthFunc),o.setTest(U.depthTest),o.setMask(U.depthWrite),s.setMask(U.colorWrite);const Q=U.stencilWrite;a.setTest(Q),Q&&(a.setMask(U.stencilWriteMask),a.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),a.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ut(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?ue(r.SAMPLE_ALPHA_TO_COVERAGE):Se(r.SAMPLE_ALPHA_TO_COVERAGE)}function $e(U){S!==U&&(U?r.frontFace(r.CW):r.frontFace(r.CCW),S=U)}function Oe(U){U!==qd?(ue(r.CULL_FACE),U!==P&&(U===du?r.cullFace(r.BACK):U===$d?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Se(r.CULL_FACE),P=U}function Ee(U){U!==z&&(B&&r.lineWidth(U),z=U)}function ut(U,ce,Y){U?(ue(r.POLYGON_OFFSET_FILL),(I!==ce||k!==Y)&&(r.polygonOffset(ce,Y),I=ce,k=Y)):Se(r.POLYGON_OFFSET_FILL)}function Pe(U){U?ue(r.SCISSOR_TEST):Se(r.SCISSOR_TEST)}function R(U){U===void 0&&(U=r.TEXTURE0+$-1),le!==U&&(r.activeTexture(U),le=U)}function x(U,ce,Y){Y===void 0&&(le===null?Y=r.TEXTURE0+$-1:Y=le);let Q=de[Y];Q===void 0&&(Q={type:void 0,texture:void 0},de[Y]=Q),(Q.type!==U||Q.texture!==ce)&&(le!==Y&&(r.activeTexture(Y),le=Y),r.bindTexture(U,ce||me[U]),Q.type=U,Q.texture=ce)}function V(){const U=de[le];U!==void 0&&U.type!==void 0&&(r.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function J(){try{r.compressedTexImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{r.compressedTexImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{r.texSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{r.texSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function he(){try{r.compressedTexSubImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Me(){try{r.compressedTexSubImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ke(){try{r.texStorage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function se(){try{r.texStorage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Te(){try{r.texImage2D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function De(){try{r.texImage3D.apply(r,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ne(U){Ue.equals(U)===!1&&(r.scissor(U.x,U.y,U.z,U.w),Ue.copy(U))}function ye(U){W.equals(U)===!1&&(r.viewport(U.x,U.y,U.z,U.w),W.copy(U))}function qe(U,ce){let Y=c.get(ce);Y===void 0&&(Y=new WeakMap,c.set(ce,Y));let Q=Y.get(U);Q===void 0&&(Q=r.getUniformBlockIndex(ce,U.name),Y.set(U,Q))}function He(U,ce){const Q=c.get(ce).get(U);l.get(ce)!==Q&&(r.uniformBlockBinding(ce,Q,U.__bindingPointIndex),l.set(ce,Q))}function it(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),f={},le=null,de={},h={},d=new WeakMap,u=[],g=null,_=!1,m=null,p=null,T=null,E=null,y=null,w=null,A=null,b=new ht(0,0,0),C=0,v=!1,S=null,P=null,z=null,I=null,k=null,Ue.set(0,0,r.canvas.width,r.canvas.height),W.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ue,disable:Se,bindFramebuffer:Fe,drawBuffers:Be,useProgram:nt,setBlending:D,setMaterial:Ve,setFlipSided:$e,setCullFace:Oe,setLineWidth:Ee,setPolygonOffset:ut,setScissorTest:Pe,activeTexture:R,bindTexture:x,unbindTexture:V,compressedTexImage2D:J,compressedTexImage3D:te,texImage2D:Te,texImage3D:De,updateUBOMapping:qe,uniformBlockBinding:He,texStorage2D:Ke,texStorage3D:se,texSubImage2D:Z,texSubImage3D:Ae,compressedTexSubImage2D:he,compressedTexSubImage3D:Me,scissor:Ne,viewport:ye,reset:it}}function h0(r,e,t,n,i,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new at,f=new WeakMap;let h;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,x){return u?new OffscreenCanvas(R,x):Ds("canvas")}function _(R,x,V){let J=1;const te=Pe(R);if((te.width>V||te.height>V)&&(J=V/Math.max(te.width,te.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Z=Math.floor(J*te.width),Ae=Math.floor(J*te.height);h===void 0&&(h=g(Z,Ae));const he=x?g(Z,Ae):h;return he.width=Z,he.height=Ae,he.getContext("2d").drawImage(R,0,0,Z,Ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+Z+"x"+Ae+")."),he}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function E(R,x,V,J,te=!1){if(R!==null){if(r[R]!==void 0)return r[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=x;if(x===r.RED&&(V===r.FLOAT&&(Z=r.R32F),V===r.HALF_FLOAT&&(Z=r.R16F),V===r.UNSIGNED_BYTE&&(Z=r.R8)),x===r.RED_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.R8UI),V===r.UNSIGNED_SHORT&&(Z=r.R16UI),V===r.UNSIGNED_INT&&(Z=r.R32UI),V===r.BYTE&&(Z=r.R8I),V===r.SHORT&&(Z=r.R16I),V===r.INT&&(Z=r.R32I)),x===r.RG&&(V===r.FLOAT&&(Z=r.RG32F),V===r.HALF_FLOAT&&(Z=r.RG16F),V===r.UNSIGNED_BYTE&&(Z=r.RG8)),x===r.RG_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RG8UI),V===r.UNSIGNED_SHORT&&(Z=r.RG16UI),V===r.UNSIGNED_INT&&(Z=r.RG32UI),V===r.BYTE&&(Z=r.RG8I),V===r.SHORT&&(Z=r.RG16I),V===r.INT&&(Z=r.RG32I)),x===r.RGB_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),V===r.UNSIGNED_INT&&(Z=r.RGB32UI),V===r.BYTE&&(Z=r.RGB8I),V===r.SHORT&&(Z=r.RGB16I),V===r.INT&&(Z=r.RGB32I)),x===r.RGBA_INTEGER&&(V===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),V===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),V===r.UNSIGNED_INT&&(Z=r.RGBA32UI),V===r.BYTE&&(Z=r.RGBA8I),V===r.SHORT&&(Z=r.RGBA16I),V===r.INT&&(Z=r.RGBA32I)),x===r.RGB&&V===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),x===r.RGBA){const Ae=te?Ao:tt.getTransfer(J);V===r.FLOAT&&(Z=r.RGBA32F),V===r.HALF_FLOAT&&(Z=r.RGBA16F),V===r.UNSIGNED_BYTE&&(Z=Ae===ft?r.SRGB8_ALPHA8:r.RGBA8),V===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),V===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function y(R,x){let V;return R?x===null||x===er||x===Ur?V=r.DEPTH24_STENCIL8:x===ui?V=r.DEPTH32F_STENCIL8:x===As&&(V=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===er||x===Ur?V=r.DEPTH_COMPONENT24:x===ui?V=r.DEPTH_COMPONENT32F:x===As&&(V=r.DEPTH_COMPONENT16),V}function w(R,x){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Fn&&R.minFilter!==nn?Math.log2(Math.max(x.width,x.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?x.mipmaps.length:1}function A(R){const x=R.target;x.removeEventListener("dispose",A),C(x),x.isVideoTexture&&f.delete(x)}function b(R){const x=R.target;x.removeEventListener("dispose",b),S(x)}function C(R){const x=n.get(R);if(x.__webglInit===void 0)return;const V=R.source,J=d.get(V);if(J){const te=J[x.__cacheKey];te.usedTimes--,te.usedTimes===0&&v(R),Object.keys(J).length===0&&d.delete(V)}n.remove(R)}function v(R){const x=n.get(R);r.deleteTexture(x.__webglTexture);const V=R.source,J=d.get(V);delete J[x.__cacheKey],o.memory.textures--}function S(R){const x=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let te=0;te<x.__webglFramebuffer[J].length;te++)r.deleteFramebuffer(x.__webglFramebuffer[J][te]);else r.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)r.deleteFramebuffer(x.__webglFramebuffer[J]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const V=R.textures;for(let J=0,te=V.length;J<te;J++){const Z=n.get(V[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(V[J])}n.remove(R)}let P=0;function z(){P=0}function I(){const R=P;return R>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function k(R){const x=[];return x.push(R.wrapS),x.push(R.wrapT),x.push(R.wrapR||0),x.push(R.magFilter),x.push(R.minFilter),x.push(R.anisotropy),x.push(R.internalFormat),x.push(R.format),x.push(R.type),x.push(R.generateMipmaps),x.push(R.premultiplyAlpha),x.push(R.flipY),x.push(R.unpackAlignment),x.push(R.colorSpace),x.join()}function $(R,x){const V=n.get(R);if(R.isVideoTexture&&Ee(R),R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){const J=R.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(V,R,x);return}}t.bindTexture(r.TEXTURE_2D,V.__webglTexture,r.TEXTURE0+x)}function B(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){W(V,R,x);return}t.bindTexture(r.TEXTURE_2D_ARRAY,V.__webglTexture,r.TEXTURE0+x)}function K(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){W(V,R,x);return}t.bindTexture(r.TEXTURE_3D,V.__webglTexture,r.TEXTURE0+x)}function H(R,x){const V=n.get(R);if(R.version>0&&V.__version!==R.version){ie(V,R,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,V.__webglTexture,r.TEXTURE0+x)}const le={[xo]:r.REPEAT,[Kn]:r.CLAMP_TO_EDGE,[yo]:r.MIRRORED_REPEAT},de={[Fn]:r.NEAREST,[Ep]:r.NEAREST_MIPMAP_NEAREST,[So]:r.NEAREST_MIPMAP_LINEAR,[nn]:r.LINEAR,[Ga]:r.LINEAR_MIPMAP_NEAREST,[Qi]:r.LINEAR_MIPMAP_LINEAR},ae={[Cp]:r.NEVER,[Up]:r.ALWAYS,[Rp]:r.LESS,[Du]:r.LEQUAL,[Pp]:r.EQUAL,[Ip]:r.GEQUAL,[Dp]:r.GREATER,[Lp]:r.NOTEQUAL};function ve(R,x){if(x.type===ui&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===nn||x.magFilter===Ga||x.magFilter===So||x.magFilter===Qi||x.minFilter===nn||x.minFilter===Ga||x.minFilter===So||x.minFilter===Qi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,le[x.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,le[x.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,le[x.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,de[x.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,de[x.minFilter]),x.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,ae[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===Fn||x.minFilter!==So&&x.minFilter!==Qi||x.type===ui&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const V=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Ue(R,x){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,x.addEventListener("dispose",A));const J=x.source;let te=d.get(J);te===void 0&&(te={},d.set(J,te));const Z=k(x);if(Z!==R.__cacheKey){te[Z]===void 0&&(te[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,V=!0),te[Z].usedTimes++;const Ae=te[R.__cacheKey];Ae!==void 0&&(te[R.__cacheKey].usedTimes--,Ae.usedTimes===0&&v(x)),R.__cacheKey=Z,R.__webglTexture=te[Z].texture}return V}function W(R,x,V){let J=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(J=r.TEXTURE_3D);const te=Ue(R,x),Z=x.source;t.bindTexture(J,R.__webglTexture,r.TEXTURE0+V);const Ae=n.get(Z);if(Z.version!==Ae.__version||te===!0){t.activeTexture(r.TEXTURE0+V);const he=tt.getPrimaries(tt.workingColorSpace),Me=x.colorSpace===Di?null:tt.getPrimaries(x.colorSpace),Ke=x.colorSpace===Di||he===Me?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke);let se=_(x.image,!1,i.maxTextureSize);se=ut(x,se);const Te=s.convert(x.format,x.colorSpace),De=s.convert(x.type);let Ne=E(x.internalFormat,Te,De,x.colorSpace,x.isVideoTexture);ve(J,x);let ye;const qe=x.mipmaps,He=x.isVideoTexture!==!0,it=Ae.__version===void 0||te===!0,U=Z.dataReady,ce=w(x,se);if(x.isDepthTexture)Ne=y(x.format===Nr,x.type),it&&(He?t.texStorage2D(r.TEXTURE_2D,1,Ne,se.width,se.height):t.texImage2D(r.TEXTURE_2D,0,Ne,se.width,se.height,0,Te,De,null));else if(x.isDataTexture)if(qe.length>0){He&&it&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,qe[0].width,qe[0].height);for(let Y=0,Q=qe.length;Y<Q;Y++)ye=qe[Y],He?U&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ye.width,ye.height,Te,De,ye.data):t.texImage2D(r.TEXTURE_2D,Y,Ne,ye.width,ye.height,0,Te,De,ye.data);x.generateMipmaps=!1}else He?(it&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,se.width,se.height),U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,se.width,se.height,Te,De,se.data)):t.texImage2D(r.TEXTURE_2D,0,Ne,se.width,se.height,0,Te,De,se.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){He&&it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,qe[0].width,qe[0].height,se.depth);for(let Y=0,Q=qe.length;Y<Q;Y++)if(ye=qe[Y],x.format!==En)if(Te!==null)if(He){if(U)if(x.layerUpdates.size>0){const _e=df(ye.width,ye.height,x.format,x.type);for(const pe of x.layerUpdates){const ne=ye.data.subarray(pe*_e/ye.data.BYTES_PER_ELEMENT,(pe+1)*_e/ye.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,pe,ye.width,ye.height,1,Te,ne)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,Te,ye.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,Y,Ne,ye.width,ye.height,se.depth,0,ye.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else He?U&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,Y,0,0,0,ye.width,ye.height,se.depth,Te,De,ye.data):t.texImage3D(r.TEXTURE_2D_ARRAY,Y,Ne,ye.width,ye.height,se.depth,0,Te,De,ye.data)}else{He&&it&&t.texStorage2D(r.TEXTURE_2D,ce,Ne,qe[0].width,qe[0].height);for(let Y=0,Q=qe.length;Y<Q;Y++)ye=qe[Y],x.format!==En?Te!==null?He?U&&t.compressedTexSubImage2D(r.TEXTURE_2D,Y,0,0,ye.width,ye.height,Te,ye.data):t.compressedTexImage2D(r.TEXTURE_2D,Y,Ne,ye.width,ye.height,0,ye.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):He?U&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,ye.width,ye.height,Te,De,ye.data):t.texImage2D(r.TEXTURE_2D,Y,Ne,ye.width,ye.height,0,Te,De,ye.data)}else if(x.isDataArrayTexture)if(He){if(it&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ce,Ne,se.width,se.height,se.depth),U)if(x.layerUpdates.size>0){const Y=df(se.width,se.height,x.format,x.type);for(const Q of x.layerUpdates){const _e=se.data.subarray(Q*Y/se.data.BYTES_PER_ELEMENT,(Q+1)*Y/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,se.width,se.height,1,Te,De,_e)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Te,De,se.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,se.width,se.height,se.depth,0,Te,De,se.data);else if(x.isData3DTexture)He?(it&&t.texStorage3D(r.TEXTURE_3D,ce,Ne,se.width,se.height,se.depth),U&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Te,De,se.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,se.width,se.height,se.depth,0,Te,De,se.data);else if(x.isFramebufferTexture){if(it)if(He)t.texStorage2D(r.TEXTURE_2D,ce,Ne,se.width,se.height);else{let Y=se.width,Q=se.height;for(let _e=0;_e<ce;_e++)t.texImage2D(r.TEXTURE_2D,_e,Ne,Y,Q,0,Te,De,null),Y>>=1,Q>>=1}}else if(qe.length>0){if(He&&it){const Y=Pe(qe[0]);t.texStorage2D(r.TEXTURE_2D,ce,Ne,Y.width,Y.height)}for(let Y=0,Q=qe.length;Y<Q;Y++)ye=qe[Y],He?U&&t.texSubImage2D(r.TEXTURE_2D,Y,0,0,Te,De,ye):t.texImage2D(r.TEXTURE_2D,Y,Ne,Te,De,ye);x.generateMipmaps=!1}else if(He){if(it){const Y=Pe(se);t.texStorage2D(r.TEXTURE_2D,ce,Ne,Y.width,Y.height)}U&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Te,De,se)}else t.texImage2D(r.TEXTURE_2D,0,Ne,Te,De,se);m(x)&&p(J),Ae.__version=Z.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function ie(R,x,V){if(x.image.length!==6)return;const J=Ue(R,x),te=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+V);const Z=n.get(te);if(te.version!==Z.__version||J===!0){t.activeTexture(r.TEXTURE0+V);const Ae=tt.getPrimaries(tt.workingColorSpace),he=x.colorSpace===Di?null:tt.getPrimaries(x.colorSpace),Me=x.colorSpace===Di||Ae===he?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const Ke=x.isCompressedTexture||x.image[0].isCompressedTexture,se=x.image[0]&&x.image[0].isDataTexture,Te=[];for(let Q=0;Q<6;Q++)!Ke&&!se?Te[Q]=_(x.image[Q],!0,i.maxCubemapSize):Te[Q]=se?x.image[Q].image:x.image[Q],Te[Q]=ut(x,Te[Q]);const De=Te[0],Ne=s.convert(x.format,x.colorSpace),ye=s.convert(x.type),qe=E(x.internalFormat,Ne,ye,x.colorSpace),He=x.isVideoTexture!==!0,it=Z.__version===void 0||J===!0,U=te.dataReady;let ce=w(x,De);ve(r.TEXTURE_CUBE_MAP,x);let Y;if(Ke){He&&it&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,qe,De.width,De.height);for(let Q=0;Q<6;Q++){Y=Te[Q].mipmaps;for(let _e=0;_e<Y.length;_e++){const pe=Y[_e];x.format!==En?Ne!==null?He?U&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,pe.width,pe.height,Ne,pe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,qe,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,0,0,pe.width,pe.height,Ne,ye,pe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e,qe,pe.width,pe.height,0,Ne,ye,pe.data)}}}else{if(Y=x.mipmaps,He&&it){Y.length>0&&ce++;const Q=Pe(Te[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ce,qe,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(se){He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Te[Q].width,Te[Q].height,Ne,ye,Te[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Te[Q].width,Te[Q].height,0,Ne,ye,Te[Q].data);for(let _e=0;_e<Y.length;_e++){const ne=Y[_e].image[Q].image;He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,ne.width,ne.height,Ne,ye,ne.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,qe,ne.width,ne.height,0,Ne,ye,ne.data)}}else{He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ne,ye,Te[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,qe,Ne,ye,Te[Q]);for(let _e=0;_e<Y.length;_e++){const pe=Y[_e];He?U&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,0,0,Ne,ye,pe.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,_e+1,qe,Ne,ye,pe.image[Q])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),Z.__version=te.version,x.onUpdate&&x.onUpdate(x)}R.__version=x.version}function me(R,x,V,J,te,Z){const Ae=s.convert(V.format,V.colorSpace),he=s.convert(V.type),Me=E(V.internalFormat,Ae,he,V.colorSpace),Ke=n.get(x),se=n.get(V);if(se.__renderTarget=x,!Ke.__hasExternalTextures){const Te=Math.max(1,x.width>>Z),De=Math.max(1,x.height>>Z);te===r.TEXTURE_3D||te===r.TEXTURE_2D_ARRAY?t.texImage3D(te,Z,Me,Te,De,x.depth,0,Ae,he,null):t.texImage2D(te,Z,Me,Te,De,0,Ae,he,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Oe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,te,se.__webglTexture,0,$e(x)):(te===r.TEXTURE_2D||te>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,te,se.__webglTexture,Z),t.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(R,x,V){if(r.bindRenderbuffer(r.RENDERBUFFER,R),x.depthBuffer){const J=x.depthTexture,te=J&&J.isDepthTexture?J.type:null,Z=y(x.stencilBuffer,te),Ae=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,he=$e(x);Oe(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,he,Z,x.width,x.height):V?r.renderbufferStorageMultisample(r.RENDERBUFFER,he,Z,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Z,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ae,r.RENDERBUFFER,R)}else{const J=x.textures;for(let te=0;te<J.length;te++){const Z=J[te],Ae=s.convert(Z.format,Z.colorSpace),he=s.convert(Z.type),Me=E(Z.internalFormat,Ae,he,Z.colorSpace),Ke=$e(x);V&&Oe(x)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ke,Me,x.width,x.height):Oe(x)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ke,Me,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Me,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(R,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(x.depthTexture);J.__renderTarget=x,(!J.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),$(x.depthTexture,0);const te=J.__webglTexture,Z=$e(x);if(x.depthTexture.format===Fr)Oe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,te,0);else if(x.depthTexture.format===Nr)Oe(x)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0,Z):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function Fe(R){const x=n.get(R),V=R.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==R.depthTexture){const J=R.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),J){const te=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,J.removeEventListener("dispose",te)};J.addEventListener("dispose",te),x.__depthDisposeCallback=te}x.__boundDepthTexture=J}if(R.depthTexture&&!x.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Se(x.__webglFramebuffer,R)}else if(V){x.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[J]),x.__webglDepthbuffer[J]===void 0)x.__webglDepthbuffer[J]=r.createRenderbuffer(),ue(x.__webglDepthbuffer[J],R,!1);else{const te=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=x.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,te,r.RENDERBUFFER,Z)}}else if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),ue(x.__webglDepthbuffer,R,!1);else{const J=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,te=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,te),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,te)}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Be(R,x,V){const J=n.get(R);x!==void 0&&me(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),V!==void 0&&Fe(R)}function nt(R){const x=R.texture,V=n.get(R),J=n.get(x);R.addEventListener("dispose",b);const te=R.textures,Z=R.isWebGLCubeRenderTarget===!0,Ae=te.length>1;if(Ae||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=x.version,o.memory.textures++),Z){V.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer[he]=[];for(let Me=0;Me<x.mipmaps.length;Me++)V.__webglFramebuffer[he][Me]=r.createFramebuffer()}else V.__webglFramebuffer[he]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){V.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)V.__webglFramebuffer[he]=r.createFramebuffer()}else V.__webglFramebuffer=r.createFramebuffer();if(Ae)for(let he=0,Me=te.length;he<Me;he++){const Ke=n.get(te[he]);Ke.__webglTexture===void 0&&(Ke.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&Oe(R)===!1){V.__webglMultisampledFramebuffer=r.createFramebuffer(),V.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let he=0;he<te.length;he++){const Me=te[he];V.__webglColorRenderbuffer[he]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,V.__webglColorRenderbuffer[he]);const Ke=s.convert(Me.format,Me.colorSpace),se=s.convert(Me.type),Te=E(Me.internalFormat,Ke,se,Me.colorSpace,R.isXRRenderTarget===!0),De=$e(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,De,Te,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+he,r.RENDERBUFFER,V.__webglColorRenderbuffer[he])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=r.createRenderbuffer(),ue(V.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){t.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),ve(r.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)me(V.__webglFramebuffer[he][Me],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,Me);else me(V.__webglFramebuffer[he],R,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ae){for(let he=0,Me=te.length;he<Me;he++){const Ke=te[he],se=n.get(Ke);t.bindTexture(r.TEXTURE_2D,se.__webglTexture),ve(r.TEXTURE_2D,Ke),me(V.__webglFramebuffer,R,Ke,r.COLOR_ATTACHMENT0+he,r.TEXTURE_2D,0),m(Ke)&&p(r.TEXTURE_2D)}t.unbindTexture()}else{let he=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,J.__webglTexture),ve(he,x),x.mipmaps&&x.mipmaps.length>0)for(let Me=0;Me<x.mipmaps.length;Me++)me(V.__webglFramebuffer[Me],R,x,r.COLOR_ATTACHMENT0,he,Me);else me(V.__webglFramebuffer,R,x,r.COLOR_ATTACHMENT0,he,0);m(x)&&p(he),t.unbindTexture()}R.depthBuffer&&Fe(R)}function Xe(R){const x=R.textures;for(let V=0,J=x.length;V<J;V++){const te=x[V];if(m(te)){const Z=T(R),Ae=n.get(te).__webglTexture;t.bindTexture(Z,Ae),p(Z),t.unbindTexture()}}}const mt=[],D=[];function Ve(R){if(R.samples>0){if(Oe(R)===!1){const x=R.textures,V=R.width,J=R.height;let te=r.COLOR_BUFFER_BIT;const Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ae=n.get(R),he=x.length>1;if(he)for(let Me=0;Me<x.length;Me++)t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglFramebuffer);for(let Me=0;Me<x.length;Me++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=r.STENCIL_BUFFER_BIT)),he){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const Ke=n.get(x[Me]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ke,0)}r.blitFramebuffer(0,0,V,J,0,0,V,J,te,r.NEAREST),l===!0&&(mt.length=0,D.length=0,mt.push(r.COLOR_ATTACHMENT0+Me),R.depthBuffer&&R.resolveDepthBuffer===!1&&(mt.push(Z),D.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,D)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),he)for(let Me=0;Me<x.length;Me++){t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.RENDERBUFFER,Ae.__webglColorRenderbuffer[Me]);const Ke=n.get(x[Me]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ae.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Me,r.TEXTURE_2D,Ke,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ae.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const x=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function $e(R){return Math.min(i.maxSamples,R.samples)}function Oe(R){const x=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ee(R){const x=o.render.frame;f.get(R)!==x&&(f.set(R,x),R.update())}function ut(R,x){const V=R.colorSpace,J=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==Or&&V!==Di&&(tt.getTransfer(V)===ft?(J!==En||te!==ci)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),x}function Pe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=B,this.setTexture3D=K,this.setTextureCube=H,this.rebindTextures=Be,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Ve,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=me,this.useMultisampledRTT=Oe}function d0(r,e){function t(n,i=Di){let s;const o=tt.getTransfer(i);if(n===ci)return r.UNSIGNED_BYTE;if(n===Xa)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ya)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===yu)return r.BYTE;if(n===Su)return r.SHORT;if(n===As)return r.UNSIGNED_SHORT;if(n===Wa)return r.INT;if(n===er)return r.UNSIGNED_INT;if(n===ui)return r.FLOAT;if(n===Cs)return r.HALF_FLOAT;if(n===Eu)return r.ALPHA;if(n===Tu)return r.RGB;if(n===En)return r.RGBA;if(n===bu)return r.LUMINANCE;if(n===wu)return r.LUMINANCE_ALPHA;if(n===Fr)return r.DEPTH_COMPONENT;if(n===Nr)return r.DEPTH_STENCIL;if(n===Au)return r.RED;if(n===qa)return r.RED_INTEGER;if(n===Cu)return r.RG;if(n===$a)return r.RG_INTEGER;if(n===Ka)return r.RGBA_INTEGER;if(n===Mo||n===Eo||n===To||n===bo)if(o===ft)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Eo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===To)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===bo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===ja||n===Ja||n===Qa)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qa)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===el||n===tl||n===nl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===el||n===tl)return o===ft?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===nl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===ul||n===fl||n===hl||n===dl||n===pl||n===ml||n===_l)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===il)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===rl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===sl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===ol)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===al)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ll)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===cl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ul)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===fl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===hl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pl)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ml)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===_l)return o===ft?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wo||n===gl||n===vl)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===wo)return o===ft?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===gl)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===vl)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===xl||n===yl||n===Sl)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===wo)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ur?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const p0={type:"move"};class tc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new qo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new qo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new qo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),u=.02,g=.005;c.inputState.pinching&&d>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(p0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new qo;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const m0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_0=`
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

}`;class g0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new Bt,s=e.properties.get(i);s.__webglTexture=t.texture,(t.depthNear!==n.depthNear||t.depthFar!==n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xi({vertexShader:m0,fragmentShader:_0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new jn(new zs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v0 extends zr{constructor(e,t){super();const n=this;let i=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,u=null,g=null;const _=new g0,m=t.getContextAttributes();let p=null,T=null;const E=[],y=[],w=new at;let A=null;const b=new kn;b.viewport=new bt;const C=new kn;C.viewport=new bt;const v=[b,C],S=new xm;let P=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=E[W];return ie===void 0&&(ie=new tc,E[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=E[W];return ie===void 0&&(ie=new tc,E[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=E[W];return ie===void 0&&(ie=new tc,E[W]=ie),ie.getHandSpace()};function I(W){const ie=y.indexOf(W.inputSource);if(ie===-1)return;const me=E[ie];me!==void 0&&(me.update(W.inputSource,W.frame,c||o),me.dispatchEvent({type:W.type,data:W.inputSource}))}function k(){i.removeEventListener("select",I),i.removeEventListener("selectstart",I),i.removeEventListener("selectend",I),i.removeEventListener("squeeze",I),i.removeEventListener("squeezestart",I),i.removeEventListener("squeezeend",I),i.removeEventListener("end",k),i.removeEventListener("inputsourceschange",$);for(let W=0;W<E.length;W++){const ie=y[W];ie!==null&&(y[W]=null,E[W].disconnect(ie))}P=null,z=null,_.reset(),e.setRenderTarget(p),u=null,d=null,h=null,i=null,T=null,Ue.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",I),i.addEventListener("selectstart",I),i.addEventListener("selectend",I),i.addEventListener("squeeze",I),i.addEventListener("squeezestart",I),i.addEventListener("squeezeend",I),i.addEventListener("end",k),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(w),i.enabledFeatures!==void 0&&i.enabledFeatures.includes("layers")){let me=null,ue=null,Se=null;m.depth&&(Se=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=m.stencil?Nr:Fr,ue=m.stencil?Ur:er);const Fe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Fe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),T=new tr(d.textureWidth,d.textureHeight,{format:En,type:ci,depthTexture:new uf(d.textureWidth,d.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}else{const me={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),T=new tr(u.framebufferWidth,u.framebufferHeight,{format:En,type:ci,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}T.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Ue.setContext(i),Ue.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(W){for(let ie=0;ie<W.removed.length;ie++){const me=W.removed[ie],ue=y.indexOf(me);ue>=0&&(y[ue]=null,E[ue].disconnect(me))}for(let ie=0;ie<W.added.length;ie++){const me=W.added[ie];let ue=y.indexOf(me);if(ue===-1){for(let Fe=0;Fe<E.length;Fe++)if(Fe>=y.length){y.push(me),ue=Fe;break}else if(y[Fe]===null){y[Fe]=me,ue=Fe;break}if(ue===-1)break}const Se=E[ue];Se&&Se.connect(me)}}const B=new q,K=new q;function H(W,ie,me){B.setFromMatrixPosition(ie.matrixWorld),K.setFromMatrixPosition(me.matrixWorld);const ue=B.distanceTo(K),Se=ie.projectionMatrix.elements,Fe=me.projectionMatrix.elements,Be=Se[14]/(Se[10]-1),nt=Se[14]/(Se[10]+1),Xe=(Se[9]+1)/Se[5],mt=(Se[9]-1)/Se[5],D=(Se[8]-1)/Se[0],Ve=(Fe[8]+1)/Fe[0],$e=Be*D,Oe=Be*Ve,Ee=ue/(-D+Ve),ut=Ee*-D;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ut),W.translateZ(Ee),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Se[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const Pe=Be+Ee,R=nt+Ee,x=$e-ut,V=Oe+(ue-ut),J=Xe*nt/R*Pe,te=mt*nt/R*Pe;W.projectionMatrix.makePerspective(x,V,J,te,Pe,R),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function le(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let ie=W.near,me=W.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(me=_.depthFar)),S.near=C.near=b.near=ie,S.far=C.far=b.far=me,(P!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,z=S.far),b.layers.mask=W.layers.mask|2,C.layers.mask=W.layers.mask|4,S.layers.mask=b.layers.mask|C.layers.mask;const ue=W.parent,Se=S.cameras;le(S,ue);for(let Fe=0;Fe<Se.length;Fe++)le(Se[Fe],ue);Se.length===2?H(S,b,C):S.projectionMatrix.copy(b.projectionMatrix),de(W,S,ue)};function de(W,ie,me){me===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(me.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=El*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&u===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=W)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(S)};let ae=null;function ve(W,ie){if(f=ie.getViewerPose(c||o),g=ie,f!==null){const me=f.views;u!==null&&(e.setRenderTargetFramebuffer(T,u.framebuffer),e.setRenderTarget(T));let ue=!1;me.length!==S.cameras.length&&(S.cameras.length=0,ue=!0);for(let Fe=0;Fe<me.length;Fe++){const Be=me[Fe];let nt=null;if(u!==null)nt=u.getViewport(Be);else{const mt=h.getViewSubImage(d,Be);nt=mt.viewport,Fe===0&&(e.setRenderTargetTextures(T,mt.colorTexture,d.ignoreDepthValues?void 0:mt.depthStencilTexture),e.setRenderTarget(T))}let Xe=v[Fe];Xe===void 0&&(Xe=new kn,Xe.layers.enable(Fe),Xe.viewport=new bt,v[Fe]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(nt.x,nt.y,nt.width,nt.height),Fe===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ue===!0&&S.cameras.push(Xe)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")){const Fe=h.getDepthInformation(me[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(e,Fe,i.renderState)}}for(let me=0;me<E.length;me++){const ue=y[me],Se=E[me];ue!==null&&Se!==void 0&&Se.update(ue,ie,c||o)}ae&&ae(W,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const Ue=new pf;Ue.setAnimationLoop(ve),this.setAnimationLoop=function(W){ae=W},this.dispose=function(){}}}const hr=new mi,x0=new Ct;function y0(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,rf(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,T,E,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),h(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,T,E):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===tn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===tn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const T=e.get(p),E=T.envMap,y=T.envMapRotation;E&&(m.envMap.value=E,hr.copy(y),hr.x*=-1,hr.y*=-1,hr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),m.envMapRotation.value.setFromMatrix4(x0.makeRotationFromEuler(hr)),m.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,T,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*T,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,T){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===tn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=T.texture,m.transmissionSamplerSize.value.set(T.width,T.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const T=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(T.matrixWorld),m.nearDistance.value=T.shadow.camera.near,m.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function S0(r,e,t,n){let i={},s={},o=[];const a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const y=E.program;n.uniformBlockBinding(T,y)}function c(T,E){let y=i[T.id];y===void 0&&(g(T),y=f(T),i[T.id]=y,T.addEventListener("dispose",m));const w=E.program;n.updateUBOMapping(T,w);const A=e.render.frame;s[T.id]!==A&&(d(T),s[T.id]=A)}function f(T){const E=h();T.__bindingPointIndex=E;const y=r.createBuffer(),w=T.__size,A=T.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,w,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,E,y),y}function h(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],y=T.uniforms,w=T.__cache;r.bindBuffer(r.UNIFORM_BUFFER,E);for(let A=0,b=y.length;A<b;A++){const C=Array.isArray(y[A])?y[A]:[y[A]];for(let v=0,S=C.length;v<S;v++){const P=C[v];if(u(P,A,v,w)===!0){const z=P.__offset,I=Array.isArray(P.value)?P.value:[P.value];let k=0;for(let $=0;$<I.length;$++){const B=I[$],K=_(B);typeof B=="number"||typeof B=="boolean"?(P.__data[0]=B,r.bufferSubData(r.UNIFORM_BUFFER,z+k,P.__data)):B.isMatrix3?(P.__data[0]=B.elements[0],P.__data[1]=B.elements[1],P.__data[2]=B.elements[2],P.__data[3]=0,P.__data[4]=B.elements[3],P.__data[5]=B.elements[4],P.__data[6]=B.elements[5],P.__data[7]=0,P.__data[8]=B.elements[6],P.__data[9]=B.elements[7],P.__data[10]=B.elements[8],P.__data[11]=0):(B.toArray(P.__data,k),k+=K.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,z,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(T,E,y,w){const A=T.value,b=E+"_"+y;if(w[b]===void 0)return typeof A=="number"||typeof A=="boolean"?w[b]=A:w[b]=A.clone(),!0;{const C=w[b];if(typeof A=="number"||typeof A=="boolean"){if(C!==A)return w[b]=A,!0}else if(C.equals(A)===!1)return C.copy(A),!0}return!1}function g(T){const E=T.uniforms;let y=0;const w=16;for(let b=0,C=E.length;b<C;b++){const v=Array.isArray(E[b])?E[b]:[E[b]];for(let S=0,P=v.length;S<P;S++){const z=v[S],I=Array.isArray(z.value)?z.value:[z.value];for(let k=0,$=I.length;k<$;k++){const B=I[k],K=_(B),H=y%w,le=H%K.boundary,de=H+le;y+=le,de!==0&&w-de<K.storage&&(y+=w-de),z.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=K.storage}}}const A=y%w;return A>0&&(y+=w-A),T.__size=y,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function m(T){const E=T.target;E.removeEventListener("dispose",m);const y=o.indexOf(E.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[E.id]),delete i[E.id],delete s[E.id]}function p(){for(const T in i)r.deleteBuffer(i[T]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}class M0{constructor(e={}){const{canvas:t=Np(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const T=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Tn,this.toneMapping=Pi,this.toneMappingExposure=1;const y=this;let w=!1,A=0,b=0,C=null,v=-1,S=null;const P=new bt,z=new bt;let I=null;const k=new ht(0);let $=0,B=t.width,K=t.height,H=1,le=null,de=null;const ae=new bt(0,0,B,K),ve=new bt(0,0,B,K);let Ue=!1;const W=new cf;let ie=!1,me=!1;this.transmissionResolutionScale=1;const ue=new Ct,Se=new Ct,Fe=new q,Be=new bt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function mt(){return C===null?H:1}let D=n;function Ve(M,F){return t.getContext(M,F)}try{const M={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Da}`),t.addEventListener("webglcontextlost",Q,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",pe,!1),D===null){const F="webgl2";if(D=Ve(F,M),D===null)throw Ve(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let $e,Oe,Ee,ut,Pe,R,x,V,J,te,Z,Ae,he,Me,Ke,se,Te,De,Ne,ye,qe,He,it,U;function ce(){$e=new Dg(D),$e.init(),He=new d0(D,$e),Oe=new bg(D,$e,e,He),Ee=new f0(D,$e),Oe.reverseDepthBuffer&&d&&Ee.buffers.depth.setReversed(!0),ut=new Ug(D),Pe=new Jv,R=new h0(D,$e,Ee,Pe,Oe,He,ut),x=new Ag(y),V=new Pg(y),J=new Sm(D),it=new Eg(D,J),te=new Lg(D,J,ut,it),Z=new Ng(D,te,J,ut),Ne=new Fg(D,Oe,R),se=new wg(Pe),Ae=new jv(y,x,V,$e,Oe,it,se),he=new y0(y,Pe),Me=new e0,Ke=new o0($e),De=new Mg(y,x,V,Ee,Z,u,l),Te=new c0(y,Z,Oe),U=new S0(D,ut,Oe,Ee),ye=new Tg(D,$e,ut),qe=new Ig(D,$e,ut),ut.programs=Ae.programs,y.capabilities=Oe,y.extensions=$e,y.properties=Pe,y.renderLists=Me,y.shadowMap=Te,y.state=Ee,y.info=ut}ce();const Y=new v0(y,D);this.xr=Y,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const M=$e.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=$e.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(B,K,!1))},this.getSize=function(M){return M.set(B,K)},this.setSize=function(M,F,G=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}B=M,K=F,t.width=Math.floor(M*H),t.height=Math.floor(F*H),G===!0&&(t.style.width=M+"px",t.style.height=F+"px"),this.setViewport(0,0,M,F)},this.getDrawingBufferSize=function(M){return M.set(B*H,K*H).floor()},this.setDrawingBufferSize=function(M,F,G){B=M,K=F,H=G,t.width=Math.floor(M*G),t.height=Math.floor(F*G),this.setViewport(0,0,M,F)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(ae)},this.setViewport=function(M,F,G,X){M.isVector4?ae.set(M.x,M.y,M.z,M.w):ae.set(M,F,G,X),Ee.viewport(P.copy(ae).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(ve)},this.setScissor=function(M,F,G,X){M.isVector4?ve.set(M.x,M.y,M.z,M.w):ve.set(M,F,G,X),Ee.scissor(z.copy(ve).multiplyScalar(H).round())},this.getScissorTest=function(){return Ue},this.setScissorTest=function(M){Ee.setScissorTest(Ue=M)},this.setOpaqueSort=function(M){le=M},this.setTransparentSort=function(M){de=M},this.getClearColor=function(M){return M.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(M=!0,F=!0,G=!0){let X=0;if(M){let N=!1;if(C!==null){const re=C.texture.format;N=re===Ka||re===$a||re===qa}if(N){const re=C.texture.type,ge=re===ci||re===er||re===As||re===Ur||re===Xa||re===Ya,be=De.getClearColor(),Re=De.getClearAlpha(),ze=be.r,ke=be.g,Le=be.b;ge?(g[0]=ze,g[1]=ke,g[2]=Le,g[3]=Re,D.clearBufferuiv(D.COLOR,0,g)):(_[0]=ze,_[1]=ke,_[2]=Le,_[3]=Re,D.clearBufferiv(D.COLOR,0,_))}else X|=D.COLOR_BUFFER_BIT}F&&(X|=D.DEPTH_BUFFER_BIT),G&&(X|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Q,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",pe,!1),De.dispose(),Me.dispose(),Ke.dispose(),Pe.dispose(),x.dispose(),V.dispose(),Z.dispose(),it.dispose(),U.dispose(),Ae.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",xe),Y.removeEventListener("sessionend",Ge),Ce.stop()};function Q(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const M=ut.autoReset,F=Te.enabled,G=Te.autoUpdate,X=Te.needsUpdate,N=Te.type;ce(),ut.autoReset=M,Te.enabled=F,Te.autoUpdate=G,Te.needsUpdate=X,Te.type=N}function pe(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ne(M){const F=M.target;F.removeEventListener("dispose",ne),L(F)}function L(M){j(M),Pe.remove(M)}function j(M){const F=Pe.get(M).programs;F!==void 0&&(F.forEach(function(G){Ae.releaseProgram(G)}),M.isShaderMaterial&&Ae.releaseShaderCache(M))}this.renderBufferDirect=function(M,F,G,X,N,re){F===null&&(F=nt);const ge=N.isMesh&&N.matrixWorld.determinant()<0,be=Ot(M,F,G,X,N);Ee.setMaterial(X,ge);let Re=G.index,ze=1;if(X.wireframe===!0){if(Re=te.getWireframeAttribute(G),Re===void 0)return;ze=2}const ke=G.drawRange,Le=G.attributes.position;let et=ke.start*ze,lt=(ke.start+ke.count)*ze;re!==null&&(et=Math.max(et,re.start*ze),lt=Math.min(lt,(re.start+re.count)*ze)),Re!==null?(et=Math.max(et,0),lt=Math.min(lt,Re.count)):Le!=null&&(et=Math.max(et,0),lt=Math.min(lt,Le.count));const Lt=lt-et;if(Lt<0||Lt===1/0)return;it.setup(N,X,be,G,Re);let Tt,st=ye;if(Re!==null&&(Tt=J.get(Re),st=qe,st.setIndex(Tt)),N.isMesh)X.wireframe===!0?(Ee.setLineWidth(X.wireframeLinewidth*mt()),st.setMode(D.LINES)):st.setMode(D.TRIANGLES);else if(N.isLine){let Ie=X.linewidth;Ie===void 0&&(Ie=1),Ee.setLineWidth(Ie*mt()),N.isLineSegments?st.setMode(D.LINES):N.isLineLoop?st.setMode(D.LINE_LOOP):st.setMode(D.LINE_STRIP)}else N.isPoints?st.setMode(D.POINTS):N.isSprite&&st.setMode(D.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)st.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if($e.get("WEBGL_multi_draw"))st.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Ie=N._multiDrawStarts,Gt=N._multiDrawCounts,ct=N._multiDrawCount,$n=Re?J.get(Re).bytesPerElement:1,bs=Pe.get(X).currentProgram.getUniforms();for(let Mn=0;Mn<ct;Mn++)bs.setValue(D,"_gl_DrawID",Mn),st.render(Ie[Mn]/$n,Gt[Mn])}else if(N.isInstancedMesh)st.renderInstances(et,Lt,N.count);else if(G.isInstancedBufferGeometry){const Ie=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,Gt=Math.min(G.instanceCount,Ie);st.renderInstances(et,Lt,Gt)}else st.render(et,Lt)};function O(M,F,G){M.transparent===!0&&M.side===li&&M.forceSinglePass===!1?(M.side=tn,M.needsUpdate=!0,un(M,F,G),M.side=Ci,M.needsUpdate=!0,un(M,F,G),M.side=li):un(M,F,G)}this.compile=function(M,F,G=null){G===null&&(G=M),p=Ke.get(G),p.init(F),E.push(p),G.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),M!==G&&M.traverseVisible(function(N){N.isLight&&N.layers.test(F.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights();const X=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const re=N.material;if(re)if(Array.isArray(re))for(let ge=0;ge<re.length;ge++){const be=re[ge];O(be,G,N),X.add(be)}else O(re,G,N),X.add(re)}),E.pop(),p=null,X},this.compileAsync=function(M,F,G=null){const X=this.compile(M,F,G);return new Promise(N=>{function re(){if(X.forEach(function(ge){Pe.get(ge).currentProgram.isReady()&&X.delete(ge)}),X.size===0){N(M);return}setTimeout(re,10)}$e.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let ee=null;function oe(M){ee&&ee(M)}function xe(){Ce.stop()}function Ge(){Ce.start()}const Ce=new pf;Ce.setAnimationLoop(oe),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(M){ee=M,Y.setAnimationLoop(M),M===null?Ce.stop():Ce.start()},Y.addEventListener("sessionstart",xe),Y.addEventListener("sessionend",Ge),this.render=function(M,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(F),F=Y.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,F,C),p=Ke.get(M,E.length),p.init(F),E.push(p),Se.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),W.setFromProjectionMatrix(Se),me=this.localClippingEnabled,ie=se.init(this.clippingPlanes,me),m=Me.get(M,T.length),m.init(),T.push(m),Y.enabled===!0&&Y.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&rt(re,F,-1/0,y.sortObjects)}rt(M,F,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(le,de),Xe=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,Xe&&De.addToRenderList(m,M),this.info.render.frame++,ie===!0&&se.beginShadows();const G=p.state.shadowsArray;Te.render(G,M,F),ie===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,N=m.transmissive;if(p.setupLights(),F.isArrayCamera){const re=F.cameras;if(N.length>0)for(let ge=0,be=re.length;ge<be;ge++){const Re=re[ge];ot(X,N,M,Re)}Xe&&De.render(M);for(let ge=0,be=re.length;ge<be;ge++){const Re=re[ge];Ze(m,M,Re,Re.viewport)}}else N.length>0&&ot(X,N,M,F),Xe&&De.render(M),Ze(m,M,F);C!==null&&b===0&&(R.updateMultisampleRenderTarget(C),R.updateRenderTargetMipmap(C)),M.isScene===!0&&M.onAfterRender(y,M,F),it.resetDefaultState(),v=-1,S=null,E.pop(),E.length>0?(p=E[E.length-1],ie===!0&&se.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,T.pop(),T.length>0?m=T[T.length-1]:m=null};function rt(M,F,G,X){if(M.visible===!1)return;if(M.layers.test(F.layers)){if(M.isGroup)G=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(F);else if(M.isLight)p.pushLight(M),M.castShadow&&p.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||W.intersectsSprite(M)){X&&Be.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Se);const ge=Z.update(M),be=M.material;be.visible&&m.push(M,ge,be,G,Be.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||W.intersectsObject(M))){const ge=Z.update(M),be=M.material;if(X&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Be.copy(M.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Be.copy(ge.boundingSphere.center)),Be.applyMatrix4(M.matrixWorld).applyMatrix4(Se)),Array.isArray(be)){const Re=ge.groups;for(let ze=0,ke=Re.length;ze<ke;ze++){const Le=Re[ze],et=be[Le.materialIndex];et&&et.visible&&m.push(M,ge,et,G,Be.z,Le)}}else be.visible&&m.push(M,ge,be,G,Be.z,null)}}const re=M.children;for(let ge=0,be=re.length;ge<be;ge++)rt(re[ge],F,G,X)}function Ze(M,F,G,X){const N=M.opaque,re=M.transmissive,ge=M.transparent;p.setupLightsView(G),ie===!0&&se.setGlobalState(y.clippingPlanes,G),X&&Ee.viewport(P.copy(X)),N.length>0&&_t(N,F,G),re.length>0&&_t(re,F,G),ge.length>0&&_t(ge,F,G),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function ot(M,F,G,X){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new tr(1,1,{generateMipmaps:!0,type:$e.has("EXT_color_buffer_half_float")||$e.has("EXT_color_buffer_float")?Cs:ci,minFilter:Qi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:tt.workingColorSpace}));const re=p.state.transmissionRenderTarget[X.id],ge=X.viewport||P;re.setSize(ge.z*y.transmissionResolutionScale,ge.w*y.transmissionResolutionScale);const be=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(k),$=y.getClearAlpha(),$<1&&y.setClearColor(16777215,.5),y.clear(),Xe&&De.render(G);const Re=y.toneMapping;y.toneMapping=Pi;const ze=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ie===!0&&se.setGlobalState(y.clippingPlanes,X),_t(M,G,X),R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re),$e.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Le=0,et=F.length;Le<et;Le++){const lt=F[Le],Lt=lt.object,Tt=lt.geometry,st=lt.material,Ie=lt.group;if(st.side===li&&Lt.layers.test(X.layers)){const Gt=st.side;st.side=tn,st.needsUpdate=!0,Nt(Lt,G,X,Tt,st,Ie),st.side=Gt,st.needsUpdate=!0,ke=!0}}ke===!0&&(R.updateMultisampleRenderTarget(re),R.updateRenderTargetMipmap(re))}y.setRenderTarget(be),y.setClearColor(k,$),ze!==void 0&&(X.viewport=ze),y.toneMapping=Re}function _t(M,F,G){const X=F.isScene===!0?F.overrideMaterial:null;for(let N=0,re=M.length;N<re;N++){const ge=M[N],be=ge.object,Re=ge.geometry,ze=X===null?ge.material:X,ke=ge.group;be.layers.test(G.layers)&&Nt(be,F,G,Re,ze,ke)}}function Nt(M,F,G,X,N,re){M.onBeforeRender(y,F,G,X,N,re),M.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(y,F,G,X,M,re),N.transparent===!0&&N.side===li&&N.forceSinglePass===!1?(N.side=tn,N.needsUpdate=!0,y.renderBufferDirect(G,F,X,N,M,re),N.side=Ci,N.needsUpdate=!0,y.renderBufferDirect(G,F,X,N,M,re),N.side=li):y.renderBufferDirect(G,F,X,N,M,re),M.onAfterRender(y,F,G,X,N,re)}function un(M,F,G){F.isScene!==!0&&(F=nt);const X=Pe.get(M),N=p.state.lights,re=p.state.shadowsArray,ge=N.state.version,be=Ae.getParameters(M,N.state,re,F,G),Re=Ae.getProgramCacheKey(be);let ze=X.programs;X.environment=M.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(M.isMeshStandardMaterial?V:x).get(M.envMap||X.environment),X.envMapRotation=X.environment!==null&&M.envMap===null?F.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",ne),ze=new Map,X.programs=ze);let ke=ze.get(Re);if(ke!==void 0){if(X.currentProgram===ke&&X.lightsStateVersion===ge)return qn(M,be),ke}else be.uniforms=Ae.getUniforms(M),M.onBeforeCompile(be,y),ke=Ae.acquireProgram(be,Re),ze.set(Re,ke),X.uniforms=be.uniforms;const Le=X.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Le.clippingPlanes=se.uniform),qn(M,be),X.needsLights=_o(M),X.lightsStateVersion=ge,X.needsLights&&(Le.ambientLightColor.value=N.state.ambient,Le.lightProbe.value=N.state.probe,Le.directionalLights.value=N.state.directional,Le.directionalLightShadows.value=N.state.directionalShadow,Le.spotLights.value=N.state.spot,Le.spotLightShadows.value=N.state.spotShadow,Le.rectAreaLights.value=N.state.rectArea,Le.ltc_1.value=N.state.rectAreaLTC1,Le.ltc_2.value=N.state.rectAreaLTC2,Le.pointLights.value=N.state.point,Le.pointLightShadows.value=N.state.pointShadow,Le.hemisphereLights.value=N.state.hemi,Le.directionalShadowMap.value=N.state.directionalShadowMap,Le.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Le.spotShadowMap.value=N.state.spotShadowMap,Le.spotLightMatrix.value=N.state.spotLightMatrix,Le.spotLightMap.value=N.state.spotLightMap,Le.pointShadowMap.value=N.state.pointShadowMap,Le.pointShadowMatrix.value=N.state.pointShadowMatrix),X.currentProgram=ke,X.uniformsList=null,ke}function Qt(M){if(M.uniformsList===null){const F=M.currentProgram.getUniforms();M.uniformsList=Jo.seqWithValue(F.seq,M.uniforms)}return M.uniformsList}function qn(M,F){const G=Pe.get(M);G.outputColorSpace=F.outputColorSpace,G.batching=F.batching,G.batchingColor=F.batchingColor,G.instancing=F.instancing,G.instancingColor=F.instancingColor,G.instancingMorph=F.instancingMorph,G.skinning=F.skinning,G.morphTargets=F.morphTargets,G.morphNormals=F.morphNormals,G.morphColors=F.morphColors,G.morphTargetsCount=F.morphTargetsCount,G.numClippingPlanes=F.numClippingPlanes,G.numIntersection=F.numClipIntersection,G.vertexAlphas=F.vertexAlphas,G.vertexTangents=F.vertexTangents,G.toneMapping=F.toneMapping}function Ot(M,F,G,X,N){F.isScene!==!0&&(F=nt),R.resetTextureUnits();const re=F.fog,ge=X.isMeshStandardMaterial?F.environment:null,be=C===null?y.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Or,Re=(X.isMeshStandardMaterial?V:x).get(X.envMap||ge),ze=X.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ke=!!G.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Le=!!G.morphAttributes.position,et=!!G.morphAttributes.normal,lt=!!G.morphAttributes.color;let Lt=Pi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Lt=y.toneMapping);const Tt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,st=Tt!==void 0?Tt.length:0,Ie=Pe.get(X),Gt=p.state.lights;if(ie===!0&&(me===!0||M!==S)){const en=M===S&&X.id===v;se.setState(X,M,en)}let ct=!1;X.version===Ie.__version?(Ie.needsLights&&Ie.lightsStateVersion!==Gt.state.version||Ie.outputColorSpace!==be||N.isBatchedMesh&&Ie.batching===!1||!N.isBatchedMesh&&Ie.batching===!0||N.isBatchedMesh&&Ie.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Ie.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Ie.instancing===!1||!N.isInstancedMesh&&Ie.instancing===!0||N.isSkinnedMesh&&Ie.skinning===!1||!N.isSkinnedMesh&&Ie.skinning===!0||N.isInstancedMesh&&Ie.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Ie.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Ie.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Ie.instancingMorph===!1&&N.morphTexture!==null||Ie.envMap!==Re||X.fog===!0&&Ie.fog!==re||Ie.numClippingPlanes!==void 0&&(Ie.numClippingPlanes!==se.numPlanes||Ie.numIntersection!==se.numIntersection)||Ie.vertexAlphas!==ze||Ie.vertexTangents!==ke||Ie.morphTargets!==Le||Ie.morphNormals!==et||Ie.morphColors!==lt||Ie.toneMapping!==Lt||Ie.morphTargetsCount!==st)&&(ct=!0):(ct=!0,Ie.__version=X.version);let $n=Ie.currentProgram;ct===!0&&($n=un(X,F,N));let bs=!1,Mn=!1,go=!1;const xt=$n.getUniforms(),In=Ie.uniforms;if(Ee.useProgram($n.program)&&(bs=!0,Mn=!0,go=!0),X.id!==v&&(v=X.id,Mn=!0),bs||S!==M){Ee.buffers.depth.getReversed()?(ue.copy(M.projectionMatrix),Bp(ue),zp(ue),xt.setValue(D,"projectionMatrix",ue)):xt.setValue(D,"projectionMatrix",M.projectionMatrix),xt.setValue(D,"viewMatrix",M.matrixWorldInverse);const fn=xt.map.cameraPosition;fn!==void 0&&fn.setValue(D,Fe.setFromMatrixPosition(M.matrixWorld)),Oe.logarithmicDepthBuffer&&xt.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&xt.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),S!==M&&(S=M,Mn=!0,go=!0)}if(N.isSkinnedMesh){xt.setOptional(D,N,"bindMatrix"),xt.setOptional(D,N,"bindMatrixInverse");const en=N.skeleton;en&&(en.boneTexture===null&&en.computeBoneTexture(),xt.setValue(D,"boneTexture",en.boneTexture,R))}N.isBatchedMesh&&(xt.setOptional(D,N,"batchingTexture"),xt.setValue(D,"batchingTexture",N._matricesTexture,R),xt.setOptional(D,N,"batchingIdTexture"),xt.setValue(D,"batchingIdTexture",N._indirectTexture,R),xt.setOptional(D,N,"batchingColorTexture"),N._colorsTexture!==null&&xt.setValue(D,"batchingColorTexture",N._colorsTexture,R));const Un=G.morphAttributes;if((Un.position!==void 0||Un.normal!==void 0||Un.color!==void 0)&&Ne.update(N,G,$n),(Mn||Ie.receiveShadow!==N.receiveShadow)&&(Ie.receiveShadow=N.receiveShadow,xt.setValue(D,"receiveShadow",N.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(In.envMap.value=Re,In.flipEnvMap.value=Re.isCubeTexture&&Re.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(In.envMapIntensity.value=F.environmentIntensity),Mn&&(xt.setValue(D,"toneMappingExposure",y.toneMappingExposure),Ie.needsLights&&Mt(In,go),re&&X.fog===!0&&he.refreshFogUniforms(In,re),he.refreshMaterialUniforms(In,X,H,K,p.state.transmissionRenderTarget[M.id]),Jo.upload(D,Qt(Ie),In,R)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Jo.upload(D,Qt(Ie),In,R),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&xt.setValue(D,"center",N.center),xt.setValue(D,"modelViewMatrix",N.modelViewMatrix),xt.setValue(D,"normalMatrix",N.normalMatrix),xt.setValue(D,"modelMatrix",N.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const en=X.uniformsGroups;for(let fn=0,hu=en.length;fn<hu;fn++){const Rr=en[fn];U.update(Rr,$n),U.bind(Rr,$n)}}return $n}function Mt(M,F){M.ambientLightColor.needsUpdate=F,M.lightProbe.needsUpdate=F,M.directionalLights.needsUpdate=F,M.directionalLightShadows.needsUpdate=F,M.pointLights.needsUpdate=F,M.pointLightShadows.needsUpdate=F,M.spotLights.needsUpdate=F,M.spotLightShadows.needsUpdate=F,M.rectAreaLights.needsUpdate=F,M.hemisphereLights.needsUpdate=F}function _o(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return b},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(M,F,G){Pe.get(M.texture).__webglTexture=F,Pe.get(M.depthTexture).__webglTexture=G;const X=Pe.get(M);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=G===void 0,X.__autoAllocateDepthBuffer||$e.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,F){const G=Pe.get(M);G.__webglFramebuffer=F,G.__useDefaultFramebuffer=F===void 0};const Sn=D.createFramebuffer();this.setRenderTarget=function(M,F=0,G=0){C=M,A=F,b=G;let X=!0,N=null,re=!1,ge=!1;if(M){const Re=Pe.get(M);if(Re.__useDefaultFramebuffer!==void 0)Ee.bindFramebuffer(D.FRAMEBUFFER,null),X=!1;else if(Re.__webglFramebuffer===void 0)R.setupRenderTarget(M);else if(Re.__hasExternalTextures)R.rebindTextures(M,Pe.get(M.texture).__webglTexture,Pe.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Le=M.depthTexture;if(Re.__boundDepthTexture!==Le){if(Le!==null&&Pe.has(Le)&&(M.width!==Le.image.width||M.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(M)}}const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const ke=Pe.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(ke[F])?N=ke[F][G]:N=ke[F],re=!0):M.samples>0&&R.useMultisampledRTT(M)===!1?N=Pe.get(M).__webglMultisampledFramebuffer:Array.isArray(ke)?N=ke[G]:N=ke,P.copy(M.viewport),z.copy(M.scissor),I=M.scissorTest}else P.copy(ae).multiplyScalar(H).floor(),z.copy(ve).multiplyScalar(H).floor(),I=Ue;if(G!==0&&(N=Sn),Ee.bindFramebuffer(D.FRAMEBUFFER,N)&&X&&Ee.drawBuffers(M,N),Ee.viewport(P),Ee.scissor(z),Ee.setScissorTest(I),re){const Re=Pe.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,Re.__webglTexture,G)}else if(ge){const Re=Pe.get(M.texture),ze=F;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Re.__webglTexture,G,ze)}else if(M!==null&&G!==0){const Re=Pe.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Re.__webglTexture,G)}v=-1},this.readRenderTargetPixels=function(M,F,G,X,N,re,ge){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let be=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){Ee.bindFramebuffer(D.FRAMEBUFFER,be);try{const Re=M.texture,ze=Re.format,ke=Re.type;if(!Oe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Oe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=M.width-X&&G>=0&&G<=M.height-N&&D.readPixels(F,G,X,N,He.convert(ze),He.convert(ke),re)}finally{const Re=C!==null?Pe.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(M,F,G,X,N,re,ge){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let be=Pe.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&ge!==void 0&&(be=be[ge]),be){const Re=M.texture,ze=Re.format,ke=Re.type;if(!Oe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Oe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=M.width-X&&G>=0&&G<=M.height-N){Ee.bindFramebuffer(D.FRAMEBUFFER,be);const Le=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.bufferData(D.PIXEL_PACK_BUFFER,re.byteLength,D.STREAM_READ),D.readPixels(F,G,X,N,He.convert(ze),He.convert(ke),0);const et=C!==null?Pe.get(C).__webglFramebuffer:null;Ee.bindFramebuffer(D.FRAMEBUFFER,et);const lt=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Op(D,lt,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,Le),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,re),D.deleteBuffer(Le),D.deleteSync(lt),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,F=null,G=0){M.isTexture!==!0&&(kr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,M=arguments[1]);const X=Math.pow(2,-G),N=Math.floor(M.image.width*X),re=Math.floor(M.image.height*X),ge=F!==null?F.x:0,be=F!==null?F.y:0;R.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,G,0,0,ge,be,N,re),Ee.unbindTexture()};const Fy=D.createFramebuffer(),Ny=D.createFramebuffer();this.copyTextureToTexture=function(M,F,G=null,X=null,N=0,re=null){M.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,M=arguments[1],F=arguments[2],re=arguments[3]||0,G=null),re===null&&(N!==0?(kr("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),re=N,N=0):re=0);let ge,be,Re,ze,ke,Le,et,lt,Lt;const Tt=M.isCompressedTexture?M.mipmaps[re]:M.image;if(G!==null)ge=G.max.x-G.min.x,be=G.max.y-G.min.y,Re=G.isBox3?G.max.z-G.min.z:1,ze=G.min.x,ke=G.min.y,Le=G.isBox3?G.min.z:0;else{const Un=Math.pow(2,-N);ge=Math.floor(Tt.width*Un),be=Math.floor(Tt.height*Un),M.isDataArrayTexture?Re=Tt.depth:M.isData3DTexture?Re=Math.floor(Tt.depth*Un):Re=1,ze=0,ke=0,Le=0}X!==null?(et=X.x,lt=X.y,Lt=X.z):(et=0,lt=0,Lt=0);const st=He.convert(F.format),Ie=He.convert(F.type);let Gt;F.isData3DTexture?(R.setTexture3D(F,0),Gt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(R.setTexture2DArray(F,0),Gt=D.TEXTURE_2D_ARRAY):(R.setTexture2D(F,0),Gt=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const ct=D.getParameter(D.UNPACK_ROW_LENGTH),$n=D.getParameter(D.UNPACK_IMAGE_HEIGHT),bs=D.getParameter(D.UNPACK_SKIP_PIXELS),Mn=D.getParameter(D.UNPACK_SKIP_ROWS),go=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Tt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Tt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ze),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Le);const xt=M.isDataArrayTexture||M.isData3DTexture,In=F.isDataArrayTexture||F.isData3DTexture;if(M.isDepthTexture){const Un=Pe.get(M),en=Pe.get(F),fn=Pe.get(Un.__renderTarget),hu=Pe.get(en.__renderTarget);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,fn.__webglFramebuffer),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,hu.__webglFramebuffer);for(let Rr=0;Rr<Re;Rr++)xt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.get(M).__webglTexture,N,Le+Rr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Pe.get(F).__webglTexture,re,Lt+Rr)),D.blitFramebuffer(ze,ke,ge,be,et,lt,ge,be,D.DEPTH_BUFFER_BIT,D.NEAREST);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(N!==0||M.isRenderTargetTexture||Pe.has(M)){const Un=Pe.get(M),en=Pe.get(F);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,Fy),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ny);for(let fn=0;fn<Re;fn++)xt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Un.__webglTexture,N,Le+fn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Un.__webglTexture,N),In?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,en.__webglTexture,re,Lt+fn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,en.__webglTexture,re),N!==0?D.blitFramebuffer(ze,ke,ge,be,et,lt,ge,be,D.COLOR_BUFFER_BIT,D.NEAREST):In?D.copyTexSubImage3D(Gt,re,et,lt,Lt+fn,ze,ke,ge,be):D.copyTexSubImage2D(Gt,re,et,lt,ze,ke,ge,be);Ee.bindFramebuffer(D.READ_FRAMEBUFFER,null),Ee.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else In?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Gt,re,et,lt,Lt,ge,be,Re,st,Ie,Tt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(Gt,re,et,lt,Lt,ge,be,Re,st,Tt.data):D.texSubImage3D(Gt,re,et,lt,Lt,ge,be,Re,st,Ie,Tt):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,re,et,lt,ge,be,st,Ie,Tt.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,re,et,lt,Tt.width,Tt.height,st,Tt.data):D.texSubImage2D(D.TEXTURE_2D,re,et,lt,ge,be,st,Ie,Tt);D.pixelStorei(D.UNPACK_ROW_LENGTH,ct),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,$n),D.pixelStorei(D.UNPACK_SKIP_PIXELS,bs),D.pixelStorei(D.UNPACK_SKIP_ROWS,Mn),D.pixelStorei(D.UNPACK_SKIP_IMAGES,go),re===0&&F.generateMipmaps&&D.generateMipmap(Gt),Ee.unbindTexture()},this.copyTextureToTexture3D=function(M,F,G=null,X=null,N=0){return M.isTexture!==!0&&(kr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),G=arguments[0]||null,X=arguments[1]||null,M=arguments[2],F=arguments[3],N=arguments[4]||0),kr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,F,G,X,N)},this.initRenderTarget=function(M){Pe.get(M).__webglFramebuffer===void 0&&R.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?R.setTextureCube(M,0):M.isData3DTexture?R.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?R.setTexture2DArray(M,0):R.setTexture2D(M,0),Ee.unbindTexture()},this.resetState=function(){A=0,b=0,C=null,Ee.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return fi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=tt._getUnpackColorSpace()}}var nc=function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(f){try{c(n.next(f))}catch(h){o(h)}}function l(f){try{c(n.throw(f))}catch(h){o(h)}}function c(f){f.done?s(f.value):i(f.value).then(a,l)}c((n=n.apply(r,e||[])).next())})};const E0=r=>{const e=document.implementation.createHTMLDocument("test"),t=e.createRange();t.selectNodeContents(e.documentElement),t.deleteContents();const n=document.createElement("head");return e.documentElement.appendChild(n),e.documentElement.appendChild(t.createContextualFragment(r)),e.documentElement.setAttribute("xmlns",e.documentElement.namespaceURI),new XMLSerializer().serializeToString(e).replace(/<!DOCTYPE html>/,"")};function T0(r){return r.cloneNode(!0)}function Gf(r,e,t){return nc(this,void 0,void 0,function*(){const n=r.getBoundingClientRect(),i=window.devicePixelRatio,s=n.width*i,o=n.height*i,a=t&&t.width===s&&t.height===o?t:new OffscreenCanvas(s,o),l=T0(r);yield Wf(r,l),l.style.setProperty("opacity",e.toString()),l.style.setProperty("margin","0px");const c=l.outerHTML,f=E0(c),h=`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${o}"><foreignObject width="100%" height="100%">${f}</foreignObject></svg>`;return new Promise((d,u)=>{const g=new Image;g.onload=()=>{const _=a.getContext("2d");if(_===null)return u();_.clearRect(0,0,s,o),_.scale(i,i),_.drawImage(g,0,0,s,o),_.setTransform(1,0,0,1,0,0),d(a)},g.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(h)}`})})}function Wf(r,e){return nc(this,void 0,void 0,function*(){const t=window.getComputedStyle(r);Array.from(t).forEach(n=>{e.style.setProperty(n,t.getPropertyValue(n),t.getPropertyPriority(n))}),e.tagName==="INPUT"?e.setAttribute("value",e.value):e.tagName==="TEXTAREA"?e.innerHTML=e.value:e.tagName==="IMG"&&(e.src=yield b0(r.src));for(let n=0;n<r.children.length;n++){const i=r.children[n],s=e.children[n];yield Wf(i,s)}})}function b0(r){return nc(this,void 0,void 0,function*(){const e=yield fetch(r).then(t=>t.blob());return new Promise(t=>{const n=new FileReader;n.onload=function(){t(this.result)},n.readAsDataURL(e)})})}const w0=`
precision highp float;
void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,Xf={uvGradient:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;
    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = vec4(uv, sin(time) * .5 + .5, 1);

        vec4 img = texture(src, uv);
        outColor *= smoothstep(0., 1., img.a);
    }
    `,rainbow:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hueShift(vec3 rgb, float t) {
        vec3 hsv = rgb2hsv(rgb);
        hsv.x = fract(hsv.x + t);
        return hsv2rgb(hsv);
    }

    void main() {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uv2 = uv;
        uv2.x *= resolution.x / resolution.y;

        float x = (uv2.x - uv2.y) - fract(time);

        vec4 img = texture(src, uv);
        float gray = length(img.rgb);

        img.rgb = vec3(hueShift(vec3(1,0,0), x) * gray);

        outColor = img;
    }
    `,glitch:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );

        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;

        return n;
    }

    vec4 readTex(sampler2D tex, vec2 uv) {
        if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) { return vec4(0); }
        return texture(tex, uv);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = readTex(src, uv);

        float t = mod(time, 3.14 * 10.);

        // Seed value
        float v = fract(sin(t * 2.) * 700.);

        if (abs(nn(uv.y, t)) < 1.2) {
            v *= 0.01;
        }

        // Prepare for chromatic Abbreveation
        vec2 focus = vec2(0.5);
        float d = v * 0.6;
        vec2 ruv = focus + (uv - focus) * (1. - d);
        vec2 guv = focus + (uv - focus) * (1. - 2. * d);
        vec2 buv = focus + (uv - focus) * (1. - 3. * d);

        // Random Glitch
        if (v > 0.1) {
            // Randomize y
            float y = floor(uv.y * 13. * sin(35. * t)) + 1.;
            if (sin(36. * y * v) > 0.9) {
                ruv.x = uv.x + sin(76. * y) * 0.1;
                guv.x = uv.x + sin(34. * y) * 0.1;
                buv.x = uv.x + sin(59. * y) * 0.1;
            }

            // RGB Shift
            v = pow(v * 1.5, 2.) * 0.15;
            color.rgb *= 0.3;
            color.r += readTex(src, vec2(uv.x + sin(t * 123.45) * v, uv.y)).r;
            color.g += readTex(src, vec2(uv.x + sin(t * 157.67) * v, uv.y)).g;
            color.b += readTex(src, vec2(uv.x + sin(t * 143.67) * v, uv.y)).b;
        }

        // Compose Chromatic Abbreveation
        if (abs(nn(uv.y, t)) > 1.1) {
            color.r = color.r * 0.5 + color.r * texture(src, ruv).r;
            color.g = color.g * 0.5 + color.g * texture(src, guv).g;
            color.b = color.b * 0.5 + color.b * texture(src, buv).b;
            color *= 2.;
        }

        outColor = color;
        outColor.a = smoothstep(0.0, 0.8, max(color.r, max(color.g, color.b)));
    }
    `,pixelate:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float b = sin(time * 2.) * 32. + 48.;
        uv = floor(uv * b) / b;
        outColor = texture(src, uv);
    }
    `,rgbGlitch:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    float random(vec2 st) {
        return fract(sin(dot(st, vec2(948.,824.))) * 30284.);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float tt = mod(time, 17.);

        if (fract(tt * 0.73) > .8 || fract(tt * 0.91) > .8) {
            float t = floor(tt * 11.);

            float n = random(vec2(t, floor(uv.y * 17.7)));
            if (n > .7) {
                uvr.x += random(vec2(t, 1.)) * .1 - 0.05;
                uvg.x += random(vec2(t, 2.)) * .1 - 0.05;
                uvb.x += random(vec2(t, 3.)) * .1 - 0.05;
            }

            float ny = random(vec2(t * 17. + floor(uv * 19.7)));
            if (ny > .7) {
                uvr.x += random(vec2(t, 4.)) * .1 - 0.05;
                uvg.x += random(vec2(t, 5.)) * .1 - 0.05;
                uvb.x += random(vec2(t, 6.)) * .1 - 0.05;
            }
        }

        vec4 cr = texture(src, uvr);
        vec4 cg = texture(src, uvg);
        vec4 cb = texture(src, uvb);

        outColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            step(.1, cr.a + cg.a + cb.a)
        );
    }
    `,rgbShift:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    float nn(float y, float t) {
        float n = (
            sin(y * .07 + t * 8. + sin(y * .5 + t * 10.)) +
            sin(y * .7 + t * 2. + sin(y * .3 + t * 8.)) * .7 +
            sin(y * 1.1 + t * 2.8) * .4
        );

        n += sin(y * 124. + t * 100.7) * sin(y * 877. - t * 38.8) * .3;

        return n;
    }

    float step2(float t, vec2 uv) {
        return step(t, uv.x) * step(t, uv.y);
    }

    float inside(vec2 uv) {
        return step2(0., uv) * step2(0., 1. - uv);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float t = mod(time, 30.);

        float amp = 10. / resolution.x;

        if (abs(nn(uv.y, t)) > 1.) {
            uvr.x += nn(uv.y, t) * amp;
            uvg.x += nn(uv.y, t + 10.) * amp;
            uvb.x += nn(uv.y, t + 20.) * amp;
        }

        vec4 cr = texture(src, uvr) * inside(uvr);
        vec4 cg = texture(src, uvg) * inside(uvg);
        vec4 cb = texture(src, uvb) * inside(uvb);

        outColor = vec4(
            cr.r,
            cg.g,
            cb.b,
            smoothstep(.0, 1., cr.a + cg.a + cb.a)
        );
    }
    `,halftone:`
    // Halftone Effect by zoidberg
    // https://www.interactiveshaderformat.com/sketches/234

    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    // TODO: uniform
    #define gridSize 10.0
    #define dotSize 0.7
    #define smoothing 0.15
    #define speed 1.0

    #define IMG_PIXEL(x, y) texture(x, (y - offset) / resolution);

    vec4 gridRot = vec4(15.0, 45.0, 75.0, 0.0);

    // during calculation we find the closest dot to a frag, determine its size, and then determine the size of the four dots above/below/right/left of it. this array of offsets move "one left", "one up", "one right", and "one down"...
    vec2 originOffsets[4];

    void main() {
        vec2 fragCoord = gl_FragCoord.xy - offset;

        // a halftone is an overlapping series of grids of dots
        // each grid of dots is rotated by a different amount
        // the size of the dots determines the colors. the shape of the dot should never change (always be a dot with regular edges)
        originOffsets[0] = vec2(-1.0, 0.0);
        originOffsets[1] = vec2(0.0, 1.0);
        originOffsets[2] = vec2(1.0, 0.0);
        originOffsets[3] = vec2(0.0, -1.0);

        vec3 rgbAmounts = vec3(0.0);

        // for each of the channels (i) of RGB...
        for (float i=0.0; i<3.0; ++i) {
            // figure out the rotation of the grid in radians
            float rotRad = radians(gridRot[int(i)]);

            // the grids are rotated counter-clockwise- to find the nearest dot, take the fragment pixel loc,
            // rotate it clockwise, and split by the grid to find the center of the dot. then rotate this
            // coord counter-clockwise to yield the location of the center of the dot in pixel coords local to the render space
            mat2 ccTrans = mat2(vec2(cos(rotRad), sin(rotRad)), vec2(-1.0*sin(rotRad), cos(rotRad)));
            mat2 cTrans = mat2(vec2(cos(rotRad), -1.0*sin(rotRad)), vec2(sin(rotRad), cos(rotRad)));

            // find the location of the frag in the grid (prior to rotating it)
            vec2 gridFragLoc = cTrans * fragCoord.xy;

            // find the center of the dot closest to the frag- there's no "round" in GLSL 1.2, so do a "floor" to find the dot to the bottom-left of the frag, then figure out if the frag would be in the top and right halves of that square to find the closest dot to the frag
            vec2 gridOriginLoc = vec2(floor(gridFragLoc.x/gridSize), floor(gridFragLoc.y/gridSize));

            vec2 tmpGridCoords = gridFragLoc/vec2(gridSize);
            bool fragAtTopOfGrid = ((tmpGridCoords.y-floor(tmpGridCoords.y)) > (gridSize/2.0)) ? true : false;
            bool fragAtRightOfGrid = ((tmpGridCoords.x-floor(tmpGridCoords.x)) > (gridSize/2.0)) ? true : false;
            if (fragAtTopOfGrid)
                gridOriginLoc.y = gridOriginLoc.y + 1.0;
            if (fragAtRightOfGrid)
                gridOriginLoc.x = gridOriginLoc.x + 1.0;

            // ...at this point, "gridOriginLoc" contains the grid coords of the nearest dot to the fragment being rendered
            // convert the location of the center of the dot from grid coords to pixel coords
            vec2 gridDotLoc = vec2(gridOriginLoc.x*gridSize, gridOriginLoc.y*gridSize) + vec2(gridSize/2.0);

            // rotate the pixel coords of the center of the dot so they become relative to the rendering space
            vec2 renderDotLoc = ccTrans * gridDotLoc;

            // get the color of the pixel of the input image under this dot (the color will ultimately determine the size of the dot)
            vec4 renderDotImageColorRGB = IMG_PIXEL(src, renderDotLoc + offset);

            // the amount of this channel is taken from the same channel of the color of the pixel of the input image under this halftone dot
            float imageChannelAmount = renderDotImageColorRGB[int(i)];

            // the size of the dot is determined by the value of the channel
            float dotRadius = imageChannelAmount * (gridSize * dotSize);
            float fragDistanceToDotCenter = distance(fragCoord.xy, renderDotLoc);
            if (fragDistanceToDotCenter < dotRadius) {
                rgbAmounts[int(i)] += smoothstep(dotRadius, dotRadius-(dotRadius*smoothing), fragDistanceToDotCenter);
            }

            // calcluate the size of the dots abov/below/to the left/right to see if they're overlapping
            for (float j=0.0; j<4.0; ++j) {
                gridDotLoc = vec2((gridOriginLoc.x+originOffsets[int(j)].x)*gridSize, (gridOriginLoc.y+originOffsets[int(j)].y)*gridSize) + vec2(gridSize/2.0);

                renderDotLoc = ccTrans * gridDotLoc;
                renderDotImageColorRGB = IMG_PIXEL(src, renderDotLoc + offset);

                imageChannelAmount = renderDotImageColorRGB[int(i)];
                dotRadius = imageChannelAmount * (gridSize*1.50/2.0);
                fragDistanceToDotCenter = distance(fragCoord.xy, renderDotLoc);
                if (fragDistanceToDotCenter < dotRadius) {
                    rgbAmounts[int(i)] += smoothstep(dotRadius, dotRadius-(dotRadius*smoothing), fragDistanceToDotCenter);
                }
            }
        }

        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 original = texture(src, uv);
        float alpha = step(.1, rgbAmounts[0] + rgbAmounts[1] + rgbAmounts[2] + original.a);

        outColor = vec4(rgbAmounts[0], rgbAmounts[1], rgbAmounts[2], alpha);
    }
    `,sinewave:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    float inside(in vec2 uv) {
        return step(0., uv.x) * step(uv.x, 1.) * step(0., uv.y) * step(uv.y, 1.);
    }

    vec4 draw(vec2 uv) {
        vec2 uvr = uv, uvg = uv, uvb = uv;

        float amp = 20. / resolution.x;

        uvr.x += sin(uv.y * 7. + time * 3.) * amp;
        uvg.x += sin(uv.y * 7. + time * 3. + .4) * amp;
        uvb.x += sin(uv.y * 7. + time * 3. + .8) * amp;

        vec4 cr = texture(src, uvr) * inside(uvr);
        vec4 cg = texture(src, uvg) * inside(uvg);
        vec4 cb = texture(src, uvb) * inside(uvb);

        return vec4(
            cr.r,
            cg.g,
            cb.b,
            cr.a + cg.a + cb.a
        );
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        // x blur
        vec2 dx = vec2(2, 0) / resolution.x;
        outColor = (draw(uv) * 2. + draw(uv + dx) + draw(uv - dx)) / 4.;
    }
    `,shine:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        vec2 p = uv * 2. - 1.;
        float a = atan(p.y, p.x);

        vec4 col = texture(src, uv);
        float gray = length(col.rgb);

        float level = 1. + sin(a * 10. + time * 3.) * 0.2;

        outColor = vec4(1, 1, .5, col.a) * level;
    }
    `,blink:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        outColor = texture(src, uv) * (sin(time * 5.) * 0.2 + 0.8);
    }

    `,spring:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    out vec4 outColor;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        uv = (uv - .5) * (1.05 + sin(time * 5.) * 0.05) + .5;

        if (uv.x < 0. || uv.x > 1. || uv.y < 0. || uv.y > 1.) { discard; }

        outColor = texture(src, uv);
    }
    `,duotone:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    uniform vec4 color1;
    uniform vec4 color2;
    uniform float speed;
    out vec4 outColor;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = texture(src, uv);

        float gray = dot(color.rgb, vec3(0.2, 0.7, 0.08));
        float t = mod(gray * 2.0 + time * speed, 2.0);

        if (t < 1.) {
            outColor = mix(color1, color2, fract(t));
        } else {
            outColor = mix(color2, color1, fract(t));
        }

        outColor.a *= color.a;
    }
    `,tritone:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    uniform vec4 color1;
    uniform vec4 color2;
    uniform vec4 color3;
    uniform float speed;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = texture(src, uv);

        float gray = dot(color.rgb, vec3(0.2, 0.7, 0.08));
        float t = mod(gray * 3.0 + time * speed, 3.0);

        if (t < 1.) {
            outColor = mix(color1, color2, fract(t));
        } else if (t < 2.) {
            outColor = mix(color2, color3, fract(t));
        } else {
            outColor = mix(color3, color1, fract(t));
        }

        outColor.a *= color.a;
    }
    `,hueShift:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform sampler2D src;
    uniform float shift;
    out vec4 outColor;

    vec3 hsv2rgb(vec3 c) {
        vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
        vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
        return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
    }

    vec3 rgb2hsv(vec3 c) {
        vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
        vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));
        vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));

        float d = q.x - min(q.w, q.y);
        float e = 1.0e-10;
        return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);
    }

    vec3 hueShift(vec3 rgb, float t) {
        vec3 hsv = rgb2hsv(rgb);
        hsv.x = fract(hsv.x + t);
        return hsv2rgb(hsv);
    }

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        vec4 color = texture(src, uv);
        color.rgb = hueShift(color.rgb, shift);
        outColor = color;
    }
    `,warpTransition:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float enterTime;
    uniform float leaveTime;
    uniform sampler2D src;
    out vec4 outColor;

    #define DURATION 1.0

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t1 = enterTime / DURATION;
        float t2 = leaveTime / DURATION;
        float t = clamp(min(t1, 1. - t2), 0., 1.);

        if (t == 0.) {
            discard;
        }

        if (t < 1.) {
            uv.x += sin(floor(uv.y * 300.)) * 3. * exp(t * -10.);
        }

        outColor = texture(src, uv);
    }
    `,slitScanTransition:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float enterTime;
    uniform float leaveTime;
    uniform sampler2D src;
    out vec4 outColor;

    #define DURATION 1.0

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t1 = enterTime / DURATION;
        float t2 = leaveTime / DURATION;

        // Do not render before enter or after leave
        if (t1 < 0. || 1. < t2) {
            discard;
        }

        if (0. < t2) {
            // Leaving
            float t = 1. - t2;
            uv.y = uv.y < t ? uv.y : t;
        } else if (t1 < 1.) {
            // Entering
            float t = 1. - t1;
            uv.y = uv.y < t ? t : uv.y;
        }

        outColor = texture(src, uv);
    }
    `,pixelateTransition:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float enterTime;
    uniform float leaveTime;
    uniform sampler2D src;
    out vec4 outColor;

    #define DURATION 1.0

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;

        float t1 = enterTime / DURATION;
        float t2 = leaveTime / DURATION;
        float t = clamp(min(t1, 1. - t2), 0., 1.);

        if (t == 0.) {
            discard;
        } else if (t < 1.) {
            float b = floor(t * 64.);
            uv = (floor(uv * b) + .5) / b;
        }

        outColor = texture(src, uv);
    }
    `,focusTransition:`
    precision highp float;
    uniform vec2 resolution;
    uniform vec2 offset;
    uniform float time;
    uniform float intersection;
    uniform sampler2D src;
    out vec4 outColor;

    void main (void) {
        vec2 uv = (gl_FragCoord.xy - offset) / resolution;
        float t = smoothstep(0., 1., intersection);

        outColor = mix(
            texture(src, uv + vec2(1. - t, 0)),
            texture(src, uv + vec2(-(1. - t), 0)),
            0.5
        ) * intersection;
    }
    `};function Bi(r){this.data=r,this.pos=0}Bi.prototype.readByte=function(){return this.data[this.pos++]},Bi.prototype.peekByte=function(){return this.data[this.pos]},Bi.prototype.readBytes=function(r){return this.data.subarray(this.pos,this.pos+=r)},Bi.prototype.peekBytes=function(r){return this.data.subarray(this.pos,this.pos+r)},Bi.prototype.readString=function(r){for(var e="",t=0;t<r;t++)e+=String.fromCharCode(this.readByte());return e},Bi.prototype.readBitArray=function(){for(var r=[],e=this.readByte(),t=7;t>=0;t--)r.push(!!(e&1<<t));return r},Bi.prototype.readUnsigned=function(r){var e=this.readBytes(2);return r?(e[1]<<8)+e[0]:(e[0]<<8)+e[1]};function Vs(r){this.stream=new Bi(r),this.output={}}Vs.prototype.parse=function(r){return this.parseParts(this.output,r),this.output},Vs.prototype.parseParts=function(r,e){for(var t=0;t<e.length;t++){var n=e[t];this.parsePart(r,n)}},Vs.prototype.parsePart=function(r,e){var t=e.label,n;if(!(e.requires&&!e.requires(this.stream,this.output,r)))if(e.loop){for(var i=[];e.loop(this.stream);){var s={};this.parseParts(s,e.parts),i.push(s)}r[t]=i}else e.parts?(n={},this.parseParts(n,e.parts),r[t]=n):e.parser?(n=e.parser(this.stream,this.output,r),e.skip||(r[t]=n)):e.bits&&(r[t]=this.parseBits(e.bits))};function A0(r){return r.reduce(function(e,t){return e*2+t},0)}Vs.prototype.parseBits=function(r){var e={},t=this.stream.readBitArray();for(var n in r){var i=r[n];i.length?e[n]=A0(t.slice(i.index,i.index+i.length)):e[n]=t[i.index]}return e};var gt={readByte:function(){return function(r){return r.readByte()}},readBytes:function(r){return function(e){return e.readBytes(r)}},readString:function(r){return function(e){return e.readString(r)}},readUnsigned:function(r){return function(e){return e.readUnsigned(r)}},readArray:function(r,e){return function(t,n,i){for(var s=e(t,n,i),o=new Array(s),a=0;a<s;a++)o[a]=t.readBytes(r);return o}}},ea={label:"blocks",parser:function(r){for(var e=[],t=0,n=0,i=r.readByte();i!==n;i=r.readByte())e.push(r.readBytes(i)),t+=i;var s=new Uint8Array(t);t=0;for(var o=0;o<e.length;o++)s.set(e[o],t),t+=e[o].length;return s}},C0={label:"gce",requires:function(r){var e=r.peekBytes(2);return e[0]===33&&e[1]===249},parts:[{label:"codes",parser:gt.readBytes(2),skip:!0},{label:"byteSize",parser:gt.readByte()},{label:"extras",bits:{future:{index:0,length:3},disposal:{index:3,length:3},userInput:{index:6},transparentColorGiven:{index:7}}},{label:"delay",parser:gt.readUnsigned(!0)},{label:"transparentColorIndex",parser:gt.readByte()},{label:"terminator",parser:gt.readByte(),skip:!0}]},R0={label:"image",requires:function(r){var e=r.peekByte();return e===44},parts:[{label:"code",parser:gt.readByte(),skip:!0},{label:"descriptor",parts:[{label:"left",parser:gt.readUnsigned(!0)},{label:"top",parser:gt.readUnsigned(!0)},{label:"width",parser:gt.readUnsigned(!0)},{label:"height",parser:gt.readUnsigned(!0)},{label:"lct",bits:{exists:{index:0},interlaced:{index:1},sort:{index:2},future:{index:3,length:2},size:{index:5,length:3}}}]},{label:"lct",requires:function(r,e,t){return t.descriptor.lct.exists},parser:gt.readArray(3,function(r,e,t){return Math.pow(2,t.descriptor.lct.size+1)})},{label:"data",parts:[{label:"minCodeSize",parser:gt.readByte()},ea]}]},P0={label:"text",requires:function(r){var e=r.peekBytes(2);return e[0]===33&&e[1]===1},parts:[{label:"codes",parser:gt.readBytes(2),skip:!0},{label:"blockSize",parser:gt.readByte()},{label:"preData",parser:function(r,e,t){return r.readBytes(t.text.blockSize)}},ea]},D0={label:"application",requires:function(r,e,t){var n=r.peekBytes(2);return n[0]===33&&n[1]===255},parts:[{label:"codes",parser:gt.readBytes(2),skip:!0},{label:"blockSize",parser:gt.readByte()},{label:"id",parser:function(r,e,t){return r.readString(t.blockSize)}},ea]},L0={label:"comment",requires:function(r,e,t){var n=r.peekBytes(2);return n[0]===33&&n[1]===254},parts:[{label:"codes",parser:gt.readBytes(2),skip:!0},ea]},I0={label:"frames",parts:[C0,D0,L0,R0,P0],loop:function(r){var e=r.peekByte();return e===33||e===44}},U0=[{label:"header",parts:[{label:"signature",parser:gt.readString(3)},{label:"version",parser:gt.readString(3)}]},{label:"lsd",parts:[{label:"width",parser:gt.readUnsigned(!0)},{label:"height",parser:gt.readUnsigned(!0)},{label:"gct",bits:{exists:{index:0},resolution:{index:1,length:3},sort:{index:4},size:{index:5,length:3}}},{label:"backgroundColorIndex",parser:gt.readByte()},{label:"pixelAspectRatio",parser:gt.readByte()}]},{label:"gct",requires:function(r,e){return e.lsd.gct.exists},parser:gt.readArray(3,function(r,e){return Math.pow(2,e.lsd.gct.size+1)})},I0];function ic(r){var e=new Uint8Array(r),t=new Vs(e);this.raw=t.parse(U0),this.raw.hasImages=!1;for(var n=0;n<this.raw.frames.length;n++)if(this.raw.frames[n].image){this.raw.hasImages=!0;break}}ic.prototype.decompressFrame=function(r,e){if(r>=this.raw.frames.length)return null;var t=this.raw.frames[r];if(t.image){var n=t.image.descriptor.width*t.image.descriptor.height,i=o(t.image.data.minCodeSize,t.image.data.blocks,n);t.image.descriptor.lct.interlaced&&(i=a(i,t.image.descriptor.width));var s={pixels:i,dims:{top:t.image.descriptor.top,left:t.image.descriptor.left,width:t.image.descriptor.width,height:t.image.descriptor.height}};return t.image.descriptor.lct&&t.image.descriptor.lct.exists?s.colorTable=t.image.lct:s.colorTable=this.raw.gct,t.gce&&(s.delay=(t.gce.delay||10)*10,s.disposalType=t.gce.extras.disposal,t.gce.extras.transparentColorGiven&&(s.transparentIndex=t.gce.transparentColorIndex)),e&&(s.patch=l(s)),s}return null;function o(c,f,h){var d=4096,u=-1,g=h,_,m,p,T,E,y,w,A,b,C,v,S,P,z,I,k,$=new Array(h),B=new Array(d),K=new Array(d),H=new Array(d+1);for(S=c,m=1<<S,E=m+1,_=m+2,w=u,T=S+1,p=(1<<T)-1,b=0;b<m;b++)B[b]=0,K[b]=b;for(v=A=P=z=k=I=0,C=0;C<g;){if(z===0){if(A<T){v+=f[I]<<A,A+=8,I++;continue}if(b=v&p,v>>=T,A-=T,b>_||b==E)break;if(b==m){T=S+1,p=(1<<T)-1,_=m+2,w=u;continue}if(w==u){H[z++]=K[b],w=b,P=b;continue}for(y=b,b==_&&(H[z++]=P,b=w);b>m;)H[z++]=K[b],b=B[b];P=K[b]&255,H[z++]=P,_<d&&(B[_]=w,K[_]=P,_++,!(_&p)&&_<d&&(T++,p+=_)),w=y}z--,$[k++]=H[z],C++}for(C=k;C<g;C++)$[C]=0;return $}function a(c,f){for(var h=new Array(c.length),d=c.length/f,u=function(E,y){var w=c.slice(y*f,(y+1)*f);h.splice.apply(h,[E*f,f].concat(w))},g=[0,4,2,1],_=[8,8,4,2],m=0,p=0;p<4;p++)for(var T=g[p];T<d;T+=_[p])u(T,m),m++;return h}function l(c){for(var f=c.pixels.length,h=new Uint8ClampedArray(f*4),d=0;d<f;d++){var u=d*4,g=c.pixels[d],_=c.colorTable[g];h[u]=_[0],h[u+1]=_[1],h[u+2]=_[2],h[u+3]=g!==c.transparentIndex?255:0}return h}},ic.prototype.decompressFrames=function(r,e,t){e===void 0&&(e=0),t===void 0?t=this.raw.frames.length:t=Math.min(t,this.raw.frames.length);for(var n=[],i=e;i<t;i++){var s=this.raw.frames[i];s.image&&n.push(this.decompressFrame(i,r))}return n};var F0=function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(f){try{c(n.next(f))}catch(h){o(h)}}function l(f){try{c(n.throw(f))}catch(h){o(h)}}function c(f){f.done?s(f.value):i(f.value).then(a,l)}c((n=n.apply(r,e||[])).next())})};class rc{static create(e,t){return F0(this,void 0,void 0,function*(){const n=yield fetch(e).then(a=>a.arrayBuffer()).then(a=>new ic(a)),i=n.decompressFrames(!0,void 0,void 0),s=n.raw.lsd.width,o=n.raw.lsd.height;return new rc(i,s,o,t)})}constructor(e,t,n,i){this.frames=[],this.index=0,this.playTime=0,this.frames=e,this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"),this.pixelRatio=i,this.canvas.width=t,this.canvas.height=n,this.startTime=Date.now()}getCanvas(){return this.canvas}update(){const t=Date.now()-this.startTime;for(;this.playTime<t;){const s=this.frames[this.index%this.frames.length];this.playTime+=s.delay,this.index++}const n=this.frames[this.index%this.frames.length],i=new ImageData(n.patch,n.dims.width,n.dims.height);this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height),this.ctx.putImageData(i,n.dims.left,n.dims.top)}}function N0(r,e,t,n){return{top:r,right:e,bottom:t,left:n}}const Yf=N0(0,0,0,0);function qf(r){var e,t,n,i;return typeof r=="number"?{top:r,right:r,bottom:r,left:r}:Array.isArray(r)?{top:r[0],right:r[1],bottom:r[2],left:r[3]}:{top:(e=r.top)!==null&&e!==void 0?e:0,right:(t=r.right)!==null&&t!==void 0?t:0,bottom:(n=r.bottom)!==null&&n!==void 0?n:0,left:(i=r.left)!==null&&i!==void 0?i:0}}function ta(r,e){return{top:r.top-e.top,right:r.right+e.right,bottom:r.bottom+e.bottom,left:r.left-e.left}}function na(r,e,t){return Math.min(Math.max(r,e),t)}function $f(r,e){const t=na(e.left,r.left,r.right),i=(na(e.right,r.left,r.right)-t)/(e.right-e.left),s=na(e.top,r.top,r.bottom),a=(na(e.bottom,r.top,r.bottom)-s)/(e.bottom-e.top);return i*a}var sc=function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(f){try{c(n.next(f))}catch(h){o(h)}}function l(f){try{c(n.throw(f))}catch(h){o(h)}}function c(f){f.done?s(f.value):i(f.value).then(a,l)}c((n=n.apply(r,e||[])).next())})},Qn=function(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},we=function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)},ei,Hs,Vn,rs,zi,Hn,wn,oc,An,ia,ra,Gs,Kf,Zf,jf,Ws,sa,oa,aa,Jf,Qf;const eh=new Map;class O0{constructor(e,t){ei.add(this),Hs.set(this,void 0),Vn.set(this,void 0),rs.set(this,void 0),zi.set(this,void 0),Hn.set(this,2),wn.set(this,[]),oc.set(this,new vm),An.set(this,{left:0,right:0,top:0,bottom:0}),ia.set(this,0),ra.set(this,0),Gs.set(this,new WeakMap),Ws.set(this,()=>sc(this,void 0,void 0,function*(){if(typeof window<"u"){for(const n of we(this,wn,"f"))if(n.type==="text"&&n.isInViewport){const i=n.element.getBoundingClientRect();(i.width!==n.width||i.height!==n.height)&&(yield we(this,ei,"m",oa).call(this,n),n.width=i.width,n.height=i.height)}for(const n of we(this,wn,"f"))if(n.type==="text"&&!n.isInViewport){const i=n.element.getBoundingClientRect();(i.width!==n.width||i.height!==n.height)&&(yield we(this,ei,"m",oa).call(this,n),n.width=i.width,n.height=i.height)}}})),sa.set(this,n=>{typeof window<"u"&&(Qn(this,ia,n.clientX,"f"),Qn(this,ra,window.innerHeight-n.clientY,"f"))}),aa.set(this,()=>{var n;const i=Date.now()/1e3;we(this,Vn,"f").clear(),we(this,ei,"m",Kf).call(this);for(const s of we(this,wn,"f")){const o=s.element.getBoundingClientRect(),a=ta(o,s.overflow),l=s.isFullScreen||ac(we(this,An,"f"),a),c=ta(we(this,An,"f"),s.intersection.rootMargin),f=$f(c,o),h=s.isFullScreen||th(c,o,f,s.intersection.threshold);if(!s.isInLogicalViewport&&h&&(s.enterTime=i,s.leaveTime=1/0),s.isInLogicalViewport&&!h&&(s.leaveTime=i),s.isInViewport=l,s.isInLogicalViewport=h,!(!l||i-s.leaveTime>s.release)){s.uniforms.time.value=i-s.startTime,s.uniforms.enterTime.value=i-s.enterTime,s.uniforms.leaveTime.value=i-s.leaveTime,s.uniforms.resolution.value.x=o.width*we(this,Hn,"f"),s.uniforms.resolution.value.y=o.height*we(this,Hn,"f"),s.uniforms.offset.value.x=o.left*we(this,Hn,"f"),s.uniforms.offset.value.y=(window.innerHeight-o.top-o.height)*we(this,Hn,"f"),s.uniforms.mouse.value.x=we(this,ia,"f")*we(this,Hn,"f"),s.uniforms.mouse.value.y=we(this,ra,"f")*we(this,Hn,"f"),s.uniforms.intersection.value=f;for(const[d,u]of Object.entries(s.uniformGenerators))s.uniforms[d].value=u();(n=eh.get(s.element))===null||n===void 0||n.update(),(s.type==="video"||s.isGif)&&(s.uniforms.src.value.needsUpdate=!0),s.isFullScreen?we(this,Vn,"f").setViewport(0,0,window.innerWidth,window.innerHeight):we(this,Vn,"f").setViewport(o.left-s.overflow.left,window.innerHeight-(o.top+o.height)-s.overflow.bottom,o.width+(s.overflow.left+s.overflow.right),o.height+(s.overflow.top+s.overflow.bottom)),we(this,rs,"f").lookAt(s.scene.position);try{we(this,Vn,"f").render(s.scene,we(this,rs,"f"))}catch(d){console.error(d)}}}this.isPlaying()&&Qn(this,zi,requestAnimationFrame(we(this,aa,"f")),"f")}),Qn(this,Hs,e,"f"),Qn(this,Vn,new M0({canvas:e,alpha:!0}),"f"),we(this,Vn,"f").autoClear=!1,we(this,Vn,"f").setClearAlpha(0),typeof window<"u"&&(Qn(this,Hn,t||window.devicePixelRatio,"f"),window.addEventListener("resize",we(this,Ws,"f")),window.addEventListener("mousemove",we(this,sa,"f"))),we(this,Ws,"f").call(this),Qn(this,rs,new hf(-1,1,1,-1,.1,10),"f"),we(this,rs,"f").position.set(0,0,1)}destroy(){this.stop(),typeof window<"u"&&(window.removeEventListener("resize",we(this,Ws,"f")),window.removeEventListener("mousemove",we(this,sa,"f")))}addElement(e){return sc(this,arguments,void 0,function*(t,n={}){var i,s;const o=we(this,ei,"m",Jf).call(this,n.shader||"uvGradient"),a=we(this,ei,"m",Qf).call(this,n.glslVersion,o),l=t.getBoundingClientRect(),[c,f]=B0(n.overflow),h=ta(l,f),d=z0(n.intersection),u=c||ac(we(this,An,"f"),h),g=ta(we(this,An,"f"),d.rootMargin),_=$f(we(this,An,"f"),l),m=c||th(g,l,_,d.threshold),p=t.style.opacity===""?1:parseFloat(t.style.opacity);let T,E,y=!1;if(t instanceof HTMLImageElement)if(E="img",y=!!t.src.match(/\.gif/i),y){const k=yield rc.create(t.src,we(this,Hn,"f"));eh.set(t,k),T=new Bt(k.getCanvas())}else T=we(this,oc,"f").load(t.src);else if(t instanceof HTMLVideoElement)T=new hm(t),E="video";else if(t instanceof HTMLCanvasElement)T=new $o(t),E="canvas";else{const k=yield Gf(t,p);T=new $o(k),E="text"}const[w,A]=k0(n.wrap);if(T.wrapS=w,T.wrapT=A,T.minFilter=nn,T.magFilter=nn,T.format=En,T.needsUpdate=!0,n.overlay!==!0)if(typeof n.overlay=="number")t.style.setProperty("opacity",n.overlay.toString());else{const k=E==="video"?"0.0001":"0";t.style.setProperty("opacity",k.toString())}const b={src:{value:T},resolution:{value:new at},offset:{value:new at},time:{value:0},enterTime:{value:-1},leaveTime:{value:-1},mouse:{value:new at},intersection:{value:_}},C={};if(n.uniforms!==void 0){const k=Object.keys(n.uniforms);for(const $ of k){const B=n.uniforms[$];typeof B=="function"?(b[$]={value:B()},C[$]=B):b[$]={value:B}}}const v=new cm,S=new zs(2,2),P=new xi({vertexShader:w0,fragmentShader:o,transparent:!0,uniforms:b,glslVersion:a});v.add(new jn(S,P));const z=Date.now()/1e3,I={type:E,element:t,isInViewport:u,isInLogicalViewport:m,width:l.width,height:l.height,scene:v,uniforms:b,uniformGenerators:C,startTime:z,enterTime:m?z:-1/0,leaveTime:m?1/0:-1/0,release:(i=n.release)!==null&&i!==void 0?i:1/0,isGif:y,isFullScreen:c,overflow:f,intersection:d,originalOpacity:p,zIndex:(s=n.zIndex)!==null&&s!==void 0?s:0};we(this,wn,"f").push(I),we(this,wn,"f").sort((k,$)=>k.zIndex-$.zIndex)})}removeElement(e){const t=we(this,wn,"f").findIndex(n=>n.element===e);if(t!==-1){const n=we(this,wn,"f").splice(t,1)[0];e.style.setProperty("opacity",n.originalOpacity.toString())}}updateTextElement(e){const t=we(this,wn,"f").findIndex(n=>n.element===e);return t!==-1?we(this,ei,"m",oa).call(this,we(this,wn,"f")[t]):Promise.resolve()}updateCanvasElement(e){const t=we(this,wn,"f").find(n=>n.element===e);if(t){const n=t.uniforms.src.value,i=new $o(e);i.wrapS=n.wrapS,i.wrapT=n.wrapT,t.uniforms.src.value=i,n.dispose()}}isPlaying(){return we(this,zi,"f")!==void 0}play(){this.isPlaying()||Qn(this,zi,requestAnimationFrame(we(this,aa,"f")),"f")}stop(){we(this,zi,"f")!==void 0&&(cancelAnimationFrame(we(this,zi,"f")),Qn(this,zi,void 0,"f"))}}Hs=new WeakMap,Vn=new WeakMap,rs=new WeakMap,zi=new WeakMap,Hn=new WeakMap,wn=new WeakMap,oc=new WeakMap,An=new WeakMap,ia=new WeakMap,ra=new WeakMap,Gs=new WeakMap,Ws=new WeakMap,sa=new WeakMap,aa=new WeakMap,ei=new WeakSet,Kf=function(){if(typeof window<"u"){const e=window.innerWidth,t=window.innerHeight;(e!==we(this,ei,"m",Zf).call(this)||t!==we(this,ei,"m",jf).call(this))&&(we(this,Hs,"f").width=e,we(this,Hs,"f").height=t,we(this,Vn,"f").setSize(e,t),we(this,Vn,"f").setPixelRatio(we(this,Hn,"f")),Qn(this,An,{top:0,left:0,right:e,bottom:t},"f"))}},Zf=function(){return we(this,An,"f").right-we(this,An,"f").left},jf=function(){return we(this,An,"f").bottom-we(this,An,"f").top},oa=function(e){return sc(this,void 0,void 0,function*(){if(!we(this,Gs,"f").get(e.element)){we(this,Gs,"f").set(e.element,!0);try{const t=e.uniforms.src.value,n=t.image,i=yield Gf(e.element,e.originalOpacity,n);if(i.width===0||i.width===0)throw"omg";const s=new $o(i);s.wrapS=t.wrapS,s.wrapT=t.wrapT,e.uniforms.src.value=s,t.dispose()}catch(t){console.error(t)}we(this,Gs,"f").set(e.element,!1)}})},Jf=function(e){return e in Xf?Xf[e]:e},Qf=function(e,t){if(e)return e;if(t.includes("out vec4"))return"300 es";if(t.includes("gl_FragColor"))return"100";throw`VFX-JS error: Cannot detect GLSL version of the shader.

Original shader:
${t}`};function ac(r,e){return e.left<=r.right&&e.right>=r.left&&e.top<=r.bottom&&e.bottom>=r.top}function th(r,e,t,n){return n===0?ac(r,e):t>=n}function B0(r){return r===!0?[!0,Yf]:r===void 0?[!1,Yf]:[!1,qf(r)]}function z0(r){var e,t;const n=(e=r==null?void 0:r.threshold)!==null&&e!==void 0?e:0,i=qf((t=r==null?void 0:r.rootMargin)!==null&&t!==void 0?t:0);return{threshold:n,rootMargin:i}}function lc(r){return r==="repeat"?xo:r==="mirror"?yo:Kn}function k0(r){if(!r)return[Kn,Kn];if(Array.isArray(r))return[lc(r[0]),lc(r[1])];{const e=lc(r);return[e,e]}}var V0=function(r,e,t,n){function i(s){return s instanceof t?s:new t(function(o){o(s)})}return new(t||(t=Promise))(function(s,o){function a(f){try{c(n.next(f))}catch(h){o(h)}}function l(f){try{c(n.throw(f))}catch(h){o(h)}}function c(f){f.done?s(f.value):i(f.value).then(a,l)}c((n=n.apply(r,e||[])).next())})},nh=function(r,e,t,n,i){if(n==="m")throw new TypeError("Private method is not writable");if(n==="a"&&!i)throw new TypeError("Private accessor was defined without a setter");if(typeof e=="function"?r!==e||!i:!e.has(r))throw new TypeError("Cannot write private member to an object whose class did not declare it");return n==="a"?i.call(r,t):i?i.value=t:e.set(r,t),t},kt=function(r,e,t,n){if(t==="a"&&!n)throw new TypeError("Private accessor was defined without a getter");if(typeof e=="function"?r!==e||!n:!e.has(r))throw new TypeError("Cannot read private member from an object whose class did not declare it");return t==="m"?n:t==="a"?n.call(r):n?n.value:e.get(r)},ss,Yt,la,ih,rh,sh,oh;const H0={position:"fixed",top:0,left:0,width:"100vw",height:"100vh","z-index":9999,"pointer-events":"none"};class G0{constructor(e={}){ss.add(this),Yt.set(this,void 0),la.set(this,void 0);const t=document.createElement("canvas");for(const[n,i]of Object.entries(H0))t.style.setProperty(n,i.toString());e.zIndex!==void 0&&t.style.setProperty("z-index",e.zIndex.toString()),document.body.appendChild(t),nh(this,la,t,"f"),nh(this,Yt,new O0(t,e.pixelRatio),"f"),kt(this,Yt,"f").play()}add(e,t){e instanceof HTMLImageElement?kt(this,ss,"m",ih).call(this,e,t):e instanceof HTMLVideoElement?kt(this,ss,"m",rh).call(this,e,t):e instanceof HTMLCanvasElement?kt(this,ss,"m",sh).call(this,e,t):kt(this,ss,"m",oh).call(this,e,t)}remove(e){kt(this,Yt,"f").removeElement(e)}update(e){return V0(this,void 0,void 0,function*(){if(e instanceof HTMLCanvasElement){kt(this,Yt,"f").updateCanvasElement(e);return}else return kt(this,Yt,"f").updateTextElement(e)})}play(){kt(this,Yt,"f").play()}stop(){kt(this,Yt,"f").stop()}destroy(){kt(this,Yt,"f").destroy(),kt(this,la,"f").remove()}}Yt=new WeakMap,la=new WeakMap,ss=new WeakSet,ih=function(e,t){e.complete?kt(this,Yt,"f").addElement(e,t):e.addEventListener("load",()=>{kt(this,Yt,"f").addElement(e,t)},{once:!0})},rh=function(e,t){e.readyState>=3?kt(this,Yt,"f").addElement(e,t):e.addEventListener("canplay",()=>{kt(this,Yt,"f").addElement(e,t)},{once:!0})},sh=function(e,t){kt(this,Yt,"f").addElement(e,t)},oh=function(e,t){kt(this,Yt,"f").addElement(e,t)};function W0(){Xd(),Yd()}const X0=document.getElementById("404");new G0().add(X0,{shader:"glitch",overflow:100});function Y0(){W0()}function q0(){console.log("Home Component Starter Initialized")}function $0(){q0()}function K0(){$0()}function Z0(){console.log("About Component Animation Starter Initialized")}function j0(){Z0()}function J0(){j0()}function Q0(){const r=document.querySelector("[data-page-name]");if(!r){console.warn("No data-page-name attribute found on the page wrapper.");return}const e=r.getAttribute("data-page-name");Y0();const n={home:K0,about:J0}[e];n?n():console.warn(`No specific animations found for page: ${e}`)}function yi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function ah(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.12.5
 * https://gsap.com
 *
 * @license Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var mn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},os={duration:.5,overwrite:!1,delay:0},cc,qt,vt,ti=1e8,$t=1/ti,uc=Math.PI*2,ex=uc/4,tx=0,lh=Math.sqrt,nx=Math.cos,ix=Math.sin,Vt=function(e){return typeof e=="string"},Et=function(e){return typeof e=="function"},Si=function(e){return typeof e=="number"},fc=function(e){return typeof e>"u"},ni=function(e){return typeof e=="object"},sn=function(e){return e!==!1},hc=function(){return typeof window<"u"},ca=function(e){return Et(e)||Vt(e)},ch=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Kt=Array.isArray,dc=/(?:-?\.?\d|\.)+/gi,uh=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,as=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,pc=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,fh=/[+-]=-?[.\d]+/,hh=/[^,'"\[\]\s]+/gi,rx=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,yt,ii,mc,_c,_n={},ua={},dh,ph=function(e){return(ua=pr(e,_n))&&ln},gc=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Xs=function(e,t){return!t&&console.warn(e)},mh=function(e,t){return e&&(_n[e]=t)&&ua&&(ua[e]=t)||_n},Ys=function(){return 0},sx={suppressEvents:!0,isStart:!0,kill:!1},fa={suppressEvents:!0,kill:!1},ox={suppressEvents:!0},vc={},ki=[],xc={},_h,gn={},yc={},gh=30,ha=[],Sc="",Mc=function(e){var t=e[0],n,i;if(ni(t)||Et(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=ha.length;i--&&!ha[i].targetTest(t););n=ha[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Yh(e[i],n)))||e.splice(i,1);return e},dr=function(e){return e._gsap||Mc(Pn(e))[0]._gsap},vh=function(e,t,n){return(n=e[t])&&Et(n)?e[t]():fc(n)&&e.getAttribute&&e.getAttribute(t)||n},on=function(e,t){return(e=e.split(",")).forEach(t)||e},wt=function(e){return Math.round(e*1e5)/1e5||0},Ht=function(e){return Math.round(e*1e7)/1e7||0},ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ax=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},da=function(){var e=ki.length,t=ki.slice(0),n,i;for(xc={},ki.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},xh=function(e,t,n,i){ki.length&&!qt&&da(),e.render(t,n,qt&&t<0&&(e._initted||e._startAt)),ki.length&&!qt&&da()},yh=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(hh).length<2?t:Vt(e)?e.trim():e},Sh=function(e){return e},Cn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},lx=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},pr=function(e,t){for(var n in t)e[n]=t[n];return e},Mh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=ni(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},pa=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qs=function(e){var t=e.parent||yt,n=e.keyframes?lx(Kt(e.keyframes)):Cn;if(sn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},cx=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Eh=function(e,t,n,i,s){var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},ma=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Vi=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},mr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ux=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ec=function(e,t,n,i){return e._startAt&&(qt?e._startAt.revert(fa):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},fx=function r(e){return!e||e._ts&&r(e.parent)},Th=function(e){return e._repeat?cs(e._tTime,e=e.duration()+e._rDelay)*e:0},cs=function(e,t){var n=Math.floor(e/=t);return e&&n===e?n-1:n},_a=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},ga=function(e){return e._end=Ht(e._start+(e._tDur/Math.abs(e._ts||e._rts||$t)||0))},va=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Ht(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),ga(e),n._dirty||mr(n,e)),e},bh=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=_a(e.rawTime(),t),(!t._dur||Ks(0,t.totalDuration(),n)-t._tTime>$t)&&t.render(n,!0)),mr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-1e-8}},ri=function(e,t,n,i){return t.parent&&Vi(t),t._start=Ht((Si(n)?n:n||e!==yt?Rn(e,n,t):e._time)+t._delay),t._end=Ht(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Eh(e,t,"_first","_last",e._sort?"_start":0),Tc(t)||(e._recent=t),i||bh(e,t),e._ts<0&&va(e,e._tTime),e},wh=function(e,t){return(_n.ScrollTrigger||gc("scrollTrigger",t))&&_n.ScrollTrigger.create(t,e)},Ah=function(e,t,n,i,s){if(Ic(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&_h!==xn.frame)return ki.push(e),e._lazy=[s,i],1},hx=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Tc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},dx=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&hx(e)&&!(!e._initted&&Tc(e))||(e._ts<0||e._dp._ts<0)&&!Tc(e))?0:1,a=e._rDelay,l=0,c,f,h;if(a&&e._repeat&&(l=Ks(0,e._tDur,t),f=cs(l,a),e._yoyo&&f&1&&(o=1-o),f!==cs(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||i||e._zTime===$t||!t&&e._zTime){if(!e._initted&&Ah(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?$t:0),n||(n=t&&!h),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Ec(e,t,n,!0),e._onUpdate&&!n&&vn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&vn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Vi(e,1),!n&&!qt&&(vn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},px=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},us=function(e,t,n,i){var s=e._repeat,o=Ht(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Ht(o*(s+1)+e._rDelay*s):o,a>0&&!i&&va(e,e._tTime=e._tDur*a),e.parent&&ga(e),n||mr(e.parent,e),e},Ch=function(e){return e instanceof Jt?mr(e):us(e,e._dur)},mx={_start:0,endTime:Ys,totalDuration:Ys},Rn=function r(e,t,n){var i=e.labels,s=e._recent||mx,o=e.duration()>=ti?s.endTime(!1):e._dur,a,l,c;return Vt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(Kt(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},$s=function(e,t,n){var i=Si(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=sn(l.vars.inherit)&&l.parent;o.immediateRender=sn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Pt(t[0],o,t[s+1])},Hi=function(e,t){return e||e===0?t(e):t},Ks=function(e,t,n){return n<e?e:n>t?t:n},Zt=function(e,t){return!Vt(e)||!(t=rx.exec(e))?"":t[1]},_x=function(e,t,n){return Hi(n,function(i){return Ks(e,t,i)})},bc=[].slice,Rh=function(e,t){return e&&ni(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&ni(e[0]))&&!e.nodeType&&e!==ii},gx=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Vt(i)&&!t||Rh(i,1)?(s=n).push.apply(s,Pn(i)):n.push(i)})||n},Pn=function(e,t,n){return vt&&!t&&vt.selector?vt.selector(e):Vt(e)&&!n&&(mc||!hs())?bc.call((t||_c).querySelectorAll(e),0):Kt(e)?gx(e,n):Rh(e)?bc.call(e,0):e?[e]:[]},wc=function(e){return e=Pn(e)[0]||Xs("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Pn(t,n.querySelectorAll?n:n===e?Xs("Invalid scope")||_c.createElement("div"):e)}},Ph=function(e){return e.sort(function(){return .5-Math.random()})},Dh=function(e){if(Et(e))return e;var t=ni(e)?e:{each:e},n=_r(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,f=i,h=i;return Vt(i)?f=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(f=i[0],h=i[1]),function(d,u,g){var _=(g||t).length,m=o[_],p,T,E,y,w,A,b,C,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,ti])[1],!v){for(b=-1e8;b<(b=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=o[_]=[],p=l?Math.min(v,_)*f-.5:i%v,T=v===ti?0:l?_*h/v-.5:i/v|0,b=0,C=ti,A=0;A<_;A++)E=A%v-p,y=T-(A/v|0),m[A]=w=c?Math.abs(c==="y"?y:E):lh(E*E+y*y),w>b&&(b=w),w<C&&(C=w);i==="random"&&Ph(m),m.max=b-C,m.min=C,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=Zt(t.amount||t.each)||0,n=n&&_<0?Gh(n):n}return _=(m[d]-m.min)/m.max||0,Ht(m.b+(n?n(_):_)*m.v)+m.u}},Ac=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Ht(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Si(n)?0:Zt(n))}},Lh=function(e,t){var n=Kt(e),i,s;return!n&&ni(e)&&(i=n=e.radius||ti,e.values?(e=Pn(e.values),(s=!Si(e[0]))&&(i*=i)):e=Ac(e.increment)),Hi(t,n?Et(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ti,f=0,h=e.length,d,u;h--;)s?(d=e[h].x-a,u=e[h].y-l,d=d*d+u*u):d=Math.abs(e[h]-a),d<c&&(c=d,f=h);return f=!i||c<=i?e[f]:o,s||f===o||Si(o)?f:f+Zt(o)}:Ac(e))},Ih=function(e,t,n,i){return Hi(Kt(e)?!t:n===!0?!!(n=0):!i,function(){return Kt(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},vx=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},xx=function(e,t){return function(n){return e(parseFloat(n))+(t||Zt(n))}},yx=function(e,t,n){return Fh(e,t,0,1,n)},Uh=function(e,t,n){return Hi(n,function(i){return e[~~t(i)]})},Sx=function r(e,t,n){var i=t-e;return Kt(e)?Uh(e,r(0,e.length),t):Hi(n,function(s){return(i+(s-e)%i)%i+e})},Mx=function r(e,t,n){var i=t-e,s=i*2;return Kt(e)?Uh(e,r(0,e.length-1),t):Hi(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Zs=function(e){for(var t=0,n="",i,s,o,a;~(i=e.indexOf("random(",t));)o=e.indexOf(")",i),a=e.charAt(i+7)==="[",s=e.substr(i+7,o-i-7).match(a?hh:dc),n+=e.substr(t,i-t)+Ih(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return n+e.substr(t,e.length-t)},Fh=function(e,t,n,i,s){var o=t-e,a=i-n;return Hi(s,function(l){return n+((l-e)/o*a||0)})},Ex=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var o=Vt(e),a={},l,c,f,h,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(Kt(e)&&!Kt(t)){for(f=[],h=e.length,d=h-2,c=1;c<h;c++)f.push(r(e[c-1],e[c]));h--,s=function(g){g*=h;var _=Math.min(d,~~g);return f[_](g-_)},n=t}else i||(e=pr(Kt(e)?[]:{},e));if(!f){for(l in t)Dc.call(a,e,l,"get",t[l]);s=function(g){return Nc(g,a)||(o?e.p:e)}}}return Hi(n,s)},Nh=function(e,t,n){var i=e.labels,s=ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},vn=function(e,t,n){var i=e.vars,s=i[t],o=vt,a=e._ctx,l,c,f;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&ki.length&&da(),a&&(vt=a),f=l?s.apply(c,l):s.call(c),vt=o,f},js=function(e){return Vi(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&vn(e,"onInterrupt"),e},fs,Oh=[],Bh=function(e){if(e)if(e=!e.name&&e.default||e,hc()||e.headless){var t=e.name,n=Et(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Ys,render:Nc,add:Dc,kill:zx,modifier:Bx,rawVars:0},o={targetTest:0,get:0,getSetter:Fc,aliases:{},register:0};if(hs(),e!==i){if(gn[t])return;Cn(i,Cn(pa(e,s),o)),pr(i.prototype,pr(s,pa(e,o))),gn[i.prop=t]=i,e.targetTest&&(ha.push(i),vc[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}mh(t,i),e.register&&e.register(ln,i,an)}else Oh.push(e)},dt=255,Js={aqua:[0,dt,dt],lime:[0,dt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,dt],navy:[0,0,128],white:[dt,dt,dt],olive:[128,128,0],yellow:[dt,dt,0],orange:[dt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[dt,0,0],pink:[dt,192,203],cyan:[0,dt,dt],transparent:[dt,dt,dt,0]},Cc=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*dt+.5|0},zh=function(e,t,n){var i=e?Si(e)?[e>>16,e>>8&dt,e&dt]:0:Js.black,s,o,a,l,c,f,h,d,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Js[e])i=Js[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&dt,i&dt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&dt,e&dt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(dc),!t)l=+i[0]%360/360,c=+i[1]/100,f=+i[2]/100,o=f<=.5?f*(c+1):f+c-f*c,s=f*2-o,i.length>3&&(i[3]*=1),i[0]=Cc(l+1/3,s,o),i[1]=Cc(l,s,o),i[2]=Cc(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(uh),n&&i.length<4&&(i[3]=1),i}else i=e.match(dc)||Js.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/dt,o=i[1]/dt,a=i[2]/dt,h=Math.max(s,o,a),d=Math.min(s,o,a),f=(h+d)/2,h===d?l=c=0:(u=h-d,c=f>.5?u/(2-h-d):u/(h+d),l=h===s?(o-a)/u+(o<a?6:0):h===o?(a-s)/u+2:(s-o)/u+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},kh=function(e){var t=[],n=[],i=-1;return e.split(Gi).forEach(function(s){var o=s.match(as)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Vh=function(e,t,n){var i="",s=(e+i).match(Gi),o=t?"hsla(":"rgba(",a=0,l,c,f,h;if(!s)return e;if(s=s.map(function(d){return(d=zh(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(f=kh(e),l=n.c,l.join(i)!==f.c.join(i)))for(c=e.replace(Gi,"1").split(as),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!c)for(c=e.split(Gi),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},Gi=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Js)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),Tx=/hsl[a]?\(/,Hh=function(e){var t=e.join(" "),n;if(Gi.lastIndex=0,Gi.test(t))return n=Tx.test(t),e[1]=Vh(e[1],n),e[0]=Vh(e[0],n,kh(e[1])),!0},Qs,xn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,f,h,d,u,g=function _(m){var p=r()-i,T=m===!0,E,y,w,A;if((p>e||p<0)&&(n+=p-t),i+=p,w=i-n,E=w-o,(E>0||T)&&(A=++h.frame,d=w-h.time*1e3,h.time=w=w/1e3,o+=E+(E>=s?4:s-E),y=1),T||(l=c(_)),y)for(u=0;u<a.length;u++)a[u](w,d,A,m)};return h={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){dh&&(!mc&&hc()&&(ii=mc=window,_c=ii.document||{},_n.gsap=ln,(ii.gsapVersions||(ii.gsapVersions=[])).push(ln.version),ph(ua||ii.GreenSockGlobals||!ii.gsap&&ii||{}),Oh.forEach(Bh)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=f||function(m){return setTimeout(m,o-h.time*1e3+1|0)},Qs=1,g(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(l),Qs=0,c=Ys},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),o=h.time*1e3+s},add:function(m,p,T){var E=p?function(y,w,A,b){m(y,w,A,b),h.remove(E)}:m;return h.remove(m),a[T?"unshift":"push"](E),hs(),E},remove:function(m,p){~(p=a.indexOf(m))&&a.splice(p,1)&&u>=p&&u--},_listeners:a},h}(),hs=function(){return!Qs&&xn.wake()},Je={},bx=/^[\d.\-M][\d.\-,\s]/,wx=/["']/g,Ax=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(wx,"").trim():+c,i=l.substr(a+1).trim();return t},Cx=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},Rx=function(e){var t=(e+"").split("("),n=Je[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ax(t[1])]:Cx(e).split(",").map(yh)):Je._CE&&bx.test(e)?Je._CE("",e):n},Gh=function(e){return function(t){return 1-e(1-t)}},Wh=function r(e,t){for(var n=e._first,i;n;)n instanceof Jt?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},_r=function(e,t){return e&&(Et(e)?e:Je[e]||Rx(e))||t},gr=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return on(e,function(a){Je[a]=_n[a]=s,Je[o=a.toLowerCase()]=n;for(var l in s)Je[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Je[a+"."+l]=s[l]}),s},Xh=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Rc=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/uc*(Math.asin(1/i)||0),a=function(f){return f===1?1:i*Math.pow(2,-10*f)*ix((f-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:Xh(a);return s=uc/s,l.config=function(c,f){return r(e,c,f)},l},Pc=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Xh(n);return i.config=function(s){return r(e,s)},i};on("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gr(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})}),Je.Linear.easeNone=Je.none=Je.Linear.easeIn,gr("Elastic",Rc("in"),Rc("out"),Rc()),function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};gr("Bounce",function(o){return 1-s(1-o)},s)}(7.5625,2.75),gr("Expo",function(r){return r?Math.pow(2,10*(r-1)):0}),gr("Circ",function(r){return-(lh(1-r*r)-1)}),gr("Sine",function(r){return r===1?1:-nx(r*ex)+1}),gr("Back",Pc("in"),Pc("out"),Pc()),Je.SteppedEase=Je.steps=_n.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-$t;return function(a){return((i*Ks(0,o,a)|0)+s)*n}}},os.ease=Je["quad.out"],on("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Sc+=r+","+r+"Params,"});var Yh=function(e,t){this.id=tx++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:vh,this.set=t?t.getSetter:Fc},eo=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,us(this,+t.duration,1,1),this.data=t.data,vt&&(this._ctx=vt,vt.data.push(this)),Qs||xn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,us(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(va(this,n),!s._dp||s.parent||bh(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ri(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===$t||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),xh(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Th(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>0?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Th(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?cs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-1e-8?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?_a(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-1e-8?0:this._rts,this.totalTime(Ks(-Math.abs(this._delay),this._tDur,s),i!==!1),ga(this),ux(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==$t&&(this._tTime-=$t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=n;var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ri(i,this,n-this._delay),this}return this._start},e.endTime=function(n){return this._start+(sn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?_a(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ox);var i=qt;return qt=n,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),qt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ch(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ch(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(Rn(this,n),sn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,sn(i))},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-1e-8:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-1e-8,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-$t)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this;return new Promise(function(s){var o=Et(n)?n:Sh,a=function(){var c=i.then;i.then=null,Et(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=c),s(o),i.then=c};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?a():i._prom=a})},e.kill=function(){js(this)},r}();Cn(eo.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-1e-8,_prom:0,_ps:!1,_rts:1});var Jt=function(r){ah(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=sn(n.sortChildren),yt&&ri(n.parent||yt,yi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&wh(yi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return $s(0,arguments,this),this},t.from=function(i,s,o){return $s(1,arguments,this),this},t.fromTo=function(i,s,o,a){return $s(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,qs(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Pt(i,s,Rn(this,o),1),this},t.call=function(i,s,o){return ri(this,Pt.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,f){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=f,o.parent=this,new Pt(i,o,Rn(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,f){return o.runBackwards=1,qs(o).immediateRender=sn(o.immediateRender),this.staggerTo(i,s,o,a,l,c,f)},t.staggerFromTo=function(i,s,o,a,l,c,f,h){return a.startAt=o,qs(a).immediateRender=sn(a.immediateRender),this.staggerTo(i,s,a,l,c,f,h)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,f=i<=0?0:Ht(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,u,g,_,m,p,T,E,y,w,A,b;if(this!==yt&&f>l&&i>=0&&(f=l),f!==this._tTime||o||h){if(a!==this._time&&c&&(f+=this._time-a,i+=this._time-a),d=f,y=this._start,E=this._ts,p=!E,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,o);if(d=Ht(f%m),f===l?(_=this._repeat,d=c):(_=~~(f/m),_&&_===f/m&&(d=c,_--),d>c&&(d=c)),w=cs(this._tTime,m),!a&&this._tTime&&w!==_&&this._tTime-w*m-this._dur<=0&&(w=_),A&&_&1&&(d=c-d,b=1),_!==w&&!this._lock){var C=A&&w&1,v=C===(A&&_&1);if(_<w&&(C=!C),a=C?0:f%c?c:f,this._lock=1,this.render(a||(b?0:Ht(_*m)),s,!c)._lock=0,this._tTime=f,!s&&this.parent&&vn(this,"onRepeat"),this.vars.repeatRefresh&&!b&&(this.invalidate()._lock=1),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!b&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Wh(this,b)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(T=px(this,Ht(a),Ht(d)),T&&(f-=d-(d=T._start))),this._tTime=f,this._time=d,this._act=!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&d&&!s&&!_&&(vn(this,"onStart"),this._tTime!==f))return this;if(d>=a&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||d>=u._start)&&u._ts&&T!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(d-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(d-u._start)*u._ts,s,o),d!==this._time||!this._ts&&!p){T=0,g&&(f+=this._zTime=-1e-8);break}}u=g}else{u=this._last;for(var S=i<0?i:d;u;){if(g=u._prev,(u._act||S<=u._end)&&u._ts&&T!==u){if(u.parent!==this)return this.render(i,s,o);if(u.render(u._ts>0?(S-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(S-u._start)*u._ts,s,o||qt&&(u._initted||u._startAt)),d!==this._time||!this._ts&&!p){T=0,g&&(f+=this._zTime=S?-1e-8:$t);break}}u=g}}if(T&&!s&&(this.pause(),T.render(d>=a?0:-1e-8)._zTime=d>=a?1:-1,this._ts))return this._start=y,ga(this),this.render(i,s,o);this._onUpdate&&!s&&vn(this,"onUpdate",!0),(f===l&&this._tTime>=this.totalDuration()||!f&&a)&&(y===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(f===l&&this._ts>0||!f&&this._ts<0)&&Vi(this,1),!s&&!(i<0&&!a)&&(f||a||!l)&&(vn(this,f===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(Si(s)||(s=Rn(this,s,i)),!(i instanceof eo)){if(Kt(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Vt(i))return this.addLabel(i,s);if(Et(i))i=Pt.delayedCall(0,i);else return this}return this!==i?ri(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-1e8);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Pt?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Vt(i)?this.removeLabel(i):Et(i)?this.killTweensOf(i):(ma(this,i),i===this._recent&&(this._recent=this._last),mr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ht(xn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=Rn(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Pt.delayedCall(0,s||Ys,o);return a.data="isPause",this._hasPause=1,ri(this,a,Rn(this,i))},t.removePause=function(i){var s=this._first;for(i=Rn(this,i);s;)s._start===i&&s.data==="isPause"&&Vi(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Wi!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Pn(i),l=this._first,c=Si(s),f;l;)l instanceof Pt?ax(l._targets,a)&&(c?(!Wi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(f=l.getTweensOf(a,s)).length&&o.push.apply(o,f),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=Rn(o,i),l=s,c=l.startAt,f=l.onStart,h=l.onStartParams,d=l.immediateRender,u,g=Pt.to(o,Cn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||$t,onStart:function(){if(o.pause(),!u){var m=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==m&&us(g,m,0,1).render(g._time,!0,!0),u=1}f&&f.apply(g,h||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Cn({startAt:{time:Rn(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Nh(this,Rn(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Nh(this,Rn(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+$t)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,c;a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return mr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),mr(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ti,c,f,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),f=a._start,f>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,ri(o,a,f-a._delay,1)._lock=0):l=f,f<0&&a._ts&&(s-=f,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=f/o._ts,o._time-=f,o._tTime-=f),o.shiftChildren(-f,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;us(o,o===yt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(yt._ts&&(xh(yt,_a(i,yt)),_h=xn.frame),xn.frame>=gh){gh+=mn.autoSleep||120;var s=yt._first;if((!s||!s._ts)&&mn.autoSleep&&xn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||xn.sleep()}}},e}(eo);Cn(Jt.prototype,{_lock:0,_hasPause:0,_forcing:0});var Px=function(e,t,n,i,s,o,a){var l=new an(this._pt,e,t,0,1,Jh,null,s),c=0,f=0,h,d,u,g,_,m,p,T;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Zs(i)),o&&(T=[n,i],o(T,e,t),n=T[0],i=T[1]),d=n.match(pc)||[];h=pc.exec(i);)g=h[0],_=i.substring(c,h.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==d[f++]&&(m=parseFloat(d[f-1])||0,l._pt={_next:l._pt,p:_||f===1?_:",",s:m,c:g.charAt(1)==="="?ls(m,g)-m:parseFloat(g)-m,m:u&&u<4?Math.round:0},c=pc.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(fh.test(i)||p)&&(l.e=0),this._pt=l,l},Dc=function(e,t,n,i,s,o,a,l,c,f){Et(i)&&(i=i(s||0,e,o));var h=e[t],d=n!=="get"?n:Et(h)?c?e[t.indexOf("set")||!Et(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,u=Et(h)?c?Fx:Zh:Uc,g;if(Vt(i)&&(~i.indexOf("random(")&&(i=Zs(i)),i.charAt(1)==="="&&(g=ls(d,i)+(Zt(d)||0),(g||g===0)&&(i=g))),!f||d!==i||Lc)return!isNaN(d*i)&&i!==""?(g=new an(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?Ox:jh,0,u),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!h&&!(t in e)&&gc(t,i),Px.call(this,e,t,d,i,u,l||mn.stringFilter,c))},Dx=function(e,t,n,i,s){if(Et(e)&&(e=to(e,s,t,n,i)),!ni(e)||e.style&&e.nodeType||Kt(e)||ch(e))return Vt(e)?to(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=to(e[a],s,t,n,i);return o},qh=function(e,t,n,i,s,o){var a,l,c,f;if(gn[e]&&(a=new gn[e]).init(s,a.rawVars?t[e]:Dx(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new an(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==fs))for(c=n._ptLookup[n._targets.indexOf(s)],f=a._props.length;f--;)c[a._props[f]]=l;return a},Wi,Lc,Ic=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,f=i.runBackwards,h=i.yoyoEase,d=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,T=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!cc,y=e.timeline,w,A,b,C,v,S,P,z,I,k,$,B,K;if(y&&(!d||!s)&&(s="none"),e._ease=_r(s,os.ease),e._yEase=h?Gh(_r(h===!0?s:h,os.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(z=m[0]?dr(m[0]).harness:0,B=z&&i[z.prop],w=pa(i,vc),_&&(_._zTime<0&&_.progress(1),t<0&&f&&a&&!u?_.render(-1,!0):_.revert(f&&g?fa:sx),_._lazy=0),o){if(Vi(e._startAt=Pt.set(m,Cn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&sn(l),startAt:null,delay:0,onUpdate:c&&function(){return vn(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!u)&&e._startAt.revert(fa),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!_){if(t&&(a=!1),b=Cn({overwrite:!1,data:"isFromStart",lazy:a&&!_&&sn(l),immediateRender:a,stagger:0,parent:p},w),B&&(b[z.prop]=B),Vi(e._startAt=Pt.set(m,b)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(fa):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,$t,$t);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&sn(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],P=v._gsap||Mc(m)[A]._gsap,e._ptLookup[A]=k={},xc[P.id]&&ki.length&&da(),$=T===m?A:T.indexOf(v),z&&(I=new z).init(v,B||w,e,$,T)!==!1&&(e._pt=C=new an(e._pt,v,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(H){k[H]=C}),I.priority&&(S=1)),!z||B)for(b in w)gn[b]&&(I=qh(b,w,e,$,v,T))?I.priority&&(S=1):k[b]=C=Dc.call(e,v,b,"get",w[b],$,T,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),E&&e._pt&&(Wi=e,yt.killTweensOf(v,k,e.globalTime(t)),K=!e.parent,Wi=0),e._pt&&l&&(xc[P.id]=1)}S&&Qh(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!K,d&&t<=0&&y.render(ti,!0,!0)},Lx=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,h,d,u;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,u=e._targets.length;u--;){if(f=d[u][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Lc=1,e.vars[t]="+=0",Ic(e,a),Lc=0,l?Xs(t+" not eligible for reset"):1;c.push(f)}for(u=c.length;u--;)h=c[u],f=h._pt||h,f.s=(i||i===0)&&!s?i:f.s+(i||0)+o*f.c,f.c=n-f.s,h.e&&(h.e=wt(n)+Zt(h.e)),h.b&&(h.b=f.s+Zt(h.b))},Ix=function(e,t){var n=e[0]?dr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=pr({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Ux=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(Kt(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},to=function(e,t,n,i,s){return Et(e)?e.call(t,n,i,s):Vt(e)&&~e.indexOf("random(")?Zs(e):e},$h=Sc+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Kh={};on($h+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Kh[r]=1});var Pt=function(r){ah(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:qs(i))||this;var l=a.vars,c=l.duration,f=l.delay,h=l.immediateRender,d=l.stagger,u=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,T=i.parent||yt,E=(Kt(n)||ch(n)?Si(n[0]):"length"in i)?[n]:Pn(n),y,w,A,b,C,v,S,P;if(a._targets=E.length?Mc(E):Xs("GSAP target "+n+" not found. https://gsap.com",!mn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=u,g||d||ca(c)||ca(f)){if(i=a.vars,y=a.timeline=new Jt({data:"nested",defaults:_||{},targets:T&&T.data==="nested"?T.vars.targets:E}),y.kill(),y.parent=y._dp=yi(a),y._start=0,d||ca(c)||ca(f)){if(b=E.length,S=d&&Dh(d),ni(d))for(C in d)~$h.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(w=0;w<b;w++)A=pa(i,Kh),A.stagger=0,p&&(A.yoyoEase=p),P&&pr(A,P),v=E[w],A.duration=+to(c,yi(a),w,v,E),A.delay=(+to(f,yi(a),w,v,E)||0)-a._delay,!d&&b===1&&A.delay&&(a._delay=f=A.delay,a._start+=f,A.delay=0),y.to(v,A,S?S(w,v,E):0),y._ease=Je.none;y.duration()?c=f=0:a.timeline=0}else if(g){qs(Cn(y.vars.defaults,{ease:"none"})),y._ease=_r(g.ease||i.ease||"none");var z=0,I,k,$;if(Kt(g))g.forEach(function(B){return y.to(E,B,">")}),y.duration();else{A={};for(C in g)C==="ease"||C==="easeEach"||Ux(C,g[C],A,g.easeEach);for(C in A)for(I=A[C].sort(function(B,K){return B.t-K.t}),z=0,w=0;w<I.length;w++)k=I[w],$={ease:k.e,duration:(k.t-(w?I[w-1].t:0))/100*c},$[C]=k.v,y.to(E,$,z),z+=$.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return u===!0&&!cc&&(Wi=yi(a),yt.killTweensOf(E),Wi=0),ri(T,yi(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!g&&a._start===Ht(T._time)&&sn(h)&&fx(yi(a))&&T.data!=="nested")&&(a._tTime=-1e-8,a.render(Math.max(0,-f)||0)),m&&wh(yi(a),m),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,f=i<0,h=i>l-$t&&!f?l:i<$t?0:i,d,u,g,_,m,p,T,E,y;if(!c)dx(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f){if(d=h,E=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&f)return this.totalTime(_*100+i,s,o);if(d=Ht(h%_),h===l?(g=this._repeat,d=c):(g=~~(h/_),g&&g===Ht(h/_)&&(d=c,g--),d>c&&(d=c)),p=this._yoyo&&g&1,p&&(y=this._yEase,d=c-d),m=cs(this._tTime,_),d===a&&!o&&this._initted&&g===m)return this._tTime=h,this;g!==m&&(E&&this._yEase&&Wh(E,p),this.vars.repeatRefresh&&!p&&!this._lock&&this._time!==_&&this._initted&&(this._lock=o=1,this.render(Ht(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(Ah(this,f?i:d,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=T=(y||this._ease)(d/c),this._from&&(this.ratio=T=1-T),d&&!a&&!s&&!g&&(vn(this,"onStart"),this._tTime!==h))return this;for(u=this._pt;u;)u.r(T,u.d),u=u._next;E&&E.render(i<0?i:E._dur*E._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(f&&Ec(this,i,s,o),vn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&vn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(f&&!this._onUpdate&&Ec(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Vi(this,1),!s&&!(f&&!a)&&(h||a||p)&&(vn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Qs||xn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||Ic(this,c),f=this._ease(c/this._dur),Lx(this,i,s,o,a,f,c,l)?this.resetTo(i,s,o,a,1):(va(this,0),this.parent||Eh(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?js(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Wi&&Wi.vars.overwrite!==!0)._first||js(this),this.parent&&o!==this.timeline.totalDuration()&&us(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Pn(i):a,c=this._ptLookup,f=this._pt,h,d,u,g,_,m,p;if((!s||s==="all")&&cx(a,l))return s==="all"&&(this._pt=0),js(this);for(h=this._op=this._op||[],s!=="all"&&(Vt(s)&&(_={},on(s,function(T){return _[T]=1}),s=_),s=Ix(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(h[p]=s,g=d,u={}):(u=h[p]=h[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&ma(this,m,"_pt"),delete d[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&f&&js(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return $s(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return $s(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return yt.killTweensOf(i,s,o)},e}(eo);Cn(Pt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0}),on("staggerTo,staggerFrom,staggerFromTo",function(r){Pt[r]=function(){var e=new Jt,t=bc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Uc=function(e,t,n){return e[t]=n},Zh=function(e,t,n){return e[t](n)},Fx=function(e,t,n,i){return e[t](i.fp,n)},Nx=function(e,t,n){return e.setAttribute(t,n)},Fc=function(e,t){return Et(e[t])?Zh:fc(e[t])&&e.setAttribute?Nx:Uc},jh=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ox=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Jh=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Nc=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Bx=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},zx=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?ma(this,t,"_pt"):t.dep||(n=1),t=i;return!n},kx=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Qh=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},an=function(){function r(t,n,i,s,o,a,l,c,f){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||jh,this.d=l||this,this.set=c||Uc,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=kx,this.m=n,this.mt=s,this.tween=i},r}();on(Sc+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vc[r]=1}),_n.TweenMax=_n.TweenLite=Pt,_n.TimelineLite=_n.TimelineMax=Jt,yt=new Jt({sortChildren:!1,defaults:os,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0}),mn.stringFilter=Hh;var vr=[],xa={},Vx=[],ed=0,Hx=0,Oc=function(e){return(xa[e]||Vx).map(function(t){return t()})},Bc=function(){var e=Date.now(),t=[];e-ed>2&&(Oc("matchMediaInit"),vr.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=ii.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Oc("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ed=e,Oc("matchMedia"))},td=function(){function r(t,n){this.selector=n&&wc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Hx++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Et(n)&&(s=i,i=n,n=Et);var o=this,a=function(){var c=vt,f=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=wc(s)),vt=o,h=i.apply(o,arguments),Et(h)&&o._r.push(h),vt=c,o.selector=f,o.isReverted=!1,h};return o.last=a,n===Et?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=vt;vt=null,n(this),vt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Pt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(f){return a.splice(a.indexOf(f),1)}));for(a.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,h){return h.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Jt?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Pt)&&c.revert&&c.revert(n);s._r.forEach(function(f){return f(n,s)}),s.isReverted=!0}():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=vr.length;o--;)vr[o].id===this.id&&vr.splice(o,1)},e.revert=function(n){this.kill(n||{})},r}(),Gx=function(){function r(t){this.contexts=[],this.scope=t,vt&&vt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){ni(n)||(n={matches:n});var o=new td(0,s||this.scope),a=o.conditions={},l,c,f;vt&&!o.selector&&(o.selector=vt.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?f=1:(l=ii.matchMedia(n[c]),l&&(vr.indexOf(o)<0&&vr.push(o),(a[c]=l.matches)&&(f=1),l.addListener?l.addListener(Bc):l.addEventListener("change",Bc)));return f&&i(o,function(h){return o.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),ya={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Bh(i)})},timeline:function(e){return new Jt(e)},getTweensOf:function(e,t){return yt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Vt(e)&&(e=Pn(e)[0]);var s=dr(e||{}).get,o=n?Sh:yh;return n==="native"&&(n=""),e&&(t?o((gn[t]&&gn[t].get||s)(e,t,n,i)):function(a,l,c){return o((gn[a]&&gn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Pn(e),e.length>1){var i=e.map(function(f){return ln.quickSetter(f,t,n)}),s=i.length;return function(f){for(var h=s;h--;)i[h](f)}}e=e[0]||{};var o=gn[t],a=dr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(f){var h=new o;fs._pt=0,h.init(e,n?f+n:f,fs,0,[e]),h.render(1,h),fs._pt&&Nc(1,fs)}:a.set(e,l);return o?c:function(f){return c(e,l,n?f+n:f,a,1)}},quickTo:function(e,t,n){var i,s=ln.to(e,pr((i={},i[t]="+=0.1",i.paused=!0,i),n||{})),o=function(l,c,f){return s.resetTo(t,l,c,f)};return o.tween=s,o},isTweening:function(e){return yt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=_r(e.ease,os.ease)),Mh(os,e||{})},config:function(e){return Mh(mn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!gn[a]&&!_n[a]&&Xs(t+" effect requires "+a+" plugin.")}),yc[t]=function(a,l,c){return n(Pn(a),Cn(l||{},s),c)},o&&(Jt.prototype[t]=function(a,l,c){return this.add(yc[t](a,ni(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Je[e]=_r(t)},parseEase:function(e,t){return arguments.length?_r(e,t):Je},getById:function(e){return yt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Jt(e),i,s;for(n.smoothChildTiming=sn(e.smoothChildTiming),yt.remove(n),n._dp=0,n._time=n._tTime=yt._time,i=yt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Pt&&i.vars.onComplete===i._targets[0]))&&ri(n,i,i._start-i._delay),i=s;return ri(yt,n,0),n},context:function(e,t){return e?new td(e,t):vt},matchMedia:function(e){return new Gx(e)},matchMediaRefresh:function(){return vr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Bc()},addEventListener:function(e,t){var n=xa[e]||(xa[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=xa[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Sx,wrapYoyo:Mx,distribute:Dh,random:Ih,snap:Lh,normalize:yx,getUnit:Zt,clamp:_x,splitColor:zh,toArray:Pn,selector:wc,mapRange:Fh,pipe:vx,unitize:xx,interpolate:Ex,shuffle:Ph},install:ph,effects:yc,ticker:xn,updateRoot:Jt.updateRoot,plugins:gn,globalTimeline:yt,core:{PropTween:an,globals:mh,Tween:Pt,Timeline:Jt,Animation:eo,getCache:dr,_removeLinkedListItem:ma,reverting:function(){return qt},context:function(e){return e&&vt&&(vt.data.push(e),e._ctx=vt),vt},suppressOverwrites:function(e){return cc=e}}};on("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return ya[r]=Pt[r]}),xn.add(Jt.updateRoot),fs=ya.to({},{duration:0});var Wx=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Xx=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=Wx(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},zc=function(e,t){return{name:e,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Vt(s)&&(l={},on(s,function(f){return l[f]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Xx(a,s)}}}},ln=ya.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)qt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},zc("roundProps",Ac),zc("modifiers"),zc("snap",Lh))||ya;Pt.version=Jt.version=ln.version="3.12.5",dh=1,hc()&&hs(),Je.Power0,Je.Power1,Je.Power2,Je.Power3,Je.Power4,Je.Linear,Je.Quad,Je.Cubic,Je.Quart,Je.Quint,Je.Strong,Je.Elastic,Je.Back,Je.SteppedEase,Je.Bounce,Je.Sine,Je.Expo,Je.Circ;/*!
 * CSSPlugin 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var nd,Xi,ds,kc,xr,id,Vc,Yx=function(){return typeof window<"u"},Mi={},yr=180/Math.PI,ps=Math.PI/180,ms=Math.atan2,rd=1e8,Hc=/([A-Z])/g,qx=/(left|right|width|margin|padding|x)/i,$x=/[\s,\(]\S/,si={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Gc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Kx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Zx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},sd=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},od=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Jx=function(e,t,n){return e.style[t]=n},Qx=function(e,t,n){return e.style.setProperty(t,n)},ey=function(e,t,n){return e._gsap[t]=n},ty=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},ny=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},iy=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},St="transform",cn=St+"Origin",ry=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in Mi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=si[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=Ei(i,a)}):this.tfm[e]=o.x?o[e]:Ei(i,e),e===cn&&(this.tfm.zOrigin=o.zOrigin);else return si.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(St)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(cn,t,"")),e=St}(s||t)&&this.props.push(e,t,s[e])},ad=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sy=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hc,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Vc(),(!s||!s.isStart)&&!n[St]&&(ad(n),i.zOrigin&&n[cn]&&(n[cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ld=function(e,t){var n={target:e,props:[],revert:sy,save:ry};return e._gsap||ln.core.getCache(e),t&&t.split(",").forEach(function(i){return n.save(i)}),n},cd,Wc=function(e,t){var n=Xi.createElementNS?Xi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Xi.createElement(e);return n&&n.style?n:Xi.createElement(e)},oi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hc,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,_s(t)||t,1)||""},ud="O,Moz,ms,Ms,Webkit".split(","),_s=function(e,t,n){var i=t||xr,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(ud[o]+e in s););return o<0?null:(o===3?"ms":o>=0?ud[o]:"")+e},Xc=function(){Yx()&&window.document&&(nd=window,Xi=nd.document,ds=Xi.documentElement,xr=Wc("div")||{style:{}},Wc("div"),St=_s(St),cn=St+"Origin",xr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",cd=!!_s("perspective"),Vc=ln.core.reverting,kc=1)},Yc=function r(e){var t=Wc("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),n=this.parentNode,i=this.nextSibling,s=this.style.cssText,o;if(ds.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=r}catch{}else this._gsapBBox&&(o=this._gsapBBox());return n&&(i?n.insertBefore(this,i):n.appendChild(this)),ds.removeChild(t),this.style.cssText=s,o},fd=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},hd=function(e){var t;try{t=e.getBBox()}catch{t=Yc.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===Yc||(t=Yc.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+fd(e,["x","cx","x1"])||0,y:+fd(e,["y","cy","y1"])||0,width:0,height:0}:t},dd=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&hd(e))},Sr=function(e,t){if(t){var n=e.style,i;t in Mi&&t!==cn&&(t=St),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Hc,"-$1").toLowerCase())):n.removeAttribute(t)}},Yi=function(e,t,n,i,s,o){var a=new an(e._pt,t,n,0,1,o?od:sd);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},pd={deg:1,rad:1,turn:1},oy={grid:1,flex:1},qi=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=xr.style,l=qx.test(t),c=e.tagName.toLowerCase()==="svg",f=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",u=i==="%",g,_,m,p;if(i===o||!s||pd[i]||pd[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&dd(e),(u||o==="%")&&(Mi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[f],wt(u?s/g*h:s/100*g);if(a[l?"width":"height"]=h+(d?o:i),_=~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Xi||!_.appendChild)&&(_=Xi.body),m=_._gsap,m&&u&&m.width&&l&&m.time===xn.time&&!m.uncache)return wt(s/m.width*h);if(u&&(t==="height"||t==="width")){var T=e.style[t];e.style[t]=h+i,g=e[f],T?e.style[t]=T:Sr(e,t)}else(u||o==="%")&&!oy[oi(_,"display")]&&(a.position=oi(e,"position")),_===e&&(a.position="static"),_.appendChild(xr),g=xr[f],_.removeChild(xr),a.position="absolute";return l&&u&&(m=dr(_),m.time=xn.time,m.width=_[f]),wt(d?g*s/h:g&&s?h/g*s:0)},Ei=function(e,t,n,i){var s;return kc||Xc(),t in si&&t!=="transform"&&(t=si[t],~t.indexOf(",")&&(t=t.split(",")[0])),Mi[t]&&t!=="transform"?(s=io(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Ma(oi(e,cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Sa[t]&&Sa[t](e,t,n)||oi(e,t)||vh(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?qi(e,t,s,n)+n:s},ay=function(e,t,n,i){if(!n||n==="none"){var s=_s(t,e,1),o=s&&oi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=oi(e,"borderTopColor"))}var a=new an(this._pt,e.style,t,0,1,Jh),l=0,c=0,f,h,d,u,g,_,m,p,T,E,y,w;if(a.b=n,a.e=i,n+="",i+="",i==="auto"&&(_=e.style[t],e.style[t]=i,i=oi(e,t)||i,_?e.style[t]=_:Sr(e,t)),f=[n,i],Hh(f),n=f[0],i=f[1],d=n.match(as)||[],w=i.match(as)||[],w.length){for(;h=as.exec(i);)m=h[0],T=i.substring(l,h.index),g?g=(g+1)%5:(T.substr(-5)==="rgba("||T.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(u=parseFloat(_)||0,y=_.substr((u+"").length),m.charAt(1)==="="&&(m=ls(u,m)+y),p=parseFloat(m),E=m.substr((p+"").length),l=as.lastIndex-E.length,E||(E=E||mn.units[t]||y,l===i.length&&(i+=E,a.e+=E)),y!==E&&(u=qi(e,t,_,E)||0),a._pt={_next:a._pt,p:T||c===1?T:",",s:u,c:p-u,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?od:sd;return fh.test(i)&&(a.e=0),this._pt=a,a},md={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},ly=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=md[n]||n,t[1]=md[i]||i,t.join(" ")},cy=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Mi[a]&&(l=1,a=a==="transformOrigin"?cn:St),Sr(n,a);l&&(Sr(n,St),o&&(o.svg&&n.removeAttribute("transform"),io(n,1),o.uncache=1,ad(i)))}},Sa={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new an(e._pt,t,n,0,0,cy);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},no=[1,0,0,1,0,0],_d={},gd=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},vd=function(e){var t=oi(e,St);return gd(t)?no:t.substr(7).match(uh).map(wt)},qc=function(e,t){var n=e._gsap||dr(e),i=e.style,s=vd(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?no:s):(s===no&&!e.offsetParent&&e!==ds&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(c=1,a=e.nextElementSibling,ds.appendChild(e)),s=vd(e),l?i.display=l:Sr(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ds.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$c=function(e,t,n,i,s,o){var a=e._gsap,l=s||qc(e,!0),c=a.xOrigin||0,f=a.yOrigin||0,h=a.xOffset||0,d=a.yOffset||0,u=l[0],g=l[1],_=l[2],m=l[3],p=l[4],T=l[5],E=t.split(" "),y=parseFloat(E[0])||0,w=parseFloat(E[1])||0,A,b,C,v;n?l!==no&&(b=u*m-g*_)&&(C=y*(m/b)+w*(-_/b)+(_*T-m*p)/b,v=y*(-g/b)+w*(u/b)-(u*T-g*p)/b,y=C,w=v):(A=hd(e),y=A.x+(~E[0].indexOf("%")?y/100*A.width:y),w=A.y+(~(E[1]||E[0]).indexOf("%")?w/100*A.height:w)),i||i!==!1&&a.smooth?(p=y-c,T=w-f,a.xOffset=h+(p*u+T*_)-p,a.yOffset=d+(p*g+T*m)-T):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=w,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[cn]="0px 0px",o&&(Yi(o,a,"xOrigin",c,y),Yi(o,a,"yOrigin",f,w),Yi(o,a,"xOffset",h,a.xOffset),Yi(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+w)},io=function(e,t){var n=e._gsap||new Yh(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=oi(e,cn)||"0",f,h,d,u,g,_,m,p,T,E,y,w,A,b,C,v,S,P,z,I,k,$,B,K,H,le,de,ae,ve,Ue,W,ie;return f=h=d=_=m=p=T=E=y=0,u=g=1,n.svg=!!(e.getCTM&&dd(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[St]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[St]!=="none"?l[St]:"")),i.scale=i.rotate=i.translate="none"),b=qc(e,n.svg),n.svg&&(n.uncache?(H=e.getBBox(),c=n.xOrigin-H.x+"px "+(n.yOrigin-H.y)+"px",K=""):K=!t&&e.getAttribute("data-svg-origin"),$c(e,K||c,!!K||n.originIsAbsolute,n.smooth!==!1,b)),w=n.xOrigin||0,A=n.yOrigin||0,b!==no&&(P=b[0],z=b[1],I=b[2],k=b[3],f=$=b[4],h=B=b[5],b.length===6?(u=Math.sqrt(P*P+z*z),g=Math.sqrt(k*k+I*I),_=P||z?ms(z,P)*yr:0,T=I||k?ms(I,k)*yr+_:0,T&&(g*=Math.abs(Math.cos(T*ps))),n.svg&&(f-=w-(w*P+A*I),h-=A-(w*z+A*k))):(ie=b[6],Ue=b[7],de=b[8],ae=b[9],ve=b[10],W=b[11],f=b[12],h=b[13],d=b[14],C=ms(ie,ve),m=C*yr,C&&(v=Math.cos(-C),S=Math.sin(-C),K=$*v+de*S,H=B*v+ae*S,le=ie*v+ve*S,de=$*-S+de*v,ae=B*-S+ae*v,ve=ie*-S+ve*v,W=Ue*-S+W*v,$=K,B=H,ie=le),C=ms(-I,ve),p=C*yr,C&&(v=Math.cos(-C),S=Math.sin(-C),K=P*v-de*S,H=z*v-ae*S,le=I*v-ve*S,W=k*S+W*v,P=K,z=H,I=le),C=ms(z,P),_=C*yr,C&&(v=Math.cos(C),S=Math.sin(C),K=P*v+z*S,H=$*v+B*S,z=z*v-P*S,B=B*v-$*S,P=K,$=H),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),u=wt(Math.sqrt(P*P+z*z+I*I)),g=wt(Math.sqrt(B*B+ie*ie)),C=ms($,B),T=Math.abs(C)>2e-4?C*yr:0,y=W?1/(W<0?-W:W):0),n.svg&&(K=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!gd(oi(e,St)),K&&e.setAttribute("transform",K))),Math.abs(T)>90&&Math.abs(T)<270&&(s?(u*=-1,T+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,T+=T<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=wt(u),n.scaleY=wt(g),n.rotation=wt(_)+a,n.rotationX=wt(m)+a,n.rotationY=wt(p)+a,n.skewX=T+a,n.skewY=E+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[cn]=Ma(c)),n.xOffset=n.yOffset=0,n.force3D=mn.force3D,n.renderTransform=n.svg?fy:cd?xd:uy,n.uncache=0,n},Ma=function(e){return(e=e.split(" "))[0]+" "+e[1]},Kc=function(e,t,n){var i=Zt(t);return wt(parseFloat(t)+parseFloat(qi(e,"x",n+"px",i)))+i},uy=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,xd(e,t)},Mr="0deg",ro="0px",Er=") ",xd=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,f=n.rotationY,h=n.rotationX,d=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,T=n.target,E=n.zOrigin,y="",w=p==="auto"&&e&&e!==1||p===!0;if(E&&(h!==Mr||f!==Mr)){var A=parseFloat(f)*ps,b=Math.sin(A),C=Math.cos(A),v;A=parseFloat(h)*ps,v=Math.cos(A),o=Kc(T,o,b*v*-E),a=Kc(T,a,-Math.sin(A)*-E),l=Kc(T,l,C*v*-E+E)}m!==ro&&(y+="perspective("+m+Er),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(w||o!==ro||a!==ro||l!==ro)&&(y+=l!==ro||w?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Er),c!==Mr&&(y+="rotate("+c+Er),f!==Mr&&(y+="rotateY("+f+Er),h!==Mr&&(y+="rotateX("+h+Er),(d!==Mr||u!==Mr)&&(y+="skew("+d+", "+u+Er),(g!==1||_!==1)&&(y+="scale("+g+", "+_+Er),T.style[St]=y||"translate(0, 0)"},fy=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,f=n.skewY,h=n.scaleX,d=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,T=n.forceCSS,E=parseFloat(o),y=parseFloat(a),w,A,b,C,v;l=parseFloat(l),c=parseFloat(c),f=parseFloat(f),f&&(f=parseFloat(f),c+=f,l+=f),l||c?(l*=ps,c*=ps,w=Math.cos(l)*h,A=Math.sin(l)*h,b=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(f*=ps,v=Math.tan(c-f),v=Math.sqrt(1+v*v),b*=v,C*=v,f&&(v=Math.tan(f),v=Math.sqrt(1+v*v),w*=v,A*=v)),w=wt(w),A=wt(A),b=wt(b),C=wt(C)):(w=h,C=d,A=b=0),(E&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(E=qi(u,"x",o,"px"),y=qi(u,"y",a,"px")),(g||_||m||p)&&(E=wt(E+g-(g*w+_*b)+m),y=wt(y+_-(g*A+_*C)+p)),(i||s)&&(v=u.getBBox(),E=wt(E+i/100*v.width),y=wt(y+s/100*v.height)),v="matrix("+w+","+A+","+b+","+C+","+E+","+y+")",u.setAttribute("transform",v),T&&(u.style[St]=v)},hy=function(e,t,n,i,s){var o=360,a=Vt(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?yr:1),c=l-i,f=i+c+"deg",h,d;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-360)),h==="cw"&&c<0?c=(c+o*rd)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*rd)%o-~~(c/o)*o)),e._pt=d=new an(e._pt,t,n,i,c,Kx),d.e=f,d.u="deg",e._props.push(n),d},yd=function(e,t){for(var n in t)e[n]=t[n];return e},dy=function(e,t,n){var i=yd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,f,h,d,u,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[St]=t,a=io(n,1),Sr(n,St),n.setAttribute("transform",c)):(c=getComputedStyle(n)[St],o[St]=t,a=io(n,1),o[St]=c);for(l in Mi)c=i[l],f=a[l],c!==f&&s.indexOf(l)<0&&(u=Zt(c),g=Zt(f),h=u!==g?qi(n,l,c,g):parseFloat(c),d=parseFloat(f),e._pt=new an(e._pt,a,l,h,d-h,Gc),e._pt.u=g||0,e._props.push(l));yd(a,i)};on("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Sa[e>1?"border"+r:r]=function(a,l,c,f,h){var d,u;if(arguments.length<4)return d=o.map(function(g){return Ei(a,g,c)}),u=d.join(" "),u.split(d[0]).length===5?d[0]:u;d=(f+"").split(" "),u={},o.forEach(function(g,_){return u[g]=d[_]=d[_]||d[(_-1)/2|0]}),a.init(l,u,h)}});var Sd={name:"css",register:Xc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,f,h,d,u,g,_,m,p,T,E,y,w,A,b,C;kc||Xc(),this.styles=this.styles||ld(e),C=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(f=t[_],!(gn[_]&&qh(_,t,n,i,e,s)))){if(u=typeof f,g=Sa[_],u==="function"&&(f=f.call(n,i,e,s),u=typeof f),u==="string"&&~f.indexOf("random(")&&(f=Zs(f)),g)g(this,e,_,f,n)&&(b=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),f+="",Gi.lastIndex=0,Gi.test(c)||(m=Zt(c),p=Zt(f)),p?m!==p&&(c=qi(e,_,c,p)+p):m&&(f+=m),this.add(a,"setProperty",c,f,i,s,0,0,_),o.push(_),C.push(_,0,a[_]);else if(u!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Vt(c)&&~c.indexOf("random(")&&(c=Zs(c)),Zt(c+"")||c==="auto"||(c+=mn.units[_]||Zt(Ei(e,_))||""),(c+"").charAt(1)==="="&&(c=Ei(e,_))):c=Ei(e,_),d=parseFloat(c),T=u==="string"&&f.charAt(1)==="="&&f.substr(0,2),T&&(f=f.substr(2)),h=parseFloat(f),_ in si&&(_==="autoAlpha"&&(d===1&&Ei(e,"visibility")==="hidden"&&h&&(d=0),C.push("visibility",0,a.visibility),Yi(this,a,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=si[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in Mi,E){if(this.styles.save(_),y||(w=e._gsap,w.renderTransform&&!t.parseTransform||io(e,t.parseTransform),A=t.smoothOrigin!==!1&&w.smooth,y=this._pt=new an(this._pt,a,St,0,1,w.renderTransform,w,0,-1),y.dep=1),_==="scale")this._pt=new an(this._pt,w,"scaleY",w.scaleY,(T?ls(w.scaleY,T+h):h)-w.scaleY||0,Gc),this._pt.u=0,o.push("scaleY",_),_+="X";else if(_==="transformOrigin"){C.push(cn,0,a[cn]),f=ly(f),w.svg?$c(e,f,0,A,0,this):(p=parseFloat(f.split(" ")[2])||0,p!==w.zOrigin&&Yi(this,w,"zOrigin",w.zOrigin,p),Yi(this,a,_,Ma(c),Ma(f)));continue}else if(_==="svgOrigin"){$c(e,f,1,A,0,this);continue}else if(_ in _d){hy(this,w,_,d,T?ls(d,T+f):f);continue}else if(_==="smoothOrigin"){Yi(this,w,"smooth",w.smooth,f);continue}else if(_==="force3D"){w[_]=f;continue}else if(_==="transform"){dy(this,f,e);continue}}else _ in a||(_=_s(_)||_);if(E||(h||h===0)&&(d||d===0)&&!$x.test(f)&&_ in a)m=(c+"").substr((d+"").length),h||(h=0),p=Zt(f)||(_ in mn.units?mn.units[_]:m),m!==p&&(d=qi(e,_,c,p)),this._pt=new an(this._pt,E?w:a,_,d,(T?ls(d,T+h):h)-d,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?jx:Gc),this._pt.u=p||0,m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Zx);else if(_ in a)ay.call(this,e,_,c,T?T+f:f);else if(_ in e)this.add(e,_,c||e[_],T?T+f:f,i,s);else if(_!=="parseTransform"){gc(_,f);continue}E||(_ in a?C.push(_,0,a[_]):C.push(_,1,c||e[_])),o.push(_)}}b&&Qh(this)},render:function(e,t){if(t.tween._time||!Vc())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ei,aliases:si,getSetter:function(e,t,n){var i=si[t];return i&&i.indexOf(",")<0&&(t=i),t in Mi&&t!==cn&&(e._gsap.x||Ei(e,"x"))?n&&id===n?t==="scale"?ty:ey:(id=n||{})&&(t==="scale"?ny:iy):e.style&&!fc(e.style[t])?Jx:~t.indexOf("-")?Qx:Fc(e,t)},core:{_removeProperty:Sr,_getMatrix:qc}};ln.utils.checkPrefix=_s,ln.core.getStyleSaver=ld,function(r,e,t,n){var i=on(r+","+e+","+t,function(s){Mi[s]=1});on(e,function(s){mn.units[s]="deg",_d[s]=1}),si[i[13]]=r+","+e,on(n,function(s){var o=s.split(":");si[o[1]]=i[o[0]]})}("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),on("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){mn.units[r]="px"}),ln.registerPlugin(Sd);var Md=ln.registerPlugin(Sd)||ln;Md.core.Tween;/*!
 * matrix 3.12.5
 * https://gsap.com
 *
 * Copyright 2008-2024, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license or for
 * Club GSAP members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Ti,Tr,Zc,Ea,so,Ta,ba,oo,Gn="transform",jc=Gn+"Origin",Ed,Td=function(e){var t=e.ownerDocument||e;for(!(Gn in e.style)&&("msTransform"in e.style)&&(Gn="msTransform",jc=Gn+"Origin");t.parentNode&&(t=t.parentNode););if(Tr=window,ba=new br,t){Ti=t,Zc=t.documentElement,Ea=t.body,oo=Ti.createElementNS("http://www.w3.org/2000/svg","g"),oo.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.setAttribute("style","position:static;transform:translate3d(0,0,1px)"),Ed=i.offsetParent!==n,s.removeChild(n))}return t},py=function(e){for(var t,n;e&&e!==Ea;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},bd=[],wd=[],my=function(){return Tr.pageYOffset||Ti.scrollTop||Zc.scrollTop||Ea.scrollTop||0},_y=function(){return Tr.pageXOffset||Ti.scrollLeft||Zc.scrollLeft||Ea.scrollLeft||0},Jc=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},gy=function r(e){if(Tr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Qc=function r(e,t){if(e.parentNode&&(Ti||Td(e))){var n=Jc(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",o=t!==2?0:100,a=t===3?100:0,l="position:absolute;display:block;pointer-events:none;margin:0;padding:0;",c=Ti.createElementNS?Ti.createElementNS(i.replace(/^https/,"http"),s):Ti.createElement(s);return t&&(n?(Ta||(Ta=r(e)),c.setAttribute("width",.01),c.setAttribute("height",.01),c.setAttribute("transform","translate("+o+","+a+")"),Ta.appendChild(c)):(so||(so=r(e),so.style.cssText=l),c.style.cssText=l+"width:0.1px;height:0.1px;top:"+a+"px;left:"+o+"px",so.appendChild(c))),c}throw"Need document and parent."},vy=function(e){for(var t=new br,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},xy=function(e){var t=e.getCTM(),n;return t||(n=e.style[Gn],e.style[Gn]="none",e.appendChild(oo),t=oo.getCTM(),e.removeChild(oo),n?e.style[Gn]=n:e.style.removeProperty(Gn.replace(/([A-Z])/g,"-$1").toLowerCase())),t||ba.clone()},yy=function(e,t){var n=Jc(e),i=e===n,s=n?bd:wd,o=e.parentNode,a,l,c,f,h,d;if(e===Tr)return e;if(s.length||s.push(Qc(e,1),Qc(e,2),Qc(e,3)),a=n?Ta:so,n)i?(c=xy(e),f=-c.e/c.a,h=-c.f/c.d,l=ba):e.getBBox?(c=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?vy(l):l.getItem(0).matrix:ba,f=l.a*c.x+l.c*c.y,h=l.b*c.x+l.d*c.y):(l=new br,f=h=0),(i?n:o).appendChild(a),a.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+f)+","+(l.f+h)+")");else{if(f=h=0,Ed)for(l=e.offsetParent,c=e;c&&(c=c.parentNode)&&c!==l&&c.parentNode;)(Tr.getComputedStyle(c)[Gn]+"").length>4&&(f=c.offsetLeft,h=c.offsetTop,c=0);if(d=Tr.getComputedStyle(e),d.position!=="absolute"&&d.position!=="fixed")for(l=e.offsetParent;o&&o!==l;)f+=o.scrollLeft||0,h+=o.scrollTop||0,o=o.parentNode;c=a.style,c.top=e.offsetTop-h+"px",c.left=e.offsetLeft-f+"px",c[Gn]=d[Gn],c[jc]=d[jc],c.position=d.position==="fixed"?"fixed":"absolute",e.parentNode.appendChild(a)}return a},eu=function(e,t,n,i,s,o,a){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=o,e.f=a,e},br=function(){function r(t,n,i,s,o,a){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),o===void 0&&(o=0),a===void 0&&(a=0),eu(this,t,n,i,s,o,a)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,o=this.d,a=this.e,l=this.f,c=n*o-i*s||1e-10;return eu(this,o/c,-i/c,-s/c,n/c,(s*l-o*a)/c,-(n*l-i*a)/c)},e.multiply=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f,f=n.a,h=n.c,d=n.b,u=n.d,g=n.e,_=n.f;return eu(this,f*i+d*o,f*s+d*a,h*i+u*o,h*s+u*a,l+g*i+_*o,c+g*s+_*a)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,o=this.c,a=this.d,l=this.e,c=this.f;return i===n.a&&s===n.b&&o===n.c&&a===n.d&&l===n.e&&c===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,o=n.y,a=this.a,l=this.b,c=this.c,f=this.d,h=this.e,d=this.f;return i.x=s*a+o*c+h||0,i.y=s*l+o*f+d||0,i},r}();function wr(r,e,t,n){if(!r||!r.parentNode||(Ti||Td(r)).documentElement===r)return new br;var i=py(r),s=Jc(r),o=s?bd:wd,a=yy(r),l=o[0].getBoundingClientRect(),c=o[1].getBoundingClientRect(),f=o[2].getBoundingClientRect(),h=a.parentNode,d=gy(r),u=new br((c.left-l.left)/100,(c.top-l.top)/100,(f.left-l.left)/100,(f.top-l.top)/100,l.left+(d?0:_y()),l.top+(d?0:my()));if(h.removeChild(a),i)for(l=i.length;l--;)c=i[l],c.scaleX=c.scaleY=0,c.renderTransform(1,c);return e?u.inverse():u}function Ad(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Sy(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Qe,pt,yn,Wn,bi,tu,wi,nu,ao,$i,Cd,iu,lo,ru,co,Xn,uo,wa,Rd,su,Aa=0,Pd=function(){return typeof window<"u"},Dd=function(){return Qe||Pd()&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},Ki=function(e){return typeof e=="function"},fo=function(e){return typeof e=="object"},Yn=function(e){return typeof e>"u"},Ca=function(){return!1},ho="transform",ou="transformOrigin",Zi=function(e){return Math.round(e*1e4)/1e4},po=Array.isArray,Ra=function(e,t){var n=yn.createElementNS?yn.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),e):yn.createElement(e);return n.style?n:yn.createElement(e)},Ld=180/Math.PI,gs=1e20,My=new br,ji=Date.now||function(){return new Date().getTime()},Ar=[],vs={},Ey=0,Ty=/^(?:a|input|textarea|button|select)$/i,Id=0,xs={},Ai={},Ud=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},by=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Fd=function r(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&r(i,t)},Nd=function(){return Ar.forEach(function(e){return e()})},wy=function(e){Ar.push(e),Ar.length===1&&Qe.ticker.add(Nd)},Od=function(){return!Ar.length&&Qe.ticker.remove(Nd)},Bd=function(e){for(var t=Ar.length;t--;)Ar[t]===e&&Ar.splice(t,1);Qe.to(Od,{overwrite:!0,delay:15,duration:0,onComplete:Od,data:"_draggable"})},Ay=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ft=function(e,t,n,i){if(e.addEventListener){var s=lo[t];i=i||(Cd?{passive:!1}:null),e.addEventListener(s||t,n,i),s&&t!==s&&e.addEventListener(t,n,i)}},Dt=function(e,t,n,i){if(e.removeEventListener){var s=lo[t];e.removeEventListener(s||t,n,i),s&&t!==s&&e.removeEventListener(t,n,i)}},Dn=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},Cy=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},Ry=function r(e){ru=e.touches&&Aa<e.touches.length,Dt(e.target,"touchend",r)},zd=function(e){ru=e.touches&&Aa<e.touches.length,Ft(e.target,"touchend",Ry)},ys=function(e){return pt.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},Ss=function(e){return pt.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},kd=function r(e,t){Ft(e,"scroll",t),Ms(e.parentNode)||r(e.parentNode,t)},Vd=function r(e,t){Dt(e,"scroll",t),Ms(e.parentNode)||r(e.parentNode,t)},Ms=function(e){return!e||e===Wn||e.nodeType===9||e===yn.body||e===pt||!e.nodeType||!e.parentNode},Hd=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,Ms(e)?Math.max(Wn[i],bi[i])-(pt["inner"+n]||Wn[s]||bi[s]):e[i]-e[s])},au=function r(e,t){var n=Hd(e,"x"),i=Hd(e,"y");Ms(e)?e=Ai:r(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},lu=function(e,t,n){var i=e.style;i&&(Yn(i[t])&&(t=ao(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},mo=function(e){return pt.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},Cr={},Es=function(e){if(e===pt)return Cr.left=Cr.top=0,Cr.width=Cr.right=Wn.clientWidth||e.innerWidth||bi.clientWidth||0,Cr.height=Cr.bottom=(e.innerHeight||0)-20<Wn.clientHeight?Wn.clientHeight:e.innerHeight||bi.clientHeight||0,Cr;var t=e.ownerDocument||yn,n=Yn(e.pageX)?!e.nodeType&&!Yn(e.left)&&!Yn(e.top)?e:$i(e)[0].getBoundingClientRect():{left:e.pageX-Ss(t),top:e.pageY-ys(t),right:e.pageX-Ss(t)+1,bottom:e.pageY-ys(t)+1};return Yn(n.right)&&!Yn(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):Yn(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},At=function(e,t,n){var i=e.vars,s=i[n],o=e._listeners[t],a;return Ki(s)&&(a=s.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),o&&e.dispatchEvent(t)===!1&&(a=!1),a},Gd=function(e,t){var n=$i(e)[0],i,s,o;return!n.nodeType&&n!==pt?Yn(e.left)?(s=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:s,top:i,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-i}):(o={x:0,y:0},{left:e.left-o.x,top:e.top-o.y,width:e.width,height:e.height}):Py(n,t)},Ln={},Py=function(e,t){t=$i(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||yn,s,o,a,l,c,f,h,d,u,g,_,m,p;if(e===pt)a=ys(i),s=Ss(i),o=s+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),l=a+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===pt||Yn(t))return e.getBoundingClientRect();s=a=0,n?(g=e.getBBox(),_=g.width,m=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(s=g.x||0,a=g.y||0,_=g.width,m=g.height),_||(p=mo(e),g=p.boxSizing==="border-box",_=(parseFloat(p.width)||e.clientWidth||0)+(g?0:parseFloat(p.borderLeftWidth)+parseFloat(p.borderRightWidth)),m=(parseFloat(p.height)||e.clientHeight||0)+(g?0:parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)))),o=_,l=m}return e===t?{left:s,top:a,width:o-s,height:l-a}:(c=wr(t,!0).multiply(wr(e)),f=c.apply({x:s,y:a}),h=c.apply({x:o,y:a}),d=c.apply({x:o,y:l}),u=c.apply({x:s,y:l}),s=Math.min(f.x,h.x,d.x,u.x),a=Math.min(f.y,h.y,d.y,u.y),{left:s,top:a,width:Math.max(f.x,h.x,d.x,u.x)-s,height:Math.max(f.y,h.y,d.y,u.y)-a})},cu=function(e,t,n,i,s,o){var a={},l,c,f;if(t)if(s!==1&&t instanceof Array){if(a.end=l=[],f=t.length,fo(t[0]))for(c=0;c<f;c++)l[c]=Ud(t[c],s);else for(c=0;c<f;c++)l[c]=t[c]*s;n+=1.1,i-=1.1}else Ki(t)?a.end=function(h){var d=t.call(e,h),u,g;if(s!==1)if(fo(d)){u={};for(g in d)u[g]=d[g]*s;d=u}else d*=s;return d}:a.end=t;return(n||n===0)&&(a.max=n),(i||i===0)&&(a.min=i),o&&(a.velocity=0),a},Dy=function r(e){var t;return!e||!e.getAttribute||e===bi?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(Ty.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:r(e.parentNode)},Pa=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:Ca,Qe.set(i,{lazy:!0,userSelect:t?"text":"none"})},Ly=function r(e){if(mo(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Wd,uu,Iy=function(e,t){e=Qe.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,s=e.firstChild,o=0,a=0,l=e.scrollTop,c=e.scrollLeft,f=e.scrollWidth,h=e.scrollHeight,d=0,u=0,g=0,_,m,p,T,E,y;Wd&&t.force3D!==!1?(E="translate3d(",y="px,0px)"):ho&&(E="translate(",y="px)"),this.scrollTop=function(w,A){if(!arguments.length)return-this.top();this.top(-w,A)},this.scrollLeft=function(w,A){if(!arguments.length)return-this.left();this.left(-w,A)},this.left=function(w,A){if(!arguments.length)return-(e.scrollLeft+a);var b=e.scrollLeft-c,C=a;if((b>2||b<-2)&&!A){c=e.scrollLeft,Qe.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-c),t.onKill&&t.onKill();return}w=-w,w<0?(a=w-.5|0,w=0):w>u?(a=w-u|0,w=u):a=0,(a||C)&&(this._skip||(i[ho]=E+-a+"px,"+-o+y),a+d>=0&&(i.paddingRight=a+d+"px")),e.scrollLeft=w|0,c=e.scrollLeft},this.top=function(w,A){if(!arguments.length)return-(e.scrollTop+o);var b=e.scrollTop-l,C=o;if((b>2||b<-2)&&!A){l=e.scrollTop,Qe.killTweensOf(this,{top:1,scrollTop:1}),this.top(-l),t.onKill&&t.onKill();return}w=-w,w<0?(o=w-.5|0,w=0):w>g?(o=w-g|0,w=g):o=0,(o||C)&&(this._skip||(i[ho]=E+-a+"px,"+-o+y)),e.scrollTop=w|0,l=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(s=n.firstChild;s;)T=s.nextSibling,e.appendChild(s),s=T;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(s=e.firstChild,s!==n){for(;s;)T=s.nextSibling,n.appendChild(s),s=T;e.appendChild(n),this.calibrate()}},this.calibrate=function(w){var A=e.clientWidth===_,b,C,v;l=e.scrollTop,c=e.scrollLeft,!(A&&e.clientHeight===m&&n.offsetHeight===p&&f===e.scrollWidth&&h===e.scrollHeight&&!w)&&((o||a)&&(C=this.left(),v=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),b=mo(e),(!A||w)&&(i.display="block",i.width="auto",i.paddingRight="0px",d=Math.max(0,e.scrollWidth-e.clientWidth),d&&(d+=parseFloat(b.paddingLeft)+(uu?parseFloat(b.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=d+"px",uu&&(i.paddingBottom=b.paddingBottom),_=e.clientWidth,m=e.clientHeight,f=e.scrollWidth,h=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-m,p=n.offsetHeight,i.display="block",(C||v)&&(this.left(C),this.top(v)))},this.content=n,this.element=e,this._skip=!1,this.enable()},fu=function(e){if(Pd()&&document.body){var t=window&&window.navigator;pt=window,yn=document,Wn=yn.documentElement,bi=yn.body,tu=Ra("div"),wa=!!window.PointerEvent,wi=Ra("div"),wi.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",uo=wi.style.cursor==="grab"?"grab":"move",co=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,iu="ontouchstart"in Wn&&"orientation"in pt||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),uu=function(){var n=Ra("div"),i=Ra("div"),s=i.style,o=bi,a;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),o.appendChild(n),a=i.offsetHeight+18>n.scrollHeight,o.removeChild(n),a}(),lo=function(n){for(var i=n.split(","),s=("onpointerdown"in tu?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in tu?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),o={},a=4;--a>-1;)o[i[a]]=s[a],o[s[a]]=i[a];try{Wn.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){Cd=1}}))}catch{}return o}("touchstart,touchmove,touchend,touchcancel"),Ft(yn,"touchcancel",Ca),Ft(pt,"touchmove",Ca),bi&&bi.addEventListener("touchstart",Ca),Ft(yn,"contextmenu",function(){for(var n in vs)vs[n].isPressed&&vs[n].endDrag()}),Qe=nu=Dd()}Qe?(Xn=Qe.plugins.inertia,Rd=Qe.core.context||function(){},ao=Qe.utils.checkPrefix,ho=ao(ho),ou=ao(ou),$i=Qe.utils.toArray,su=Qe.core.getStyleSaver,Wd=!!ao("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},Uy=function(){function r(t){this._listeners={},this.target=t||this}var e=r.prototype;return e.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},e.removeEventListener=function(n,i){var s=this._listeners[n],o=s&&s.indexOf(i);o>=0&&s.splice(o,1)},e.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(o){return o.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r}(),Ts=function(r){Sy(e,r);function e(t,n){var i;i=r.call(this)||this,nu||fu(1),t=$i(t)[0],i.styles=su&&su(t,"transform,left,top"),Xn||(Xn=Qe.plugins.inertia),i.vars=n=Ud(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,Qe.getProperty(t,"x");var s=(n.type||"x,y").toLowerCase(),o=~s.indexOf("x")||~s.indexOf("y"),a=s.indexOf("rotation")!==-1,l=a?"rotation":o?"x":"left",c=o?"y":"top",f=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),h=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),d=n.minimumMovement||2,u=Ad(i),g=$i(n.trigger||n.handle||t),_={},m=0,p=!1,T=n.autoScrollMarginTop||40,E=n.autoScrollMarginRight||40,y=n.autoScrollMarginBottom||40,w=n.autoScrollMarginLeft||40,A=n.clickableTest||Dy,b=0,C=t._gsap||Qe.core.getCache(t),v=Ly(t),S=function(L,j){return parseFloat(C.get(t,L,j))},P=t.ownerDocument||yn,z,I,k,$,B,K,H,le,de,ae,ve,Ue,W,ie,me,ue,Se,Fe,Be,nt,Xe,mt,D,Ve,$e,Oe,Ee,ut,Pe,R,x,V,J,te=function(L){return Dn(L),L.stopImmediatePropagation&&L.stopImmediatePropagation(),!1},Z=function ne(L){if(u.autoScroll&&u.isDragging&&(p||Se)){var j=t,O=u.autoScroll*15,ee,oe,xe,Ge,Ce,rt,Ze,ot;for(p=!1,Ai.scrollTop=pt.pageYOffset!=null?pt.pageYOffset:P.documentElement.scrollTop!=null?P.documentElement.scrollTop:P.body.scrollTop,Ai.scrollLeft=pt.pageXOffset!=null?pt.pageXOffset:P.documentElement.scrollLeft!=null?P.documentElement.scrollLeft:P.body.scrollLeft,Ge=u.pointerX-Ai.scrollLeft,Ce=u.pointerY-Ai.scrollTop;j&&!oe;)oe=Ms(j.parentNode),ee=oe?Ai:j.parentNode,xe=oe?{bottom:Math.max(Wn.clientHeight,pt.innerHeight||0),right:Math.max(Wn.clientWidth,pt.innerWidth||0),left:0,top:0}:ee.getBoundingClientRect(),rt=Ze=0,h&&(ot=ee._gsMaxScrollY-ee.scrollTop,ot<0?Ze=ot:Ce>xe.bottom-y&&ot?(p=!0,Ze=Math.min(ot,O*(1-Math.max(0,xe.bottom-Ce)/y)|0)):Ce<xe.top+T&&ee.scrollTop&&(p=!0,Ze=-Math.min(ee.scrollTop,O*(1-Math.max(0,Ce-xe.top)/T)|0)),Ze&&(ee.scrollTop+=Ze)),f&&(ot=ee._gsMaxScrollX-ee.scrollLeft,ot<0?rt=ot:Ge>xe.right-E&&ot?(p=!0,rt=Math.min(ot,O*(1-Math.max(0,xe.right-Ge)/E)|0)):Ge<xe.left+w&&ee.scrollLeft&&(p=!0,rt=-Math.min(ee.scrollLeft,O*(1-Math.max(0,Ge-xe.left)/w)|0)),rt&&(ee.scrollLeft+=rt)),oe&&(rt||Ze)&&(pt.scrollTo(ee.scrollLeft,ee.scrollTop),ce(u.pointerX+rt,u.pointerY+Ze)),j=ee}if(Se){var _t=u.x,Nt=u.y;a?(u.deltaX=_t-parseFloat(C.rotation),u.rotation=_t,C.rotation=_t+"deg",C.renderTransform(1,C)):I?(h&&(u.deltaY=Nt-I.top(),I.top(Nt)),f&&(u.deltaX=_t-I.left(),I.left(_t))):o?(h&&(u.deltaY=Nt-parseFloat(C.y),C.y=Nt+"px"),f&&(u.deltaX=_t-parseFloat(C.x),C.x=_t+"px"),C.renderTransform(1,C)):(h&&(u.deltaY=Nt-parseFloat(t.style.top||0),t.style.top=Nt+"px"),f&&(u.deltaX=_t-parseFloat(t.style.left||0),t.style.left=_t+"px")),le&&!L&&!ut&&(ut=!0,At(u,"drag","onDrag")===!1&&(f&&(u.x-=u.deltaX),h&&(u.y-=u.deltaY),ne(!0)),ut=!1)}Se=!1},Ae=function(L,j){var O=u.x,ee=u.y,oe,xe;t._gsap||(C=Qe.core.getCache(t)),C.uncache&&Qe.getProperty(t,"x"),o?(u.x=parseFloat(C.x),u.y=parseFloat(C.y)):a?u.x=u.rotation=parseFloat(C.rotation):I?(u.y=I.top(),u.x=I.left()):(u.y=parseFloat(t.style.top||(xe=mo(t))&&xe.top)||0,u.x=parseFloat(t.style.left||(xe||{}).left)||0),(Be||nt||Xe)&&!j&&(u.isDragging||u.isThrowing)&&(Xe&&(xs.x=u.x,xs.y=u.y,oe=Xe(xs),oe.x!==u.x&&(u.x=oe.x,Se=!0),oe.y!==u.y&&(u.y=oe.y,Se=!0)),Be&&(oe=Be(u.x),oe!==u.x&&(u.x=oe,a&&(u.rotation=oe),Se=!0)),nt&&(oe=nt(u.y),oe!==u.y&&(u.y=oe),Se=!0)),Se&&Z(!0),L||(u.deltaX=u.x-O,u.deltaY=u.y-ee,At(u,"throwupdate","onThrowUpdate"))},he=function(L,j,O,ee){return j==null&&(j=-1e20),O==null&&(O=gs),Ki(L)?function(oe){var xe=u.isPressed?1-u.edgeResistance:1;return L.call(u,(oe>O?O+(oe-O)*xe:oe<j?j+(oe-j)*xe:oe)*ee)*ee}:po(L)?function(oe){for(var xe=L.length,Ge=0,Ce=gs,rt,Ze;--xe>-1;)rt=L[xe],Ze=rt-oe,Ze<0&&(Ze=-Ze),Ze<Ce&&rt>=j&&rt<=O&&(Ge=xe,Ce=Ze);return L[Ge]}:isNaN(L)?function(oe){return oe}:function(){return L*ee}},Me=function(L,j,O,ee,oe,xe,Ge){return xe=xe&&xe<gs?xe*xe:gs,Ki(L)?function(Ce){var rt=u.isPressed?1-u.edgeResistance:1,Ze=Ce.x,ot=Ce.y,_t,Nt,un;return Ce.x=Ze=Ze>O?O+(Ze-O)*rt:Ze<j?j+(Ze-j)*rt:Ze,Ce.y=ot=ot>oe?oe+(ot-oe)*rt:ot<ee?ee+(ot-ee)*rt:ot,_t=L.call(u,Ce),_t!==Ce&&(Ce.x=_t.x,Ce.y=_t.y),Ge!==1&&(Ce.x*=Ge,Ce.y*=Ge),xe<gs&&(Nt=Ce.x-Ze,un=Ce.y-ot,Nt*Nt+un*un>xe&&(Ce.x=Ze,Ce.y=ot)),Ce}:po(L)?function(Ce){for(var rt=L.length,Ze=0,ot=gs,_t,Nt,un,Qt;--rt>-1;)un=L[rt],_t=un.x-Ce.x,Nt=un.y-Ce.y,Qt=_t*_t+Nt*Nt,Qt<ot&&(Ze=rt,ot=Qt);return ot<=xe?L[Ze]:Ce}:function(Ce){return Ce}},Ke=function(){var L,j,O,ee;H=!1,I?(I.calibrate(),u.minX=ve=-I.maxScrollLeft(),u.minY=W=-I.maxScrollTop(),u.maxX=ae=u.maxY=Ue=0,H=!0):n.bounds&&(L=Gd(n.bounds,t.parentNode),a?(u.minX=ve=L.left,u.maxX=ae=L.left+L.width,u.minY=W=u.maxY=Ue=0):!Yn(n.bounds.maxX)||!Yn(n.bounds.maxY)?(L=n.bounds,u.minX=ve=L.minX,u.minY=W=L.minY,u.maxX=ae=L.maxX,u.maxY=Ue=L.maxY):(j=Gd(t,t.parentNode),u.minX=ve=Math.round(S(l,"px")+L.left-j.left),u.minY=W=Math.round(S(c,"px")+L.top-j.top),u.maxX=ae=Math.round(ve+(L.width-j.width)),u.maxY=Ue=Math.round(W+(L.height-j.height))),ve>ae&&(u.minX=ae,u.maxX=ae=ve,ve=u.minX),W>Ue&&(u.minY=Ue,u.maxY=Ue=W,W=u.minY),a&&(u.minRotation=ve,u.maxRotation=ae),H=!0),n.liveSnap&&(O=n.liveSnap===!0?n.snap||{}:n.liveSnap,ee=po(O)||Ki(O),a?(Be=he(ee?O:O.rotation,ve,ae,1),nt=null):O.points?Xe=Me(ee?O:O.points,ve,ae,W,Ue,O.radius,I?-1:1):(f&&(Be=he(ee?O:O.x||O.left||O.scrollLeft,ve,ae,I?-1:1)),h&&(nt=he(ee?O:O.y||O.top||O.scrollTop,W,Ue,I?-1:1))))},se=function(){u.isThrowing=!1,At(u,"throwcomplete","onThrowComplete")},Te=function(){u.isThrowing=!1},De=function(L,j){var O,ee,oe,xe;L&&Xn?(L===!0&&(O=n.snap||n.liveSnap||{},ee=po(O)||Ki(O),L={resistance:(n.throwResistance||n.resistance||1e3)/(a?10:1)},a?L.rotation=cu(u,ee?O:O.rotation,ae,ve,1,j):(f&&(L[l]=cu(u,ee?O:O.points||O.x||O.left,ae,ve,I?-1:1,j||u.lockedAxis==="x")),h&&(L[c]=cu(u,ee?O:O.points||O.y||O.top,Ue,W,I?-1:1,j||u.lockedAxis==="y")),(O.points||po(O)&&fo(O[0]))&&(L.linkedProps=l+","+c,L.radius=O.radius))),u.isThrowing=!0,xe=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,L.duration||(L.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?xe===0||fo(L)&&L.resistance>1e3?0:.5:n.minDuration,overshoot:xe}),u.tween=oe=Qe.to(I||t,{inertia:L,data:"_draggable",inherit:!1,onComplete:se,onInterrupt:Te,onUpdate:n.fastMode?At:Ae,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:O&&O.radius?[!1,!0]:[]}),n.fastMode||(I&&(I._skip=!0),oe.render(1e9,!0,!0),Ae(!0,!0),u.endX=u.x,u.endY=u.y,a&&(u.endRotation=u.x),oe.play(0),Ae(!0,!0),I&&(I._skip=!1))):H&&u.applyBounds()},Ne=function(L){var j=Ve,O;Ve=wr(t.parentNode,!0),L&&u.isPressed&&!Ve.equals(j||new br)&&(O=j.inverse().apply({x:k,y:$}),Ve.apply(O,O),k=O.x,$=O.y),Ve.equals(My)&&(Ve=null)},ye=function(){var L=1-u.edgeResistance,j=v?Ss(P):0,O=v?ys(P):0,ee,oe,xe;o&&(C.x=S(l,"px")+"px",C.y=S(c,"px")+"px",C.renderTransform()),Ne(!1),Ln.x=u.pointerX-j,Ln.y=u.pointerY-O,Ve&&Ve.apply(Ln,Ln),k=Ln.x,$=Ln.y,Se&&(ce(u.pointerX,u.pointerY),Z(!0)),V=wr(t),I?(Ke(),K=I.top(),B=I.left()):(qe()?(Ae(!0,!0),Ke()):u.applyBounds(),a?(ee=t.ownerSVGElement?[C.xOrigin-t.getBBox().x,C.yOrigin-t.getBBox().y]:(mo(t)[ou]||"0 0").split(" "),ue=u.rotationOrigin=wr(t).apply({x:parseFloat(ee[0])||0,y:parseFloat(ee[1])||0}),Ae(!0,!0),oe=u.pointerX-ue.x-j,xe=ue.y-u.pointerY+O,B=u.x,K=u.y=Math.atan2(xe,oe)*Ld):(K=S(c,"px"),B=S(l,"px"))),H&&L&&(B>ae?B=ae+(B-ae)/L:B<ve&&(B=ve-(ve-B)/L),a||(K>Ue?K=Ue+(K-Ue)/L:K<W&&(K=W-(W-K)/L))),u.startX=B=Zi(B),u.startY=K=Zi(K)},qe=function(){return u.tween&&u.tween.isActive()},He=function(){wi.parentNode&&!qe()&&!u.isDragging&&wi.parentNode.removeChild(wi)},it=function(L,j){var O;if(!z||u.isPressed||!L||(L.type==="mousedown"||L.type==="pointerdown")&&!j&&ji()-b<30&&lo[u.pointerEvent.type]){x&&L&&z&&Dn(L);return}if($e=qe(),J=!1,u.pointerEvent=L,lo[L.type]?(D=~L.type.indexOf("touch")?L.currentTarget||L.target:P,Ft(D,"touchend",Y),Ft(D,"touchmove",U),Ft(D,"touchcancel",Y),Ft(P,"touchstart",zd)):(D=null,Ft(P,"mousemove",U)),Ee=null,(!wa||!D)&&(Ft(P,"mouseup",Y),L&&L.target&&Ft(L.target,"mouseup",Y)),mt=A.call(u,L.target)&&n.dragClickables===!1&&!j,mt){Ft(L.target,"change",Y),At(u,"pressInit","onPressInit"),At(u,"press","onPress"),Pa(g,!0),x=!1;return}if(Oe=!D||f===h||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&L&&(L.ctrlKey||L.which>2)?!1:f?"y":"x",x=!Oe&&!u.allowEventDefault,x&&(Dn(L),Ft(pt,"touchforcechange",Dn)),L.changedTouches?(L=ie=L.changedTouches[0],me=L.identifier):L.pointerId?me=L.pointerId:ie=me=null,Aa++,wy(Z),$=u.pointerY=L.pageY,k=u.pointerX=L.pageX,At(u,"pressInit","onPressInit"),(Oe||u.autoScroll)&&au(t.parentNode),t.parentNode&&u.autoScroll&&!I&&!a&&t.parentNode._gsMaxScrollX&&!wi.parentNode&&!t.getBBox&&(wi.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(wi)),ye(),u.tween&&u.tween.kill(),u.isThrowing=!1,Qe.killTweensOf(I||t,_,!0),I&&Qe.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!a&&!I&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,le=!!(n.onDrag||u._listeners.drag),de=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(O=g.length;--O>-1;)Qe.set(g[O],{cursor:n.activeCursor||n.cursor||(uo==="grab"?"grabbing":uo)});At(u,"press","onPress")},U=function(L){var j=L,O,ee,oe,xe,Ge,Ce;if(!z||ru||!u.isPressed||!L){x&&L&&z&&Dn(L);return}if(u.pointerEvent=L,O=L.changedTouches,O){if(L=O[0],L!==ie&&L.identifier!==me){for(xe=O.length;--xe>-1&&(L=O[xe]).identifier!==me&&L.target!==t;);if(xe<0)return}}else if(L.pointerId&&me&&L.pointerId!==me)return;if(D&&Oe&&!Ee&&(Ln.x=L.pageX-(v?Ss(P):0),Ln.y=L.pageY-(v?ys(P):0),Ve&&Ve.apply(Ln,Ln),ee=Ln.x,oe=Ln.y,Ge=Math.abs(ee-k),Ce=Math.abs(oe-$),(Ge!==Ce&&(Ge>d||Ce>d)||co&&Oe===Ee)&&(Ee=Ge>Ce&&f?"x":"y",Oe&&Ee!==Oe&&Ft(pt,"touchforcechange",Dn),u.vars.lockAxisOnTouchScroll!==!1&&f&&h&&(u.lockedAxis=Ee==="x"?"y":"x",Ki(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,j)),co&&Oe===Ee))){Y(j);return}!u.allowEventDefault&&(!Oe||Ee&&Oe!==Ee)&&j.cancelable!==!1?(Dn(j),x=!0):x&&(x=!1),u.autoScroll&&(p=!0),ce(L.pageX,L.pageY,de)},ce=function(L,j,O){var ee=1-u.dragResistance,oe=1-u.edgeResistance,xe=u.pointerX,Ge=u.pointerY,Ce=K,rt=u.x,Ze=u.y,ot=u.endX,_t=u.endY,Nt=u.endRotation,un=Se,Qt,qn,Ot,Mt,_o,Sn;u.pointerX=L,u.pointerY=j,v&&(L-=Ss(P),j-=ys(P)),a?(Mt=Math.atan2(ue.y-j,L-ue.x)*Ld,_o=u.y-Mt,_o>180?(K-=360,u.y=Mt):_o<-180&&(K+=360,u.y=Mt),u.x!==B||Math.abs(K-Mt)>d?(u.y=Mt,Ot=B+(K-Mt)*ee):Ot=B):(Ve&&(Sn=L*Ve.a+j*Ve.c+Ve.e,j=L*Ve.b+j*Ve.d+Ve.f,L=Sn),qn=j-$,Qt=L-k,qn<d&&qn>-d&&(qn=0),Qt<d&&Qt>-d&&(Qt=0),(u.lockAxis||u.lockedAxis)&&(Qt||qn)&&(Sn=u.lockedAxis,Sn||(u.lockedAxis=Sn=f&&Math.abs(Qt)>Math.abs(qn)?"y":h?"x":null,Sn&&Ki(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),Sn==="y"?qn=0:Sn==="x"&&(Qt=0)),Ot=Zi(B+Qt*ee),Mt=Zi(K+qn*ee)),(Be||nt||Xe)&&(u.x!==Ot||u.y!==Mt&&!a)&&(Xe&&(xs.x=Ot,xs.y=Mt,Sn=Xe(xs),Ot=Zi(Sn.x),Mt=Zi(Sn.y)),Be&&(Ot=Zi(Be(Ot))),nt&&(Mt=Zi(nt(Mt)))),H&&(Ot>ae?Ot=ae+Math.round((Ot-ae)*oe):Ot<ve&&(Ot=ve+Math.round((Ot-ve)*oe)),a||(Mt>Ue?Mt=Math.round(Ue+(Mt-Ue)*oe):Mt<W&&(Mt=Math.round(W+(Mt-W)*oe)))),(u.x!==Ot||u.y!==Mt&&!a)&&(a?(u.endRotation=u.x=u.endX=Ot,Se=!0):(h&&(u.y=u.endY=Mt,Se=!0),f&&(u.x=u.endX=Ot,Se=!0)),!O||At(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=J=!0,At(u,"dragstart","onDragStart")):(u.pointerX=xe,u.pointerY=Ge,K=Ce,u.x=rt,u.y=Ze,u.endX=ot,u.endY=_t,u.endRotation=Nt,Se=un))},Y=function ne(L,j){if(!z||!u.isPressed||L&&me!=null&&!j&&(L.pointerId&&L.pointerId!==me&&L.target!==t||L.changedTouches&&!Cy(L.changedTouches,me))){x&&L&&z&&Dn(L);return}u.isPressed=!1;var O=L,ee=u.isDragging,oe=u.vars.allowContextMenu&&L&&(L.ctrlKey||L.which>2),xe=Qe.delayedCall(.001,He),Ge,Ce,rt,Ze,ot;if(D?(Dt(D,"touchend",ne),Dt(D,"touchmove",U),Dt(D,"touchcancel",ne),Dt(P,"touchstart",zd)):Dt(P,"mousemove",U),Dt(pt,"touchforcechange",Dn),(!wa||!D)&&(Dt(P,"mouseup",ne),L&&L.target&&Dt(L.target,"mouseup",ne)),Se=!1,ee&&(m=Id=ji(),u.isDragging=!1),Bd(Z),mt&&!oe){L&&(Dt(L.target,"change",ne),u.pointerEvent=O),Pa(g,!1),At(u,"release","onRelease"),At(u,"click","onClick"),mt=!1;return}for(Ce=g.length;--Ce>-1;)lu(g[Ce],"cursor",n.cursor||(n.cursor!==!1?uo:null));if(Aa--,L){if(Ge=L.changedTouches,Ge&&(L=Ge[0],L!==ie&&L.identifier!==me)){for(Ce=Ge.length;--Ce>-1&&(L=Ge[Ce]).identifier!==me&&L.target!==t;);if(Ce<0&&!j)return}u.pointerEvent=O,u.pointerX=L.pageX,u.pointerY=L.pageY}return oe&&O?(Dn(O),x=!0,At(u,"release","onRelease")):O&&!ee?(x=!1,$e&&(n.snap||n.bounds)&&De(n.inertia||n.throwProps),At(u,"release","onRelease"),(!co||O.type!=="touchmove")&&O.type.indexOf("cancel")===-1&&(At(u,"click","onClick"),ji()-b<300&&At(u,"doubleclick","onDoubleClick"),Ze=O.target||t,b=ji(),ot=function(){b!==Pe&&u.enabled()&&!u.isPressed&&!O.defaultPrevented&&(Ze.click?Ze.click():P.createEvent&&(rt=P.createEvent("MouseEvents"),rt.initMouseEvent("click",!0,!0,pt,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),Ze.dispatchEvent(rt)))},!co&&!O.defaultPrevented&&Qe.delayedCall(.05,ot))):(De(n.inertia||n.throwProps),!u.allowEventDefault&&O&&(n.dragClickables!==!1||!A.call(u,O.target))&&ee&&(!Oe||Ee&&Oe===Ee)&&O.cancelable!==!1?(x=!0,Dn(O)):x=!1,At(u,"release","onRelease")),qe()&&xe.duration(u.tween.duration()),ee&&At(u,"dragend","onDragEnd"),!0},Q=function(L){if(L&&u.isDragging&&!I){var j=L.target||t.parentNode,O=j.scrollLeft-j._gsScrollX,ee=j.scrollTop-j._gsScrollY;(O||ee)&&(Ve?(k-=O*Ve.a+ee*Ve.c,$-=ee*Ve.d+O*Ve.b):(k-=O,$-=ee),j._gsScrollX+=O,j._gsScrollY+=ee,ce(u.pointerX,u.pointerY))}},_e=function(L){var j=ji(),O=j-b<100,ee=j-m<50,oe=O&&Pe===b,xe=u.pointerEvent&&u.pointerEvent.defaultPrevented,Ge=O&&R===b,Ce=L.isTrusted||L.isTrusted==null&&O&&oe;if((oe||ee&&u.vars.suppressClickOnDrag!==!1)&&L.stopImmediatePropagation&&L.stopImmediatePropagation(),O&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!oe||Ce&&!Ge)){Ce&&oe&&(R=b),Pe=b;return}(u.isPressed||ee||O)&&(!Ce||!L.detail||!O||xe)&&Dn(L),!O&&!ee&&!J&&(L&&L.target&&(u.pointerEvent=L),At(u,"click","onClick"))},pe=function(L){return Ve?{x:L.x*Ve.a+L.y*Ve.c+Ve.e,y:L.x*Ve.b+L.y*Ve.d+Ve.f}:{x:L.x,y:L.y}};return Fe=e.get(t),Fe&&Fe.kill(),i.startDrag=function(ne,L){var j,O,ee,oe;it(ne||u.pointerEvent,!0),L&&!u.hitTest(ne||u.pointerEvent)&&(j=Es(ne||u.pointerEvent),O=Es(t),ee=pe({x:j.left+j.width/2,y:j.top+j.height/2}),oe=pe({x:O.left+O.width/2,y:O.top+O.height/2}),k-=ee.x-oe.x,$-=ee.y-oe.y),u.isDragging||(u.isDragging=J=!0,At(u,"dragstart","onDragStart"))},i.drag=U,i.endDrag=function(ne){return Y(ne||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(ji()-m)/1e3},i.timeSinceClick=function(){return(ji()-b)/1e3},i.hitTest=function(ne,L){return e.hitTest(u.target,ne,L)},i.getDirection=function(ne,L){var j=ne==="velocity"&&Xn?ne:fo(ne)&&!a?"element":"start",O,ee,oe,xe,Ge,Ce;return j==="element"&&(Ge=Es(u.target),Ce=Es(ne)),O=j==="start"?u.x-B:j==="velocity"?Xn.getVelocity(t,l):Ge.left+Ge.width/2-(Ce.left+Ce.width/2),a?O<0?"counter-clockwise":"clockwise":(L=L||2,ee=j==="start"?u.y-K:j==="velocity"?Xn.getVelocity(t,c):Ge.top+Ge.height/2-(Ce.top+Ce.height/2),oe=Math.abs(O/ee),xe=oe<1/L?"":O<0?"left":"right",oe<L&&(xe!==""&&(xe+="-"),xe+=ee<0?"up":"down"),xe)},i.applyBounds=function(ne,L){var j,O,ee,oe,xe,Ge;if(ne&&n.bounds!==ne)return n.bounds=ne,u.update(!0,L);if(Ae(!0),Ke(),H&&!qe()){if(j=u.x,O=u.y,j>ae?j=ae:j<ve&&(j=ve),O>Ue?O=Ue:O<W&&(O=W),(u.x!==j||u.y!==O)&&(ee=!0,u.x=u.endX=j,a?u.endRotation=j:u.y=u.endY=O,Se=!0,Z(!0),u.autoScroll&&!u.isDragging))for(au(t.parentNode),oe=t,Ai.scrollTop=pt.pageYOffset!=null?pt.pageYOffset:P.documentElement.scrollTop!=null?P.documentElement.scrollTop:P.body.scrollTop,Ai.scrollLeft=pt.pageXOffset!=null?pt.pageXOffset:P.documentElement.scrollLeft!=null?P.documentElement.scrollLeft:P.body.scrollLeft;oe&&!Ge;)Ge=Ms(oe.parentNode),xe=Ge?Ai:oe.parentNode,h&&xe.scrollTop>xe._gsMaxScrollY&&(xe.scrollTop=xe._gsMaxScrollY),f&&xe.scrollLeft>xe._gsMaxScrollX&&(xe.scrollLeft=xe._gsMaxScrollX),oe=xe;u.isThrowing&&(ee||u.endX>ae||u.endX<ve||u.endY>Ue||u.endY<W)&&De(n.inertia||n.throwProps,ee)}return u},i.update=function(ne,L,j){if(L&&u.isPressed){var O=wr(t),ee=V.apply({x:u.x-B,y:u.y-K}),oe=wr(t.parentNode,!0);oe.apply({x:O.e-ee.x,y:O.f-ee.y},ee),u.x-=ee.x-oe.e,u.y-=ee.y-oe.f,Z(!0),ye()}var xe=u.x,Ge=u.y;return Ne(!L),ne?u.applyBounds():(Se&&j&&Z(!0),Ae(!0)),L&&(ce(u.pointerX,u.pointerY),Se&&Z(!0)),u.isPressed&&!L&&(f&&Math.abs(xe-u.x)>.01||h&&Math.abs(Ge-u.y)>.01&&!a)&&ye(),u.autoScroll&&(au(t.parentNode,u.isDragging),p=u.isDragging,Z(!0),Vd(t,Q),kd(t,Q)),u},i.enable=function(ne){var L={lazy:!0},j,O,ee;if(n.cursor!==!1&&(L.cursor=n.cursor||uo),Qe.utils.checkPrefix("touchCallout")&&(L.touchCallout="none"),ne!=="soft"){for(Fd(g,f===h?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":f?"pan-y":"pan-x"),O=g.length;--O>-1;)ee=g[O],wa||Ft(ee,"mousedown",it),Ft(ee,"touchstart",it),Ft(ee,"click",_e,!0),Qe.set(ee,L),ee.getBBox&&ee.ownerSVGElement&&f!==h&&Qe.set(ee.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":f?"pan-y":"pan-x"}),n.allowContextMenu||Ft(ee,"contextmenu",te);Pa(g,!1)}return kd(t,Q),z=!0,Xn&&ne!=="soft"&&Xn.track(I||t,o?"x,y":a?"rotation":"top,left"),t._gsDragID=j="d"+Ey++,vs[j]=u,I&&(I.enable(),I.element._gsDragID=j),(n.bounds||a)&&ye(),n.bounds&&u.applyBounds(),u},i.disable=function(ne){for(var L=u.isDragging,j=g.length,O;--j>-1;)lu(g[j],"cursor",null);if(ne!=="soft"){for(Fd(g,null),j=g.length;--j>-1;)O=g[j],lu(O,"touchCallout",null),Dt(O,"mousedown",it),Dt(O,"touchstart",it),Dt(O,"click",_e,!0),Dt(O,"contextmenu",te);Pa(g,!0),D&&(Dt(D,"touchcancel",Y),Dt(D,"touchend",Y),Dt(D,"touchmove",U)),Dt(P,"mouseup",Y),Dt(P,"mousemove",U)}return Vd(t,Q),z=!1,Xn&&ne!=="soft"&&(Xn.untrack(I||t,o?"x,y":a?"rotation":"top,left"),u.tween&&u.tween.kill()),I&&I.disable(),Bd(Z),u.isDragging=u.isPressed=mt=!1,L&&At(u,"dragend","onDragEnd"),u},i.enabled=function(ne,L){return arguments.length?ne?u.enable(L):u.disable(L):z},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),Qe.set(g,{clearProps:"userSelect"}),delete vs[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(I=i.scrollProxy=new Iy(t,by({onKill:function(){u.isPressed&&Y(null)}},n)),t.style.overflowY=h&&!iu?"auto":"hidden",t.style.overflowX=f&&!iu?"auto":"hidden",t=I.content),a?_.rotation=1:(f&&(_[l]=1),h&&(_[c]=1)),C.force3D="force3D"in n?n.force3D:!0,Rd(Ad(i)),i.enable(),i}return e.register=function(n){Qe=n,fu()},e.create=function(n,i){return nu||fu(!0),$i(n).map(function(s){return new e(s,i)})},e.get=function(n){return vs[($i(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(ji()-Id)/1e3},e.hitTest=function(n,i,s){if(n===i)return!1;var o=Es(n),a=Es(i),l=o.top,c=o.left,f=o.right,h=o.bottom,d=o.width,u=o.height,g=a.left>f||a.right<c||a.top>h||a.bottom<l,_,m,p;return g||!s?!g:(p=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(c,a.left),top:Math.max(l,a.top)},_.width=Math.min(f,a.right)-_.left,_.height=Math.min(h,a.bottom)-_.top,_.width<0||_.height<0?!1:p?(s*=.01,m=_.width*_.height,m>=d*u*s||m>=a.width*a.height*s):_.width>s&&_.height>s)},e}(Uy);Ay(Ts.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1}),Ts.zIndex=1e3,Ts.version="3.12.5",Dd()&&Qe.registerPlugin(Ts),document.addEventListener("DOMContentLoaded",()=>{Q0()}),Md.registerPlugin(Ts),Ts.create("#Drag",{bounds:".moodboard",inertia:!0}),console.log("drag")});
