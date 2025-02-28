(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[4295],{"./src/app/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/app/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/app/design/organisms/location/location.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>LocationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var location_componentngResource=__webpack_require__("./src/app/design/organisms/location/location.component.scss?ngResource"),location_componentngResource_default=__webpack_require__.n(location_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),html_text_component=__webpack_require__("./src/app/design/atoms/html-text/html-text.component.ts"),separator_component=__webpack_require__("./src/app/design/atoms/separator/separator.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts");let LocationComponent=class LocationComponent{constructor(){this.routingService=(0,core.inject)(routing_service.O),this.location=core.input.required(),this.campaignCharacters=core.input.required(),this.link=(0,core.computed)((()=>{const loc=this.location(),parentLocationName=loc.parent_location_details?.name,campaignName=loc.campaign_details?.name;return this.routingService.getRoutePath("location",{parent_name:parentLocationName,name:loc.name,campaign:campaignName})})),this.localCharacters=(0,core.computed)((()=>{const characters=this.location().characters??[],campaignName=this.location().campaign_details?.name;return characters.map((character=>{const link=this.routingService.getRoutePath("character",{campaign:campaignName,name:character.name});return{badgeValue:character,text:character.name,link}}))}))}static{this.propDecorators={location:[{type:core.Input,args:[{isSignal:!0,alias:"location",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}]}}};LocationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-location",template:'<a class="location-title" [routerLink]="link()">\n  <h4 class="card__heading">\n    {{ location().name }}\n  </h4>\n</a>\n\n\x3c!-- Location --\x3e\n<div class="card__text">\n  <app-html-text [text]="location().description"></app-html-text>\n</div>\n\n<app-separator></app-separator>\n\x3c!-- List of Characters at this location --\x3e\n@if (localCharacters().length > 0) {\n  <div class="card__connections">\n    <app-badge-list\n      [entries]="localCharacters()"\n      [label]="\'Local Characters\'"\n      [canCreate]="false"\n      [canDelete]="false"\n    ></app-badge-list>\n  </div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[separator_component.F,html_text_component.m,molecules.pn,router.Wk],styles:[location_componentngResource_default()]})],LocationComponent)},"./node_modules/rxjs/dist/esm5/internal/operators/share.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>share});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Subject__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function share(options){void 0===options&&(options={});var _a=options.connector,connector=void 0===_a?function(){return new _Subject__WEBPACK_IMPORTED_MODULE_0__.B}:_a,_b=options.resetOnError,resetOnError=void 0===_b||_b,_c=options.resetOnComplete,resetOnComplete=void 0===_c||_c,_d=options.resetOnRefCountZero,resetOnRefCountZero=void 0===_d||_d;return function(wrapperSource){var connection,resetConnection,subject,refCount=0,hasCompleted=!1,hasErrored=!1,cancelReset=function(){null==resetConnection||resetConnection.unsubscribe(),resetConnection=void 0},reset=function(){cancelReset(),connection=subject=void 0,hasCompleted=hasErrored=!1},resetAndUnsubscribe=function(){var conn=connection;reset(),null==conn||conn.unsubscribe()};return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){refCount++,hasErrored||hasCompleted||cancelReset();var dest=subject=null!=subject?subject:connector();subscriber.add((function(){0!==--refCount||hasErrored||hasCompleted||(resetConnection=handleReset(resetAndUnsubscribe,resetOnRefCountZero))})),dest.subscribe(subscriber),!connection&&refCount>0&&(connection=new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Ms({next:function(value){return dest.next(value)},error:function(err){hasErrored=!0,cancelReset(),resetConnection=handleReset(reset,resetOnError,err),dest.error(err)},complete:function(){hasCompleted=!0,cancelReset(),resetConnection=handleReset(reset,resetOnComplete),dest.complete()}}),(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(source).subscribe(connection))}))(wrapperSource)}}function handleReset(reset,on){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];if(!0!==on){if(!1!==on){var onSubscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Ms({next:function(){onSubscriber.unsubscribe(),reset()}});return(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(on.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_4__.zs)(args)))).subscribe(onSubscriber)}}else reset()}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),_share__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,_share__WEBPACK_IMPORTED_MODULE_0__.u)({connector:function(){return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./src/app/design/organisms/location/location.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FewerConnections:()=>FewerConnections,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_router_testing__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_app_services_routing_mock_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/_services/routing.mock.service.ts"),src_app_services_routing_service__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/_services/routing.service.ts");const dummyLocation={name:"The Dark Forest",name_full:"The Dark Forest",description:"<p>The Dark Forest is a dense, sprawling forest shrouded in perpetual mist and darkness. It is said that those who enter the forest are never seen again, their screams echoing through the trees for eternity.</p><p>Legends speak of ancient curses and malevolent spirits haunting the forest, and travelers are warned to stay away. However, some brave or foolish souls venture into the forest in search of rare herbs and magical artifacts, risking life and limb to uncover its secrets.</p><p>Rumors also abound of a hidden village deep within the forest, where a secretive society of druids and witches practice forbidden magic and worship dark deities.</p>",parent_location:1,images:[],parent_location_details:{pk:1,name:"The Kingdom of Eldrid",parent_location:"",name_full:"The Kingdom of Eldrid"},parent_location_list:["The Kingdom of Eldrid","The Northern Territories"],characters:[{name:"Elena",pk:123,name_full:"Elena, the Witch of the Dark Forest"},{name:"Thorne",pk:456,name_full:"Thorne, the Shadow Assassin"}],sublocations:[{creation_datetime:"2022-03-15T10:22:34.567Z",update_datetime:"2022-05-01T14:12:45.678Z",name:"The Witch's Hut",pk:789,characters:[{name:"Morgana",pk:234,name_full:"Morgana, the Dark Witch"}],name_full:"The Witch's Hut in the Dark Forest",description:"\n        <p>\n          The Witch's Hut is a small, dilapidated cabin hidden deep in the heart of the Dark Forest. \n          It is said to be the dwelling place of Elena, the Witch of the Dark Forest, who brews powerful potions and performs arcane rituals within its walls.\n        </p>\n        \n        <p>\n          The hut is surrounded by twisted trees and eerie toadstools, and the air is thick with the scent of herbs and incense. \n          Visitors are warned to approach with caution, as Elena is known to be both unpredictable and dangerous.\n        </p>\n      ",parent_location:2,getAbsoluteRouterUrl:()=>"/locations/the-kingdom-of-eldrid"}],marker_details:[{map:"The Kingdom of Eldrid",map_icon:"https://example.com/dark-forest-icon.png"}],getAbsoluteRouterUrl:()=>"/locations/the-kingdom-of-eldrid",getAbsoluteRouterUrlForParentLocation:()=>"/locations/the-kingdom-of-eldrid"},__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/LocationComponent",component:__webpack_require__("./src/app/design/organisms/location/location.component.ts").b,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_4__.c,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.BrowserAnimationsModule],providers:[{provide:src_app_services_routing_service__WEBPACK_IMPORTED_MODULE_2__.O,useClass:src_app_services_routing_mock_service__WEBPACK_IMPORTED_MODULE_1__.W}]})],args:{campaignCharacters:[{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gandalf",pk:1,name_full:"Gandalf the Grey",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Frodo",pk:2,name_full:"Frodo Baggins",player_character:!0,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gimli",pk:3,name_full:"Gimli son of Glóin",player_character:!1,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Legolas",pk:4,name_full:"Legolas Greenleaf",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Bilbo",pk:5,name_full:"Bilbo Baggins",player_character:!1,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Aragorn",pk:6,name_full:"Aragorn son of Arathorn",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Saruman",pk:7,name_full:"Saruman the White",player_character:!1,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Sif",pk:18,name_full:"Sif the Swift",description:"Sif is a skilled warrior known for her lightning-fast strikes and agility. She is fiercely loyal to her friends and will stop at nothing to protect them.",update_datetime:"2022-03-15T10:30:00.000Z",player_character:!0,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gorin",pk:19,name_full:"Gorin Ironfist",description:"Gorin is a dwarf from the Iron Hills, known for his strength and unwavering determination. He has a fondness for ale and a good brawl.",update_datetime:"2022-02-23T14:15:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg","https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Lirien",pk:20,name_full:"Lirien Windrider",description:"Lirien is an elven archer, renowned for her skill with the bow. She is fiercely independent and often clashes with authority figures.",update_datetime:"2022-03-20T08:45:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}}],location:dummyLocation}},Template=args=>({props:{...args}}),Default=Template.bind({});Default.args={};const shortCharacterList=dummyLocation.characters?.slice(0,3),FewerConnections=Template.bind({});FewerConnections.args={location:{...dummyLocation,characters:[...shortCharacterList]}};const __namedExportsOrder=["Default","FewerConnections"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}},FewerConnections.parameters={...FewerConnections.parameters,docs:{...FewerConnections.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...FewerConnections.parameters?.docs?.source}}}},"./src/app/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/location/location.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".location-title {\n  width: fit-content;\n  display: block;\n}\n\n.card {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n  padding: var(--spacer-4);\n}\n.card__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__text {\n  margin-bottom: var(--spacer-4);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);