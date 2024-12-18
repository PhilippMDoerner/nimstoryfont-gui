(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[2815],{"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n<span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n  {{ text() }}\n</span>\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[icon_componentngResource_default()]})],IconComponent)},"./src/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/design/molecules/image-card/image-card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>ImageCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_card_componentngResource=__webpack_require__("./src/design/molecules/image-card/image-card.component.scss?ngResource"),image_card_componentngResource_default=__webpack_require__.n(image_card_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),debounceTime=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js"),startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts");let ImageCardComponent=class ImageCardComponent{constructor(){this.serverUrl=core.input.required(),this.fallbackUrl=(0,core.input)(),this.imageUrls=core.input.required({transform:value=>value?Array.isArray(value)?value:[value]:[]}),this.link=(0,core.input)(),this.text=core.input.required(),this.alt=(0,core.input)(),this.currentImageIndex=(0,core.signal)(0),this.currentImage=(0,core.computed)((()=>this.imageUrls()[this.currentImageIndex()]??this.fallbackUrl())),this.elementRef=(0,core.inject)(core.ElementRef),this.selectorClicked$=new Subject.B,this.closeBtnClicked$=new Subject.B,this.openBtnClicked$=new Subject.B,this.inFocus=(0,rxjs_interop.ot)((0,merge.h)((0,fromEvent.R)(this.elementRef.nativeElement,"focusin").pipe((0,map.T)((()=>!0))),(0,fromEvent.R)(this.elementRef.nativeElement,"focusout").pipe((0,filter.p)((event=>this.hasDataAttributeInTree(event,"[data-register-focus]"))),(0,map.T)((()=>!1))),(0,fromEvent.R)(this.elementRef.nativeElement,"mouseenter").pipe((0,map.T)((()=>!0))),(0,fromEvent.R)(this.elementRef.nativeElement,"mouseleave").pipe((0,map.T)((()=>!1))),(0,fromEvent.R)(this.elementRef.nativeElement,"click").pipe((0,filter.p)((event=>!this.hasDataAttributeInTree(event,"[data-ignore-click]"))),(0,map.T)((()=>!0))),this.selectorClicked$.pipe((0,map.T)((()=>!0))),this.openBtnClicked$.pipe((0,map.T)((()=>!0))),this.closeBtnClicked$.pipe((0,map.T)((()=>!1)))).pipe((0,debounceTime.B)(50),(0,startWith.Z)(!1))),this.selectorClicked$.pipe((0,rxjs_interop.pQ)()).subscribe((({event,index})=>this.onSelectorClick(index,event)))}onSelectorClick(newIndex,event){this.currentImageIndex.set(newIndex),event.preventDefault()}hasDataAttributeInTree(event,attr){const target=event.target;if(!(target instanceof Element))return!0;return null!=target.closest(attr)}static{this.ctorParameters=()=>[]}static{this.propDecorators={serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],fallbackUrl:[{type:core.Input,args:[{isSignal:!0,alias:"fallbackUrl",required:!1,transform:void 0}]}],imageUrls:[{type:core.Input,args:[{isSignal:!0,alias:"imageUrls",required:!0,transform:void 0}]}],link:[{type:core.Input,args:[{isSignal:!0,alias:"link",required:!1,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],alt:[{type:core.Input,args:[{isSignal:!0,alias:"alt",required:!1,transform:void 0}]}]}}};ImageCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-card",template:'<div class="card" [class.card--active]="inFocus()" data-register-focus>\n  @if (currentImage()) {\n    <div class="card__img-container">\n      <a class="card__img-link" [routerLink]="link()">\n        <img\n          class="card-img-top"\n          [src]="serverUrl() + currentImage()"\n          [alt]="alt()"\n        />\n      </a>\n\n      <button\n        class="card__img-close-btn"\n        btn\n        [kind]="\'NONE\'"\n        [icon]="inFocus() ? \'xmark\' : \'expand\'"\n        (click)="\n          inFocus()\n            ? closeBtnClicked$.next($event)\n            : openBtnClicked$.next($event)\n        "\n        data-ignore-click="true"\n      ></button>\n    </div>\n  }\n  <div class="card-body">\n    @if (imageUrls().length > 1) {\n      <div class="card__img-selectors" (click)="$event.preventDefault()">\n        @for (_ of imageUrls(); track $index) {\n          <button\n            class="card__img-selector"\n            [class.card__img-selector--active]="$index === currentImageIndex()"\n            (click)="selectorClicked$.next({ index: $index, event: $event })"\n          >\n            {{ $index + 1 }}\n          </button>\n        }\n      </div>\n    }\n    <a class="card__title-link" [routerLink]="link()">\n      <h5 class="card-title">\n        {{ text() }}\n      </h5>\n    </a>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[router.Wk,button_component.Q,common.AsyncPipe],host:{"[class.card--active]":"inFocus()"},styles:[image_card_componentngResource_default()]})],ImageCardComponent)},"./node_modules/rxjs/dist/esm5/internal/operators/debounceTime.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>debounceTime});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function debounceTime(dueTime,scheduler){return void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.E),(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.N)((function(source,subscriber){var activeTask=null,lastValue=null,lastTime=null,emit=function(){if(activeTask){activeTask.unsubscribe(),activeTask=null;var value=lastValue;lastValue=null,subscriber.next(value)}};function emitWhenIdle(){var targetTime=lastTime+dueTime,now=scheduler.now();if(now<targetTime)return activeTask=this.schedule(void 0,targetTime-now),void subscriber.add(activeTask);emit()}source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(value){lastValue=value,lastTime=scheduler.now(),activeTask||(activeTask=scheduler.schedule(emitWhenIdle,dueTime),subscriber.add(activeTask))}),(function(){emit(),subscriber.complete()}),void 0,(function(){lastValue=activeTask=null})))}))}},"./src/design/molecules/image-card/image-card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/ImageCardComponent",component:__webpack_require__("./src/design/molecules/image-card/image-card.component.ts").f,args:{serverUrl:"https://images.dog.ceo",imageUrl:"/breeds/malinois/n02105162_1572.jpg",text:"Cute Doggo",alt:"A cute little doggo"}},Default=(args=>({props:{...args}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/molecules/image-card/image-card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  position: relative;\n  display: block;\n}\n\n.card {\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.card--active {\n  position: absolute;\n  top: 0;\n  width: 100%;\n  z-index: 3;\n  box-shadow: 0 0 0 5px rgba(0, 0, 0, 0.4), 0 0 20px rgba(0, 0, 0, 0.6), 0 10px 20px rgba(0, 0, 0, 0.8);\n}\n@media (min-width: 992px) {\n  .card--active {\n    transition: transform ease-in-out 0.2s;\n    transform: scale(1.2);\n  }\n}\n.card--active .card__img-container {\n  display: flex;\n  max-width: 100%;\n  max-height: 100%;\n}\n.card--active .card__img-link {\n  flex: 1;\n  display: flex;\n}\n.card--active .card-img-top {\n  max-width: 100%;\n  height: 40vh;\n  max-height: unset;\n  object-fit: scale-down;\n  object-position: top;\n}\n.card--active .card-body {\n  flex: unset;\n}\n.card-body {\n  padding: var(--spacer-3);\n}\n.card-title {\n  margin-bottom: var(--spacer-0);\n  text-align: center;\n}\n@media (min-width: 768px) {\n  .card__title-link {\n    text-decoration: none;\n  }\n}\n.card__img-container {\n  flex: 1;\n  position: relative;\n}\n.card-img-top {\n  object-fit: cover;\n  max-height: 7rem;\n  transition: 0.5s height;\n}\n.card__img-close-btn {\n  position: absolute;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  top: var(--spacer-2);\n  right: var(--spacer-2);\n  background-color: var(--bs-dark);\n  --btn-pad: var(--spacer-2);\n  padding: var(--btn-pad) var(--btn-pad) var(--btn-pad) calc(var(--btn-pad) + 0.25rem);\n  border-radius: 50%;\n  z-index: 2;\n}\n@media (min-width: 768px) {\n  .card__img-close-btn {\n    display: none;\n  }\n}\n.card__img-selectors {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  margin-top: var(--spacer-2);\n  margin-bottom: var(--spacer-2);\n  gap: var(--spacer-2);\n}\n.card__img-selector {\n  border-radius: 50%;\n  padding: var(--spacer-1) var(--spacer-2);\n  border: var(--bs-dark) 2px solid;\n  background-color: var(--bs-secondary);\n}\n.card__img-selector--active {\n  background-color: var(--bs-dark);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);