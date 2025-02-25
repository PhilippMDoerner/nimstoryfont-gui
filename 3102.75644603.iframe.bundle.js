(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3102],{"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),formly_select_disable_field_component=__webpack_require__("./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.ts");var string=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,string.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,string.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,string.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,string.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,string.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,string.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,string.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,string.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildTypeaheadConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"typeahead",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,string.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,placeholder:"Type to receive suggestions",additionalProperties:{getOptions:config.getOptions,optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,initialOption$:config.initialOption$,formatSearchTerm:config.formatSearchTerm}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,of.of)([this.createEmptyOption(config),...list]):list.pipe((0,map.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=formly_select_disable_field_component.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=formly_select_disable_field_component.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,map.T)((list=>((list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList})(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],FormlyService)},"./src/app/design/organisms/image-carousel-card/image-carousel-card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ImageCarouselCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_carousel_card_componentngResource=__webpack_require__("./src/app/design/organisms/image-carousel-card/image-carousel-card.component.scss?ngResource"),image_carousel_card_componentngResource_default=__webpack_require__.n(image_carousel_card_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts"),image_carousel_component=__webpack_require__("./src/app/design/organisms/image-carousel/image-carousel.component.ts");let ImageCarouselCardComponent=class ImageCarouselCardComponent{constructor(formlyService){this.formlyService=formlyService,this.images=core.input.required(),this.serverUrl=core.input.required(),this.serverModel=core.input.required(),this.canUpdate=core.input.required(),this.canCreate=core.input.required(),this.canDelete=core.input.required(),this.createImage=new core.EventEmitter,this.deleteImage=new core.EventEmitter,this.updateImage=new core.EventEmitter,this.currentImageIndex=(0,core.signal)(0),this.currentImage=(0,core.computed)((()=>this.images()[this.currentImageIndex()])),this.state=(0,core.signal)("DISPLAY"),this.userModel=(0,core.signal)({}),this.isLoading=(0,core.signal)(!1),this.createFields=[this.formlyService.buildInputConfig({key:"name",label:"Image Title",required:!1,inputKind:"STRING"}),this.formlyService.buildInputConfig({key:"character_article",label:"Character Article",hide:!0,inputKind:"NUMBER",required:!1}),this.formlyService.buildInputConfig({key:"location_article",label:"Location Article",hide:!0,inputKind:"NUMBER",required:!1}),this.formlyService.buildInputConfig({key:"creature_article",label:"Creature Article",hide:!0,inputKind:"NUMBER",required:!1}),this.formlyService.buildInputConfig({key:"organization_article",label:"Organization Article",hide:!0,inputKind:"NUMBER",required:!1}),this.formlyService.buildInputConfig({key:"encounter_article",label:"Encounter Article",hide:!0,inputKind:"NUMBER",required:!1}),this.formlyService.buildInputConfig({key:"item_article",label:"Item Article",hide:!0,inputKind:"NUMBER",required:!1,placeholder:void 0}),this.formlyService.buildFileFieldConfig({label:"Image file",key:"image",fileButtonType:"DARK"})],this.updateFields=this.formlyService.toUpdateForm(this.createFields)}changeState(event,newState){this.userModel.set(event?{...event}:null),this.state.set(newState)}onSlide(slideEvent){this.currentImageIndex.set(slideEvent.index)}onCancel(){this.changeState(null,"DISPLAY")}onSubmit(event){switch(this.state()){case"DELETE":this.deleteImage.emit(this.currentImage());break;case"UPDATE":case"UPDATE_OUTDATED":this.updateImage.emit(this.userModel());break;case"CREATE":this.createImage.emit(this.userModel());break;default:throw`ImageCarouselCard - Submitted form while in state '${this.state}', which is not possible.`}this.userModel.set({}),this.changeState(null,"DISPLAY")}static{this.ctorParameters=()=>[{type:formly_service_service.$}]}static{this.propDecorators={images:[{type:core.Input,args:[{isSignal:!0,alias:"images",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],createImage:[{type:core.Output}],deleteImage:[{type:core.Output}],updateImage:[{type:core.Output}]}}};ImageCarouselCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-carousel-card",template:'@switch (state()) {\n  @case ("DISPLAY") {\n    <ng-container *ngTemplateOutlet="displayState" />\n  }\n  @case ("UPDATE") {\n    <ng-container *ngTemplateOutlet="updateState" />\n  }\n  @case ("CREATE") {\n    <ng-container *ngTemplateOutlet="createState" />\n  }\n  @case ("DELETE") {\n    <ng-container *ngTemplateOutlet="deleteState" />\n  }\n}\n\n<ng-template #displayState>\n  <app-image-carousel\n    [images]="images()"\n    [serverUrl]="serverUrl()"\n    [canDelete]="canDelete()"\n    [canUpdate]="canUpdate()"\n    [canCreate]="canCreate()"\n    [currentSlideIndex]="currentImageIndex()"\n    (deleteImage)="changeState(currentImage(), \'DELETE\')"\n    (updateImage)="changeState(currentImage(), \'UPDATE\')"\n    (createImage)="changeState({}, \'CREATE\')"\n    (slide)="onSlide($event)"\n  ></app-image-carousel>\n</ng-template>\n\n<ng-template #updateState>\n  <div class="card form-card">\n    <h5 class="form-card__heading">\n      <app-icon [icon]="\'pencil\'"></app-icon>\n      Updating:\n      @if (isLoading()) {\n        <app-spinner />\n      }\n    </h5>\n\n    <div class="form-card__image-container">\n      <img\n        title="None"\n        class="form-card__image"\n        [src]="serverUrl() + currentImage().image"\n        alt=""\n      />\n    </div>\n\n    <app-form\n      class="form-card__form"\n      [model]="userModel()"\n      [fields]="updateFields"\n      [enctype]="\'multipart/form-data\'"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onSubmit($event)"\n      (formlyCancel)="onCancel()"\n    ></app-form>\n  </div>\n</ng-template>\n\n<ng-template #createState>\n  <div class="card form-card">\n    <h5 class="form-card__heading">\n      <app-icon [icon]="\'plus-square\'" />\n      Upload new image\n      @if (isLoading()) {\n        <app-spinner />\n      }\n    </h5>\n\n    <app-form\n      class="form-card__form"\n      [model]="userModel()"\n      [fields]="createFields"\n      [enctype]="\'multipart/form-data\'"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onSubmit($event)"\n      (formlyCancel)="onCancel()"\n    ></app-form>\n  </div>\n</ng-template>\n\n<ng-template #deleteState>\n  <div class="card form-card">\n    <h5 class="form-card__heading">\n      <app-icon [icon]="\'trash\'" />\n      Deleting:\n      @if (isLoading()) {\n        <app-spinner />\n      }\n    </h5>\n\n    <div class="form-card__image-container">\n      <img\n        title="None"\n        class="form-card__image"\n        [src]="serverUrl() + currentImage().image"\n        alt="image to delete"\n      />\n    </div>\n\n    <div class="form-card__confirmation confirmation">\n      <span class="confirmation__question">\n        Do you really want to delete this image?\n      </span>\n      <div class="confirmation__button-container">\n        <button\n          btn\n          class="confirmation__button"\n          [kind]="\'DARK\'"\n          [icon]="\'times\'"\n          [text]="\'No\'"\n          (click)="onCancel()"\n        ></button>\n        <button\n          btn\n          class="confirmation__button"\n          [kind]="\'DANGER\'"\n          [icon]="\'trash\'"\n          [text]="\'Yes\'"\n          (click)="onSubmit(undefined)"\n        ></button>\n      </div>\n    </div>\n  </div>\n</ng-template>\n',imports:[image_carousel_component.H,spinner_component.t,icon_component.R,molecules.s2,button_component.Q,common.NgTemplateOutlet],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[image_carousel_card_componentngResource_default()]})],ImageCarouselCardComponent)},"./src/app/design/organisms/image-carousel/image-carousel.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>ImageCarouselComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_carousel_componentngResource=__webpack_require__("./src/app/design/organisms/image-carousel/image-carousel.component.scss?ngResource"),image_carousel_componentngResource_default=__webpack_require__.n(image_carousel_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let ImageCarouselComponent=class ImageCarouselComponent{constructor(){this.images=core.input.required(),this.serverUrl=core.input.required(),this.canDelete=(0,core.input)(!1),this.canCreate=(0,core.input)(!1),this.canUpdate=(0,core.input)(!1),this.currentSlideIndex=core.input.required(),this.deleteImage=new core.EventEmitter,this.createImage=new core.EventEmitter,this.updateImage=new core.EventEmitter,this.slide=new core.EventEmitter,this.slideEnd=new core.EventEmitter}onSlide(event){const slideIndexStr=event.current.split("-").pop();if(null==slideIndexStr)throw`ImageCarousel - Image with id '${event.current}' does not match the expected pattern of 'imageIndex-<number>'!`;const nextSlideIndex=parseInt(slideIndexStr);this.slide.emit({event,index:nextSlideIndex})}onSlideEnd(event){this.slide.emit({event,index:this.currentSlideIndex()})}onImageCreate(){this.canCreate()&&this.createImage.emit()}onImageUpdate(){if(!this.canUpdate())return;const image=this.images()[this.currentSlideIndex()];this.updateImage.emit(image)}onImageDelete(){if(!this.canDelete())return;const image=this.images()[this.currentSlideIndex()];this.deleteImage.emit(image)}static{this.propDecorators={images:[{type:core.Input,args:[{isSignal:!0,alias:"images",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],currentSlideIndex:[{type:core.Input,args:[{isSignal:!0,alias:"currentSlideIndex",required:!0,transform:void 0}]}],deleteImage:[{type:core.Output}],createImage:[{type:core.Output}],updateImage:[{type:core.Output}],slide:[{type:core.Output}],slideEnd:[{type:core.Output}]}}};ImageCarouselComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-carousel",template:'@if (images() && images().length > 0) {\n  <ngb-carousel\n    #imageCarousel\n    [interval]="0"\n    [showNavigationArrows]="images().length > 1"\n    [showNavigationIndicators]="images().length > 1"\n    [activeId]="\'imageIndex-\' + currentSlideIndex()"\n    (slide)="onSlide($event)"\n    (slid)="onSlideEnd($event)"\n  >\n    @for (image of images(); track image.pk) {\n      <ng-template ngbSlide [id]="\'imageIndex-\' + $index">\n        <div class="image-container" [title]="image.name">\n          <img [src]="serverUrl() + image.image" [alt]="\'Image \' + $index" />\n        </div>\n      </ng-template>\n    }\n  </ngb-carousel>\n} @else {\n  <ng-container *ngTemplateOutlet="defaultImage"></ng-container>\n}\n\n\x3c!-- Image Edit/Delete/Create Buttons --\x3e\n<div class="edit-image-buttons">\n  \x3c!-- Create Image Button --\x3e\n  @if (canCreate()) {\n    <button\n      btn\n      title="Create Image"\n      class="mx-2"\n      aria-label="\'Create Image\'"\n      [kind]="\'PRIMARY\'"\n      [size]="\'SMALL\'"\n      [icon]="\'plus-square\'"\n      (click)="onImageCreate()"\n    ></button>\n  }\n\n  \x3c!-- Update Image button --\x3e\n  @if (images().length > 0 && canUpdate()) {\n    <button\n      btn\n      aria-label="\'Update Image\'"\n      title="Update Image"\n      class="mx-2"\n      [kind]="\'SECONDARY\'"\n      [size]="\'SMALL\'"\n      [icon]="\'pencil\'"\n      (click)="onImageUpdate()"\n    ></button>\n  }\n\n  \x3c!-- Delete Image Button --\x3e\n  @if (images().length > 1 && canDelete()) {\n    <button\n      btn\n      aria-label="\'Delete Image\'"\n      title="Delete Image"\n      class="mx-2"\n      [kind]="\'DANGER\'"\n      [size]="\'SMALL\'"\n      [icon]="\'trash\'"\n      (click)="onImageDelete()"\n    ></button>\n  }\n</div>\n\n<ng-template #defaultImage>\n  <ngb-carousel\n    [showNavigationArrows]="false"\n    [showNavigationIndicators]="false"\n  >\n    <ng-template ngbSlide>\n      <div class="image-container default-image">\n        <img\n          [src]="\'assets/default_images/icon_default.webp\'"\n          alt="Default Image to show as backup when there is nothing"\n        />\n        <div class="image-caption">\n          <p>This article doesn\'t have an image yet</p>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[ng_bootstrap.wA,button_component.Q,common.NgTemplateOutlet],styles:[image_carousel_componentngResource_default()]})],ImageCarouselComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/design/organisms/image-carousel-card/image-carousel-card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".form-card {\n  padding: var(--spacer-4);\n  margin: var(--spacer-2);\n}\n.form-card__heading {\n  text-align: center;\n}\n.form-card__image-container {\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  width: 100%;\n}\n.form-card__image {\n  max-height: 20rem;\n  max-width: 100%;\n  object-fit: contain;\n}\n.form-card__form {\n  margin-top: var(--spacer-3);\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.confirmation {\n  display: flex;\n  flex-direction: column;\n}\n.confirmation__question {\n  text-align: center;\n}\n.confirmation__button-container {\n  margin-top: var(--spacer-2);\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n}\n.confirmation__button {\n  margin-left: var(--spacer-2);\n  margin-right: var(--spacer-2);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/image-carousel/image-carousel.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".image-container img {\n  object-fit: contain;\n  width: 100%;\n  max-height: 10rem;\n}\n@media (min-width: 768px) {\n  .image-container img {\n    max-height: 18rem;\n  }\n}\n\n.image-caption {\n  position: absolute;\n  background: var(--wiki-bg-transparent);\n  width: 50%;\n  text-align: center;\n  bottom: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n.image-caption p {\n  margin: 0;\n}\n\n.edit-image-buttons {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  transition: opacity 0.2s;\n  margin-top: var(--spacer-2);\n}\n\n.defaultImage {\n  position: relative;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);