(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[1875],{"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";throw new Error("Invalid icon: "+icon)}},"./src/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'<div class="{{ iconType() }} fa-{{ icon() }}"></div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[icon_componentngResource_default()]})],IconComponent)},"./src/design/molecules/_models/search-preferences.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{y:()=>DEFAULT_SEARCH_PREFERENCES});const DEFAULT_SEARCH_PREFERENCES=[{label:"Character",active:!1,color:"--character-color"},{label:"Creature",active:!1,color:"--creature-color"},{label:"Diaryentry",active:!1,color:"--diaryentry-color"},{label:"Encounter",active:!1,color:"--encounter-color"},{label:"Item",active:!1,color:"--item-color"},{label:"Location",active:!1,color:"--location-color"},{label:"Map",active:!1,color:"--map-color"},{label:"Organization",active:!1,color:"--organization-color"},{label:"Quest",active:!1,color:"--quest-color"},{label:"SessionAudio",active:!1,color:"--sessionaudio-color"},{label:"Rules",active:!1,color:"--rules-color"},{label:"Spell",active:!1,color:"--spell-color"}]},"./src/design/molecules/sidebar-legend/sidebar-legend.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{N:()=>SidebarLegendComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var sidebar_legend_componentngResource=__webpack_require__("./src/design/molecules/sidebar-legend/sidebar-legend.component.scss?ngResource"),sidebar_legend_componentngResource_default=__webpack_require__.n(sidebar_legend_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var selectable_entry_componentngResource=__webpack_require__("./src/design/atoms/selectable-entry/selectable-entry.component.scss?ngResource"),selectable_entry_componentngResource_default=__webpack_require__.n(selectable_entry_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts");let SelectableEntryComponent=class SelectableEntryComponent{constructor(){this.label=core.input.required(),this.isSelectable=(0,core.input)(!1),this.isActive=(0,core.input)(!1),this.borderColorVar=(0,core.input)("secondary"),this.entryClick=(0,core.output)()}static{this.propDecorators={label:[{type:core.Input,args:[{isSignal:!0,alias:"label",required:!0,transform:void 0}]}],isSelectable:[{type:core.Input,args:[{isSignal:!0,alias:"isSelectable",required:!1,transform:void 0}]}],isActive:[{type:core.Input,args:[{isSignal:!0,alias:"isActive",required:!1,transform:void 0}]}],borderColorVar:[{type:core.Input,args:[{isSignal:!0,alias:"borderColorVar",required:!1,transform:void 0}]}],entryClick:[{type:core.Output,args:["entryClick"]}]}}};SelectableEntryComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-selectable-entry",standalone:!0,imports:[common.NgClass,icon_component.R,common.NgTemplateOutlet],template:'@if (isSelectable()) {\n  <button\n    class="w-100 hover-highlight"\n    (click)="entryClick.emit(isActive() ? \'INACTIVE\' : \'ACTIVE\')"\n  >\n    <ng-container *ngTemplateOutlet="entry"></ng-container>\n  </button>\n} @else {\n  <ng-container *ngTemplateOutlet="entry"></ng-container>\n}\n\n<ng-template #entry>\n  <div\n    class="sidebar"\n    [ngClass]="{\n      highlight: isActive(),\n    }"\n  >\n    <div\n      class="sidebar-border"\n      [style]="\'border-left-color: var(\' + borderColorVar() + \')\'"\n    >\n      <span class="mx-1"> {{ label() }} </span>\n    </div>\n\n    @if (isActive()) {\n      <app-icon [icon]="\'times\'"></app-icon>\n    }\n  </div>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[selectable_entry_componentngResource_default()]})],SelectableEntryComponent);var search_preferences=__webpack_require__("./src/design/molecules/_models/search-preferences.ts");let SidebarLegendComponent=class SidebarLegendComponent{constructor(){this.interactable=(0,core.input)(!1),this.sidebarEntries=(0,core.input)(search_preferences.y),this.sidebarChange=new core.EventEmitter}onSidebarEntryClick(clickedOptionIndex){if(!this.interactable)return;const entry=this.sidebarEntries()[clickedOptionIndex];entry.active=!entry.active,this.sidebarChange.emit(this.sidebarEntries())}static{this.ctorParameters=()=>[]}static{this.propDecorators={interactable:[{type:core.Input,args:[{isSignal:!0,alias:"interactable",required:!1,transform:void 0}]}],sidebarEntries:[{type:core.Input,args:[{isSignal:!0,alias:"sidebarEntries",required:!1,transform:void 0}]}],sidebarChange:[{type:core.Output}]}}};SidebarLegendComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-sidebar-legend",template:'<div class="container">\n  <div class="row">\n    @for (option of sidebarEntries(); track $index) {\n      <app-selectable-entry\n        class="col-6 col-sm-3 row-entry"\n        [label]="option.label"\n        [borderColorVar]="option.color"\n        [isActive]="option.active"\n        [isSelectable]="true"\n        (entryClick)="onSidebarEntryClick($index)"\n      ></app-selectable-entry>\n    }\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[SelectableEntryComponent],styles:[sidebar_legend_componentngResource_default()]})],SidebarLegendComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{XI:()=>action});var external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("storybook/internal/preview-api"),external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_=__webpack_require__("storybook/internal/preview-errors"),external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),v4=__webpack_require__("./node_modules/uuid/dist/esm-browser/v4.js"),ADDON_ID="storybook/actions",EVENT_ID=`${ADDON_ID}/action-event`,config={depth:10,clearOnStoryChange:!0,limit:50},findProto=(obj,callback)=>{let proto=Object.getPrototypeOf(obj);return!proto||callback(proto)?proto:findProto(proto,callback)},serializeArg=a=>{if("object"==typeof(e=a)&&e&&findProto(e,(proto=>/^Synthetic(?:Base)?Event$/.test(proto.constructor.name)))&&"function"==typeof e.persist){let e=Object.create(a.constructor.prototype,Object.getOwnPropertyDescriptors(a));e.persist();let viewDescriptor=Object.getOwnPropertyDescriptor(e,"view"),view=viewDescriptor?.value;return"object"==typeof view&&"Window"===view?.constructor.name&&Object.defineProperty(e,"view",{...viewDescriptor,value:Object.create(view.constructor.prototype)}),e}var e;return a},generateId=()=>"object"==typeof crypto&&"function"==typeof crypto.getRandomValues?(0,v4.A)():Date.now().toString(36)+Math.random().toString(36).substring(2);function action(name,options={}){let actionOptions={...config,...options},handler=function(...args){if(options.implicit){let storyRenderer=("__STORYBOOK_PREVIEW__"in external_STORYBOOK_MODULE_GLOBAL_.global?external_STORYBOOK_MODULE_GLOBAL_.global.__STORYBOOK_PREVIEW__:void 0)?.storyRenders.find((render=>"playing"===render.phase||"rendering"===render.phase));if(storyRenderer){let deprecated=!window?.FEATURES?.disallowImplicitActionsInRenderV8,error=new external_STORYBOOK_MODULE_CORE_EVENTS_PREVIEW_ERRORS_.ImplicitActionsDuringRendering({phase:storyRenderer.phase,name,deprecated});if(!deprecated)throw error;console.warn(error)}}let channel=external_STORYBOOK_MODULE_PREVIEW_API_.addons.getChannel(),id=generateId(),serializedArgs=args.map(serializeArg),normalizedArgs=args.length>1?serializedArgs:serializedArgs[0],actionDisplayToEmit={id,count:0,data:{name,args:normalizedArgs},options:{...actionOptions,maxDepth:5+(actionOptions.depth||3),allowFunction:actionOptions.allowFunction||!1}};channel.emit(EVENT_ID,actionDisplayToEmit)};return handler.isAction=!0,handler.implicit=options.implicit,handler}},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/design/molecules/sidebar-legend/sidebar-legend.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_models_search_preferences__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/design/molecules/_models/search-preferences.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/SidebarLegendComponent",component:__webpack_require__("./src/design/molecules/sidebar-legend/sidebar-legend.component.ts").N,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({})],args:{interactable:!0,sidebarEntries:_models_search_preferences__WEBPACK_IMPORTED_MODULE_2__.y},parameters:{backgrounds:{default:"grey"}}},Default=(args=>({props:{...args,sidebarChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.XI)("sidebarChange")}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    sidebarChange: action('sidebarChange')\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/atoms/selectable-entry/selectable-entry.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".sidebar {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: var(--spacer-2);\n  padding-bottom: var(--spacer-2);\n  padding-left: calc(var(--bs-gutter-x) * 0.5);\n  padding-right: calc(var(--bs-gutter-x) * 0.5);\n}\n\n.sidebar-border {\n  display: flex;\n  border-left: solid 10px;\n}\n\nbutton {\n  outline: unset;\n}\nbutton:hover {\n  color: var(--bs-white);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/molecules/sidebar-legend/sidebar-legend.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".row-entry {\n  padding: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);