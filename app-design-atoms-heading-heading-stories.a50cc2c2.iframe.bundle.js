(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8434],{"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/atoms/heading/heading.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>heading_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var heading_componentngResource=__webpack_require__("./src/app/design/atoms/heading/heading.component.scss?ngResource"),heading_componentngResource_default=__webpack_require__.n(heading_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HeadingComponent=class HeadingComponent{constructor(){this.headingLevel=core.input.required()}static{this.propDecorators={headingLevel:[{type:core.Input,args:[{isSignal:!0,alias:"headingLevel",required:!0,transform:void 0}]}]}}};HeadingComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-heading",standalone:!0,imports:[common.NgTemplateOutlet],template:'@switch (headingLevel()) {\n  @case ("h1") {\n    <h1 class="heading">\n      <ng-container [ngTemplateOutlet]="content"></ng-container>\n    </h1>\n  }\n  @case ("h2") {\n    <h2 class="heading">\n      <ng-container [ngTemplateOutlet]="content"></ng-container>\n    </h2>\n  }\n  @case ("h3") {\n    <h3 class="heading">\n      <ng-container [ngTemplateOutlet]="content"></ng-container>\n    </h3>\n  }\n  @case ("h4") {\n    <h4 class="heading">\n      <ng-container [ngTemplateOutlet]="content"></ng-container>\n    </h4>\n  }\n  @case ("h5") {\n    <h5 class="heading">\n      <ng-container [ngTemplateOutlet]="content"></ng-container>\n    </h5>\n  }\n  @case ("h6") {\n    <h6 class="heading">\n      <ng-container [ngTemplateOutlet]="content"></ng-container>\n    </h6>\n  }\n}\n\n<ng-template #content>\n  <ng-content></ng-content>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[heading_componentngResource_default()]})],HeadingComponent);const heading_stories={title:"DesignSystem/Atoms/HeadingComponent",component:HeadingComponent,args:{text:"SomeText",headingLevel:"h5"},argTypes:{headingLevel:{control:"select",options:["h1","h2","h3","h4","h5","h6"]}}},Default=(args=>({props:{...args},template:'\n    <div class="my-5">\n      <app-heading [headingLevel]="headingLevel">\n        {{text}}\n      </app-heading>\n    </div>\n  '})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  props: {\n    ...args\n  },\n  template: `\n    <div class="my-5">\n      <app-heading [headingLevel]="headingLevel">\n        {{text}}\n      </app-heading>\n    </div>\n  `\n})',...Default.parameters?.docs?.source}}}},"./src/app/design/atoms/heading/heading.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);