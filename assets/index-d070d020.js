var Sf=Object.defineProperty;var wf=(n,e,t)=>e in n?Sf(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ie=(n,e,t)=>(wf(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();function $o(n,e){const t=Object.create(null),i=n.split(",");for(let r=0;r<i.length;r++)t[i[r]]=!0;return e?r=>!!t[r.toLowerCase()]:r=>!!t[r]}function Zo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ht(i)?Cf(i):Zo(i);if(r)for(const s in r)e[s]=r[s]}return e}else{if(ht(n))return n;if(et(n))return n}}const Ef=/;(?![^(]*\))/g,Tf=/:([^]+)/,Af=/\/\*.*?\*\//gs;function Cf(n){const e={};return n.replace(Af,"").split(Ef).forEach(t=>{if(t){const i=t.split(Tf);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Jo(n){let e="";if(ht(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=Jo(n[t]);i&&(e+=i+" ")}else if(et(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Lf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Pf=$o(Lf);function Bc(n){return!!n||n===""}const Ze={},Fi=[],Jt=()=>{},Rf=()=>!1,Df=/^on[^a-z]/,Ms=n=>Df.test(n),Qo=n=>n.startsWith("onUpdate:"),Et=Object.assign,ea=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},If=Object.prototype.hasOwnProperty,We=(n,e)=>If.call(n,e),Fe=Array.isArray,pr=n=>ys(n)==="[object Map]",Of=n=>ys(n)==="[object Set]",Ue=n=>typeof n=="function",ht=n=>typeof n=="string",ta=n=>typeof n=="symbol",et=n=>n!==null&&typeof n=="object",kc=n=>et(n)&&Ue(n.then)&&Ue(n.catch),Ff=Object.prototype.toString,ys=n=>Ff.call(n),Nf=n=>ys(n).slice(8,-1),Uf=n=>ys(n)==="[object Object]",na=n=>ht(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,as=$o(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bs=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},zf=/-(\w)/g,Gi=bs(n=>n.replace(zf,(e,t)=>t?t.toUpperCase():"")),Bf=/\B([A-Z])/g,Zi=bs(n=>n.replace(Bf,"-$1").toLowerCase()),Gc=bs(n=>n.charAt(0).toUpperCase()+n.slice(1)),zs=bs(n=>n?`on${Gc(n)}`:""),vr=(n,e)=>!Object.is(n,e),Bs=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},ds=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},kf=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ra;const Gf=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let jt;class Hf{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=jt,!e&&jt&&(this.index=(jt.scopes||(jt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=jt;try{return jt=this,e()}finally{jt=t}}}on(){jt=this}off(){jt=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Vf(n,e=jt){e&&e.active&&e.effects.push(n)}function Wf(){return jt}const ia=n=>{const e=new Set(n);return e.w=0,e.n=0,e},Hc=n=>(n.w&kn)>0,Vc=n=>(n.n&kn)>0,qf=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=kn},jf=n=>{const{deps:e}=n;if(e.length){let t=0;for(let i=0;i<e.length;i++){const r=e[i];Hc(r)&&!Vc(r)?r.delete(n):e[t++]=r,r.w&=~kn,r.n&=~kn}e.length=t}},Co=new WeakMap;let fr=0,kn=1;const Lo=30;let Xt;const oi=Symbol(""),Po=Symbol("");class ra{constructor(e,t=null,i){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,Vf(this,i)}run(){if(!this.active)return this.fn();let e=Xt,t=Un;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Xt,Xt=this,Un=!0,kn=1<<++fr,fr<=Lo?qf(this):Da(this),this.fn()}finally{fr<=Lo&&jf(this),kn=1<<--fr,Xt=this.parent,Un=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xt===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let Un=!0;const Wc=[];function Ji(){Wc.push(Un),Un=!1}function Qi(){const n=Wc.pop();Un=n===void 0?!0:n}function Pt(n,e,t){if(Un&&Xt){let i=Co.get(n);i||Co.set(n,i=new Map);let r=i.get(t);r||i.set(t,r=ia()),qc(r)}}function qc(n,e){let t=!1;fr<=Lo?Vc(n)||(n.n|=kn,t=!Hc(n)):t=!n.has(Xt),t&&(n.add(Xt),Xt.deps.push(n))}function En(n,e,t,i,r,s){const a=Co.get(n);if(!a)return;let o=[];if(e==="clear")o=[...a.values()];else if(t==="length"&&Fe(n)){const l=Number(i);a.forEach((c,u)=>{(u==="length"||u>=l)&&o.push(c)})}else switch(t!==void 0&&o.push(a.get(t)),e){case"add":Fe(n)?na(t)&&o.push(a.get("length")):(o.push(a.get(oi)),pr(n)&&o.push(a.get(Po)));break;case"delete":Fe(n)||(o.push(a.get(oi)),pr(n)&&o.push(a.get(Po)));break;case"set":pr(n)&&o.push(a.get(oi));break}if(o.length===1)o[0]&&Ro(o[0]);else{const l=[];for(const c of o)c&&l.push(...c);Ro(ia(l))}}function Ro(n,e){const t=Fe(n)?n:[...n];for(const i of t)i.computed&&Ia(i);for(const i of t)i.computed||Ia(i)}function Ia(n,e){(n!==Xt||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const Xf=$o("__proto__,__v_isRef,__isVue"),jc=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ta)),Yf=sa(),Kf=sa(!1,!0),$f=sa(!0),Oa=Zf();function Zf(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const i=je(this);for(let s=0,a=this.length;s<a;s++)Pt(i,"get",s+"");const r=i[e](...t);return r===-1||r===!1?i[e](...t.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){Ji();const i=je(this)[e].apply(this,t);return Qi(),i}}),n}function Jf(n){const e=je(this);return Pt(e,"has",n),e.hasOwnProperty(n)}function sa(n=!1,e=!1){return function(i,r,s){if(r==="__v_isReactive")return!n;if(r==="__v_isReadonly")return n;if(r==="__v_isShallow")return e;if(r==="__v_raw"&&s===(n?e?ph:Zc:e?$c:Kc).get(i))return i;const a=Fe(i);if(!n){if(a&&We(Oa,r))return Reflect.get(Oa,r,s);if(r==="hasOwnProperty")return Jf}const o=Reflect.get(i,r,s);return(ta(r)?jc.has(r):Xf(r))||(n||Pt(i,"get",r),e)?o:gt(o)?a&&na(r)?o:o.value:et(o)?n?Jc(o):Rr(o):o}}const Qf=Xc(),eh=Xc(!0);function Xc(n=!1){return function(t,i,r,s){let a=t[i];if(Hi(a)&&gt(a)&&!gt(r))return!1;if(!n&&(!ps(r)&&!Hi(r)&&(a=je(a),r=je(r)),!Fe(t)&&gt(a)&&!gt(r)))return a.value=r,!0;const o=Fe(t)&&na(i)?Number(i)<t.length:We(t,i),l=Reflect.set(t,i,r,s);return t===je(s)&&(o?vr(r,a)&&En(t,"set",i,r):En(t,"add",i,r)),l}}function th(n,e){const t=We(n,e);n[e];const i=Reflect.deleteProperty(n,e);return i&&t&&En(n,"delete",e,void 0),i}function nh(n,e){const t=Reflect.has(n,e);return(!ta(e)||!jc.has(e))&&Pt(n,"has",e),t}function ih(n){return Pt(n,"iterate",Fe(n)?"length":oi),Reflect.ownKeys(n)}const Yc={get:Yf,set:Qf,deleteProperty:th,has:nh,ownKeys:ih},rh={get:$f,set(n,e){return!0},deleteProperty(n,e){return!0}},sh=Et({},Yc,{get:Kf,set:eh}),oa=n=>n,Ss=n=>Reflect.getPrototypeOf(n);function Fr(n,e,t=!1,i=!1){n=n.__v_raw;const r=je(n),s=je(e);t||(e!==s&&Pt(r,"get",e),Pt(r,"get",s));const{has:a}=Ss(r),o=i?oa:t?ca:Mr;if(a.call(r,e))return o(n.get(e));if(a.call(r,s))return o(n.get(s));n!==r&&n.get(e)}function Nr(n,e=!1){const t=this.__v_raw,i=je(t),r=je(n);return e||(n!==r&&Pt(i,"has",n),Pt(i,"has",r)),n===r?t.has(n):t.has(n)||t.has(r)}function Ur(n,e=!1){return n=n.__v_raw,!e&&Pt(je(n),"iterate",oi),Reflect.get(n,"size",n)}function Fa(n){n=je(n);const e=je(this);return Ss(e).has.call(e,n)||(e.add(n),En(e,"add",n,n)),this}function Na(n,e){e=je(e);const t=je(this),{has:i,get:r}=Ss(t);let s=i.call(t,n);s||(n=je(n),s=i.call(t,n));const a=r.call(t,n);return t.set(n,e),s?vr(e,a)&&En(t,"set",n,e):En(t,"add",n,e),this}function Ua(n){const e=je(this),{has:t,get:i}=Ss(e);let r=t.call(e,n);r||(n=je(n),r=t.call(e,n)),i&&i.call(e,n);const s=e.delete(n);return r&&En(e,"delete",n,void 0),s}function za(){const n=je(this),e=n.size!==0,t=n.clear();return e&&En(n,"clear",void 0,void 0),t}function zr(n,e){return function(i,r){const s=this,a=s.__v_raw,o=je(a),l=e?oa:n?ca:Mr;return!n&&Pt(o,"iterate",oi),a.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function Br(n,e,t){return function(...i){const r=this.__v_raw,s=je(r),a=pr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?oa:e?ca:Mr;return!e&&Pt(s,"iterate",l?Po:oi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function An(n){return function(...e){return n==="delete"?!1:this}}function oh(){const n={get(s){return Fr(this,s)},get size(){return Ur(this)},has:Nr,add:Fa,set:Na,delete:Ua,clear:za,forEach:zr(!1,!1)},e={get(s){return Fr(this,s,!1,!0)},get size(){return Ur(this)},has:Nr,add:Fa,set:Na,delete:Ua,clear:za,forEach:zr(!1,!0)},t={get(s){return Fr(this,s,!0)},get size(){return Ur(this,!0)},has(s){return Nr.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:zr(!0,!1)},i={get(s){return Fr(this,s,!0,!0)},get size(){return Ur(this,!0)},has(s){return Nr.call(this,s,!0)},add:An("add"),set:An("set"),delete:An("delete"),clear:An("clear"),forEach:zr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{n[s]=Br(s,!1,!1),t[s]=Br(s,!0,!1),e[s]=Br(s,!1,!0),i[s]=Br(s,!0,!0)}),[n,t,e,i]}const[ah,lh,ch,uh]=oh();function aa(n,e){const t=e?n?uh:ch:n?lh:ah;return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(We(t,r)&&r in i?t:i,r,s)}const fh={get:aa(!1,!1)},hh={get:aa(!1,!0)},dh={get:aa(!0,!1)},Kc=new WeakMap,$c=new WeakMap,Zc=new WeakMap,ph=new WeakMap;function mh(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function gh(n){return n.__v_skip||!Object.isExtensible(n)?0:mh(Nf(n))}function Rr(n){return Hi(n)?n:la(n,!1,Yc,fh,Kc)}function _h(n){return la(n,!1,sh,hh,$c)}function Jc(n){return la(n,!0,rh,dh,Zc)}function la(n,e,t,i,r){if(!et(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=gh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Ni(n){return Hi(n)?Ni(n.__v_raw):!!(n&&n.__v_isReactive)}function Hi(n){return!!(n&&n.__v_isReadonly)}function ps(n){return!!(n&&n.__v_isShallow)}function Qc(n){return Ni(n)||Hi(n)}function je(n){const e=n&&n.__v_raw;return e?je(e):n}function eu(n){return ds(n,"__v_skip",!0),n}const Mr=n=>et(n)?Rr(n):n,ca=n=>et(n)?Jc(n):n;function tu(n){Un&&Xt&&(n=je(n),qc(n.dep||(n.dep=ia())))}function nu(n,e){n=je(n);const t=n.dep;t&&Ro(t)}function gt(n){return!!(n&&n.__v_isRef===!0)}function xh(n){return iu(n,!1)}function vh(n){return iu(n,!0)}function iu(n,e){return gt(n)?n:new Mh(n,e)}class Mh{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:je(e),this._value=t?e:Mr(e)}get value(){return tu(this),this._value}set value(e){const t=this.__v_isShallow||ps(e)||Hi(e);e=t?e:je(e),vr(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Mr(e),nu(this))}}function ai(n){return gt(n)?n.value:n}const yh={get:(n,e,t)=>ai(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return gt(r)&&!gt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function ru(n){return Ni(n)?n:new Proxy(n,yh)}var su;class bh{constructor(e,t,i,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[su]=!1,this._dirty=!0,this.effect=new ra(e,()=>{this._dirty||(this._dirty=!0,nu(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return tu(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}su="__v_isReadonly";function Sh(n,e,t=!1){let i,r;const s=Ue(n);return s?(i=n,r=Jt):(i=n.get,r=n.set),new bh(i,r,s||!r,t)}function zn(n,e,t,i){let r;try{r=i?n(...i):n()}catch(s){ws(s,e,t)}return r}function Qt(n,e,t,i){if(Ue(n)){const s=zn(n,e,t,i);return s&&kc(s)&&s.catch(a=>{ws(a,e,t)}),s}const r=[];for(let s=0;s<n.length;s++)r.push(Qt(n[s],e,t,i));return r}function ws(n,e,t,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const a=e.proxy,o=t;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](n,a,o)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){zn(l,null,10,[n,a,o]);return}}wh(n,t,r,i)}function wh(n,e,t,i=!0){console.error(n)}let yr=!1,Do=!1;const mt=[];let cn=0;const Ui=[];let Mn=null,ti=0;const ou=Promise.resolve();let ua=null;function au(n){const e=ua||ou;return n?e.then(this?n.bind(this):n):e}function Eh(n){let e=cn+1,t=mt.length;for(;e<t;){const i=e+t>>>1;br(mt[i])<n?e=i+1:t=i}return e}function fa(n){(!mt.length||!mt.includes(n,yr&&n.allowRecurse?cn+1:cn))&&(n.id==null?mt.push(n):mt.splice(Eh(n.id),0,n),lu())}function lu(){!yr&&!Do&&(Do=!0,ua=ou.then(uu))}function Th(n){const e=mt.indexOf(n);e>cn&&mt.splice(e,1)}function Ah(n){Fe(n)?Ui.push(...n):(!Mn||!Mn.includes(n,n.allowRecurse?ti+1:ti))&&Ui.push(n),lu()}function Ba(n,e=yr?cn+1:0){for(;e<mt.length;e++){const t=mt[e];t&&t.pre&&(mt.splice(e,1),e--,t())}}function cu(n){if(Ui.length){const e=[...new Set(Ui)];if(Ui.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((t,i)=>br(t)-br(i)),ti=0;ti<Mn.length;ti++)Mn[ti]();Mn=null,ti=0}}const br=n=>n.id==null?1/0:n.id,Ch=(n,e)=>{const t=br(n)-br(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function uu(n){Do=!1,yr=!0,mt.sort(Ch);const e=Jt;try{for(cn=0;cn<mt.length;cn++){const t=mt[cn];t&&t.active!==!1&&zn(t,null,14)}}finally{cn=0,mt.length=0,cu(),yr=!1,ua=null,(mt.length||Ui.length)&&uu()}}function Lh(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ze;let r=t;const s=e.startsWith("update:"),a=s&&e.slice(7);if(a&&a in i){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=i[u]||Ze;h&&(r=t.map(m=>ht(m)?m.trim():m)),f&&(r=t.map(kf))}let o,l=i[o=zs(e)]||i[o=zs(Gi(e))];!l&&s&&(l=i[o=zs(Zi(e))]),l&&Qt(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,Qt(c,n,6,r)}}function fu(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ue(n)){const l=c=>{const u=fu(c,e,!0);u&&(o=!0,Et(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(et(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):Et(a,s),et(n)&&i.set(n,a),a)}function Es(n,e){return!n||!Ms(e)?!1:(e=e.slice(2).replace(/Once$/,""),We(n,e[0].toLowerCase()+e.slice(1))||We(n,Zi(e))||We(n,e))}let un=null,hu=null;function ms(n){const e=un;return un=n,hu=n&&n.type.__scopeId||null,e}function Ph(n,e=un,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&Xa(-1);const s=ms(e);let a;try{a=n(...r)}finally{ms(s),i._d&&Xa(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ks(n){const{type:e,vnode:t,proxy:i,withProxy:r,props:s,propsOptions:[a],slots:o,attrs:l,emit:c,render:u,renderCache:f,data:h,setupState:m,ctx:_,inheritAttrs:d}=n;let p,v;const S=ms(n);try{if(t.shapeFlag&4){const T=r||i;p=an(u.call(T,T,f,s,m,h,_)),v=l}else{const T=e;p=an(T.length>1?T(s,{attrs:l,slots:o,emit:c}):T(s,null)),v=e.props?l:Rh(l)}}catch(T){gr.length=0,ws(T,n,1),p=Ht(Sr)}let x=p;if(v&&d!==!1){const T=Object.keys(v),{shapeFlag:E}=x;T.length&&E&7&&(a&&T.some(Qo)&&(v=Dh(v,a)),x=Vi(x,v))}return t.dirs&&(x=Vi(x),x.dirs=x.dirs?x.dirs.concat(t.dirs):t.dirs),t.transition&&(x.transition=t.transition),p=x,ms(S),p}const Rh=n=>{let e;for(const t in n)(t==="class"||t==="style"||Ms(t))&&((e||(e={}))[t]=n[t]);return e},Dh=(n,e)=>{const t={};for(const i in n)(!Qo(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function Ih(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ka(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Es(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ka(i,a,c):!0:!!a;return!1}function ka(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Es(t,s))return!0}return!1}function Oh({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const Fh=n=>n.__isSuspense;function Nh(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):Ah(n)}function ls(n,e){if(rt){let t=rt.provides;const i=rt.parent&&rt.parent.provides;i===t&&(t=rt.provides=Object.create(i)),t[n]=e}}function Sn(n,e,t=!1){const i=rt||un;if(i){const r=i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ue(e)?e.call(i.proxy):e}}const kr={};function cs(n,e,t){return du(n,e,t)}function du(n,e,{immediate:t,deep:i,flush:r,onTrack:s,onTrigger:a}=Ze){const o=Wf()===(rt==null?void 0:rt.scope)?rt:null;let l,c=!1,u=!1;if(gt(n)?(l=()=>n.value,c=ps(n)):Ni(n)?(l=()=>n,i=!0):Fe(n)?(u=!0,c=n.some(x=>Ni(x)||ps(x)),l=()=>n.map(x=>{if(gt(x))return x.value;if(Ni(x))return Ii(x);if(Ue(x))return zn(x,o,2)})):Ue(n)?e?l=()=>zn(n,o,2):l=()=>{if(!(o&&o.isUnmounted))return f&&f(),Qt(n,o,3,[h])}:l=Jt,e&&i){const x=l;l=()=>Ii(x())}let f,h=x=>{f=v.onStop=()=>{zn(x,o,4)}},m;if(Er)if(h=Jt,e?t&&Qt(e,o,3,[l(),u?[]:void 0,h]):l(),r==="sync"){const x=Ld();m=x.__watcherHandles||(x.__watcherHandles=[])}else return Jt;let _=u?new Array(n.length).fill(kr):kr;const d=()=>{if(v.active)if(e){const x=v.run();(i||c||(u?x.some((T,E)=>vr(T,_[E])):vr(x,_)))&&(f&&f(),Qt(e,o,3,[x,_===kr?void 0:u&&_[0]===kr?[]:_,h]),_=x)}else v.run()};d.allowRecurse=!!e;let p;r==="sync"?p=d:r==="post"?p=()=>At(d,o&&o.suspense):(d.pre=!0,o&&(d.id=o.uid),p=()=>fa(d));const v=new ra(l,p);e?t?d():_=v.run():r==="post"?At(v.run.bind(v),o&&o.suspense):v.run();const S=()=>{v.stop(),o&&o.scope&&ea(o.scope.effects,v)};return m&&m.push(S),S}function Uh(n,e,t){const i=this.proxy,r=ht(n)?n.includes(".")?pu(i,n):()=>i[n]:n.bind(i,i);let s;Ue(e)?s=e:(s=e.handler,t=e);const a=rt;Wi(this);const o=du(r,s.bind(i),t);return a?Wi(a):li(),o}function pu(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}function Ii(n,e){if(!et(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),gt(n))Ii(n.value,e);else if(Fe(n))for(let t=0;t<n.length;t++)Ii(n[t],e);else if(Of(n)||pr(n))n.forEach(t=>{Ii(t,e)});else if(Uf(n))for(const t in n)Ii(n[t],e);return n}function ha(n){return Ue(n)?{setup:n,name:n.name}:n}const us=n=>!!n.type.__asyncLoader,mu=n=>n.type.__isKeepAlive;function zh(n,e){gu(n,"a",e)}function Bh(n,e){gu(n,"da",e)}function gu(n,e,t=rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Ts(e,i,t),t){let r=t.parent;for(;r&&r.parent;)mu(r.parent.vnode)&&kh(i,e,t,r),r=r.parent}}function kh(n,e,t,i){const r=Ts(e,n,i,!0);xu(()=>{ea(i[e],r)},t)}function Ts(n,e,t=rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{if(t.isUnmounted)return;Ji(),Wi(t);const o=Qt(e,t,n,a);return li(),Qi(),o});return i?r.unshift(s):r.push(s),s}}const Tn=n=>(e,t=rt)=>(!Er||n==="sp")&&Ts(n,(...i)=>e(...i),t),Gh=Tn("bm"),_u=Tn("m"),Hh=Tn("bu"),Vh=Tn("u"),Wh=Tn("bum"),xu=Tn("um"),qh=Tn("sp"),jh=Tn("rtg"),Xh=Tn("rtc");function Yh(n,e=rt){Ts("ec",n,e)}function Xn(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Ji(),Qt(l,t,8,[n.el,o,n,e]),Qi())}}const Kh=Symbol(),Io=n=>n?Pu(n)?_a(n)||n.proxy:Io(n.parent):null,mr=Et(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Io(n.parent),$root:n=>Io(n.root),$emit:n=>n.emit,$options:n=>da(n),$forceUpdate:n=>n.f||(n.f=()=>fa(n.update)),$nextTick:n=>n.n||(n.n=au.bind(n.proxy)),$watch:n=>Uh.bind(n)}),Gs=(n,e)=>n!==Ze&&!n.__isScriptSetup&&We(n,e),$h={get({_:n},e){const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const m=a[e];if(m!==void 0)switch(m){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(Gs(i,e))return a[e]=1,i[e];if(r!==Ze&&We(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&We(c,e))return a[e]=3,s[e];if(t!==Ze&&We(t,e))return a[e]=4,t[e];Oo&&(a[e]=0)}}const u=mr[e];let f,h;if(u)return e==="$attrs"&&Pt(n,"get",e),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ze&&We(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,We(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return Gs(r,e)?(r[e]=t,!0):i!==Ze&&We(i,e)?(i[e]=t,!0):We(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ze&&We(n,a)||Gs(e,a)||(o=s[0])&&We(o,a)||We(i,a)||We(mr,a)||We(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:We(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let Oo=!0;function Zh(n){const e=da(n),t=n.proxy,i=n.ctx;Oo=!1,e.beforeCreate&&Ga(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:_,activated:d,deactivated:p,beforeDestroy:v,beforeUnmount:S,destroyed:x,unmounted:T,render:E,renderTracked:R,renderTriggered:z,errorCaptured:b,serverPrefetch:P,expose:F,inheritAttrs:ne,components:ce,directives:H,filters:N}=e;if(c&&Jh(c,i,null,n.appContext.config.unwrapInjectedRef),a)for(const ie in a){const W=a[ie];Ue(W)&&(i[ie]=W.bind(t))}if(r){const ie=r.call(t,t);et(ie)&&(n.data=Rr(ie))}if(Oo=!0,s)for(const ie in s){const W=s[ie],ae=Ue(W)?W.bind(t,t):Ue(W.get)?W.get.bind(t,t):Jt,he=!Ue(W)&&Ue(W.set)?W.set.bind(t):Jt,we=Gt({get:ae,set:he});Object.defineProperty(i,ie,{enumerable:!0,configurable:!0,get:()=>we.value,set:V=>we.value=V})}if(o)for(const ie in o)vu(o[ie],i,t,ie);if(l){const ie=Ue(l)?l.call(t):l;Reflect.ownKeys(ie).forEach(W=>{ls(W,ie[W])})}u&&Ga(u,n,"c");function re(ie,W){Fe(W)?W.forEach(ae=>ie(ae.bind(t))):W&&ie(W.bind(t))}if(re(Gh,f),re(_u,h),re(Hh,m),re(Vh,_),re(zh,d),re(Bh,p),re(Yh,b),re(Xh,R),re(jh,z),re(Wh,S),re(xu,T),re(qh,P),Fe(F))if(F.length){const ie=n.exposed||(n.exposed={});F.forEach(W=>{Object.defineProperty(ie,W,{get:()=>t[W],set:ae=>t[W]=ae})})}else n.exposed||(n.exposed={});E&&n.render===Jt&&(n.render=E),ne!=null&&(n.inheritAttrs=ne),ce&&(n.components=ce),H&&(n.directives=H)}function Jh(n,e,t=Jt,i=!1){Fe(n)&&(n=Fo(n));for(const r in n){const s=n[r];let a;et(s)?"default"in s?a=Sn(s.from||r,s.default,!0):a=Sn(s.from||r):a=Sn(s),gt(a)&&i?Object.defineProperty(e,r,{enumerable:!0,configurable:!0,get:()=>a.value,set:o=>a.value=o}):e[r]=a}}function Ga(n,e,t){Qt(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function vu(n,e,t,i){const r=i.includes(".")?pu(t,i):()=>t[i];if(ht(n)){const s=e[n];Ue(s)&&cs(r,s)}else if(Ue(n))cs(r,n.bind(t));else if(et(n))if(Fe(n))n.forEach(s=>vu(s,e,t,i));else{const s=Ue(n.handler)?n.handler.bind(t):e[n.handler];Ue(s)&&cs(r,s,n)}}function da(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>gs(l,c,a,!0)),gs(l,e,a)),et(e)&&s.set(e,l),l}function gs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&gs(n,s,t,!0),r&&r.forEach(a=>gs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Qh[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Qh={data:Ha,props:Jn,emits:Jn,methods:Jn,computed:Jn,beforeCreate:yt,created:yt,beforeMount:yt,mounted:yt,beforeUpdate:yt,updated:yt,beforeDestroy:yt,beforeUnmount:yt,destroyed:yt,unmounted:yt,activated:yt,deactivated:yt,errorCaptured:yt,serverPrefetch:yt,components:Jn,directives:Jn,watch:td,provide:Ha,inject:ed};function Ha(n,e){return e?n?function(){return Et(Ue(n)?n.call(this,this):n,Ue(e)?e.call(this,this):e)}:e:n}function ed(n,e){return Jn(Fo(n),Fo(e))}function Fo(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function yt(n,e){return n?[...new Set([].concat(n,e))]:e}function Jn(n,e){return n?Et(Et(Object.create(null),n),e):e}function td(n,e){if(!n)return e;if(!e)return n;const t=Et(Object.create(null),n);for(const i in e)t[i]=yt(n[i],e[i]);return t}function nd(n,e,t,i=!1){const r={},s={};ds(s,Cs,1),n.propsDefaults=Object.create(null),Mu(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:_h(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function id(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=je(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Es(n.emitsOptions,h))continue;const m=e[h];if(l)if(We(s,h))m!==s[h]&&(s[h]=m,c=!0);else{const _=Gi(h);r[_]=No(l,o,_,m,n,!1)}else m!==s[h]&&(s[h]=m,c=!0)}}}else{Mu(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!We(e,f)&&((u=Zi(f))===f||!We(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=No(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!We(e,f))&&(delete s[f],c=!0)}c&&En(n,"set","$attrs")}function Mu(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(as(l))continue;const c=e[l];let u;r&&We(r,u=Gi(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Es(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=je(t),c=o||Ze;for(let u=0;u<s.length;u++){const f=s[u];t[f]=No(r,l,f,c[f],n,!We(c,f))}}return a}function No(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=We(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&Ue(l)){const{propsDefaults:c}=r;t in c?i=c[t]:(Wi(r),i=c[t]=l.call(null,e),li())}else i=l}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Zi(t))&&(i=!0))}return i}function yu(n,e,t=!1){const i=e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ue(n)){const u=f=>{l=!0;const[h,m]=yu(f,e,!0);Et(a,h),m&&o.push(...m)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return et(n)&&i.set(n,Fi),Fi;if(Fe(s))for(let u=0;u<s.length;u++){const f=Gi(s[u]);Va(f)&&(a[f]=Ze)}else if(s)for(const u in s){const f=Gi(u);if(Va(f)){const h=s[u],m=a[f]=Fe(h)||Ue(h)?{type:h}:Object.assign({},h);if(m){const _=ja(Boolean,m.type),d=ja(String,m.type);m[0]=_>-1,m[1]=d<0||_<d,(_>-1||We(m,"default"))&&o.push(f)}}}const c=[a,o];return et(n)&&i.set(n,c),c}function Va(n){return n[0]!=="$"}function Wa(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function qa(n,e){return Wa(n)===Wa(e)}function ja(n,e){return Fe(e)?e.findIndex(t=>qa(t,n)):Ue(e)&&qa(e,n)?0:-1}const bu=n=>n[0]==="_"||n==="$stable",pa=n=>Fe(n)?n.map(an):[an(n)],rd=(n,e,t)=>{if(e._n)return e;const i=Ph((...r)=>pa(e(...r)),t);return i._c=!1,i},Su=(n,e,t)=>{const i=n._ctx;for(const r in n){if(bu(r))continue;const s=n[r];if(Ue(s))e[r]=rd(r,s,i);else if(s!=null){const a=pa(s);e[r]=()=>a}}},wu=(n,e)=>{const t=pa(e);n.slots.default=()=>t},sd=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=je(e),ds(e,"_",t)):Su(e,n.slots={})}else n.slots={},e&&wu(n,e);ds(n.slots,Cs,1)},od=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ze;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:(Et(r,e),!t&&o===1&&delete r._):(s=!e.$stable,Su(e,r)),a=e}else e&&(wu(n,e),a={default:1});if(s)for(const o in r)!bu(o)&&!(o in a)&&delete r[o]};function Eu(){return{app:null,config:{isNativeTag:Rf,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ad=0;function ld(n,e){return function(i,r=null){Ue(i)||(i=Object.assign({},i)),r!=null&&!et(r)&&(r=null);const s=Eu(),a=new Set;let o=!1;const l=s.app={_uid:ad++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:Pd,get config(){return s.config},set config(c){},use(c,...u){return a.has(c)||(c&&Ue(c.install)?(a.add(c),c.install(l,...u)):Ue(c)&&(a.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!o){const h=Ht(i,r);return h.appContext=s,u&&e?e(h,c):n(h,c,f),o=!0,l._container=c,c.__vue_app__=l,_a(h.component)||h.component.proxy}},unmount(){o&&(n(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l}};return l}}function Uo(n,e,t,i,r=!1){if(Fe(n)){n.forEach((h,m)=>Uo(h,e&&(Fe(e)?e[m]:e),t,i,r));return}if(us(i)&&!r)return;const s=i.shapeFlag&4?_a(i.component)||i.component.proxy:i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ze?o.refs={}:o.refs,f=o.setupState;if(c!=null&&c!==l&&(ht(c)?(u[c]=null,We(f,c)&&(f[c]=null)):gt(c)&&(c.value=null)),Ue(l))zn(l,o,12,[a,u]);else{const h=ht(l),m=gt(l);if(h||m){const _=()=>{if(n.f){const d=h?We(f,l)?f[l]:u[l]:l.value;r?Fe(d)&&ea(d,s):Fe(d)?d.includes(s)||d.push(s):h?(u[l]=[s],We(f,l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else h?(u[l]=a,We(f,l)&&(f[l]=a)):m&&(l.value=a,n.k&&(u[n.k]=a))};a?(_.id=-1,At(_,t)):_()}}}const At=Nh;function cd(n){return ud(n)}function ud(n,e){const t=Gf();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Jt,insertStaticContent:_}=n,d=(y,L,B,j=null,Z=null,le=null,pe=!1,se=null,me=!!L.dynamicChildren)=>{if(y===L)return;y&&!nr(y,L)&&(j=q(y),V(y,Z,le,!0),y=null),L.patchFlag===-2&&(me=!1,L.dynamicChildren=null);const{type:oe,ref:M,shapeFlag:g}=L;switch(oe){case As:p(y,L,B,j);break;case Sr:v(y,L,B,j);break;case Hs:y==null&&S(L,B,j,pe);break;case yn:ce(y,L,B,j,Z,le,pe,se,me);break;default:g&1?E(y,L,B,j,Z,le,pe,se,me):g&6?H(y,L,B,j,Z,le,pe,se,me):(g&64||g&128)&&oe.process(y,L,B,j,Z,le,pe,se,me,de)}M!=null&&Z&&Uo(M,y&&y.ref,le,L||y,!L)},p=(y,L,B,j)=>{if(y==null)i(L.el=o(L.children),B,j);else{const Z=L.el=y.el;L.children!==y.children&&c(Z,L.children)}},v=(y,L,B,j)=>{y==null?i(L.el=l(L.children||""),B,j):L.el=y.el},S=(y,L,B,j)=>{[y.el,y.anchor]=_(y.children,L,B,j,y.el,y.anchor)},x=({el:y,anchor:L},B,j)=>{let Z;for(;y&&y!==L;)Z=h(y),i(y,B,j),y=Z;i(L,B,j)},T=({el:y,anchor:L})=>{let B;for(;y&&y!==L;)B=h(y),r(y),y=B;r(L)},E=(y,L,B,j,Z,le,pe,se,me)=>{pe=pe||L.type==="svg",y==null?R(L,B,j,Z,le,pe,se,me):P(y,L,Z,le,pe,se,me)},R=(y,L,B,j,Z,le,pe,se)=>{let me,oe;const{type:M,props:g,shapeFlag:I,transition:Y,dirs:J}=y;if(me=y.el=a(y.type,le,g&&g.is,g),I&8?u(me,y.children):I&16&&b(y.children,me,null,j,Z,le&&M!=="foreignObject",pe,se),J&&Xn(y,null,j,"created"),z(me,y,y.scopeId,pe,j),g){for(const _e in g)_e!=="value"&&!as(_e)&&s(me,_e,null,g[_e],le,y.children,j,Z,X);"value"in g&&s(me,"value",null,g.value),(oe=g.onVnodeBeforeMount)&&rn(oe,j,y)}J&&Xn(y,null,j,"beforeMount");const fe=(!Z||Z&&!Z.pendingBranch)&&Y&&!Y.persisted;fe&&Y.beforeEnter(me),i(me,L,B),((oe=g&&g.onVnodeMounted)||fe||J)&&At(()=>{oe&&rn(oe,j,y),fe&&Y.enter(me),J&&Xn(y,null,j,"mounted")},Z)},z=(y,L,B,j,Z)=>{if(B&&m(y,B),j)for(let le=0;le<j.length;le++)m(y,j[le]);if(Z){let le=Z.subTree;if(L===le){const pe=Z.vnode;z(y,pe,pe.scopeId,pe.slotScopeIds,Z.parent)}}},b=(y,L,B,j,Z,le,pe,se,me=0)=>{for(let oe=me;oe<y.length;oe++){const M=y[oe]=se?In(y[oe]):an(y[oe]);d(null,M,L,B,j,Z,le,pe,se)}},P=(y,L,B,j,Z,le,pe)=>{const se=L.el=y.el;let{patchFlag:me,dynamicChildren:oe,dirs:M}=L;me|=y.patchFlag&16;const g=y.props||Ze,I=L.props||Ze;let Y;B&&Yn(B,!1),(Y=I.onVnodeBeforeUpdate)&&rn(Y,B,L,y),M&&Xn(L,y,B,"beforeUpdate"),B&&Yn(B,!0);const J=Z&&L.type!=="foreignObject";if(oe?F(y.dynamicChildren,oe,se,B,j,J,le):pe||W(y,L,se,null,B,j,J,le,!1),me>0){if(me&16)ne(se,L,g,I,B,j,Z);else if(me&2&&g.class!==I.class&&s(se,"class",null,I.class,Z),me&4&&s(se,"style",g.style,I.style,Z),me&8){const fe=L.dynamicProps;for(let _e=0;_e<fe.length;_e++){const C=fe[_e],O=g[C],Se=I[C];(Se!==O||C==="value")&&s(se,C,O,Se,Z,y.children,B,j,X)}}me&1&&y.children!==L.children&&u(se,L.children)}else!pe&&oe==null&&ne(se,L,g,I,B,j,Z);((Y=I.onVnodeUpdated)||M)&&At(()=>{Y&&rn(Y,B,L,y),M&&Xn(L,y,B,"updated")},j)},F=(y,L,B,j,Z,le,pe)=>{for(let se=0;se<L.length;se++){const me=y[se],oe=L[se],M=me.el&&(me.type===yn||!nr(me,oe)||me.shapeFlag&70)?f(me.el):B;d(me,oe,M,null,j,Z,le,pe,!0)}},ne=(y,L,B,j,Z,le,pe)=>{if(B!==j){if(B!==Ze)for(const se in B)!as(se)&&!(se in j)&&s(y,se,B[se],null,pe,L.children,Z,le,X);for(const se in j){if(as(se))continue;const me=j[se],oe=B[se];me!==oe&&se!=="value"&&s(y,se,oe,me,pe,L.children,Z,le,X)}"value"in j&&s(y,"value",B.value,j.value)}},ce=(y,L,B,j,Z,le,pe,se,me)=>{const oe=L.el=y?y.el:o(""),M=L.anchor=y?y.anchor:o("");let{patchFlag:g,dynamicChildren:I,slotScopeIds:Y}=L;Y&&(se=se?se.concat(Y):Y),y==null?(i(oe,B,j),i(M,B,j),b(L.children,B,M,Z,le,pe,se,me)):g>0&&g&64&&I&&y.dynamicChildren?(F(y.dynamicChildren,I,B,Z,le,pe,se),(L.key!=null||Z&&L===Z.subTree)&&Tu(y,L,!0)):W(y,L,B,M,Z,le,pe,se,me)},H=(y,L,B,j,Z,le,pe,se,me)=>{L.slotScopeIds=se,y==null?L.shapeFlag&512?Z.ctx.activate(L,B,j,pe,me):N(L,B,j,Z,le,pe,me):K(y,L,me)},N=(y,L,B,j,Z,le,pe)=>{const se=y.component=bd(y,j,Z);if(mu(y)&&(se.ctx.renderer=de),Sd(se),se.asyncDep){if(Z&&Z.registerDep(se,re),!y.el){const me=se.subTree=Ht(Sr);v(null,me,L,B)}return}re(se,y,L,B,Z,le,pe)},K=(y,L,B)=>{const j=L.component=y.component;if(Ih(y,L,B))if(j.asyncDep&&!j.asyncResolved){ie(j,L,B);return}else j.next=L,Th(j.update),j.update();else L.el=y.el,j.vnode=L},re=(y,L,B,j,Z,le,pe)=>{const se=()=>{if(y.isMounted){let{next:M,bu:g,u:I,parent:Y,vnode:J}=y,fe=M,_e;Yn(y,!1),M?(M.el=J.el,ie(y,M,pe)):M=J,g&&Bs(g),(_e=M.props&&M.props.onVnodeBeforeUpdate)&&rn(_e,Y,M,J),Yn(y,!0);const C=ks(y),O=y.subTree;y.subTree=C,d(O,C,f(O.el),q(O),y,Z,le),M.el=C.el,fe===null&&Oh(y,C.el),I&&At(I,Z),(_e=M.props&&M.props.onVnodeUpdated)&&At(()=>rn(_e,Y,M,J),Z)}else{let M;const{el:g,props:I}=L,{bm:Y,m:J,parent:fe}=y,_e=us(L);if(Yn(y,!1),Y&&Bs(Y),!_e&&(M=I&&I.onVnodeBeforeMount)&&rn(M,fe,L),Yn(y,!0),g&&ve){const C=()=>{y.subTree=ks(y),ve(g,y.subTree,y,Z,null)};_e?L.type.__asyncLoader().then(()=>!y.isUnmounted&&C()):C()}else{const C=y.subTree=ks(y);d(null,C,B,j,y,Z,le),L.el=C.el}if(J&&At(J,Z),!_e&&(M=I&&I.onVnodeMounted)){const C=L;At(()=>rn(M,fe,C),Z)}(L.shapeFlag&256||fe&&us(fe.vnode)&&fe.vnode.shapeFlag&256)&&y.a&&At(y.a,Z),y.isMounted=!0,L=B=j=null}},me=y.effect=new ra(se,()=>fa(oe),y.scope),oe=y.update=()=>me.run();oe.id=y.uid,Yn(y,!0),oe()},ie=(y,L,B)=>{L.component=y;const j=y.vnode.props;y.vnode=L,y.next=null,id(y,L.props,j,B),od(y,L.children,B),Ji(),Ba(),Qi()},W=(y,L,B,j,Z,le,pe,se,me=!1)=>{const oe=y&&y.children,M=y?y.shapeFlag:0,g=L.children,{patchFlag:I,shapeFlag:Y}=L;if(I>0){if(I&128){he(oe,g,B,j,Z,le,pe,se,me);return}else if(I&256){ae(oe,g,B,j,Z,le,pe,se,me);return}}Y&8?(M&16&&X(oe,Z,le),g!==oe&&u(B,g)):M&16?Y&16?he(oe,g,B,j,Z,le,pe,se,me):X(oe,Z,le,!0):(M&8&&u(B,""),Y&16&&b(g,B,j,Z,le,pe,se,me))},ae=(y,L,B,j,Z,le,pe,se,me)=>{y=y||Fi,L=L||Fi;const oe=y.length,M=L.length,g=Math.min(oe,M);let I;for(I=0;I<g;I++){const Y=L[I]=me?In(L[I]):an(L[I]);d(y[I],Y,B,null,Z,le,pe,se,me)}oe>M?X(y,Z,le,!0,!1,g):b(L,B,j,Z,le,pe,se,me,g)},he=(y,L,B,j,Z,le,pe,se,me)=>{let oe=0;const M=L.length;let g=y.length-1,I=M-1;for(;oe<=g&&oe<=I;){const Y=y[oe],J=L[oe]=me?In(L[oe]):an(L[oe]);if(nr(Y,J))d(Y,J,B,null,Z,le,pe,se,me);else break;oe++}for(;oe<=g&&oe<=I;){const Y=y[g],J=L[I]=me?In(L[I]):an(L[I]);if(nr(Y,J))d(Y,J,B,null,Z,le,pe,se,me);else break;g--,I--}if(oe>g){if(oe<=I){const Y=I+1,J=Y<M?L[Y].el:j;for(;oe<=I;)d(null,L[oe]=me?In(L[oe]):an(L[oe]),B,J,Z,le,pe,se,me),oe++}}else if(oe>I)for(;oe<=g;)V(y[oe],Z,le,!0),oe++;else{const Y=oe,J=oe,fe=new Map;for(oe=J;oe<=I;oe++){const Ee=L[oe]=me?In(L[oe]):an(L[oe]);Ee.key!=null&&fe.set(Ee.key,oe)}let _e,C=0;const O=I-J+1;let Se=!1,Me=0;const Ae=new Array(O);for(oe=0;oe<O;oe++)Ae[oe]=0;for(oe=Y;oe<=g;oe++){const Ee=y[oe];if(C>=O){V(Ee,Z,le,!0);continue}let Re;if(Ee.key!=null)Re=fe.get(Ee.key);else for(_e=J;_e<=I;_e++)if(Ae[_e-J]===0&&nr(Ee,L[_e])){Re=_e;break}Re===void 0?V(Ee,Z,le,!0):(Ae[Re-J]=oe+1,Re>=Me?Me=Re:Se=!0,d(Ee,L[Re],B,null,Z,le,pe,se,me),C++)}const Le=Se?fd(Ae):Fi;for(_e=Le.length-1,oe=O-1;oe>=0;oe--){const Ee=J+oe,Re=L[Ee],ke=Ee+1<M?L[Ee+1].el:j;Ae[oe]===0?d(null,Re,B,ke,Z,le,pe,se,me):Se&&(_e<0||oe!==Le[_e]?we(Re,B,ke,2):_e--)}}},we=(y,L,B,j,Z=null)=>{const{el:le,type:pe,transition:se,children:me,shapeFlag:oe}=y;if(oe&6){we(y.component.subTree,L,B,j);return}if(oe&128){y.suspense.move(L,B,j);return}if(oe&64){pe.move(y,L,B,de);return}if(pe===yn){i(le,L,B);for(let g=0;g<me.length;g++)we(me[g],L,B,j);i(y.anchor,L,B);return}if(pe===Hs){x(y,L,B);return}if(j!==2&&oe&1&&se)if(j===0)se.beforeEnter(le),i(le,L,B),At(()=>se.enter(le),Z);else{const{leave:g,delayLeave:I,afterLeave:Y}=se,J=()=>i(le,L,B),fe=()=>{g(le,()=>{J(),Y&&Y()})};I?I(le,J,fe):fe()}else i(le,L,B)},V=(y,L,B,j=!1,Z=!1)=>{const{type:le,props:pe,ref:se,children:me,dynamicChildren:oe,shapeFlag:M,patchFlag:g,dirs:I}=y;if(se!=null&&Uo(se,null,B,y,!0),M&256){L.ctx.deactivate(y);return}const Y=M&1&&I,J=!us(y);let fe;if(J&&(fe=pe&&pe.onVnodeBeforeUnmount)&&rn(fe,L,y),M&6)A(y.component,B,j);else{if(M&128){y.suspense.unmount(B,j);return}Y&&Xn(y,null,L,"beforeUnmount"),M&64?y.type.remove(y,L,B,Z,de,j):oe&&(le!==yn||g>0&&g&64)?X(oe,L,B,!1,!0):(le===yn&&g&384||!Z&&M&16)&&X(me,L,B),j&&ue(y)}(J&&(fe=pe&&pe.onVnodeUnmounted)||Y)&&At(()=>{fe&&rn(fe,L,y),Y&&Xn(y,null,L,"unmounted")},B)},ue=y=>{const{type:L,el:B,anchor:j,transition:Z}=y;if(L===yn){xe(B,j);return}if(L===Hs){T(y);return}const le=()=>{r(B),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(y.shapeFlag&1&&Z&&!Z.persisted){const{leave:pe,delayLeave:se}=Z,me=()=>pe(B,le);se?se(y.el,le,me):me()}else le()},xe=(y,L)=>{let B;for(;y!==L;)B=h(y),r(y),y=B;r(L)},A=(y,L,B)=>{const{bum:j,scope:Z,update:le,subTree:pe,um:se}=y;j&&Bs(j),Z.stop(),le&&(le.active=!1,V(pe,y,L,B)),se&&At(se,L),At(()=>{y.isUnmounted=!0},L),L&&L.pendingBranch&&!L.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===L.pendingId&&(L.deps--,L.deps===0&&L.resolve())},X=(y,L,B,j=!1,Z=!1,le=0)=>{for(let pe=le;pe<y.length;pe++)V(y[pe],L,B,j,Z)},q=y=>y.shapeFlag&6?q(y.component.subTree):y.shapeFlag&128?y.suspense.next():h(y.anchor||y.el),te=(y,L,B)=>{y==null?L._vnode&&V(L._vnode,null,null,!0):d(L._vnode||null,y,L,null,null,null,B),Ba(),cu(),L._vnode=y},de={p:d,um:V,m:we,r:ue,mt:N,mc:b,pc:W,pbc:F,n:q,o:n};let be,ve;return e&&([be,ve]=e(de)),{render:te,hydrate:be,createApp:ld(te,be)}}function Yn({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Tu(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=In(r[s]),o.el=a.el),t||Tu(a,o)),o.type===As&&(o.el=a.el)}}function fd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}const hd=n=>n.__isTeleport,yn=Symbol(void 0),As=Symbol(void 0),Sr=Symbol(void 0),Hs=Symbol(void 0),gr=[];let $t=null;function Au(n=!1){gr.push($t=n?null:[])}function dd(){gr.pop(),$t=gr[gr.length-1]||null}let wr=1;function Xa(n){wr+=n}function Cu(n){return n.dynamicChildren=wr>0?$t||Fi:null,dd(),wr>0&&$t&&$t.push(n),n}function pd(n,e,t,i,r,s){return Cu(ma(n,e,t,i,r,s,!0))}function md(n,e,t,i,r){return Cu(Ht(n,e,t,i,r,!0))}function zo(n){return n?n.__v_isVNode===!0:!1}function nr(n,e){return n.type===e.type&&n.key===e.key}const Cs="__vInternal",Lu=({key:n})=>n??null,fs=({ref:n,ref_key:e,ref_for:t})=>n!=null?ht(n)||gt(n)||Ue(n)?{i:un,r:n,k:e,f:!!t}:n:null;function ma(n,e=null,t=null,i=0,r=null,s=n===yn?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Lu(e),ref:e&&fs(e),scopeId:hu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:un};return o?(ga(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ht(t)?8:16),wr>0&&!a&&$t&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&$t.push(l),l}const Ht=gd;function gd(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===Kh)&&(n=Sr),zo(n)){const o=Vi(n,e,!0);return t&&ga(o,t),wr>0&&!s&&$t&&(o.shapeFlag&6?$t[$t.indexOf(n)]=o:$t.push(o)),o.patchFlag|=-2,o}if(Ad(n)&&(n=n.__vccOpts),e){e=_d(e);let{class:o,style:l}=e;o&&!ht(o)&&(e.class=Jo(o)),et(l)&&(Qc(l)&&!Fe(l)&&(l=Et({},l)),e.style=Zo(l))}const a=ht(n)?1:Fh(n)?128:hd(n)?64:et(n)?4:Ue(n)?2:0;return ma(n,e,t,i,r,a,s,!0)}function _d(n){return n?Qc(n)||Cs in n?Et({},n):n:null}function Vi(n,e,t=!1){const{props:i,ref:r,patchFlag:s,children:a}=n,o=e?vd(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:o,key:o&&Lu(o),ref:e&&e.ref?t&&r?Fe(r)?r.concat(fs(e)):[r,fs(e)]:fs(e):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==yn?s===-1?16:s|16:s,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&Vi(n.ssContent),ssFallback:n.ssFallback&&Vi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function xd(n=" ",e=0){return Ht(As,null,n,e)}function an(n){return n==null||typeof n=="boolean"?Ht(Sr):Fe(n)?Ht(yn,null,n.slice()):typeof n=="object"?In(n):Ht(As,null,String(n))}function In(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:Vi(n)}function ga(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),ga(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!(Cs in e)?e._ctx=un:r===3&&un&&(un.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ue(e)?(e={default:e,_ctx:un},t=32):(e=String(e),i&64?(t=16,e=[xd(e)]):t=8);n.children=e,n.shapeFlag|=t}function vd(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Jo([e.class,i.class]));else if(r==="style")e.style=Zo([e.style,i.style]);else if(Ms(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function rn(n,e,t,i=null){Qt(n,e,7,[t,i])}const Md=Eu();let yd=0;function bd(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||Md,s={uid:yd++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new Hf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:yu(i,r),emitsOptions:fu(i,r),emit:null,emitted:null,propsDefaults:Ze,inheritAttrs:i.inheritAttrs,ctx:Ze,data:Ze,props:Ze,attrs:Ze,slots:Ze,refs:Ze,setupState:Ze,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=Lh.bind(null,s),n.ce&&n.ce(s),s}let rt=null;const Wi=n=>{rt=n,n.scope.on()},li=()=>{rt&&rt.scope.off(),rt=null};function Pu(n){return n.vnode.shapeFlag&4}let Er=!1;function Sd(n,e=!1){Er=e;const{props:t,children:i}=n.vnode,r=Pu(n);nd(n,t,r,e),sd(n,i);const s=r?wd(n,e):void 0;return Er=!1,s}function wd(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=eu(new Proxy(n.ctx,$h));const{setup:i}=t;if(i){const r=n.setupContext=i.length>1?Td(n):null;Wi(n),Ji();const s=zn(i,n,0,[n.props,r]);if(Qi(),li(),kc(s)){if(s.then(li,li),e)return s.then(a=>{Ya(n,a,e)}).catch(a=>{ws(a,n,0)});n.asyncDep=s}else Ya(n,s,e)}else Ru(n,e)}function Ya(n,e,t){Ue(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:et(e)&&(n.setupState=ru(e)),Ru(n,t)}let Ka;function Ru(n,e,t){const i=n.type;if(!n.render){if(!e&&Ka&&!i.render){const r=i.template||da(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=Et(Et({isCustomElement:s,delimiters:o},a),l);i.render=Ka(r,c)}}n.render=i.render||Jt}Wi(n),Ji(),Zh(n),Qi(),li()}function Ed(n){return new Proxy(n.attrs,{get(e,t){return Pt(n,"get","$attrs"),e[t]}})}function Td(n){const e=i=>{n.exposed=i||{}};let t;return{get attrs(){return t||(t=Ed(n))},slots:n.slots,emit:n.emit,expose:e}}function _a(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(ru(eu(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in mr)return mr[t](n)},has(e,t){return t in e||t in mr}}))}function Ad(n){return Ue(n)&&"__vccOpts"in n}const Gt=(n,e)=>Sh(n,e,Er);function Du(n,e,t){const i=arguments.length;return i===2?et(e)&&!Fe(e)?zo(e)?Ht(n,null,[e]):Ht(n,e):Ht(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&zo(t)&&(t=[t]),Ht(n,e,t))}const Cd=Symbol(""),Ld=()=>Sn(Cd),Pd="3.2.47",Rd="http://www.w3.org/2000/svg",ni=typeof document<"u"?document:null,$a=ni&&ni.createElement("template"),Dd={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e?ni.createElementNS(Rd,n):ni.createElement(n,t?{is:t}:void 0);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>ni.createTextNode(n),createComment:n=>ni.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>ni.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{$a.innerHTML=i?`<svg>${n}</svg>`:n;const o=$a.content;if(i){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function Id(n,e,t){const i=n._vtc;i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function Od(n,e,t){const i=n.style,r=ht(t);if(t&&!r){if(e&&!ht(e))for(const s in e)t[s]==null&&Bo(i,s,"");for(const s in t)Bo(i,s,t[s])}else{const s=i.display;r?e!==t&&(i.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(i.display=s)}}const Za=/\s*!important$/;function Bo(n,e,t){if(Fe(t))t.forEach(i=>Bo(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Fd(n,e);Za.test(t)?n.setProperty(Zi(i),t.replace(Za,""),"important"):n[i]=t}}const Ja=["Webkit","Moz","ms"],Vs={};function Fd(n,e){const t=Vs[e];if(t)return t;let i=Gi(e);if(i!=="filter"&&i in n)return Vs[e]=i;i=Gc(i);for(let r=0;r<Ja.length;r++){const s=Ja[r]+i;if(s in n)return Vs[e]=s}return e}const Qa="http://www.w3.org/1999/xlink";function Nd(n,e,t,i,r){if(i&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Qa,e.slice(6,e.length)):n.setAttributeNS(Qa,e,t);else{const s=Pf(e);t==null||s&&!Bc(t)?n.removeAttribute(e):n.setAttribute(e,s?"":t)}}function Ud(n,e,t,i,r,s,a){if(e==="innerHTML"||e==="textContent"){i&&a(i,r,s),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const l=t??"";(n.value!==l||n.tagName==="OPTION")&&(n.value=l),t==null&&n.removeAttribute(e);return}let o=!1;if(t===""||t==null){const l=typeof n[e];l==="boolean"?t=Bc(t):t==null&&l==="string"?(t="",o=!0):l==="number"&&(t=0,o=!0)}try{n[e]=t}catch{}o&&n.removeAttribute(e)}function zd(n,e,t,i){n.addEventListener(e,t,i)}function Bd(n,e,t,i){n.removeEventListener(e,t,i)}function kd(n,e,t,i,r=null){const s=n._vei||(n._vei={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Gd(e);if(i){const c=s[e]=Wd(i,r);zd(n,o,c,l)}else a&&(Bd(n,o,a,l),s[e]=void 0)}}const el=/(?:Once|Passive|Capture)$/;function Gd(n){let e;if(el.test(n)){e={};let i;for(;i=n.match(el);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Zi(n.slice(2)),e]}let Ws=0;const Hd=Promise.resolve(),Vd=()=>Ws||(Hd.then(()=>Ws=0),Ws=Date.now());function Wd(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;Qt(qd(i,t.value),e,5,[i])};return t.value=n,t.attached=Vd(),t}function qd(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const tl=/^on[a-z]/,jd=(n,e,t,i,r=!1,s,a,o,l)=>{e==="class"?Id(n,i,r):e==="style"?Od(n,t,i):Ms(e)?Qo(e)||kd(n,e,t,i,a):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Xd(n,e,i,r))?Ud(n,e,i,s,a,o,l):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),Nd(n,e,i,r))};function Xd(n,e,t,i){return i?!!(e==="innerHTML"||e==="textContent"||e in n&&tl.test(e)&&Ue(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||tl.test(e)&&ht(t)?!1:e in n}const Yd=Et({patchProp:jd},Dd);let nl;function Kd(){return nl||(nl=cd(Yd))}const $d=(...n)=>{const e=Kd().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Zd(i);if(!r)return;const s=e._component;!Ue(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const a=t(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Zd(n){return ht(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Ri=typeof window<"u";function Jd(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const Xe=Object.assign;function qs(n,e){const t={};for(const i in e){const r=e[i];t[i]=en(r)?r.map(n):n(r)}return t}const _r=()=>{},en=Array.isArray,Qd=/\/$/,ep=n=>n.replace(Qd,"");function js(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=rp(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:a}}function tp(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function il(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function np(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&qi(e.matched[i],t.matched[r])&&Iu(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function qi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Iu(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!ip(n[t],e[t]))return!1;return!0}function ip(n,e){return en(n)?rl(n,e):en(e)?rl(e,n):n===e}function rl(n,e){return en(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function rp(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/");let r=t.length-1,s,a;for(s=0;s<i.length;s++)if(a=i[s],a!==".")if(a==="..")r>1&&r--;else break;return t.slice(0,r).join("/")+"/"+i.slice(s-(s===i.length?1:0)).join("/")}var Tr;(function(n){n.pop="pop",n.push="push"})(Tr||(Tr={}));var xr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(xr||(xr={}));function sp(n){if(!n)if(Ri){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),ep(n)}const op=/^[^#]+#/;function ap(n,e){return n.replace(op,"#")+e}function lp(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const Ls=()=>({left:window.pageXOffset,top:window.pageYOffset});function cp(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=lp(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function sl(n,e){return(history.state?history.state.position-e:-1)+n}const ko=new Map;function up(n,e){ko.set(n,e)}function fp(n){const e=ko.get(n);return ko.delete(n),e}let hp=()=>location.protocol+"//"+location.host;function Ou(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),il(l,"")}return il(t,n)+i+r}function dp(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const m=Ou(n,location),_=t.value,d=e.value;let p=0;if(h){if(t.value=m,e.value=h,a&&a===_){a=null;return}p=d?h.position-d.position:0}else i(m);r.forEach(v=>{v(t.value,_,{delta:p,type:Tr.pop,direction:p?p>0?xr.forward:xr.back:xr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const m=()=>{const _=r.indexOf(h);_>-1&&r.splice(_,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(Xe({},h.state,{scroll:Ls()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:f}}function ol(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?Ls():null}}function pp(n){const{history:e,location:t}=window,i={value:Ou(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:hp()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(m){console.error(m),t[u?"replace":"assign"](h)}}function a(l,c){const u=Xe({},e.state,ol(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Xe({},r.value,e.state,{forward:l,scroll:Ls()});s(u.current,u,!0);const f=Xe({},ol(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function mp(n){n=sp(n);const e=pp(n),t=dp(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Xe({location:"",base:n,go:i,createHref:ap.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function gp(n){return typeof n=="string"||n&&typeof n=="object"}function Fu(n){return typeof n=="string"||typeof n=="symbol"}const Cn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Nu=Symbol("");var al;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(al||(al={}));function ji(n,e){return Xe(new Error,{type:n,[Nu]:!0},e)}function pn(n,e){return n instanceof Error&&Nu in n&&(e==null||!!(n.type&e))}const ll="[^/]+?",_p={sensitive:!1,strict:!1,start:!0,end:!0},xp=/[.+*?^${}()[\]/\\]/g;function vp(n,e){const t=Xe({},_p,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let m=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(xp,"\\$&"),m+=40;else if(h.type===1){const{value:_,repeatable:d,optional:p,regexp:v}=h;s.push({name:_,repeatable:d,optional:p});const S=v||ll;if(S!==ll){m+=10;try{new RegExp(`(${S})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${_}" (${S}): `+T.message)}}let x=d?`((?:${S})(?:/(?:${S}))*)`:`(${S})`;f||(x=p&&c.length<2?`(?:/${x})`:"/"+x),p&&(x+="?"),r+=x,m+=20,p&&(m+=-8),d&&(m+=-20),S===".*"&&(m+=-50)}u.push(m)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",_=s[h-1];f[_.name]=m&&_.repeatable?m.split("/"):m}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:_,repeatable:d,optional:p}=m,v=_ in c?c[_]:"";if(en(v)&&!d)throw new Error(`Provided param "${_}" is an array but it is not repeatable (* or + modifiers)`);const S=en(v)?v.join("/"):v;if(!S)if(p)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${_}"`);u+=S}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Mp(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function yp(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Mp(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(cl(i))return 1;if(cl(r))return-1}return r.length-i.length}function cl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const bp={type:0,value:""},Sp=/[a-zA-Z0-9_]/;function wp(n){if(!n)return[[]];if(n==="/")return[[bp]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(m){throw new Error(`ERR (${t})/"${c}": ${m}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:Sp.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Ep(n,e,t){const i=vp(wp(n.path),t),r=Xe(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Tp(n,e){const t=[],i=new Map;e=hl({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,h){const m=!h,_=Ap(u);_.aliasOf=h&&h.record;const d=hl(e,u),p=[_];if("alias"in u){const x=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of x)p.push(Xe({},_,{components:h?h.record.components:_.components,path:T,aliasOf:h?h.record:_}))}let v,S;for(const x of p){const{path:T}=x;if(f&&T[0]!=="/"){const E=f.record.path,R=E[E.length-1]==="/"?"":"/";x.path=f.record.path+(T&&R+T)}if(v=Ep(x,f,d),h?h.alias.push(v):(S=S||v,S!==v&&S.alias.push(v),m&&u.name&&!fl(v)&&a(u.name)),_.children){const E=_.children;for(let R=0;R<E.length;R++)s(E[R],v,h&&h.children[R])}h=h||v,(v.record.components&&Object.keys(v.record.components).length||v.record.name||v.record.redirect)&&l(v)}return S?()=>{a(S)}:_r}function a(u){if(Fu(u)){const f=i.get(u);f&&(i.delete(u),t.splice(t.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=t.indexOf(u);f>-1&&(t.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return t}function l(u){let f=0;for(;f<t.length&&yp(u,t[f])>=0&&(u.record.path!==t[f].record.path||!Uu(u,t[f]));)f++;t.splice(f,0,u),u.record.name&&!fl(u)&&i.set(u.record.name,u)}function c(u,f){let h,m={},_,d;if("name"in u&&u.name){if(h=i.get(u.name),!h)throw ji(1,{location:u});d=h.record.name,m=Xe(ul(f.params,h.keys.filter(S=>!S.optional).map(S=>S.name)),u.params&&ul(u.params,h.keys.map(S=>S.name))),_=h.stringify(m)}else if("path"in u)_=u.path,h=t.find(S=>S.re.test(_)),h&&(m=h.parse(_),d=h.record.name);else{if(h=f.name?i.get(f.name):t.find(S=>S.re.test(f.path)),!h)throw ji(1,{location:u,currentLocation:f});d=h.record.name,m=Xe({},f.params,u.params),_=h.stringify(m)}const p=[];let v=h;for(;v;)p.unshift(v.record),v=v.parent;return{name:d,path:_,params:m,matched:p,meta:Lp(p)}}return n.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:a,getRoutes:o,getRecordMatcher:r}}function ul(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Ap(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:Cp(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function Cp(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="boolean"?t:t[i];return e}function fl(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Lp(n){return n.reduce((e,t)=>Xe(e,t.meta),{})}function hl(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Uu(n,e){return e.children.some(t=>t===n||Uu(n,t))}const zu=/#/g,Pp=/&/g,Rp=/\//g,Dp=/=/g,Ip=/\?/g,Bu=/\+/g,Op=/%5B/g,Fp=/%5D/g,ku=/%5E/g,Np=/%60/g,Gu=/%7B/g,Up=/%7C/g,Hu=/%7D/g,zp=/%20/g;function xa(n){return encodeURI(""+n).replace(Up,"|").replace(Op,"[").replace(Fp,"]")}function Bp(n){return xa(n).replace(Gu,"{").replace(Hu,"}").replace(ku,"^")}function Go(n){return xa(n).replace(Bu,"%2B").replace(zp,"+").replace(zu,"%23").replace(Pp,"%26").replace(Np,"`").replace(Gu,"{").replace(Hu,"}").replace(ku,"^")}function kp(n){return Go(n).replace(Dp,"%3D")}function Gp(n){return xa(n).replace(zu,"%23").replace(Ip,"%3F")}function Hp(n){return n==null?"":Gp(n).replace(Rp,"%2F")}function _s(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function Vp(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Bu," "),a=s.indexOf("="),o=_s(a<0?s:s.slice(0,a)),l=a<0?null:_s(s.slice(a+1));if(o in e){let c=e[o];en(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function dl(n){let e="";for(let t in n){const i=n[t];if(t=kp(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(en(i)?i.map(s=>s&&Go(s)):[i&&Go(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Wp(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=en(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const qp=Symbol(""),pl=Symbol(""),va=Symbol(""),Vu=Symbol(""),Ho=Symbol("");function ir(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function On(n,e,t,i,r){const s=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,o)=>{const l=f=>{f===!1?o(ji(4,{from:t,to:e})):f instanceof Error?o(f):gp(f)?o(ji(2,{from:e,to:f})):(s&&i.enterCallbacks[r]===s&&typeof f=="function"&&s.push(f),a())},c=n.call(i&&i.instances[r],e,t,l);let u=Promise.resolve(c);n.length<3&&(u=u.then(l)),u.catch(f=>o(f))})}function Xs(n,e,t,i){const r=[];for(const s of n)for(const a in s.components){let o=s.components[a];if(!(e!=="beforeRouteEnter"&&!s.instances[a]))if(jp(o)){const c=(o.__vccOpts||o)[e];c&&r.push(On(c,t,i,s,a))}else{let l=o();r.push(()=>l.then(c=>{if(!c)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=Jd(c)?c.default:c;s.components[a]=u;const h=(u.__vccOpts||u)[e];return h&&On(h,t,i,s,a)()}))}}return r}function jp(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function ml(n){const e=Sn(va),t=Sn(Vu),i=Gt(()=>e.resolve(ai(n.to))),r=Gt(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(qi.bind(null,u));if(h>-1)return h;const m=gl(l[c-2]);return c>1&&gl(u)===m&&f[f.length-1].path!==m?f.findIndex(qi.bind(null,l[c-2])):h}),s=Gt(()=>r.value>-1&&$p(t.params,i.value.params)),a=Gt(()=>r.value>-1&&r.value===t.matched.length-1&&Iu(t.params,i.value.params));function o(l={}){return Kp(l)?e[ai(n.replace)?"replace":"push"](ai(n.to)).catch(_r):Promise.resolve()}return{route:i,href:Gt(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Xp=ha({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:ml,setup(n,{slots:e}){const t=Rr(ml(n)),{options:i}=Sn(va),r=Gt(()=>({[_l(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[_l(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:Du("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Yp=Xp;function Kp(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function $p(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!en(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function gl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const _l=(n,e,t)=>n??e??t,Zp=ha({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=Sn(Ho),r=Gt(()=>n.route||i.value),s=Sn(pl,0),a=Gt(()=>{let c=ai(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=Gt(()=>r.value.matched[a.value]);ls(pl,Gt(()=>a.value+1)),ls(qp,o),ls(Ho,r);const l=xh();return cs(()=>[l.value,o.value,n.name],([c,u,f],[h,m,_])=>{u&&(u.instances[f]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!qi(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(d=>d(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return xl(t.default,{Component:h,route:c});const m=f.props[u],_=m?m===!0?c.params:typeof m=="function"?m(c):m:null,p=Du(h,Xe({},_,e,{onVnodeUnmounted:v=>{v.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return xl(t.default,{Component:p,route:c})||p}}});function xl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Wu=Zp;function Jp(n){const e=Tp(n.routes,n),t=n.parseQuery||Vp,i=n.stringifyQuery||dl,r=n.history,s=ir(),a=ir(),o=ir(),l=vh(Cn);let c=Cn;Ri&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=qs.bind(null,A=>""+A),f=qs.bind(null,Hp),h=qs.bind(null,_s);function m(A,X){let q,te;return Fu(A)?(q=e.getRecordMatcher(A),te=X):te=A,e.addRoute(te,q)}function _(A){const X=e.getRecordMatcher(A);X&&e.removeRoute(X)}function d(){return e.getRoutes().map(A=>A.record)}function p(A){return!!e.getRecordMatcher(A)}function v(A,X){if(X=Xe({},X||l.value),typeof A=="string"){const y=js(t,A,X.path),L=e.resolve({path:y.path},X),B=r.createHref(y.fullPath);return Xe(y,L,{params:h(L.params),hash:_s(y.hash),redirectedFrom:void 0,href:B})}let q;if("path"in A)q=Xe({},A,{path:js(t,A.path,X.path).path});else{const y=Xe({},A.params);for(const L in y)y[L]==null&&delete y[L];q=Xe({},A,{params:f(A.params)}),X.params=f(X.params)}const te=e.resolve(q,X),de=A.hash||"";te.params=u(h(te.params));const be=tp(i,Xe({},A,{hash:Bp(de),path:te.path})),ve=r.createHref(be);return Xe({fullPath:be,hash:de,query:i===dl?Wp(A.query):A.query||{}},te,{redirectedFrom:void 0,href:ve})}function S(A){return typeof A=="string"?js(t,A,l.value.path):Xe({},A)}function x(A,X){if(c!==A)return ji(8,{from:X,to:A})}function T(A){return z(A)}function E(A){return T(Xe(S(A),{replace:!0}))}function R(A){const X=A.matched[A.matched.length-1];if(X&&X.redirect){const{redirect:q}=X;let te=typeof q=="function"?q(A):q;return typeof te=="string"&&(te=te.includes("?")||te.includes("#")?te=S(te):{path:te},te.params={}),Xe({query:A.query,hash:A.hash,params:"path"in te?{}:A.params},te)}}function z(A,X){const q=c=v(A),te=l.value,de=A.state,be=A.force,ve=A.replace===!0,y=R(q);if(y)return z(Xe(S(y),{state:typeof y=="object"?Xe({},de,y.state):de,force:be,replace:ve}),X||q);const L=q;L.redirectedFrom=X;let B;return!be&&np(i,te,q)&&(B=ji(16,{to:L,from:te}),he(te,te,!0,!1)),(B?Promise.resolve(B):P(L,te)).catch(j=>pn(j)?pn(j,2)?j:ae(j):ie(j,L,te)).then(j=>{if(j){if(pn(j,2))return z(Xe({replace:ve},S(j.to),{state:typeof j.to=="object"?Xe({},de,j.to.state):de,force:be}),X||L)}else j=ne(L,te,!0,ve,de);return F(L,te,j),j})}function b(A,X){const q=x(A,X);return q?Promise.reject(q):Promise.resolve()}function P(A,X){let q;const[te,de,be]=Qp(A,X);q=Xs(te.reverse(),"beforeRouteLeave",A,X);for(const y of te)y.leaveGuards.forEach(L=>{q.push(On(L,A,X))});const ve=b.bind(null,A,X);return q.push(ve),mi(q).then(()=>{q=[];for(const y of s.list())q.push(On(y,A,X));return q.push(ve),mi(q)}).then(()=>{q=Xs(de,"beforeRouteUpdate",A,X);for(const y of de)y.updateGuards.forEach(L=>{q.push(On(L,A,X))});return q.push(ve),mi(q)}).then(()=>{q=[];for(const y of A.matched)if(y.beforeEnter&&!X.matched.includes(y))if(en(y.beforeEnter))for(const L of y.beforeEnter)q.push(On(L,A,X));else q.push(On(y.beforeEnter,A,X));return q.push(ve),mi(q)}).then(()=>(A.matched.forEach(y=>y.enterCallbacks={}),q=Xs(be,"beforeRouteEnter",A,X),q.push(ve),mi(q))).then(()=>{q=[];for(const y of a.list())q.push(On(y,A,X));return q.push(ve),mi(q)}).catch(y=>pn(y,8)?y:Promise.reject(y))}function F(A,X,q){for(const te of o.list())te(A,X,q)}function ne(A,X,q,te,de){const be=x(A,X);if(be)return be;const ve=X===Cn,y=Ri?history.state:{};q&&(te||ve?r.replace(A.fullPath,Xe({scroll:ve&&y&&y.scroll},de)):r.push(A.fullPath,de)),l.value=A,he(A,X,q,ve),ae()}let ce;function H(){ce||(ce=r.listen((A,X,q)=>{if(!xe.listening)return;const te=v(A),de=R(te);if(de){z(Xe(de,{replace:!0}),te).catch(_r);return}c=te;const be=l.value;Ri&&up(sl(be.fullPath,q.delta),Ls()),P(te,be).catch(ve=>pn(ve,12)?ve:pn(ve,2)?(z(ve.to,te).then(y=>{pn(y,20)&&!q.delta&&q.type===Tr.pop&&r.go(-1,!1)}).catch(_r),Promise.reject()):(q.delta&&r.go(-q.delta,!1),ie(ve,te,be))).then(ve=>{ve=ve||ne(te,be,!1),ve&&(q.delta&&!pn(ve,8)?r.go(-q.delta,!1):q.type===Tr.pop&&pn(ve,20)&&r.go(-1,!1)),F(te,be,ve)}).catch(_r)}))}let N=ir(),K=ir(),re;function ie(A,X,q){ae(A);const te=K.list();return te.length?te.forEach(de=>de(A,X,q)):console.error(A),Promise.reject(A)}function W(){return re&&l.value!==Cn?Promise.resolve():new Promise((A,X)=>{N.add([A,X])})}function ae(A){return re||(re=!A,H(),N.list().forEach(([X,q])=>A?q(A):X()),N.reset()),A}function he(A,X,q,te){const{scrollBehavior:de}=n;if(!Ri||!de)return Promise.resolve();const be=!q&&fp(sl(A.fullPath,0))||(te||!q)&&history.state&&history.state.scroll||null;return au().then(()=>de(A,X,be)).then(ve=>ve&&cp(ve)).catch(ve=>ie(ve,A,X))}const we=A=>r.go(A);let V;const ue=new Set,xe={currentRoute:l,listening:!0,addRoute:m,removeRoute:_,hasRoute:p,getRoutes:d,resolve:v,options:n,push:T,replace:E,go:we,back:()=>we(-1),forward:()=>we(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:K.add,isReady:W,install(A){const X=this;A.component("RouterLink",Yp),A.component("RouterView",Wu),A.config.globalProperties.$router=X,Object.defineProperty(A.config.globalProperties,"$route",{enumerable:!0,get:()=>ai(l)}),Ri&&!V&&l.value===Cn&&(V=!0,T(r.location).catch(de=>{}));const q={};for(const de in Cn)q[de]=Gt(()=>l.value[de]);A.provide(va,X),A.provide(Vu,Rr(q)),A.provide(Ho,l);const te=A.unmount;ue.add(A),A.unmount=function(){ue.delete(A),ue.size<1&&(c=Cn,ce&&ce(),ce=null,l.value=Cn,V=!1,re=!1),te()}}};return xe}function mi(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function Qp(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>qi(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>qi(c,l))||r.push(l))}return[t,i,r]}const em=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},tm={__name:"App",setup(n){return(e,t)=>(Au(),md(ai(Wu)))}},nm=em(tm,[["__scopeId","data-v-9bdfd0c7"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ma="150",gi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_i={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},im=0,vl=1,rm=2,qu=1,sm=2,hr=3,Gn=0,Nt=1,Fn=2,Bn=0,zi=1,Ml=2,yl=3,bl=4,om=5,Di=100,am=101,lm=102,Sl=103,wl=104,cm=200,um=201,fm=202,hm=203,ju=204,Xu=205,dm=206,pm=207,mm=208,gm=209,_m=210,xm=0,vm=1,Mm=2,Vo=3,ym=4,bm=5,Sm=6,wm=7,Yu=0,Em=1,Tm=2,wn=0,Am=1,Cm=2,Lm=3,Pm=4,Rm=5,Ku=300,Xi=301,Yi=302,Wo=303,xs=304,Ps=306,qo=1e3,Yt=1001,jo=1002,St=1003,El=1004,Ys=1005,Bt=1006,Dm=1007,Ar=1008,ui=1009,Im=1010,Om=1011,$u=1012,Fm=1013,ri=1014,si=1015,Cr=1016,Nm=1017,Um=1018,Bi=1020,zm=1021,Kt=1023,Bm=1024,km=1025,ci=1026,Ki=1027,Gm=1028,Hm=1029,Vm=1030,Wm=1031,qm=1033,Ks=33776,$s=33777,Zs=33778,Js=33779,Tl=35840,Al=35841,Cl=35842,Ll=35843,jm=36196,Pl=37492,Rl=37496,Dl=37808,Il=37809,Ol=37810,Fl=37811,Nl=37812,Ul=37813,zl=37814,Bl=37815,kl=37816,Gl=37817,Hl=37818,Vl=37819,Wl=37820,ql=37821,Qs=36492,Xm=36283,jl=36284,Xl=36285,Yl=36286,fi=3e3,$e=3001,Ym=3200,Km=3201,$m=0,Zm=1,on="srgb",Lr="srgb-linear",Zu="display-p3",eo=7680,Jm=519,Kl=35044,$l="300 es",Xo=1035;class pi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Zl=180/Math.PI;function Dr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(dt[n&255]+dt[n>>8&255]+dt[n>>16&255]+dt[n>>24&255]+"-"+dt[e&255]+dt[e>>8&255]+"-"+dt[e>>16&15|64]+dt[e>>24&255]+"-"+dt[t&63|128]+dt[t>>8&255]+"-"+dt[t>>16&255]+dt[t>>24&255]+dt[i&255]+dt[i>>8&255]+dt[i>>16&255]+dt[i>>24&255]).toLowerCase()}function Ct(n,e,t){return Math.max(e,Math.min(t,n))}function Qm(n,e){return(n%e+e)%e}function no(n,e,t){return(1-t)*n+t*e}function Jl(n){return(n&n-1)===0&&n!==0}function eg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Gr(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function It(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class wt{constructor(){wt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],m=i[5],_=i[8],d=r[0],p=r[3],v=r[6],S=r[1],x=r[4],T=r[7],E=r[2],R=r[5],z=r[8];return s[0]=a*d+o*S+l*E,s[3]=a*p+o*x+l*R,s[6]=a*v+o*T+l*z,s[1]=c*d+u*S+f*E,s[4]=c*p+u*x+f*R,s[7]=c*v+u*T+f*z,s[2]=h*d+m*S+_*E,s[5]=h*p+m*x+_*R,s[8]=h*v+m*T+_*z,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,m=c*s-a*l,_=t*f+i*h+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const d=1/_;return e[0]=f*d,e[1]=(r*c-u*i)*d,e[2]=(o*i-r*a)*d,e[3]=h*d,e[4]=(u*t-r*l)*d,e[5]=(r*s-o*t)*d,e[6]=m*d,e[7]=(i*l-c*t)*d,e[8]=(a*t-i*s)*d,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(io.makeScale(e,t)),this}rotate(e){return this.premultiply(io.makeRotation(-e)),this}translate(e,t){return this.premultiply(io.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const io=new wt;function Ju(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Pr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class hi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],m=s[a+1],_=s[a+2],d=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=m,e[t+2]=_,e[t+3]=d;return}if(f!==d||l!==h||c!==m||u!==_){let p=1-o;const v=l*h+c*m+u*_+f*d,S=v>=0?1:-1,x=1-v*v;if(x>Number.EPSILON){const E=Math.sqrt(x),R=Math.atan2(E,v*S);p=Math.sin(p*R)/E,o=Math.sin(o*R)/E}const T=o*S;if(l=l*p+h*T,c=c*p+m*T,u=u*p+_*T,f=f*p+d*T,p===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],m=s[a+2],_=s[a+3];return e[t]=o*_+u*f+l*m-c*h,e[t+1]=l*_+u*h+c*f-o*m,e[t+2]=c*_+u*m+o*h-l*f,e[t+3]=u*_-o*f-l*h-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"YXZ":this._x=h*u*f+c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"ZXY":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f-h*m*_;break;case"ZYX":this._x=h*u*f-c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f+h*m*_;break;case"YZX":this._x=h*u*f+c*m*_,this._y=c*m*f+h*u*_,this._z=c*u*_-h*m*f,this._w=c*u*f-h*m*_;break;case"XZY":this._x=h*u*f-c*m*_,this._y=c*m*f-h*u*_,this._z=c*u*_+h*m*f,this._w=c*u*f+h*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const m=.5/Math.sqrt(h+1);this._w=.25/m,this._x=(u-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>f){const m=2*Math.sqrt(1+i-o-f);this._w=(u-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>f){const m=2*Math.sqrt(1+o-i-f);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+f-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,t=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ql.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ql.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return ro.copy(this).projectOnVector(e),this.sub(ro)}reflect(e){return this.sub(ro.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new G,Ql=new hi;function ki(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function so(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const tg=new wt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),ng=new wt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),Nn=new G;function ig(n){return n.convertSRGBToLinear(),Nn.set(n.r,n.g,n.b).applyMatrix3(ng),n.setRGB(Nn.x,Nn.y,Nn.z)}function rg(n){return Nn.set(n.r,n.g,n.b).applyMatrix3(tg),n.setRGB(Nn.x,Nn.y,Nn.z).convertLinearToSRGB()}const sg={[Lr]:n=>n,[on]:n=>n.convertSRGBToLinear(),[Zu]:ig},og={[Lr]:n=>n,[on]:n=>n.convertLinearToSRGB(),[Zu]:rg},Mt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Lr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=sg[e],r=og[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let xi;class Qu{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xi===void 0&&(xi=Pr("canvas")),xi.width=e.width,xi.height=e.height;const i=xi.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Pr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=ki(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(ki(t[i]/255)*255):t[i]=ki(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class ef{constructor(e=null){this.isSource=!0,this.uuid=Dr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(oo(r[a].image)):s.push(oo(r[a]))}else s=oo(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function oo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qu.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ag=0;class Lt extends pi{constructor(e=Lt.DEFAULT_IMAGE,t=Lt.DEFAULT_MAPPING,i=Yt,r=Yt,s=Bt,a=Ar,o=Kt,l=ui,c=Lt.DEFAULT_ANISOTROPY,u=fi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ag++}),this.uuid=Dr(),this.name="",this.source=new ef(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ku)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qo:e.x=e.x-Math.floor(e.x);break;case Yt:e.x=e.x<0?0:1;break;case jo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qo:e.y=e.y-Math.floor(e.y);break;case Yt:e.y=e.y<0?0:1;break;case jo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Lt.DEFAULT_IMAGE=null;Lt.DEFAULT_MAPPING=Ku;Lt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,t=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],m=l[5],_=l[9],d=l[2],p=l[6],v=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-d)<.01&&Math.abs(_-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+d)<.1&&Math.abs(_+p)<.1&&Math.abs(c+m+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,T=(m+1)/2,E=(v+1)/2,R=(u+h)/4,z=(f+d)/4,b=(_+p)/4;return x>T&&x>E?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=R/i,s=z/i):T>E?T<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),i=R/r,s=b/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=z/s,r=b/s),this.set(i,r,s,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-d)*(f-d)+(h-u)*(h-u));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-d)/S,this.z=(h-u)/S,this.w=Math.acos((c+m+v-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class di extends pi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ut(0,0,e,t),this.scissorTest=!1,this.viewport=new ut(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Lt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ef(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tf extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lg extends Lt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Yt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Kn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)Kn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(Kn)}else i.boundingBox===null&&i.computeBoundingBox(),ao.copy(i.boundingBox),ao.applyMatrix4(e.matrixWorld),this.union(ao);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Kn),Kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(rr),Hr.subVectors(this.max,rr),vi.subVectors(e.a,rr),Mi.subVectors(e.b,rr),yi.subVectors(e.c,rr),Ln.subVectors(Mi,vi),Pn.subVectors(yi,Mi),$n.subVectors(vi,yi);let t=[0,-Ln.z,Ln.y,0,-Pn.z,Pn.y,0,-$n.z,$n.y,Ln.z,0,-Ln.x,Pn.z,0,-Pn.x,$n.z,0,-$n.x,-Ln.y,Ln.x,0,-Pn.y,Pn.x,0,-$n.y,$n.x,0];return!lo(t,vi,Mi,yi,Hr)||(t=[1,0,0,0,1,0,0,0,1],!lo(t,vi,Mi,yi,Hr))?!1:(Vr.crossVectors(Ln,Pn),t=[Vr.x,Vr.y,Vr.z],lo(t,vi,Mi,yi,Hr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(mn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const mn=[new G,new G,new G,new G,new G,new G,new G,new G],Kn=new G,ao=new Ir,vi=new G,Mi=new G,yi=new G,Ln=new G,Pn=new G,$n=new G,rr=new G,Hr=new G,Vr=new G,Zn=new G;function lo(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){Zn.fromArray(n,s);const o=r.x*Math.abs(Zn.x)+r.y*Math.abs(Zn.y)+r.z*Math.abs(Zn.z),l=e.dot(Zn),c=t.dot(Zn),u=i.dot(Zn);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const cg=new Ir,sr=new G,co=new G;class ya{constructor(e=new G,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):cg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;sr.subVectors(e,this.center);const t=sr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(sr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(co.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(sr.copy(e.center).add(co)),this.expandByPoint(sr.copy(e.center).sub(co))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new G,uo=new G,Wr=new G,Rn=new G,fo=new G,qr=new G,ho=new G;class nf{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,gn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=gn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(gn.copy(this.origin).addScaledVector(this.direction,t),gn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){uo.copy(e).add(t).multiplyScalar(.5),Wr.copy(t).sub(e).normalize(),Rn.copy(this.origin).sub(uo);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Wr),o=Rn.dot(this.direction),l=-Rn.dot(Wr),c=Rn.lengthSq(),u=Math.abs(1-a*a);let f,h,m,_;if(u>0)if(f=a*l-o,h=a*o-l,_=s*u,f>=0)if(h>=-_)if(h<=_){const d=1/u;f*=d,h*=d,m=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;else h<=-_?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c):h<=_?(f=0,h=Math.min(Math.max(-s,-l),s),m=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),m=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),m=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(uo).addScaledVector(Wr,h),m}intersectSphere(e,t){gn.subVectors(e.center,this.origin);const i=gn.dot(this.direction),r=gn.dot(gn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,gn)!==null}intersectTriangle(e,t,i,r,s){fo.subVectors(t,e),qr.subVectors(i,e),ho.crossVectors(fo,qr);let a=this.direction.dot(ho),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Rn.subVectors(this.origin,e);const l=o*this.direction.dot(qr.crossVectors(Rn,qr));if(l<0)return null;const c=o*this.direction.dot(fo.cross(Rn));if(c<0||l+c>a)return null;const u=-o*Rn.dot(ho);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ft{constructor(){ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,m,_,d,p){const v=this.elements;return v[0]=e,v[4]=t,v[8]=i,v[12]=r,v[1]=s,v[5]=a,v[9]=o,v[13]=l,v[2]=c,v[6]=u,v[10]=f,v[14]=h,v[3]=m,v[7]=_,v[11]=d,v[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ft().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/bi.setFromMatrixColumn(e,0).length(),s=1/bi.setFromMatrixColumn(e,1).length(),a=1/bi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,m=a*f,_=o*u,d=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=m+_*c,t[5]=h-d*c,t[9]=-o*l,t[2]=d-h*c,t[6]=_+m*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h+d*o,t[4]=_*o-m,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=m*o-_,t[6]=d+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,m=l*f,_=c*u,d=c*f;t[0]=h-d*o,t[4]=-a*f,t[8]=_+m*o,t[1]=m+_*o,t[5]=a*u,t[9]=d-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,m=a*f,_=o*u,d=o*f;t[0]=l*u,t[4]=_*c-m,t[8]=h*c+d,t[1]=l*f,t[5]=d*c+h,t[9]=m*c-_,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,m=a*c,_=o*l,d=o*c;t[0]=l*u,t[4]=d-h*f,t[8]=_*f+m,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=m*f+_,t[10]=h-d*f}else if(e.order==="XZY"){const h=a*l,m=a*c,_=o*l,d=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+d,t[5]=a*u,t[9]=m*f-_,t[2]=_*f-m,t[6]=o*u,t[10]=d*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(ug,e,fg)}lookAt(e,t,i){const r=this.elements;return Ot.subVectors(e,t),Ot.lengthSq()===0&&(Ot.z=1),Ot.normalize(),Dn.crossVectors(i,Ot),Dn.lengthSq()===0&&(Math.abs(i.z)===1?Ot.x+=1e-4:Ot.z+=1e-4,Ot.normalize(),Dn.crossVectors(i,Ot)),Dn.normalize(),jr.crossVectors(Ot,Dn),r[0]=Dn.x,r[4]=jr.x,r[8]=Ot.x,r[1]=Dn.y,r[5]=jr.y,r[9]=Ot.y,r[2]=Dn.z,r[6]=jr.z,r[10]=Ot.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],m=i[13],_=i[2],d=i[6],p=i[10],v=i[14],S=i[3],x=i[7],T=i[11],E=i[15],R=r[0],z=r[4],b=r[8],P=r[12],F=r[1],ne=r[5],ce=r[9],H=r[13],N=r[2],K=r[6],re=r[10],ie=r[14],W=r[3],ae=r[7],he=r[11],we=r[15];return s[0]=a*R+o*F+l*N+c*W,s[4]=a*z+o*ne+l*K+c*ae,s[8]=a*b+o*ce+l*re+c*he,s[12]=a*P+o*H+l*ie+c*we,s[1]=u*R+f*F+h*N+m*W,s[5]=u*z+f*ne+h*K+m*ae,s[9]=u*b+f*ce+h*re+m*he,s[13]=u*P+f*H+h*ie+m*we,s[2]=_*R+d*F+p*N+v*W,s[6]=_*z+d*ne+p*K+v*ae,s[10]=_*b+d*ce+p*re+v*he,s[14]=_*P+d*H+p*ie+v*we,s[3]=S*R+x*F+T*N+E*W,s[7]=S*z+x*ne+T*K+E*ae,s[11]=S*b+x*ce+T*re+E*he,s[15]=S*P+x*H+T*ie+E*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],m=e[14],_=e[3],d=e[7],p=e[11],v=e[15];return _*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*m-i*l*m)+d*(+t*l*m-t*c*h+s*a*h-r*a*m+r*c*u-s*l*u)+p*(+t*c*f-t*o*m-s*a*f+i*a*m+s*o*u-i*c*u)+v*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],m=e[11],_=e[12],d=e[13],p=e[14],v=e[15],S=f*p*c-d*h*c+d*l*m-o*p*m-f*l*v+o*h*v,x=_*h*c-u*p*c-_*l*m+a*p*m+u*l*v-a*h*v,T=u*d*c-_*f*c+_*o*m-a*d*m-u*o*v+a*f*v,E=_*f*l-u*d*l-_*o*h+a*d*h+u*o*p-a*f*p,R=t*S+i*x+r*T+s*E;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const z=1/R;return e[0]=S*z,e[1]=(d*h*s-f*p*s-d*r*m+i*p*m+f*r*v-i*h*v)*z,e[2]=(o*p*s-d*l*s+d*r*c-i*p*c-o*r*v+i*l*v)*z,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*m-i*l*m)*z,e[4]=x*z,e[5]=(u*p*s-_*h*s+_*r*m-t*p*m-u*r*v+t*h*v)*z,e[6]=(_*l*s-a*p*s-_*r*c+t*p*c+a*r*v-t*l*v)*z,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*m+t*l*m)*z,e[8]=T*z,e[9]=(_*f*s-u*d*s-_*i*m+t*d*m+u*i*v-t*f*v)*z,e[10]=(a*d*s-_*o*s+_*i*c-t*d*c-a*i*v+t*o*v)*z,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*m-t*o*m)*z,e[12]=E*z,e[13]=(u*d*r-_*f*r+_*i*h-t*d*h-u*i*p+t*f*p)*z,e[14]=(_*o*r-a*d*r-_*i*l+t*d*l+a*i*p-t*o*p)*z,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*z,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,m=s*u,_=s*f,d=a*u,p=a*f,v=o*f,S=l*c,x=l*u,T=l*f,E=i.x,R=i.y,z=i.z;return r[0]=(1-(d+v))*E,r[1]=(m+T)*E,r[2]=(_-x)*E,r[3]=0,r[4]=(m-T)*R,r[5]=(1-(h+v))*R,r[6]=(p+S)*R,r[7]=0,r[8]=(_+x)*z,r[9]=(p-S)*z,r[10]=(1-(h+d))*z,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=bi.set(r[0],r[1],r[2]).length();const a=bi.set(r[4],r[5],r[6]).length(),o=bi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Vt.copy(this);const c=1/s,u=1/a,f=1/o;return Vt.elements[0]*=c,Vt.elements[1]*=c,Vt.elements[2]*=c,Vt.elements[4]*=u,Vt.elements[5]*=u,Vt.elements[6]*=u,Vt.elements[8]*=f,Vt.elements[9]*=f,Vt.elements[10]*=f,t.setFromRotationMatrix(Vt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),m=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,m=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const bi=new G,Vt=new ft,ug=new G(0,0,0),fg=new G(1,1,1),Dn=new G,jr=new G,Ot=new G,ec=new ft,tc=new hi;class Rs{constructor(e=0,t=0,i=0,r=Rs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ec.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ec,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return tc.setFromEuler(this),this.setFromQuaternion(tc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Rs.DEFAULT_ORDER="XYZ";class ba{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hg=0;const nc=new G,Si=new hi,_n=new ft,Xr=new G,or=new G,dg=new G,pg=new hi,ic=new G(1,0,0),rc=new G(0,1,0),sc=new G(0,0,1),mg={type:"added"},oc={type:"removed"};class _t extends pi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hg++}),this.uuid=Dr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_t.DEFAULT_UP.clone();const e=new G,t=new Rs,i=new hi,r=new G(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ft},normalMatrix:{value:new wt}}),this.matrix=new ft,this.matrixWorld=new ft,this.matrixAutoUpdate=_t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new ba,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.multiply(Si),this}rotateOnWorldAxis(e,t){return Si.setFromAxisAngle(e,t),this.quaternion.premultiply(Si),this}rotateX(e){return this.rotateOnAxis(ic,e)}rotateY(e){return this.rotateOnAxis(rc,e)}rotateZ(e){return this.rotateOnAxis(sc,e)}translateOnAxis(e,t){return nc.copy(e).applyQuaternion(this.quaternion),this.position.add(nc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ic,e)}translateY(e){return this.translateOnAxis(rc,e)}translateZ(e){return this.translateOnAxis(sc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Xr.copy(e):Xr.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(or,Xr,this.up):_n.lookAt(Xr,or,this.up),this.quaternion.setFromRotationMatrix(_n),r&&(_n.extractRotation(r.matrixWorld),Si.setFromRotationMatrix(_n),this.quaternion.premultiply(Si.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(mg)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(oc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,e,dg),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(or,pg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}_t.DEFAULT_UP=new G(0,1,0);_t.DEFAULT_MATRIX_AUTO_UPDATE=!0;_t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Wt=new G,xn=new G,po=new G,vn=new G,wi=new G,Ei=new G,ac=new G,mo=new G,go=new G,_o=new G;class bn{constructor(e=new G,t=new G,i=new G){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Wt.subVectors(e,t),r.cross(Wt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Wt.subVectors(r,t),xn.subVectors(i,t),po.subVectors(e,t);const a=Wt.dot(Wt),o=Wt.dot(xn),l=Wt.dot(po),c=xn.dot(xn),u=xn.dot(po),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,m=(c*l-o*u)*h,_=(a*u-o*l)*h;return s.set(1-m-_,_,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,vn),vn.x>=0&&vn.y>=0&&vn.x+vn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,vn),l.set(0,0),l.addScaledVector(s,vn.x),l.addScaledVector(a,vn.y),l.addScaledVector(o,vn.z),l}static isFrontFacing(e,t,i,r){return Wt.subVectors(i,t),xn.subVectors(e,t),Wt.cross(xn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Wt.subVectors(this.c,this.b),xn.subVectors(this.a,this.b),Wt.cross(xn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return bn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;wi.subVectors(r,i),Ei.subVectors(s,i),mo.subVectors(e,i);const l=wi.dot(mo),c=Ei.dot(mo);if(l<=0&&c<=0)return t.copy(i);go.subVectors(e,r);const u=wi.dot(go),f=Ei.dot(go);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(wi,a);_o.subVectors(e,s);const m=wi.dot(_o),_=Ei.dot(_o);if(_>=0&&m<=_)return t.copy(s);const d=m*c-l*_;if(d<=0&&c>=0&&_<=0)return o=c/(c-_),t.copy(i).addScaledVector(Ei,o);const p=u*_-m*f;if(p<=0&&f-u>=0&&m-_>=0)return ac.subVectors(s,r),o=(f-u)/(f-u+(m-_)),t.copy(r).addScaledVector(ac,o);const v=1/(p+d+h);return a=d*v,o=h*v,t.copy(i).addScaledVector(wi,a).addScaledVector(Ei,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let gg=0;class Ds extends pi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=Dr(),this.name="",this.type="Material",this.blending=zi,this.side=Gn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=ju,this.blendDst=Xu,this.blendEquation=Di,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Jm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zi&&(i.blending=this.blending),this.side!==Gn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const rf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qt={h:0,s:0,l:0},Yr={h:0,s:0,l:0};function xo(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Je{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Mt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Mt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Mt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Mt.workingColorSpace){if(e=Qm(e,1),t=Ct(t,0,1),i=Ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=xo(a,s,e+1/3),this.g=xo(a,s,e),this.b=xo(a,s,e-1/3)}return Mt.toWorkingColorSpace(this,r),this}setStyle(e,t=on){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Mt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Mt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Mt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Mt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){const i=rf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ki(e.r),this.g=ki(e.g),this.b=ki(e.b),this}copyLinearToSRGB(e){return this.r=so(e.r),this.g=so(e.g),this.b=so(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return Mt.fromWorkingColorSpace(pt.copy(this),e),Ct(pt.r*255,0,255)<<16^Ct(pt.g*255,0,255)<<8^Ct(pt.b*255,0,255)<<0}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Mt.workingColorSpace){Mt.fromWorkingColorSpace(pt.copy(this),t);const i=pt.r,r=pt.g,s=pt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Mt.workingColorSpace){return Mt.fromWorkingColorSpace(pt.copy(this),t),e.r=pt.r,e.g=pt.g,e.b=pt.b,e}getStyle(e=on){Mt.fromWorkingColorSpace(pt.copy(this),e);const t=pt.r,i=pt.g,r=pt.b;return e!==on?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(qt),qt.h+=e,qt.s+=t,qt.l+=i,this.setHSL(qt.h,qt.s,qt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(qt),e.getHSL(Yr);const i=no(qt.h,Yr.h,t),r=no(qt.s,Yr.s,t),s=no(qt.l,Yr.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const pt=new Je;Je.NAMES=rf;class sf extends Ds{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const it=new G,Kr=new Be;class fn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Kl,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Kr.fromBufferAttribute(this,t),Kr.applyMatrix3(e),this.setXY(t,Kr.x,Kr.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix3(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyMatrix4(e),this.setXYZ(t,it.x,it.y,it.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.applyNormalMatrix(e),this.setXYZ(t,it.x,it.y,it.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)it.fromBufferAttribute(this,t),it.transformDirection(e),this.setXYZ(t,it.x,it.y,it.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Gr(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Gr(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Gr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Gr(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),i=It(i,this.array),r=It(r,this.array),s=It(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Kl&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class of extends fn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class af extends fn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class hn extends fn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let _g=0;const zt=new ft,vo=new _t,Ti=new G,Ft=new Ir,ar=new Ir,ct=new G;class Vn extends pi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_g++}),this.uuid=Dr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ju(e)?af:of)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new wt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return zt.makeRotationFromQuaternion(e),this.applyMatrix4(zt),this}rotateX(e){return zt.makeRotationX(e),this.applyMatrix4(zt),this}rotateY(e){return zt.makeRotationY(e),this.applyMatrix4(zt),this}rotateZ(e){return zt.makeRotationZ(e),this.applyMatrix4(zt),this}translate(e,t,i){return zt.makeTranslation(e,t,i),this.applyMatrix4(zt),this}scale(e,t,i){return zt.makeScale(e,t,i),this.applyMatrix4(zt),this}lookAt(e){return vo.lookAt(e),vo.updateMatrix(),this.applyMatrix4(vo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ti).negate(),this.translate(Ti.x,Ti.y,Ti.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new hn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ir);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(ct.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ct),ct.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ct)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ya);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ar.setFromBufferAttribute(o),this.morphTargetsRelative?(ct.addVectors(Ft.min,ar.min),Ft.expandByPoint(ct),ct.addVectors(Ft.max,ar.max),Ft.expandByPoint(ct)):(Ft.expandByPoint(ar.min),Ft.expandByPoint(ar.max))}Ft.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)ct.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(ct));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)ct.fromBufferAttribute(o,c),l&&(Ti.fromBufferAttribute(e,c),ct.add(Ti)),r=Math.max(r,i.distanceToSquared(ct))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let F=0;F<o;F++)c[F]=new G,u[F]=new G;const f=new G,h=new G,m=new G,_=new Be,d=new Be,p=new Be,v=new G,S=new G;function x(F,ne,ce){f.fromArray(r,F*3),h.fromArray(r,ne*3),m.fromArray(r,ce*3),_.fromArray(a,F*2),d.fromArray(a,ne*2),p.fromArray(a,ce*2),h.sub(f),m.sub(f),d.sub(_),p.sub(_);const H=1/(d.x*p.y-p.x*d.y);isFinite(H)&&(v.copy(h).multiplyScalar(p.y).addScaledVector(m,-d.y).multiplyScalar(H),S.copy(m).multiplyScalar(d.x).addScaledVector(h,-p.x).multiplyScalar(H),c[F].add(v),c[ne].add(v),c[ce].add(v),u[F].add(S),u[ne].add(S),u[ce].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:i.length}]);for(let F=0,ne=T.length;F<ne;++F){const ce=T[F],H=ce.start,N=ce.count;for(let K=H,re=H+N;K<re;K+=3)x(i[K+0],i[K+1],i[K+2])}const E=new G,R=new G,z=new G,b=new G;function P(F){z.fromArray(s,F*3),b.copy(z);const ne=c[F];E.copy(ne),E.sub(z.multiplyScalar(z.dot(ne))).normalize(),R.crossVectors(b,ne);const H=R.dot(u[F])<0?-1:1;l[F*4]=E.x,l[F*4+1]=E.y,l[F*4+2]=E.z,l[F*4+3]=H}for(let F=0,ne=T.length;F<ne;++F){const ce=T[F],H=ce.start,N=ce.count;for(let K=H,re=H+N;K<re;K+=3)P(i[K+0]),P(i[K+1]),P(i[K+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new fn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,m=i.count;h<m;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,a=new G,o=new G,l=new G,c=new G,u=new G,f=new G;if(e)for(let h=0,m=e.count;h<m;h+=3){const _=e.getX(h+0),d=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,_),s.fromBufferAttribute(t,d),a.fromBufferAttribute(t,p),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,d),c.fromBufferAttribute(i,p),o.add(u),l.add(u),c.add(u),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(d,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let h=0,m=t.count;h<m;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ct.fromBufferAttribute(e,t),ct.normalize(),e.setXYZ(t,ct.x,ct.y,ct.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let m=0,_=0;for(let d=0,p=l.length;d<p;d++){o.isInterleavedBufferAttribute?m=l[d]*o.data.stride+o.offset:m=l[d]*u;for(let v=0;v<u;v++)h[_++]=c[m++]}return new fn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Vn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],m=e(h,i);l.push(m)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const m=c[f];u.push(m.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,m=f.length;h<m;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const lc=new ft,sn=new nf,$r=new ya,cc=new G,lr=new G,cr=new G,ur=new G,Mo=new G,Zr=new G,Jr=new Be,Qr=new Be,es=new Be,yo=new G,ts=new G;class Zt extends _t{constructor(e=new Vn,t=new sf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Zr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Mo.fromBufferAttribute(f,e),a?Zr.addScaledVector(Mo,u):Zr.addScaledVector(Mo.sub(t),u))}t.add(Zr)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),$r.copy(i.boundingSphere),$r.applyMatrix4(s),sn.copy(e.ray).recast(e.near),$r.containsPoint(sn.origin)===!1&&(sn.intersectSphere($r,cc)===null||sn.origin.distanceToSquared(cc)>(e.far-e.near)**2))||(lc.copy(s).invert(),sn.copy(e.ray).applyMatrix4(lc),i.boundingBox!==null&&sn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const d=f[m],p=r[d.materialIndex],v=Math.max(d.start,h.start),S=Math.min(o.count,Math.min(d.start+d.count,h.start+h.count));for(let x=v,T=S;x<T;x+=3){const E=o.getX(x),R=o.getX(x+1),z=o.getX(x+2);a=ns(this,p,e,sn,c,u,E,R,z),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let d=m,p=_;d<p;d+=3){const v=o.getX(d),S=o.getX(d+1),x=o.getX(d+2);a=ns(this,r,e,sn,c,u,v,S,x),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let m=0,_=f.length;m<_;m++){const d=f[m],p=r[d.materialIndex],v=Math.max(d.start,h.start),S=Math.min(l.count,Math.min(d.start+d.count,h.start+h.count));for(let x=v,T=S;x<T;x+=3){const E=x,R=x+1,z=x+2;a=ns(this,p,e,sn,c,u,E,R,z),a&&(a.faceIndex=Math.floor(x/3),a.face.materialIndex=d.materialIndex,t.push(a))}}else{const m=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let d=m,p=_;d<p;d+=3){const v=d,S=d+1,x=d+2;a=ns(this,r,e,sn,c,u,v,S,x),a&&(a.faceIndex=Math.floor(d/3),t.push(a))}}}}function xg(n,e,t,i,r,s,a,o){let l;if(e.side===Nt?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Gn,o),l===null)return null;ts.copy(o),ts.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ts);return c<t.near||c>t.far?null:{distance:c,point:ts.clone(),object:n}}function ns(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,lr),n.getVertexPosition(o,cr),n.getVertexPosition(l,ur);const c=xg(n,e,t,i,lr,cr,ur,yo);if(c){r&&(Jr.fromBufferAttribute(r,a),Qr.fromBufferAttribute(r,o),es.fromBufferAttribute(r,l),c.uv=bn.getUV(yo,lr,cr,ur,Jr,Qr,es,new Be)),s&&(Jr.fromBufferAttribute(s,a),Qr.fromBufferAttribute(s,o),es.fromBufferAttribute(s,l),c.uv2=bn.getUV(yo,lr,cr,ur,Jr,Qr,es,new Be));const u={a,b:o,c:l,normal:new G,materialIndex:0};bn.getNormal(lr,cr,ur,u.normal),c.face=u}return c}class Or extends Vn{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,m=0;_("z","y","x",-1,-1,i,t,e,a,s,0),_("z","y","x",1,-1,i,t,-e,a,s,1),_("x","z","y",1,1,e,i,t,r,a,2),_("x","z","y",1,-1,e,i,-t,r,a,3),_("x","y","z",1,-1,e,t,i,r,s,4),_("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new hn(c,3)),this.setAttribute("normal",new hn(u,3)),this.setAttribute("uv",new hn(f,2));function _(d,p,v,S,x,T,E,R,z,b,P){const F=T/z,ne=E/b,ce=T/2,H=E/2,N=R/2,K=z+1,re=b+1;let ie=0,W=0;const ae=new G;for(let he=0;he<re;he++){const we=he*ne-H;for(let V=0;V<K;V++){const ue=V*F-ce;ae[d]=ue*S,ae[p]=we*x,ae[v]=N,c.push(ae.x,ae.y,ae.z),ae[d]=0,ae[p]=0,ae[v]=R>0?1:-1,u.push(ae.x,ae.y,ae.z),f.push(V/z),f.push(1-he/b),ie+=1}}for(let he=0;he<b;he++)for(let we=0;we<z;we++){const V=h+we+K*he,ue=h+we+K*(he+1),xe=h+(we+1)+K*(he+1),A=h+(we+1)+K*he;l.push(V,ue,A),l.push(ue,xe,A),W+=6}o.addGroup(m,W,P),m+=W,h+=ie}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Or(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $i(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function bt(n){const e={};for(let t=0;t<n.length;t++){const i=$i(n[t]);for(const r in i)e[r]=i[r]}return e}function vg(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function lf(n){return n.getRenderTarget()===null&&n.outputEncoding===$e?on:Lr}const Mg={clone:$i,merge:bt};var yg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bg=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Hn extends Ds{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=yg,this.fragmentShader=bg,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$i(e.uniforms),this.uniformsGroups=vg(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class cf extends _t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ft,this.projectionMatrix=new ft,this.projectionMatrixInverse=new ft}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class kt extends cf{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Zl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ai=-90,Ci=1;class Sg extends _t{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new kt(Ai,Ci,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new kt(Ai,Ci,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new kt(Ai,Ci,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new kt(Ai,Ci,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new kt(Ai,Ci,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new kt(Ai,Ci,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=wn,e.xr.enabled=!1;const m=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=m,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class uf extends Lt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Xi,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class wg extends di{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new uf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Or(5,5,5),s=new Hn({name:"CubemapFromEquirect",uniforms:$i(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Nt,blending:Bn});s.uniforms.tEquirect.value=t;const a=new Zt(r,s),o=t.minFilter;return t.minFilter===Ar&&(t.minFilter=Bt),new Sg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const bo=new G,Eg=new G,Tg=new wt;class Qn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=bo.subVectors(i,t).cross(Eg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(bo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Tg.getNormalMatrix(e),r=this.coplanarPoint(bo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Li=new ya,is=new G;class ff{constructor(e=new Qn,t=new Qn,i=new Qn,r=new Qn,s=new Qn,a=new Qn){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],m=i[9],_=i[10],d=i[11],p=i[12],v=i[13],S=i[14],x=i[15];return t[0].setComponents(o-r,f-l,d-h,x-p).normalize(),t[1].setComponents(o+r,f+l,d+h,x+p).normalize(),t[2].setComponents(o+s,f+c,d+m,x+v).normalize(),t[3].setComponents(o-s,f-c,d-m,x-v).normalize(),t[4].setComponents(o-a,f-u,d-_,x-S).normalize(),t[5].setComponents(o+a,f+u,d+_,x+S).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Li.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSprite(e){return Li.center.set(0,0,0),Li.radius=.7071067811865476,Li.applyMatrix4(e.matrixWorld),this.intersectsSphere(Li)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(is.x=r.normal.x>0?e.max.x:e.min.x,is.y=r.normal.y>0?e.max.y:e.min.y,is.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(is)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function hf(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function Ag(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,m=n.createBuffer();n.bindBuffer(u,m),n.bufferData(u,f,h),c.onUploadCallback();let _;if(f instanceof Float32Array)_=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)_=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else _=5123;else if(f instanceof Int16Array)_=5122;else if(f instanceof Uint32Array)_=5125;else if(f instanceof Int32Array)_=5124;else if(f instanceof Int8Array)_=5120;else if(f instanceof Uint8Array)_=5121;else if(f instanceof Uint8ClampedArray)_=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:_,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,m=u.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h,m.offset,m.count):n.bufferSubData(f,m.offset*h.BYTES_PER_ELEMENT,h.subarray(m.offset,m.offset+m.count)),m.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class Sa extends Vn{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,m=[],_=[],d=[],p=[];for(let v=0;v<u;v++){const S=v*h-a;for(let x=0;x<c;x++){const T=x*f-s;_.push(T,-S,0),d.push(0,0,1),p.push(x/o),p.push(1-v/l)}}for(let v=0;v<l;v++)for(let S=0;S<o;S++){const x=S+c*v,T=S+c*(v+1),E=S+1+c*(v+1),R=S+1+c*v;m.push(x,T,R),m.push(T,E,R)}this.setIndex(m),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sa(e.width,e.height,e.widthSegments,e.heightSegments)}}var Cg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pg=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ig=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Og="vec3 transformed = vec3( position );",Fg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ng=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,Ug=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,zg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Bg=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Hg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Vg=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qg=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,jg=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Xg=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,Kg=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,$g=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,e_="gl_FragColor = linearToOutputTexel( gl_FragColor );",t_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,n_=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,i_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,r_=`#ifdef USE_ENVMAP
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
#endif`,s_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o_=`#ifdef USE_ENVMAP
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
#endif`,a_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,l_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,c_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,u_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f_=`#ifdef USE_GRADIENTMAP
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
}`,h_=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,d_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,__=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,x_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,v_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,M_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,y_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,b_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,S_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,w_=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,E_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,T_=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,A_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C_=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,L_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,P_=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,R_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,O_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,F_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,N_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,U_=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,z_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,B_=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,k_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,G_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,H_=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,V_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,W_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,q_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,j_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,X_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Y_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,K_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,$_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Z_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,J_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Q_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,e0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,t0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,n0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,i0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,r0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,s0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,o0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,a0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,l0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,c0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,u0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,f0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h0=`#ifdef USE_SKINNING
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
#endif`,d0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,p0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,m0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,g0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,x0=`#ifdef USE_TRANSMISSION
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
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, vec2 fullSize, float lod ) {
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
		
		vec2 lodFudge = pow( 1.95, lod ) / fullSize;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec2 fullSize = vec2( textureSize( sampler, 0 ) );
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), fullSize, floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), fullSize, ceil( lod ) );
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
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,v0=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,M0=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,y0=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,b0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,S0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,w0=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,E0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const T0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,A0=`uniform sampler2D t2D;
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
	#include <encodings_fragment>
}`,C0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,L0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,P0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,R0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,D0=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,I0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,O0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,F0=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,N0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,U0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,z0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,B0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,k0=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,G0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,H0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,V0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,q0=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,j0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,X0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Y0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,K0=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,$0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Z0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,Q0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ex=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,tx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nx=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,ix=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,rx=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,sx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Oe={alphamap_fragment:Cg,alphamap_pars_fragment:Lg,alphatest_fragment:Pg,alphatest_pars_fragment:Rg,aomap_fragment:Dg,aomap_pars_fragment:Ig,begin_vertex:Og,beginnormal_vertex:Fg,bsdfs:Ng,iridescence_fragment:Ug,bumpmap_pars_fragment:zg,clipping_planes_fragment:Bg,clipping_planes_pars_fragment:kg,clipping_planes_pars_vertex:Gg,clipping_planes_vertex:Hg,color_fragment:Vg,color_pars_fragment:Wg,color_pars_vertex:qg,color_vertex:jg,common:Xg,cube_uv_reflection_fragment:Yg,defaultnormal_vertex:Kg,displacementmap_pars_vertex:$g,displacementmap_vertex:Zg,emissivemap_fragment:Jg,emissivemap_pars_fragment:Qg,encodings_fragment:e_,encodings_pars_fragment:t_,envmap_fragment:n_,envmap_common_pars_fragment:i_,envmap_pars_fragment:r_,envmap_pars_vertex:s_,envmap_physical_pars_fragment:__,envmap_vertex:o_,fog_vertex:a_,fog_pars_vertex:l_,fog_fragment:c_,fog_pars_fragment:u_,gradientmap_pars_fragment:f_,lightmap_fragment:h_,lightmap_pars_fragment:d_,lights_lambert_fragment:p_,lights_lambert_pars_fragment:m_,lights_pars_begin:g_,lights_toon_fragment:x_,lights_toon_pars_fragment:v_,lights_phong_fragment:M_,lights_phong_pars_fragment:y_,lights_physical_fragment:b_,lights_physical_pars_fragment:S_,lights_fragment_begin:w_,lights_fragment_maps:E_,lights_fragment_end:T_,logdepthbuf_fragment:A_,logdepthbuf_pars_fragment:C_,logdepthbuf_pars_vertex:L_,logdepthbuf_vertex:P_,map_fragment:R_,map_pars_fragment:D_,map_particle_fragment:I_,map_particle_pars_fragment:O_,metalnessmap_fragment:F_,metalnessmap_pars_fragment:N_,morphcolor_vertex:U_,morphnormal_vertex:z_,morphtarget_pars_vertex:B_,morphtarget_vertex:k_,normal_fragment_begin:G_,normal_fragment_maps:H_,normal_pars_fragment:V_,normal_pars_vertex:W_,normal_vertex:q_,normalmap_pars_fragment:j_,clearcoat_normal_fragment_begin:X_,clearcoat_normal_fragment_maps:Y_,clearcoat_pars_fragment:K_,iridescence_pars_fragment:$_,output_fragment:Z_,packing:J_,premultiplied_alpha_fragment:Q_,project_vertex:e0,dithering_fragment:t0,dithering_pars_fragment:n0,roughnessmap_fragment:i0,roughnessmap_pars_fragment:r0,shadowmap_pars_fragment:s0,shadowmap_pars_vertex:o0,shadowmap_vertex:a0,shadowmask_pars_fragment:l0,skinbase_vertex:c0,skinning_pars_vertex:u0,skinning_vertex:f0,skinnormal_vertex:h0,specularmap_fragment:d0,specularmap_pars_fragment:p0,tonemapping_fragment:m0,tonemapping_pars_fragment:g0,transmission_fragment:_0,transmission_pars_fragment:x0,uv_pars_fragment:v0,uv_pars_vertex:M0,uv_vertex:y0,uv2_pars_fragment:b0,uv2_pars_vertex:S0,uv2_vertex:w0,worldpos_vertex:E0,background_vert:T0,background_frag:A0,backgroundCube_vert:C0,backgroundCube_frag:L0,cube_vert:P0,cube_frag:R0,depth_vert:D0,depth_frag:I0,distanceRGBA_vert:O0,distanceRGBA_frag:F0,equirect_vert:N0,equirect_frag:U0,linedashed_vert:z0,linedashed_frag:B0,meshbasic_vert:k0,meshbasic_frag:G0,meshlambert_vert:H0,meshlambert_frag:V0,meshmatcap_vert:W0,meshmatcap_frag:q0,meshnormal_vert:j0,meshnormal_frag:X0,meshphong_vert:Y0,meshphong_frag:K0,meshphysical_vert:$0,meshphysical_frag:Z0,meshtoon_vert:J0,meshtoon_frag:Q0,points_vert:ex,points_frag:tx,shadow_vert:nx,shadow_frag:ix,sprite_vert:rx,sprite_frag:sx},ye={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new wt},uv2Transform:{value:new wt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new wt}}},ln={basic:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:bt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:bt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:bt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Je(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:bt([ye.points,ye.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:bt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:bt([ye.common,ye.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:bt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:bt([ye.sprite,ye.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:bt([ye.common,ye.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:bt([ye.lights,ye.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ln.physical={uniforms:bt([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Be(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const rs={r:0,b:0,g:0};function ox(n,e,t,i,r,s,a){const o=new Je(0);let l=s===!0?0:1,c,u,f=null,h=0,m=null;function _(p,v){let S=!1,x=v.isScene===!0?v.background:null;x&&x.isTexture&&(x=(v.backgroundBlurriness>0?t:e).get(x));const T=n.xr,E=T.getSession&&T.getSession();E&&E.environmentBlendMode==="additive"&&(x=null),x===null?d(o,l):x&&x.isColor&&(d(x,1),S=!0),(n.autoClear||S)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===Ps)?(u===void 0&&(u=new Zt(new Or(1,1,1),new Hn({name:"BackgroundCubeMaterial",uniforms:$i(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Nt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,z,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=x.encoding!==$e,(f!==x||h!==x.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Zt(new Sa(2,2),new Hn({name:"BackgroundMaterial",uniforms:$i(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:Gn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=x.encoding!==$e,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,m=n.toneMapping),c.layers.enableAll(),p.unshift(c,c.geometry,c.material,0,0,null))}function d(p,v){p.getRGB(rs,lf(n)),i.buffers.color.setClear(rs.r,rs.g,rs.b,v,a)}return{getClearColor:function(){return o},setClearColor:function(p,v=1){o.set(p),l=v,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(p){l=p,d(o,l)},render:_}}function ax(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=p(null);let c=l,u=!1;function f(N,K,re,ie,W){let ae=!1;if(a){const he=d(ie,re,K);c!==he&&(c=he,m(c.object)),ae=v(N,ie,re,W),ae&&S(N,ie,re,W)}else{const he=K.wireframe===!0;(c.geometry!==ie.id||c.program!==re.id||c.wireframe!==he)&&(c.geometry=ie.id,c.program=re.id,c.wireframe=he,ae=!0)}W!==null&&t.update(W,34963),(ae||u)&&(u=!1,b(N,K,re,ie),W!==null&&n.bindBuffer(34963,t.get(W).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function m(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function _(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function d(N,K,re){const ie=re.wireframe===!0;let W=o[N.id];W===void 0&&(W={},o[N.id]=W);let ae=W[K.id];ae===void 0&&(ae={},W[K.id]=ae);let he=ae[ie];return he===void 0&&(he=p(h()),ae[ie]=he),he}function p(N){const K=[],re=[],ie=[];for(let W=0;W<r;W++)K[W]=0,re[W]=0,ie[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:re,attributeDivisors:ie,object:N,attributes:{},index:null}}function v(N,K,re,ie){const W=c.attributes,ae=K.attributes;let he=0;const we=re.getAttributes();for(const V in we)if(we[V].location>=0){const xe=W[V];let A=ae[V];if(A===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),xe===void 0||xe.attribute!==A||A&&xe.data!==A.data)return!0;he++}return c.attributesNum!==he||c.index!==ie}function S(N,K,re,ie){const W={},ae=K.attributes;let he=0;const we=re.getAttributes();for(const V in we)if(we[V].location>=0){let xe=ae[V];xe===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(xe=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(xe=N.instanceColor));const A={};A.attribute=xe,xe&&xe.data&&(A.data=xe.data),W[V]=A,he++}c.attributes=W,c.attributesNum=he,c.index=ie}function x(){const N=c.newAttributes;for(let K=0,re=N.length;K<re;K++)N[K]=0}function T(N){E(N,0)}function E(N,K){const re=c.newAttributes,ie=c.enabledAttributes,W=c.attributeDivisors;re[N]=1,ie[N]===0&&(n.enableVertexAttribArray(N),ie[N]=1),W[N]!==K&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,K),W[N]=K)}function R(){const N=c.newAttributes,K=c.enabledAttributes;for(let re=0,ie=K.length;re<ie;re++)K[re]!==N[re]&&(n.disableVertexAttribArray(re),K[re]=0)}function z(N,K,re,ie,W,ae){i.isWebGL2===!0&&(re===5124||re===5125)?n.vertexAttribIPointer(N,K,re,W,ae):n.vertexAttribPointer(N,K,re,ie,W,ae)}function b(N,K,re,ie){if(i.isWebGL2===!1&&(N.isInstancedMesh||ie.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const W=ie.attributes,ae=re.getAttributes(),he=K.defaultAttributeValues;for(const we in ae){const V=ae[we];if(V.location>=0){let ue=W[we];if(ue===void 0&&(we==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),we==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor)),ue!==void 0){const xe=ue.normalized,A=ue.itemSize,X=t.get(ue);if(X===void 0)continue;const q=X.buffer,te=X.type,de=X.bytesPerElement;if(ue.isInterleavedBufferAttribute){const be=ue.data,ve=be.stride,y=ue.offset;if(be.isInstancedInterleavedBuffer){for(let L=0;L<V.locationSize;L++)E(V.location+L,be.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let L=0;L<V.locationSize;L++)T(V.location+L);n.bindBuffer(34962,q);for(let L=0;L<V.locationSize;L++)z(V.location+L,A/V.locationSize,te,xe,ve*de,(y+A/V.locationSize*L)*de)}else{if(ue.isInstancedBufferAttribute){for(let be=0;be<V.locationSize;be++)E(V.location+be,ue.meshPerAttribute);N.isInstancedMesh!==!0&&ie._maxInstanceCount===void 0&&(ie._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<V.locationSize;be++)T(V.location+be);n.bindBuffer(34962,q);for(let be=0;be<V.locationSize;be++)z(V.location+be,A/V.locationSize,te,xe,A*de,A/V.locationSize*be*de)}}else if(he!==void 0){const xe=he[we];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(V.location,xe);break;case 3:n.vertexAttrib3fv(V.location,xe);break;case 4:n.vertexAttrib4fv(V.location,xe);break;default:n.vertexAttrib1fv(V.location,xe)}}}}R()}function P(){ce();for(const N in o){const K=o[N];for(const re in K){const ie=K[re];for(const W in ie)_(ie[W].object),delete ie[W];delete K[re]}delete o[N]}}function F(N){if(o[N.id]===void 0)return;const K=o[N.id];for(const re in K){const ie=K[re];for(const W in ie)_(ie[W].object),delete ie[W];delete K[re]}delete o[N.id]}function ne(N){for(const K in o){const re=o[K];if(re[N.id]===void 0)continue;const ie=re[N.id];for(const W in ie)_(ie[W].object),delete ie[W];delete re[N.id]}}function ce(){H(),u=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ce,resetDefaultState:H,dispose:P,releaseStatesOfGeometry:F,releaseStatesOfProgram:ne,initAttributes:x,enableAttribute:T,disableUnusedAttributes:R}}function lx(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,m;if(r)h=n,m="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[m](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function cx(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const z=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(z.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(z){if(z==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";z="mediump"}return z==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),m=n.getParameter(3379),_=n.getParameter(34076),d=n.getParameter(34921),p=n.getParameter(36347),v=n.getParameter(36348),S=n.getParameter(36349),x=h>0,T=a||e.has("OES_texture_float"),E=x&&T,R=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:m,maxCubemapSize:_,maxAttributes:d,maxVertexUniforms:p,maxVaryings:v,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:T,floatVertexTextures:E,maxSamples:R}}function ux(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new Qn,o=new wt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const m=f.length!==0||h||i!==0||r;return r=h,i=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,m){const _=f.clippingPlanes,d=f.clipIntersection,p=f.clipShadows,v=n.get(f);if(!r||_===null||_.length===0||s&&!p)s?u(null):c();else{const S=s?0:i,x=S*4;let T=v.clippingState||null;l.value=T,T=u(_,h,x,m);for(let E=0;E!==x;++E)T[E]=t[E];v.clippingState=T,this.numIntersection=d?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,m,_){const d=f!==null?f.length:0;let p=null;if(d!==0){if(p=l.value,_!==!0||p===null){const v=m+d*4,S=h.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<v)&&(p=new Float32Array(v));for(let x=0,T=m;x!==d;++x,T+=4)a.copy(f[x]).applyMatrix4(S,o),a.normal.toArray(p,T),p[T+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=d,e.numIntersection=0,p}}function fx(n){let e=new WeakMap;function t(a,o){return o===Wo?a.mapping=Xi:o===xs&&(a.mapping=Yi),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===Wo||o===xs)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new wg(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class hx extends cf{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Oi=4,uc=[.125,.215,.35,.446,.526,.582],ii=20,So=new hx,fc=new Je;let wo=null;const ei=(1+Math.sqrt(5))/2,Pi=1/ei,hc=[new G(1,1,1),new G(-1,1,1),new G(1,1,-1),new G(-1,1,-1),new G(0,ei,Pi),new G(0,ei,-Pi),new G(Pi,0,ei),new G(-Pi,0,ei),new G(ei,Pi,0),new G(-ei,Pi,0)];class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wo),e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Xi||e.mapping===Yi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:Cr,format:Kt,encoding:fi,depthBuffer:!1},r=pc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=pc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=dx(s)),this._blurMaterial=px(s,e,t)}return r}_compileMaterial(e){const t=new Zt(this._lodPlanes[0],e);this._renderer.compile(t,So)}_sceneToCubeUV(e,t,i,r){const o=new kt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(fc),u.toneMapping=wn,u.autoClear=!1;const m=new sf({name:"PMREM.Background",side:Nt,depthWrite:!1,depthTest:!1}),_=new Zt(new Or,m);let d=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,d=!0):(m.color.copy(fc),d=!0);for(let v=0;v<6;v++){const S=v%3;S===0?(o.up.set(0,l[v],0),o.lookAt(c[v],0,0)):S===1?(o.up.set(0,0,l[v]),o.lookAt(0,c[v],0)):(o.up.set(0,l[v],0),o.lookAt(0,0,c[v]));const x=this._cubeSize;ss(r,S*x,v>2?x:0,x,x),u.setRenderTarget(r),d&&u.render(_,o),u.render(e,o)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Xi||e.mapping===Yi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=gc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Zt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,So)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=hc[(r-1)%hc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new Zt(this._lodPlanes[r],c),h=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*ii-1),d=s/_,p=isFinite(s)?1+Math.floor(u*d):ii;p>ii&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ii}`);const v=[];let S=0;for(let z=0;z<ii;++z){const b=z/d,P=Math.exp(-b*b/2);v.push(P),z===0?S+=P:z<p&&(S+=2*P)}for(let z=0;z<v.length;z++)v[z]=v[z]/S;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=v,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:x}=this;h.dTheta.value=_,h.mipInt.value=x-i;const T=this._sizeLods[r],E=3*T*(r>x-Oi?r-x+Oi:0),R=4*(this._cubeSize-T);ss(t,E,R,3*T,2*T),l.setRenderTarget(t),l.render(f,So)}}function dx(n){const e=[],t=[],i=[];let r=n;const s=n-Oi+1+uc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Oi?l=uc[a-n+Oi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],m=6,_=6,d=3,p=2,v=1,S=new Float32Array(d*_*m),x=new Float32Array(p*_*m),T=new Float32Array(v*_*m);for(let R=0;R<m;R++){const z=R%3*2/3-1,b=R>2?0:-1,P=[z,b,0,z+2/3,b,0,z+2/3,b+1,0,z,b,0,z+2/3,b+1,0,z,b+1,0];S.set(P,d*_*R),x.set(h,p*_*R);const F=[R,R,R,R,R,R];T.set(F,v*_*R)}const E=new Vn;E.setAttribute("position",new fn(S,d)),E.setAttribute("uv",new fn(x,p)),E.setAttribute("faceIndex",new fn(T,v)),e.push(E),r>Oi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function pc(n,e,t){const i=new di(n,e,t);return i.texture.mapping=Ps,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function px(n,e,t){const i=new Float32Array(ii),r=new G(0,1,0);return new Hn({name:"SphericalGaussianBlur",defines:{n:ii,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function mc(){return new Hn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wa(),fragmentShader:`

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
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function gc(){return new Hn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Bn,depthTest:!1,depthWrite:!1})}function wa(){return`

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
	`}function mx(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wo||l===xs,u=l===Xi||l===Yi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new dc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new dc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function gx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function _x(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const _ in h.attributes)e.remove(h.attributes[_]);h.removeEventListener("dispose",a),delete r[h.id];const m=s.get(h);m&&(e.remove(m),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const _ in h)e.update(h[_],34962);const m=f.morphAttributes;for(const _ in m){const d=m[_];for(let p=0,v=d.length;p<v;p++)e.update(d[p],34962)}}function c(f){const h=[],m=f.index,_=f.attributes.position;let d=0;if(m!==null){const S=m.array;d=m.version;for(let x=0,T=S.length;x<T;x+=3){const E=S[x+0],R=S[x+1],z=S[x+2];h.push(E,R,R,z,z,E)}}else{const S=_.array;d=_.version;for(let x=0,T=S.length/3-1;x<T;x+=3){const E=x+0,R=x+1,z=x+2;h.push(E,R,R,z,z,E)}}const p=new(Ju(h)?af:of)(h,1);p.version=d;const v=s.get(f);v&&e.remove(v),s.set(f,p)}function u(f){const h=s.get(f);if(h){const m=f.index;m!==null&&h.version<m.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function xx(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,m){n.drawElements(s,m,o,h*l),t.update(m,s,1)}function f(h,m,_){if(_===0)return;let d,p;if(r)d=n,p="drawElementsInstanced";else if(d=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",d===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[p](s,m,o,h*l,_),t.update(m,s,_)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function vx(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function Mx(n,e){return n[0]-e[0]}function yx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function bx(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new ut,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,_=m!==void 0?m.length:0;let d=s.get(u);if(d===void 0||d.count!==_){let N=function(){ce.dispose(),s.delete(u),u.removeEventListener("dispose",N)};d!==void 0&&d.texture.dispose();const S=u.morphAttributes.position!==void 0,x=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,E=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],z=u.morphAttributes.color||[];let b=0;S===!0&&(b=1),x===!0&&(b=2),T===!0&&(b=3);let P=u.attributes.position.count*b,F=1;P>e.maxTextureSize&&(F=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const ne=new Float32Array(P*F*4*_),ce=new tf(ne,P,F,_);ce.type=si,ce.needsUpdate=!0;const H=b*4;for(let K=0;K<_;K++){const re=E[K],ie=R[K],W=z[K],ae=P*F*4*K;for(let he=0;he<re.count;he++){const we=he*H;S===!0&&(a.fromBufferAttribute(re,he),ne[ae+we+0]=a.x,ne[ae+we+1]=a.y,ne[ae+we+2]=a.z,ne[ae+we+3]=0),x===!0&&(a.fromBufferAttribute(ie,he),ne[ae+we+4]=a.x,ne[ae+we+5]=a.y,ne[ae+we+6]=a.z,ne[ae+we+7]=0),T===!0&&(a.fromBufferAttribute(W,he),ne[ae+we+8]=a.x,ne[ae+we+9]=a.y,ne[ae+we+10]=a.z,ne[ae+we+11]=W.itemSize===4?a.w:1)}}d={count:_,texture:ce,size:new Be(P,F)},s.set(u,d),u.addEventListener("dispose",N)}let p=0;for(let S=0;S<h.length;S++)p+=h[S];const v=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",d.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}else{const m=h===void 0?0:h.length;let _=i[u.id];if(_===void 0||_.length!==m){_=[];for(let x=0;x<m;x++)_[x]=[x,0];i[u.id]=_}for(let x=0;x<m;x++){const T=_[x];T[0]=x,T[1]=h[x]}_.sort(yx);for(let x=0;x<8;x++)x<m&&_[x][1]?(o[x][0]=_[x][0],o[x][1]=_[x][1]):(o[x][0]=Number.MAX_SAFE_INTEGER,o[x][1]=0);o.sort(Mx);const d=u.morphAttributes.position,p=u.morphAttributes.normal;let v=0;for(let x=0;x<8;x++){const T=o[x],E=T[0],R=T[1];E!==Number.MAX_SAFE_INTEGER&&R?(d&&u.getAttribute("morphTarget"+x)!==d[E]&&u.setAttribute("morphTarget"+x,d[E]),p&&u.getAttribute("morphNormal"+x)!==p[E]&&u.setAttribute("morphNormal"+x,p[E]),r[x]=R,v+=R):(d&&u.hasAttribute("morphTarget"+x)===!0&&u.deleteAttribute("morphTarget"+x),p&&u.hasAttribute("morphNormal"+x)===!0&&u.deleteAttribute("morphNormal"+x),r[x]=0)}const S=u.morphTargetsRelative?1:1-v;f.getUniforms().setValue(n,"morphTargetBaseInfluence",S),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function Sx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const df=new Lt,pf=new tf,mf=new lg,gf=new uf,_c=[],xc=[],vc=new Float32Array(16),Mc=new Float32Array(9),yc=new Float32Array(4);function er(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=_c[r];if(s===void 0&&(s=new Float32Array(r),_c[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function st(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ot(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Is(n,e){let t=xc[e];t===void 0&&(t=new Int32Array(e),xc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function wx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2fv(this.addr,e),ot(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(st(t,e))return;n.uniform3fv(this.addr,e),ot(t,e)}}function Ax(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4fv(this.addr,e),ot(t,e)}}function Cx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;yc.set(i),n.uniformMatrix2fv(this.addr,!1,yc),ot(t,i)}}function Lx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;Mc.set(i),n.uniformMatrix3fv(this.addr,!1,Mc),ot(t,i)}}function Px(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(st(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ot(t,e)}else{if(st(t,i))return;vc.set(i),n.uniformMatrix4fv(this.addr,!1,vc),ot(t,i)}}function Rx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2iv(this.addr,e),ot(t,e)}}function Ix(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3iv(this.addr,e),ot(t,e)}}function Ox(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4iv(this.addr,e),ot(t,e)}}function Fx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Nx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(st(t,e))return;n.uniform2uiv(this.addr,e),ot(t,e)}}function Ux(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(st(t,e))return;n.uniform3uiv(this.addr,e),ot(t,e)}}function zx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(st(t,e))return;n.uniform4uiv(this.addr,e),ot(t,e)}}function Bx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||df,r)}function kx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||mf,r)}function Gx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||gf,r)}function Hx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||pf,r)}function Vx(n){switch(n){case 5126:return wx;case 35664:return Ex;case 35665:return Tx;case 35666:return Ax;case 35674:return Cx;case 35675:return Lx;case 35676:return Px;case 5124:case 35670:return Rx;case 35667:case 35671:return Dx;case 35668:case 35672:return Ix;case 35669:case 35673:return Ox;case 5125:return Fx;case 36294:return Nx;case 36295:return Ux;case 36296:return zx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return kx;case 35680:case 36300:case 36308:case 36293:return Gx;case 36289:case 36303:case 36311:case 36292:return Hx}}function Wx(n,e){n.uniform1fv(this.addr,e)}function qx(n,e){const t=er(e,this.size,2);n.uniform2fv(this.addr,t)}function jx(n,e){const t=er(e,this.size,3);n.uniform3fv(this.addr,t)}function Xx(n,e){const t=er(e,this.size,4);n.uniform4fv(this.addr,t)}function Yx(n,e){const t=er(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Kx(n,e){const t=er(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function $x(n,e){const t=er(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Zx(n,e){n.uniform1iv(this.addr,e)}function Jx(n,e){n.uniform2iv(this.addr,e)}function Qx(n,e){n.uniform3iv(this.addr,e)}function ev(n,e){n.uniform4iv(this.addr,e)}function tv(n,e){n.uniform1uiv(this.addr,e)}function nv(n,e){n.uniform2uiv(this.addr,e)}function iv(n,e){n.uniform3uiv(this.addr,e)}function rv(n,e){n.uniform4uiv(this.addr,e)}function sv(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||df,s[a])}function ov(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||mf,s[a])}function av(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||gf,s[a])}function lv(n,e,t){const i=this.cache,r=e.length,s=Is(t,r);st(i,s)||(n.uniform1iv(this.addr,s),ot(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||pf,s[a])}function cv(n){switch(n){case 5126:return Wx;case 35664:return qx;case 35665:return jx;case 35666:return Xx;case 35674:return Yx;case 35675:return Kx;case 35676:return $x;case 5124:case 35670:return Zx;case 35667:case 35671:return Jx;case 35668:case 35672:return Qx;case 35669:case 35673:return ev;case 5125:return tv;case 36294:return nv;case 36295:return iv;case 36296:return rv;case 35678:case 36198:case 36298:case 36306:case 35682:return sv;case 35679:case 36299:case 36307:return ov;case 35680:case 36300:case 36308:case 36293:return av;case 36289:case 36303:case 36311:case 36292:return lv}}class uv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Vx(t.type)}}class fv{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=cv(t.type)}}class hv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const Eo=/(\w+)(\])?(\[|\.)?/g;function bc(n,e){n.seq.push(e),n.map[e.id]=e}function dv(n,e,t){const i=n.name,r=i.length;for(Eo.lastIndex=0;;){const s=Eo.exec(i),a=Eo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){bc(t,c===void 0?new uv(o,n,e):new fv(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new hv(o),bc(t,f)),t=f}}}class hs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);dv(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Sc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let pv=0;function mv(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function gv(n){switch(n){case fi:return["Linear","( value )"];case $e:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function wc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+mv(n.getShaderSource(e),a)}else return r}function _v(n,e){const t=gv(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function xv(n,e){let t;switch(e){case Am:t="Linear";break;case Cm:t="Reinhard";break;case Lm:t="OptimizedCineon";break;case Pm:t="ACESFilmic";break;case Rm:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function vv(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(dr).join(`
`)}function Mv(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function yv(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function dr(n){return n!==""}function Ec(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Tc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const bv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yo(n){return n.replace(bv,Sv)}function Sv(n,e){const t=Oe[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Yo(t)}const wv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(n){return n.replace(wv,Ev)}function Ev(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Cc(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Tv(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===qu?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===sm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===hr&&(e="SHADOWMAP_TYPE_VSM"),e}function Av(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Xi:case Yi:e="ENVMAP_TYPE_CUBE";break;case Ps:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Cv(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Yi:e="ENVMAP_MODE_REFRACTION";break}return e}function Lv(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Yu:e="ENVMAP_BLENDING_MULTIPLY";break;case Em:e="ENVMAP_BLENDING_MIX";break;case Tm:e="ENVMAP_BLENDING_ADD";break}return e}function Pv(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Rv(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=Tv(t),c=Av(t),u=Cv(t),f=Lv(t),h=Pv(t),m=t.isWebGL2?"":vv(t),_=Mv(s),d=r.createProgram();let p,v,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[_].filter(dr).join(`
`),p.length>0&&(p+=`
`),v=[m,_].filter(dr).join(`
`),v.length>0&&(v+=`
`)):(p=[Cc(t),"#define SHADER_NAME "+t.shaderName,_,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(dr).join(`
`),v=[m,Cc(t),"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wn?"#define TONE_MAPPING":"",t.toneMapping!==wn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==wn?xv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.encodings_pars_fragment,_v("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(dr).join(`
`)),a=Yo(a),a=Ec(a,t),a=Tc(a,t),o=Yo(o),o=Ec(o,t),o=Tc(o,t),a=Ac(a),o=Ac(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,v=["#define varying in",t.glslVersion===$l?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$l?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const x=S+p+a,T=S+v+o,E=Sc(r,35633,x),R=Sc(r,35632,T);if(r.attachShader(d,E),r.attachShader(d,R),t.index0AttributeName!==void 0?r.bindAttribLocation(d,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(d,0,"position"),r.linkProgram(d),n.debug.checkShaderErrors){const P=r.getProgramInfoLog(d).trim(),F=r.getShaderInfoLog(E).trim(),ne=r.getShaderInfoLog(R).trim();let ce=!0,H=!0;if(r.getProgramParameter(d,35714)===!1){ce=!1;const N=wc(r,E,"vertex"),K=wc(r,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(d,35715)+`

Program Info Log: `+P+`
`+N+`
`+K)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(F===""||ne==="")&&(H=!1);H&&(this.diagnostics={runnable:ce,programLog:P,vertexShader:{log:F,prefix:p},fragmentShader:{log:ne,prefix:v}})}r.deleteShader(E),r.deleteShader(R);let z;this.getUniforms=function(){return z===void 0&&(z=new hs(r,d)),z};let b;return this.getAttributes=function(){return b===void 0&&(b=yv(r,d)),b},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(d),this.program=void 0},this.name=t.shaderName,this.id=pv++,this.cacheKey=e,this.usedTimes=1,this.program=d,this.vertexShader=E,this.fragmentShader=R,this}let Dv=0;class Iv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Ov(e),t.set(e,i)),i}}class Ov{constructor(e){this.id=Dv++,this.code=e,this.usedTimes=0}}function Fv(n,e,t,i,r,s,a){const o=new ba,l=new Iv,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let m=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(b,P,F,ne,ce){const H=ne.fog,N=ce.geometry,K=b.isMeshStandardMaterial?ne.environment:null,re=(b.isMeshStandardMaterial?t:e).get(b.envMap||K),ie=re&&re.mapping===Ps?re.image.height:null,W=_[b.type];b.precision!==null&&(m=r.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ae=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,he=ae!==void 0?ae.length:0;let we=0;N.morphAttributes.position!==void 0&&(we=1),N.morphAttributes.normal!==void 0&&(we=2),N.morphAttributes.color!==void 0&&(we=3);let V,ue,xe,A;if(W){const ve=ln[W];V=ve.vertexShader,ue=ve.fragmentShader}else V=b.vertexShader,ue=b.fragmentShader,l.update(b),xe=l.getVertexShaderID(b),A=l.getFragmentShaderID(b);const X=n.getRenderTarget(),q=b.alphaTest>0,te=b.clearcoat>0,de=b.iridescence>0;return{isWebGL2:u,shaderID:W,shaderName:b.type,vertexShader:V,fragmentShader:ue,defines:b.defines,customVertexShaderID:xe,customFragmentShaderID:A,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,instancing:ce.isInstancedMesh===!0,instancingColor:ce.isInstancedMesh===!0&&ce.instanceColor!==null,supportsVertexTextures:h,outputEncoding:X===null?n.outputEncoding:X.isXRRenderTarget===!0?X.texture.encoding:fi,map:!!b.map,matcap:!!b.matcap,envMap:!!re,envMapMode:re&&re.mapping,envMapCubeUVHeight:ie,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===Zm,tangentSpaceNormalMap:b.normalMapType===$m,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===$e,clearcoat:te,clearcoatMap:te&&!!b.clearcoatMap,clearcoatRoughnessMap:te&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:te&&!!b.clearcoatNormalMap,iridescence:de,iridescenceMap:de&&!!b.iridescenceMap,iridescenceThicknessMap:de&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===zi,alphaMap:!!b.alphaMap,alphaTest:q,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!N.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(b.map||b.bumpMap||b.normalMap||b.specularMap||b.alphaMap||b.emissiveMap||b.roughnessMap||b.metalnessMap||b.clearcoatNormalMap||b.iridescenceMap||b.iridescenceThicknessMap||b.transmission>0||b.transmissionMap||b.thicknessMap||b.specularIntensityMap||b.specularColorMap||b.sheen>0||b.sheenColorMap||b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!H,useFog:b.fog===!0,fogExp2:H&&H.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ce.isSkinnedMesh===!0,morphTargets:N.morphAttributes.position!==void 0,morphNormals:N.morphAttributes.normal!==void 0,morphColors:N.morphAttributes.color!==void 0,morphTargetsCount:he,morphTextureStride:we,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:n.shadowMap.enabled&&F.length>0,shadowMapType:n.shadowMap.type,toneMapping:b.toneMapped?n.toneMapping:wn,useLegacyLights:n.useLegacyLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Fn,flipSided:b.side===Nt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const P=[];if(b.shaderID?P.push(b.shaderID):(P.push(b.customVertexShaderID),P.push(b.customFragmentShaderID)),b.defines!==void 0)for(const F in b.defines)P.push(F),P.push(b.defines[F]);return b.isRawShaderMaterial===!1&&(v(P,b),S(P,b),P.push(n.outputEncoding)),P.push(b.customProgramCacheKey),P.join()}function v(b,P){b.push(P.precision),b.push(P.outputEncoding),b.push(P.envMapMode),b.push(P.envMapCubeUVHeight),b.push(P.combine),b.push(P.vertexUvs),b.push(P.fogExp2),b.push(P.sizeAttenuation),b.push(P.morphTargetsCount),b.push(P.morphAttributeCount),b.push(P.numDirLights),b.push(P.numPointLights),b.push(P.numSpotLights),b.push(P.numSpotLightMaps),b.push(P.numHemiLights),b.push(P.numRectAreaLights),b.push(P.numDirLightShadows),b.push(P.numPointLightShadows),b.push(P.numSpotLightShadows),b.push(P.numSpotLightShadowsWithMaps),b.push(P.shadowMapType),b.push(P.toneMapping),b.push(P.numClippingPlanes),b.push(P.numClipIntersection),b.push(P.depthPacking)}function S(b,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.map&&o.enable(4),P.matcap&&o.enable(5),P.envMap&&o.enable(6),P.lightMap&&o.enable(7),P.aoMap&&o.enable(8),P.emissiveMap&&o.enable(9),P.bumpMap&&o.enable(10),P.normalMap&&o.enable(11),P.objectSpaceNormalMap&&o.enable(12),P.tangentSpaceNormalMap&&o.enable(13),P.clearcoat&&o.enable(14),P.clearcoatMap&&o.enable(15),P.clearcoatRoughnessMap&&o.enable(16),P.clearcoatNormalMap&&o.enable(17),P.iridescence&&o.enable(18),P.iridescenceMap&&o.enable(19),P.iridescenceThicknessMap&&o.enable(20),P.displacementMap&&o.enable(21),P.specularMap&&o.enable(22),P.roughnessMap&&o.enable(23),P.metalnessMap&&o.enable(24),P.gradientMap&&o.enable(25),P.alphaMap&&o.enable(26),P.alphaTest&&o.enable(27),P.vertexColors&&o.enable(28),P.vertexAlphas&&o.enable(29),P.vertexUvs&&o.enable(30),P.vertexTangents&&o.enable(31),P.uvsVertexOnly&&o.enable(32),b.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.specularIntensityMap&&o.enable(15),P.specularColorMap&&o.enable(16),P.transmission&&o.enable(17),P.transmissionMap&&o.enable(18),P.thicknessMap&&o.enable(19),P.sheen&&o.enable(20),P.sheenColorMap&&o.enable(21),P.sheenRoughnessMap&&o.enable(22),P.decodeVideoTexture&&o.enable(23),P.opaque&&o.enable(24),b.push(o.mask)}function x(b){const P=_[b.type];let F;if(P){const ne=ln[P];F=Mg.clone(ne.uniforms)}else F=b.uniforms;return F}function T(b,P){let F;for(let ne=0,ce=c.length;ne<ce;ne++){const H=c[ne];if(H.cacheKey===P){F=H,++F.usedTimes;break}}return F===void 0&&(F=new Rv(n,P,b,s),c.push(F)),F}function E(b){if(--b.usedTimes===0){const P=c.indexOf(b);c[P]=c[c.length-1],c.pop(),b.destroy()}}function R(b){l.remove(b)}function z(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:x,acquireProgram:T,releaseProgram:E,releaseShaderCache:R,programs:c,dispose:z}}function Nv(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Uv(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Lc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Pc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,m,_,d,p){let v=n[e];return v===void 0?(v={id:f.id,object:f,geometry:h,material:m,groupOrder:_,renderOrder:f.renderOrder,z:d,group:p},n[e]=v):(v.id=f.id,v.object=f,v.geometry=h,v.material=m,v.groupOrder=_,v.renderOrder=f.renderOrder,v.z=d,v.group=p),e++,v}function o(f,h,m,_,d,p){const v=a(f,h,m,_,d,p);m.transmission>0?i.push(v):m.transparent===!0?r.push(v):t.push(v)}function l(f,h,m,_,d,p){const v=a(f,h,m,_,d,p);m.transmission>0?i.unshift(v):m.transparent===!0?r.unshift(v):t.unshift(v)}function c(f,h){t.length>1&&t.sort(f||Uv),i.length>1&&i.sort(h||Lc),r.length>1&&r.sort(h||Lc)}function u(){for(let f=e,h=n.length;f<h;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function zv(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Pc,n.set(i,[a])):r>=s.length?(a=new Pc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Bv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new Je};break;case"SpotLight":t={position:new G,direction:new G,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":t={color:new Je,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function kv(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Gv=0;function Hv(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Vv(n,e){const t=new Bv,i=kv(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new G);const s=new G,a=new ft,o=new ft;function l(u,f){let h=0,m=0,_=0;for(let ne=0;ne<9;ne++)r.probe[ne].set(0,0,0);let d=0,p=0,v=0,S=0,x=0,T=0,E=0,R=0,z=0,b=0;u.sort(Hv);const P=f===!0?Math.PI:1;for(let ne=0,ce=u.length;ne<ce;ne++){const H=u[ne],N=H.color,K=H.intensity,re=H.distance,ie=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)h+=N.r*K*P,m+=N.g*K*P,_+=N.b*K*P;else if(H.isLightProbe)for(let W=0;W<9;W++)r.probe[W].addScaledVector(H.sh.coefficients[W],K);else if(H.isDirectionalLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*P),H.castShadow){const ae=H.shadow,he=i.get(H);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,r.directionalShadow[d]=he,r.directionalShadowMap[d]=ie,r.directionalShadowMatrix[d]=H.shadow.matrix,T++}r.directional[d]=W,d++}else if(H.isSpotLight){const W=t.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(N).multiplyScalar(K*P),W.distance=re,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,r.spot[v]=W;const ae=H.shadow;if(H.map&&(r.spotLightMap[z]=H.map,z++,ae.updateMatrices(H),H.castShadow&&b++),r.spotLightMatrix[v]=ae.matrix,H.castShadow){const he=i.get(H);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,r.spotShadow[v]=he,r.spotShadowMap[v]=ie,R++}v++}else if(H.isRectAreaLight){const W=t.get(H);W.color.copy(N).multiplyScalar(K),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),r.rectArea[S]=W,S++}else if(H.isPointLight){const W=t.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity*P),W.distance=H.distance,W.decay=H.decay,H.castShadow){const ae=H.shadow,he=i.get(H);he.shadowBias=ae.bias,he.shadowNormalBias=ae.normalBias,he.shadowRadius=ae.radius,he.shadowMapSize=ae.mapSize,he.shadowCameraNear=ae.camera.near,he.shadowCameraFar=ae.camera.far,r.pointShadow[p]=he,r.pointShadowMap[p]=ie,r.pointShadowMatrix[p]=H.shadow.matrix,E++}r.point[p]=W,p++}else if(H.isHemisphereLight){const W=t.get(H);W.skyColor.copy(H.color).multiplyScalar(K*P),W.groundColor.copy(H.groundColor).multiplyScalar(K*P),r.hemi[x]=W,x++}}S>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=m,r.ambient[2]=_;const F=r.hash;(F.directionalLength!==d||F.pointLength!==p||F.spotLength!==v||F.rectAreaLength!==S||F.hemiLength!==x||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==R||F.numSpotMaps!==z)&&(r.directional.length=d,r.spot.length=v,r.rectArea.length=S,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=R+z-b,r.spotLightMap.length=z,r.numSpotLightShadowsWithMaps=b,F.directionalLength=d,F.pointLength=p,F.spotLength=v,F.rectAreaLength=S,F.hemiLength=x,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=R,F.numSpotMaps=z,r.version=Gv++)}function c(u,f){let h=0,m=0,_=0,d=0,p=0;const v=f.matrixWorldInverse;for(let S=0,x=u.length;S<x;S++){const T=u[S];if(T.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),h++}else if(T.isSpotLight){const E=r.spot[_];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),E.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(v),_++}else if(T.isRectAreaLight){const E=r.rectArea[d];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),o.identity(),a.copy(T.matrixWorld),a.premultiply(v),o.extractRotation(a),E.halfWidth.set(T.width*.5,0,0),E.halfHeight.set(0,T.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),d++}else if(T.isPointLight){const E=r.point[m];E.position.setFromMatrixPosition(T.matrixWorld),E.position.applyMatrix4(v),m++}else if(T.isHemisphereLight){const E=r.hemi[p];E.direction.setFromMatrixPosition(T.matrixWorld),E.direction.transformDirection(v),p++}}}return{setup:l,setupView:c,state:r}}function Rc(n,e){const t=new Vv(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Wv(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Rc(n,e),t.set(s,[l])):a>=o.length?(l=new Rc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class qv extends Ds{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ym,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jv extends Ds{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new G,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Xv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Yv=`uniform sampler2D shadow_pass;
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
}`;function Kv(n,e,t){let i=new ff;const r=new Be,s=new Be,a=new ut,o=new qv({depthPacking:Km}),l=new jv,c={},u=t.maxTextureSize,f={[Gn]:Nt,[Nt]:Gn,[Fn]:Fn},h=new Hn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:Xv,fragmentShader:Yv}),m=h.clone();m.defines.HORIZONTAL_PASS=1;const _=new Vn;_.setAttribute("position",new fn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const d=new Zt(_,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=qu,this.render=function(T,E,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const z=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(Bn),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);for(let ne=0,ce=T.length;ne<ce;ne++){const H=T[ne],N=H.shadow;if(N===void 0){console.warn("THREE.WebGLShadowMap:",H,"has no shadow.");continue}if(N.autoUpdate===!1&&N.needsUpdate===!1)continue;r.copy(N.mapSize);const K=N.getFrameExtents();if(r.multiply(K),s.copy(N.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/K.x),r.x=s.x*K.x,N.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/K.y),r.y=s.y*K.y,N.mapSize.y=s.y)),N.map===null){const ie=this.type!==hr?{minFilter:St,magFilter:St}:{};N.map=new di(r.x,r.y,ie),N.map.texture.name=H.name+".shadowMap",N.camera.updateProjectionMatrix()}n.setRenderTarget(N.map),n.clear();const re=N.getViewportCount();for(let ie=0;ie<re;ie++){const W=N.getViewport(ie);a.set(s.x*W.x,s.y*W.y,s.x*W.z,s.y*W.w),F.viewport(a),N.updateMatrices(H,ie),i=N.getFrustum(),x(E,R,N.camera,H,this.type)}N.isPointLightShadow!==!0&&this.type===hr&&v(N,R),N.needsUpdate=!1}p.needsUpdate=!1,n.setRenderTarget(z,b,P)};function v(T,E){const R=e.update(d);h.defines.VSM_SAMPLES!==T.blurSamples&&(h.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,h.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new di(r.x,r.y)),h.uniforms.shadow_pass.value=T.map.texture,h.uniforms.resolution.value=T.mapSize,h.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(E,null,R,h,d,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(E,null,R,m,d,null)}function S(T,E,R,z,b,P){let F=null;const ne=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(ne!==void 0)F=ne;else if(F=R.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const ce=F.uuid,H=E.uuid;let N=c[ce];N===void 0&&(N={},c[ce]=N);let K=N[H];K===void 0&&(K=F.clone(),N[H]=K),F=K}return F.visible=E.visible,F.wireframe=E.wireframe,P===hr?F.side=E.shadowSide!==null?E.shadowSide:E.side:F.side=E.shadowSide!==null?E.shadowSide:f[E.side],F.alphaMap=E.alphaMap,F.alphaTest=E.alphaTest,F.map=E.map,F.clipShadows=E.clipShadows,F.clippingPlanes=E.clippingPlanes,F.clipIntersection=E.clipIntersection,F.displacementMap=E.displacementMap,F.displacementScale=E.displacementScale,F.displacementBias=E.displacementBias,F.wireframeLinewidth=E.wireframeLinewidth,F.linewidth=E.linewidth,R.isPointLight===!0&&F.isMeshDistanceMaterial===!0&&(F.referencePosition.setFromMatrixPosition(R.matrixWorld),F.nearDistance=z,F.farDistance=b),F}function x(T,E,R,z,b){if(T.visible===!1)return;if(T.layers.test(E.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&b===hr)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const ne=e.update(T),ce=T.material;if(Array.isArray(ce)){const H=ne.groups;for(let N=0,K=H.length;N<K;N++){const re=H[N],ie=ce[re.materialIndex];if(ie&&ie.visible){const W=S(T,ie,z,R.near,R.far,b);n.renderBufferDirect(R,null,ne,W,T,re)}}}else if(ce.visible){const H=S(T,ce,z,R.near,R.far,b);n.renderBufferDirect(R,null,ne,H,T,null)}}const F=T.children;for(let ne=0,ce=F.length;ne<ce;ne++)x(F[ne],E,R,z,b)}}function $v(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const Q=new ut;let ge=null;const Te=new ut(0,0,0,0);return{setMask:function(Ce){ge!==Ce&&!D&&(n.colorMask(Ce,Ce,Ce,Ce),ge=Ce)},setLocked:function(Ce){D=Ce},setClear:function(Ce,Ke,at,xt,tn){tn===!0&&(Ce*=xt,Ke*=xt,at*=xt),Q.set(Ce,Ke,at,xt),Te.equals(Q)===!1&&(n.clearColor(Ce,Ke,at,xt),Te.copy(Q))},reset:function(){D=!1,ge=null,Te.set(-1,0,0,0)}}}function s(){let D=!1,Q=null,ge=null,Te=null;return{setTest:function(Ce){Ce?q(2929):te(2929)},setMask:function(Ce){Q!==Ce&&!D&&(n.depthMask(Ce),Q=Ce)},setFunc:function(Ce){if(ge!==Ce){switch(Ce){case xm:n.depthFunc(512);break;case vm:n.depthFunc(519);break;case Mm:n.depthFunc(513);break;case Vo:n.depthFunc(515);break;case ym:n.depthFunc(514);break;case bm:n.depthFunc(518);break;case Sm:n.depthFunc(516);break;case wm:n.depthFunc(517);break;default:n.depthFunc(515)}ge=Ce}},setLocked:function(Ce){D=Ce},setClear:function(Ce){Te!==Ce&&(n.clearDepth(Ce),Te=Ce)},reset:function(){D=!1,Q=null,ge=null,Te=null}}}function a(){let D=!1,Q=null,ge=null,Te=null,Ce=null,Ke=null,at=null,xt=null,tn=null;return{setTest:function(Qe){D||(Qe?q(2960):te(2960))},setMask:function(Qe){Q!==Qe&&!D&&(n.stencilMask(Qe),Q=Qe)},setFunc:function(Qe,Ut,nn){(ge!==Qe||Te!==Ut||Ce!==nn)&&(n.stencilFunc(Qe,Ut,nn),ge=Qe,Te=Ut,Ce=nn)},setOp:function(Qe,Ut,nn){(Ke!==Qe||at!==Ut||xt!==nn)&&(n.stencilOp(Qe,Ut,nn),Ke=Qe,at=Ut,xt=nn)},setLocked:function(Qe){D=Qe},setClear:function(Qe){tn!==Qe&&(n.clearStencil(Qe),tn=Qe)},reset:function(){D=!1,Q=null,ge=null,Te=null,Ce=null,Ke=null,at=null,xt=null,tn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},m={},_=new WeakMap,d=[],p=null,v=!1,S=null,x=null,T=null,E=null,R=null,z=null,b=null,P=!1,F=null,ne=null,ce=null,H=null,N=null;const K=n.getParameter(35661);let re=!1,ie=0;const W=n.getParameter(7938);W.indexOf("WebGL")!==-1?(ie=parseFloat(/^WebGL (\d)/.exec(W)[1]),re=ie>=1):W.indexOf("OpenGL ES")!==-1&&(ie=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),re=ie>=2);let ae=null,he={};const we=n.getParameter(3088),V=n.getParameter(2978),ue=new ut().fromArray(we),xe=new ut().fromArray(V);function A(D,Q,ge){const Te=new Uint8Array(4),Ce=n.createTexture();n.bindTexture(D,Ce),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Ke=0;Ke<ge;Ke++)n.texImage2D(Q+Ke,0,6408,1,1,0,6408,5121,Te);return Ce}const X={};X[3553]=A(3553,3553,1),X[34067]=A(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),q(2929),l.setFunc(Vo),Z(!1),le(vl),q(2884),B(Bn);function q(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function te(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function de(D,Q){return m[D]!==Q?(n.bindFramebuffer(D,Q),m[D]=Q,i&&(D===36009&&(m[36160]=Q),D===36160&&(m[36009]=Q)),!0):!1}function be(D,Q){let ge=d,Te=!1;if(D)if(ge=_.get(Q),ge===void 0&&(ge=[],_.set(Q,ge)),D.isWebGLMultipleRenderTargets){const Ce=D.texture;if(ge.length!==Ce.length||ge[0]!==36064){for(let Ke=0,at=Ce.length;Ke<at;Ke++)ge[Ke]=36064+Ke;ge.length=Ce.length,Te=!0}}else ge[0]!==36064&&(ge[0]=36064,Te=!0);else ge[0]!==1029&&(ge[0]=1029,Te=!0);Te&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function ve(D){return p!==D?(n.useProgram(D),p=D,!0):!1}const y={[Di]:32774,[am]:32778,[lm]:32779};if(i)y[Sl]=32775,y[wl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(y[Sl]=D.MIN_EXT,y[wl]=D.MAX_EXT)}const L={[cm]:0,[um]:1,[fm]:768,[ju]:770,[_m]:776,[mm]:774,[dm]:772,[hm]:769,[Xu]:771,[gm]:775,[pm]:773};function B(D,Q,ge,Te,Ce,Ke,at,xt){if(D===Bn){v===!0&&(te(3042),v=!1);return}if(v===!1&&(q(3042),v=!0),D!==om){if(D!==S||xt!==P){if((x!==Di||R!==Di)&&(n.blendEquation(32774),x=Di,R=Di),xt)switch(D){case zi:n.blendFuncSeparate(1,771,1,771);break;case Ml:n.blendFunc(1,1);break;case yl:n.blendFuncSeparate(0,769,0,1);break;case bl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case zi:n.blendFuncSeparate(770,771,1,771);break;case Ml:n.blendFunc(770,1);break;case yl:n.blendFuncSeparate(0,769,0,1);break;case bl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}T=null,E=null,z=null,b=null,S=D,P=xt}return}Ce=Ce||Q,Ke=Ke||ge,at=at||Te,(Q!==x||Ce!==R)&&(n.blendEquationSeparate(y[Q],y[Ce]),x=Q,R=Ce),(ge!==T||Te!==E||Ke!==z||at!==b)&&(n.blendFuncSeparate(L[ge],L[Te],L[Ke],L[at]),T=ge,E=Te,z=Ke,b=at),S=D,P=!1}function j(D,Q){D.side===Fn?te(2884):q(2884);let ge=D.side===Nt;Q&&(ge=!ge),Z(ge),D.blending===zi&&D.transparent===!1?B(Bn):B(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const Te=D.stencilWrite;c.setTest(Te),Te&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),se(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?q(32926):te(32926)}function Z(D){F!==D&&(D?n.frontFace(2304):n.frontFace(2305),F=D)}function le(D){D!==im?(q(2884),D!==ne&&(D===vl?n.cullFace(1029):D===rm?n.cullFace(1028):n.cullFace(1032))):te(2884),ne=D}function pe(D){D!==ce&&(re&&n.lineWidth(D),ce=D)}function se(D,Q,ge){D?(q(32823),(H!==Q||N!==ge)&&(n.polygonOffset(Q,ge),H=Q,N=ge)):te(32823)}function me(D){D?q(3089):te(3089)}function oe(D){D===void 0&&(D=33984+K-1),ae!==D&&(n.activeTexture(D),ae=D)}function M(D,Q,ge){ge===void 0&&(ae===null?ge=33984+K-1:ge=ae);let Te=he[ge];Te===void 0&&(Te={type:void 0,texture:void 0},he[ge]=Te),(Te.type!==D||Te.texture!==Q)&&(ae!==ge&&(n.activeTexture(ge),ae=ge),n.bindTexture(D,Q||X[D]),Te.type=D,Te.texture=Q)}function g(){const D=he[ae];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function I(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function C(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Le(D){ue.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),ue.copy(D))}function Ee(D){xe.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),xe.copy(D))}function Re(D,Q){let ge=f.get(Q);ge===void 0&&(ge=new WeakMap,f.set(Q,ge));let Te=ge.get(D);Te===void 0&&(Te=n.getUniformBlockIndex(Q,D.name),ge.set(D,Te))}function ke(D,Q){const Te=f.get(Q).get(D);u.get(Q)!==Te&&(n.uniformBlockBinding(Q,Te,D.__bindingPointIndex),u.set(Q,Te))}function Ye(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ae=null,he={},m={},_=new WeakMap,d=[],p=null,v=!1,S=null,x=null,T=null,E=null,R=null,z=null,b=null,P=!1,F=null,ne=null,ce=null,H=null,N=null,ue.set(0,0,n.canvas.width,n.canvas.height),xe.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:q,disable:te,bindFramebuffer:de,drawBuffers:be,useProgram:ve,setBlending:B,setMaterial:j,setFlipSided:Z,setCullFace:le,setLineWidth:pe,setPolygonOffset:se,setScissorTest:me,activeTexture:oe,bindTexture:M,unbindTexture:g,compressedTexImage2D:I,compressedTexImage3D:Y,texImage2D:Me,texImage3D:Ae,updateUBOMapping:Re,uniformBlockBinding:ke,texStorage2D:O,texStorage3D:Se,texSubImage2D:J,texSubImage3D:fe,compressedTexSubImage2D:_e,compressedTexSubImage3D:C,scissor:Le,viewport:Ee,reset:Ye}}function Zv(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),_=new WeakMap;let d;const p=new WeakMap;let v=!1;try{v=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(M,g){return v?new OffscreenCanvas(M,g):Pr("canvas")}function x(M,g,I,Y){let J=1;if((M.width>Y||M.height>Y)&&(J=Y/Math.max(M.width,M.height)),J<1||g===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const fe=g?eg:Math.floor,_e=fe(J*M.width),C=fe(J*M.height);d===void 0&&(d=S(_e,C));const O=I?S(_e,C):d;return O.width=_e,O.height=C,O.getContext("2d").drawImage(M,0,0,_e,C),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+_e+"x"+C+")."),O}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function T(M){return Jl(M.width)&&Jl(M.height)}function E(M){return o?!1:M.wrapS!==Yt||M.wrapT!==Yt||M.minFilter!==St&&M.minFilter!==Bt}function R(M,g){return M.generateMipmaps&&g&&M.minFilter!==St&&M.minFilter!==Bt}function z(M){n.generateMipmap(M)}function b(M,g,I,Y,J=!1){if(o===!1)return g;if(M!==null){if(n[M]!==void 0)return n[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let fe=g;return g===6403&&(I===5126&&(fe=33326),I===5131&&(fe=33325),I===5121&&(fe=33321)),g===33319&&(I===5126&&(fe=33328),I===5131&&(fe=33327),I===5121&&(fe=33323)),g===6408&&(I===5126&&(fe=34836),I===5131&&(fe=34842),I===5121&&(fe=Y===$e&&J===!1?35907:32856),I===32819&&(fe=32854),I===32820&&(fe=32855)),(fe===33325||fe===33326||fe===33327||fe===33328||fe===34842||fe===34836)&&e.get("EXT_color_buffer_float"),fe}function P(M,g,I){return R(M,I)===!0||M.isFramebufferTexture&&M.minFilter!==St&&M.minFilter!==Bt?Math.log2(Math.max(g.width,g.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?g.mipmaps.length:1}function F(M){return M===St||M===El||M===Ys?9728:9729}function ne(M){const g=M.target;g.removeEventListener("dispose",ne),H(g),g.isVideoTexture&&_.delete(g)}function ce(M){const g=M.target;g.removeEventListener("dispose",ce),K(g)}function H(M){const g=i.get(M);if(g.__webglInit===void 0)return;const I=M.source,Y=p.get(I);if(Y){const J=Y[g.__cacheKey];J.usedTimes--,J.usedTimes===0&&N(M),Object.keys(Y).length===0&&p.delete(I)}i.remove(M)}function N(M){const g=i.get(M);n.deleteTexture(g.__webglTexture);const I=M.source,Y=p.get(I);delete Y[g.__cacheKey],a.memory.textures--}function K(M){const g=M.texture,I=i.get(M),Y=i.get(g);if(Y.__webglTexture!==void 0&&(n.deleteTexture(Y.__webglTexture),a.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let J=0;J<6;J++)n.deleteFramebuffer(I.__webglFramebuffer[J]),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer[J]);else{if(n.deleteFramebuffer(I.__webglFramebuffer),I.__webglDepthbuffer&&n.deleteRenderbuffer(I.__webglDepthbuffer),I.__webglMultisampledFramebuffer&&n.deleteFramebuffer(I.__webglMultisampledFramebuffer),I.__webglColorRenderbuffer)for(let J=0;J<I.__webglColorRenderbuffer.length;J++)I.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(I.__webglColorRenderbuffer[J]);I.__webglDepthRenderbuffer&&n.deleteRenderbuffer(I.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let J=0,fe=g.length;J<fe;J++){const _e=i.get(g[J]);_e.__webglTexture&&(n.deleteTexture(_e.__webglTexture),a.memory.textures--),i.remove(g[J])}i.remove(g),i.remove(M)}let re=0;function ie(){re=0}function W(){const M=re;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),re+=1,M}function ae(M){const g=[];return g.push(M.wrapS),g.push(M.wrapT),g.push(M.wrapR||0),g.push(M.magFilter),g.push(M.minFilter),g.push(M.anisotropy),g.push(M.internalFormat),g.push(M.format),g.push(M.type),g.push(M.generateMipmaps),g.push(M.premultiplyAlpha),g.push(M.flipY),g.push(M.unpackAlignment),g.push(M.encoding),g.join()}function he(M,g){const I=i.get(M);if(M.isVideoTexture&&me(M),M.isRenderTargetTexture===!1&&M.version>0&&I.__version!==M.version){const Y=M.image;if(Y===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Y.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{te(I,M,g);return}}t.bindTexture(3553,I.__webglTexture,33984+g)}function we(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){te(I,M,g);return}t.bindTexture(35866,I.__webglTexture,33984+g)}function V(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){te(I,M,g);return}t.bindTexture(32879,I.__webglTexture,33984+g)}function ue(M,g){const I=i.get(M);if(M.version>0&&I.__version!==M.version){de(I,M,g);return}t.bindTexture(34067,I.__webglTexture,33984+g)}const xe={[qo]:10497,[Yt]:33071,[jo]:33648},A={[St]:9728,[El]:9984,[Ys]:9986,[Bt]:9729,[Dm]:9985,[Ar]:9987};function X(M,g,I){if(I?(n.texParameteri(M,10242,xe[g.wrapS]),n.texParameteri(M,10243,xe[g.wrapT]),(M===32879||M===35866)&&n.texParameteri(M,32882,xe[g.wrapR]),n.texParameteri(M,10240,A[g.magFilter]),n.texParameteri(M,10241,A[g.minFilter])):(n.texParameteri(M,10242,33071),n.texParameteri(M,10243,33071),(M===32879||M===35866)&&n.texParameteri(M,32882,33071),(g.wrapS!==Yt||g.wrapT!==Yt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(M,10240,F(g.magFilter)),n.texParameteri(M,10241,F(g.minFilter)),g.minFilter!==St&&g.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const Y=e.get("EXT_texture_filter_anisotropic");if(g.magFilter===St||g.minFilter!==Ys&&g.minFilter!==Ar||g.type===si&&e.has("OES_texture_float_linear")===!1||o===!1&&g.type===Cr&&e.has("OES_texture_half_float_linear")===!1)return;(g.anisotropy>1||i.get(g).__currentAnisotropy)&&(n.texParameterf(M,Y.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,r.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy)}}function q(M,g){let I=!1;M.__webglInit===void 0&&(M.__webglInit=!0,g.addEventListener("dispose",ne));const Y=g.source;let J=p.get(Y);J===void 0&&(J={},p.set(Y,J));const fe=ae(g);if(fe!==M.__cacheKey){J[fe]===void 0&&(J[fe]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,I=!0),J[fe].usedTimes++;const _e=J[M.__cacheKey];_e!==void 0&&(J[M.__cacheKey].usedTimes--,_e.usedTimes===0&&N(g)),M.__cacheKey=fe,M.__webglTexture=J[fe].texture}return I}function te(M,g,I){let Y=3553;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(Y=35866),g.isData3DTexture&&(Y=32879);const J=q(M,g),fe=g.source;t.bindTexture(Y,M.__webglTexture,33984+I);const _e=i.get(fe);if(fe.version!==_e.__version||J===!0){t.activeTexture(33984+I),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const C=E(g)&&T(g.image)===!1;let O=x(g.image,C,!1,u);O=oe(g,O);const Se=T(O)||o,Me=s.convert(g.format,g.encoding);let Ae=s.convert(g.type),Le=b(g.internalFormat,Me,Ae,g.encoding,g.isVideoTexture);X(Y,g,Se);let Ee;const Re=g.mipmaps,ke=o&&g.isVideoTexture!==!0,Ye=_e.__version===void 0||J===!0,D=P(g,O,Se);if(g.isDepthTexture)Le=6402,o?g.type===si?Le=36012:g.type===ri?Le=33190:g.type===Bi?Le=35056:Le=33189:g.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),g.format===ci&&Le===6402&&g.type!==$u&&g.type!==ri&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),g.type=ri,Ae=s.convert(g.type)),g.format===Ki&&Le===6402&&(Le=34041,g.type!==Bi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),g.type=Bi,Ae=s.convert(g.type))),Ye&&(ke?t.texStorage2D(3553,1,Le,O.width,O.height):t.texImage2D(3553,0,Le,O.width,O.height,0,Me,Ae,null));else if(g.isDataTexture)if(Re.length>0&&Se){ke&&Ye&&t.texStorage2D(3553,D,Le,Re[0].width,Re[0].height);for(let Q=0,ge=Re.length;Q<ge;Q++)Ee=Re[Q],ke?t.texSubImage2D(3553,Q,0,0,Ee.width,Ee.height,Me,Ae,Ee.data):t.texImage2D(3553,Q,Le,Ee.width,Ee.height,0,Me,Ae,Ee.data);g.generateMipmaps=!1}else ke?(Ye&&t.texStorage2D(3553,D,Le,O.width,O.height),t.texSubImage2D(3553,0,0,0,O.width,O.height,Me,Ae,O.data)):t.texImage2D(3553,0,Le,O.width,O.height,0,Me,Ae,O.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){ke&&Ye&&t.texStorage3D(35866,D,Le,Re[0].width,Re[0].height,O.depth);for(let Q=0,ge=Re.length;Q<ge;Q++)Ee=Re[Q],g.format!==Kt?Me!==null?ke?t.compressedTexSubImage3D(35866,Q,0,0,0,Ee.width,Ee.height,O.depth,Me,Ee.data,0,0):t.compressedTexImage3D(35866,Q,Le,Ee.width,Ee.height,O.depth,0,Ee.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage3D(35866,Q,0,0,0,Ee.width,Ee.height,O.depth,Me,Ae,Ee.data):t.texImage3D(35866,Q,Le,Ee.width,Ee.height,O.depth,0,Me,Ae,Ee.data)}else{ke&&Ye&&t.texStorage2D(3553,D,Le,Re[0].width,Re[0].height);for(let Q=0,ge=Re.length;Q<ge;Q++)Ee=Re[Q],g.format!==Kt?Me!==null?ke?t.compressedTexSubImage2D(3553,Q,0,0,Ee.width,Ee.height,Me,Ee.data):t.compressedTexImage2D(3553,Q,Le,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?t.texSubImage2D(3553,Q,0,0,Ee.width,Ee.height,Me,Ae,Ee.data):t.texImage2D(3553,Q,Le,Ee.width,Ee.height,0,Me,Ae,Ee.data)}else if(g.isDataArrayTexture)ke?(Ye&&t.texStorage3D(35866,D,Le,O.width,O.height,O.depth),t.texSubImage3D(35866,0,0,0,0,O.width,O.height,O.depth,Me,Ae,O.data)):t.texImage3D(35866,0,Le,O.width,O.height,O.depth,0,Me,Ae,O.data);else if(g.isData3DTexture)ke?(Ye&&t.texStorage3D(32879,D,Le,O.width,O.height,O.depth),t.texSubImage3D(32879,0,0,0,0,O.width,O.height,O.depth,Me,Ae,O.data)):t.texImage3D(32879,0,Le,O.width,O.height,O.depth,0,Me,Ae,O.data);else if(g.isFramebufferTexture){if(Ye)if(ke)t.texStorage2D(3553,D,Le,O.width,O.height);else{let Q=O.width,ge=O.height;for(let Te=0;Te<D;Te++)t.texImage2D(3553,Te,Le,Q,ge,0,Me,Ae,null),Q>>=1,ge>>=1}}else if(Re.length>0&&Se){ke&&Ye&&t.texStorage2D(3553,D,Le,Re[0].width,Re[0].height);for(let Q=0,ge=Re.length;Q<ge;Q++)Ee=Re[Q],ke?t.texSubImage2D(3553,Q,0,0,Me,Ae,Ee):t.texImage2D(3553,Q,Le,Me,Ae,Ee);g.generateMipmaps=!1}else ke?(Ye&&t.texStorage2D(3553,D,Le,O.width,O.height),t.texSubImage2D(3553,0,0,0,Me,Ae,O)):t.texImage2D(3553,0,Le,Me,Ae,O);R(g,Se)&&z(Y),_e.__version=fe.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function de(M,g,I){if(g.image.length!==6)return;const Y=q(M,g),J=g.source;t.bindTexture(34067,M.__webglTexture,33984+I);const fe=i.get(J);if(J.version!==fe.__version||Y===!0){t.activeTexture(33984+I),n.pixelStorei(37440,g.flipY),n.pixelStorei(37441,g.premultiplyAlpha),n.pixelStorei(3317,g.unpackAlignment),n.pixelStorei(37443,0);const _e=g.isCompressedTexture||g.image[0].isCompressedTexture,C=g.image[0]&&g.image[0].isDataTexture,O=[];for(let Q=0;Q<6;Q++)!_e&&!C?O[Q]=x(g.image[Q],!1,!0,c):O[Q]=C?g.image[Q].image:g.image[Q],O[Q]=oe(g,O[Q]);const Se=O[0],Me=T(Se)||o,Ae=s.convert(g.format,g.encoding),Le=s.convert(g.type),Ee=b(g.internalFormat,Ae,Le,g.encoding),Re=o&&g.isVideoTexture!==!0,ke=fe.__version===void 0||Y===!0;let Ye=P(g,Se,Me);X(34067,g,Me);let D;if(_e){Re&&ke&&t.texStorage2D(34067,Ye,Ee,Se.width,Se.height);for(let Q=0;Q<6;Q++){D=O[Q].mipmaps;for(let ge=0;ge<D.length;ge++){const Te=D[ge];g.format!==Kt?Ae!==null?Re?t.compressedTexSubImage2D(34069+Q,ge,0,0,Te.width,Te.height,Ae,Te.data):t.compressedTexImage2D(34069+Q,ge,Ee,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+Q,ge,0,0,Te.width,Te.height,Ae,Le,Te.data):t.texImage2D(34069+Q,ge,Ee,Te.width,Te.height,0,Ae,Le,Te.data)}}}else{D=g.mipmaps,Re&&ke&&(D.length>0&&Ye++,t.texStorage2D(34067,Ye,Ee,O[0].width,O[0].height));for(let Q=0;Q<6;Q++)if(C){Re?t.texSubImage2D(34069+Q,0,0,0,O[Q].width,O[Q].height,Ae,Le,O[Q].data):t.texImage2D(34069+Q,0,Ee,O[Q].width,O[Q].height,0,Ae,Le,O[Q].data);for(let ge=0;ge<D.length;ge++){const Ce=D[ge].image[Q].image;Re?t.texSubImage2D(34069+Q,ge+1,0,0,Ce.width,Ce.height,Ae,Le,Ce.data):t.texImage2D(34069+Q,ge+1,Ee,Ce.width,Ce.height,0,Ae,Le,Ce.data)}}else{Re?t.texSubImage2D(34069+Q,0,0,0,Ae,Le,O[Q]):t.texImage2D(34069+Q,0,Ee,Ae,Le,O[Q]);for(let ge=0;ge<D.length;ge++){const Te=D[ge];Re?t.texSubImage2D(34069+Q,ge+1,0,0,Ae,Le,Te.image[Q]):t.texImage2D(34069+Q,ge+1,Ee,Ae,Le,Te.image[Q])}}}R(g,Me)&&z(34067),fe.__version=J.version,g.onUpdate&&g.onUpdate(g)}M.__version=g.version}function be(M,g,I,Y,J){const fe=s.convert(I.format,I.encoding),_e=s.convert(I.type),C=b(I.internalFormat,fe,_e,I.encoding);i.get(g).__hasExternalTextures||(J===32879||J===35866?t.texImage3D(J,0,C,g.width,g.height,g.depth,0,fe,_e,null):t.texImage2D(J,0,C,g.width,g.height,0,fe,_e,null)),t.bindFramebuffer(36160,M),se(g)?h.framebufferTexture2DMultisampleEXT(36160,Y,J,i.get(I).__webglTexture,0,pe(g)):(J===3553||J>=34069&&J<=34074)&&n.framebufferTexture2D(36160,Y,J,i.get(I).__webglTexture,0),t.bindFramebuffer(36160,null)}function ve(M,g,I){if(n.bindRenderbuffer(36161,M),g.depthBuffer&&!g.stencilBuffer){let Y=33189;if(I||se(g)){const J=g.depthTexture;J&&J.isDepthTexture&&(J.type===si?Y=36012:J.type===ri&&(Y=33190));const fe=pe(g);se(g)?h.renderbufferStorageMultisampleEXT(36161,fe,Y,g.width,g.height):n.renderbufferStorageMultisample(36161,fe,Y,g.width,g.height)}else n.renderbufferStorage(36161,Y,g.width,g.height);n.framebufferRenderbuffer(36160,36096,36161,M)}else if(g.depthBuffer&&g.stencilBuffer){const Y=pe(g);I&&se(g)===!1?n.renderbufferStorageMultisample(36161,Y,35056,g.width,g.height):se(g)?h.renderbufferStorageMultisampleEXT(36161,Y,35056,g.width,g.height):n.renderbufferStorage(36161,34041,g.width,g.height),n.framebufferRenderbuffer(36160,33306,36161,M)}else{const Y=g.isWebGLMultipleRenderTargets===!0?g.texture:[g.texture];for(let J=0;J<Y.length;J++){const fe=Y[J],_e=s.convert(fe.format,fe.encoding),C=s.convert(fe.type),O=b(fe.internalFormat,_e,C,fe.encoding),Se=pe(g);I&&se(g)===!1?n.renderbufferStorageMultisample(36161,Se,O,g.width,g.height):se(g)?h.renderbufferStorageMultisampleEXT(36161,Se,O,g.width,g.height):n.renderbufferStorage(36161,O,g.width,g.height)}}n.bindRenderbuffer(36161,null)}function y(M,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(g.depthTexture).__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),he(g.depthTexture,0);const Y=i.get(g.depthTexture).__webglTexture,J=pe(g);if(g.depthTexture.format===ci)se(g)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,Y,0,J):n.framebufferTexture2D(36160,36096,3553,Y,0);else if(g.depthTexture.format===Ki)se(g)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,Y,0,J):n.framebufferTexture2D(36160,33306,3553,Y,0);else throw new Error("Unknown depthTexture format")}function L(M){const g=i.get(M),I=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!g.__autoAllocateDepthBuffer){if(I)throw new Error("target.depthTexture not supported in Cube render targets");y(g.__webglFramebuffer,M)}else if(I){g.__webglDepthbuffer=[];for(let Y=0;Y<6;Y++)t.bindFramebuffer(36160,g.__webglFramebuffer[Y]),g.__webglDepthbuffer[Y]=n.createRenderbuffer(),ve(g.__webglDepthbuffer[Y],M,!1)}else t.bindFramebuffer(36160,g.__webglFramebuffer),g.__webglDepthbuffer=n.createRenderbuffer(),ve(g.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function B(M,g,I){const Y=i.get(M);g!==void 0&&be(Y.__webglFramebuffer,M,M.texture,36064,3553),I!==void 0&&L(M)}function j(M){const g=M.texture,I=i.get(M),Y=i.get(g);M.addEventListener("dispose",ce),M.isWebGLMultipleRenderTargets!==!0&&(Y.__webglTexture===void 0&&(Y.__webglTexture=n.createTexture()),Y.__version=g.version,a.memory.textures++);const J=M.isWebGLCubeRenderTarget===!0,fe=M.isWebGLMultipleRenderTargets===!0,_e=T(M)||o;if(J){I.__webglFramebuffer=[];for(let C=0;C<6;C++)I.__webglFramebuffer[C]=n.createFramebuffer()}else{if(I.__webglFramebuffer=n.createFramebuffer(),fe)if(r.drawBuffers){const C=M.texture;for(let O=0,Se=C.length;O<Se;O++){const Me=i.get(C[O]);Me.__webglTexture===void 0&&(Me.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&M.samples>0&&se(M)===!1){const C=fe?g:[g];I.__webglMultisampledFramebuffer=n.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,I.__webglMultisampledFramebuffer);for(let O=0;O<C.length;O++){const Se=C[O];I.__webglColorRenderbuffer[O]=n.createRenderbuffer(),n.bindRenderbuffer(36161,I.__webglColorRenderbuffer[O]);const Me=s.convert(Se.format,Se.encoding),Ae=s.convert(Se.type),Le=b(Se.internalFormat,Me,Ae,Se.encoding,M.isXRRenderTarget===!0),Ee=pe(M);n.renderbufferStorageMultisample(36161,Ee,Le,M.width,M.height),n.framebufferRenderbuffer(36160,36064+O,36161,I.__webglColorRenderbuffer[O])}n.bindRenderbuffer(36161,null),M.depthBuffer&&(I.__webglDepthRenderbuffer=n.createRenderbuffer(),ve(I.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(J){t.bindTexture(34067,Y.__webglTexture),X(34067,g,_e);for(let C=0;C<6;C++)be(I.__webglFramebuffer[C],M,g,36064,34069+C);R(g,_e)&&z(34067),t.unbindTexture()}else if(fe){const C=M.texture;for(let O=0,Se=C.length;O<Se;O++){const Me=C[O],Ae=i.get(Me);t.bindTexture(3553,Ae.__webglTexture),X(3553,Me,_e),be(I.__webglFramebuffer,M,Me,36064+O,3553),R(Me,_e)&&z(3553)}t.unbindTexture()}else{let C=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(o?C=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(C,Y.__webglTexture),X(C,g,_e),be(I.__webglFramebuffer,M,g,36064,C),R(g,_e)&&z(C),t.unbindTexture()}M.depthBuffer&&L(M)}function Z(M){const g=T(M)||o,I=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Y=0,J=I.length;Y<J;Y++){const fe=I[Y];if(R(fe,g)){const _e=M.isWebGLCubeRenderTarget?34067:3553,C=i.get(fe).__webglTexture;t.bindTexture(_e,C),z(_e),t.unbindTexture()}}}function le(M){if(o&&M.samples>0&&se(M)===!1){const g=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],I=M.width,Y=M.height;let J=16384;const fe=[],_e=M.stencilBuffer?33306:36096,C=i.get(M),O=M.isWebGLMultipleRenderTargets===!0;if(O)for(let Se=0;Se<g.length;Se++)t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,null),t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,null,0);t.bindFramebuffer(36008,C.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,C.__webglFramebuffer);for(let Se=0;Se<g.length;Se++){fe.push(36064+Se),M.depthBuffer&&fe.push(_e);const Me=C.__ignoreDepthValues!==void 0?C.__ignoreDepthValues:!1;if(Me===!1&&(M.depthBuffer&&(J|=256),M.stencilBuffer&&(J|=1024)),O&&n.framebufferRenderbuffer(36008,36064,36161,C.__webglColorRenderbuffer[Se]),Me===!0&&(n.invalidateFramebuffer(36008,[_e]),n.invalidateFramebuffer(36009,[_e])),O){const Ae=i.get(g[Se]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Ae,0)}n.blitFramebuffer(0,0,I,Y,0,0,I,Y,J,9728),m&&n.invalidateFramebuffer(36008,fe)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),O)for(let Se=0;Se<g.length;Se++){t.bindFramebuffer(36160,C.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+Se,36161,C.__webglColorRenderbuffer[Se]);const Me=i.get(g[Se]).__webglTexture;t.bindFramebuffer(36160,C.__webglFramebuffer),n.framebufferTexture2D(36009,36064+Se,3553,Me,0)}t.bindFramebuffer(36009,C.__webglMultisampledFramebuffer)}}function pe(M){return Math.min(f,M.samples)}function se(M){const g=i.get(M);return o&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function me(M){const g=a.render.frame;_.get(M)!==g&&(_.set(M,g),M.update())}function oe(M,g){const I=M.encoding,Y=M.format,J=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===Xo||I!==fi&&(I===$e?o===!1?e.has("EXT_sRGB")===!0&&Y===Kt?(M.format=Xo,M.minFilter=Bt,M.generateMipmaps=!1):g=Qu.sRGBToLinear(g):(Y!==Kt||J!==ui)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",I)),g}this.allocateTextureUnit=W,this.resetTextureUnits=ie,this.setTexture2D=he,this.setTexture2DArray=we,this.setTexture3D=V,this.setTextureCube=ue,this.rebindTextures=B,this.setupRenderTarget=j,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=L,this.setupFrameBufferTexture=be,this.useMultisampledRTT=se}function Jv(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===ui)return 5121;if(s===Nm)return 32819;if(s===Um)return 32820;if(s===Im)return 5120;if(s===Om)return 5122;if(s===$u)return 5123;if(s===Fm)return 5124;if(s===ri)return 5125;if(s===si)return 5126;if(s===Cr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===zm)return 6406;if(s===Kt)return 6408;if(s===Bm)return 6409;if(s===km)return 6410;if(s===ci)return 6402;if(s===Ki)return 34041;if(s===Xo)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Gm)return 6403;if(s===Hm)return 36244;if(s===Vm)return 33319;if(s===Wm)return 33320;if(s===qm)return 36249;if(s===Ks||s===$s||s===Zs||s===Js)if(a===$e)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===Ks)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===$s)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===Ks)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===$s)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===Zs)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Js)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Tl||s===Al||s===Cl||s===Ll)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Tl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Al)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Cl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ll)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===jm)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Pl||s===Rl)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Pl)return a===$e?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Rl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Dl||s===Il||s===Ol||s===Fl||s===Nl||s===Ul||s===zl||s===Bl||s===kl||s===Gl||s===Hl||s===Vl||s===Wl||s===ql)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===Dl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===Il)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ol)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Fl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Nl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ul)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===zl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Bl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===kl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Gl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Hl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Vl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Wl)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===ql)return a===$e?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Qs)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Qs)return a===$e?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Xm||s===jl||s===Xl||s===Yl)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Qs)return o.COMPRESSED_RED_RGTC1_EXT;if(s===jl)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Xl)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Yl)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Bi?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class Qv extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class os extends _t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const eM={type:"move"};class To{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new os,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new os,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new os,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const d of e.hand.values()){const p=t.getJointPose(d,i),v=this._getHandJoint(c,d);p!==null&&(v.matrix.fromArray(p.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.jointRadius=p.radius),v.visible=p!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),m=.02,_=.005;c.inputState.pinching&&h>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(eM)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new os;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class tM extends Lt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:ci,u!==ci&&u!==Ki)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===ci&&(i=ri),i===void 0&&u===Ki&&(i=Bi),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1}}class nM extends pi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,m=null,_=null;const d=t.getContextAttributes();let p=null,v=null;const S=[],x=[],T=new Set,E=new Map,R=new kt;R.layers.enable(1),R.viewport=new ut;const z=new kt;z.layers.enable(2),z.viewport=new ut;const b=[R,z],P=new Qv;P.layers.enable(1),P.layers.enable(2);let F=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ue=S[V];return ue===void 0&&(ue=new To,S[V]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(V){let ue=S[V];return ue===void 0&&(ue=new To,S[V]=ue),ue.getGripSpace()},this.getHand=function(V){let ue=S[V];return ue===void 0&&(ue=new To,S[V]=ue),ue.getHandSpace()};function ce(V){const ue=x.indexOf(V.inputSource);if(ue===-1)return;const xe=S[ue];xe!==void 0&&xe.dispatchEvent({type:V.type,data:V.inputSource})}function H(){r.removeEventListener("select",ce),r.removeEventListener("selectstart",ce),r.removeEventListener("selectend",ce),r.removeEventListener("squeeze",ce),r.removeEventListener("squeezestart",ce),r.removeEventListener("squeezeend",ce),r.removeEventListener("end",H),r.removeEventListener("inputsourceschange",N);for(let V=0;V<S.length;V++){const ue=x[V];ue!==null&&(x[V]=null,S[V].disconnect(ue))}F=null,ne=null,e.setRenderTarget(p),m=null,h=null,f=null,r=null,v=null,we.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return h!==null?h:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(p=e.getRenderTarget(),r.addEventListener("select",ce),r.addEventListener("selectstart",ce),r.addEventListener("selectend",ce),r.addEventListener("squeeze",ce),r.addEventListener("squeezestart",ce),r.addEventListener("squeezeend",ce),r.addEventListener("end",H),r.addEventListener("inputsourceschange",N),d.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ue={antialias:r.renderState.layers===void 0?d.antialias:!0,alpha:d.alpha,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,t,ue),r.updateRenderState({baseLayer:m}),v=new di(m.framebufferWidth,m.framebufferHeight,{format:Kt,type:ui,encoding:e.outputEncoding,stencilBuffer:d.stencil})}else{let ue=null,xe=null,A=null;d.depth&&(A=d.stencil?35056:33190,ue=d.stencil?Ki:ci,xe=d.stencil?Bi:ri);const X={colorFormat:32856,depthFormat:A,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(X),r.updateRenderState({layers:[h]}),v=new di(h.textureWidth,h.textureHeight,{format:Kt,type:ui,depthTexture:new tM(h.textureWidth,h.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,ue),stencilBuffer:d.stencil,encoding:e.outputEncoding,samples:d.antialias?4:0});const q=e.properties.get(v);q.__ignoreDepthValues=h.ignoreDepthValues}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),we.setContext(r),we.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function N(V){for(let ue=0;ue<V.removed.length;ue++){const xe=V.removed[ue],A=x.indexOf(xe);A>=0&&(x[A]=null,S[A].disconnect(xe))}for(let ue=0;ue<V.added.length;ue++){const xe=V.added[ue];let A=x.indexOf(xe);if(A===-1){for(let q=0;q<S.length;q++)if(q>=x.length){x.push(xe),A=q;break}else if(x[q]===null){x[q]=xe,A=q;break}if(A===-1)break}const X=S[A];X&&X.connect(xe)}}const K=new G,re=new G;function ie(V,ue,xe){K.setFromMatrixPosition(ue.matrixWorld),re.setFromMatrixPosition(xe.matrixWorld);const A=K.distanceTo(re),X=ue.projectionMatrix.elements,q=xe.projectionMatrix.elements,te=X[14]/(X[10]-1),de=X[14]/(X[10]+1),be=(X[9]+1)/X[5],ve=(X[9]-1)/X[5],y=(X[8]-1)/X[0],L=(q[8]+1)/q[0],B=te*y,j=te*L,Z=A/(-y+L),le=Z*-y;ue.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(le),V.translateZ(Z),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const pe=te+Z,se=de+Z,me=B-le,oe=j+(A-le),M=be*de/se*pe,g=ve*de/se*pe;V.projectionMatrix.makePerspective(me,oe,M,g,pe,se)}function W(V,ue){ue===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ue.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;P.near=z.near=R.near=V.near,P.far=z.far=R.far=V.far,(F!==P.near||ne!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),F=P.near,ne=P.far);const ue=V.parent,xe=P.cameras;W(P,ue);for(let X=0;X<xe.length;X++)W(xe[X],ue);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),V.matrix.copy(P.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale);const A=V.children;for(let X=0,q=A.length;X<q;X++)A[X].updateMatrixWorld(!0);xe.length===2?ie(P,R,z):P.projectionMatrix.copy(R.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&m===null))return l},this.setFoveation=function(V){l=V,h!==null&&(h.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)},this.getPlanes=function(){return T};let ae=null;function he(V,ue){if(u=ue.getViewerPose(c||a),_=ue,u!==null){const xe=u.views;m!==null&&(e.setRenderTargetFramebuffer(v,m.framebuffer),e.setRenderTarget(v));let A=!1;xe.length!==P.cameras.length&&(P.cameras.length=0,A=!0);for(let X=0;X<xe.length;X++){const q=xe[X];let te=null;if(m!==null)te=m.getViewport(q);else{const be=f.getViewSubImage(h,q);te=be.viewport,X===0&&(e.setRenderTargetTextures(v,be.colorTexture,h.ignoreDepthValues?void 0:be.depthStencilTexture),e.setRenderTarget(v))}let de=b[X];de===void 0&&(de=new kt,de.layers.enable(X),de.viewport=new ut,b[X]=de),de.matrix.fromArray(q.transform.matrix),de.projectionMatrix.fromArray(q.projectionMatrix),de.viewport.set(te.x,te.y,te.width,te.height),X===0&&P.matrix.copy(de.matrix),A===!0&&P.cameras.push(de)}}for(let xe=0;xe<S.length;xe++){const A=x[xe],X=S[xe];A!==null&&X!==void 0&&X.update(A,ue,c||a)}if(ae&&ae(V,ue),ue.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:ue.detectedPlanes});let xe=null;for(const A of T)ue.detectedPlanes.has(A)||(xe===null&&(xe=[]),xe.push(A));if(xe!==null)for(const A of xe)T.delete(A),E.delete(A),i.dispatchEvent({type:"planeremoved",data:A});for(const A of ue.detectedPlanes)if(!T.has(A))T.add(A),E.set(A,ue.lastChangedTime),i.dispatchEvent({type:"planeadded",data:A});else{const X=E.get(A);A.lastChangedTime>X&&(E.set(A,A.lastChangedTime),i.dispatchEvent({type:"planechanged",data:A}))}}_=null}const we=new hf;we.setAnimationLoop(he),this.setAnimationLoop=function(V){ae=V},this.dispose=function(){}}}function iM(n,e){function t(d,p){p.color.getRGB(d.fogColor.value,lf(n)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function i(d,p,v,S,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),u(d,p)):p.isMeshPhongMaterial?(r(d,p),c(d,p)):p.isMeshStandardMaterial?(r(d,p),f(d,p),p.isMeshPhysicalMaterial&&h(d,p,x)):p.isMeshMatcapMaterial?(r(d,p),m(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(s(d,p),p.isLineDashedMaterial&&a(d,p)):p.isPointsMaterial?o(d,p,v,S):p.isSpriteMaterial?l(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.bumpMap&&(d.bumpMap.value=p.bumpMap,d.bumpScale.value=p.bumpScale,p.side===Nt&&(d.bumpScale.value*=-1)),p.displacementMap&&(d.displacementMap.value=p.displacementMap,d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap),p.normalMap&&(d.normalMap.value=p.normalMap,d.normalScale.value.copy(p.normalScale),p.side===Nt&&d.normalScale.value.negate()),p.specularMap&&(d.specularMap.value=p.specularMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const v=e.get(p).envMap;if(v&&(d.envMap.value=v,d.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap){d.lightMap.value=p.lightMap;const T=n.useLegacyLights===!0?Math.PI:1;d.lightMapIntensity.value=p.lightMapIntensity*T}p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity);let S;p.map?S=p.map:p.specularMap?S=p.specularMap:p.displacementMap?S=p.displacementMap:p.normalMap?S=p.normalMap:p.bumpMap?S=p.bumpMap:p.roughnessMap?S=p.roughnessMap:p.metalnessMap?S=p.metalnessMap:p.alphaMap?S=p.alphaMap:p.emissiveMap?S=p.emissiveMap:p.clearcoatMap?S=p.clearcoatMap:p.clearcoatNormalMap?S=p.clearcoatNormalMap:p.clearcoatRoughnessMap?S=p.clearcoatRoughnessMap:p.iridescenceMap?S=p.iridescenceMap:p.iridescenceThicknessMap?S=p.iridescenceThicknessMap:p.specularIntensityMap?S=p.specularIntensityMap:p.specularColorMap?S=p.specularColorMap:p.transmissionMap?S=p.transmissionMap:p.thicknessMap?S=p.thicknessMap:p.sheenColorMap?S=p.sheenColorMap:p.sheenRoughnessMap&&(S=p.sheenRoughnessMap),S!==void 0&&(S.isWebGLRenderTarget&&(S=S.texture),S.matrixAutoUpdate===!0&&S.updateMatrix(),d.uvTransform.value.copy(S.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uv2Transform.value.copy(x.matrix))}function s(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity}function a(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function o(d,p,v,S){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*v,d.scale.value=S*.5,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),d.uvTransform.value.copy(x.matrix))}function l(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map),p.alphaMap&&(d.alphaMap.value=p.alphaMap),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);let v;p.map?v=p.map:p.alphaMap&&(v=p.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),d.uvTransform.value.copy(v.matrix))}function c(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function u(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function f(d,p){d.roughness.value=p.roughness,d.metalness.value=p.metalness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function h(d,p,v){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),d.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Nt&&d.clearcoatNormalScale.value.negate())),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=v.texture,d.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap)}function m(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){d.referencePosition.value.copy(p.referencePosition),d.nearDistance.value=p.nearDistance,d.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function rM(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(S,x){const T=x.program;i.uniformBlockBinding(S,T)}function c(S,x){let T=r[S.id];T===void 0&&(_(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",p));const E=x.program;i.updateUBOMapping(S,E);const R=e.render.frame;s[S.id]!==R&&(h(S),s[S.id]=R)}function u(S){const x=f();S.__bindingPointIndex=x;const T=n.createBuffer(),E=S.__size,R=S.usage;return n.bindBuffer(35345,T),n.bufferData(35345,E,R),n.bindBuffer(35345,null),n.bindBufferBase(35345,x,T),T}function f(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const x=r[S.id],T=S.uniforms,E=S.__cache;n.bindBuffer(35345,x);for(let R=0,z=T.length;R<z;R++){const b=T[R];if(m(b,R,E)===!0){const P=b.__offset,F=Array.isArray(b.value)?b.value:[b.value];let ne=0;for(let ce=0;ce<F.length;ce++){const H=F[ce],N=d(H);typeof H=="number"?(b.__data[0]=H,n.bufferSubData(35345,P+ne,b.__data)):H.isMatrix3?(b.__data[0]=H.elements[0],b.__data[1]=H.elements[1],b.__data[2]=H.elements[2],b.__data[3]=H.elements[0],b.__data[4]=H.elements[3],b.__data[5]=H.elements[4],b.__data[6]=H.elements[5],b.__data[7]=H.elements[0],b.__data[8]=H.elements[6],b.__data[9]=H.elements[7],b.__data[10]=H.elements[8],b.__data[11]=H.elements[0]):(H.toArray(b.__data,ne),ne+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,P,b.__data)}}n.bindBuffer(35345,null)}function m(S,x,T){const E=S.value;if(T[x]===void 0){if(typeof E=="number")T[x]=E;else{const R=Array.isArray(E)?E:[E],z=[];for(let b=0;b<R.length;b++)z.push(R[b].clone());T[x]=z}return!0}else if(typeof E=="number"){if(T[x]!==E)return T[x]=E,!0}else{const R=Array.isArray(T[x])?T[x]:[T[x]],z=Array.isArray(E)?E:[E];for(let b=0;b<R.length;b++){const P=R[b];if(P.equals(z[b])===!1)return P.copy(z[b]),!0}}return!1}function _(S){const x=S.uniforms;let T=0;const E=16;let R=0;for(let z=0,b=x.length;z<b;z++){const P=x[z],F={boundary:0,storage:0},ne=Array.isArray(P.value)?P.value:[P.value];for(let ce=0,H=ne.length;ce<H;ce++){const N=ne[ce],K=d(N);F.boundary+=K.boundary,F.storage+=K.storage}if(P.__data=new Float32Array(F.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=T,z>0){R=T%E;const ce=E-R;R!==0&&ce-F.boundary<0&&(T+=E-R,P.__offset=T)}T+=F.storage}return R=T%E,R>0&&(T+=E-R),S.__size=T,S.__cache={},this}function d(S){const x={boundary:0,storage:0};return typeof S=="number"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const T=a.indexOf(x.__bindingPointIndex);a.splice(T,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function v(){for(const S in r)n.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:v}}function sM(){const n=Pr("canvas");return n.style.display="block",n}function Ea(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:sM(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const m=[],_=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=fi,this.useLegacyLights=!0,this.toneMapping=wn,this.toneMappingExposure=1;const d=this;let p=!1,v=0,S=0,x=null,T=-1,E=null;const R=new ut,z=new ut;let b=null,P=e.width,F=e.height,ne=1,ce=null,H=null;const N=new ut(0,0,P,F),K=new ut(0,0,P,F);let re=!1;const ie=new ff;let W=!1,ae=!1,he=null;const we=new ft,V=new G,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function xe(){return x===null?ne:1}let A=t;function X(w,k){for(let $=0;$<w.length;$++){const U=w[$],ee=e.getContext(U,k);if(ee!==null)return ee}return null}try{const w={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ma}`),e.addEventListener("webglcontextlost",Ae,!1),e.addEventListener("webglcontextrestored",Le,!1),e.addEventListener("webglcontextcreationerror",Ee,!1),A===null){const k=["webgl2","webgl","experimental-webgl"];if(d.isWebGL1Renderer===!0&&k.shift(),A=X(k,w),A===null)throw X(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}A.getShaderPrecisionFormat===void 0&&(A.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let q,te,de,be,ve,y,L,B,j,Z,le,pe,se,me,oe,M,g,I,Y,J,fe,_e,C,O;function Se(){q=new gx(A),te=new cx(A,q,n),q.init(te),_e=new Jv(A,q,te),de=new $v(A,q,te),be=new vx,ve=new Nv,y=new Zv(A,q,de,ve,te,_e,be),L=new fx(d),B=new mx(d),j=new Ag(A,te),C=new ax(A,q,j,te),Z=new _x(A,j,be,C),le=new Sx(A,Z,j,be),Y=new bx(A,te,y),M=new ux(ve),pe=new Fv(d,L,B,q,te,C,M),se=new iM(d,ve),me=new zv,oe=new Wv(q,te),I=new ox(d,L,B,de,le,u,a),g=new Kv(d,le,te),O=new rM(A,be,te,de),J=new lx(A,q,be,te),fe=new xx(A,q,be,te),be.programs=pe.programs,d.capabilities=te,d.extensions=q,d.properties=ve,d.renderLists=me,d.shadowMap=g,d.state=de,d.info=be}Se();const Me=new nM(d,A);this.xr=Me,this.getContext=function(){return A},this.getContextAttributes=function(){return A.getContextAttributes()},this.forceContextLoss=function(){const w=q.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=q.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ne},this.setPixelRatio=function(w){w!==void 0&&(ne=w,this.setSize(P,F,!1))},this.getSize=function(w){return w.set(P,F)},this.setSize=function(w,k,$=!0){if(Me.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=w,F=k,e.width=Math.floor(w*ne),e.height=Math.floor(k*ne),$===!0&&(e.style.width=w+"px",e.style.height=k+"px"),this.setViewport(0,0,w,k)},this.getDrawingBufferSize=function(w){return w.set(P*ne,F*ne).floor()},this.setDrawingBufferSize=function(w,k,$){P=w,F=k,ne=$,e.width=Math.floor(w*$),e.height=Math.floor(k*$),this.setViewport(0,0,w,k)},this.getCurrentViewport=function(w){return w.copy(R)},this.getViewport=function(w){return w.copy(N)},this.setViewport=function(w,k,$,U){w.isVector4?N.set(w.x,w.y,w.z,w.w):N.set(w,k,$,U),de.viewport(R.copy(N).multiplyScalar(ne).floor())},this.getScissor=function(w){return w.copy(K)},this.setScissor=function(w,k,$,U){w.isVector4?K.set(w.x,w.y,w.z,w.w):K.set(w,k,$,U),de.scissor(z.copy(K).multiplyScalar(ne).floor())},this.getScissorTest=function(){return re},this.setScissorTest=function(w){de.setScissorTest(re=w)},this.setOpaqueSort=function(w){ce=w},this.setTransparentSort=function(w){H=w},this.getClearColor=function(w){return w.copy(I.getClearColor())},this.setClearColor=function(){I.setClearColor.apply(I,arguments)},this.getClearAlpha=function(){return I.getClearAlpha()},this.setClearAlpha=function(){I.setClearAlpha.apply(I,arguments)},this.clear=function(w=!0,k=!0,$=!0){let U=0;w&&(U|=16384),k&&(U|=256),$&&(U|=1024),A.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ae,!1),e.removeEventListener("webglcontextrestored",Le,!1),e.removeEventListener("webglcontextcreationerror",Ee,!1),me.dispose(),oe.dispose(),ve.dispose(),L.dispose(),B.dispose(),le.dispose(),C.dispose(),O.dispose(),pe.dispose(),Me.dispose(),Me.removeEventListener("sessionstart",ge),Me.removeEventListener("sessionend",Te),he&&(he.dispose(),he=null),Ce.stop()};function Ae(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const w=be.autoReset,k=g.enabled,$=g.autoUpdate,U=g.needsUpdate,ee=g.type;Se(),be.autoReset=w,g.enabled=k,g.autoUpdate=$,g.needsUpdate=U,g.type=ee}function Ee(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Re(w){const k=w.target;k.removeEventListener("dispose",Re),ke(k)}function ke(w){Ye(w),ve.remove(w)}function Ye(w){const k=ve.get(w).programs;k!==void 0&&(k.forEach(function($){pe.releaseProgram($)}),w.isShaderMaterial&&pe.releaseShaderCache(w))}this.renderBufferDirect=function(w,k,$,U,ee,Pe){k===null&&(k=ue);const De=ee.isMesh&&ee.matrixWorld.determinant()<0,Ne=vf(w,k,$,U,ee);de.setMaterial(U,De);let ze=$.index,qe=1;U.wireframe===!0&&(ze=Z.getWireframeAttribute($),qe=2);const Ge=$.drawRange,He=$.attributes.position;let tt=Ge.start*qe,Rt=(Ge.start+Ge.count)*qe;Pe!==null&&(tt=Math.max(tt,Pe.start*qe),Rt=Math.min(Rt,(Pe.start+Pe.count)*qe)),ze!==null?(tt=Math.max(tt,0),Rt=Math.min(Rt,ze.count)):He!=null&&(tt=Math.max(tt,0),Rt=Math.min(Rt,He.count));const dn=Rt-tt;if(dn<0||dn===1/0)return;C.setup(ee,U,Ne,$,ze);let Wn,nt=J;if(ze!==null&&(Wn=j.get(ze),nt=fe,nt.setIndex(Wn)),ee.isMesh)U.wireframe===!0?(de.setLineWidth(U.wireframeLinewidth*xe()),nt.setMode(1)):nt.setMode(4);else if(ee.isLine){let Ve=U.linewidth;Ve===void 0&&(Ve=1),de.setLineWidth(Ve*xe()),ee.isLineSegments?nt.setMode(1):ee.isLineLoop?nt.setMode(2):nt.setMode(3)}else ee.isPoints?nt.setMode(0):ee.isSprite&&nt.setMode(4);if(ee.isInstancedMesh)nt.renderInstances(tt,dn,ee.count);else if($.isInstancedBufferGeometry){const Ve=$._maxInstanceCount!==void 0?$._maxInstanceCount:1/0,Os=Math.min($.instanceCount,Ve);nt.renderInstances(tt,dn,Os)}else nt.render(tt,dn)},this.compile=function(w,k){function $(U,ee,Pe){U.transparent===!0&&U.side===Fn&&U.forceSinglePass===!1?(U.side=Nt,U.needsUpdate=!0,Ut(U,ee,Pe),U.side=Gn,U.needsUpdate=!0,Ut(U,ee,Pe),U.side=Fn):Ut(U,ee,Pe)}h=oe.get(w),h.init(),_.push(h),w.traverseVisible(function(U){U.isLight&&U.layers.test(k.layers)&&(h.pushLight(U),U.castShadow&&h.pushShadow(U))}),h.setupLights(d.useLegacyLights),w.traverse(function(U){const ee=U.material;if(ee)if(Array.isArray(ee))for(let Pe=0;Pe<ee.length;Pe++){const De=ee[Pe];$(De,w,U)}else $(ee,w,U)}),_.pop(),h=null};let D=null;function Q(w){D&&D(w)}function ge(){Ce.stop()}function Te(){Ce.start()}const Ce=new hf;Ce.setAnimationLoop(Q),typeof self<"u"&&Ce.setContext(self),this.setAnimationLoop=function(w){D=w,Me.setAnimationLoop(w),w===null?Ce.stop():Ce.start()},Me.addEventListener("sessionstart",ge),Me.addEventListener("sessionend",Te),this.render=function(w,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Me.enabled===!0&&Me.isPresenting===!0&&(Me.cameraAutoUpdate===!0&&Me.updateCamera(k),k=Me.getCamera()),w.isScene===!0&&w.onBeforeRender(d,w,k,x),h=oe.get(w,_.length),h.init(),_.push(h),we.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),ie.setFromProjectionMatrix(we),ae=this.localClippingEnabled,W=M.init(this.clippingPlanes,ae),f=me.get(w,m.length),f.init(),m.push(f),Ke(w,k,0,d.sortObjects),f.finish(),d.sortObjects===!0&&f.sort(ce,H),W===!0&&M.beginShadows();const $=h.state.shadowsArray;if(g.render($,w,k),W===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),I.render(f,w),h.setupLights(d.useLegacyLights),k.isArrayCamera){const U=k.cameras;for(let ee=0,Pe=U.length;ee<Pe;ee++){const De=U[ee];at(f,w,De,De.viewport)}}else at(f,w,k);x!==null&&(y.updateMultisampleRenderTarget(x),y.updateRenderTargetMipmap(x)),w.isScene===!0&&w.onAfterRender(d,w,k),C.resetDefaultState(),T=-1,E=null,_.pop(),_.length>0?h=_[_.length-1]:h=null,m.pop(),m.length>0?f=m[m.length-1]:f=null};function Ke(w,k,$,U){if(w.visible===!1)return;if(w.layers.test(k.layers)){if(w.isGroup)$=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(k);else if(w.isLight)h.pushLight(w),w.castShadow&&h.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||ie.intersectsSprite(w)){U&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const De=le.update(w),Ne=w.material;Ne.visible&&f.push(w,De,Ne,$,V.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(w.isSkinnedMesh&&w.skeleton.frame!==be.render.frame&&(w.skeleton.update(),w.skeleton.frame=be.render.frame),!w.frustumCulled||ie.intersectsObject(w))){U&&V.setFromMatrixPosition(w.matrixWorld).applyMatrix4(we);const De=le.update(w),Ne=w.material;if(Array.isArray(Ne)){const ze=De.groups;for(let qe=0,Ge=ze.length;qe<Ge;qe++){const He=ze[qe],tt=Ne[He.materialIndex];tt&&tt.visible&&f.push(w,De,tt,$,V.z,He)}}else Ne.visible&&f.push(w,De,Ne,$,V.z,null)}}const Pe=w.children;for(let De=0,Ne=Pe.length;De<Ne;De++)Ke(Pe[De],k,$,U)}function at(w,k,$,U){const ee=w.opaque,Pe=w.transmissive,De=w.transparent;h.setupLightsView($),W===!0&&M.setGlobalState(d.clippingPlanes,$),Pe.length>0&&xt(ee,k,$),U&&de.viewport(R.copy(U)),ee.length>0&&tn(ee,k,$),Pe.length>0&&tn(Pe,k,$),De.length>0&&tn(De,k,$),de.buffers.depth.setTest(!0),de.buffers.depth.setMask(!0),de.buffers.color.setMask(!0),de.setPolygonOffset(!1)}function xt(w,k,$){const U=te.isWebGL2;he===null&&(he=new di(1024,1024,{generateMipmaps:!0,type:q.has("EXT_color_buffer_half_float")?Cr:ui,minFilter:Ar,samples:U&&s===!0?4:0}));const ee=d.getRenderTarget();d.setRenderTarget(he),d.clear();const Pe=d.toneMapping;d.toneMapping=wn,tn(w,k,$),d.toneMapping=Pe,y.updateMultisampleRenderTarget(he),y.updateRenderTargetMipmap(he),d.setRenderTarget(ee)}function tn(w,k,$){const U=k.isScene===!0?k.overrideMaterial:null;for(let ee=0,Pe=w.length;ee<Pe;ee++){const De=w[ee],Ne=De.object,ze=De.geometry,qe=U===null?De.material:U,Ge=De.group;Ne.layers.test($.layers)&&Qe(Ne,k,$,ze,qe,Ge)}}function Qe(w,k,$,U,ee,Pe){w.onBeforeRender(d,k,$,U,ee,Pe),w.modelViewMatrix.multiplyMatrices($.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ee.onBeforeRender(d,k,$,U,w,Pe),ee.transparent===!0&&ee.side===Fn&&ee.forceSinglePass===!1?(ee.side=Nt,ee.needsUpdate=!0,d.renderBufferDirect($,k,U,ee,w,Pe),ee.side=Gn,ee.needsUpdate=!0,d.renderBufferDirect($,k,U,ee,w,Pe),ee.side=Fn):d.renderBufferDirect($,k,U,ee,w,Pe),w.onAfterRender(d,k,$,U,ee,Pe)}function Ut(w,k,$){k.isScene!==!0&&(k=ue);const U=ve.get(w),ee=h.state.lights,Pe=h.state.shadowsArray,De=ee.state.version,Ne=pe.getParameters(w,ee.state,Pe,k,$),ze=pe.getProgramCacheKey(Ne);let qe=U.programs;U.environment=w.isMeshStandardMaterial?k.environment:null,U.fog=k.fog,U.envMap=(w.isMeshStandardMaterial?B:L).get(w.envMap||U.environment),qe===void 0&&(w.addEventListener("dispose",Re),qe=new Map,U.programs=qe);let Ge=qe.get(ze);if(Ge!==void 0){if(U.currentProgram===Ge&&U.lightsStateVersion===De)return nn(w,Ne),Ge}else Ne.uniforms=pe.getUniforms(w),w.onBuild($,Ne,d),w.onBeforeCompile(Ne,d),Ge=pe.acquireProgram(Ne,ze),qe.set(ze,Ge),U.uniforms=Ne.uniforms;const He=U.uniforms;(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(He.clippingPlanes=M.uniform),nn(w,Ne),U.needsLights=yf(w),U.lightsStateVersion=De,U.needsLights&&(He.ambientLightColor.value=ee.state.ambient,He.lightProbe.value=ee.state.probe,He.directionalLights.value=ee.state.directional,He.directionalLightShadows.value=ee.state.directionalShadow,He.spotLights.value=ee.state.spot,He.spotLightShadows.value=ee.state.spotShadow,He.rectAreaLights.value=ee.state.rectArea,He.ltc_1.value=ee.state.rectAreaLTC1,He.ltc_2.value=ee.state.rectAreaLTC2,He.pointLights.value=ee.state.point,He.pointLightShadows.value=ee.state.pointShadow,He.hemisphereLights.value=ee.state.hemi,He.directionalShadowMap.value=ee.state.directionalShadowMap,He.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,He.spotShadowMap.value=ee.state.spotShadowMap,He.spotLightMatrix.value=ee.state.spotLightMatrix,He.spotLightMap.value=ee.state.spotLightMap,He.pointShadowMap.value=ee.state.pointShadowMap,He.pointShadowMatrix.value=ee.state.pointShadowMatrix);const tt=Ge.getUniforms(),Rt=hs.seqWithValue(tt.seq,He);return U.currentProgram=Ge,U.uniformsList=Rt,Ge}function nn(w,k){const $=ve.get(w);$.outputEncoding=k.outputEncoding,$.instancing=k.instancing,$.skinning=k.skinning,$.morphTargets=k.morphTargets,$.morphNormals=k.morphNormals,$.morphColors=k.morphColors,$.morphTargetsCount=k.morphTargetsCount,$.numClippingPlanes=k.numClippingPlanes,$.numIntersection=k.numClipIntersection,$.vertexAlphas=k.vertexAlphas,$.vertexTangents=k.vertexTangents,$.toneMapping=k.toneMapping}function vf(w,k,$,U,ee){k.isScene!==!0&&(k=ue),y.resetTextureUnits();const Pe=k.fog,De=U.isMeshStandardMaterial?k.environment:null,Ne=x===null?d.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:fi,ze=(U.isMeshStandardMaterial?B:L).get(U.envMap||De),qe=U.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,Ge=!!U.normalMap&&!!$.attributes.tangent,He=!!$.morphAttributes.position,tt=!!$.morphAttributes.normal,Rt=!!$.morphAttributes.color,dn=U.toneMapped?d.toneMapping:wn,Wn=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,nt=Wn!==void 0?Wn.length:0,Ve=ve.get(U),Os=h.state.lights;if(W===!0&&(ae===!0||w!==E)){const Dt=w===E&&U.id===T;M.setState(U,w,Dt)}let lt=!1;U.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==Os.state.version||Ve.outputEncoding!==Ne||ee.isInstancedMesh&&Ve.instancing===!1||!ee.isInstancedMesh&&Ve.instancing===!0||ee.isSkinnedMesh&&Ve.skinning===!1||!ee.isSkinnedMesh&&Ve.skinning===!0||Ve.envMap!==ze||U.fog===!0&&Ve.fog!==Pe||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==M.numPlanes||Ve.numIntersection!==M.numIntersection)||Ve.vertexAlphas!==qe||Ve.vertexTangents!==Ge||Ve.morphTargets!==He||Ve.morphNormals!==tt||Ve.morphColors!==Rt||Ve.toneMapping!==dn||te.isWebGL2===!0&&Ve.morphTargetsCount!==nt)&&(lt=!0):(lt=!0,Ve.__version=U.version);let qn=Ve.currentProgram;lt===!0&&(qn=Ut(U,k,ee));let La=!1,tr=!1,Fs=!1;const vt=qn.getUniforms(),jn=Ve.uniforms;if(de.useProgram(qn.program)&&(La=!0,tr=!0,Fs=!0),U.id!==T&&(T=U.id,tr=!0),La||E!==w){if(vt.setValue(A,"projectionMatrix",w.projectionMatrix),te.logarithmicDepthBuffer&&vt.setValue(A,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),E!==w&&(E=w,tr=!0,Fs=!0),U.isShaderMaterial||U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshStandardMaterial||U.envMap){const Dt=vt.map.cameraPosition;Dt!==void 0&&Dt.setValue(A,V.setFromMatrixPosition(w.matrixWorld))}(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&vt.setValue(A,"isOrthographic",w.isOrthographicCamera===!0),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial||U.isShadowMaterial||ee.isSkinnedMesh)&&vt.setValue(A,"viewMatrix",w.matrixWorldInverse)}if(ee.isSkinnedMesh){vt.setOptional(A,ee,"bindMatrix"),vt.setOptional(A,ee,"bindMatrixInverse");const Dt=ee.skeleton;Dt&&(te.floatVertexTextures?(Dt.boneTexture===null&&Dt.computeBoneTexture(),vt.setValue(A,"boneTexture",Dt.boneTexture,y),vt.setValue(A,"boneTextureSize",Dt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ns=$.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0&&te.isWebGL2===!0)&&Y.update(ee,$,qn),(tr||Ve.receiveShadow!==ee.receiveShadow)&&(Ve.receiveShadow=ee.receiveShadow,vt.setValue(A,"receiveShadow",ee.receiveShadow)),U.isMeshGouraudMaterial&&U.envMap!==null&&(jn.envMap.value=ze,jn.flipEnvMap.value=ze.isCubeTexture&&ze.isRenderTargetTexture===!1?-1:1),tr&&(vt.setValue(A,"toneMappingExposure",d.toneMappingExposure),Ve.needsLights&&Mf(jn,Fs),Pe&&U.fog===!0&&se.refreshFogUniforms(jn,Pe),se.refreshMaterialUniforms(jn,U,ne,F,he),hs.upload(A,Ve.uniformsList,jn,y)),U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(hs.upload(A,Ve.uniformsList,jn,y),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&vt.setValue(A,"center",ee.center),vt.setValue(A,"modelViewMatrix",ee.modelViewMatrix),vt.setValue(A,"normalMatrix",ee.normalMatrix),vt.setValue(A,"modelMatrix",ee.matrixWorld),U.isShaderMaterial||U.isRawShaderMaterial){const Dt=U.uniformsGroups;for(let Us=0,bf=Dt.length;Us<bf;Us++)if(te.isWebGL2){const Pa=Dt[Us];O.update(Pa,qn),O.bind(Pa,qn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return qn}function Mf(w,k){w.ambientLightColor.needsUpdate=k,w.lightProbe.needsUpdate=k,w.directionalLights.needsUpdate=k,w.directionalLightShadows.needsUpdate=k,w.pointLights.needsUpdate=k,w.pointLightShadows.needsUpdate=k,w.spotLights.needsUpdate=k,w.spotLightShadows.needsUpdate=k,w.rectAreaLights.needsUpdate=k,w.hemisphereLights.needsUpdate=k}function yf(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return v},this.getActiveMipmapLevel=function(){return S},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(w,k,$){ve.get(w.texture).__webglTexture=k,ve.get(w.depthTexture).__webglTexture=$;const U=ve.get(w);U.__hasExternalTextures=!0,U.__hasExternalTextures&&(U.__autoAllocateDepthBuffer=$===void 0,U.__autoAllocateDepthBuffer||q.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),U.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(w,k){const $=ve.get(w);$.__webglFramebuffer=k,$.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(w,k=0,$=0){x=w,v=k,S=$;let U=!0,ee=null,Pe=!1,De=!1;if(w){const ze=ve.get(w);ze.__useDefaultFramebuffer!==void 0?(de.bindFramebuffer(36160,null),U=!1):ze.__webglFramebuffer===void 0?y.setupRenderTarget(w):ze.__hasExternalTextures&&y.rebindTextures(w,ve.get(w.texture).__webglTexture,ve.get(w.depthTexture).__webglTexture);const qe=w.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(De=!0);const Ge=ve.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(ee=Ge[k],Pe=!0):te.isWebGL2&&w.samples>0&&y.useMultisampledRTT(w)===!1?ee=ve.get(w).__webglMultisampledFramebuffer:ee=Ge,R.copy(w.viewport),z.copy(w.scissor),b=w.scissorTest}else R.copy(N).multiplyScalar(ne).floor(),z.copy(K).multiplyScalar(ne).floor(),b=re;if(de.bindFramebuffer(36160,ee)&&te.drawBuffers&&U&&de.drawBuffers(w,ee),de.viewport(R),de.scissor(z),de.setScissorTest(b),Pe){const ze=ve.get(w.texture);A.framebufferTexture2D(36160,36064,34069+k,ze.__webglTexture,$)}else if(De){const ze=ve.get(w.texture),qe=k||0;A.framebufferTextureLayer(36160,36064,ze.__webglTexture,$||0,qe)}T=-1},this.readRenderTargetPixels=function(w,k,$,U,ee,Pe,De){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=ve.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&De!==void 0&&(Ne=Ne[De]),Ne){de.bindFramebuffer(36160,Ne);try{const ze=w.texture,qe=ze.format,Ge=ze.type;if(qe!==Kt&&_e.convert(qe)!==A.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=Ge===Cr&&(q.has("EXT_color_buffer_half_float")||te.isWebGL2&&q.has("EXT_color_buffer_float"));if(Ge!==ui&&_e.convert(Ge)!==A.getParameter(35738)&&!(Ge===si&&(te.isWebGL2||q.has("OES_texture_float")||q.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=w.width-U&&$>=0&&$<=w.height-ee&&A.readPixels(k,$,U,ee,_e.convert(qe),_e.convert(Ge),Pe)}finally{const ze=x!==null?ve.get(x).__webglFramebuffer:null;de.bindFramebuffer(36160,ze)}}},this.copyFramebufferToTexture=function(w,k,$=0){const U=Math.pow(2,-$),ee=Math.floor(k.image.width*U),Pe=Math.floor(k.image.height*U);y.setTexture2D(k,0),A.copyTexSubImage2D(3553,$,0,0,w.x,w.y,ee,Pe),de.unbindTexture()},this.copyTextureToTexture=function(w,k,$,U=0){const ee=k.image.width,Pe=k.image.height,De=_e.convert($.format),Ne=_e.convert($.type);y.setTexture2D($,0),A.pixelStorei(37440,$.flipY),A.pixelStorei(37441,$.premultiplyAlpha),A.pixelStorei(3317,$.unpackAlignment),k.isDataTexture?A.texSubImage2D(3553,U,w.x,w.y,ee,Pe,De,Ne,k.image.data):k.isCompressedTexture?A.compressedTexSubImage2D(3553,U,w.x,w.y,k.mipmaps[0].width,k.mipmaps[0].height,De,k.mipmaps[0].data):A.texSubImage2D(3553,U,w.x,w.y,De,Ne,k.image),U===0&&$.generateMipmaps&&A.generateMipmap(3553),de.unbindTexture()},this.copyTextureToTexture3D=function(w,k,$,U,ee=0){if(d.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Pe=w.max.x-w.min.x+1,De=w.max.y-w.min.y+1,Ne=w.max.z-w.min.z+1,ze=_e.convert(U.format),qe=_e.convert(U.type);let Ge;if(U.isData3DTexture)y.setTexture3D(U,0),Ge=32879;else if(U.isDataArrayTexture)y.setTexture2DArray(U,0),Ge=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}A.pixelStorei(37440,U.flipY),A.pixelStorei(37441,U.premultiplyAlpha),A.pixelStorei(3317,U.unpackAlignment);const He=A.getParameter(3314),tt=A.getParameter(32878),Rt=A.getParameter(3316),dn=A.getParameter(3315),Wn=A.getParameter(32877),nt=$.isCompressedTexture?$.mipmaps[0]:$.image;A.pixelStorei(3314,nt.width),A.pixelStorei(32878,nt.height),A.pixelStorei(3316,w.min.x),A.pixelStorei(3315,w.min.y),A.pixelStorei(32877,w.min.z),$.isDataTexture||$.isData3DTexture?A.texSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,De,Ne,ze,qe,nt.data):$.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),A.compressedTexSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,De,Ne,ze,nt.data)):A.texSubImage3D(Ge,ee,k.x,k.y,k.z,Pe,De,Ne,ze,qe,nt),A.pixelStorei(3314,He),A.pixelStorei(32878,tt),A.pixelStorei(3316,Rt),A.pixelStorei(3315,dn),A.pixelStorei(32877,Wn),ee===0&&U.generateMipmaps&&A.generateMipmap(Ge),de.unbindTexture()},this.initTexture=function(w){w.isCubeTexture?y.setTextureCube(w,0):w.isData3DTexture?y.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?y.setTexture2DArray(w,0):y.setTexture2D(w,0),de.unbindTexture()},this.resetState=function(){v=0,S=0,x=null,de.reset(),C.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(Ea.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class oM extends Ea{}oM.prototype.isWebGL1Renderer=!0;class aM extends _t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ta extends Vn{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new G,h=new G,m=[],_=[],d=[],p=[];for(let v=0;v<=i;v++){const S=[],x=v/i;let T=0;v==0&&a==0?T=.5/t:v==i&&l==Math.PI&&(T=-.5/t);for(let E=0;E<=t;E++){const R=E/t;f.x=-e*Math.cos(r+R*s)*Math.sin(a+x*o),f.y=e*Math.cos(a+x*o),f.z=e*Math.sin(r+R*s)*Math.sin(a+x*o),_.push(f.x,f.y,f.z),h.copy(f).normalize(),d.push(h.x,h.y,h.z),p.push(R+T,1-x),S.push(c++)}u.push(S)}for(let v=0;v<i;v++)for(let S=0;S<t;S++){const x=u[v][S+1],T=u[v][S],E=u[v+1][S],R=u[v+1][S+1];(v!==0||a>0)&&m.push(x,T,R),(v!==i-1||l<Math.PI)&&m.push(T,E,R)}this.setIndex(m),this.setAttribute("position",new hn(_,3)),this.setAttribute("normal",new hn(d,3)),this.setAttribute("uv",new hn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Aa extends Hn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const Dc={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class lM{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const m=c[f],_=c[f+1];if(m.global&&(m.lastIndex=0),m.test(u))return _}return null}}}const cM=new lM;class _f{constructor(e){this.manager=e!==void 0?e:cM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class uM extends _f{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Dc.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Pr("img");function l(){u(),Dc.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class vs extends _f{constructor(e){super(e)}load(e,t,i,r){const s=new Lt,a=new uM(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class fM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ic(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Ic();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Ic(){return(typeof performance>"u"?Date:performance).now()}class hM{constructor(e,t,i=0,r=1/0){this.ray=new nf(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new ba,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return Ko(e,this,i,t),i.sort(Oc),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Ko(e[r],this,i,t);return i.sort(Oc),i}}function Oc(n,e){return n.distance-e.distance}function Ko(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)Ko(r[s],e,t,!0)}}class Fc{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class Ca extends Ta{constructor(e,t,i,r,s,a,o){console.warn("THREE.SphereBufferGeometry has been renamed to THREE.SphereGeometry."),super(e,t,i,r,s,a,o)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ma}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ma);var Nc=class{constructor(n,e){Ie(this,"target");Ie(this,"name");Ie(this,"intersected");Ie(this,"wasIntersected",!1);Ie(this,"distance");this.target=n,this.name=e,this.intersected=!1,this.distance=0}},Tt=class{constructor(n,e=null){Ie(this,"type");Ie(this,"cancelBubble");Ie(this,"originalEvent");Ie(this,"coords",new Be(0,0));Ie(this,"distance",0);Ie(this,"intersected",!1);this.cancelBubble=!1,this.type=n,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},dM=class{constructor(n,e,t,i){Ie(this,"renderer");Ie(this,"camera");Ie(this,"domElement");Ie(this,"bindEventsOnBodyElement");Ie(this,"autoAdd");Ie(this,"scene");Ie(this,"mouse");Ie(this,"supportsPointerEvents");Ie(this,"interactiveObjects");Ie(this,"closestObject");Ie(this,"raycaster");Ie(this,"treatTouchEventsAsMouseEvents");Ie(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Ie(this,"add",(n,e=[])=>{if(n&&!this.interactiveObjects.find(t=>t.target===n))if(e.length>0)e.forEach(t=>{let i=n.getObjectByName(t);if(i){let r=new Nc(i,t);this.interactiveObjects.push(r)}});else{let t=new Nc(n,n.name);this.interactiveObjects.push(t)}});Ie(this,"remove",(n,e=[])=>{if(!n)return;let t=new Set(e.length>0?e:[n.name]);this.interactiveObjects=this.interactiveObjects.filter(i=>!t.has(i.name))});Ie(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(i=>{i.target&&this.checkIntersection(i)}),this.interactiveObjects.sort(function(i,r){return i.distance-r.distance});let n=this.interactiveObjects.find(i=>i.intersected)??null;if(n!=this.closestObject){if(this.closestObject){let i=new Tt("mouseout");this.dispatch(this.closestObject,i)}if(n){let i=new Tt("mouseover");this.dispatch(n,i)}this.closestObject=n}let e;this.interactiveObjects.forEach(i=>{!i.intersected&&i.wasIntersected&&(e||(e=new Tt("mouseleave")),this.dispatch(i,e))});let t;this.interactiveObjects.forEach(i=>{i.intersected&&!i.wasIntersected&&(t||(t=new Tt("mouseenter")),this.dispatch(i,t))})});Ie(this,"checkIntersection",n=>{let e=this.raycaster.intersectObjects([n.target],!0);if(n.wasIntersected=n.intersected,e.length>0){let t=e[0].distance;e.forEach(i=>{i.distance<t&&(t=i.distance)}),n.intersected=!0,n.distance=t}else n.intersected=!1});Ie(this,"onDocumentMouseMove",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY);let e=new Tt("mousemove",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onDocumentPointerMove",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY);let e=new Tt("pointermove",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onTouchMove",n=>{n.touches.length>0&&this.mapPositionToPoint(this.mouse,n.touches[0].clientX,n.touches[0].clientY);let e=new Tt(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onMouseClick",n=>{this.update();let e=new Tt("click",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onMouseDown",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY),this.update();let e=new Tt("mousedown",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onPointerDown",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY),this.update();let e=new Tt("pointerdown",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onTouchStart",n=>{n.touches.length>0&&this.mapPositionToPoint(this.mouse,n.touches[0].clientX,n.touches[0].clientY),this.update();let e=new Tt(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onMouseUp",n=>{let e=new Tt("mouseup",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onPointerUp",n=>{let e=new Tt("pointerup",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onTouchEnd",n=>{n.touches.length>0&&this.mapPositionToPoint(this.mouse,n.touches[0].clientX,n.touches[0].clientY),this.update();let e=new Tt(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"dispatch",(n,e)=>{n.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=n.distance,e.intersected=n.intersected,n.target.dispatchEvent(e))});Ie(this,"mapPositionToPoint",(n,e,t)=>{let i=this.renderer.domElement.getBoundingClientRect();n.x=(e-i.left)/i.width*2-1,n.y=-((t-i.top)/i.height)*2+1});this.renderer=n,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=i&&typeof i.bindEventsOnBodyElement<"u"?i.bindEventsOnBodyElement:!0,this.scene=i&&typeof i.scene<"u"?i.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(r=>{this.add(r),r.addEventListener("removed",s=>{this.remove(s.target)})}),this.update()}),this.autoAdd=i&&typeof i.autoAdd<"u"?i.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Be(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new hM,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}};const Uc={type:"change"},Ao={type:"start"},zc={type:"end"};class pM extends pi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gi.ROTATE,MIDDLE:gi.DOLLY,RIGHT:gi.PAN},this.touches={ONE:_i.ROTATE,TWO:_i.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(C){C.addEventListener("keydown",oe),this._domElementKeyEvents=C},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",oe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Uc),i.update(),s=r.NONE},this.update=function(){const C=new G,O=new hi().setFromUnitVectors(e.up,new G(0,1,0)),Se=O.clone().invert(),Me=new G,Ae=new hi,Le=2*Math.PI;return function(){const Re=i.object.position;C.copy(Re).sub(i.target),C.applyQuaternion(O),o.setFromVector3(C),i.autoRotate&&s===r.NONE&&P(z()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ke=i.minAzimuthAngle,Ye=i.maxAzimuthAngle;return isFinite(ke)&&isFinite(Ye)&&(ke<-Math.PI?ke+=Le:ke>Math.PI&&(ke-=Le),Ye<-Math.PI?Ye+=Le:Ye>Math.PI&&(Ye-=Le),ke<=Ye?o.theta=Math.max(ke,Math.min(Ye,o.theta)):o.theta=o.theta>(ke+Ye)/2?Math.max(ke,o.theta):Math.min(Ye,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),C.setFromSpherical(o),C.applyQuaternion(Se),Re.copy(i.target).add(C),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||Me.distanceToSquared(i.object.position)>a||8*(1-Ae.dot(i.object.quaternion))>a?(i.dispatchEvent(Uc),Me.copy(i.object.position),Ae.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",I),i.domElement.removeEventListener("pointerdown",B),i.domElement.removeEventListener("pointercancel",le),i.domElement.removeEventListener("wheel",me),i.domElement.removeEventListener("pointermove",j),i.domElement.removeEventListener("pointerup",Z),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",oe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Fc,l=new Fc;let c=1;const u=new G;let f=!1;const h=new Be,m=new Be,_=new Be,d=new Be,p=new Be,v=new Be,S=new Be,x=new Be,T=new Be,E=[],R={};function z(){return 2*Math.PI/60/60*i.autoRotateSpeed}function b(){return Math.pow(.95,i.zoomSpeed)}function P(C){l.theta-=C}function F(C){l.phi-=C}const ne=function(){const C=new G;return function(Se,Me){C.setFromMatrixColumn(Me,0),C.multiplyScalar(-Se),u.add(C)}}(),ce=function(){const C=new G;return function(Se,Me){i.screenSpacePanning===!0?C.setFromMatrixColumn(Me,1):(C.setFromMatrixColumn(Me,0),C.crossVectors(i.object.up,C)),C.multiplyScalar(Se),u.add(C)}}(),H=function(){const C=new G;return function(Se,Me){const Ae=i.domElement;if(i.object.isPerspectiveCamera){const Le=i.object.position;C.copy(Le).sub(i.target);let Ee=C.length();Ee*=Math.tan(i.object.fov/2*Math.PI/180),ne(2*Se*Ee/Ae.clientHeight,i.object.matrix),ce(2*Me*Ee/Ae.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ne(Se*(i.object.right-i.object.left)/i.object.zoom/Ae.clientWidth,i.object.matrix),ce(Me*(i.object.top-i.object.bottom)/i.object.zoom/Ae.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(C){i.object.isPerspectiveCamera?c/=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(C){i.object.isPerspectiveCamera?c*=C:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/C)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(C){h.set(C.clientX,C.clientY)}function ie(C){S.set(C.clientX,C.clientY)}function W(C){d.set(C.clientX,C.clientY)}function ae(C){m.set(C.clientX,C.clientY),_.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;P(2*Math.PI*_.x/O.clientHeight),F(2*Math.PI*_.y/O.clientHeight),h.copy(m),i.update()}function he(C){x.set(C.clientX,C.clientY),T.subVectors(x,S),T.y>0?N(b()):T.y<0&&K(b()),S.copy(x),i.update()}function we(C){p.set(C.clientX,C.clientY),v.subVectors(p,d).multiplyScalar(i.panSpeed),H(v.x,v.y),d.copy(p),i.update()}function V(C){C.deltaY<0?K(b()):C.deltaY>0&&N(b()),i.update()}function ue(C){let O=!1;switch(C.code){case i.keys.UP:C.ctrlKey||C.metaKey||C.shiftKey?F(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,i.keyPanSpeed),O=!0;break;case i.keys.BOTTOM:C.ctrlKey||C.metaKey||C.shiftKey?F(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(0,-i.keyPanSpeed),O=!0;break;case i.keys.LEFT:C.ctrlKey||C.metaKey||C.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(i.keyPanSpeed,0),O=!0;break;case i.keys.RIGHT:C.ctrlKey||C.metaKey||C.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):H(-i.keyPanSpeed,0),O=!0;break}O&&(C.preventDefault(),i.update())}function xe(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),O=.5*(E[0].pageY+E[1].pageY);h.set(C,O)}}function A(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const C=.5*(E[0].pageX+E[1].pageX),O=.5*(E[0].pageY+E[1].pageY);d.set(C,O)}}function X(){const C=E[0].pageX-E[1].pageX,O=E[0].pageY-E[1].pageY,Se=Math.sqrt(C*C+O*O);S.set(0,Se)}function q(){i.enableZoom&&X(),i.enablePan&&A()}function te(){i.enableZoom&&X(),i.enableRotate&&xe()}function de(C){if(E.length==1)m.set(C.pageX,C.pageY);else{const Se=_e(C),Me=.5*(C.pageX+Se.x),Ae=.5*(C.pageY+Se.y);m.set(Me,Ae)}_.subVectors(m,h).multiplyScalar(i.rotateSpeed);const O=i.domElement;P(2*Math.PI*_.x/O.clientHeight),F(2*Math.PI*_.y/O.clientHeight),h.copy(m)}function be(C){if(E.length===1)p.set(C.pageX,C.pageY);else{const O=_e(C),Se=.5*(C.pageX+O.x),Me=.5*(C.pageY+O.y);p.set(Se,Me)}v.subVectors(p,d).multiplyScalar(i.panSpeed),H(v.x,v.y),d.copy(p)}function ve(C){const O=_e(C),Se=C.pageX-O.x,Me=C.pageY-O.y,Ae=Math.sqrt(Se*Se+Me*Me);x.set(0,Ae),T.set(0,Math.pow(x.y/S.y,i.zoomSpeed)),N(T.y),S.copy(x)}function y(C){i.enableZoom&&ve(C),i.enablePan&&be(C)}function L(C){i.enableZoom&&ve(C),i.enableRotate&&de(C)}function B(C){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(C.pointerId),i.domElement.addEventListener("pointermove",j),i.domElement.addEventListener("pointerup",Z)),Y(C),C.pointerType==="touch"?M(C):pe(C))}function j(C){i.enabled!==!1&&(C.pointerType==="touch"?g(C):se(C))}function Z(C){J(C),E.length===0&&(i.domElement.releasePointerCapture(C.pointerId),i.domElement.removeEventListener("pointermove",j),i.domElement.removeEventListener("pointerup",Z)),i.dispatchEvent(zc),s=r.NONE}function le(C){J(C)}function pe(C){let O;switch(C.button){case 0:O=i.mouseButtons.LEFT;break;case 1:O=i.mouseButtons.MIDDLE;break;case 2:O=i.mouseButtons.RIGHT;break;default:O=-1}switch(O){case gi.DOLLY:if(i.enableZoom===!1)return;ie(C),s=r.DOLLY;break;case gi.ROTATE:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enablePan===!1)return;W(C),s=r.PAN}else{if(i.enableRotate===!1)return;re(C),s=r.ROTATE}break;case gi.PAN:if(C.ctrlKey||C.metaKey||C.shiftKey){if(i.enableRotate===!1)return;re(C),s=r.ROTATE}else{if(i.enablePan===!1)return;W(C),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ao)}function se(C){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ae(C);break;case r.DOLLY:if(i.enableZoom===!1)return;he(C);break;case r.PAN:if(i.enablePan===!1)return;we(C);break}}function me(C){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(C.preventDefault(),i.dispatchEvent(Ao),V(C),i.dispatchEvent(zc))}function oe(C){i.enabled===!1||i.enablePan===!1||ue(C)}function M(C){switch(fe(C),E.length){case 1:switch(i.touches.ONE){case _i.ROTATE:if(i.enableRotate===!1)return;xe(),s=r.TOUCH_ROTATE;break;case _i.PAN:if(i.enablePan===!1)return;A(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case _i.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;q(),s=r.TOUCH_DOLLY_PAN;break;case _i.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;te(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Ao)}function g(C){switch(fe(C),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;de(C),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;be(C),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;y(C),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;L(C),i.update();break;default:s=r.NONE}}function I(C){i.enabled!==!1&&C.preventDefault()}function Y(C){E.push(C)}function J(C){delete R[C.pointerId];for(let O=0;O<E.length;O++)if(E[O].pointerId==C.pointerId){E.splice(O,1);return}}function fe(C){let O=R[C.pointerId];O===void 0&&(O=new Be,R[C.pointerId]=O),O.set(C.pageX,C.pageY)}function _e(C){const O=C.pointerId===E[0].pointerId?E[1]:E[0];return R[O.pointerId]}i.domElement.addEventListener("contextmenu",I),i.domElement.addEventListener("pointerdown",B),i.domElement.addEventListener("pointercancel",le),i.domElement.addEventListener("wheel",me,{passive:!1}),this.update()}}const mM=""+new URL("stars_milky_way-1fd005dd.jpg",import.meta.url).href,gM=""+new URL("earth_daymap-88ab060b.jpg",import.meta.url).href,_M=""+new URL("earth_normal_map-051f36fb.jpg",import.meta.url).href,xM=`#version 300 es
precision highp float;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;uniform sampler2D u_normalMap;in vec3 position;in vec3 normal;in vec2 uv;out vec2 vUv;out vec3 vPosition;void main(){vUv=uv;vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,vM=`#version 300 es
precision highp float;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;uniform sampler2D u_texture;uniform sampler2D u_normalMap;in vec3 position;in vec2 vUv;in vec3 vPosition;vec3 lightPosition=vec3(10.0,0.0,8.0);float lightMagnitude=50.0;float ambientReflectance=0.8;float diffuseReflectance=0.2;float specularReflectance=0.2;vec3 specularLight=vec3(1.0,1.0,1.0);out vec4 fragColor;vec3 calcNormal(){vec3 normalMapColor=texture(u_normalMap,vUv).rgb;vec3 normalDirection=normalize(normalMapColor*2.0-1.0);mat3 tangentToWorld=mat3(vec3(1.0,0.0,0.0),vec3(0.0,1.0,0.0),vec3(0.0,0.0,1.0));vec3 worldNormal=normalize(tangentToWorld*normalDirection);return worldNormal;}void main(){vec3 n=calcNormal();vec3 l=normalize(lightPosition-vPosition);vec3 r=reflect(-l,n);vec3 v=normalize(-vPosition);float diffuse=max(dot(n,l),0.0);float specular=pow(max(dot(r,v),0.0),dot(specularLight,vec3(1.0,1.0,1.0)))*lightMagnitude;vec3 ambient=texture(u_texture,vUv).rgb*ambientReflectance;vec3 diffuseColor=texture(u_texture,vUv).rgb*diffuse*diffuseReflectance;vec3 specularColor=specularLight*specular*specularReflectance;vec3 color=ambient+diffuseColor*specularColor;fragColor=vec4(color,1.0);}`,MM=`#version 300 es
precision highp float;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;uniform sampler2D u_normalMap;uniform float u_time;uniform vec4 u_resolution;uniform float u_progress;uniform sampler2D u_texture;out vec2 vUv;out vec3 vPosition;in vec3 position;in vec3 normal;in vec2 uv;void main(){vUv=uv;vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,yM=`#version 300 es
precision highp float;vec4 mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}float mod289(float x){return x-floor(x*(1.0/289.0))*289.0;}vec4 permute(vec4 x){return mod289(((x*34.0)+10.0)*x);}float permute(float x){return mod289(((x*34.0)+10.0)*x);}vec4 taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}float taylorInvSqrt(float r){return 1.79284291400159-0.85373472095314*r;}vec4 grad4(float j,vec4 ip){const vec4 ones=vec4(1.0,1.0,1.0,-1.0);vec4 p,s;p.xyz=floor(fract(vec3(j)*ip.xyz)*7.0)*ip.z-1.0;p.w=1.5-dot(abs(p.xyz),ones.xyz);s=vec4(lessThan(p,vec4(0.0)));p.xyz=p.xyz+(s.xyz*2.0-1.0)*s.www;return p;}
#define F4 0.309016994374947451
float snoise(vec4 v){const vec4 C=vec4(0.138196601125011,0.276393202250021,0.414589803375032,-0.447213595499958);vec4 i=floor(v+dot(v,vec4(F4)));vec4 x0=v-i+dot(i,C.xxxx);vec4 i0;vec3 isX=step(x0.yzw,x0.xxx);vec3 isYZ=step(x0.zww,x0.yyz);i0.x=isX.x+isX.y+isX.z;i0.yzw=1.0-isX;i0.y+=isYZ.x+isYZ.y;i0.zw+=1.0-isYZ.xy;i0.z+=isYZ.z;i0.w+=1.0-isYZ.z;vec4 i3=clamp(i0,0.0,1.0);vec4 i2=clamp(i0-1.0,0.0,1.0);vec4 i1=clamp(i0-2.0,0.0,1.0);vec4 x1=x0-i1+C.xxxx;vec4 x2=x0-i2+C.yyyy;vec4 x3=x0-i3+C.zzzz;vec4 x4=x0+C.wwww;i=mod289(i);float j0=permute(permute(permute(permute(i.w)+i.z)+i.y)+i.x);vec4 j1=permute(permute(permute(permute(i.w+vec4(i1.w,i2.w,i3.w,1.0))+i.z+vec4(i1.z,i2.z,i3.z,1.0))+i.y+vec4(i1.y,i2.y,i3.y,1.0))+i.x+vec4(i1.x,i2.x,i3.x,1.0));vec4 ip=vec4(1.0/294.0,1.0/49.0,1.0/7.0,0.0);vec4 p0=grad4(j0,ip);vec4 p1=grad4(j1.x,ip);vec4 p2=grad4(j1.y,ip);vec4 p3=grad4(j1.z,ip);vec4 p4=grad4(j1.w,ip);vec4 norm=taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;p4*=taylorInvSqrt(dot(p4,p4));vec3 m0=max(0.6-vec3(dot(x0,x0),dot(x1,x1),dot(x2,x2)),0.0);vec2 m1=max(0.6-vec2(dot(x3,x3),dot(x4,x4)),0.0);m0=m0*m0;m1=m1*m1;return 49.0*(dot(m0*m0,vec3(dot(p0,x0),dot(p1,x1),dot(p2,x2)))+dot(m1*m1,vec2(dot(p3,x3),dot(p4,x4))));}uniform float u_time;uniform vec4 u_resolution;uniform float u_progress;uniform sampler2D u_texture;in vec2 vUv;in vec3 vPosition;out vec4 fragColor;float fbm(vec4 p){float sum=0.0;for(int i=0;i<6;i++){float freq=pow(2.,float(i));float amp=pow(.8,float(i));sum+=amp*snoise(p*freq);}return sum;}vec3 rgb2hsv(vec3 c){vec4 K=vec4(0.0,-1.0/3.0,2.0/3.0,-1.0);vec4 p=mix(vec4(c.bg,K.wz),vec4(c.gb,K.xy),step(c.b,c.g));vec4 q=mix(vec4(p.xyw,c.r),vec4(c.r,p.yzx),step(p.x,c.r));float d=q.x-min(q.w,q.y);float e=1.0e-10;return vec3(abs(q.z+(q.w-q.y)/(6.0*d+e)),d/(q.x+e),q.x);}vec3 hsv2rgb(vec3 c){vec4 K=vec4(1.0,2.0/3.0,1.0/3.0,3.0);vec3 p=abs(fract(c.xxx+K.xyz)*6.0-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.0,1.0),c.y);}void main(){vec4 p=vec4(vPosition*0.3,u_time*0.05);float ln=fbm(p);float n=snoise(vec4(vPosition*0.3,u_time*0.4));vec3 baseColor=mix(vec3(1.0,0.0,0.0),vec3(1.,.8,0.0),ln);vec3 hsv=rgb2hsv(baseColor);hsv.z*=mix(0.5,.7,ln);vec3 color=hsv2rgb(hsv);fragColor=vec4(color,1.);}`,bM=`#version 300 es
precision highp float;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;uniform sampler2D u_normalMap;in vec3 position;in vec3 normal;in vec2 uv;out vec2 vUv;out vec3 vPosition;void main(){vUv=uv;vPosition=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0);}`,SM=`#version 300 es
precision highp float;uniform mat4 modelMatrix;uniform mat4 modelViewMatrix;uniform mat4 projectionMatrix;uniform mat4 viewMatrix;uniform mat3 normalMatrix;uniform vec3 cameraPosition;uniform sampler2D u_texture;uniform sampler2D u_normalMap;in vec3 position;in vec2 vUv;in vec3 vPosition;vec3 lightPosition=vec3(10.0,0.0,8.0);float lightMagnitude=50.0;float ambientReflectance=0.8;float diffuseReflectance=0.2;float specularReflectance=0.2;vec3 specularLight=vec3(1.0,1.0,1.0);out vec4 fragColor;vec3 calcNormal(){vec3 normalMapColor=texture(u_normalMap,vUv).rgb;vec3 normalDirection=normalize(normalMapColor*2.0-1.0);mat3 tangentToWorld=mat3(vec3(1.0,0.0,0.0),vec3(0.0,1.0,0.0),vec3(0.0,0.0,1.0));vec3 worldNormal=normalize(tangentToWorld*normalDirection);return worldNormal;}void main(){vec3 n=calcNormal();vec3 l=normalize(lightPosition-vPosition);vec3 r=reflect(-l,n);vec3 v=normalize(-vPosition);float diffuse=max(dot(n,l),0.0);float specular=pow(max(dot(r,v),0.0),dot(specularLight,vec3(1.0,1.0,1.0)))*lightMagnitude;vec3 ambient=texture(u_texture,vUv).rgb*ambientReflectance;vec3 diffuseColor=texture(u_texture,vUv).rgb*diffuse*diffuseReflectance;vec3 specularColor=specularLight*specular*specularReflectance;vec3 color=ambient+diffuseColor*specularColor;fragColor=vec4(color,1.0);}`,wM=""+new URL("moon_map-d1875bce.jpg",import.meta.url).href,EM=()=>{const n=new aM,e=new vs().load(mM);return e.mapping=xs,n.background=e,n},TM=n=>{const e=new kt(75,window.innerWidth/window.innerHeight,.1,1e6);return e.position.set(-20,0,0),e.name="camera",n.add(e),e},AM=n=>{var e=new Aa({uniforms:{u_texture:{value:new vs().load(gM)},u_normalMap:{value:new vs().load(_M)}},vertexShader:xM,fragmentShader:vM}),t=new Ca(6.371,50,50);const i=new Zt(t,e);return n&&i.position.set(n.x,n.y,n.z),i.name="earth",i},CM=(n,e,t)=>{const i=new Ea({canvas:t,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio);const r=new pM(e,i.domElement);return r.rotateSpeed=1,r.zoomSpeed=1.2,r.enableZoom=!0,r.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},r.minDistance=.1,r.maxDistance=1e3,i},LM=()=>{const n=new Ca(10,55,55),e=new Aa({uniforms:{u_time:{type:"f",value:0}},vertexShader:MM,fragmentShader:yM}),t=new Zt(n,e);return t.name="sun",t},PM=n=>{const e=new Ca(1.737,55,55),t=new Aa({uniforms:{u_texture:{value:new vs().load(wM)}},vertexShader:bM,fragmentShader:SM}),i=new Zt(e,t);return n&&i.position.set(n.x,n.y,n.z),i.name="moon",i},RM=(n,e,t,i)=>{const r=new _t;r.name="solarSystem",r.add(e);const s=new _t;s.name="earthOrbit",s.add(t),r.add(s);const a=new _t;a.name="moonOrbit",a.position.copy(t.position),a.add(i),s.add(a),n.add(r)},DM={id:"canvas"},IM=ma("h1",null,"Hello Universe!",-1),OM=[IM],FM=ha({__name:"Universe",setup(n){const e=new fM,t=147.105052,i=3.844+6.371*2;var r=1e-4,s=.0365,a=.0028,o=!1;const l=EM(),c=TM(l),u=LM(),f=AM(new G(t,0,0)),h=PM(new G(i,0,0));return RM(l,u,f,h),_u(()=>{const m=document.getElementById("canvas"),_=CM(l,c,m),d=new dM(_,c,_.domElement);d.add(f),f.addEventListener("mouseover",()=>{s=s/2,a=a/2,console.log("Earth hover"+s)}),f.addEventListener("mouseout",()=>{s=s*2,a=a*2,console.log("Earth hover")}),f.addEventListener("click",()=>{o=!o,console.log("Earth click")}),p();function p(){var v=l.getObjectByName("sun"),S=l.getObjectByName("earth"),x=l.getObjectByName("earthOrbit"),T=l.getObjectByName("moonOrbit"),E=l.getObjectByName("camera");requestAnimationFrame(p),v.material.uniforms.u_time.value=e.getElapsedTime(),T.rotation.y+=a,x.rotation.y+=r,S.rotation.y+=s,_.render(l,E),d.update(),l.updateMatrixWorld(),E.updateMatrixWorld(),S.updateMatrixWorld(),o&&(E.position.x=S.position.x+10,E.position.y=S.position.y,E.position.z=S.position.z,E.lookAt(S.position))}}),(m,_)=>(Au(),pd("canvas",DM,OM))}}),NM=Jp({history:mp("./"),routes:[{path:"/",name:"home",component:FM}]});const xf=$d(nm);xf.use(NM);xf.mount("#app");
