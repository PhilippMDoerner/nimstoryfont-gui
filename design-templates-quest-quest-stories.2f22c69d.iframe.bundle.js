(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[9951],{"./src/design/atoms/alert/alert.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>AlertComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var alert_componentngResource=__webpack_require__("./src/design/atoms/alert/alert.component.scss?ngResource"),alert_componentngResource_default=__webpack_require__.n(alert_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let AlertComponent=class AlertComponent{constructor(){this.kind=core.input.required()}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}]}}};AlertComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-alert",template:"<div\n  class=\"alert\"\n  [ngClass]=\"{\n    'alert-primary': kind() === 'PRIMARY',\n    'alert-secondary': kind() === 'SECONDARY',\n    'alert-dark': kind() === 'DARK',\n    'alert-danger': kind() === 'DANGER',\n    'alert-warning': kind() === 'WARNING',\n    'alert-info': kind() === 'INFO',\n    'alert-light': kind() === 'LIGHT',\n  }\"\n>\n  <ng-content> </ng-content>\n</div>\n",imports:[common.NgClass],standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[alert_componentngResource_default()]})],AlertComponent)},"./src/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/design/atoms/separator/separator.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>SeparatorComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var separator_componentngResource=__webpack_require__("./src/design/atoms/separator/separator.component.scss?ngResource"),separator_componentngResource_default=__webpack_require__.n(separator_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SeparatorComponent=class SeparatorComponent{};SeparatorComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-separator",template:'<hr class="separator">\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[],styles:[separator_componentngResource_default()]})],SeparatorComponent)},"./src/design/organisms/editable-text/editable-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>EditableTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var editable_text_componentngResource=__webpack_require__("./src/design/organisms/editable-text/editable-text.component.scss?ngResource"),editable_text_componentngResource_default=__webpack_require__.n(editable_text_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),tinymce_tinymce_angular=__webpack_require__("./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs"),alert_component=__webpack_require__("./src/design/atoms/alert/alert.component.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),separator_component=__webpack_require__("./src/design/atoms/separator/separator.component.ts"),formly_editor_field_constants=__webpack_require__("./src/design/organisms/formly-editor-field/formly-editor-field.constants.ts");let EditableTextComponent=class EditableTextComponent{constructor(){this.text=core.input.required(),this.placeholder=core.input.required(),this.canUpdate=core.input.required(),this.serverModel=(0,core.input)(),this.heading=(0,core.input)(),this.update=(0,core.output)(),this.settings=formly_editor_field_constants.O,this.state=(0,core.signal)("DISPLAY"),this.textModel="",this.editButtonText=(0,core.computed)((()=>{switch(this.state()){case"DISPLAY":return"edit";case"UPDATE":case"OUTDATED_UPDATE":return"cancel"}})),this.editorField=(0,core.viewChild)("editor"),(0,core.effect)((()=>{null!=this.serverModel()&&this.state.set("OUTDATED_UPDATE")}),{allowSignalWrites:!0})}toggleEdit(){"UPDATE"===this.state()?this.cancelEdit():this.startEdit()}startEdit(){this.state.set("UPDATE"),this.textModel=this.text(),this.focusField()}finishEdit(){this.update.emit(this.textModel),this.state.set("DISPLAY")}cancelEdit(){this.textModel=this.text(),this.state.set("DISPLAY")}focusField(){setTimeout((()=>this.editorField()._editor.focus()),100)}static{this.ctorParameters=()=>[]}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],placeholder:[{type:core.Input,args:[{isSignal:!0,alias:"placeholder",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!1,transform:void 0}]}],heading:[{type:core.Input,args:[{isSignal:!0,alias:"heading",required:!1,transform:void 0}]}],update:[{type:core.Output,args:["update"]}],editorField:[{type:core.ViewChild,args:["editor",{isSignal:!0}]}]}}};EditableTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-editable-text",standalone:!0,imports:[common.NgTemplateOutlet,html_text_component.m,icon_component.R,tinymce_tinymce_angular.xn,fesm2022_forms.YN,alert_component.C,separator_component.F,button_component.Q],template:'\x3c!-- Heading --\x3e\n@let headingVal = heading();\n@if (headingVal) {\n  <h4 class="heading">\n    <app-html-text [text]="headingVal" />\n    @if (canUpdate()) {\n      <button class="heading__edit-button" (click)="toggleEdit()">\n        <h6 class="heading__edit-text">\n          (\n          {{ editButtonText() }}\n          <app-icon [icon]="\'pen\'"></app-icon>\n          )\n        </h6>\n      </button>\n    }\n  </h4>\n}\n\n\x3c!-- Text Body --\x3e\n@if (canUpdate()) {\n  <button\n    class="field field--display"\n    [class.field--hidden]="state() !== \'DISPLAY\'"\n    (click)="startEdit()"\n  >\n    <ng-container *ngTemplateOutlet="textBody" />\n  </button>\n  <form\n    class="field field--update"\n    [class.field--hidden]="state() !== \'UPDATE\'"\n    (submit)="finishEdit()"\n  >\n    <editor\n      #editor\n      id="editor"\n      [init]="settings"\n      name="textEditField"\n      [(ngModel)]="textModel"\n      class="mb-2"\n    ></editor>\n\n    \x3c!-- Form Buttons --\x3e\n    <ng-container [ngTemplateOutlet]="formButtons" />\n  </form>\n  <div\n    class="field field--update"\n    [class.field--hidden]="state() !== \'OUTDATED_UPDATE\'"\n  >\n    \x3c!-- Informating heading --\x3e\n    <app-alert [kind]="\'INFO\'">\n      <app-icon [icon]="\'info-circle\'"></app-icon>\n      While you were updating this article, somebody else went ahead and updated\n      it as well. Please include their changes in your update before submitting.\n    </app-alert>\n\n    \x3c!-- Textfield-Form --\x3e\n    <div class="flex-column card p-4">\n      \x3c!-- Comparison text --\x3e\n      <div>\n        <h3>Server Version</h3>\n        <app-html-text [text]="serverModel()!" />\n      </div>\n\n      <app-separator />\n\n      \x3c!-- Actual edit form --\x3e\n      <form (submit)="finishEdit()">\n        <h3>Your Version</h3>\n\n        <editor\n          [init]="settings"\n          name="textEditField"\n          [(ngModel)]="textModel"\n          class="mb-2"\n        ></editor>\n\n        \x3c!-- Form Buttons --\x3e\n        <ng-container [ngTemplateOutlet]="formButtons" />\n      </form>\n    </div>\n  </div>\n} @else {\n  <ng-container *ngTemplateOutlet="textBody" />\n}\n\n<ng-template #formButtons>\n  <div class="field__buttons">\n    <button\n      btn\n      [icon]="\'check\'"\n      [text]="\'Submit\'"\n      [kind]="\'PRIMARY\'"\n      [type]="\'submit\'"\n    ></button>\n    <button\n      btn\n      [icon]="\'times\'"\n      [text]="\'Cancel\'"\n      [kind]="\'SECONDARY\'"\n      (click)="cancelEdit()"\n    ></button>\n  </div>\n</ng-template>\n\n<ng-template #textBody>\n  <app-html-text [text]="text() || placeholder()" />\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[editable_text_componentngResource_default()]})],EditableTextComponent)},"./src/design/organisms/formly-editor-field/formly-editor-field.constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>TINYMCE_SETTINGS});const TINYMCE_SETTINGS={plugins:["advlist","autolink","lists","link","image","charmap","anchor","searchreplace","visualblocks","media","table","help","wordcount"],toolbar:["undo redo | formatselect | bold italic underline strikethrough subscript superscript link unlink blockquote | backcolor forecolor hilitecolor fontsizeselect |","alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | table help"],skin:"oxide-dark",content_css:"dark",browser_spellcheck:!0,menubar:!1,height:500,convert_urls:!1,relative_urls:!1,branding:!1,base_url:"/tinymce",suffix:".min"}},"./src/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',standalone:!0,imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>ReplaySubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_Subject__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js"),ReplaySubject=function(_super){function ReplaySubject(_bufferSize,_windowTime,_timestampProvider){void 0===_bufferSize&&(_bufferSize=1/0),void 0===_windowTime&&(_windowTime=1/0),void 0===_timestampProvider&&(_timestampProvider=_scheduler_dateTimestampProvider__WEBPACK_IMPORTED_MODULE_1__.U);var _this=_super.call(this)||this;return _this._bufferSize=_bufferSize,_this._windowTime=_windowTime,_this._timestampProvider=_timestampProvider,_this._buffer=[],_this._infiniteTimeWindow=!0,_this._infiniteTimeWindow=_windowTime===1/0,_this._bufferSize=Math.max(1,_bufferSize),_this._windowTime=Math.max(1,_windowTime),_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.C6)(ReplaySubject,_super),ReplaySubject.prototype.next=function(value){var _a=this,isStopped=_a.isStopped,_buffer=_a._buffer,_infiniteTimeWindow=_a._infiniteTimeWindow,_timestampProvider=_a._timestampProvider,_windowTime=_a._windowTime;isStopped||(_buffer.push(value),!_infiniteTimeWindow&&_buffer.push(_timestampProvider.now()+_windowTime)),this._trimBuffer(),_super.prototype.next.call(this,value)},ReplaySubject.prototype._subscribe=function(subscriber){this._throwIfClosed(),this._trimBuffer();for(var subscription=this._innerSubscribe(subscriber),_infiniteTimeWindow=this._infiniteTimeWindow,copy=this._buffer.slice(),i=0;i<copy.length&&!subscriber.closed;i+=_infiniteTimeWindow?1:2)subscriber.next(copy[i]);return this._checkFinalizedStatuses(subscriber),subscription},ReplaySubject.prototype._trimBuffer=function(){var _bufferSize=this._bufferSize,_timestampProvider=this._timestampProvider,_buffer=this._buffer,_infiniteTimeWindow=this._infiniteTimeWindow,adjustedBufferSize=(_infiniteTimeWindow?1:2)*_bufferSize;if(_bufferSize<1/0&&adjustedBufferSize<_buffer.length&&_buffer.splice(0,_buffer.length-adjustedBufferSize),!_infiniteTimeWindow){for(var now=_timestampProvider.now(),last=0,i=1;i<_buffer.length&&_buffer[i]<=now;i+=2)last=i;last&&_buffer.splice(0,last+1)}},ReplaySubject}(_Subject__WEBPACK_IMPORTED_MODULE_2__.B)},"./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>fromEvent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Observable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),nodeEventEmitterMethods=["addListener","removeListener"],eventTargetMethods=["addEventListener","removeEventListener"],jqueryMethods=["on","off"];function fromEvent(target,eventName,options,resultSelector){if((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(options)&&(resultSelector=options,options=void 0),resultSelector)return fromEvent(target,eventName,options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.I)(resultSelector));var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.zs)(function isEventTarget(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.addEventListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.removeEventListener)}(target)?eventTargetMethods.map((function(methodName){return function(handler){return target[methodName](eventName,handler,options)}})):function isNodeStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.addListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.removeListener)}(target)?nodeEventEmitterMethods.map(toCommonHandlerRegistry(target,eventName)):function isJQueryStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.on)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.off)}(target)?jqueryMethods.map(toCommonHandlerRegistry(target,eventName)):[],2),add=_a[0],remove=_a[1];if(!add&&(0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.X)(target))return(0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.Z)((function(subTarget){return fromEvent(subTarget,eventName,options)}))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.Tg)(target));if(!add)throw new TypeError("Invalid event target");return new _Observable__WEBPACK_IMPORTED_MODULE_6__.c((function(subscriber){var handler=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return subscriber.next(1<args.length?args:args[0])};return add(handler),function(){return remove(handler)}}))}function toCommonHandlerRegistry(target,eventName){return function(methodName){return function(handler){return target[methodName](eventName,handler)}}}},"./node_modules/rxjs/dist/esm5/internal/scheduler/dateTimestampProvider.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>dateTimestampProvider});var dateTimestampProvider={now:function(){return(dateTimestampProvider.delegate||Date).now()},delegate:void 0}},"./src/design/templates/quest/quest.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>quest_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var quest_componentngResource=__webpack_require__("./src/design/templates/quest/quest.component.scss?ngResource"),quest_componentngResource_default=__webpack_require__.n(quest_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),page_container_component=__webpack_require__("./src/design/organisms/page-container/page-container.component.ts"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),editable_text_component=__webpack_require__("./src/design/organisms/editable-text/editable-text.component.ts"),article_footer_component=__webpack_require__("./src/design/molecules/article-footer/article-footer.component.ts");let QuestComponent=class QuestComponent{constructor(routingService){this.routingService=routingService,this.quest=core.input.required(),this.questServerModel=core.input.required(),this.canUpdate=core.input.required(),this.canDelete=core.input.required(),this.questDelete=new core.EventEmitter,this.questUpdate=(0,core.output)(),this.campaignName=(0,core.computed)((()=>this.quest().campaign_details?.name)),this.questGiverUrl=(0,core.computed)((()=>this.routingService.getRoutePath("character",{campaign:this.campaignName(),name:this.quest().giver_details?.name}))),this.overviewUrl=(0,core.computed)((()=>this.routingService.getRoutePath("quest-overview",{campaign:this.campaignName()}))),this.updateUrl=(0,core.computed)((()=>this.routingService.getRoutePath("quest-update",{campaign:this.campaignName(),name:this.quest().name})))}onDescriptionUpdate(description){const itemToUpdate=void 0!==this.questServerModel()?this.questServerModel():this.quest();itemToUpdate&&this.questUpdate.emit({...itemToUpdate,description})}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={quest:[{type:core.Input,args:[{isSignal:!0,alias:"quest",required:!0,transform:void 0}]}],questServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"questServerModel",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],questDelete:[{type:core.Output}],questUpdate:[{type:core.Output,args:["questUpdate"]}]}}};QuestComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-quest",template:'<app-page-container>\n  <article class="container quest">\n    @if (canUpdate()) {\n      <div class="quest__edit-container">\n        <a [routerLink]="updateUrl()" tabindex="-1">\n          <button btn [icon]="\'pencil\'" [kind]="\'SECONDARY\'"></button>\n        </a>\n      </div>\n    }\n\n    \x3c!-- Heading --\x3e\n    <div class="row">\n      <h1 class="col-12 quest__heading">\n        {{ quest().name }}\n      </h1>\n    </div>\n\n    <div class="row quest__data-row">\n      \x3c!-- Quest Status --\x3e\n      <span class="col-5">Status:</span>\n      <span class="col-7">{{ quest().status }}</span>\n\n      \x3c!-- Quest Start --\x3e\n      <div class="col-5">Start - End:</div>\n      <div class="col-7">\n        {{ quest().start_session_details?.name }} -\n        @if (quest().end_session_details) {\n          {{ quest().end_session_details?.name }}\n        } @else {\n          <ng-container *ngTemplateOutlet="Ongoing" />\n        }\n      </div>\n\n      \x3c!-- Quest Giver --\x3e\n      <span class="col-5">Quest Giver:</span>\n      <span class="col-7">\n        @if (quest().giver_details) {\n          <a [routerLink]="questGiverUrl()">\n            {{ quest().giver_details?.name }}\n          </a>\n        } @else {\n          <ng-container *ngTemplateOutlet="NoQuestGiver" />\n        }\n      </span>\n    </div>\n\n    \x3c!-- Description --\x3e\n    <app-editable-text\n      class="quest__description"\n      [heading]="\'Description\'"\n      [placeholder]="\'Add a description for \' + quest().name"\n      [text]="quest().description"\n      [canUpdate]="canUpdate()"\n      (update)="onDescriptionUpdate($event)"\n    ></app-editable-text>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [buttonLink]="overviewUrl()"\n      [buttonLabel]="\'Back to Quest Overview\'"\n      [showDelete]="canDelete()"\n      [deleteMessage]="\'Delete Quest?\'"\n      (delete)="questDelete.emit(quest())"\n    ></app-article-footer>\n  </article>\n</app-page-container>\n\n<ng-template #Ongoing> Ongoing </ng-template>\n\n<ng-template #NoQuestGiver> None </ng-template>\n',standalone:!0,imports:[page_container_component.i,router.Wk,button_component.Q,common.NgTemplateOutlet,editable_text_component.T,article_footer_component.D],styles:[quest_componentngResource_default()]})],QuestComponent);const quest_stories={title:"DesignSystem/Templates/QuestComponent",component:QuestComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,animations.BrowserAnimationsModule],declarations:[]})],args:{canUpdate:!0,canDelete:!0,quest:{pk:123,name:"Rescue the Princess",status:"In progress",taker:456,taker_details:{name:"Sir Lancelot",name_full:"Sir Lancelot of Camelot",pk:456},abstract:"The king's daughter has been kidnapped by a dragon, and Sir Lancelot has been tasked with rescuing her.",description:"Sir Lancelot must journey to the dragon's lair, fight the beast, and rescue the princess. He will need to be well-prepared and gather allies along the way.",giver:789,giver_details:{name:"King Arthur",name_full:"Arthur Pendragon, King of Camelot",pk:789},start_session:12,start_session_details:{pk:12,is_main_session:!0,session_number:12,session_date:"2022-06-01"},end_session:16,end_session_details:{pk:16,is_main_session:!1,session_number:16,session_date:"2022-06-30"},campaign:1,campaign_details:{id:1,name:"Campaign of Adventures"},creation_datetime:"2022-05-01T10:00:00Z",update_datetime:"2022-05-03T14:30:00Z",getAbsoluteRouterUrl:()=>"https://example.com/quests/123"}}},Template=args=>({props:{...args,createImage:(0,dist.XI)("createImage"),deleteImage:(0,dist.XI)("deleteImage"),updateImage:(0,dist.XI)("updateImage"),itemDelete:(0,dist.XI)("itemDelete")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    itemDelete: action('itemDelete')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    itemDelete: action('itemDelete')\n  }\n})",...NoPermission.parameters?.docs?.source}}}},"./src/design/atoms/alert/alert.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/separator/separator.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --separator-color: var(--bs-white);\n  --separator-thickness: 1px;\n  --separator-margin-top: var(--spacer-3);\n  --separator-margin-bottom: var(--spacer-3);\n}\n\n.separator {\n  background-color: var(--separator-color);\n  height: var(--separator-thickness);\n  width: 100%;\n  margin: var(--separator-margin-top) var(--spacer-0) var(--separator-margin-bottom) var(--spacer-0);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/editable-text/editable-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-block;\n}\n\n.heading {\n  margin-bottom: var(--spacer-2);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--spacer-3);\n}\n.heading__edit-text {\n  margin: var(--spacer-0);\n}\n.heading__edit-button:focus, .heading__edit-button:focus-within, .heading__edit-button:hover {\n  border-radius: var(--bs-border-radius);\n  outline: var(--focus-outline);\n}\n\n.field {\n  text-align: unset;\n  border-radius: var(--bs-border-radius);\n}\n.field--display {\n  min-height: 1rem;\n  width: 100%;\n}\n.field--display:focus, .field--display:hover {\n  color: unset;\n  background-color: var(--bs-secondary);\n}\n.field--hidden {\n  display: none;\n}\n.field__buttons {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/quest/quest.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".quest__edit-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.quest__heading {\n  text-align: center;\n}\n.quest__data-row {\n  margin-bottom: var(--spacer-5);\n}\n.quest__description {\n  width: 100%;\n  margin-bottom: var(--spacer-5);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);