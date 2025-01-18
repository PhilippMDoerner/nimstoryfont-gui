(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8831],{"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildAutocompleteConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"autocomplete",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,additionalProperties:{optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,optionKeyProp:config.optionKeyProp,loadOptions:config.loadOptions,initialValue$:config.initialValue$}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>sortByProp});const sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/design/organisms/session/session.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,NoSession:()=>NoSession,NoSessionNoCreate:()=>NoSessionNoCreate,__namedExportsOrder:()=>__namedExportsOrder,default:()=>session_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var session_componentngResource=__webpack_require__("./src/app/design/organisms/session/session.component.scss?ngResource"),session_componentngResource_default=__webpack_require__.n(session_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts");let SessionComponent=class SessionComponent{constructor(formlyService,routingService){this.formlyService=formlyService,this.routingService=routingService,this.session=core.input.required(),this.canUpdate=core.input.required(),this.canDelete=core.input.required(),this.canCreate=core.input.required(),this.serverModel=core.input.required(),this.sessionDelete=new core.EventEmitter,this.sessionCreate=new core.EventEmitter,this.sessionUpdate=new core.EventEmitter,this.sessionCreateCancel=(0,core.output)(),this.state=(0,core.signal)("DISPLAY"),this.sessionAudioUrl=(0,core.computed)((()=>this.routingService.getRoutePath("sessionaudio",{campaign:this.session()?.campaign_details?.name,isMainSession:this.session()?.is_main_session_int,sessionNumber:this.session()?.session_number}))),this.userModel=(0,core.signal)(void 0),this.diaryEntries=(0,core.computed)((()=>(this.session()?.diaryentries??[]).map((entry=>({name:entry.name,author_name:entry.author_name,link:this.toDiaryEntryUrl(entry)}))))),this.formlyFields=[this.formlyService.buildCheckboxConfig({key:"is_main_session",defaultValue:!0,label:"Main Session?"}),this.formlyService.buildInputConfig({key:"session_number",label:"Session Number",required:!0,inputKind:"NUMBER"}),this.formlyService.buildDatepickerConfig({key:"session_date",label:"Date of the Session (YYYY/MM/DD)",required:!0}),this.formlyService.buildInputConfig({key:"start_day",label:"Start Day",required:!1,inputKind:"NUMBER"}),this.formlyService.buildInputConfig({key:"end_day",label:"End Day",required:!1,inputKind:"NUMBER"})]}ngOnInit(){null==this.session()?.pk&&this.canCreate()&&this.changeState("CREATE",{})}changeState(newState,newModel){this.state.set(newState),this.userModel.set({...newModel})}onSessionDelete(){this.state.set("DISPLAY"),this.sessionDelete.emit(this.session())}onCreateCancel(){this.changeState("DISPLAY",void 0),this.sessionCreateCancel.emit()}onSubmit(){switch(this.state()){case"CREATE":this.sessionCreate.emit(this.userModel());break;case"UPDATE":case"OUTDATED_UPDATE":this.sessionUpdate.emit(this.userModel())}this.changeState("DISPLAY",void 0)}onToggle(toggled){const nextState="DISPLAY"===this.state()?"UPDATE":"DISPLAY",nextModel=toggled?{...this.session()}:void 0;this.changeState(nextState,nextModel)}toDiaryEntryUrl(entry){return this.routingService.getRoutePath("diaryentry",{sessionNumber:this.session()?.session_number,isMainSession:this.session()?.is_main_session_int,authorName:entry.author_name,campaign:this.session()?.campaign_details?.name})}static{this.ctorParameters=()=>[{type:formly_service_service.$},{type:routing_service.O}]}static{this.propDecorators={session:[{type:core.Input,args:[{isSignal:!0,alias:"session",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!0,transform:void 0}]}],sessionDelete:[{type:core.Output}],sessionCreate:[{type:core.Output}],sessionUpdate:[{type:core.Output}],sessionCreateCancel:[{type:core.Output,args:["sessionCreateCancel"]}]}}};SessionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-session",template:'\x3c!-- Heading --\x3e\n<h4 class="card__heading heading">\n  <span>\n    @switch (state()) {\n      @case ("DISPLAY") {\n        <ng-container [ngTemplateOutlet]="displayHeading" />\n      }\n      @case ("UPDATE") {\n        <ng-container [ngTemplateOutlet]="updateHeading" />\n      }\n      @case ("CREATE") {\n        <ng-container [ngTemplateOutlet]="createHeading" />\n      }\n      @case ("OUTDATED_UPDATE") {\n        <ng-container [ngTemplateOutlet]="updateHeading" />\n      }\n    }\n  </span>\n\n  \x3c!-- Edit Toggler --\x3e\n  @if (canUpdate()) {\n    <app-edit-toggle\n      [buttonKind]="\'DARK\'"\n      [toggled]="state() !== \'DISPLAY\'"\n      (toggle)="onToggle($event)"\n    ></app-edit-toggle>\n  }\n</h4>\n\n@switch (state()) {\n  @case ("DISPLAY") {\n    <ng-container [ngTemplateOutlet]="displayBody" />\n  }\n  @case ("UPDATE") {\n    <ng-container [ngTemplateOutlet]="updateBody" />\n  }\n  @case ("CREATE") {\n    <ng-container [ngTemplateOutlet]="createBody" />\n  }\n  @case ("OUTDATED_UPDATE") {\n    <ng-container [ngTemplateOutlet]="outdatedUpdateBody" />\n  }\n}\n\n<ng-template #displayHeading>\n  {{ session().name }}\n\n  @if (session() && session().start_day != null && session().end_day != null) {\n    <span class="heading__subtext">\n      (Days {{ session().start_day }}-{{ session().end_day }})\n    </span>\n  }\n</ng-template>\n\n<ng-template #displayBody>\n  \x3c!-- Body --\x3e\n  <div class="card__body body">\n    @if (diaryEntries().length > 0) {\n      <div class="body__entry">\n        <h5 class="body__subheading">\n          <app-icon [icon]="\'book-open\'"></app-icon>\n          Diaryentries\n        </h5>\n\n        <ul class="body__subbody body__subbody--list">\n          @for (diaryEntry of diaryEntries(); track diaryEntry.link) {\n            <li>\n              <a [routerLink]="diaryEntry.link" class="body__link">\n                {{ diaryEntry.author_name }} - {{ diaryEntry.name }}\n              </a>\n            </li>\n          }\n        </ul>\n      </div>\n    }\n\n    @if (session() && session().has_recording) {\n      <div class="body__entry">\n        <h5 class="body__subheading">\n          <a [routerLink]="sessionAudioUrl()" class="body__link">\n            <app-icon [icon]="\'file-audio\'"></app-icon>\n            Recording\n          </a>\n        </h5>\n      </div>\n    }\n  </div>\n  \x3c!-- Delete Toggler --\x3e\n  @if (canDelete()) {\n    <app-confirmation-toggle-button\n      class="card__delete-confirmer"\n      [confirmationQuestion]="\'Delete this session?\'"\n      [icon]="\'trash\'"\n      (confirm)="onSessionDelete()"\n    ></app-confirmation-toggle-button>\n  }\n</ng-template>\n\x3c!-- Sessions Panel Content --\x3e\n\n<ng-template #updateHeading> Updating \'{{ session().name }}\'\' </ng-template>\n\n<ng-template #updateBody>\n  \x3c!-- Form --\x3e\n  <app-form\n    [model]="userModel()"\n    [fields]="formlyFields"\n    [cancelButtonType]="\'DARK\'"\n    (formlySubmit)="onSubmit()"\n    (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n  ></app-form>\n</ng-template>\n\n<ng-template #createHeading> Create new Session </ng-template>\n\n<ng-template #createBody>\n  \x3c!-- Form --\x3e\n  <app-form\n    [model]="userModel()"\n    [fields]="formlyFields"\n    [cancelButtonType]="\'DARK\'"\n    (formlySubmit)="onSubmit()"\n    (formlyCancel)="onCreateCancel()"\n  ></app-form>\n</ng-template>\n\n<ng-template #outdatedUpdateBody>\n  <app-compare-form\n    [fields]="formlyFields"\n    [modelFromUser]="userModel()"\n    [modelFromServer]="serverModel()"\n    [displayVertically]="true"\n    (updateSubmit)="onSubmit()"\n    (cancel)="changeState(\'DISPLAY\', undefined)"\n  ></app-compare-form>\n</ng-template>\n',imports:[common.NgTemplateOutlet,molecules.aU,icon_component.R,router.Wk,molecules.Ts,molecules.s2,molecules.zx],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[session_componentngResource_default()]})],SessionComponent);const session_stories={title:"DesignSystem/Organisms/SessionComponent",component:SessionComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,formly_constants.d_,animations.BrowserAnimationsModule]})],args:{session:{pk:1,is_main_session:!0,is_main_session_int:1,session_number:10,session_date:"2023-04-20",start_day:1,end_day:2,name:"The Dragon's Lair",title:"Dungeons and Dragons Session",has_recording:!0,diaryentries:[{author_name:"John",name:"The party met in a tavern and decided to take on the quest to slay the dragon."},{author_name:"Sarah",name:"The party encountered some goblins on their way to the dragon's lair."},{author_name:"Bob",name:"The party defeated the dragon and claimed its treasure hoard."}],campaign:2,campaign_details:{pk:2,name:"Dungeons and Dragons Campaign"}},canCreate:!0,canUpdate:!0,canDelete:!0}},Template=args=>({props:{...args,sessionDelete:(0,dist.XI)("sessionDelete"),sessionCreate:(0,dist.XI)("sessionCreate"),sessionUpdate:(0,dist.XI)("sessionUpdate")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canCreate:!1,canUpdate:!1,canDelete:!1};const NoSession=Template.bind({});NoSession.args={session:void 0};const NoSessionNoCreate=Template.bind({});NoSessionNoCreate.args={session:void 0,canCreate:!1};const __namedExportsOrder=["Default","NoPermission","NoSession","NoSessionNoCreate"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    sessionDelete: action('sessionDelete'),\n    sessionCreate: action('sessionCreate'),\n    sessionUpdate: action('sessionUpdate')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    sessionDelete: action('sessionDelete'),\n    sessionCreate: action('sessionCreate'),\n    sessionUpdate: action('sessionUpdate')\n  }\n})",...NoPermission.parameters?.docs?.source}}},NoSession.parameters={...NoSession.parameters,docs:{...NoSession.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    sessionDelete: action('sessionDelete'),\n    sessionCreate: action('sessionCreate'),\n    sessionUpdate: action('sessionUpdate')\n  }\n})",...NoSession.parameters?.docs?.source}}},NoSessionNoCreate.parameters={...NoSessionNoCreate.parameters,docs:{...NoSessionNoCreate.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    sessionDelete: action('sessionDelete'),\n    sessionCreate: action('sessionCreate'),\n    sessionUpdate: action('sessionUpdate')\n  }\n})",...NoSessionNoCreate.parameters?.docs?.source}}}},"./src/app/design/organisms/session/session.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".card__heading {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: var(--spacer-3);\n}\n.card__body {\n  margin-bottom: var(--spacer-3);\n}\n.card__delete-confirmer {\n  padding-left: var(--spacer-0);\n  padding-right: var(--spacer-0);\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  --confirmation-bg-color: var(--bs-dark);\n}\n\n.heading__subtext {\n  --bs-text-opacity: 1;\n  color: #9b9a9a;\n}\n\n.body {\n  margin-bottom: var(--spacer-4);\n}\n.body__entry {\n  margin-bottom: var(--spacer-4);\n}\n.body__subheading {\n  margin-bottom: var(--spacer-1);\n}\n.body__subbody {\n  display: flex;\n  flex-direction: column;\n  margin-left: var(--spacer-4);\n}\n.body__subbody--list {\n  margin-left: var(--spacer-2);\n}\n.body__link {\n  width: fit-content;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);