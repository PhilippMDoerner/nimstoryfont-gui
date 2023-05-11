(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[7120],{"./src/app/design/templates/map/map.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoMap:()=>NoMap,NoPermission:()=>NoPermission,default:()=>map_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2020/testing.mjs"),asymmetrik_ngx_leaflet=__webpack_require__("./node_modules/@asymmetrik/ngx-leaflet/fesm2020/asymmetrik-ngx-leaflet.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),organisms=(__webpack_require__("./node_modules/leaflet/dist/leaflet-src.js"),__webpack_require__("./src/app/design/organisms/index.ts")),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,map_componentngResource=__webpack_require__("./src/app/design/templates/map/map.component.scss?ngResource"),map_componentngResource_default=__webpack_require__.n(map_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts");let MapComponent=((_class=class MapComponent{constructor(routingService){this.routingService=routingService,this.canUpdate=!1,this.canCreate=!1,this.canDelete=!1,this.mapDelete=new core.EventEmitter,this.mapChange=new core.EventEmitter}ngOnInit(){const campaignName=this.map.campaign_details?.name;this.createUrl=this.routingService.getRoutePath("map-create",{campaign:campaignName}),this.homeUrl=this.routingService.getRoutePath("home1",{campaign:campaignName}),this.setUpdateUrl()}ngOnChanges(){this.setUpdateUrl()}setUpdateUrl(){const campaignName=this.map.campaign_details?.name,mapName=this.map.name;this.updateUrl=this.routingService.getRoutePath("map-update",{campaign:campaignName,name:mapName})}onMapDelete(){this.mapDelete.emit(this.map)}onMapChange(event){this.mapChange.emit(event)}}).ctorParameters=()=>[{type:routing_service.Z}],_class.propDecorators={mapChoices:[{type:core.Input}],map:[{type:core.Input}],serverUrl:[{type:core.Input}],canUpdate:[{type:core.Input}],canCreate:[{type:core.Input}],canDelete:[{type:core.Input}],mapDelete:[{type:core.Output}],mapChange:[{type:core.Output}]},_class);MapComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-map",template:'<article class="container map">\n    <ng-container *ngIf="canUpdate">\n      <div class="map__edit-container">\n        <a [routerLink]="updateUrl">\n          <app-button\n            [icon]="\'pencil\'"\n            [type]="\'SECONDARY\'"\n          ></app-button>\n        </a>\n      </div>\n    </ng-container>\n    \n    <ng-container *ngIf="mapChoices.length > 0">\n      <h3 class="map__heading heading">\n        Map of\n        <app-choice-select\n          class="heading__select"\n          [choices]="mapChoices"\n          [labelProp]="\'name\'"\n          [selectedLabelValue]="map.name"\n          (choiceSelect)="onMapChange($event)"\n        ></app-choice-select>\n      </h3>\n    </ng-container>\n    \n    <a [routerLink]="createUrl" class="map__create">\n      <app-button\n        [type]="\'PRIMARY\'"\n        [icon]="\'plus\'"\n        [text]="\'Add Map\'"\n      ></app-button>\n    </a>\n\n    \x3c!-- Leaflet Map --\x3e\n    <ng-container *ngIf="mapChoices.length > 0; else noMapMessage">\n      <div class="row map__map">\n        <div class="mb-5 col" *ngIf="map; else loading">\n          <app-ngx-leaflet-map\n            [mapData]="map"\n            [serverUrl]="serverUrl"\n          ></app-ngx-leaflet-map>\n        </div>\n      </div>\n    </ng-container>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [showDelete]="canDelete"\n      [buttonLink]="homeUrl"\n      [buttonLabel]="\'Back to Frontpage\'"\n      [deleteMessage]="\'Delete Map of \' + map.name + \'?\'"\n      (delete)="onMapDelete()"\n    ></app-article-footer>\n</article>\n\n<ng-template #noMapMessage>\n  <ng-container *ngIf="canCreate; else noMapMessageGuest">\n    <div class="map__no-map">\n      <h4> There\'s no map yet! Want to add one? </h4>\n      <a [routerLink]="createUrl" class="map__create">\n        <app-button\n          [type]="\'PRIMARY\'"\n          [icon]="\'plus\'"\n          [text]="\'Add Map\'"\n        ></app-button>\n      </a>\n    </div>\n  </ng-container>\n</ng-template>\n\n<ng-template #noMapMessageGuest>\n  <div class="map__no-map">\n      <h4> There\'s no map yet, but maybe there may be in the future! </h4>\n      <a [routerLink]="homeUrl" class="map__create">\n        <app-button\n          [type]="\'SECONDARY\'"\n          [text]="\'Back to home page\'"\n        ></app-button>\n      </a>\n  </div>\n</ng-template>\n\n\x3c!-- Loading Spinner --\x3e\n<ng-template #loading><app-spinner></app-spinner></ng-template>',styles:[map_componentngResource_default()]})],MapComponent);const dummyMap={getAbsoluteRouterUrl:()=>"/map/url",pk:2,name:"The World",image:"/media/Aldrune_World_1.jpg",icon:"/media/globe",update_datetime:"2021-06-26T17:10:35.352119Z",campaign:1,campaign_details:{name:"Aldrune",pk:1},markers:[{getAbsoluteRouterUrl:()=>"/marker1/url",pk:106,color:void 0,icon:void 0,longitude:532,latitude:553,map:2,map_details:{name:"The World"},location:50,location_details:{name:"Galway",description:"<p>The New Capital of Fen's High Kingdom</p>\n<p>&nbsp;</p>\n<p>Galway City Breakdown</p>\n<p>Eastern Lakeway - 15 Buildings<br />Western Lakeway - 40 Buildings<br />Myria Island - 7 Buildings<br />River District - 46 Buildings, several temporary Refugee Shelters<br />Forest District - 85 Buildings<br />Hill District - 149 Buildings<br />Galway Proper - 60 Buildings</p>\n<p>Total - 402 Civilian Buildings in Galway</p>\n<p>Estimated Population: 4000+</p>",parent_location_name:"none",sublocations:[]},type:11,type_details:{name:"Settlement",icon:"home",is_text_marker:!1,fontawesome_type:"fa",color:"lightgreen",pk:11},campaign_details:{name:"Aldrune",id:1}},{getAbsoluteRouterUrl:()=>"/marker2/url",pk:137,color:void 0,icon:void 0,longitude:752,latitude:579,map:2,map_details:{name:"The World"},location:206,location_details:{name:"Eastern sea",description:"<p>The ocean east of Aldrune, now accessible through the path carved by the world serpent.</p>",parent_location_name:"none",sublocations:["Lighthouse"]},type:23,type_details:{name:"Sea/Ocean",icon:"water",is_text_marker:!0,fontawesome_type:"fa",color:"gray",pk:23},campaign_details:{name:"Aldrune",id:1}}]},map_stories={title:"DesignSystem/Templates/MapComponent",component:MapComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[organisms.kJ,asymmetrik_ngx_leaflet.UO,testing.Z_],declarations:[]})],args:{map:dummyMap,serverUrl:"https://www.aldrune.com",canCreate:!0,canUpdate:!0,canDelete:!0,mapChoices:[{getAbsoluteRouterUrl:()=>"/map/1",article_type:"map",description:"A map of Aldrune",pk:1,name_full:"Aldrune",name:"Aldrune",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2021-06-26T17:10:35.352119Z",icon:"/media/map"},{getAbsoluteRouterUrl:()=>"/map/5",article_type:"map",description:"A map of Bug-people map",pk:5,name_full:"Bug-people map",name:"Bug-people map",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2021-07-24T15:25:48.488498Z",icon:"/media/sun-o"},{getAbsoluteRouterUrl:()=>"/map/4",article_type:"map",description:"A map of Etruscan",pk:4,name_full:"Etruscan",name:"Etruscan",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2021-06-26T17:10:35.352119Z",icon:"/media/university"},{getAbsoluteRouterUrl:()=>"/map/8",article_type:"map",description:"A map of Guiniverse Magical Worldmap",pk:8,name_full:"Guiniverse Magical Worldmap",name:"Guiniverse Magical Worldmap",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2022-10-13T20:21:11.923497Z",icon:"/media/globe"},{getAbsoluteRouterUrl:()=>"/map/6",article_type:"map",description:"A map of Land of the dead",pk:6,name_full:"Land of the dead",name:"Land of the dead",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2021-08-10T19:03:46.874796Z",icon:"/media/skull-crossbones"},{getAbsoluteRouterUrl:()=>"/map/3",article_type:"map",description:"A map of The Galway Region",pk:3,name_full:"The Galway Region",name:"The Galway Region",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2021-06-26T17:10:35.352119Z",icon:"/media/lightbulb-o"},{getAbsoluteRouterUrl:()=>"/map/2",article_type:"map",description:"A map of The World",pk:2,name_full:"The World",name:"The World",campaign_details:{name:"Aldrune",pk:1},update_datetime:"2021-06-26T17:10:35.352119Z",icon:"/media/globe"}]}},Template=args=>({props:{...args,mapDelete:(0,dist.aD)("mapDelete"),mapChange:(0,dist.aD)("mapChange")}}),Default=Template.bind({});Default.args={};const NoMap=Template.bind({});NoMap.args={mapChoices:[]};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1,canCreate:!1}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/app/design/templates/map/map.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".map__edit-container {\n  width: 100%;\n  display: flex;\n  justify-content: end;\n}\n.map__no-map {\n  justify-content: center;\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  margin-top: var(--spacer-5);\n}\n.map__map {\n  margin-top: var(--spacer-3);\n  margin-bottom: var(--spacer-3);\n}\n.map__create {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: inline-block;\n}\n\n.heading {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin-bottom: var(--spacer-5);\n}\n.heading__select {\n  margin-left: var(--spacer-3);\n  font-weight: bold;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);