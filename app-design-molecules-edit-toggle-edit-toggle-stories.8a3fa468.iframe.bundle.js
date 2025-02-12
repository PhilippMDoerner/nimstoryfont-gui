(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[1951],{"./src/app/_directives/hotkey.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>HotkeyDirective});var tslib__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),rxjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),_services_hotkey_service__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/app/_services/hotkey.service.ts"),_services_screen_service__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/_services/screen.service.ts");let HotkeyDirective=class HotkeyDirective{constructor(){if(this.tooltip=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.md),this.hotkeyService=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_hotkey_service__WEBPACK_IMPORTED_MODULE_0__.Q),this.hotkey=_angular_core__WEBPACK_IMPORTED_MODULE_2__.input.required(),this.disabledHotkey=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)(!1),this.hotkeyPressed=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.output)(),this.tooltipText=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.computed)((()=>this.hotkey()?`Alt + ${this.hotkey()?.toUpperCase()}`:void 0)),(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services_screen_service__WEBPACK_IMPORTED_MODULE_1__.i).isMobile())return;const element=(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);this.configureTooltip(element),(0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.br)(this.disabledHotkey).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.n)((isDisabled=>isDisabled?(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(!1):this.hotkeyService.isHotkeyModifierPressed$??(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.of)(!1))),(0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.pQ)()).subscribe((showTooltip=>this.syncTooltipOpenState(showTooltip))),(0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.br)(this.hotkey).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.T)((key=>this.checkKey(key))),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.n)((key=>this.hotkeyService.watch(key).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.p)((()=>!this.disabledHotkey())),(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.M)((event=>this.hotkeyPressed.emit(event)))))),(0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.pQ)()).subscribe(),(0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.br)(this.tooltipText).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_4__.pQ)()).subscribe((tooltipText=>this.tooltip.ngbTooltip=tooltipText))}configureTooltip(element){this.tooltip.triggers="",this.tooltip.positionTarget=element.nativeElement}syncTooltipOpenState(showTooltip){showTooltip?this.tooltip.open():this.tooltip.close()}checkKey(key){if(!key)return;if(!!_services_hotkey_service__WEBPACK_IMPORTED_MODULE_0__.j.has(key))throw new Error(`Tried to bind unbindable hotkey ${key}`);return key}static{this.ctorParameters=()=>[]}static{this.propDecorators={hotkey:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:[{isSignal:!0,alias:"hotkey",required:!0,transform:void 0}]}],disabledHotkey:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,args:[{isSignal:!0,alias:"disabledHotkey",required:!1,transform:void 0}]}],hotkeyPressed:[{type:_angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,args:["hotkeyPressed"]}]}}};HotkeyDirective=(0,tslib__WEBPACK_IMPORTED_MODULE_10__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Directive)({selector:"[hotkey]",providers:[_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.md]})],HotkeyDirective)},"./src/app/_services/hotkey.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>HotkeyService,j:()=>UNBINDABLE_KEYSET});var tslib__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js"),rxjs__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js"),rxjs__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),rxjs__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),rxjs__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js"),rxjs__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js");const UNBINDABLE_KEYSET=new Set(["","1","2","3","4","5","6","7","8","9","0","-","=","Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","ArrowLeft","ArrowRight","^","Space"]);let HotkeyService=class HotkeyService{constructor(){const document=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT),window=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT).defaultView,destroyRef=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_core__WEBPACK_IMPORTED_MODULE_0__.DestroyRef);if(window){const keydownEvents$=(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(window,"keydown"),keyupEvents$=(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(window,"keyup"),visibilityChangeEvents$=(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.h)((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(document,"blur"),(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(window,"blur"),(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(document,"visibilitychange"),(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(window,"visibilitychange")).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.B)(10));this.hotkeyDown$=this.toHotkeydownEvents(keydownEvents$).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.pQ)(destroyRef),(0,rxjs__WEBPACK_IMPORTED_MODULE_6__.u)()),this.isHotkeyModifierPressed$=this.toIsHotkeyActive(keydownEvents$,keyupEvents$,visibilityChangeEvents$).pipe((0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_5__.pQ)(destroyRef))}}watch(key){return window&&this.hotkeyDown$&&key?this.hotkeyDown$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.p)((event=>event.key===key)),(0,rxjs__WEBPACK_IMPORTED_MODULE_9__.M)((event=>event.preventDefault()))):rxjs__WEBPACK_IMPORTED_MODULE_7__.w}toHotkeydownEvents(keydownEvents$){return keydownEvents$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.p)((event=>event.altKey&&!UNBINDABLE_KEYSET.has(event.key))),(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.t)(1))}toIsHotkeyActive(keydownEvents$,keyupEvents$,visibilityChangeEvents$){const isAltKeyDown1$=keydownEvents$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.p)((event=>"Alt"===event.key)),(0,rxjs__WEBPACK_IMPORTED_MODULE_11__.T)((()=>!0))),isAltKeyDown2=(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.h)(keyupEvents$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_8__.p)((event=>"Alt"===event.key))),visibilityChangeEvents$).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_11__.T)((()=>!1)));return(0,rxjs__WEBPACK_IMPORTED_MODULE_3__.h)(isAltKeyDown1$,isAltKeyDown2).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_12__.Z)(!1),(0,rxjs__WEBPACK_IMPORTED_MODULE_10__.t)(1))}static{this.ctorParameters=()=>[]}};HotkeyService=(0,tslib__WEBPACK_IMPORTED_MODULE_13__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({providedIn:"root"})],HotkeyService)},"./src/app/_services/screen.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>ScreenService});var tslib__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),rxjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),rxjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),rxjs__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),rxjs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js"),_app_constants__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/app/app.constants.ts");let ScreenService=class ScreenService{constructor(){this.document=(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT),this.windowSize$=this.document.defaultView?(0,rxjs__WEBPACK_IMPORTED_MODULE_2__.R)(this.document.defaultView,"resize",{passive:!0}).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.B)(500),(0,rxjs__WEBPACK_IMPORTED_MODULE_4__.T)((()=>this.document.defaultView?.innerWidth)),(0,rxjs__WEBPACK_IMPORTED_MODULE_5__.Z)(this.document.defaultView?.innerWidth)):rxjs__WEBPACK_IMPORTED_MODULE_6__.w,this.isMobile$=this.windowSize$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.T)((width=>width&&width<=_app_constants__WEBPACK_IMPORTED_MODULE_7__.kJ)))}isMobile(){const windowWidth=this.document.defaultView?.innerWidth;return!!windowWidth&&windowWidth<=_app_constants__WEBPACK_IMPORTED_MODULE_7__.kJ}};ScreenService=(0,tslib__WEBPACK_IMPORTED_MODULE_8__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({providedIn:"root"})],ScreenService)},"./src/app/app.constants.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{MQ:()=>SCROLL_UP_DISTANCE,Mw:()=>SWIPE_X_THRESHOLD,ds:()=>SWIPE_Y_THRESHOLD,kJ:()=>MOBILE_WIDTH});const MOBILE_WIDTH=767,SWIPE_X_THRESHOLD=125,SWIPE_Y_THRESHOLD=150,SCROLL_UP_DISTANCE=500},"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/app/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n<span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n  {{ text() }}\n</span>\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/app/design/molecules/edit-toggle/edit-toggle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>EditToggleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var edit_toggle_componentngResource=__webpack_require__("./src/app/design/molecules/edit-toggle/edit-toggle.component.scss?ngResource"),edit_toggle_componentngResource_default=__webpack_require__.n(edit_toggle_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),hotkey_directive=__webpack_require__("./src/app/_directives/hotkey.directive.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let EditToggleComponent=class EditToggleComponent{constructor(){this.buttonKind=(0,core.input)("SECONDARY"),this.toggled=(0,core.input)(!1),this.disabledHotkey=(0,core.input)(!1),this._toggled=(0,core.signal)(!1),this.toggle=(0,core.output)(),(0,core.effect)((()=>{this._toggled.set(this.toggled())}))}onClick(){this._toggled.set(!this._toggled()),this.toggle.emit(this._toggled())}static{this.ctorParameters=()=>[]}static{this.propDecorators={buttonKind:[{type:core.Input,args:[{isSignal:!0,alias:"buttonKind",required:!1,transform:void 0}]}],toggled:[{type:core.Input,args:[{isSignal:!0,alias:"toggled",required:!1,transform:void 0}]}],disabledHotkey:[{type:core.Input,args:[{isSignal:!0,alias:"disabledHotkey",required:!1,transform:void 0}]}],toggle:[{type:core.Output,args:["toggle"]}]}}};EditToggleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-edit-toggle",template:'<button\n  btn\n  class="edit-toggle"\n  [kind]="buttonKind()"\n  [icon]="_toggled() ? \'times\' : \'pencil\'"\n  (click)="onClick()"\n  [hotkey]="\'e\'"\n  [disabledHotkey]="disabledHotkey()"\n  (hotkeyPressed)="onClick()"\n></button>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[button_component.Q,hotkey_directive.G],styles:[edit_toggle_componentngResource_default()]})],EditToggleComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>debounceTime});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function debounceTime(dueTime,scheduler){return void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.E),(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){var activeTask=null,lastValue=null,lastTime=null,emit=function(){if(activeTask){activeTask.unsubscribe(),activeTask=null;var value=lastValue;lastValue=null,subscriber.next(value)}};function emitWhenIdle(){var targetTime=lastTime+dueTime,now=scheduler.now();if(now<targetTime)return activeTask=this.schedule(void 0,targetTime-now),void subscriber.add(activeTask);emit()}source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(value){lastValue=value,lastTime=scheduler.now(),activeTask||(activeTask=scheduler.schedule(emitWhenIdle,dueTime),subscriber.add(activeTask))}),(function(){emit(),subscriber.complete()}),void 0,(function(){lastValue=activeTask=null})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/share.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>share});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Subject__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),_Subscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subscriber.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function share(options){void 0===options&&(options={});var _a=options.connector,connector=void 0===_a?function(){return new _Subject__WEBPACK_IMPORTED_MODULE_0__.B}:_a,_b=options.resetOnError,resetOnError=void 0===_b||_b,_c=options.resetOnComplete,resetOnComplete=void 0===_c||_c,_d=options.resetOnRefCountZero,resetOnRefCountZero=void 0===_d||_d;return function(wrapperSource){var connection,resetConnection,subject,refCount=0,hasCompleted=!1,hasErrored=!1,cancelReset=function(){null==resetConnection||resetConnection.unsubscribe(),resetConnection=void 0},reset=function(){cancelReset(),connection=subject=void 0,hasCompleted=hasErrored=!1},resetAndUnsubscribe=function(){var conn=connection;reset(),null==conn||conn.unsubscribe()};return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){refCount++,hasErrored||hasCompleted||cancelReset();var dest=subject=null!=subject?subject:connector();subscriber.add((function(){0!==--refCount||hasErrored||hasCompleted||(resetConnection=handleReset(resetAndUnsubscribe,resetOnRefCountZero))})),dest.subscribe(subscriber),!connection&&refCount>0&&(connection=new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Ms({next:function(value){return dest.next(value)},error:function(err){hasErrored=!0,cancelReset(),resetConnection=handleReset(reset,resetOnError,err),dest.error(err)},complete:function(){hasCompleted=!0,cancelReset(),resetConnection=handleReset(reset,resetOnComplete),dest.complete()}}),(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(source).subscribe(connection))}))(wrapperSource)}}function handleReset(reset,on){for(var args=[],_i=2;_i<arguments.length;_i++)args[_i-2]=arguments[_i];if(!0!==on){if(!1!==on){var onSubscriber=new _Subscriber__WEBPACK_IMPORTED_MODULE_2__.Ms({next:function(){onSubscriber.unsubscribe(),reset()}});return(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(on.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_4__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_4__.zs)(args)))).subscribe(onSubscriber)}}else reset()}},"./node_modules/rxjs/dist/esm5/internal/operators/shareReplay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>shareReplay});var _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/ReplaySubject.js"),_share__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js");function shareReplay(configOrBufferSize,windowTime,scheduler){var _a,_b,_c,bufferSize,refCount=!1;return configOrBufferSize&&"object"==typeof configOrBufferSize?(_a=configOrBufferSize.bufferSize,bufferSize=void 0===_a?1/0:_a,_b=configOrBufferSize.windowTime,windowTime=void 0===_b?1/0:_b,refCount=void 0!==(_c=configOrBufferSize.refCount)&&_c,scheduler=configOrBufferSize.scheduler):bufferSize=null!=configOrBufferSize?configOrBufferSize:1/0,(0,_share__WEBPACK_IMPORTED_MODULE_0__.u)({connector:function(){return new _ReplaySubject__WEBPACK_IMPORTED_MODULE_1__.m(bufferSize,windowTime,scheduler)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:refCount})}},"./src/app/design/molecules/edit-toggle/edit-toggle.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/EditToggleComponent",component:__webpack_require__("./src/app/design/molecules/edit-toggle/edit-toggle.component.ts").a,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({declarations:[]})],args:{toggled:!1,buttonKind:"SECONDARY"}},Default=(args=>({props:{...args,toggle:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("toggle")}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    toggle: action('toggle')\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/app/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/edit-toggle/edit-toggle.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".edit-toggle {\n  display: inline-block;\n  width: fit-content;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);