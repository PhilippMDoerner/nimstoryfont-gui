(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3605],{"./src/app/_services/formly/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Dq:()=>fieldsDontMatchMessage,EC:()=>timeValidator,N8:()=>dateValidator,Nd:()=>faPrefixMessage,Ou:()=>dateMessage,Oy:()=>requiredIconMessage,Z5:()=>specialCharacterValidator,cC:()=>iconValidator,d:()=>hasSpecialCharactersMessage,h9:()=>requiredMessage,iR:()=>numberValidator,jp:()=>integerValidator,k1:()=>sessionAlreadyHasAuthor,kO:()=>fieldMatchValidator,lk:()=>requiredIconValidator,tu:()=>notNumberMesage,wh:()=>invalidTimeMessage,yt:()=>requiredValidator,zG:()=>notIntegerMessage});const invalidTimeMessage={name:"time",message:"Time must have 'hh:mm:ss' pattern"},requiredMessage={name:"required",message:"This field is required!"},dateMessage={name:"date",message:"This date does not follow the pattern: 'YYYY-MM-DD'. Sorry to be such a Nazi about it. The computer is forcing me."},requiredIconMessage={name:"requiredIcon",message:"This field requires a fontawesome icon as input. Here is a list of them: https://fontawesome.com/v4.7.0/icons/"},faPrefixMessage={name:"faPrefix",message:"Icons are stored without the 'fa-' from font-awesome prefix"},notIntegerMessage={name:"notInteger",message:"Your input is not an integer. This field requires an integer number. No amount of revolution can overcome this."},notNumberMesage={name:"notNumber",message:"Your input is not a number."},hasSpecialCharactersMessage={name:"hasSpecialCharacters",message:'Your input includes one of the following invalid special characters: [ ] ( ) ? | \\ " % ~ # < > :. If you need to rebel, please dont against this.'},fieldsDontMatchMessage={name:"fieldMatch",message:"Password Not Matching"},sessionAlreadyHasAuthor={name:"isInvalidSessionAuthorPair",message:"\n    The author you selected already has a diaryentry in the session you selected. You \n    can't have 2 diaryentries from the same author in the same session. Consider writing \n    your diaryentry as an encounter instead into the diaryentry at the spot you just considered."};const timeValidator={name:"time",validation:function timeValidation(control){const isValidTime=/\d\d.[0-5]\d.[0-5]\d/.test(control.value);return isValidTime?null:{time:!isValidTime}}};function requiredValidation(control){return!!control.value||0===control.value?null:{required:!0}}const requiredValidator={name:"required",validation:requiredValidation},requiredIconValidator={name:"requiredIcon",validation:requiredValidation};const dateValidator={name:"date",validation:function dateValidation(control){return/[1-2]\d{3}-(0\d|1[0-2])-[0-3]\d/.test(control.value)?null:{date:!0}}};const iconValidator={name:"faPrefix",validation:function iconValidation(control){const hasFaPrefix=/fa-/.test(control.value),hasFasPrefix=/fas-/.test(control.value),isValidIcon=hasFaPrefix||hasFasPrefix;return isValidIcon?null:{faPrefix:isValidIcon}}};const integerValidator={name:"notInteger",validation:function isIntegerValidation(control){if(null==control.value)return null;const isInteger="number"==typeof control.value&&Number.isInteger(control.value);return isInteger?null:{notInteger:!isInteger}}};const numberValidator={name:"notNumber",validation:function isNumberValidation(control){const isNumberType="number"==typeof control.value,isNumberString="string"==typeof control.value&&!isNaN(parseInt(control.value)),isNumber=isNumberType||isNumberString;return isNumber?null:{notNumber:!isNumber}}};const specialCharacterValidator={name:"hasSpecialCharacters",validation:function hasNoSpecialCharactersValidation(control){if("string"==typeof control.value){const specialCharacters=["[","]","(",")","|","\\",'"',"%","~","#","<",">","?","/",":"];for(const specialCharacter of specialCharacters)if(control.value.includes(specialCharacter))return{hasSpecialCharacters:!0}}return null}};const fieldMatchValidator={name:"fieldMatch",validation:function passwordMatchValidation(control){const{password,passwordConfirm}=control.value;return passwordConfirm&&password&&passwordConfirm===password?null:{fieldMatch:!0}}}},"./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>InfoCircleTooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var info_circle_tooltip_componentngResource=__webpack_require__("./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.scss?ngResource"),info_circle_tooltip_componentngResource_default=__webpack_require__.n(info_circle_tooltip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let InfoCircleTooltipComponent=class InfoCircleTooltipComponent{constructor(){this.tooltip=core.input.required(),this.text=core.input.required(),this.placement=(0,core.input)("top"),this.tooltipKind=(0,core.computed)((()=>this.tooltip()instanceof core.TemplateRef?"custom":"text"))}static{this.propDecorators={tooltip:[{type:core.Input,args:[{isSignal:!0,alias:"tooltip",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],placement:[{type:core.Input,args:[{isSignal:!0,alias:"placement",required:!1,transform:void 0}]}]}}};InfoCircleTooltipComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-info-circle-tooltip",template:'<strong\n  [placement]="placement()"\n  [ngbTooltip]="tooltipKind() === \'text\' ? tooltipContent : tooltip()"\n  [tooltipClass]="\'my-tooltip\'"\n  class="pointer"\n>\n  {{ text() }}\n  <app-icon class="mx-1" [icon]="\'info-circle\'"></app-icon>\n</strong>\n\n<ng-template #tooltipContent>\n  <div class="m-0 p-0">\n    {{ tooltip() }}\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,ng_bootstrap.md],styles:[info_circle_tooltip_componentngResource_default()]})],InfoCircleTooltipComponent)},"./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>FormlySelectDisableFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var formly_select_disable_field_componentngResource=__webpack_require__("./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.scss?ngResource"),formly_select_disable_field_componentngResource_default=__webpack_require__.n(formly_select_disable_field_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),ngx_formly_bootstrap_form_field=__webpack_require__("./node_modules/@ngx-formly/bootstrap/fesm2020/ngx-formly-bootstrap-form-field.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),Observable=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),combineLatest=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),info_circle_tooltip_component=__webpack_require__("./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.ts");let FormlySelectDisableFieldComponent=class FormlySelectDisableFieldComponent extends ngx_formly_bootstrap_form_field.P{static{this.EMPTY_OPTION_LABEL="------"}static{this.EMPTY_OPTION_VALUE=null}ngOnInit(){const templateOptions=this.props,formControl=this.formControl,model=this.model,options$=this.props.options;if(!(options$ instanceof Observable.c))throw"InvalidSelectOptionsException. You tried to create a FormlySelectDisableComponent - field, but provided an option that wasn't an Observable!";const isOptionDisabled$=(0,this.props.additionalProperties.disabledExpression)(options$,templateOptions,formControl,model);this.selectOptions$=(0,combineLatest.z)({options:options$,isDisabledList:isOptionDisabled$}).pipe((0,map.T)((({options,isDisabledList})=>options.map(((opt,index)=>({value:opt,enabled:!isDisabledList[index]})))))),this.setModelValue()}ngOnChanges(){this.setModelValue()}setModelValue(){const key=this.key,model=this.field.model;this.modelValue=model[key]}};FormlySelectDisableFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-formly-select-disable",template:'<div class="field mb-3 {{ field.className }}" [class.d-none]="to.hidden">\n  <label class="form-label" [for]="\'formly_disable_select_\' + props.label">\n    <app-info-circle-tooltip\n      [text]="props.label + (props.required ? \'*\' : \'\')"\n      [tooltip]="props[\'additionalProperties\'][\'tooltipMessage\']"\n    ></app-info-circle-tooltip>\n  </label>\n\n  @let selectOptions = selectOptions$ | async;\n  @if (selectOptions) {\n    <select\n      class="form-select"\n      [name]="\'formly_disable_select_\' + props.label"\n      [id]="\'formly_disable_select_\' + props.label"\n      [required]="!!props.required"\n      [formControl]="formControl"\n      [formlyAttributes]="field"\n    >\n      @for (entry of selectOptions; track entry) {\n        <option\n          [ngValue]="entry.value[props[\'valueProp\']]"\n          [disabled]="!entry.enabled"\n          [selected]="entry.value[props[\'valueProp\']] === modelValue"\n        >\n          {{ entry.value[props["labelProp"]] }}\n        </option>\n      }\n    </select>\n  }\n</div>\n',imports:[info_circle_tooltip_component.$,fesm2022_forms.X1,ngx_formly_core.qy,common.AsyncPipe],styles:[formly_select_disable_field_componentngResource_default()]})],FormlySelectDisableFieldComponent)},"./src/app/design/templates/organization/organization.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>organization_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),validators=__webpack_require__("./src/app/_services/formly/validators.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var organization_componentngResource=__webpack_require__("./src/app/design/templates/organization/organization.component.scss?ngResource"),organization_componentngResource_default=__webpack_require__.n(organization_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),hotkey_directive=__webpack_require__("./src/app/_directives/hotkey.directive.ts"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),array=__webpack_require__("./src/utils/array.ts"),button_link_component=__webpack_require__("./src/app/design/atoms/button-link/button-link.component.ts"),article_footer_component=__webpack_require__("./src/app/design/molecules/article-footer/article-footer.component.ts"),badge_list_component=__webpack_require__("./src/app/design/molecules/badge-list/badge-list.component.ts"),editable_text_component=__webpack_require__("./src/app/design/organisms/editable-text/editable-text.component.ts"),image_carousel_card_component=__webpack_require__("./src/app/design/organisms/image-carousel-card/image-carousel-card.component.ts"),page_container_component=__webpack_require__("./src/app/design/organisms/page-container/page-container.component.ts");let OrganizationComponent=class OrganizationComponent{constructor(routingService){this.routingService=routingService,this.organization=core.input.required(),this.organizationServerModel=core.input.required(),this.serverUrl=core.input.required(),this.imageServerModel=core.input.required(),this.campaignCharacters=core.input.required(),this.canUpdate=core.input.required(),this.canCreate=core.input.required(),this.canDelete=core.input.required(),this.createImage=(0,core.output)(),this.deleteImage=(0,core.output)(),this.updateImage=(0,core.output)(),this.organizationDelete=(0,core.output)(),this.organizationUpdate=(0,core.output)(),this.organizationMembershipCreate=(0,core.output)(),this.organizationMembershipDelete=(0,core.output)(),this.overviewUrl=(0,core.computed)((()=>{const campaignName=this.organization().campaign_details?.name;return this.routingService.getRoutePath("organization-overview",{campaign:campaignName})})),this.updateUrl=(0,core.computed)((()=>{const campaignName=this.organization().campaign_details?.name;return this.routingService.getRoutePath("organization-update",{campaign:campaignName,name:this.organization().name})})),this.organizationMembers=(0,core.computed)((()=>{const badgeEntries=this.organization().members?.map((member=>({badgeValue:member,text:member.name,link:this.routingService.getRoutePath("character",{campaign:this.organization().campaign_details?.name,name:member.name})})))??[];return(0,array.Z)(badgeEntries,"text")})),this.headquarterUrl=(0,core.computed)((()=>{const campaignName=this.organization().campaign_details?.name;return this.routingService.getRoutePath("location",{campaign:campaignName,name:this.organization().headquarter_details?.name,parent_name:this.organization().headquarter_details?.parent_name})})),this.leaderUrl=(0,core.computed)((()=>{const campaignName=this.organization().campaign_details?.name;return this.routingService.getRoutePath("character",{campaign:campaignName,name:this.organization().leader})}))}onDescriptionUpdate(description){const itemToUpdate=void 0!==this.organizationServerModel()?this.organizationServerModel():this.organization();itemToUpdate&&this.organizationUpdate.emit({...itemToUpdate,description})}deleteMembership(member){this.organizationMembershipDelete.emit(member)}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={organization:[{type:core.Input,args:[{isSignal:!0,alias:"organization",required:!0,transform:void 0}]}],organizationServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"organizationServerModel",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],imageServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"imageServerModel",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],createImage:[{type:core.Output,args:["createImage"]}],deleteImage:[{type:core.Output,args:["deleteImage"]}],updateImage:[{type:core.Output,args:["updateImage"]}],organizationDelete:[{type:core.Output,args:["organizationDelete"]}],organizationUpdate:[{type:core.Output,args:["organizationUpdate"]}],organizationMembershipCreate:[{type:core.Output,args:["organizationMembershipCreate"]}],organizationMembershipDelete:[{type:core.Output,args:["organizationMembershipDelete"]}]}}};OrganizationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-organization",template:'<app-page-container>\n  <article class="container">\n    @if (canUpdate()) {\n      <div class="organization__edit-container">\n        <a\n          btn\n          [routerLink]="updateUrl()"\n          [icon]="\'pencil\'"\n          [kind]="\'SECONDARY\'"\n          [ngbTooltip]="\'Edit \' + organization().name"\n          [attr.aria-label]="\'Edit \' + organization().name"\n          [hotkey]="\'e\'"\n          (hotkeyPressed)="$event.host.click()"\n        >\n        </a>\n      </div>\n    }\n\n    \x3c!-- Heading --\x3e\n    <div class="row">\n      <h1 class="col-12 organization__heading">\n        {{ organization().name }}\n      </h1>\n      \x3c!-- Leader-Subheading --\x3e\n      <div class="col-12 organization__subheading">\n        Leader:\n        @if (organization().leader) {\n          <strong>\n            <a class="ms-1" [routerLink]="leaderUrl()">\n              {{ organization().leader }}\n            </a>\n          </strong>\n        } @else {\n          <ng-container *ngTemplateOutlet="Unknown" />\n        }\n      </div>\n\n      \x3c!-- Headquarters Subheading --\x3e\n      <div class="col-12 organization__subheading">\n        Headquarters:\n        @if (organization().headquarter_details) {\n          <strong>\n            <a class="ms-1" [routerLink]="headquarterUrl()">\n              {{ organization().headquarter_details?.name_full }}\n            </a>\n          </strong>\n        } @else {\n          <ng-container *ngTemplateOutlet="Unknown" />\n        }\n      </div>\n    </div>\n\n    \x3c!-- Image Gallery --\x3e\n    <div class="organization__images">\n      <app-image-carousel-card\n        [images]="organization().images ?? []"\n        [serverUrl]="serverUrl()"\n        [serverModel]="imageServerModel()"\n        [canUpdate]="canUpdate()"\n        [canCreate]="canCreate()"\n        [canDelete]="canDelete()"\n        (createImage)="createImage.emit($event)"\n        (deleteImage)="deleteImage.emit($event)"\n        (updateImage)="updateImage.emit($event)"\n      ></app-image-carousel-card>\n    </div>\n\n    <div class="organization__members">\n      <app-badge-list\n        [canCreate]="canCreate()"\n        [canDelete]="canDelete()"\n        [label]="\'Members\'"\n        [entries]="organizationMembers()"\n        [createOptions]="{\n          kind: \'SELECT\',\n          formFieldLabel: \'Characters\',\n          config: {\n            options: campaignCharacters() ?? [],\n            labelProp: \'name\',\n            valueProp: \'pk\',\n          },\n        }"\n        (entryCreate)="organizationMembershipCreate.emit($event)"\n        (entryDelete)="organizationMembershipDelete.emit($event)"\n      ></app-badge-list>\n    </div>\n\n    \x3c!-- Description --\x3e\n    <app-editable-text\n      class="organization__description"\n      [heading]="\'Description\'"\n      [ariaLevel]="2"\n      [placeholder]="\'Add a description for \' + organization().name"\n      [text]="organization().description"\n      [canUpdate]="canUpdate()"\n      (update)="onDescriptionUpdate($event)"\n    ></app-editable-text>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [buttonLink]="overviewUrl()"\n      [buttonLabel]="\'Back to Organizations\'"\n      [showDelete]="canDelete()"\n      [deleteMessage]="\'Organization \' + organization().name"\n      (delete)="organizationDelete.emit(organization())"\n    ></app-article-footer>\n  </article>\n</app-page-container>\n\n<ng-template #Unknown>Unknown</ng-template>\n',imports:[page_container_component.i,router.Wk,button_link_component.W,common.NgTemplateOutlet,image_carousel_card_component.r,editable_text_component.T,article_footer_component.D,hotkey_directive.G,badge_list_component.p,ng_bootstrap.md],styles:[organization_componentngResource_default()]})],OrganizationComponent);const organization_stories={title:"DesignSystem/Templates/OrganizationComponent",component:OrganizationComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,animations.BrowserAnimationsModule,ngx_formly_core.qy.forRoot({types:[{name:"file",component:molecules.JS,wrappers:["form-field"]}],validationMessages:[validators.h9,validators.zG],validators:[validators.yt,validators.jp]})],declarations:[]})],args:{imageServerModel:void 0,canCreate:!0,canUpdate:!0,canDelete:!0,organization:{pk:123,name:"Order of the Silver Lance",description:"A knightly order dedicated to protecting the innocent.",leader:"Sir Cedric",headquarter:456,headquarter_details:{name:"Castle Silverkeep",parent_name:"Kingdom of Arathia",pk:456,name_full:"Castle Silverkeep, Kingdom of Arathia"},members:[{name:"Sir Cedric",membership_id:1,pk:789,alive:!0,organization_id:123,role:"Grandmaster"},{name:"Lady Elspeth",membership_id:2,pk:790,alive:!0,organization_id:123,role:"Commander"},{name:"Sir Richard",membership_id:3,pk:791,alive:!1,organization_id:123,role:"Knight"}],images:[{pk:234,image:"/breeds/mastiff-tibetan/n02108551_5830.jpg",name:"Order Emblem",organization_article:123,article_type:"Organization"},{pk:235,image:"/breeds/mastiff-tibetan/n02108551_5830.jpg",name:"Order Emblem",organization_article:123,article_type:"Organization"}],campaign:1,campaign_details:{id:1,name:"Campaign of Adventures"},creation_datetime:"2022-04-01T12:00:00Z",update_datetime:"2022-04-03T09:30:00Z",getAbsoluteRouterUrl:()=>"https://example.com/organizations/123"},serverUrl:"https://images.dog.ceo"}},Template=args=>({props:{...args,createImage:(0,dist.XI)("createImage"),deleteImage:(0,dist.XI)("deleteImage"),updateImage:(0,dist.XI)("updateImage"),organizationDelete:(0,dist.XI)("organizationDelete")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1,canCreate:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    organizationDelete: action('organizationDelete')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    organizationDelete: action('organizationDelete')\n  }\n})",...NoPermission.parameters?.docs?.source}}}},"./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".warning {\n  color: var(--lightest-red);\n  font-size: 80%;\n}\n\napp-spinner {\n  --thickness: 30px;\n}\n\n.field {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/templates/organization/organization.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".organization__edit-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.organization__heading {\n  text-align: center;\n}\n.organization__subheading {\n  text-align: center;\n}\n.organization__members {\n  margin-bottom: var(--spacer-3);\n}\n.organization__images {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n}\n.organization__description {\n  width: 100%;\n  margin-bottom: var(--spacer-5);\n}\n\n.subheading__icon {\n  margin-left: var(--spacer-1);\n  margin-right: var(--spacer-1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);