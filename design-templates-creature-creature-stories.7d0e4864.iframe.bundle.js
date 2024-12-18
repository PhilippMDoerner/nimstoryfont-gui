(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[4359],{"./src/app/_services/routing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>RoutingService});var RoutingService_1,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),src_utils_logging__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/logging.ts"),src_utils_object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/object.ts");let RoutingService=class RoutingService{static{RoutingService_1=this}constructor(router){this.router=router,this.NONE_STRING="None",this.routeNodes=this.getRouteTree(),(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(`${RoutingService_1.name}-routeNodes`,this.routeNodes)}routeToPath(routeName,params){(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(RoutingService_1.name,`Routing to ${routeName}`);const routePath=this.getRoutePath(routeName,params),cleanedObjectUrl=this.replaceSpecialUnicodeCharacters(routePath);this.router.navigateByUrl(cleanedObjectUrl)}getRoutePath(routeName,params={}){let variableRoutePath=this.getVariableRoutePathByName(routeName);if(this.hasPathVariables(variableRoutePath)){const variableNames=this.getPathVariableNames(variableRoutePath);for(let variableName of variableNames){const propertyKey=(0,src_utils_object__WEBPACK_IMPORTED_MODULE_1__.Ui)(params,variableName);if(null!=propertyKey)null===params[propertyKey]&&(params[propertyKey]=this.NONE_STRING),variableRoutePath=variableRoutePath.replace(`:${variableName}`,params[propertyKey]);else{const e=new Error(`Tried to create path for route '${routeName}' but lacked parameter '${variableName}' `);console.error(e,"Provided Params: ",params)}}}return`/${variableRoutePath}`}routeToErrorPage(error){if("number"!=typeof error&&!error.hasOwnProperty("status"))throw"Incorrect error input. The input does not contain an error status or an object with the error status. Can not route to error page without error status.";"number"!=typeof error&&error.hasOwnProperty("status")&&(error=error.status);const errorStatusParam=`${error}`;this.routeToPath("error",{errorStatus:errorStatusParam})}routeNameMatches(route,routeName){return route.snapshot.data.name===routeName}replaceSpecialUnicodeCharacters(routePath){return routePath.replace("(","%28").replace(")","%29").replace("?","?").replace("†","%E2%80%A0")}getVariableRoutePathByName(routeName){return this.getVariableRouteByName(routeName).fullPath}getVariableRouteByName(routeName){const route=this.routeNodes[routeName];if(null==route)throw`There is no route with the name ${routeName}. Please contact the Developer to use either a different route name or create a route for this name.`;return route}hasPathVariables(routePath){return routePath.includes("/:")}hasRoutePath(routeName){return null!=this.routeNodes[routeName]}getEndRoutes(route,parentPath=""){let path="";parentPath&&route.path?path=`${parentPath}/${route.path}`:parentPath?path=parentPath:route.path&&(path=route.path);return null==route.children?[{route,fullPath:path}]:route.children.map((route=>this.getEndRoutes(route,path))).flat()}getPathVariableNames(routePath){const pathVariables=routePath.split("/").filter((segment=>segment.startsWith(":")));return pathVariables.map((segment=>segment.slice(1)))}getRouteTree(){return this.router.config.map((route=>this.getEndRoutes(route))).flat().reduce(((acc,route)=>{const routeName=route.route?.data?.name;return null!=routeName&&(acc[routeName]=route),acc}),{})}static{this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_2__.Ix}]}};RoutingService=RoutingService_1=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({providedIn:"root"})],RoutingService)},"./src/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/design/organisms/editable-text/editable-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>EditableTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var editable_text_componentngResource=__webpack_require__("./src/design/organisms/editable-text/editable-text.component.scss?ngResource"),editable_text_componentngResource_default=__webpack_require__.n(editable_text_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),tinymce_tinymce_angular=__webpack_require__("./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs"),alert_component=__webpack_require__("./src/design/atoms/alert/alert.component.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),separator_component=__webpack_require__("./src/design/atoms/separator/separator.component.ts"),formly_editor_field_constants=__webpack_require__("./src/design/organisms/formly-editor-field/formly-editor-field.constants.ts");let EditableTextComponent=class EditableTextComponent{constructor(){this.text=core.input.required(),this.placeholder=core.input.required(),this.canUpdate=core.input.required(),this.serverModel=(0,core.input)(),this.heading=(0,core.input)(),this.update=(0,core.output)(),this.settings=formly_editor_field_constants.O,this.state=(0,core.signal)("DISPLAY"),this.textModel="",this.editButtonText=(0,core.computed)((()=>{switch(this.state()){case"DISPLAY":return"edit";case"UPDATE":case"OUTDATED_UPDATE":return"cancel"}})),this.editorField=(0,core.viewChild)("editor"),(0,core.effect)((()=>{null!=this.serverModel()&&this.state.set("OUTDATED_UPDATE")}),{allowSignalWrites:!0})}toggleEdit(){"UPDATE"===this.state()?this.cancelEdit():this.startEdit()}startEdit(){this.state.set("UPDATE"),this.textModel=this.text(),this.focusField()}finishEdit(){this.update.emit(this.textModel),this.state.set("DISPLAY")}cancelEdit(){this.textModel=this.text(),this.state.set("DISPLAY")}focusField(){setTimeout((()=>this.editorField()._editor.focus()),100)}static{this.ctorParameters=()=>[]}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],placeholder:[{type:core.Input,args:[{isSignal:!0,alias:"placeholder",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!1,transform:void 0}]}],heading:[{type:core.Input,args:[{isSignal:!0,alias:"heading",required:!1,transform:void 0}]}],update:[{type:core.Output,args:["update"]}],editorField:[{type:core.ViewChild,args:["editor",{isSignal:!0}]}]}}};EditableTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-editable-text",standalone:!0,imports:[common.NgTemplateOutlet,html_text_component.m,icon_component.R,tinymce_tinymce_angular.xn,fesm2022_forms.YN,alert_component.C,separator_component.F,button_component.Q],template:'\x3c!-- Heading --\x3e\n@let headingVal = heading();\n@if (headingVal) {\n  <h4 class="heading">\n    <app-html-text [text]="headingVal" />\n    @if (canUpdate()) {\n      <button class="heading__edit-button" (click)="toggleEdit()">\n        <h6 class="heading__edit-text">\n          (\n          {{ editButtonText() }}\n          <app-icon [icon]="\'pen\'"></app-icon>\n          )\n        </h6>\n      </button>\n    }\n  </h4>\n}\n\n\x3c!-- Text Body --\x3e\n@if (canUpdate()) {\n  <button\n    class="field field--display"\n    [class.field--hidden]="state() !== \'DISPLAY\'"\n    (click)="startEdit()"\n  >\n    <ng-container *ngTemplateOutlet="textBody" />\n  </button>\n  <form\n    class="field field--update"\n    [class.field--hidden]="state() !== \'UPDATE\'"\n    (submit)="finishEdit()"\n  >\n    <editor\n      #editor\n      id="editor"\n      [init]="settings"\n      name="textEditField"\n      [(ngModel)]="textModel"\n      class="mb-2"\n    ></editor>\n\n    \x3c!-- Form Buttons --\x3e\n    <ng-container [ngTemplateOutlet]="formButtons" />\n  </form>\n  <div\n    class="field field--update"\n    [class.field--hidden]="state() !== \'OUTDATED_UPDATE\'"\n  >\n    \x3c!-- Informating heading --\x3e\n    <app-alert [kind]="\'INFO\'">\n      <app-icon [icon]="\'info-circle\'"></app-icon>\n      While you were updating this article, somebody else went ahead and updated\n      it as well. Please include their changes in your update before submitting.\n    </app-alert>\n\n    \x3c!-- Textfield-Form --\x3e\n    <div class="flex-column card p-4">\n      \x3c!-- Comparison text --\x3e\n      <div>\n        <h3>Server Version</h3>\n        <app-html-text [text]="serverModel()!" />\n      </div>\n\n      <app-separator />\n\n      \x3c!-- Actual edit form --\x3e\n      <form (submit)="finishEdit()">\n        <h3>Your Version</h3>\n\n        <editor\n          [init]="settings"\n          name="textEditField"\n          [(ngModel)]="textModel"\n          class="mb-2"\n        ></editor>\n\n        \x3c!-- Form Buttons --\x3e\n        <ng-container [ngTemplateOutlet]="formButtons" />\n      </form>\n    </div>\n  </div>\n} @else {\n  <ng-container *ngTemplateOutlet="textBody" />\n}\n\n<ng-template #formButtons>\n  <div class="field__buttons">\n    <button\n      btn\n      [icon]="\'check\'"\n      [text]="\'Submit\'"\n      [kind]="\'PRIMARY\'"\n      [type]="\'submit\'"\n    ></button>\n    <button\n      btn\n      [icon]="\'times\'"\n      [text]="\'Cancel\'"\n      [kind]="\'SECONDARY\'"\n      (click)="cancelEdit()"\n    ></button>\n  </div>\n</ng-template>\n\n<ng-template #textBody>\n  <app-html-text [text]="text() || placeholder()" />\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[editable_text_componentngResource_default()]})],EditableTextComponent)},"./src/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',standalone:!0,imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./src/utils/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ui:()=>getCorrectKey,p:()=>getNestedProperty});var _string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/string.ts");function getCorrectKey(obj,key){if(key in obj)return key;const snakeCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.C8)(key);if(snakeCaseKey in obj)return snakeCaseKey;const camelCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.sF)(key);return camelCaseKey in obj?camelCaseKey:void 0}function getNestedProperty(item,keyPath){const keys=keyPath.split(".");let currentValue=item;for(let key of keys){if(!(key in currentValue)){throw new Error(`Cannot find nested property '${keyPath}' in '${JSON.stringify(item)}'`)}currentValue=currentValue[key]}return currentValue}},"./src/design/templates/creature/creature.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>creature_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var creature_componentngResource=__webpack_require__("./src/design/templates/creature/creature.component.scss?ngResource"),creature_componentngResource_default=__webpack_require__.n(creature_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),molecules=__webpack_require__("./src/design/molecules/index.ts"),editable_text_component=__webpack_require__("./src/design/organisms/editable-text/editable-text.component.ts"),image_carousel_card_component=__webpack_require__("./src/design/organisms/image-carousel-card/image-carousel-card.component.ts"),page_container_component=__webpack_require__("./src/design/organisms/page-container/page-container.component.ts");let CreatureComponent=class CreatureComponent{onDescriptionUpdate(description){const creatureToUpdate=void 0!==this.creatureServerModel()?this.creatureServerModel():this.creature();creatureToUpdate&&this.creatureUpdate.emit({...creatureToUpdate,description})}constructor(routingService){this.routingService=routingService,this.creature=core.input.required(),this.creatureServerModel=core.input.required(),this.serverUrl=core.input.required(),this.canUpdate=(0,core.input)(!1),this.canCreate=(0,core.input)(!1),this.canDelete=(0,core.input)(!1),this.imageServerModel=(0,core.input)(),this.creatureUpdate=(0,core.output)(),this.creatureDelete=new core.EventEmitter,this.createImage=new core.EventEmitter,this.deleteImage=new core.EventEmitter,this.updateImage=new core.EventEmitter,this.campaignName=(0,core.computed)((()=>this.creature().campaign_details?.name)),this.overviewUrl=(0,core.computed)((()=>this.routingService.getRoutePath("creature-overview",{campaign:this.campaignName()}))),this.updateUrl=(0,core.computed)((()=>this.routingService.getRoutePath("creature-update",{campaign:this.campaignName(),name:this.creature().name})))}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={creature:[{type:core.Input,args:[{isSignal:!0,alias:"creature",required:!0,transform:void 0}]}],creatureServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"creatureServerModel",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!1,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!1,transform:void 0}]}],imageServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"imageServerModel",required:!1,transform:void 0}]}],creatureUpdate:[{type:core.Output,args:["creatureUpdate"]}],creatureDelete:[{type:core.Output}],createImage:[{type:core.Output}],deleteImage:[{type:core.Output}],updateImage:[{type:core.Output}]}}};CreatureComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-creature",template:'<app-page-container>\n  <article class="container creature">\n    @if (canUpdate()) {\n      <div class="creature__edit-container">\n        <a [routerLink]="updateUrl()" tabindex="-1">\n          <button btn [icon]="\'pencil\'" [kind]="\'SECONDARY\'"></button>\n        </a>\n      </div>\n    }\n\n    \x3c!-- Heading --\x3e\n    <div class="row">\n      <h1 class="col-12 creature__heading">\n        {{ creature().name }}\n      </h1>\n    </div>\n\n    \x3c!-- Image Gallery --\x3e\n    <div class="creature__images">\n      <app-image-carousel-card\n        [images]="creature().images ?? []"\n        [serverUrl]="serverUrl()"\n        [serverModel]="imageServerModel()"\n        [canUpdate]="canUpdate()"\n        [canCreate]="canCreate()"\n        [canDelete]="canDelete()"\n        (createImage)="createImage.emit($event)"\n        (deleteImage)="deleteImage.emit($event)"\n        (updateImage)="updateImage.emit($event)"\n      ></app-image-carousel-card>\n    </div>\n\n    \x3c!-- Description --\x3e\n    <app-editable-text\n      class="creature__description"\n      [heading]="\'Description\'"\n      [placeholder]="\'Add a description for \' + creature().name"\n      [text]="creature().description"\n      [serverModel]="creatureServerModel()?.description"\n      [canUpdate]="canUpdate()"\n      (update)="onDescriptionUpdate($event)"\n    ></app-editable-text>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [buttonLink]="overviewUrl()"\n      [buttonLabel]="\'Back to Creatures\'"\n      [showDelete]="canDelete()"\n      [deleteMessage]="\'Delete \' + creature().name + \'?\'"\n      (delete)="creatureDelete.emit(creature())"\n    ></app-article-footer>\n  </article>\n</app-page-container>\n',standalone:!0,imports:[editable_text_component.T,page_container_component.i,button_component.Q,router.Wk,image_carousel_card_component.r,molecules.D$],styles:[creature_componentngResource_default()]})],CreatureComponent);const creature_stories={title:"DesignSystem/Templates/CreatureComponent",component:CreatureComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,formly_constants.d_],declarations:[]})],args:{imageServerModel:void 0,canCreate:!0,canUpdate:!0,canDelete:!0,creature:{getAbsoluteRouterUrl:()=>"https://example.com/creatures/123",pk:123,name:"Goblin",creation_datetime:"2022-04-01T12:00:00Z",update_datetime:"2022-04-02T15:30:00Z",description:"A small, green-skinned humanoid with sharp teeth and claws.",campaign:4,campaign_details:{id:4,name:"Lost Mines of Phandelver"},images:[{pk:1,image:"/breeds/mastiff-tibetan/n02108551_5830.jpg",name:"Goblin portrait",creature_article:123},{pk:2,image:"/breeds/germanshepherd/IMG_20200801_005830_387.jpg",name:"Goblin horde",creature_article:123}]},serverUrl:"https://images.dog.ceo"}},Template=args=>({props:{...args,createImage:(0,dist.XI)("createImage"),deleteImage:(0,dist.XI)("deleteImage"),updateImage:(0,dist.XI)("updateImage"),creatureDelete:(0,dist.XI)("creatureDelete")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1,canCreate:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    creatureDelete: action('creatureDelete')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    creatureDelete: action('creatureDelete')\n  }\n})",...NoPermission.parameters?.docs?.source}}}},"./src/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/editable-text/editable-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-block;\n}\n\n.heading {\n  margin-bottom: var(--spacer-2);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--spacer-3);\n}\n.heading__edit-text {\n  margin: var(--spacer-0);\n}\n.heading__edit-button:focus, .heading__edit-button:focus-within, .heading__edit-button:hover {\n  border-radius: var(--bs-border-radius);\n  outline: var(--focus-outline);\n}\n\n.field {\n  text-align: unset;\n  border-radius: var(--bs-border-radius);\n}\n.field--display {\n  min-height: 1rem;\n  width: 100%;\n}\n.field--display:focus, .field--display:hover {\n  color: unset;\n  background-color: var(--bs-secondary);\n}\n.field--hidden {\n  display: none;\n}\n.field__buttons {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/creature/creature.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".creature__edit-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.creature__heading {\n  text-align: center;\n}\n.creature__subheading {\n  margin-bottom: var(--spacer-3);\n  text-align: center;\n}\n.creature__images {\n  margin-bottom: var(--spacer-3);\n}\n.creature__description {\n  width: 100%;\n  margin-bottom: var(--spacer-5);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);