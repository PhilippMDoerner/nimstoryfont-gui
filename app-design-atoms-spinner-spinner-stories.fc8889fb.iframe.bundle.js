(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3862],{"./src/app/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/atoms/spinner/spinner.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/SpinnerComponent",component:__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts").t,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[]})],args:{thickness:24}},Default=(args=>({props:{...args},template:"\n    <h4> <strong> Note </strong>: Thickness is controlled via CSS variable 'thickness' </h4>\n    <app-spinner style=\"--thickness:{{thickness}}px;\"></app-spinner>\n  "})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: SpinnerComponent) => ({\n  props: {\n    ...args\n  },\n  template: `\n    <h4> <strong> Note </strong>: Thickness is controlled via CSS variable 'thickness' </h4>\n    <app-spinner style=\"--thickness:{{thickness}}px;\"></app-spinner>\n  `\n})",...Default.parameters?.docs?.source}}}},"./src/app/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);