var mh=Object.defineProperty;var gh=(n,e,t)=>e in n?mh(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Ie=(n,e,t)=>(gh(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
* @vue/shared v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ba(n){const e=Object.create(null);for(const t of n.split(","))e[t]=1;return t=>t in e}const Ke={},qi=[],sn=()=>{},_h=()=>!1,Os=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),Ma=n=>n.startsWith("onUpdate:"),gt=Object.assign,Sa=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vh=Object.prototype.hasOwnProperty,Ye=(n,e)=>vh.call(n,e),Fe=Array.isArray,wr=n=>Fs(n)==="[object Map]",xh=n=>Fs(n)==="[object Set]",Ne=n=>typeof n=="function",ct=n=>typeof n=="string",ar=n=>typeof n=="symbol",tt=n=>n!==null&&typeof n=="object",vu=n=>(tt(n)||Ne(n))&&Ne(n.then)&&Ne(n.catch),yh=Object.prototype.toString,Fs=n=>yh.call(n),bh=n=>Fs(n).slice(8,-1),Mh=n=>Fs(n)==="[object Object]",wa=n=>ct(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Er=ba(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Ns=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},Sh=/-(\w)/g,Yn=Ns(n=>n.replace(Sh,(e,t)=>t?t.toUpperCase():"")),wh=/\B([A-Z])/g,Si=Ns(n=>n.replace(wh,"-$1").toLowerCase()),xu=Ns(n=>n.charAt(0).toUpperCase()+n.slice(1)),no=Ns(n=>n?`on${xu(n)}`:""),Xn=(n,e)=>!Object.is(n,e),io=(n,...e)=>{for(let t=0;t<n.length;t++)n[t](...e)},yu=(n,e,t,i=!1)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,writable:i,value:t})},Eh=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Ka;const Us=()=>Ka||(Ka=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ea(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++){const i=n[t],r=ct(i)?Ph(i):Ea(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ct(n)||tt(n))return n}const Th=/;(?![^(]*\))/g,Ah=/:([^]+)/,Ch=/\/\*[^]*?\*\//g;function Ph(n){const e={};return n.replace(Ch,"").split(Th).forEach(t=>{if(t){const i=t.split(Ah);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function zs(n){let e="";if(ct(n))e=n;else if(Fe(n))for(let t=0;t<n.length;t++){const i=zs(n[t]);i&&(e+=i+" ")}else if(tt(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const Lh="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rh=ba(Lh);function bu(n){return!!n||n===""}/**
* @vue/reactivity v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Ht;class Dh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=Ht,!e&&Ht&&(this.index=(Ht.scopes||(Ht.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].pause();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,t;if(this.scopes)for(e=0,t=this.scopes.length;e<t;e++)this.scopes[e].resume();for(e=0,t=this.effects.length;e<t;e++)this.effects[e].resume()}}run(e){if(this._active){const t=Ht;try{return Ht=this,e()}finally{Ht=t}}}on(){Ht=this}off(){Ht=this.parent}stop(e){if(this._active){let t,i;for(t=0,i=this.effects.length;t<i;t++)this.effects[t].stop();for(t=0,i=this.cleanups.length;t<i;t++)this.cleanups[t]();if(this.scopes)for(t=0,i=this.scopes.length;t<i;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Ih(){return Ht}let $e;const ro=new WeakSet;class Mu{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Ht&&Ht.active&&Ht.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,ro.has(this)&&(ro.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||wu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Ja(this),Eu(this);const e=$e,t=on;$e=this,on=!0;try{return this.fn()}finally{Tu(this),$e=e,on=t,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Ca(e);this.deps=this.depsTail=void 0,Ja(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?ro.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ko(this)&&this.run()}get dirty(){return Ko(this)}}let Su=0,Tr,Ar;function wu(n,e=!1){if(n.flags|=8,e){n.next=Ar,Ar=n;return}n.next=Tr,Tr=n}function Ta(){Su++}function Aa(){if(--Su>0)return;if(Ar){let e=Ar;for(Ar=void 0;e;){const t=e.next;e.next=void 0,e.flags&=-9,e=t}}let n;for(;Tr;){let e=Tr;for(Tr=void 0;e;){const t=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(i){n||(n=i)}e=t}}if(n)throw n}function Eu(n){for(let e=n.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Tu(n){let e,t=n.depsTail,i=t;for(;i;){const r=i.prevDep;i.version===-1?(i===t&&(t=r),Ca(i),Oh(i)):e=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=r}n.deps=e,n.depsTail=t}function Ko(n){for(let e=n.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(Au(e.dep.computed)||e.dep.version!==e.version))return!0;return!!n._dirty}function Au(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===Ir))return;n.globalVersion=Ir;const e=n.dep;if(n.flags|=2,e.version>0&&!n.isSSR&&n.deps&&!Ko(n)){n.flags&=-3;return}const t=$e,i=on;$e=n,on=!0;try{Eu(n);const r=n.fn(n._value);(e.version===0||Xn(r,n._value))&&(n._value=r,e.version++)}catch(r){throw e.version++,r}finally{$e=t,on=i,Tu(n),n.flags&=-3}}function Ca(n,e=!1){const{dep:t,prevSub:i,nextSub:r}=n;if(i&&(i.nextSub=r,n.prevSub=void 0),r&&(r.prevSub=i,n.nextSub=void 0),t.subs===n&&(t.subs=i,!i&&t.computed)){t.computed.flags&=-5;for(let s=t.computed.deps;s;s=s.nextDep)Ca(s,!0)}!e&&!--t.sc&&t.map&&t.map.delete(t.key)}function Oh(n){const{prevDep:e,nextDep:t}=n;e&&(e.nextDep=t,n.prevDep=void 0),t&&(t.prevDep=e,n.nextDep=void 0)}let on=!0;const Cu=[];function Kn(){Cu.push(on),on=!1}function Jn(){const n=Cu.pop();on=n===void 0?!0:n}function Ja(n){const{cleanup:e}=n;if(n.cleanup=void 0,e){const t=$e;$e=void 0;try{e()}finally{$e=t}}}let Ir=0;class Fh{constructor(e,t){this.sub=e,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Pa{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!$e||!on||$e===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==$e)t=this.activeLink=new Fh($e,this),$e.deps?(t.prevDep=$e.depsTail,$e.depsTail.nextDep=t,$e.depsTail=t):$e.deps=$e.depsTail=t,Pu(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const i=t.nextDep;i.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=i),t.prevDep=$e.depsTail,t.nextDep=void 0,$e.depsTail.nextDep=t,$e.depsTail=t,$e.deps===t&&($e.deps=i)}return t}trigger(e){this.version++,Ir++,this.notify(e)}notify(e){Ta();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Aa()}}}function Pu(n){if(n.dep.sc++,n.sub.flags&4){const e=n.dep.computed;if(e&&!n.dep.subs){e.flags|=20;for(let i=e.deps;i;i=i.nextDep)Pu(i)}const t=n.dep.subs;t!==n&&(n.prevSub=t,t&&(t.nextSub=n)),n.dep.subs=n}}const Jo=new WeakMap,mi=Symbol(""),Qo=Symbol(""),Or=Symbol("");function yt(n,e,t){if(on&&$e){let i=Jo.get(n);i||Jo.set(n,i=new Map);let r=i.get(t);r||(i.set(t,r=new Pa),r.map=i,r.key=t),r.track()}}function Rn(n,e,t,i,r,s){const a=Jo.get(n);if(!a){Ir++;return}const o=l=>{l&&l.trigger()};if(Ta(),e==="clear")a.forEach(o);else{const l=Fe(n),c=l&&wa(t);if(l&&t==="length"){const u=Number(i);a.forEach((f,h)=>{(h==="length"||h===Or||!ar(h)&&h>=u)&&o(f)})}else switch((t!==void 0||a.has(void 0))&&o(a.get(t)),c&&o(a.get(Or)),e){case"add":l?c&&o(a.get("length")):(o(a.get(mi)),wr(n)&&o(a.get(Qo)));break;case"delete":l||(o(a.get(mi)),wr(n)&&o(a.get(Qo)));break;case"set":wr(n)&&o(a.get(mi));break}}Aa()}function Ei(n){const e=qe(n);return e===n?e:(yt(e,"iterate",Or),Kt(n)?e:e.map(bt))}function Bs(n){return yt(n=qe(n),"iterate",Or),n}const Nh={__proto__:null,[Symbol.iterator](){return so(this,Symbol.iterator,bt)},concat(...n){return Ei(this).concat(...n.map(e=>Fe(e)?Ei(e):e))},entries(){return so(this,"entries",n=>(n[1]=bt(n[1]),n))},every(n,e){return Sn(this,"every",n,e,void 0,arguments)},filter(n,e){return Sn(this,"filter",n,e,t=>t.map(bt),arguments)},find(n,e){return Sn(this,"find",n,e,bt,arguments)},findIndex(n,e){return Sn(this,"findIndex",n,e,void 0,arguments)},findLast(n,e){return Sn(this,"findLast",n,e,bt,arguments)},findLastIndex(n,e){return Sn(this,"findLastIndex",n,e,void 0,arguments)},forEach(n,e){return Sn(this,"forEach",n,e,void 0,arguments)},includes(...n){return oo(this,"includes",n)},indexOf(...n){return oo(this,"indexOf",n)},join(n){return Ei(this).join(n)},lastIndexOf(...n){return oo(this,"lastIndexOf",n)},map(n,e){return Sn(this,"map",n,e,void 0,arguments)},pop(){return ur(this,"pop")},push(...n){return ur(this,"push",n)},reduce(n,...e){return Qa(this,"reduce",n,e)},reduceRight(n,...e){return Qa(this,"reduceRight",n,e)},shift(){return ur(this,"shift")},some(n,e){return Sn(this,"some",n,e,void 0,arguments)},splice(...n){return ur(this,"splice",n)},toReversed(){return Ei(this).toReversed()},toSorted(n){return Ei(this).toSorted(n)},toSpliced(...n){return Ei(this).toSpliced(...n)},unshift(...n){return ur(this,"unshift",n)},values(){return so(this,"values",bt)}};function so(n,e,t){const i=Bs(n),r=i[e]();return i!==n&&!Kt(n)&&(r._next=r.next,r.next=()=>{const s=r._next();return s.value&&(s.value=t(s.value)),s}),r}const Uh=Array.prototype;function Sn(n,e,t,i,r,s){const a=Bs(n),o=a!==n&&!Kt(n),l=a[e];if(l!==Uh[e]){const f=l.apply(n,s);return o?bt(f):f}let c=t;a!==n&&(o?c=function(f,h){return t.call(this,bt(f),h,n)}:t.length>2&&(c=function(f,h){return t.call(this,f,h,n)}));const u=l.call(a,c,i);return o&&r?r(u):u}function Qa(n,e,t,i){const r=Bs(n);let s=t;return r!==n&&(Kt(n)?t.length>3&&(s=function(a,o,l){return t.call(this,a,o,l,n)}):s=function(a,o,l){return t.call(this,a,bt(o),l,n)}),r[e](s,...i)}function oo(n,e,t){const i=qe(n);yt(i,"iterate",Or);const r=i[e](...t);return(r===-1||r===!1)&&Da(t[0])?(t[0]=qe(t[0]),i[e](...t)):r}function ur(n,e,t=[]){Kn(),Ta();const i=qe(n)[e].apply(n,t);return Aa(),Jn(),i}const zh=ba("__proto__,__v_isRef,__isVue"),Lu=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(ar));function Bh(n){ar(n)||(n=String(n));const e=qe(this);return yt(e,"has",n),e.hasOwnProperty(n)}class Ru{constructor(e=!1,t=!1){this._isReadonly=e,this._isShallow=t}get(e,t,i){const r=this._isReadonly,s=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return s;if(t==="__v_raw")return i===(r?s?Zh:Fu:s?Ou:Iu).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const a=Fe(e);if(!r){let l;if(a&&(l=Nh[t]))return l;if(t==="hasOwnProperty")return Bh}const o=Reflect.get(e,t,Mt(e)?e:i);return(ar(t)?Lu.has(t):zh(t))||(r||yt(e,"get",t),s)?o:Mt(o)?a&&wa(t)?o:o.value:tt(o)?r?Uu(o):Gs(o):o}}class Du extends Ru{constructor(e=!1){super(!1,e)}set(e,t,i,r){let s=e[t];if(!this._isShallow){const l=vi(s);if(!Kt(i)&&!vi(i)&&(s=qe(s),i=qe(i)),!Fe(e)&&Mt(s)&&!Mt(i))return l?!1:(s.value=i,!0)}const a=Fe(e)&&wa(t)?Number(t)<e.length:Ye(e,t),o=Reflect.set(e,t,i,Mt(e)?e:r);return e===qe(r)&&(a?Xn(i,s)&&Rn(e,"set",t,i):Rn(e,"add",t,i)),o}deleteProperty(e,t){const i=Ye(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&i&&Rn(e,"delete",t,void 0),r}has(e,t){const i=Reflect.has(e,t);return(!ar(t)||!Lu.has(t))&&yt(e,"has",t),i}ownKeys(e){return yt(e,"iterate",Fe(e)?"length":mi),Reflect.ownKeys(e)}}class Gh extends Ru{constructor(e=!1){super(!0,e)}set(e,t){return!0}deleteProperty(e,t){return!0}}const kh=new Du,Vh=new Gh,Hh=new Du(!0);const ea=n=>n,Kr=n=>Reflect.getPrototypeOf(n);function Wh(n,e,t){return function(...i){const r=this.__v_raw,s=qe(r),a=wr(s),o=n==="entries"||n===Symbol.iterator&&a,l=n==="keys"&&a,c=r[n](...i),u=t?ea:e?ta:bt;return!e&&yt(s,"iterate",l?Qo:mi),{next(){const{value:f,done:h}=c.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function Jr(n){return function(...e){return n==="delete"?!1:n==="clear"?void 0:this}}function jh(n,e){const t={get(r){const s=this.__v_raw,a=qe(s),o=qe(r);n||(Xn(r,o)&&yt(a,"get",r),yt(a,"get",o));const{has:l}=Kr(a),c=e?ea:n?ta:bt;if(l.call(a,r))return c(s.get(r));if(l.call(a,o))return c(s.get(o));s!==a&&s.get(r)},get size(){const r=this.__v_raw;return!n&&yt(qe(r),"iterate",mi),Reflect.get(r,"size",r)},has(r){const s=this.__v_raw,a=qe(s),o=qe(r);return n||(Xn(r,o)&&yt(a,"has",r),yt(a,"has",o)),r===o?s.has(r):s.has(r)||s.has(o)},forEach(r,s){const a=this,o=a.__v_raw,l=qe(o),c=e?ea:n?ta:bt;return!n&&yt(l,"iterate",mi),o.forEach((u,f)=>r.call(s,c(u),c(f),a))}};return gt(t,n?{add:Jr("add"),set:Jr("set"),delete:Jr("delete"),clear:Jr("clear")}:{add(r){!e&&!Kt(r)&&!vi(r)&&(r=qe(r));const s=qe(this);return Kr(s).has.call(s,r)||(s.add(r),Rn(s,"add",r,r)),this},set(r,s){!e&&!Kt(s)&&!vi(s)&&(s=qe(s));const a=qe(this),{has:o,get:l}=Kr(a);let c=o.call(a,r);c||(r=qe(r),c=o.call(a,r));const u=l.call(a,r);return a.set(r,s),c?Xn(s,u)&&Rn(a,"set",r,s):Rn(a,"add",r,s),this},delete(r){const s=qe(this),{has:a,get:o}=Kr(s);let l=a.call(s,r);l||(r=qe(r),l=a.call(s,r)),o&&o.call(s,r);const c=s.delete(r);return l&&Rn(s,"delete",r,void 0),c},clear(){const r=qe(this),s=r.size!==0,a=r.clear();return s&&Rn(r,"clear",void 0,void 0),a}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Wh(r,n,e)}),t}function La(n,e){const t=jh(n,e);return(i,r,s)=>r==="__v_isReactive"?!n:r==="__v_isReadonly"?n:r==="__v_raw"?i:Reflect.get(Ye(t,r)&&r in i?t:i,r,s)}const Xh={get:La(!1,!1)},qh={get:La(!1,!0)},Yh={get:La(!0,!1)};const Iu=new WeakMap,Ou=new WeakMap,Fu=new WeakMap,Zh=new WeakMap;function $h(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Kh(n){return n.__v_skip||!Object.isExtensible(n)?0:$h(bh(n))}function Gs(n){return vi(n)?n:Ra(n,!1,kh,Xh,Iu)}function Nu(n){return Ra(n,!1,Hh,qh,Ou)}function Uu(n){return Ra(n,!0,Vh,Yh,Fu)}function Ra(n,e,t,i,r){if(!tt(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const s=r.get(n);if(s)return s;const a=Kh(n);if(a===0)return n;const o=new Proxy(n,a===2?i:t);return r.set(n,o),o}function Yi(n){return vi(n)?Yi(n.__v_raw):!!(n&&n.__v_isReactive)}function vi(n){return!!(n&&n.__v_isReadonly)}function Kt(n){return!!(n&&n.__v_isShallow)}function Da(n){return n?!!n.__v_raw:!1}function qe(n){const e=n&&n.__v_raw;return e?qe(e):n}function Jh(n){return!Ye(n,"__v_skip")&&Object.isExtensible(n)&&yu(n,"__v_skip",!0),n}const bt=n=>tt(n)?Gs(n):n,ta=n=>tt(n)?Uu(n):n;function Mt(n){return n?n.__v_isRef===!0:!1}function Qh(n){return zu(n,!1)}function ed(n){return zu(n,!0)}function zu(n,e){return Mt(n)?n:new td(n,e)}class td{constructor(e,t){this.dep=new Pa,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?e:qe(e),this._value=t?e:bt(e),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(e){const t=this._rawValue,i=this.__v_isShallow||Kt(e)||vi(e);e=i?e:qe(e),Xn(e,t)&&(this._rawValue=e,this._value=i?e:bt(e),this.dep.trigger())}}function gi(n){return Mt(n)?n.value:n}const nd={get:(n,e,t)=>e==="__v_raw"?n:gi(Reflect.get(n,e,t)),set:(n,e,t,i)=>{const r=n[e];return Mt(r)&&!Mt(t)?(r.value=t,!0):Reflect.set(n,e,t,i)}};function Bu(n){return Yi(n)?n:new Proxy(n,nd)}class id{constructor(e,t,i){this.fn=e,this.setter=t,this._value=void 0,this.dep=new Pa(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ir-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&$e!==this)return wu(this,!0),!0}get value(){const e=this.dep.track();return Au(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function rd(n,e,t=!1){let i,r;return Ne(n)?i=n:(i=n.get,r=n.set),new id(i,r,t)}const Qr={},Cs=new WeakMap;let li;function sd(n,e=!1,t=li){if(t){let i=Cs.get(t);i||Cs.set(t,i=[]),i.push(n)}}function od(n,e,t=Ke){const{immediate:i,deep:r,once:s,scheduler:a,augmentJob:o,call:l}=t,c=b=>r?b:Kt(b)||r===!1||r===0?Hn(b,1):Hn(b);let u,f,h,d,g=!1,p=!1;if(Mt(n)?(f=()=>n.value,g=Kt(n)):Yi(n)?(f=()=>c(n),g=!0):Fe(n)?(p=!0,g=n.some(b=>Yi(b)||Kt(b)),f=()=>n.map(b=>{if(Mt(b))return b.value;if(Yi(b))return c(b);if(Ne(b))return l?l(b,2):b()})):Ne(n)?e?f=l?()=>l(n,2):n:f=()=>{if(h){Kn();try{h()}finally{Jn()}}const b=li;li=u;try{return l?l(n,3,[d]):n(d)}finally{li=b}}:f=sn,e&&r){const b=f,E=r===!0?1/0:r;f=()=>Hn(b(),E)}const m=Ih(),_=()=>{u.stop(),m&&Sa(m.effects,u)};if(s&&e){const b=e;e=(...E)=>{b(...E),_()}}let M=p?new Array(n.length).fill(Qr):Qr;const v=b=>{if(!(!(u.flags&1)||!u.dirty&&!b))if(e){const E=u.run();if(r||g||(p?E.some((L,I)=>Xn(L,M[I])):Xn(E,M))){h&&h();const L=li;li=u;try{const I=[E,M===Qr?void 0:p&&M[0]===Qr?[]:M,d];l?l(e,3,I):e(...I),M=E}finally{li=L}}}else u.run()};return o&&o(v),u=new Mu(f),u.scheduler=a?()=>a(v,!1):v,d=b=>sd(b,!1,u),h=u.onStop=()=>{const b=Cs.get(u);if(b){if(l)l(b,4);else for(const E of b)E();Cs.delete(u)}},e?i?v(!0):M=u.run():a?a(v.bind(null,!0),!0):u.run(),_.pause=u.pause.bind(u),_.resume=u.resume.bind(u),_.stop=_,_}function Hn(n,e=1/0,t){if(e<=0||!tt(n)||n.__v_skip||(t=t||new Set,t.has(n)))return n;if(t.add(n),e--,Mt(n))Hn(n.value,e,t);else if(Fe(n))for(let i=0;i<n.length;i++)Hn(n[i],e,t);else if(xh(n)||wr(n))n.forEach(i=>{Hn(i,e,t)});else if(Mh(n)){for(const i in n)Hn(n[i],e,t);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Hn(n[i],e,t)}return n}/**
* @vue/runtime-core v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function jr(n,e,t,i){try{return i?n(...i):n()}catch(r){ks(r,e,t)}}function bn(n,e,t,i){if(Ne(n)){const r=jr(n,e,t,i);return r&&vu(r)&&r.catch(s=>{ks(s,e,t)}),r}if(Fe(n)){const r=[];for(let s=0;s<n.length;s++)r.push(bn(n[s],e,t,i));return r}}function ks(n,e,t,i=!0){const r=e?e.vnode:null,{errorHandler:s,throwUnhandledErrorInProduction:a}=e&&e.appContext.config||Ke;if(e){let o=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const u=o.ec;if(u){for(let f=0;f<u.length;f++)if(u[f](n,l,c)===!1)return}o=o.parent}if(s){Kn(),jr(s,null,10,[n,l,c]),Jn();return}}ad(n,t,r,i,a)}function ad(n,e,t,i=!0,r=!1){if(r)throw n;console.error(n)}const Lt=[];let dn=-1;const Zi=[];let Gn=null,Vi=0;const Gu=Promise.resolve();let Ps=null;function ku(n){const e=Ps||Gu;return n?e.then(this?n.bind(this):n):e}function ld(n){let e=dn+1,t=Lt.length;for(;e<t;){const i=e+t>>>1,r=Lt[i],s=Fr(r);s<n||s===n&&r.flags&2?e=i+1:t=i}return e}function Ia(n){if(!(n.flags&1)){const e=Fr(n),t=Lt[Lt.length-1];!t||!(n.flags&2)&&e>=Fr(t)?Lt.push(n):Lt.splice(ld(e),0,n),n.flags|=1,Vu()}}function Vu(){Ps||(Ps=Gu.then(Wu))}function cd(n){Fe(n)?Zi.push(...n):Gn&&n.id===-1?Gn.splice(Vi+1,0,n):n.flags&1||(Zi.push(n),n.flags|=1),Vu()}function el(n,e,t=dn+1){for(;t<Lt.length;t++){const i=Lt[t];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Lt.splice(t,1),t--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function Hu(n){if(Zi.length){const e=[...new Set(Zi)].sort((t,i)=>Fr(t)-Fr(i));if(Zi.length=0,Gn){Gn.push(...e);return}for(Gn=e,Vi=0;Vi<Gn.length;Vi++){const t=Gn[Vi];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Gn=null,Vi=0}}const Fr=n=>n.id==null?n.flags&2?-1:1/0:n.id;function Wu(n){const e=sn;try{for(dn=0;dn<Lt.length;dn++){const t=Lt[dn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),jr(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;dn<Lt.length;dn++){const t=Lt[dn];t&&(t.flags&=-2)}dn=-1,Lt.length=0,Hu(),Ps=null,(Lt.length||Zi.length)&&Wu()}}let _n=null,ju=null;function Ls(n){const e=_n;return _n=n,ju=n&&n.type.__scopeId||null,e}function ud(n,e=_n,t){if(!e||n._n)return n;const i=(...r)=>{i._d&&cl(-1);const s=Ls(e);let a;try{a=n(...r)}finally{Ls(s),i._d&&cl(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function ni(n,e,t,i){const r=n.dirs,s=e&&e.dirs;for(let a=0;a<r.length;a++){const o=r[a];s&&(o.oldValue=s[a].value);let l=o.dir[i];l&&(Kn(),bn(l,t,8,[n.el,o,n,e]),Jn())}}const fd=Symbol("_vte"),hd=n=>n.__isTeleport;function Oa(n,e){n.shapeFlag&6&&n.component?(n.transition=e,Oa(n.component.subTree,e)):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Fa(n,e){return Ne(n)?(()=>gt({name:n.name},e,{setup:n}))():n}function Xu(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function na(n,e,t,i,r=!1){if(Fe(n)){n.forEach((g,p)=>na(g,e&&(Fe(e)?e[p]:e),t,i,r));return}if(Cr(i)&&!r)return;const s=i.shapeFlag&4?Ba(i.component):i.el,a=r?null:s,{i:o,r:l}=n,c=e&&e.r,u=o.refs===Ke?o.refs={}:o.refs,f=o.setupState,h=qe(f),d=f===Ke?()=>!1:g=>Ye(h,g);if(c!=null&&c!==l&&(ct(c)?(u[c]=null,d(c)&&(f[c]=null)):Mt(c)&&(c.value=null)),Ne(l))jr(l,o,12,[a,u]);else{const g=ct(l),p=Mt(l);if(g||p){const m=()=>{if(n.f){const _=g?d(l)?f[l]:u[l]:l.value;r?Fe(_)&&Sa(_,s):Fe(_)?_.includes(s)||_.push(s):g?(u[l]=[s],d(l)&&(f[l]=u[l])):(l.value=[s],n.k&&(u[n.k]=l.value))}else g?(u[l]=a,d(l)&&(f[l]=a)):p&&(l.value=a,n.k&&(u[n.k]=a))};a?(m.id=-1,Vt(m,t)):m()}}}Us().requestIdleCallback;Us().cancelIdleCallback;const Cr=n=>!!n.type.__asyncLoader,qu=n=>n.type.__isKeepAlive;function dd(n,e){Yu(n,"a",e)}function pd(n,e){Yu(n,"da",e)}function Yu(n,e,t=Rt){const i=n.__wdc||(n.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return n()});if(Vs(e,i,t),t){let r=t.parent;for(;r&&r.parent;)qu(r.parent.vnode)&&md(i,e,t,r),r=r.parent}}function md(n,e,t,i){const r=Vs(e,n,i,!0);$u(()=>{Sa(i[e],r)},t)}function Vs(n,e,t=Rt,i=!1){if(t){const r=t[n]||(t[n]=[]),s=e.__weh||(e.__weh=(...a)=>{Kn();const o=Xr(t),l=bn(e,t,n,a);return o(),Jn(),l});return i?r.unshift(s):r.push(s),s}}const On=n=>(e,t=Rt)=>{(!zr||n==="sp")&&Vs(n,(...i)=>e(...i),t)},gd=On("bm"),Zu=On("m"),_d=On("bu"),vd=On("u"),xd=On("bum"),$u=On("um"),yd=On("sp"),bd=On("rtg"),Md=On("rtc");function Sd(n,e=Rt){Vs("ec",n,e)}const wd=Symbol.for("v-ndc");function tl(n,e,t,i){let r;const s=t&&t[i],a=Fe(n);if(a||ct(n)){const o=a&&Yi(n);let l=!1;o&&(l=!Kt(n),n=Bs(n)),r=new Array(n.length);for(let c=0,u=n.length;c<u;c++)r[c]=e(l?bt(n[c]):n[c],c,void 0,s&&s[c])}else if(typeof n=="number"){r=new Array(n);for(let o=0;o<n;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(tt(n))if(n[Symbol.iterator])r=Array.from(n,(o,l)=>e(o,l,void 0,s&&s[l]));else{const o=Object.keys(n);r=new Array(o.length);for(let l=0,c=o.length;l<c;l++){const u=o[l];r[l]=e(n[u],u,l,s&&s[l])}}else r=[];return t&&(t[i]=r),r}const ia=n=>n?_f(n)?Ba(n):ia(n.parent):null,Pr=gt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>ia(n.parent),$root:n=>ia(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>Na(n),$forceUpdate:n=>n.f||(n.f=()=>{Ia(n.update)}),$nextTick:n=>n.n||(n.n=ku.bind(n.proxy)),$watch:n=>jd.bind(n)}),ao=(n,e)=>n!==Ke&&!n.__isScriptSetup&&Ye(n,e),Ed={get({_:n},e){if(e==="__v_skip")return!0;const{ctx:t,setupState:i,data:r,props:s,accessCache:a,type:o,appContext:l}=n;let c;if(e[0]!=="$"){const d=a[e];if(d!==void 0)switch(d){case 1:return i[e];case 2:return r[e];case 4:return t[e];case 3:return s[e]}else{if(ao(i,e))return a[e]=1,i[e];if(r!==Ke&&Ye(r,e))return a[e]=2,r[e];if((c=n.propsOptions[0])&&Ye(c,e))return a[e]=3,s[e];if(t!==Ke&&Ye(t,e))return a[e]=4,t[e];ra&&(a[e]=0)}}const u=Pr[e];let f,h;if(u)return e==="$attrs"&&yt(n.attrs,"get",""),u(n);if((f=o.__cssModules)&&(f=f[e]))return f;if(t!==Ke&&Ye(t,e))return a[e]=4,t[e];if(h=l.config.globalProperties,Ye(h,e))return h[e]},set({_:n},e,t){const{data:i,setupState:r,ctx:s}=n;return ao(r,e)?(r[e]=t,!0):i!==Ke&&Ye(i,e)?(i[e]=t,!0):Ye(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(s[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:i,appContext:r,propsOptions:s}},a){let o;return!!t[a]||n!==Ke&&Ye(n,a)||ao(e,a)||(o=s[0])&&Ye(o,a)||Ye(i,a)||Ye(Pr,a)||Ye(r.config.globalProperties,a)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:Ye(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};function nl(n){return Fe(n)?n.reduce((e,t)=>(e[t]=null,e),{}):n}let ra=!0;function Td(n){const e=Na(n),t=n.proxy,i=n.ctx;ra=!1,e.beforeCreate&&il(e.beforeCreate,n,"bc");const{data:r,computed:s,methods:a,watch:o,provide:l,inject:c,created:u,beforeMount:f,mounted:h,beforeUpdate:d,updated:g,activated:p,deactivated:m,beforeDestroy:_,beforeUnmount:M,destroyed:v,unmounted:b,render:E,renderTracked:L,renderTriggered:I,errorCaptured:S,serverPrefetch:P,expose:N,inheritAttrs:se,components:ae,directives:V,filters:z}=e;if(c&&Ad(c,i,null),a)for(const re in a){const j=a[re];Ne(j)&&(i[re]=j.bind(t))}if(r){const re=r.call(t,t);tt(re)&&(n.data=Gs(re))}if(ra=!0,s)for(const re in s){const j=s[re],de=Ne(j)?j.bind(t,t):Ne(j.get)?j.get.bind(t,t):sn,ce=!Ne(j)&&Ne(j.set)?j.set.bind(t):sn,Ee=tn({get:de,set:ce});Object.defineProperty(i,re,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:k=>Ee.value=k})}if(o)for(const re in o)Ku(o[re],i,t,re);if(l){const re=Ne(l)?l.call(t):l;Reflect.ownKeys(re).forEach(j=>{Ss(j,re[j])})}u&&il(u,n,"c");function te(re,j){Fe(j)?j.forEach(de=>re(de.bind(t))):j&&re(j.bind(t))}if(te(gd,f),te(Zu,h),te(_d,d),te(vd,g),te(dd,p),te(pd,m),te(Sd,S),te(Md,L),te(bd,I),te(xd,M),te($u,b),te(yd,P),Fe(N))if(N.length){const re=n.exposed||(n.exposed={});N.forEach(j=>{Object.defineProperty(re,j,{get:()=>t[j],set:de=>t[j]=de})})}else n.exposed||(n.exposed={});E&&n.render===sn&&(n.render=E),se!=null&&(n.inheritAttrs=se),ae&&(n.components=ae),V&&(n.directives=V),P&&Xu(n)}function Ad(n,e,t=sn){Fe(n)&&(n=sa(n));for(const i in n){const r=n[i];let s;tt(r)?"default"in r?s=xn(r.from||i,r.default,!0):s=xn(r.from||i):s=xn(r),Mt(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):e[i]=s}}function il(n,e,t){bn(Fe(n)?n.map(i=>i.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ku(n,e,t,i){let r=i.includes(".")?hf(t,i):()=>t[i];if(ct(n)){const s=e[n];Ne(s)&&ws(r,s)}else if(Ne(n))ws(r,n.bind(t));else if(tt(n))if(Fe(n))n.forEach(s=>Ku(s,e,t,i));else{const s=Ne(n.handler)?n.handler.bind(t):e[n.handler];Ne(s)&&ws(r,s,n)}}function Na(n){const e=n.type,{mixins:t,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:a}}=n.appContext,o=s.get(e);let l;return o?l=o:!r.length&&!t&&!i?l=e:(l={},r.length&&r.forEach(c=>Rs(l,c,a,!0)),Rs(l,e,a)),tt(e)&&s.set(e,l),l}function Rs(n,e,t,i=!1){const{mixins:r,extends:s}=e;s&&Rs(n,s,t,!0),r&&r.forEach(a=>Rs(n,a,t,!0));for(const a in e)if(!(i&&a==="expose")){const o=Cd[a]||t&&t[a];n[a]=o?o(n[a],e[a]):e[a]}return n}const Cd={data:rl,props:sl,emits:sl,methods:br,computed:br,beforeCreate:At,created:At,beforeMount:At,mounted:At,beforeUpdate:At,updated:At,beforeDestroy:At,beforeUnmount:At,destroyed:At,unmounted:At,activated:At,deactivated:At,errorCaptured:At,serverPrefetch:At,components:br,directives:br,watch:Ld,provide:rl,inject:Pd};function rl(n,e){return e?n?function(){return gt(Ne(n)?n.call(this,this):n,Ne(e)?e.call(this,this):e)}:e:n}function Pd(n,e){return br(sa(n),sa(e))}function sa(n){if(Fe(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function At(n,e){return n?[...new Set([].concat(n,e))]:e}function br(n,e){return n?gt(Object.create(null),n,e):e}function sl(n,e){return n?Fe(n)&&Fe(e)?[...new Set([...n,...e])]:gt(Object.create(null),nl(n),nl(e??{})):e}function Ld(n,e){if(!n)return e;if(!e)return n;const t=gt(Object.create(null),n);for(const i in e)t[i]=At(n[i],e[i]);return t}function Ju(){return{app:null,config:{isNativeTag:_h,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Rd=0;function Dd(n,e){return function(i,r=null){Ne(i)||(i=gt({},i)),r!=null&&!tt(r)&&(r=null);const s=Ju(),a=new WeakSet,o=[];let l=!1;const c=s.app={_uid:Rd++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:dp,get config(){return s.config},set config(u){},use(u,...f){return a.has(u)||(u&&Ne(u.install)?(a.add(u),u.install(c,...f)):Ne(u)&&(a.add(u),u(c,...f))),c},mixin(u){return s.mixins.includes(u)||s.mixins.push(u),c},component(u,f){return f?(s.components[u]=f,c):s.components[u]},directive(u,f){return f?(s.directives[u]=f,c):s.directives[u]},mount(u,f,h){if(!l){const d=c._ceVNode||$t(i,r);return d.appContext=s,h===!0?h="svg":h===!1&&(h=void 0),f&&e?e(d,u):n(d,u,h),l=!0,c._container=u,u.__vue_app__=c,Ba(d.component)}},onUnmount(u){o.push(u)},unmount(){l&&(bn(o,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,f){return s.provides[u]=f,c},runWithContext(u){const f=$i;$i=c;try{return u()}finally{$i=f}}};return c}}let $i=null;function Ss(n,e){if(Rt){let t=Rt.provides;const i=Rt.parent&&Rt.parent.provides;i===t&&(t=Rt.provides=Object.create(i)),t[n]=e}}function xn(n,e,t=!1){const i=Rt||_n;if(i||$i){const r=$i?$i._context.provides:i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(r&&n in r)return r[n];if(arguments.length>1)return t&&Ne(e)?e.call(i&&i.proxy):e}}const Qu={},ef=()=>Object.create(Qu),tf=n=>Object.getPrototypeOf(n)===Qu;function Id(n,e,t,i=!1){const r={},s=ef();n.propsDefaults=Object.create(null),nf(n,e,r,s);for(const a in n.propsOptions[0])a in r||(r[a]=void 0);t?n.props=i?r:Nu(r):n.type.props?n.props=r:n.props=s,n.attrs=s}function Od(n,e,t,i){const{props:r,attrs:s,vnode:{patchFlag:a}}=n,o=qe(r),[l]=n.propsOptions;let c=!1;if((i||a>0)&&!(a&16)){if(a&8){const u=n.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Hs(n.emitsOptions,h))continue;const d=e[h];if(l)if(Ye(s,h))d!==s[h]&&(s[h]=d,c=!0);else{const g=Yn(h);r[g]=oa(l,o,g,d,n,!1)}else d!==s[h]&&(s[h]=d,c=!0)}}}else{nf(n,e,r,s)&&(c=!0);let u;for(const f in o)(!e||!Ye(e,f)&&((u=Si(f))===f||!Ye(e,u)))&&(l?t&&(t[f]!==void 0||t[u]!==void 0)&&(r[f]=oa(l,o,f,void 0,n,!0)):delete r[f]);if(s!==o)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&Rn(n.attrs,"set","")}function nf(n,e,t,i){const[r,s]=n.propsOptions;let a=!1,o;if(e)for(let l in e){if(Er(l))continue;const c=e[l];let u;r&&Ye(r,u=Yn(l))?!s||!s.includes(u)?t[u]=c:(o||(o={}))[u]=c:Hs(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,a=!0)}if(s){const l=qe(t),c=o||Ke;for(let u=0;u<s.length;u++){const f=s[u];t[f]=oa(r,l,f,c[f],n,!Ye(c,f))}}return a}function oa(n,e,t,i,r,s){const a=n[t];if(a!=null){const o=Ye(a,"default");if(o&&i===void 0){const l=a.default;if(a.type!==Function&&!a.skipFactory&&Ne(l)){const{propsDefaults:c}=r;if(t in c)i=c[t];else{const u=Xr(r);i=c[t]=l.call(null,e),u()}}else i=l;r.ce&&r.ce._setProp(t,i)}a[0]&&(s&&!o?i=!1:a[1]&&(i===""||i===Si(t))&&(i=!0))}return i}const Fd=new WeakMap;function rf(n,e,t=!1){const i=t?Fd:e.propsCache,r=i.get(n);if(r)return r;const s=n.props,a={},o=[];let l=!1;if(!Ne(n)){const u=f=>{l=!0;const[h,d]=rf(f,e,!0);gt(a,h),d&&o.push(...d)};!t&&e.mixins.length&&e.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!s&&!l)return tt(n)&&i.set(n,qi),qi;if(Fe(s))for(let u=0;u<s.length;u++){const f=Yn(s[u]);ol(f)&&(a[f]=Ke)}else if(s)for(const u in s){const f=Yn(u);if(ol(f)){const h=s[u],d=a[f]=Fe(h)||Ne(h)?{type:h}:gt({},h),g=d.type;let p=!1,m=!0;if(Fe(g))for(let _=0;_<g.length;++_){const M=g[_],v=Ne(M)&&M.name;if(v==="Boolean"){p=!0;break}else v==="String"&&(m=!1)}else p=Ne(g)&&g.name==="Boolean";d[0]=p,d[1]=m,(p||Ye(d,"default"))&&o.push(f)}}const c=[a,o];return tt(n)&&i.set(n,c),c}function ol(n){return n[0]!=="$"&&!Er(n)}const sf=n=>n[0]==="_"||n==="$stable",Ua=n=>Fe(n)?n.map(mn):[mn(n)],Nd=(n,e,t)=>{if(e._n)return e;const i=ud((...r)=>Ua(e(...r)),t);return i._c=!1,i},of=(n,e,t)=>{const i=n._ctx;for(const r in n){if(sf(r))continue;const s=n[r];if(Ne(s))e[r]=Nd(r,s,i);else if(s!=null){const a=Ua(s);e[r]=()=>a}}},af=(n,e)=>{const t=Ua(e);n.slots.default=()=>t},lf=(n,e,t)=>{for(const i in e)(t||i!=="_")&&(n[i]=e[i])},Ud=(n,e,t)=>{const i=n.slots=ef();if(n.vnode.shapeFlag&32){const r=e._;r?(lf(i,e,t),t&&yu(i,"_",r,!0)):of(e,i)}else e&&af(n,e)},zd=(n,e,t)=>{const{vnode:i,slots:r}=n;let s=!0,a=Ke;if(i.shapeFlag&32){const o=e._;o?t&&o===1?s=!1:lf(r,e,t):(s=!e.$stable,of(e,r)),a=e}else e&&(af(n,e),a={default:1});if(s)for(const o in r)!sf(o)&&a[o]==null&&delete r[o]},Vt=Jd;function Bd(n){return Gd(n)}function Gd(n,e){const t=Us();t.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:a,createText:o,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:h,setScopeId:d=sn,insertStaticContent:g}=n,p=(w,C,B,ne=null,Y=null,Q=null,ue=void 0,pe=null,he=!!C.dynamicChildren)=>{if(w===C)return;w&&!fr(w,C)&&(ne=O(w),k(w,Y,Q,!0),w=null),C.patchFlag===-2&&(he=!1,C.dynamicChildren=null);const{type:y,ref:x,shapeFlag:R}=C;switch(y){case Ws:m(w,C,B,ne);break;case Nr:_(w,C,B,ne);break;case uo:w==null&&M(C,B,ne,ue);break;case Yt:ae(w,C,B,ne,Y,Q,ue,pe,he);break;default:R&1?E(w,C,B,ne,Y,Q,ue,pe,he):R&6?V(w,C,B,ne,Y,Q,ue,pe,he):(R&64||R&128)&&y.process(w,C,B,ne,Y,Q,ue,pe,he,oe)}x!=null&&Y&&na(x,w&&w.ref,Q,C||w,!C)},m=(w,C,B,ne)=>{if(w==null)i(C.el=o(C.children),B,ne);else{const Y=C.el=w.el;C.children!==w.children&&c(Y,C.children)}},_=(w,C,B,ne)=>{w==null?i(C.el=l(C.children||""),B,ne):C.el=w.el},M=(w,C,B,ne)=>{[w.el,w.anchor]=g(w.children,C,B,ne,w.el,w.anchor)},v=({el:w,anchor:C},B,ne)=>{let Y;for(;w&&w!==C;)Y=h(w),i(w,B,ne),w=Y;i(C,B,ne)},b=({el:w,anchor:C})=>{let B;for(;w&&w!==C;)B=h(w),r(w),w=B;r(C)},E=(w,C,B,ne,Y,Q,ue,pe,he)=>{C.type==="svg"?ue="svg":C.type==="math"&&(ue="mathml"),w==null?L(C,B,ne,Y,Q,ue,pe,he):P(w,C,Y,Q,ue,pe,he)},L=(w,C,B,ne,Y,Q,ue,pe)=>{let he,y;const{props:x,shapeFlag:R,transition:X,dirs:Z}=w;if(he=w.el=a(w.type,Q,x&&x.is,x),R&8?u(he,w.children):R&16&&S(w.children,he,null,ne,Y,lo(w,Q),ue,pe),Z&&ni(w,null,ne,"created"),I(he,w,w.scopeId,ue,ne),x){for(const xe in x)xe!=="value"&&!Er(xe)&&s(he,xe,null,x[xe],Q,ne);"value"in x&&s(he,"value",null,x.value,Q),(y=x.onVnodeBeforeMount)&&fn(y,ne,w)}Z&&ni(w,null,ne,"beforeMount");const le=kd(Y,X);le&&X.beforeEnter(he),i(he,C,B),((y=x&&x.onVnodeMounted)||le||Z)&&Vt(()=>{y&&fn(y,ne,w),le&&X.enter(he),Z&&ni(w,null,ne,"mounted")},Y)},I=(w,C,B,ne,Y)=>{if(B&&d(w,B),ne)for(let Q=0;Q<ne.length;Q++)d(w,ne[Q]);if(Y){let Q=Y.subTree;if(C===Q||pf(Q.type)&&(Q.ssContent===C||Q.ssFallback===C)){const ue=Y.vnode;I(w,ue,ue.scopeId,ue.slotScopeIds,Y.parent)}}},S=(w,C,B,ne,Y,Q,ue,pe,he=0)=>{for(let y=he;y<w.length;y++){const x=w[y]=pe?kn(w[y]):mn(w[y]);p(null,x,C,B,ne,Y,Q,ue,pe)}},P=(w,C,B,ne,Y,Q,ue)=>{const pe=C.el=w.el;let{patchFlag:he,dynamicChildren:y,dirs:x}=C;he|=w.patchFlag&16;const R=w.props||Ke,X=C.props||Ke;let Z;if(B&&ii(B,!1),(Z=X.onVnodeBeforeUpdate)&&fn(Z,B,C,w),x&&ni(C,w,B,"beforeUpdate"),B&&ii(B,!0),(R.innerHTML&&X.innerHTML==null||R.textContent&&X.textContent==null)&&u(pe,""),y?N(w.dynamicChildren,y,pe,B,ne,lo(C,Y),Q):ue||j(w,C,pe,null,B,ne,lo(C,Y),Q,!1),he>0){if(he&16)se(pe,R,X,B,Y);else if(he&2&&R.class!==X.class&&s(pe,"class",null,X.class,Y),he&4&&s(pe,"style",R.style,X.style,Y),he&8){const le=C.dynamicProps;for(let xe=0;xe<le.length;xe++){const A=le[xe],F=R[A],ve=X[A];(ve!==F||A==="value")&&s(pe,A,F,ve,Y,B)}}he&1&&w.children!==C.children&&u(pe,C.children)}else!ue&&y==null&&se(pe,R,X,B,Y);((Z=X.onVnodeUpdated)||x)&&Vt(()=>{Z&&fn(Z,B,C,w),x&&ni(C,w,B,"updated")},ne)},N=(w,C,B,ne,Y,Q,ue)=>{for(let pe=0;pe<C.length;pe++){const he=w[pe],y=C[pe],x=he.el&&(he.type===Yt||!fr(he,y)||he.shapeFlag&70)?f(he.el):B;p(he,y,x,null,ne,Y,Q,ue,!0)}},se=(w,C,B,ne,Y)=>{if(C!==B){if(C!==Ke)for(const Q in C)!Er(Q)&&!(Q in B)&&s(w,Q,C[Q],null,Y,ne);for(const Q in B){if(Er(Q))continue;const ue=B[Q],pe=C[Q];ue!==pe&&Q!=="value"&&s(w,Q,pe,ue,Y,ne)}"value"in B&&s(w,"value",C.value,B.value,Y)}},ae=(w,C,B,ne,Y,Q,ue,pe,he)=>{const y=C.el=w?w.el:o(""),x=C.anchor=w?w.anchor:o("");let{patchFlag:R,dynamicChildren:X,slotScopeIds:Z}=C;Z&&(pe=pe?pe.concat(Z):Z),w==null?(i(y,B,ne),i(x,B,ne),S(C.children||[],B,x,Y,Q,ue,pe,he)):R>0&&R&64&&X&&w.dynamicChildren?(N(w.dynamicChildren,X,B,Y,Q,ue,pe),(C.key!=null||Y&&C===Y.subTree)&&cf(w,C,!0)):j(w,C,B,x,Y,Q,ue,pe,he)},V=(w,C,B,ne,Y,Q,ue,pe,he)=>{C.slotScopeIds=pe,w==null?C.shapeFlag&512?Y.ctx.activate(C,B,ne,ue,he):z(C,B,ne,Y,Q,ue,he):$(w,C,he)},z=(w,C,B,ne,Y,Q,ue)=>{const pe=w.component=ap(w,ne,Y);if(qu(w)&&(pe.ctx.renderer=oe),lp(pe,!1,ue),pe.asyncDep){if(Y&&Y.registerDep(pe,te,ue),!w.el){const he=pe.subTree=$t(Nr);_(null,he,C,B)}}else te(pe,w,C,B,Y,Q,ue)},$=(w,C,B)=>{const ne=C.component=w.component;if($d(w,C,B))if(ne.asyncDep&&!ne.asyncResolved){re(ne,C,B);return}else ne.next=C,ne.update();else C.el=w.el,ne.vnode=C},te=(w,C,B,ne,Y,Q,ue)=>{const pe=()=>{if(w.isMounted){let{next:R,bu:X,u:Z,parent:le,vnode:xe}=w;{const Me=uf(w);if(Me){R&&(R.el=xe.el,re(w,R,ue)),Me.asyncDep.then(()=>{w.isUnmounted||pe()});return}}let A=R,F;ii(w,!1),R?(R.el=xe.el,re(w,R,ue)):R=xe,X&&io(X),(F=R.props&&R.props.onVnodeBeforeUpdate)&&fn(F,le,R,xe),ii(w,!0);const ve=co(w),ge=w.subTree;w.subTree=ve,p(ge,ve,f(ge.el),O(ge),w,Y,Q),R.el=ve.el,A===null&&Kd(w,ve.el),Z&&Vt(Z,Y),(F=R.props&&R.props.onVnodeUpdated)&&Vt(()=>fn(F,le,R,xe),Y)}else{let R;const{el:X,props:Z}=C,{bm:le,m:xe,parent:A,root:F,type:ve}=w,ge=Cr(C);if(ii(w,!1),le&&io(le),!ge&&(R=Z&&Z.onVnodeBeforeMount)&&fn(R,A,C),ii(w,!0),X&&Te){const Me=()=>{w.subTree=co(w),Te(X,w.subTree,w,Y,null)};ge&&ve.__asyncHydrate?ve.__asyncHydrate(X,w,Me):Me()}else{F.ce&&F.ce._injectChildStyle(ve);const Me=w.subTree=co(w);p(null,Me,B,ne,w,Y,Q),C.el=Me.el}if(xe&&Vt(xe,Y),!ge&&(R=Z&&Z.onVnodeMounted)){const Me=C;Vt(()=>fn(R,A,Me),Y)}(C.shapeFlag&256||A&&Cr(A.vnode)&&A.vnode.shapeFlag&256)&&w.a&&Vt(w.a,Y),w.isMounted=!0,C=B=ne=null}};w.scope.on();const he=w.effect=new Mu(pe);w.scope.off();const y=w.update=he.run.bind(he),x=w.job=he.runIfDirty.bind(he);x.i=w,x.id=w.uid,he.scheduler=()=>Ia(x),ii(w,!0),y()},re=(w,C,B)=>{C.component=w;const ne=w.vnode.props;w.vnode=C,w.next=null,Od(w,C.props,ne,B),zd(w,C.children,B),Kn(),el(w),Jn()},j=(w,C,B,ne,Y,Q,ue,pe,he=!1)=>{const y=w&&w.children,x=w?w.shapeFlag:0,R=C.children,{patchFlag:X,shapeFlag:Z}=C;if(X>0){if(X&128){ce(y,R,B,ne,Y,Q,ue,pe,he);return}else if(X&256){de(y,R,B,ne,Y,Q,ue,pe,he);return}}Z&8?(x&16&&be(y,Y,Q),R!==y&&u(B,R)):x&16?Z&16?ce(y,R,B,ne,Y,Q,ue,pe,he):be(y,Y,Q,!0):(x&8&&u(B,""),Z&16&&S(R,B,ne,Y,Q,ue,pe,he))},de=(w,C,B,ne,Y,Q,ue,pe,he)=>{w=w||qi,C=C||qi;const y=w.length,x=C.length,R=Math.min(y,x);let X;for(X=0;X<R;X++){const Z=C[X]=he?kn(C[X]):mn(C[X]);p(w[X],Z,B,null,Y,Q,ue,pe,he)}y>x?be(w,Y,Q,!0,!1,R):S(C,B,ne,Y,Q,ue,pe,he,R)},ce=(w,C,B,ne,Y,Q,ue,pe,he)=>{let y=0;const x=C.length;let R=w.length-1,X=x-1;for(;y<=R&&y<=X;){const Z=w[y],le=C[y]=he?kn(C[y]):mn(C[y]);if(fr(Z,le))p(Z,le,B,null,Y,Q,ue,pe,he);else break;y++}for(;y<=R&&y<=X;){const Z=w[R],le=C[X]=he?kn(C[X]):mn(C[X]);if(fr(Z,le))p(Z,le,B,null,Y,Q,ue,pe,he);else break;R--,X--}if(y>R){if(y<=X){const Z=X+1,le=Z<x?C[Z].el:ne;for(;y<=X;)p(null,C[y]=he?kn(C[y]):mn(C[y]),B,le,Y,Q,ue,pe,he),y++}}else if(y>X)for(;y<=R;)k(w[y],Y,Q,!0),y++;else{const Z=y,le=y,xe=new Map;for(y=le;y<=X;y++){const Re=C[y]=he?kn(C[y]):mn(C[y]);Re.key!=null&&xe.set(Re.key,y)}let A,F=0;const ve=X-le+1;let ge=!1,Me=0;const Ae=new Array(ve);for(y=0;y<ve;y++)Ae[y]=0;for(y=Z;y<=R;y++){const Re=w[y];if(F>=ve){k(Re,Y,Q,!0);continue}let De;if(Re.key!=null)De=xe.get(Re.key);else for(A=le;A<=X;A++)if(Ae[A-le]===0&&fr(Re,C[A])){De=A;break}De===void 0?k(Re,Y,Q,!0):(Ae[De-le]=y+1,De>=Me?Me=De:ge=!0,p(Re,C[De],B,null,Y,Q,ue,pe,he),F++)}const Ce=ge?Vd(Ae):qi;for(A=Ce.length-1,y=ve-1;y>=0;y--){const Re=le+y,De=C[Re],je=Re+1<x?C[Re+1].el:ne;Ae[y]===0?p(null,De,B,je,Y,Q,ue,pe,he):ge&&(A<0||y!==Ce[A]?Ee(De,B,je,2):A--)}}},Ee=(w,C,B,ne,Y=null)=>{const{el:Q,type:ue,transition:pe,children:he,shapeFlag:y}=w;if(y&6){Ee(w.component.subTree,C,B,ne);return}if(y&128){w.suspense.move(C,B,ne);return}if(y&64){ue.move(w,C,B,oe);return}if(ue===Yt){i(Q,C,B);for(let R=0;R<he.length;R++)Ee(he[R],C,B,ne);i(w.anchor,C,B);return}if(ue===uo){v(w,C,B);return}if(ne!==2&&y&1&&pe)if(ne===0)pe.beforeEnter(Q),i(Q,C,B),Vt(()=>pe.enter(Q),Y);else{const{leave:R,delayLeave:X,afterLeave:Z}=pe,le=()=>i(Q,C,B),xe=()=>{R(Q,()=>{le(),Z&&Z()})};X?X(Q,le,xe):xe()}else i(Q,C,B)},k=(w,C,B,ne=!1,Y=!1)=>{const{type:Q,props:ue,ref:pe,children:he,dynamicChildren:y,shapeFlag:x,patchFlag:R,dirs:X,cacheIndex:Z}=w;if(R===-2&&(Y=!1),pe!=null&&na(pe,null,B,w,!0),Z!=null&&(C.renderCache[Z]=void 0),x&256){C.ctx.deactivate(w);return}const le=x&1&&X,xe=!Cr(w);let A;if(xe&&(A=ue&&ue.onVnodeBeforeUnmount)&&fn(A,C,w),x&6)H(w.component,B,ne);else{if(x&128){w.suspense.unmount(B,ne);return}le&&ni(w,null,C,"beforeUnmount"),x&64?w.type.remove(w,C,B,oe,ne):y&&!y.hasOnce&&(Q!==Yt||R>0&&R&64)?be(y,C,B,!1,!0):(Q===Yt&&R&384||!Y&&x&16)&&be(he,C,B),ne&&fe(w)}(xe&&(A=ue&&ue.onVnodeUnmounted)||le)&&Vt(()=>{A&&fn(A,C,w),le&&ni(w,null,C,"unmounted")},B)},fe=w=>{const{type:C,el:B,anchor:ne,transition:Y}=w;if(C===Yt){_e(B,ne);return}if(C===uo){b(w);return}const Q=()=>{r(B),Y&&!Y.persisted&&Y.afterLeave&&Y.afterLeave()};if(w.shapeFlag&1&&Y&&!Y.persisted){const{leave:ue,delayLeave:pe}=Y,he=()=>ue(B,Q);pe?pe(w.el,Q,he):he()}else Q()},_e=(w,C)=>{let B;for(;w!==C;)B=h(w),r(w),w=B;r(C)},H=(w,C,B)=>{const{bum:ne,scope:Y,job:Q,subTree:ue,um:pe,m:he,a:y}=w;al(he),al(y),ne&&io(ne),Y.stop(),Q&&(Q.flags|=8,k(ue,w,C,B)),pe&&Vt(pe,C),Vt(()=>{w.isUnmounted=!0},C),C&&C.pendingBranch&&!C.isUnmounted&&w.asyncDep&&!w.asyncResolved&&w.suspenseId===C.pendingId&&(C.deps--,C.deps===0&&C.resolve())},be=(w,C,B,ne=!1,Y=!1,Q=0)=>{for(let ue=Q;ue<w.length;ue++)k(w[ue],C,B,ne,Y)},O=w=>{if(w.shapeFlag&6)return O(w.component.subTree);if(w.shapeFlag&128)return w.suspense.next();const C=h(w.anchor||w.el),B=C&&C[fd];return B?h(B):C};let K=!1;const q=(w,C,B)=>{w==null?C._vnode&&k(C._vnode,null,null,!0):p(C._vnode||null,w,C,null,null,null,B),C._vnode=w,K||(K=!0,el(),Hu(),K=!1)},oe={p,um:k,m:Ee,r:fe,mt:z,mc:S,pc:j,pbc:N,n:O,o:n};let Se,Te;return e&&([Se,Te]=e(oe)),{render:q,hydrate:Se,createApp:Dd(q,Se)}}function lo({type:n,props:e},t){return t==="svg"&&n==="foreignObject"||t==="mathml"&&n==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:t}function ii({effect:n,job:e},t){t?(n.flags|=32,e.flags|=4):(n.flags&=-33,e.flags&=-5)}function kd(n,e){return(!n||n&&!n.pendingBranch)&&e&&!e.persisted}function cf(n,e,t=!1){const i=n.children,r=e.children;if(Fe(i)&&Fe(r))for(let s=0;s<i.length;s++){const a=i[s];let o=r[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[s]=kn(r[s]),o.el=a.el),!t&&o.patchFlag!==-2&&cf(a,o)),o.type===Ws&&(o.el=a.el)}}function Vd(n){const e=n.slice(),t=[0];let i,r,s,a,o;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(r=t[t.length-1],n[r]<c){e[i]=r,t.push(i);continue}for(s=0,a=t.length-1;s<a;)o=s+a>>1,n[t[o]]<c?s=o+1:a=o;c<n[t[s]]&&(s>0&&(e[i]=t[s-1]),t[s]=i)}}for(s=t.length,a=t[s-1];s-- >0;)t[s]=a,a=e[a];return t}function uf(n){const e=n.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:uf(e)}function al(n){if(n)for(let e=0;e<n.length;e++)n[e].flags|=8}const Hd=Symbol.for("v-scx"),Wd=()=>xn(Hd);function ws(n,e,t){return ff(n,e,t)}function ff(n,e,t=Ke){const{immediate:i,deep:r,flush:s,once:a}=t,o=gt({},t),l=e&&i||!e&&s!=="post";let c;if(zr){if(s==="sync"){const d=Wd();c=d.__watcherHandles||(d.__watcherHandles=[])}else if(!l){const d=()=>{};return d.stop=sn,d.resume=sn,d.pause=sn,d}}const u=Rt;o.call=(d,g,p)=>bn(d,u,g,p);let f=!1;s==="post"?o.scheduler=d=>{Vt(d,u&&u.suspense)}:s!=="sync"&&(f=!0,o.scheduler=(d,g)=>{g?d():Ia(d)}),o.augmentJob=d=>{e&&(d.flags|=4),f&&(d.flags|=2,u&&(d.id=u.uid,d.i=u))};const h=od(n,e,o);return zr&&(c?c.push(h):l&&h()),h}function jd(n,e,t){const i=this.proxy,r=ct(n)?n.includes(".")?hf(i,n):()=>i[n]:n.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,t=e);const a=Xr(this),o=ff(r,s.bind(i),t);return a(),o}function hf(n,e){const t=e.split(".");return()=>{let i=n;for(let r=0;r<t.length&&i;r++)i=i[t[r]];return i}}const Xd=(n,e)=>e==="modelValue"||e==="model-value"?n.modelModifiers:n[`${e}Modifiers`]||n[`${Yn(e)}Modifiers`]||n[`${Si(e)}Modifiers`];function qd(n,e,...t){if(n.isUnmounted)return;const i=n.vnode.props||Ke;let r=t;const s=e.startsWith("update:"),a=s&&Xd(i,e.slice(7));a&&(a.trim&&(r=t.map(u=>ct(u)?u.trim():u)),a.number&&(r=t.map(Eh)));let o,l=i[o=no(e)]||i[o=no(Yn(e))];!l&&s&&(l=i[o=no(Si(e))]),l&&bn(l,n,6,r);const c=i[o+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[o])return;n.emitted[o]=!0,bn(c,n,6,r)}}function df(n,e,t=!1){const i=e.emitsCache,r=i.get(n);if(r!==void 0)return r;const s=n.emits;let a={},o=!1;if(!Ne(n)){const l=c=>{const u=df(c,e,!0);u&&(o=!0,gt(a,u))};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!s&&!o?(tt(n)&&i.set(n,null),null):(Fe(s)?s.forEach(l=>a[l]=null):gt(a,s),tt(n)&&i.set(n,a),a)}function Hs(n,e){return!n||!Os(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(n,e[0].toLowerCase()+e.slice(1))||Ye(n,Si(e))||Ye(n,e))}function co(n){const{type:e,vnode:t,proxy:i,withProxy:r,propsOptions:[s],slots:a,attrs:o,emit:l,render:c,renderCache:u,props:f,data:h,setupState:d,ctx:g,inheritAttrs:p}=n,m=Ls(n);let _,M;try{if(t.shapeFlag&4){const b=r||i,E=b;_=mn(c.call(E,b,u,f,d,h,g)),M=o}else{const b=e;_=mn(b.length>1?b(f,{attrs:o,slots:a,emit:l}):b(f,null)),M=e.props?o:Yd(o)}}catch(b){Lr.length=0,ks(b,n,1),_=$t(Nr)}let v=_;if(M&&p!==!1){const b=Object.keys(M),{shapeFlag:E}=v;b.length&&E&7&&(s&&b.some(Ma)&&(M=Zd(M,s)),v=er(v,M,!1,!0))}return t.dirs&&(v=er(v,null,!1,!0),v.dirs=v.dirs?v.dirs.concat(t.dirs):t.dirs),t.transition&&Oa(v,t.transition),_=v,Ls(m),_}const Yd=n=>{let e;for(const t in n)(t==="class"||t==="style"||Os(t))&&((e||(e={}))[t]=n[t]);return e},Zd=(n,e)=>{const t={};for(const i in n)(!Ma(i)||!(i.slice(9)in e))&&(t[i]=n[i]);return t};function $d(n,e,t){const{props:i,children:r,component:s}=n,{props:a,children:o,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&l>=0){if(l&1024)return!0;if(l&16)return i?ll(i,a,c):!!a;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==i[h]&&!Hs(c,h))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:i===a?!1:i?a?ll(i,a,c):!0:!!a;return!1}function ll(n,e,t){const i=Object.keys(e);if(i.length!==Object.keys(n).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==n[s]&&!Hs(t,s))return!0}return!1}function Kd({vnode:n,parent:e},t){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===n&&(i.el=n.el),i===n)(n=e.vnode).el=t,e=e.parent;else break}}const pf=n=>n.__isSuspense;function Jd(n,e){e&&e.pendingBranch?Fe(n)?e.effects.push(...n):e.effects.push(n):cd(n)}const Yt=Symbol.for("v-fgt"),Ws=Symbol.for("v-txt"),Nr=Symbol.for("v-cmt"),uo=Symbol.for("v-stc"),Lr=[];let jt=null;function fi(n=!1){Lr.push(jt=n?null:[])}function Qd(){Lr.pop(),jt=Lr[Lr.length-1]||null}let Ur=1;function cl(n){Ur+=n,n<0&&jt&&(jt.hasOnce=!0)}function mf(n){return n.dynamicChildren=Ur>0?jt||qi:null,Qd(),Ur>0&&jt&&jt.push(n),n}function Hi(n,e,t,i,r,s){return mf(rt(n,e,t,i,r,s,!0))}function ep(n,e,t,i,r){return mf($t(n,e,t,i,r,!0))}function Ds(n){return n?n.__v_isVNode===!0:!1}function fr(n,e){return n.type===e.type&&n.key===e.key}const gf=({key:n})=>n??null,Es=({ref:n,ref_key:e,ref_for:t})=>(typeof n=="number"&&(n=""+n),n!=null?ct(n)||Mt(n)||Ne(n)?{i:_n,r:n,k:e,f:!!t}:n:null);function rt(n,e=null,t=null,i=0,r=null,s=n===Yt?0:1,a=!1,o=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&gf(e),ref:e&&Es(e),scopeId:ju,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:_n};return o?(za(l,t),s&128&&n.normalize(l)):t&&(l.shapeFlag|=ct(t)?8:16),Ur>0&&!a&&jt&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&jt.push(l),l}const $t=tp;function tp(n,e=null,t=null,i=0,r=null,s=!1){if((!n||n===wd)&&(n=Nr),Ds(n)){const o=er(n,e,!0);return t&&za(o,t),Ur>0&&!s&&jt&&(o.shapeFlag&6?jt[jt.indexOf(n)]=o:jt.push(o)),o.patchFlag=-2,o}if(hp(n)&&(n=n.__vccOpts),e){e=np(e);let{class:o,style:l}=e;o&&!ct(o)&&(e.class=zs(o)),tt(l)&&(Da(l)&&!Fe(l)&&(l=gt({},l)),e.style=Ea(l))}const a=ct(n)?1:pf(n)?128:hd(n)?64:tt(n)?4:Ne(n)?2:0;return rt(n,e,t,i,r,a,s,!0)}function np(n){return n?Da(n)||tf(n)?gt({},n):n:null}function er(n,e,t=!1,i=!1){const{props:r,ref:s,patchFlag:a,children:o,transition:l}=n,c=e?rp(r||{},e):r,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&gf(c),ref:e&&e.ref?t&&s?Fe(s)?s.concat(Es(e)):[s,Es(e)]:Es(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==Yt?a===-1?16:a|16:a,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&er(n.ssContent),ssFallback:n.ssFallback&&er(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce};return l&&i&&Oa(u,l.clone(u)),u}function ip(n=" ",e=0){return $t(Ws,null,n,e)}function mn(n){return n==null||typeof n=="boolean"?$t(Nr):Fe(n)?$t(Yt,null,n.slice()):Ds(n)?kn(n):$t(Ws,null,String(n))}function kn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:er(n)}function za(n,e){let t=0;const{shapeFlag:i}=n;if(e==null)e=null;else if(Fe(e))t=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),za(n,r()),r._c&&(r._d=!0));return}else{t=32;const r=e._;!r&&!tf(e)?e._ctx=_n:r===3&&_n&&(_n.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:_n},t=32):(e=String(e),i&64?(t=16,e=[ip(e)]):t=8);n.children=e,n.shapeFlag|=t}function rp(...n){const e={};for(let t=0;t<n.length;t++){const i=n[t];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=zs([e.class,i.class]));else if(r==="style")e.style=Ea([e.style,i.style]);else if(Os(r)){const s=e[r],a=i[r];a&&s!==a&&!(Fe(s)&&s.includes(a))&&(e[r]=s?[].concat(s,a):a)}else r!==""&&(e[r]=i[r])}return e}function fn(n,e,t,i=null){bn(n,e,7,[t,i])}const sp=Ju();let op=0;function ap(n,e,t){const i=n.type,r=(e?e.appContext:n.appContext)||sp,s={uid:op++,vnode:n,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Dh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:rf(i,r),emitsOptions:df(i,r),emit:null,emitted:null,propsDefaults:Ke,inheritAttrs:i.inheritAttrs,ctx:Ke,data:Ke,props:Ke,attrs:Ke,slots:Ke,refs:Ke,setupState:Ke,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=qd.bind(null,s),n.ce&&n.ce(s),s}let Rt=null,Is,aa;{const n=Us(),e=(t,i)=>{let r;return(r=n[t])||(r=n[t]=[]),r.push(i),s=>{r.length>1?r.forEach(a=>a(s)):r[0](s)}};Is=e("__VUE_INSTANCE_SETTERS__",t=>Rt=t),aa=e("__VUE_SSR_SETTERS__",t=>zr=t)}const Xr=n=>{const e=Rt;return Is(n),n.scope.on(),()=>{n.scope.off(),Is(e)}},ul=()=>{Rt&&Rt.scope.off(),Is(null)};function _f(n){return n.vnode.shapeFlag&4}let zr=!1;function lp(n,e=!1,t=!1){e&&aa(e);const{props:i,children:r}=n.vnode,s=_f(n);Id(n,i,s,e),Ud(n,r,t);const a=s?cp(n,e):void 0;return e&&aa(!1),a}function cp(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Ed);const{setup:i}=t;if(i){Kn();const r=n.setupContext=i.length>1?fp(n):null,s=Xr(n),a=jr(i,n,0,[n.props,r]),o=vu(a);if(Jn(),s(),(o||n.sp)&&!Cr(n)&&Xu(n),o){if(a.then(ul,ul),e)return a.then(l=>{fl(n,l,e)}).catch(l=>{ks(l,n,0)});n.asyncDep=a}else fl(n,a,e)}else vf(n,e)}function fl(n,e,t){Ne(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:tt(e)&&(n.setupState=Bu(e)),vf(n,t)}let hl;function vf(n,e,t){const i=n.type;if(!n.render){if(!e&&hl&&!i.render){const r=i.template||Na(n).template;if(r){const{isCustomElement:s,compilerOptions:a}=n.appContext.config,{delimiters:o,compilerOptions:l}=i,c=gt(gt({isCustomElement:s,delimiters:o},a),l);i.render=hl(r,c)}}n.render=i.render||sn}{const r=Xr(n);Kn();try{Td(n)}finally{Jn(),r()}}}const up={get(n,e){return yt(n,"get",""),n[e]}};function fp(n){const e=t=>{n.exposed=t||{}};return{attrs:new Proxy(n.attrs,up),slots:n.slots,emit:n.emit,expose:e}}function Ba(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(Bu(Jh(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in Pr)return Pr[t](n)},has(e,t){return t in e||t in Pr}})):n.proxy}function hp(n){return Ne(n)&&"__vccOpts"in n}const tn=(n,e)=>rd(n,e,zr);function xf(n,e,t){const i=arguments.length;return i===2?tt(e)&&!Fe(e)?Ds(e)?$t(n,null,[e]):$t(n,e):$t(n,null,e):(i>3?t=Array.prototype.slice.call(arguments,2):i===3&&Ds(t)&&(t=[t]),$t(n,e,t))}const dp="3.5.12";/**
* @vue/runtime-dom v3.5.12
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let la;const dl=typeof window<"u"&&window.trustedTypes;if(dl)try{la=dl.createPolicy("vue",{createHTML:n=>n})}catch{}const yf=la?n=>la.createHTML(n):n=>n,pp="http://www.w3.org/2000/svg",mp="http://www.w3.org/1998/Math/MathML",Ln=typeof document<"u"?document:null,pl=Ln&&Ln.createElement("template"),gp={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,i)=>{const r=e==="svg"?Ln.createElementNS(pp,n):e==="mathml"?Ln.createElementNS(mp,n):t?Ln.createElement(n,{is:t}):Ln.createElement(n);return n==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:n=>Ln.createTextNode(n),createComment:n=>Ln.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Ln.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,i,r,s){const a=t?t.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),t),!(r===s||!(r=r.nextSibling)););else{pl.innerHTML=yf(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const o=pl.content;if(i==="svg"||i==="mathml"){const l=o.firstChild;for(;l.firstChild;)o.appendChild(l.firstChild);o.removeChild(l)}e.insertBefore(o,t)}return[a?a.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}},_p=Symbol("_vtc");function vp(n,e,t){const i=n[_p];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}const ml=Symbol("_vod"),xp=Symbol("_vsh"),yp=Symbol(""),bp=/(^|;)\s*display\s*:/;function Mp(n,e,t){const i=n.style,r=ct(t);let s=!1;if(t&&!r){if(e)if(ct(e))for(const a of e.split(";")){const o=a.slice(0,a.indexOf(":")).trim();t[o]==null&&Ts(i,o,"")}else for(const a in e)t[a]==null&&Ts(i,a,"");for(const a in t)a==="display"&&(s=!0),Ts(i,a,t[a])}else if(r){if(e!==t){const a=i[yp];a&&(t+=";"+a),i.cssText=t,s=bp.test(t)}}else e&&n.removeAttribute("style");ml in n&&(n[ml]=s?i.display:"",n[xp]&&(i.display="none"))}const gl=/\s*!important$/;function Ts(n,e,t){if(Fe(t))t.forEach(i=>Ts(n,e,i));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const i=Sp(n,e);gl.test(t)?n.setProperty(Si(i),t.replace(gl,""),"important"):n[i]=t}}const _l=["Webkit","Moz","ms"],fo={};function Sp(n,e){const t=fo[e];if(t)return t;let i=Yn(e);if(i!=="filter"&&i in n)return fo[e]=i;i=xu(i);for(let r=0;r<_l.length;r++){const s=_l[r]+i;if(s in n)return fo[e]=s}return e}const vl="http://www.w3.org/1999/xlink";function xl(n,e,t,i,r,s=Rh(e)){i&&e.startsWith("xlink:")?t==null?n.removeAttributeNS(vl,e.slice(6,e.length)):n.setAttributeNS(vl,e,t):t==null||s&&!bu(t)?n.removeAttribute(e):n.setAttribute(e,s?"":ar(t)?String(t):t)}function yl(n,e,t,i,r){if(e==="innerHTML"||e==="textContent"){t!=null&&(n[e]=e==="innerHTML"?yf(t):t);return}const s=n.tagName;if(e==="value"&&s!=="PROGRESS"&&!s.includes("-")){const o=s==="OPTION"?n.getAttribute("value")||"":n.value,l=t==null?n.type==="checkbox"?"on":"":String(t);(o!==l||!("_value"in n))&&(n.value=l),t==null&&n.removeAttribute(e),n._value=t;return}let a=!1;if(t===""||t==null){const o=typeof n[e];o==="boolean"?t=bu(t):t==null&&o==="string"?(t="",a=!0):o==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(r||e)}function wp(n,e,t,i){n.addEventListener(e,t,i)}function Ep(n,e,t,i){n.removeEventListener(e,t,i)}const bl=Symbol("_vei");function Tp(n,e,t,i,r=null){const s=n[bl]||(n[bl]={}),a=s[e];if(i&&a)a.value=i;else{const[o,l]=Ap(e);if(i){const c=s[e]=Lp(i,r);wp(n,o,c,l)}else a&&(Ep(n,o,a,l),s[e]=void 0)}}const Ml=/(?:Once|Passive|Capture)$/;function Ap(n){let e;if(Ml.test(n)){e={};let i;for(;i=n.match(Ml);)n=n.slice(0,n.length-i[0].length),e[i[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Si(n.slice(2)),e]}let ho=0;const Cp=Promise.resolve(),Pp=()=>ho||(Cp.then(()=>ho=0),ho=Date.now());function Lp(n,e){const t=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=t.attached)return;bn(Rp(i,t.value),e,5,[i])};return t.value=n,t.attached=Pp(),t}function Rp(n,e){if(Fe(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const Sl=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Dp=(n,e,t,i,r,s)=>{const a=r==="svg";e==="class"?vp(n,i,a):e==="style"?Mp(n,t,i):Os(e)?Ma(e)||Tp(n,e,t,i,s):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Ip(n,e,i,a))?(yl(n,e,i),!n.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&xl(n,e,i,a,s,e!=="value")):n._isVueCE&&(/[A-Z]/.test(e)||!ct(i))?yl(n,Yn(e),i,s,e):(e==="true-value"?n._trueValue=i:e==="false-value"&&(n._falseValue=i),xl(n,e,i,a))};function Ip(n,e,t,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in n&&Sl(e)&&Ne(t));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=n.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return Sl(e)&&ct(t)?!1:e in n}const Op=["ctrl","shift","alt","meta"],Fp={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>Op.some(t=>n[`${t}Key`]&&!e.includes(t))},hr=(n,e)=>{const t=n._withMods||(n._withMods={}),i=e.join(".");return t[i]||(t[i]=(r,...s)=>{for(let a=0;a<e.length;a++){const o=Fp[e[a]];if(o&&o(r,e))return}return n(r,...s)})},Np=gt({patchProp:Dp},gp);let wl;function Up(){return wl||(wl=Bd(Np))}const zp=(...n)=>{const e=Up().createApp(...n),{mount:t}=e;return e.mount=i=>{const r=Gp(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const a=t(r,!1,Bp(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),a},e};function Bp(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function Gp(n){return ct(n)?document.querySelector(n):n}/*!
  * vue-router v4.4.5
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Wi=typeof document<"u";function bf(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function kp(n){return n.__esModule||n[Symbol.toStringTag]==="Module"||n.default&&bf(n.default)}const Ze=Object.assign;function po(n,e){const t={};for(const i in e){const r=e[i];t[i]=an(r)?r.map(n):n(r)}return t}const Rr=()=>{},an=Array.isArray,Mf=/#/g,Vp=/&/g,Hp=/\//g,Wp=/=/g,jp=/\?/g,Sf=/\+/g,Xp=/%5B/g,qp=/%5D/g,wf=/%5E/g,Yp=/%60/g,Ef=/%7B/g,Zp=/%7C/g,Tf=/%7D/g,$p=/%20/g;function Ga(n){return encodeURI(""+n).replace(Zp,"|").replace(Xp,"[").replace(qp,"]")}function Kp(n){return Ga(n).replace(Ef,"{").replace(Tf,"}").replace(wf,"^")}function ca(n){return Ga(n).replace(Sf,"%2B").replace($p,"+").replace(Mf,"%23").replace(Vp,"%26").replace(Yp,"`").replace(Ef,"{").replace(Tf,"}").replace(wf,"^")}function Jp(n){return ca(n).replace(Wp,"%3D")}function Qp(n){return Ga(n).replace(Mf,"%23").replace(jp,"%3F")}function em(n){return n==null?"":Qp(n).replace(Hp,"%2F")}function Br(n){try{return decodeURIComponent(""+n)}catch{}return""+n}const tm=/\/$/,nm=n=>n.replace(tm,"");function mo(n,e,t="/"){let i,r={},s="",a="";const o=e.indexOf("#");let l=e.indexOf("?");return o<l&&o>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,o>-1?o:e.length),r=n(s)),o>-1&&(i=i||e.slice(0,o),a=e.slice(o,e.length)),i=om(i??e,t),{fullPath:i+(s&&"?")+s+a,path:i,query:r,hash:Br(a)}}function im(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function El(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function rm(n,e,t){const i=e.matched.length-1,r=t.matched.length-1;return i>-1&&i===r&&tr(e.matched[i],t.matched[r])&&Af(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function tr(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function Af(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!sm(n[t],e[t]))return!1;return!0}function sm(n,e){return an(n)?Tl(n,e):an(e)?Tl(e,n):n===e}function Tl(n,e){return an(e)?n.length===e.length&&n.every((t,i)=>t===e[i]):n.length===1&&n[0]===e}function om(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),i=n.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=t.length-1,a,o;for(a=0;a<i.length;a++)if(o=i[a],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+i.slice(a).join("/")}const Fn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Gr;(function(n){n.pop="pop",n.push="push"})(Gr||(Gr={}));var Dr;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Dr||(Dr={}));function am(n){if(!n)if(Wi){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),nm(n)}const lm=/^[^#]+#/;function cm(n,e){return n.replace(lm,"#")+e}function um(n,e){const t=document.documentElement.getBoundingClientRect(),i=n.getBoundingClientRect();return{behavior:e.behavior,left:i.left-t.left-(e.left||0),top:i.top-t.top-(e.top||0)}}const js=()=>({left:window.scrollX,top:window.scrollY});function fm(n){let e;if("el"in n){const t=n.el,i=typeof t=="string"&&t.startsWith("#"),r=typeof t=="string"?i?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!r)return;e=um(r,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Al(n,e){return(history.state?history.state.position-e:-1)+n}const ua=new Map;function hm(n,e){ua.set(n,e)}function dm(n){const e=ua.get(n);return ua.delete(n),e}let pm=()=>location.protocol+"//"+location.host;function Cf(n,e){const{pathname:t,search:i,hash:r}=e,s=n.indexOf("#");if(s>-1){let o=r.includes(n.slice(s))?n.slice(s).length:1,l=r.slice(o);return l[0]!=="/"&&(l="/"+l),El(l,"")}return El(t,n)+i+r}function mm(n,e,t,i){let r=[],s=[],a=null;const o=({state:h})=>{const d=Cf(n,location),g=t.value,p=e.value;let m=0;if(h){if(t.value=d,e.value=h,a&&a===g){a=null;return}m=p?h.position-p.position:0}else i(d);r.forEach(_=>{_(t.value,g,{delta:m,type:Gr.pop,direction:m?m>0?Dr.forward:Dr.back:Dr.unknown})})};function l(){a=t.value}function c(h){r.push(h);const d=()=>{const g=r.indexOf(h);g>-1&&r.splice(g,1)};return s.push(d),d}function u(){const{history:h}=window;h.state&&h.replaceState(Ze({},h.state,{scroll:js()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function Cl(n,e,t,i=!1,r=!1){return{back:n,current:e,forward:t,replaced:i,position:window.history.length,scroll:r?js():null}}function gm(n){const{history:e,location:t}=window,i={value:Cf(n,t)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=n.indexOf("#"),h=f>-1?(t.host&&document.querySelector("base")?n:n.slice(f))+l:pm()+n+l;try{e[u?"replaceState":"pushState"](c,"",h),r.value=c}catch(d){console.error(d),t[u?"replace":"assign"](h)}}function a(l,c){const u=Ze({},e.state,Cl(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function o(l,c){const u=Ze({},r.value,e.state,{forward:l,scroll:js()});s(u.current,u,!0);const f=Ze({},Cl(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:o,replace:a}}function _m(n){n=am(n);const e=gm(n),t=mm(n,e.state,e.location,e.replace);function i(s,a=!0){a||t.pauseListeners(),history.go(s)}const r=Ze({location:"",base:n,go:i,createHref:cm.bind(null,n)},e,t);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function vm(n){return typeof n=="string"||n&&typeof n=="object"}function Pf(n){return typeof n=="string"||typeof n=="symbol"}const Lf=Symbol("");var Pl;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Pl||(Pl={}));function nr(n,e){return Ze(new Error,{type:n,[Lf]:!0},e)}function wn(n,e){return n instanceof Error&&Lf in n&&(e==null||!!(n.type&e))}const Ll="[^/]+?",xm={sensitive:!1,strict:!1,start:!0,end:!0},ym=/[.+*?^${}()[\]/\\]/g;function bm(n,e){const t=Ze({},xm,e),i=[];let r=t.start?"^":"";const s=[];for(const c of n){const u=c.length?[]:[90];t.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const h=c[f];let d=40+(t.sensitive?.25:0);if(h.type===0)f||(r+="/"),r+=h.value.replace(ym,"\\$&"),d+=40;else if(h.type===1){const{value:g,repeatable:p,optional:m,regexp:_}=h;s.push({name:g,repeatable:p,optional:m});const M=_||Ll;if(M!==Ll){d+=10;try{new RegExp(`(${M})`)}catch(b){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+b.message)}}let v=p?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(v=m&&c.length<2?`(?:/${v})`:"/"+v),m&&(v+="?"),r+=v,d+=20,m&&(d+=-8),p&&(d+=-20),M===".*"&&(d+=-50)}u.push(d)}i.push(u)}if(t.strict&&t.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}t.strict||(r+="/?"),t.end?r+="$":t.strict&&(r+="(?:/|$)");const a=new RegExp(r,t.sensitive?"":"i");function o(c){const u=c.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const d=u[h]||"",g=s[h-1];f[g.name]=d&&g.repeatable?d.split("/"):d}return f}function l(c){let u="",f=!1;for(const h of n){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const d of h)if(d.type===0)u+=d.value;else if(d.type===1){const{value:g,repeatable:p,optional:m}=d,_=g in c?c[g]:"";if(an(_)&&!p)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=an(_)?_.join("/"):_;if(!M)if(m)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:a,score:i,keys:s,parse:o,stringify:l}}function Mm(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=e[t]-n[t];if(i)return i;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function Rf(n,e){let t=0;const i=n.score,r=e.score;for(;t<i.length&&t<r.length;){const s=Mm(i[t],r[t]);if(s)return s;t++}if(Math.abs(r.length-i.length)===1){if(Rl(i))return 1;if(Rl(r))return-1}return r.length-i.length}function Rl(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const Sm={type:0,value:""},wm=/[a-zA-Z0-9_]/;function Em(n){if(!n)return[[]];if(n==="/")return[[Sm]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(d){throw new Error(`ERR (${t})/"${c}": ${d}`)}let t=0,i=t;const r=[];let s;function a(){s&&r.push(s),s=[]}let o=0,l,c="",u="";function f(){c&&(t===0?s.push({type:0,value:c}):t===1||t===2||t===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;o<n.length;){if(l=n[o++],l==="\\"&&t!==2){i=t,t=4;continue}switch(t){case 0:l==="/"?(c&&f(),a()):l===":"?(f(),t=1):h();break;case 4:h(),t=i;break;case 1:l==="("?t=2:wm.test(l)?h():(f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:t=3:u+=l;break;case 3:f(),t=0,l!=="*"&&l!=="?"&&l!=="+"&&o--,u="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),a(),r}function Tm(n,e,t){const i=bm(Em(n.path),t),r=Ze(i,{record:n,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function Am(n,e){const t=[],i=new Map;e=Fl({strict:!1,end:!0,sensitive:!1},e);function r(f){return i.get(f)}function s(f,h,d){const g=!d,p=Il(f);p.aliasOf=d&&d.record;const m=Fl(e,f),_=[p];if("alias"in f){const b=typeof f.alias=="string"?[f.alias]:f.alias;for(const E of b)_.push(Il(Ze({},p,{components:d?d.record.components:p.components,path:E,aliasOf:d?d.record:p})))}let M,v;for(const b of _){const{path:E}=b;if(h&&E[0]!=="/"){const L=h.record.path,I=L[L.length-1]==="/"?"":"/";b.path=h.record.path+(E&&I+E)}if(M=Tm(b,h,m),d?d.alias.push(M):(v=v||M,v!==M&&v.alias.push(M),g&&f.name&&!Ol(M)&&a(f.name)),Df(M)&&l(M),p.children){const L=p.children;for(let I=0;I<L.length;I++)s(L[I],M,d&&d.children[I])}d=d||M}return v?()=>{a(v)}:Rr}function a(f){if(Pf(f)){const h=i.get(f);h&&(i.delete(f),t.splice(t.indexOf(h),1),h.children.forEach(a),h.alias.forEach(a))}else{const h=t.indexOf(f);h>-1&&(t.splice(h,1),f.record.name&&i.delete(f.record.name),f.children.forEach(a),f.alias.forEach(a))}}function o(){return t}function l(f){const h=Lm(f,t);t.splice(h,0,f),f.record.name&&!Ol(f)&&i.set(f.record.name,f)}function c(f,h){let d,g={},p,m;if("name"in f&&f.name){if(d=i.get(f.name),!d)throw nr(1,{location:f});m=d.record.name,g=Ze(Dl(h.params,d.keys.filter(v=>!v.optional).concat(d.parent?d.parent.keys.filter(v=>v.optional):[]).map(v=>v.name)),f.params&&Dl(f.params,d.keys.map(v=>v.name))),p=d.stringify(g)}else if(f.path!=null)p=f.path,d=t.find(v=>v.re.test(p)),d&&(g=d.parse(p),m=d.record.name);else{if(d=h.name?i.get(h.name):t.find(v=>v.re.test(h.path)),!d)throw nr(1,{location:f,currentLocation:h});m=d.record.name,g=Ze({},h.params,f.params),p=d.stringify(g)}const _=[];let M=d;for(;M;)_.unshift(M.record),M=M.parent;return{name:m,path:p,params:g,matched:_,meta:Pm(_)}}n.forEach(f=>s(f));function u(){t.length=0,i.clear()}return{addRoute:s,resolve:c,removeRoute:a,clearRoutes:u,getRoutes:o,getRecordMatcher:r}}function Dl(n,e){const t={};for(const i of e)i in n&&(t[i]=n[i]);return t}function Il(n){const e={path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:n.aliasOf,beforeEnter:n.beforeEnter,props:Cm(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function Cm(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const i in n.components)e[i]=typeof t=="object"?t[i]:t;return e}function Ol(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function Pm(n){return n.reduce((e,t)=>Ze(e,t.meta),{})}function Fl(n,e){const t={};for(const i in n)t[i]=i in e?e[i]:n[i];return t}function Lm(n,e){let t=0,i=e.length;for(;t!==i;){const s=t+i>>1;Rf(n,e[s])<0?i=s:t=s+1}const r=Rm(n);return r&&(i=e.lastIndexOf(r,i-1)),i}function Rm(n){let e=n;for(;e=e.parent;)if(Df(e)&&Rf(n,e)===0)return e}function Df({record:n}){return!!(n.name||n.components&&Object.keys(n.components).length||n.redirect)}function Dm(n){const e={};if(n===""||n==="?")return e;const i=(n[0]==="?"?n.slice(1):n).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(Sf," "),a=s.indexOf("="),o=Br(a<0?s:s.slice(0,a)),l=a<0?null:Br(s.slice(a+1));if(o in e){let c=e[o];an(c)||(c=e[o]=[c]),c.push(l)}else e[o]=l}return e}function Nl(n){let e="";for(let t in n){const i=n[t];if(t=Jp(t),i==null){i!==void 0&&(e+=(e.length?"&":"")+t);continue}(an(i)?i.map(s=>s&&ca(s)):[i&&ca(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+t,s!=null&&(e+="="+s))})}return e}function Im(n){const e={};for(const t in n){const i=n[t];i!==void 0&&(e[t]=an(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const Om=Symbol(""),Ul=Symbol(""),Xs=Symbol(""),If=Symbol(""),fa=Symbol("");function dr(){let n=[];function e(i){return n.push(i),()=>{const r=n.indexOf(i);r>-1&&n.splice(r,1)}}function t(){n=[]}return{add:e,list:()=>n.slice(),reset:t}}function Vn(n,e,t,i,r,s=a=>a()){const a=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((o,l)=>{const c=h=>{h===!1?l(nr(4,{from:t,to:e})):h instanceof Error?l(h):vm(h)?l(nr(2,{from:e,to:h})):(a&&i.enterCallbacks[r]===a&&typeof h=="function"&&a.push(h),o())},u=s(()=>n.call(i&&i.instances[r],e,t,c));let f=Promise.resolve(u);n.length<3&&(f=f.then(c)),f.catch(h=>l(h))})}function go(n,e,t,i,r=s=>s()){const s=[];for(const a of n)for(const o in a.components){let l=a.components[o];if(!(e!=="beforeRouteEnter"&&!a.instances[o]))if(bf(l)){const u=(l.__vccOpts||l)[e];u&&s.push(Vn(u,t,i,a,o,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${o}" at "${a.path}"`);const f=kp(u)?u.default:u;a.mods[o]=u,a.components[o]=f;const d=(f.__vccOpts||f)[e];return d&&Vn(d,t,i,a,o,r)()}))}}return s}function zl(n){const e=xn(Xs),t=xn(If),i=tn(()=>{const l=gi(n.to);return e.resolve(l)}),r=tn(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=t.matched;if(!u||!f.length)return-1;const h=f.findIndex(tr.bind(null,u));if(h>-1)return h;const d=Bl(l[c-2]);return c>1&&Bl(u)===d&&f[f.length-1].path!==d?f.findIndex(tr.bind(null,l[c-2])):h}),s=tn(()=>r.value>-1&&zm(t.params,i.value.params)),a=tn(()=>r.value>-1&&r.value===t.matched.length-1&&Af(t.params,i.value.params));function o(l={}){return Um(l)?e[gi(n.replace)?"replace":"push"](gi(n.to)).catch(Rr):Promise.resolve()}return{route:i,href:tn(()=>i.value.href),isActive:s,isExactActive:a,navigate:o}}const Fm=Fa({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:zl,setup(n,{slots:e}){const t=Gs(zl(n)),{options:i}=xn(Xs),r=tn(()=>({[Gl(n.activeClass,i.linkActiveClass,"router-link-active")]:t.isActive,[Gl(n.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const s=e.default&&e.default(t);return n.custom?s:xf("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:r.value},s)}}}),Nm=Fm;function Um(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function zm(n,e){for(const t in e){const i=e[t],r=n[t];if(typeof i=="string"){if(i!==r)return!1}else if(!an(r)||r.length!==i.length||i.some((s,a)=>s!==r[a]))return!1}return!0}function Bl(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const Gl=(n,e,t)=>n??e??t,Bm=Fa({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const i=xn(fa),r=tn(()=>n.route||i.value),s=xn(Ul,0),a=tn(()=>{let c=gi(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),o=tn(()=>r.value.matched[a.value]);Ss(Ul,tn(()=>a.value+1)),Ss(Om,o),Ss(fa,r);const l=Qh();return ws(()=>[l.value,o.value,n.name],([c,u,f],[h,d,g])=>{u&&(u.instances[f]=c,d&&d!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=d.leaveGuards),u.updateGuards.size||(u.updateGuards=d.updateGuards))),c&&u&&(!d||!tr(u,d)||!h)&&(u.enterCallbacks[f]||[]).forEach(p=>p(c))},{flush:"post"}),()=>{const c=r.value,u=n.name,f=o.value,h=f&&f.components[u];if(!h)return kl(t.default,{Component:h,route:c});const d=f.props[u],g=d?d===!0?c.params:typeof d=="function"?d(c):d:null,m=xf(h,Ze({},g,e,{onVnodeUnmounted:_=>{_.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return kl(t.default,{Component:m,route:c})||m}}});function kl(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const Of=Bm;function Gm(n){const e=Am(n.routes,n),t=n.parseQuery||Dm,i=n.stringifyQuery||Nl,r=n.history,s=dr(),a=dr(),o=dr(),l=ed(Fn);let c=Fn;Wi&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=po.bind(null,O=>""+O),f=po.bind(null,em),h=po.bind(null,Br);function d(O,K){let q,oe;return Pf(O)?(q=e.getRecordMatcher(O),oe=K):oe=O,e.addRoute(oe,q)}function g(O){const K=e.getRecordMatcher(O);K&&e.removeRoute(K)}function p(){return e.getRoutes().map(O=>O.record)}function m(O){return!!e.getRecordMatcher(O)}function _(O,K){if(K=Ze({},K||l.value),typeof O=="string"){const C=mo(t,O,K.path),B=e.resolve({path:C.path},K),ne=r.createHref(C.fullPath);return Ze(C,B,{params:h(B.params),hash:Br(C.hash),redirectedFrom:void 0,href:ne})}let q;if(O.path!=null)q=Ze({},O,{path:mo(t,O.path,K.path).path});else{const C=Ze({},O.params);for(const B in C)C[B]==null&&delete C[B];q=Ze({},O,{params:f(C)}),K.params=f(K.params)}const oe=e.resolve(q,K),Se=O.hash||"";oe.params=u(h(oe.params));const Te=im(i,Ze({},O,{hash:Kp(Se),path:oe.path})),w=r.createHref(Te);return Ze({fullPath:Te,hash:Se,query:i===Nl?Im(O.query):O.query||{}},oe,{redirectedFrom:void 0,href:w})}function M(O){return typeof O=="string"?mo(t,O,l.value.path):Ze({},O)}function v(O,K){if(c!==O)return nr(8,{from:K,to:O})}function b(O){return I(O)}function E(O){return b(Ze(M(O),{replace:!0}))}function L(O){const K=O.matched[O.matched.length-1];if(K&&K.redirect){const{redirect:q}=K;let oe=typeof q=="function"?q(O):q;return typeof oe=="string"&&(oe=oe.includes("?")||oe.includes("#")?oe=M(oe):{path:oe},oe.params={}),Ze({query:O.query,hash:O.hash,params:oe.path!=null?{}:O.params},oe)}}function I(O,K){const q=c=_(O),oe=l.value,Se=O.state,Te=O.force,w=O.replace===!0,C=L(q);if(C)return I(Ze(M(C),{state:typeof C=="object"?Ze({},Se,C.state):Se,force:Te,replace:w}),K||q);const B=q;B.redirectedFrom=K;let ne;return!Te&&rm(i,oe,q)&&(ne=nr(16,{to:B,from:oe}),Ee(oe,oe,!0,!1)),(ne?Promise.resolve(ne):N(B,oe)).catch(Y=>wn(Y)?wn(Y,2)?Y:ce(Y):j(Y,B,oe)).then(Y=>{if(Y){if(wn(Y,2))return I(Ze({replace:w},M(Y.to),{state:typeof Y.to=="object"?Ze({},Se,Y.to.state):Se,force:Te}),K||B)}else Y=ae(B,oe,!0,w,Se);return se(B,oe,Y),Y})}function S(O,K){const q=v(O,K);return q?Promise.reject(q):Promise.resolve()}function P(O){const K=_e.values().next().value;return K&&typeof K.runWithContext=="function"?K.runWithContext(O):O()}function N(O,K){let q;const[oe,Se,Te]=km(O,K);q=go(oe.reverse(),"beforeRouteLeave",O,K);for(const C of oe)C.leaveGuards.forEach(B=>{q.push(Vn(B,O,K))});const w=S.bind(null,O,K);return q.push(w),be(q).then(()=>{q=[];for(const C of s.list())q.push(Vn(C,O,K));return q.push(w),be(q)}).then(()=>{q=go(Se,"beforeRouteUpdate",O,K);for(const C of Se)C.updateGuards.forEach(B=>{q.push(Vn(B,O,K))});return q.push(w),be(q)}).then(()=>{q=[];for(const C of Te)if(C.beforeEnter)if(an(C.beforeEnter))for(const B of C.beforeEnter)q.push(Vn(B,O,K));else q.push(Vn(C.beforeEnter,O,K));return q.push(w),be(q)}).then(()=>(O.matched.forEach(C=>C.enterCallbacks={}),q=go(Te,"beforeRouteEnter",O,K,P),q.push(w),be(q))).then(()=>{q=[];for(const C of a.list())q.push(Vn(C,O,K));return q.push(w),be(q)}).catch(C=>wn(C,8)?C:Promise.reject(C))}function se(O,K,q){o.list().forEach(oe=>P(()=>oe(O,K,q)))}function ae(O,K,q,oe,Se){const Te=v(O,K);if(Te)return Te;const w=K===Fn,C=Wi?history.state:{};q&&(oe||w?r.replace(O.fullPath,Ze({scroll:w&&C&&C.scroll},Se)):r.push(O.fullPath,Se)),l.value=O,Ee(O,K,q,w),ce()}let V;function z(){V||(V=r.listen((O,K,q)=>{if(!H.listening)return;const oe=_(O),Se=L(oe);if(Se){I(Ze(Se,{replace:!0}),oe).catch(Rr);return}c=oe;const Te=l.value;Wi&&hm(Al(Te.fullPath,q.delta),js()),N(oe,Te).catch(w=>wn(w,12)?w:wn(w,2)?(I(w.to,oe).then(C=>{wn(C,20)&&!q.delta&&q.type===Gr.pop&&r.go(-1,!1)}).catch(Rr),Promise.reject()):(q.delta&&r.go(-q.delta,!1),j(w,oe,Te))).then(w=>{w=w||ae(oe,Te,!1),w&&(q.delta&&!wn(w,8)?r.go(-q.delta,!1):q.type===Gr.pop&&wn(w,20)&&r.go(-1,!1)),se(oe,Te,w)}).catch(Rr)}))}let $=dr(),te=dr(),re;function j(O,K,q){ce(O);const oe=te.list();return oe.length?oe.forEach(Se=>Se(O,K,q)):console.error(O),Promise.reject(O)}function de(){return re&&l.value!==Fn?Promise.resolve():new Promise((O,K)=>{$.add([O,K])})}function ce(O){return re||(re=!O,z(),$.list().forEach(([K,q])=>O?q(O):K()),$.reset()),O}function Ee(O,K,q,oe){const{scrollBehavior:Se}=n;if(!Wi||!Se)return Promise.resolve();const Te=!q&&dm(Al(O.fullPath,0))||(oe||!q)&&history.state&&history.state.scroll||null;return ku().then(()=>Se(O,K,Te)).then(w=>w&&fm(w)).catch(w=>j(w,O,K))}const k=O=>r.go(O);let fe;const _e=new Set,H={currentRoute:l,listening:!0,addRoute:d,removeRoute:g,clearRoutes:e.clearRoutes,hasRoute:m,getRoutes:p,resolve:_,options:n,push:b,replace:E,go:k,back:()=>k(-1),forward:()=>k(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:te.add,isReady:de,install(O){const K=this;O.component("RouterLink",Nm),O.component("RouterView",Of),O.config.globalProperties.$router=K,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>gi(l)}),Wi&&!fe&&l.value===Fn&&(fe=!0,b(r.location).catch(Se=>{}));const q={};for(const Se in Fn)Object.defineProperty(q,Se,{get:()=>l.value[Se],enumerable:!0});O.provide(Xs,K),O.provide(If,Nu(q)),O.provide(fa,l);const oe=O.unmount;_e.add(O),O.unmount=function(){_e.delete(O),_e.size<1&&(c=Fn,V&&V(),V=null,l.value=Fn,fe=!1,re=!1),oe()}}};function be(O){return O.reduce((K,q)=>K.then(()=>P(q)),Promise.resolve())}return H}function km(n,e){const t=[],i=[],r=[],s=Math.max(e.matched.length,n.matched.length);for(let a=0;a<s;a++){const o=e.matched[a];o&&(n.matched.find(c=>tr(c,o))?i.push(o):t.push(o));const l=n.matched[a];l&&(e.matched.find(c=>tr(c,l))||r.push(l))}return[t,i,r]}function Vm(){return xn(Xs)}const Ff=(n,e)=>{const t=n.__vccOpts||n;for(const[i,r]of e)t[i]=r;return t},Hm={__name:"App",setup(n){return(e,t)=>(fi(),ep(gi(Of)))}},Wm=Ff(Hm,[["__scopeId","data-v-b16ae5da"]]);/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ka="150",Ti={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ai={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},jm=0,Vl=1,Xm=2,Nf=1,qm=2,Mr=3,Zn=0,Ft=1,Wn=2,qn=0,Ki=1,ha=2,Hl=3,Wl=4,Ym=5,ji=100,Zm=101,$m=102,jl=103,Xl=104,Km=200,Jm=201,Qm=202,eg=203,Uf=204,zf=205,tg=206,ng=207,ig=208,rg=209,sg=210,og=0,ag=1,lg=2,da=3,cg=4,ug=5,fg=6,hg=7,Bf=0,dg=1,pg=2,In=0,mg=1,gg=2,_g=3,vg=4,xg=5,Gf=300,ir=301,rr=302,pa=303,ma=304,qs=306,ga=1e3,nn=1001,_a=1002,Pt=1003,ql=1004,_o=1005,Zt=1006,yg=1007,kr=1008,xi=1009,bg=1010,Mg=1011,kf=1012,Sg=1013,di=1014,pi=1015,Vr=1016,wg=1017,Eg=1018,Ji=1020,Tg=1021,rn=1023,Ag=1024,Cg=1025,_i=1026,sr=1027,Pg=1028,Lg=1029,Rg=1030,Dg=1031,Ig=1033,vo=33776,xo=33777,yo=33778,bo=33779,Yl=35840,Zl=35841,$l=35842,Kl=35843,Og=36196,Jl=37492,Ql=37496,ec=37808,tc=37809,nc=37810,ic=37811,rc=37812,sc=37813,oc=37814,ac=37815,lc=37816,cc=37817,uc=37818,fc=37819,hc=37820,dc=37821,Mo=36492,Fg=36283,pc=36284,mc=36285,gc=36286,yi=3e3,Qe=3001,Ng=3200,Ug=3201,zg=0,Bg=1,pn="srgb",Hr="srgb-linear",Vf="display-p3",So=7680,Gg=519,_c=35044,vc="300 es",va=1035;class wi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const vt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],wo=Math.PI/180,xc=180/Math.PI;function qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(vt[n&255]+vt[n>>8&255]+vt[n>>16&255]+vt[n>>24&255]+"-"+vt[e&255]+vt[e>>8&255]+"-"+vt[e>>16&15|64]+vt[e>>24&255]+"-"+vt[t&63|128]+vt[t>>8&255]+"-"+vt[t>>16&255]+vt[t>>24&255]+vt[i&255]+vt[i>>8&255]+vt[i>>16&255]+vt[i>>24&255]).toLowerCase()}function Ot(n,e,t){return Math.max(e,Math.min(t,n))}function kg(n,e){return(n%e+e)%e}function Eo(n,e,t){return(1-t)*n+t*e}function yc(n){return(n&n-1)===0&&n!==0}function Vg(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function es(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Bt(n,e){switch(e.constructor){case Float32Array:return n;case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ge{constructor(e=0,t=0){Ge.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Dt{constructor(){Dt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=i,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],d=i[5],g=i[8],p=r[0],m=r[3],_=r[6],M=r[1],v=r[4],b=r[7],E=r[2],L=r[5],I=r[8];return s[0]=a*p+o*M+l*E,s[3]=a*m+o*v+l*L,s[6]=a*_+o*b+l*I,s[1]=c*p+u*M+f*E,s[4]=c*m+u*v+f*L,s[7]=c*_+u*b+f*I,s[2]=h*p+d*M+g*E,s[5]=h*m+d*v+g*L,s[8]=h*_+d*b+g*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-i*s*u+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,h=o*l-u*s,d=c*s-a*l,g=t*f+i*h+r*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=f*p,e[1]=(r*c-u*i)*p,e[2]=(o*i-r*a)*p,e[3]=h*p,e[4]=(u*t-r*l)*p,e[5]=(r*s-o*t)*p,e[6]=d*p,e[7]=(i*l-c*t)*p,e[8]=(a*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(To.makeScale(e,t)),this}rotate(e){return this.premultiply(To.makeRotation(-e)),this}translate(e,t){return this.premultiply(To.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const To=new Dt;function Hf(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Wr(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}class bi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,a,o){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[a+0],d=s[a+1],g=s[a+2],p=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o===1){e[t+0]=h,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(f!==p||l!==h||c!==d||u!==g){let m=1-o;const _=l*h+c*d+u*g+f*p,M=_>=0?1:-1,v=1-_*_;if(v>Number.EPSILON){const E=Math.sqrt(v),L=Math.atan2(E,_*M);m=Math.sin(m*L)/E,o=Math.sin(o*L)/E}const b=o*M;if(l=l*m+h*b,c=c*m+d*b,u=u*m+g*b,f=f*m+p*b,m===1-o){const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[a],h=s[a+1],d=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*d-c*h,e[t+1]=l*g+u*h+c*f-o*d,e[t+2]=c*g+u*d+o*h-l*f,e[t+3]=u*g-o*f-l*h-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),u=o(r/2),f=o(s/2),h=l(i/2),d=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f+h*d*g;break;case"YZX":this._x=h*u*f+c*d*g,this._y=c*d*f+h*u*g,this._z=c*u*g-h*d*f,this._w=c*u*f-h*d*g;break;case"XZY":this._x=h*u*f-c*d*g,this._y=c*d*f-h*u*g,this._z=c*u*g+h*d*f,this._w=c*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],h=i+o+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(a-r)*d}else if(i>o&&i>f){const d=2*Math.sqrt(1+i-o-f);this._w=(u-l)/d,this._x=.25*d,this._y=(r+a)/d,this._z=(s+c)/d}else if(o>f){const d=2*Math.sqrt(1+o-i-f);this._w=(s-c)/d,this._x=(r+a)/d,this._y=.25*d,this._z=(l+u)/d}else{const d=2*Math.sqrt(1+f-i-o);this._w=(a-r)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ot(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=i*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-i*c,this._z=s*u+a*c+i*l-r*o,this._w=a*u-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+i*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=i,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const d=1-t;return this._w=d*a+t*this._w,this._x=d*i+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),f=Math.sin((1-t)*u)/c,h=Math.sin(t*u)/c;return this._w=a*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(e=0,t=0,i=0){U.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(bc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(bc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*i,u=l*i+o*t-s*r,f=l*r+s*i-a*t,h=-s*t-a*i-o*r;return this.x=c*l+h*-s+u*-o-f*-a,this.y=u*l+h*-a+f*-s-c*-o,this.z=f*l+h*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ao.copy(this).projectOnVector(e),this.sub(Ao)}reflect(e){return this.sub(Ao.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(Ot(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ao=new U,bc=new bi;function Qi(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Co(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Hg=new Dt().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),Wg=new Dt().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]),jn=new U;function jg(n){return n.convertSRGBToLinear(),jn.set(n.r,n.g,n.b).applyMatrix3(Wg),n.setRGB(jn.x,jn.y,jn.z)}function Xg(n){return jn.set(n.r,n.g,n.b).applyMatrix3(Hg),n.setRGB(jn.x,jn.y,jn.z).convertLinearToSRGB()}const qg={[Hr]:n=>n,[pn]:n=>n.convertSRGBToLinear(),[Vf]:jg},Yg={[Hr]:n=>n,[pn]:n=>n.convertLinearToSRGB(),[Vf]:Xg},Tt={enabled:!1,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Hr},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=qg[e],r=Yg[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let Ci;class Wf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ci===void 0&&(Ci=Wr("canvas")),Ci.width=e.width,Ci.height=e.height;const i=Ci.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=Ci}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Wr("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Qi(s[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Qi(t[i]/255)*255):t[i]=Qi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class jf{constructor(e=null){this.isSource=!0,this.uuid=qr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Po(r[a].image)):s.push(Po(r[a]))}else s=Po(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function Po(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Wf.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zg=0;class Nt extends wi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,i=nn,r=nn,s=Zt,a=kr,o=rn,l=xi,c=Nt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zg++}),this.uuid=qr(),this.name="",this.source=new jf(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ge(0,0),this.repeat=new Ge(1,1),this.center=new Ge(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Dt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ga:e.x=e.x-Math.floor(e.x);break;case nn:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ga:e.y=e.y-Math.floor(e.y);break;case nn:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=Gf;Nt.DEFAULT_ANISOTROPY=1;class _t{constructor(e=0,t=0,i=0,r=1){_t.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],d=l[5],g=l[9],p=l[2],m=l[6],_=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-p)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+p)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,b=(d+1)/2,E=(_+1)/2,L=(u+h)/4,I=(f+p)/4,S=(g+m)/4;return v>b&&v>E?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=L/i,s=I/i):b>E?b<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(b),i=L/r,s=S/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=I/s,r=S/s),this.set(i,r,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(f-p)*(f-p)+(h-u)*(h-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-p)/M,this.z=(h-u)/M,this.w=Math.acos((c+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mi extends wi{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new _t(0,0,e,t),this.scissorTest=!1,this.viewport=new _t(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Nt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Zt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new jf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xf extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class $g extends Nt{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Pt,this.minFilter=Pt,this.wrapR=nn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Yr{constructor(e=new U(1/0,1/0,1/0),t=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.length;l<c;l+=3){const u=e[l],f=e[l+1],h=e[l+2];u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromBufferAttribute(e){let t=1/0,i=1/0,r=1/0,s=-1/0,a=-1/0,o=-1/0;for(let l=0,c=e.count;l<c;l++){const u=e.getX(l),f=e.getY(l),h=e.getZ(l);u<t&&(t=u),f<i&&(i=f),h<r&&(r=h),u>s&&(s=u),f>a&&(a=f),h>o&&(o=h)}return this.min.set(t,i,r),this.max.set(s,a,o),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=ri.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let a=0,o=s.count;a<o;a++)ri.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(ri)}else i.boundingBox===null&&i.computeBoundingBox(),Lo.copy(i.boundingBox),Lo.applyMatrix4(e.matrixWorld),this.union(Lo);const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,ri),ri.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pr),ts.subVectors(this.max,pr),Pi.subVectors(e.a,pr),Li.subVectors(e.b,pr),Ri.subVectors(e.c,pr),Nn.subVectors(Li,Pi),Un.subVectors(Ri,Li),si.subVectors(Pi,Ri);let t=[0,-Nn.z,Nn.y,0,-Un.z,Un.y,0,-si.z,si.y,Nn.z,0,-Nn.x,Un.z,0,-Un.x,si.z,0,-si.x,-Nn.y,Nn.x,0,-Un.y,Un.x,0,-si.y,si.x,0];return!Ro(t,Pi,Li,Ri,ts)||(t=[1,0,0,0,1,0,0,0,1],!Ro(t,Pi,Li,Ri,ts))?!1:(ns.crossVectors(Nn,Un),t=[ns.x,ns.y,ns.z],Ro(t,Pi,Li,Ri,ts))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ri).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ri).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(En),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const En=[new U,new U,new U,new U,new U,new U,new U,new U],ri=new U,Lo=new Yr,Pi=new U,Li=new U,Ri=new U,Nn=new U,Un=new U,si=new U,pr=new U,ts=new U,ns=new U,oi=new U;function Ro(n,e,t,i,r){for(let s=0,a=n.length-3;s<=a;s+=3){oi.fromArray(n,s);const o=r.x*Math.abs(oi.x)+r.y*Math.abs(oi.y)+r.z*Math.abs(oi.z),l=e.dot(oi),c=t.dot(oi),u=i.dot(oi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Kg=new Yr,mr=new U,Do=new U;class Ys{constructor(e=new U,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Kg.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;mr.subVectors(e,this.center);const t=mr.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(mr,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Do.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(mr.copy(e.center).add(Do)),this.expandByPoint(mr.copy(e.center).sub(Do))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Tn=new U,Io=new U,is=new U,zn=new U,Oo=new U,rs=new U,Fo=new U;class Va{constructor(e=new U,t=new U(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Tn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Tn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Tn.copy(this.origin).addScaledVector(this.direction,t),Tn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){Io.copy(e).add(t).multiplyScalar(.5),is.copy(t).sub(e).normalize(),zn.copy(this.origin).sub(Io);const s=e.distanceTo(t)*.5,a=-this.direction.dot(is),o=zn.dot(this.direction),l=-zn.dot(is),c=zn.lengthSq(),u=Math.abs(1-a*a);let f,h,d,g;if(u>0)if(f=a*l-o,h=a*o-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const p=1/u;f*=p,h*=p,d=f*(f+a*h+2*o)+h*(a*f+h+2*l)+c}else h=s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-a*s+o)),h=f>0?-s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),d=h*(h+2*l)+c):(f=Math.max(0,-(a*s+o)),h=f>0?s:Math.min(Math.max(-s,-l),s),d=-f*f+h*(h+2*l)+c);else h=a>0?-s:s,f=Math.max(0,-(a*h+o)),d=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Io).addScaledVector(is,h),d}intersectSphere(e,t){Tn.subVectors(e.center,this.origin);const i=Tn.dot(this.direction),r=Tn.dot(Tn)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,a=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,a=(e.min.y-h.y)*u),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),f>=0?(o=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(o=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Tn)!==null}intersectTriangle(e,t,i,r,s){Oo.subVectors(t,e),rs.subVectors(i,e),Fo.crossVectors(Oo,rs);let a=this.direction.dot(Fo),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zn.subVectors(this.origin,e);const l=o*this.direction.dot(rs.crossVectors(zn,rs));if(l<0)return null;const c=o*this.direction.dot(Oo.cross(zn));if(c<0||l+c>a)return null;const u=-o*zn.dot(Fo);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,r,s,a,o,l,c,u,f,h,d,g,p,m){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=s,_[5]=a,_[9]=o,_[13]=l,_[2]=c,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=g,_[11]=p,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Di.setFromMatrixColumn(e,0).length(),s=1/Di.setFromMatrixColumn(e,1).length(),a=1/Di.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=a*u,d=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=d+g*c,t[5]=h-p*c,t[9]=-o*l,t[2]=p-h*c,t[6]=g+d*c,t[10]=a*l}else if(e.order==="YXZ"){const h=l*u,d=l*f,g=c*u,p=c*f;t[0]=h+p*o,t[4]=g*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=d*o-g,t[6]=p+h*o,t[10]=a*l}else if(e.order==="ZXY"){const h=l*u,d=l*f,g=c*u,p=c*f;t[0]=h-p*o,t[4]=-a*f,t[8]=g+d*o,t[1]=d+g*o,t[5]=a*u,t[9]=p-h*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const h=a*u,d=a*f,g=o*u,p=o*f;t[0]=l*u,t[4]=g*c-d,t[8]=h*c+p,t[1]=l*f,t[5]=p*c+h,t[9]=d*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const h=a*l,d=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=p-h*f,t[8]=g*f+d,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=d*f+g,t[10]=h-p*f}else if(e.order==="XZY"){const h=a*l,d=a*c,g=o*l,p=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=h*f+p,t[5]=a*u,t[9]=d*f-g,t[2]=g*f-d,t[6]=o*u,t[10]=p*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Jg,e,Qg)}lookAt(e,t,i){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Bn.crossVectors(i,Gt),Bn.lengthSq()===0&&(Math.abs(i.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Bn.crossVectors(i,Gt)),Bn.normalize(),ss.crossVectors(Gt,Bn),r[0]=Bn.x,r[4]=ss.x,r[8]=Gt.x,r[1]=Bn.y,r[5]=ss.y,r[9]=Gt.y,r[2]=Bn.z,r[6]=ss.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],d=i[13],g=i[2],p=i[6],m=i[10],_=i[14],M=i[3],v=i[7],b=i[11],E=i[15],L=r[0],I=r[4],S=r[8],P=r[12],N=r[1],se=r[5],ae=r[9],V=r[13],z=r[2],$=r[6],te=r[10],re=r[14],j=r[3],de=r[7],ce=r[11],Ee=r[15];return s[0]=a*L+o*N+l*z+c*j,s[4]=a*I+o*se+l*$+c*de,s[8]=a*S+o*ae+l*te+c*ce,s[12]=a*P+o*V+l*re+c*Ee,s[1]=u*L+f*N+h*z+d*j,s[5]=u*I+f*se+h*$+d*de,s[9]=u*S+f*ae+h*te+d*ce,s[13]=u*P+f*V+h*re+d*Ee,s[2]=g*L+p*N+m*z+_*j,s[6]=g*I+p*se+m*$+_*de,s[10]=g*S+p*ae+m*te+_*ce,s[14]=g*P+p*V+m*re+_*Ee,s[3]=M*L+v*N+b*z+E*j,s[7]=M*I+v*se+b*$+E*de,s[11]=M*S+v*ae+b*te+E*ce,s[15]=M*P+v*V+b*re+E*Ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],d=e[14],g=e[3],p=e[7],m=e[11],_=e[15];return g*(+s*l*f-r*c*f-s*o*h+i*c*h+r*o*d-i*l*d)+p*(+t*l*d-t*c*h+s*a*h-r*a*d+r*c*u-s*l*u)+m*(+t*c*f-t*o*d-s*a*f+i*a*d+s*o*u-i*c*u)+_*(-r*o*u-t*l*f+t*o*h+r*a*f-i*a*h+i*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],d=e[11],g=e[12],p=e[13],m=e[14],_=e[15],M=f*m*c-p*h*c+p*l*d-o*m*d-f*l*_+o*h*_,v=g*h*c-u*m*c-g*l*d+a*m*d+u*l*_-a*h*_,b=u*p*c-g*f*c+g*o*d-a*p*d-u*o*_+a*f*_,E=g*f*l-u*p*l-g*o*h+a*p*h+u*o*m-a*f*m,L=t*M+i*v+r*b+s*E;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const I=1/L;return e[0]=M*I,e[1]=(p*h*s-f*m*s-p*r*d+i*m*d+f*r*_-i*h*_)*I,e[2]=(o*m*s-p*l*s+p*r*c-i*m*c-o*r*_+i*l*_)*I,e[3]=(f*l*s-o*h*s-f*r*c+i*h*c+o*r*d-i*l*d)*I,e[4]=v*I,e[5]=(u*m*s-g*h*s+g*r*d-t*m*d-u*r*_+t*h*_)*I,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*_-t*l*_)*I,e[7]=(a*h*s-u*l*s+u*r*c-t*h*c-a*r*d+t*l*d)*I,e[8]=b*I,e[9]=(g*f*s-u*p*s-g*i*d+t*p*d+u*i*_-t*f*_)*I,e[10]=(a*p*s-g*o*s+g*i*c-t*p*c-a*i*_+t*o*_)*I,e[11]=(u*o*s-a*f*s-u*i*c+t*f*c+a*i*d-t*o*d)*I,e[12]=E*I,e[13]=(u*p*r-g*f*r+g*i*h-t*p*h-u*i*m+t*f*m)*I,e[14]=(g*o*r-a*p*r-g*i*l+t*p*l+a*i*m-t*o*m)*I,e[15]=(a*f*r-u*o*r+u*i*l-t*f*l-a*i*h+t*o*h)*I,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+i,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,h=s*c,d=s*u,g=s*f,p=a*u,m=a*f,_=o*f,M=l*c,v=l*u,b=l*f,E=i.x,L=i.y,I=i.z;return r[0]=(1-(p+_))*E,r[1]=(d+b)*E,r[2]=(g-v)*E,r[3]=0,r[4]=(d-b)*L,r[5]=(1-(h+_))*L,r[6]=(m+M)*L,r[7]=0,r[8]=(g+v)*I,r[9]=(m-M)*I,r[10]=(1-(h+p))*I,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const a=Di.set(r[4],r[5],r[6]).length(),o=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jt.copy(this);const c=1/s,u=1/a,f=1/o;return Jt.elements[0]*=c,Jt.elements[1]*=c,Jt.elements[2]*=c,Jt.elements[4]*=u,Jt.elements[5]*=u,Jt.elements[6]*=u,Jt.elements[8]*=f,Jt.elements[9]*=f,Jt.elements[10]*=f,t.setFromRotationMatrix(Jt),i.x=s,i.y=a,i.z=o,this}makePerspective(e,t,i,r,s,a){const o=this.elements,l=2*s/(t-e),c=2*s/(i-r),u=(t+e)/(t-e),f=(i+r)/(i-r),h=-(a+s)/(a-s),d=-2*a*s/(a-s);return o[0]=l,o[4]=0,o[8]=u,o[12]=0,o[1]=0,o[5]=c,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=h,o[14]=d,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(e,t,i,r,s,a){const o=this.elements,l=1/(t-e),c=1/(i-r),u=1/(a-s),f=(t+e)*l,h=(i+r)*c,d=(a+s)*u;return o[0]=2*l,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*c,o[9]=0,o[13]=-h,o[2]=0,o[6]=0,o[10]=-2*u,o[14]=-d,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Di=new U,Jt=new lt,Jg=new U(0,0,0),Qg=new U(1,1,1),Bn=new U,ss=new U,Gt=new U,Mc=new lt,Sc=new bi;class Zs{constructor(e=0,t=0,i=0,r=Zs.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Ot(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ot(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Mc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Mc,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sc.setFromEuler(this),this.setFromQuaternion(Sc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zs.DEFAULT_ORDER="XYZ";class Ha{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e_=0;const wc=new U,Ii=new bi,An=new lt,os=new U,gr=new U,t_=new U,n_=new bi,Ec=new U(1,0,0),Tc=new U(0,1,0),Ac=new U(0,0,1),i_={type:"added"},Cc={type:"removed"};class mt extends wi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e_++}),this.uuid=qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=mt.DEFAULT_UP.clone();const e=new U,t=new Zs,i=new bi,r=new U(1,1,1);function s(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new lt},normalMatrix:{value:new Dt}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=mt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Ha,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(e,t){return Ii.setFromAxisAngle(e,t),this.quaternion.premultiply(Ii),this}rotateX(e){return this.rotateOnAxis(Ec,e)}rotateY(e){return this.rotateOnAxis(Tc,e)}rotateZ(e){return this.rotateOnAxis(Ac,e)}translateOnAxis(e,t){return wc.copy(e).applyQuaternion(this.quaternion),this.position.add(wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ec,e)}translateY(e){return this.translateOnAxis(Tc,e)}translateZ(e){return this.translateOnAxis(Ac,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?os.copy(e):os.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),gr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(gr,os,this.up):An.lookAt(os,gr,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(An),this.quaternion.premultiply(Ii.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(i_)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Cc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),An.multiply(e.parent.matrixWorld)),e.applyMatrix4(An),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,e,t_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(gr,n_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),h=a(e.skeletons),d=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),d.length>0&&(i.animations=d),g.length>0&&(i.nodes=g)}return i.object=r,i;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}mt.DEFAULT_UP=new U(0,1,0);mt.DEFAULT_MATRIX_AUTO_UPDATE=!0;mt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qt=new U,Cn=new U,No=new U,Pn=new U,Oi=new U,Fi=new U,Pc=new U,Uo=new U,zo=new U,Bo=new U;class Dn{constructor(e=new U,t=new U,i=new U){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Qt.subVectors(e,t),r.cross(Qt);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Qt.subVectors(r,t),Cn.subVectors(i,t),No.subVectors(e,t);const a=Qt.dot(Qt),o=Qt.dot(Cn),l=Qt.dot(No),c=Cn.dot(Cn),u=Cn.dot(No),f=a*c-o*o;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(c*l-o*u)*h,g=(a*u-o*l)*h;return s.set(1-d-g,g,d)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Pn),Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getUV(e,t,i,r,s,a,o,l){return this.getBarycoord(e,t,i,r,Pn),l.set(0,0),l.addScaledVector(s,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l}static isFrontFacing(e,t,i,r){return Qt.subVectors(i,t),Cn.subVectors(e,t),Qt.cross(Cn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qt.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),Qt.cross(Cn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Dn.getUV(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let a,o;Oi.subVectors(r,i),Fi.subVectors(s,i),Uo.subVectors(e,i);const l=Oi.dot(Uo),c=Fi.dot(Uo);if(l<=0&&c<=0)return t.copy(i);zo.subVectors(e,r);const u=Oi.dot(zo),f=Fi.dot(zo);if(u>=0&&f<=u)return t.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(i).addScaledVector(Oi,a);Bo.subVectors(e,s);const d=Oi.dot(Bo),g=Fi.dot(Bo);if(g>=0&&d<=g)return t.copy(s);const p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Fi,o);const m=u*g-d*f;if(m<=0&&f-u>=0&&d-g>=0)return Pc.subVectors(s,r),o=(f-u)/(f-u+(d-g)),t.copy(r).addScaledVector(Pc,o);const _=1/(m+p+h);return a=p*_,o=h*_,t.copy(i).addScaledVector(Oi,a).addScaledVector(Fi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let r_=0;class Zr extends wi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:r_++}),this.uuid=qr(),this.name="",this.type="Material",this.blending=Ki,this.side=Zn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uf,this.blendDst=zf,this.blendEquation=ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=da,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gg,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=So,this.stencilZFail=So,this.stencilZPass=So,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ki&&(i.blending=this.blending),this.side!==Zn&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const qf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},en={h:0,s:0,l:0},as={h:0,s:0,l:0};function Go(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Xe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=i,Tt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Tt.workingColorSpace){if(e=kg(e,1),t=Ot(t,0,1),i=Ot(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,a=2*i-s;this.r=Go(a,s,e+1/3),this.g=Go(a,s,e),this.b=Go(a,s,e-1/3)}return Tt.toWorkingColorSpace(this,r),this}setStyle(e,t=pn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,Tt.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,Tt.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,u,t)}break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,Tt.toWorkingColorSpace(this,t),this;if(a===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,Tt.toWorkingColorSpace(this,t),this;console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pn){const i=qf[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Co(e.r),this.g=Co(e.g),this.b=Co(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pn){return Tt.fromWorkingColorSpace(xt.copy(this),e),Ot(xt.r*255,0,255)<<16^Ot(xt.g*255,0,255)<<8^Ot(xt.b*255,0,255)<<0}getHexString(e=pn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.fromWorkingColorSpace(xt.copy(this),t);const i=xt.r,r=xt.g,s=xt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Tt.workingColorSpace){return Tt.fromWorkingColorSpace(xt.copy(this),t),e.r=xt.r,e.g=xt.g,e.b=xt.b,e}getStyle(e=pn){Tt.fromWorkingColorSpace(xt.copy(this),e);const t=xt.r,i=xt.g,r=xt.b;return e!==pn?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${t*255|0},${i*255|0},${r*255|0})`}offsetHSL(e,t,i){return this.getHSL(en),en.h+=e,en.s+=t,en.l+=i,this.setHSL(en.h,en.s,en.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(en),e.getHSL(as);const i=Eo(en.h,as.h,t),r=Eo(en.s,as.s,t),s=Eo(en.l,as.l,t);return this.setHSL(i,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xt=new Xe;Xe.NAMES=qf;class Yf extends Zr{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Bf,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const at=new U,ls=new Ge;class yn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=_c,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ls.fromBufferAttribute(this,t),ls.applyMatrix3(e),this.setXY(t,ls.x,ls.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix3(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyMatrix4(e),this.setXYZ(t,at.x,at.y,at.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.applyNormalMatrix(e),this.setXYZ(t,at.x,at.y,at.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)at.fromBufferAttribute(this,t),at.transformDirection(e),this.setXYZ(t,at.x,at.y,at.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=es(t,this.array)),t}setX(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=es(t,this.array)),t}setY(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=es(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=es(t,this.array)),t}setW(e,t){return this.normalized&&(t=Bt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=Bt(t,this.array),i=Bt(i,this.array),r=Bt(r,this.array),s=Bt(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_c&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Zf extends yn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $f extends yn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends yn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let s_=0;const qt=new lt,ko=new mt,Ni=new U,kt=new Yr,_r=new Yr,pt=new U;class ln extends wi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Hf(e)?$f:Zf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Dt().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return qt.makeRotationFromQuaternion(e),this.applyMatrix4(qt),this}rotateX(e){return qt.makeRotationX(e),this.applyMatrix4(qt),this}rotateY(e){return qt.makeRotationY(e),this.applyMatrix4(qt),this}rotateZ(e){return qt.makeRotationZ(e),this.applyMatrix4(qt),this}translate(e,t,i){return qt.makeTranslation(e,t,i),this.applyMatrix4(qt),this}scale(e,t,i){return qt.makeScale(e,t,i),this.applyMatrix4(qt),this}lookAt(e){return ko.lookAt(e),ko.updateMatrix(),this.applyMatrix4(ko.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new St(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(pt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(pt),pt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(pt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ys);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new U,1/0);return}if(e){const i=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];_r.setFromBufferAttribute(o),this.morphTargetsRelative?(pt.addVectors(kt.min,_r.min),kt.expandByPoint(pt),pt.addVectors(kt.max,_r.max),kt.expandByPoint(pt)):(kt.expandByPoint(_r.min),kt.expandByPoint(_r.max))}kt.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(pt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)pt.fromBufferAttribute(o,c),l&&(Ni.fromBufferAttribute(e,c),pt.add(Ni)),r=Math.max(r,i.distanceToSquared(pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yn(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let N=0;N<o;N++)c[N]=new U,u[N]=new U;const f=new U,h=new U,d=new U,g=new Ge,p=new Ge,m=new Ge,_=new U,M=new U;function v(N,se,ae){f.fromArray(r,N*3),h.fromArray(r,se*3),d.fromArray(r,ae*3),g.fromArray(a,N*2),p.fromArray(a,se*2),m.fromArray(a,ae*2),h.sub(f),d.sub(f),p.sub(g),m.sub(g);const V=1/(p.x*m.y-m.x*p.y);isFinite(V)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(d,-p.y).multiplyScalar(V),M.copy(d).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(V),c[N].add(_),c[se].add(_),c[ae].add(_),u[N].add(M),u[se].add(M),u[ae].add(M))}let b=this.groups;b.length===0&&(b=[{start:0,count:i.length}]);for(let N=0,se=b.length;N<se;++N){const ae=b[N],V=ae.start,z=ae.count;for(let $=V,te=V+z;$<te;$+=3)v(i[$+0],i[$+1],i[$+2])}const E=new U,L=new U,I=new U,S=new U;function P(N){I.fromArray(s,N*3),S.copy(I);const se=c[N];E.copy(se),E.sub(I.multiplyScalar(I.dot(se))).normalize(),L.crossVectors(S,se);const V=L.dot(u[N])<0?-1:1;l[N*4]=E.x,l[N*4+1]=E.y,l[N*4+2]=E.z,l[N*4+3]=V}for(let N=0,se=b.length;N<se;++N){const ae=b[N],V=ae.start,z=ae.count;for(let $=V,te=V+z;$<te;$+=3)P(i[$+0]),P(i[$+1]),P(i[$+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,d=i.count;h<d;h++)i.setXYZ(h,0,0,0);const r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U,f=new U;if(e)for(let h=0,d=e.count;h<d;h+=3){const g=e.getX(h+0),p=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,m),o.add(u),l.add(u),c.add(u),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),u.subVectors(a,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)pt.fromBufferAttribute(e,t),pt.normalize(),e.setXYZ(t,pt.x,pt.y,pt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,h=new c.constructor(l.length*u);let d=0,g=0;for(let p=0,m=l.length;p<m;p++){o.isInterleavedBufferAttribute?d=l[p]*o.data.stride+o.offset:d=l[p]*u;for(let _=0;_<u;_++)h[g++]=c[d++]}return new yn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ln,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const h=c[u],d=e(h,i);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const d=c[f];u.push(d.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Lc=new lt,hn=new Va,cs=new Ys,Rc=new U,vr=new U,xr=new U,yr=new U,Vo=new U,us=new U,fs=new Ge,hs=new Ge,ds=new Ge,Ho=new U,ps=new U;class vn extends mt{constructor(e=new ln,t=new Yf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){us.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(Vo.fromBufferAttribute(f,e),a?us.addScaledVector(Vo,u):us.addScaledVector(Vo.sub(t),u))}t.add(us)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),cs.copy(i.boundingSphere),cs.applyMatrix4(s),hn.copy(e.ray).recast(e.near),cs.containsPoint(hn.origin)===!1&&(hn.intersectSphere(cs,Rc)===null||hn.origin.distanceToSquared(Rc)>(e.far-e.near)**2))||(Lc.copy(s).invert(),hn.copy(e.ray).applyMatrix4(Lc),i.boundingBox!==null&&hn.intersectsBox(i.boundingBox)===!1))return;let a;const o=i.index,l=i.attributes.position,c=i.attributes.uv,u=i.attributes.uv2,f=i.groups,h=i.drawRange;if(o!==null)if(Array.isArray(r))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=r[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(o.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,b=M;v<b;v+=3){const E=o.getX(v),L=o.getX(v+1),I=o.getX(v+2);a=ms(this,m,e,hn,c,u,E,L,I),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const d=Math.max(0,h.start),g=Math.min(o.count,h.start+h.count);for(let p=d,m=g;p<m;p+=3){const _=o.getX(p),M=o.getX(p+1),v=o.getX(p+2);a=ms(this,r,e,hn,c,u,_,M,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}else if(l!==void 0)if(Array.isArray(r))for(let d=0,g=f.length;d<g;d++){const p=f[d],m=r[p.materialIndex],_=Math.max(p.start,h.start),M=Math.min(l.count,Math.min(p.start+p.count,h.start+h.count));for(let v=_,b=M;v<b;v+=3){const E=v,L=v+1,I=v+2;a=ms(this,m,e,hn,c,u,E,L,I),a&&(a.faceIndex=Math.floor(v/3),a.face.materialIndex=p.materialIndex,t.push(a))}}else{const d=Math.max(0,h.start),g=Math.min(l.count,h.start+h.count);for(let p=d,m=g;p<m;p+=3){const _=p,M=p+1,v=p+2;a=ms(this,r,e,hn,c,u,_,M,v),a&&(a.faceIndex=Math.floor(p/3),t.push(a))}}}}function o_(n,e,t,i,r,s,a,o){let l;if(e.side===Ft?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===Zn,o),l===null)return null;ps.copy(o),ps.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ps);return c<t.near||c>t.far?null:{distance:c,point:ps.clone(),object:n}}function ms(n,e,t,i,r,s,a,o,l){n.getVertexPosition(a,vr),n.getVertexPosition(o,xr),n.getVertexPosition(l,yr);const c=o_(n,e,t,i,vr,xr,yr,Ho);if(c){r&&(fs.fromBufferAttribute(r,a),hs.fromBufferAttribute(r,o),ds.fromBufferAttribute(r,l),c.uv=Dn.getUV(Ho,vr,xr,yr,fs,hs,ds,new Ge)),s&&(fs.fromBufferAttribute(s,a),hs.fromBufferAttribute(s,o),ds.fromBufferAttribute(s,l),c.uv2=Dn.getUV(Ho,vr,xr,yr,fs,hs,ds,new Ge));const u={a,b:o,c:l,normal:new U,materialIndex:0};Dn.getNormal(vr,xr,yr,u.normal),c.face=u}return c}class $r extends ln{constructor(e=1,t=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,i,t,e,a,s,0),g("z","y","x",1,-1,i,t,-e,a,s,1),g("x","z","y",1,1,e,i,t,r,a,2),g("x","z","y",1,-1,e,i,-t,r,a,3),g("x","y","z",1,-1,e,t,i,r,s,4),g("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(u,3)),this.setAttribute("uv",new St(f,2));function g(p,m,_,M,v,b,E,L,I,S,P){const N=b/I,se=E/S,ae=b/2,V=E/2,z=L/2,$=I+1,te=S+1;let re=0,j=0;const de=new U;for(let ce=0;ce<te;ce++){const Ee=ce*se-V;for(let k=0;k<$;k++){const fe=k*N-ae;de[p]=fe*M,de[m]=Ee*v,de[_]=z,c.push(de.x,de.y,de.z),de[p]=0,de[m]=0,de[_]=L>0?1:-1,u.push(de.x,de.y,de.z),f.push(k/I),f.push(1-ce/S),re+=1}}for(let ce=0;ce<S;ce++)for(let Ee=0;Ee<I;Ee++){const k=h+Ee+$*ce,fe=h+Ee+$*(ce+1),_e=h+(Ee+1)+$*(ce+1),H=h+(Ee+1)+$*ce;l.push(k,fe,H),l.push(fe,_e,H),j+=6}o.addGroup(d,j,P),d+=j,h+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function or(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Ct(n){const e={};for(let t=0;t<n.length;t++){const i=or(n[t]);for(const r in i)e[r]=i[r]}return e}function a_(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Kf(n){return n.getRenderTarget()===null&&n.outputEncoding===Qe?pn:Hr}const l_={clone:or,merge:Ct};var c_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,u_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class $n extends Zr{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=c_,this.fragmentShader=u_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=or(e.uniforms),this.uniformsGroups=a_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Wa extends mt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Wt extends Wa{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=xc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(wo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xc*2*Math.atan(Math.tan(wo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(wo*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ui=-90,zi=1;class f_ extends mt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const r=new Wt(Ui,zi,e,t);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(1,0,0),this.add(r);const s=new Wt(Ui,zi,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const a=new Wt(Ui,zi,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(0,1,0),this.add(a);const o=new Wt(Ui,zi,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(0,-1,0),this.add(o);const l=new Wt(Ui,zi,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new Wt(Ui,zi,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=In,e.xr.enabled=!1;const d=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,a),e.setRenderTarget(i,3),e.render(t,o),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=d,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class Jf extends Nt{constructor(e,t,i,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:ir,super(e,t,i,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class h_ extends Mi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Jf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Zt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new $r(5,5,5),s=new $n({name:"CubemapFromEquirect",uniforms:or(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ft,blending:qn});s.uniforms.tEquirect.value=t;const a=new vn(r,s),o=t.minFilter;return t.minFilter===kr&&(t.minFilter=Zt),new f_(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(s)}}const Wo=new U,d_=new U,p_=new Dt;class ci{constructor(e=new U(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Wo.subVectors(i,t).cross(d_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Wo),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||p_.getNormalMatrix(e),r=this.coplanarPoint(Wo).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Bi=new Ys,gs=new U;class Qf{constructor(e=new ci,t=new ci,i=new ci,r=new ci,s=new ci,a=new ci){this.planes=[e,t,i,r,s,a]}set(e,t,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,r=i[0],s=i[1],a=i[2],o=i[3],l=i[4],c=i[5],u=i[6],f=i[7],h=i[8],d=i[9],g=i[10],p=i[11],m=i[12],_=i[13],M=i[14],v=i[15];return t[0].setComponents(o-r,f-l,p-h,v-m).normalize(),t[1].setComponents(o+r,f+l,p+h,v+m).normalize(),t[2].setComponents(o+s,f+c,p+d,v+_).normalize(),t[3].setComponents(o-s,f-c,p-d,v-_).normalize(),t[4].setComponents(o-a,f-u,p-g,v-M).normalize(),t[5].setComponents(o+a,f+u,p+g,v+M).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),Bi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSprite(e){return Bi.center.set(0,0,0),Bi.radius=.7071067811865476,Bi.applyMatrix4(e.matrixWorld),this.intersectsSphere(Bi)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(gs.x=r.normal.x>0?e.max.x:e.min.x,gs.y=r.normal.y>0?e.max.y:e.min.y,gs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(gs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eh(){let n=null,e=!1,t=null,i=null;function r(s,a){t(s,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function m_(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,h=c.usage,d=n.createBuffer();n.bindBuffer(u,d),n.bufferData(u,f,h),c.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const h=u.array,d=u.updateRange;n.bindBuffer(f,c),d.count===-1?n.bufferSubData(f,0,h):(t?n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):n.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(n.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const h=i.get(c);(!h||h.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:a,remove:o,update:l}}class ja extends ln{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(i),l=Math.floor(r),c=o+1,u=l+1,f=e/o,h=t/l,d=[],g=[],p=[],m=[];for(let _=0;_<u;_++){const M=_*h-a;for(let v=0;v<c;v++){const b=v*f-s;g.push(b,-M,0),p.push(0,0,1),m.push(v/o),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let M=0;M<o;M++){const v=M+c*_,b=M+c*(_+1),E=M+1+c*(_+1),L=M+1+c*_;d.push(v,b,L),d.push(b,E,L)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ja(e.width,e.height,e.widthSegments,e.heightSegments)}}var g_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,__=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,v_=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,x_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,y_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,b_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,M_="vec3 transformed = vec3( position );",S_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,w_=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
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
#endif`,E_=`#ifdef USE_IRIDESCENCE
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
#endif`,T_=`#ifdef USE_BUMPMAP
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
#endif`,A_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,C_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,P_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,R_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,D_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,I_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,F_=`#define PI 3.141592653589793
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
}`,N_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,U_=`vec3 transformedNormal = objectNormal;
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
#endif`,z_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,B_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,G_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,k_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,V_="gl_FragColor = linearToOutputTexel( gl_FragColor );",H_=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,W_=`#ifdef USE_ENVMAP
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
#endif`,j_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,X_=`#ifdef USE_ENVMAP
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
#endif`,q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Y_=`#ifdef USE_ENVMAP
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
#endif`,Z_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,$_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,K_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,J_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Q_=`#ifdef USE_GRADIENTMAP
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
}`,e0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,t0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,n0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,i0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,r0=`uniform bool receiveShadow;
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
#endif`,s0=`#if defined( USE_ENVMAP )
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
#endif`,o0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,l0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,u0=`PhysicalMaterial material;
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
#endif`,f0=`struct PhysicalMaterial {
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
}`,h0=`
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
#endif`,d0=`#if defined( RE_IndirectDiffuse )
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
#endif`,p0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,m0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,v0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,x0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,b0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,w0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E0=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,T0=`#ifdef USE_MORPHNORMALS
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
#endif`,A0=`#ifdef USE_MORPHTARGETS
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
#endif`,C0=`#ifdef USE_MORPHTARGETS
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
#endif`,P0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 geometryNormal = normal;`,L0=`#ifdef OBJECTSPACE_NORMALMAP
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
#endif`,R0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,I0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,O0=`#ifdef USE_NORMALMAP
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
#endif`,F0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,N0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,U0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,z0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,B0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,k0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,H0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,W0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,X0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Y0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Z0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,$0=`float getShadowMask() {
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
}`,K0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,J0=`#ifdef USE_SKINNING
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
#endif`,Q0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ev=`#ifdef USE_SKINNING
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
#endif`,tv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,nv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,iv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,sv=`#ifdef USE_TRANSMISSION
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
#endif`,ov=`#ifdef USE_TRANSMISSION
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
#endif`,av=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,lv=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,cv=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,uv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,fv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,hv=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mv=`uniform sampler2D t2D;
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
}`,gv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_v=`#ifdef ENVMAP_TYPE_CUBE
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
}`,vv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,yv=`#include <common>
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
}`,bv=`#if DEPTH_PACKING == 3200
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
}`,Mv=`#define DISTANCE
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
}`,Sv=`#define DISTANCE
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ev=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Tv=`uniform float scale;
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
}`,Av=`uniform vec3 diffuse;
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
}`,Cv=`#include <common>
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
}`,Pv=`uniform vec3 diffuse;
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
}`,Lv=`#define LAMBERT
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
}`,Rv=`#define LAMBERT
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
}`,Dv=`#define MATCAP
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
}`,Iv=`#define MATCAP
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
}`,Ov=`#define NORMAL
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
}`,Fv=`#define NORMAL
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
}`,Nv=`#define PHONG
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
}`,Uv=`#define PHONG
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
}`,zv=`#define STANDARD
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
}`,Bv=`#define STANDARD
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
}`,Gv=`#define TOON
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
}`,kv=`#define TOON
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
}`,Vv=`uniform float size;
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Wv=`#include <common>
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
}`,jv=`uniform vec3 color;
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
}`,Xv=`uniform float rotation;
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
}`,qv=`uniform vec3 diffuse;
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
}`,Ue={alphamap_fragment:g_,alphamap_pars_fragment:__,alphatest_fragment:v_,alphatest_pars_fragment:x_,aomap_fragment:y_,aomap_pars_fragment:b_,begin_vertex:M_,beginnormal_vertex:S_,bsdfs:w_,iridescence_fragment:E_,bumpmap_pars_fragment:T_,clipping_planes_fragment:A_,clipping_planes_pars_fragment:C_,clipping_planes_pars_vertex:P_,clipping_planes_vertex:L_,color_fragment:R_,color_pars_fragment:D_,color_pars_vertex:I_,color_vertex:O_,common:F_,cube_uv_reflection_fragment:N_,defaultnormal_vertex:U_,displacementmap_pars_vertex:z_,displacementmap_vertex:B_,emissivemap_fragment:G_,emissivemap_pars_fragment:k_,encodings_fragment:V_,encodings_pars_fragment:H_,envmap_fragment:W_,envmap_common_pars_fragment:j_,envmap_pars_fragment:X_,envmap_pars_vertex:q_,envmap_physical_pars_fragment:s0,envmap_vertex:Y_,fog_vertex:Z_,fog_pars_vertex:$_,fog_fragment:K_,fog_pars_fragment:J_,gradientmap_pars_fragment:Q_,lightmap_fragment:e0,lightmap_pars_fragment:t0,lights_lambert_fragment:n0,lights_lambert_pars_fragment:i0,lights_pars_begin:r0,lights_toon_fragment:o0,lights_toon_pars_fragment:a0,lights_phong_fragment:l0,lights_phong_pars_fragment:c0,lights_physical_fragment:u0,lights_physical_pars_fragment:f0,lights_fragment_begin:h0,lights_fragment_maps:d0,lights_fragment_end:p0,logdepthbuf_fragment:m0,logdepthbuf_pars_fragment:g0,logdepthbuf_pars_vertex:_0,logdepthbuf_vertex:v0,map_fragment:x0,map_pars_fragment:y0,map_particle_fragment:b0,map_particle_pars_fragment:M0,metalnessmap_fragment:S0,metalnessmap_pars_fragment:w0,morphcolor_vertex:E0,morphnormal_vertex:T0,morphtarget_pars_vertex:A0,morphtarget_vertex:C0,normal_fragment_begin:P0,normal_fragment_maps:L0,normal_pars_fragment:R0,normal_pars_vertex:D0,normal_vertex:I0,normalmap_pars_fragment:O0,clearcoat_normal_fragment_begin:F0,clearcoat_normal_fragment_maps:N0,clearcoat_pars_fragment:U0,iridescence_pars_fragment:z0,output_fragment:B0,packing:G0,premultiplied_alpha_fragment:k0,project_vertex:V0,dithering_fragment:H0,dithering_pars_fragment:W0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:X0,shadowmap_pars_fragment:q0,shadowmap_pars_vertex:Y0,shadowmap_vertex:Z0,shadowmask_pars_fragment:$0,skinbase_vertex:K0,skinning_pars_vertex:J0,skinning_vertex:Q0,skinnormal_vertex:ev,specularmap_fragment:tv,specularmap_pars_fragment:nv,tonemapping_fragment:iv,tonemapping_pars_fragment:rv,transmission_fragment:sv,transmission_pars_fragment:ov,uv_pars_fragment:av,uv_pars_vertex:lv,uv_vertex:cv,uv2_pars_fragment:uv,uv2_pars_vertex:fv,uv2_vertex:hv,worldpos_vertex:dv,background_vert:pv,background_frag:mv,backgroundCube_vert:gv,backgroundCube_frag:_v,cube_vert:vv,cube_frag:xv,depth_vert:yv,depth_frag:bv,distanceRGBA_vert:Mv,distanceRGBA_frag:Sv,equirect_vert:wv,equirect_frag:Ev,linedashed_vert:Tv,linedashed_frag:Av,meshbasic_vert:Cv,meshbasic_frag:Pv,meshlambert_vert:Lv,meshlambert_frag:Rv,meshmatcap_vert:Dv,meshmatcap_frag:Iv,meshnormal_vert:Ov,meshnormal_frag:Fv,meshphong_vert:Nv,meshphong_frag:Uv,meshphysical_vert:zv,meshphysical_frag:Bv,meshtoon_vert:Gv,meshtoon_frag:kv,points_vert:Vv,points_frag:Hv,shadow_vert:Wv,shadow_frag:jv,sprite_vert:Xv,sprite_frag:qv},ye={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Dt},uv2Transform:{value:new Dt},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Ge(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ge(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Dt}}},gn={basic:{uniforms:Ct([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ue.meshbasic_vert,fragmentShader:Ue.meshbasic_frag},lambert:{uniforms:Ct([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshlambert_vert,fragmentShader:Ue.meshlambert_frag},phong:{uniforms:Ct([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:Ue.meshphong_vert,fragmentShader:Ue.meshphong_frag},standard:{uniforms:Ct([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag},toon:{uniforms:Ct([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ue.meshtoon_vert,fragmentShader:Ue.meshtoon_frag},matcap:{uniforms:Ct([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ue.meshmatcap_vert,fragmentShader:Ue.meshmatcap_frag},points:{uniforms:Ct([ye.points,ye.fog]),vertexShader:Ue.points_vert,fragmentShader:Ue.points_frag},dashed:{uniforms:Ct([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ue.linedashed_vert,fragmentShader:Ue.linedashed_frag},depth:{uniforms:Ct([ye.common,ye.displacementmap]),vertexShader:Ue.depth_vert,fragmentShader:Ue.depth_frag},normal:{uniforms:Ct([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ue.meshnormal_vert,fragmentShader:Ue.meshnormal_frag},sprite:{uniforms:Ct([ye.sprite,ye.fog]),vertexShader:Ue.sprite_vert,fragmentShader:Ue.sprite_frag},background:{uniforms:{uvTransform:{value:new Dt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ue.background_vert,fragmentShader:Ue.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ue.backgroundCube_vert,fragmentShader:Ue.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ue.cube_vert,fragmentShader:Ue.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ue.equirect_vert,fragmentShader:Ue.equirect_frag},distanceRGBA:{uniforms:Ct([ye.common,ye.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ue.distanceRGBA_vert,fragmentShader:Ue.distanceRGBA_frag},shadow:{uniforms:Ct([ye.lights,ye.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ue.shadow_vert,fragmentShader:Ue.shadow_frag}};gn.physical={uniforms:Ct([gn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Ge(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Ge},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ue.meshphysical_vert,fragmentShader:Ue.meshphysical_frag};const _s={r:0,b:0,g:0};function Yv(n,e,t,i,r,s,a){const o=new Xe(0);let l=s===!0?0:1,c,u,f=null,h=0,d=null;function g(m,_){let M=!1,v=_.isScene===!0?_.background:null;v&&v.isTexture&&(v=(_.backgroundBlurriness>0?t:e).get(v));const b=n.xr,E=b.getSession&&b.getSession();E&&E.environmentBlendMode==="additive"&&(v=null),v===null?p(o,l):v&&v.isColor&&(p(v,1),M=!0),(n.autoClear||M)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),v&&(v.isCubeTexture||v.mapping===qs)?(u===void 0&&(u=new vn(new $r(1,1,1),new $n({name:"BackgroundCubeMaterial",uniforms:or(gn.backgroundCube.uniforms),vertexShader:gn.backgroundCube.vertexShader,fragmentShader:gn.backgroundCube.fragmentShader,side:Ft,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,I,S){this.matrixWorld.copyPosition(S.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=v.encoding!==Qe,(f!==v||h!==v.version||d!==n.toneMapping)&&(u.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new vn(new ja(2,2),new $n({name:"BackgroundMaterial",uniforms:or(gn.background.uniforms),vertexShader:gn.background.vertexShader,fragmentShader:gn.background.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=v.encoding!==Qe,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(f!==v||h!==v.version||d!==n.toneMapping)&&(c.material.needsUpdate=!0,f=v,h=v.version,d=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function p(m,_){m.getRGB(_s,Kf(n)),i.buffers.color.setClear(_s.r,_s.g,_s.b,_,a)}return{getClearColor:function(){return o},setClearColor:function(m,_=1){o.set(m),l=_,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,p(o,l)},render:g}}function Zv(n,e,t,i){const r=n.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function f(z,$,te,re,j){let de=!1;if(a){const ce=p(re,te,$);c!==ce&&(c=ce,d(c.object)),de=_(z,re,te,j),de&&M(z,re,te,j)}else{const ce=$.wireframe===!0;(c.geometry!==re.id||c.program!==te.id||c.wireframe!==ce)&&(c.geometry=re.id,c.program=te.id,c.wireframe=ce,de=!0)}j!==null&&t.update(j,34963),(de||u)&&(u=!1,S(z,$,te,re),j!==null&&n.bindBuffer(34963,t.get(j).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function d(z){return i.isWebGL2?n.bindVertexArray(z):s.bindVertexArrayOES(z)}function g(z){return i.isWebGL2?n.deleteVertexArray(z):s.deleteVertexArrayOES(z)}function p(z,$,te){const re=te.wireframe===!0;let j=o[z.id];j===void 0&&(j={},o[z.id]=j);let de=j[$.id];de===void 0&&(de={},j[$.id]=de);let ce=de[re];return ce===void 0&&(ce=m(h()),de[re]=ce),ce}function m(z){const $=[],te=[],re=[];for(let j=0;j<r;j++)$[j]=0,te[j]=0,re[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:$,enabledAttributes:te,attributeDivisors:re,object:z,attributes:{},index:null}}function _(z,$,te,re){const j=c.attributes,de=$.attributes;let ce=0;const Ee=te.getAttributes();for(const k in Ee)if(Ee[k].location>=0){const _e=j[k];let H=de[k];if(H===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(H=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(H=z.instanceColor)),_e===void 0||_e.attribute!==H||H&&_e.data!==H.data)return!0;ce++}return c.attributesNum!==ce||c.index!==re}function M(z,$,te,re){const j={},de=$.attributes;let ce=0;const Ee=te.getAttributes();for(const k in Ee)if(Ee[k].location>=0){let _e=de[k];_e===void 0&&(k==="instanceMatrix"&&z.instanceMatrix&&(_e=z.instanceMatrix),k==="instanceColor"&&z.instanceColor&&(_e=z.instanceColor));const H={};H.attribute=_e,_e&&_e.data&&(H.data=_e.data),j[k]=H,ce++}c.attributes=j,c.attributesNum=ce,c.index=re}function v(){const z=c.newAttributes;for(let $=0,te=z.length;$<te;$++)z[$]=0}function b(z){E(z,0)}function E(z,$){const te=c.newAttributes,re=c.enabledAttributes,j=c.attributeDivisors;te[z]=1,re[z]===0&&(n.enableVertexAttribArray(z),re[z]=1),j[z]!==$&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](z,$),j[z]=$)}function L(){const z=c.newAttributes,$=c.enabledAttributes;for(let te=0,re=$.length;te<re;te++)$[te]!==z[te]&&(n.disableVertexAttribArray(te),$[te]=0)}function I(z,$,te,re,j,de){i.isWebGL2===!0&&(te===5124||te===5125)?n.vertexAttribIPointer(z,$,te,j,de):n.vertexAttribPointer(z,$,te,re,j,de)}function S(z,$,te,re){if(i.isWebGL2===!1&&(z.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;v();const j=re.attributes,de=te.getAttributes(),ce=$.defaultAttributeValues;for(const Ee in de){const k=de[Ee];if(k.location>=0){let fe=j[Ee];if(fe===void 0&&(Ee==="instanceMatrix"&&z.instanceMatrix&&(fe=z.instanceMatrix),Ee==="instanceColor"&&z.instanceColor&&(fe=z.instanceColor)),fe!==void 0){const _e=fe.normalized,H=fe.itemSize,be=t.get(fe);if(be===void 0)continue;const O=be.buffer,K=be.type,q=be.bytesPerElement;if(fe.isInterleavedBufferAttribute){const oe=fe.data,Se=oe.stride,Te=fe.offset;if(oe.isInstancedInterleavedBuffer){for(let w=0;w<k.locationSize;w++)E(k.location+w,oe.meshPerAttribute);z.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let w=0;w<k.locationSize;w++)b(k.location+w);n.bindBuffer(34962,O);for(let w=0;w<k.locationSize;w++)I(k.location+w,H/k.locationSize,K,_e,Se*q,(Te+H/k.locationSize*w)*q)}else{if(fe.isInstancedBufferAttribute){for(let oe=0;oe<k.locationSize;oe++)E(k.location+oe,fe.meshPerAttribute);z.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let oe=0;oe<k.locationSize;oe++)b(k.location+oe);n.bindBuffer(34962,O);for(let oe=0;oe<k.locationSize;oe++)I(k.location+oe,H/k.locationSize,K,_e,H*q,H/k.locationSize*oe*q)}}else if(ce!==void 0){const _e=ce[Ee];if(_e!==void 0)switch(_e.length){case 2:n.vertexAttrib2fv(k.location,_e);break;case 3:n.vertexAttrib3fv(k.location,_e);break;case 4:n.vertexAttrib4fv(k.location,_e);break;default:n.vertexAttrib1fv(k.location,_e)}}}}L()}function P(){ae();for(const z in o){const $=o[z];for(const te in $){const re=$[te];for(const j in re)g(re[j].object),delete re[j];delete $[te]}delete o[z]}}function N(z){if(o[z.id]===void 0)return;const $=o[z.id];for(const te in $){const re=$[te];for(const j in re)g(re[j].object),delete re[j];delete $[te]}delete o[z.id]}function se(z){for(const $ in o){const te=o[$];if(te[z.id]===void 0)continue;const re=te[z.id];for(const j in re)g(re[j].object),delete re[j];delete te[z.id]}}function ae(){V(),u=!0,c!==l&&(c=l,d(c.object))}function V(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:ae,resetDefaultState:V,dispose:P,releaseStatesOfGeometry:N,releaseStatesOfProgram:se,initAttributes:v,enableAttribute:b,disableUnusedAttributes:L}}function $v(n,e,t,i){const r=i.isWebGL2;let s;function a(c){s=c}function o(c,u){n.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,f){if(f===0)return;let h,d;if(r)h=n,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,c,u,f),t.update(u,s,f)}this.setMode=a,this.render=o,this.renderInstances=l}function Kv(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(I){if(I==="highp"){if(n.getShaderPrecisionFormat(35633,36338).precision>0&&n.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";I="mediump"}return I==="mediump"&&n.getShaderPrecisionFormat(35633,36337).precision>0&&n.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n instanceof WebGL2RenderingContext;let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=n.getParameter(34930),h=n.getParameter(35660),d=n.getParameter(3379),g=n.getParameter(34076),p=n.getParameter(34921),m=n.getParameter(36347),_=n.getParameter(36348),M=n.getParameter(36349),v=h>0,b=a||e.has("OES_texture_float"),E=v&&b,L=a?n.getParameter(36183):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:m,maxVaryings:_,maxFragmentUniforms:M,vertexTextures:v,floatFragmentTextures:b,floatVertexTextures:E,maxSamples:L}}function Jv(n){const e=this;let t=null,i=0,r=!1,s=!1;const a=new ci,o=new Dt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||i!==0||r;return r=h,i=f.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){t=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,p=f.clipIntersection,m=f.clipShadows,_=n.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,v=M*4;let b=_.clippingState||null;l.value=b,b=u(g,h,v,d);for(let E=0;E!==v;++E)b[E]=t[E];_.clippingState=b,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,d,g){const p=f!==null?f.length:0;let m=null;if(p!==0){if(m=l.value,g!==!0||m===null){const _=d+p*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<_)&&(m=new Float32Array(_));for(let v=0,b=d;v!==p;++v,b+=4)a.copy(f[v]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,m}}function Qv(n){let e=new WeakMap;function t(a,o){return o===pa?a.mapping=ir:o===ma&&(a.mapping=rr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pa||o===ma)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new h_(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ex extends Wa{constructor(e=-1,t=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Xi=4,Dc=[.125,.215,.35,.446,.526,.582],hi=20,jo=new ex,Ic=new Xe;let Xo=null;const ui=(1+Math.sqrt(5))/2,Gi=1/ui,Oc=[new U(1,1,1),new U(-1,1,1),new U(1,1,-1),new U(-1,1,-1),new U(0,ui,Gi),new U(0,ui,-Gi),new U(Gi,0,ui),new U(-Gi,0,ui),new U(ui,Gi,0),new U(-ui,Gi,0)];class Fc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Xo=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Xo),e.scissorTest=!1,vs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ir||e.mapping===rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Xo=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:Vr,format:rn,encoding:yi,depthBuffer:!1},r=Nc(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nc(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=tx(s)),this._blurMaterial=nx(s,e,t)}return r}_compileMaterial(e){const t=new vn(this._lodPlanes[0],e);this._renderer.compile(t,jo)}_sceneToCubeUV(e,t,i,r){const o=new Wt(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Ic),u.toneMapping=In,u.autoClear=!1;const d=new Yf({name:"PMREM.Background",side:Ft,depthWrite:!1,depthTest:!1}),g=new vn(new $r,d);let p=!1;const m=e.background;m?m.isColor&&(d.color.copy(m),e.background=null,p=!0):(d.color.copy(Ic),p=!0);for(let _=0;_<6;_++){const M=_%3;M===0?(o.up.set(0,l[_],0),o.lookAt(c[_],0,0)):M===1?(o.up.set(0,0,l[_]),o.lookAt(0,c[_],0)):(o.up.set(0,l[_],0),o.lookAt(0,0,c[_]));const v=this._cubeSize;vs(r,M*v,_>2?v:0,v,v),u.setRenderTarget(r),p&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===ir||e.mapping===rr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=zc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new vn(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;vs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,jo)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Oc[(r-1)%Oc.length];this._blur(e,r-1,r,s,a)}t.autoClear=i}_blur(e,t,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vn(this._lodPlanes[r],c),h=c.uniforms,d=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*hi-1),p=s/g,m=isFinite(s)?1+Math.floor(u*p):hi;m>hi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${hi}`);const _=[];let M=0;for(let I=0;I<hi;++I){const S=I/p,P=Math.exp(-S*S/2);_.push(P),I===0?M+=P:I<m&&(M+=2*P)}for(let I=0;I<_.length;I++)_[I]=_[I]/M;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=_,h.latitudinal.value=a==="latitudinal",o&&(h.poleAxis.value=o);const{_lodMax:v}=this;h.dTheta.value=g,h.mipInt.value=v-i;const b=this._sizeLods[r],E=3*b*(r>v-Xi?r-v+Xi:0),L=4*(this._cubeSize-b);vs(t,E,L,3*b,2*b),l.setRenderTarget(t),l.render(f,jo)}}function tx(n){const e=[],t=[],i=[];let r=n;const s=n-Xi+1+Dc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>n-Xi?l=Dc[a-n+Xi-1]:a===0&&(l=0),i.push(l);const c=1/(o-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,p=3,m=2,_=1,M=new Float32Array(p*g*d),v=new Float32Array(m*g*d),b=new Float32Array(_*g*d);for(let L=0;L<d;L++){const I=L%3*2/3-1,S=L>2?0:-1,P=[I,S,0,I+2/3,S,0,I+2/3,S+1,0,I,S,0,I+2/3,S+1,0,I,S+1,0];M.set(P,p*g*L),v.set(h,m*g*L);const N=[L,L,L,L,L,L];b.set(N,_*g*L)}const E=new ln;E.setAttribute("position",new yn(M,p)),E.setAttribute("uv",new yn(v,m)),E.setAttribute("faceIndex",new yn(b,_)),e.push(E),r>Xi&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Nc(n,e,t){const i=new Mi(n,e,t);return i.texture.mapping=qs,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function vs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function nx(n,e,t){const i=new Float32Array(hi),r=new U(0,1,0);return new $n({name:"SphericalGaussianBlur",defines:{n:hi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Uc(){return new $n({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xa(),fragmentShader:`

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
		`,blending:qn,depthTest:!1,depthWrite:!1})}function zc(){return new $n({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:qn,depthTest:!1,depthWrite:!1})}function Xa(){return`

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
	`}function ix(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===pa||l===ma,u=l===ir||l===rr;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let f=e.get(o);return t===null&&(t=new Fc(n)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),e.set(o,f),f.texture}else{if(e.has(o))return e.get(o).texture;{const f=o.image;if(c&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new Fc(n));const h=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,h),o.addEventListener("dispose",s),h.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function rx(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function sx(n,e,t,i){const r={},s=new WeakMap;function a(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(f,h){return r[h.id]===!0||(h.addEventListener("dispose",a),r[h.id]=!0,t.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const p=d[g];for(let m=0,_=p.length;m<_;m++)e.update(p[m],34962)}}function c(f){const h=[],d=f.index,g=f.attributes.position;let p=0;if(d!==null){const M=d.array;p=d.version;for(let v=0,b=M.length;v<b;v+=3){const E=M[v+0],L=M[v+1],I=M[v+2];h.push(E,L,L,I,I,E)}}else{const M=g.array;p=g.version;for(let v=0,b=M.length/3-1;v<b;v+=3){const E=v+0,L=v+1,I=v+2;h.push(E,L,L,I,I,E)}}const m=new(Hf(h)?$f:Zf)(h,1);m.version=p;const _=s.get(f);_&&e.remove(_),s.set(f,m)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function ox(n,e,t,i){const r=i.isWebGL2;let s;function a(h){s=h}let o,l;function c(h){o=h.type,l=h.bytesPerElement}function u(h,d){n.drawElements(s,d,o,h*l),t.update(d,s,1)}function f(h,d,g){if(g===0)return;let p,m;if(r)p=n,m="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[m](s,d,o,h*l,g),t.update(d,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=f}function ax(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(t.calls++,a){case 4:t.triangles+=o*(s/3);break;case 1:t.lines+=o*(s/2);break;case 3:t.lines+=o*(s-1);break;case 2:t.lines+=o*s;break;case 0:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function lx(n,e){return n[0]-e[0]}function cx(n,e){return Math.abs(e[1])-Math.abs(n[1])}function ux(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,a=new _t,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,f){const h=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==p){let $=function(){V.dispose(),s.delete(u),u.removeEventListener("dispose",$)};var d=$;m!==void 0&&m.texture.dispose();const v=u.morphAttributes.position!==void 0,b=u.morphAttributes.normal!==void 0,E=u.morphAttributes.color!==void 0,L=u.morphAttributes.position||[],I=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let P=0;v===!0&&(P=1),b===!0&&(P=2),E===!0&&(P=3);let N=u.attributes.position.count*P,se=1;N>e.maxTextureSize&&(se=Math.ceil(N/e.maxTextureSize),N=e.maxTextureSize);const ae=new Float32Array(N*se*4*p),V=new Xf(ae,N,se,p);V.type=pi,V.needsUpdate=!0;const z=P*4;for(let te=0;te<p;te++){const re=L[te],j=I[te],de=S[te],ce=N*se*4*te;for(let Ee=0;Ee<re.count;Ee++){const k=Ee*z;v===!0&&(a.fromBufferAttribute(re,Ee),ae[ce+k+0]=a.x,ae[ce+k+1]=a.y,ae[ce+k+2]=a.z,ae[ce+k+3]=0),b===!0&&(a.fromBufferAttribute(j,Ee),ae[ce+k+4]=a.x,ae[ce+k+5]=a.y,ae[ce+k+6]=a.z,ae[ce+k+7]=0),E===!0&&(a.fromBufferAttribute(de,Ee),ae[ce+k+8]=a.x,ae[ce+k+9]=a.y,ae[ce+k+10]=a.z,ae[ce+k+11]=de.itemSize===4?a.w:1)}}m={count:p,texture:V,size:new Ge(N,se)},s.set(u,m),u.addEventListener("dispose",$)}let _=0;for(let v=0;v<h.length;v++)_+=h[v];const M=u.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",M),f.getUniforms().setValue(n,"morphTargetInfluences",h),f.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const g=h===void 0?0:h.length;let p=i[u.id];if(p===void 0||p.length!==g){p=[];for(let b=0;b<g;b++)p[b]=[b,0];i[u.id]=p}for(let b=0;b<g;b++){const E=p[b];E[0]=b,E[1]=h[b]}p.sort(cx);for(let b=0;b<8;b++)b<g&&p[b][1]?(o[b][0]=p[b][0],o[b][1]=p[b][1]):(o[b][0]=Number.MAX_SAFE_INTEGER,o[b][1]=0);o.sort(lx);const m=u.morphAttributes.position,_=u.morphAttributes.normal;let M=0;for(let b=0;b<8;b++){const E=o[b],L=E[0],I=E[1];L!==Number.MAX_SAFE_INTEGER&&I?(m&&u.getAttribute("morphTarget"+b)!==m[L]&&u.setAttribute("morphTarget"+b,m[L]),_&&u.getAttribute("morphNormal"+b)!==_[L]&&u.setAttribute("morphNormal"+b,_[L]),r[b]=I,M+=I):(m&&u.hasAttribute("morphTarget"+b)===!0&&u.deleteAttribute("morphTarget"+b),_&&u.hasAttribute("morphNormal"+b)===!0&&u.deleteAttribute("morphNormal"+b),r[b]=0)}const v=u.morphTargetsRelative?1:1-M;f.getUniforms().setValue(n,"morphTargetBaseInfluence",v),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function fx(n,e,t,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),f}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const th=new Nt,nh=new Xf,ih=new $g,rh=new Jf,Bc=[],Gc=[],kc=new Float32Array(16),Vc=new Float32Array(9),Hc=new Float32Array(4);function lr(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Bc[r];if(s===void 0&&(s=new Float32Array(r),Bc[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,n[a].toArray(s,o)}return s}function ut(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function ft(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function $s(n,e){let t=Gc[e];t===void 0&&(t=new Int32Array(e),Gc[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function hx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function dx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2fv(this.addr,e),ft(t,e)}}function px(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ut(t,e))return;n.uniform3fv(this.addr,e),ft(t,e)}}function mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4fv(this.addr,e),ft(t,e)}}function gx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Hc.set(i),n.uniformMatrix2fv(this.addr,!1,Hc),ft(t,i)}}function _x(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;Vc.set(i),n.uniformMatrix3fv(this.addr,!1,Vc),ft(t,i)}}function vx(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(ut(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(ut(t,i))return;kc.set(i),n.uniformMatrix4fv(this.addr,!1,kc),ft(t,i)}}function xx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function yx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2iv(this.addr,e),ft(t,e)}}function bx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3iv(this.addr,e),ft(t,e)}}function Mx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4iv(this.addr,e),ft(t,e)}}function Sx(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function wx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ut(t,e))return;n.uniform2uiv(this.addr,e),ft(t,e)}}function Ex(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ut(t,e))return;n.uniform3uiv(this.addr,e),ft(t,e)}}function Tx(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ut(t,e))return;n.uniform4uiv(this.addr,e),ft(t,e)}}function Ax(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||th,r)}function Cx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||ih,r)}function Px(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||rh,r)}function Lx(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||nh,r)}function Rx(n){switch(n){case 5126:return hx;case 35664:return dx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return _x;case 35676:return vx;case 5124:case 35670:return xx;case 35667:case 35671:return yx;case 35668:case 35672:return bx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return wx;case 36295:return Ex;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Cx;case 35680:case 36300:case 36308:case 36293:return Px;case 36289:case 36303:case 36311:case 36292:return Lx}}function Dx(n,e){n.uniform1fv(this.addr,e)}function Ix(n,e){const t=lr(e,this.size,2);n.uniform2fv(this.addr,t)}function Ox(n,e){const t=lr(e,this.size,3);n.uniform3fv(this.addr,t)}function Fx(n,e){const t=lr(e,this.size,4);n.uniform4fv(this.addr,t)}function Nx(n,e){const t=lr(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Ux(n,e){const t=lr(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function zx(n,e){const t=lr(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Bx(n,e){n.uniform1iv(this.addr,e)}function Gx(n,e){n.uniform2iv(this.addr,e)}function kx(n,e){n.uniform3iv(this.addr,e)}function Vx(n,e){n.uniform4iv(this.addr,e)}function Hx(n,e){n.uniform1uiv(this.addr,e)}function Wx(n,e){n.uniform2uiv(this.addr,e)}function jx(n,e){n.uniform3uiv(this.addr,e)}function Xx(n,e){n.uniform4uiv(this.addr,e)}function qx(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||th,s[a])}function Yx(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||ih,s[a])}function Zx(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rh,s[a])}function $x(n,e,t){const i=this.cache,r=e.length,s=$s(t,r);ut(i,s)||(n.uniform1iv(this.addr,s),ft(i,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nh,s[a])}function Kx(n){switch(n){case 5126:return Dx;case 35664:return Ix;case 35665:return Ox;case 35666:return Fx;case 35674:return Nx;case 35675:return Ux;case 35676:return zx;case 5124:case 35670:return Bx;case 35667:case 35671:return Gx;case 35668:case 35672:return kx;case 35669:case 35673:return Vx;case 5125:return Hx;case 36294:return Wx;case 36295:return jx;case 36296:return Xx;case 35678:case 36198:case 36298:case 36306:case 35682:return qx;case 35679:case 36299:case 36307:return Yx;case 35680:case 36300:case 36308:case 36293:return Zx;case 36289:case 36303:case 36311:case 36292:return $x}}class Jx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=Rx(t.type)}}class Qx{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Kx(t.type)}}class ey{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],i)}}}const qo=/(\w+)(\])?(\[|\.)?/g;function Wc(n,e){n.seq.push(e),n.map[e.id]=e}function ty(n,e,t){const i=n.name,r=i.length;for(qo.lastIndex=0;;){const s=qo.exec(i),a=qo.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){Wc(t,c===void 0?new Jx(o,n,e):new Qx(o,n,e));break}else{let f=t.map[o];f===void 0&&(f=new ey(o),Wc(t,f)),t=f}}}class As{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);ty(s,a,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function jc(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let ny=0;function iy(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}function ry(n){switch(n){case yi:return["Linear","( value )"];case Qe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",n),["Linear","( value )"]}}function Xc(n,e,t){const i=n.getShaderParameter(e,35713),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+iy(n.getShaderSource(e),a)}else return r}function sy(n,e){const t=ry(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function oy(n,e){let t;switch(e){case mg:t="Linear";break;case gg:t="Reinhard";break;case _g:t="OptimizedCineon";break;case vg:t="ACESFilmic";break;case xg:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ay(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.tangentSpaceNormalMap||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Sr).join(`
`)}function ly(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function cy(n,e){const t={},i=n.getProgramParameter(e,35721);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),a=s.name;let o=1;s.type===35674&&(o=2),s.type===35675&&(o=3),s.type===35676&&(o=4),t[a]={type:s.type,location:n.getAttribLocation(e,a),locationSize:o}}return t}function Sr(n){return n!==""}function qc(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yc(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const uy=/^[ \t]*#include +<([\w\d./]+)>/gm;function xa(n){return n.replace(uy,fy)}function fy(n,e){const t=Ue[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return xa(t)}const hy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zc(n){return n.replace(hy,dy)}function dy(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function $c(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function py(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Nf?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===qm?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Mr&&(e="SHADOWMAP_TYPE_VSM"),e}function my(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ir:case rr:e="ENVMAP_TYPE_CUBE";break;case qs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function gy(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case rr:e="ENVMAP_MODE_REFRACTION";break}return e}function _y(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Bf:e="ENVMAP_BLENDING_MULTIPLY";break;case dg:e="ENVMAP_BLENDING_MIX";break;case pg:e="ENVMAP_BLENDING_ADD";break}return e}function vy(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function xy(n,e,t,i){const r=n.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=py(t),c=my(t),u=gy(t),f=_y(t),h=vy(t),d=t.isWebGL2?"":ay(t),g=ly(s),p=r.createProgram();let m,_,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=[g].filter(Sr).join(`
`),m.length>0&&(m+=`
`),_=[d,g].filter(Sr).join(`
`),_.length>0&&(_+=`
`)):(m=[$c(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Sr).join(`
`),_=[d,$c(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==In?"#define TONE_MAPPING":"",t.toneMapping!==In?Ue.tonemapping_pars_fragment:"",t.toneMapping!==In?oy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ue.encodings_pars_fragment,sy("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Sr).join(`
`)),a=xa(a),a=qc(a,t),a=Yc(a,t),o=xa(o),o=qc(o,t),o=Yc(o,t),a=Zc(a),o=Zc(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,_=["#define varying in",t.glslVersion===vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const v=M+m+a,b=M+_+o,E=jc(r,35633,v),L=jc(r,35632,b);if(r.attachShader(p,E),r.attachShader(p,L),t.index0AttributeName!==void 0?r.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(p,0,"position"),r.linkProgram(p),n.debug.checkShaderErrors){const P=r.getProgramInfoLog(p).trim(),N=r.getShaderInfoLog(E).trim(),se=r.getShaderInfoLog(L).trim();let ae=!0,V=!0;if(r.getProgramParameter(p,35714)===!1){ae=!1;const z=Xc(r,E,"vertex"),$=Xc(r,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(p,35715)+`

Program Info Log: `+P+`
`+z+`
`+$)}else P!==""?console.warn("THREE.WebGLProgram: Program Info Log:",P):(N===""||se==="")&&(V=!1);V&&(this.diagnostics={runnable:ae,programLog:P,vertexShader:{log:N,prefix:m},fragmentShader:{log:se,prefix:_}})}r.deleteShader(E),r.deleteShader(L);let I;this.getUniforms=function(){return I===void 0&&(I=new As(r,p)),I};let S;return this.getAttributes=function(){return S===void 0&&(S=cy(r,p)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=L,this}let yy=0;class by{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new My(e),t.set(e,i)),i}}class My{constructor(e){this.id=yy++,this.code=e,this.usedTimes=0}}function Sy(n,e,t,i,r,s,a){const o=new Ha,l=new by,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(S,P,N,se,ae){const V=se.fog,z=ae.geometry,$=S.isMeshStandardMaterial?se.environment:null,te=(S.isMeshStandardMaterial?t:e).get(S.envMap||$),re=te&&te.mapping===qs?te.image.height:null,j=g[S.type];S.precision!==null&&(d=r.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const de=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,ce=de!==void 0?de.length:0;let Ee=0;z.morphAttributes.position!==void 0&&(Ee=1),z.morphAttributes.normal!==void 0&&(Ee=2),z.morphAttributes.color!==void 0&&(Ee=3);let k,fe,_e,H;if(j){const Se=gn[j];k=Se.vertexShader,fe=Se.fragmentShader}else k=S.vertexShader,fe=S.fragmentShader,l.update(S),_e=l.getVertexShaderID(S),H=l.getFragmentShaderID(S);const be=n.getRenderTarget(),O=S.alphaTest>0,K=S.clearcoat>0,q=S.iridescence>0;return{isWebGL2:u,shaderID:j,shaderName:S.type,vertexShader:k,fragmentShader:fe,defines:S.defines,customVertexShaderID:_e,customFragmentShaderID:H,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,instancing:ae.isInstancedMesh===!0,instancingColor:ae.isInstancedMesh===!0&&ae.instanceColor!==null,supportsVertexTextures:h,outputEncoding:be===null?n.outputEncoding:be.isXRRenderTarget===!0?be.texture.encoding:yi,map:!!S.map,matcap:!!S.matcap,envMap:!!te,envMapMode:te&&te.mapping,envMapCubeUVHeight:re,lightMap:!!S.lightMap,aoMap:!!S.aoMap,emissiveMap:!!S.emissiveMap,bumpMap:!!S.bumpMap,normalMap:!!S.normalMap,objectSpaceNormalMap:S.normalMapType===Bg,tangentSpaceNormalMap:S.normalMapType===zg,decodeVideoTexture:!!S.map&&S.map.isVideoTexture===!0&&S.map.encoding===Qe,clearcoat:K,clearcoatMap:K&&!!S.clearcoatMap,clearcoatRoughnessMap:K&&!!S.clearcoatRoughnessMap,clearcoatNormalMap:K&&!!S.clearcoatNormalMap,iridescence:q,iridescenceMap:q&&!!S.iridescenceMap,iridescenceThicknessMap:q&&!!S.iridescenceThicknessMap,displacementMap:!!S.displacementMap,roughnessMap:!!S.roughnessMap,metalnessMap:!!S.metalnessMap,specularMap:!!S.specularMap,specularIntensityMap:!!S.specularIntensityMap,specularColorMap:!!S.specularColorMap,opaque:S.transparent===!1&&S.blending===Ki,alphaMap:!!S.alphaMap,alphaTest:O,gradientMap:!!S.gradientMap,sheen:S.sheen>0,sheenColorMap:!!S.sheenColorMap,sheenRoughnessMap:!!S.sheenRoughnessMap,transmission:S.transmission>0,transmissionMap:!!S.transmissionMap,thicknessMap:!!S.thicknessMap,combine:S.combine,vertexTangents:!!S.normalMap&&!!z.attributes.tangent,vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUvs:!!S.map||!!S.bumpMap||!!S.normalMap||!!S.specularMap||!!S.alphaMap||!!S.emissiveMap||!!S.roughnessMap||!!S.metalnessMap||!!S.clearcoatMap||!!S.clearcoatRoughnessMap||!!S.clearcoatNormalMap||!!S.iridescenceMap||!!S.iridescenceThicknessMap||!!S.displacementMap||!!S.transmissionMap||!!S.thicknessMap||!!S.specularIntensityMap||!!S.specularColorMap||!!S.sheenColorMap||!!S.sheenRoughnessMap,uvsVertexOnly:!(S.map||S.bumpMap||S.normalMap||S.specularMap||S.alphaMap||S.emissiveMap||S.roughnessMap||S.metalnessMap||S.clearcoatNormalMap||S.iridescenceMap||S.iridescenceThicknessMap||S.transmission>0||S.transmissionMap||S.thicknessMap||S.specularIntensityMap||S.specularColorMap||S.sheen>0||S.sheenColorMap||S.sheenRoughnessMap)&&!!S.displacementMap,fog:!!V,useFog:S.fog===!0,fogExp2:V&&V.isFogExp2,flatShading:!!S.flatShading,sizeAttenuation:S.sizeAttenuation,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ee,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&N.length>0,shadowMapType:n.shadowMap.type,toneMapping:S.toneMapped?n.toneMapping:In,useLegacyLights:n.useLegacyLights,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===Wn,flipSided:S.side===Ft,useDepthPacking:!!S.depthPacking,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionDerivatives:S.extensions&&S.extensions.derivatives,extensionFragDepth:S.extensions&&S.extensions.fragDepth,extensionDrawBuffers:S.extensions&&S.extensions.drawBuffers,extensionShaderTextureLOD:S.extensions&&S.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:S.customProgramCacheKey()}}function m(S){const P=[];if(S.shaderID?P.push(S.shaderID):(P.push(S.customVertexShaderID),P.push(S.customFragmentShaderID)),S.defines!==void 0)for(const N in S.defines)P.push(N),P.push(S.defines[N]);return S.isRawShaderMaterial===!1&&(_(P,S),M(P,S),P.push(n.outputEncoding)),P.push(S.customProgramCacheKey),P.join()}function _(S,P){S.push(P.precision),S.push(P.outputEncoding),S.push(P.envMapMode),S.push(P.envMapCubeUVHeight),S.push(P.combine),S.push(P.vertexUvs),S.push(P.fogExp2),S.push(P.sizeAttenuation),S.push(P.morphTargetsCount),S.push(P.morphAttributeCount),S.push(P.numDirLights),S.push(P.numPointLights),S.push(P.numSpotLights),S.push(P.numSpotLightMaps),S.push(P.numHemiLights),S.push(P.numRectAreaLights),S.push(P.numDirLightShadows),S.push(P.numPointLightShadows),S.push(P.numSpotLightShadows),S.push(P.numSpotLightShadowsWithMaps),S.push(P.shadowMapType),S.push(P.toneMapping),S.push(P.numClippingPlanes),S.push(P.numClipIntersection),S.push(P.depthPacking)}function M(S,P){o.disableAll(),P.isWebGL2&&o.enable(0),P.supportsVertexTextures&&o.enable(1),P.instancing&&o.enable(2),P.instancingColor&&o.enable(3),P.map&&o.enable(4),P.matcap&&o.enable(5),P.envMap&&o.enable(6),P.lightMap&&o.enable(7),P.aoMap&&o.enable(8),P.emissiveMap&&o.enable(9),P.bumpMap&&o.enable(10),P.normalMap&&o.enable(11),P.objectSpaceNormalMap&&o.enable(12),P.tangentSpaceNormalMap&&o.enable(13),P.clearcoat&&o.enable(14),P.clearcoatMap&&o.enable(15),P.clearcoatRoughnessMap&&o.enable(16),P.clearcoatNormalMap&&o.enable(17),P.iridescence&&o.enable(18),P.iridescenceMap&&o.enable(19),P.iridescenceThicknessMap&&o.enable(20),P.displacementMap&&o.enable(21),P.specularMap&&o.enable(22),P.roughnessMap&&o.enable(23),P.metalnessMap&&o.enable(24),P.gradientMap&&o.enable(25),P.alphaMap&&o.enable(26),P.alphaTest&&o.enable(27),P.vertexColors&&o.enable(28),P.vertexAlphas&&o.enable(29),P.vertexUvs&&o.enable(30),P.vertexTangents&&o.enable(31),P.uvsVertexOnly&&o.enable(32),S.push(o.mask),o.disableAll(),P.fog&&o.enable(0),P.useFog&&o.enable(1),P.flatShading&&o.enable(2),P.logarithmicDepthBuffer&&o.enable(3),P.skinning&&o.enable(4),P.morphTargets&&o.enable(5),P.morphNormals&&o.enable(6),P.morphColors&&o.enable(7),P.premultipliedAlpha&&o.enable(8),P.shadowMapEnabled&&o.enable(9),P.useLegacyLights&&o.enable(10),P.doubleSided&&o.enable(11),P.flipSided&&o.enable(12),P.useDepthPacking&&o.enable(13),P.dithering&&o.enable(14),P.specularIntensityMap&&o.enable(15),P.specularColorMap&&o.enable(16),P.transmission&&o.enable(17),P.transmissionMap&&o.enable(18),P.thicknessMap&&o.enable(19),P.sheen&&o.enable(20),P.sheenColorMap&&o.enable(21),P.sheenRoughnessMap&&o.enable(22),P.decodeVideoTexture&&o.enable(23),P.opaque&&o.enable(24),S.push(o.mask)}function v(S){const P=g[S.type];let N;if(P){const se=gn[P];N=l_.clone(se.uniforms)}else N=S.uniforms;return N}function b(S,P){let N;for(let se=0,ae=c.length;se<ae;se++){const V=c[se];if(V.cacheKey===P){N=V,++N.usedTimes;break}}return N===void 0&&(N=new xy(n,P,S,s),c.push(N)),N}function E(S){if(--S.usedTimes===0){const P=c.indexOf(S);c[P]=c[c.length-1],c.pop(),S.destroy()}}function L(S){l.remove(S)}function I(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:v,acquireProgram:b,releaseProgram:E,releaseShaderCache:L,programs:c,dispose:I}}function wy(){let n=new WeakMap;function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function t(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Ey(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function Kc(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Jc(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function a(f,h,d,g,p,m){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:p,group:m},n[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=d,_.groupOrder=g,_.renderOrder=f.renderOrder,_.z=p,_.group=m),e++,_}function o(f,h,d,g,p,m){const _=a(f,h,d,g,p,m);d.transmission>0?i.push(_):d.transparent===!0?r.push(_):t.push(_)}function l(f,h,d,g,p,m){const _=a(f,h,d,g,p,m);d.transmission>0?i.unshift(_):d.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,h){t.length>1&&t.sort(f||Ey),i.length>1&&i.sort(h||Kc),r.length>1&&r.sort(h||Kc)}function u(){for(let f=e,h=n.length;f<h;f++){const d=n[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function Ty(){let n=new WeakMap;function e(i,r){const s=n.get(i);let a;return s===void 0?(a=new Jc,n.set(i,[a])):r>=s.length?(a=new Jc,s.push(a)):a=s[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Ay(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new U,color:new Xe};break;case"SpotLight":t={position:new U,direction:new U,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new U,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new U,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new U,halfWidth:new U,halfHeight:new U};break}return n[e.id]=t,t}}}function Cy(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ge,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Py=0;function Ly(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Ry(n,e){const t=new Ay,i=Cy(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new U);const s=new U,a=new lt,o=new lt;function l(u,f){let h=0,d=0,g=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let p=0,m=0,_=0,M=0,v=0,b=0,E=0,L=0,I=0,S=0;u.sort(Ly);const P=f===!0?Math.PI:1;for(let se=0,ae=u.length;se<ae;se++){const V=u[se],z=V.color,$=V.intensity,te=V.distance,re=V.shadow&&V.shadow.map?V.shadow.map.texture:null;if(V.isAmbientLight)h+=z.r*$*P,d+=z.g*$*P,g+=z.b*$*P;else if(V.isLightProbe)for(let j=0;j<9;j++)r.probe[j].addScaledVector(V.sh.coefficients[j],$);else if(V.isDirectionalLight){const j=t.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*P),V.castShadow){const de=V.shadow,ce=i.get(V);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,r.directionalShadow[p]=ce,r.directionalShadowMap[p]=re,r.directionalShadowMatrix[p]=V.shadow.matrix,b++}r.directional[p]=j,p++}else if(V.isSpotLight){const j=t.get(V);j.position.setFromMatrixPosition(V.matrixWorld),j.color.copy(z).multiplyScalar($*P),j.distance=te,j.coneCos=Math.cos(V.angle),j.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),j.decay=V.decay,r.spot[_]=j;const de=V.shadow;if(V.map&&(r.spotLightMap[I]=V.map,I++,de.updateMatrices(V),V.castShadow&&S++),r.spotLightMatrix[_]=de.matrix,V.castShadow){const ce=i.get(V);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,r.spotShadow[_]=ce,r.spotShadowMap[_]=re,L++}_++}else if(V.isRectAreaLight){const j=t.get(V);j.color.copy(z).multiplyScalar($),j.halfWidth.set(V.width*.5,0,0),j.halfHeight.set(0,V.height*.5,0),r.rectArea[M]=j,M++}else if(V.isPointLight){const j=t.get(V);if(j.color.copy(V.color).multiplyScalar(V.intensity*P),j.distance=V.distance,j.decay=V.decay,V.castShadow){const de=V.shadow,ce=i.get(V);ce.shadowBias=de.bias,ce.shadowNormalBias=de.normalBias,ce.shadowRadius=de.radius,ce.shadowMapSize=de.mapSize,ce.shadowCameraNear=de.camera.near,ce.shadowCameraFar=de.camera.far,r.pointShadow[m]=ce,r.pointShadowMap[m]=re,r.pointShadowMatrix[m]=V.shadow.matrix,E++}r.point[m]=j,m++}else if(V.isHemisphereLight){const j=t.get(V);j.skyColor.copy(V.color).multiplyScalar($*P),j.groundColor.copy(V.groundColor).multiplyScalar($*P),r.hemi[v]=j,v++}}M>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_FLOAT_1,r.rectAreaLTC2=ye.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ye.LTC_HALF_1,r.rectAreaLTC2=ye.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=g;const N=r.hash;(N.directionalLength!==p||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==M||N.hemiLength!==v||N.numDirectionalShadows!==b||N.numPointShadows!==E||N.numSpotShadows!==L||N.numSpotMaps!==I)&&(r.directional.length=p,r.spot.length=_,r.rectArea.length=M,r.point.length=m,r.hemi.length=v,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.pointShadow.length=E,r.pointShadowMap.length=E,r.spotShadow.length=L,r.spotShadowMap.length=L,r.directionalShadowMatrix.length=b,r.pointShadowMatrix.length=E,r.spotLightMatrix.length=L+I-S,r.spotLightMap.length=I,r.numSpotLightShadowsWithMaps=S,N.directionalLength=p,N.pointLength=m,N.spotLength=_,N.rectAreaLength=M,N.hemiLength=v,N.numDirectionalShadows=b,N.numPointShadows=E,N.numSpotShadows=L,N.numSpotMaps=I,r.version=Py++)}function c(u,f){let h=0,d=0,g=0,p=0,m=0;const _=f.matrixWorldInverse;for(let M=0,v=u.length;M<v;M++){const b=u[M];if(b.isDirectionalLight){const E=r.directional[h];E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),h++}else if(b.isSpotLight){const E=r.spot[g];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),E.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(_),g++}else if(b.isRectAreaLight){const E=r.rectArea[p];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),o.identity(),a.copy(b.matrixWorld),a.premultiply(_),o.extractRotation(a),E.halfWidth.set(b.width*.5,0,0),E.halfHeight.set(0,b.height*.5,0),E.halfWidth.applyMatrix4(o),E.halfHeight.applyMatrix4(o),p++}else if(b.isPointLight){const E=r.point[d];E.position.setFromMatrixPosition(b.matrixWorld),E.position.applyMatrix4(_),d++}else if(b.isHemisphereLight){const E=r.hemi[m];E.direction.setFromMatrixPosition(b.matrixWorld),E.direction.transformDirection(_),m++}}}return{setup:l,setupView:c,state:r}}function Qc(n,e){const t=new Ry(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function a(f){i.push(f)}function o(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Dy(n,e){let t=new WeakMap;function i(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new Qc(n,e),t.set(s,[l])):a>=o.length?(l=new Qc(n,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class Iy extends Zr{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Oy extends Zr{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new U,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Fy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ny=`uniform sampler2D shadow_pass;
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
}`;function Uy(n,e,t){let i=new Qf;const r=new Ge,s=new Ge,a=new _t,o=new Iy({depthPacking:Ug}),l=new Oy,c={},u=t.maxTextureSize,f={[Zn]:Ft,[Ft]:Zn,[Wn]:Wn},h=new $n({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ge},radius:{value:4}},vertexShader:Fy,fragmentShader:Ny}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new ln;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new vn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nf,this.render=function(b,E,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const I=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),N=n.state;N.setBlending(qn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);for(let se=0,ae=b.length;se<ae;se++){const V=b[se],z=V.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;r.copy(z.mapSize);const $=z.getFrameExtents();if(r.multiply($),s.copy(z.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/$.x),r.x=s.x*$.x,z.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/$.y),r.y=s.y*$.y,z.mapSize.y=s.y)),z.map===null){const re=this.type!==Mr?{minFilter:Pt,magFilter:Pt}:{};z.map=new Mi(r.x,r.y,re),z.map.texture.name=V.name+".shadowMap",z.camera.updateProjectionMatrix()}n.setRenderTarget(z.map),n.clear();const te=z.getViewportCount();for(let re=0;re<te;re++){const j=z.getViewport(re);a.set(s.x*j.x,s.y*j.y,s.x*j.z,s.y*j.w),N.viewport(a),z.updateMatrices(V,re),i=z.getFrustum(),v(E,L,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===Mr&&_(z,L),z.needsUpdate=!1}m.needsUpdate=!1,n.setRenderTarget(I,S,P)};function _(b,E){const L=e.update(p);h.defines.VSM_SAMPLES!==b.blurSamples&&(h.defines.VSM_SAMPLES=b.blurSamples,d.defines.VSM_SAMPLES=b.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Mi(r.x,r.y)),h.uniforms.shadow_pass.value=b.map.texture,h.uniforms.resolution.value=b.mapSize,h.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(E,null,L,h,p,null),d.uniforms.shadow_pass.value=b.mapPass.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(E,null,L,d,p,null)}function M(b,E,L,I,S,P){let N=null;const se=L.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(se!==void 0)N=se;else if(N=L.isPointLight===!0?l:o,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const ae=N.uuid,V=E.uuid;let z=c[ae];z===void 0&&(z={},c[ae]=z);let $=z[V];$===void 0&&($=N.clone(),z[V]=$),N=$}return N.visible=E.visible,N.wireframe=E.wireframe,P===Mr?N.side=E.shadowSide!==null?E.shadowSide:E.side:N.side=E.shadowSide!==null?E.shadowSide:f[E.side],N.alphaMap=E.alphaMap,N.alphaTest=E.alphaTest,N.map=E.map,N.clipShadows=E.clipShadows,N.clippingPlanes=E.clippingPlanes,N.clipIntersection=E.clipIntersection,N.displacementMap=E.displacementMap,N.displacementScale=E.displacementScale,N.displacementBias=E.displacementBias,N.wireframeLinewidth=E.wireframeLinewidth,N.linewidth=E.linewidth,L.isPointLight===!0&&N.isMeshDistanceMaterial===!0&&(N.referencePosition.setFromMatrixPosition(L.matrixWorld),N.nearDistance=I,N.farDistance=S),N}function v(b,E,L,I,S){if(b.visible===!1)return;if(b.layers.test(E.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&S===Mr)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,b.matrixWorld);const se=e.update(b),ae=b.material;if(Array.isArray(ae)){const V=se.groups;for(let z=0,$=V.length;z<$;z++){const te=V[z],re=ae[te.materialIndex];if(re&&re.visible){const j=M(b,re,I,L.near,L.far,S);n.renderBufferDirect(L,null,se,j,b,te)}}}else if(ae.visible){const V=M(b,ae,I,L.near,L.far,S);n.renderBufferDirect(L,null,se,V,b,null)}}const N=b.children;for(let se=0,ae=N.length;se<ae;se++)v(N[se],E,L,I,S)}}function zy(n,e,t){const i=t.isWebGL2;function r(){let D=!1;const ee=new _t;let me=null;const we=new _t(0,0,0,0);return{setMask:function(Pe){me!==Pe&&!D&&(n.colorMask(Pe,Pe,Pe,Pe),me=Pe)},setLocked:function(Pe){D=Pe},setClear:function(Pe,Je,ht,wt,cn){cn===!0&&(Pe*=wt,Je*=wt,ht*=wt),ee.set(Pe,Je,ht,wt),we.equals(ee)===!1&&(n.clearColor(Pe,Je,ht,wt),we.copy(ee))},reset:function(){D=!1,me=null,we.set(-1,0,0,0)}}}function s(){let D=!1,ee=null,me=null,we=null;return{setTest:function(Pe){Pe?O(2929):K(2929)},setMask:function(Pe){ee!==Pe&&!D&&(n.depthMask(Pe),ee=Pe)},setFunc:function(Pe){if(me!==Pe){switch(Pe){case og:n.depthFunc(512);break;case ag:n.depthFunc(519);break;case lg:n.depthFunc(513);break;case da:n.depthFunc(515);break;case cg:n.depthFunc(514);break;case ug:n.depthFunc(518);break;case fg:n.depthFunc(516);break;case hg:n.depthFunc(517);break;default:n.depthFunc(515)}me=Pe}},setLocked:function(Pe){D=Pe},setClear:function(Pe){we!==Pe&&(n.clearDepth(Pe),we=Pe)},reset:function(){D=!1,ee=null,me=null,we=null}}}function a(){let D=!1,ee=null,me=null,we=null,Pe=null,Je=null,ht=null,wt=null,cn=null;return{setTest:function(nt){D||(nt?O(2960):K(2960))},setMask:function(nt){ee!==nt&&!D&&(n.stencilMask(nt),ee=nt)},setFunc:function(nt,Xt,un){(me!==nt||we!==Xt||Pe!==un)&&(n.stencilFunc(nt,Xt,un),me=nt,we=Xt,Pe=un)},setOp:function(nt,Xt,un){(Je!==nt||ht!==Xt||wt!==un)&&(n.stencilOp(nt,Xt,un),Je=nt,ht=Xt,wt=un)},setLocked:function(nt){D=nt},setClear:function(nt){cn!==nt&&(n.clearStencil(nt),cn=nt)},reset:function(){D=!1,ee=null,me=null,we=null,Pe=null,Je=null,ht=null,wt=null,cn=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,p=[],m=null,_=!1,M=null,v=null,b=null,E=null,L=null,I=null,S=null,P=!1,N=null,se=null,ae=null,V=null,z=null;const $=n.getParameter(35661);let te=!1,re=0;const j=n.getParameter(7938);j.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(j)[1]),te=re>=1):j.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),te=re>=2);let de=null,ce={};const Ee=n.getParameter(3088),k=n.getParameter(2978),fe=new _t().fromArray(Ee),_e=new _t().fromArray(k);function H(D,ee,me){const we=new Uint8Array(4),Pe=n.createTexture();n.bindTexture(D,Pe),n.texParameteri(D,10241,9728),n.texParameteri(D,10240,9728);for(let Je=0;Je<me;Je++)n.texImage2D(ee+Je,0,6408,1,1,0,6408,5121,we);return Pe}const be={};be[3553]=H(3553,3553,1),be[34067]=H(34067,34069,6),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),O(2929),l.setFunc(da),ne(!1),Y(Vl),O(2884),C(qn);function O(D){h[D]!==!0&&(n.enable(D),h[D]=!0)}function K(D){h[D]!==!1&&(n.disable(D),h[D]=!1)}function q(D,ee){return d[D]!==ee?(n.bindFramebuffer(D,ee),d[D]=ee,i&&(D===36009&&(d[36160]=ee),D===36160&&(d[36009]=ee)),!0):!1}function oe(D,ee){let me=p,we=!1;if(D)if(me=g.get(ee),me===void 0&&(me=[],g.set(ee,me)),D.isWebGLMultipleRenderTargets){const Pe=D.texture;if(me.length!==Pe.length||me[0]!==36064){for(let Je=0,ht=Pe.length;Je<ht;Je++)me[Je]=36064+Je;me.length=Pe.length,we=!0}}else me[0]!==36064&&(me[0]=36064,we=!0);else me[0]!==1029&&(me[0]=1029,we=!0);we&&(t.isWebGL2?n.drawBuffers(me):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(me))}function Se(D){return m!==D?(n.useProgram(D),m=D,!0):!1}const Te={[ji]:32774,[Zm]:32778,[$m]:32779};if(i)Te[jl]=32775,Te[Xl]=32776;else{const D=e.get("EXT_blend_minmax");D!==null&&(Te[jl]=D.MIN_EXT,Te[Xl]=D.MAX_EXT)}const w={[Km]:0,[Jm]:1,[Qm]:768,[Uf]:770,[sg]:776,[ig]:774,[tg]:772,[eg]:769,[zf]:771,[rg]:775,[ng]:773};function C(D,ee,me,we,Pe,Je,ht,wt){if(D===qn){_===!0&&(K(3042),_=!1);return}if(_===!1&&(O(3042),_=!0),D!==Ym){if(D!==M||wt!==P){if((v!==ji||L!==ji)&&(n.blendEquation(32774),v=ji,L=ji),wt)switch(D){case Ki:n.blendFuncSeparate(1,771,1,771);break;case ha:n.blendFunc(1,1);break;case Hl:n.blendFuncSeparate(0,769,0,1);break;case Wl:n.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ki:n.blendFuncSeparate(770,771,1,771);break;case ha:n.blendFunc(770,1);break;case Hl:n.blendFuncSeparate(0,769,0,1);break;case Wl:n.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}b=null,E=null,I=null,S=null,M=D,P=wt}return}Pe=Pe||ee,Je=Je||me,ht=ht||we,(ee!==v||Pe!==L)&&(n.blendEquationSeparate(Te[ee],Te[Pe]),v=ee,L=Pe),(me!==b||we!==E||Je!==I||ht!==S)&&(n.blendFuncSeparate(w[me],w[we],w[Je],w[ht]),b=me,E=we,I=Je,S=ht),M=D,P=!1}function B(D,ee){D.side===Wn?K(2884):O(2884);let me=D.side===Ft;ee&&(me=!me),ne(me),D.blending===Ki&&D.transparent===!1?C(qn):C(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.premultipliedAlpha),l.setFunc(D.depthFunc),l.setTest(D.depthTest),l.setMask(D.depthWrite),o.setMask(D.colorWrite);const we=D.stencilWrite;c.setTest(we),we&&(c.setMask(D.stencilWriteMask),c.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),c.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ue(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?O(32926):K(32926)}function ne(D){N!==D&&(D?n.frontFace(2304):n.frontFace(2305),N=D)}function Y(D){D!==jm?(O(2884),D!==se&&(D===Vl?n.cullFace(1029):D===Xm?n.cullFace(1028):n.cullFace(1032))):K(2884),se=D}function Q(D){D!==ae&&(te&&n.lineWidth(D),ae=D)}function ue(D,ee,me){D?(O(32823),(V!==ee||z!==me)&&(n.polygonOffset(ee,me),V=ee,z=me)):K(32823)}function pe(D){D?O(3089):K(3089)}function he(D){D===void 0&&(D=33984+$-1),de!==D&&(n.activeTexture(D),de=D)}function y(D,ee,me){me===void 0&&(de===null?me=33984+$-1:me=de);let we=ce[me];we===void 0&&(we={type:void 0,texture:void 0},ce[me]=we),(we.type!==D||we.texture!==ee)&&(de!==me&&(n.activeTexture(me),de=me),n.bindTexture(D,ee||be[D]),we.type=D,we.texture=ee)}function x(){const D=ce[de];D!==void 0&&D.type!==void 0&&(n.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function R(){try{n.compressedTexImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function X(){try{n.compressedTexImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{n.texSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function A(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function F(){try{n.texStorage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{n.texStorage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{n.texImage2D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{n.texImage3D.apply(n,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){fe.equals(D)===!1&&(n.scissor(D.x,D.y,D.z,D.w),fe.copy(D))}function Ce(D){_e.equals(D)===!1&&(n.viewport(D.x,D.y,D.z,D.w),_e.copy(D))}function Re(D,ee){let me=f.get(ee);me===void 0&&(me=new WeakMap,f.set(ee,me));let we=me.get(D);we===void 0&&(we=n.getUniformBlockIndex(ee,D.name),me.set(D,we))}function De(D,ee){const we=f.get(ee).get(D);u.get(ee)!==we&&(n.uniformBlockBinding(ee,we,D.__bindingPointIndex),u.set(ee,we))}function je(){n.disable(3042),n.disable(2884),n.disable(2929),n.disable(32823),n.disable(3089),n.disable(2960),n.disable(32926),n.blendEquation(32774),n.blendFunc(1,0),n.blendFuncSeparate(1,0,1,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(513),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(519,0,4294967295),n.stencilOp(7680,7680,7680),n.clearStencil(0),n.cullFace(1029),n.frontFace(2305),n.polygonOffset(0,0),n.activeTexture(33984),n.bindFramebuffer(36160,null),i===!0&&(n.bindFramebuffer(36009,null),n.bindFramebuffer(36008,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},de=null,ce={},d={},g=new WeakMap,p=[],m=null,_=!1,M=null,v=null,b=null,E=null,L=null,I=null,S=null,P=!1,N=null,se=null,ae=null,V=null,z=null,fe.set(0,0,n.canvas.width,n.canvas.height),_e.set(0,0,n.canvas.width,n.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:O,disable:K,bindFramebuffer:q,drawBuffers:oe,useProgram:Se,setBlending:C,setMaterial:B,setFlipSided:ne,setCullFace:Y,setLineWidth:Q,setPolygonOffset:ue,setScissorTest:pe,activeTexture:he,bindTexture:y,unbindTexture:x,compressedTexImage2D:R,compressedTexImage3D:X,texImage2D:ge,texImage3D:Me,updateUBOMapping:Re,uniformBlockBinding:De,texStorage2D:F,texStorage3D:ve,texSubImage2D:Z,texSubImage3D:le,compressedTexSubImage2D:xe,compressedTexSubImage3D:A,scissor:Ae,viewport:Ce,reset:je}}function By(n,e,t,i,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(y,x){return _?new OffscreenCanvas(y,x):Wr("canvas")}function v(y,x,R,X){let Z=1;if((y.width>X||y.height>X)&&(Z=X/Math.max(y.width,y.height)),Z<1||x===!0)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap){const le=x?Vg:Math.floor,xe=le(Z*y.width),A=le(Z*y.height);p===void 0&&(p=M(xe,A));const F=R?M(xe,A):p;return F.width=xe,F.height=A,F.getContext("2d").drawImage(y,0,0,xe,A),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+y.width+"x"+y.height+") to ("+xe+"x"+A+")."),F}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+y.width+"x"+y.height+")."),y;return y}function b(y){return yc(y.width)&&yc(y.height)}function E(y){return o?!1:y.wrapS!==nn||y.wrapT!==nn||y.minFilter!==Pt&&y.minFilter!==Zt}function L(y,x){return y.generateMipmaps&&x&&y.minFilter!==Pt&&y.minFilter!==Zt}function I(y){n.generateMipmap(y)}function S(y,x,R,X,Z=!1){if(o===!1)return x;if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let le=x;return x===6403&&(R===5126&&(le=33326),R===5131&&(le=33325),R===5121&&(le=33321)),x===33319&&(R===5126&&(le=33328),R===5131&&(le=33327),R===5121&&(le=33323)),x===6408&&(R===5126&&(le=34836),R===5131&&(le=34842),R===5121&&(le=X===Qe&&Z===!1?35907:32856),R===32819&&(le=32854),R===32820&&(le=32855)),(le===33325||le===33326||le===33327||le===33328||le===34842||le===34836)&&e.get("EXT_color_buffer_float"),le}function P(y,x,R){return L(y,R)===!0||y.isFramebufferTexture&&y.minFilter!==Pt&&y.minFilter!==Zt?Math.log2(Math.max(x.width,x.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?x.mipmaps.length:1}function N(y){return y===Pt||y===ql||y===_o?9728:9729}function se(y){const x=y.target;x.removeEventListener("dispose",se),V(x),x.isVideoTexture&&g.delete(x)}function ae(y){const x=y.target;x.removeEventListener("dispose",ae),$(x)}function V(y){const x=i.get(y);if(x.__webglInit===void 0)return;const R=y.source,X=m.get(R);if(X){const Z=X[x.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&z(y),Object.keys(X).length===0&&m.delete(R)}i.remove(y)}function z(y){const x=i.get(y);n.deleteTexture(x.__webglTexture);const R=y.source,X=m.get(R);delete X[x.__cacheKey],a.memory.textures--}function $(y){const x=y.texture,R=i.get(y),X=i.get(x);if(X.__webglTexture!==void 0&&(n.deleteTexture(X.__webglTexture),a.memory.textures--),y.depthTexture&&y.depthTexture.dispose(),y.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++)n.deleteFramebuffer(R.__webglFramebuffer[Z]),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[Z]);else{if(n.deleteFramebuffer(R.__webglFramebuffer),R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let Z=0;Z<R.__webglColorRenderbuffer.length;Z++)R.__webglColorRenderbuffer[Z]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[Z]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}if(y.isWebGLMultipleRenderTargets)for(let Z=0,le=x.length;Z<le;Z++){const xe=i.get(x[Z]);xe.__webglTexture&&(n.deleteTexture(xe.__webglTexture),a.memory.textures--),i.remove(x[Z])}i.remove(x),i.remove(y)}let te=0;function re(){te=0}function j(){const y=te;return y>=l&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+l),te+=1,y}function de(y){const x=[];return x.push(y.wrapS),x.push(y.wrapT),x.push(y.wrapR||0),x.push(y.magFilter),x.push(y.minFilter),x.push(y.anisotropy),x.push(y.internalFormat),x.push(y.format),x.push(y.type),x.push(y.generateMipmaps),x.push(y.premultiplyAlpha),x.push(y.flipY),x.push(y.unpackAlignment),x.push(y.encoding),x.join()}function ce(y,x){const R=i.get(y);if(y.isVideoTexture&&pe(y),y.isRenderTargetTexture===!1&&y.version>0&&R.__version!==y.version){const X=y.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{K(R,y,x);return}}t.bindTexture(3553,R.__webglTexture,33984+x)}function Ee(y,x){const R=i.get(y);if(y.version>0&&R.__version!==y.version){K(R,y,x);return}t.bindTexture(35866,R.__webglTexture,33984+x)}function k(y,x){const R=i.get(y);if(y.version>0&&R.__version!==y.version){K(R,y,x);return}t.bindTexture(32879,R.__webglTexture,33984+x)}function fe(y,x){const R=i.get(y);if(y.version>0&&R.__version!==y.version){q(R,y,x);return}t.bindTexture(34067,R.__webglTexture,33984+x)}const _e={[ga]:10497,[nn]:33071,[_a]:33648},H={[Pt]:9728,[ql]:9984,[_o]:9986,[Zt]:9729,[yg]:9985,[kr]:9987};function be(y,x,R){if(R?(n.texParameteri(y,10242,_e[x.wrapS]),n.texParameteri(y,10243,_e[x.wrapT]),(y===32879||y===35866)&&n.texParameteri(y,32882,_e[x.wrapR]),n.texParameteri(y,10240,H[x.magFilter]),n.texParameteri(y,10241,H[x.minFilter])):(n.texParameteri(y,10242,33071),n.texParameteri(y,10243,33071),(y===32879||y===35866)&&n.texParameteri(y,32882,33071),(x.wrapS!==nn||x.wrapT!==nn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(y,10240,N(x.magFilter)),n.texParameteri(y,10241,N(x.minFilter)),x.minFilter!==Pt&&x.minFilter!==Zt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const X=e.get("EXT_texture_filter_anisotropic");if(x.magFilter===Pt||x.minFilter!==_o&&x.minFilter!==kr||x.type===pi&&e.has("OES_texture_float_linear")===!1||o===!1&&x.type===Vr&&e.has("OES_texture_half_float_linear")===!1)return;(x.anisotropy>1||i.get(x).__currentAnisotropy)&&(n.texParameterf(y,X.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,r.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy)}}function O(y,x){let R=!1;y.__webglInit===void 0&&(y.__webglInit=!0,x.addEventListener("dispose",se));const X=x.source;let Z=m.get(X);Z===void 0&&(Z={},m.set(X,Z));const le=de(x);if(le!==y.__cacheKey){Z[le]===void 0&&(Z[le]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,R=!0),Z[le].usedTimes++;const xe=Z[y.__cacheKey];xe!==void 0&&(Z[y.__cacheKey].usedTimes--,xe.usedTimes===0&&z(x)),y.__cacheKey=le,y.__webglTexture=Z[le].texture}return R}function K(y,x,R){let X=3553;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(X=35866),x.isData3DTexture&&(X=32879);const Z=O(y,x),le=x.source;t.bindTexture(X,y.__webglTexture,33984+R);const xe=i.get(le);if(le.version!==xe.__version||Z===!0){t.activeTexture(33984+R),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const A=E(x)&&b(x.image)===!1;let F=v(x.image,A,!1,u);F=he(x,F);const ve=b(F)||o,ge=s.convert(x.format,x.encoding);let Me=s.convert(x.type),Ae=S(x.internalFormat,ge,Me,x.encoding,x.isVideoTexture);be(X,x,ve);let Ce;const Re=x.mipmaps,De=o&&x.isVideoTexture!==!0,je=xe.__version===void 0||Z===!0,D=P(x,F,ve);if(x.isDepthTexture)Ae=6402,o?x.type===pi?Ae=36012:x.type===di?Ae=33190:x.type===Ji?Ae=35056:Ae=33189:x.type===pi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),x.format===_i&&Ae===6402&&x.type!==kf&&x.type!==di&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),x.type=di,Me=s.convert(x.type)),x.format===sr&&Ae===6402&&(Ae=34041,x.type!==Ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),x.type=Ji,Me=s.convert(x.type))),je&&(De?t.texStorage2D(3553,1,Ae,F.width,F.height):t.texImage2D(3553,0,Ae,F.width,F.height,0,ge,Me,null));else if(x.isDataTexture)if(Re.length>0&&ve){De&&je&&t.texStorage2D(3553,D,Ae,Re[0].width,Re[0].height);for(let ee=0,me=Re.length;ee<me;ee++)Ce=Re[ee],De?t.texSubImage2D(3553,ee,0,0,Ce.width,Ce.height,ge,Me,Ce.data):t.texImage2D(3553,ee,Ae,Ce.width,Ce.height,0,ge,Me,Ce.data);x.generateMipmaps=!1}else De?(je&&t.texStorage2D(3553,D,Ae,F.width,F.height),t.texSubImage2D(3553,0,0,0,F.width,F.height,ge,Me,F.data)):t.texImage2D(3553,0,Ae,F.width,F.height,0,ge,Me,F.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){De&&je&&t.texStorage3D(35866,D,Ae,Re[0].width,Re[0].height,F.depth);for(let ee=0,me=Re.length;ee<me;ee++)Ce=Re[ee],x.format!==rn?ge!==null?De?t.compressedTexSubImage3D(35866,ee,0,0,0,Ce.width,Ce.height,F.depth,ge,Ce.data,0,0):t.compressedTexImage3D(35866,ee,Ae,Ce.width,Ce.height,F.depth,0,Ce.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,ee,0,0,0,Ce.width,Ce.height,F.depth,ge,Me,Ce.data):t.texImage3D(35866,ee,Ae,Ce.width,Ce.height,F.depth,0,ge,Me,Ce.data)}else{De&&je&&t.texStorage2D(3553,D,Ae,Re[0].width,Re[0].height);for(let ee=0,me=Re.length;ee<me;ee++)Ce=Re[ee],x.format!==rn?ge!==null?De?t.compressedTexSubImage2D(3553,ee,0,0,Ce.width,Ce.height,ge,Ce.data):t.compressedTexImage2D(3553,ee,Ae,Ce.width,Ce.height,0,Ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,ee,0,0,Ce.width,Ce.height,ge,Me,Ce.data):t.texImage2D(3553,ee,Ae,Ce.width,Ce.height,0,ge,Me,Ce.data)}else if(x.isDataArrayTexture)De?(je&&t.texStorage3D(35866,D,Ae,F.width,F.height,F.depth),t.texSubImage3D(35866,0,0,0,0,F.width,F.height,F.depth,ge,Me,F.data)):t.texImage3D(35866,0,Ae,F.width,F.height,F.depth,0,ge,Me,F.data);else if(x.isData3DTexture)De?(je&&t.texStorage3D(32879,D,Ae,F.width,F.height,F.depth),t.texSubImage3D(32879,0,0,0,0,F.width,F.height,F.depth,ge,Me,F.data)):t.texImage3D(32879,0,Ae,F.width,F.height,F.depth,0,ge,Me,F.data);else if(x.isFramebufferTexture){if(je)if(De)t.texStorage2D(3553,D,Ae,F.width,F.height);else{let ee=F.width,me=F.height;for(let we=0;we<D;we++)t.texImage2D(3553,we,Ae,ee,me,0,ge,Me,null),ee>>=1,me>>=1}}else if(Re.length>0&&ve){De&&je&&t.texStorage2D(3553,D,Ae,Re[0].width,Re[0].height);for(let ee=0,me=Re.length;ee<me;ee++)Ce=Re[ee],De?t.texSubImage2D(3553,ee,0,0,ge,Me,Ce):t.texImage2D(3553,ee,Ae,ge,Me,Ce);x.generateMipmaps=!1}else De?(je&&t.texStorage2D(3553,D,Ae,F.width,F.height),t.texSubImage2D(3553,0,0,0,ge,Me,F)):t.texImage2D(3553,0,Ae,ge,Me,F);L(x,ve)&&I(X),xe.__version=le.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function q(y,x,R){if(x.image.length!==6)return;const X=O(y,x),Z=x.source;t.bindTexture(34067,y.__webglTexture,33984+R);const le=i.get(Z);if(Z.version!==le.__version||X===!0){t.activeTexture(33984+R),n.pixelStorei(37440,x.flipY),n.pixelStorei(37441,x.premultiplyAlpha),n.pixelStorei(3317,x.unpackAlignment),n.pixelStorei(37443,0);const xe=x.isCompressedTexture||x.image[0].isCompressedTexture,A=x.image[0]&&x.image[0].isDataTexture,F=[];for(let ee=0;ee<6;ee++)!xe&&!A?F[ee]=v(x.image[ee],!1,!0,c):F[ee]=A?x.image[ee].image:x.image[ee],F[ee]=he(x,F[ee]);const ve=F[0],ge=b(ve)||o,Me=s.convert(x.format,x.encoding),Ae=s.convert(x.type),Ce=S(x.internalFormat,Me,Ae,x.encoding),Re=o&&x.isVideoTexture!==!0,De=le.__version===void 0||X===!0;let je=P(x,ve,ge);be(34067,x,ge);let D;if(xe){Re&&De&&t.texStorage2D(34067,je,Ce,ve.width,ve.height);for(let ee=0;ee<6;ee++){D=F[ee].mipmaps;for(let me=0;me<D.length;me++){const we=D[me];x.format!==rn?Me!==null?Re?t.compressedTexSubImage2D(34069+ee,me,0,0,we.width,we.height,Me,we.data):t.compressedTexImage2D(34069+ee,me,Ce,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(34069+ee,me,0,0,we.width,we.height,Me,Ae,we.data):t.texImage2D(34069+ee,me,Ce,we.width,we.height,0,Me,Ae,we.data)}}}else{D=x.mipmaps,Re&&De&&(D.length>0&&je++,t.texStorage2D(34067,je,Ce,F[0].width,F[0].height));for(let ee=0;ee<6;ee++)if(A){Re?t.texSubImage2D(34069+ee,0,0,0,F[ee].width,F[ee].height,Me,Ae,F[ee].data):t.texImage2D(34069+ee,0,Ce,F[ee].width,F[ee].height,0,Me,Ae,F[ee].data);for(let me=0;me<D.length;me++){const Pe=D[me].image[ee].image;Re?t.texSubImage2D(34069+ee,me+1,0,0,Pe.width,Pe.height,Me,Ae,Pe.data):t.texImage2D(34069+ee,me+1,Ce,Pe.width,Pe.height,0,Me,Ae,Pe.data)}}else{Re?t.texSubImage2D(34069+ee,0,0,0,Me,Ae,F[ee]):t.texImage2D(34069+ee,0,Ce,Me,Ae,F[ee]);for(let me=0;me<D.length;me++){const we=D[me];Re?t.texSubImage2D(34069+ee,me+1,0,0,Me,Ae,we.image[ee]):t.texImage2D(34069+ee,me+1,Ce,Me,Ae,we.image[ee])}}}L(x,ge)&&I(34067),le.__version=Z.version,x.onUpdate&&x.onUpdate(x)}y.__version=x.version}function oe(y,x,R,X,Z){const le=s.convert(R.format,R.encoding),xe=s.convert(R.type),A=S(R.internalFormat,le,xe,R.encoding);i.get(x).__hasExternalTextures||(Z===32879||Z===35866?t.texImage3D(Z,0,A,x.width,x.height,x.depth,0,le,xe,null):t.texImage2D(Z,0,A,x.width,x.height,0,le,xe,null)),t.bindFramebuffer(36160,y),ue(x)?h.framebufferTexture2DMultisampleEXT(36160,X,Z,i.get(R).__webglTexture,0,Q(x)):(Z===3553||Z>=34069&&Z<=34074)&&n.framebufferTexture2D(36160,X,Z,i.get(R).__webglTexture,0),t.bindFramebuffer(36160,null)}function Se(y,x,R){if(n.bindRenderbuffer(36161,y),x.depthBuffer&&!x.stencilBuffer){let X=33189;if(R||ue(x)){const Z=x.depthTexture;Z&&Z.isDepthTexture&&(Z.type===pi?X=36012:Z.type===di&&(X=33190));const le=Q(x);ue(x)?h.renderbufferStorageMultisampleEXT(36161,le,X,x.width,x.height):n.renderbufferStorageMultisample(36161,le,X,x.width,x.height)}else n.renderbufferStorage(36161,X,x.width,x.height);n.framebufferRenderbuffer(36160,36096,36161,y)}else if(x.depthBuffer&&x.stencilBuffer){const X=Q(x);R&&ue(x)===!1?n.renderbufferStorageMultisample(36161,X,35056,x.width,x.height):ue(x)?h.renderbufferStorageMultisampleEXT(36161,X,35056,x.width,x.height):n.renderbufferStorage(36161,34041,x.width,x.height),n.framebufferRenderbuffer(36160,33306,36161,y)}else{const X=x.isWebGLMultipleRenderTargets===!0?x.texture:[x.texture];for(let Z=0;Z<X.length;Z++){const le=X[Z],xe=s.convert(le.format,le.encoding),A=s.convert(le.type),F=S(le.internalFormat,xe,A,le.encoding),ve=Q(x);R&&ue(x)===!1?n.renderbufferStorageMultisample(36161,ve,F,x.width,x.height):ue(x)?h.renderbufferStorageMultisampleEXT(36161,ve,F,x.width,x.height):n.renderbufferStorage(36161,F,x.width,x.height)}}n.bindRenderbuffer(36161,null)}function Te(y,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,y),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),ce(x.depthTexture,0);const X=i.get(x.depthTexture).__webglTexture,Z=Q(x);if(x.depthTexture.format===_i)ue(x)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,X,0,Z):n.framebufferTexture2D(36160,36096,3553,X,0);else if(x.depthTexture.format===sr)ue(x)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,X,0,Z):n.framebufferTexture2D(36160,33306,3553,X,0);else throw new Error("Unknown depthTexture format")}function w(y){const x=i.get(y),R=y.isWebGLCubeRenderTarget===!0;if(y.depthTexture&&!x.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Te(x.__webglFramebuffer,y)}else if(R){x.__webglDepthbuffer=[];for(let X=0;X<6;X++)t.bindFramebuffer(36160,x.__webglFramebuffer[X]),x.__webglDepthbuffer[X]=n.createRenderbuffer(),Se(x.__webglDepthbuffer[X],y,!1)}else t.bindFramebuffer(36160,x.__webglFramebuffer),x.__webglDepthbuffer=n.createRenderbuffer(),Se(x.__webglDepthbuffer,y,!1);t.bindFramebuffer(36160,null)}function C(y,x,R){const X=i.get(y);x!==void 0&&oe(X.__webglFramebuffer,y,y.texture,36064,3553),R!==void 0&&w(y)}function B(y){const x=y.texture,R=i.get(y),X=i.get(x);y.addEventListener("dispose",ae),y.isWebGLMultipleRenderTargets!==!0&&(X.__webglTexture===void 0&&(X.__webglTexture=n.createTexture()),X.__version=x.version,a.memory.textures++);const Z=y.isWebGLCubeRenderTarget===!0,le=y.isWebGLMultipleRenderTargets===!0,xe=b(y)||o;if(Z){R.__webglFramebuffer=[];for(let A=0;A<6;A++)R.__webglFramebuffer[A]=n.createFramebuffer()}else{if(R.__webglFramebuffer=n.createFramebuffer(),le)if(r.drawBuffers){const A=y.texture;for(let F=0,ve=A.length;F<ve;F++){const ge=i.get(A[F]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&y.samples>0&&ue(y)===!1){const A=le?x:[x];R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,R.__webglMultisampledFramebuffer);for(let F=0;F<A.length;F++){const ve=A[F];R.__webglColorRenderbuffer[F]=n.createRenderbuffer(),n.bindRenderbuffer(36161,R.__webglColorRenderbuffer[F]);const ge=s.convert(ve.format,ve.encoding),Me=s.convert(ve.type),Ae=S(ve.internalFormat,ge,Me,ve.encoding,y.isXRRenderTarget===!0),Ce=Q(y);n.renderbufferStorageMultisample(36161,Ce,Ae,y.width,y.height),n.framebufferRenderbuffer(36160,36064+F,36161,R.__webglColorRenderbuffer[F])}n.bindRenderbuffer(36161,null),y.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),Se(R.__webglDepthRenderbuffer,y,!0)),t.bindFramebuffer(36160,null)}}if(Z){t.bindTexture(34067,X.__webglTexture),be(34067,x,xe);for(let A=0;A<6;A++)oe(R.__webglFramebuffer[A],y,x,36064,34069+A);L(x,xe)&&I(34067),t.unbindTexture()}else if(le){const A=y.texture;for(let F=0,ve=A.length;F<ve;F++){const ge=A[F],Me=i.get(ge);t.bindTexture(3553,Me.__webglTexture),be(3553,ge,xe),oe(R.__webglFramebuffer,y,ge,36064+F,3553),L(ge,xe)&&I(3553)}t.unbindTexture()}else{let A=3553;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(o?A=y.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(A,X.__webglTexture),be(A,x,xe),oe(R.__webglFramebuffer,y,x,36064,A),L(x,xe)&&I(A),t.unbindTexture()}y.depthBuffer&&w(y)}function ne(y){const x=b(y)||o,R=y.isWebGLMultipleRenderTargets===!0?y.texture:[y.texture];for(let X=0,Z=R.length;X<Z;X++){const le=R[X];if(L(le,x)){const xe=y.isWebGLCubeRenderTarget?34067:3553,A=i.get(le).__webglTexture;t.bindTexture(xe,A),I(xe),t.unbindTexture()}}}function Y(y){if(o&&y.samples>0&&ue(y)===!1){const x=y.isWebGLMultipleRenderTargets?y.texture:[y.texture],R=y.width,X=y.height;let Z=16384;const le=[],xe=y.stencilBuffer?33306:36096,A=i.get(y),F=y.isWebGLMultipleRenderTargets===!0;if(F)for(let ve=0;ve<x.length;ve++)t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ve,36161,null),t.bindFramebuffer(36160,A.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ve,3553,null,0);t.bindFramebuffer(36008,A.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,A.__webglFramebuffer);for(let ve=0;ve<x.length;ve++){le.push(36064+ve),y.depthBuffer&&le.push(xe);const ge=A.__ignoreDepthValues!==void 0?A.__ignoreDepthValues:!1;if(ge===!1&&(y.depthBuffer&&(Z|=256),y.stencilBuffer&&(Z|=1024)),F&&n.framebufferRenderbuffer(36008,36064,36161,A.__webglColorRenderbuffer[ve]),ge===!0&&(n.invalidateFramebuffer(36008,[xe]),n.invalidateFramebuffer(36009,[xe])),F){const Me=i.get(x[ve]).__webglTexture;n.framebufferTexture2D(36009,36064,3553,Me,0)}n.blitFramebuffer(0,0,R,X,0,0,R,X,Z,9728),d&&n.invalidateFramebuffer(36008,le)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),F)for(let ve=0;ve<x.length;ve++){t.bindFramebuffer(36160,A.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(36160,36064+ve,36161,A.__webglColorRenderbuffer[ve]);const ge=i.get(x[ve]).__webglTexture;t.bindFramebuffer(36160,A.__webglFramebuffer),n.framebufferTexture2D(36009,36064+ve,3553,ge,0)}t.bindFramebuffer(36009,A.__webglMultisampledFramebuffer)}}function Q(y){return Math.min(f,y.samples)}function ue(y){const x=i.get(y);return o&&y.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function pe(y){const x=a.render.frame;g.get(y)!==x&&(g.set(y,x),y.update())}function he(y,x){const R=y.encoding,X=y.format,Z=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||y.format===va||R!==yi&&(R===Qe?o===!1?e.has("EXT_sRGB")===!0&&X===rn?(y.format=va,y.minFilter=Zt,y.generateMipmaps=!1):x=Wf.sRGBToLinear(x):(X!==rn||Z!==xi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",R)),x}this.allocateTextureUnit=j,this.resetTextureUnits=re,this.setTexture2D=ce,this.setTexture2DArray=Ee,this.setTexture3D=k,this.setTextureCube=fe,this.rebindTextures=C,this.setupRenderTarget=B,this.updateRenderTargetMipmap=ne,this.updateMultisampleRenderTarget=Y,this.setupDepthRenderbuffer=w,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=ue}function Gy(n,e,t){const i=t.isWebGL2;function r(s,a=null){let o;if(s===xi)return 5121;if(s===wg)return 32819;if(s===Eg)return 32820;if(s===bg)return 5120;if(s===Mg)return 5122;if(s===kf)return 5123;if(s===Sg)return 5124;if(s===di)return 5125;if(s===pi)return 5126;if(s===Vr)return i?5131:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===Tg)return 6406;if(s===rn)return 6408;if(s===Ag)return 6409;if(s===Cg)return 6410;if(s===_i)return 6402;if(s===sr)return 34041;if(s===va)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===Pg)return 6403;if(s===Lg)return 36244;if(s===Rg)return 33319;if(s===Dg)return 33320;if(s===Ig)return 36249;if(s===vo||s===xo||s===yo||s===bo)if(a===Qe)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===vo)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===xo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===yo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===bo)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===vo)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===xo)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===yo)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===bo)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===Yl||s===Zl||s===$l||s===Kl)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===Yl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===Zl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===$l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Kl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Og)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Jl||s===Ql)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===Jl)return a===Qe?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===Ql)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===ec||s===tc||s===nc||s===ic||s===rc||s===sc||s===oc||s===ac||s===lc||s===cc||s===uc||s===fc||s===hc||s===dc)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===ec)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===tc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===nc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===ic)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===rc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===sc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===oc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===ac)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===cc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===uc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===fc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===hc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===dc)return a===Qe?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Mo)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Mo)return a===Qe?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===Fg||s===pc||s===mc||s===gc)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Mo)return o.COMPRESSED_RED_RGTC1_EXT;if(s===pc)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===mc)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===gc)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Ji?i?34042:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class ky extends Wt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class xs extends mt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Vy={type:"move"};class Yo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const p of e.hand.values()){const m=t.getJointPose(p,i),_=this._getHandJoint(c,p);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=m.radius),_.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;c.inputState.pinching&&h>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new xs;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Hy extends Nt{constructor(e,t,i,r,s,a,o,l,c,u){if(u=u!==void 0?u:_i,u!==_i&&u!==sr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===_i&&(i=di),i===void 0&&u===sr&&(i=Ji),super(null,r,s,a,o,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Pt,this.minFilter=l!==void 0?l:Pt,this.flipY=!1,this.generateMipmaps=!1}}class Wy extends wi{constructor(e,t){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,h=null,d=null,g=null;const p=t.getContextAttributes();let m=null,_=null;const M=[],v=[],b=new Set,E=new Map,L=new Wt;L.layers.enable(1),L.viewport=new _t;const I=new Wt;I.layers.enable(2),I.viewport=new _t;const S=[L,I],P=new ky;P.layers.enable(1),P.layers.enable(2);let N=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let fe=M[k];return fe===void 0&&(fe=new Yo,M[k]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(k){let fe=M[k];return fe===void 0&&(fe=new Yo,M[k]=fe),fe.getGripSpace()},this.getHand=function(k){let fe=M[k];return fe===void 0&&(fe=new Yo,M[k]=fe),fe.getHandSpace()};function ae(k){const fe=v.indexOf(k.inputSource);if(fe===-1)return;const _e=M[fe];_e!==void 0&&_e.dispatchEvent({type:k.type,data:k.inputSource})}function V(){r.removeEventListener("select",ae),r.removeEventListener("selectstart",ae),r.removeEventListener("selectend",ae),r.removeEventListener("squeeze",ae),r.removeEventListener("squeezestart",ae),r.removeEventListener("squeezeend",ae),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",z);for(let k=0;k<M.length;k++){const fe=v[k];fe!==null&&(v[k]=null,M[k].disconnect(fe))}N=null,se=null,e.setRenderTarget(m),d=null,h=null,f=null,r=null,_=null,Ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){s=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){o=k,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(k){c=k},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(k){if(r=k,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",ae),r.addEventListener("selectstart",ae),r.addEventListener("selectend",ae),r.addEventListener("squeeze",ae),r.addEventListener("squeezestart",ae),r.addEventListener("squeezeend",ae),r.addEventListener("end",V),r.addEventListener("inputsourceschange",z),p.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const fe={antialias:r.renderState.layers===void 0?p.antialias:!0,alpha:p.alpha,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(r,t,fe),r.updateRenderState({baseLayer:d}),_=new Mi(d.framebufferWidth,d.framebufferHeight,{format:rn,type:xi,encoding:e.outputEncoding,stencilBuffer:p.stencil})}else{let fe=null,_e=null,H=null;p.depth&&(H=p.stencil?35056:33190,fe=p.stencil?sr:_i,_e=p.stencil?Ji:di);const be={colorFormat:32856,depthFormat:H,scaleFactor:s};f=new XRWebGLBinding(r,t),h=f.createProjectionLayer(be),r.updateRenderState({layers:[h]}),_=new Mi(h.textureWidth,h.textureHeight,{format:rn,type:xi,depthTexture:new Hy(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:p.stencil,encoding:e.outputEncoding,samples:p.antialias?4:0});const O=e.properties.get(_);O.__ignoreDepthValues=h.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function z(k){for(let fe=0;fe<k.removed.length;fe++){const _e=k.removed[fe],H=v.indexOf(_e);H>=0&&(v[H]=null,M[H].disconnect(_e))}for(let fe=0;fe<k.added.length;fe++){const _e=k.added[fe];let H=v.indexOf(_e);if(H===-1){for(let O=0;O<M.length;O++)if(O>=v.length){v.push(_e),H=O;break}else if(v[O]===null){v[O]=_e,H=O;break}if(H===-1)break}const be=M[H];be&&be.connect(_e)}}const $=new U,te=new U;function re(k,fe,_e){$.setFromMatrixPosition(fe.matrixWorld),te.setFromMatrixPosition(_e.matrixWorld);const H=$.distanceTo(te),be=fe.projectionMatrix.elements,O=_e.projectionMatrix.elements,K=be[14]/(be[10]-1),q=be[14]/(be[10]+1),oe=(be[9]+1)/be[5],Se=(be[9]-1)/be[5],Te=(be[8]-1)/be[0],w=(O[8]+1)/O[0],C=K*Te,B=K*w,ne=H/(-Te+w),Y=ne*-Te;fe.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(Y),k.translateZ(ne),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert();const Q=K+ne,ue=q+ne,pe=C-Y,he=B+(H-Y),y=oe*q/ue*Q,x=Se*q/ue*Q;k.projectionMatrix.makePerspective(pe,he,y,x,Q,ue)}function j(k,fe){fe===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(fe.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(r===null)return;P.near=I.near=L.near=k.near,P.far=I.far=L.far=k.far,(N!==P.near||se!==P.far)&&(r.updateRenderState({depthNear:P.near,depthFar:P.far}),N=P.near,se=P.far);const fe=k.parent,_e=P.cameras;j(P,fe);for(let be=0;be<_e.length;be++)j(_e[be],fe);P.matrixWorld.decompose(P.position,P.quaternion,P.scale),k.matrix.copy(P.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale);const H=k.children;for(let be=0,O=H.length;be<O;be++)H[be].updateMatrixWorld(!0);_e.length===2?re(P,L,I):P.projectionMatrix.copy(L.projectionMatrix)},this.getCamera=function(){return P},this.getFoveation=function(){if(!(h===null&&d===null))return l},this.setFoveation=function(k){l=k,h!==null&&(h.fixedFoveation=k),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=k)},this.getPlanes=function(){return b};let de=null;function ce(k,fe){if(u=fe.getViewerPose(c||a),g=fe,u!==null){const _e=u.views;d!==null&&(e.setRenderTargetFramebuffer(_,d.framebuffer),e.setRenderTarget(_));let H=!1;_e.length!==P.cameras.length&&(P.cameras.length=0,H=!0);for(let be=0;be<_e.length;be++){const O=_e[be];let K=null;if(d!==null)K=d.getViewport(O);else{const oe=f.getViewSubImage(h,O);K=oe.viewport,be===0&&(e.setRenderTargetTextures(_,oe.colorTexture,h.ignoreDepthValues?void 0:oe.depthStencilTexture),e.setRenderTarget(_))}let q=S[be];q===void 0&&(q=new Wt,q.layers.enable(be),q.viewport=new _t,S[be]=q),q.matrix.fromArray(O.transform.matrix),q.projectionMatrix.fromArray(O.projectionMatrix),q.viewport.set(K.x,K.y,K.width,K.height),be===0&&P.matrix.copy(q.matrix),H===!0&&P.cameras.push(q)}}for(let _e=0;_e<M.length;_e++){const H=v[_e],be=M[_e];H!==null&&be!==void 0&&be.update(H,fe,c||a)}if(de&&de(k,fe),fe.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:fe.detectedPlanes});let _e=null;for(const H of b)fe.detectedPlanes.has(H)||(_e===null&&(_e=[]),_e.push(H));if(_e!==null)for(const H of _e)b.delete(H),E.delete(H),i.dispatchEvent({type:"planeremoved",data:H});for(const H of fe.detectedPlanes)if(!b.has(H))b.add(H),E.set(H,fe.lastChangedTime),i.dispatchEvent({type:"planeadded",data:H});else{const be=E.get(H);H.lastChangedTime>be&&(E.set(H,H.lastChangedTime),i.dispatchEvent({type:"planechanged",data:H}))}}g=null}const Ee=new eh;Ee.setAnimationLoop(ce),this.setAnimationLoop=function(k){de=k},this.dispose=function(){}}}function jy(n,e){function t(p,m){m.color.getRGB(p.fogColor.value,Kf(n)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function i(p,m,_,M,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),u(p,m)):m.isMeshPhongMaterial?(r(p,m),c(p,m)):m.isMeshStandardMaterial?(r(p,m),f(p,m),m.isMeshPhysicalMaterial&&h(p,m,v)):m.isMeshMatcapMaterial?(r(p,m),d(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),g(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(s(p,m),m.isLineDashedMaterial&&a(p,m)):m.isPointsMaterial?o(p,m,_,M):m.isSpriteMaterial?l(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.bumpMap&&(p.bumpMap.value=m.bumpMap,p.bumpScale.value=m.bumpScale,m.side===Ft&&(p.bumpScale.value*=-1)),m.displacementMap&&(p.displacementMap.value=m.displacementMap,p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap),m.normalMap&&(p.normalMap.value=m.normalMap,p.normalScale.value.copy(m.normalScale),m.side===Ft&&p.normalScale.value.negate()),m.specularMap&&(p.specularMap.value=m.specularMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const _=e.get(m).envMap;if(_&&(p.envMap.value=_,p.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap){p.lightMap.value=m.lightMap;const b=n.useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=m.lightMapIntensity*b}m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity);let M;m.map?M=m.map:m.specularMap?M=m.specularMap:m.displacementMap?M=m.displacementMap:m.normalMap?M=m.normalMap:m.bumpMap?M=m.bumpMap:m.roughnessMap?M=m.roughnessMap:m.metalnessMap?M=m.metalnessMap:m.alphaMap?M=m.alphaMap:m.emissiveMap?M=m.emissiveMap:m.clearcoatMap?M=m.clearcoatMap:m.clearcoatNormalMap?M=m.clearcoatNormalMap:m.clearcoatRoughnessMap?M=m.clearcoatRoughnessMap:m.iridescenceMap?M=m.iridescenceMap:m.iridescenceThicknessMap?M=m.iridescenceThicknessMap:m.specularIntensityMap?M=m.specularIntensityMap:m.specularColorMap?M=m.specularColorMap:m.transmissionMap?M=m.transmissionMap:m.thicknessMap?M=m.thicknessMap:m.sheenColorMap?M=m.sheenColorMap:m.sheenRoughnessMap&&(M=m.sheenRoughnessMap),M!==void 0&&(M.isWebGLRenderTarget&&(M=M.texture),M.matrixAutoUpdate===!0&&M.updateMatrix(),p.uvTransform.value.copy(M.matrix));let v;m.aoMap?v=m.aoMap:m.lightMap&&(v=m.lightMap),v!==void 0&&(v.isWebGLRenderTarget&&(v=v.texture),v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uv2Transform.value.copy(v.matrix))}function s(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity}function a(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function o(p,m,_,M){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*_,p.scale.value=M*.5,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v;m.map?v=m.map:m.alphaMap&&(v=m.alphaMap),v!==void 0&&(v.matrixAutoUpdate===!0&&v.updateMatrix(),p.uvTransform.value.copy(v.matrix))}function l(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map),m.alphaMap&&(p.alphaMap.value=m.alphaMap),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let _;m.map?_=m.map:m.alphaMap&&(_=m.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function c(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function u(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function f(p,m){p.roughness.value=m.roughness,p.metalness.value=m.metalness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap),m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap),e.get(m).envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function h(p,m,_){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap)),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap),m.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),p.clearcoatNormalMap.value=m.clearcoatNormalMap,m.side===Ft&&p.clearcoatNormalScale.value.negate())),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap)),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap)}function d(p,m){m.matcap&&(p.matcap.value=m.matcap)}function g(p,m){p.referencePosition.value.copy(m.referencePosition),p.nearDistance.value=m.nearDistance,p.farDistance.value=m.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Xy(n,e,t,i){let r={},s={},a=[];const o=t.isWebGL2?n.getParameter(35375):0;function l(M,v){const b=v.program;i.uniformBlockBinding(M,b)}function c(M,v){let b=r[M.id];b===void 0&&(g(M),b=u(M),r[M.id]=b,M.addEventListener("dispose",m));const E=v.program;i.updateUBOMapping(M,E);const L=e.render.frame;s[M.id]!==L&&(h(M),s[M.id]=L)}function u(M){const v=f();M.__bindingPointIndex=v;const b=n.createBuffer(),E=M.__size,L=M.usage;return n.bindBuffer(35345,b),n.bufferData(35345,E,L),n.bindBuffer(35345,null),n.bindBufferBase(35345,v,b),b}function f(){for(let M=0;M<o;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(M){const v=r[M.id],b=M.uniforms,E=M.__cache;n.bindBuffer(35345,v);for(let L=0,I=b.length;L<I;L++){const S=b[L];if(d(S,L,E)===!0){const P=S.__offset,N=Array.isArray(S.value)?S.value:[S.value];let se=0;for(let ae=0;ae<N.length;ae++){const V=N[ae],z=p(V);typeof V=="number"?(S.__data[0]=V,n.bufferSubData(35345,P+se,S.__data)):V.isMatrix3?(S.__data[0]=V.elements[0],S.__data[1]=V.elements[1],S.__data[2]=V.elements[2],S.__data[3]=V.elements[0],S.__data[4]=V.elements[3],S.__data[5]=V.elements[4],S.__data[6]=V.elements[5],S.__data[7]=V.elements[0],S.__data[8]=V.elements[6],S.__data[9]=V.elements[7],S.__data[10]=V.elements[8],S.__data[11]=V.elements[0]):(V.toArray(S.__data,se),se+=z.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(35345,P,S.__data)}}n.bindBuffer(35345,null)}function d(M,v,b){const E=M.value;if(b[v]===void 0){if(typeof E=="number")b[v]=E;else{const L=Array.isArray(E)?E:[E],I=[];for(let S=0;S<L.length;S++)I.push(L[S].clone());b[v]=I}return!0}else if(typeof E=="number"){if(b[v]!==E)return b[v]=E,!0}else{const L=Array.isArray(b[v])?b[v]:[b[v]],I=Array.isArray(E)?E:[E];for(let S=0;S<L.length;S++){const P=L[S];if(P.equals(I[S])===!1)return P.copy(I[S]),!0}}return!1}function g(M){const v=M.uniforms;let b=0;const E=16;let L=0;for(let I=0,S=v.length;I<S;I++){const P=v[I],N={boundary:0,storage:0},se=Array.isArray(P.value)?P.value:[P.value];for(let ae=0,V=se.length;ae<V;ae++){const z=se[ae],$=p(z);N.boundary+=$.boundary,N.storage+=$.storage}if(P.__data=new Float32Array(N.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=b,I>0){L=b%E;const ae=E-L;L!==0&&ae-N.boundary<0&&(b+=E-L,P.__offset=b)}b+=N.storage}return L=b%E,L>0&&(b+=E-L),M.__size=b,M.__cache={},this}function p(M){const v={boundary:0,storage:0};return typeof M=="number"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),v}function m(M){const v=M.target;v.removeEventListener("dispose",m);const b=a.indexOf(v.__bindingPointIndex);a.splice(b,1),n.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function _(){for(const M in r)n.deleteBuffer(r[M]);a=[],r={},s={}}return{bind:l,update:c,dispose:_}}function qy(){const n=Wr("canvas");return n.style.display="block",n}function qa(n={}){this.isWebGLRenderer=!0;const e=n.canvas!==void 0?n.canvas:qy(),t=n.context!==void 0?n.context:null,i=n.depth!==void 0?n.depth:!0,r=n.stencil!==void 0?n.stencil:!0,s=n.antialias!==void 0?n.antialias:!1,a=n.premultipliedAlpha!==void 0?n.premultipliedAlpha:!0,o=n.preserveDrawingBuffer!==void 0?n.preserveDrawingBuffer:!1,l=n.powerPreference!==void 0?n.powerPreference:"default",c=n.failIfMajorPerformanceCaveat!==void 0?n.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=n.alpha!==void 0?n.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=yi,this.useLegacyLights=!0,this.toneMapping=In,this.toneMappingExposure=1;const p=this;let m=!1,_=0,M=0,v=null,b=-1,E=null;const L=new _t,I=new _t;let S=null,P=e.width,N=e.height,se=1,ae=null,V=null;const z=new _t(0,0,P,N),$=new _t(0,0,P,N);let te=!1;const re=new Qf;let j=!1,de=!1,ce=null;const Ee=new lt,k=new U,fe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function _e(){return v===null?se:1}let H=t;function be(T,W){for(let J=0;J<T.length;J++){const G=T[J],ie=e.getContext(G,W);if(ie!==null)return ie}return null}try{const T={alpha:!0,depth:i,stencil:r,antialias:s,premultipliedAlpha:a,preserveDrawingBuffer:o,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ka}`),e.addEventListener("webglcontextlost",Me,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Ce,!1),H===null){const W=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&W.shift(),H=be(W,T),H===null)throw be(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let O,K,q,oe,Se,Te,w,C,B,ne,Y,Q,ue,pe,he,y,x,R,X,Z,le,xe,A,F;function ve(){O=new rx(H),K=new Kv(H,O,n),O.init(K),xe=new Gy(H,O,K),q=new zy(H,O,K),oe=new ax,Se=new wy,Te=new By(H,O,q,Se,K,xe,oe),w=new Qv(p),C=new ix(p),B=new m_(H,K),A=new Zv(H,O,B,K),ne=new sx(H,B,oe,A),Y=new fx(H,ne,B,oe),X=new ux(H,K,Te),y=new Jv(Se),Q=new Sy(p,w,C,O,K,A,y),ue=new jy(p,Se),pe=new Ty,he=new Dy(O,K),R=new Yv(p,w,C,q,Y,u,a),x=new Uy(p,Y,K),F=new Xy(H,oe,K,q),Z=new $v(H,O,oe,K),le=new ox(H,O,oe,K),oe.programs=Q.programs,p.capabilities=K,p.extensions=O,p.properties=Se,p.renderLists=pe,p.shadowMap=x,p.state=q,p.info=oe}ve();const ge=new Wy(p,H);this.xr=ge,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const T=O.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=O.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(T){T!==void 0&&(se=T,this.setSize(P,N,!1))},this.getSize=function(T){return T.set(P,N)},this.setSize=function(T,W,J=!0){if(ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}P=T,N=W,e.width=Math.floor(T*se),e.height=Math.floor(W*se),J===!0&&(e.style.width=T+"px",e.style.height=W+"px"),this.setViewport(0,0,T,W)},this.getDrawingBufferSize=function(T){return T.set(P*se,N*se).floor()},this.setDrawingBufferSize=function(T,W,J){P=T,N=W,se=J,e.width=Math.floor(T*J),e.height=Math.floor(W*J),this.setViewport(0,0,T,W)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(z)},this.setViewport=function(T,W,J,G){T.isVector4?z.set(T.x,T.y,T.z,T.w):z.set(T,W,J,G),q.viewport(L.copy(z).multiplyScalar(se).floor())},this.getScissor=function(T){return T.copy($)},this.setScissor=function(T,W,J,G){T.isVector4?$.set(T.x,T.y,T.z,T.w):$.set(T,W,J,G),q.scissor(I.copy($).multiplyScalar(se).floor())},this.getScissorTest=function(){return te},this.setScissorTest=function(T){q.setScissorTest(te=T)},this.setOpaqueSort=function(T){ae=T},this.setTransparentSort=function(T){V=T},this.getClearColor=function(T){return T.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor.apply(R,arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha.apply(R,arguments)},this.clear=function(T=!0,W=!0,J=!0){let G=0;T&&(G|=16384),W&&(G|=256),J&&(G|=1024),H.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Me,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Ce,!1),pe.dispose(),he.dispose(),Se.dispose(),w.dispose(),C.dispose(),Y.dispose(),A.dispose(),F.dispose(),Q.dispose(),ge.dispose(),ge.removeEventListener("sessionstart",me),ge.removeEventListener("sessionend",we),ce&&(ce.dispose(),ce=null),Pe.stop()};function Me(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),m=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),m=!1;const T=oe.autoReset,W=x.enabled,J=x.autoUpdate,G=x.needsUpdate,ie=x.type;ve(),oe.autoReset=T,x.enabled=W,x.autoUpdate=J,x.needsUpdate=G,x.type=ie}function Ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Re(T){const W=T.target;W.removeEventListener("dispose",Re),De(W)}function De(T){je(T),Se.remove(T)}function je(T){const W=Se.get(T).programs;W!==void 0&&(W.forEach(function(J){Q.releaseProgram(J)}),T.isShaderMaterial&&Q.releaseShaderCache(T))}this.renderBufferDirect=function(T,W,J,G,ie,Le){W===null&&(W=fe);const Oe=ie.isMesh&&ie.matrixWorld.determinant()<0,ze=fh(T,W,J,G,ie);q.setMaterial(G,Oe);let Be=J.index,We=1;G.wireframe===!0&&(Be=ne.getWireframeAttribute(J),We=2);const ke=J.drawRange,Ve=J.attributes.position;let st=ke.start*We,Ut=(ke.start+ke.count)*We;Le!==null&&(st=Math.max(st,Le.start*We),Ut=Math.min(Ut,(Le.start+Le.count)*We)),Be!==null?(st=Math.max(st,0),Ut=Math.min(Ut,Be.count)):Ve!=null&&(st=Math.max(st,0),Ut=Math.min(Ut,Ve.count));const Mn=Ut-st;if(Mn<0||Mn===1/0)return;A.setup(ie,G,ze,J,Be);let Qn,ot=Z;if(Be!==null&&(Qn=B.get(Be),ot=le,ot.setIndex(Qn)),ie.isMesh)G.wireframe===!0?(q.setLineWidth(G.wireframeLinewidth*_e()),ot.setMode(1)):ot.setMode(4);else if(ie.isLine){let He=G.linewidth;He===void 0&&(He=1),q.setLineWidth(He*_e()),ie.isLineSegments?ot.setMode(1):ie.isLineLoop?ot.setMode(2):ot.setMode(3)}else ie.isPoints?ot.setMode(0):ie.isSprite&&ot.setMode(4);if(ie.isInstancedMesh)ot.renderInstances(st,Mn,ie.count);else if(J.isInstancedBufferGeometry){const He=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Js=Math.min(J.instanceCount,He);ot.renderInstances(st,Mn,Js)}else ot.render(st,Mn)},this.compile=function(T,W){function J(G,ie,Le){G.transparent===!0&&G.side===Wn&&G.forceSinglePass===!1?(G.side=Ft,G.needsUpdate=!0,Xt(G,ie,Le),G.side=Zn,G.needsUpdate=!0,Xt(G,ie,Le),G.side=Wn):Xt(G,ie,Le)}h=he.get(T),h.init(),g.push(h),T.traverseVisible(function(G){G.isLight&&G.layers.test(W.layers)&&(h.pushLight(G),G.castShadow&&h.pushShadow(G))}),h.setupLights(p.useLegacyLights),T.traverse(function(G){const ie=G.material;if(ie)if(Array.isArray(ie))for(let Le=0;Le<ie.length;Le++){const Oe=ie[Le];J(Oe,T,G)}else J(ie,T,G)}),g.pop(),h=null};let D=null;function ee(T){D&&D(T)}function me(){Pe.stop()}function we(){Pe.start()}const Pe=new eh;Pe.setAnimationLoop(ee),typeof self<"u"&&Pe.setContext(self),this.setAnimationLoop=function(T){D=T,ge.setAnimationLoop(T),T===null?Pe.stop():Pe.start()},ge.addEventListener("sessionstart",me),ge.addEventListener("sessionend",we),this.render=function(T,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(m===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ge.enabled===!0&&ge.isPresenting===!0&&(ge.cameraAutoUpdate===!0&&ge.updateCamera(W),W=ge.getCamera()),T.isScene===!0&&T.onBeforeRender(p,T,W,v),h=he.get(T,g.length),h.init(),g.push(h),Ee.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),re.setFromProjectionMatrix(Ee),de=this.localClippingEnabled,j=y.init(this.clippingPlanes,de),f=pe.get(T,d.length),f.init(),d.push(f),Je(T,W,0,p.sortObjects),f.finish(),p.sortObjects===!0&&f.sort(ae,V),j===!0&&y.beginShadows();const J=h.state.shadowsArray;if(x.render(J,T,W),j===!0&&y.endShadows(),this.info.autoReset===!0&&this.info.reset(),R.render(f,T),h.setupLights(p.useLegacyLights),W.isArrayCamera){const G=W.cameras;for(let ie=0,Le=G.length;ie<Le;ie++){const Oe=G[ie];ht(f,T,Oe,Oe.viewport)}}else ht(f,T,W);v!==null&&(Te.updateMultisampleRenderTarget(v),Te.updateRenderTargetMipmap(v)),T.isScene===!0&&T.onAfterRender(p,T,W),A.resetDefaultState(),b=-1,E=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function Je(T,W,J,G){if(T.visible===!1)return;if(T.layers.test(W.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(W);else if(T.isLight)h.pushLight(T),T.castShadow&&h.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||re.intersectsSprite(T)){G&&k.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const Oe=Y.update(T),ze=T.material;ze.visible&&f.push(T,Oe,ze,J,k.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(T.isSkinnedMesh&&T.skeleton.frame!==oe.render.frame&&(T.skeleton.update(),T.skeleton.frame=oe.render.frame),!T.frustumCulled||re.intersectsObject(T))){G&&k.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ee);const Oe=Y.update(T),ze=T.material;if(Array.isArray(ze)){const Be=Oe.groups;for(let We=0,ke=Be.length;We<ke;We++){const Ve=Be[We],st=ze[Ve.materialIndex];st&&st.visible&&f.push(T,Oe,st,J,k.z,Ve)}}else ze.visible&&f.push(T,Oe,ze,J,k.z,null)}}const Le=T.children;for(let Oe=0,ze=Le.length;Oe<ze;Oe++)Je(Le[Oe],W,J,G)}function ht(T,W,J,G){const ie=T.opaque,Le=T.transmissive,Oe=T.transparent;h.setupLightsView(J),j===!0&&y.setGlobalState(p.clippingPlanes,J),Le.length>0&&wt(ie,W,J),G&&q.viewport(L.copy(G)),ie.length>0&&cn(ie,W,J),Le.length>0&&cn(Le,W,J),Oe.length>0&&cn(Oe,W,J),q.buffers.depth.setTest(!0),q.buffers.depth.setMask(!0),q.buffers.color.setMask(!0),q.setPolygonOffset(!1)}function wt(T,W,J){const G=K.isWebGL2;ce===null&&(ce=new Mi(1024,1024,{generateMipmaps:!0,type:O.has("EXT_color_buffer_half_float")?Vr:xi,minFilter:kr,samples:G&&s===!0?4:0}));const ie=p.getRenderTarget();p.setRenderTarget(ce),p.clear();const Le=p.toneMapping;p.toneMapping=In,cn(T,W,J),p.toneMapping=Le,Te.updateMultisampleRenderTarget(ce),Te.updateRenderTargetMipmap(ce),p.setRenderTarget(ie)}function cn(T,W,J){const G=W.isScene===!0?W.overrideMaterial:null;for(let ie=0,Le=T.length;ie<Le;ie++){const Oe=T[ie],ze=Oe.object,Be=Oe.geometry,We=G===null?Oe.material:G,ke=Oe.group;ze.layers.test(J.layers)&&nt(ze,W,J,Be,We,ke)}}function nt(T,W,J,G,ie,Le){T.onBeforeRender(p,W,J,G,ie,Le),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ie.onBeforeRender(p,W,J,G,T,Le),ie.transparent===!0&&ie.side===Wn&&ie.forceSinglePass===!1?(ie.side=Ft,ie.needsUpdate=!0,p.renderBufferDirect(J,W,G,ie,T,Le),ie.side=Zn,ie.needsUpdate=!0,p.renderBufferDirect(J,W,G,ie,T,Le),ie.side=Wn):p.renderBufferDirect(J,W,G,ie,T,Le),T.onAfterRender(p,W,J,G,ie,Le)}function Xt(T,W,J){W.isScene!==!0&&(W=fe);const G=Se.get(T),ie=h.state.lights,Le=h.state.shadowsArray,Oe=ie.state.version,ze=Q.getParameters(T,ie.state,Le,W,J),Be=Q.getProgramCacheKey(ze);let We=G.programs;G.environment=T.isMeshStandardMaterial?W.environment:null,G.fog=W.fog,G.envMap=(T.isMeshStandardMaterial?C:w).get(T.envMap||G.environment),We===void 0&&(T.addEventListener("dispose",Re),We=new Map,G.programs=We);let ke=We.get(Be);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===Oe)return un(T,ze),ke}else ze.uniforms=Q.getUniforms(T),T.onBuild(J,ze,p),T.onBeforeCompile(ze,p),ke=Q.acquireProgram(ze,Be),We.set(Be,ke),G.uniforms=ze.uniforms;const Ve=G.uniforms;(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ve.clippingPlanes=y.uniform),un(T,ze),G.needsLights=dh(T),G.lightsStateVersion=Oe,G.needsLights&&(Ve.ambientLightColor.value=ie.state.ambient,Ve.lightProbe.value=ie.state.probe,Ve.directionalLights.value=ie.state.directional,Ve.directionalLightShadows.value=ie.state.directionalShadow,Ve.spotLights.value=ie.state.spot,Ve.spotLightShadows.value=ie.state.spotShadow,Ve.rectAreaLights.value=ie.state.rectArea,Ve.ltc_1.value=ie.state.rectAreaLTC1,Ve.ltc_2.value=ie.state.rectAreaLTC2,Ve.pointLights.value=ie.state.point,Ve.pointLightShadows.value=ie.state.pointShadow,Ve.hemisphereLights.value=ie.state.hemi,Ve.directionalShadowMap.value=ie.state.directionalShadowMap,Ve.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,Ve.spotShadowMap.value=ie.state.spotShadowMap,Ve.spotLightMatrix.value=ie.state.spotLightMatrix,Ve.spotLightMap.value=ie.state.spotLightMap,Ve.pointShadowMap.value=ie.state.pointShadowMap,Ve.pointShadowMatrix.value=ie.state.pointShadowMatrix);const st=ke.getUniforms(),Ut=As.seqWithValue(st.seq,Ve);return G.currentProgram=ke,G.uniformsList=Ut,ke}function un(T,W){const J=Se.get(T);J.outputEncoding=W.outputEncoding,J.instancing=W.instancing,J.skinning=W.skinning,J.morphTargets=W.morphTargets,J.morphNormals=W.morphNormals,J.morphColors=W.morphColors,J.morphTargetsCount=W.morphTargetsCount,J.numClippingPlanes=W.numClippingPlanes,J.numIntersection=W.numClipIntersection,J.vertexAlphas=W.vertexAlphas,J.vertexTangents=W.vertexTangents,J.toneMapping=W.toneMapping}function fh(T,W,J,G,ie){W.isScene!==!0&&(W=fe),Te.resetTextureUnits();const Le=W.fog,Oe=G.isMeshStandardMaterial?W.environment:null,ze=v===null?p.outputEncoding:v.isXRRenderTarget===!0?v.texture.encoding:yi,Be=(G.isMeshStandardMaterial?C:w).get(G.envMap||Oe),We=G.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,ke=!!G.normalMap&&!!J.attributes.tangent,Ve=!!J.morphAttributes.position,st=!!J.morphAttributes.normal,Ut=!!J.morphAttributes.color,Mn=G.toneMapped?p.toneMapping:In,Qn=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ot=Qn!==void 0?Qn.length:0,He=Se.get(G),Js=h.state.lights;if(j===!0&&(de===!0||T!==E)){const zt=T===E&&G.id===b;y.setState(G,T,zt)}let dt=!1;G.version===He.__version?(He.needsLights&&He.lightsStateVersion!==Js.state.version||He.outputEncoding!==ze||ie.isInstancedMesh&&He.instancing===!1||!ie.isInstancedMesh&&He.instancing===!0||ie.isSkinnedMesh&&He.skinning===!1||!ie.isSkinnedMesh&&He.skinning===!0||He.envMap!==Be||G.fog===!0&&He.fog!==Le||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==y.numPlanes||He.numIntersection!==y.numIntersection)||He.vertexAlphas!==We||He.vertexTangents!==ke||He.morphTargets!==Ve||He.morphNormals!==st||He.morphColors!==Ut||He.toneMapping!==Mn||K.isWebGL2===!0&&He.morphTargetsCount!==ot)&&(dt=!0):(dt=!0,He.__version=G.version);let ei=He.currentProgram;dt===!0&&(ei=Xt(G,W,ie));let Za=!1,cr=!1,Qs=!1;const Et=ei.getUniforms(),ti=He.uniforms;if(q.useProgram(ei.program)&&(Za=!0,cr=!0,Qs=!0),G.id!==b&&(b=G.id,cr=!0),Za||E!==T){if(Et.setValue(H,"projectionMatrix",T.projectionMatrix),K.logarithmicDepthBuffer&&Et.setValue(H,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),E!==T&&(E=T,cr=!0,Qs=!0),G.isShaderMaterial||G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshStandardMaterial||G.envMap){const zt=Et.map.cameraPosition;zt!==void 0&&zt.setValue(H,k.setFromMatrixPosition(T.matrixWorld))}(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Et.setValue(H,"isOrthographic",T.isOrthographicCamera===!0),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial||G.isShadowMaterial||ie.isSkinnedMesh)&&Et.setValue(H,"viewMatrix",T.matrixWorldInverse)}if(ie.isSkinnedMesh){Et.setOptional(H,ie,"bindMatrix"),Et.setOptional(H,ie,"bindMatrixInverse");const zt=ie.skeleton;zt&&(K.floatVertexTextures?(zt.boneTexture===null&&zt.computeBoneTexture(),Et.setValue(H,"boneTexture",zt.boneTexture,Te),Et.setValue(H,"boneTextureSize",zt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const eo=J.morphAttributes;if((eo.position!==void 0||eo.normal!==void 0||eo.color!==void 0&&K.isWebGL2===!0)&&X.update(ie,J,ei),(cr||He.receiveShadow!==ie.receiveShadow)&&(He.receiveShadow=ie.receiveShadow,Et.setValue(H,"receiveShadow",ie.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(ti.envMap.value=Be,ti.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),cr&&(Et.setValue(H,"toneMappingExposure",p.toneMappingExposure),He.needsLights&&hh(ti,Qs),Le&&G.fog===!0&&ue.refreshFogUniforms(ti,Le),ue.refreshMaterialUniforms(ti,G,se,N,ce),As.upload(H,He.uniformsList,ti,Te)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(As.upload(H,He.uniformsList,ti,Te),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Et.setValue(H,"center",ie.center),Et.setValue(H,"modelViewMatrix",ie.modelViewMatrix),Et.setValue(H,"normalMatrix",ie.normalMatrix),Et.setValue(H,"modelMatrix",ie.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const zt=G.uniformsGroups;for(let to=0,ph=zt.length;to<ph;to++)if(K.isWebGL2){const $a=zt[to];F.update($a,ei),F.bind($a,ei)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return ei}function hh(T,W){T.ambientLightColor.needsUpdate=W,T.lightProbe.needsUpdate=W,T.directionalLights.needsUpdate=W,T.directionalLightShadows.needsUpdate=W,T.pointLights.needsUpdate=W,T.pointLightShadows.needsUpdate=W,T.spotLights.needsUpdate=W,T.spotLightShadows.needsUpdate=W,T.rectAreaLights.needsUpdate=W,T.hemisphereLights.needsUpdate=W}function dh(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return M},this.getRenderTarget=function(){return v},this.setRenderTargetTextures=function(T,W,J){Se.get(T.texture).__webglTexture=W,Se.get(T.depthTexture).__webglTexture=J;const G=Se.get(T);G.__hasExternalTextures=!0,G.__hasExternalTextures&&(G.__autoAllocateDepthBuffer=J===void 0,G.__autoAllocateDepthBuffer||O.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,W){const J=Se.get(T);J.__webglFramebuffer=W,J.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(T,W=0,J=0){v=T,_=W,M=J;let G=!0,ie=null,Le=!1,Oe=!1;if(T){const Be=Se.get(T);Be.__useDefaultFramebuffer!==void 0?(q.bindFramebuffer(36160,null),G=!1):Be.__webglFramebuffer===void 0?Te.setupRenderTarget(T):Be.__hasExternalTextures&&Te.rebindTextures(T,Se.get(T.texture).__webglTexture,Se.get(T.depthTexture).__webglTexture);const We=T.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Oe=!0);const ke=Se.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(ie=ke[W],Le=!0):K.isWebGL2&&T.samples>0&&Te.useMultisampledRTT(T)===!1?ie=Se.get(T).__webglMultisampledFramebuffer:ie=ke,L.copy(T.viewport),I.copy(T.scissor),S=T.scissorTest}else L.copy(z).multiplyScalar(se).floor(),I.copy($).multiplyScalar(se).floor(),S=te;if(q.bindFramebuffer(36160,ie)&&K.drawBuffers&&G&&q.drawBuffers(T,ie),q.viewport(L),q.scissor(I),q.setScissorTest(S),Le){const Be=Se.get(T.texture);H.framebufferTexture2D(36160,36064,34069+W,Be.__webglTexture,J)}else if(Oe){const Be=Se.get(T.texture),We=W||0;H.framebufferTextureLayer(36160,36064,Be.__webglTexture,J||0,We)}b=-1},this.readRenderTargetPixels=function(T,W,J,G,ie,Le,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ze=Se.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(ze=ze[Oe]),ze){q.bindFramebuffer(36160,ze);try{const Be=T.texture,We=Be.format,ke=Be.type;if(We!==rn&&xe.convert(We)!==H.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ve=ke===Vr&&(O.has("EXT_color_buffer_half_float")||K.isWebGL2&&O.has("EXT_color_buffer_float"));if(ke!==xi&&xe.convert(ke)!==H.getParameter(35738)&&!(ke===pi&&(K.isWebGL2||O.has("OES_texture_float")||O.has("WEBGL_color_buffer_float")))&&!Ve){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=T.width-G&&J>=0&&J<=T.height-ie&&H.readPixels(W,J,G,ie,xe.convert(We),xe.convert(ke),Le)}finally{const Be=v!==null?Se.get(v).__webglFramebuffer:null;q.bindFramebuffer(36160,Be)}}},this.copyFramebufferToTexture=function(T,W,J=0){const G=Math.pow(2,-J),ie=Math.floor(W.image.width*G),Le=Math.floor(W.image.height*G);Te.setTexture2D(W,0),H.copyTexSubImage2D(3553,J,0,0,T.x,T.y,ie,Le),q.unbindTexture()},this.copyTextureToTexture=function(T,W,J,G=0){const ie=W.image.width,Le=W.image.height,Oe=xe.convert(J.format),ze=xe.convert(J.type);Te.setTexture2D(J,0),H.pixelStorei(37440,J.flipY),H.pixelStorei(37441,J.premultiplyAlpha),H.pixelStorei(3317,J.unpackAlignment),W.isDataTexture?H.texSubImage2D(3553,G,T.x,T.y,ie,Le,Oe,ze,W.image.data):W.isCompressedTexture?H.compressedTexSubImage2D(3553,G,T.x,T.y,W.mipmaps[0].width,W.mipmaps[0].height,Oe,W.mipmaps[0].data):H.texSubImage2D(3553,G,T.x,T.y,Oe,ze,W.image),G===0&&J.generateMipmaps&&H.generateMipmap(3553),q.unbindTexture()},this.copyTextureToTexture3D=function(T,W,J,G,ie=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Le=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,ze=T.max.z-T.min.z+1,Be=xe.convert(G.format),We=xe.convert(G.type);let ke;if(G.isData3DTexture)Te.setTexture3D(G,0),ke=32879;else if(G.isDataArrayTexture)Te.setTexture2DArray(G,0),ke=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(37440,G.flipY),H.pixelStorei(37441,G.premultiplyAlpha),H.pixelStorei(3317,G.unpackAlignment);const Ve=H.getParameter(3314),st=H.getParameter(32878),Ut=H.getParameter(3316),Mn=H.getParameter(3315),Qn=H.getParameter(32877),ot=J.isCompressedTexture?J.mipmaps[0]:J.image;H.pixelStorei(3314,ot.width),H.pixelStorei(32878,ot.height),H.pixelStorei(3316,T.min.x),H.pixelStorei(3315,T.min.y),H.pixelStorei(32877,T.min.z),J.isDataTexture||J.isData3DTexture?H.texSubImage3D(ke,ie,W.x,W.y,W.z,Le,Oe,ze,Be,We,ot.data):J.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(ke,ie,W.x,W.y,W.z,Le,Oe,ze,Be,ot.data)):H.texSubImage3D(ke,ie,W.x,W.y,W.z,Le,Oe,ze,Be,We,ot),H.pixelStorei(3314,Ve),H.pixelStorei(32878,st),H.pixelStorei(3316,Ut),H.pixelStorei(3315,Mn),H.pixelStorei(32877,Qn),ie===0&&G.generateMipmaps&&H.generateMipmap(ke),q.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Te.setTextureCube(T,0):T.isData3DTexture?Te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Te.setTexture2DArray(T,0):Te.setTexture2D(T,0),q.unbindTexture()},this.resetState=function(){_=0,M=0,v=null,q.reset(),A.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}Object.defineProperties(qa.prototype,{physicallyCorrectLights:{get:function(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights},set:function(n){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!n}}});class Yy extends qa{}Yy.prototype.isWebGL1Renderer=!0;class Zy extends mt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Ya extends Zr{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const eu=new U,tu=new U,nu=new lt,Zo=new Va,ys=new Ys;class $y extends mt{constructor(e=new ln,t=new Ya){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,s=t.count;r<s;r++)eu.fromBufferAttribute(t,r-1),tu.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=eu.distanceTo(tu);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ys.copy(i.boundingSphere),ys.applyMatrix4(r),ys.radius+=s,e.ray.intersectsSphere(ys)===!1)return;nu.copy(r).invert(),Zo.copy(e.ray).applyMatrix4(nu);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new U,u=new U,f=new U,h=new U,d=this.isLineSegments?2:1,g=i.index,m=i.attributes.position;if(g!==null){const _=Math.max(0,a.start),M=Math.min(g.count,a.start+a.count);for(let v=_,b=M-1;v<b;v+=d){const E=g.getX(v),L=g.getX(v+1);if(c.fromBufferAttribute(m,E),u.fromBufferAttribute(m,L),Zo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const S=e.ray.origin.distanceTo(h);S<e.near||S>e.far||t.push({distance:S,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),M=Math.min(m.count,a.start+a.count);for(let v=_,b=M-1;v<b;v+=d){if(c.fromBufferAttribute(m,v),u.fromBufferAttribute(m,v+1),Zo.distanceSqToSegment(c,u,h,f)>l)continue;h.applyMatrix4(this.matrixWorld);const L=e.ray.origin.distanceTo(h);L<e.near||L>e.far||t.push({distance:L,point:f.clone().applyMatrix4(this.matrixWorld),index:v,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const iu=new U,ru=new U;class sh extends $y{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,s=t.count;r<s;r+=2)iu.fromBufferAttribute(t,r),ru.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+iu.distanceTo(ru);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ks extends ln{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const u=[],f=new U,h=new U,d=[],g=[],p=[],m=[];for(let _=0;_<=i;_++){const M=[],v=_/i;let b=0;_==0&&a==0?b=.5/t:_==i&&l==Math.PI&&(b=-.5/t);for(let E=0;E<=t;E++){const L=E/t;f.x=-e*Math.cos(r+L*s)*Math.sin(a+v*o),f.y=e*Math.cos(a+v*o),f.z=e*Math.sin(r+L*s)*Math.sin(a+v*o),g.push(f.x,f.y,f.z),h.copy(f).normalize(),p.push(h.x,h.y,h.z),m.push(L+b,1-v),M.push(c++)}u.push(M)}for(let _=0;_<i;_++)for(let M=0;M<t;M++){const v=u[_][M+1],b=u[_][M],E=u[_+1][M],L=u[_+1][M+1];(_!==0||a>0)&&d.push(v,b,L),(_!==i-1||l<Math.PI)&&d.push(b,E,L)}this.setIndex(d),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(p,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ks(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class oh extends $n{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}const su={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Ky{constructor(e,t,i){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=c.length;f<h;f+=2){const d=c[f],g=c[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const Jy=new Ky;class ah{constructor(e){this.manager=e!==void 0?e:Jy,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(r,s){i.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}class Qy extends ah{constructor(e){super(e)}load(e,t,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=su.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=Wr("img");function l(){u(),su.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class ai extends ah{constructor(e){super(e)}load(e,t,i,r){const s=new Nt,a=new Qy(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},i,r),s}}class eb{constructor(e,t,i=0,r=1/0){this.ray=new Va(e,t),this.near=i,this.far=r,this.camera=null,this.layers=new Ha,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,i=[]){return ya(e,this,i,t),i.sort(ou),i}intersectObjects(e,t=!0,i=[]){for(let r=0,s=e.length;r<s;r++)ya(e[r],this,i,t);return i.sort(ou),i}}function ou(n,e){return n.distance-e.distance}function ya(n,e,t,i){if(n.layers.test(e.layers)&&n.raycast(e,t),i===!0){const r=n.children;for(let s=0,a=r.length;s<a;s++)ya(r[s],e,t,!0)}}class au{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ot(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const bs=new U,et=new Wa;class tb extends sh{constructor(e){const t=new ln,i=new Ya({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(g,p){l(g),l(p)}function l(g){r.push(0,0,0),s.push(0,0,0),a[g]===void 0&&(a[g]=[]),a[g].push(r.length/3-1)}t.setAttribute("position",new St(r,3)),t.setAttribute("color",new St(s,3)),super(t,i),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new Xe(16755200),u=new Xe(16711680),f=new Xe(43775),h=new Xe(16777215),d=new Xe(3355443);this.setColors(c,u,f,h,d)}setColors(e,t,i,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,i.r,i.g,i.b),o.setXYZ(33,i.r,i.g,i.b),o.setXYZ(34,i.r,i.g,i.b),o.setXYZ(35,i.r,i.g,i.b),o.setXYZ(36,i.r,i.g,i.b),o.setXYZ(37,i.r,i.g,i.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,i=1,r=1;et.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),it("c",t,e,et,0,0,-1),it("t",t,e,et,0,0,1),it("n1",t,e,et,-i,-r,-1),it("n2",t,e,et,i,-r,-1),it("n3",t,e,et,-i,r,-1),it("n4",t,e,et,i,r,-1),it("f1",t,e,et,-i,-r,1),it("f2",t,e,et,i,-r,1),it("f3",t,e,et,-i,r,1),it("f4",t,e,et,i,r,1),it("u1",t,e,et,i*.7,r*1.1,-1),it("u2",t,e,et,-i*.7,r*1.1,-1),it("u3",t,e,et,0,r*2,-1),it("cf1",t,e,et,-i,0,1),it("cf2",t,e,et,i,0,1),it("cf3",t,e,et,0,-r,1),it("cf4",t,e,et,0,r,1),it("cn1",t,e,et,-i,0,-1),it("cn2",t,e,et,i,0,-1),it("cn3",t,e,et,0,-r,-1),it("cn4",t,e,et,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function it(n,e,t,i,r,s,a){bs.set(r,s,a).unproject(i);const o=e[n];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],bs.x,bs.y,bs.z)}}class nb extends sh{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ln;r.setAttribute("position",new St(t,3)),r.setAttribute("color",new St(i,3));const s=new Ya({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,i){const r=new Xe,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(i),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ka}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ka);var lu=class{constructor(n,e){Ie(this,"target");Ie(this,"name");Ie(this,"intersected");Ie(this,"wasIntersected",!1);Ie(this,"wasIntersectedOnMouseDown",!1);Ie(this,"distance");this.target=n,this.name=e,this.intersected=!1,this.distance=0}},It=class{constructor(n,e=null){Ie(this,"type");Ie(this,"cancelBubble");Ie(this,"originalEvent");Ie(this,"coords",new Ge(0,0));Ie(this,"distance",0);Ie(this,"intersected",!1);Ie(this,"wasIntersected",!1);Ie(this,"wasIntersectedOnMouseDown",!1);this.cancelBubble=!1,this.type=n,this.originalEvent=e}stopPropagation(){this.cancelBubble=!0}},ib=class{constructor(n,e,t,i){Ie(this,"renderer");Ie(this,"camera");Ie(this,"domElement");Ie(this,"bindEventsOnBodyElement");Ie(this,"autoAdd");Ie(this,"scene");Ie(this,"mouse");Ie(this,"supportsPointerEvents");Ie(this,"interactiveObjects");Ie(this,"closestObject");Ie(this,"raycaster");Ie(this,"treatTouchEventsAsMouseEvents");Ie(this,"dispose",()=>{this.domElement.removeEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("pointermove",this.onDocumentPointerMove):this.domElement.removeEventListener("pointermove",this.onDocumentPointerMove),this.domElement.removeEventListener("pointerdown",this.onPointerDown),this.domElement.removeEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?this.domElement.ownerDocument.removeEventListener("mousemove",this.onDocumentMouseMove):this.domElement.removeEventListener("mousemove",this.onDocumentMouseMove),this.domElement.removeEventListener("mousedown",this.onMouseDown),this.domElement.removeEventListener("mouseup",this.onMouseUp),this.domElement.removeEventListener("touchstart",this.onTouchStart),this.domElement.removeEventListener("touchmove",this.onTouchMove),this.domElement.removeEventListener("touchend",this.onTouchEnd)});Ie(this,"add",(n,e=[])=>{if(n&&!this.interactiveObjects.find(t=>t.target===n))if(e.length>0)e.forEach(t=>{let i=n.getObjectByName(t);if(i){let r=new lu(i,t);this.interactiveObjects.push(r)}});else{let t=new lu(n,n.name);this.interactiveObjects.push(t)}});Ie(this,"remove",(n,e=[])=>{!n||(e.length>0?e.forEach(t=>{let i=n.getObjectByName(t);i&&(this.interactiveObjects=this.interactiveObjects.filter(r=>r.target!==i))}):this.interactiveObjects=this.interactiveObjects.filter(t=>t.target!==n))});Ie(this,"update",()=>{this.raycaster.setFromCamera(this.mouse,this.camera),this.interactiveObjects.forEach(i=>{i.target&&this.checkIntersection(i)}),this.interactiveObjects.sort(function(i,r){return i.distance-r.distance});let n=this.interactiveObjects.find(i=>i.intersected)??null;if(n!=this.closestObject){if(this.closestObject){let i=new It("mouseout");this.dispatch(this.closestObject,i)}if(n){let i=new It("mouseover");this.dispatch(n,i)}this.closestObject=n}let e;this.interactiveObjects.forEach(i=>{!i.intersected&&i.wasIntersected&&(e||(e=new It("mouseleave")),this.dispatch(i,e))});let t;this.interactiveObjects.forEach(i=>{i.intersected&&!i.wasIntersected&&(t||(t=new It("mouseenter")),this.dispatch(i,t))})});Ie(this,"checkIntersection",n=>{let e=this.raycaster.intersectObjects([n.target],!0);if(n.wasIntersected=n.intersected,e.length>0){let t=e[0].distance;e.forEach(i=>{i.distance<t&&(t=i.distance)}),n.intersected=!0,n.distance=t}else n.intersected=!1});Ie(this,"onDocumentMouseMove",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY);let e=new It("mousemove",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onDocumentPointerMove",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY);let e=new It("pointermove",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onTouchMove",n=>{n.touches.length>0&&this.mapPositionToPoint(this.mouse,n.touches[0].clientX,n.touches[0].clientY);let e=new It(this.treatTouchEventsAsMouseEvents?"mousemove":"touchmove",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onMouseClick",n=>{this.update();let e=new It("click",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onMouseDown",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY),this.update();let e=new It("mousedown",n);this.interactiveObjects.forEach(t=>{t.intersected?(t.wasIntersectedOnMouseDown=!0,this.dispatch(t,e)):t.wasIntersectedOnMouseDown=!1})});Ie(this,"onPointerDown",n=>{this.mapPositionToPoint(this.mouse,n.clientX,n.clientY),this.update();let e=new It("pointerdown",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onTouchStart",n=>{n.touches.length>0&&this.mapPositionToPoint(this.mouse,n.touches[0].clientX,n.touches[0].clientY),this.update();let e=new It(this.treatTouchEventsAsMouseEvents?"mousedown":"touchstart",n);this.interactiveObjects.forEach(t=>{t.intersected&&this.dispatch(t,e)})});Ie(this,"onMouseUp",n=>{let e=new It("mouseup",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onPointerUp",n=>{let e=new It("pointerup",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"onTouchEnd",n=>{n.touches.length>0&&this.mapPositionToPoint(this.mouse,n.touches[0].clientX,n.touches[0].clientY),this.update();let e=new It(this.treatTouchEventsAsMouseEvents?"mouseup":"touchend",n);this.interactiveObjects.forEach(t=>{this.dispatch(t,e)})});Ie(this,"dispatch",(n,e)=>{n.target&&!e.cancelBubble&&(e.coords=this.mouse,e.distance=n.distance,e.intersected=n.intersected,e.wasIntersected=n.wasIntersected,e.wasIntersectedOnMouseDown=n.wasIntersectedOnMouseDown,n.target.dispatchEvent(e))});Ie(this,"mapPositionToPoint",(n,e,t)=>{let i=this.renderer.domElement.getBoundingClientRect();n.x=(e-i.left)/i.width*2-1,n.y=-((t-i.top)/i.height)*2+1});this.renderer=n,this.camera=e,this.domElement=t,this.bindEventsOnBodyElement=i&&typeof i.bindEventsOnBodyElement<"u"?i.bindEventsOnBodyElement:!0,this.scene=i&&typeof i.scene<"u"?i.scene:null,this.scene&&(this.scene.onBeforeRender=()=>{this.autoAdd&&this.scene!==null&&this.scene.traverse(r=>{this.add(r),r.addEventListener("removed",s=>{this.remove(s.target)})}),this.update()}),this.autoAdd=i&&typeof i.autoAdd<"u"?i.autoAdd:!1,this.autoAdd&&this.scene===null&&console.error("Attention: Options.scene needs to be set when using options.autoAdd"),this.mouse=new Ge(-1,1),this.supportsPointerEvents=!!window.PointerEvent,this.interactiveObjects=[],this.closestObject=null,this.raycaster=new eb,t.addEventListener("click",this.onMouseClick),this.supportsPointerEvents&&(this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("pointermove",this.onDocumentPointerMove):t.addEventListener("pointermove",this.onDocumentPointerMove),t.addEventListener("pointerdown",this.onPointerDown),t.addEventListener("pointerup",this.onPointerUp)),this.bindEventsOnBodyElement?t.ownerDocument.addEventListener("mousemove",this.onDocumentMouseMove):t.addEventListener("mousemove",this.onDocumentMouseMove),t.addEventListener("mousedown",this.onMouseDown),t.addEventListener("mouseup",this.onMouseUp),t.addEventListener("touchstart",this.onTouchStart,{passive:!0}),t.addEventListener("touchmove",this.onTouchMove,{passive:!0}),t.addEventListener("touchend",this.onTouchEnd,{passive:!0}),this.treatTouchEventsAsMouseEvents=!0}};const cu={type:"change"},$o={type:"start"},uu={type:"end"};class rb extends wi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ti.ROTATE,MIDDLE:Ti.DOLLY,RIGHT:Ti.PAN},this.touches={ONE:Ai.ROTATE,TWO:Ai.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(A){A.addEventListener("keydown",he),this._domElementKeyEvents=A},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",he),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(cu),i.update(),s=r.NONE},this.update=function(){const A=new U,F=new bi().setFromUnitVectors(e.up,new U(0,1,0)),ve=F.clone().invert(),ge=new U,Me=new bi,Ae=2*Math.PI;return function(){const Re=i.object.position;A.copy(Re).sub(i.target),A.applyQuaternion(F),o.setFromVector3(A),i.autoRotate&&s===r.NONE&&P(I()),i.enableDamping?(o.theta+=l.theta*i.dampingFactor,o.phi+=l.phi*i.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let De=i.minAzimuthAngle,je=i.maxAzimuthAngle;return isFinite(De)&&isFinite(je)&&(De<-Math.PI?De+=Ae:De>Math.PI&&(De-=Ae),je<-Math.PI?je+=Ae:je>Math.PI&&(je-=Ae),De<=je?o.theta=Math.max(De,Math.min(je,o.theta)):o.theta=o.theta>(De+je)/2?Math.max(De,o.theta):Math.min(je,o.theta)),o.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,o.phi)),o.makeSafe(),o.radius*=c,o.radius=Math.max(i.minDistance,Math.min(i.maxDistance,o.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),A.setFromSpherical(o),A.applyQuaternion(ve),Re.copy(i.target).add(A),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||ge.distanceToSquared(i.object.position)>a||8*(1-Me.dot(i.object.quaternion))>a?(i.dispatchEvent(cu),ge.copy(i.object.position),Me.copy(i.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",R),i.domElement.removeEventListener("pointerdown",C),i.domElement.removeEventListener("pointercancel",Y),i.domElement.removeEventListener("wheel",pe),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",ne),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",he),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new au,l=new au;let c=1;const u=new U;let f=!1;const h=new Ge,d=new Ge,g=new Ge,p=new Ge,m=new Ge,_=new Ge,M=new Ge,v=new Ge,b=new Ge,E=[],L={};function I(){return 2*Math.PI/60/60*i.autoRotateSpeed}function S(){return Math.pow(.95,i.zoomSpeed)}function P(A){l.theta-=A}function N(A){l.phi-=A}const se=function(){const A=new U;return function(ve,ge){A.setFromMatrixColumn(ge,0),A.multiplyScalar(-ve),u.add(A)}}(),ae=function(){const A=new U;return function(ve,ge){i.screenSpacePanning===!0?A.setFromMatrixColumn(ge,1):(A.setFromMatrixColumn(ge,0),A.crossVectors(i.object.up,A)),A.multiplyScalar(ve),u.add(A)}}(),V=function(){const A=new U;return function(ve,ge){const Me=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;A.copy(Ae).sub(i.target);let Ce=A.length();Ce*=Math.tan(i.object.fov/2*Math.PI/180),se(2*ve*Ce/Me.clientHeight,i.object.matrix),ae(2*ge*Ce/Me.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(se(ve*(i.object.right-i.object.left)/i.object.zoom/Me.clientWidth,i.object.matrix),ae(ge*(i.object.top-i.object.bottom)/i.object.zoom/Me.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function z(A){i.object.isPerspectiveCamera?c/=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*A)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(A){i.object.isPerspectiveCamera?c*=A:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/A)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function te(A){h.set(A.clientX,A.clientY)}function re(A){M.set(A.clientX,A.clientY)}function j(A){p.set(A.clientX,A.clientY)}function de(A){d.set(A.clientX,A.clientY),g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const F=i.domElement;P(2*Math.PI*g.x/F.clientHeight),N(2*Math.PI*g.y/F.clientHeight),h.copy(d),i.update()}function ce(A){v.set(A.clientX,A.clientY),b.subVectors(v,M),b.y>0?z(S()):b.y<0&&$(S()),M.copy(v),i.update()}function Ee(A){m.set(A.clientX,A.clientY),_.subVectors(m,p).multiplyScalar(i.panSpeed),V(_.x,_.y),p.copy(m),i.update()}function k(A){A.deltaY<0?$(S()):A.deltaY>0&&z(S()),i.update()}function fe(A){let F=!1;switch(A.code){case i.keys.UP:A.ctrlKey||A.metaKey||A.shiftKey?N(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,i.keyPanSpeed),F=!0;break;case i.keys.BOTTOM:A.ctrlKey||A.metaKey||A.shiftKey?N(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(0,-i.keyPanSpeed),F=!0;break;case i.keys.LEFT:A.ctrlKey||A.metaKey||A.shiftKey?P(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(i.keyPanSpeed,0),F=!0;break;case i.keys.RIGHT:A.ctrlKey||A.metaKey||A.shiftKey?P(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):V(-i.keyPanSpeed,0),F=!0;break}F&&(A.preventDefault(),i.update())}function _e(){if(E.length===1)h.set(E[0].pageX,E[0].pageY);else{const A=.5*(E[0].pageX+E[1].pageX),F=.5*(E[0].pageY+E[1].pageY);h.set(A,F)}}function H(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const A=.5*(E[0].pageX+E[1].pageX),F=.5*(E[0].pageY+E[1].pageY);p.set(A,F)}}function be(){const A=E[0].pageX-E[1].pageX,F=E[0].pageY-E[1].pageY,ve=Math.sqrt(A*A+F*F);M.set(0,ve)}function O(){i.enableZoom&&be(),i.enablePan&&H()}function K(){i.enableZoom&&be(),i.enableRotate&&_e()}function q(A){if(E.length==1)d.set(A.pageX,A.pageY);else{const ve=xe(A),ge=.5*(A.pageX+ve.x),Me=.5*(A.pageY+ve.y);d.set(ge,Me)}g.subVectors(d,h).multiplyScalar(i.rotateSpeed);const F=i.domElement;P(2*Math.PI*g.x/F.clientHeight),N(2*Math.PI*g.y/F.clientHeight),h.copy(d)}function oe(A){if(E.length===1)m.set(A.pageX,A.pageY);else{const F=xe(A),ve=.5*(A.pageX+F.x),ge=.5*(A.pageY+F.y);m.set(ve,ge)}_.subVectors(m,p).multiplyScalar(i.panSpeed),V(_.x,_.y),p.copy(m)}function Se(A){const F=xe(A),ve=A.pageX-F.x,ge=A.pageY-F.y,Me=Math.sqrt(ve*ve+ge*ge);v.set(0,Me),b.set(0,Math.pow(v.y/M.y,i.zoomSpeed)),z(b.y),M.copy(v)}function Te(A){i.enableZoom&&Se(A),i.enablePan&&oe(A)}function w(A){i.enableZoom&&Se(A),i.enableRotate&&q(A)}function C(A){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(A.pointerId),i.domElement.addEventListener("pointermove",B),i.domElement.addEventListener("pointerup",ne)),X(A),A.pointerType==="touch"?y(A):Q(A))}function B(A){i.enabled!==!1&&(A.pointerType==="touch"?x(A):ue(A))}function ne(A){Z(A),E.length===0&&(i.domElement.releasePointerCapture(A.pointerId),i.domElement.removeEventListener("pointermove",B),i.domElement.removeEventListener("pointerup",ne)),i.dispatchEvent(uu),s=r.NONE}function Y(A){Z(A)}function Q(A){let F;switch(A.button){case 0:F=i.mouseButtons.LEFT;break;case 1:F=i.mouseButtons.MIDDLE;break;case 2:F=i.mouseButtons.RIGHT;break;default:F=-1}switch(F){case Ti.DOLLY:if(i.enableZoom===!1)return;re(A),s=r.DOLLY;break;case Ti.ROTATE:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enablePan===!1)return;j(A),s=r.PAN}else{if(i.enableRotate===!1)return;te(A),s=r.ROTATE}break;case Ti.PAN:if(A.ctrlKey||A.metaKey||A.shiftKey){if(i.enableRotate===!1)return;te(A),s=r.ROTATE}else{if(i.enablePan===!1)return;j(A),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($o)}function ue(A){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;de(A);break;case r.DOLLY:if(i.enableZoom===!1)return;ce(A);break;case r.PAN:if(i.enablePan===!1)return;Ee(A);break}}function pe(A){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(A.preventDefault(),i.dispatchEvent($o),k(A),i.dispatchEvent(uu))}function he(A){i.enabled===!1||i.enablePan===!1||fe(A)}function y(A){switch(le(A),E.length){case 1:switch(i.touches.ONE){case Ai.ROTATE:if(i.enableRotate===!1)return;_e(),s=r.TOUCH_ROTATE;break;case Ai.PAN:if(i.enablePan===!1)return;H(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Ai.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;O(),s=r.TOUCH_DOLLY_PAN;break;case Ai.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;K(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent($o)}function x(A){switch(le(A),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;q(A),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;oe(A),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Te(A),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;w(A),i.update();break;default:s=r.NONE}}function R(A){i.enabled!==!1&&A.preventDefault()}function X(A){E.push(A)}function Z(A){delete L[A.pointerId];for(let F=0;F<E.length;F++)if(E[F].pointerId==A.pointerId){E.splice(F,1);return}}function le(A){let F=L[A.pointerId];F===void 0&&(F=new Ge,L[A.pointerId]=F),F.set(A.pageX,A.pageY)}function xe(A){const F=A.pointerId===E[0].pointerId?E[1]:E[0];return L[F.pointerId]}i.domElement.addEventListener("contextmenu",R),i.domElement.addEventListener("pointerdown",C),i.domElement.addEventListener("pointercancel",Y),i.domElement.addEventListener("wheel",pe,{passive:!1}),this.update()}}const ki=new U,fu=new lt,hu=new lt,du=new U,pu=new U;class sb{constructor(e={}){const t=this;let i,r,s,a;const o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:i,height:r}},this.render=function(d,g){d.matrixWorldAutoUpdate===!0&&d.updateMatrixWorld(),g.parent===null&&g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),fu.copy(g.matrixWorldInverse),hu.multiplyMatrices(g.projectionMatrix,fu),c(d,d,g),h(d)},this.setSize=function(d,g){i=d,r=g,s=i/2,a=r/2,l.style.width=d+"px",l.style.height=g+"px"};function c(d,g,p){if(d.isCSS2DObject){ki.setFromMatrixPosition(d.matrixWorld),ki.applyMatrix4(hu);const m=d.visible===!0&&ki.z>=-1&&ki.z<=1&&d.layers.test(p.layers)===!0;if(d.element.style.display=m===!0?"":"none",m===!0){d.onBeforeRender(t,g,p);const M=d.element;M.style.transform="translate(-50%,-50%) translate("+(ki.x*s+s)+"px,"+(-ki.y*a+a)+"px)",M.parentNode!==l&&l.appendChild(M),d.onAfterRender(t,g,p)}const _={distanceToCameraSquared:u(p,d)};o.objects.set(d,_)}for(let m=0,_=d.children.length;m<_;m++)c(d.children[m],g,p)}function u(d,g){return du.setFromMatrixPosition(d.matrixWorld),pu.setFromMatrixPosition(g.matrixWorld),du.distanceToSquared(pu)}function f(d){const g=[];return d.traverse(function(p){p.isCSS2DObject&&g.push(p)}),g}function h(d){const g=f(d).sort(function(m,_){if(m.renderOrder!==_.renderOrder)return _.renderOrder-m.renderOrder;const M=o.objects.get(m).distanceToCameraSquared,v=o.objects.get(_).distanceToCameraSquared;return M-v}),p=g.length;for(let m=0,_=g.length;m<_;m++)g[m].element.style.zIndex=p-m}}}const ob="/portfolio/assets/stars_milky_way-1fd005dd.jpg",ab="/portfolio/assets/earth_daymap-88ab060b.jpg",lb="/portfolio/assets/earth_normal_map-051f36fb.jpg",cb="/portfolio/assets/earth_nightmap-9894e83a.jpg",ub="/portfolio/assets/earth_specular_map-d8aefc72.jpg",fb="/portfolio/assets/moon_map-d1875bce.jpg";class hb{constructor(e,t,i,r,s){this.size=e,this.parent=t,this.atmosphereUniforms=s,this.atmosphereVertexShader=i,this.atmosphereFragmentShader=r,this.atmosphereGeometry=new Ks(this.size,32,32),this.atmosphere=new vn(this.atmosphereGeometry,new oh({uniforms:this.atmosphereUniforms,vertexShader:i,fragmentShader:r,side:Ft,blending:ha,transparent:!0})),this.parent.mesh.add(this.atmosphere)}update(){this.atmosphere.rotation.y-=this.parent.rotationSpeed}}class Ms{constructor(e,t,i,r,s,a,o,l,c,u,f,h){this.name=e,this.radius=t,this.orbit=i,this.position=r,this.tilt=s,this.rotationSpeed=a,this.orbitSpeed=o,this.uniforms=u,this.geometry=new Ks(this.radius,32,32),this.material=new oh({uniforms:this.uniforms,vertexShader:l,fragmentShader:c}),this.mesh=new vn(this.geometry,this.material),this.mesh.name=this.name,this.mesh.position.set(this.position.x,this.position.y,this.position.z),h?this.parent=h:this.parent=null,f?this.scene=f:this.scene=null,this.addEventListeners()}showAxishelper(){const e=new nb(3+this.radius);this.mesh.add(e)}setSolarSystem(e){this.solarSystem=e}getMesh(){return this.mesh}rotate(){this.mesh.rotation.y+=this.rotationSpeed}rotateOrbit(){this.orbitObject&&(this.orbitObject.rotation.y+=this.orbitSpeed)}setOrbitObject(e){this.orbitObject=e}addToParent(e){this.parent=e,this.parent.mesh.add(this.mesh)}addToScene(e){this.scene=e,this.scene.add(this.mesh)}addAtmosphere(e,t,i,r){this.atmosphere=new hb(e,this,t,i,r)}addEventListeners(){this.name==="earth"&&this.mesh.addEventListener("click",()=>{console.log(this.name),this.solarSystem&&this.solarSystem.getCurrentPlanet()!==this.name?this.solarSystem.setCurrentPlanet(this.name):this.solarSystem&&this.solarSystem.getCurrentPlanet()===this.name&&this.solarSystem.setCurrentPlanet(null)}),this.mesh.addEventListener("mouseover",()=>{}),this.mesh.addEventListener("mouseout",()=>{})}update(e){this.rotate(),this.rotateOrbit()}}class db{constructor(e,t,i,r,s,a,o,l,c,u){this.position=new U(0,0,0),this.name=e,this.scene=t,this.target=i,this.parent=r,this.fov=o,this.aspect=l,this.near=c,this.far=u,this.offset=s,this.camera=new Wt(this.fov,this.aspect,this.near,this.far),this.camera.name=this.name,this.camera.position.copy(this.position.copy(this.parent.position).add(this.offset)),this.camera.lookAt(this.position.copy(this.target.position).add(a)),r.add(this.camera)}show(){const e=new tb(this.camera);this.scene.add(e)}}function pb(n){const e=new sb;return e.setSize(window.innerWidth,window.innerHeight),e.domElement.style.position="absolute",e.domElement.style.top="0px",e.domElement.style.pointerEvents="none",e.domElement.className="css2dRenderer",n.appendChild(e.domElement),e}const mb=new U(120,10,25),gb=new U(0,0,10);var lh=(n=>(n.earth="earth",n.sun="sun",n.moon="moon",n))(lh||{});function _b(n){const e=new Zy;return e.background=n,e}function vb(n,e,t){const i=new qa({canvas:t,antialias:!0});i.setSize(window.innerWidth,window.innerHeight),i.setPixelRatio(window.devicePixelRatio);const r=new rb(e,i.domElement);return r.rotateSpeed=1,r.zoomSpeed=1.2,r.enableZoom=!0,r.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},r.minDistance=.1,r.maxDistance=1e3,i}function xb(n){const e=new Wt(75,window.innerWidth/window.innerHeight,.1,1e6);return e.position.set(-48,69,-50),e.name="camera",n.add(e),e}function yb(n,e){return new db("earthCamera",n,e,e.orbitObject,mb,gb,50,window.innerWidth/window.innerHeight,.1,100)}var bb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Mb(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var ch={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(bb,function(){var t=function(){function i(d){return a.appendChild(d.dom),d}function r(d){for(var g=0;g<a.children.length;g++)a.children[g].style.display=g===d?"block":"none";s=d}var s=0,a=document.createElement("div");a.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",a.addEventListener("click",function(d){d.preventDefault(),r(++s%a.children.length)},!1);var o=(performance||Date).now(),l=o,c=0,u=i(new t.Panel("FPS","#0ff","#002")),f=i(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=i(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:a,addPanel:i,showPanel:r,begin:function(){o=(performance||Date).now()},end:function(){c++;var d=(performance||Date).now();if(f.update(d-o,200),d>l+1e3&&(u.update(1e3*c/(d-l),100),l=d,c=0,h)){var g=performance.memory;h.update(g.usedJSHeapSize/1048576,g.jsHeapSizeLimit/1048576)}return d},update:function(){o=this.end()},domElement:a,setMode:r}};return t.Panel=function(i,r,s){var a=1/0,o=0,l=Math.round,c=l(window.devicePixelRatio||1),u=80*c,f=48*c,h=3*c,d=2*c,g=3*c,p=15*c,m=74*c,_=30*c,M=document.createElement("canvas");M.width=u,M.height=f,M.style.cssText="width:80px;height:48px";var v=M.getContext("2d");return v.font="bold "+9*c+"px Helvetica,Arial,sans-serif",v.textBaseline="top",v.fillStyle=s,v.fillRect(0,0,u,f),v.fillStyle=r,v.fillText(i,h,d),v.fillRect(g,p,m,_),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g,p,m,_),{dom:M,update:function(b,E){a=Math.min(a,b),o=Math.max(o,b),v.fillStyle=s,v.globalAlpha=1,v.fillRect(0,0,u,p),v.fillStyle=r,v.fillText(l(b)+" "+i+" ("+l(a)+"-"+l(o)+")",h,d),v.drawImage(M,g+c,p,m-c,_,g,p,m-c,_),v.fillRect(g+m-c,p,c,_),v.fillStyle=s,v.globalAlpha=.9,v.fillRect(g+m-c,p,c,l((1-b/E)*_))}}},t})})(ch);var Sb=ch.exports;const wb=Mb(Sb),Eb="/portfolio/assets/gameplanet_map-d94c950d.jpg",Tb=`#version 300 es \r
\r
// These uniforms and attributes are provided by threejs.\r
// If you want to add your own, look at https://threejs.org/docs/#api/en/materials/ShaderMaterial #Custom attributes and uniforms\r
// defines the precision\r
precision highp float;\r
\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
\r
uniform sampler2D u_normalMap;\r
\r
// default vertex attributes provided by Geometry and BufferGeometry\r
in vec3 position;\r
in vec3 normal;\r
in vec2 uv;\r
\r
out vec2 vUv;\r
out vec3 vPosition;\r
out vec3 vNormal;\r
//out vec3 vReflect;\r
\r
\r
// main function gets executed for every vertex\r
void main()\r
{\r
    // set the varying variables\r
    vUv = uv;\r
    vPosition = vec3(modelMatrix * vec4(position, 1.0));\r
    vNormal = mat3(transpose(inverse(modelMatrix))) * normal;\r
    //vReflect = reflect(normalize(position), normal);\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
}\r
   \r
`,Ab=`#version 300 es\r
\r
// defines the precision\r
precision highp float;\r
\r
// we have access to the same uniforms as in the vertex shader\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
uniform sampler2D u_texture;\r
uniform sampler2D u_nightTexture;\r
uniform sampler2D u_normalMap;\r
uniform sampler2D u_specularMap;\r
uniform vec3 u_lightPosition;\r
\r
in vec3 position;\r
in vec2 vUv;\r
in vec3 vPosition;\r
in vec3 vNormal;\r
//in vec3 vReflect;\r
\r
float lightMagnitude = 1.0;\r
float ambientReflectance = 0.2;\r
float diffuseReflectance = 1.5;\r
float specularReflectance = 0.8;\r
vec3 specularLight = vec3(.5, .5, .5);\r
\r
out vec4 fragColor;\r
\r
// main function gets executed for every pixel\r
\r
vec3 calcNormal(){\r
    vec3 normalMapColor = texture(u_normalMap, vUv).rgb;\r
    vec3 normalDirection = normalize(normalMapColor * 2.0 - 1.0);\r
    mat3 tangentToWorld = mat3(\r
        vec3(1.0, 0.0, 0.0),\r
        vec3(0.0, 1.0, 0.0),\r
        vec3(0.0, 0.0, 1.0)\r
    );\r
    vec3 worldNormal = normalize(tangentToWorld * normalDirection);\r
    return worldNormal;\r
}\r
\r
void main() {\r
    vec3 n = normalize(vNormal);\r
\r
    vec3 l = normalize(u_lightPosition - vPosition);\r
\r
    vec3 r = reflect(-l, n);\r
    vec3 v = normalize(cameraPosition - vPosition);\r
\r
    float lambertian = max(dot(n, l), 0.0);\r
    float specular = pow(max(dot(r,v), 0.0), 32.0) * lightMagnitude;\r
\r
    float facing = dot(normalize(vNormal), l);\r
    float diffuseColor =  lambertian * diffuseReflectance;\r
\r
    vec3 specularColor = specularLight * specularReflectance * specular;\r
\r
\r
    float atmosphere = max(dot(normalize(vNormal), l), 0.0);\r
    vec3 atmosphereColor = vec3(0.3,0.6,1.0)*pow(atmosphere, 1.5)*0.3;\r
\r
\r
    vec3 color = texture(u_texture,vUv).rgb * (diffuseColor  + ambientReflectance + atmosphereColor) /* + specularColor * texture(u_specularMap, vUv).rgb */;\r
    fragColor = vec4(color, 1.0);\r
}\r
`,Cb=`#version 300 es \r
\r
// These uniforms and attributes are provided by threejs.\r
// If you want to add your own, look at https://threejs.org/docs/#api/en/materials/ShaderMaterial #Custom attributes and uniforms\r
// defines the precision\r
precision highp float;\r
\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
\r
uniform sampler2D u_normalMap;\r
\r
// default vertex attributes provided by Geometry and BufferGeometry\r
in vec3 position;\r
in vec3 normal;\r
in vec2 uv;\r
\r
out vec2 vUv;\r
out vec3 vPosition;\r
out vec3 vNormal;\r
//out vec3 vReflect;\r
\r
\r
// main function gets executed for every vertex\r
void main()\r
{\r
    // set the varying variables\r
    vUv = uv;\r
    vPosition = vec3(modelMatrix * vec4(position, 1.0));\r
    vNormal = mat3(transpose(inverse(modelMatrix))) * normal;\r
    //vReflect = reflect(normalize(position), normal);\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
}\r
   \r
`,Pb=`#version 300 es\r
\r
// defines the precision\r
precision highp float;\r
\r
// we have access to the same uniforms as in the vertex shader\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
uniform sampler2D u_texture;\r
uniform sampler2D u_normalMap;\r
uniform vec3 u_lightPosition;\r
\r
in vec3 position;\r
in vec2 vUv;\r
in vec3 vPosition;\r
in vec3 vNormal;\r
//in vec3 vReflect;\r
\r
\r
float lightMagnitude = 50.0;\r
float ambientReflectance = 0.1;\r
float diffuseReflectance = 1.;\r
float specularReflectance = 0.2;\r
vec3 specularLight = vec3(1.0, 1.0, 1.0);\r
\r
\r
\r
out vec4 fragColor;\r
\r
// main function gets executed for every pixel\r
\r
\r
\r
void main()\r
{\r
    vec3 n = normalize(vNormal);\r
\r
    vec3 l = normalize(u_lightPosition - vPosition);\r
\r
    float diffuse = max(dot(n, l), 0.0);\r
    \r
    vec3 diffuseColor = texture(u_texture, vUv).rgb * diffuse * diffuseReflectance;    \r
    vec3 ambient = texture(u_texture, vUv).rgb * ambientReflectance;\r
    \r
\r
    vec3 color =  diffuseColor + ambient;\r
    fragColor = vec4(color, 1.0);\r
}\r
`,Lb=`#version 300 es \r
\r
// These uniforms and attributes are provided by threejs.\r
// If you want to add your own, look at https://threejs.org/docs/#api/en/materials/ShaderMaterial #Custom attributes and uniforms\r
// defines the precision\r
precision highp float;\r
\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
\r
uniform sampler2D u_normalMap;\r
\r
// default vertex attributes provided by Geometry and BufferGeometry\r
in vec3 position;\r
in vec3 normal;\r
in vec2 uv;\r
\r
out vec2 vUv;\r
out vec3 vPosition;\r
out vec3 vNormal;\r
//out vec3 vReflect;\r
\r
\r
// main function gets executed for every vertex\r
void main()\r
{\r
    // set the varying variables\r
    vUv = uv;\r
    vPosition = vec3(modelMatrix * vec4(position, 1.0));\r
    vNormal = mat3(transpose(inverse(modelMatrix))) * normal;\r
    //vReflect = reflect(normalize(position), normal);\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
}\r
   \r
`,Rb=`#version 300 es\r
\r
// defines the precision\r
precision highp float;\r
\r
// we have access to the same uniforms as in the vertex shader\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
uniform sampler2D u_texture;\r
uniform sampler2D u_normalMap;\r
uniform vec3 u_lightPosition;\r
\r
in vec3 position;\r
in vec2 vUv;\r
in vec3 vPosition;\r
in vec3 vNormal;\r
//in vec3 vReflect;\r
\r
\r
float lightMagnitude = 50.0;\r
float ambientReflectance = 0.1;\r
float diffuseReflectance = 1.;\r
float specularReflectance = 0.2;\r
vec3 specularLight = vec3(1.0, 1.0, 1.0);\r
\r
\r
\r
out vec4 fragColor;\r
\r
// main function gets executed for every pixel\r
\r
\r
\r
void main()\r
{\r
    vec3 n = normalize(vNormal);\r
\r
    vec3 l = normalize(u_lightPosition - vPosition);\r
\r
    float diffuse = max(dot(n, l), 0.0);\r
    \r
    vec3 diffuseColor = texture(u_texture, vUv).rgb * diffuse * diffuseReflectance;    \r
    vec3 ambient = texture(u_texture, vUv).rgb * ambientReflectance;\r
    \r
\r
    vec3 color =  diffuseColor + ambient;\r
    fragColor = vec4(color, 1.0);\r
}\r
`,Db=`#version 300 es \r
\r
// These uniforms and attributes are provided by threejs.\r
// If you want to add your own, look at https://threejs.org/docs/#api/en/materials/ShaderMaterial #Custom attributes and uniforms\r
// defines the precision\r
precision highp float;\r
\r
// = object.matrixWorld\r
uniform mat4 modelMatrix;\r
\r
// = camera.matrixWorldInverse * object.matrixWorld\r
uniform mat4 modelViewMatrix;\r
\r
// = camera.projectionMatrix\r
uniform mat4 projectionMatrix;\r
\r
// = camera.matrixWorldInverse\r
uniform mat4 viewMatrix;\r
\r
// = inverse transpose of modelViewMatrix\r
uniform mat3 normalMatrix;\r
\r
// = camera position in world space\r
uniform vec3 cameraPosition;\r
\r
\r
uniform sampler2D u_normalMap;\r
\r
uniform float u_time;\r
uniform vec4 u_resolution;\r
uniform float u_progress;\r
uniform sampler2D u_texture;\r
\r
out vec2 vUv;\r
out vec3 vPosition;\r
\r
in vec3 position;\r
in vec3 normal;\r
in vec2 uv;\r
\r
\r
// main function gets executed for every vertex\r
void main()\r
{\r
    // set the varying variables\r
    vUv = uv;\r
    vPosition = position;\r
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\r
\r
}\r
`,Ib=`#version 300 es\r
\r
// defines the precision\r
precision highp float;\r
\r
//\r
// Description : Array and textureless GLSL 2D/3D/4D simplex \r
//               noise functions.\r
//      Author : Ian McEwan, Ashima Arts.\r
//  Maintainer : stegu\r
//     Lastmod : 20110822 (ijm)\r
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.\r
//               Distributed under the MIT License. See LICENSE file.\r
//               https://github.com/ashima/webgl-noise\r
//               https://github.com/stegu/webgl-noise\r
// \r
\r
vec4 mod289(vec4 x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
float mod289(float x) {\r
    return x - floor(x * (1.0 / 289.0)) * 289.0;\r
}\r
\r
vec4 permute(vec4 x) {\r
    return mod289(((x * 34.0) + 10.0) * x);\r
}\r
\r
float permute(float x) {\r
    return mod289(((x * 34.0) + 10.0) * x);\r
}\r
\r
vec4 taylorInvSqrt(vec4 r) {\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
\r
float taylorInvSqrt(float r) {\r
    return 1.79284291400159 - 0.85373472095314 * r;\r
}\r
\r
vec4 grad4(float j, vec4 ip) {\r
    const vec4 ones = vec4(1.0, 1.0, 1.0, -1.0);\r
    vec4 p, s;\r
\r
    p.xyz = floor(fract(vec3(j) * ip.xyz) * 7.0) * ip.z - 1.0;\r
    p.w = 1.5 - dot(abs(p.xyz), ones.xyz);\r
    s = vec4(lessThan(p, vec4(0.0)));\r
    p.xyz = p.xyz + (s.xyz * 2.0 - 1.0) * s.www;\r
\r
    return p;\r
}\r
\r
// (sqrt(5) - 1)/4 = F4, used once below\r
#define F4 0.309016994374947451\r
\r
float snoise(vec4 v) {\r
    const vec4 C = vec4(0.138196601125011,  // (5 - sqrt(5))/20  G4\r
    0.276393202250021,  // 2 * G4\r
    0.414589803375032,  // 3 * G4\r
    -0.447213595499958); // -1 + 4 * G4\r
\r
// First corner\r
    vec4 i = floor(v + dot(v, vec4(F4)));\r
    vec4 x0 = v - i + dot(i, C.xxxx);\r
\r
// Other corners\r
\r
// Rank sorting originally contributed by Bill Licea-Kane, AMD (formerly ATI)\r
    vec4 i0;\r
    vec3 isX = step(x0.yzw, x0.xxx);\r
    vec3 isYZ = step(x0.zww, x0.yyz);\r
//  i0.x = dot( isX, vec3( 1.0 ) );\r
    i0.x = isX.x + isX.y + isX.z;\r
    i0.yzw = 1.0 - isX;\r
//  i0.y += dot( isYZ.xy, vec2( 1.0 ) );\r
    i0.y += isYZ.x + isYZ.y;\r
    i0.zw += 1.0 - isYZ.xy;\r
    i0.z += isYZ.z;\r
    i0.w += 1.0 - isYZ.z;\r
\r
  // i0 now contains the unique values 0,1,2,3 in each channel\r
    vec4 i3 = clamp(i0, 0.0, 1.0);\r
    vec4 i2 = clamp(i0 - 1.0, 0.0, 1.0);\r
    vec4 i1 = clamp(i0 - 2.0, 0.0, 1.0);\r
\r
  //  x0 = x0 - 0.0 + 0.0 * C.xxxx\r
  //  x1 = x0 - i1  + 1.0 * C.xxxx\r
  //  x2 = x0 - i2  + 2.0 * C.xxxx\r
  //  x3 = x0 - i3  + 3.0 * C.xxxx\r
  //  x4 = x0 - 1.0 + 4.0 * C.xxxx\r
    vec4 x1 = x0 - i1 + C.xxxx;\r
    vec4 x2 = x0 - i2 + C.yyyy;\r
    vec4 x3 = x0 - i3 + C.zzzz;\r
    vec4 x4 = x0 + C.wwww;\r
\r
// Permutations\r
    i = mod289(i);\r
    float j0 = permute(permute(permute(permute(i.w) + i.z) + i.y) + i.x);\r
    vec4 j1 = permute(permute(permute(permute(i.w + vec4(i1.w, i2.w, i3.w, 1.0)) + i.z + vec4(i1.z, i2.z, i3.z, 1.0)) + i.y + vec4(i1.y, i2.y, i3.y, 1.0)) + i.x + vec4(i1.x, i2.x, i3.x, 1.0));\r
\r
// Gradients: 7x7x6 points over a cube, mapped onto a 4-cross polytope\r
// 7*7*6 = 294, which is close to the ring size 17*17 = 289.\r
    vec4 ip = vec4(1.0 / 294.0, 1.0 / 49.0, 1.0 / 7.0, 0.0);\r
\r
    vec4 p0 = grad4(j0, ip);\r
    vec4 p1 = grad4(j1.x, ip);\r
    vec4 p2 = grad4(j1.y, ip);\r
    vec4 p3 = grad4(j1.z, ip);\r
    vec4 p4 = grad4(j1.w, ip);\r
\r
// Normalise gradients\r
    vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));\r
    p0 *= norm.x;\r
    p1 *= norm.y;\r
    p2 *= norm.z;\r
    p3 *= norm.w;\r
    p4 *= taylorInvSqrt(dot(p4, p4));\r
\r
// Mix contributions from the five corners\r
    vec3 m0 = max(0.6 - vec3(dot(x0, x0), dot(x1, x1), dot(x2, x2)), 0.0);\r
    vec2 m1 = max(0.6 - vec2(dot(x3, x3), dot(x4, x4)), 0.0);\r
    m0 = m0 * m0;\r
    m1 = m1 * m1;\r
    return 49.0 * (dot(m0 * m0, vec3(dot(p0, x0), dot(p1, x1), dot(p2, x2))) + dot(m1 * m1, vec2(dot(p3, x3), dot(p4, x4))));\r
\r
}\r
\r
uniform float u_time;\r
\r
in vec3 vPosition;\r
\r
out vec4 fragColor;\r
\r
float fbm(vec4 p) {\r
\r
    float sum = 0.0;\r
    for(int i = 0; i < 6; i++) {\r
        float freq = pow(2., float(i));\r
        float amp = pow(.8, float(i));\r
        sum += amp * snoise(p * freq);\r
    }\r
\r
    return sum;\r
}\r
\r
vec3 rgb2hsv(vec3 c)\r
{\r
    vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);\r
    vec4 p = mix(vec4(c.bg, K.wz), vec4(c.gb, K.xy), step(c.b, c.g));\r
    vec4 q = mix(vec4(p.xyw, c.r), vec4(c.r, p.yzx), step(p.x, c.r));\r
\r
    float d = q.x - min(q.w, q.y);\r
    float e = 1.0e-10;\r
    return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), d / (q.x + e), q.x);\r
}\r
\r
vec3 hsv2rgb(vec3 c)\r
{\r
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);\r
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);\r
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);\r
}\r
\r
\r
\r
void main() {\r
\r
    //color based on noise\r
    vec4 p = vec4(vPosition * 0.3, u_time * 0.05);\r
\r
    float ln = fbm(p);\r
\r
    float n = snoise(vec4(vPosition * 0.3, u_time * 0.4));\r
\r
    //color = random color in range from yellow to red * noise\r
    vec3 baseColor = mix(vec3(1.0, 0.0, 0.0), vec3(1., .8, 0.0), ln);\r
\r
    //convert the base color to HSV\r
    vec3 hsv = rgb2hsv(baseColor);\r
\r
    //change the value based on the noise value\r
    hsv.z *= mix(0.5, .7, ln);\r
\r
    //convert the color back to RGB\r
    vec3 color = hsv2rgb(hsv);\r
\r
    \r
\r
\r
    //fragColor = vec4(r+n, g+n, b+n, 1.);\r
    //fragColor = vec4(x, y, z, 1.);\r
    //fragColor = vec4(n, n, n, 1.);\r
    fragColor = vec4(color, 1.);\r
    //fragColor = vec4(ln, ln, ln, 1.);\r
\r
}\r
`;class Ob{constructor(e,t){this.currentPlanet=null,this.scene=e,this.planets=t,t.map(o=>{o.setSolarSystem(this)});const i=new mt;i.name="solarSystem",i.position.set(0,0,0),i.add(t[0].getMesh());const r=new mt;r.name="earthOrbit",r.add(t[1].getMesh()),t[1].setOrbitObject(r),i.add(r);const s=new mt;s.name="moonOrbit",s.position.copy(t[1].position),s.add(t[2].getMesh()),t[2].setOrbitObject(s),r.add(s);const a=new mt;a.name="gamePlanetOrbit",a.add(t[3].getMesh()),t[3].setOrbitObject(a),i.add(a),e.add(i)}getCurrentPlanet(){return this.currentPlanet}setCurrentPlanet(e){this.currentPlanet=e}}const Fb=10,Nb=0,Ub=0,zb=0,Bb=6.371,mu=147.105052,Gb=1e-4,kb=.0365,Vb=1.7374,gu=38.44*.8+6,Hb=.0028,Wb=.0365,jb=5.212,_u=74,Xb=5e-5,qb=.005,Yb=Fa({__name:"Universe",setup(n){const e=Vm();let t=0;const i=new U(0,0,0),r=new U(0,0,0);let s;s={u_time:{value:0}};const a=new U(23.5,0,0),o=new U(mu,0,0);let l;l={u_texture:{value:new ai().load(ab)},u_normalMap:{value:new ai().load(lb)},u_lightPosition:{value:i},u_nightTexture:{value:new ai().load(cb)},u_specularMap:{value:new ai().load(ub)}};const c=new U(0,0,0),u=new U(gu,0,0);let f;f={u_texture:{value:new ai().load(fb)},u_lightPosition:{value:i}};const h=new U(12,0,1),d=new U(_u,0,0);let g;g={u_texture:{value:new ai().load(Eb)},u_lightPosition:{value:i}};const p=_b(new ai().load(ob));let m;const _=new Ms("sun",Fb,Nb,i,r,zb,Ub,Db,Ib,s,p),M=new Ms("earth",Bb,mu,o,a,kb,Gb,Tb,Ab,l,null,_),v=new Ms("moon",Vb,gu,u,c,Wb,Hb,Cb,Pb,f,null,M),b=new Ms("game",jb,_u,d,h,qb,Xb,Lb,Rb,g,null,_);m=[_,M,v,b];const E=new Ob(p,m),L=xb(p),I=yb(p,M);let S,P,N,se,ae;const V=new wb;Zu(()=>{S=document.getElementById("canvas"),P=document.getElementById("overlay"),ae=pb(P),N=vb(p,L,S),se=new ib(N,L,N.domElement),E.planets.forEach($=>{se.add($.mesh),$.name==="game"&&$.mesh.addEventListener("click",()=>{e.push("/game")})}),z()});function z(){switch(t+=.01,E.currentPlanet){case lh.earth:requestAnimationFrame(z),P.className="detailView",N.render(p,I.camera),ae.render(p,I.camera),se.camera=I.camera,se.update(),V.update(),M.update(t),v.update(t);break;default:requestAnimationFrame(z),P.className="overlay",N.render(p,L),ae.render(p,L),se.camera=L,se.update(),_.material.uniforms.u_time.value=t,E.planets.map($=>{$.update(t)}),V.update();break}}return($,te)=>(fi(),Hi(Yt,null,[te[0]||(te[0]=rt("div",{id:"overlay",class:"overview"},null,-1)),te[1]||(te[1]=rt("canvas",{id:"canvas"},null,-1))],64))}});const Zb={data(){return{grid:Array.from({length:64},()=>Array(64).fill({color:null})),isDrawing:null,intervalId:null}},methods:{toggleCell(n,e,t=null,i=!1){if(this.isDrawing||i){const r=t||this.isDrawing;this.grid[n][e]={color:r}}},getNeighborCounts(n,e){const t={blue:0,red:0},i=[[-1,-1],[-1,0],[-1,1],[0,-1],[0,1],[1,-1],[1,0],[1,1]];for(const[r,s]of i){const a=n+r,o=e+s;if(a>=0&&a<this.grid.length&&o>=0&&o<this.grid[0].length){const l=this.grid[a][o];l.color&&t[l.color]++}}return t},nextGeneration(){const n=this.grid.map((e,t)=>e.map((i,r)=>{const s=this.getNeighborCounts(t,r),a=s.blue+s.red,o=s.blue>s.red?"blue":s.red>s.blue?"red":null;return i.color?{color:a===2||a===3?i.color:null}:a===3?o?{color:o}:{color:Math.random()<.5?"blue":"red"}:{color:null}}));this.grid=n},startGame(){this.intervalId||(this.intervalId=setInterval(this.nextGeneration,100))},stopGame(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},clearGrid(){this.grid=Array.from({length:64},()=>Array(64).fill({color:null}))}}},$b={id:"app"},Kb={class:"main"},Jb={class:"rules"},Qb={class:"controls"},eM={class:"container"},tM=["onMouseover","onMousedown"];function nM(n,e,t,i,r,s){return fi(),Hi("div",$b,[e[9]||(e[9]=rt("div",{class:"header"},[rt("h1",null,"Conway's Game of Life")],-1)),rt("div",Kb,[rt("div",Jb,[e[7]||(e[7]=rt("h2",null,"Rules:",-1)),e[8]||(e[8]=rt("ul",null,[rt("li",null,"Any live cell with two or three neighbors survives."),rt("li",null,"Any dead cell with three live neighbors becomes a live cell."),rt("li",null,"All other live cells die in the next generation. Similarly, all other dead cells stay dead."),rt("li",null,"Right-click to add red cells for a second team."),rt("li",null,"New cells are assigned to the player with the majority of contributing neighbors. In a tie, the new cell is split 50/50.")],-1)),rt("div",Qb,[rt("button",{onClick:e[0]||(e[0]=(...a)=>s.startGame&&s.startGame(...a))},"Start"),rt("button",{onClick:e[1]||(e[1]=(...a)=>s.stopGame&&s.stopGame(...a))},"Stop"),rt("button",{onClick:e[2]||(e[2]=(...a)=>s.clearGrid&&s.clearGrid(...a))},"Clear")])]),rt("div",eM,[rt("div",{class:"grid",onMousedown:[e[3]||(e[3]=hr(a=>r.isDrawing="blue",["left"])),e[4]||(e[4]=hr(a=>r.isDrawing="red",["right","prevent"]))],onMouseup:e[5]||(e[5]=a=>r.isDrawing=null),onContextmenu:e[6]||(e[6]=hr(()=>{},["prevent"]))},[(fi(!0),Hi(Yt,null,tl(r.grid,(a,o)=>(fi(),Hi("div",{key:"row-"+o,class:"row"},[(fi(!0),Hi(Yt,null,tl(a,(l,c)=>(fi(),Hi("div",{key:"cell-"+c,class:zs(["cell",{alive:l.color==="blue",enemy:l.color==="red"}]),onMouseover:u=>s.toggleCell(o,c),onMousedown:[hr(u=>s.toggleCell(o,c,"blue",!0),["left"]),hr(u=>s.toggleCell(o,c,"red",!0),["right","prevent"])]},null,42,tM))),128))]))),128))],32)])])])}const iM=Ff(Zb,[["render",nM],["__scopeId","data-v-9fe39b46"]]),rM=Gm({history:_m("/portfolio/"),routes:[{path:"/",name:"home",component:Yb},{path:"/game",name:"game",component:iM}]});const uh=zp(Wm);uh.use(rM);uh.mount("#app");
