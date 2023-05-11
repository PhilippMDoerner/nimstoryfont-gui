(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[1682],{"./src/app/design/atoms/badge/badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Dark:()=>Dark,Default:()=>Default,Info:()=>Info,Light:()=>Light,Secondary:()=>Secondary,Warning:()=>Warning,WithIcon:()=>WithIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/BadgeComponent",component:__webpack_require__("./src/app/design/atoms/badge/badge.component.ts").F,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[],declarations:[_icon_icon_component__WEBPACK_IMPORTED_MODULE_1__.o]})],args:{text:"BadgeText",type:"PRIMARY",icon:void 0}},Template=args=>({props:{...args}}),Default=Template.bind({});Default.args={};const Secondary=Template.bind({});Secondary.args={type:"SECONDARY"};const Dark=Template.bind({});Dark.args={type:"DARK"};const Warning=Template.bind({});Warning.args={type:"WARNING"};const Danger=Template.bind({});Danger.args={type:"DANGER"};const Light=Template.bind({});Light.args={type:"LIGHT"};const Info=Template.bind({});Info.args={type:"INFO"};const WithIcon=Template.bind({});WithIcon.args={icon:"times"}},"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>ALL_SOLID_ICONS,f:()=>ALL_REGULAR_ICONS});const ALL_REGULAR_ICONS=["comments","magic","times","map","file-audio-o","book","user","user-plus","user-circle","group","envelope-o","database","trash","plus","table","check","refresh","pencil","arrow-left","arrow-right","hourglass","spinner","search","volume-up","clock-o","info-circle","calendar","lock","plus-square","home","th-list","chevron-down","chevron-up","chevron-left","chevron-right","hammer","upload"],ALL_SOLID_ICONS=["male","book-open","compass","sitemap","question-circle","hand-sparkles","calendar-alt","globe-americas","dragon","sign-out-alt","user-cog","desktop","download","redo-alt","cog","cut","file","copy","clipboard","up-long","down-long"]},"./src/app/design/atoms/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>BadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,badge_componentngResource=__webpack_require__("./src/app/design/atoms/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let BadgeComponent=((_class=class BadgeComponent{}).propDecorators={type:[{type:core.Input}],text:[{type:core.Input}],icon:[{type:core.Input}]},_class);BadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-badge",template:"<div \n  class=\"badge\"\n  [ngClass]=\"{\n    'bg-primary': type === 'PRIMARY',\n    'bg-secondary': type === 'SECONDARY',\n    'bg-dark': type === 'DARK',\n    'bg-danger': type === 'DANGER',\n    'bg-warning': type === 'WARNING',\n    'bg-light': type === 'LIGHT',\n    'bg-info': type === 'INFO',\n  }\"\n>\n  <app-icon \n    *ngIf=\"icon\"\n    [icon]=\"icon\"\n  ></app-icon>\n  {{text}}\n</div>",styles:[badge_componentngResource_default()]})],BadgeComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=((_class=class IconComponent{constructor(){this.iconType="REGULAR"}ngOnChanges(){const isSolidIcon=icon.I.includes(this.icon);this.iconType=isSolidIcon?"SOLID":"REGULAR"}}).propDecorators={icon:[{type:core.Input}]},_class);IconComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-icon",template:"<div \n  [ngClass]=\"{\n    'fas': iconType === 'SOLID',\n    'fa': iconType === 'REGULAR'\n  }\"\n  class=\"fa-{{icon}}\"\n></div>\n",styles:[icon_componentngResource_default()]})],IconComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/atoms/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".badge:hover {\n  color: inherit;\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);