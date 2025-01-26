"use strict";(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8249],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/design/molecules/compare-form/compare-form.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_common__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/platform-browser.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),src_app_modules_formly_constants__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./node_modules/tinymce/tinymce.js"),__webpack_require__("./src/app/_modules/formly_constants.ts")),_compare_form_component__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/design/molecules/compare-form/compare-form.component.ts");const dummyForm=[{key:"text",type:"text-editor",props:{label:"SomeText"}},{key:"file",type:"file",props:{label:"SomeFile",buttonType:"SECONDARY"}},{key:"username",type:"select-disable",props:{label:"User",labelProp:"username",valueProp:"username",options:(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)([{username:"john_doe",password:"password123",email:"john_doe@example.com",is_active:!0},{username:"jane_doe",password:"jane_password",email:"jane_doe@example.com",is_active:!0,groups:[1,2]},{username:"admin",password:"admin_password",email:"admin@example.com",is_active:!0,is_staff:!0,is_superuser:!0},{username:"bob_smith",password:"bob_password",email:"bob_smith@example.com",is_active:!1},{username:"sara_smith",password:"sara_password",email:"sara_smith@example.com",is_active:!0,api_permissions:["read","write"]},{username:"jim_brown",password:"jim_password",email:"jim_brown@example.com",is_active:!0,group_details:[{name:"Group A",pk:1},{name:"Group B",pk:2}]},{username:"lisa_green",password:"lisa_password",email:"lisa_green@example.com",is_active:!0,pk:123},{username:"jessica_jones",password:"jessica_password",email:"jessica_jones@example.com",is_active:!1,groups:[2,3]},{username:"peter_parker",password:"spidey_password",email:"peter_parker@example.com",is_active:!0},{username:"mary_jane",password:"mary_password",email:"mary_jane@example.com",is_active:!0,is_staff:!0},{username:"clark_kent",password:"superman_password",email:"clark_kent@example.com",is_active:!0,is_superuser:!0},{username:"bruce_wayne",password:"batman_password",email:"bruce_wayne@example.com",is_active:!1,group_details:[{name:"Justice League",pk:10}]},{username:"diana_prince",password:"wonder_woman_password",email:"diana_prince@example.com",is_active:!0,api_permissions:["read"]},{username:"thor_odinson",password:"hammer_password",email:"thor_odinson@example.com",is_active:!0,groups:[5]},{username:"steve_rogers",password:"cap_password",email:"steve_rogers@example.com",is_active:!1},{username:"tony_stark",password:"ironman_password",email:"tony_stark@example.com",is_active:!0},{username:"natasha_romanoff",password:"black_widow_password",email:"natasha_romanoff@example.com",is_active:!0,groups:[4]},{username:"vision",password:"mindstone_password",email:"vision@example.com",is_active:!0},{username:"wanda_maximoff",password:"scarlet_witch_password",email:"wanda_maximoff@example.com",is_active:!0,group_details:[{name:"Avengers",pk:11}]},{username:"sam_wilson",password:"falcon_password",email:"sam_wilson@example.com",is_active:!1},{username:"bucky_barnes",password:"winter_soldier_password",email:"bucky_barnes@example.com",is_active:!0},{username:"stephen_strange",password:"dr_strange_password",email:"stephen_strange@example.com",is_active:!0},{username:"pietro_maximoff",password:"quicksilver_password",email:"pietro_maximoff@example.com",is_active:!1},{username:"groot",email:"groot@example.com",is_active:!0},{username:"rocket",password:"rocket_password",email:"rocket@example.com",is_active:!0},{username:"drax",password:"drax_password",email:"drax@example.com",is_active:!0,groups:[5]},{username:"gamora",password:"gamora_password",email:"gamora@example.com",is_active:!1},{username:"nebula",password:"nebula_password",email:"nebula@example.com",is_active:!0},{username:"mantis",email:"mantis@example.com",is_active:!0},{username:"okoye",password:"okoye_password",email:"okoye@example.com",is_active:!0,group_details:[{name:"Dora Milaje",pk:12}]},{username:"shuri",email:"shuri@example.com",is_active:!1},{username:"nakia",password:"nakia_password",email:"nakia@example.com",is_active:!0},{username:"ramonda",email:"ramonda@example.com",is_active:!0},{username:"mbaku",password:"mbaku_password",email:"mbaku@example.com",is_active:!0,groups:[4]},{username:"erik_killmonger",password:"killmonger_password",email:"erik_killmonger@example.com",is_active:!1},{username:"hank_pym",password:"antman_password",email:"hank_pym@example.com",is_active:!0,group_details:[{name:"Ant-Man and the Wasp",pk:13}]}]),additionalProperties:{disabledExpression:selectOption=>(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.of)(isInGroup(selectOption,"group a"))},tooltipMessage:"Members typically represent the individual player characters + the GM(s)",warningMessage:"The user you selected is already member of this campaign"}},{key:"date",type:"datepicker",props:{label:"SomeDate"}}],isInGroup=(selectOption,groupName)=>{const groupsOfUser=selectOption.group_details;if(!(null!=groupsOfUser))return!1;return groupsOfUser.some((group=>group.name.toLowerCase()===groupName))},__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/CompareFormComponent",component:_compare_form_component__WEBPACK_IMPORTED_MODULE_4__.z,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({declarations:[],imports:[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule,_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_8__.sv,src_app_modules_formly_constants__WEBPACK_IMPORTED_MODULE_3__.d_]})],args:{enctype:"application/x-www-form-urlencoded",fields:dummyForm,modelFromServer:{text:"Some prefill text",date:"2023-04-14",username:"admin",file:"C:\\fakepath\\some\\file.jpg"},modelFromUser:{text:"Other prefill text",date:"2023-04-03",username:"groot",file:"C:\\fakepath\\other\\file.jpg"},displayVertically:!1}},Default=(args=>({props:{...args,formlySubmit:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("formlySubmit"),formlyCancel:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("formlyCancel")}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    formlySubmit: action('formlySubmit'),\n    formlyCancel: action('formlyCancel')\n  }\n})",...Default.parameters?.docs?.source}}}}}]);