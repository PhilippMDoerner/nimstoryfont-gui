(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3569],{"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildAutocompleteConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"autocomplete",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,additionalProperties:{optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,optionKeyProp:config.optionKeyProp,loadOptions:config.loadOptions,initialValue$:config.initialValue$}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/design/organisms/rule/rule.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>RuleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var rule_componentngResource=__webpack_require__("./src/design/organisms/rule/rule.component.scss?ngResource"),rule_componentngResource_default=__webpack_require__.n(rule_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),molecules=__webpack_require__("./src/design/molecules/index.ts");let RuleComponent=class RuleComponent{constructor(formlyService){this.formlyService=formlyService,this.rule=core.input.required(),this.canUpdate=core.input.required(),this.canDelete=core.input.required(),this.canCreate=core.input.required(),this.serverModel=core.input.required(),this.cancelButtonType=(0,core.input)("SECONDARY"),this.submitButtonType=(0,core.input)("PRIMARY"),this.ruleDelete=new core.EventEmitter,this.ruleCreate=new core.EventEmitter,this.ruleUpdate=new core.EventEmitter,this.ruleCreateCancel=new core.EventEmitter,this.userModel=(0,core.signal)(void 0),this.state=(0,core.signal)("DISPLAY"),this.formlyFields=[this.formlyService.buildInputConfig({key:"name",inputKind:"NAME"}),this.formlyService.buildEditorConfig({key:"description"})]}ngOnInit(){null==this.rule()?.pk&&this.canCreate?this.changeState("CREATE",{}):this.changeState("DISPLAY",void 0)}onToggle(toggled){if("CREATE"===this.state())return void this.onRuleCreateCancel();const nextState="DISPLAY"===this.state()?"UPDATE":"DISPLAY",nextModel=toggled?{...this.rule()}:void 0;this.changeState(nextState,nextModel)}changeState(newState,newModel){this.state.set(newState),this.userModel.set({...newModel})}onRuleCreate(rule){this.ruleCreate.emit(rule),this.changeState("DISPLAY",void 0)}onRuleDelete(){this.ruleDelete.emit(this.rule())}onRuleUpdate(rule){this.ruleUpdate.emit(rule),this.changeState("DISPLAY",void 0)}onRuleCreateCancel(){this.changeState("DISPLAY",void 0),this.ruleCreateCancel.emit()}static{this.ctorParameters=()=>[{type:formly_service_service.$}]}static{this.propDecorators={rule:[{type:core.Input,args:[{isSignal:!0,alias:"rule",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!0,transform:void 0}]}],cancelButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"cancelButtonType",required:!1,transform:void 0}]}],submitButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"submitButtonType",required:!1,transform:void 0}]}],ruleDelete:[{type:core.Output}],ruleCreate:[{type:core.Output}],ruleUpdate:[{type:core.Output}],ruleCreateCancel:[{type:core.Output}]}}};RuleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-rule",template:'@if (rule() || state() === "CREATE") {\n  <h4 class="card__heading heading">\n    <span>\n      @switch (state()) {\n        @case ("DISPLAY") {\n          <ng-container [ngTemplateOutlet]="displayHeading" />\n        }\n        @case ("UPDATE") {\n          <ng-container [ngTemplateOutlet]="updateHeading" />\n        }\n        @case ("CREATE") {\n          <ng-container [ngTemplateOutlet]="createHeading" />\n        }\n        @case ("OUTDATED_UPDATE") {\n          <ng-container [ngTemplateOutlet]="updateHeading" />\n        }\n      }\n    </span>\n\n    @if (canUpdate() || canCreate()) {\n      <app-edit-toggle\n        [buttonKind]="\'DARK\'"\n        [toggled]="state() !== \'DISPLAY\'"\n        (toggle)="onToggle($event)"\n      ></app-edit-toggle>\n    }\n  </h4>\n  @switch (state()) {\n    @case ("DISPLAY") {\n      <ng-container [ngTemplateOutlet]="displayBody" />\n    }\n    @case ("UPDATE") {\n      <ng-container [ngTemplateOutlet]="updateBody" />\n    }\n    @case ("CREATE") {\n      <ng-container [ngTemplateOutlet]="createBody" />\n    }\n    @case ("OUTDATED_UPDATE") {\n      <ng-container [ngTemplateOutlet]="outdatedUpdateBody" />\n    }\n  }\n}\n\n<ng-template #displayHeading>\n  {{ rule()?.name }}\n</ng-template>\n\n<ng-template #displayBody>\n  @let ruleVal = rule();\n  @if (ruleVal) {\n    <app-html-text [text]="ruleVal.description"></app-html-text>\n  }\n\n  \x3c!-- Delete Toggler --\x3e\n  @if (canDelete()) {\n    <app-confirmation-toggle-button\n      class="card__delete-confirmer"\n      [confirmationQuestion]="\'Delete this rule?\'"\n      [icon]="\'trash\'"\n      (confirm)="onRuleDelete()"\n    ></app-confirmation-toggle-button>\n  }\n</ng-template>\n\n<ng-template #updateHeading> Update \'{{ rule()?.name }}\' </ng-template>\n\n<ng-template #updateBody>\n  <app-form\n    [model]="userModel()"\n    [fields]="formlyFields"\n    [cancelButtonType]="cancelButtonType()"\n    [submitButtonType]="submitButtonType()"\n    (formlySubmit)="onRuleUpdate($event)"\n    (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n  ></app-form>\n</ng-template>\n\n<ng-template #createHeading> Create new Rule </ng-template>\n\n<ng-template #createBody>\n  @if (canCreate()) {\n    <app-form\n      [model]="userModel()"\n      [fields]="formlyFields"\n      [cancelButtonType]="cancelButtonType()"\n      [submitButtonType]="submitButtonType()"\n      (formlySubmit)="onRuleCreate($event)"\n      (formlyCancel)="onRuleCreateCancel()"\n    ></app-form>\n  }\n</ng-template>\n\n<ng-template #outdatedUpdateBody>\n  <app-compare-form\n    [fields]="formlyFields"\n    [modelFromUser]="userModel()"\n    [modelFromServer]="serverModel()"\n    [displayVertically]="true"\n    (formlySubmit)="onRuleUpdate($event)"\n    (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n  ></app-compare-form>\n</ng-template>\n',standalone:!0,imports:[common.NgTemplateOutlet,molecules.aU,html_text_component.m,molecules.Ts,molecules.s2,molecules.zx],styles:[rule_componentngResource_default()]})],RuleComponent)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U1:()=>replaceItem,Z:()=>sortByProp});const replaceItem=(list,item,key)=>{const newList=[...list],itemIndex=newList.findIndex((listItem=>listItem[key]===item[key]));if(-1===itemIndex)throw"Failed to find item in list";return newList[itemIndex]=item,newList},sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/rule/rule.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".card__heading {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--spacer-3);\n}\n.card__body {\n  margin-bottom: var(--spacer-3);\n}\n.card__delete-confirmer {\n  padding-left: var(--spacer-0);\n  padding-right: var(--spacer-0);\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  --confirmation-bg-color: var(--bs-dark);\n}\n\n.heading__subtext {\n  --bs-text-opacity: 1;\n  color: #9b9a9a;\n}\n\n.body {\n  margin-bottom: var(--spacer-4);\n}\n.body__entry {\n  margin-bottom: var(--spacer-4);\n}\n.body__subheading {\n  margin-bottom: var(--spacer-1);\n}\n.body__subbody {\n  display: flex;\n  flex-direction: column;\n  margin-left: var(--spacer-4);\n}\n.body__subbody--list {\n  margin-left: var(--spacer-2);\n}\n.body__link {\n  width: fit-content;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);