(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[2372],{"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/design/atoms/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>BadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var badge_componentngResource=__webpack_require__("./src/design/atoms/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts");let BadgeComponent=class BadgeComponent{constructor(){this.kind=core.input.required(),this.text=core.input.required(),this.icon=(0,core.input)(),this.clickable=(0,core.input)(!1),this.badgeClick=new core.EventEmitter}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],clickable:[{type:core.Input,args:[{isSignal:!0,alias:"clickable",required:!1,transform:void 0}]}],badgeClick:[{type:core.Output}]}}};BadgeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-badge",template:"@if (clickable()) {\n  <button btn class=\"badge-button\" (click)=\"badgeClick.emit()\">\n    <ng-container [ngTemplateOutlet]=\"content\" />\n  </button>\n} @else {\n  <ng-container [ngTemplateOutlet]=\"content\" />\n}\n\n<ng-template #content>\n  <div\n    class=\"badge\"\n    [title]=\"text()\"\n    [ngClass]=\"{\n      'bg-primary': kind() === 'PRIMARY',\n      'bg-secondary': kind() === 'SECONDARY',\n      'bg-dark': kind() === 'DARK',\n      'bg-danger': kind() === 'DANGER',\n      'bg-warning': kind() === 'WARNING',\n      'bg-light': kind() === 'LIGHT',\n      'bg-info': kind() === 'INFO',\n    }\"\n  >\n    @let iconVal = icon();\n    @if (iconVal) {\n      <app-icon [icon]=\"iconVal\"></app-icon>\n    }\n    {{ text() }}\n  </div>\n</ng-template>\n",standalone:!0,imports:[common.NgTemplateOutlet,common.NgClass,icon_component.R],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[badge_componentngResource_default()]})],BadgeComponent)},"./src/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[icon_componentngResource_default()]})],IconComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/design/atoms/badge/badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Dark:()=>Dark,Default:()=>Default,Info:()=>Info,Light:()=>Light,Secondary:()=>Secondary,Warning:()=>Warning,WithIcon:()=>WithIcon,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/BadgeComponent",component:__webpack_require__("./src/design/atoms/badge/badge.component.ts").n,args:{text:"BadgeText",kind:"PRIMARY",icon:void 0}},Template=args=>({props:{...args}}),Default=Template.bind({});Default.args={};const Secondary=Template.bind({});Secondary.args={kind:"SECONDARY"};const Dark=Template.bind({});Dark.args={kind:"DARK"};const Warning=Template.bind({});Warning.args={kind:"WARNING"};const Danger=Template.bind({});Danger.args={kind:"DANGER"};const Light=Template.bind({});Light.args={kind:"LIGHT"};const Info=Template.bind({});Info.args={kind:"INFO"};const WithIcon=Template.bind({});WithIcon.args={icon:"times"};const __namedExportsOrder=["Default","Secondary","Dark","Warning","Danger","Light","Info","WithIcon"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}},Secondary.parameters={...Secondary.parameters,docs:{...Secondary.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Secondary.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Dark.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Danger.parameters?.docs?.source}}},Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Light.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...Info.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: {\n    ...args\n  }\n})",...WithIcon.parameters?.docs?.source}}}},"./src/design/atoms/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  border-radius: var(--bs-border-radius);\n}\n\n.badge-button {\n  border-radius: var(--bs-border-radius);\n  display: flex;\n}\n.badge-button:focus, .badge-button:focus-within, .badge-button:hover {\n  outline: var(--focus-outline);\n}\n.badge-button:focus .badge, .badge-button:focus-within .badge, .badge-button:hover .badge {\n  color: inherit;\n}\n\n.badge {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);