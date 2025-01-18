(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8307],{"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/molecules/icon-card/icon-card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>IconCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_card_componentngResource=__webpack_require__("./src/app/design/molecules/icon-card/icon-card.component.scss?ngResource"),icon_card_componentngResource_default=__webpack_require__.n(icon_card_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),string=__webpack_require__("./src/utils/string.ts");let IconCardComponent=class IconCardComponent{constructor(){this.icon=core.input.required(),this.title=core.input.required(),this.subText=core.input.required(),this.updateDatetime=core.input.required(),this.decoration=(0,core.input)(),this._title=(0,core.computed)((()=>(0,string.mc)(this.title(),40)))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}],title:[{type:core.Input,args:[{isSignal:!0,alias:"title",required:!0,transform:void 0}]}],subText:[{type:core.Input,args:[{isSignal:!0,alias:"subText",required:!0,transform:void 0}]}],updateDatetime:[{type:core.Input,args:[{isSignal:!0,alias:"updateDatetime",required:!0,transform:void 0}]}],decoration:[{type:core.Input,args:[{isSignal:!0,alias:"decoration",required:!1,transform:void 0}]}]}}};IconCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon-card",template:'<div class="card" [title]="title() | titlecase">\n  @if (decoration()) {\n    <div class="card-decoration">\n      {{ decoration() }}\n    </div>\n  }\n\n  \x3c!-- Heading --\x3e\n  <header class="card-icon-top">\n    <app-icon [icon]="icon()"></app-icon>\n  </header>\n\n  \x3c!-- Body --\x3e\n  <div class="card-body">\n    <div class="card-title">\n      <strong> {{ _title() | titlecase }} </strong>\n    </div>\n\n    <div class="card-subtitle">\n      {{ updateDatetime() | date }}\n      <div class="text-muted">\n        {{ subText() | titlecase }}\n      </div>\n    </div>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,common.DatePipe,common.TitleCasePipe],styles:[icon_card_componentngResource_default()]})],IconCardComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/molecules/icon-card/icon-card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/IconCardComponent",component:__webpack_require__("./src/app/design/molecules/icon-card/icon-card.component.ts").n,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({})],args:{icon:"magic",title:"Cute Doggo",subText:"Spell",updateDatetime:"2022-04-23T13:34:56.789Z"}},Default=(args=>({props:{...args}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/icon-card/icon-card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --icon-height: 6rem;\n  --icon-size: 4rem;\n}\n\n.card {\n  position: relative;\n  overflow: clip;\n}\n.card:hover {\n  box-shadow: inset 0 0 30px var(--bs-link-hover-color);\n}\n.card-decoration {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: absolute;\n  transform: rotate(45deg);\n  width: 120px;\n  height: 20px;\n  top: 16px;\n  right: -30px;\n  font-weight: bold;\n  text-align: center;\n  background-color: var(--bs-dark);\n}\n.card-icon-top {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: var(--icon-height);\n  font-size: var(--icon-size);\n}\n.card-title {\n  height: 4rem;\n}\n.card-subtitle {\n  margin-bottom: var(--spacer-2);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);