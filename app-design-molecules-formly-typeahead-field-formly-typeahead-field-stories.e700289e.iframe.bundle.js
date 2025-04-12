(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[1397],{"./src/app/_services/formly/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dq:()=>fieldsDontMatchMessage,EC:()=>timeValidator,N8:()=>dateValidator,Nd:()=>faPrefixMessage,Ou:()=>dateMessage,Oy:()=>requiredIconMessage,Z5:()=>specialCharacterValidator,cC:()=>iconValidator,d:()=>hasSpecialCharactersMessage,h9:()=>requiredMessage,iR:()=>numberValidator,jp:()=>integerValidator,k1:()=>sessionAlreadyHasAuthor,kO:()=>fieldMatchValidator,lk:()=>requiredIconValidator,tu:()=>notNumberMesage,wh:()=>invalidTimeMessage,yt:()=>requiredValidator,zG:()=>notIntegerMessage});const invalidTimeMessage={name:"time",message:"Time must have 'hh:mm:ss' pattern"},requiredMessage={name:"required",message:"This field is required!"},dateMessage={name:"date",message:"This date does not follow the pattern: 'YYYY-MM-DD'. Sorry to be such a Nazi about it. The computer is forcing me."},requiredIconMessage={name:"requiredIcon",message:"This field requires a fontawesome icon as input. Here is a list of them: https://fontawesome.com/v4.7.0/icons/"},faPrefixMessage={name:"faPrefix",message:"Icons are stored without the 'fa-' from font-awesome prefix"},notIntegerMessage={name:"notInteger",message:"Your input is not an integer. This field requires an integer number. No amount of revolution can overcome this."},notNumberMesage={name:"notNumber",message:"Your input is not a number."},hasSpecialCharactersMessage={name:"hasSpecialCharacters",message:'Your input includes one of the following invalid special characters: [ ] ( ) ? | \\ " % ~ # < > :. If you need to rebel, please dont against this.'},fieldsDontMatchMessage={name:"fieldMatch",message:"Password Not Matching"},sessionAlreadyHasAuthor={name:"isInvalidSessionAuthorPair",message:"\n    The author you selected already has a diaryentry in the session you selected. You \n    can't have 2 diaryentries from the same author in the same session. Consider writing \n    your diaryentry as an encounter instead into the diaryentry at the spot you just considered."};const timeValidator={name:"time",validation:function timeValidation(control){const isValidTime=/\d\d.[0-5]\d.[0-5]\d/.test(control.value);return isValidTime?null:{time:!isValidTime}}};function requiredValidation(control){return!!control.value||0===control.value?null:{required:!0}}const requiredValidator={name:"required",validation:requiredValidation},requiredIconValidator={name:"requiredIcon",validation:requiredValidation};const dateValidator={name:"date",validation:function dateValidation(control){return/[1-2]\d{3}-(0\d|1[0-2])-[0-3]\d/.test(control.value)?null:{date:!0}}};const iconValidator={name:"faPrefix",validation:function iconValidation(control){const hasFaPrefix=/fa-/.test(control.value),hasFasPrefix=/fas-/.test(control.value),isValidIcon=hasFaPrefix||hasFasPrefix;return isValidIcon?null:{faPrefix:isValidIcon}}};const integerValidator={name:"notInteger",validation:function isIntegerValidation(control){if(null==control.value)return null;const isInteger="number"==typeof control.value&&Number.isInteger(control.value);return isInteger?null:{notInteger:!isInteger}}};const numberValidator={name:"notNumber",validation:function isNumberValidation(control){const isNumberType="number"==typeof control.value,isNumberString="string"==typeof control.value&&!isNaN(parseInt(control.value)),isNumber=isNumberType||isNumberString;return isNumber?null:{notNumber:!isNumber}}};const specialCharacterValidator={name:"hasSpecialCharacters",validation:function hasNoSpecialCharactersValidation(control){if("string"==typeof control.value){const specialCharacters=["[","]","(",")","|","\\",'"',"%","~","#","<",">","?","/",":"];for(const specialCharacter of specialCharacters)if(control.value.includes(specialCharacter))return{hasSpecialCharacters:!0}}return null}};const fieldMatchValidator={name:"fieldMatch",validation:function passwordMatchValidation(control){const{password,passwordConfirm}=control.value;return passwordConfirm&&password&&passwordConfirm===password?null:{fieldMatch:!0}}}},"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","calendar-day","calendar-week","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diagram-project","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-arrow-down","file-audio","file-import","file","filter","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","hand-fist","house","handshake","hotel","hourglass-half","infinity","info-circle","info","location-dot","lock","link","list","magic","male","minus","monument","moon","mountain","newspaper","paw","pen","pencil","place-of-worship","plus","question-circle","rectangle-list","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","up-down-left-right","up-right-from-square","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;return SOLID_ICONS_SET.has(ico)?"fa-solid":BRAND_ICON_SET.has(ico)?"fa-brands":REGULAR_ICON_SET.has(ico)?"fa-regular":"fa-solid"}},"./src/app/design/atoms/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>BadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var badge_componentngResource=__webpack_require__("./src/app/design/atoms/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let BadgeComponent=class BadgeComponent{constructor(){this.kind=core.input.required(),this.text=core.input.required(),this.icon=(0,core.input)(),this.interactionMode=(0,core.input)("NONE"),this.link=(0,core.input)(),this.maxLength=(0,core.input)(),this.badgeClick=(0,core.output)(),this.shouldCutText=(0,core.computed)((()=>{const maxLength=this.maxLength();return null!=maxLength&&this.text().length>maxLength})),this.displayedText=(0,core.computed)((()=>{const maxLength=this.maxLength();if(this.shouldCutText()){return`${this.text().slice(0,maxLength)}...`}return this.text()}))}onBadgeClick(event){event.stopPropagation(),this.badgeClick.emit()}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],interactionMode:[{type:core.Input,args:[{isSignal:!0,alias:"interactionMode",required:!1,transform:void 0}]}],link:[{type:core.Input,args:[{isSignal:!0,alias:"link",required:!1,transform:void 0}]}],maxLength:[{type:core.Input,args:[{isSignal:!0,alias:"maxLength",required:!1,transform:void 0}]}],badgeClick:[{type:core.Output,args:["badgeClick"]}]}}};BadgeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-badge",template:'@switch (interactionMode()) {\n  @case ("LINK") {\n    <a class="badge-button" [routerLink]="link()">\n      <ng-container [ngTemplateOutlet]="content" />\n    </a>\n  }\n  @case ("BUTTON") {\n    <button type="button" class="badge-button" (click)="onBadgeClick($event)">\n      <ng-container [ngTemplateOutlet]="content" />\n    </button>\n  }\n  @case ("NONE") {\n    <ng-container [ngTemplateOutlet]="content" />\n  }\n}\n\n<ng-template #content>\n  <div\n    class="badge"\n    [attr.title]="shouldCutText() ? text() : null"\n    [ngClass]="{\n      \'bg-primary\': kind() === \'PRIMARY\',\n      \'bg-secondary\': kind() === \'SECONDARY\',\n      \'bg-dark\': kind() === \'DARK\',\n      \'bg-danger\': kind() === \'DANGER\',\n      \'bg-warning\': kind() === \'WARNING\',\n      \'bg-light\': kind() === \'LIGHT\',\n      \'bg-info\': kind() === \'INFO\',\n    }"\n  >\n    @let iconVal = icon();\n    @if (iconVal) {\n      <app-icon [icon]="iconVal"></app-icon>\n    }\n    {{ displayedText() }}\n  </div>\n</ng-template>\n',imports:[common.NgTemplateOutlet,common.NgClass,icon_component.R,router.Wk],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[badge_componentngResource_default()]})],BadgeComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon()))),this.classes=(0,core.computed)((()=>this.iconType()?`${this.iconType()} fa-${this.icon()}`:""))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],host:{"[class]":"classes()","aria-hidden":"true"},styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/molecules/formly-typeahead-field/formly-typeahead-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>FormlyTypeaheadFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var formly_typeahead_field_componentngResource=__webpack_require__("./src/app/design/molecules/formly-typeahead-field/formly-typeahead-field.component.scss?ngResource"),formly_typeahead_field_componentngResource_default=__webpack_require__.n(formly_typeahead_field_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),ngx_formly_bootstrap_form_field=__webpack_require__("./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-form-field.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),switchMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),ReplaySubject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),combineLatest=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),withLatestFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js"),rxjs_operators=__webpack_require__("./src/utils/rxjs-operators.ts"),badge_component=__webpack_require__("./src/app/design/atoms/badge/badge.component.ts");const NON_NORMAL_CHARACTER_REGEXP=/[^a-zA-Z0-9]/g,TWO_OR_MORE_WHITESPACE_REGEXP=/\s\s+/g;let FormlyTypeaheadFieldComponent=class FormlyTypeaheadFieldComponent extends ngx_formly_bootstrap_form_field.P{constructor(){super(...arguments),this.destroyRef=(0,core.inject)(core.DestroyRef),this.typeaheadElement=(0,core.viewChild)("instance",{debugName:"instance"}),this.inputElement=(0,core.viewChild)("inputElement"),this.inputElement$=(0,rxjs_interop.br)(this.inputElement).pipe((0,map.T)((input=>input?.nativeElement)),(0,rxjs_operators.u5)()),this.focus$=this.inputElement$.pipe((0,switchMap.n)((input=>(0,fromEvent.R)(input,"focus"))),(0,map.T)((event=>event.target?.value))),this.click$=this.inputElement$.pipe((0,switchMap.n)((input=>(0,fromEvent.R)(input,"click"))),(0,map.T)((event=>event.target?.value))),this.selectedItem$=new ReplaySubject.m(1),this.selectedItemLabel$=this.selectedItem$.pipe((0,map.T)((item=>item?`${item?.[this.getCustomProps().optionLabelProp]}`:null))),this.search=searchTrigger$=>{const searchTerm$=(0,merge.h)(searchTrigger$,this.focus$,this.click$).pipe((0,debounceTime.B)(200),(0,map.T)((searchTerm=>this.cleanSearchTerm(searchTerm)))),customProps=this.getCustomProps(),options$=searchTerm$.pipe((0,switchMap.n)((term=>customProps.getOptions(term??""))));return(0,combineLatest.z)({searchTerm:searchTerm$,options:options$}).pipe((0,map.T)((({searchTerm,options})=>{if(!searchTerm)return options;const{formatSearchTerm}=this.getCustomProps();return options.filter((opt=>this.matchesSearchterm(formatSearchTerm(searchTerm.toLowerCase())??"",opt[customProps.optionLabelProp])))})))}}ngOnInit(){const customProps=this.getCustomProps();customProps.initialOption$.pipe((0,take.s)(1),(0,rxjs_interop.pQ)(this.destroyRef)).subscribe((initialOption=>this.selectedItem$.next(initialOption)));const valueProp=customProps.optionValueProp;this.inputElement$.pipe((0,take.s)(1),(0,rxjs_interop.pQ)(this.destroyRef),(0,rxjs_operators.u5)(),(0,withLatestFrom.E)(customProps.initialOption$)).subscribe((([inputElement,initialOption])=>{const initialLabel=initialOption?.[customProps.optionLabelProp];initialLabel&&(inputElement.value=initialLabel)})),this.selectedItem$.pipe((0,rxjs_interop.pQ)(this.destroyRef),(0,map.T)((item=>item?.[valueProp]))).subscribe((item=>this.formControl.setValue(item)))}resetSelectedValue(){this.selectedItem$.next(null),this.inputElement$.pipe((0,rxjs_operators.u5)(),(0,take.s)(1),(0,rxjs_interop.pQ)(this.destroyRef)).subscribe((input=>input.value=""))}resetValueAndText(){this.resetSelectedValue(),this.typeaheadElement()?.writeValue("")}onSelect(event){event.item?this.selectedItem$.next(event.item):event.preventDefault()}clearOnEmptyInput(target){const inputText=target?.value;inputText||this.resetSelectedValue()}formatItem(item){return item[this.getCustomProps().optionLabelProp]}matchesSearchterm(searchTerm,optionLabel){const formatter=this.getCustomProps().formatSearchTerm,searchRegex=new RegExp(searchTerm.toLowerCase().split("").join(".*"));switch(typeof optionLabel){case"string":case"number":case"bigint":case"boolean":return(formatter(`${optionLabel}`.toLowerCase())??"").match(searchRegex);case"symbol":return(formatter(optionLabel.description?.toLowerCase())??"").match(searchRegex);default:return!1}}getCustomProps(){return this.props.additionalProperties}cleanSearchTerm(searchTerm){return searchTerm?.replaceAll(NON_NORMAL_CHARACTER_REGEXP," ").trim().replace(TWO_OR_MORE_WHITESPACE_REGEXP," ").trim()}static{this.propDecorators={typeaheadElement:[{type:core.ViewChild,args:["instance",{debugName:"instance",isSignal:!0}]}],inputElement:[{type:core.ViewChild,args:["inputElement",{isSignal:!0}]}]}}};FormlyTypeaheadFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-formly-typeahead-field",imports:[fesm2022_forms.X1,ngx_formly_core.qy,ng_bootstrap.h_,common.AsyncPipe,badge_component.n,ng_bootstrap.md],template:'@let selectedItemLabel = selectedItemLabel$ | async;\n<div class="form-control">\n  @if (selectedItemLabel && selectedItemLabel !== "undefined") {\n    <app-badge\n      class="form-control__selected-value-badge"\n      [kind]="\'DARK\'"\n      [text]="selectedItemLabel"\n      [ngbTooltip]="\'Clear this option\'"\n      [icon]="\'times\'"\n      [interactionMode]="\'BUTTON\'"\n      [maxLength]="20"\n      (badgeClick)="resetSelectedValue()"\n      (click)="$event.stopPropagation()"\n    />\n  }\n\n  <input\n    #inputElement\n    #instance="ngbTypeahead"\n    [id]="field.id ?? \'\'"\n    type="text"\n    class="form-control__input"\n    [ngbTypeahead]="search"\n    [disabled]="props.disabled ?? false"\n    [formlyAttributes]="field"\n    [placeholder]="props.placeholder"\n    [resultFormatter]="formatItem.bind(this)"\n    [inputFormatter]="formatItem.bind(this)"\n    [attr.aria-invalid]="showError"\n    [editable]="false"\n    (blur)="formControl.markAsTouched()"\n    (selectItem)="onSelect($event)"\n    (keydown.Backspace)="clearOnEmptyInput($event.target)"\n    (keydown.Escape)="resetValueAndText()"\n  />\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[formly_typeahead_field_componentngResource_default()]})],FormlyTypeaheadFieldComponent)},"./src/environments/environment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>environment});const environment={kind:"PRODUCTION",backendDomain:"https://www.aldrune.com",apiUrl:"/wiki1/api",defaultTitle:"StoryFont",frontendPrefix:"wiki2",configUrl:"assets/config/feature_config.json"}},"./src/utils/rxjs-operators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{cY:()=>debugLog,fC:()=>delayFalsy,u5:()=>filterNil});var rxjs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/pipe.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js"),src_environments_environment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/environments/environment.ts"),_logging__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/utils/logging.ts");function filterNil(){return(0,rxjs__WEBPACK_IMPORTED_MODULE_1__.p)((x=>null!=x))}const debugLog=debugSymbol=>{const isDevelop="DEVELOPMENT"===src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.c.kind;return(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.M)((x=>{isDevelop&&(0,_logging__WEBPACK_IMPORTED_MODULE_3__.R)(debugSymbol,x)}))};function delayFalsy(delayByMs=1e3){return(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.F)((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.n)((x=>(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(x).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.c)(x?0:delayByMs)))))}},"./src/app/design/molecules/formly-typeahead-field/formly-typeahead-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_forms__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),_ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap.mjs"),_ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),src_app_services_formly_validators__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/_services/formly/validators.ts"),_formly_typeahead_field_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/design/molecules/formly-typeahead-field/formly-typeahead-field.component.ts");const dummyData=[{label:"Something with a nice label",value:1},{label:"Something else",value:2},{label:"Another thing",value:3}],__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/FormlyTypeaheadFieldComponent",component:_formly_typeahead_field_component__WEBPACK_IMPORTED_MODULE_2__.o,args:{form:new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.gE({}),model:{},options:{},fields:[{key:"typeahead",type:"typeahead",wrappers:["form-field"],validation:["required"],props:{required:!0,label:"Typeahead",additionalProperties:{getOptions:()=>(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(dummyData),optionLabelProp:"label",optionValueProp:"value",initialOption$:(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(null),formatSearchTerm:searchTerm=>searchTerm}}}]},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_forms__WEBPACK_IMPORTED_MODULE_3__.X1,_ngx_formly_bootstrap__WEBPACK_IMPORTED_MODULE_5__.u,_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__.h_,_ngx_formly_core__WEBPACK_IMPORTED_MODULE_7__.qy.forRoot({types:[{name:"typeahead",component:_formly_typeahead_field_component__WEBPACK_IMPORTED_MODULE_2__.o,wrappers:["form-field"]}],validationMessages:[src_app_services_formly_validators__WEBPACK_IMPORTED_MODULE_1__.h9]})]})]},Default=(args=>({props:{...args,onSubmit:event=>console.log("submitted",event,args.form)},template:'\n        <form [formGroup]="form" (submit)="onSubmit($event)">\n          <formly-form \n            [model]="model" \n            [fields]="fields" \n            [options]="options" \n            [form]="form"\n            (onSubmit)="args.onSubmit($event)"\n          ></formly-form>\n        </form>\n    '})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  return {\n    props: {\n      ...args,\n      onSubmit: (event: Event) => console.log(\'submitted\', event, args.form)\n    },\n    template: `\n        <form [formGroup]="form" (submit)="onSubmit($event)">\n          <formly-form \n            [model]="model" \n            [fields]="fields" \n            [options]="options" \n            [form]="form"\n            (onSubmit)="args.onSubmit($event)"\n          ></formly-form>\n        </form>\n    `\n  };\n}',...Default.parameters?.docs?.source}}}},"./src/app/design/atoms/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  border-radius: var(--bs-border-radius);\n}\n\n.badge-button {\n  border-radius: var(--bs-border-radius);\n  display: flex;\n  text-decoration: none;\n}\n.badge-button:focus-visible {\n  outline: var(--focus-outline);\n  color: inherit;\n}\n\n.badge {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/formly-typeahead-field/formly-typeahead-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".form-control {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--spacer-2);\n  --bs-body-bg: var(--bs-secondary);\n  border-color: var(--bs-white);\n}\n.form-control__input {\n  width: 100%;\n  background-color: unset;\n  border: unset;\n  outline: unset;\n  color: var(--bs-body-color);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);