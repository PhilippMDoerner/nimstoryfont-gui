(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({5:"design-molecules-edit-toggle-edit-toggle-stories",181:"design-organisms-encounter-accordion-encounter-accordion-stories",232:"design-atoms-info-circle-tooltip-info-circle-tooltip-stories",433:"design-organisms-icon-card-list-icon-card-list-stories",773:"design-molecules-formly-file-field-formly-file-field-stories",796:"design-atoms-icon-icon-stories",929:"design-molecules-choice-select-choice-select-stories",1063:"design-templates-login-login-stories",1105:"design-organisms-page-container-page-container-stories",1215:"design-organisms-image-grid-image-grid-stories",1379:"design-organisms-image-carousel-image-carousel-stories",1875:"design-molecules-sidebar-legend-sidebar-legend-stories",1909:"design-templates-sessionaudio-sessionaudio-stories",2285:"design-organisms-rules-rules-stories",2291:"design-molecules-list-list-stories",2372:"design-atoms-badge-badge-stories",2394:"design-organisms-quest-table-quest-stories",2441:"design-molecules-icon-card-icon-card-stories",2525:"design-molecules-link-entry-link-entry-stories",2688:"design-atoms-spinner-spinner-stories",2793:"design-organisms-encounter-encounter-stories",2815:"design-molecules-image-card-image-card-stories",2841:"design-templates-quest-overview-quest-overview-stories",3156:"design-atoms-html-text-html-text-stories",3195:"design-organisms-search-hit-search-hit-stories",3289:"design-molecules-confirmation-toggle-button-confirmation-toggle-button-stories",3492:"design-atoms-separator-separator-stories",3691:"design-templates-character-create-update-character-create-update-stories",3751:"design-molecules-badge-list-badge-list-stories",3783:"design-templates-map-map-stories",3941:"design-organisms-toast-overlay-toast-overlay-stories",4359:"design-templates-creature-creature-stories",4392:"design-atoms-placeholder-placeholder-stories",4564:"design-atoms-heading-heading-stories",4844:"design-atoms-interactive-badge-interactive-badge-stories",4905:"design-templates-search-search-stories",5221:"design-organisms-page-page-stories",5345:"design-molecules-small-create-form-small-create-form-stories",5369:"design-organisms-session-session-stories",5601:"design-organisms-quote-field-quote-field-stories",5715:"design-templates-create-update-create-update-stories",5793:"design-molecules-page-background-page-background-stories",5829:"design-templates-campaign-admin-campaign-admin-stories",6005:"design-molecules-collapsible-panel-collapsible-panel-stories",6009:"design-organisms-formly-datepicker-field-formly-datepicker-field-stories",6113:"design-organisms-spells-spells-stories",6119:"design-templates-config-tables-config-tables-stories",6171:"design-molecules-article-footer-article-footer-stories",6191:"design-templates-item-item-stories",6277:"design-molecules-search-field-search-field-stories",6539:"design-templates-organization-organization-stories",6637:"design-organisms-sessionaudio-player-sessionaudio-player-stories",6647:"design-organisms-rule-rule-stories",6719:"design-templates-site-admin-site-admin-stories",7038:"design-atoms-card-card-stories",7130:"design-atoms-arrow-button-arrow-button-stories",7585:"design-organisms-filter-list-filter-list-stories",7689:"design-templates-general-overview-general-overview-stories",7770:"design-atoms-button-button-stories",8139:"design-templates-campaign-update-campaign-update-stories",8152:"design-atoms-alert-alert-stories",8201:"design-organisms-sidebar-sidebar-stories",8233:"design-organisms-location-location-stories",8337:"design-organisms-image-carousel-card-image-carousel-card-stories",8401:"design-organisms-player-player-stories",8591:"design-molecules-compare-form-compare-form-stories",8630:"design-organisms-formly-select-disable-formly-select-disable-field-stories",8717:"design-templates-marker-marker-stories",9133:"design-organisms-ngx-leaflet-map-ngx-leaflet-map-stories",9149:"design-organisms-sessionaudio-card-sessionaudio-card-stories",9583:"design-molecules-form-form-stories",9623:"design-organisms-user-row-user-row-stories",9625:"design-organisms-quote-quote-stories",9635:"design-templates-character-character-stories",9739:"design-templates-campaign-overview-campaign-overview-stories",9795:"design-organisms-location-accordion-location-accordion-stories",9881:"design-organisms-formly-editor-field-formly-editor-field-stories",9885:"design-organisms-spell-spell-stories",9951:"design-templates-quest-quest-stories"}[chunkId]||chunkId)+"."+{5:"719c5437",181:"947bed30",232:"64124800",433:"44e4521a",669:"ad3b4919",773:"60530dc3",796:"96126072",929:"e27bb105",1002:"76accf32",1022:"380a2d48",1063:"72f53883",1105:"2d896467",1215:"bf7d5e7c",1379:"55fa9aab",1466:"01a6e0c8",1875:"a4e5407f",1909:"0a9dfc6e",2026:"483a9531",2285:"abc07a31",2291:"4f0eea23",2372:"dfac2873",2394:"cb5aeca1",2441:"9ffd683b",2525:"e04b7cd0",2688:"39b79f4b",2793:"1301f641",2815:"3f5eda98",2841:"3acffc19",3150:"f09d0821",3156:"a961a6dd",3195:"15c0aa7f",3289:"c94c5547",3426:"75112be7",3492:"37d9865f",3569:"897ccb8a",3628:"37d3faba",3689:"c87b0c58",3691:"08a027b1",3751:"51557f00",3783:"c2ddb52f",3881:"5434e6e0",3941:"7b31c88e",4359:"b8b407df",4392:"b4369224",4564:"8a8ab5e5",4640:"58664ceb",4844:"85bcca6e",4905:"166c2475",5221:"420585ed",5345:"b919a14f",5369:"cec08e04",5568:"2cead589",5601:"9221a2da",5715:"9cc64485",5793:"d63db819",5812:"d1a2720e",5829:"7bbb5089",6005:"0bdb7b7f",6009:"9245e36e",6113:"67b1cea2",6119:"6b14f5b1",6171:"eeaa7c0f",6191:"6c41cd60",6277:"5827f841",6447:"9a791001",6539:"130b3314",6637:"ce7e8f1b",6647:"a0585b32",6663:"d7190aac",6719:"24ff5747",6824:"67a7b45b",7038:"6e174882",7130:"8a6678ed",7139:"96630f39",7262:"429f4d9d",7356:"9f3976e6",7585:"94920822",7689:"3a7078b1",7770:"e2bf2556",7857:"21744ebe",8139:"968dab6c",8152:"73138120",8201:"a8d624fb",8233:"c2b44149",8337:"dbb575a2",8401:"b9fa55d7",8550:"10fa14cf",8591:"f6671876",8630:"9f5b5664",8717:"df8cce8f",8849:"8b963824",8941:"faeba570",8980:"3fd597a1",9133:"b2dc8ca9",9149:"975eef61",9583:"1ab51fd4",9623:"e5670497",9625:"f606acfa",9635:"92507c0c",9739:"0be55343",9795:"e84e8104",9881:"765b8fbc",9885:"fdfbaa00",9905:"ae0eedbc",9951:"2f22c69d",9981:"ffd1100b"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="nimstoryfont-gui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","nimstoryfont-gui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0,7741:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(5354|7741)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();