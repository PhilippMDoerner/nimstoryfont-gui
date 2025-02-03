(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[591],{"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildAutocompleteConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"autocomplete",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,additionalProperties:{optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,optionKeyProp:config.optionKeyProp,loadOptions:config.loadOptions,initialValue$:config.initialValue$}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/app/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/app/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/app/design/organisms/encounter/encounter.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>EncounterComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var encounter_componentngResource=__webpack_require__("./src/app/design/organisms/encounter/encounter.component.scss?ngResource"),encounter_componentngResource_default=__webpack_require__.n(encounter_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),hotkey_directive=__webpack_require__("./src/app/_directives/hotkey.directive.ts"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),hotkey_service=__webpack_require__("./src/app/_services/hotkey.service.ts"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),html_text_component=__webpack_require__("./src/app/design/atoms/html-text/html-text.component.ts"),separator_component=__webpack_require__("./src/app/design/atoms/separator/separator.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts"),array=__webpack_require__("./src/utils/array.ts"),rxjs_operators=__webpack_require__("./src/utils/rxjs-operators.ts");let EncounterComponent=class EncounterComponent{constructor(routingService,formlyService){this.routingService=routingService,this.formlyService=formlyService,this.characters=core.input.required(),this.locations=core.input.required(),this.encounter=(0,core.input)(),this.serverModel=(0,core.input)(),this.canUpdate=(0,core.input)(!1),this.canCreate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.initialState=(0,core.input)("DISPLAY"),this.isInFocus=core.input.required(),this.isHotkeyActive=(0,rxjs_interop.ot)((0,core.inject)(hotkey_service.Q).isHotkeyActive$??(0,of.of)(!1)),this.showHotkeyHelp=(0,core.computed)((()=>!!this.isHotkeyActive()&&this.isInFocus())),this.connectionDelete=new core.EventEmitter,this.connectionCreate=new core.EventEmitter,this.encounterDelete=new core.EventEmitter,this.encounterUpdate=new core.EventEmitter,this.encounterCreate=new core.EventEmitter,this.encounterCreateCancel=new core.EventEmitter,this.userModel=(0,core.signal)({}),this.state=(0,core.signal)("DISPLAY"),this.badgeEntries=(0,core.computed)((()=>{const encounterConnections=this.encounter()?.encounterConnections??[];return this.parseConnection(encounterConnections)})),this.campaignName=(0,core.computed)((()=>this.encounter()?.campaign_details?.name)),this.locations$=(0,rxjs_interop.br)(this.locations).pipe((0,rxjs_operators.u5)()),this.formlyFields=(0,core.computed)((()=>[this.formlyService.buildInputConfig({key:"title",inputKind:"STRING"}),this.formlyService.buildOverviewSelectConfig({key:"location",label:"Encounter Location",sortProp:"name_full",campaign:this.campaignName(),options$:this.locations$.pipe((0,map.T)((locs=>(0,array.Z)(locs,"name_full")))),labelProp:"name_full",required:!1}),this.formlyService.buildEditorConfig({key:"description",required:!0})]))}ngOnInit(){const model="CREATE"===this.initialState()&&this.canCreate()?{}:void 0;this.changeState(this.initialState(),model)}changeState(newState,newModel){this.state.set(newState),this.userModel.set({...newModel})}onEncounterCreate(encounter){this.encounterCreate.emit({...this.encounter(),...encounter}),this.changeState("DISPLAY",encounter)}onEncounterDelete(){this.encounterDelete.emit(this.encounter()),this.changeState("DISPLAY",void 0)}onEncounterUpdate(encounter){this.encounterUpdate.emit(encounter),this.changeState("DISPLAY",void 0)}onEncounterCreateCancel(){this.encounterCreateCancel.emit(),this.changeState("DISPLAY",void 0)}onConnectionDelete(connection){this.canDelete()&&this.connectionDelete.emit(connection)}onConnectionCreate(character){const newConnection={campaign:this.encounter()?.campaign_details?.id,encounter:this.encounter()?.pk,character:character.pk};this.connectionCreate.emit(newConnection)}onToggle(toggled){console.log("onToggle: ",toggled);if("CREATE"===this.state())return void this.encounterCreateCancel.emit();const nextState="DISPLAY"===this.state()?"UPDATE":"DISPLAY",nextModel=toggled?{...this.encounter()}:void 0;this.changeState(nextState,nextModel)}parseConnection(connections){return connections.map((con=>{const characterName=con.character_details?.name;return{text:characterName,badgeValue:con,link:this.routingService.getRoutePath("character",{name:characterName,campaign:this.campaignName()})}}))}static{this.ctorParameters=()=>[{type:routing_service.O},{type:formly_service_service.$}]}static{this.propDecorators={characters:[{type:core.Input,args:[{isSignal:!0,alias:"characters",required:!0,transform:void 0}]}],locations:[{type:core.Input,args:[{isSignal:!0,alias:"locations",required:!0,transform:void 0}]}],encounter:[{type:core.Input,args:[{isSignal:!0,alias:"encounter",required:!1,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!1,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],initialState:[{type:core.Input,args:[{isSignal:!0,alias:"initialState",required:!1,transform:void 0}]}],isInFocus:[{type:core.Input,args:[{isSignal:!0,alias:"isInFocus",required:!0,transform:void 0}]}],connectionDelete:[{type:core.Output}],connectionCreate:[{type:core.Output}],encounterDelete:[{type:core.Output}],encounterUpdate:[{type:core.Output}],encounterCreate:[{type:core.Output}],encounterCreateCancel:[{type:core.Output}]}}};EncounterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-encounter",template:'@if (encounter() || state() === "CREATE") {\n  <h4 class="card__heading">\n    @switch (state()) {\n      @case ("DISPLAY") {\n        <ng-container [ngTemplateOutlet]="displayHeading" />\n      }\n      @case ("UPDATE") {\n        <ng-container [ngTemplateOutlet]="updateHeading" />\n      }\n      @case ("OUTDATEDUPDATE") {\n        <ng-container [ngTemplateOutlet]="updateHeading" />\n      }\n      @case ("CREATE") {\n        <ng-container [ngTemplateOutlet]="createHeading" />\n      }\n    }\n\n    @if (canUpdate()) {\n      <app-edit-toggle\n        #toggleButton\n        class="card__edit-button"\n        [buttonKind]="\'DARK\'"\n        [toggled]="state() !== \'DISPLAY\'"\n        [hotkey]="\'e\'"\n        [showTooltip]="showHotkeyHelp()"\n        (hotkeyPressed)="\n          isInFocus() ? onToggle(!toggleButton.toggled()) : undefined\n        "\n        (toggle)="onToggle($event)"\n      ></app-edit-toggle>\n    }\n  </h4>\n\n  @switch (state()) {\n    @case ("DISPLAY") {\n      <ng-container [ngTemplateOutlet]="displayBody" />\n    }\n    @case ("UPDATE") {\n      <ng-container [ngTemplateOutlet]="updateBody" />\n    }\n    @case ("OUTDATEDUPDATE") {\n      <ng-container [ngTemplateOutlet]="updateBody" />\n    }\n    @case ("CREATE") {\n      <ng-container [ngTemplateOutlet]="createBody" />\n    }\n  }\n}\n\n<ng-template #displayHeading>\n  {{ encounter()?.title }}\n</ng-template>\n\n<ng-template #displayBody>\n  \x3c!-- Encounter --\x3e\n  @let encounterVal = encounter();\n  @if (encounterVal) {\n    <div class="card__text">\n      <app-html-text [text]="encounterVal.description"></app-html-text>\n    </div>\n  }\n\n  <app-separator></app-separator>\n\n  \x3c!-- Encounter Connections --\x3e\n  <div class="card__connections">\n    <app-badge-list\n      [label]="\'Characters\'"\n      [entries]="badgeEntries()"\n      [createOptions]="{\n        kind: \'SELECT\',\n        hotkey: \'c\',\n        createBadgeLabel: \'Add character\',\n        config: {\n          options: characters(),\n          valueProp: \'pk\',\n          labelProp: \'name\',\n        },\n      }"\n      [showHotkeyTooltip]="showHotkeyHelp()"\n      [canCreate]="canCreate()"\n      [canDelete]="canDelete()"\n      [cancelButtonType]="\'DARK\'"\n      (entryCreate)="onConnectionCreate($event)"\n      (entryDelete)="onConnectionDelete($event)"\n    ></app-badge-list>\n  </div>\n\n  \x3c!-- Encounter Footer/Delete Toggle --\x3e\n  @if (canDelete()) {\n    <app-confirmation-toggle-button\n      class="card__delete-confirmer"\n      [confirmationQuestion]="\'Delete this encounter?\'"\n      [icon]="\'trash\'"\n      [enableHotkey]="showHotkeyHelp()"\n      (confirm)="onEncounterDelete()"\n    ></app-confirmation-toggle-button>\n  }\n</ng-template>\n\n<ng-template #updateHeading> Update "{{ encounter()?.title }}" </ng-template>\n\n\x3c!-- Form to Update Encounters --\x3e\n<ng-template #updateBody>\n  @if (canUpdate() && state() === "UPDATE") {\n    <app-form\n      [model]="userModel()"\n      [fields]="formlyFields()"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onEncounterUpdate(userModel())"\n      (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n    ></app-form>\n  } @else if (canUpdate() && state() === "OUTDATEDUPDATE") {\n    <app-compare-form\n      [fields]="formlyFields()"\n      [modelFromUser]="userModel()"\n      [modelFromServer]="serverModel()"\n      [displayVertically]="true"\n      (formlySubmit)="onEncounterUpdate($event)"\n      (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n    ></app-compare-form>\n  }\n</ng-template>\n\n<ng-template #createHeading> Create new Encounter </ng-template>\n\n\x3c!-- Form to Update Encounters --\x3e\n<ng-template #createBody>\n  @if (canCreate() && state() === "CREATE") {\n    <app-form\n      [model]="userModel()"\n      [fields]="formlyFields()"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onEncounterCreate($event)"\n      (formlyCancel)="onEncounterCreateCancel()"\n    ></app-form>\n  }\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[common.NgTemplateOutlet,molecules.aU,html_text_component.m,separator_component.F,molecules.pn,molecules.Ts,molecules.s2,molecules.zx,ng_bootstrap.n8,hotkey_directive.G],styles:[encounter_componentngResource_default()]})],EncounterComponent)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>sortByProp});const sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/design/organisms/encounter/encounter.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FewerConnections:()=>FewerConnections,NoEncounter:()=>NoEncounter,NoEncounterNoCreatePermission:()=>NoEncounterNoCreatePermission,NoPermissions:()=>NoPermissions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),_angular_router_testing__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs"),src_app_modules_formly_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/_modules/formly_constants.ts"),src_app_services_routing_mock_service__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/_services/routing.mock.service.ts"),src_app_services_routing_service__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/app/_services/routing.service.ts");__webpack_require__("./node_modules/tinymce/tinymce.js");const dummyEncounter={pk:1,description:"\n    <p>In this <strong>epic encounter</strong>, the adventurers find themselves facing a fearsome <em>red dragon</em> deep within the twisting caverns of the mountains. The air is thick with the stench of sulfur as the dragon's massive form looms before them, its scales glinting in the flickering light of the torches.</p>\n\n    <p>The dragon roars, its fiery breath scorching the stone walls and causing the ground to tremble beneath the adventurers' feet. But they stand firm, weapons at the ready, knowing that this is the moment they have been training for.</p>\n\n    <p>The battle is fierce, with the dragon lashing out with razor-sharp claws and blasting the adventurers with jets of searing flame. But they are determined to prevail, and with each blow they strike, they chip away at the dragon's armor and weaken its resolve.</p>\n\n    <p>Finally, with a mighty roar, the dragon falls, its lifeless body crashing to the ground in a thunderous heap. The adventurers are battered and bruised, but they emerge victorious, their spirits lifted by the knowledge that they have faced one of the greatest challenges of their lives and emerged triumphant.</p>\n  ",encounterConnections:[{pk:1,encounter:1,encounter_details:{name:"Dragon",name_full:"Red Dragon",pk:1},character:1,character_details:{name:"Adventurer",name_full:"Adventurer One",pk:1}},{pk:2,encounter:1,encounter_details:{name:"Dragon",name_full:"Red Dragon",pk:1},character:2,character_details:{name:"Adventurer",name_full:"Adventurer Two",pk:2}},{pk:1,encounter:4,encounter_details:{name:"Goblin Ambush",name_full:"Goblin Ambush",pk:4},character:4,character_details:{name:"Warrior",name_full:"Warrior Four",pk:4}},{pk:1,encounter:5,encounter_details:{name:"Treasure Hunt",name_full:"Treasure Hunt",pk:5},character:5,character_details:{name:"Wizard",name_full:"Wizard Five",pk:5}},{pk:1,encounter:6,encounter_details:{name:"Orc Battle",name_full:"Orc Battle",pk:6},character:6,character_details:{name:"Ranger",name_full:"Ranger Six",pk:6}},{pk:1,encounter:7,encounter_details:{name:"Bandit Raid",name_full:"Bandit Raid",pk:7},character:7,character_details:{name:"Paladin",name_full:"Paladin Seven",pk:7}}],location:1,location_details:{name:"Cave",pk:1,name_full:"Cave of the Red Dragon",parent_location_name:"Mountains"},title:"The Battle of the Red Dragon's Lair",diaryentry:1,diaryentry_details:{author_name:"Dungeon Master",is_main_session:1,session_number:1},order_index:1,name:"Encounter 1",creation_datetime:"2022-04-23T12:34:56.789Z",update_datetime:"2022-04-23T12:34:56.789Z",campaign:1,campaign_details:{id:1,name:"Aldrune"},getAbsoluteRouterUrl:()=>"/encounters/1/"},__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/EncounterComponent",component:__webpack_require__("./src/app/design/organisms/encounter/encounter.component.ts").L,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_tinymce_tinymce_angular__WEBPACK_IMPORTED_MODULE_7__.sv,_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__.BrowserAnimationsModule,_angular_router_testing__WEBPACK_IMPORTED_MODULE_9__.c,src_app_modules_formly_constants__WEBPACK_IMPORTED_MODULE_2__.d_],providers:[{provide:src_app_services_routing_service__WEBPACK_IMPORTED_MODULE_4__.O,useClass:src_app_services_routing_mock_service__WEBPACK_IMPORTED_MODULE_3__.W}]})],args:{encounter:dummyEncounter,characters:[{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gandalf",pk:1,name_full:"Gandalf the Grey",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Frodo",pk:2,name_full:"Frodo Baggins",player_character:!0,images:[],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gimli",pk:3,name_full:"Gimli son of Glóin",player_character:!1,images:[],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Legolas",pk:4,name_full:"Legolas Greenleaf",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Bilbo",pk:5,name_full:"Bilbo Baggins",player_character:!1,images:[],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Aragorn",pk:6,name_full:"Aragorn son of Arathorn",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Saruman",pk:7,name_full:"Saruman the White",player_character:!1,images:[],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Sif",pk:18,name_full:"Sif the Swift",description:"Sif is a skilled warrior known for her lightning-fast strikes and agility. She is fiercely loyal to her friends and will stop at nothing to protect them.",update_datetime:"2022-03-15T10:30:00.000Z",player_character:!0,images:[],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gorin",pk:19,name_full:"Gorin Ironfist",description:"Gorin is a dwarf from the Iron Hills, known for his strength and unwavering determination. He has a fondness for ale and a good brawl.",update_datetime:"2022-02-23T14:15:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg","https://example.com/images/lirien1.jpg"],campaign_details:{id:1,name:"Aldrune"}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Lirien",pk:20,name_full:"Lirien Windrider",description:"Lirien is an elven archer, renowned for her skill with the bow. She is fiercely independent and often clashes with authority figures.",update_datetime:"2022-03-20T08:45:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{id:1,name:"Aldrune"}}],serverModel:void 0,canCreate:!0,canUpdate:!0,canDelete:!0}},Template=args=>({props:{...args,connectionDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("connectionDelete"),connectionCreate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("connectionCreate"),encounterDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("encounterDelete"),encounterUpdate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("encounterUpdate"),encounterCreate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("encounterCreate")}}),Default=Template.bind({});Default.args={};const shortConnectionList=dummyEncounter.encounterConnections?.slice(0,3),FewerConnections=Template.bind({});FewerConnections.args={encounter:{...dummyEncounter,encounterConnections:[...shortConnectionList]}};const NoPermissions=Template.bind({});NoPermissions.args={canUpdate:!1,canCreate:!1,canDelete:!1};const NoEncounter=Template.bind({});NoEncounter.args={encounter:void 0};const NoEncounterNoCreatePermission=Template.bind({});NoEncounterNoCreatePermission.args={encounter:void 0,canCreate:!1};const __namedExportsOrder=["Default","FewerConnections","NoPermissions","NoEncounter","NoEncounterNoCreatePermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    encounterDelete: action('encounterDelete'),\n    encounterUpdate: action('encounterUpdate'),\n    encounterCreate: action('encounterCreate')\n  }\n})",...Default.parameters?.docs?.source}}},FewerConnections.parameters={...FewerConnections.parameters,docs:{...FewerConnections.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    encounterDelete: action('encounterDelete'),\n    encounterUpdate: action('encounterUpdate'),\n    encounterCreate: action('encounterCreate')\n  }\n})",...FewerConnections.parameters?.docs?.source}}},NoPermissions.parameters={...NoPermissions.parameters,docs:{...NoPermissions.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    encounterDelete: action('encounterDelete'),\n    encounterUpdate: action('encounterUpdate'),\n    encounterCreate: action('encounterCreate')\n  }\n})",...NoPermissions.parameters?.docs?.source}}},NoEncounter.parameters={...NoEncounter.parameters,docs:{...NoEncounter.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    encounterDelete: action('encounterDelete'),\n    encounterUpdate: action('encounterUpdate'),\n    encounterCreate: action('encounterCreate')\n  }\n})",...NoEncounter.parameters?.docs?.source}}},NoEncounterNoCreatePermission.parameters={...NoEncounterNoCreatePermission.parameters,docs:{...NoEncounterNoCreatePermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    encounterDelete: action('encounterDelete'),\n    encounterUpdate: action('encounterUpdate'),\n    encounterCreate: action('encounterCreate')\n  }\n})",...NoEncounterNoCreatePermission.parameters?.docs?.source}}}},"./src/app/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/encounter/encounter.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".card {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n  padding: var(--spacer-4);\n}\n.card__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__text {\n  margin-bottom: var(--spacer-1);\n}\n.card__connections {\n  margin-bottom: var(--spacer-3);\n}\n.card__delete-confirmer {\n  padding-left: var(--spacer-0);\n  padding-right: var(--spacer-0);\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  --confirmation-bg-color: var(--bs-dark);\n}\n.card__edit-button {\n  align-self: flex-start;\n}\n\n.connections {\n  display: inline-flex;\n}\n.connections__label {\n  margin-right: var(--spacer-4);\n}\n.connections__list {\n  display: inline-flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.connections__connection, .connections__create-form {\n  margin: var(--spacer-0) var(--spacer-2) var(--spacer-2) var(--spacer-1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);