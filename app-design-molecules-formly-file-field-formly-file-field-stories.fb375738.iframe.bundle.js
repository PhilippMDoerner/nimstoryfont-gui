(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[5935],{"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","list","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/app/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n<span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n  {{ text() }}\n</span>\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/app/design/molecules/formly-file-field/formly-file-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>FormlyFileFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var formly_file_field_componentngResource=__webpack_require__("./src/app/design/molecules/formly-file-field/formly-file-field.component.scss?ngResource"),formly_file_field_componentngResource_default=__webpack_require__.n(formly_file_field_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),ngx_formly_bootstrap=__webpack_require__("./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let FormlyFileFieldComponent=class FormlyFileFieldComponent extends ngx_formly_core.PU{constructor(){super(),this.window=(0,core.inject)(common.DOCUMENT).defaultView,this.updateModelOnFilePaste()}ngOnInit(){this.buttonType=this.props.buttonType,this.fieldKind=this.props.fileFieldKind}onFileSelect(event){const files=event.target.files;if(!(files.length>0))return;const file=files[0];this.setModelValue(file)}setModelValue(file){this.model[this.key]=file,this.selectedFileName=`${file.name}`,this.formControl.setValue(file),this.formControl.markAsDirty()}onButtonClick(event){event.stopPropagation();const element=this.fileInputElement.nativeElement,newClick=new MouseEvent("click",{bubbles:!1});element.dispatchEvent(newClick)}updateModelOnFilePaste(){this.window&&(0,fromEvent.R)(this.window,"paste").pipe((0,map.T)((event=>event.clipboardData?.files?.[0])),(0,filter.p)((pastedFile=>!!pastedFile)),(0,rxjs_interop.pQ)()).subscribe((pastedFile=>this.setModelValue(pastedFile)))}static{this.ctorParameters=()=>[]}static{this.propDecorators={fileInputElement:[{type:core.ViewChild,args:["fileInputElement"]}]}}};FormlyFileFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-formly-file-field",template:'<div class="mb-3 {{ field.className }}" [class.d-none]="to.hidden">\n  <div class="d-flex flex-row align-items-center">\n    <button\n      btn\n      class="file-field"\n      [class.disabled]="props.disabled"\n      [disabled]="!!props.disabled"\n      [kind]="buttonType"\n      [icon]="\'upload\'"\n      [text]="\'Click here or paste a file into the window\'"\n      (focus)="formControl.markAsTouched()"\n      (click)="onButtonClick($event)"\n    ></button>\n  </div>\n  <div class="mt-2">\n    @if (selectedFileName) {\n      <span class="me-3"> Currently Selected: </span>\n      {{ selectedFileName }}\n    } @else {\n      No File Selected\n    }\n  </div>\n</div>\n\n<input\n  #fileInputElement\n  type="file"\n  class="d-none"\n  (change)="onFileSelect($event)"\n  [formlyAttributes]="field"\n  [id]="props[\'name\']"\n  [name]="props[\'name\']"\n  data-formly-field-type="file"\n/>\n',imports:[button_component.Q,ngx_formly_core.qy,ngx_formly_bootstrap.u,fesm2022_forms.X1,ng_bootstrap.n8],styles:[formly_file_field_componentngResource_default()]})],FormlyFileFieldComponent)},"./src/app/design/molecules/formly-file-field/formly-file-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_forms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_formly_file_field_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/design/molecules/formly-file-field/formly-file-field.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/FormlyFileFieldComponent",component:_formly_file_field_component__WEBPACK_IMPORTED_MODULE_1__.J,args:{form:new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.gE({}),model:{},options:{},fields:[{key:"file",type:"file",props:{buttonType:"SECONDARY"}}]},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_2__.X1,_ngx_formly_core__WEBPACK_IMPORTED_MODULE_3__.qy.forRoot({types:[{name:"file",component:_formly_file_field_component__WEBPACK_IMPORTED_MODULE_1__.J,wrappers:["form-field"]}]})]}),(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.componentWrapperDecorator)((()=>'\n      <form [formGroup]="form">\n        <formly-form \n          [model]="model" \n          [fields]="fields" \n          [options]="options" \n          [form]="form"\n        ></formly-form>\n      </form>\n    '))]},Default=(args=>({props:{...args}})).bind({});Default.args={};const Primary=(args=>({props:{...args,fields:[{key:"file",type:"file",props:{buttonType:"PRIMARY"}}]}})).bind({});Primary.args={};const __namedExportsOrder=["Default","Primary"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}},Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    fields: [{\n      key: 'file',\n      type: 'file',\n      props: {\n        buttonType: 'PRIMARY'\n      }\n    }]\n  }\n})",...Primary.parameters?.docs?.source}}}},"./src/app/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/formly-file-field/formly-file-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".disabled {\n  text-decoration: line-through;\n  cursor: not-allowed;\n}\n\n.file-field {\n  width: fit-content;\n  display: inline-block;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);