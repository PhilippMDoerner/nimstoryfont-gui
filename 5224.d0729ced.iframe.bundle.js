(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[5224],{"./src/app/design/animations/slideDown.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V4:()=>slideOutFromBottom,sb:()=>slideUpFromBottom,st:()=>slideRight});var _angular_animations__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const inactiveStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({opacity:.2,transform:"translateY(50%)"}),activeStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({opacity:1,transform:"translateY(0%)"}),slideUpFromBottom=((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-out",activeStyle)]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-in",inactiveStyle)])]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideUpFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-out",activeStyle)])])),slideOutFromBottom=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideOutFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-in",inactiveStyle)])]),inactiveSlideRightStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({transform:"translateX(100%)"}),activeSlideRightStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({transform:"translateX(0%)"}),slideRight=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideRight",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveSlideRightStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("250ms ease-in-out",activeSlideRightStyle)]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeSlideRightStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("250ms ease-in-out",inactiveSlideRightStyle)])])},"./src/app/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/app/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/app/design/organisms/quote/quote.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>QuoteComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var quote_componentngResource=__webpack_require__("./src/app/design/organisms/quote/quote.component.scss?ngResource"),quote_componentngResource_default=__webpack_require__.n(quote_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),html_text_component=__webpack_require__("./src/app/design/atoms/html-text/html-text.component.ts"),separator_component=__webpack_require__("./src/app/design/atoms/separator/separator.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts"),clipboard=__webpack_require__("./src/utils/clipboard.ts"),button_link_component=__webpack_require__("./src/app/design/atoms/button-link/button-link.component.ts"),toast_overlay_component=__webpack_require__("./src/app/design/organisms/toast-overlay/toast-overlay.component.ts");let QuoteComponent=class QuoteComponent{constructor(routingService,toastService){this.routingService=routingService,this.toastService=toastService,this.quote=(0,core.input)(),this.quoteControlsBlacklist=(0,core.input)([]),this._quoteControlsBlacklist=(0,core.computed)((()=>new Set(this.quoteControlsBlacklist()))),this.character=core.input.required(),this.campaignCharacters=core.input.required(),this.canCreate=(0,core.input)(!1),this.canUpdate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.quoteDelete=new core.EventEmitter,this.quoteCreate=new core.EventEmitter,this.quoteUpdate=new core.EventEmitter,this.connectionDelete=new core.EventEmitter,this.connectionCreate=new core.EventEmitter,this.refreshQuote=new core.EventEmitter,this.state="DISPLAY",this.badgeEntries=(0,core.computed)((()=>this.parseConnection(this.quote()?.connections??[]))),this.campaignName=(0,core.computed)((()=>this.character().campaign_details?.name)),this.isLoadingQuote=(0,core.signal)(!1),this.quoteOverviewUrl=(0,core.computed)((()=>this.routingService.getRoutePath("quote-overview",{name:this.character.name,campaign:this.campaignName}))),this._quoteControlls=(0,core.computed)((()=>[{controlKind:"REFRESH",isVisible:!!this.quote(),title:"Load new quote",type:"INFO",icon:"refresh",config:{kind:"CLICK",onClick:()=>this.getNextRandomQuote()}},{controlKind:"UPDATE",isVisible:!!this.quote()&&this.canUpdate(),title:"Edit Quote",type:"SECONDARY",icon:"pencil",config:{kind:"CLICK",onClick:()=>this.quoteUpdate.emit(this.quote())}},{controlKind:"CREATE",isVisible:this.canCreate(),title:"Create Quote",label:this.quote()?void 0:"Create Quote",type:"PRIMARY",icon:"plus",config:{kind:"CLICK",onClick:()=>this.quoteCreate.emit()}},{controlKind:"DELETE",isVisible:!!this.quote()&&this.canDelete(),title:"Delete Quote",type:"DANGER",icon:"trash",config:{kind:"CLICK",onClick:()=>this.quoteDelete.emit(this.quote())}},{controlKind:"COPY",isVisible:!!this.quote(),title:"Copy Quote to Clipboard",type:"DARK",icon:"copy",config:{kind:"CLICK",onClick:()=>this.copyQuoteToClipboard()}},{controlKind:"LIST",isVisible:!!this.quote(),title:"See all quotes",type:"SECONDARY",icon:"th-list",config:{kind:"LINK",link:this.routingService.getRoutePath("quote-overview",{name:this.character().name,campaign:this.campaignName()})}}])),this.quoteControlls=(0,core.computed)((()=>this._quoteControlls().filter((ctrl=>ctrl.isVisible)).filter((ctrl=>!this._quoteControlsBlacklist().has(ctrl.controlKind)))))}ngOnChanges(){this.isLoadingQuote.set(!1)}onConnectionDelete(connection){this.canDelete()&&this.connectionDelete.emit(connection)}onConnectionCreate(character){if(!this.canCreate()||!this.quote())return;const newConnection={quote:this.quote()?.pk,character:character.pk};this.connectionCreate.emit(newConnection)}getNextRandomQuote(){this.isLoadingQuote.set(!0),this.refreshQuote.emit()}parseConnection(connections){return connections.map((con=>{const characterName=con.character_details?.name;return{text:characterName,badgeValue:con,link:this.routingService.getRoutePath("character",{name:characterName,campaign:this.campaignName()})}}))}copyQuoteToClipboard(){const quote=this.quote();if(!quote)return;const text=`${quote.quote.split("<br />").map((line=>`>${line.trim().trimStart()}`)).join("<br />")}\n>${`- ${quote.description} `}`;(0,clipboard.l)(text),this.toastService.addToast({dismissMs:1500,type:"SUCCESS",onToastClick:dismiss=>dismiss(),body:{text:"Copied quote to clipboard",icon:"check"}})}static{this.ctorParameters=()=>[{type:routing_service.O},{type:toast_overlay_component.f}]}static{this.propDecorators={quote:[{type:core.Input,args:[{isSignal:!0,alias:"quote",required:!1,transform:void 0}]}],quoteControlsBlacklist:[{type:core.Input,args:[{isSignal:!0,alias:"quoteControlsBlacklist",required:!1,transform:void 0}]}],character:[{type:core.Input,args:[{isSignal:!0,alias:"character",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],quoteDelete:[{type:core.Output}],quoteCreate:[{type:core.Output}],quoteUpdate:[{type:core.Output}],connectionDelete:[{type:core.Output}],connectionCreate:[{type:core.Output}],refreshQuote:[{type:core.Output}]}}};QuoteComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-quote",template:'@if (!isLoadingQuote()) {\n  <div class="field">\n    @let quoteVal = quote();\n    @if (quoteVal) {\n      <blockquote class="field__content quote">\n        \x3c!-- Quote --\x3e\n        <app-html-text class="quote__text" [text]="quoteVal.quote" />\n\n        \x3c!-- Quote Description --\x3e\n        <div class="quote__description">\n          @if (quoteVal.description) {\n            <app-html-text [text]="\'- \' + quoteVal.description" />\n          }\n\n          @if (!quoteVal.description) {\n            - {{ character().name }}\n          }\n        </div>\n\n        <app-separator></app-separator>\n\n        \x3c!-- Quote Connections --\x3e\n        <div class="quote__connections d-inline icon-container">\n          <app-badge-list\n            [entries]="badgeEntries()"\n            [label]="\'Characters\'"\n            [createOptions]="{\n              kind: \'SELECT\',\n              config: {\n                options: campaignCharacters(),\n                labelProp: \'name\',\n                valueProp: \'pk\',\n              },\n            }"\n            [canCreate]="canCreate()"\n            [canDelete]="canDelete()"\n            [cancelButtonType]="\'DARK\'"\n            (entryCreate)="onConnectionCreate($event)"\n            (entryDelete)="onConnectionDelete($event)"\n          ></app-badge-list>\n        </div>\n      </blockquote>\n    }\n\n    \x3c!-- Quote Refresh/Create/Edit/Delete Icons --\x3e\n    <div class="field__controls">\n      @for (control of quoteControlls(); track $index) {\n        @switch (control.config.kind) {\n          @case ("CLICK") {\n            <button\n              btn\n              class="field__control"\n              [attr.aria-label]="control.title"\n              [title]="control.title"\n              [kind]="control.type"\n              [text]="control.label"\n              [icon]="control.icon"\n              (click)="control.config.onClick()"\n            ></button>\n          }\n          @case ("LINK") {\n            <a\n              btn\n              class="field__control"\n              [attr.aria-label]="control.title"\n              [title]="control.title"\n              [kind]="control.type"\n              [text]="control.label"\n              [icon]="control.icon"\n              [routerLink]="control.config.link"\n            >\n            </a>\n          }\n        }\n      }\n    </div>\n  </div>\n}\n\n<ng-template #loading>\n  <app-spinner></app-spinner>\n</ng-template>\n',imports:[html_text_component.m,molecules.pn,separator_component.F,button_component.Q,button_link_component.W,router.Wk,spinner_component.t],styles:[quote_componentngResource_default()]})],QuoteComponent)},"./src/app/design/organisms/toast-overlay/toast-overlay.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>ToastOverlayComponent,f:()=>ToastService});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var toast_overlay_componentngResource=__webpack_require__("./src/app/design/organisms/toast-overlay/toast-overlay.component.scss?ngResource"),toast_overlay_componentngResource_default=__webpack_require__.n(toast_overlay_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),slideDown=__webpack_require__("./src/app/design/animations/slideDown.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),logging=__webpack_require__("./src/utils/logging.ts");let ToastService=class ToastService{constructor(){this.toasts=(0,core.signal)([]),this.currentToast=(0,core.computed)((()=>this.toasts()[0]))}addToast(newToast){(0,logging.R)(this.addToast.name,newToast);const toasts=this.toasts();newToast.important?this.toasts.set([newToast,...toasts]):this.toasts.set([...toasts,newToast])}dismissToast(){const[_,...newToastList]=this.toasts();this.toasts.set(newToastList)}};ToastService=(0,tslib_es6.Cg)([(0,core.Injectable)({providedIn:"root"})],ToastService);let ToastOverlayComponent=class ToastOverlayComponent{constructor(){this.toastService=(0,core.inject)(ToastService),this.currentToast=this.toastService.currentToast,this.icon=(0,core.computed)((()=>{const currentToast=this.currentToast();if(currentToast)return this.toHeaderIcon(currentToast.type,currentToast.header?.icon)}))}dismissCurrentToast(){const currentToast=this.currentToast();if(!currentToast)return;const onHide=currentToast.onHide;onHide&&onHide(),this.toastService.dismissToast()}toHeaderIcon(toastType,icon){if(null!=icon)return icon;switch(toastType){case"DANGER":return"triangle-exclamation";case"WARNING":return"circle-exclamation";case"INFO":return"info-circle";case"SUCCESS":return"check";default:return"info"}}};ToastOverlayComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-toast-overlay",imports:[ng_bootstrap.VR,button_component.Q,icon_component.R,common.NgTemplateOutlet],animations:[slideDown.st],template:'@let toast = currentToast();\n@let onToastClick = toast?.onToastClick;\n@if (toast && onToastClick) {\n  <button\n    btn\n    class="button-container"\n    [kind]="\'NONE\'"\n    (click)="onToastClick(dismissCurrentToast.bind(this))"\n  >\n    <ng-container *ngTemplateOutlet="toastOverlay" />\n  </button>\n} @else if (toast) {\n  <ng-container *ngTemplateOutlet="toastOverlay" />\n}\n\n<ng-template #toastOverlay>\n  @if (toast) {\n    @if (toast.header) {\n      <ngb-toast\n        class="toast toast--{{ toast.type.toLocaleLowerCase() }}"\n        data-bs-theme="dark"\n        [autohide]="!!toast.dismissMs && toast.dismissMs > 0"\n        [delay]="toast.dismissMs ? toast.dismissMs : 0"\n        [ariaLive]="toast.important ? \'alert\' : \'polite\'"\n        [animation]="true"\n        (hidden)="dismissCurrentToast()"\n        (shown)="toast.onShow ? toast.onShow() : undefined"\n      >\n        <ng-template ngbToastHeader>\n          <span class="toast-header__text">\n            @let headerIcon = icon();\n            @if (headerIcon) {\n              <app-icon\n                class="toast-header__icon"\n                [icon]="headerIcon"\n              ></app-icon>\n            }\n            <span\n              class="toast-header__text-container"\n              [innerHTML]="toast.header.text"\n            ></span>\n          </span>\n        </ng-template>\n\n        <ng-container *ngTemplateOutlet="body" />\n      </ngb-toast>\n    } @else {\n      <ngb-toast\n        class="toast toast--{{ toast.type.toLocaleLowerCase() }}"\n        data-bs-theme="dark"\n        [autohide]="!!toast.dismissMs && toast.dismissMs > 0"\n        [delay]="toast.dismissMs ? toast.dismissMs : 0"\n        [ariaLive]="toast.important ? \'alert\' : \'polite\'"\n        [animation]="true"\n        (hidden)="dismissCurrentToast()"\n        (shown)="toast.onShow ? toast.onShow() : undefined"\n      >\n        <ng-container *ngTemplateOutlet="body" />\n      </ngb-toast>\n    }\n  }\n</ng-template>\n\n<ng-template #body>\n  <div class="toast__body body">\n    <span class="body__text">\n      @let bodyIcon = toast?.body?.icon;\n      @if (bodyIcon) {\n        <app-icon class="body__icon" [icon]="bodyIcon" />\n      }\n\n      @if (toast?.body?.text) {\n        <div class="body__text-container" [innerHTML]="toast?.body?.text"></div>\n      }\n    </span>\n\n    <div class="body__button-container">\n      @let firstButton = toast?.body?.buttons?.[0];\n      @if (firstButton) {\n        <button\n          btn\n          class="body__button"\n          [text]="firstButton.label"\n          [icon]="firstButton.icon"\n          [size]="\'SMALL\'"\n          [kind]="\'PRIMARY\'"\n          (click)="firstButton.onClick(dismissCurrentToast.bind(this))"\n        ></button>\n      }\n      @let secondButton = toast?.body?.buttons?.[1];\n      @if (secondButton) {\n        <button\n          btn\n          class="body__button"\n          [text]="secondButton.label"\n          [icon]="secondButton.icon"\n          [size]="\'SMALL\'"\n          [kind]="\'SECONDARY\'"\n          (click)="secondButton.onClick(dismissCurrentToast.bind(this))"\n        ></button>\n      }\n    </div>\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[toast_overlay_componentngResource_default()]})],ToastOverlayComponent)},"./src/utils/clipboard.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function copyToClipboard(text){const windowSelection=window.getSelection(),documentSelection=window.getSelection();var userSelectedTextRange=void 0;(function userHasElementsSelected(){const selection=document.getSelection();if(null==selection)return!1;return selection?.rangeCount>0})()&&(userSelectedTextRange=documentSelection.getRangeAt(0),windowSelection.removeRange(userSelectedTextRange));const textContainerElement=function createTextContainerElement(text){const textContainerElement=document.createElement("div");textContainerElement.innerHTML=text;const strippedText=textContainerElement.textContent;return textContainerElement.innerHTML=strippedText.replaceAll(">","<br>> ").slice(4),textContainerElement.style.position="absolute",textContainerElement.style.left="-9999px",textContainerElement}(text);document.body.appendChild(textContainerElement);const copyRange=function selectElement(element){const selectedRange=document.createRange();return selectedRange.selectNode(element),window.getSelection()?.addRange(selectedRange),selectedRange}(textContainerElement);!function copyCurrentSelection(){try{document.execCommand("copy")}catch(err){window.alert("Your Browser Doesn't support this! Error : "+err)}}(),windowSelection.removeRange(copyRange),document.body.removeChild(textContainerElement),userSelectedTextRange&&windowSelection.addRange(userSelectedTextRange)}__webpack_require__.d(__webpack_exports__,{l:()=>copyToClipboard})},"./src/app/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/quote/quote.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".field {\n  margin-bottom: var(--spacer-3);\n}\n.field__controls {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-4);\n  margin-top: var(--spacer-3);\n}\n.field__control {\n  display: inline-block;\n  width: fit-content;\n}\n\n.quote__description {\n  margin: var(--spacer-3) var(--spacer-0) var(--spacer-3) var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/toast-overlay/toast-overlay.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  position: absolute;\n}\n\n.toast:focus, .toast:focus-within, .toast:hover, .toast:focus-visible {\n  outline: var(--focus-outline);\n}\n\n.toast {\n  position: fixed;\n  bottom: 10%;\n  width: 93%;\n  right: 3.5%;\n  --bs-light-rgb: var(--bs-white);\n  --bs-toast-header-color: var(--bs-white);\n  --bs-toast-color: var(--bs-white);\n  --toast-padding-x: var(--bs-toast-padding-x);\n  --toast-padding-y: calc(var(--bs-toast-padding-y) / 2);\n  --bs-toast-border-width: 3px;\n}\n.toast--primary {\n  --bs-border-color-translucent: var(--bs-primary);\n}\n.toast--secondary {\n  --bs-border-color-translucent: var(--bs-secondary);\n}\n.toast--success {\n  --bs-border-color-translucent: var(--bs-success);\n}\n.toast--danger {\n  --bs-border-color-translucent: var(--bs-danger);\n}\n.toast--warning {\n  --bs-border-color-translucent: var(--bs-warning);\n}\n.toast--info {\n  --bs-border-color-translucent: var(--bs-info);\n}\n.toast--light {\n  --bs-border-color-translucent: var(--bs-light);\n}\n.toast--dark {\n  --bs-border-color-translucent: var(--bs-dark);\n}\n@media (min-width: 576px) {\n  .toast {\n    width: fit-content;\n    max-width: 50%;\n    bottom: 5%;\n  }\n}\n\n.toast-header__text {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--spacer-2);\n  flex: 1;\n  font-weight: bold;\n}\n\n.body {\n  display: flex;\n  flex-direction: column;\n}\n.body__text {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  gap: var(--spacer-2);\n  text-align: start;\n}\n.body__text-container {\n  max-height: calc(var(--bs-body-font-size) * 8);\n  max-width: 100%;\n  overflow: auto;\n}\n.body__button {\n  width: fit-content;\n}\n.body__button-container {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);