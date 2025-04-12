(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[6288],{"./src/app/design/organisms/encounter/encounter.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>EncounterComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var encounter_componentngResource=__webpack_require__("./src/app/design/organisms/encounter/encounter.component.scss?ngResource"),encounter_componentngResource_default=__webpack_require__.n(encounter_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),rxjs_interop=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),switchMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js"),timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js"),map=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),startWith=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/startWith.js"),empty=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),interval=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/interval.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),hotkey_directive=__webpack_require__("./src/app/_directives/hotkey.directive.ts"),formly_service_service=__webpack_require__("./src/app/_services/formly/formly-service.service.ts"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),separator_component=__webpack_require__("./src/app/design/atoms/separator/separator.component.ts"),molecules=__webpack_require__("./src/app/design/molecules/index.ts"),DOM=__webpack_require__("./src/utils/DOM.ts"),rxjs_operators=__webpack_require__("./src/utils/rxjs-operators.ts");var success_animation_componentngResource=__webpack_require__("./src/app/design/atoms/success-animation/success-animation.component.scss?ngResource"),success_animation_componentngResource_default=__webpack_require__.n(success_animation_componentngResource);let SuccessAnimationComponent=class SuccessAnimationComponent{};SuccessAnimationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-success-animation",imports:[],template:'<div class="success-animation">\n  <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">\n    <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />\n    <path\n      class="checkmark__check"\n      fill="none"\n      d="M14.1 27.2l7.1 7.2 16.7-16.8"\n    />\n  </svg>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[success_animation_componentngResource_default()]})],SuccessAnimationComponent);var editor_component=__webpack_require__("./src/app/design/molecules/editor/editor.component.ts");let EncounterComponent=class EncounterComponent{constructor(routingService,formlyService){this.routingService=routingService,this.formlyService=formlyService,this.destroyRef=(0,core.inject)(core.DestroyRef),this.characters=core.input.required(),this.locations=core.input.required(),this.updateState=(0,core.input)(),this.encounter=(0,core.input)(),this.serverModel=(0,core.input)(),this.canUpdate=(0,core.input)(!1),this.canCreate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.initialCardState=(0,core.input)("DISPLAY"),this.isInFocus=core.input.required(),this.headingId=core.input.required(),this.component=(0,core.inject)(core.ElementRef),this.connectionDelete=(0,core.output)(),this.connectionCreate=(0,core.output)(),this.encounterDelete=(0,core.output)(),this.encounterUpdate=(0,core.output)(),this.encounterCreate=(0,core.output)(),this.encounterCreateCancel=(0,core.output)(),this.userModel=(0,core.signal)({}),this.cardState=(0,core.signal)("DISPLAY"),this.textFieldState=(0,core.signal)("DISPLAY"),this.badgeEntries=(0,core.computed)((()=>{const encounterConnections=this.encounter()?.encounterConnections??[];return this.parseConnection(encounterConnections)})),this.campaignName=(0,core.computed)((()=>this.encounter()?.campaign_details?.name)),this.showUpdateSuccessMarker$=(0,rxjs_interop.br)(this.updateState).pipe((0,switchMap.n)((state=>"success"===state?(0,timer.O)(3e3).pipe((0,map.T)((()=>!1)),(0,startWith.Z)("success"===state)):empty.w))),this.locations$=(0,rxjs_interop.br)(this.locations).pipe((0,rxjs_operators.u5)()),this.formlyFields=(0,core.computed)((()=>[this.formlyService.buildInputConfig({key:"title",inputKind:"STRING"}),this.formlyService.buildTypeaheadConfig({key:"location",label:"Encounter Location",getOptions:()=>this.locations$,initialOption$:(0,of.of)({name_full:this.encounter()?.location_details?.name_full,pk:this.encounter()?.location}),formatSearchTerm:searchTerm=>this.formatEntry(searchTerm),optionLabelProp:"name_full",optionValueProp:"pk"})])),this.editorId=(0,DOM.n)()}ngOnInit(){const model="CREATE"===this.initialCardState()&&this.canCreate()?{}:void 0;this.changeState(this.initialCardState(),model)}changeState(newState,newModel){this.cardState.set(newState),this.userModel.set({...newModel})}onEncounterCreate(encounter){this.encounterCreate.emit({...this.encounter(),...encounter}),this.changeState("DISPLAY",encounter)}onEncounterDelete(){this.encounterDelete.emit(this.encounter()),this.changeState("DISPLAY",void 0)}onEncounterUpdate(encounter){this.encounterUpdate.emit(encounter),this.changeState("DISPLAY",void 0)}saveDescription(newDescription){const updatedEncounter={...this.encounter(),description:newDescription};this.encounterUpdate.emit(updatedEncounter)}onDescriptionUpdateFinished(newDescription){this.saveDescription(newDescription),this.textFieldState.set("DISPLAY")}onEncounterCreateCancel(){this.encounterCreateCancel.emit(),this.changeState("DISPLAY",void 0)}onConnectionDelete(connection){this.canDelete()&&this.connectionDelete.emit(connection)}onConnectionCreate(character){const newConnection={campaign:this.encounter()?.campaign_details?.id,encounter:this.encounter()?.pk,character:character.pk};this.connectionCreate.emit(newConnection)}onToggle(toggled){if("CREATE"===this.cardState())return void this.encounterCreateCancel.emit();const nextState="DISPLAY"===this.cardState()?"UPDATE":"DISPLAY",nextModel=toggled?{...this.encounter()}:void 0;this.changeState(nextState,nextModel),this.scrollComponentIntoView()}toggleTextField(){switch(this.textFieldState()){case"DISPLAY":this.toUpdateState();break;case"UPDATE":this.toDisplayState()}this.scrollComponentIntoView()}toDisplayState(){this.textFieldState.set("DISPLAY")}toUpdateState(){this.textFieldState.set("UPDATE")}parseConnection(connections){return connections.map((con=>{const characterName=con.character_details?.name;return{text:characterName,badgeValue:con,link:this.routingService.getRoutePath("character",{name:characterName,campaign:this.campaignName()})}}))}formatEntry(str){return str?.replaceAll(/[-\s']/g,"")??""}scrollComponentIntoView(){(0,interval.Y)(100).pipe((0,take.s)(1),(0,rxjs_interop.pQ)(this.destroyRef)).subscribe((()=>this.component?.nativeElement.scrollIntoView({behavior:"instant",block:"start"})))}static{this.ctorParameters=()=>[{type:routing_service.O},{type:formly_service_service.$}]}static{this.propDecorators={characters:[{type:core.Input,args:[{isSignal:!0,alias:"characters",required:!0,transform:void 0}]}],locations:[{type:core.Input,args:[{isSignal:!0,alias:"locations",required:!0,transform:void 0}]}],updateState:[{type:core.Input,args:[{isSignal:!0,alias:"updateState",required:!1,transform:void 0}]}],encounter:[{type:core.Input,args:[{isSignal:!0,alias:"encounter",required:!1,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!1,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],initialCardState:[{type:core.Input,args:[{isSignal:!0,alias:"initialCardState",required:!1,transform:void 0}]}],isInFocus:[{type:core.Input,args:[{isSignal:!0,alias:"isInFocus",required:!0,transform:void 0}]}],headingId:[{type:core.Input,args:[{isSignal:!0,alias:"headingId",required:!0,transform:void 0}]}],connectionDelete:[{type:core.Output,args:["connectionDelete"]}],connectionCreate:[{type:core.Output,args:["connectionCreate"]}],encounterDelete:[{type:core.Output,args:["encounterDelete"]}],encounterUpdate:[{type:core.Output,args:["encounterUpdate"]}],encounterCreate:[{type:core.Output,args:["encounterCreate"]}],encounterCreateCancel:[{type:core.Output,args:["encounterCreateCancel"]}]}}};EncounterComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-encounter",template:'@if (encounter() || cardState() === "CREATE") {\n  <header class="card__heading">\n    <h4 class="mb-0" [id]="headingId()">\n      @switch (cardState()) {\n        @case ("DISPLAY") {\n          <ng-container [ngTemplateOutlet]="displayHeading" />\n        }\n        @case ("UPDATE") {\n          <ng-container [ngTemplateOutlet]="updateHeading" />\n        }\n        @case ("OUTDATEDUPDATE") {\n          <ng-container [ngTemplateOutlet]="updateHeading" />\n        }\n        @case ("CREATE") {\n          <ng-container [ngTemplateOutlet]="createHeading" />\n        }\n      }\n    </h4>\n\n    @if (\n      canUpdate() &&\n      (cardState() === "DISPLAY" ||\n        cardState() === "UPDATE" ||\n        cardState() === "OUTDATEDUPDATE")\n    ) {\n      @let buttonText = textFieldState() === "DISPLAY" ? "Edit text" : "Cancel";\n      <button\n        class="card__text-edit-button fs-6"\n        [hotkey]="\'w\'"\n        [disabledHotkey]="!isInFocus()"\n        (hotkeyPressed)="toggleTextField()"\n        (click)="toggleTextField()"\n        [attr.aria-label]="buttonText"\n      >\n        ({{ buttonText }})\n      </button>\n    }\n\n    <span class="card__right-container">\n      @if (showUpdateSuccessMarker$ | async) {\n        <span class="card__success-animation">\n          Updated encounter\n          <app-success-animation />\n        </span>\n      }\n      @if (canUpdate()) {\n        <app-edit-toggle\n          #toggleButton\n          class="card__edit-button"\n          [title]="\'Edit Encounter Metadata\'"\n          [buttonKind]="\'DARK\'"\n          [toggled]="cardState() !== \'DISPLAY\'"\n          [disabledHotkey]="!isInFocus()"\n          (toggleEdit)="onToggle($event)"\n        ></app-edit-toggle>\n      }\n    </span>\n  </header>\n\n  @switch (cardState()) {\n    @case ("DISPLAY") {\n      <ng-container [ngTemplateOutlet]="displayBody" />\n    }\n    @case ("UPDATE") {\n      <ng-container [ngTemplateOutlet]="updateBody" />\n    }\n    @case ("OUTDATEDUPDATE") {\n      <ng-container [ngTemplateOutlet]="updateBody" />\n    }\n    @case ("CREATE") {\n      <ng-container [ngTemplateOutlet]="createBody" />\n    }\n  }\n}\n\n<ng-template #displayHeading>\n  <span class="card__text-container">\n    {{ encounter()?.title }}\n  </span>\n</ng-template>\n\n<ng-template #displayBody>\n  \x3c!-- Encounter --\x3e\n  @let encounterVal = encounter();\n  @if (encounterVal) {\n    <label [for]="editorId" class="cdk-visually-hidden">\n      Description of encounter {{ encounterVal.title }}\n    </label>\n    <app-editor\n      #editor\n      class="card__text"\n      [id]="editorId"\n      [state]="textFieldState()"\n      [canUpdate]="canUpdate()"\n      [text]="encounterVal.description"\n      [serverModel]="serverModel()?.description"\n      [placeholder]="\'What happened during \' + encounterVal.title + \' ?\'"\n      [cancelButtonKind]="\'DARK\'"\n      [settings]="{ height: 800 }"\n      (update)="onDescriptionUpdateFinished($event)"\n      (autosave)="saveDescription($event)"\n      (cancelled)="toDisplayState()"\n      (editStarted)="toUpdateState()"\n    ></app-editor>\n  }\n\n  <app-separator></app-separator>\n\n  \x3c!-- Encounter Connections --\x3e\n  <div class="card__connections">\n    <app-badge-list\n      [label]="\'Characters\'"\n      [entries]="badgeEntries()"\n      [createOptions]="{\n        kind: \'SELECT\',\n        hotkey: \'c\',\n        createBadgeLabel: \'Add character\',\n        formFieldLabel: \'Characters\',\n        config: {\n          options: characters(),\n          valueProp: \'pk\',\n          labelProp: \'name\',\n        },\n      }"\n      [disableHotkeys]="!isInFocus()"\n      [canCreate]="canCreate()"\n      [canDelete]="canDelete()"\n      [cancelButtonType]="\'DARK\'"\n      (entryCreate)="onConnectionCreate($event)"\n      (entryDelete)="onConnectionDelete($event)"\n    ></app-badge-list>\n  </div>\n\n  \x3c!-- Encounter Footer/Delete Toggle --\x3e\n  @if (canDelete()) {\n    <app-confirmation-toggle-button\n      class="card__delete-confirmer"\n      aria-label="Delete Encounter"\n      [itemToDelete]="\'Encounter \' + encounter()?.title"\n      [icon]="\'trash\'"\n      [enableHotkey]="isInFocus()"\n      (confirm)="onEncounterDelete()"\n    ></app-confirmation-toggle-button>\n  }\n</ng-template>\n\n<ng-template #updateHeading> Update "{{ encounter()?.title }}" </ng-template>\n\n\x3c!-- Form to Update Encounters --\x3e\n<ng-template #updateBody>\n  @if (canUpdate() && cardState() === "UPDATE") {\n    <app-form\n      [model]="userModel()"\n      [fields]="formlyFields()"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onEncounterUpdate(userModel())"\n      (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n    ></app-form>\n  } @else if (canUpdate() && cardState() === "OUTDATEDUPDATE") {\n    <app-compare-form\n      [fields]="formlyFields()"\n      [modelFromUser]="$any(userModel())"\n      [modelFromServer]="serverModel()"\n      [displayVertically]="true"\n      (formlySubmit)="onEncounterUpdate($event)"\n      (formlyCancel)="changeState(\'DISPLAY\', undefined)"\n    ></app-compare-form>\n  }\n</ng-template>\n\n<ng-template #createHeading> Create new Encounter </ng-template>\n\n\x3c!-- Form to Update Encounters --\x3e\n<ng-template #createBody>\n  @if (canCreate() && cardState() === "CREATE") {\n    <app-form\n      [model]="userModel()"\n      [fields]="formlyFields()"\n      [cancelButtonType]="\'DARK\'"\n      (formlySubmit)="onEncounterCreate($event)"\n      (formlyCancel)="onEncounterCreateCancel()"\n    ></app-form>\n  }\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[common.NgTemplateOutlet,molecules.aU,separator_component.F,molecules.pn,molecules.Ts,molecules.s2,molecules.zx,ng_bootstrap.n8,editor_component.x,hotkey_directive.G,common.AsyncPipe,SuccessAnimationComponent],styles:[encounter_componentngResource_default()]})],EncounterComponent)},"./src/app/design/atoms/success-animation/success-animation.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-block;\n  width: 30px;\n  height: 30px;\n  stroke: var(--bs-light);\n}\n\n.success-animation {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.checkmark {\n  width: 100%;\n  height: 100%;\n  border-radius: 50%;\n  display: block;\n  stroke-width: 4;\n  stroke: inherit;\n  stroke-miterlimit: 10;\n  animation: scale 0.3s ease-in-out 0.9s both;\n  position: relative;\n  margin: 0 auto;\n  background: transparent;\n}\n\n.checkmark__circle {\n  stroke-dasharray: 166;\n  stroke-dashoffset: 166;\n  stroke-width: 4;\n  stroke-miterlimit: 10;\n  stroke: inherit;\n  fill: transparent;\n  animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;\n}\n\n.checkmark__check {\n  transform-origin: 50% 50%;\n  stroke-dasharray: 48;\n  stroke-dashoffset: 48;\n  stroke: inherit;\n  stroke-width: 4;\n  animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;\n}\n\n@keyframes stroke {\n  100% {\n    stroke-dashoffset: 0;\n  }\n}\n@keyframes scale {\n  0%, 100% {\n    transform: none;\n  }\n  50% {\n    transform: scale3d(1.1, 1.1, 1);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/encounter/encounter.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".card {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n  padding: var(--spacer-4);\n}\n.card__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: var(--spacer-2);\n}\n.card__text {\n  width: 100%;\n  margin-bottom: var(--spacer-1);\n  --bg-hover-color: var(--bs-dark);\n}\n.card__text-container {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-3);\n}\n.card__text-edit-button {\n  font-weight: normal;\n  border-radius: var(--bs-border-radius);\n  width: 90px;\n  margin-right: var(--spacer-3);\n}\n.card__text-edit-button:hover, .card__text-edit-button:focus-visible {\n  outline: var(--focus-outline);\n}\n.card__connections {\n  margin-bottom: var(--spacer-3);\n}\n.card__delete-confirmer {\n  padding-left: var(--spacer-0);\n  padding-right: var(--spacer-0);\n  display: flex;\n  justify-content: flex-end;\n  width: 100%;\n  --confirmation-bg-color: var(--bs-dark);\n}\n.card__edit-button {\n  align-self: center;\n}\n.card__right-container {\n  display: flex;\n  align-items: center;\n  gap: var(--spacer-3);\n}\n.card__success-animation {\n  display: flex;\n  align-items: center;\n  gap: var(--spacer-2);\n}\n\n.connections {\n  display: inline-flex;\n}\n.connections__label {\n  margin-right: var(--spacer-4);\n}\n.connections__list {\n  display: inline-flex;\n  align-items: flex-start;\n  flex-wrap: wrap;\n}\n.connections__connection, .connections__create-form {\n  margin: var(--spacer-0) var(--spacer-2) var(--spacer-2) var(--spacer-1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);