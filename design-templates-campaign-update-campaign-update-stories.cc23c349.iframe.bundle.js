(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8139],{"./src/app/_services/article/map.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>dummyMaps,r:()=>dummyMap});const dummyMap={getAbsoluteRouterUrl:()=>"/map/url",pk:2,name:"The World",image:"/media/Aldrune_World_1.jpg",icon:"/media/globe",update_datetime:"2021-06-26T17:10:35.352119Z",campaign:1,campaign_details:{name:"Aldrune",id:1},markers:__webpack_require__("./src/app/_services/article/marker.service.mock.ts").a},dummyMaps=[{getAbsoluteRouterUrl:()=>"/map/url1",article_type:"map",description:"A map of East Academy Year 2 Dorms ",pk:13,name_full:"East Academy Year 2 Dorms ",name:"East Academy Year 2 Dorms ",campaign_details:{name:"Empress-City",id:3},update_datetime:"2024-08-25T20:44:28.629572Z",icon:void 0},{getAbsoluteRouterUrl:()=>"/map/url2",article_type:"map",description:"A map of Forgian",pk:12,name_full:"Forgian",name:"Forgian",campaign_details:{name:"Empress-City",id:4},update_datetime:"2024-08-23T21:58:05.094772Z",icon:void 0}]},"./src/app/_services/article/marker.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>dummyMarkers});const dummyMarkers=[{getAbsoluteRouterUrl:()=>"/marker1/url",pk:106,color:void 0,icon:void 0,longitude:532,latitude:553,map:2,map_details:{name:"The World"},location:50,location_details:{name:"Galway",description:"<p>The New Capital of Fen's High Kingdom</p>\n<p>&nbsp;</p>\n<p>Galway City Breakdown</p>\n<p>Eastern Lakeway - 15 Buildings<br />Western Lakeway - 40 Buildings<br />Myria Island - 7 Buildings<br />River District - 46 Buildings, several temporary Refugee Shelters<br />Forest District - 85 Buildings<br />Hill District - 149 Buildings<br />Galway Proper - 60 Buildings</p>\n<p>Total - 402 Civilian Buildings in Galway</p>\n<p>Estimated Population: 4000+</p>",parent_location_name:"none",sublocations:[]},type:11,type_details:{name:"Settlement",icon:"home",is_text_marker:!1,fontawesome_type:"fa",color:"lightgreen",id:11,update_datetime:"2021-07-27T15:28:05.887185Z",creation_datetime:"2021-07-03T17:56:33.339291Z"},campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/marker2/url",pk:137,color:void 0,icon:void 0,longitude:752,latitude:579,map:2,map_details:{name:"The World"},location:206,location_details:{name:"Eastern sea",description:"<p>The ocean east of Aldrune, now accessible through the path carved by the world serpent.</p>",parent_location_name:"none",sublocations:["Lighthouse"]},type:23,type_details:{name:"Sea/Ocean",icon:"water",is_text_marker:!0,fontawesome_type:"fa",color:"gray",id:23,update_datetime:"2021-07-27T15:28:05.887185Z",creation_datetime:"2021-07-03T17:56:33.339291Z"},campaign_details:{name:"Aldrune",id:1}}]},"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"WHAT",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);let innerInputType;if("NUMBER"===config.inputKind&&validators.push("notInteger"),"NAME"===config.inputKind&&validators.push("hasSpecialCharacters"),"NUMBER"===config.inputKind)innerInputType="number";else innerInputType="string";return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,minLength:config.minLength,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildAutocompleteConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"autocomplete",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(config.key),required:config.required??!0,disabled:config.disabled,additionalProperties:{optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,optionKeyProp:config.optionKeyProp,loadOptions:config.loadOptions,initialValue$:config.initialValue$}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/app/_services/utils/campaign.mock.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_B:()=>dummyCampaigns,jr:()=>dummyCampaign,mE:()=>dummyStatistics});const dummyCampaigns=[{pk:1,name:"Aldrune",subtitle:"A campaign made by Samuel Day and recorded by Philipp Dörner<br>through the eyes of Relentless",background_image:"/media/campaign_backgrounds/bg.jpg",is_deactivated:!1,has_audio_recording_permission:!0,icon:"/media/campaign_icons/favicon-128x128.png",default_map:1,default_map_details:{icon:"map",image:"pic05_sMT2d6M.jpg",name:"Aldrune",id:1},duration:{start_date:"2020-04-07T00:00:00.000000Z",last_date:"2023-04-11T00:00:00.000000Z"}},{pk:2,name:"Jōzai Corp",subtitle:"Welcome to Jōzai Corp, please enjoy your employment.",background_image:"/media/campaign_backgrounds/shanghai_city_snlaYDd.jpg",is_deactivated:!1,has_audio_recording_permission:!1,icon:"/media/campaign_icons/icon.png",default_map:void 0,default_map_details:void 0,duration:{start_date:"2022-01-15T00:00:00.000000Z",last_date:"2022-02-19T00:00:00.000000Z"}}],dummyStatistics={character_count:265,item_count:142,location_count:229,creature_count:42,diaryentry_count:101,encounter_count:954,organization_count:46,quest_count:69,quote_count:203,session_audio_count:69,timestamp_count:1121,map_count:7,marker_count:136,spell_count:22,session_count:90,rule_count:17},dummyCampaign={name:"Aldrune",subtitle:"A campaign for testing",pk:1,background_image:"/assets/default_images/audio_pic_default.webp",icon:"https://www.aldrune.com/media/campaign_icons/favicon-128x128.png",default_map:123,default_map_details:{id:123,name:"Default Map",icon:"plus",image:"blub.jpg"},is_deactivated:!1,has_audio_recording_permission:!0,members:[{username:"isofruit",password:"password1",pk:1,api_permissions:["permission1","permission2"],groups:[1,2],group_details:[{name:"group1",pk:1},{name:"group2",pk:2}],is_staff:!0,is_superuser:!1,email:"user1@example.com",is_active:!0},{username:"user2",password:"password2",pk:2,api_permissions:["permission3","permission4"],groups:[1,3],group_details:[{name:"group1",pk:1},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user2@example.com",is_active:!0}],admins:[{username:"admin",password:"adminpassword",pk:3,api_permissions:["permission1","permission2","permission3","permission4"],groups:[1,2,3],group_details:[{name:"group1",pk:1},{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!0,is_superuser:!0,email:"admin@example.com",is_active:!0},{username:"user3",password:"password3",pk:4,api_permissions:["permission1"],groups:[1],group_details:[{name:"group1",pk:1}],is_staff:!1,is_superuser:!1,email:"user3@example.com",is_active:!0}],guests:[{username:"user4",password:"password4",pk:5,api_permissions:["permission2","permission3"],groups:[2,3],group_details:[{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user4@example.com",is_active:!0},{username:"user5",password:"password5",pk:6,api_permissions:["permission4"],groups:[3],group_details:[{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user5@example.com",is_active:!0}],member_group_name:"Members",admin_group_name:"Admins",guest_group_name:"Guests",emptySearchResponses:[{id:1,text:"Empty response 1",campaign:1},{id:2,text:"Empty response 2",campaign:1}]}},"./src/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',standalone:!0,imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./src/design/templates/create-update/create-update.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>CreateUpdateComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var create_update_componentngResource=__webpack_require__("./src/design/templates/create-update/create-update.component.scss?ngResource"),create_update_componentngResource_default=__webpack_require__.n(create_update_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),compare_form_component=__webpack_require__("./src/design/molecules/compare-form/compare-form.component.ts"),form_component=__webpack_require__("./src/design/molecules/form/form.component.ts"),page_container_component=__webpack_require__("./src/design/organisms/page-container/page-container.component.ts");let CreateUpdateComponent=class CreateUpdateComponent{constructor(){this.heading=core.input.required(),this.state=core.input.required(),this.userModel=(0,core.input)(),this.formlyFields=core.input.required(),this.serverModel=core.input.required(),this.create=(0,core.output)(),this.update=(0,core.output)(),this.cancel=(0,core.output)()}onSubmit(submittedData){if(null!=submittedData)switch(this.state()){case"CREATE":this.create.emit(submittedData);break;case"UPDATE":case"OUTDATED_UPDATE":this.update.emit(submittedData)}}static{this.propDecorators={heading:[{type:core.Input,args:[{isSignal:!0,alias:"heading",required:!0,transform:void 0}]}],state:[{type:core.Input,args:[{isSignal:!0,alias:"state",required:!0,transform:void 0}]}],userModel:[{type:core.Input,args:[{isSignal:!0,alias:"userModel",required:!1,transform:void 0}]}],formlyFields:[{type:core.Input,args:[{isSignal:!0,alias:"formlyFields",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!0,transform:void 0}]}],create:[{type:core.Output,args:["create"]}],update:[{type:core.Output,args:["update"]}],cancel:[{type:core.Output,args:["cancel"]}]}}};CreateUpdateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-create-update",template:'<app-page-container>\n  <div class="container create-update">\n    <h1 class="create-update__heading heading">\n      <span class="heading__text">\n        {{ heading() }}\n      </span>\n      \x3c!-- Heading --\x3e\n      <div class="heading__edit-cancel">\n        <button\n          btn\n          (click)="cancel.emit()"\n          [icon]="\'times\'"\n          [kind]="\'SECONDARY\'"\n        ></button>\n      </div>\n    </h1>\n\n    <div class="create-update__form form">\n      <ng-content select="[sub-forms]"></ng-content>\n    </div>\n\n    \x3c!-- Form --\x3e\n    @switch (state()) {\n      @case ("CREATE") {\n        <ng-container [ngTemplateOutlet]="createUpdateForm"></ng-container>\n      }\n      @case ("UPDATE") {\n        <ng-container [ngTemplateOutlet]="createUpdateForm"></ng-container>\n      }\n      @case ("OUTDATED_UPDATE") {\n        <ng-container [ngTemplateOutlet]="outdatedUpdateForm"></ng-container>\n      }\n    }\n  </div>\n</app-page-container>\n\n<ng-template #createUpdateForm>\n  <app-form\n    [model]="userModel()"\n    [fields]="formlyFields()"\n    (formlySubmit)="onSubmit($event)"\n    (formlyCancel)="cancel.emit()"\n  ></app-form>\n</ng-template>\n\n<ng-template #outdatedUpdateForm>\n  <app-compare-form\n    [fields]="formlyFields()"\n    [modelFromUser]="userModel()"\n    [modelFromServer]="serverModel()"\n    (formlySubmit)="onSubmit($event)"\n    (formlyCancel)="cancel.emit()"\n  ></app-compare-form>\n</ng-template>\n',standalone:!0,imports:[page_container_component.i,button_component.Q,common.NgTemplateOutlet,form_component.s,compare_form_component.z],styles:[create_update_componentngResource_default()]})],CreateUpdateComponent)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U1:()=>replaceItem,Z:()=>sortByProp});const replaceItem=(list,item,key)=>{const newList=[...list],itemIndex=newList.findIndex((listItem=>listItem[key]===item[key]));if(-1===itemIndex)throw"Failed to find item in list";return newList[itemIndex]=item,newList},sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./src/design/templates/campaign-update/campaign-update.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>campaign_update_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),map_service_mock=__webpack_require__("./src/app/_services/article/map.service.mock.ts"),campaign_mock_service=__webpack_require__("./src/app/_services/utils/campaign.mock.service.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var campaign_update_componentngResource=__webpack_require__("./src/design/templates/campaign-update/campaign-update.component.scss?ngResource"),campaign_update_componentngResource_default=__webpack_require__.n(campaign_update_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),create_update_component=__webpack_require__("./src/design/templates/create-update/create-update.component.ts");let CampaignUpdateComponent=class CampaignUpdateComponent{constructor(formlyService){this.formlyService=formlyService,this.userModel=core.input.required(),this._userModel=(0,core.computed)((()=>this.removeFileValues(this.userModel()))),this.serverModel=(0,core.input)(void 0),this._serverModel=(0,core.computed)((()=>{if(null!=this.serverModel())return this.removeFileValues(this.serverModel())})),this.mapOptions=core.input.required(),this.formState=(0,core.computed)((()=>null!=this.serverModel()?"OUTDATED_UPDATE":"UPDATE")),this.cancel=(0,core.output)(),this.update=(0,core.output)(),this.mapOptions$=(0,rxjs_interop.br)(this.mapOptions),this.formlyFields=(0,core.computed)((()=>[this.formlyService.buildInputConfig({key:"name",inputKind:"NAME",required:!0,maxLength:400}),this.formlyService.buildInputConfig({key:"subtitle",inputKind:"STRING",required:!1,maxLength:400}),this.formlyService.buildOverviewSelectConfig({key:"default_map",label:"Default Map",valueProp:"pk",labelProp:"name",options$:this.mapOptions$,required:!1}),this.formlyService.buildFileFieldConfig({key:"background_image",required:!1}),this.formlyService.buildFileFieldConfig({key:"icon",required:!1})]))}removeFileValues(model){return{...model,background_image:"",icon:""}}static{this.ctorParameters=()=>[{type:formly_service_service.$}]}static{this.propDecorators={userModel:[{type:core.Input,args:[{isSignal:!0,alias:"userModel",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!1,transform:void 0}]}],mapOptions:[{type:core.Input,args:[{isSignal:!0,alias:"mapOptions",required:!0,transform:void 0}]}],cancel:[{type:core.Output,args:["cancel"]}],update:[{type:core.Output,args:["update"]}]}}};CampaignUpdateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-campaign-update",standalone:!0,imports:[create_update_component.F],template:'@if (_userModel() != null) {\n  <app-create-update\n    [state]="formState()"\n    [heading]="\'Update Campaign\'"\n    [formlyFields]="formlyFields()"\n    [userModel]="_userModel()"\n    [serverModel]="_serverModel()"\n    (cancel)="cancel.emit()"\n    (update)="update.emit($event)"\n  ></app-create-update>\n}\n',styles:[campaign_update_componentngResource_default()]})],CampaignUpdateComponent);const campaign_update_stories={title:"DesignSystem/Templates/CampaignUpdate",component:CampaignUpdateComponent,decorators:[(0,dist.moduleMetadata)({imports:[formly_constants.aj]})],args:{userModel:campaign_mock_service.jr,serverModel:void 0,mapOptions:map_service_mock.A},argTypes:{cancel:{action:"cancel"}}},Default={},__namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}}},"./src/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/campaign-update/campaign-update.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/create-update/create-update.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".heading {\n  display: flex;\n  justify-content: space-between;\n  text-align: center;\n}\n.heading__text {\n  flex: 1;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);