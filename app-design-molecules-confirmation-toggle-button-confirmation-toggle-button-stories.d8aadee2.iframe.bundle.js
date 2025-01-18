(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[7459],{"./src/app/design/animations/flip.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{S:()=>flipInY});var _angular_animations__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const flipAnimation=[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({"webkit-transform":"perspective(400px) rotate3d(0, 1, 0, 90deg)",transform:"perspective(400px) rotate3d(0, 1, 0, 90deg)","webkit-animation-timing-function":"ease-in","animation-timing-function":"ease-in"}),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("400ms",(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i7)([(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({"webkit-transform":"perspective(400px) rotate3d(0, 1, 0, -20deg)",transform:"perspective(400px) rotate3d(0, 1, 0, -20deg)","webkit-animation-timing-function":"ease-in","animation-timing-function":"ease-in",offset:.4}),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({"webkit-transform":"perspective(400px) rotate3d(0, 1, 0, 10deg)",transform:"perspective(400px) rotate3d(0, 1, 0, 10deg)",offset:.6}),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({"webkit-transform":"perspective(400px) rotate3d(0, 1, 0, -5deg)",transform:"perspective(400px) rotate3d(0, 1, 0, -5deg)",offset:.8}),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({"webkit-transform":"perspective(400px)",transform:"perspective(400px)",offset:1})]))],flipInY=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("flipInY",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)("sideA => sideB",flipAnimation),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)("sideB => sideA",flipAnimation)])},"./src/app/design/atoms/_models/button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C9:()=>toElementKind,bV:()=>ELEMENT_TYPES});const ELEMENT_TYPES=["PRIMARY","SECONDARY","DARK","DANGER","WARNING","LIGHT","INFO"];function toElementKind(kind){switch(kind){case"PRIMARY":case"SECONDARY":case"DARK":case"DANGER":case"WARNING":case"LIGHT":case"INFO":return kind;case"PRIMARY-OUTLINE":case"SECONDARY-OUTLINE":case"DARK-OUTLINE":case"DANGER-OUTLINE":case"WARNING-OUTLINE":case"LIGHT-OUTLINE":case"INFO-OUTLINE":return kind.replace("-OUTLINE","");case"NONE":return}}},"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/app/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n<span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n  {{ text() }}\n</span>\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/app/design/molecules/confirmation-toggle-button/confirmation-toggle-button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>ConfirmationToggleButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var confirmation_toggle_button_componentngResource=__webpack_require__("./src/app/design/molecules/confirmation-toggle-button/confirmation-toggle-button.component.scss?ngResource"),confirmation_toggle_button_componentngResource_default=__webpack_require__.n(confirmation_toggle_button_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),flip=__webpack_require__("./src/app/design/animations/flip.ts"),_models_button=__webpack_require__("./src/app/design/atoms/_models/button.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let ConfirmationToggleButtonComponent=class ConfirmationToggleButtonComponent{constructor(){this.confirmationQuestion=core.input.required(),this.icon=(0,core.input)(),this.text=(0,core.input)(),this.toggleType=(0,core.input)("DANGER-OUTLINE"),this.toggleSize=(0,core.input)("MEDIUM"),this.confirmButtonType=(0,core.computed)((()=>(0,_models_button.C9)(this.toggleType())??"DANGER")),this.cancelButtonType=(0,core.input)("SECONDARY"),this.confirm=new core.EventEmitter,this.isActive=(0,core.signal)(!1)}toggle(){this.isActive.set(!this.isActive())}emitConfirmation(){this.isActive&&(this.confirm.emit(),this.toggle())}static{this.propDecorators={confirmationQuestion:[{type:core.Input,args:[{isSignal:!0,alias:"confirmationQuestion",required:!0,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],toggleType:[{type:core.Input,args:[{isSignal:!0,alias:"toggleType",required:!1,transform:void 0}]}],toggleSize:[{type:core.Input,args:[{isSignal:!0,alias:"toggleSize",required:!1,transform:void 0}]}],cancelButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"cancelButtonType",required:!1,transform:void 0}]}],confirm:[{type:core.Output}]}}};ConfirmationToggleButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-confirmation-toggle-button",template:'<div [@flipInY]="isActive() ? \'sideA\' : \'sideB\'">\n  <ng-container\n    *ngTemplateOutlet="isActive() ? activeToggle : inactiveToggle"\n  />\n</div>\n\n<ng-template #inactiveToggle>\n  <button\n    btn\n    class="confirmation-toggle"\n    (click)="toggle()"\n    [kind]="toggleType()"\n    [icon]="icon()"\n    [size]="toggleSize()"\n    [text]="text()"\n  ></button>\n</ng-template>\n\n<ng-template #activeToggle>\n  <div class="confirmation confirmation--{{ confirmButtonType() }}">\n    <div class="confirmation__question">\n      <strong>{{ confirmationQuestion() }}</strong>\n    </div>\n    <div class="confirmation__buttons">\n      <button\n        btn\n        [kind]="confirmButtonType()"\n        [text]="\'Yes\'"\n        (click)="emitConfirmation()"\n      ></button>\n      <button\n        btn\n        [kind]="cancelButtonType()"\n        [text]="\'No\'"\n        (click)="toggle()"\n      ></button>\n    </div>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[button_component.Q,common.NgTemplateOutlet],animations:[flip.S],styles:[confirmation_toggle_button_componentngResource_default()]})],ConfirmationToggleButtonComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/molecules/confirmation-toggle-button/confirmation-toggle-button.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Default:()=>Default,Primary:()=>Primary,Secondary:()=>Secondary,Warning:()=>Warning,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/ConfirmationToggleButtonComponent",component:__webpack_require__("./src/app/design/molecules/confirmation-toggle-button/confirmation-toggle-button.component.ts").T,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__.BrowserAnimationsModule]})],args:{confirmationQuestion:"Are you sure?",toggleType:"DANGER",cancelButtonType:"SECONDARY"}},Template=args=>({props:{...args,confirm:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("confirm")},template:'\n    <app-confirmation-toggle-button\n      (confirm)="confirm($event)"\n      [toggleType]="toggleType"\n      [icon]="\'trash\'"\n      [text]="\'Delete\'"\n      [confirmationQuestion]="confirmationQuestion"\n    ></app-confirmation-toggle-button>\n  '}),Default=Template.bind({});Default.args={};const Warning=Template.bind({});Warning.args={toggleType:"WARNING"};const Primary=Template.bind({});Primary.args={toggleType:"PRIMARY"};const Secondary=Template.bind({});Secondary.args={toggleType:"SECONDARY"};const Dark=Template.bind({});Dark.args={toggleType:"DARK"};const __namedExportsOrder=["Default","Warning","Primary","Secondary","Dark"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  props: {\n    ...args,\n    confirm: action(\'confirm\')\n  },\n  template: `\n    <app-confirmation-toggle-button\n      (confirm)="confirm($event)"\n      [toggleType]="toggleType"\n      [icon]="\'trash\'"\n      [text]="\'Delete\'"\n      [confirmationQuestion]="confirmationQuestion"\n    ></app-confirmation-toggle-button>\n  `\n})',...Default.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:'args => ({\n  props: {\n    ...args,\n    confirm: action(\'confirm\')\n  },\n  template: `\n    <app-confirmation-toggle-button\n      (confirm)="confirm($event)"\n      [toggleType]="toggleType"\n      [icon]="\'trash\'"\n      [text]="\'Delete\'"\n      [confirmationQuestion]="confirmationQuestion"\n    ></app-confirmation-toggle-button>\n  `\n})',...Warning.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:'args => ({\n  props: {\n    ...args,\n    confirm: action(\'confirm\')\n  },\n  template: `\n    <app-confirmation-toggle-button\n      (confirm)="confirm($event)"\n      [toggleType]="toggleType"\n      [icon]="\'trash\'"\n      [text]="\'Delete\'"\n      [confirmationQuestion]="confirmationQuestion"\n    ></app-confirmation-toggle-button>\n  `\n})',...Primary.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:'args => ({\n  props: {\n    ...args,\n    confirm: action(\'confirm\')\n  },\n  template: `\n    <app-confirmation-toggle-button\n      (confirm)="confirm($event)"\n      [toggleType]="toggleType"\n      [icon]="\'trash\'"\n      [text]="\'Delete\'"\n      [confirmationQuestion]="confirmationQuestion"\n    ></app-confirmation-toggle-button>\n  `\n})',...Secondary.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:'args => ({\n  props: {\n    ...args,\n    confirm: action(\'confirm\')\n  },\n  template: `\n    <app-confirmation-toggle-button\n      (confirm)="confirm($event)"\n      [toggleType]="toggleType"\n      [icon]="\'trash\'"\n      [text]="\'Delete\'"\n      [confirmationQuestion]="confirmationQuestion"\n    ></app-confirmation-toggle-button>\n  `\n})',...Dark.parameters?.docs?.source}}}},"./src/app/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/confirmation-toggle-button/confirmation-toggle-button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --align: start;\n  --confirmation-bg-color: var(--bs-card-bg) display: flex;\n  justify-content: var(--align);\n}\n\n.confirmation-toggle {\n  display: inline-block;\n  width: fit-content;\n}\n\n.confirmation {\n  border: 1px solid;\n  display: flex;\n  align-items: flex-end;\n  align-content: center;\n  border-radius: var(--bs-border-radius);\n  padding: var(--spacer-2) var(--spacer-3);\n  justify-content: space-between;\n  background-color: var(--confirmation-bg-color);\n  width: fit-content;\n  flex-direction: column;\n}\n@media (min-width: 992px) {\n  .confirmation {\n    flex-direction: row;\n    align-items: center;\n  }\n}\n.confirmation--DANGER {\n  border-color: var(--bs-danger);\n}\n.confirmation--WARNING {\n  border-color: var(--bs-warning);\n}\n.confirmation--PRIMARY {\n  border-color: var(--bs-primary);\n}\n.confirmation--SECONDARY {\n  border-color: var(--bs-secondary);\n}\n.confirmation--TERTIARY {\n  border-color: var(--bs-dark);\n}\n.confirmation__question {\n  flex: 1;\n}\n@media (min-width: 992px) {\n  .confirmation__question {\n    margin-right: var(--spacer-2);\n  }\n}\n.confirmation__buttons {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\n@media (min-width: 992px) {\n  .confirmation__buttons {\n    width: unset;\n  }\n  .confirmation__buttons :nth-child(1) {\n    margin-right: var(--spacer-2);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);