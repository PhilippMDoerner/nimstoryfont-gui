(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[7260],{"./src/app/design/molecules/sidebar-legend/sidebar-legend.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_atoms__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/design/atoms/index.ts"),_models_search_preferences__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/app/design/molecules/_models/search-preferences.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/SidebarLegendComponent",component:__webpack_require__("./src/app/design/molecules/sidebar-legend/sidebar-legend.component.ts").Q,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_atoms__WEBPACK_IMPORTED_MODULE_2__.cg]})],args:{interactable:!0,sidebarEntries:_models_search_preferences__WEBPACK_IMPORTED_MODULE_3__.p},parameters:{backgrounds:{default:"grey"}}},Default=(args=>({props:{...args,sidebarChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("sidebarChange")}})).bind({});Default.args={}},"./src/app/design/molecules/_models/search-preferences.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>DEFAULT_SEARCH_PREFERENCES});const DEFAULT_SEARCH_PREFERENCES=[{label:"Character",active:!1,color:"--character-color"},{label:"Creature",active:!1,color:"--creature-color"},{label:"Diaryentry",active:!1,color:"--diaryentry-color"},{label:"Encounter",active:!1,color:"--encounter-color"},{label:"Item",active:!1,color:"--item-color"},{label:"Location",active:!1,color:"--location-color"},{label:"Map",active:!1,color:"--map-color"},{label:"Organization",active:!1,color:"--organization-color"},{label:"Quest",active:!1,color:"--quest-color"},{label:"SessionAudio",active:!1,color:"--sessionaudio-color"},{label:"Rules",active:!1,color:"--rules-color"},{label:"Spell",active:!1,color:"--spell-color"}]},"./src/app/design/molecules/sidebar-legend/sidebar-legend.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>SidebarLegendComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,sidebar_legend_componentngResource=__webpack_require__("./src/app/design/molecules/sidebar-legend/sidebar-legend.component.scss?ngResource"),sidebar_legend_componentngResource_default=__webpack_require__.n(sidebar_legend_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),search_preferences=__webpack_require__("./src/app/design/molecules/_models/search-preferences.ts");let SidebarLegendComponent=((_class=class SidebarLegendComponent{constructor(){this.interactable=!1,this.sidebarEntries=search_preferences.p,this.sidebarChange=new core.EventEmitter}onSidebarEntryClick(clickedOptionIndex){if(!this.interactable)return;const entry=this.sidebarEntries[clickedOptionIndex];entry.active=!entry.active,this.sidebarChange.emit(this.sidebarEntries)}}).ctorParameters=()=>[],_class.propDecorators={interactable:[{type:core.Input}],sidebarEntries:[{type:core.Input}],sidebarChange:[{type:core.Output}]},_class);SidebarLegendComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-sidebar-legend",template:'<div class="container">\n  <div class="row">\n    <ng-container *ngFor="let option of sidebarEntries; let index = index">\n        <div class="col-6 col-sm-3 row-entry" \n          [ngClass]="{\n              \'hover-highlight pointer\': interactable, \n              \'highlight\': option.active,\n          }"\n          (click)="onSidebarEntryClick(index)"\n        >\n            <div class="sidebar-border" [style]="\'border-left-color: var(\' + option.color + \')\'">\n                <span class="mx-1"> {{option.label}} </span>\n            </div>\n            \n            <app-icon *ngIf="option.active" [icon]="\'times\'"></app-icon>\n        </div>\n    </ng-container>\n  </div>  \n</div>\n',styles:[sidebar_legend_componentngResource_default()]})],SidebarLegendComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/app/design/molecules/sidebar-legend/sidebar-legend.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".sidebar-border {\n  border-left: solid 10px;\n}\n\n.row-entry {\n  padding-top: var(--spacer-2);\n  padding-bottom: var(--spacer-2);\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);