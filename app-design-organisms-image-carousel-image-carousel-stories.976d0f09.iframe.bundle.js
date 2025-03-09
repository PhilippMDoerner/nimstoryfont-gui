(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3001],{"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-arrow-down","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","list","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","up-down-left-right","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/app/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.sizeClass=(0,core.computed)((()=>{switch(this.size()){case"SMALL":return"btn-sm";case"MEDIUM":return"";case"LARGE":return"btn-lg"}})),this.kindClasses=(0,core.computed)((()=>{switch(this.kind()){case"PRIMARY":return"btn-primary";case"SECONDARY":return"btn-secondary";case"DARK":return"btn-dark";case"WARNING":return"btn-warning";case"DANGER":return"btn-danger";case"LIGHT":return"btn-light";case"INFO":return"btn-info";case"PRIMARY-OUTLINE":return"btn-outline-primary";case"SECONDARY-OUTLINE":return"btn-outline-secondary";case"DARK-OUTLINE":return"btn-outline-dark";case"WARNING-OUTLINE":return"btn-outline-warning";case"DANGER-OUTLINE":return"btn-outline-danger";case"LIGHT-OUTLINE":return"btn-outline-light";case"INFO-OUTLINE":return"btn-outline-info";case"NONE":return"btn-none"}})),this.btnClass=(0,core.computed)((()=>"NONE"!==this.kind()?"btn":"")),this.classes=(0,core.computed)((()=>`${this.btnClass()} ${this.sizeClass()} ${this.kindClasses()}`))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n\n@if (text()) {\n  <span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n    {{ text() }}\n  </span>\n}\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[disabled]":"isLoading() || disabled()"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon()))),this.classes=(0,core.computed)((()=>this.iconType()?`${this.iconType()} fa-${this.icon()}`:""))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],host:{"[class]":"classes()"},styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/app/design/organisms/image-carousel/image-carousel.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{H:()=>ImageCarouselComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_carousel_componentngResource=__webpack_require__("./src/app/design/organisms/image-carousel/image-carousel.component.scss?ngResource"),image_carousel_componentngResource_default=__webpack_require__.n(image_carousel_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let ImageCarouselComponent=class ImageCarouselComponent{constructor(){this.images=core.input.required(),this.serverUrl=core.input.required(),this.canDelete=(0,core.input)(!1),this.canCreate=(0,core.input)(!1),this.canUpdate=(0,core.input)(!1),this.currentSlideIndex=core.input.required(),this.deleteImage=new core.EventEmitter,this.createImage=new core.EventEmitter,this.updateImage=new core.EventEmitter,this.slide=new core.EventEmitter,this.slideEnd=new core.EventEmitter}onSlide(event){const slideIndexStr=event.current.split("-").pop();if(null==slideIndexStr)throw`ImageCarousel - Image with id '${event.current}' does not match the expected pattern of 'imageIndex-<number>'!`;const nextSlideIndex=parseInt(slideIndexStr);this.slide.emit({event,index:nextSlideIndex})}onSlideEnd(event){this.slide.emit({event,index:this.currentSlideIndex()})}onImageCreate(){this.canCreate()&&this.createImage.emit()}onImageUpdate(){if(!this.canUpdate())return;const image=this.images()[this.currentSlideIndex()];this.updateImage.emit(image)}onImageDelete(){if(!this.canDelete())return;const image=this.images()[this.currentSlideIndex()];this.deleteImage.emit(image)}static{this.propDecorators={images:[{type:core.Input,args:[{isSignal:!0,alias:"images",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],currentSlideIndex:[{type:core.Input,args:[{isSignal:!0,alias:"currentSlideIndex",required:!0,transform:void 0}]}],deleteImage:[{type:core.Output}],createImage:[{type:core.Output}],updateImage:[{type:core.Output}],slide:[{type:core.Output}],slideEnd:[{type:core.Output}]}}};ImageCarouselComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-carousel",template:'@if (images() && images().length > 0) {\n  <ngb-carousel\n    #imageCarousel\n    [interval]="0"\n    [showNavigationArrows]="images().length > 1"\n    [showNavigationIndicators]="images().length > 1"\n    [activeId]="\'imageIndex-\' + currentSlideIndex()"\n    (slide)="onSlide($event)"\n    (slid)="onSlideEnd($event)"\n  >\n    @for (image of images(); track image.pk) {\n      <ng-template ngbSlide [id]="\'imageIndex-\' + $index">\n        <div class="image-container" [title]="image.name">\n          <img [src]="serverUrl() + image.image" [alt]="\'Image \' + $index" />\n        </div>\n      </ng-template>\n    }\n  </ngb-carousel>\n} @else {\n  <ng-container *ngTemplateOutlet="defaultImage"></ng-container>\n}\n\n\x3c!-- Image Edit/Delete/Create Buttons --\x3e\n<div class="edit-image-buttons">\n  \x3c!-- Create Image Button --\x3e\n  @if (canCreate()) {\n    <button\n      btn\n      title="Create Image"\n      class="mx-2"\n      aria-label="\'Create Image\'"\n      [kind]="\'PRIMARY\'"\n      [size]="\'SMALL\'"\n      [icon]="\'plus-square\'"\n      (click)="onImageCreate()"\n    ></button>\n  }\n\n  \x3c!-- Update Image button --\x3e\n  @if (images().length > 0 && canUpdate()) {\n    <button\n      btn\n      aria-label="\'Update Image\'"\n      title="Update Image"\n      class="mx-2"\n      [kind]="\'SECONDARY\'"\n      [size]="\'SMALL\'"\n      [icon]="\'pencil\'"\n      (click)="onImageUpdate()"\n    ></button>\n  }\n\n  \x3c!-- Delete Image Button --\x3e\n  @if (images().length > 1 && canDelete()) {\n    <button\n      btn\n      aria-label="\'Delete Image\'"\n      title="Delete Image"\n      class="mx-2"\n      [kind]="\'DANGER\'"\n      [size]="\'SMALL\'"\n      [icon]="\'trash\'"\n      (click)="onImageDelete()"\n    ></button>\n  }\n</div>\n\n<ng-template #defaultImage>\n  <ngb-carousel\n    [showNavigationArrows]="false"\n    [showNavigationIndicators]="false"\n  >\n    <ng-template ngbSlide>\n      <div class="image-container default-image">\n        <img\n          [src]="\'assets/default_images/icon_default.webp\'"\n          alt="Default Image to show as backup when there is nothing"\n        />\n        <div class="image-caption">\n          <p>This article doesn\'t have an image yet</p>\n        </div>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[ng_bootstrap.wA,button_component.Q,common.NgTemplateOutlet],styles:[image_carousel_componentngResource_default()]})],ImageCarouselComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./src/app/design/organisms/image-carousel/image-carousel.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoImages:()=>NoImages,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs");const dummyImages=[{pk:1,image:"/breeds/germanshepherd/IMG_20200801_005830_387.jpg",name:"Image 1",character_article:1,creature_article:void 0,encounter_article:void 0,item_article:void 0,location_article:void 0,organization_article:void 0,article_type:"Type A"},{pk:2,image:"/breeds/mastiff-tibetan/n02108551_5830.jpg",name:"Image 2",character_article:void 0,creature_article:3,encounter_article:void 0,item_article:void 0,location_article:void 0,organization_article:void 0,article_type:"Type B"},{pk:3,image:"/breeds/malinois/n02105162_1572.jpg",name:"Image 3",character_article:void 0,creature_article:void 0,encounter_article:5,item_article:void 0,location_article:void 0,organization_article:void 0,article_type:"Type C"},{pk:4,image:"/breeds/ridgeback-rhodesian/n02087394_1352.jpg",name:"Image 4",character_article:void 0,creature_article:void 0,encounter_article:void 0,item_article:7,location_article:void 0,organization_article:void 0,article_type:"Type D"}],__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/ImageCarouselComponent",component:__webpack_require__("./src/app/design/organisms/image-carousel/image-carousel.component.ts").H,args:{images:dummyImages,serverUrl:"https://images.dog.ceo",canCreate:!0,canUpdate:!0,canDelete:!0,currentSlideIndex:0}},Template=args=>({props:{...args,deleteImage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("deleteImage"),createImage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("createImage"),updateImage:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("updateImage"),slide:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("slide"),slideEnd:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("slideEnd")}}),Default=Template.bind({});Default.args={};const NoImages=Template.bind({});NoImages.args={images:[]};const __namedExportsOrder=["Default","NoImages"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    deleteImage: action('deleteImage'),\n    createImage: action('createImage'),\n    updateImage: action('updateImage'),\n    slide: action('slide'),\n    slideEnd: action('slideEnd')\n  }\n})",...Default.parameters?.docs?.source}}},NoImages.parameters={...NoImages.parameters,docs:{...NoImages.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    deleteImage: action('deleteImage'),\n    createImage: action('createImage'),\n    updateImage: action('updateImage'),\n    slide: action('slide'),\n    slideEnd: action('slideEnd')\n  }\n})",...NoImages.parameters?.docs?.source}}}},"./src/app/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n}\n:host:focus-visible {\n  outline: var(--focus-outline);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/image-carousel/image-carousel.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".image-container img {\n  object-fit: contain;\n  width: 100%;\n  max-height: 10rem;\n}\n@media (min-width: 768px) {\n  .image-container img {\n    max-height: 18rem;\n  }\n}\n\n.image-caption {\n  position: absolute;\n  background: var(--wiki-bg-transparent);\n  width: 50%;\n  text-align: center;\n  bottom: 20%;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n}\n.image-caption p {\n  margin: 0;\n}\n\n.edit-image-buttons {\n  display: flex;\n  align-items: center;\n  align-content: center;\n  justify-content: center;\n  transition: opacity 0.2s;\n  margin-top: var(--spacer-2);\n}\n\n.defaultImage {\n  position: relative;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);