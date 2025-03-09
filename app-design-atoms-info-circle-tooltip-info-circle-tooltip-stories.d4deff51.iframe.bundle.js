(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[2686],{"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-arrow-down","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","list","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","up-down-left-right","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon()))),this.classes=(0,core.computed)((()=>this.iconType()?`${this.iconType()} fa-${this.icon()}`:""))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],host:{"[class]":"classes()"},styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>InfoCircleTooltipComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var info_circle_tooltip_componentngResource=__webpack_require__("./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.scss?ngResource"),info_circle_tooltip_componentngResource_default=__webpack_require__.n(info_circle_tooltip_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let InfoCircleTooltipComponent=class InfoCircleTooltipComponent{constructor(){this.tooltip=core.input.required(),this.text=core.input.required(),this.placement=(0,core.input)("top"),this.tooltipKind=(0,core.computed)((()=>this.tooltip()instanceof core.TemplateRef?"custom":"text"))}static{this.propDecorators={tooltip:[{type:core.Input,args:[{isSignal:!0,alias:"tooltip",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],placement:[{type:core.Input,args:[{isSignal:!0,alias:"placement",required:!1,transform:void 0}]}]}}};InfoCircleTooltipComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-info-circle-tooltip",template:'<strong\n  [placement]="placement()"\n  [ngbTooltip]="tooltipKind() === \'text\' ? tooltipContent : tooltip()"\n  [tooltipClass]="\'my-tooltip\'"\n  class="pointer"\n>\n  {{ text() }}\n  <app-icon class="mx-1" [icon]="\'info-circle\'"></app-icon>\n</strong>\n\n<ng-template #tooltipContent>\n  <div class="m-0 p-0">\n    {{ tooltip() }}\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,ng_bootstrap.md],styles:[info_circle_tooltip_componentngResource_default()]})],InfoCircleTooltipComponent)},"./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/InfoCircleTooltipComponent",component:__webpack_require__("./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.ts").$,args:{text:"SomeText",tooltip:"Tooltip text beautiful"}},Default=(args=>({props:{...args},template:'\n    <div class="my-5">\n      <app-info-circle-tooltip\n        [tooltip]="tooltip"\n        [text]="text"\n      ></app-info-circle-tooltip>\n    </div>\n  '})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: any) => ({\n  props: {\n    ...args\n  },\n  template: `\n    <div class="my-5">\n      <app-info-circle-tooltip\n        [tooltip]="tooltip"\n        [text]="text"\n      ></app-info-circle-tooltip>\n    </div>\n  `\n})',...Default.parameters?.docs?.source}}}},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/info-circle-tooltip/info-circle-tooltip.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);