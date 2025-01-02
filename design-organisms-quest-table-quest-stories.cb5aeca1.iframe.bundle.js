(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[2394],{"./src/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-audio","file-import","file","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","diagram-project","hand-fist","house","handshake","hotel","hourglass-half","info-circle","info","location-dot","lock","link","magic","male","minus","monument","moon","mountain","paw","pen","pencil","place-of-worship","plus","question-circle","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;if(SOLID_ICONS_SET.has(ico))return"fa-solid";if(BRAND_ICON_SET.has(ico))return"fa-brands";if(REGULAR_ICON_SET.has(ico))return"fa-regular";{const e=new Error("Invalid icon: "+icon);return console.error(e),"fa-solid"}}},"./src/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon())))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:'@if (iconType()) {\n  <div class="{{ iconType() }} fa-{{ icon() }}"></div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],standalone:!0,styles:[icon_componentngResource_default()]})],IconComponent)},"./src/design/organisms/quest-table/quest-table.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>QuestTableComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var quest_table_componentngResource=__webpack_require__("./src/design/organisms/quest-table/quest-table.component.scss?ngResource"),quest_table_componentngResource_default=__webpack_require__.n(quest_table_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts");let QuestTableComponent=class QuestTableComponent{constructor(){this.DISPLAY_STATES=["Default","All","Completed","Failed","On hold","In progress"],this.STATE_ICON_MAPPING={Completed:"square-check","On Hold":"hourglass-half",Failed:"times","In progress":"spinner"},this.STATE_TABLE_TYPE_MAPPING={Completed:"success","On Hold":"warning",Failed:"danger","In progress":""},this.state="Default"}ngOnInit(){this.filterQuests()}ngOnChanges(){this.filterQuests()}filterQuests(){this.displayQuests=this.quests.filter((quest=>this.shouldDisplayQuest(quest)))}shouldDisplayQuest(quest){if("all"===this.state.toLowerCase())return!0;if(this.state.toLowerCase()===quest.status?.toLowerCase())return!0;const isDefaultState="Default"===this.state,isMatchingDefault=["in progress","on hold"].includes(quest.status?.toLowerCase());return isDefaultState&&isMatchingDefault}static{this.propDecorators={questTaker:[{type:core.Input}],quests:[{type:core.Input}]}}};QuestTableComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-quest-table",template:'<div class="container">\n  <div class="row heading">\n    \x3c!-- Outer Table Heading --\x3e\n    <h5 class="col-sm-9 heading__text">{{ questTaker }}\'s Quests</h5>\n\n    \x3c!-- Filterselect --\x3e\n    <select\n      class="col-sm-3 heading__select"\n      [(ngModel)]="state"\n      (change)="filterQuests()"\n    >\n      @for (state of DISPLAY_STATES; track state) {\n        <option [value]="state">\n          {{ state }}\n        </option>\n      }\n    </select>\n  </div>\n\n  <div class="row">\n    <table\n      class="table table-dark table-striped"\n      style="\n        --bs-table-bg: var(--table-bg);\n        --bs-table-striped-bg: var(--table-striped-bg);\n      "\n    >\n      \x3c!-- Inner Table Heading --\x3e\n      <thead>\n        <tr>\n          <th class="table__element" scope="col">Name</th>\n          <th class="table__element table__element--desktop-only" scope="col">\n            Description\n          </th>\n          <th class="table__element" scope="col">Status</th>\n        </tr>\n      </thead>\n\n      \x3c!-- Table Body --\x3e\n      <tbody [id]="questTaker + \'-quests\'">\n        @for (quest of displayQuests; track $index) {\n          <tr>\n            \x3c!-- Quest Name Column --\x3e\n            <td class="table__element">\n              <a [routerLink]="quest.getAbsoluteRouterUrl()">\n                <strong>{{ quest.name }}</strong>\n              </a>\n            </td>\n\n            \x3c!-- Quest Abstract --\x3e\n            <td class="table__element table__element--desktop-only">\n              {{ quest.abstract }}\n            </td>\n\n            \x3c!-- Quest Status --\x3e\n            @if (quest.status) {\n              <td\n                class="table__element--status table-{{\n                  STATE_TABLE_TYPE_MAPPING[quest.status]\n                }}"\n              >\n                <app-icon [icon]="STATE_ICON_MAPPING[quest.status]"></app-icon>\n              </td>\n            } @else {\n              <ng-container *ngTemplateOutlet="emptyColumn" />\n            }\n          </tr>\n        }\n      </tbody>\n    </table>\n  </div>\n</div>\n\n<ng-template #emptyColumn>\n  <td></td>\n</ng-template>\n',standalone:!0,imports:[fesm2022_forms.YN,router.Wk,icon_component.R,common.NgTemplateOutlet],styles:[quest_table_componentngResource_default()]})],QuestTableComponent)},"./src/design/organisms/quest-table/quest.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoQuests:()=>NoQuests,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/QuestTableComponent",component:__webpack_require__("./src/design/organisms/quest-table/quest-table.component.ts").w,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_2__.c],declarations:[]})],args:{questTaker:"Potato",quests:Array(5).fill({article_type:"quest",name:"The Black Knight",status:"In progress",abstract:"A black knight that does things",name_full:"The Black Knight - A quest to defeat a powerful undead warrior",description:"The players are hired to find and defeat the Black Knight, a powerful undead warrior who is terrorizing the countryside",update_datetime:"2022-05-10",campaign_details:{id:456,name:"Medieval Fantasy RPG"},getAbsoluteRouterUrl:()=>"/quests/345",pk:345})}},Template=args=>({props:{...args}}),Default=Template.bind({});Default.args={};const NoQuests=Template.bind({});NoQuests.args={quests:[]};const __namedExportsOrder=["Default","NoQuests"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"(args: QuestTableComponent) => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}},NoQuests.parameters={...NoQuests.parameters,docs:{...NoQuests.parameters?.docs,source:{originalSource:"(args: QuestTableComponent) => ({\n  props: {\n    ...args\n  }\n})",...NoQuests.parameters?.docs?.source}}}},"./src/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/quest-table/quest-table.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --table-bg: var(--bs-gray-dark);\n  --table-striped-bg: #3a3a3a;\n  --warning-bg-color: rgba(255, 200, 36, 0.3);\n  --success-bg-color: rgba(147, 196, 125, 0.3);\n  --danger-bg-color: rgba(206, 10, 10, 0.3);\n}\n\n.heading {\n  margin-bottom: var(--spacer-3);\n}\n.heading__text {\n  margin-top: auto;\n  margin-bottom: auto;\n  padding-left: var(--spacer-0) !important;\n  padding-right: var(--spacer-0) !important;\n}\n.heading__select {\n  background-color: var(--table-striped-bg);\n  height: 2rem;\n  border: 1px solid var(--table-bg);\n  border-radius: var(--bs-border-radius);\n  color: var(--bs-white);\n}\n\n.table {\n  padding-bottom: var(--spacer-2);\n}\n.table__element {\n  padding: var(--spacer-3) var(--spacer-2) !important;\n}\n.table__element :hover {\n  color: var(--bs-link-hover-color);\n}\n.table__element--desktop-only {\n  display: none;\n}\n@media (min-width: 768px) {\n  .table__element--desktop-only {\n    display: table-cell;\n  }\n}\n.table__element--status {\n  text-align: center;\n  width: var(--spacer-0);\n  padding-left: var(--spacer-1);\n  padding-right: var(--spacer-1);\n}\n.table-warning {\n  --bs-table-bg: var(--warning-bg-color) !important;\n  --bs-table-accent-bg: var(--warning-bg-color) !important;\n  --bs-table-striped-bg: var(--warning-bg-color) !important;\n  color: var(--bs-white) !important;\n}\n.table-success {\n  --bs-table-bg: var(--success-bg-color) !important;\n  --bs-table-accent-bg: var(--success-bg-color) !important;\n  --bs-table-striped-bg: var(--success-bg-color) !important;\n  color: var(--bs-white) !important;\n}\n.table-danger {\n  --bs-table-bg: var(--danger-bg-color) !important;\n  --bs-table-accent-bg: var(--danger-bg-color) !important;\n  --bs-table-striped-bg: var(--danger-bg-color) !important;\n  color: var(--bs-white) !important;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);