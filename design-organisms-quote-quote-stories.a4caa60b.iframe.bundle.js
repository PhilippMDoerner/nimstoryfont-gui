"use strict";(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[9625],{"./src/utils/logging.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{R:()=>log});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");function log(debugSymbol,...data){(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()&&(console.groupCollapsed(`[DEBUG] ${debugSymbol}:`,data),console.trace(),console.groupEnd())}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/design/organisms/quote/quote.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/QuoteComponent",component:__webpack_require__("./src/design/organisms/quote/quote.component.ts").w,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_3__.c]})],args:{quote:{quote:"In the darkest of times, the light within us shines the brightest.",description:"Said by a wise old wizard to a young hero about to embark on a perilous quest.",pk:1,session:3,creation_datetime:"2023-04-22T12:00:00.000Z",update_datetime:"2023-04-23T12:00:00.000Z",session_details:{pk:3,is_main_session:!0,is_main_session_int:1,session_number:3,session_date:"2023-04-20",start_day:1,end_day:5,name:"The Quest for the Sacred Amulet",title:"The Quest"},encounter:2,connections:[{character:1,character_details:{pk:1,name:"Gandalf",name_full:"Gandalf the Grey"},quote:2,pk:2},{character:2,character_details:{pk:2,name:"Frodo",name_full:"Frodo Baggins"},quote:3,pk:3}]},character:{getAbsoluteRouterUrl:()=>"/dummy/url",player_character:!1,alive:!0,name:"Gandalf",title:"Gandalf the Grey",gender:"Male",race:"Maia",description:"A wise and powerful wizard, Gandalf the Grey is a member of the Fellowship of the Ring and a key figure in the fight against the Dark Lord Sauron.",organizations:[{pk:1,name:"The White Council",organization_id:1,role:"Member"},{pk:2,name:"The Fellowship of the Ring",organization_id:2,role:"Member"}],current_location:3,current_location_details:{pk:3,name_full:"Moria",parent_location:"Middle-earth"},items:[{pk:1,name:"Glamdring"},{pk:2,name:"Staff"}],encounters:[{name:"The Council of Elrond",creation_datetime:"2023-04-22T12:00:00.000Z",update_datetime:"2023-04-23T12:00:00.000Z",title:"Council of Elrond",diaryentry:50,order_index:20,encounterConnections:[{pk:1,encounter:2,character:3},{pk:2,encounter:3,character:4}],description:"At the Council of Elrond, Gandalf reveals the true nature of the One Ring and urges the Fellowship to destroy it in the fires of Mount Doom.",pk:1,campaign_details:{name:"Aldrune",id:1}},{name:"The Battle of Helm's Deep",title:"The Battle of Helm's Deep",diaryentry:20,order_index:30,creation_datetime:"2023-04-23T12:00:00.000Z",update_datetime:"2023-04-24T12:00:00.000Z",encounterConnections:[{pk:324,encounter:223,encounter_details:{name:"Main Session 6 - A new job",name_full:"Main Session 6 - A new job",pk:223},character:43,character_details:{name:"Aliana Sterent",name_full:"Aliana Sterent",pk:43}},{pk:325,encounter:223,encounter_details:{name:"Main Session 6 - A new job",name_full:"Main Session 6 - A new job",pk:223},character:29,character_details:{name:"Ateula",name_full:"Ateula",pk:29}}],description:"Gandalf arrives at Helm's Deep with reinforcements and turns the tide of the battle against Saruman's forces.",pk:2,campaign_details:{name:"Aldrune",id:1}}],images:[],player_class_connections:[{pk:1,player_class:8,character:5,player_class_details:{update_datetime:"2023-04-24T12:00:00.000Z",name:"Paladin",pk:8}}],campaign:1,campaign_details:{id:1,name:"The War of the Ring"}},canCreate:!0,canUpdate:!0,canDelete:!0,campaignCharacters:[{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Gandalf",pk:1,name_full:"Gandalf the Grey",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Frodo",pk:2,name_full:"Frodo Baggins",player_character:!0,images:[],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Gimli",pk:3,name_full:"Gimli son of Glóin",player_character:!1,images:[],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Legolas",pk:4,name_full:"Legolas Greenleaf",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Bilbo",pk:5,name_full:"Bilbo Baggins",player_character:!1,images:[],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Aragorn",pk:6,name_full:"Aragorn son of Arathorn",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Saruman",pk:7,name_full:"Saruman the White",player_character:!1,images:[],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Sif",pk:18,name_full:"Sif the Swift",description:"Sif is a skilled warrior known for her lightning-fast strikes and agility. She is fiercely loyal to her friends and will stop at nothing to protect them.",update_datetime:"2022-03-15T10:30:00.000Z",player_character:!0,images:[],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Gorin",pk:19,name_full:"Gorin Ironfist",description:"Gorin is a dwarf from the Iron Hills, known for his strength and unwavering determination. He has a fondness for ale and a good brawl.",update_datetime:"2022-02-23T14:15:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg","https://example.com/images/lirien1.jpg"],campaign_details:{id:567,name:"Game of Thrones RPG"}},{getAbsoluteRouterUrl:()=>"/character/456",article_type:"Character",name:"Lirien",pk:20,name_full:"Lirien Windrider",description:"Lirien is an elven archer, renowned for her skill with the bow. She is fiercely independent and often clashes with authority figures.",update_datetime:"2022-03-20T08:45:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:567,name:"Game of Thrones RPG"}}]}},Template=args=>({props:{...args,quoteDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("quoteDelete"),quoteCreate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("quoteCreate"),quoteUpdate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("quoteUpdate"),refreshQuote:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("refreshQuote"),connectionDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("connectionDelete"),connectionCreate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("connectionCreate")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canCreate:!1,canUpdate:!1,canDelete:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    quoteDelete: action('quoteDelete'),\n    quoteCreate: action('quoteCreate'),\n    quoteUpdate: action('quoteUpdate'),\n    refreshQuote: action('refreshQuote'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    quoteDelete: action('quoteDelete'),\n    quoteCreate: action('quoteCreate'),\n    quoteUpdate: action('quoteUpdate'),\n    refreshQuote: action('refreshQuote'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate')\n  }\n})",...NoPermission.parameters?.docs?.source}}}}}]);