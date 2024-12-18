(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[8671],{"./src/app/_services/routing.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>RoutingService});var RoutingService_1,tslib__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_router__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),src_utils_logging__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/logging.ts"),src_utils_object__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/object.ts");let RoutingService=class RoutingService{static{RoutingService_1=this}constructor(router){this.router=router,this.NONE_STRING="None",this.routeNodes=this.getRouteTree(),(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(`${RoutingService_1.name}-routeNodes`,this.routeNodes)}routeToPath(routeName,params){(0,src_utils_logging__WEBPACK_IMPORTED_MODULE_0__.R)(RoutingService_1.name,`Routing to ${routeName}`);const routePath=this.getRoutePath(routeName,params),cleanedObjectUrl=this.replaceSpecialUnicodeCharacters(routePath);this.router.navigateByUrl(cleanedObjectUrl)}getRoutePath(routeName,params={}){let variableRoutePath=this.getVariableRoutePathByName(routeName);if(this.hasPathVariables(variableRoutePath)){const variableNames=this.getPathVariableNames(variableRoutePath);for(let variableName of variableNames){const propertyKey=(0,src_utils_object__WEBPACK_IMPORTED_MODULE_1__.Ui)(params,variableName);if(null!=propertyKey)null===params[propertyKey]&&(params[propertyKey]=this.NONE_STRING),variableRoutePath=variableRoutePath.replace(`:${variableName}`,params[propertyKey]);else{const e=new Error(`Tried to create path for route '${routeName}' but lacked parameter '${variableName}' `);console.error(e,"Provided Params: ",params)}}}return`/${variableRoutePath}`}routeToErrorPage(error){if("number"!=typeof error&&!error.hasOwnProperty("status"))throw"Incorrect error input. The input does not contain an error status or an object with the error status. Can not route to error page without error status.";"number"!=typeof error&&error.hasOwnProperty("status")&&(error=error.status);const errorStatusParam=`${error}`;this.routeToPath("error",{errorStatus:errorStatusParam})}routeNameMatches(route,routeName){return route.snapshot.data.name===routeName}replaceSpecialUnicodeCharacters(routePath){return routePath.replace("(","%28").replace(")","%29").replace("?","?").replace("†","%E2%80%A0")}getVariableRoutePathByName(routeName){return this.getVariableRouteByName(routeName).fullPath}getVariableRouteByName(routeName){const route=this.routeNodes[routeName];if(null==route)throw`There is no route with the name ${routeName}. Please contact the Developer to use either a different route name or create a route for this name.`;return route}hasPathVariables(routePath){return routePath.includes("/:")}hasRoutePath(routeName){return null!=this.routeNodes[routeName]}getEndRoutes(route,parentPath=""){let path="";parentPath&&route.path?path=`${parentPath}/${route.path}`:parentPath?path=parentPath:route.path&&(path=route.path);return null==route.children?[{route,fullPath:path}]:route.children.map((route=>this.getEndRoutes(route,path))).flat()}getPathVariableNames(routePath){const pathVariables=routePath.split("/").filter((segment=>segment.startsWith(":")));return pathVariables.map((segment=>segment.slice(1)))}getRouteTree(){return this.router.config.map((route=>this.getEndRoutes(route))).flat().reduce(((acc,route)=>{const routeName=route.route?.data?.name;return null!=routeName&&(acc[routeName]=route),acc}),{})}static{this.ctorParameters=()=>[{type:_angular_router__WEBPACK_IMPORTED_MODULE_2__.Ix}]}};RoutingService=RoutingService_1=(0,tslib__WEBPACK_IMPORTED_MODULE_3__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({providedIn:"root"})],RoutingService)},"./src/design/atoms/html-text/html-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{m:()=>HtmlTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var html_text_componentngResource=__webpack_require__("./src/design/atoms/html-text/html-text.component.scss?ngResource"),html_text_componentngResource_default=__webpack_require__.n(html_text_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let HtmlTextComponent=class HtmlTextComponent{constructor(){this.text=core.input.required()}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}]}}};HtmlTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-html-text",template:'<div [innerHTML]="text()"></div>\n',standalone:!0,changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[html_text_componentngResource_default()]})],HtmlTextComponent)},"./src/design/organisms/editable-text/editable-text.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>EditableTextComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var editable_text_componentngResource=__webpack_require__("./src/design/organisms/editable-text/editable-text.component.scss?ngResource"),editable_text_componentngResource_default=__webpack_require__.n(editable_text_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),tinymce_tinymce_angular=__webpack_require__("./node_modules/@tinymce/tinymce-angular/fesm2020/tinymce-tinymce-angular.mjs"),alert_component=__webpack_require__("./src/design/atoms/alert/alert.component.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),separator_component=__webpack_require__("./src/design/atoms/separator/separator.component.ts"),formly_editor_field_constants=__webpack_require__("./src/design/organisms/formly-editor-field/formly-editor-field.constants.ts");let EditableTextComponent=class EditableTextComponent{constructor(){this.text=core.input.required(),this.placeholder=core.input.required(),this.canUpdate=core.input.required(),this.serverModel=(0,core.input)(),this.heading=(0,core.input)(),this.update=(0,core.output)(),this.settings=formly_editor_field_constants.O,this.state=(0,core.signal)("DISPLAY"),this.textModel="",this.editButtonText=(0,core.computed)((()=>{switch(this.state()){case"DISPLAY":return"edit";case"UPDATE":case"OUTDATED_UPDATE":return"cancel"}})),this.editorField=(0,core.viewChild)("editor"),(0,core.effect)((()=>{null!=this.serverModel()&&this.state.set("OUTDATED_UPDATE")}),{allowSignalWrites:!0})}toggleEdit(){"UPDATE"===this.state()?this.cancelEdit():this.startEdit()}startEdit(){this.state.set("UPDATE"),this.textModel=this.text(),this.focusField()}finishEdit(){this.update.emit(this.textModel),this.state.set("DISPLAY")}cancelEdit(){this.textModel=this.text(),this.state.set("DISPLAY")}focusField(){setTimeout((()=>this.editorField()._editor.focus()),100)}static{this.ctorParameters=()=>[]}static{this.propDecorators={text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!0,transform:void 0}]}],placeholder:[{type:core.Input,args:[{isSignal:!0,alias:"placeholder",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],serverModel:[{type:core.Input,args:[{isSignal:!0,alias:"serverModel",required:!1,transform:void 0}]}],heading:[{type:core.Input,args:[{isSignal:!0,alias:"heading",required:!1,transform:void 0}]}],update:[{type:core.Output,args:["update"]}],editorField:[{type:core.ViewChild,args:["editor",{isSignal:!0}]}]}}};EditableTextComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-editable-text",standalone:!0,imports:[common.NgTemplateOutlet,html_text_component.m,icon_component.R,tinymce_tinymce_angular.xn,fesm2022_forms.YN,alert_component.C,separator_component.F,button_component.Q],template:'\x3c!-- Heading --\x3e\n@let headingVal = heading();\n@if (headingVal) {\n  <h4 class="heading">\n    <app-html-text [text]="headingVal" />\n    @if (canUpdate()) {\n      <button class="heading__edit-button" (click)="toggleEdit()">\n        <h6 class="heading__edit-text">\n          (\n          {{ editButtonText() }}\n          <app-icon [icon]="\'pen\'"></app-icon>\n          )\n        </h6>\n      </button>\n    }\n  </h4>\n}\n\n\x3c!-- Text Body --\x3e\n@if (canUpdate()) {\n  <button\n    class="field field--display"\n    [class.field--hidden]="state() !== \'DISPLAY\'"\n    (click)="startEdit()"\n  >\n    <ng-container *ngTemplateOutlet="textBody" />\n  </button>\n  <form\n    class="field field--update"\n    [class.field--hidden]="state() !== \'UPDATE\'"\n    (submit)="finishEdit()"\n  >\n    <editor\n      #editor\n      id="editor"\n      [init]="settings"\n      name="textEditField"\n      [(ngModel)]="textModel"\n      class="mb-2"\n    ></editor>\n\n    \x3c!-- Form Buttons --\x3e\n    <ng-container [ngTemplateOutlet]="formButtons" />\n  </form>\n  <div\n    class="field field--update"\n    [class.field--hidden]="state() !== \'OUTDATED_UPDATE\'"\n  >\n    \x3c!-- Informating heading --\x3e\n    <app-alert [kind]="\'INFO\'">\n      <app-icon [icon]="\'info-circle\'"></app-icon>\n      While you were updating this article, somebody else went ahead and updated\n      it as well. Please include their changes in your update before submitting.\n    </app-alert>\n\n    \x3c!-- Textfield-Form --\x3e\n    <div class="flex-column card p-4">\n      \x3c!-- Comparison text --\x3e\n      <div>\n        <h3>Server Version</h3>\n        <app-html-text [text]="serverModel()!" />\n      </div>\n\n      <app-separator />\n\n      \x3c!-- Actual edit form --\x3e\n      <form (submit)="finishEdit()">\n        <h3>Your Version</h3>\n\n        <editor\n          [init]="settings"\n          name="textEditField"\n          [(ngModel)]="textModel"\n          class="mb-2"\n        ></editor>\n\n        \x3c!-- Form Buttons --\x3e\n        <ng-container [ngTemplateOutlet]="formButtons" />\n      </form>\n    </div>\n  </div>\n} @else {\n  <ng-container *ngTemplateOutlet="textBody" />\n}\n\n<ng-template #formButtons>\n  <div class="field__buttons">\n    <button\n      btn\n      [icon]="\'check\'"\n      [text]="\'Submit\'"\n      [kind]="\'PRIMARY\'"\n      [type]="\'submit\'"\n    ></button>\n    <button\n      btn\n      [icon]="\'times\'"\n      [text]="\'Cancel\'"\n      [kind]="\'SECONDARY\'"\n      (click)="cancelEdit()"\n    ></button>\n  </div>\n</ng-template>\n\n<ng-template #textBody>\n  <app-html-text [text]="text() || placeholder()" />\n</ng-template>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[editable_text_componentngResource_default()]})],EditableTextComponent)},"./src/design/organisms/location-accordion/location-accordion.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>LocationAccordionComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var location_accordion_componentngResource=__webpack_require__("./src/design/organisms/location-accordion/location-accordion.component.scss?ngResource"),location_accordion_componentngResource_default=__webpack_require__.n(location_accordion_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),ng_bootstrap=__webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/fesm2022/ng-bootstrap.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),location_component=__webpack_require__("./src/design/organisms/location/location.component.ts");let LocationAccordionComponent=class LocationAccordionComponent{constructor(routingService){this.routingService=routingService,this.locations=core.input.required(),this.campaignCharacters=core.input.required(),this.canCreate=(0,core.input)(!1),this.campaignName=core.input.required(),this.accordionEntries=(0,core.computed)((()=>this.locations().map((loc=>{const parentLocationName=loc.parent_location_details?.name,campaignName=loc.campaign_details?.name;return{value:loc,link:this.routingService.getRoutePath("location",{parent_name:parentLocationName,name:loc.name,campaign:campaignName})}})))),this.createUrl=(0,core.computed)((()=>this.routingService.getRoutePath("location-create",{campaign:this.campaignName()})))}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={locations:[{type:core.Input,args:[{isSignal:!0,alias:"locations",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!1,transform:void 0}]}],campaignName:[{type:core.Input,args:[{isSignal:!0,alias:"campaignName",required:!0,transform:void 0}]}]}}};LocationAccordionComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-location-accordion",template:'<h4>\n  Locations of Interest\n\n  @if (canCreate()) {\n    <a class="create-button" [routerLink]="createUrl()" tabindex="-1">\n      <button\n        btn\n        title="Create Location"\n        [kind]="\'PRIMARY\'"\n        [size]="\'SMALL\'"\n        [icon]="\'plus\'"\n      ></button>\n    </a>\n  }\n</h4>\n\n<div ngbAccordion [closeOthers]="true">\n  @for (entry of accordionEntries(); track entry.value.pk) {\n    <div ngbAccordionItem [id]="\'static-\' + $index">\n      \x3c!-- Header --\x3e\n      <div ngbAccordionHeader class="button-container">\n        <button btn [kind]="\'NONE\'" ngbAccordionButton>\n          <a class="location-title" [routerLink]="entry.link">\n            {{ entry.value.name }}\n          </a>\n        </button>\n      </div>\n\n      \x3c!-- Body --\x3e\n      <div ngbAccordionCollapse>\n        <div ngbAccordionBody>\n          <app-location\n            [location]="entry.value"\n            [campaignCharacters]="campaignCharacters()"\n          />\n        </div>\n      </div>\n    </div>\n  }\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[button_component.Q,router.Wk,ng_bootstrap._f,location_component.b],styles:[location_accordion_componentngResource_default()]})],LocationAccordionComponent)},"./src/design/organisms/location/location.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>LocationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var location_componentngResource=__webpack_require__("./src/design/organisms/location/location.component.scss?ngResource"),location_componentngResource_default=__webpack_require__.n(location_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),html_text_component=__webpack_require__("./src/design/atoms/html-text/html-text.component.ts"),separator_component=__webpack_require__("./src/design/atoms/separator/separator.component.ts"),molecules=__webpack_require__("./src/design/molecules/index.ts");let LocationComponent=class LocationComponent{constructor(){this.routingService=(0,core.inject)(routing_service.O),this.location=core.input.required(),this.campaignCharacters=core.input.required(),this.localCharacters=(0,core.computed)((()=>{const characters=this.location().characters??[],campaignName=this.location().campaign_details?.name;return characters.map((character=>{const link=this.routingService.getRoutePath("character",{campaign:campaignName,name:character.name});return{badgeValue:character,text:character.name,link}}))}))}static{this.propDecorators={location:[{type:core.Input,args:[{isSignal:!0,alias:"location",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}]}}};LocationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-location",template:'<h4 class="card__heading">\n  {{ location().name }}\n</h4>\n\n\x3c!-- Location --\x3e\n<div class="card__text">\n  <app-html-text [text]="location().description"></app-html-text>\n</div>\n\n<app-separator></app-separator>\n\x3c!-- List of Characters at this location --\x3e\n@if (localCharacters().length > 0) {\n  <div class="card__connections">\n    <app-badge-list\n      [entries]="localCharacters()"\n      [label]="\'Local Characters\'"\n      [canCreate]="false"\n      [canDelete]="false"\n    ></app-badge-list>\n  </div>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,standalone:!0,imports:[separator_component.F,html_text_component.m,molecules.pn],styles:[location_componentngResource_default()]})],LocationComponent)},"./src/design/organisms/page-container/page-container.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{i:()=>PageContainerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var page_container_componentngResource=__webpack_require__("./src/design/organisms/page-container/page-container.component.scss?ngResource"),page_container_componentngResource_default=__webpack_require__.n(page_container_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),animations=__webpack_require__("./node_modules/@angular/animations/fesm2022/animations.mjs");const fadeIn=(0,animations.hZ)("fadeIn",[(0,animations.kY)(":enter",[(0,animations.iF)({opacity:0}),(0,animations.i0)("250ms ease-in",(0,animations.iF)({opacity:1}))]),(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);(0,animations.hZ)("fadeOut",[(0,animations.kY)(":leave",[(0,animations.iF)({opacity:1}),(0,animations.i0)("250ms ease-out",(0,animations.iF)({opacity:0}))])]);let PageContainerComponent=class PageContainerComponent{};PageContainerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-page-container",template:'<div class="page" [@fadeIn]>\n  <article class="page__foreground">\n    <ng-content></ng-content>\n  </article>\n</div>\n',standalone:!0,imports:[],animations:[fadeIn],styles:[page_container_componentngResource_default()]})],PageContainerComponent)},"./src/utils/object.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ui:()=>getCorrectKey,p:()=>getNestedProperty});var _string__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/utils/string.ts");function getCorrectKey(obj,key){if(key in obj)return key;const snakeCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.C8)(key);if(snakeCaseKey in obj)return snakeCaseKey;const camelCaseKey=(0,_string__WEBPACK_IMPORTED_MODULE_0__.sF)(key);return camelCaseKey in obj?camelCaseKey:void 0}function getNestedProperty(item,keyPath){const keys=keyPath.split(".");let currentValue=item;for(let key of keys){if(!(key in currentValue)){throw new Error(`Cannot find nested property '${keyPath}' in '${JSON.stringify(item)}'`)}currentValue=currentValue[key]}return currentValue}},"./src/design/templates/location-template/location-template.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,__namedExportsOrder:()=>__namedExportsOrder,default:()=>location_template_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var location_template_componentngResource=__webpack_require__("./src/design/templates/location-template/location-template.component.scss?ngResource"),location_template_componentngResource_default=__webpack_require__.n(location_template_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),page_container_component=__webpack_require__("./src/design/organisms/page-container/page-container.component.ts"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),button_component=__webpack_require__("./src/design/atoms/button/button.component.ts"),icon_component=__webpack_require__("./src/design/atoms/icon/icon.component.ts"),image_carousel_card_component=__webpack_require__("./src/design/organisms/image-carousel-card/image-carousel-card.component.ts"),badge_list_component=__webpack_require__("./src/design/molecules/badge-list/badge-list.component.ts"),editable_text_component=__webpack_require__("./src/design/organisms/editable-text/editable-text.component.ts"),list_component=__webpack_require__("./src/design/molecules/list/list.component.ts"),location_accordion_component=__webpack_require__("./src/design/organisms/location-accordion/location-accordion.component.ts"),article_footer_component=__webpack_require__("./src/design/molecules/article-footer/article-footer.component.ts");let LocationTemplateComponent=class LocationTemplateComponent{constructor(routingService){this.routingService=routingService,this.location=core.input.required(),this.campaignCharacters=core.input.required(),this.locationServerModel=core.input.required(),this.serverUrl=core.input.required(),this.imageServerModel=core.input.required(),this.canUpdate=core.input.required(),this.canCreate=core.input.required(),this.canDelete=core.input.required(),this.createImage=new core.EventEmitter,this.deleteImage=new core.EventEmitter,this.updateImage=new core.EventEmitter,this.locationDelete=new core.EventEmitter,this.locationUpdate=(0,core.output)()}ngOnInit(){const campaignName=this.location().campaign_details?.name;this.overviewUrl=this.routingService.getRoutePath("location-overview",{campaign:campaignName}),this.markerCreateUrl=this.routingService.getRoutePath("marker-create",{parent_location_name:this.location().parent_location_details?.name,location_name:this.location().name,campaign:campaignName}),this.setParentLocations(),this.setLocationCharacters(),this.setMarkerEntries(),this.setUrls()}ngOnChanges(){this.setParentLocations(),this.setLocationCharacters(),this.setMarkerEntries(),this.setUrls()}routeToCharacterCreation(){const campaignName=this.location().campaign_details?.name;this.routingService.routeToPath("character-create",{campaign:campaignName})}onDescriptionUpdate(description){const locationToUpdate=void 0!==this.locationServerModel()?this.locationServerModel():this.location();locationToUpdate&&this.locationUpdate.emit({...locationToUpdate,description})}setUrls(){const campaignName=this.location().campaign_details?.name;this.updateUrl=this.routingService.getRoutePath("location-update",{name:this.location().name,parent_name:this.location().parent_location,campaign:campaignName})}setLocationCharacters(){const campaignName=this.location().campaign_details?.name;this.locationCharacters=this.location().characters?.map((character=>({label:character.name,link:this.routingService.getRoutePath("character",{campaign:campaignName,name:character.name})})))??[]}setMarkerEntries(){const campaignName=this.location().campaign_details?.name;this.markerEntries=this.location().marker_details?.map((marker=>({text:marker.map,link:this.routingService.getRoutePath("marker",{parent_location_name:this.location().parent_location_details?.name??"None",location_name:this.location().name,map_name:marker.map,campaign:campaignName}),badgeValue:marker.map})))??[]}setParentLocations(){const parentNames=this.location().parent_location_list;this.parentLocations=parentNames?.map((parent=>({label:parent,link:this.buildLocationUrl(parent,parentNames)})))??[]}buildLocationUrl(locationName,locationList){if(!locationList)throw"Tried building a route to a location in parent_location_list when there is no parent_location_list";const index=locationList.indexOf(locationName),parentLocationName=0===index?"None":locationList[index-1],campaignName=this.location().campaign_details?.name;return this.routingService.getRoutePath("location",{parent_name:parentLocationName,name:locationName,campaign:campaignName})}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={location:[{type:core.Input,args:[{isSignal:!0,alias:"location",required:!0,transform:void 0}]}],campaignCharacters:[{type:core.Input,args:[{isSignal:!0,alias:"campaignCharacters",required:!0,transform:void 0}]}],locationServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"locationServerModel",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],imageServerModel:[{type:core.Input,args:[{isSignal:!0,alias:"imageServerModel",required:!0,transform:void 0}]}],canUpdate:[{type:core.Input,args:[{isSignal:!0,alias:"canUpdate",required:!0,transform:void 0}]}],canCreate:[{type:core.Input,args:[{isSignal:!0,alias:"canCreate",required:!0,transform:void 0}]}],canDelete:[{type:core.Input,args:[{isSignal:!0,alias:"canDelete",required:!0,transform:void 0}]}],createImage:[{type:core.Output}],deleteImage:[{type:core.Output}],updateImage:[{type:core.Output}],locationDelete:[{type:core.Output}],locationUpdate:[{type:core.Output,args:["locationUpdate"]}]}}};LocationTemplateComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-location-template",template:'<app-page-container>\n  <article class="container">\n    @if (canUpdate()) {\n      <div class="location__edit-container">\n        <a [routerLink]="updateUrl" tabindex="-1">\n          <button\n            btn\n            [title]="\'Edit \' + location().name"\n            [icon]="\'pencil\'"\n            [kind]="\'SECONDARY\'"\n          ></button>\n        </a>\n      </div>\n    }\n\n    \x3c!-- Heading --\x3e\n    <div class="row">\n      <h1 class="col-12 location__heading">\n        {{ location().name }}\n      </h1>\n\n      \x3c!-- String indicating all parent_locations --\x3e\n      @if (location().parent_location_list?.length ?? 0 > 0) {\n        <h5 class="col-12 location__subheading subheading">\n          @for (\n            parentLocation of parentLocations;\n            track parentLocation;\n            let i = $index\n          ) {\n            <a [routerLink]="parentLocation.link">\n              {{ parentLocation.label }}\n            </a>\n            <app-icon\n              class="subheading__icon"\n              [icon]="\'arrow-right\'"\n            ></app-icon>\n          }\n          {{ location().name }}\n        </h5>\n      }\n    </div>\n\n    \x3c!-- Image Gallery --\x3e\n    <div class="location__images">\n      \x3c!-- Image Gallery --\x3e\n      <app-image-carousel-card\n        [images]="location().images ?? []"\n        [serverUrl]="serverUrl()"\n        [serverModel]="imageServerModel()"\n        [canUpdate]="canUpdate()"\n        [canCreate]="canCreate()"\n        [canDelete]="canDelete()"\n        (createImage)="createImage.emit($event)"\n        (deleteImage)="deleteImage.emit($event)"\n        (updateImage)="updateImage.emit($event)"\n      ></app-image-carousel-card>\n    </div>\n\n    <div class="mb-3">\n      <app-badge-list\n        [entries]="markerEntries"\n        [canCreate]="canCreate()"\n        [canDelete]="false"\n        [label]="\'Mapmarker\'"\n        [createOptions]="{\n          kind: \'LINK\',\n          link: markerCreateUrl,\n        }"\n      ></app-badge-list>\n    </div>\n\n    \x3c!-- Description --\x3e\n    <app-editable-text\n      class="location__description"\n      [heading]="\'Description\'"\n      [placeholder]="\'Add a description for \' + location().name"\n      [text]="location().description"\n      [canUpdate]="canUpdate()"\n      (update)="onDescriptionUpdate($event)"\n    ></app-editable-text>\n\n    \x3c!-- Characters of Interest --\x3e\n    <div class="location__characters">\n      <app-list\n        [heading]="\'Characters of interest\'"\n        [entries]="locationCharacters"\n        [enableCreate]="canCreate()"\n        [emptyListText]="\'You know nobody in \' + location().name"\n        (create)="routeToCharacterCreation()"\n      ></app-list>\n    </div>\n\n    \x3c!-- Locations of Interest --\x3e\n    <div class="encounter-list mb-5 mt-3">\n      <app-location-accordion\n        [locations]="location().sublocations ?? []"\n        [canCreate]="canCreate()"\n        [campaignName]="location().campaign_details?.name!"\n        [campaignCharacters]="campaignCharacters()"\n      ></app-location-accordion>\n    </div>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [buttonLink]="overviewUrl"\n      [buttonLabel]="\'Back to Creatures\'"\n      [showDelete]="canDelete()"\n      [deleteMessage]="\'Delete \' + location().name + \'?\'"\n      (delete)="locationDelete.emit(location())"\n    ></app-article-footer>\n  </article>\n</app-page-container>\n',standalone:!0,imports:[page_container_component.i,router.Wk,button_component.Q,icon_component.R,image_carousel_card_component.r,badge_list_component.p,editable_text_component.T,list_component.s,location_accordion_component.B,article_footer_component.D],styles:[location_template_componentngResource_default()]})],LocationTemplateComponent);const dummyLocation={getAbsoluteRouterUrl:()=>"location/2",name_full:"Central Park",name:"Central Park",description:"A large public park in New York City.",parent_location:456,images:[{pk:1,image:"/breeds/mastiff-tibetan/n02108551_5830.jpg",name:"Goblin portrait",creature_article:123},{pk:2,image:"/breeds/germanshepherd/IMG_20200801_005830_387.jpg",name:"Goblin horde",creature_article:123}],parent_location_details:{pk:456,name:"New York City",parent_location:"United States",name_full:"New York City, United States"},parent_location_list:["United States","New York City"],characters:[{name:"John Smith",pk:789,name_full:"John Smith"},{name:"Jane Doe",pk:987,name_full:"Jane Doe"}],sublocations:[{creation_datetime:"2022-05-06T09:30:00.000Z",update_datetime:"2022-05-06T10:15:00.000Z",name:"The Pond",pk:124,characters:[{name:"Bob Johnson",pk:456,name_full:"Bob Johnson"},{name:"Alice Williams",pk:654,name_full:"Alice Williams"}],name_full:"The Pond, Central Park",description:"A small body of water in Central Park.",getAbsoluteRouterUrl:()=>"/location/1"}],marker_details:[{map:"map1",map_icon:"icon1"},{map:"map2",map_icon:"icon2"}],getAbsoluteRouterUrlForParentLocation(){return`https://example.com/locations/${this.parent_location}`}},location_template_stories={title:"DesignSystem/Templates/LocationTemplateComponent",component:LocationTemplateComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,formly_constants.d_],declarations:[]})],args:{imageServerModel:void 0,canCreate:!0,canUpdate:!0,canDelete:!0,location:dummyLocation,serverUrl:"https://images.dog.ceo"}},Template=args=>({props:{...args,createImage:(0,dist.XI)("createImage"),deleteImage:(0,dist.XI)("deleteImage"),updateImage:(0,dist.XI)("updateImage"),locationDelete:(0,dist.XI)("locationDelete")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1,canCreate:!1};const __namedExportsOrder=["Default","NoPermission"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    locationDelete: action('locationDelete')\n  }\n})",...Default.parameters?.docs?.source}}},NoPermission.parameters={...NoPermission.parameters,docs:{...NoPermission.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    createImage: action('createImage'),\n    deleteImage: action('deleteImage'),\n    updateImage: action('updateImage'),\n    locationDelete: action('locationDelete')\n  }\n})",...NoPermission.parameters?.docs?.source}}}},"./src/design/atoms/html-text/html-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/editable-text/editable-text.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-block;\n}\n\n.heading {\n  margin-bottom: var(--spacer-2);\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  gap: var(--spacer-3);\n}\n.heading__edit-text {\n  margin: var(--spacer-0);\n}\n.heading__edit-button:focus, .heading__edit-button:focus-within, .heading__edit-button:hover {\n  border-radius: var(--bs-border-radius);\n  outline: var(--focus-outline);\n}\n\n.field {\n  text-align: unset;\n  border-radius: var(--bs-border-radius);\n}\n.field--display {\n  min-height: 1rem;\n  width: 100%;\n}\n.field--display:focus, .field--display:hover {\n  color: unset;\n  background-color: var(--bs-secondary);\n}\n.field--hidden {\n  display: none;\n}\n.field__buttons {\n  display: flex;\n  flex-direction: row;\n  gap: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/location-accordion/location-accordion.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".create-button {\n  display: inline-block;\n  width: fit-content;\n  margin-left: var(--spacer-3);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/location/location.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".card {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n  padding: var(--spacer-4);\n}\n.card__heading {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.card__text {\n  margin-bottom: var(--spacer-4);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/organisms/page-container/page-container.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".page {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.page__background {\n  position: fixed;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  width: 100%;\n  height: 100mvh;\n}\n.page__foreground {\n  max-width: 60rem;\n  width: 100%;\n  background-color: var(--wiki-bg-transparent);\n  padding: var(--spacer-3) var(--spacer-3) var(--spacer-5) var(--spacer-3);\n  margin-bottom: var(--spacer-4);\n  color: white;\n}\n@media (min-width: 768px) {\n  .page__foreground {\n    border-radius: var(--bs-border-radius);\n  }\n}\n@media (min-width: 992px) {\n  .page__foreground {\n    padding: var(--spacer-4);\n  }\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/design/templates/location-template/location-template.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".location__edit-container {\n  width: 100%;\n  display: flex;\n  justify-content: flex-end;\n}\n.location__heading {\n  text-align: center;\n}\n.location__subheading {\n  margin-bottom: var(--spacer-3);\n  text-align: center;\n}\n.location__characters {\n  margin-bottom: var(--spacer-5);\n}\n.location__images {\n  margin-bottom: var(--spacer-3);\n}\n.location__description {\n  width: 100%;\n  margin-bottom: var(--spacer-5);\n}\n\n.subheading__icon {\n  margin-left: var(--spacer-1);\n  margin-right: var(--spacer-1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);