(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3941],{"./src/design/animations/slideDown.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V4:()=>slideOutFromBottom,sb:()=>slideUpFromBottom,st:()=>slideRight});var _angular_animations__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const inactiveStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({opacity:.2,transform:"translateY(50%)"}),activeStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({opacity:1,transform:"translateY(0%)"}),slideUpFromBottom=((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-out",activeStyle)]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-in",inactiveStyle)])]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideUpFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-out",activeStyle)])])),slideOutFromBottom=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideOutFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-in",inactiveStyle)])]),inactiveSlideRightStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({transform:"translateX(100%)"}),activeSlideRightStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({transform:"translateX(0%)"}),slideRight=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideRight",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveSlideRightStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("250ms ease-in-out",activeSlideRightStyle)]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeSlideRightStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("250ms ease-in-out",inactiveSlideRightStyle)])])},"./src/design/atoms/_models/button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C9:()=>toElementKind,bV:()=>ELEMENT_TYPES});const ELEMENT_TYPES=["PRIMARY","SECONDARY","DARK","DANGER","WARNING","LIGHT","INFO"];function toElementKind(kind){switch(kind){case"PRIMARY":case"SECONDARY":case"DARK":case"DANGER":case"WARNING":case"LIGHT":case"INFO":return kind;case"PRIMARY-OUTLINE":case"SECONDARY-OUTLINE":case"DARK-OUTLINE":case"DANGER-OUTLINE":case"WARNING-OUTLINE":case"LIGHT-OUTLINE":case"INFO-OUTLINE":return kind.replace("-OUTLINE","");case"NONE":return}}},"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n<span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n  {{ text() }}\n</span>\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[icon_componentngResource_default()]})],IconComponent)},"./src/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/design/organisms/toast-overlay/toast-overlay.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ToastOverlayComponent,f:()=>ToastService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var toast_overlay_componentngResource=__webpack_require__("./src/design/organisms/toast-overlay/toast-overlay.component.scss?ngResource"),toast_overlay_componentngResource_default=__webpack_require__.n(toast_overlay_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),slideDown=__webpack_require__("./src/design/animations/slideDown.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),logging=__webpack_require__("./src/utils/logging.ts");let ToastService=class ToastService{constructor(){this.toasts=(0,core.signal)([]),this.currentToast=(0,core.computed)((()=>this.toasts()[0]))}addToast(newToast){(0,logging.R)(this.addToast.name,newToast);const toasts=this.toasts();newToast.important?this.toasts.set([newToast,...toasts]):this.toasts.set([...toasts,newToast])}dismissToast(){const[_,...newToastList]=this.toasts();this.toasts.set(newToastList)}};ToastService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],ToastService);let ToastOverlayComponent=class ToastOverlayComponent{constructor(){this.toastService=(0,core.inject)(ToastService),this.currentToast=this.toastService.currentToast,this.icon=(0,core.computed)((()=>{const currentToast=this.currentToast();if(currentToast)return this.toHeaderIcon(currentToast.type,currentToast.header?.icon)}))}dismissCurrentToast(){const currentToast=this.currentToast();if(!currentToast)return;const onHide=currentToast.onHide;onHide&&onHide(),this.toastService.dismissToast()}toHeaderIcon(toastType,icon){if(null!=icon)return icon;switch(toastType){case"DANGER":return"triangle-exclamation";case"WARNING":return"circle-exclamation";case"INFO":return"info-circle";case"SUCCESS":return"check";default:return"info"}}};ToastOverlayComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-toast-overlay",standalone:!0,imports:[ng_bootstrap.VR,button_component.Q,icon_component.R,common.NgTemplateOutlet],animations:[slideDown.st],template:'@let toast = currentToast();\n@let onToastClick = toast?.onToastClick;\n@if (toast && onToastClick) {\n  <button\n    btn\n    class="button-container"\n    [kind]="\'NONE\'"\n    (click)="onToastClick(dismissCurrentToast.bind(this))"\n  >\n    <ng-container *ngTemplateOutlet="toastOverlay" />\n  </button>\n} @else if (toast) {\n  <ng-container *ngTemplateOutlet="toastOverlay" />\n}\n\n<ng-template #toastOverlay>\n  @if (toast) {\n    @if (toast.header) {\n      <ngb-toast\n        class="toast toast--{{ toast.type.toLocaleLowerCase() }}"\n        data-bs-theme="dark"\n        [autohide]="!!toast.dismissMs && toast.dismissMs > 0"\n        [delay]="toast.dismissMs ? toast.dismissMs : 0"\n        [ariaLive]="toast.important ? \'alert\' : \'polite\'"\n        [animation]="true"\n        (hidden)="dismissCurrentToast()"\n        (shown)="toast.onShow ? toast.onShow() : undefined"\n      >\n        <ng-template ngbToastHeader>\n          <span class="toast-header__text">\n            @let headerIcon = icon();\n            @if (headerIcon) {\n              <app-icon\n                class="toast-header__icon"\n                [icon]="headerIcon"\n              ></app-icon>\n            }\n            <span\n              class="toast-header__text-container"\n              [innerHTML]="toast.header.text"\n            ></span>\n          </span>\n        </ng-template>\n\n        <ng-container *ngTemplateOutlet="body" />\n      </ngb-toast>\n    } @else {\n      <ngb-toast\n        class="toast toast--{{ toast.type.toLocaleLowerCase() }}"\n        data-bs-theme="dark"\n        [autohide]="!!toast.dismissMs && toast.dismissMs > 0"\n        [delay]="toast.dismissMs ? toast.dismissMs : 0"\n        [ariaLive]="toast.important ? \'alert\' : \'polite\'"\n        [animation]="true"\n        (hidden)="dismissCurrentToast()"\n        (shown)="toast.onShow ? toast.onShow() : undefined"\n      >\n        <ng-container *ngTemplateOutlet="body" />\n      </ngb-toast>\n    }\n  }\n</ng-template>\n\n<ng-template #body>\n  <div class="toast__body body">\n    <span class="body__text">\n      @let bodyIcon = toast?.body?.icon;\n      @if (bodyIcon) {\n        <app-icon class="body__icon" [icon]="bodyIcon" />\n      }\n\n      @if (toast?.body?.text) {\n        <div class="body__text-container" [innerHTML]="toast?.body?.text"></div>\n      }\n    </span>\n\n    <div class="body__button-container">\n      @let firstButton = toast?.body?.buttons?.[0];\n      @if (firstButton) {\n        <button\n          btn\n          class="body__button"\n          [text]="firstButton.label"\n          [icon]="firstButton.icon"\n          [size]="\'SMALL\'"\n          [kind]="\'PRIMARY\'"\n          (click)="firstButton.onClick(dismissCurrentToast.bind(this))"\n        ></button>\n      }\n      @let secondButton = toast?.body?.buttons?.[1];\n      @if (secondButton) {\n        <button\n          btn\n          class="body__button"\n          [text]="secondButton.label"\n          [icon]="secondButton.icon"\n          [size]="\'SMALL\'"\n          [kind]="\'SECONDARY\'"\n          (click)="secondButton.onClick(dismissCurrentToast.bind(this))"\n        ></button>\n      }\n    </div>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[toast_overlay_componentngResource_default()]})],ToastOverlayComponent)},"./src/utils/logging.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>log});var _angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");function log(debugSymbol,...data){(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.isDevMode)()&&(console.groupCollapsed(`[DEBUG] ${debugSymbol}:`,data),console.trace(),console.groupEnd())}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__.c(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.D);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.H)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__._)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.e)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.D));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.N)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.U)(1)}()((0,from.H)(args,(0,util_args.lI)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>mapTo});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");function mapTo(value){return(0,_map__WEBPACK_IMPORTED_MODULE_0__.T)((function(){return value}))}},"./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{U:()=>mergeAll});var _mergeMap__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_identity__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js");function mergeAll(concurrent){return void 0===concurrent&&(concurrent=1/0),(0,_mergeMap__WEBPACK_IMPORTED_MODULE_0__.Z)(_util_identity__WEBPACK_IMPORTED_MODULE_1__.D,concurrent)}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.lI)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.x)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.x)(values,source)).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.l)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./src/design/organisms/toast-overlay/toast-overlay.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{WithHeaderToast:()=>WithHeaderToast,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),src_design_atoms_models_button__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/design/atoms/_models/button.ts"),src_design_atoms_models_icon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/design/atoms/_models/icon.ts"),_toast_overlay_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/design/organisms/toast-overlay/toast-overlay.component.ts");const toastService=new _toast_overlay_component__WEBPACK_IMPORTED_MODULE_2__.f,__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/ToastOverlayComponent",component:_toast_overlay_component__WEBPACK_IMPORTED_MODULE_2__.r,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.applicationConfig)({providers:[{provide:_toast_overlay_component__WEBPACK_IMPORTED_MODULE_2__.f,useValue:toastService}]})],args:{toastService,headerText:"Hello",bodyText:"World",important:!1,dismissMs:1500,hasBody:!0,hasHeader:!0},argTypes:{toastType:{control:"select",options:[...src_design_atoms_models_button__WEBPACK_IMPORTED_MODULE_3__.bV,"SUCCESS"]},headerIcon:{control:"select",options:[null,...src_design_atoms_models_icon__WEBPACK_IMPORTED_MODULE_1__.xy]},bodyIcon:{control:"select",options:[null,...src_design_atoms_models_icon__WEBPACK_IMPORTED_MODULE_1__.xy]}}},WithHeaderToast={render:args=>{const toast={type:args.toastType??"INFO",header:args.hasHeader?{text:args.headerText,icon:args.headerIcon}:void 0,body:{text:args.bodyText,icon:args.bodyIcon},onToastClick:dismiss=>dismiss()};return args.toast=toast,{props:args,template:'\n        <button btn style="color: black;" (click)="toastService.addToast(toast)"> Click </button>\n        <app-toast-overlay></app-toast-overlay>\n      '}}},__namedExportsOrder=["WithHeaderToast"];WithHeaderToast.parameters={...WithHeaderToast.parameters,docs:{...WithHeaderToast.parameters?.docs,source:{originalSource:'{\n  render: (args: any) => {\n    const toast: ToastConfig = {\n      type: args.toastType ?? \'INFO\',\n      header: args.hasHeader ? {\n        text: args.headerText,\n        icon: args.headerIcon\n      } : undefined,\n      body: {\n        text: args.bodyText,\n        icon: args.bodyIcon\n      },\n      onToastClick: dismiss => dismiss()\n    };\n    (args as any).toast = toast;\n    return {\n      props: args,\n      template: `\n        <button btn style="color: black;" (click)="toastService.addToast(toast)"> Click </button>\n        <app-toast-overlay></app-toast-overlay>\n      `\n    };\n  }\n}',...WithHeaderToast.parameters?.docs?.source}}}},"./src/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/toast-overlay/toast-overlay.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  position: absolute;\n}\n\n.toast:focus, .toast:focus-within, .toast:hover, .toast:focus-visible {\n  outline: var(--focus-outline);\n}\n\n.toast {\n  position: fixed;\n  bottom: 10%;\n  width: 93%;\n  right: 3.5%;\n  --bs-light-rgb: var(--bs-white);\n  --bs-toast-header-color: var(--bs-white);\n  --bs-toast-color: var(--bs-white);\n  --toast-padding-x: var(--bs-toast-padding-x);\n  --toast-padding-y: calc(var(--bs-toast-padding-y) / 2);\n  --bs-toast-border-width: 3px;\n}\n.toast--primary {\n  --bs-border-color-translucent: var(--bs-primary);\n}\n.toast--secondary {\n  --bs-border-color-translucent: var(--bs-secondary);\n}\n.toast--success {\n  --bs-border-color-translucent: var(--bs-success);\n}\n.toast--danger {\n  --bs-border-color-translucent: var(--bs-danger);\n}\n.toast--warning {\n  --bs-border-color-translucent: var(--bs-warning);\n}\n.toast--info {\n  --bs-border-color-translucent: var(--bs-info);\n}\n.toast--light {\n  --bs-border-color-translucent: var(--bs-light);\n}\n.toast--dark {\n  --bs-border-color-translucent: var(--bs-dark);\n}\n@media (min-width: 576px) {\n  .toast {\n    width: fit-content;\n    max-width: 50%;\n    bottom: 5%;\n  }\n}\n\n.toast-header__text {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--spacer-2);\n  flex: 1;\n  font-weight: bold;\n}\n\n.body {\n  display: flex;\n  flex-direction: column;\n}\n.body__text {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: var(--spacer-2);\n  text-align: start;\n}\n.body__text-container {\n  max-height: calc(var(--bs-body-font-size) * 8);\n  max-width: 100%;\n  overflow: auto;\n}\n.body__button {\n  width: fit-content;\n}\n.body__button-container {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);