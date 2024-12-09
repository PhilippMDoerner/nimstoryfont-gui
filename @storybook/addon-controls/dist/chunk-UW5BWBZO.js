var __require=(x=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(x,{get:(a,b)=>(typeof require<"u"?require:a)[b]}):x)(function(x){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+x+'" is not supported')});var __create=Object.create,__defProp=Object.defineProperty,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropNames=Object.getOwnPropertyNames,__getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty,__require2=(x=>typeof __require<"u"?__require:typeof Proxy<"u"?new Proxy(x,{get:(a,b)=>(typeof __require<"u"?__require:a)[b]}):x)(function(x){if(typeof __require<"u")return __require.apply(this,arguments);throw Error('Dynamic require of "'+x+'" is not supported')}),__commonJS=(cb,mod)=>function(){return mod||(0, cb[__getOwnPropNames(cb)[0]])((mod={exports:{}}).exports,mod),mod.exports},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to},__toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));function debounce(func,debounceMs,{signal,edges}={}){let pendingThis,pendingArgs=null,leading=edges!=null&&edges.includes("leading"),trailing=edges==null||edges.includes("trailing"),invoke=()=>{pendingArgs!==null&&(func.apply(pendingThis,pendingArgs),pendingThis=void 0,pendingArgs=null);},onTimerEnd=()=>{trailing&&invoke(),cancel();},timeoutId=null,schedule=()=>{timeoutId!=null&&clearTimeout(timeoutId),timeoutId=setTimeout(()=>{timeoutId=null,onTimerEnd();},debounceMs);},cancelTimer=()=>{timeoutId!==null&&(clearTimeout(timeoutId),timeoutId=null);},cancel=()=>{cancelTimer(),pendingThis=void 0,pendingArgs=null;},flush=()=>{cancelTimer(),invoke();},debounced=function(...args){if(signal?.aborted)return;pendingThis=this,pendingArgs=args;let isFirstCall=timeoutId==null;schedule(),leading&&isFirstCall&&invoke();};return debounced.schedule=schedule,debounced.cancel=cancel,debounced.flush=flush,signal?.addEventListener("abort",cancel,{once:!0}),debounced}function debounce2(func,debounceMs=0,options={}){typeof options!="object"&&(options={});let{signal,leading=!1,trailing=!0,maxWait}=options,edges=Array(2);leading&&(edges[0]="leading"),trailing&&(edges[1]="trailing");let result,pendingAt=null,_debounced=debounce(function(...args){result=func.apply(this,args),pendingAt=null;},debounceMs,{signal,edges}),debounced=function(...args){if(maxWait!=null){if(pendingAt===null)pendingAt=Date.now();else if(Date.now()-pendingAt>=maxWait)return result=func.apply(this,args),pendingAt=Date.now(),_debounced.cancel(),_debounced.schedule(),result}return _debounced.apply(this,args),result},flush=()=>(_debounced.flush(),result);return debounced.cancel=_debounced.cancel,debounced.flush=flush,debounced}function uniq(arr){return Array.from(new Set(arr))}function pickBy(obj,shouldPick){let result={},objEntries=Object.entries(obj);for(let i=0;i<objEntries.length;i++){let[key,value]=objEntries[i];shouldPick(value,key)&&(result[key]=value);}return result}function isTypedArray(x){return ArrayBuffer.isView(x)&&!(x instanceof DataView)}function isPrimitive(value){return value==null||typeof value!="object"&&typeof value!="function"}function cloneDeep(obj){return cloneDeepImpl(obj)}function cloneDeepImpl(obj,stack=new Map){if(isPrimitive(obj))return obj;if(stack.has(obj))return stack.get(obj);if(Array.isArray(obj)){let result=new Array(obj.length);stack.set(obj,result);for(let i=0;i<obj.length;i++)result[i]=cloneDeepImpl(obj[i],stack);return Object.prototype.hasOwnProperty.call(obj,"index")&&(result.index=obj.index),Object.prototype.hasOwnProperty.call(obj,"input")&&(result.input=obj.input),result}if(obj instanceof Date)return new Date(obj.getTime());if(obj instanceof RegExp){let result=new RegExp(obj.source,obj.flags);return result.lastIndex=obj.lastIndex,result}if(obj instanceof Map){let result=new Map;stack.set(obj,result);for(let[key,value]of obj.entries())result.set(key,cloneDeepImpl(value,stack));return result}if(obj instanceof Set){let result=new Set;stack.set(obj,result);for(let value of obj.values())result.add(cloneDeepImpl(value,stack));return result}if(typeof Buffer<"u"&&Buffer.isBuffer(obj))return obj.subarray();if(isTypedArray(obj)){let result=new(Object.getPrototypeOf(obj)).constructor(obj.length);stack.set(obj,result);for(let i=0;i<obj.length;i++)result[i]=cloneDeepImpl(obj[i],stack);return result}if(obj instanceof ArrayBuffer||typeof SharedArrayBuffer<"u"&&obj instanceof SharedArrayBuffer)return obj.slice(0);if(obj instanceof DataView){let result=new DataView(obj.buffer.slice(0),obj.byteOffset,obj.byteLength);return stack.set(obj,result),copyProperties(result,obj,stack),result}if(typeof File<"u"&&obj instanceof File){let result=new File([obj],obj.name,{type:obj.type});return stack.set(obj,result),copyProperties(result,obj,stack),result}if(obj instanceof Blob){let result=new Blob([obj],{type:obj.type});return stack.set(obj,result),copyProperties(result,obj,stack),result}if(obj instanceof Error){let result=new obj.constructor;return stack.set(obj,result),result.message=obj.message,result.name=obj.name,result.stack=obj.stack,result.cause=obj.cause,copyProperties(result,obj,stack),result}if(typeof obj=="object"&&obj!==null){let result={};return stack.set(obj,result),copyProperties(result,obj,stack),result}return obj}function copyProperties(target,source,stack){let keys=Object.keys(source);for(let i=0;i<keys.length;i++){let key=keys[i],descriptor=Object.getOwnPropertyDescriptor(source,key);(descriptor?.writable||descriptor?.set)&&(target[key]=cloneDeepImpl(source[key],stack));}}var stringTag="[object String]",numberTag="[object Number]",booleanTag="[object Boolean]",argumentsTag="[object Arguments]";function cloneDeep2(obj){if(typeof obj!="object")return cloneDeep(obj);switch(Object.prototype.toString.call(obj)){case numberTag:case stringTag:case booleanTag:{let result=new obj.constructor(obj?.valueOf());return copyProperties(result,obj),result}case argumentsTag:{let result={};return copyProperties(result,obj),result.length=obj.length,result[Symbol.iterator]=obj[Symbol.iterator],result}default:return cloneDeep(obj)}}var getControlId=value=>`control-${value.replace(/\s+/g,"-")}`,getControlSetterButtonId=value=>`set-${value.replace(/\s+/g,"-")}`;

export { __commonJS, __require2 as __require, __toESM, cloneDeep2, debounce2, getControlId, getControlSetterButtonId, pickBy, uniq };