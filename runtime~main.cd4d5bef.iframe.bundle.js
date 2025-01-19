(()=>{"use strict";var deferred,leafPrototypes,getProto,inProgress,__webpack_modules__={},__webpack_module_cache__={};function __webpack_require__(moduleId){var cachedModule=__webpack_module_cache__[moduleId];if(void 0!==cachedModule)return cachedModule.exports;var module=__webpack_module_cache__[moduleId]={id:moduleId,loaded:!1,exports:{}};return __webpack_modules__[moduleId].call(module.exports,module,module.exports,__webpack_require__),module.loaded=!0,module.exports}__webpack_require__.m=__webpack_modules__,__webpack_require__.amdO={},deferred=[],__webpack_require__.O=(result,chunkIds,fn,priority)=>{if(!chunkIds){var notFulfilled=1/0;for(i=0;i<deferred.length;i++){for(var[chunkIds,fn,priority]=deferred[i],fulfilled=!0,j=0;j<chunkIds.length;j++)(!1&priority||notFulfilled>=priority)&&Object.keys(__webpack_require__.O).every((key=>__webpack_require__.O[key](chunkIds[j])))?chunkIds.splice(j--,1):(fulfilled=!1,priority<notFulfilled&&(notFulfilled=priority));if(fulfilled){deferred.splice(i--,1);var r=fn();void 0!==r&&(result=r)}}return result}priority=priority||0;for(var i=deferred.length;i>0&&deferred[i-1][2]>priority;i--)deferred[i]=deferred[i-1];deferred[i]=[chunkIds,fn,priority]},__webpack_require__.n=module=>{var getter=module&&module.__esModule?()=>module.default:()=>module;return __webpack_require__.d(getter,{a:getter}),getter},getProto=Object.getPrototypeOf?obj=>Object.getPrototypeOf(obj):obj=>obj.__proto__,__webpack_require__.t=function(value,mode){if(1&mode&&(value=this(value)),8&mode)return value;if("object"==typeof value&&value){if(4&mode&&value.__esModule)return value;if(16&mode&&"function"==typeof value.then)return value}var ns=Object.create(null);__webpack_require__.r(ns);var def={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var current=2&mode&&value;"object"==typeof current&&!~leafPrototypes.indexOf(current);current=getProto(current))Object.getOwnPropertyNames(current).forEach((key=>def[key]=()=>value[key]));return def.default=()=>value,__webpack_require__.d(ns,def),ns},__webpack_require__.d=(exports,definition)=>{for(var key in definition)__webpack_require__.o(definition,key)&&!__webpack_require__.o(exports,key)&&Object.defineProperty(exports,key,{enumerable:!0,get:definition[key]})},__webpack_require__.f={},__webpack_require__.e=chunkId=>Promise.all(Object.keys(__webpack_require__.f).reduce(((promises,key)=>(__webpack_require__.f[key](chunkId,promises),promises)),[])),__webpack_require__.u=chunkId=>(({185:"app-design-templates-item-item-stories",365:"app-design-templates-campaign-overview-campaign-overview-stories",389:"app-design-organisms-user-row-user-row-stories",525:"app-design-templates-create-update-create-update-stories",591:"app-design-organisms-encounter-encounter-stories",861:"app-design-molecules-sidebar-legend-sidebar-legend-stories",1021:"app-design-molecules-list-list-stories",1233:"app-design-organisms-search-hit-search-hit-stories",1354:"app-design-atoms-badge-badge-stories",1397:"app-design-molecules-formly-typeahead-field-formly-typeahead-field-stories",1586:"app-design-atoms-icon-icon-stories",1681:"app-design-templates-site-admin-site-admin-stories",1951:"app-design-molecules-edit-toggle-edit-toggle-stories",1997:"app-design-organisms-rule-rule-stories",2035:"app-design-templates-search-search-stories",2135:"app-design-templates-sessionaudio-sessionaudio-stories",2194:"app-design-atoms-interactive-badge-interactive-badge-stories",2411:"app-design-templates-general-overview-general-overview-stories",2533:"app-design-molecules-article-footer-article-footer-stories",2686:"app-design-atoms-info-circle-tooltip-info-circle-tooltip-stories",2779:"app-design-molecules-small-create-form-small-create-form-stories",3001:"app-design-organisms-image-carousel-image-carousel-stories",3002:"app-design-atoms-html-text-html-text-stories",3150:"app-design-atoms-placeholder-placeholder-stories",3459:"app-design-organisms-sessionaudio-card-sessionaudio-card-stories",3599:"app-design-molecules-link-entry-link-entry-stories",3605:"app-design-templates-organization-organization-stories",3862:"app-design-atoms-spinner-spinner-stories",3975:"app-design-organisms-formly-editor-field-formly-editor-field-stories",3999:"app-design-templates-campaign-admin-campaign-admin-stories",4159:"app-design-molecules-collapsible-panel-collapsible-panel-stories",4215:"app-design-organisms-page-container-page-container-stories",4295:"app-design-organisms-location-location-stories",4375:"app-design-organisms-filter-list-filter-list-stories",4419:"app-design-organisms-sessionaudio-player-sessionaudio-player-stories",4437:"app-design-organisms-image-grid-image-grid-stories",4687:"app-design-organisms-icon-card-list-icon-card-list-stories",4840:"app-design-organisms-formly-select-disable-formly-select-disable-field-stories",4841:"app-design-templates-quest-quest-stories",4914:"app-design-templates-character-character-stories",4975:"app-design-templates-marker-marker-stories",5097:"app-design-molecules-image-card-image-card-stories",5194:"app-design-atoms-separator-separator-stories",5547:"app-design-molecules-page-background-page-background-stories",5719:"app-design-organisms-sidebar-sidebar-stories",5799:"app-design-molecules-search-field-search-field-stories",5817:"app-design-organisms-location-accordion-location-accordion-stories",5935:"app-design-molecules-formly-file-field-formly-file-field-stories",6159:"app-design-organisms-image-carousel-card-image-carousel-card-stories",6164:"app-design-atoms-card-card-stories",6307:"app-design-organisms-page-page-stories",6419:"app-design-templates-quest-overview-quest-overview-stories",6524:"app-design-organisms-quest-table-quest-stories",6527:"app-design-organisms-quote-field-quote-field-stories",6627:"app-design-organisms-spell-spell-stories",6817:"app-design-templates-login-login-stories",6888:"app-design-atoms-button-button-stories",6974:"app-design-atoms-alert-alert-stories",7263:"app-design-organisms-spells-spells-stories",7319:"app-design-organisms-formly-datepicker-field-formly-datepicker-field-stories",7355:"app-design-organisms-ngx-leaflet-map-ngx-leaflet-map-stories",7432:"app-design-atoms-arrow-button-arrow-button-stories",7459:"app-design-molecules-confirmation-toggle-button-confirmation-toggle-button-stories",7643:"app-design-organisms-encounter-accordion-encounter-accordion-stories",7737:"app-design-molecules-badge-list-badge-list-stories",7781:"app-design-templates-campaign-update-campaign-update-stories",7937:"app-design-templates-config-tables-config-tables-stories",7963:"app-design-organisms-rules-rules-stories",8025:"app-design-molecules-form-form-stories",8249:"app-design-molecules-compare-form-compare-form-stories",8307:"app-design-molecules-icon-card-icon-card-stories",8434:"app-design-atoms-heading-heading-stories",8469:"app-design-templates-character-create-update-character-create-update-stories",8831:"app-design-organisms-session-session-stories",8915:"app-design-organisms-toast-overlay-toast-overlay-stories",9113:"app-design-templates-map-map-stories",9153:"app-design-templates-creature-creature-stories",9439:"app-design-organisms-quote-quote-stories",9679:"app-design-organisms-player-player-stories",9851:"app-design-molecules-choice-select-choice-select-stories"}[chunkId]||chunkId)+"."+{185:"2539aff3",365:"f9a0138e",389:"99e3417b",525:"851dcff6",591:"e09bccda",715:"5dd5ab61",769:"32413681",861:"61f71440",1002:"76accf32",1021:"cd91bca8",1022:"4261ad58",1189:"03cc0915",1233:"06298cce",1354:"fb57ad4a",1397:"86c1ffa2",1586:"2caa4324",1681:"a068d64c",1690:"cb26b4ff",1810:"75a2c491",1951:"7bf64733",1997:"cd9bbbe0",2026:"483a9531",2035:"5d04db7b",2079:"16a94738",2135:"266e1ae5",2194:"bd05c506",2411:"4dfc3208",2533:"d9c2b3a7",2686:"002dca61",2779:"a549204b",3001:"0ad50b45",3002:"b39cd69a",3102:"092b2e89",3150:"8e99a981",3459:"1c658c29",3599:"f7354163",3605:"76dcd120",3689:"c87b0c58",3862:"fc8889fb",3975:"dba56e1a",3999:"657c4650",4159:"9c61e3e3",4215:"f77264f3",4295:"a0297bc9",4375:"898a085b",4419:"d25fe016",4437:"a3ae0d91",4640:"58664ceb",4687:"8d5313c4",4840:"86a19636",4841:"c672bab3",4851:"993bedf7",4914:"b7a26efa",4975:"6c09a80e",5062:"0f9eca01",5097:"e9e9909f",5194:"9529c3b4",5224:"49ac9270",5547:"e08ad0bb",5568:"2cead589",5719:"c1efb6d8",5799:"2c202400",5812:"7fee0798",5817:"842da9be",5935:"e310e790",6159:"75cf2805",6164:"4c1b0d32",6307:"bbbb4fbc",6419:"08422fb7",6447:"9a791001",6524:"4099e5a8",6527:"6fa63cb9",6627:"a40e4996",6817:"b49facf9",6824:"af987e8c",6874:"ac9001ff",6888:"b345d914",6974:"f2f14278",7139:"3e9aaf5a",7263:"d0446435",7319:"339c7a31",7355:"39113f01",7356:"9f3976e6",7432:"6e66bcd9",7459:"d8aadee2",7643:"edae288f",7737:"41d6393c",7781:"729605ba",7937:"422b9f19",7963:"e028a126",8025:"decf6650",8249:"ae5d96b3",8307:"57600b58",8434:"a50cc2c2",8469:"26903e7b",8745:"7d9e79b7",8831:"c35b6164",8849:"58d19dbb",8915:"2e989c22",8980:"3fd597a1",9113:"23067fd3",9153:"d6e8c548",9439:"d63370e0",9679:"3ae4a3b0",9851:"e37e740d",9905:"6fae0fad",9981:"581e70ca"}[chunkId]+".iframe.bundle.js"),__webpack_require__.miniCssF=chunkId=>{},__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.hmd=module=>((module=Object.create(module)).children||(module.children=[]),Object.defineProperty(module,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+module.id)}}),module),__webpack_require__.o=(obj,prop)=>Object.prototype.hasOwnProperty.call(obj,prop),inProgress={},__webpack_require__.l=(url,done,key,chunkId)=>{if(inProgress[url])inProgress[url].push(done);else{var script,needAttach;if(void 0!==key)for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++){var s=scripts[i];if(s.getAttribute("src")==url||s.getAttribute("data-webpack")=="nimstoryfont-gui:"+key){script=s;break}}script||(needAttach=!0,(script=document.createElement("script")).charset="utf-8",script.timeout=120,__webpack_require__.nc&&script.setAttribute("nonce",__webpack_require__.nc),script.setAttribute("data-webpack","nimstoryfont-gui:"+key),script.src=url),inProgress[url]=[done];var onScriptComplete=(prev,event)=>{script.onerror=script.onload=null,clearTimeout(timeout);var doneFns=inProgress[url];if(delete inProgress[url],script.parentNode&&script.parentNode.removeChild(script),doneFns&&doneFns.forEach((fn=>fn(event))),prev)return prev(event)},timeout=setTimeout(onScriptComplete.bind(null,void 0,{type:"timeout",target:script}),12e4);script.onerror=onScriptComplete.bind(null,script.onerror),script.onload=onScriptComplete.bind(null,script.onload),needAttach&&document.head.appendChild(script)}},__webpack_require__.r=exports=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(exports,"__esModule",{value:!0})},__webpack_require__.nmd=module=>(module.paths=[],module.children||(module.children=[]),module),__webpack_require__.p="",(()=>{var installedChunks={5354:0,7741:0};__webpack_require__.f.j=(chunkId,promises)=>{var installedChunkData=__webpack_require__.o(installedChunks,chunkId)?installedChunks[chunkId]:void 0;if(0!==installedChunkData)if(installedChunkData)promises.push(installedChunkData[2]);else if(/^(5354|7741)$/.test(chunkId))installedChunks[chunkId]=0;else{var promise=new Promise(((resolve,reject)=>installedChunkData=installedChunks[chunkId]=[resolve,reject]));promises.push(installedChunkData[2]=promise);var url=__webpack_require__.p+__webpack_require__.u(chunkId),error=new Error;__webpack_require__.l(url,(event=>{if(__webpack_require__.o(installedChunks,chunkId)&&(0!==(installedChunkData=installedChunks[chunkId])&&(installedChunks[chunkId]=void 0),installedChunkData)){var errorType=event&&("load"===event.type?"missing":event.type),realSrc=event&&event.target&&event.target.src;error.message="Loading chunk "+chunkId+" failed.\n("+errorType+": "+realSrc+")",error.name="ChunkLoadError",error.type=errorType,error.request=realSrc,installedChunkData[1](error)}}),"chunk-"+chunkId,chunkId)}},__webpack_require__.O.j=chunkId=>0===installedChunks[chunkId];var webpackJsonpCallback=(parentChunkLoadingFunction,data)=>{var moduleId,chunkId,[chunkIds,moreModules,runtime]=data,i=0;if(chunkIds.some((id=>0!==installedChunks[id]))){for(moduleId in moreModules)__webpack_require__.o(moreModules,moduleId)&&(__webpack_require__.m[moduleId]=moreModules[moduleId]);if(runtime)var result=runtime(__webpack_require__)}for(parentChunkLoadingFunction&&parentChunkLoadingFunction(data);i<chunkIds.length;i++)chunkId=chunkIds[i],__webpack_require__.o(installedChunks,chunkId)&&installedChunks[chunkId]&&installedChunks[chunkId][0](),installedChunks[chunkId]=0;return __webpack_require__.O(result)},chunkLoadingGlobal=self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[];chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null,0)),chunkLoadingGlobal.push=webpackJsonpCallback.bind(null,chunkLoadingGlobal.push.bind(chunkLoadingGlobal))})(),__webpack_require__.nc=void 0})();