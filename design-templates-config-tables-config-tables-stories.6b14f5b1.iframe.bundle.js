(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[6119],{"./src/app/_services/article/player-class.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>dummyClasses});const dummyClasses=[{name:"Artificer",pk:1,update_datetime:"2021-04-20T14:31:24.033655Z"},{name:"Barbarian",pk:2,update_datetime:"2021-04-20T14:31:27.810089Z"},{name:"Bard",pk:3,update_datetime:"2021-04-20T14:31:36.408312Z"},{name:"Cleric",pk:4,update_datetime:"2021-04-20T14:31:39.485140Z"},{name:"Druid",pk:5,update_datetime:"2021-04-20T14:31:50.431678Z"},{name:"Fighter",pk:6,update_datetime:"2021-04-20T14:31:53.562771Z"},{name:"Monk",pk:7,update_datetime:"2021-04-20T14:31:56.226259Z"},{name:"Paladin",pk:8,update_datetime:"2021-04-20T14:31:58.897597Z"},{name:"Ranger",pk:9,update_datetime:"2021-04-20T14:32:06.986455Z"},{name:"Rogue",pk:10,update_datetime:"2021-04-20T14:32:09.472989Z"},{name:"Sorcerer",pk:11,update_datetime:"2021-04-20T14:32:11.740394Z"},{name:"Warlock",pk:12,update_datetime:"2021-04-20T14:32:13.937586Z"},{name:"Wizard",pk:13,update_datetime:"2021-04-20T14:32:16.277146Z"}]},"./src/app/_services/formly/formly-service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>FormlyProvider});var _formly_service_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/_services/formly/formly-service.service.ts");const FormlyProvider={provide:_formly_service_service__WEBPACK_IMPORTED_MODULE_0__.$,useFactory:()=>new _formly_service_service__WEBPACK_IMPORTED_MODULE_0__.$}},"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildAutocompleteConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"autocomplete",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,additionalProperties:{optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,optionKeyProp:config.optionKeyProp,loadOptions:config.loadOptions,initialValue$:config.initialValue$}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/design/atoms/card/card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>CardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var card_componentngResource=__webpack_require__("./src/design/atoms/card/card.component.scss?ngResource"),card_componentngResource_default=__webpack_require__.n(card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CardComponent=class CardComponent{};CardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-card",template:'<div class="card">\n  <ng-content></ng-content>\n</div>',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[],styles:[card_componentngResource_default()]})],CardComponent)},"./src/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',standalone:!0,imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>sortByProp});const sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/design/templates/config-tables/config-tables.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithData:()=>WithData,__namedExportsOrder:()=>__namedExportsOrder,default:()=>config_tables_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");var player_class_service_mock=__webpack_require__("./src/app/_services/article/player-class.service.mock.ts"),formly_service_mock=__webpack_require__("./src/app/_services/formly/formly-service.mock.ts"),animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var config_tables_componentngResource=__webpack_require__("./src/design/templates/config-tables/config-tables.component.scss?ngResource"),config_tables_componentngResource_default=__webpack_require__.n(config_tables_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts");var config_table_componentngResource=__webpack_require__("./src/design/organisms/config-table/config-table.component.scss?ngResource"),config_table_componentngResource_default=__webpack_require__.n(config_table_componentngResource),card_component=__webpack_require__("./src/design/atoms/card/card.component.ts"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),separator_component=__webpack_require__("./src/design/atoms/separator/separator.component.ts"),confirmation_toggle_button_component=__webpack_require__("./src/design/molecules/confirmation-toggle-button/confirmation-toggle-button.component.ts"),form_component=__webpack_require__("./src/design/molecules/form/form.component.ts");let ConfigTableComponent=class ConfigTableComponent{constructor(){this.table=core.input.required(),this.canDeleteGlobalEntries=core.input.required(),this.canDeleteCampaignEntries=core.input.required(),this.canCreate=core.input.required(),this.tableEntries=(0,core.computed)((()=>{const entries=this.table().entries??[],entryIdProp=this.table().idProp,campaignIdProp=this.table().campaignIdProp;return entries.map((entry=>this.toTableEntry(entry,entryIdProp,campaignIdProp)))})),this.columnNames=(0,core.computed)((()=>{const firstEntry=this.table().entries?.[0];return firstEntry?Object.keys(firstEntry).filter((key=>key!==this.table().idProp)):[]})),this.loadTableEntries=(0,core.output)(),this.deleteTableEntry=(0,core.output)(),this.createTableEntry=(0,core.output)()}createEntry(entry){this.createTableEntry.emit(entry)}deleteEntry(entryId){const entry=this.table().entries?.find((entry=>entry[this.table().idProp]===entryId));entry&&this.deleteTableEntry.emit(entry)}toTableEntry(entry,entryIdProp,campaignIdProp){const properties=Object.keys(entry).filter((key=>key!==entryIdProp)).map((key=>({key,value:entry[key]})));return{id:entry[entryIdProp],campaignId:entry[campaignIdProp],properties}}static{this.propDecorators={table:[{type:core.Input,args:[{isSignal:!0,alias:"table",required:!0,transform:void 0}]}],canDeleteGlobalEntries:[{type:core.Input,args:[{isSignal:!0,alias:"canDeleteGlobalEntries",required:!0,transform:void 0}]}],canDeleteCampaignEntries:[{type:core.Input,args:[{isSignal:!0,alias:"canDeleteCampaignEntries",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],loadTableEntries:[{type:core.Output,args:["loadTableEntries"]}],deleteTableEntry:[{type:core.Output,args:["deleteTableEntry"]}],createTableEntry:[{type:core.Output,args:["createTableEntry"]}]}}};ConfigTableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-config-table",standalone:!0,imports:[icon_component.R,separator_component.F,confirmation_toggle_button_component.T,form_component.s,card_component.i,button_component.Q],template:'<div class="config-tables__section section">\n  \x3c!-- Section Heading --\x3e\n  <div class="section__heading heading">\n    <h3 class="heading__text">\n      <app-icon [icon]="table().icon"></app-icon>\n      {{ table().name }}\n    </h3>\n\n    \x3c!-- Heading Buttons --\x3e\n    <div class="heading__buttons">\n      \x3c!-- Add Users --\x3e\n      @if (canCreate()) {\n        <button\n          btn\n          [kind]="\'DARK\'"\n          [icon]="table().showForm ? \'times\' : \'plus\'"\n          [text]="table().showForm ? \'Cancel\' : \'Add Entry\'"\n          (click)="table().showForm = !table().showForm"\n        ></button>\n      }\n\n      <button\n        btn\n        [kind]="\'PRIMARY\'"\n        [icon]="\'refresh\'"\n        [text]="\'Load\'"\n        (click)="loadTableEntries.emit()"\n      ></button>\n    </div>\n  </div>\n\n  <app-separator class="section__separator"></app-separator>\n\n  \x3c!-- Section Body --\x3e\n\n  @if (!table().showForm) {\n    @if (tableEntries().length === 0) {\n      Load entries to see them\n    }\n    <div class="section__table-container">\n      \x3c!-- Table --\x3e\n\n      @if (tableEntries().length > 0) {\n        <table class="table table-dark table-striped">\n          \x3c!-- Table heading --\x3e\n          <thead>\n            <tr>\n              <th scope="col">#</th>\n              @for (columnName of columnNames(); track columnName) {\n                <th scope="col" class="text-uppercase">\n                  {{ columnName }}\n                </th>\n              }\n            </tr>\n          </thead>\n          \x3c!-- Table body --\x3e\n          <tbody>\n            @for (entry of tableEntries(); track entry) {\n              <tr>\n                <th scope="row">{{ entry.id }}</th>\n                @for (property of entry.properties; track property.key) {\n                  <td>\n                    {{ property.value ?? "---" }}\n                  </td>\n                }\n                @let isCampaignEntry = entry.campaignId != null;\n                @if (\n                  (isCampaignEntry && canDeleteCampaignEntries()) ||\n                  canDeleteGlobalEntries()\n                ) {\n                  <td>\n                    <app-confirmation-toggle-button\n                      [toggleSize]="\'SMALL\'"\n                      [confirmationQuestion]="\'Delete this Entry?\'"\n                      [icon]="\'trash\'"\n                      (confirm)="deleteEntry(entry.id)"\n                    ></app-confirmation-toggle-button>\n                  </td>\n                }\n              </tr>\n            }\n          </tbody>\n        </table>\n      }\n    </div>\n  }\n\n  @if (table().showForm) {\n    <app-card>\n      <h4>Adding new {{ table().name }}</h4>\n      \x3c!-- Form --\x3e\n      <app-form\n        [model]="table().model"\n        [fields]="table().formFields"\n        [cancelButtonType]="\'DARK\'"\n        (formlySubmit)="createEntry($event)"\n        (formlyCancel)="table().showForm = !table().showForm"\n      ></app-form>\n    </app-card>\n  }\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[config_table_componentngResource_default()]})],ConfigTableComponent);var page_container_component=__webpack_require__("./src/design/organisms/page-container/page-container.component.ts");let ConfigTablesComponent=class ConfigTablesComponent{constructor(routingService,formlyService){this.routingService=routingService,this.formlyService=formlyService,this.currentCampaignId=core.input.required(),this.tableData=core.input.required(),this.canDeleteGlobalEntries=core.input.required(),this.hasCampaignWritePermission=core.input.required(),this.loadTableEntries=new core.EventEmitter,this.deleteTableEntry=new core.EventEmitter,this.createTableEntry=new core.EventEmitter,this.canCreate=(0,core.computed)((()=>{if(this.canDeleteGlobalEntries())return!0;return!!(null!=this.currentCampaignId())&&this.hasCampaignWritePermission()})),this.tables=(0,core.computed)((()=>[{name:"Marker Type",kind:"MARKER_TYPE",icon:"tag",idProp:"id",campaignIdProp:"campaign_id",model:{name:void 0,is_text_marker:!1,icon:void 0,color:void 0,campaign_id:this.currentCampaignId()},formFields:[this.formlyService.buildInputConfig({key:"name",inputKind:"NAME"}),this.formlyService.buildCheckboxConfig({key:"is_text_marker",label:"Show name instead of Icon",defaultValue:!1}),this.formlyService.buildInputConfig({key:"icon",label:"Icon (https://fontawesome.com/v6/search?o=r&m=free)",inputKind:"NAME"}),this.formlyService.buildInputConfig({key:"color",inputKind:"COLOR"})],showForm:!1,entries:this.tableData().MARKER_TYPE},{name:"Class",kind:"PLAYER_CLASS",icon:"user",idProp:"pk",campaignIdProp:"campaign_id",model:{name:void 0,campaign_id:this.currentCampaignId()},formFields:[this.formlyService.buildInputConfig({key:"name",inputKind:"NAME"})],entries:this.tableData().PLAYER_CLASS,showForm:!1},{name:"Node Link Type",kind:"NODE_LINK_TYPE",icon:"link",model:{campaign_id:this.currentCampaignId(),weight:1},entries:this.tableData().NODE_LINK_TYPE,formFields:[this.formlyService.buildInputConfig({key:"name",inputKind:"NAME"}),this.formlyService.buildInputConfig({inputKind:"NUMBER_FRACTION",key:"weight",max:3,min:-3}),this.formlyService.buildInputConfig({key:"color",inputKind:"COLOR"}),this.formlyService.buildInputConfig({key:"icon",inputKind:"NAME",wrappers:["form-field"],showWrapperLabel:!0,label:"Icon (https://fontawesome.com/v6/search?o=r&m=free)"})],idProp:"id",campaignIdProp:"campaign_id",showForm:!1}])),this.campaignOverviewUrl=this.routingService.getRoutePath("campaign-overview")}createEntry(kind,entry){this.createTableEntry.emit({table:kind,entry}),this.getTable(kind).showForm=!1}getTable(kind){return this.tables().find((table=>table.kind===kind))}static{this.ctorParameters=()=>[{type:routing_service.O},{type:formly_service_service.$}]}static{this.propDecorators={currentCampaignId:[{type:core.Input,args:[{isSignal:!0,alias:"currentCampaignId",required:!0,transform:void 0}]}],tableData:[{type:core.Input,args:[{isSignal:!0,alias:"tableData",required:!0,transform:void 0}]}],canDeleteGlobalEntries:[{type:core.Input,args:[{isSignal:!0,alias:"canDeleteGlobalEntries",required:!0,transform:void 0}]}],hasCampaignWritePermission:[{type:core.Input,args:[{isSignal:!0,alias:"hasCampaignWritePermission",required:!0,transform:void 0}]}],loadTableEntries:[{type:core.Output}],deleteTableEntry:[{type:core.Output}],createTableEntry:[{type:core.Output}]}}};ConfigTablesComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-config-tables",template:'<app-page-container>\n  <article class="config-tables">\n    <a class="config-tables__return-button" [routerLink]="campaignOverviewUrl">\n      <button\n        btn\n        [kind]="\'SECONDARY\'"\n        [icon]="\'globe-americas\'"\n        [text]="\'Back to campaign overview\'"\n      ></button>\n    </a>\n\n    \x3c!-- Sections --\x3e\n    @for (table of tables(); track table.kind) {\n      <app-config-table\n        [table]="table"\n        [canDeleteGlobalEntries]="canDeleteGlobalEntries()"\n        [canDeleteCampaignEntries]="hasCampaignWritePermission()"\n        [canCreate]="canCreate()"\n        (loadTableEntries)="loadTableEntries.emit(table.kind)"\n        (createTableEntry)="createEntry(table.kind, $event)"\n        (deleteTableEntry)="\n          deleteTableEntry.emit({ table: table.kind, entry: $event })\n        "\n      ></app-config-table>\n    }\n\n    <a class="config-tables__return-button" [routerLink]="campaignOverviewUrl">\n      <button\n        btn\n        [kind]="\'SECONDARY\'"\n        [icon]="\'globe-americas\'"\n        [text]="\'Back to campaign overview\'"\n      ></button>\n    </a>\n  </article>\n</app-page-container>\n',standalone:!0,imports:[page_container_component.i,router.Wk,button_component.Q,ConfigTableComponent],styles:[config_tables_componentngResource_default()]})],ConfigTablesComponent);const config_tables_stories={title:"DesignSystem/Templates/ConfigTablesComponent",component:ConfigTablesComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,formly_constants.d_,animations.BrowserAnimationsModule],declarations:[],providers:[formly_service_mock.p]})],args:{currentCampaignId:1,campaignName:"Aldrune",tableData:{},canDeleteGlobalEntries:!0,hasCampaignWritePermission:!0}},Template=args=>({props:{...args,loadTableEntries:(0,dist.XI)("loadTableEntries"),deleteTableEntry:(0,dist.XI)("deleteTableEntry"),createTableEntry:(0,dist.XI)("createTableEntry")}}),Default=Template.bind({});Default.args={};const WithData=Template.bind({});WithData.args={tableData:{MARKER_TYPE:[{name:"Forest",icon:"tree",is_text_marker:!0,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:28:05.887185Z",fontawesome_type:"fa",color:"darkgreen",id:1},{name:"Capital",icon:"university",is_text_marker:!0,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:26.682656Z",fontawesome_type:"fa",color:"purple",id:2},{name:"Cathedral",icon:"place-of-worship",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:51:51.177824Z",fontawesome_type:"fas",color:"orange",id:3},{name:"Cave",icon:"moon",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T16:07:40.729354Z",fontawesome_type:"fas",color:"gray",id:4},{name:"Event",icon:"exclamation",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:28:01.355792Z",fontawesome_type:"fa",color:"red",id:5},{name:"Fort",icon:"fort-awesome",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:50:41.269164Z",fontawesome_type:"fa",color:"lightgray",id:6},{name:"Grove",icon:"paw",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:28:25.319406Z",fontawesome_type:"fa",color:"green",id:7},{name:"Mountain",icon:"mountain",is_text_marker:!0,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:52:02.398844Z",fontawesome_type:"fas",color:"beige",id:8},{name:"Ruin",icon:"dungeon",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:46:02.394436Z",fontawesome_type:"fas",color:"lightgray",id:9},{name:"Town",icon:"info",is_text_marker:!0,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:29:00.320971Z",fontawesome_type:"fa",color:"blue",id:10},{name:"Settlement",icon:"home",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:28:55.824551Z",fontawesome_type:"fa",color:"lightgreen",id:11},{name:"Docks",icon:"anchor",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:49.646018Z",fontawesome_type:"fa",color:"blue",id:12},{name:"Building",icon:"home",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:17.955863Z",fontawesome_type:"fa",color:"lightgray",id:13},{name:"Religious Structure",icon:"place-of-worship",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T16:17:57.221134Z",fontawesome_type:"fas",color:"orange",id:14},{name:"Beach",icon:"umbrella-beach",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T16:09:38.596422Z",fontawesome_type:"fas",color:"lightblue",id:15},{name:"Canal",icon:"tint",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:22.172661Z",fontawesome_type:"fa",color:"lightblue",id:16},{name:"Cliff",icon:"mountain",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:37.095700Z",fontawesome_type:"fa",color:"beige",id:17},{name:"District",icon:"diamond",is_text_marker:!0,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:41.761572Z",fontawesome_type:"fa",color:"black",id:18},{name:"Garden/Park",icon:"tree",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:28:17.516375Z",fontawesome_type:"fa",color:"lightgreen",id:19},{name:"Estate",icon:"gavel",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:27:57.200846Z",fontawesome_type:"fa",color:"purple",id:20},{name:"Academy Related",icon:"hat-wizard",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T16:23:53.376734Z",fontawesome_type:"fas",color:"lightgray",id:21},{name:"Outposts",icon:"chess-rook",is_text_marker:!1,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-29T04:51:24.882128Z",fontawesome_type:"fas",color:"lightgray",id:22},{name:"Sea/Ocean",icon:"water",is_text_marker:!0,creation_datetime:"2021-07-03T17:56:33.339291Z",update_datetime:"2021-07-27T15:28:51.303357Z",fontawesome_type:"fa",color:"gray",id:23},{name:"Underwater Ruins",icon:"dungeon",is_text_marker:!1,creation_datetime:"2021-07-27T15:59:53.480354Z",update_datetime:"2021-07-27T16:01:53.702694Z",fontawesome_type:"fas",color:"lightblue",id:24},{name:"Palace",icon:"crown",is_text_marker:!1,creation_datetime:"2021-07-27T16:14:14.295182Z",update_datetime:"2021-07-27T16:14:14.295249Z",fontawesome_type:"fas",color:"lightgray",id:25},{name:"Store",icon:"store",is_text_marker:!1,creation_datetime:"2021-07-27T16:18:35.147729Z",update_datetime:"2021-07-27T16:18:35.147809Z",fontawesome_type:"fas",color:"lightgray",id:26},{name:"Inn",icon:"hotel",is_text_marker:!1,creation_datetime:"2021-07-27T16:22:11.783529Z",update_datetime:"2021-07-27T16:22:11.783599Z",fontawesome_type:"fas",color:"lightgray",id:27},{name:"Monument",icon:"monument",is_text_marker:!1,creation_datetime:"2021-07-27T16:22:26.373214Z",update_datetime:"2021-07-27T16:22:26.373289Z",fontawesome_type:"fas",color:"lightgray",id:28}],PLAYER_CLASS:player_class_service_mock.T}};const __namedExportsOrder=["Default","WithData"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    loadTableEntries: action('loadTableEntries'),\n    deleteTableEntry: action('deleteTableEntry'),\n    createTableEntry: action('createTableEntry')\n  }\n})",...Default.parameters?.docs?.source}}},WithData.parameters={...WithData.parameters,docs:{...WithData.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    loadTableEntries: action('loadTableEntries'),\n    deleteTableEntry: action('deleteTableEntry'),\n    createTableEntry: action('createTableEntry')\n  }\n})",...WithData.parameters?.docs?.source}}}},"./src/design/atoms/card/card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".accordion {\n  --bs-accordion-active-bg: var(--bs-gray-900) !important;\n}\n\nbutton.btn.btn-link:hover {\n  text-decoration: none !important;\n}\n\nbutton.btn.btn-link:focus {\n  text-decoration: none !important;\n  box-shadow: none !important;\n}\n\n.card button.btn.btn-link {\n  width: 100%;\n  text-align: left;\n}\n\n.form-control {\n  height: 2.75rem;\n  font-size: 1.2rem;\n}\n\ninput.form-control {\n  background-color: transparent !important;\n  color: white !important;\n  border: solid white 1px !important;\n}\n\ninput.form-control:focus {\n  box-shadow: 3px blue;\n  color: white;\n}\n\nselect.form-select {\n  color: white !important;\n  background-color: #4c4c4c !important;\n}\n\nselect:focus {\n  background-color: #4c4c4c;\n  box-shadow: 3px blue;\n  color: white;\n}\n\noption {\n  background-color: #1b1f22;\n  color: white;\n  font-size: 18px;\n}\n\n.custom-control.custom-checkbox {\n  transform: scale(1.2);\n  transform-origin: 0;\n}\n\n.visually-hidden {\n  display: none;\n}\n\n.vh-50 {\n  height: 50vh;\n}\n\n.tooltip-inner {\n  --bs-tooltip-bg: var(--bs-info-bg-subtle);\n  --bs-tooltip-color: var(--bs-emphasis-color);\n}\n\n:host {\n  --card-bg-color: #393e41 !important;\n  --card-flex-direction: column;\n  --card-padding: var(--spacer-4);\n}\n\n.card {\n  background-color: var(--card-bg-color);\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n  padding: var(--card-padding);\n  flex-direction: var(--card-flex-direction);\n  width: 100%;\n  height: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/config-table/config-table.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".config-tables__section {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-5);\n}\n\n.section__separator {\n  --separator-margin-top: var(--spacer-0);\n}\n.section__table-container {\n  overflow-x: auto;\n}\n\n.heading {\n  display: flex;\n  justify-content: space-between;\n}\n.heading__text {\n  margin-bottom: var(--spacer-0);\n}\n.heading__buttons {\n  align-self: flex-end;\n  position: relative;\n  top: 1px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/config-tables/config-tables.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);