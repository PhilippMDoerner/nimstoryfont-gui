/*
 * This file was automatically generated.
 * DO NOT MODIFY BY HAND.
 * Run `yarn special-lint-fix` to update
 */
"use strict";function t(r,{instancePath:a="",parentData:e,parentDataProperty:n,rootData:o=r}={}){let s=null,i=0;const l=i;let p=!1;const c=i;if(i==i)if(r&&"object"==typeof r&&!Array.isArray(r)){const t=i;for(const t in r)if("encoding"!==t&&"mimetype"!==t){const r={params:{additionalProperty:t}};null===s?s=[r]:s.push(r),i++;break}if(t===i){if(void 0!==r.encoding){let t=r.encoding;const a=i;if(!1!==t&&"base64"!==t){const t={params:{}};null===s?s=[t]:s.push(t),i++}var u=a===i}else u=!0;if(u)if(void 0!==r.mimetype){const t=i;if("string"!=typeof r.mimetype){const t={params:{type:"string"}};null===s?s=[t]:s.push(t),i++}u=t===i}else u=!0}}else{const t={params:{type:"object"}};null===s?s=[t]:s.push(t),i++}var f=c===i;if(p=p||f,!p){const t=i;if(!(r instanceof Function)){const t={params:{}};null===s?s=[t]:s.push(t),i++}f=t===i,p=p||f}if(!p){const r={params:{}};return null===s?s=[r]:s.push(r),i++,t.errors=s,!1}return i=l,null!==s&&(l?s.length=l:s=null),t.errors=s,0===i}function r(a,{instancePath:e="",parentData:n,parentDataProperty:o,rootData:s=a}={}){let i=null,l=0;if(0===l){if(!a||"object"!=typeof a||Array.isArray(a))return r.errors=[{params:{type:"object"}}],!1;{const n=l;for(const t in a)if("binary"!==t&&"dataUrl"!==t)return r.errors=[{params:{additionalProperty:t}}],!1;if(n===l){if(void 0!==a.binary){const t=l;if("boolean"!=typeof a.binary)return r.errors=[{params:{type:"boolean"}}],!1;var p=t===l}else p=!0;if(p)if(void 0!==a.dataUrl){const r=l;t(a.dataUrl,{instancePath:e+"/dataUrl",parentData:a,parentDataProperty:"dataUrl",rootData:s})||(i=null===i?t.errors:i.concat(t.errors),l=i.length),p=r===l}else p=!0}}}return r.errors=i,0===l}function a(t,{instancePath:e="",parentData:n,parentDataProperty:o,rootData:s=t}={}){let i=null,l=0;return r(t,{instancePath:e,parentData:n,parentDataProperty:o,rootData:s})||(i=null===i?r.errors:i.concat(r.errors),l=i.length),a.errors=i,0===l}module.exports=a,module.exports.default=a;