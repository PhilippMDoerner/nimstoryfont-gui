'use strict';

var B=Object.create;var R=Object.defineProperty;var b=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var h=Object.getPrototypeOf,w=Object.prototype.hasOwnProperty;var I=(r,e)=>()=>(e||r((e={exports:{}}).exports,e),e.exports);var E=(r,e,t,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of C(e))!w.call(r,a)&&a!==t&&R(r,a,{get:()=>e[a],enumerable:!(n=b(e,a))||n.enumerable});return r};var P=(r,e,t)=>(t=r!=null?B(h(r)):{},E(e||!r||!r.__esModule?R(t,"default",{value:r,enumerable:!0}):t,r));var x=I(T=>{Object.defineProperty(T,"__esModule",{value:!0}),T.isEqual=function(){var r=Object.prototype.toString,e=Object.getPrototypeOf,t=Object.getOwnPropertySymbols?function(n){return Object.keys(n).concat(Object.getOwnPropertySymbols(n))}:Object.keys;return function(n,a){return function i(o,s,d){var y,g,p,A=r.call(o),F=r.call(s);if(o===s)return !0;if(o==null||s==null)return !1;if(d.indexOf(o)>-1&&d.indexOf(s)>-1)return !0;if(d.push(o,s),A!=F||(y=t(o),g=t(s),y.length!=g.length||y.some(function(l){return !i(o[l],s[l],d)})))return !1;switch(A.slice(8,-1)){case"Symbol":return o.valueOf()==s.valueOf();case"Date":case"Number":return +o==+s||+o!=+o&&+s!=+s;case"RegExp":case"Function":case"String":case"Boolean":return ""+o==""+s;case"Set":case"Map":y=o.entries(),g=s.entries();do if(!i((p=y.next()).value,g.next().value,d))return !1;while(!p.done);return !0;case"ArrayBuffer":o=new Uint8Array(o),s=new Uint8Array(s);case"DataView":o=new Uint8Array(o.buffer),s=new Uint8Array(s.buffer);case"Float32Array":case"Float64Array":case"Int8Array":case"Int16Array":case"Int32Array":case"Uint8Array":case"Uint16Array":case"Uint32Array":case"Uint8ClampedArray":case"Arguments":case"Array":if(o.length!=s.length)return !1;for(p=0;p<o.length;p++)if((p in o||p in s)&&(p in o!=p in s||!i(o[p],s[p],d)))return !1;return !0;case"Object":return i(e(o),e(s),d);default:return !1}}(n,a,[])}}();});function u(r){return r.replace(/_/g," ").replace(/-/g," ").replace(/\./g," ").replace(/([^\n])([A-Z])([a-z])/g,(e,t,n,a)=>`${t} ${n}${a}`).replace(/([a-z])([A-Z])/g,(e,t,n)=>`${t} ${n}`).replace(/([a-z])([0-9])/gi,(e,t,n)=>`${t} ${n}`).replace(/([0-9])([a-z])/gi,(e,t,n)=>`${t} ${n}`).replace(/(\s|^)(\w)/g,(e,t,n)=>`${t}${n.toUpperCase()}`).replace(/ +/g," ").trim()}var c=P(x()),S=r=>r.map(e=>typeof e<"u").filter(Boolean).length,O=(r,e)=>{let{exists:t,eq:n,neq:a,truthy:i}=r;if(S([t,n,a,i])>1)throw new Error(`Invalid conditional test ${JSON.stringify({exists:t,eq:n,neq:a})}`);if(typeof n<"u")return (0, c.isEqual)(e,n);if(typeof a<"u")return !(0, c.isEqual)(e,a);if(typeof t<"u"){let s=typeof e<"u";return t?s:!s}return (typeof i>"u"?!0:i)?!!e:!e},v=(r,e,t)=>{if(!r.if)return !0;let{arg:n,global:a}=r.if;if(S([n,a])!==1)throw new Error(`Invalid conditional value ${JSON.stringify({arg:n,global:a})}`);let i=n?e[n]:t[a];return O(r.if,i)};var L=r=>r.toLowerCase().replace(/[ ’–—―′¿'`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,"-").replace(/-+/g,"-").replace(/^-+/,"").replace(/-+$/,""),m=(r,e)=>{let t=L(r);if(t==="")throw new Error(`Invalid ${e} '${r}', must include alphanumeric characters`);return t},N=(r,e)=>`${m(r,"kind")}${e?`--${m(e,"name")}`:""}`,M=r=>u(r);function f(r,e){return Array.isArray(e)?e.includes(r):r.match(e)}function G(r,{includeStories:e,excludeStories:t}){return r!=="__esModule"&&(!e||f(r,e))&&(!t||!f(r,t))}var z=(r,{rootSeparator:e,groupSeparator:t})=>{let[n,a]=r.split(e,2),i=(a||r).split(t).filter(o=>!!o);return {root:a?n:null,groups:i}};

exports.includeConditionalArg = v;
exports.isExportStory = G;
exports.parseKind = z;
exports.sanitize = L;
exports.storyNameFromExport = M;
exports.toId = N;
