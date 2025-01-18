(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[4375],{"./src/app/design/organisms/filter-list/filter-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>FilterListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var filter_list_componentngResource=__webpack_require__("./src/app/design/organisms/filter-list/filter-list.component.scss?ngResource"),filter_list_componentngResource_default=__webpack_require__.n(filter_list_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),object=__webpack_require__("./src/utils/object.ts");let GroupByFirstLetterPipe=class GroupByFirstLetterPipe{transform(itemArray,field){const groupedObj=itemArray.reduce(((accumulator,item)=>{const firstLetter=item[field][0];return accumulator.hasOwnProperty(firstLetter)?accumulator[firstLetter].push(item):accumulator[firstLetter]=[item],accumulator}),{});return Object.keys(groupedObj).map((key=>({key,value:groupedObj[key]}))).sort(((a,b)=>a.key>b.key?1:-1))}};GroupByFirstLetterPipe=(0,tslib_es6.Cg)([(0,core.Pipe)({name:"groupByFirstLetter",standalone:!0})],GroupByFirstLetterPipe);let GroupByPipe=class GroupByPipe{transform(itemArray,groupProp,subSortProp,reverse=!1){const groupedObj=itemArray.reduce(((accumulator,item)=>{const groupedFieldValue=(0,object.p)(item,groupProp);return accumulator.hasOwnProperty(groupedFieldValue)?accumulator[groupedFieldValue].push(item):accumulator[groupedFieldValue]=[item],accumulator}),{}),sortedGroupArray=Object.keys(groupedObj).map((key=>({key,value:groupedObj[key]}))).sort(((group1,group2)=>group1.key.toLowerCase()<group2.key.toLowerCase()?-1:1));return sortedGroupArray.forEach((group=>{const groupEntries=group.value;group.value=this.sortGroup(groupEntries,subSortProp)})),reverse?sortedGroupArray.reverse():sortedGroupArray}sortGroup(group,propertyPath){return group.sort(((val1,val2)=>{let sortValue1=(0,object.p)(val1,propertyPath);const isStringProperty="string"==typeof sortValue1;isStringProperty&&(sortValue1=sortValue1.toLowerCase());let sortValue2=(0,object.p)(val2,propertyPath);return isStringProperty&&(sortValue2=sortValue2.toLowerCase()),sortValue1<sortValue2?1:-1}))}};GroupByPipe=(0,tslib_es6.Cg)([(0,core.Pipe)({name:"groupBy",standalone:!0})],GroupByPipe);let FilterListComponent=class FilterListComponent{constructor(routing){this.routing=routing,this.entries=core.input.required(),this.labelProp=core.input.required(),this.heading=core.input.required(),this.groupProp=(0,core.input)(),this.forceSingleLine=(0,core.input)(!1),this.filterValue=(0,core.signal)(void 0),this.displayEntries=(0,core.computed)((()=>{const filterValue=this.filterValue()?.toLowerCase();return null==filterValue||""===filterValue?this.entries():this.entries().filter((entry=>entry[this.labelProp()].toLowerCase().includes(filterValue)))})),this.mode=(0,core.computed)((()=>this.groupProp()?"PROPERTY":"LETTER"))}openFirstArticle(event){event.preventDefault();if(!(this.displayEntries().length>0))return;const entry=this.displayEntries()[0];this.routing.navigateByUrl(entry.link)}static{this.ctorParameters=()=>[{type:router.Ix}]}static{this.propDecorators={entries:[{type:core.Input,args:[{isSignal:!0,alias:"entries",required:!0,transform:void 0}]}],labelProp:[{type:core.Input,args:[{isSignal:!0,alias:"labelProp",required:!0,transform:void 0}]}],heading:[{type:core.Input,args:[{isSignal:!0,alias:"heading",required:!0,transform:void 0}]}],groupProp:[{type:core.Input,args:[{isSignal:!0,alias:"groupProp",required:!1,transform:void 0}]}],forceSingleLine:[{type:core.Input,args:[{isSignal:!0,alias:"forceSingleLine",required:!1,transform:void 0}]}]}}};FilterListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-filter-list",template:'<div class="container">\n  <form\n    class="row filter"\n    autocomplete="off"\n    (submit)="openFirstArticle($event)"\n  >\n    <input\n      class="filter__input"\n      type="text"\n      placeholder="Search for {{ heading() }}..."\n      #filterInputElement\n      (keyDown)="filterValue.set(filterInputElement.value)"\n      (input)="filterValue.set(filterInputElement.value)"\n    />\n  </form>\n\n  <div class="row">\n    <ng-container\n      *ngTemplateOutlet="mode() === \'LETTER\' ? letterList : propertyList"\n    ></ng-container>\n  </div>\n</div>\n\n<ng-template #letterList>\n  @for (\n    itemLetterEntries of displayEntries() | groupByFirstLetter: labelProp();\n    track $index\n  ) {\n    <div\n      class="letter-list"\n      [ngClass]="{\n        \'col-sm-6 col-lg-4\': !filterInputElement.value && !forceSingleLine(),\n        \'col-12\': filterInputElement.value || forceSingleLine,\n      }"\n    >\n      \x3c!-- Letter Heading --\x3e\n      @if (filterInputElement.value.length === 0) {\n        <h5 class="letter-list__heading">\n          {{ itemLetterEntries.key }}\n        </h5>\n      }\n\n      \x3c!-- Article List --\x3e\n      <ul class="letter-list__list">\n        @for (item of itemLetterEntries.value; track $index) {\n          <li>\n            <a [routerLink]="item.link">\n              {{ item[labelProp()] }}\n            </a>\n          </li>\n        }\n      </ul>\n    </div>\n  }\n</ng-template>\n\n<ng-template #propertyList>\n  @let groupPropVal = groupProp();\n  @if (groupPropVal) {\n    @for (\n      itemLetterEntries of displayEntries()\n        | groupBy: groupPropVal : "session_details.session_number";\n      track $index\n    ) {\n      <div\n        class="letter-list"\n        [ngClass]="{\n          \'col-sm-6 col-lg-4\': !filterInputElement.value && !forceSingleLine,\n          \'col-12\': filterInputElement.value || forceSingleLine,\n        }"\n      >\n        \x3c!-- Letter Heading --\x3e\n        @if (filterInputElement.value.length === 0) {\n          <h5 class="letter-list__heading">\n            {{ itemLetterEntries.key }}\n          </h5>\n        }\n\n        \x3c!-- Article List --\x3e\n        <ul class="letter-list__list">\n          @for (item of itemLetterEntries.value; track $index) {\n            <li>\n              <a [routerLink]="item.link">\n                {{ item[labelProp()] }}\n              </a>\n            </li>\n          }\n        </ul>\n      </div>\n    }\n  }\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[GroupByFirstLetterPipe,common.NgClass,GroupByPipe,router.Wk,common.NgTemplateOutlet],styles:[filter_list_componentngResource_default()]})],FilterListComponent)},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./src/app/design/organisms/filter-list/filter-list.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NonLetterGroup:()=>NonLetterGroup,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Organisms/FilterListComponent",component:__webpack_require__("./src/app/design/organisms/filter-list/filter-list.component.ts").q,args:{heading:"Some Heading",entries:[{label:"Thorngrim Stonefist",link:"https://example.com/Thorngrim",party:"Party A"},{label:"Eilistraee Moonwhisper",link:"https://example.com/Eilistraee",party:"Party B"},{label:"Zarathustra the Unyielding",link:"https://example.com/Zarathustra",party:"Party A"},{label:"Rufus Redbeard",link:"https://example.com/Rufus",party:"Party C"},{label:"Iridessa Silverblade",link:"https://example.com/Iridessa",party:"Party A"},{label:"Fintan Ironclad",link:"https://example.com/Fintan",party:"Party C"},{label:"Baldor the Bold",link:"https://example.com/Baldor",party:"Party B"},{label:"Gorg Ironfist",link:"https://example.com/Gorg",party:"Party A"},{label:"Astrid the Archer",link:"https://example.com/Astrid",party:"Party C"},{label:"Kethryllia Shadowstar",link:"https://example.com/Kethryllia",party:"Party B"},{label:"Hrog the Hammer",link:"https://example.com/Hrog",party:"Party A"},{label:"Lyra the Luminous",link:"https://example.com/Lyra",party:"Party B"},{label:"Gethin the Grim",link:"https://example.com/Gethin",party:"Party A"},{label:"Zephyr the Zealous",link:"https://example.com/Zephyr",party:"Party C"},{label:"Eryndor the Evergreen",link:"https://example.com/Eryndor",party:"Party B"},{label:"Sarai the Slayer",link:"https://example.com/Sarai",party:"Party A"},{label:"Kael the Kind",link:"https://example.com/Kael",party:"Party C"},{label:"Lirien the Loremaster",link:"https://example.com/Lirien",party:"Party B"},{label:"Vesper the Valiant",link:"https://example.com/Vesper",party:"Party C"},{label:"Gallio the Glorious",link:"https://example.com/Gallio",party:"Party A"}],labelProp:"label"},decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({declarations:[],imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_2__.c]})]},Template=args=>({props:{...args}}),Default=Template.bind({});Default.args={};const NonLetterGroup=Template.bind({});NonLetterGroup.args={groupProp:"party"};const __namedExportsOrder=["Default","NonLetterGroup"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}},NonLetterGroup.parameters={...NonLetterGroup.parameters,docs:{...NonLetterGroup.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...NonLetterGroup.parameters?.docs?.source}}}},"./src/app/design/organisms/filter-list/filter-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".filter__input {\n  background-color: transparent;\n  border: 1px var(--bs-white) solid;\n  border-radius: var(--bs-border-radius);\n  padding: var(--spacer-0) var(--spacer-3);\n  margin-top: var(--spacer-2);\n  margin-bottom: var(--spacer-4);\n  width: 100%;\n  height: var(--spacer-5);\n  color: var(--bs-white);\n}\n.filter__input:focus {\n  background: rgba(255, 255, 255, 0.1);\n  border-color: var(--bs-white);\n  box-shadow: 0 0 0 2px var(--bs-white);\n}\n\n.letter-list {\n  padding-top: var(--spacer-4);\n  padding-bottom: var(--spacer-4);\n  border-bottom: var(--bs-border-width) var(--bs-border-style) var(--bs-border-color);\n}\n.letter-list__heading {\n  margin-bottom: var(--spacer-0);\n}\n.letter-list__list {\n  list-style-type: disclosure-closed;\n  margin-bottom: var(--spacer-0);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);