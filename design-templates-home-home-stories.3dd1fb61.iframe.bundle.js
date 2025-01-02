(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3779],{"./src/app/_services/utils/campaign.mock.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_B:()=>dummyCampaigns,jr:()=>dummyCampaign,mE:()=>dummyStatistics});const dummyCampaigns=[{pk:1,name:"Aldrune",subtitle:"A campaign made by Samuel Day and recorded by Philipp Dörner<br>through the eyes of Relentless",background_image:"/media/campaign_backgrounds/bg.jpg",is_deactivated:!1,has_audio_recording_permission:!0,icon:"/media/campaign_icons/favicon-128x128.png",default_map:1,default_map_details:{icon:"map",image:"pic05_sMT2d6M.jpg",name:"Aldrune",id:1},duration:{start_date:"2020-04-07T00:00:00.000000Z",last_date:"2023-04-11T00:00:00.000000Z"}},{pk:2,name:"Jōzai Corp",subtitle:"Welcome to Jōzai Corp, please enjoy your employment.",background_image:"/media/campaign_backgrounds/shanghai_city_snlaYDd.jpg",is_deactivated:!1,has_audio_recording_permission:!1,icon:"/media/campaign_icons/icon.png",default_map:void 0,default_map_details:void 0,duration:{start_date:"2022-01-15T00:00:00.000000Z",last_date:"2022-02-19T00:00:00.000000Z"}}],dummyStatistics={character_count:265,item_count:142,location_count:229,creature_count:42,diaryentry_count:101,encounter_count:954,organization_count:46,quest_count:69,quote_count:203,session_audio_count:69,timestamp_count:1121,map_count:7,marker_count:136,spell_count:22,session_count:90,rule_count:17},dummyCampaign={name:"Aldrune",subtitle:"A campaign for testing",pk:1,background_image:"/assets/default_images/audio_pic_default.webp",icon:"https://www.aldrune.com/media/campaign_icons/favicon-128x128.png",default_map:123,default_map_details:{id:123,name:"Default Map",icon:"plus",image:"blub.jpg"},is_deactivated:!1,has_audio_recording_permission:!0,members:[{username:"isofruit",password:"password1",pk:1,api_permissions:["permission1","permission2"],groups:[1,2],group_details:[{name:"group1",pk:1},{name:"group2",pk:2}],is_staff:!0,is_superuser:!1,email:"user1@example.com",is_active:!0},{username:"user2",password:"password2",pk:2,api_permissions:["permission3","permission4"],groups:[1,3],group_details:[{name:"group1",pk:1},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user2@example.com",is_active:!0}],admins:[{username:"admin",password:"adminpassword",pk:3,api_permissions:["permission1","permission2","permission3","permission4"],groups:[1,2,3],group_details:[{name:"group1",pk:1},{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!0,is_superuser:!0,email:"admin@example.com",is_active:!0},{username:"user3",password:"password3",pk:4,api_permissions:["permission1"],groups:[1],group_details:[{name:"group1",pk:1}],is_staff:!1,is_superuser:!1,email:"user3@example.com",is_active:!0}],guests:[{username:"user4",password:"password4",pk:5,api_permissions:["permission2","permission3"],groups:[2,3],group_details:[{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user4@example.com",is_active:!0},{username:"user5",password:"password5",pk:6,api_permissions:["permission4"],groups:[3],group_details:[{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user5@example.com",is_active:!0}],member_group_name:"Members",admin_group_name:"Admins",guest_group_name:"Guests",emptySearchResponses:[{id:1,text:"Empty response 1",campaign:1},{id:2,text:"Empty response 2",campaign:1}]}},"./src/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/design/atoms/placeholder/placeholder.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>PlaceholderComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var placeholder_componentngResource=__webpack_require__("./src/design/atoms/placeholder/placeholder.component.scss?ngResource"),placeholder_componentngResource_default=__webpack_require__.n(placeholder_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let PlaceholderComponent=class PlaceholderComponent{};PlaceholderComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-placeholder",standalone:!0,imports:[],host:{class:"placeholder-wave","aria-hidden":"true"},template:'<div class="placeholder"></div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[placeholder_componentngResource_default()]})],PlaceholderComponent)},"./src/design/organisms/icon-card-list/icon-card-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>IconCardListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_card_list_componentngResource=__webpack_require__("./src/design/organisms/icon-card-list/icon-card-list.component.scss?ngResource"),icon_card_list_componentngResource_default=__webpack_require__.n(icon_card_list_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),molecules=__webpack_require__("./src/design/molecules/index.ts"),placeholder_component=__webpack_require__("./src/design/atoms/placeholder/placeholder.component.ts");let IconCardListComponent=class IconCardListComponent{constructor(){this.isLoading=core.input.required(),this.articles=core.input.required(),this.dummyArticles=Array.from({length:12},((_,idx)=>idx))}static{this.propDecorators={isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!0,transform:void 0}]}],articles:[{type:core.Input,args:[{isSignal:!0,alias:"articles",required:!0,transform:void 0}]}]}}};IconCardListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon-card-list",template:'<div class="row">\n  @for (article of articles(); track $index) {\n    <div class="entry col-6 col-lg-4 col-xl-3">\n      <a\n        class="entry__link"\n        [routerLink]="article.link"\n        [title]="article.title"\n      >\n        <app-icon-card\n          [icon]="article.icon"\n          [title]="article.title"\n          [subText]="article.subText"\n          [updateDatetime]="article.updateDatetime"\n          [decoration]="article.decoration"\n        ></app-icon-card>\n      </a>\n    </div>\n  }\n  @if (isLoading()) {\n    @for (item of dummyArticles; track $index) {\n      <app-placeholder\n        class="entry entry--placeholder col-6 col-lg-4 col-xl-3"\n      />\n    }\n  }\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[molecules.nF,router.Wk,placeholder_component.R],styles:[icon_card_list_componentngResource_default()]})],IconCardListComponent)},"./src/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',standalone:!0,imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./src/environments/environment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>environment});const environment={kind:"DEVELOPMENT",backendDomain:"https://www.aldrune.com",apiUrl:"/wiki1/api",defaultTitle:"StoryFont",frontendPrefix:"wiki2"}},"./src/utils/logging.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>log});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");function log(debugSymbol,...data){(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()&&(console.groupCollapsed(`[DEBUG] ${debugSymbol}:`,data),console.trace(),console.groupEnd())}},"./src/utils/rxjs-operators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{cY:()=>debugLog,fC:()=>delayFalsy,u5:()=>filterNil});var rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/pipe.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js"),src_environments_environment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/environments/environment.ts"),_logging__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/logging.ts");function filterNil(){return(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.p)((x=>null!=x))}const debugLog=debugSymbol=>{const isDevelop="DEVELOPMENT"===src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.c.kind;return(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.M)((x=>{isDevelop&&(0,_logging__WEBPACK_IMPORTED_MODULE_3__.R)(debugSymbol,x)}))};function delayFalsy(delayByMs=1e3){return(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.F)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.n)((x=>(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(x).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.c)(x?0:delayByMs)))))}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),Subscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function handleReset(reset,on){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];if(!0!==on){if(!1!==on){var onSubscriber=new Subscriber.Ms({next:function(){onSubscriber.unsubscribe(),reset()}});return(0,innerFrom.Tg)(on.apply(void 0,(0,tslib_es6.fX)([],(0,tslib_es6.zs)(args)))).subscribe(onSubscriber)}}else reset()}function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,function share(options){void 0===options&&(options={});var _a=options.connector,connector=void 0===_a?function(){return new Subject.B}:_a,_b=options.resetOnError,resetOnError=void 0===_b||_b,_c=options.resetOnComplete,resetOnComplete=void 0===_c||_c,_d=options.resetOnRefCountZero,resetOnRefCountZero=void 0===_d||_d;return function(wrapperSource){var connection,resetConnection,subject,refCount=0,hasCompleted=!1,hasErrored=!1,cancelReset=function(){null==resetConnection||resetConnection.unsubscribe(),resetConnection=void 0},reset=function(){cancelReset(),connection=subject=void 0,hasCompleted=hasErrored=!1},resetAndUnsubscribe=function(){var conn=connection;reset(),null==conn||conn.unsubscribe()};return(0,lift.N)((function(source,subscriber){refCount++,hasErrored||hasCompleted||cancelReset();var dest=subject=null!=subject?subject:connector();subscriber.add((function(){0!=--refCount||hasErrored||hasCompleted||(resetConnection=handleReset(resetAndUnsubscribe,resetOnRefCountZero))})),dest.subscribe(subscriber),!connection&&refCount>0&&(connection=new Subscriber.Ms({next:function(value){return dest.next(value)},error:function(err){hasErrored=!0,cancelReset(),resetConnection=handleReset(reset,resetOnError,err),dest.error(err)},complete:function(){hasCompleted=!0,cancelReset(),resetConnection=handleReset(reset,resetOnComplete),dest.complete()}}),(0,innerFrom.Tg)(source).subscribe(connection))}))(wrapperSource)}}({connector:function(){return new ReplaySubject.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./src/design/templates/home/home.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>home_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),campaign_mock_service=__webpack_require__("./src/app/_services/utils/campaign.mock.service.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var home_componentngResource=__webpack_require__("./src/design/templates/home/home.component.scss?ngResource"),home_componentngResource_default=__webpack_require__.n(home_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),page_container_component=__webpack_require__("./src/design/organisms/page-container/page-container.component.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),online_service=__webpack_require__("./src/app/_services/online.service.ts"),global_store=__webpack_require__("./src/app/global.store.ts"),placeholder_component=__webpack_require__("./src/design/atoms/placeholder/placeholder.component.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),search_field_component=__webpack_require__("./src/design/molecules/search-field/search-field.component.ts"),icon_card_list_component=__webpack_require__("./src/design/organisms/icon-card-list/icon-card-list.component.ts");let HomeComponent=class HomeComponent{constructor(){this.globalStore=(0,core.inject)(global_store.v),this.PAGE_BOTTOM_MIN_DISTANCE_FOR_PAGE_LOAD=400,this.DEFAULT_ICON="/assets/icons/icon-512x512.webp",this.ARTICLE_ICON_MAP={location:"compass",encounter:"comments",creature:"dragon",character:"male",diaryentry:"book-open",item:"magic",map:"map",organization:"sitemap",quest:"question-circle",sessionaudio:"file-audio",rules:"book",spell:"hand-sparkles",session:"calendar-alt"},this.serverUrl=core.input.required(),this.campaignData=core.input.required(),this.articles=core.input.required(),this.isLoading=core.input.required(),this.canLoadMore=core.input.required(),this.isOnline$=(0,core.inject)(online_service.D).online$,this.appSearch=new core.EventEmitter,this.loadArticlePage=new core.EventEmitter,this.articleEntries=(0,core.computed)((()=>this.articles()?.map((article=>this.toIconCardEntry(article)))??[])),this.pageNumber=0,(0,core.effect)((()=>{const articles=this.articles();if(void 0===articles||0===articles.length)return;const scrollEvent=this.globalStore.contentScrollEvents();scrollEvent&&this.onPageScroll(scrollEvent)}))}toIconCardEntry(article){return{entryType:article.article_type.toUpperCase(),icon:this.ARTICLE_ICON_MAP[article.article_type],link:article.getAbsoluteRouterUrl(),title:article.name,subText:article.article_type.toLowerCase(),updateDatetime:article.update_datetime,decoration:this.toDecorationLabel(article.visited_state)}}toDecorationLabel(visibilityState){switch(visibilityState){case"NEW_UPDATED":return"Updated";case"NEW_CREATED":return"New";default:return}}onPageScroll(event){this.isNearPageEnd(event)&&this.triggerNextPageLoad()}triggerNextPageLoad(){!this.isLoading()&&null!=this.articles()&&this.canLoadMore()&&(this.pageNumber+=1,this.loadArticlePage.emit(this.pageNumber))}isNearPageEnd(pageScrollEvent){const pageElement=pageScrollEvent.detail.pageElement.nativeElement;return pageElement.scrollHeight-pageElement.clientHeight-pageElement.scrollTop<this.PAGE_BOTTOM_MIN_DISTANCE_FOR_PAGE_LOAD}static{this.ctorParameters=()=>[]}static{this.propDecorators={serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],campaignData:[{type:core.Input,args:[{isSignal:!0,alias:"campaignData",required:!0,transform:void 0}]}],articles:[{type:core.Input,args:[{isSignal:!0,alias:"articles",required:!0,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!0,transform:void 0}]}],canLoadMore:[{type:core.Input,args:[{isSignal:!0,alias:"canLoadMore",required:!0,transform:void 0}]}],appSearch:[{type:core.Output}],loadArticlePage:[{type:core.Output}]}}};HomeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-home",template:'<app-page-container>\n  <article class="home">\n    \x3c!-- Heading --\x3e\n    @if (campaignData()) {\n      <header class="home__heading-container heading-container">\n        <img\n          class="heading-container__icon"\n          [src]="serverUrl() + campaignData()?.icon"\n          [alt]="DEFAULT_ICON"\n        />\n        <h1 class="heading-container__heading">\n          {{ campaignData()?.name }}\n        </h1>\n        <app-html-text\n          class="heading-container__subheading"\n          [text]="campaignData()?.subtitle ?? \'\'"\n        ></app-html-text>\n      </header>\n    } @else {\n      <app-placeholder class="heading-container--placeholder" />\n    }\n\n    \x3c!-- Search Bar --\x3e\n    <app-search-field\n      class="home__search-bar"\n      [placeholder]="\'Search for Articles...\'"\n      [btnAriaLabel]="\n        \'Triggers a search for any articles matching the query in this campaign\'\n      "\n      [canSearch]="(isOnline$ | async) === true"\n      (appSearch)="appSearch.emit($event)"\n    ></app-search-field>\n\n    \x3c!-- News --\x3e\n    <app-icon-card-list\n      class="home__recently-updated-articles"\n      [isLoading]="isLoading()"\n      [articles]="articleEntries()"\n    ></app-icon-card-list>\n  </article>\n</app-page-container>\n',standalone:!0,imports:[page_container_component.i,html_text_component.m,search_field_component.q,icon_card_list_component.Z,placeholder_component.R,common.AsyncPipe],styles:[home_componentngResource_default()]})],HomeComponent);const home_stories={title:"DesignSystem/Templates/HomeComponent",component:HomeComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c],declarations:[]})],args:{serverUrl:"https://www.aldrune.com",articles:[{article_type:"location",name:"Castle Black",name_full:"Castle Black - The Night’s Watch",description:"The primary headquarters of the Night’s Watch",update_datetime:"2022-03-15",parent_location_details:{name:"The Wall",pk:123},getAbsoluteRouterUrl:()=>"/locations/456",pk:456,campaign_details:{id:789,name:"Dungeons and Dragons"}},{article_type:"character",name:"Jon Snow",name_full:"Jon Snow - The Bastard of Winterfell",description:"A member of the Night’s Watch and former Lord Commander",update_datetime:"2022-04-01",player_character:!0,images:[],getAbsoluteRouterUrl:()=>"/characters/789",pk:789,campaign_details:{id:789,name:"Dungeons and Dragons"}},{article_type:"diaryentry",name:"Jon Snow - Journal Entry #1",name_full:"Jon Snow - Journal Entry #1 - First Day on the Wall",description:"My first day at Castle Black was...interesting",update_datetime:"2022-04-05",session_details:{pk:234,session_number:1,is_main_session:!0,is_main_session_int:1},author_details:{pk:789,name:"Jon Snow"},getAbsoluteRouterUrl:()=>"/diaryentries/345",pk:345,campaign_details:{id:789,name:"Dungeons and Dragons"}},{article_type:"item",name:"Longclaw",name_full:"Longclaw - The Valyrian steel sword of Jon Snow",description:"A bastard sword made of Valyrian steel, with a hilt fashioned like a wolf",update_datetime:"2022-04-10",campaign_details:{id:567,name:"Game of Thrones RPG"},getAbsoluteRouterUrl:()=>"/items/890",pk:890},{article_type:"sessionaudio",name:"Game of Thrones RPG - Session 1",name_full:"Game of Thrones RPG - Session 1 - Beginning of the campaign",update_datetime:"2022-04-15",audio_url:"https://example.com/gameofthrones-session1.mp3",download_url:"https://example.com/gameofthrones-session1-download.mp3",session_details:{pk:234,session_number:1,is_main_session:!0,is_main_session_int:1},getAbsoluteRouterUrl:()=>"/session-audios/901",pk:901,campaign_details:{id:789,name:"Dungeons and Dragons"}},{article_type:"encounter",name:"Ambush in the Kingsroad",name_full:"Ambush in the Kingsroad - A band of bandits attack the party",description:"The party is ambushed while travelling on the Kingsroad, by a group of bandits led by a dangerous outlaw",update_datetime:"2022-04-20",icon:"swords-crossed",campaign_details:{id:567,name:"Game of Thrones RPG"},getAbsoluteRouterUrl:()=>"/encounters/123",pk:123},{article_type:"spell",name:"Fireball",name_full:"Fireball - A powerful explosion of fire",description:"A spell that creates a powerful explosion of fire, causing damage to all creatures within a certain area",update_datetime:"2022-04-25",campaign_details:{id:789,name:"Dungeons and Dragons"},getAbsoluteRouterUrl:()=>"/spells/234",pk:234},{article_type:"rule",name:"Critical Hits and Misses",name_full:"Critical Hits and Misses - Rules for critical hits and misses in combat",description:"A set of rules for determining the effects of critical hits and misses during combat",update_datetime:"2022-04-30",campaign_details:{id:789,name:"Dungeons and Dragons"},getAbsoluteRouterUrl:()=>"/rules/567",pk:567},{article_type:"quest",name:"The Black Knight",name_full:"The Black Knight - A quest to defeat a powerful undead warrior",description:"The players are hired to find and defeat the Black Knight, a powerful undead warrior who is terrorizing the countryside",update_datetime:"2022-05-10",campaign_details:{id:456,name:"Medieval Fantasy RPG"},getAbsoluteRouterUrl:()=>"/quests/345",pk:345},{article_type:"organization",name:"The Thieves Guild",name_full:"The Thieves Guild - A secret organization of skilled thieves",description:"The Thieves Guild is a secret organization of skilled thieves, who operate in the shadows and have their own code of honor",update_datetime:"2022-05-15",campaign_details:{id:456,name:"Medieval Fantasy RPG"},getAbsoluteRouterUrl:()=>"/organizations/678",pk:678},{article_type:"creature",name:"Beholder",name_full:"Beholder - A monstrous creature with numerous eyes and deadly abilities",description:"The Beholder is a monstrous creature with a large central eye and numerous smaller eyes around its head, each with a different deadly ability",update_datetime:"2022-05-20",campaign_details:{id:789,name:"Dungeons and Dragons"},getAbsoluteRouterUrl:()=>"/creatures/901",pk:901}],campaignData:campaign_mock_service.jr}},Default=(args=>({props:{...args,search:(0,dist.XI)("search")}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    search: action('search')\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/placeholder/placeholder.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: flex;\n  border-radius: var(--bs-border-radius);\n}\n\n.placeholder {\n  flex: 1;\n  border-radius: inherit;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/icon-card-list/icon-card-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".entry {\n  padding-left: var(--spacer-2);\n  padding-right: var(--spacer-2);\n  margin-bottom: var(--spacer-4);\n}\n.entry--placeholder {\n  height: 280px;\n}\n.entry__link {\n  font-weight: unset;\n  text-decoration: unset;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/home/home.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".home {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n.home__heading-container {\n  margin-bottom: var(--spacer-3);\n}\n.home__search-bar {\n  width: 100%;\n}\n.home__recently-updated-articles {\n  width: 100%;\n}\n\n.heading-container {\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n}\n.heading-container--placeholder {\n  width: 220px;\n  height: 180px;\n}\n@media (min-width: 768px) {\n  .heading-container--placeholder {\n    width: 340px;\n    height: 200px;\n  }\n}\n.heading-container__heading {\n  margin-bottom: var(--spacer-1);\n}\n.heading-container__subheading {\n  font-weight: bold;\n}\n.heading-container__icon {\n  align-self: center;\n  width: 128px;\n  height: 128px;\n  border-radius: var(--bs-border-radius);\n}\n\n.loading__spinner {\n  width: 64px;\n  height: 64px;\n  display: flex;\n  justify-content: center;\n  --thickness: 30px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);