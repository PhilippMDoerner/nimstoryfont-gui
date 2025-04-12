(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[4437],{"./src/app/design/organisms/image-grid/image-grid.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>ImageGridComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_grid_componentngResource=__webpack_require__("./src/app/design/organisms/image-grid/image-grid.component.scss?ngResource"),image_grid_componentngResource_default=__webpack_require__.n(image_grid_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");let ImageGridComponent=class ImageGridComponent{constructor(){this.EMPTY_IMAGE_URL="",this.entries=core.input.required(),this.serverUrl=core.input.required(),this.columnCount=(0,core.computed)((()=>{switch(this.entries().length){case 1:return 1;case 2:case 4:return 2;default:return 3}}))}static{this.propDecorators={entries:[{type:core.Input,args:[{isSignal:!0,alias:"entries",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}]}}};ImageGridComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-grid",template:'<div class="container-fluid">\n  @if (entries() != null) {\n    @if (entries().length > 0) {\n      <ul class="row image-grid">\n        @for (entry of entries(); track $index) {\n          <li\n            class="image-grid__container"\n            [ngClass]="{\n              \'col-lg-12\': columnCount() === 1,\n              \'col-sm-6\': columnCount() === 2,\n              \'col-md-6 col-lg-4\': columnCount() === 3,\n            }"\n          >\n            <a\n              class="image-grid__entry entry"\n              [style.background-image]="\n                \'url(\' + serverUrl() + entry.imageUrl + \')\'\n              "\n              [routerLink]="entry.link"\n              [attr.aria-label]="entry.ariaLabel"\n            >\n              <div class="entry__overlay">\n                <div class="fs-4 entry__heading heading">\n                  @if (entry.icon) {\n                    <img\n                      class="heading__icon"\n                      [src]="serverUrl() + entry.icon"\n                      [alt]="\'\'"\n                    />\n                  }\n                  {{ entry.label }}\n                </div>\n              </div>\n            </a>\n          </li>\n        }\n      </ul>\n    } @else {\n      <ng-container *ngTemplateOutlet="noEntries" />\n    }\n  } @else {\n    <ng-container *ngTemplateOutlet="loading" />\n  }\n</div>\n\n<ng-template #loading> </ng-template>\n\n<ng-template #noEntries>\n  <div class="w-100 h-100 position-relative d-flex justify-content-center">\n    <img\n      class="w-100 h-100"\n      [ngSrc]="serverUrl() + EMPTY_IMAGE_URL"\n      alt="Image of a red dragon frame"\n      priority\n      fill\n    />\n    <div class="position-absolute frame-text">\n      <h4 class="mb-1">You have not yet been invited into any campaign.</h4>\n      <div>\n        Please inform your DM or the person within your group administrating the\n        webserver to add you to the required permission group.\n      </div>\n    </div>\n  </div>\n</ng-template>\n',imports:[common.NgClass,common.NgOptimizedImage,router.Wk],styles:[image_grid_componentngResource_default()]})],ImageGridComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/organisms/image-grid/image-grid.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,FiveEntries:()=>FiveEntries,FourEntries:()=>FourEntries,ThreeEntries:()=>ThreeEntries,TwoEntries:()=>TwoEntries,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const dummyEntries=[{entryType:"CHARACTER",icon:"user",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"John Smith",subText:"Level 10 Paladin",updateDatetime:"2022-04-28T14:30:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"CREATURE",icon:"dragon",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"Red Dragon",subText:"CR 10",updateDatetime:"2022-04-27T10:15:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"DIARYENTRY",icon:"book-open",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"Adventures in the Underdark",subText:"Session 3",updateDatetime:"2022-04-26T18:00:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"ENCOUNTER",icon:"dice",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"Orc Ambush",subText:"Difficulty: Hard",updateDatetime:"2022-04-25T15:30:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"ITEM",icon:"magic",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"Sword of Sharpness",subText:"Legendary Weapon",updateDatetime:"2022-04-24T12:00:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"LOCATION",icon:"map-marker-alt",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"The Forbidden Forest",subText:"Home of the Treants",updateDatetime:"2022-04-23T09:45:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"MAP",icon:"map",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"World Map",subText:"All regions",updateDatetime:"2022-04-22T17:30:00Z",image:"/media/campaign_backgrounds/bg.jpg"},{entryType:"MARKER_TYPE",icon:"map-marker",link:"https://images.dog.ceo/breeds/schnauzer-giant/n02097130_878.jpg",title:"City",subText:"Capital of the Kingdom",updateDatetime:"2022-04-21T14:15:00Z",image:"/media/campaign_backgrounds/bg.jpg"}],__WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/ImageGridComponent",component:__webpack_require__("./src/app/design/organisms/image-grid/image-grid.component.ts").l,args:{entries:dummyEntries,imageProp:"image",labelProp:"title",serverUrl:"https://www.aldrune.com"},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({declarations:[],imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_3__.c]})]},Template=args=>({props:{...args,entryClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("entryClick")}}),Default=Template.bind({});Default.args={};const TwoEntries=Template.bind({});TwoEntries.args={entries:dummyEntries.slice(0,2)};const ThreeEntries=Template.bind({});ThreeEntries.args={entries:dummyEntries.slice(0,3)};const FourEntries=Template.bind({});FourEntries.args={entries:dummyEntries.slice(0,4)};const FiveEntries=Template.bind({});FiveEntries.args={entries:dummyEntries.slice(0,5)};const __namedExportsOrder=["Default","TwoEntries","ThreeEntries","FourEntries","FiveEntries"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    entryClick: action('entryClick')\n  }\n})",...Default.parameters?.docs?.source}}},TwoEntries.parameters={...TwoEntries.parameters,docs:{...TwoEntries.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    entryClick: action('entryClick')\n  }\n})",...TwoEntries.parameters?.docs?.source}}},ThreeEntries.parameters={...ThreeEntries.parameters,docs:{...ThreeEntries.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    entryClick: action('entryClick')\n  }\n})",...ThreeEntries.parameters?.docs?.source}}},FourEntries.parameters={...FourEntries.parameters,docs:{...FourEntries.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    entryClick: action('entryClick')\n  }\n})",...FourEntries.parameters?.docs?.source}}},FiveEntries.parameters={...FiveEntries.parameters,docs:{...FiveEntries.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    entryClick: action('entryClick')\n  }\n})",...FiveEntries.parameters?.docs?.source}}}},"./src/app/design/organisms/image-grid/image-grid.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --image-height: 90vh;\n}\n\n.container-fluid {\n  height: var(--image-height);\n}\n\n.image-grid {\n  height: 100%;\n  padding-left: 0;\n  list-style-type: none;\n}\n.image-grid__container {\n  padding: 0;\n}\n.image-grid__entry {\n  cursor: pointer;\n}\n\n.entry {\n  position: relative;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-position: center;\n  min-height: 30vh;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  opacity: 0.75;\n  transition: opacity 0.2s ease-in-out;\n}\n.entry:hover, .entry:focus-visible {\n  outline: none;\n  opacity: 1;\n}\n.entry:hover .entry__heading, .entry:focus-visible .entry__heading {\n  color: var(--bs-link-hover-color);\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n.entry__overlay {\n  position: absolute;\n  background-color: var(--wiki-bg-transparent);\n  z-index: 1;\n  width: 100%;\n  min-height: 4rem;\n  line-break: anywhere;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.entry__heading {\n  margin-bottom: var(--spacer-0);\n  padding-left: var(--spacer-3);\n  padding-right: var(--spacer-3);\n}\n\n.heading__icon {\n  height: var(--spacer-5);\n  width: var(--spacer-5);\n  border-radius: var(--bs-border-radius);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);