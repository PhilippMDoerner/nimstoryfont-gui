(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[5601],{"./src/app/_services/formly/formly-service.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>FormlyService});var tslib__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/design/organisms/formly-select-disable/formly-select-disable-field.component.ts"),src_utils_array__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/utils/array.ts"),src_utils_string__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/string.ts");let FormlyService=class FormlyService{buildOverviewSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildDisableSelectConfig(config){const options$=config.required??!0?config.options$:this.addEmptyOption(config.options$,config),sortedOptions$=this.sortOptions(options$,config),validators=this.getValidators(config);return{key:config.key,type:"select-disable",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),labelProp:config.labelProp,valueProp:config.valueProp??"pk",options:sortedOptions$,required:config.required??!0,warningMessage:config.warningMessage,additionalProperties:{disabledExpression:config.disabledExpression,tooltipMessage:config.tooltipMessage??"",showWrapperLabel:config.showWrapperLabel??!0}},validators:{validation:validators}}}buildStaticSelectConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"select",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),options:config.options,required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildStaticStringSelectConfig(partialConfig){let options=partialConfig.options.map((str=>({label:str,value:str})));const config={...partialConfig,options};return this.buildStaticSelectConfig(config)}buildInputConfig(config){const validators=this.getValidators(config);switch(config.inputKind){case"NUMBER":validators.push("notInteger");break;case"NAME":validators.push("hasSpecialCharacters");break;case"NUMBER_FRACTION":validators.push("notNumber")}let innerInputType;switch(config.inputKind){case"NUMBER":innerInputType="number";break;case"COLOR":innerInputType="color";break;default:innerInputType="string"}return{key:config.key,type:"input",className:config.className,wrappers:config.wrappers,hideExpression:config.hide??!1,parsers:config.parsers,props:{maxLength:config.maxLength,max:config.max,minLength:config.minLength,min:config.min,label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),type:innerInputType,required:config.required??!0,disabled:!!config.disabled,placeholder:config.placeholder??void 0},validators:{validation:validators}}}buildSinglePasswordConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"input",className:config.className,fieldGroupClassName:config.fieldGroupClassName,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Your password",disabled:config.disabled},validators:{validation:validators}}}buildConfirmedPasswordConfig(config){const validators=config.validators??[];validators.push("required");return{validators:{validation:[{name:"fieldMatch",options:{errorPath:"passwordConfirm"}}]},fieldGroup:[{key:"password",type:"input",className:config.className,templateOptions:{label:config.label??"Password",type:"password",required:!0,placeholder:"Password, at least 7 characters",disabled:config.disabled},validators:{validation:validators}},{key:"passwordConfirm",type:"input",className:config.className,templateOptions:{label:config.label?"Confirm "+config.label:"Password Confirmation",type:"password",required:!0,placeholder:"Please re-enter your password",disabled:config.disabled}}]}}buildCheckboxConfig(config){return{key:config.key,type:"checkbox",className:config.className,wrappers:config.wrappers,defaultValue:config.defaultValue,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled}}}buildDatepickerConfig(config){const validators=this.getValidators(config);return validators.push("date"),{key:config.key,type:"datepicker",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildFileFieldConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"file",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{buttonType:config.fileButtonType??"SECONDARY",fileFieldKind:config.fileFieldKind??"IMAGE",label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:!!config.disabled},validators:{validation:validators}}}buildEditorConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"text-editor",className:config.className,wrappers:config.wrappers,hideExpression:config.hide,props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled},validators:{validation:validators}}}buildAutocompleteConfig(config){const validators=this.getValidators(config);return{key:config.key,type:"autocomplete",className:config.className,wrappers:[...config.wrappers??[],"form-field"],props:{label:config.label??(0,src_utils_string__WEBPACK_IMPORTED_MODULE_1__.ZH)(`${config.key}`),required:config.required??!0,disabled:config.disabled,additionalProperties:{optionLabelProp:config.optionLabelProp,optionValueProp:config.optionValueProp,optionKeyProp:config.optionKeyProp,loadOptions:config.loadOptions,initialValue$:config.initialValue$}},validators:{validation:validators}}}toUpdateForm(fields){return fields.filter((field=>!("file"===field.type)))}getValidators(config){const validators=config.validators??[];return config.required&&validators.push("required"),validators}addEmptyOption(list,config){return Array.isArray(list)?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)([this.createEmptyOption(config),...list]):list.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((values=>[this.createEmptyOption(config),...values])))}createEmptyOption(config){const emptyOption={};emptyOption[config.labelProp]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_LABEL;return emptyOption[config.valueProp??config.key]=src_design_organisms_formly_select_disable_formly_select_disable_field_component__WEBPACK_IMPORTED_MODULE_0__.D.EMPTY_OPTION_VALUE,emptyOption}sortOptions(list$,config){const{sortProp,sortDirection}=config;return sortProp?list$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.T)((list=>(0,src_utils_array__WEBPACK_IMPORTED_MODULE_4__.Z)(list,sortProp,sortDirection??"asc")))):list$}};FormlyService=(0,tslib__WEBPACK_IMPORTED_MODULE_5__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({providedIn:"root"})],FormlyService)},"./src/design/atoms/card/card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>CardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var card_componentngResource=__webpack_require__("./src/design/atoms/card/card.component.scss?ngResource"),card_componentngResource_default=__webpack_require__.n(card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let CardComponent=class CardComponent{};CardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-card",template:'<div class="card">\n  <ng-content></ng-content>\n</div>',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[],styles:[card_componentngResource_default()]})],CardComponent)},"./src/design/organisms/quote-field/quote-field.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>QuoteFieldComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var quote_field_componentngResource=__webpack_require__("./src/design/organisms/quote-field/quote-field.component.scss?ngResource"),quote_field_componentngResource_default=__webpack_require__.n(quote_field_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),http=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),environment=__webpack_require__("./src/environments/environment.ts");let ArticleService=class ArticleService{constructor(routingService,http){this.routingService=routingService,this.http=http,this.apiUrl=environment.c.apiUrl,this.recentlyUpdatedUrl=`${this.apiUrl}/recentupdates`,this.searchUrl=`${this.apiUrl}/search`}getRecentlyUpdatedArticle(campaign,pageNumber){return null==pageNumber&&(pageNumber=0),this.http.get(`${this.recentlyUpdatedUrl}/${campaign}/${pageNumber}`).pipe((0,map.T)((entries=>entries.map((entry=>this.parseOverviewEntity(entry))))))}getGlobalSearchArticle(searchString){return this.http.get(`${this.searchUrl}/${searchString}`).pipe((0,map.T)((searchResponse=>{const searchArticleObjects=searchResponse.articles.map((item=>this.parseOverviewEntity(item)));return searchResponse.articles=searchArticleObjects,searchResponse})))}getCampaignSearchArticle(campaign,searchString){return this.http.get(`${this.searchUrl}/${campaign}/${searchString}`).pipe((0,map.T)((searchResponse=>{const searchArticleObjects=searchResponse.articles.map((item=>this.parseOverviewEntity(item)));return searchResponse.articles=searchArticleObjects,searchResponse})))}searchArticlesKind(campaign,searchTerm,articleKind){return this.http.get(`${this.searchUrl}/${campaign}/${articleKind}/${searchTerm}`).pipe((0,map.T)((response=>response.map((item=>this.parseOverviewEntity(item))))))}readArticle(articleId,articleKind){return this.http.get(`${this.searchUrl}/single/${articleKind}/${articleId}`).pipe((0,map.T)((resp=>this.parseOverviewEntity(resp))))}parseOverviewEntity(data){return{...data,getAbsoluteRouterUrl:this.generateUrlCallback(data)}}generateUrlCallback(data){const articleType=data.article_type,params={campaign:data.campaign_details.name};let routeName="";switch(articleType){case"character":params.name=data.name,routeName="character";break;case"creature":params.name=data.name,routeName="creature";break;case"diaryentry":params.session_number=data.session_details.session_number,params.isMainSession=data.session_details.is_main_session_int,params.authorName=data.author_details.name,routeName="diaryentry";break;case"encounter":params.session_number=data.diaryentry_details.session_number,params.isMainSession=data.diaryentry_details.is_main_session,params.authorName=data.diaryentry_details.author_name,params.encounterTitle=data.title,routeName="diaryentry-encounter";break;case"item":params.name=data.name,routeName="item";break;case"location":params.name=data.name,params.parent_name=data.parent_location_details.name,routeName="location";break;case"organization":params.name=data.name,routeName="organization";break;case"quest":params.name=data.name,routeName="quest";break;case"sessionaudio":params.isMainSession=data.session_details.is_main_session_int,params.sessionNumber=data.session_details.session_number,routeName="sessionaudio";break;case"session":routeName="sessions";break;case"map":case"mapmarker":params.name=data.name,routeName="map";break;case"timestamp":routeName="default-map";break;case"spell":params.name=data.name,routeName="spell";break;case"rules":params.name=data.name,routeName="rule"}return()=>this.routingService.getRoutePath(routeName,params)}static{this.ctorParameters=()=>[{type:routing_service.O},{type:http.Qq}]}};ArticleService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],ArticleService);var button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),card_component=__webpack_require__("./src/design/atoms/card/card.component.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),molecules=__webpack_require__("./src/design/molecules/index.ts"),quote_component=__webpack_require__("./src/design/organisms/quote/quote.component.ts");let QuoteFieldComponent=class QuoteFieldComponent{constructor(routingService,formlyService,articleService){this.routingService=routingService,this.formlyService=formlyService,this.articleService=articleService,this.quote=core.input.required(),this.character=core.input.required(),this.campaignCharacters=core.input.required(),this.serverModel=core.input.required(),this.canCreate=(0,core.input)(!1),this.canUpdate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.encounters=core.input.required(),this.sessions=core.input.required(),this.quoteControlsBlacklist=(0,core.input)([]),this.quoteDelete=new core.EventEmitter,this.quoteCreate=new core.EventEmitter,this.quoteUpdate=new core.EventEmitter,this.connectionDelete=new core.EventEmitter,this.connectionCreate=new core.EventEmitter,this.refreshQuote=new core.EventEmitter,this.sessions$=(0,rxjs_interop.br)(this.sessions).pipe((0,take.s)(1)),this.encounters$=(0,rxjs_interop.br)(this.encounters).pipe((0,take.s)(1)),this.state=(0,core.signal)("DISPLAY"),this.badgeEntries=(0,core.computed)((()=>this.parseConnection(this.quote()?.connections??[]))),this.campaignName=(0,core.computed)((()=>this.character().campaign_details?.name)),this.isLoadingQuote=(0,core.signal)(!1),this.quoteOverviewUrl=(0,core.computed)((()=>this.routingService.getRoutePath("quote-overview",{name:this.character().name,campaign:this.campaignName}))),this.userModel=(0,core.signal)({}),this.formlyFields=(0,core.computed)((()=>[this.formlyService.buildInputConfig({key:"description",required:!0,inputKind:"STRING"}),this.formlyService.buildOverviewSelectConfig({key:"session",required:!0,campaign:this.campaignName(),options$:this.sessions$,labelProp:"name_full",valueProp:"pk"}),this.formlyService.buildAutocompleteConfig({key:"encounter",required:!1,loadOptions:searchTerm=>this.articleService.searchArticlesKind(this.campaignName(),searchTerm,"encounter"),optionKeyProp:"pk",optionLabelProp:"name",optionValueProp:"pk",initialValue$:this.quote()?.encounter?this.articleService.readArticle(this.quote()?.encounter,"encounter"):void 0}),this.formlyService.buildEditorConfig({key:"quote",required:!0})])),(0,rxjs_interop.br)(this.quote).pipe((0,rxjs_interop.pQ)()).subscribe((()=>this.isLoadingQuote.set(!1)))}onSubmit(event){switch(this.state()){case"UPDATE":case"UPDATE_OUTDATED":this.quoteUpdate.emit(event);break;case"CREATE":this.quoteCreate.emit(event);break;default:throw new Error(`QuoteField - Submitted form while in state '${this.state()}', which is not possible.`)}this.changeState("DISPLAY",{})}onDelete(){this.quoteDelete.emit(this.quote()),this.changeState("DISPLAY",{})}onCancel(){this.changeState("DISPLAY",{})}onConnectionDelete(connection){this.canDelete()&&this.connectionDelete.emit(connection)}onConnectionCreate(character){if(!this.canCreate()||!this.quote)return;const newConnection={quote:this.quote()?.pk,character:character.pk};this.connectionCreate.emit(newConnection)}getNextRandomQuote(){this.isLoadingQuote.set(!0),this.refreshQuote.emit()}changeState(newState,newModel){this.state.set(newState),this.userModel.set({...newModel})}parseConnection(connections){return connections.map((con=>{const characterName=con.character_details?.name;return{text:characterName,badgeValue:con,link:this.routingService.getRoutePath("character",{name:characterName,campaign:this.campaignName})}}))}static{this.ctorParameters=()=>[{type:routing_service.O},{type:formly_service_service.$},{type:ArticleService}]}static{this.propDecorators={quote:[{type:core.Input,args:[{isSignal:!0,alias:"quote",required:!0,transform:void 0}]}],character:[{type:core.Input,args:[{isSignal:!0,alias:"character",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],encounters:[{type:core.Input,args:[{isSignal:!0,alias:"encounters",required:!0,transform:void 0}]}],sessions:[{type:core.Input,args:[{isSignal:!0,alias:"sessions",required:!0,transform:void 0}]}],quoteControlsBlacklist:[{type:core.Input,args:[{isSignal:!0,alias:"quoteControlsBlacklist",required:!1,transform:void 0}]}],quoteDelete:[{type:core.Output}],quoteCreate:[{type:core.Output}],quoteUpdate:[{type:core.Output}],connectionDelete:[{type:core.Output}],connectionCreate:[{type:core.Output}],refreshQuote:[{type:core.Output}]}}};QuoteFieldComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-quote-field",template:'@switch (state()) {\n  @case ("DISPLAY") {\n    <ng-container [ngTemplateOutlet]="display" />\n  }\n  @case ("UPDATE") {\n    <ng-container [ngTemplateOutlet]="update" />\n  }\n  @case ("CREATE") {\n    <ng-container [ngTemplateOutlet]="create" />\n  }\n  @case ("DELETE") {\n    <ng-container [ngTemplateOutlet]="delete" />\n  }\n}\n\n<ng-template #display>\n  <app-quote\n    [quote]="quote()"\n    [character]="character()"\n    [campaignCharacters]="campaignCharacters()"\n    [canCreate]="canCreate()"\n    [canUpdate]="canUpdate()"\n    [canDelete]="canDelete()"\n    [quoteControlsBlacklist]="quoteControlsBlacklist()"\n    (quoteCreate)="changeState(\'CREATE\', undefined)"\n    (quoteDelete)="changeState(\'DELETE\', quote())"\n    (quoteUpdate)="changeState(\'UPDATE\', quote())"\n    (connectionCreate)="connectionCreate.emit($event)"\n    (connectionDelete)="connectionDelete.emit($event)"\n    (refreshQuote)="refreshQuote.emit()"\n  ></app-quote>\n</ng-template>\n\n\x3c!-- Quote Create/Edit Form --\x3e\n<ng-template #update>\n  <app-card class="form-card">\n    \x3c!-- Heading --\x3e\n    <h3 class="form-card__heading">Updating Quote {{ quote()?.pk }}</h3>\n\n    @if (canUpdate() && state() === "UPDATE") {\n      <app-form\n        class="form-card__form"\n        [model]="userModel()"\n        [fields]="formlyFields()"\n        [cancelButtonType]="\'DARK\'"\n        (formlySubmit)="onSubmit($event)"\n        (formlyCancel)="onCancel()"\n      ></app-form>\n    }\n\n    @if (state() === "UPDATE_OUTDATED") {\n      <app-compare-form\n        [fields]="formlyFields()"\n        [modelFromUser]="userModel()"\n        [modelFromServer]="serverModel()"\n        [displayVertically]="true"\n        (formlySubmit)="onSubmit($event)"\n        (cancel)="changeState(\'DISPLAY\', undefined)"\n      ></app-compare-form>\n    }\n  </app-card>\n</ng-template>\n\n\x3c!-- Quote Create/Edit Form --\x3e\n<ng-template #create>\n  <app-card class="form-card">\n    \x3c!-- Heading --\x3e\n    <h5 class="form-card__heading">\n      Create Quote for <b>{{ character().name }}</b>\n    </h5>\n\n    \x3c!-- Form --\x3e\n    <app-form\n      class="form-card__form"\n      [model]="userModel()"\n      [fields]="formlyFields()"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onSubmit($event)"\n      (formlyCancel)="onCancel()"\n    ></app-form>\n  </app-card>\n</ng-template>\n\n\x3c!-- Quote Delete "Form" --\x3e\n<ng-template #delete>\n  <app-card class="form-card">\n    <h5 class="form-card__heading">Delete this quote?</h5>\n\n    <blockquote class="form-card__quote quote">\n      <app-html-text\n        class="quote__content"\n        [text]="quote()?.quote ?? \'\'"\n      ></app-html-text>\n\n      <div class="quote__description">\n        @if (quote()?.description) {\n          <app-html-text [text]="\'- \' + quote()?.description"></app-html-text>\n        }\n\n        @if (!quote()?.description) {\n          - {{ character().name }}\n        }\n      </div>\n    </blockquote>\n\n    <div class="form-card__confirmation confirmation">\n      <button\n        btn\n        class="confirmation__button"\n        [kind]="\'DARK\'"\n        [icon]="\'times\'"\n        [text]="\'No\'"\n        (click)="onCancel()"\n      ></button>\n      <button\n        btn\n        class="confirmation__button"\n        [kind]="\'DANGER\'"\n        [icon]="\'trash\'"\n        [text]="\'Yes\'"\n        (click)="onDelete()"\n      ></button>\n    </div>\n  </app-card>\n</ng-template>\n',standalone:!0,imports:[common.NgTemplateOutlet,quote_component.w,card_component.i,molecules.s2,molecules.zx,html_text_component.m,button_component.Q],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[quote_field_componentngResource_default()]})],QuoteFieldComponent)},"./src/utils/array.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U1:()=>replaceItem,Z:()=>sortByProp});const replaceItem=(list,item,key)=>{const newList=[...list],itemIndex=newList.findIndex((listItem=>listItem[key]===item[key]));if(-1===itemIndex)throw"Failed to find item in list";return newList[itemIndex]=item,newList},sortByProp=(list,prop,sortDirection="asc")=>{const newList=[...list];return newList.sort(((a,b)=>{const sortValue=a[prop]>b[prop]?1:-1;return"desc"===sortDirection?-1*sortValue:sortValue})),newList}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/design/organisms/quote-field/quote-field.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_app_modules_formly_constants__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/_modules/formly_constants.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/QuoteFieldComponent",component:__webpack_require__("./src/design/organisms/quote-field/quote-field.component.ts").k,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_4__.c,src_app_modules_formly_constants__WEBPACK_IMPORTED_MODULE_2__.d_]})],args:{quote:{quote:"In the darkest of times, the light within us shines the brightest.",description:"Said by a wise old wizard to a young hero about to embark on a perilous quest.",pk:1,session:3,creation_datetime:"2023-04-22T12:00:00.000Z",update_datetime:"2023-04-23T12:00:00.000Z",session_details:{pk:3,is_main_session:!0,is_main_session_int:1,session_number:3,session_date:"2023-04-20",start_day:1,end_day:5,name:"The Quest for the Sacred Amulet",title:"The Quest"},encounter:2,connections:[{character:1,character_details:{pk:1,name:"Gandalf",name_full:"Gandalf the Grey"},quote:2,pk:2},{character:2,character_details:{pk:2,name:"Frodo",name_full:"Frodo Baggins"},quote:3,pk:3}]},character:{getAbsoluteRouterUrl:()=>"/dummy/url",player_character:!1,alive:!0,name:"Gandalf",title:"Gandalf the Grey",gender:"Male",race:"Maia",description:"A wise and powerful wizard, Gandalf the Grey is a member of the Fellowship of the Ring and a key figure in the fight against the Dark Lord Sauron.",organizations:[{pk:1,name:"The White Council",organization_id:1,role:"Member"},{pk:2,name:"The Fellowship of the Ring",organization_id:2,role:"Member"}],current_location:3,current_location_details:{pk:3,name_full:"Moria",parent_location:"Middle-earth"},items:[{pk:1,name:"Glamdring"},{pk:2,name:"Staff"}],encounters:[{name:"The Council of Elrond",creation_datetime:"2023-04-22T12:00:00.000Z",update_datetime:"2023-04-23T12:00:00.000Z",title:"Council of Elrond",diaryentry:50,order_index:20,encounterConnections:[{pk:1,encounter:2,character:3},{pk:2,encounter:3,character:4}],description:"At the Council of Elrond, Gandalf reveals the true nature of the One Ring and urges the Fellowship to destroy it in the fires of Mount Doom.",pk:1,campaign_details:{name:"Aldrune",id:1}},{name:"The Battle of Helm's Deep",title:"The Battle of Helm's Deep",diaryentry:20,order_index:30,creation_datetime:"2023-04-23T12:00:00.000Z",update_datetime:"2023-04-24T12:00:00.000Z",encounterConnections:[{pk:324,encounter:223,encounter_details:{name:"Main Session 6 - A new job",name_full:"Main Session 6 - A new job",pk:223},character:43,character_details:{name:"Aliana Sterent",name_full:"Aliana Sterent",pk:43}},{pk:325,encounter:223,encounter_details:{name:"Main Session 6 - A new job",name_full:"Main Session 6 - A new job",pk:223},character:29,character_details:{name:"Ateula",name_full:"Ateula",pk:29}}],description:"Gandalf arrives at Helm's Deep with reinforcements and turns the tide of the battle against Saruman's forces.",pk:2,campaign_details:{name:"Aldrune",id:1}}],images:[],player_class_connections:[{pk:1,player_class:8,character:5,player_class_details:{update_datetime:"2023-04-24T12:00:00.000Z",name:"Paladin",pk:8}}],campaign:1,campaign_details:{id:1,name:"The War of the Ring"}},canCreate:!0,canUpdate:!0,canDelete:!0,campaignCharacters:[{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gandalf",pk:1,name_full:"Gandalf the Grey",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Frodo",pk:2,name_full:"Frodo Baggins",player_character:!0,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gimli",pk:3,name_full:"Gimli son of Glóin",player_character:!1,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Legolas",pk:4,name_full:"Legolas Greenleaf",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Bilbo",pk:5,name_full:"Bilbo Baggins",player_character:!1,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Aragorn",pk:6,name_full:"Aragorn son of Arathorn",player_character:!1,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Saruman",pk:7,name_full:"Saruman the White",player_character:!1,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Sif",pk:18,name_full:"Sif the Swift",description:"Sif is a skilled warrior known for her lightning-fast strikes and agility. She is fiercely loyal to her friends and will stop at nothing to protect them.",update_datetime:"2022-03-15T10:30:00.000Z",player_character:!0,images:[],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Gorin",pk:19,name_full:"Gorin Ironfist",description:"Gorin is a dwarf from the Iron Hills, known for his strength and unwavering determination. He has a fondness for ale and a good brawl.",update_datetime:"2022-02-23T14:15:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg","https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/search/character/123",article_type:"Character",name:"Lirien",pk:20,name_full:"Lirien Windrider",description:"Lirien is an elven archer, renowned for her skill with the bow. She is fiercely independent and often clashes with authority figures.",update_datetime:"2022-03-20T08:45:00.000Z",player_character:!0,images:["https://example.com/images/lirien1.jpg"],campaign_details:{name:"Aldrune",id:1}}]}},Template=args=>({props:{...args,quoteDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("quoteDelete"),quoteCreate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("quoteCreate"),quoteUpdate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("quoteUpdate"),refreshQuote:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("refreshQuote"),connectionDelete:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("connectionDelete"),connectionCreate:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("connectionCreate")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canCreate:!1,canUpdate:!1,canDelete:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    quoteDelete: action('quoteDelete'),\n    quoteCreate: action('quoteCreate'),\n    quoteUpdate: action('quoteUpdate'),\n    refreshQuote: action('refreshQuote'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    quoteDelete: action('quoteDelete'),\n    quoteCreate: action('quoteCreate'),\n    quoteUpdate: action('quoteUpdate'),\n    refreshQuote: action('refreshQuote'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate')\n  }\n})",...NoPermission.parameters?.docs?.source}}}},"./src/design/atoms/card/card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".accordion {\n  --bs-accordion-active-bg: var(--bs-gray-900) !important;\n}\n\nbutton.btn.btn-link:hover {\n  text-decoration: none !important;\n}\n\nbutton.btn.btn-link:focus {\n  text-decoration: none !important;\n  box-shadow: none !important;\n}\n\n.card button.btn.btn-link {\n  width: 100%;\n  text-align: left;\n}\n\n.form-control {\n  height: 2.75rem;\n  font-size: 1.2rem;\n}\n\ninput.form-control {\n  background-color: transparent !important;\n  color: white !important;\n  border: solid white 1px !important;\n}\n\ninput.form-control:focus {\n  box-shadow: 3px blue;\n  color: white;\n}\n\nselect.form-select {\n  color: white !important;\n  background-color: #4c4c4c !important;\n}\n\nselect:focus {\n  background-color: #4c4c4c;\n  box-shadow: 3px blue;\n  color: white;\n}\n\noption {\n  background-color: #1b1f22;\n  color: white;\n  font-size: 18px;\n}\n\n.custom-control.custom-checkbox {\n  transform: scale(1.2);\n  transform-origin: 0;\n}\n\n.visually-hidden {\n  display: none;\n}\n\n.vh-50 {\n  height: 50vh;\n}\n\n.tooltip-inner {\n  --bs-tooltip-bg: var(--bs-info-bg-subtle);\n  --bs-tooltip-color: var(--bs-emphasis-color);\n}\n\n:host {\n  --card-bg-color: #393e41 !important;\n  --card-flex-direction: column;\n  --card-padding: var(--spacer-4);\n}\n\n.card {\n  background-color: var(--card-bg-color);\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n  padding: var(--card-padding);\n  flex-direction: var(--card-flex-direction);\n  width: 100%;\n  height: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/quote-field/quote-field.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".form-card {\n  padding: var(--spacer-4);\n  margin: var(--spacer-2);\n}\n.form-card__heading {\n  text-align: center;\n}\n.form-card__form {\n  margin-top: var(--spacer-3);\n  display: block;\n}\n.form-card__quote {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n}\n\n.confirmation__button {\n  margin-left: var(--spacer-2);\n  margin-right: var(--spacer-2);\n}\n\n.quote__description {\n  margin: var(--spacer-3) var(--spacer-0) var(--spacer-3) var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);