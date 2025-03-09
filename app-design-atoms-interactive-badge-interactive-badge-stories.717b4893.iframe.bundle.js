(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[2194],{"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-arrow-down","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","list","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","up-down-left-right","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/interactive-badge/interactive-badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>InteractiveBadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var interactive_badge_componentngResource=__webpack_require__("./src/app/design/atoms/interactive-badge/interactive-badge.component.scss?ngResource"),interactive_badge_componentngResource_default=__webpack_require__.n(interactive_badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let InteractiveBadgeComponent=class InteractiveBadgeComponent{constructor(){this.kind=core.input.required(),this.text=core.input.required(),this.textLink=(0,core.input)(),this.icon=(0,core.input)(),this.iconKind=(0,core.input)(),this.iconKindVal=(0,core.computed)((()=>this.iconKind()??this.kind())),this.iconClick=new core.EventEmitter,this.labelClick=new core.EventEmitter}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],textLink:[{type:core.Input,args:[{isSignal:!0,alias:"textLink",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],iconKind:[{type:core.Input,args:[{isSignal:!0,alias:"iconKind",required:!1,transform:void 0}]}],iconClick:[{type:core.Output}],labelClick:[{type:core.Output}]}}};InteractiveBadgeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-interactive-badge",template:"<div class=\"badge-container\" [title]=\"text()\">\n  @if (textLink()) {\n    <a\n      [routerLink]=\"textLink()\"\n      class=\"badge\"\n      [ngClass]=\"{\n        'badge--part1': icon(),\n        'bg-primary': kind() === 'PRIMARY',\n        'bg-secondary': kind() === 'SECONDARY',\n        'bg-dark': kind() === 'DARK',\n        'bg-danger': kind() === 'DANGER',\n        'bg-warning': kind() === 'WARNING',\n        'bg-info': kind() === 'INFO',\n        'bg-light': kind() === 'LIGHT',\n      }\"\n    >\n      {{ text() }}\n    </a>\n  } @else {\n    <button\n      (click)=\"labelClick.emit()\"\n      class=\"badge\"\n      tabindex=\"0\"\n      [ngClass]=\"{\n        'badge--part1': icon(),\n        'bg-primary': kind() === 'PRIMARY',\n        'bg-secondary': kind() === 'SECONDARY',\n        'bg-dark': kind() === 'DARK',\n        'bg-danger': kind() === 'DANGER',\n        'bg-warning': kind() === 'WARNING',\n        'bg-info': kind() === 'INFO',\n        'bg-light': kind() === 'LIGHT',\n      }\"\n      [type]=\"'button'\"\n    >\n      {{ text() }}\n    </button>\n  }\n\n  @let iconVal = icon();\n  @if (iconVal) {\n    <button\n      (click)=\"iconClick.emit()\"\n      tabindex=\"\"\n      class=\"badge badge--part2\"\n      [ngClass]=\"{\n        'bg-primary': iconKindVal() === 'PRIMARY',\n        'bg-secondary': iconKindVal() === 'SECONDARY',\n        'bg-dark': iconKindVal() === 'DARK',\n        'bg-danger': iconKindVal() === 'DANGER',\n        'bg-warning': iconKindVal() === 'WARNING',\n        'bg-info': iconKindVal() === 'INFO',\n        'bg-light': iconKindVal() === 'LIGHT',\n      }\"\n    >\n      <app-icon [icon]=\"iconVal\" />\n    </button>\n  }\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[router.Wk,common.NgClass,icon_component.R],styles:[interactive_badge_componentngResource_default()]})],InteractiveBadgeComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/atoms/interactive-badge/interactive-badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Dark:()=>Dark,Default:()=>Default,Secondary:()=>Secondary,Warning:()=>Warning,WithLink:()=>WithLink,WithoutIcon:()=>WithoutIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/InteractiveBadgeComponent",component:__webpack_require__("./src/app/design/atoms/interactive-badge/interactive-badge.component.ts").B,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_3__.c]})],args:{text:"BadgeText",kind:"PRIMARY",icon:"times",textLink:void 0}},Template=args=>({props:{...args,iconClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("iconClick"),labelClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("labelClick")}}),Default=Template.bind({});Default.args={};const Secondary=Template.bind({});Secondary.args={kind:"SECONDARY"};const Dark=Template.bind({});Dark.args={kind:"DARK"};const Warning=Template.bind({});Warning.args={kind:"WARNING"};const Danger=Template.bind({});Danger.args={kind:"DANGER"};const WithoutIcon=Template.bind({});WithoutIcon.args={icon:void 0};const WithLink=Template.bind({});WithLink.args={textLink:"/to/other/page"};const __namedExportsOrder=["Default","Secondary","Dark","Warning","Danger","WithoutIcon","WithLink"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...Secondary.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...Dark.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...Danger.parameters?.docs?.source}}},WithoutIcon.parameters={...WithoutIcon.parameters,docs:{...WithoutIcon.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...WithoutIcon.parameters?.docs?.source}}},WithLink.parameters={...WithLink.parameters,docs:{...WithLink.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    iconClick: action('iconClick'),\n    labelClick: action('labelClick')\n  }\n})",...WithLink.parameters?.docs?.source}}}},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/interactive-badge/interactive-badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --inner-badge-padding: var(--spacer-2);\n}\n\n.badge-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.badge {\n  cursor: pointer;\n  border-bottom: none;\n  text-decoration: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.badge:focus-visible, .badge:hover {\n  outline: var(--focus-outline);\n}\n.badge--part1 {\n  border-top-right-radius: unset;\n  border-bottom-right-radius: unset;\n  padding-right: var(--inner-badge-padding);\n}\n.badge--part2 {\n  border-top-left-radius: unset;\n  border-bottom-left-radius: unset;\n  padding-left: var(--inner-badge-padding);\n  padding-right: var(--inner-badge-padding);\n  border-left: 1.5px solid var(--bs-white);\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);