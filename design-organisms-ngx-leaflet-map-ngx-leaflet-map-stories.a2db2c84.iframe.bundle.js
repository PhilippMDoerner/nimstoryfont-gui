(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[9133],{"./src/app/_services/article/map.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>dummyMaps,r:()=>dummyMap});const dummyMap={getAbsoluteRouterUrl:()=>"/map/url",pk:2,name:"The World",image:"/media/Aldrune_World_1.jpg",icon:"/media/globe",update_datetime:"2021-06-26T17:10:35.352119Z",campaign:1,campaign_details:{name:"Aldrune",id:1},markers:__webpack_require__("./src/app/_services/article/marker.service.mock.ts").a},dummyMaps=[{getAbsoluteRouterUrl:()=>"/map/url1",article_type:"map",description:"A map of East Academy Year 2 Dorms ",pk:13,name_full:"East Academy Year 2 Dorms ",name:"East Academy Year 2 Dorms ",campaign_details:{name:"Empress-City",id:3},update_datetime:"2024-08-25T20:44:28.629572Z",icon:void 0},{getAbsoluteRouterUrl:()=>"/map/url2",article_type:"map",description:"A map of Forgian",pk:12,name_full:"Forgian",name:"Forgian",campaign_details:{name:"Empress-City",id:4},update_datetime:"2024-08-23T21:58:05.094772Z",icon:void 0}]},"./src/app/_services/article/marker.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>dummyMarkers});const dummyMarkers=[{getAbsoluteRouterUrl:()=>"/marker1/url",pk:106,color:void 0,icon:void 0,longitude:532,latitude:553,map:2,map_details:{name:"The World"},location:50,location_details:{name:"Galway",description:"<p>The New Capital of Fen's High Kingdom</p>\n<p>&nbsp;</p>\n<p>Galway City Breakdown</p>\n<p>Eastern Lakeway - 15 Buildings<br />Western Lakeway - 40 Buildings<br />Myria Island - 7 Buildings<br />River District - 46 Buildings, several temporary Refugee Shelters<br />Forest District - 85 Buildings<br />Hill District - 149 Buildings<br />Galway Proper - 60 Buildings</p>\n<p>Total - 402 Civilian Buildings in Galway</p>\n<p>Estimated Population: 4000+</p>",parent_location_name:"none",sublocations:[]},type:11,type_details:{campaign_id:void 0,name:"Settlement",icon:"home",is_text_marker:!1,fontawesome_type:"fa",color:"lightgreen",id:11,update_datetime:"2021-07-27T15:28:05.887185Z",creation_datetime:"2021-07-03T17:56:33.339291Z"},campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/marker2/url",pk:137,color:void 0,icon:void 0,longitude:752,latitude:579,map:2,map_details:{name:"The World"},location:206,location_details:{name:"Eastern sea",description:"<p>The ocean east of Aldrune, now accessible through the path carved by the world serpent.</p>",parent_location_name:"none",sublocations:["Lighthouse"]},type:23,type_details:{campaign_id:1,name:"Sea/Ocean",icon:"water",is_text_marker:!0,fontawesome_type:"fa",color:"gray",id:23,update_datetime:"2021-07-27T15:28:05.887185Z",creation_datetime:"2021-07-03T17:56:33.339291Z"},campaign_details:{name:"Aldrune",id:1}}]},"./src/app/_services/routing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>RoutingService});var RoutingService_1,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),src_utils_logging__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/logging.ts"),src_utils_object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/object.ts");let RoutingService=class RoutingService{static{RoutingService_1=this}constructor(router){this.router=router,this.NONE_STRING="None",this.routeNodes=this.getRouteTree(),(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(`${RoutingService_1.name}-routeNodes`,this.routeNodes)}routeToPath(routeName,params){(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(RoutingService_1.name,`Routing to ${routeName}`);const routePath=this.getRoutePath(routeName,params),cleanedObjectUrl=this.replaceSpecialUnicodeCharacters(routePath);this.router.navigateByUrl(cleanedObjectUrl)}getRoutePath(routeName,params={}){let variableRoutePath=this.getVariableRoutePathByName(routeName);if(this.hasPathVariables(variableRoutePath)){const variableNames=this.getPathVariableNames(variableRoutePath);for(let variableName of variableNames){const propertyKey=(0,src_utils_object__WEBPACK_IMPORTED_MODULE_1__.Ui)(params,variableName);if(null!=propertyKey)null===params[propertyKey]&&(params[propertyKey]=this.NONE_STRING),variableRoutePath=variableRoutePath.replace(`:${variableName}`,params[propertyKey]);else{const e=new Error(`Tried to create path for route '${routeName}' but lacked parameter '${variableName}' `);console.error(e,"Provided Params: ",params)}}}return`/${variableRoutePath}`}routeToErrorPage(error){if("number"!=typeof error&&!error.hasOwnProperty("status"))throw"Incorrect error input. The input does not contain an error status or an object with the error status. Can not route to error page without error status.";"number"!=typeof error&&error.hasOwnProperty("status")&&(error=error.status);const errorStatusParam=`${error}`;this.routeToPath("error",{errorStatus:errorStatusParam})}routeNameMatches(route,routeName){return route.snapshot.data.name===routeName}replaceSpecialUnicodeCharacters(routePath){return routePath.replace("(","%28").replace(")","%29").replace("?","?").replace("†","%E2%80%A0")}getVariableRoutePathByName(routeName){return this.getVariableRouteByName(routeName).fullPath}getVariableRouteByName(routeName){const route=this.routeNodes[routeName];if(null==route)throw`There is no route with the name ${routeName}. Please contact the Developer to use either a different route name or create a route for this name.`;return route}hasPathVariables(routePath){return routePath.includes("/:")}hasRoutePath(routeName){return null!=this.routeNodes[routeName]}getEndRoutes(route,parentPath=""){let path="";parentPath&&route.path?path=`${parentPath}/${route.path}`:parentPath?path=parentPath:route.path&&(path=route.path);return null==route.children?[{route,fullPath:path}]:route.children.map((route=>this.getEndRoutes(route,path))).flat()}getPathVariableNames(routePath){const pathVariables=routePath.split("/").filter((segment=>segment.startsWith(":")));return pathVariables.map((segment=>segment.slice(1)))}getRouteTree(){return this.router.config.map((route=>this.getEndRoutes(route))).flat().reduce(((acc,route)=>{const routeName=route.route?.data?.name;return null!=routeName&&(acc[routeName]=route),acc}),{})}static{this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_2__.Ix}]}};RoutingService=RoutingService_1=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({providedIn:"root"})],RoutingService)},"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/design/organisms/ngx-leaflet-map/ngx-leaflet-map.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>NgxLeafletMapComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var ngx_leaflet_map_componentngResource=__webpack_require__("./src/design/organisms/ngx-leaflet-map/ngx-leaflet-map.component.scss?ngResource"),ngx_leaflet_map_componentngResource_default=__webpack_require__.n(ngx_leaflet_map_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),asymmetrik_ngx_leaflet=__webpack_require__("./node_modules/@asymmetrik/ngx-leaflet/fesm2022/asymmetrik-ngx-leaflet.mjs"),leaflet_src=__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let NgxLeafletMapComponent=class NgxLeafletMapComponent{constructor(routingService){this.routingService=routingService,this.BRIGHT_BG_COLORS=["beige","lightgreen"],this.MAP_BOUNDS=[[200,140],[800,1160]],this.mapData=core.input.required(),this.serverUrl=core.input.required(),this.options={minZoom:-1,maxZoom:2,crs:leaflet_src.CRS.Simple},this.layers=(0,core.computed)((()=>this.initLayers(this.serverUrl(),this.mapData()))),this.layersControl=(0,core.computed)((()=>({baseLayers:{},overlays:{...this.markerLayers()},options:{collapsed:!1}}))),this.markerLayers=(0,core.computed)((()=>this.toMarkerLayers(this.mapData()))),this.hideCoordinatesState=!0}onMapReady(map){this.leafletMap=map,this.leafletMap.fitBounds(this.MAP_BOUNDS);for(const layerName in this.markerLayers())this.markerLayers()[layerName].addTo(this.leafletMap)}initLayers(serverUrl,map){const mapImageUrl=serverUrl+map.image;return[(0,leaflet_src.imageOverlay)(mapImageUrl,this.MAP_BOUNDS)]}toMarkerLayers(map){const layers={};if(!(map.markers&&map.markers.length>0))return layers;for(const mapMarker of map.markers??[]){const layerName=mapMarker.type_details?.name,layer=layerName&&layers.hasOwnProperty(layerName)?layers[layerName]:(0,leaflet_src.layerGroup)();layers[layerName]=layer;(mapMarker.type_details?.is_text_marker?this.createTextMarker(mapMarker):this.createAwesomeMarker(mapMarker)).addTo(layer)}return layers}onMouseMove(event){this.mouseLatitude=event.latlng.lat,this.mouseLongitude=event.latlng.lng}onMapClick(event){const latitude=event.latlng.lat,longitude=event.latlng.lng,popupContentHTML=this.makeFreePopupContentHTML(longitude,latitude);(0,leaflet_src.popup)().setLatLng([latitude,longitude]).setContent(popupContentHTML).openOn(this.leafletMap)}createTextMarker(mapMarker){const markerColor=this.getMarkerColor(mapMarker),textColor=this.getTextColor(markerColor),locationName=mapMarker.location_details?.name;return(0,leaflet_src.marker)([mapMarker.latitude,mapMarker.longitude],{icon:(0,leaflet_src.divIcon)({html:`\n        <div class="leaflet-text-marker" style="background-color: ${markerColor}; color: ${textColor}">\n          <strong>${locationName}</strong>\n        </div>\n        `})}).bindPopup(this.getPopupText(mapMarker)).bindTooltip(locationName)}createAwesomeMarker(mapMarker){const locationName=mapMarker.location_details?.name;return(0,leaflet_src.marker)([mapMarker.latitude,mapMarker.longitude],{icon:this.createDivIcon(mapMarker)}).bindPopup(this.getPopupText(mapMarker)).bindTooltip(locationName)}getMarkerColor(marker){return marker.color?marker.color:marker.type_details?.color?marker.type_details.color:"grey"}getPopupText(marker){return`${this.makeLocationHeading(marker)} <br> ${this.makeLocationDescription(marker)} <br> ${this.makeSublocationList(marker)}`}makeLocationHeading(marker){return`<a href="${this.routingService.getRoutePath("location",{campaign:this.mapData().campaign_details?.name,parent_name:marker.location_details?.parent_location_name,name:marker.location_details?.name})}"> <b>${marker.location_details?.name}</b> </a>`}makeLocationDescription(marker){let description=marker.location_details?.description;if(null==description)return"";if(description.split(" ").length>=35){return`${description.split(" ").slice(0,35)} ...`}return description}makeSublocationList(marker){const location=marker.location_details;if(!(location?.sublocations&&location.sublocations.length>0))return"";let sublocationList=" <ul>";for(let sublocationName of location.sublocations){sublocationList+=`<li><a href="${this.routingService.getRoutePath("location",{parent_name:location.name,name:sublocationName,campaign:this.mapData().campaign_details?.name})}"> ${sublocationName}</a></li>`}return sublocationList+="</ul>",`<h5 class="popup-heading"> Locations of Interest: </h5> ${sublocationList}`}getTextColor(color){return this.BRIGHT_BG_COLORS.includes(color)?"black":"white"}createDivIcon(mapMarker){const typeIcon=mapMarker.type_details?.icon,iconKind=(0,icon.bS)(typeIcon),typeColor=mapMarker.type_details?.color,customColor=mapMarker.color,color=customColor||typeColor;return(0,leaflet_src.divIcon)({className:"custom-div-icon",html:`\n        <div style="background-color:${color};" class="marker-pin"></div>\n        <i class='d-flex justify-content-center ${iconKind} fa-${typeIcon}'></i>`,iconSize:[30,42],iconAnchor:[15,42]})}makeFreePopupContentHTML(longitude,latitude){const popUpElement=document.createElement("div");return popUpElement.innerHTML='\n      <div class="mb-2 pointer">\n        <button btn id="add-marker" class="a rounded" tabindex="0">\n        <i class="fa fa-map-marker"></i> Add Marker\n        </button>\n      </div>\n    ',popUpElement.querySelector("#add-marker")?.addEventListener("click",(()=>this.routingService.routeToPath("marker-map-create",{latitude,longitude,map_name:this.mapData().name,campaign:this.mapData().campaign_details?.name}))),popUpElement}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={mapData:[{type:core.Input,args:[{isSignal:!0,alias:"mapData",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}]}}};NgxLeafletMapComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-ngx-leaflet-map",template:'\x3c!-- Leaflet Map --\x3e\n@if (options && layersControl() && layers()) {\n  <div\n    id="leafletMapDiv"\n    leaflet\n    [leafletOptions]="options"\n    [leafletLayersControl]="layersControl()"\n    [leafletLayers]="layers()"\n    (leafletMapReady)="onMapReady($event)"\n    (leafletClick)="onMapClick($event)"\n    (leafletMouseMove)="onMouseMove($event)"\n  ></div>\n}\n',standalone:!0,imports:[asymmetrik_ngx_leaflet.gI],styles:[ngx_leaflet_map_componentngResource_default()]})],NgxLeafletMapComponent)},"./src/utils/logging.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>log});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");function log(debugSymbol,...data){(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()&&(console.groupCollapsed(`[DEBUG] ${debugSymbol}:`,data),console.trace(),console.groupEnd())}},"./src/utils/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ui:()=>getCorrectKey,p:()=>getNestedProperty});var _string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/string.ts");function getCorrectKey(obj,key){if(key in obj)return key;const snakeCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.C8)(key);if(snakeCaseKey in obj)return snakeCaseKey;const camelCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.sF)(key);return camelCaseKey in obj?camelCaseKey:void 0}function getNestedProperty(item,keyPath){const keys=keyPath.split(".");let currentValue=item;for(let key of keys){if(!(key in currentValue)){throw new Error(`Cannot find nested property '${keyPath}' in '${JSON.stringify(item)}'`)}currentValue=currentValue[key]}return currentValue}},"./src/utils/string.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function capitalize(x){return`${x[0].toUpperCase()}${x.slice(1)}`}function uncapitalize(x){return`${x[0].toLowerCase()}${x.slice(1)}`}function ellipsize(x,length){return x.length>=length?`${x.slice(0,length-3)}...`:x}function camelToSnake(str){return str.replace(/([A-Z])/g,"_$1").toLowerCase()}function snakeToCamel(str){return str.replace(/_([a-z])/g,((match,group)=>group.toUpperCase()))}__webpack_require__.d(__webpack_exports__,{C8:()=>camelToSnake,YF:()=>uncapitalize,ZH:()=>capitalize,mc:()=>ellipsize,sF:()=>snakeToCamel})},"./src/design/organisms/ngx-leaflet-map/ngx-leaflet-map.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@asymmetrik/ngx-leaflet/fesm2022/asymmetrik-ngx-leaflet.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_app_services_article_map_service_mock__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js"),__webpack_require__("./src/app/_services/article/map.service.mock.ts"));const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/NgxLeafletMapComponent",component:__webpack_require__("./src/design/organisms/ngx-leaflet-map/ngx-leaflet-map.component.ts").I,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_asymmetrik_ngx_leaflet__WEBPACK_IMPORTED_MODULE_4__.gI],declarations:[]})],args:{mapData:src_app_services_article_map_service_mock__WEBPACK_IMPORTED_MODULE_2__.r,serverUrl:"https://www.aldrune.com"}},Default=(args=>({props:{...args}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/design/organisms/ngx-leaflet-map/ngx-leaflet-map.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --map-height: 400px;\n}\n@media (min-width: 768px) {\n  :host {\n    --map-height: 600px;\n  }\n}\n\n.map-frame {\n  border: 2px solid black;\n  height: var(--map-height);\n  width: 100%;\n  margin: 0 auto 2rem auto;\n}\n\n#leafletMapDiv {\n  height: var(--map-height);\n  width: 100%;\n  margin: 0 auto;\n}\n\n.w-15 {\n  width: 15%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);