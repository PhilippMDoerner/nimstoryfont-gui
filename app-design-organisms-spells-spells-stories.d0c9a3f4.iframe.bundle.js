(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[7263],{"./src/app/_services/article/player-class.service.mock.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>dummyClasses});const dummyClasses=[{name:"Artificer",pk:1,update_datetime:"2021-04-20T14:31:24.033655Z"},{name:"Barbarian",pk:2,update_datetime:"2021-04-20T14:31:27.810089Z"},{name:"Bard",pk:3,update_datetime:"2021-04-20T14:31:36.408312Z"},{name:"Cleric",pk:4,update_datetime:"2021-04-20T14:31:39.485140Z"},{name:"Druid",pk:5,update_datetime:"2021-04-20T14:31:50.431678Z"},{name:"Fighter",pk:6,update_datetime:"2021-04-20T14:31:53.562771Z"},{name:"Monk",pk:7,update_datetime:"2021-04-20T14:31:56.226259Z"},{name:"Paladin",pk:8,update_datetime:"2021-04-20T14:31:58.897597Z"},{name:"Ranger",pk:9,update_datetime:"2021-04-20T14:32:06.986455Z"},{name:"Rogue",pk:10,update_datetime:"2021-04-20T14:32:09.472989Z"},{name:"Sorcerer",pk:11,update_datetime:"2021-04-20T14:32:11.740394Z"},{name:"Warlock",pk:12,update_datetime:"2021-04-20T14:32:13.937586Z"},{name:"Wizard",pk:13,update_datetime:"2021-04-20T14:32:16.277146Z"}]},"./src/app/design/animations/slideDown.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{V4:()=>slideOutFromBottom,sb:()=>slideUpFromBottom,st:()=>slideRight});var _angular_animations__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const inactiveStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({opacity:.2,transform:"translateY(50%)"}),activeStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({opacity:1,transform:"translateY(0%)"}),slideUpFromBottom=((0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-out",activeStyle)]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-in",inactiveStyle)])]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideUpFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-out",activeStyle)])])),slideOutFromBottom=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideOutFromBottom",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("500ms ease-in",inactiveStyle)])]),inactiveSlideRightStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({transform:"translateX(100%)"}),activeSlideRightStyle=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.iF)({transform:"translateX(0%)"}),slideRight=(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.hZ)("slideRight",[(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":enter",[inactiveSlideRightStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("250ms ease-in-out",activeSlideRightStyle)]),(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.kY)(":leave",[activeSlideRightStyle,(0,_angular_animations__WEBPACK_IMPORTED_MODULE_0__.i0)("250ms ease-in-out",inactiveSlideRightStyle)])])},"./src/app/design/organisms/spells/spells.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermissions:()=>NoPermissions,NoSpells:()=>NoSpells,__namedExportsOrder:()=>__namedExportsOrder,default:()=>spells_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),player_class_service_mock=__webpack_require__("./src/app/_services/article/player-class.service.mock.ts"),tslib_es6=(__webpack_require__("./node_modules/tinymce/tinymce.js"),__webpack_require__("./node_modules/tslib/tslib.es6.mjs"));var spells_componentngResource=__webpack_require__("./src/app/design/organisms/spells/spells.component.scss?ngResource"),spells_componentngResource_default=__webpack_require__.n(spells_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),slideDown=__webpack_require__("./src/app/design/animations/slideDown.ts"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),hotkey_directive=__webpack_require__("./src/app/_directives/hotkey.directive.ts"),badge_component=__webpack_require__("./src/app/design/atoms/badge/badge.component.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts");function getPseudoRandomId(max=Number.MAX_SAFE_INTEGER){return Math.floor(Math.random()*max)}var rxjs_operators=__webpack_require__("./src/utils/rxjs-operators.ts");var focus_list_componentngResource=__webpack_require__("./src/app/design/organisms/focus-list/focus-list.component.scss?ngResource"),focus_list_componentngResource_default=__webpack_require__.n(focus_list_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),merge=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/merge.js"),tap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/tap.js"),withLatestFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/withLatestFrom.js"),scan=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/scan.js"),share=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/share.js"),combineLatest=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js"),filter=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/filter.js"),distinctUntilChanged=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/distinctUntilChanged.js"),hotkey_service=__webpack_require__("./src/app/_services/hotkey.service.ts");let FocusListComponent=class FocusListComponent{constructor(){this.entries=core.input.required(),this.disableHotkeyNavigation=(0,core.input)(!1),this.itemTemplate=core.contentChild.required("itemTemplate"),this.separatorTemplate=(0,core.contentChild)("separator"),this.destroyRef=(0,core.inject)(core.DestroyRef),this.hotkeyService=(0,core.inject)(hotkey_service.Q),this.itemContainers=(0,core.viewChildren)("itemContainer"),this.focusItemEvent$=new Subject.B,this.arrowEvents$=(0,merge.h)(this.hotkeyService.watch("ArrowDown").pipe((0,map.T)((()=>({type:"down"})))),this.hotkeyService.watch("ArrowUp").pipe((0,map.T)((()=>({type:"up"}))))),this.focusIndex$=this.deriveFocusItemIndex(),this.scrollAndFocusOnArrowNavigation(this.focusIndex$,(0,rxjs_interop.br)(this.itemContainers),(0,rxjs_interop.br)(this.disableHotkeyNavigation))}deriveFocusItemIndex(){const lastItemIndex=(0,core.computed)((()=>this.entries().length)),focusEvents$=this.focusItemEvent$.pipe((0,map.T)((index=>({type:"selection",nextIndex:index})))),focusIndex$=(0,merge.h)(this.arrowEvents$,focusEvents$).pipe((0,tap.M)((event=>console.log("listevent: ",event))),(0,withLatestFrom.E)((0,rxjs_interop.br)(lastItemIndex)),(0,scan.S)(((priorFocusIndex,[event,lastItemIndex])=>{switch(event.type){case"down":return null!=priorFocusIndex?priorFocusIndex+1:0;case"up":return null!=priorFocusIndex?priorFocusIndex-1:lastItemIndex;case"selection":return event.nextIndex}}),void 0),(0,share.u)());return focusIndex$}scrollAndFocusOnArrowNavigation(focusIndex$,itemContainers$,disableHotkeyNavigation$){const itemWithFocus=(0,combineLatest.z)({focusIndex:focusIndex$,itemContainers:itemContainers$}).pipe((0,filter.p)((({focusIndex})=>null!=focusIndex)),(0,map.T)((({focusIndex,itemContainers})=>itemContainers[focusIndex]?.nativeElement)));this.arrowEvents$.pipe((0,withLatestFrom.E)(disableHotkeyNavigation$),(0,filter.p)((([_,disableHotkeyNavigation])=>!disableHotkeyNavigation)),(0,withLatestFrom.E)(itemWithFocus),(0,map.T)((([_,itemWithFocus])=>itemWithFocus)),(0,rxjs_operators.u5)(),(0,distinctUntilChanged.F)(),(0,rxjs_interop.pQ)()).subscribe((itemWithFocus=>{itemWithFocus.scrollIntoView({behavior:"smooth",block:"center"});(function getFirstFocusableChild(el){return[...el.querySelectorAll('a, button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])')].filter((child=>!child.hasAttribute("disabled")))[0]}(itemWithFocus)??itemWithFocus).focus()}))}static{this.ctorParameters=()=>[]}static{this.propDecorators={entries:[{type:core.Input,args:[{isSignal:!0,alias:"entries",required:!0,transform:void 0}]}],disableHotkeyNavigation:[{type:core.Input,args:[{isSignal:!0,alias:"disableHotkeyNavigation",required:!1,transform:void 0}]}],itemTemplate:[{type:core.ContentChild,args:["itemTemplate",{isSignal:!0}]}],separatorTemplate:[{type:core.ContentChild,args:["separator",{isSignal:!0}]}],itemContainers:[{type:core.ViewChildren,args:["itemContainer",{isSignal:!0}]}]}}};FocusListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-focus-list",imports:[common.NgTemplateOutlet,common.AsyncPipe],template:'@let separator = separatorTemplate();\n@for (entry of entries(); track entry.id) {\n  @let entryData =\n    {\n      data: entry.data,\n      index: $index,\n      first: $first,\n      last: $last,\n      isInFocus: $index === (focusIndex$ | async),\n    };\n\n  <div\n    class="item-container"\n    #itemContainer\n    (focusin)="this.focusItemEvent$.next($index)"\n    (focus)="this.focusItemEvent$.next($index)"\n  >\n    <ng-container\n      *ngTemplateOutlet="itemTemplate(); context: { $implicit: entryData }"\n    />\n  </div>\n\n  @if (separator && !$last) {\n    <ng-container\n      *ngTemplateOutlet="separator; context: { $implicit: entryData }"\n    />\n  }\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[focus_list_componentngResource_default()]})],FocusListComponent);var spell_component=__webpack_require__("./src/app/design/organisms/spell/spell.component.ts");let SpellsComponent=class SpellsComponent{constructor(){this.DEFAULT_TITLE="New Article Item",this.campaignId=core.input.required(),this.spells=core.input.required(),this.playerClasses=core.input.required(),this.canUpdate=core.input.required(),this.canDelete=core.input.required(),this.canCreate=core.input.required(),this.serverModel=core.input.required(),this.spellDelete=new core.EventEmitter,this.spellUpdate=new core.EventEmitter,this.spellCreate=new core.EventEmitter,this.connectionDelete=new core.EventEmitter,this.connectionCreate=new core.EventEmitter,this.spellClassClick=new core.EventEmitter,this.spellElements=(0,core.viewChildren)("spell"),this.isCreatingSpell=(0,core.signal)(!1),this.createSpellData=(0,core.computed)((()=>({name:this.DEFAULT_TITLE,campaign:this.campaignId()}))),this.spellCards=(0,core.computed)((()=>this.spells().map((spell=>({id:spell.pk??getPseudoRandomId(),data:{spell,isOpen:!1,classes:this.parsePlayerClasses(spell.player_class_connections)}})))));const spellNameParam=(0,core.inject)(router.nX).snapshot.params.name;spellNameParam&&this.scrollToSpell(spellNameParam)}onSpellDelete(spellToDelete,deleteIndex){this.spellDelete.emit(spellToDelete)}cancelSpellCreation(){this.isCreatingSpell.set(!1)}addSpell(){this.isCreatingSpell.set(!0)}onSpellClassClick(event,connection){event.preventDefault(),this.spellClassClick.emit(connection.player_class_details)}onSpellCreate(spell){this.spellCreate.emit(spell),this.isCreatingSpell.set(!1)}parsePlayerClasses(classes){return classes.map((entry=>({text:entry.player_class_details?.name,badgeValue:void 0})))}scrollToSpell(spellName){(0,rxjs_interop.br)(this.spellElements).pipe((0,rxjs_interop.pQ)(),(0,map.T)((elements=>elements.find((el=>el.nativeElement.id===spellName)))),(0,rxjs_operators.u5)(),(0,take.s)(1)).subscribe((spellElement=>{(spellElement.nativeElement=spellElement.nativeElement).scrollIntoView({behavior:"instant"})}))}static{this.ctorParameters=()=>[]}static{this.propDecorators={campaignId:[{type:core.Input,args:[{isSignal:!0,alias:"campaignId",required:!0,transform:void 0}]}],spells:[{type:core.Input,args:[{isSignal:!0,alias:"spells",required:!0,transform:void 0}]}],playerClasses:[{type:core.Input,args:[{isSignal:!0,alias:"playerClasses",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!0,transform:void 0}]}],spellDelete:[{type:core.Output}],spellUpdate:[{type:core.Output}],spellCreate:[{type:core.Output}],connectionDelete:[{type:core.Output}],connectionCreate:[{type:core.Output}],spellClassClick:[{type:core.Output}],spellElements:[{type:core.ViewChildren,args:["spell",{isSignal:!0}]}]}}};SpellsComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spells",template:'<div class="container list">\n  @if (canCreate()) {\n    <div class="list__button">\n      <button\n        btn\n        class="list__button--button"\n        [kind]="\'PRIMARY\'"\n        [text]="\'Add Spell\'"\n        [icon]="\'plus\'"\n        (click)="addSpell()"\n        [hotkey]="\'c\'"\n        (hotkeyPressed)="addSpell()"\n      ></button>\n    </div>\n  }\n\n  <div class="row">\n    @if (isCreatingSpell()) {\n      <div class="list__spell-card spell-card" [@slideUpFromBottom]>\n        <app-collapsible-panel [isOpen]="true">\n          <div heading class="spell-card__heading">\n            <span>\n              {{ createSpellData().name ?? "" }}\n            </span>\n          </div>\n          <app-spell\n            body\n            class="spell-card__spell"\n            [spell]="createSpellData()"\n            [serverModel]="undefined"\n            [playerClasses]="playerClasses()"\n            [canUpdate]="false"\n            [canDelete]="false"\n            [canCreate]="canCreate()"\n            [cancelButtonType]="\'DARK\'"\n            (spellCreate)="onSpellCreate($event)"\n            (spellCreateCancel)="cancelSpellCreation()"\n          ></app-spell>\n        </app-collapsible-panel>\n      </div>\n    }\n    <app-focus-list [entries]="spellCards()">\n      <ng-template #itemTemplate let-focusEntry>\n        <div\n          class="list__spell-card spell-card"\n          [@slideOutFromBottom]\n          [id]="focusEntry.data.spell.name"\n          #spell\n        >\n          <app-collapsible-panel [isOpen]="focusEntry.data.isOpen">\n            <div heading class="spell-card__heading">\n              <span class="spell-card__heading-text">\n                {{ focusEntry.data.spell.name ?? "" }}\n              </span>\n\n              <span class="spell-card__classes">\n                @for (\n                  connection of focusEntry.data.spell.player_class_connections;\n                  track connection.pk\n                ) {\n                  <button\n                    class="spell-card__class"\n                    (click)="onSpellClassClick($event, connection)"\n                  >\n                    <app-badge\n                      [text]="connection.player_class_details?.name ?? \'\'"\n                      [kind]="\'DARK\'"\n                    ></app-badge>\n                  </button>\n                }\n              </span>\n            </div>\n            <app-spell\n              body\n              class="spell-card__spell"\n              [spell]="focusEntry.data.spell"\n              [serverModel]="serverModel()"\n              [playerClasses]="playerClasses()"\n              [canUpdate]="canUpdate()"\n              [canDelete]="canDelete()"\n              [canCreate]="canCreate()"\n              [cancelButtonType]="\'DARK\'"\n              (spellDelete)="onSpellDelete($event, focusEntry.index)"\n              (spellUpdate)="spellUpdate.emit($event)"\n              (spellCreateCancel)="cancelSpellCreation()"\n              (connectionDelete)="connectionDelete.emit($event)"\n              (connectionCreate)="connectionCreate.emit($event)"\n            ></app-spell>\n          </app-collapsible-panel>\n        </div>\n      </ng-template>\n    </app-focus-list>\n  </div>\n</div>\n\n\x3c!-- Loading Spinner --\x3e\n<ng-template #loading><app-spinner></app-spinner></ng-template>\n',animations:[slideDown.sb,slideDown.V4],imports:[button_component.Q,molecules.e9,spell_component.o,badge_component.n,spinner_component.t,hotkey_directive.G,FocusListComponent],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[spells_componentngResource_default()]})],SpellsComponent);const spells_stories={title:"DesignSystem/Organisms/SpellsComponent",component:SpellsComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[animations.BrowserAnimationsModule,testing.c,formly_constants.d_]})],args:{spells:Array(10).fill({getAbsoluteRouterUrl:()=>"/spells/1",spell_level:3,casting_time:"1 Action",range:"Self",components:"VSM*",duration:"Instantaneous",concentration:!0,ritual:!1,school:"Necromancy",saving_throw:"CON",damage:"8d6",description:"You draw forth the soul of a creature you have slain...",player_class_connections:[{player_class:1,spell:1,player_class_details:{pk:1,name:"Wizard"}},{player_class:2,spell:1,player_class_details:{pk:2,name:"Sorcerer"}}],pk:123,name:"Soul Cage",creation_datetime:"2022-04-25T12:00:00.000Z",update_datetime:"2022-04-25T14:30:00.000Z",campaign:1,campaign_details:{id:1,name:"Tales from the Sword Coast"}}),playerClasses:player_class_service_mock.T,canCreate:!0,canUpdate:!0,canDelete:!0,serverModel:void 0}},Template=args=>({props:{...args,spellDelete:(0,dist.XI)("spellDelete"),spellUpdate:(0,dist.XI)("spellUpdate"),spellCreate:(0,dist.XI)("spellCreate"),connectionDelete:(0,dist.XI)("connectionDelete"),connectionCreate:(0,dist.XI)("connectionCreate"),spellClassClick:(0,dist.XI)("spellClassClick")}}),Default=Template.bind({});Default.args={};const NoPermissions=Template.bind({});NoPermissions.args={canUpdate:!1,canCreate:!1,canDelete:!1};const NoSpells=Template.bind({});NoSpells.args={spells:[]};const __namedExportsOrder=["Default","NoPermissions","NoSpells"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    spellDelete: action('spellDelete'),\n    spellUpdate: action('spellUpdate'),\n    spellCreate: action('spellCreate'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    spellClassClick: action('spellClassClick')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermissions.parameters={...NoPermissions.parameters,docs:{...NoPermissions.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    spellDelete: action('spellDelete'),\n    spellUpdate: action('spellUpdate'),\n    spellCreate: action('spellCreate'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    spellClassClick: action('spellClassClick')\n  }\n})",...NoPermissions.parameters?.docs?.source}}},NoSpells.parameters={...NoSpells.parameters,docs:{...NoSpells.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    spellDelete: action('spellDelete'),\n    spellUpdate: action('spellUpdate'),\n    spellCreate: action('spellCreate'),\n    connectionDelete: action('connectionDelete'),\n    connectionCreate: action('connectionCreate'),\n    spellClassClick: action('spellClassClick')\n  }\n})",...NoSpells.parameters?.docs?.source}}}},"./src/app/design/organisms/focus-list/focus-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/spells/spells.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".list__button {\n  margin-bottom: var(--spacer-3);\n}\n.list__button--button {\n  width: fit-content;\n}\n\n.spell-card {\n  margin-bottom: var(--spacer-3);\n}\n.spell-card__heading {\n  flex: 1;\n  display: flex;\n  justify-content: space-between;\n}\n.spell-card__heading-text {\n  flex: 1;\n  text-align: start;\n}\n.spell-card__classes {\n  max-width: 50%;\n  display: flex;\n  flex-direction: row;\n  justify-content: end;\n  flex-wrap: wrap;\n  gap: var(--spacer-1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);