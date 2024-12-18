(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[9739],{"./src/app/_services/routing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>RoutingService});var RoutingService_1,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),src_utils_logging__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/logging.ts"),src_utils_object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/object.ts");let RoutingService=class RoutingService{static{RoutingService_1=this}constructor(router){this.router=router,this.NONE_STRING="None",this.routeNodes=this.getRouteTree(),(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(`${RoutingService_1.name}-routeNodes`,this.routeNodes)}routeToPath(routeName,params){(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(RoutingService_1.name,`Routing to ${routeName}`);const routePath=this.getRoutePath(routeName,params),cleanedObjectUrl=this.replaceSpecialUnicodeCharacters(routePath);this.router.navigateByUrl(cleanedObjectUrl)}getRoutePath(routeName,params={}){let variableRoutePath=this.getVariableRoutePathByName(routeName);if(this.hasPathVariables(variableRoutePath)){const variableNames=this.getPathVariableNames(variableRoutePath);for(let variableName of variableNames){const propertyKey=(0,src_utils_object__WEBPACK_IMPORTED_MODULE_1__.Ui)(params,variableName);if(null!=propertyKey)null===params[propertyKey]&&(params[propertyKey]=this.NONE_STRING),variableRoutePath=variableRoutePath.replace(`:${variableName}`,params[propertyKey]);else{const e=new Error(`Tried to create path for route '${routeName}' but lacked parameter '${variableName}' `);console.error(e,"Provided Params: ",params)}}}return`/${variableRoutePath}`}routeToErrorPage(error){if("number"!=typeof error&&!error.hasOwnProperty("status"))throw"Incorrect error input. The input does not contain an error status or an object with the error status. Can not route to error page without error status.";"number"!=typeof error&&error.hasOwnProperty("status")&&(error=error.status);const errorStatusParam=`${error}`;this.routeToPath("error",{errorStatus:errorStatusParam})}routeNameMatches(route,routeName){return route.snapshot.data.name===routeName}replaceSpecialUnicodeCharacters(routePath){return routePath.replace("(","%28").replace(")","%29").replace("?","?").replace("†","%E2%80%A0")}getVariableRoutePathByName(routeName){return this.getVariableRouteByName(routeName).fullPath}getVariableRouteByName(routeName){const route=this.routeNodes[routeName];if(null==route)throw`There is no route with the name ${routeName}. Please contact the Developer to use either a different route name or create a route for this name.`;return route}hasPathVariables(routePath){return routePath.includes("/:")}hasRoutePath(routeName){return null!=this.routeNodes[routeName]}getEndRoutes(route,parentPath=""){let path="";parentPath&&route.path?path=`${parentPath}/${route.path}`:parentPath?path=parentPath:route.path&&(path=route.path);return null==route.children?[{route,fullPath:path}]:route.children.map((route=>this.getEndRoutes(route,path))).flat()}getPathVariableNames(routePath){const pathVariables=routePath.split("/").filter((segment=>segment.startsWith(":")));return pathVariables.map((segment=>segment.slice(1)))}getRouteTree(){return this.router.config.map((route=>this.getEndRoutes(route))).flat().reduce(((acc,route)=>{const routeName=route.route?.data?.name;return null!=routeName&&(acc[routeName]=route),acc}),{})}static{this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_2__.Ix}]}};RoutingService=RoutingService_1=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({providedIn:"root"})],RoutingService)},"./src/app/_services/utils/campaign.mock.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_B:()=>dummyCampaigns,jr:()=>dummyCampaign,mE:()=>dummyStatistics});const dummyCampaigns=[{pk:1,name:"Aldrune",subtitle:"A campaign made by Samuel Day and recorded by Philipp Dörner<br>through the eyes of Relentless",background_image:"/media/campaign_backgrounds/bg.jpg",is_deactivated:!1,has_audio_recording_permission:!0,icon:"/media/campaign_icons/favicon-128x128.png",default_map:1,default_map_details:{icon:"map",image:"pic05_sMT2d6M.jpg",name:"Aldrune",id:1},duration:{start_date:"2020-04-07T00:00:00.000000Z",last_date:"2023-04-11T00:00:00.000000Z"}},{pk:2,name:"Jōzai Corp",subtitle:"Welcome to Jōzai Corp, please enjoy your employment.",background_image:"/media/campaign_backgrounds/shanghai_city_snlaYDd.jpg",is_deactivated:!1,has_audio_recording_permission:!1,icon:"/media/campaign_icons/icon.png",default_map:void 0,default_map_details:void 0,duration:{start_date:"2022-01-15T00:00:00.000000Z",last_date:"2022-02-19T00:00:00.000000Z"}}],dummyStatistics={character_count:265,item_count:142,location_count:229,creature_count:42,diaryentry_count:101,encounter_count:954,organization_count:46,quest_count:69,quote_count:203,session_audio_count:69,timestamp_count:1121,map_count:7,marker_count:136,spell_count:22,session_count:90,rule_count:17},dummyCampaign={name:"Aldrune",subtitle:"A campaign for testing",pk:1,background_image:"/assets/default_images/audio_pic_default.webp",icon:"https://www.aldrune.com/media/campaign_icons/favicon-128x128.png",default_map:123,default_map_details:{id:123,name:"Default Map",icon:"plus",image:"blub.jpg"},is_deactivated:!1,has_audio_recording_permission:!0,members:[{username:"isofruit",password:"password1",pk:1,api_permissions:["permission1","permission2"],groups:[1,2],group_details:[{name:"group1",pk:1},{name:"group2",pk:2}],is_staff:!0,is_superuser:!1,email:"user1@example.com",is_active:!0},{username:"user2",password:"password2",pk:2,api_permissions:["permission3","permission4"],groups:[1,3],group_details:[{name:"group1",pk:1},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user2@example.com",is_active:!0}],admins:[{username:"admin",password:"adminpassword",pk:3,api_permissions:["permission1","permission2","permission3","permission4"],groups:[1,2,3],group_details:[{name:"group1",pk:1},{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!0,is_superuser:!0,email:"admin@example.com",is_active:!0},{username:"user3",password:"password3",pk:4,api_permissions:["permission1"],groups:[1],group_details:[{name:"group1",pk:1}],is_staff:!1,is_superuser:!1,email:"user3@example.com",is_active:!0}],guests:[{username:"user4",password:"password4",pk:5,api_permissions:["permission2","permission3"],groups:[2,3],group_details:[{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user4@example.com",is_active:!0},{username:"user5",password:"password5",pk:6,api_permissions:["permission4"],groups:[3],group_details:[{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user5@example.com",is_active:!0}],member_group_name:"Members",admin_group_name:"Admins",guest_group_name:"Guests",emptySearchResponses:[{id:1,text:"Empty response 1",campaign:1},{id:2,text:"Empty response 2",campaign:1}]}},"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n<span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n  {{ text() }}\n</span>\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[icon_componentngResource_default()]})],IconComponent)},"./src/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/design/organisms/image-grid/image-grid.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>ImageGridComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_grid_componentngResource=__webpack_require__("./src/design/organisms/image-grid/image-grid.component.scss?ngResource"),image_grid_componentngResource_default=__webpack_require__.n(image_grid_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let ImageGridComponent=class ImageGridComponent{constructor(){this.EMPTY_IMAGE_URL="",this.entries=core.input.required(),this.serverUrl=core.input.required(),this.imageProp=core.input.required(),this.labelProp=core.input.required(),this.iconProp=(0,core.input)(),this.entryClick=new core.EventEmitter,this.columnCount=(0,core.computed)((()=>{switch(this.entries().length){case 1:return 1;case 2:case 4:return 2;default:return 3}}))}static{this.propDecorators={entries:[{type:core.Input,args:[{isSignal:!0,alias:"entries",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],imageProp:[{type:core.Input,args:[{isSignal:!0,alias:"imageProp",required:!0,transform:void 0}]}],labelProp:[{type:core.Input,args:[{isSignal:!0,alias:"labelProp",required:!0,transform:void 0}]}],iconProp:[{type:core.Input,args:[{isSignal:!0,alias:"iconProp",required:!1,transform:void 0}]}],entryClick:[{type:core.Output}]}}};ImageGridComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-grid",template:'<div class="container-fluid">\n  @if (entries() != null) {\n    @if (entries().length > 0) {\n      <div class="row image-grid">\n        @for (entry of entries(); track $index) {\n          <a\n            class="image-grid__entry entry"\n            [style.background-image]="\n              \'url(\' + serverUrl() + entry[imageProp()] + \')\'\n            "\n            (click)="entryClick.emit(entry)"\n            [ngClass]="{\n              \'col-lg-12\': columnCount() === 1,\n              \'col-sm-6\': columnCount() === 2,\n              \'col-md-6 col-lg-4\': columnCount() === 3,\n            }"\n          >\n            <div class="entry__overlay">\n              <h4 class="entry__heading heading">\n                @let iconPropVal = iconProp();\n                @if (iconPropVal && entry[iconPropVal]) {\n                  <img\n                    class="heading__icon"\n                    [src]="serverUrl() + entry[iconPropVal]"\n                  />\n                }\n                {{ entry[labelProp()] }}\n              </h4>\n            </div>\n          </a>\n        }\n      </div>\n    } @else {\n      <ng-container *ngTemplateOutlet="noEntries" />\n    }\n  } @else {\n    <ng-container *ngTemplateOutlet="loading" />\n  }\n</div>\n\n<ng-template #loading> </ng-template>\n\n<ng-template #noEntries>\n  <div class="w-100 h-100 position-relative d-flex justify-content-center">\n    <img\n      class="w-100 h-100"\n      [src]="serverUrl() + EMPTY_IMAGE_URL"\n      alt="Image of a red dragon frame"\n    />\n    <div class="position-absolute frame-text">\n      <h4 class="mb-1">You have not yet been invited into any campaign.</h4>\n      <div>\n        Please inform your DM or the person within your group administrating the\n        webserver to add you to the required permission group.\n      </div>\n    </div>\n  </div>\n</ng-template>\n',standalone:!0,imports:[common.NgClass],styles:[image_grid_componentngResource_default()]})],ImageGridComponent)},"./src/utils/logging.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>log});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");function log(debugSymbol,...data){(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()&&(console.groupCollapsed(`[DEBUG] ${debugSymbol}:`,data),console.trace(),console.groupEnd())}},"./src/utils/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ui:()=>getCorrectKey,p:()=>getNestedProperty});var _string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/string.ts");function getCorrectKey(obj,key){if(key in obj)return key;const snakeCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.C8)(key);if(snakeCaseKey in obj)return snakeCaseKey;const camelCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.sF)(key);return camelCaseKey in obj?camelCaseKey:void 0}function getNestedProperty(item,keyPath){const keys=keyPath.split(".");let currentValue=item;for(let key of keys){if(!(key in currentValue)){throw new Error(`Cannot find nested property '${keyPath}' in '${JSON.stringify(item)}'`)}currentValue=currentValue[key]}return currentValue}},"./src/utils/string.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function capitalize(x){return`${x[0].toUpperCase()}${x.slice(1)}`}function uncapitalize(x){return`${x[0].toLowerCase()}${x.slice(1)}`}function ellipsize(x,length){return x.length>=length?`${x.slice(0,length-3)}...`:x}function camelToSnake(str){return str.replace(/([A-Z])/g,"_$1").toLowerCase()}function snakeToCamel(str){return str.replace(/_([a-z])/g,((match,group)=>group.toUpperCase()))}__webpack_require__.d(__webpack_exports__,{C8:()=>camelToSnake,YF:()=>uncapitalize,ZH:()=>capitalize,mc:()=>ellipsize,sF:()=>snakeToCamel})},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/design/templates/campaign-overview/campaign-overview.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Admin:()=>Admin,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>campaign_overview_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),campaign_mock_service=__webpack_require__("./src/app/_services/utils/campaign.mock.service.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var campaign_overview_componentngResource=__webpack_require__("./src/design/templates/campaign-overview/campaign-overview.component.scss?ngResource"),campaign_overview_componentngResource_default=__webpack_require__.n(campaign_overview_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),spinner_component=__webpack_require__("./src/design/atoms/spinner/spinner.component.ts"),image_grid_component=__webpack_require__("./src/design/organisms/image-grid/image-grid.component.ts");let CampaignOverviewComponent=class CampaignOverviewComponent{constructor(routingService){this.routingService=routingService,this.serverUrl=core.input.required(),this.userName=core.input.required(),this.campaigns=core.input.required(),this.isGlobalAdmin=(0,core.input)(!1),this.logout=new core.EventEmitter,this.profileUrl=(0,core.computed)((()=>this.routingService.getRoutePath("direct-profile",{username:this.userName()}))),this.configTableUrl=(0,core.computed)((()=>this.routingService.getRoutePath("config-tables"))),this.generalAdminUrl=(0,core.computed)((()=>this.routingService.getRoutePath("admin"))),this.dragonFrameUrl="/assets/dragon-frame.jpg"}onCampaignClick(event){this.routingService.routeToPath("home",{campaign:event.name})}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],userName:[{type:core.Input,args:[{isSignal:!0,alias:"userName",required:!0,transform:void 0}]}],campaigns:[{type:core.Input,args:[{isSignal:!0,alias:"campaigns",required:!0,transform:void 0}]}],isGlobalAdmin:[{type:core.Input,args:[{isSignal:!0,alias:"isGlobalAdmin",required:!1,transform:void 0}]}],logout:[{type:core.Output}]}}};CampaignOverviewComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-campaign-overview",template:'<div class="container">\n  <div class="campaign__heading heading">\n    <div class="heading__buttons">\n      <a (click)="logout.emit()" class="heading__button">\n        <button\n          btn\n          [kind]="\'SECONDARY\'"\n          [icon]="\'sign-out-alt\'"\n          [text]="\'Logout\'"\n        ></button>\n      </a>\n\n      @if (isGlobalAdmin()) {\n        <a [routerLink]="generalAdminUrl()" class="heading__button">\n          <button\n            btn\n            [kind]="\'INFO\'"\n            [icon]="\'user-cog\'"\n            [text]="\'General Administration\'"\n          ></button>\n        </a>\n\n        <a [routerLink]="configTableUrl()" class="heading__button">\n          <button\n            btn\n            [kind]="\'INFO\'"\n            [icon]="\'table\'"\n            [text]="\'Config Tables\'"\n          ></button>\n        </a>\n      }\n    </div>\n\n    @let campaignsVal = campaigns();\n    <h3 class="heading__text">\n      @if (campaignsVal && campaignsVal.length > 0) {\n        Choose Your Campaign\n      } @else if (campaignsVal && campaignsVal.length == 0) {\n        <ng-container *ngTemplateOutlet="noCampaignHeading" />\n      } @else {\n        <app-spinner></app-spinner>\n      }\n    </h3>\n  </div>\n\n  <div class="body">\n    @if (campaignsVal != null) {\n      @if (campaignsVal.length > 0) {\n        <app-image-grid\n          class="body__images"\n          [entries]="campaignsVal"\n          [imageProp]="\'background_image\'"\n          [serverUrl]="serverUrl()"\n          [labelProp]="\'name\'"\n          [iconProp]="\'icon\'"\n          (entryClick)="onCampaignClick($event)"\n        ></app-image-grid>\n      } @else {\n        <ng-container *ngTemplateOutlet="noCampaign" />\n      }\n    }\n  </div>\n</div>\n\n<ng-template #noCampaign>\n  <div class="w-100 h-100 position-relative d-flex justify-content-center">\n    <img\n      class="w-100 h-100"\n      [src]="dragonFrameUrl"\n      alt="Placeholder image for when no campaigns are available"\n    />\n    <div class="position-absolute frame-text">\n      <h4 class="mb-1">You have not yet been invited into any campaign.</h4>\n      <div>\n        Please inform your DM or the person within your group administrating the\n        webserver to add you to the required permission group.\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #noCampaignHeading> No Campaign available! </ng-template>\n',standalone:!0,imports:[common.NgTemplateOutlet,button_component.Q,router.Wk,image_grid_component.l,spinner_component.t],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[campaign_overview_componentngResource_default()]})],CampaignOverviewComponent);const campaign_overview_stories={title:"DesignSystem/Templates/CampaignOverviewComponent",component:CampaignOverviewComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,animations.BrowserAnimationsModule],declarations:[],providers:[]})],args:{isGlobalAdmin:!1,userName:"Isofruit",campaigns:campaign_mock_service._B,serverUrl:"https://www.aldrune.com"}},Template=args=>({props:{...args,logout:(0,dist.XI)("logout")}}),Default=Template.bind({});Default.args={};const Admin=Template.bind({});Admin.args={isGlobalAdmin:!0};const __namedExportsOrder=["Default","Admin"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    logout: action('logout')\n  }\n})",...Default.parameters?.docs?.source}}},Admin.parameters={...Admin.parameters,docs:{...Admin.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    logout: action('logout')\n  }\n})",...Admin.parameters?.docs?.source}}}},"./src/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/image-grid/image-grid.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --image-height: 90vh;\n}\n\n.container-fluid {\n  height: var(--image-height);\n}\n\n.image-grid {\n  height: 100%;\n}\n.image-grid__entry {\n  cursor: pointer;\n}\n\n.entry {\n  position: relative;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-position: center;\n  min-height: 30vh;\n  opacity: 0.75;\n  transition: opacity 0.2s ease-in-out;\n}\n.entry:hover {\n  opacity: 1;\n}\n.entry:hover .entry__heading {\n  color: var(--link-blue);\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n.entry__overlay {\n  position: absolute;\n  background-color: var(--wiki-bg-transparent);\n  z-index: 1;\n  width: 100%;\n  min-height: 4rem;\n  line-break: anywhere;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.entry__heading {\n  margin-bottom: var(--spacer-0);\n  padding-left: var(--spacer-3);\n  padding-right: var(--spacer-3);\n}\n\n.heading__icon {\n  height: var(--spacer-5);\n  width: var(--spacer-5);\n  border-radius: var(--bs-border-radius);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/campaign-overview/campaign-overview.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".container {\n  width: 100vw;\n  min-height: 100dvh;\n  max-width: unset !important;\n  padding: 0 !important;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--bs-black);\n}\n\n.campaign__heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10%;\n}\n\n.heading {\n  background-color: var(--wiki-bg-transparent);\n  display: flex;\n  flex-direction: column;\n}\n.heading__button {\n  margin-top: var(--spacer-1);\n  margin-bottom: var(--spacer-1);\n  display: inline-block;\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .heading__button {\n    width: unset;\n    margin: var(--spacer-2);\n  }\n}\n.heading__text {\n  flex: 1;\n  text-align: center;\n}\n\n.body {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.body__images {\n  height: 100%;\n  display: flex;\n}\n\nbutton {\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);