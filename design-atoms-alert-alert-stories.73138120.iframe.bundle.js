(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8152],{"./src/design/atoms/_models/button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C9:()=>toElementKind,bV:()=>ELEMENT_TYPES});const ELEMENT_TYPES=["PRIMARY","SECONDARY","DARK","DANGER","WARNING","LIGHT","INFO"];function toElementKind(kind){switch(kind){case"PRIMARY":case"SECONDARY":case"DARK":case"DANGER":case"WARNING":case"LIGHT":case"INFO":return kind;case"PRIMARY-OUTLINE":case"SECONDARY-OUTLINE":case"DARK-OUTLINE":case"DANGER-OUTLINE":case"WARNING-OUTLINE":case"LIGHT-OUTLINE":case"INFO-OUTLINE":return kind.replace("-OUTLINE","");case"NONE":return}}},"./src/design/atoms/alert/alert.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{C:()=>AlertComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var alert_componentngResource=__webpack_require__("./src/design/atoms/alert/alert.component.scss?ngResource"),alert_componentngResource_default=__webpack_require__.n(alert_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let AlertComponent=class AlertComponent{constructor(){this.kind=core.input.required()}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}]}}};AlertComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-alert",template:"<div\n  class=\"alert\"\n  [ngClass]=\"{\n    'alert-primary': kind() === 'PRIMARY',\n    'alert-secondary': kind() === 'SECONDARY',\n    'alert-dark': kind() === 'DARK',\n    'alert-danger': kind() === 'DANGER',\n    'alert-warning': kind() === 'WARNING',\n    'alert-info': kind() === 'INFO',\n    'alert-light': kind() === 'LIGHT',\n  }\"\n>\n  <ng-content> </ng-content>\n</div>\n",imports:[common.NgClass],standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[alert_componentngResource_default()]})],AlertComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/design/atoms/alert/alert.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DANGER:()=>DANGER,DARK:()=>DARK,Default:()=>Default,INFO:()=>INFO,LIGHT:()=>LIGHT,PRIMARY:()=>PRIMARY,SECONDARY:()=>SECONDARY,WARNING:()=>WARNING,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_models_button__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/design/atoms/_models/button.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/AlertComponent",component:__webpack_require__("./src/design/atoms/alert/alert.component.ts").C,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[],declarations:[]})],args:{text:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci temporibus quas, quam veniam beatae necessitatibus. Ut cupiditate illo harum debitis. Temporibus accusamus, ab exercitationem vero assumenda saepe recusandae nostrum similique.",kind:"PRIMARY"}},Default={},Stories=_models_button__WEBPACK_IMPORTED_MODULE_2__.bV.reduce(((acc,type)=>(acc[type]={args:{type}},acc)),{}),PRIMARY=Stories.PRIMARY,SECONDARY=Stories.SECONDARY,DANGER=Stories.DANGER,DARK=Stories.DARK,INFO=Stories.INFO,LIGHT=Stories.LIGHT,WARNING=Stories.WARNING,__namedExportsOrder=["Default","PRIMARY","SECONDARY","DANGER","DARK","INFO","LIGHT","WARNING"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}},PRIMARY.parameters={...PRIMARY.parameters,docs:{...PRIMARY.parameters?.docs,source:{originalSource:"Stories.PRIMARY",...PRIMARY.parameters?.docs?.source}}},SECONDARY.parameters={...SECONDARY.parameters,docs:{...SECONDARY.parameters?.docs,source:{originalSource:"Stories.SECONDARY",...SECONDARY.parameters?.docs?.source}}},DANGER.parameters={...DANGER.parameters,docs:{...DANGER.parameters?.docs,source:{originalSource:"Stories.DANGER",...DANGER.parameters?.docs?.source}}},DARK.parameters={...DARK.parameters,docs:{...DARK.parameters?.docs,source:{originalSource:"Stories.DARK",...DARK.parameters?.docs?.source}}},INFO.parameters={...INFO.parameters,docs:{...INFO.parameters?.docs,source:{originalSource:"Stories.INFO",...INFO.parameters?.docs?.source}}},LIGHT.parameters={...LIGHT.parameters,docs:{...LIGHT.parameters?.docs,source:{originalSource:"Stories.LIGHT",...LIGHT.parameters?.docs?.source}}},WARNING.parameters={...WARNING.parameters,docs:{...WARNING.parameters?.docs,source:{originalSource:"Stories.WARNING",...WARNING.parameters?.docs?.source}}}},"./src/design/atoms/alert/alert.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);