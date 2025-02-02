(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[4975],{"./src/app/_services/article/marker.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>dummyMarkers});const dummyMarkers=[{getAbsoluteRouterUrl:()=>"/marker1/url",pk:106,color:void 0,icon:void 0,longitude:532,latitude:553,map:2,map_details:{name:"The World"},location:50,location_details:{name:"Galway",description:"<p>The New Capital of Fen's High Kingdom</p>\n<p>&nbsp;</p>\n<p>Galway City Breakdown</p>\n<p>Eastern Lakeway - 15 Buildings<br />Western Lakeway - 40 Buildings<br />Myria Island - 7 Buildings<br />River District - 46 Buildings, several temporary Refugee Shelters<br />Forest District - 85 Buildings<br />Hill District - 149 Buildings<br />Galway Proper - 60 Buildings</p>\n<p>Total - 402 Civilian Buildings in Galway</p>\n<p>Estimated Population: 4000+</p>",parent_location_name:"none",sublocations:[]},type:11,type_details:{campaign_id:void 0,name:"Settlement",icon:"home",is_text_marker:!1,fontawesome_type:"fa",color:"lightgreen",id:11,update_datetime:"2021-07-27T15:28:05.887185Z",creation_datetime:"2021-07-03T17:56:33.339291Z"},campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/marker2/url",pk:137,color:void 0,icon:void 0,longitude:752,latitude:579,map:2,map_details:{name:"The World"},location:206,location_details:{name:"Eastern sea",description:"<p>The ocean east of Aldrune, now accessible through the path carved by the world serpent.</p>",parent_location_name:"none",sublocations:["Lighthouse"]},type:23,type_details:{campaign_id:1,name:"Sea/Ocean",icon:"water",is_text_marker:!0,fontawesome_type:"fa",color:"gray",id:23,update_datetime:"2021-07-27T15:28:05.887185Z",creation_datetime:"2021-07-03T17:56:33.339291Z"},campaign_details:{name:"Aldrune",id:1}}]},"./src/app/design/molecules/article-footer/article-footer.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>ArticleFooterComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var article_footer_componentngResource=__webpack_require__("./src/app/design/molecules/article-footer/article-footer.component.scss?ngResource"),article_footer_componentngResource_default=__webpack_require__.n(article_footer_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),confirmation_toggle_button_component=__webpack_require__("./src/app/design/molecules/confirmation-toggle-button/confirmation-toggle-button.component.ts");let ArticleFooterComponent=class ArticleFooterComponent{constructor(){this.buttonLabel=core.input.required(),this.buttonLink=(0,core.input)(void 0),this.deleteMessage=(0,core.input)("Delete this entry?"),this.showDelete=(0,core.input)(!0),this.buttonClick=new core.EventEmitter,this.delete=new core.EventEmitter}static{this.propDecorators={buttonLabel:[{type:core.Input,args:[{isSignal:!0,alias:"buttonLabel",required:!0,transform:void 0}]}],buttonLink:[{type:core.Input,args:[{isSignal:!0,alias:"buttonLink",required:!1,transform:void 0}]}],deleteMessage:[{type:core.Input,args:[{isSignal:!0,alias:"deleteMessage",required:!1,transform:void 0}]}],showDelete:[{type:core.Input,args:[{isSignal:!0,alias:"showDelete",required:!1,transform:void 0}]}],buttonClick:[{type:core.Output}],delete:[{type:core.Output}]}}};ArticleFooterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-article-footer",template:'<footer class="footer">\n  <ng-container\n    [ngTemplateOutlet]="buttonLink() ? linkButton : nonLinkButton"\n  />\n\n  @if (showDelete()) {\n    <app-confirmation-toggle-button\n      [confirmationQuestion]="deleteMessage()"\n      [icon]="\'trash\'"\n      (confirm)="delete.emit()"\n    ></app-confirmation-toggle-button>\n  }\n</footer>\n\n<ng-template #linkButton>\n  <a [routerLink]="buttonLink()" (click)="buttonClick.emit()" [tabIndex]="-1">\n    <button btn [kind]="\'SECONDARY\'" [text]="buttonLabel()"></button>\n  </a>\n</ng-template>\n\n<ng-template #nonLinkButton>\n  <button\n    btn\n    [kind]="\'SECONDARY\'"\n    [text]="buttonLabel()"\n    (click)="buttonClick.emit()"\n  ></button>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[button_component.Q,router.Wk,common.NgTemplateOutlet,confirmation_toggle_button_component.T],styles:[article_footer_componentngResource_default()]})],ArticleFooterComponent)},"./src/app/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/app/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>debounceTime});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function debounceTime(dueTime,scheduler){return void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.E),(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){var activeTask=null,lastValue=null,lastTime=null,emit=function(){if(activeTask){activeTask.unsubscribe(),activeTask=null;var value=lastValue;lastValue=null,subscriber.next(value)}};function emitWhenIdle(){var targetTime=lastTime+dueTime,now=scheduler.now();if(now<targetTime)return activeTask=this.schedule(void 0,targetTime-now),void subscriber.add(activeTask);emit()}source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(value){lastValue=value,lastTime=scheduler.now(),activeTask||(activeTask=scheduler.schedule(emitWhenIdle,dueTime),subscriber.add(activeTask))}),(function(){emit(),subscriber.complete()}),void 0,(function(){lastValue=activeTask=null})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function handleReset(reset,on){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];if(!0!==on){if(!1!==on){var onSubscriber=new Subscriber.Ms({next:function(){onSubscriber.unsubscribe(),reset()}});return(0,innerFrom.Tg)(on.apply(void 0,(0,tslib_es6.fX)([],(0,tslib_es6.zs)(args)))).subscribe(onSubscriber)}}else reset()}function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,function share(options){void 0===options&&(options={});var _a=options.connector,connector=void 0===_a?function(){return new Subject.B}:_a,_b=options.resetOnError,resetOnError=void 0===_b||_b,_c=options.resetOnComplete,resetOnComplete=void 0===_c||_c,_d=options.resetOnRefCountZero,resetOnRefCountZero=void 0===_d||_d;return function(wrapperSource){var connection,resetConnection,subject,refCount=0,hasCompleted=!1,hasErrored=!1,cancelReset=function(){null==resetConnection||resetConnection.unsubscribe(),resetConnection=void 0},reset=function(){cancelReset(),connection=subject=void 0,hasCompleted=hasErrored=!1},resetAndUnsubscribe=function(){var conn=connection;reset(),null==conn||conn.unsubscribe()};return(0,lift.N)((function(source,subscriber){refCount++,hasErrored||hasCompleted||cancelReset();var dest=subject=null!=subject?subject:connector();subscriber.add((function(){0!=--refCount||hasErrored||hasCompleted||(resetConnection=handleReset(resetAndUnsubscribe,resetOnRefCountZero))})),dest.subscribe(subscriber),!connection&&refCount>0&&(connection=new Subscriber.Ms({next:function(value){return dest.next(value)},error:function(err){hasErrored=!0,cancelReset(),resetConnection=handleReset(reset,resetOnError,err),dest.error(err)},complete:function(){hasCompleted=!0,cancelReset(),resetConnection=handleReset(reset,resetOnComplete),dest.complete()}}),(0,innerFrom.Tg)(source).subscribe(connection))}))(wrapperSource)}}({connector:function(){return new ReplaySubject.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./src/app/design/templates/marker/marker.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>marker_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),marker_service_mock=(__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js"),__webpack_require__("./src/app/_services/article/marker.service.mock.ts")),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var marker_componentngResource=__webpack_require__("./src/app/design/templates/marker/marker.component.scss?ngResource"),marker_componentngResource_default=__webpack_require__.n(marker_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),page_container_component=__webpack_require__("./src/app/design/organisms/page-container/page-container.component.ts"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),article_footer_component=__webpack_require__("./src/app/design/molecules/article-footer/article-footer.component.ts");let MarkerComponent=class MarkerComponent{constructor(routingService){this.routingService=routingService,this.canDelete=!1,this.canUpdate=!1,this.markerDelete=new core.EventEmitter}ngOnInit(){const parentName=this.marker.location_details?.parent_location_name,locationName=this.marker.location_details?.name,campaignName=this.marker.campaign_details.name;this.locationUrl=this.routingService.getRoutePath("location",{parent_name:parentName,name:locationName,campaign:campaignName}),this.setUrls()}ngOnChanges(){this.setUrls()}setUrls(){const parentName=this.marker.location_details?.parent_location_name,locationName=this.marker.location_details?.name,campaignName=this.marker.campaign_details.name,mapName=this.marker.map_details?.name;this.updateUrl=this.routingService.getRoutePath("marker-update",{parent_location_name:parentName,campaign:campaignName,location_name:locationName,map_name:mapName})}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={marker:[{type:core.Input}],canDelete:[{type:core.Input}],canUpdate:[{type:core.Input}],markerDelete:[{type:core.Output}]}}};MarkerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-marker",template:'<app-page-container>\n  <article class="container marker">\n    @if (canUpdate) {\n      <div class="marker__edit-container">\n        <a [routerLink]="updateUrl">\n          <button btn [icon]="\'pencil\'" [kind]="\'SECONDARY\'"></button>\n        </a>\n      </div>\n    }\n\n    <div class="row marker__heading heading">\n      <h1 class="col-12 heading__main">\n        Marker on {{ marker.map_details?.name }}\n      </h1>\n\n      <h3 class="col-12 heading__subheading">Properties</h3>\n    </div>\n\n    \x3c!-- Longitude --\x3e\n    <div class="row">\n      <div class="col-0 col-sm-4"></div>\n      <strong class="col-6 col-sm-3">Longitude: </strong>\n      <span class="col-6 col-sm-5">{{ marker.longitude }}</span>\n    </div>\n\n    \x3c!-- Latitude --\x3e\n    <div class="row">\n      <div class="col-0 col-sm-4"></div>\n      <strong class="col-6 col-sm-3">Latitude: </strong>\n      <span class="col-6 col-sm-5">{{ marker.latitude }}</span>\n    </div>\n\n    \x3c!-- Marker Type --\x3e\n    <div class="row">\n      <div class="col-0 col-sm-4"></div>\n      <strong class="col-6 col-sm-3">Marker type: </strong>\n      <span class="col-6 col-sm-5">{{ marker.type_details?.name }}</span>\n    </div>\n\n    \x3c!-- Icon --\x3e\n    <div class="row">\n      <div class="col-0 col-sm-4"></div>\n      <strong class="col-6 col-sm-3">Icon: </strong>\n\n      <span class="col-6 col-sm-5">\n        @if (marker.icon) {\n          {{ marker.icon }}\n          ( <app-icon [icon]="marker.icon"></app-icon> )\n        } @else {\n          {{ marker.type_details?.icon }}\n          ( <app-icon [icon]="marker.type_details?.icon!"></app-icon> )\n          <span class="hint"> (from marker type) </span>\n        }\n      </span>\n    </div>\n\n    \x3c!-- Color --\x3e\n    <div class="row mb-5">\n      <div class="col-sm-4 col-0"></div>\n      <strong class="col-6 col-sm-3">Color: </strong>\n\n      <span class="col-sm-5 col-6">\n        @if (marker.color) {\n          {{ marker.color }}\n        } @else {\n          {{ marker.type_details?.color }}\n          <span class="hint"> (from marker type) </span>\n        }\n      </span>\n    </div>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [buttonLink]="locationUrl"\n      [buttonLabel]="\'Back to \' + marker.location_details?.name"\n      [showDelete]="canDelete"\n      [deleteMessage]="\'Delete Marker?\'"\n      (delete)="markerDelete.emit(marker)"\n    ></app-article-footer>\n  </article>\n</app-page-container>\n',imports:[page_container_component.i,router.Wk,button_component.Q,icon_component.R,article_footer_component.D],styles:[marker_componentngResource_default()]})],MarkerComponent);const dummyMarker=marker_service_mock.a[0],marker_stories={title:"DesignSystem/Templates/MarkerComponent",component:MarkerComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,animations.BrowserAnimationsModule],declarations:[]})],args:{marker:dummyMarker,canUpdate:!0,canDelete:!0}},Template=args=>({props:{...args,markerDelete:(0,dist.XI)("markerDelete")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    markerDelete: action('markerDelete')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    markerDelete: action('markerDelete')\n  }\n})",...NoPermission.parameters?.docs?.source}}}},"./src/app/design/molecules/article-footer/article-footer.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"app-confirmation-toggle-button {\n  --align: end;\n}\n\n.footer {\n  display: flex;\n  justify-content: space-between;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/templates/marker/marker.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".marker__edit-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.marker__subheading {\n  margin-bottom: var(--spacer-3);\n  text-align: center;\n}\n\n.heading {\n  text-align: center;\n}\n\n.hint {\n  margin-left: var(--spacer-3);\n  color: var(--bs-gray);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);