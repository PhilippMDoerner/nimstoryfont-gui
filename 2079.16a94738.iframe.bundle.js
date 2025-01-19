(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[2079],{"./src/app/design/atoms/badge/badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>BadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var badge_componentngResource=__webpack_require__("./src/app/design/atoms/badge/badge.component.scss?ngResource"),badge_componentngResource_default=__webpack_require__.n(badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let BadgeComponent=class BadgeComponent{constructor(){this.kind=core.input.required(),this.text=core.input.required(),this.icon=(0,core.input)(),this.clickable=(0,core.input)(!1),this.maxLength=(0,core.input)(),this.displayedText=(0,core.computed)((()=>{const maxLength=this.maxLength();if(null!=maxLength&&this.text().length>maxLength){return`${this.text().slice(0,maxLength)}...`}return this.text()})),this.badgeClick=new core.EventEmitter}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],clickable:[{type:core.Input,args:[{isSignal:!0,alias:"clickable",required:!1,transform:void 0}]}],maxLength:[{type:core.Input,args:[{isSignal:!0,alias:"maxLength",required:!1,transform:void 0}]}],badgeClick:[{type:core.Output}]}}};BadgeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-badge",template:"@if (clickable()) {\n  <button type=\"button\" class=\"badge-button\" (click)=\"badgeClick.emit()\">\n    <ng-container [ngTemplateOutlet]=\"content\" />\n  </button>\n} @else {\n  <ng-container [ngTemplateOutlet]=\"content\" />\n}\n\n<ng-template #content>\n  <div\n    class=\"badge\"\n    [title]=\"text()\"\n    [ngClass]=\"{\n      'bg-primary': kind() === 'PRIMARY',\n      'bg-secondary': kind() === 'SECONDARY',\n      'bg-dark': kind() === 'DARK',\n      'bg-danger': kind() === 'DANGER',\n      'bg-warning': kind() === 'WARNING',\n      'bg-light': kind() === 'LIGHT',\n      'bg-info': kind() === 'INFO',\n    }\"\n  >\n    @let iconVal = icon();\n    @if (iconVal) {\n      <app-icon [icon]=\"iconVal\"></app-icon>\n    }\n    {{ displayedText() }}\n  </div>\n</ng-template>\n",imports:[common.NgTemplateOutlet,common.NgClass,icon_component.R],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[badge_componentngResource_default()]})],BadgeComponent)},"./src/app/design/atoms/interactive-badge/interactive-badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>InteractiveBadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var interactive_badge_componentngResource=__webpack_require__("./src/app/design/atoms/interactive-badge/interactive-badge.component.scss?ngResource"),interactive_badge_componentngResource_default=__webpack_require__.n(interactive_badge_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let InteractiveBadgeComponent=class InteractiveBadgeComponent{constructor(){this.kind=core.input.required(),this.text=core.input.required(),this.textLink=(0,core.input)(),this.icon=(0,core.input)(),this.iconKind=(0,core.input)(),this.iconKindVal=(0,core.computed)((()=>this.iconKind()??this.kind())),this.iconClick=new core.EventEmitter,this.labelClick=new core.EventEmitter}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],textLink:[{type:core.Input,args:[{isSignal:!0,alias:"textLink",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],iconKind:[{type:core.Input,args:[{isSignal:!0,alias:"iconKind",required:!1,transform:void 0}]}],iconClick:[{type:core.Output}],labelClick:[{type:core.Output}]}}};InteractiveBadgeComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-interactive-badge",template:"<div class=\"badge-container\" [title]=\"text()\">\n  @if (textLink()) {\n    <a\n      [routerLink]=\"textLink()\"\n      class=\"badge\"\n      [ngClass]=\"{\n        'badge--part1': icon(),\n        'bg-primary': kind() === 'PRIMARY',\n        'bg-secondary': kind() === 'SECONDARY',\n        'bg-dark': kind() === 'DARK',\n        'bg-danger': kind() === 'DANGER',\n        'bg-warning': kind() === 'WARNING',\n        'bg-info': kind() === 'INFO',\n        'bg-light': kind() === 'LIGHT',\n      }\"\n    >\n      {{ text() }}\n    </a>\n  } @else {\n    <button\n      (click)=\"labelClick.emit()\"\n      class=\"badge\"\n      tabindex=\"0\"\n      [ngClass]=\"{\n        'badge--part1': icon(),\n        'bg-primary': kind() === 'PRIMARY',\n        'bg-secondary': kind() === 'SECONDARY',\n        'bg-dark': kind() === 'DARK',\n        'bg-danger': kind() === 'DANGER',\n        'bg-warning': kind() === 'WARNING',\n        'bg-info': kind() === 'INFO',\n        'bg-light': kind() === 'LIGHT',\n      }\"\n      [type]=\"'button'\"\n    >\n      {{ text() }}\n    </button>\n  }\n\n  @let iconVal = icon();\n  @if (iconVal) {\n    <button\n      (click)=\"iconClick.emit()\"\n      tabindex=\"\"\n      class=\"badge badge--part2\"\n      [ngClass]=\"{\n        'bg-primary': iconKindVal() === 'PRIMARY',\n        'bg-secondary': iconKindVal() === 'SECONDARY',\n        'bg-dark': iconKindVal() === 'DARK',\n        'bg-danger': iconKindVal() === 'DANGER',\n        'bg-warning': iconKindVal() === 'WARNING',\n        'bg-info': iconKindVal() === 'INFO',\n        'bg-light': iconKindVal() === 'LIGHT',\n      }\"\n    >\n      <app-icon [icon]=\"iconVal\" />\n    </button>\n  }\n</div>\n",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[router.Wk,common.NgClass,icon_component.R],styles:[interactive_badge_componentngResource_default()]})],InteractiveBadgeComponent)},"./src/app/design/molecules/badge-list/badge-list.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>BadgeListComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var badge_list_componentngResource=__webpack_require__("./src/app/design/molecules/badge-list/badge-list.component.scss?ngResource"),badge_list_componentngResource_default=__webpack_require__.n(badge_list_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),badge_component=__webpack_require__("./src/app/design/atoms/badge/badge.component.ts"),interactive_badge_component=__webpack_require__("./src/app/design/atoms/interactive-badge/interactive-badge.component.ts"),small_create_form_component=__webpack_require__("./src/app/design/molecules/small-create-form/small-create-form.component.ts");let BadgeListComponent=class BadgeListComponent{constructor(){this.entries=core.input.required(),this.createOptions=(0,core.input)(),this.label=(0,core.input)("Entry"),this.canCreate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.submitButtonType=(0,core.input)("PRIMARY"),this.cancelButtonType=(0,core.input)("SECONDARY"),this.entryDelete=new core.EventEmitter,this.entryCreate=new core.EventEmitter,this.createKind=(0,core.computed)((()=>this.createOptions()?.kind)),this.createLink=(0,core.computed)((()=>"LINK"===this.createKind()?this.createOptions().link:void 0)),this.options=(0,core.computed)((()=>"SELECT"===this.createKind()?this.createOptions().config.options:void 0)),this.optionLabelProp=(0,core.computed)((()=>"SELECT"===this.createKind()?this.createOptions().config.labelProp:void 0)),this.optionValueProp=(0,core.computed)((()=>"SELECT"===this.createKind()?this.createOptions().config.valueProp:void 0))}onEntryDelete(entry){this.canDelete()&&this.entryDelete.emit(entry.badgeValue)}onEntryCreate(selectedOption){this.canCreate()&&this.entryCreate.emit(selectedOption)}static{this.propDecorators={entries:[{type:core.Input,args:[{isSignal:!0,alias:"entries",required:!0,transform:void 0}]}],createOptions:[{type:core.Input,args:[{isSignal:!0,alias:"createOptions",required:!1,transform:void 0}]}],label:[{type:core.Input,args:[{isSignal:!0,alias:"label",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],submitButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"submitButtonType",required:!1,transform:void 0}]}],cancelButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"cancelButtonType",required:!1,transform:void 0}]}],entryDelete:[{type:core.Output}],entryCreate:[{type:core.Output}]}}};BadgeListComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-badge-list",template:'<div class="badge-list">\n  <div class="badge-list__list">\n    <span class="badge-list__label"> {{ label() }}: </span>\n    @for (entry of entries(); track $index) {\n      <app-interactive-badge\n        class="badge-list__entry"\n        [kind]="\'DARK\'"\n        [iconKind]="\'DANGER\'"\n        [text]="entry.text"\n        [textLink]="entry.link"\n        [icon]="canDelete() ? \'trash\' : undefined"\n        (iconClick)="onEntryDelete(entry)"\n      ></app-interactive-badge>\n    }\n\n    \x3c!-- Small Create Form --\x3e\n    @if (canCreate()) {\n      @switch (createKind()) {\n        @case ("LINK") {\n          <ng-container [ngTemplateOutlet]="linkCreate" />\n        }\n        @case ("SELECT") {\n          <ng-container [ngTemplateOutlet]="selectCreate" />\n        }\n      }\n    }\n  </div>\n</div>\n\n<ng-template #selectCreate>\n  @let optionsVal = options();\n  @let optionLabelPropVal = optionLabelProp();\n  @let optionValuePropVal = optionValueProp();\n\n  @if (optionsVal && optionLabelPropVal && optionValuePropVal) {\n    <app-small-create-form\n      class="badge-list__create-form"\n      [options]="optionsVal"\n      [labelProp]="optionLabelPropVal"\n      [valueProp]="optionValuePropVal"\n      [badgeText]="\'Add \' + label()"\n      [cancelButtonType]="\'DARK\'"\n      (create)="onEntryCreate($event)"\n    ></app-small-create-form>\n  }\n</ng-template>\n\n<ng-template #linkCreate>\n  <a [routerLink]="createLink()" class="badge-list__create-link" tabindex="-1">\n    <app-badge\n      class="badge-list__create-badge"\n      [kind]="\'PRIMARY\'"\n      [icon]="\'plus\'"\n      [text]="\'Add \' + label()"\n      [clickable]="true"\n    >\n    </app-badge>\n  </a>\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[small_create_form_component.R,interactive_badge_component.B,common.NgTemplateOutlet,badge_component.n,router.Wk],styles:[badge_list_componentngResource_default()]})],BadgeListComponent)},"./src/app/design/molecules/small-create-form/small-create-form.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>SmallCreateFormComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var small_create_form_componentngResource=__webpack_require__("./src/app/design/molecules/small-create-form/small-create-form.component.scss?ngResource"),small_create_form_componentngResource_default=__webpack_require__.n(small_create_form_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),badge_component=__webpack_require__("./src/app/design/atoms/badge/badge.component.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let SmallCreateFormComponent=class SmallCreateFormComponent{constructor(){this.options=core.input.required(),this.labelProp=core.input.required(),this.badgeText=(0,core.input)("Add Entry"),this.valueProp=core.input.required(),this.submitButtonType=(0,core.input)("PRIMARY"),this.cancelButtonType=(0,core.input)("SECONDARY"),this.create=new core.EventEmitter,this.selectFieldName=(0,core.computed)((()=>`select-' + ${String(this.labelProp())}`)),this.form=new fesm2022_forms.gE({}),this.userModel={},this.state=(0,core.signal)("DISPLAY")}changeState(newState){this.state.set(newState)}onChange(event){const selectedIndex=event.srcElement.value;this.userModel=this.options()[selectedIndex]}onCancel(){this.changeState("DISPLAY"),this.userModel={}}onSubmit(){this.changeState("DISPLAY");null!=this.userModel[this.valueProp()]&&this.create.emit(this.userModel),this.userModel={}}static{this.propDecorators={options:[{type:core.Input,args:[{isSignal:!0,alias:"options",required:!0,transform:void 0}]}],labelProp:[{type:core.Input,args:[{isSignal:!0,alias:"labelProp",required:!0,transform:void 0}]}],badgeText:[{type:core.Input,args:[{isSignal:!0,alias:"badgeText",required:!1,transform:void 0}]}],valueProp:[{type:core.Input,args:[{isSignal:!0,alias:"valueProp",required:!0,transform:void 0}]}],submitButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"submitButtonType",required:!1,transform:void 0}]}],cancelButtonType:[{type:core.Input,args:[{isSignal:!0,alias:"cancelButtonType",required:!1,transform:void 0}]}],create:[{type:core.Output}]}}};SmallCreateFormComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-small-create-form",template:'@if (options() && options().length > 0) {\n  @switch (state()) {\n    @case ("DISPLAY") {\n      <ng-container [ngTemplateOutlet]="displayState" />\n    }\n    @case ("CREATE") {\n      <ng-container [ngTemplateOutlet]="createState" />\n    }\n  }\n}\n\n<ng-template #displayState>\n  <app-badge\n    class="display-form"\n    [kind]="\'PRIMARY\'"\n    [icon]="\'plus\'"\n    [text]="badgeText()"\n    [clickable]="true"\n    (badgeClick)="changeState(\'CREATE\')"\n  ></app-badge>\n</ng-template>\n\n<ng-template #createState>\n  <form class="form">\n    <select\n      class="form-select"\n      style="width: unset"\n      [name]="selectFieldName()"\n      [id]="\'select\'"\n      (change)="onChange($event)"\n    >\n      <option [value]="undefined">-----</option>\n      @for (option of options(); track option) {\n        <option\n          [value]="$index"\n          [attr.selected]="\n            option[valueProp()] === userModel[valueProp()] ? true : null\n          "\n        >\n          {{ option[labelProp()] }}\n        </option>\n      }\n    </select>\n\n    \x3c!-- Submit Button --\x3e\n    <button\n      btn\n      class="mx-2"\n      [kind]="submitButtonType()"\n      [size]="\'SMALL\'"\n      [icon]="\'check\'"\n      [type]="\'submit\'"\n      (click)="onSubmit()"\n    ></button>\n\n    \x3c!-- Cancel Button --\x3e\n    <button\n      btn\n      [kind]="cancelButtonType()"\n      [size]="\'SMALL\'"\n      [icon]="\'times\'"\n      (click)="onCancel()"\n    ></button>\n  </form>\n</ng-template>\n',imports:[badge_component.n,common.NgTemplateOutlet,button_component.Q],styles:[small_create_form_componentngResource_default()]})],SmallCreateFormComponent)},"./src/app/design/atoms/badge/badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  border-radius: var(--bs-border-radius);\n}\n\n.badge-button {\n  border-radius: var(--bs-border-radius);\n  display: flex;\n}\n.badge-button:focus, .badge-button:focus-within, .badge-button:hover {\n  outline: var(--focus-outline);\n}\n.badge-button:focus .badge, .badge-button:focus-within .badge, .badge-button:hover .badge {\n  color: inherit;\n}\n\n.badge {\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/interactive-badge/interactive-badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --inner-badge-padding: var(--spacer-2);\n}\n\n.badge-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.badge {\n  cursor: pointer;\n  border-bottom: none;\n  text-decoration: none;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.badge:focus, .badge:focus-within, .badge:hover {\n  outline: solid 3px var(--bs-link-hover-color);\n}\n.badge--part1 {\n  border-top-right-radius: unset;\n  border-bottom-right-radius: unset;\n  padding-right: var(--inner-badge-padding);\n}\n.badge--part2 {\n  border-top-left-radius: unset;\n  border-bottom-left-radius: unset;\n  padding-left: var(--inner-badge-padding);\n  padding-right: var(--inner-badge-padding);\n  border-left: 1.5px solid var(--bs-white);\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/badge-list/badge-list.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".badge-list {\n  display: inline-flex;\n  flex-direction: row;\n}\n.badge-list__list {\n  display: inline-flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.badge-list__create-badge {\n  display: flex;\n}\n.badge-list__create-link {\n  text-decoration: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/molecules/small-create-form/small-create-form.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".display-form {\n  cursor: pointer;\n  display: flex;\n}\n.display-form:focus, .display-form:focus-within, .display-form:focus-visible, .display-form:hover {\n  outline: var(--focus-outline);\n}\n\n.form {\n  display: flex;\n  align-items: center;\n  flex-direction: row;\n}\n\n.form-select {\n  width: unset !important;\n  padding: var(--spacer-1) var(--spacer-2) var(--spacer-1) var(--spacer-2);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);