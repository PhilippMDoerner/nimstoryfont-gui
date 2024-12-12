(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[9623],{"./src/app/_services/article/group.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>dummyGroups});const dummyGroups=[{url:"https://example.com/group1",name:"Group 1",permissions:["read","write"],id:1},{url:"https://example.com/group2",name:"Group 2",permissions:["read","delete"],id:2},{url:"https://example.com/group3",name:"Group 3",permissions:["write","execute"],id:3},{url:"https://example.com/admin",name:"Admin",permissions:["read","write","delete","execute"],id:4},{url:"https://example.com/guest",name:"Guest",permissions:["read"],id:5},{url:"https://example.com/member",name:"Member",permissions:["read","write"],id:6}]},"./src/app/_services/article/user.mock.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>dummyUsers});const dummyUsers=[{username:"isofruit",pk:3,email:"philippmdoerner@web.de",is_staff:!0,is_superuser:!0,is_active:!0,groups:[3,4],group_details:[{name:"Aldrune_campaign_group",pk:3},{name:"Aldrune_campaign_admin_group",pk:4}]},{username:"Rhiannon",pk:6,email:"dianaday@gmx.net",is_staff:!1,is_superuser:!1,is_active:!0,groups:[3],group_details:[{name:"Aldrune_campaign_group",pk:3}]},{username:"SamDay",pk:7,email:void 0,is_staff:!0,is_superuser:!1,is_active:!0,groups:[],group_details:[]},{username:"Murtagh",pk:8,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[3,6],group_details:[{name:"Aldrune_campaign_group",pk:3},{name:"Jōzai Corporation_guest_campaign_group",pk:6}]},{username:"Ailis",pk:9,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Caitriona",pk:10,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[3,7,8],group_details:[{name:"Aldrune_campaign_group",pk:3},{name:"Jōzai Corporation_campaign_group",pk:7},{name:"Jōzai Corporation_campaign_admin_group",pk:8}]},{username:"Fen",pk:11,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[3],group_details:[{name:"Aldrune_campaign_group",pk:3}]},{username:"Bathilde",pk:12,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[3,7],group_details:[{name:"Aldrune_campaign_group",pk:3},{name:"Jōzai Corporation_campaign_group",pk:7}]},{username:"Guest",pk:14,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Relentless",pk:15,email:"philipp3000doerner@web.de",is_staff:!0,is_superuser:!1,is_active:!0,groups:[3],group_details:[{name:"Aldrune_campaign_group",pk:3}]},{username:"Guest2",pk:16,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Mipp1",pk:17,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Spleeti",pk:18,email:"Laura.spleet@posteo.de",is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Christian",pk:19,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Norbert",pk:20,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Papa",pk:21,email:"Dr.KlemensDoerner@gmx.de",is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Tecatin",pk:22,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[7],group_details:[{name:"Jōzai Corporation_campaign_group",pk:7}]},{username:"Roach",pk:23,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5,7],group_details:[{name:"Aldrune_guest_campaign_group",pk:5},{name:"Jōzai Corporation_campaign_group",pk:7}]},{username:"Mav",pk:25,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[5],group_details:[{name:"Aldrune_guest_campaign_group",pk:5}]},{username:"Sam",pk:28,email:void 0,is_staff:!1,is_superuser:!1,is_active:!0,groups:[4],group_details:[{name:"Aldrune_campaign_admin_group",pk:4}]}]},"./src/app/_services/formly/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dq:()=>fieldsDontMatchMessage,EC:()=>timeValidator,N8:()=>dateValidator,Nd:()=>faPrefixMessage,Ou:()=>dateMessage,Oy:()=>requiredIconMessage,Z5:()=>specialCharacterValidator,cC:()=>iconValidator,d:()=>hasSpecialCharactersMessage,h9:()=>requiredMessage,iR:()=>numberValidator,jp:()=>integerValidator,k1:()=>sessionAlreadyHasAuthor,kO:()=>fieldMatchValidator,lk:()=>requiredIconValidator,tu:()=>notNumberMesage,wh:()=>invalidTimeMessage,yt:()=>requiredValidator,zG:()=>notIntegerMessage});const invalidTimeMessage={name:"time",message:"Time must have 'hh:mm:ss' pattern"},requiredMessage={name:"required",message:"This field is required!"},dateMessage={name:"date",message:"This date does not follow the pattern: 'YYYY-MM-DD'. Sorry to be such a Nazi about it. The computer is forcing me."},requiredIconMessage={name:"requiredIcon",message:"This field requires a fontawesome icon as input. Here is a list of them: https://fontawesome.com/v4.7.0/icons/"},faPrefixMessage={name:"faPrefix",message:"Icons are stored without the 'fa-' from font-awesome prefix"},notIntegerMessage={name:"notInteger",message:"Your input is not an integer. This field requires an integer number. No amount of revolution can overcome this."},notNumberMesage={name:"notNumber",message:"Your input is not a number."},hasSpecialCharactersMessage={name:"hasSpecialCharacters",message:'Your input includes one of the following invalid special characters: [ ] ( ) ? | \\ " % ~ # < > :. If you need to rebel, please dont against this.'},fieldsDontMatchMessage={name:"fieldMatch",message:"Password Not Matching"},sessionAlreadyHasAuthor={name:"isInvalidSessionAuthorPair",message:"\n    The author you selected already has a diaryentry in the session you selected. You \n    can't have 2 diaryentries from the same author in the same session. Consider writing \n    your diaryentry as an encounter instead into the diaryentry at the spot you just considered."};const timeValidator={name:"time",validation:function timeValidation(control){const isValidTime=/\d\d.[0-5]\d.[0-5]\d/.test(control.value);return isValidTime?null:{time:!isValidTime}}};function requiredValidation(control){return!!control.value||0===control.value?null:{required:!0}}const requiredValidator={name:"required",validation:requiredValidation},requiredIconValidator={name:"requiredIcon",validation:requiredValidation};const dateValidator={name:"date",validation:function dateValidation(control){return/[1-2]\d{3}-(0\d|1[0-2])-[0-3]\d/.test(control.value)?null:{date:!0}}};const iconValidator={name:"faPrefix",validation:function iconValidation(control){const hasFaPrefix=/fa-/.test(control.value),hasFasPrefix=/fas-/.test(control.value),isValidIcon=hasFaPrefix||hasFasPrefix;return isValidIcon?null:{faPrefix:isValidIcon}}};const integerValidator={name:"notInteger",validation:function isIntegerValidation(control){if(null==control.value)return null;const isInteger="number"==typeof control.value&&Number.isInteger(control.value);return isInteger?null:{notInteger:!isInteger}}};const numberValidator={name:"notNumber",validation:function isNumberValidation(control){const isNumberType="number"==typeof control.value,isNumberString="string"==typeof control.value&&!isNaN(control.value),isNumber=isNumberType||isNumberString;return isNumber?null:{notNumber:!isNumber}}};const specialCharacterValidator={name:"hasSpecialCharacters",validation:function hasNoSpecialCharactersValidation(control){if("string"==typeof control.value){const specialCharacters=["[","]","(",")","|","\\",'"',"%","~","#","<",">","?","/",":"];for(const specialCharacter of specialCharacters)if(control.value.includes(specialCharacter))return{hasSpecialCharacters:!0}}return null}};const fieldMatchValidator={name:"fieldMatch",validation:function passwordMatchValidation(control){const{password,passwordConfirm}=control.value;return passwordConfirm&&password&&passwordConfirm===password?null:{fieldMatch:!0}}}},"./src/design/organisms/user-row/user-row.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>UserRowComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var user_row_componentngResource=__webpack_require__("./src/design/organisms/user-row/user-row.component.scss?ngResource"),user_row_componentngResource_default=__webpack_require__.n(user_row_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),molecules=__webpack_require__("./src/design/molecules/index.ts");let UserRowComponent=class UserRowComponent{constructor(){this.user=core.input.required(),this.groups=(0,core.input)(),this.canCreate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.addGroup=new core.EventEmitter,this.removeGroup=new core.EventEmitter,this.deleteUser=new core.EventEmitter,this.userGroupEntries=(0,core.computed)((()=>this.user().group_details?.map((group=>({badgeValue:group.pk,text:group.name})))??[]))}static{this.propDecorators={user:[{type:core.Input,args:[{isSignal:!0,alias:"user",required:!0,transform:void 0}]}],groups:[{type:core.Input,args:[{isSignal:!0,alias:"groups",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],addGroup:[{type:core.Output}],removeGroup:[{type:core.Output}],deleteUser:[{type:core.Output}]}}};UserRowComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-user-row",template:'<div class="container user-card">\n  <h3 class="row user-card__row user-card__row--heading">\n    <div class="col-12">\n      <app-icon [icon]="\'user\'"></app-icon>\n      {{ user().username | titlecase }}\n      @if (!user().is_active) {\n        <span title="Deleted/Deactivated"> (†) </span>\n      }\n    </div>\n  </h3>\n\n  <div class="row user-card__row">\n    <app-badge-list\n      class="col-12"\n      [canCreate]="canCreate()"\n      [canDelete]="canDelete()"\n      [entries]="userGroupEntries()"\n      [createOptions]="{\n        kind: \'SELECT\',\n        config: {\n          valueProp: \'id\',\n          labelProp: \'name\',\n          options: groups() ?? [],\n        },\n      }"\n      [label]="\'Permission-Groups\'"\n      (entryCreate)="addGroup.emit($event)"\n      (entryDelete)="removeGroup.emit($event)"\n    ></app-badge-list>\n  </div>\n\n  <div class="row user-card__row">\n    <div class="col-4">\n      <app-icon [icon]="\'envelope\'"></app-icon>\n      Email:\n    </div>\n    <div class="col-8">{{ user().email ?? "Not Provided" }}</div>\n  </div>\n\n  @if (user().is_active) {\n    <app-confirmation-toggle-button\n      class="col-12 user-card__row user-card__row--delete"\n      [confirmationQuestion]="\'Delete user ?\'"\n      [icon]="\'trash\'"\n      [cancelButtonType]="\'DARK\'"\n      (confirm)="deleteUser.emit(user())"\n    ></app-confirmation-toggle-button>\n  }\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[icon_component.R,molecules.pn,common.TitleCasePipe,molecules.Ts],styles:[user_row_componentngResource_default()]})],UserRowComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/design/organisms/user-row/user-row.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermissions:()=>NoPermissions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_app_services_article_group_service_mock__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/_services/article/group.service.mock.ts"),src_app_services_article_user_mock_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/_services/article/user.mock.service.ts"),src_app_services_formly_validators__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/_services/formly/validators.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/UserRowComponent",component:__webpack_require__("./src/design/organisms/user-row/user-row.component.ts").D,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_6__.c,_ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__.qy.forRoot({validationMessages:[src_app_services_formly_validators__WEBPACK_IMPORTED_MODULE_4__.h9],validators:[src_app_services_formly_validators__WEBPACK_IMPORTED_MODULE_4__.yt]})]})],args:{user:src_app_services_article_user_mock_service__WEBPACK_IMPORTED_MODULE_3__.d[0],groups:src_app_services_article_group_service_mock__WEBPACK_IMPORTED_MODULE_2__.F,canDelete:!0,canCreate:!0}},Template=args=>({props:{...args,addGroup:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("addGroup"),removeGroup:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("removeGroup"),deleteUser:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("deleteUser")}}),Default=Template.bind({});Default.args={};const NoPermissions=Template.bind({});NoPermissions.args={canCreate:!1,canDelete:!1};const __namedExportsOrder=["Default","NoPermissions"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    addGroup: action('addGroup'),\n    removeGroup: action('removeGroup'),\n    deleteUser: action('deleteUser')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermissions.parameters={...NoPermissions.parameters,docs:{...NoPermissions.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    addGroup: action('addGroup'),\n    removeGroup: action('removeGroup'),\n    deleteUser: action('deleteUser')\n  }\n})",...NoPermissions.parameters?.docs?.source}}}},"./src/design/organisms/user-row/user-row.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".user-card__row {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n}\n.user-card__row--delete {\n  margin-top: var(--spacer-4);\n  display: flex;\n  justify-content: flex-end;\n}\n.user-card__row--heading {\n  margin-top: var(--spacer-0);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);