(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[4851],{"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){const options=partialConfig.options.map((str=>({label:str,value:str}))),config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,props:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,props:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,props:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildTypeaheadConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"typeahead",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,placeholder:"Type to receive suggestions",additionalProperties:{getOptions:config.getOptions,optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,initialOption$:config.initialOption$,formatSearchTerm:config.formatSearchTerm}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_app_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/app/design/atoms/card/card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>CardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var card_componentngResource=__webpack_require__("./src/app/design/atoms/card/card.component.scss?ngResource"),card_componentngResource_default=__webpack_require__.n(card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CardComponent=class CardComponent{};CardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-card",template:'<div class="card">\n  <ng-content></ng-content>\n</div>',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[card_componentngResource_default()]})],CardComponent)},"./src/app/design/molecules/link-entry/link-entry.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>LinkEntryComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var link_entry_componentngResource=__webpack_require__("./src/app/design/molecules/link-entry/link-entry.component.scss?ngResource"),link_entry_componentngResource_default=__webpack_require__.n(link_entry_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let LinkEntryComponent=class LinkEntryComponent{constructor(){this.entry=core.input.required(),this.canDelete=(0,core.input)(!1),this.deleteMessage=(0,core.input)("Delete entry?"),this.delete=(0,core.output)(),this.linkClick=(0,core.output)(),this.state=(0,core.signal)("DISPLAY")}changeState(newState){this.state.set(newState)}static{this.propDecorators={entry:[{type:core.Input,args:[{isSignal:!0,alias:"entry",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],deleteMessage:[{type:core.Input,args:[{isSignal:!0,alias:"deleteMessage",required:!1,transform:void 0}]}],delete:[{type:core.Output,args:["delete"]}],linkClick:[{type:core.Output,args:["linkClick"]}]}}};LinkEntryComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-link-entry",template:'<div class="linkentry" [class.linkentry--delete]="state() === \'DELETE\'">\n  <ng-container\n    *ngTemplateOutlet="state() === \'DISPLAY\' ? displayRow : deleteRow"\n  />\n</div>\n\n<ng-template #displayRow>\n  \x3c!-- Entry Linktext --\x3e\n  <button (click)="linkClick.emit(entry().value)" class="linkentry__link">\n    {{ entry().linkText }}\n  </button>\n\n  \x3c!-- Entry Name --\x3e\n  <div class="linkentry__label">\n    {{ entry().label }}\n  </div>\n\n  \x3c!-- Delete Entry --\x3e\n  <div class="linkentry__delete">\n    @if (canDelete()) {\n      <button\n        btn\n        class="linkentry__delete-button"\n        (clicked)="changeState(\'DELETE\')"\n        [attr.aria-label]="\'Delete \' + entry().label"\n        [size]="\'SMALL\'"\n        [icon]="\'trash\'"\n        [kind]="\'DANGER-OUTLINE\'"\n      ></button>\n    }\n  </div>\n</ng-template>\n\n<ng-template #deleteRow>\n  <div class="linkentry__box box">\n    <span class="ms-2">\n      {{ deleteMessage() }}\n    </span>\n    <button\n      btn\n      class="box__button"\n      [kind]="\'DANGER\'"\n      [size]="\'SMALL\'"\n      [text]="\'Delete\'"\n      (clicked)="delete.emit(entry().value)"\n    ></button>\n    <button\n      btn\n      class="box__button"\n      [kind]="\'DARK\'"\n      [size]="\'SMALL\'"\n      [text]="\'Cancel\'"\n      (clicked)="changeState(\'DISPLAY\')"\n    ></button>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[button_component.Q,common.NgTemplateOutlet],styles:[link_entry_componentngResource_default()]})],LinkEntryComponent)},"./src/app/design/organisms/player/player.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>PlayerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var player_componentngResource=__webpack_require__("./src/app/design/organisms/player/player.component.scss?ngResource"),player_componentngResource_default=__webpack_require__.n(player_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),plyr_min=__webpack_require__("./node_modules/plyr/dist/plyr.min.js"),plyr_min_default=__webpack_require__.n(plyr_min);let PlayerComponent=class PlayerComponent{constructor(){this.SEEK_TIME=5,this.VOLUME_STEP=.05,this.serverUrl=core.input.required(),this.audioSource=core.input.required(),this.downloadSource=core.input.required(),this.playTime=core.input.required(),this.audioPlayer=(0,core.viewChild)("audioPlayer"),(0,core.effect)((()=>{const playerElement=this.audioPlayer()?.nativeElement;playerElement&&(this.plyr=new(plyr_min_default())(playerElement,{controls:["play","progress","current-time","mute","volume","download","settings"],invertTime:!1,seekTime:this.SEEK_TIME,volume:0}))})),(0,core.effect)((()=>{this.plyr.download=this.downloadSource()})),(0,core.effect)((()=>this.setPlayTime(this.playTime())))}triggerHotkeyAction(keyPressEvent){keyPressEvent.stopPropagation();switch(keyPressEvent.code){case"Space":case"Enter":this.play();break;case"KeyM":this.mute();break;case"ArrowRight":this.seekForward();break;case"ArrowLeft":this.seekBackward()}}setPlayTime(time){null!=time&&(this.plyr.currentTime=time)}play(){this.plyr.togglePlay()}seekBackward(){this.plyr.rewind(this.SEEK_TIME)}seekForward(){this.plyr.forward(this.SEEK_TIME)}increaseVolume(){this.plyr.increaseVolume(this.VOLUME_STEP)}decreaseVolume(){this.plyr.decreaseVolume(this.VOLUME_STEP)}mute(){this.plyr.muted=!this.plyr.muted}static{this.ctorParameters=()=>[]}static{this.propDecorators={serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],audioSource:[{type:core.Input,args:[{isSignal:!0,alias:"audioSource",required:!0,transform:void 0}]}],downloadSource:[{type:core.Input,args:[{isSignal:!0,alias:"downloadSource",required:!0,transform:void 0}]}],playTime:[{type:core.Input,args:[{isSignal:!0,alias:"playTime",required:!0,transform:void 0}]}],audioPlayer:[{type:core.ViewChild,args:["audioPlayer",{isSignal:!0}]}]}}};PlayerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-player",template:'<audio\n  #audioPlayer\n  (keydown)="triggerHotkeyAction($event)"\n  (keypress)="$event.stopPropagation()"\n  (keyup)="$event.stopPropagation()"\n  [src]="serverUrl() + \'/\' + audioSource()"\n  [preload]="\'metadata\'"\n  [controls]="false"\n></audio>\n',imports:[],styles:[player_componentngResource_default()]})],PlayerComponent)},"./src/app/design/organisms/sessionaudio-player/sessionaudio-player.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>SessionaudioPlayerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var sessionaudio_player_componentngResource=__webpack_require__("./src/app/design/organisms/sessionaudio-player/sessionaudio-player.component.scss?ngResource"),sessionaudio_player_componentngResource_default=__webpack_require__.n(sessionaudio_player_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),card_component=__webpack_require__("./src/app/design/atoms/card/card.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts"),link_entry_component=__webpack_require__("./src/app/design/molecules/link-entry/link-entry.component.ts"),player_component=__webpack_require__("./src/app/design/organisms/player/player.component.ts");let SessionaudioPlayerComponent=class SessionaudioPlayerComponent{constructor(formlyService){this.formlyService=formlyService,this.sessionAudioPk=core.input.required(),this.timestamps=core.input.required(),this.serverUrl=core.input.required(),this.audioSource=core.input.required(),this.downloadSource=core.input.required(),this.canDelete=core.input.required(),this.canCreate=core.input.required(),this.deleteTimestamp=(0,core.output)(),this.createTimestamp=(0,core.output)(),this.timestampEntries=(0,core.computed)((()=>this.timestamps()?.map((timestamp=>({value:timestamp,label:timestamp.name,linkText:this.timeToString(timestamp.time)}))))),this.timestampState=(0,core.signal)("DISPLAY"),this.currentTime=(0,core.signal)(0),this.timestampForm=new fesm2022_forms.gE({}),this.timestampFields=(0,core.computed)((()=>[this.formlyService.buildInputConfig({key:"time",maxLength:8,minLength:8,placeholder:"hh:mm:ss",className:"timestamp-input black-background px-0 col-lg-2 col-3",validators:["time"],required:!0,inputKind:"STRING"}),this.formlyService.buildInputConfig({key:"name",label:"Title",className:"timestamp-input black-background px-0 col-lg-10 col-9",required:!0,inputKind:"STRING"})])),this.timestampModel=(0,core.signal)({})}changeTimestampState(newState){this.timestampState.set(newState)}onLinkClick(timestamp){this.currentTime.set(timestamp.time),setTimeout((()=>this.currentTime.set(void 0)),1)}onSubmit(timestamp){const newTimestamp={name:timestamp.name,time:this.stringToTime(timestamp.time),session_audio:this.sessionAudioPk()};this.createTimestamp.emit(newTimestamp),this.timestampState.set("DISPLAY"),this.timestampModel.set({})}timeToString(seconds){const hours=Math.floor(seconds/3600),minutes=Math.floor((seconds-3600*hours)/60),remainingSeconds=Math.floor(seconds-3600*hours-60*minutes);return`${hours.toString().padStart(2,"0")}:${minutes.toString().padStart(2,"0")}:${remainingSeconds.toString().padStart(2,"0")}`}stringToTime(timeString){const[hours,minutes,seconds]=timeString.split(":").map(Number);return 3600*hours+60*minutes+seconds}static{this.ctorParameters=()=>[{type:formly_service_service.$}]}static{this.propDecorators={sessionAudioPk:[{type:core.Input,args:[{isSignal:!0,alias:"sessionAudioPk",required:!0,transform:void 0}]}],timestamps:[{type:core.Input,args:[{isSignal:!0,alias:"timestamps",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],audioSource:[{type:core.Input,args:[{isSignal:!0,alias:"audioSource",required:!0,transform:void 0}]}],downloadSource:[{type:core.Input,args:[{isSignal:!0,alias:"downloadSource",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],deleteTimestamp:[{type:core.Output,args:["deleteTimestamp"]}],createTimestamp:[{type:core.Output,args:["createTimestamp"]}]}}};SessionaudioPlayerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-sessionaudio-player",template:'<div class="container timestamp">\n  <div class="timestamp__image">\n    <img\n      class="mw-100"\n      [src]="\'/assets/default_images/audio_pic_default.webp\'"\n      alt="\'\'"\n    />\n  </div>\n  <app-player\n    [serverUrl]="serverUrl()"\n    [audioSource]="audioSource()"\n    [downloadSource]="downloadSource()"\n    [playTime]="currentTime()"\n  ></app-player>\n\n  @if (canCreate()) {\n    @switch (timestampState()) {\n      @case ("DISPLAY") {\n        <ng-container *ngTemplateOutlet="timestampDisplay" />\n      }\n      @case ("CREATE") {\n        <ng-container *ngTemplateOutlet="timestampCreate" />\n      }\n    }\n  }\n\n  <div class="timestamp__list list">\n    @for (entry of timestampEntries(); track entry.value.pk) {\n      <app-link-entry\n        class="list__timestamp"\n        [canDelete]="canDelete()"\n        [entry]="entry"\n        [deleteMessage]="\'Delete timestamp \\\'\' + entry.linkText + \'\\\'?\'"\n        (delete)="deleteTimestamp.emit($event)"\n        (linkClick)="onLinkClick($event)"\n      ></app-link-entry>\n    }\n  </div>\n</div>\n\n<ng-template #timestampDisplay>\n  <div class="timestamp__create-button">\n    <button\n      btn\n      [kind]="\'PRIMARY\'"\n      [text]="\'Add Timestamp\'"\n      [icon]="\'plus\'"\n      (clicked)="changeTimestampState(\'CREATE\')"\n    ></button>\n  </div>\n</ng-template>\n\n<ng-template #timestampCreate>\n  <app-card>\n    <h5 class="timestamp__create-form">Create Timestamp</h5>\n    <app-form\n      [model]="timestampModel()"\n      [fields]="timestampFields()"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onSubmit($event)"\n      (formlyCancel)="changeTimestampState(\'DISPLAY\')"\n    ></app-form>\n  </app-card>\n</ng-template>\n',imports:[player_component.D,link_entry_component.i,button_component.Q,molecules.s2,card_component.i,common.NgTemplateOutlet],styles:[sessionaudio_player_componentngResource_default()]})],SessionaudioPlayerComponent)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>sortByProp});const sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/design/atoms/card/card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".accordion {\n  --bs-accordion-active-bg: var(--bs-gray-900) !important;\n}\n\nbutton.btn.btn-link:hover {\n  text-decoration: none !important;\n}\n\nbutton.btn.btn-link:focus {\n  text-decoration: none !important;\n  box-shadow: none !important;\n}\n\n.card button.btn.btn-link {\n  width: 100%;\n  text-align: left;\n}\n\n.form-control {\n  height: 2.75rem;\n  font-size: 1.2rem;\n}\n\ninput.form-control {\n  background-color: transparent !important;\n  color: white !important;\n  border: solid white 1px !important;\n}\n\ninput.form-control:focus {\n  box-shadow: 3px blue;\n  color: white;\n}\n\nselect.form-select {\n  color: white !important;\n  background-color: #4c4c4c !important;\n}\n\nselect:focus {\n  background-color: #4c4c4c;\n  box-shadow: 3px blue;\n  color: white;\n}\n\noption {\n  background-color: #1b1f22;\n  color: white;\n  font-size: 18px;\n}\n\n.custom-control.custom-checkbox {\n  transform: scale(1.2);\n  transform-origin: 0;\n}\n\n.visually-hidden {\n  display: none;\n}\n\n.vh-50 {\n  height: 50vh;\n}\n\n.tooltip-inner {\n  --bs-tooltip-bg: var(--bs-info-bg-subtle);\n  --bs-tooltip-color: var(--bs-emphasis-color);\n}\n\n:host {\n  --card-bg-color: #393e41 !important;\n  --card-flex-direction: column;\n  --card-padding: var(--spacer-4);\n  border-radius: var(--bs-border-radius);\n}\n\n.card {\n  background-color: var(--card-bg-color);\n  padding: var(--card-padding);\n  flex-direction: var(--card-flex-direction);\n  width: 100%;\n  height: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/link-entry/link-entry.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".linkentry {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: var(--spacer-4);\n}\n.linkentry--delete {\n  justify-content: center;\n}\n.linkentry__link {\n  text-align: end;\n  cursor: pointer;\n}\n.linkentry__label {\n  flex: 1;\n  text-align: start;\n  text-overflow: ellipsis;\n}\n.linkentry__box {\n  background-color: var(--bs-secondary);\n  padding: var(--spacer-2);\n}\n.linkentry__delete {\n  display: flex;\n  justify-content: flex-end;\n}\n.linkentry__delete-button {\n  width: fit-content;\n  display: inline-block;\n}\n\n.box {\n  display: flex;\n  flex-direction: row;\n  width: fit-content;\n  border-radius: var(--bs-border-radius);\n  border-color: var(--bs-danger);\n  border-style: solid;\n  border-width: 1px;\n}\n.box__message {\n  font-weight: bold;\n}\n.box__button {\n  width: fit-content;\n  margin-left: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/player/player.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/sessionaudio-player/sessionaudio-player.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".timestamp__list {\n  margin-top: var(--spacer-3);\n}\n.timestamp__create-button {\n  margin-top: var(--spacer-4);\n  margin-bottom: var(--spacer-4);\n}\n.timestamp__create-form {\n  width: 100%;\n  text-align: center;\n  font-weight: bold;\n}\n\n.list {\n  gap: var(--spacer-1);\n  display: flex;\n  flex-direction: column;\n}\n.list__timestamp {\n  padding-bottom: var(--spacer-1);\n  display: block;\n}\n\n.container {\n  padding-left: var(--spacer-0);\n  padding-right: var(--spacer-0);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);