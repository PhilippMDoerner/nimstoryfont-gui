(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[365],{"./src/app/_services/utils/campaign.mock.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_B:()=>dummyCampaigns,jr:()=>dummyCampaign,mE:()=>dummyStatistics});const dummyCampaigns=[{pk:1,name:"Aldrune",subtitle:"A campaign made by Samuel Day and recorded by Philipp Dörner<br>through the eyes of Relentless",background_image:"/media/campaign_backgrounds/bg.jpg",is_deactivated:!1,has_audio_recording_permission:!0,icon:"/media/campaign_icons/favicon-128x128.png",default_map:1,default_map_details:{icon:"map",image:"pic05_sMT2d6M.jpg",name:"Aldrune",id:1},duration:{start_date:"2020-04-07T00:00:00.000000Z",last_date:"2023-04-11T00:00:00.000000Z"}},{pk:2,name:"Jōzai Corp",subtitle:"Welcome to Jōzai Corp, please enjoy your employment.",background_image:"/media/campaign_backgrounds/shanghai_city_snlaYDd.jpg",is_deactivated:!1,has_audio_recording_permission:!1,icon:"/media/campaign_icons/icon.png",default_map:void 0,default_map_details:void 0,duration:{start_date:"2022-01-15T00:00:00.000000Z",last_date:"2022-02-19T00:00:00.000000Z"}}],dummyStatistics={character_count:265,item_count:142,location_count:229,creature_count:42,diaryentry_count:101,encounter_count:954,organization_count:46,quest_count:69,quote_count:203,session_audio_count:69,timestamp_count:1121,map_count:7,marker_count:136,spell_count:22,session_count:90,rule_count:17},dummyCampaign={name:"Aldrune",subtitle:"A campaign for testing",pk:1,background_image:"/assets/default_images/audio_pic_default.webp",icon:"https://www.aldrune.com/media/campaign_icons/favicon-128x128.png",default_map:123,default_map_details:{id:123,name:"Default Map",icon:"plus",image:"blub.jpg"},is_deactivated:!1,has_audio_recording_permission:!0,members:[{username:"isofruit",password:"password1",pk:1,api_permissions:["permission1","permission2"],groups:[1,2],group_details:[{name:"group1",pk:1},{name:"group2",pk:2}],is_staff:!0,is_superuser:!1,email:"user1@example.com",is_active:!0},{username:"user2",password:"password2",pk:2,api_permissions:["permission3","permission4"],groups:[1,3],group_details:[{name:"group1",pk:1},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user2@example.com",is_active:!0}],admins:[{username:"admin",password:"adminpassword",pk:3,api_permissions:["permission1","permission2","permission3","permission4"],groups:[1,2,3],group_details:[{name:"group1",pk:1},{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!0,is_superuser:!0,email:"admin@example.com",is_active:!0},{username:"user3",password:"password3",pk:4,api_permissions:["permission1"],groups:[1],group_details:[{name:"group1",pk:1}],is_staff:!1,is_superuser:!1,email:"user3@example.com",is_active:!0}],guests:[{username:"user4",password:"password4",pk:5,api_permissions:["permission2","permission3"],groups:[2,3],group_details:[{name:"group2",pk:2},{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user4@example.com",is_active:!0},{username:"user5",password:"password5",pk:6,api_permissions:["permission4"],groups:[3],group_details:[{name:"group3",pk:3}],is_staff:!1,is_superuser:!1,email:"user5@example.com",is_active:!0}],member_group_name:"Members",admin_group_name:"Admins",guest_group_name:"Guests",emptySearchResponses:[{id:1,text:"Empty response 1",campaign:1},{id:2,text:"Empty response 2",campaign:1}]}},"./src/app/_services/utils/feature.service.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>FeatureService});var tslib__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common_http__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/common/fesm2022/http.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/core/fesm2022/rxjs-interop.mjs"),src_environments_environment__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/environments/environment.ts");let FeatureService=class FeatureService{constructor(){this.http=(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.Qq),this._features$=(0,_angular_core_rxjs_interop__WEBPACK_IMPORTED_MODULE_3__.ZX)({request:()=>src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.c.configUrl,loader:({request})=>this.http.get(request)}),this.features$=this._features$.asReadonly()}};FeatureService=(0,tslib__WEBPACK_IMPORTED_MODULE_4__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({providedIn:"root"})],FeatureService)},"./src/app/design/atoms/_models/button.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Ap:()=>toButtonClasses,C9:()=>toElementKind,bV:()=>ELEMENT_TYPES});const ELEMENT_TYPES=["PRIMARY","SECONDARY","DARK","DANGER","WARNING","LIGHT","INFO"];function toElementKind(kind){switch(kind){case"PRIMARY":case"SECONDARY":case"DARK":case"DANGER":case"WARNING":case"LIGHT":case"INFO":return kind;case"PRIMARY-OUTLINE":case"SECONDARY-OUTLINE":case"DARK-OUTLINE":case"DANGER-OUTLINE":case"WARNING-OUTLINE":case"LIGHT-OUTLINE":case"INFO-OUTLINE":return kind.replace("-OUTLINE","");case"NONE":return}}const BS_SIZE_CLASS_MAP={SMALL:"btn-sm",MEDIUM:"",LARGE:"btn-lg"},BS_KIND_CLASS_MAP={PRIMARY:"btn-primary",SECONDARY:"btn-secondary",DARK:"btn-dark",DANGER:"btn-danger",WARNING:"btn-warning",LIGHT:"btn-light",INFO:"btn-info","PRIMARY-OUTLINE":"btn-outline-primary","SECONDARY-OUTLINE":"btn-outline-secondary","DARK-OUTLINE":"btn-outline-dark","DANGER-OUTLINE":"btn-outline-danger","WARNING-OUTLINE":"btn-outline-warning","LIGHT-OUTLINE":"btn-outline-light","INFO-OUTLINE":"btn-outline-info",NONE:"btn-none"};function toButtonClasses(kind,size){return`${"NONE"!==kind?"btn":""} ${BS_SIZE_CLASS_MAP[size]} ${BS_KIND_CLASS_MAP[kind]}`}},"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{bS:()=>toIconKind,eN:()=>ALL_REGULAR_ICONS,xy:()=>ALL_ICONS,zN:()=>ALL_SOLID_ICONS});const ALL_REGULAR_ICONS=["calendar","circle-user","clock","copy","envelope","hourglass","map","plus-square","user"],REGULAR_ICON_SET=new Set(ALL_REGULAR_ICONS),ALL_SOLID_ICONS=["anchor","arrow-down","arrow-down-long","arrow-left-long","arrow-left","arrow-right-long","arrow-right","arrow-up","arrow-up-long","bars","ban","bolt","book-open","book","calendar-alt","calendar-day","calendar-week","check","chess-rook","chevron-down","chevron-left","chevron-right","chevron-up","circle","circle-exclamation","clipboard","cog","comments","compass","copy","crown","cut","home","database","desktop","diagram-project","diamond","dice","down-long","download","dragon","dungeon","exclamation","expand","file-arrow-down","file-audio","file-import","file","filter","gear","gavel","globe-americas","hammer","hand-sparkles","hat-wizard","hand-fist","house","handshake","hotel","hourglass-half","infinity","info-circle","info","location-dot","lock","link","list","magic","male","minus","monument","moon","mountain","newspaper","paw","pen","pencil","place-of-worship","plus","question-circle","rectangle-list","redo-alt","refresh","right-from-bracket","search","sign-out-alt","sitemap","spinner","square-check","store","table","tag","th-list","times","tint","trash","tree","triangle-exclamation","umbrella-beach","university","up-long","up-down-left-right","up-right-from-square","upload","user-cog","user-plus","users-gear","volume-up","water","xmark"],SOLID_ICONS_SET=new Set(ALL_SOLID_ICONS),ALL_BRAND_ICONS=["fort-awesome"],BRAND_ICON_SET=new Set(ALL_BRAND_ICONS),ALL_ICONS=[...ALL_REGULAR_ICONS,...ALL_SOLID_ICONS,...ALL_BRAND_ICONS];function toIconKind(icon){const ico=icon;return SOLID_ICONS_SET.has(ico)?"fa-solid":BRAND_ICON_SET.has(ico)?"fa-brands":REGULAR_ICON_SET.has(ico)?"fa-regular":"fa-solid"}},"./src/app/design/atoms/button-link/button-link.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{W:()=>ButtonLinkComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_link_componentngResource=__webpack_require__("./src/app/design/atoms/button-link/button-link.component.scss?ngResource"),button_link_componentngResource_default=__webpack_require__.n(button_link_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_models_button=__webpack_require__("./src/app/design/atoms/_models/button.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let ButtonLinkComponent=class ButtonLinkComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.host=(0,core.inject)(core.ElementRef),this.classes=(0,core.computed)((()=>(0,_models_button.Ap)(this.kind(),this.size())))}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}]}}};ButtonLinkComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"a[btn]",imports:[icon_component.R],template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n@if (text()) {\n  <span class="btn__text" [class.btn__text--large]="size() === \'LARGE\'">\n    {{ text() }}\n  </span>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,host:{"[class]":"classes()"},styles:[button_link_componentngResource_default()]})],ButtonLinkComponent)},"./src/app/design/atoms/button/button.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>ButtonComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var button_componentngResource=__webpack_require__("./src/app/design/atoms/button/button.component.scss?ngResource"),button_componentngResource_default=__webpack_require__.n(button_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_models_button=__webpack_require__("./src/app/design/atoms/_models/button.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts");let ButtonComponent=class ButtonComponent{constructor(){this.kind=core.input.required(),this.text=(0,core.input)(),this.icon=(0,core.input)(),this.size=(0,core.input)("MEDIUM"),this.type=(0,core.input)("button"),this.isLoading=(0,core.input)(!1),this.disabled=(0,core.input)(!1),this.clicked=(0,core.output)(),this.disabledClass=(0,core.computed)((()=>this.disabled()?"disabled":"")),this.classes=(0,core.computed)((()=>(0,_models_button.Ap)(this.kind(),this.size())+` ${this.disabledClass()}`))}onClick(event){this.isLoading()||this.disabled()||this.clicked.emit(event)}static{this.propDecorators={kind:[{type:core.Input,args:[{isSignal:!0,alias:"kind",required:!0,transform:void 0}]}],text:[{type:core.Input,args:[{isSignal:!0,alias:"text",required:!1,transform:void 0}]}],icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!1,transform:void 0}]}],size:[{type:core.Input,args:[{isSignal:!0,alias:"size",required:!1,transform:void 0}]}],type:[{type:core.Input,args:[{isSignal:!0,alias:"type",required:!1,transform:void 0}]}],isLoading:[{type:core.Input,args:[{isSignal:!0,alias:"isLoading",required:!1,transform:void 0}]}],disabled:[{type:core.Input,args:[{isSignal:!0,alias:"disabled",required:!1,transform:void 0}]}],clicked:[{type:core.Output,args:["clicked"]}]}}};ButtonComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"button[btn]",template:'@let iconVal = icon();\n@if (iconVal) {\n  <app-icon [class.btn__icon]="text()" [icon]="iconVal"></app-icon>\n}\n\n@if (text()) {\n  <span\n    class="btn__text"\n    [class.btn__text--large]="size() === \'LARGE\'"\n    [innerHTML]="text()"\n  >\n  </span>\n}\n\n@if (isLoading()) {\n  <app-spinner class="btn__spinner"></app-spinner>\n}\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[icon_component.R,spinner_component.t],host:{"[class]":"classes()","[type]":"type()","[attr.aria-disabled]":"isLoading() || disabled()","(click)":"onClick($event)"},styles:[button_componentngResource_default()]})],ButtonComponent)},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=class IconComponent{constructor(){this.icon=core.input.required(),this.iconType=(0,core.computed)((()=>(0,icon.bS)(this.icon()))),this.classes=(0,core.computed)((()=>this.iconType()?`${this.iconType()} fa-${this.icon()}`:""))}static{this.propDecorators={icon:[{type:core.Input,args:[{isSignal:!0,alias:"icon",required:!0,transform:void 0}]}]}}};IconComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-icon",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],host:{"[class]":"classes()","aria-hidden":"true"},styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/spinner/spinner.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>SpinnerComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var spinner_componentngResource=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.scss?ngResource"),spinner_componentngResource_default=__webpack_require__.n(spinner_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let SpinnerComponent=class SpinnerComponent{constructor(){this.spinnerBorder=!0}static{this.propDecorators={spinnerBorder:[{type:core.HostBinding,args:["class.spinner-border"]}]}}};SpinnerComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-spinner",template:"",changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[],styles:[spinner_componentngResource_default()]})],SpinnerComponent)},"./src/app/design/organisms/image-grid/image-grid.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>ImageGridComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var image_grid_componentngResource=__webpack_require__("./src/app/design/organisms/image-grid/image-grid.component.scss?ngResource"),image_grid_componentngResource_default=__webpack_require__.n(image_grid_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs");let ImageGridComponent=class ImageGridComponent{constructor(){this.EMPTY_IMAGE_URL="",this.entries=core.input.required(),this.serverUrl=core.input.required(),this.columnCount=(0,core.computed)((()=>{switch(this.entries().length){case 1:return 1;case 2:case 4:return 2;default:return 3}}))}static{this.propDecorators={entries:[{type:core.Input,args:[{isSignal:!0,alias:"entries",required:!0,transform:void 0}]}],serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}]}}};ImageGridComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-image-grid",template:'<div class="container-fluid">\n  @if (entries() != null) {\n    @if (entries().length > 0) {\n      <ul class="row image-grid">\n        @for (entry of entries(); track $index) {\n          <li\n            class="image-grid__container"\n            [ngClass]="{\n              \'col-lg-12\': columnCount() === 1,\n              \'col-sm-6\': columnCount() === 2,\n              \'col-md-6 col-lg-4\': columnCount() === 3,\n            }"\n          >\n            <a\n              class="image-grid__entry entry"\n              [style.background-image]="\n                \'url(\' + serverUrl() + entry.imageUrl + \')\'\n              "\n              [routerLink]="entry.link"\n              [attr.aria-label]="entry.ariaLabel"\n            >\n              <div class="entry__overlay">\n                <div class="fs-4 entry__heading heading">\n                  @if (entry.icon) {\n                    <img\n                      class="heading__icon"\n                      [src]="serverUrl() + entry.icon"\n                      [alt]="\'\'"\n                    />\n                  }\n                  {{ entry.label }}\n                </div>\n              </div>\n            </a>\n          </li>\n        }\n      </ul>\n    } @else {\n      <ng-container *ngTemplateOutlet="noEntries" />\n    }\n  } @else {\n    <ng-container *ngTemplateOutlet="loading" />\n  }\n</div>\n\n<ng-template #loading> </ng-template>\n\n<ng-template #noEntries>\n  <div class="w-100 h-100 position-relative d-flex justify-content-center">\n    <img\n      class="w-100 h-100"\n      [ngSrc]="serverUrl() + EMPTY_IMAGE_URL"\n      alt="Image of a red dragon frame"\n      priority\n      fill\n    />\n    <div class="position-absolute frame-text">\n      <h4 class="mb-1">You have not yet been invited into any campaign.</h4>\n      <div>\n        Please inform your DM or the person within your group administrating the\n        webserver to add you to the required permission group.\n      </div>\n    </div>\n  </div>\n</ng-template>\n',imports:[common.NgClass,common.NgOptimizedImage,router.Wk],styles:[image_grid_componentngResource_default()]})],ImageGridComponent)},"./src/environments/environment.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>environment});const environment={kind:"PRODUCTION",backendDomain:"https://www.aldrune.com",apiUrl:"/wiki1/api",defaultTitle:"StoryFont",frontendPrefix:"wiki2",configUrl:"assets/config/feature_config.json"}},"./src/app/design/templates/campaign-overview/campaign-overview.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Admin:()=>Admin,Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>campaign_overview_stories});var animations=__webpack_require__("./node_modules/@angular/platform-browser/fesm2022/animations.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),campaign_mock_service=__webpack_require__("./src/app/_services/utils/campaign.mock.service.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var campaign_overview_componentngResource=__webpack_require__("./src/app/design/templates/campaign-overview/campaign-overview.component.scss?ngResource"),campaign_overview_componentngResource_default=__webpack_require__.n(campaign_overview_componentngResource),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),feature_service=__webpack_require__("./src/app/_services/utils/feature.service.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts"),spinner_component=__webpack_require__("./src/app/design/atoms/spinner/spinner.component.ts"),image_grid_component=__webpack_require__("./src/app/design/organisms/image-grid/image-grid.component.ts"),button_link_component=__webpack_require__("./src/app/design/atoms/button-link/button-link.component.ts"),icon_component=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");let CampaignOverviewComponent=class CampaignOverviewComponent{constructor(routingService){this.routingService=routingService,this.serverUrl=core.input.required(),this.userName=core.input.required(),this.campaigns=core.input.required(),this.isGlobalAdmin=(0,core.input)(!1),this.logout=(0,core.output)(),this.features$=(0,core.inject)(feature_service.w).features$,this.enableCampaignCreation=(0,core.computed)((()=>!this.features$.isLoading()&&this.features$.value()?.enablePublicCampaignCreation)),this.campaignCreateUrl=this.routingService.getRoutePath("campaign-create"),this.profileUrl=(0,core.computed)((()=>this.routingService.getRoutePath("direct-profile",{username:this.userName()}))),this.configTableUrl=(0,core.computed)((()=>this.routingService.getRoutePath("config-tables"))),this.generalAdminUrl=(0,core.computed)((()=>this.routingService.getRoutePath("admin"))),this.gridEntries=(0,core.computed)((()=>this.campaigns()?.map((campaign=>({imageUrl:campaign.background_image,label:campaign.name,icon:campaign.icon,link:this.routingService.getRoutePath("home",{campaign:campaign.name}),ariaLabel:`Look at campaign ${campaign.name}`}))))),this.dragonFrameUrl="/assets/general_overview.webp"}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],userName:[{type:core.Input,args:[{isSignal:!0,alias:"userName",required:!0,transform:void 0}]}],campaigns:[{type:core.Input,args:[{isSignal:!0,alias:"campaigns",required:!0,transform:void 0}]}],isGlobalAdmin:[{type:core.Input,args:[{isSignal:!0,alias:"isGlobalAdmin",required:!1,transform:void 0}]}],logout:[{type:core.Output,args:["logout"]}]}}};CampaignOverviewComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-campaign-overview",template:'<div class="container">\n  <div class="campaign__heading heading">\n    <div class="heading__buttons">\n      <a\n        btn\n        class="heading__button"\n        [kind]="\'SECONDARY\'"\n        [icon]="\'circle-user\'"\n        [text]="\'Profile\'"\n        [routerLink]="profileUrl()"\n      ></a>\n\n      <button\n        btn\n        class="heading__button"\n        [kind]="\'SECONDARY\'"\n        [icon]="\'sign-out-alt\'"\n        [text]="\'Logout\'"\n        (clicked)="logout.emit()"\n      ></button>\n\n      @if (isGlobalAdmin()) {\n        <a\n          btn\n          class="heading__button"\n          [kind]="\'INFO\'"\n          [icon]="\'user-cog\'"\n          [text]="\'General Administration\'"\n          [routerLink]="generalAdminUrl()"\n        >\n        </a>\n\n        <a\n          btn\n          class="heading__button"\n          [kind]="\'INFO\'"\n          [icon]="\'table\'"\n          [text]="\'Config Tables\'"\n          [routerLink]="configTableUrl()"\n        >\n        </a>\n      }\n\n      @if (enableCampaignCreation()) {\n        <a\n          btn\n          class="heading__button"\n          [kind]="\'SECONDARY\'"\n          [icon]="\'plus\'"\n          [text]="\'Create Campaign\'"\n          [routerLink]="campaignCreateUrl"\n        >\n        </a>\n      }\n    </div>\n\n    @let campaignsVal = campaigns();\n    <h1 class="fs-3 heading__text">\n      @if (campaignsVal && campaignsVal.length > 0) {\n        Choose Your Campaign\n      } @else if (campaignsVal && campaignsVal.length === 0) {\n        <ng-container *ngTemplateOutlet="noCampaignHeading" />\n      }\n    </h1>\n  </div>\n\n  <div class="body">\n    @let imageGridEntries = gridEntries();\n    @if (imageGridEntries != null) {\n      @if (imageGridEntries.length > 0) {\n        <app-image-grid\n          class="body__images"\n          [entries]="imageGridEntries"\n          [serverUrl]="serverUrl()"\n        />\n      } @else {\n        <ng-container *ngTemplateOutlet="noCampaign" />\n      }\n    } @else {\n      <app-spinner />\n    }\n  </div>\n</div>\n\n<ng-template #noCampaign>\n  <div class="campaign__empty-frame empty-frame">\n    <img\n      class="empty-frame__image"\n      [src]="dragonFrameUrl"\n      alt="Placeholder image for when no campaigns are available"\n    />\n    <div class="empty-frame__text">\n      <app-icon class="empty-frame__icon" [icon]="\'lock\'"></app-icon>\n      <h2 class="fs-4 m-0">Foiled by locks!</h2>\n      <div>\n        Campaigns are invite only. <br />\n        Ask your DM to get you on board!\n      </div>\n    </div>\n  </div>\n</ng-template>\n\n<ng-template #noCampaignHeading> No Campaign available! </ng-template>\n',imports:[common.NgTemplateOutlet,button_component.Q,router.Wk,image_grid_component.l,spinner_component.t,button_link_component.W,icon_component.R],changeDetection:core.ChangeDetectionStrategy.OnPush,styles:[campaign_overview_componentngResource_default()]})],CampaignOverviewComponent);const campaign_overview_stories={title:"DesignSystem/Templates/CampaignOverviewComponent",component:CampaignOverviewComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[testing.c,animations.BrowserAnimationsModule],declarations:[],providers:[]})],args:{isGlobalAdmin:!1,userName:"Isofruit",campaigns:campaign_mock_service._B,serverUrl:"https://www.aldrune.com"}},Template=args=>({props:{...args,logout:(0,dist.XI)("logout")}}),Default=Template.bind({});Default.args={};const Admin=Template.bind({});Admin.args={isGlobalAdmin:!0};const __namedExportsOrder=["Default","Admin"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    logout: action('logout')\n  }\n})",...Default.parameters?.docs?.source}}},Admin.parameters={...Admin.parameters,docs:{...Admin.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args,\n    logout: action('logout')\n  }\n})",...Admin.parameters?.docs?.source}}}},"./src/app/design/atoms/button-link/button-link.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --icon-btn-size: 50px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n  min-width: 40px;\n  min-height: 40px;\n}\n:host:focus-visible {\n  outline: var(--focus-outline);\n}\n\n.btn__text--large {\n  font-weight: bold;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/button/button.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: var(--spacer-1);\n  min-width: 40px;\n  min-height: 40px;\n}\n:host:focus-visible {\n  outline: var(--focus-outline);\n}\n:host :disabled {\n  cursor: not-allowed;\n}\n\n.btn__text--large {\n  font-weight: bold;\n}\n.btn__spinner {\n  margin-left: var(--spacer-2);\n  width: 20px;\n  height: 20px;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/spinner/spinner.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --thickness: var(--bs-body-font-size);\n  font-size: var(--thickness);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/organisms/image-grid/image-grid.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --image-height: 90vh;\n}\n\n.container-fluid {\n  height: var(--image-height);\n}\n\n.image-grid {\n  height: 100%;\n  padding-left: 0;\n  list-style-type: none;\n}\n.image-grid__container {\n  padding: 0;\n}\n.image-grid__entry {\n  cursor: pointer;\n}\n\n.entry {\n  position: relative;\n  text-decoration: none;\n  display: flex;\n  justify-content: center;\n  background-size: cover;\n  background-position: center;\n  min-height: 30vh;\n  width: 100%;\n  height: 100%;\n  padding: 0;\n  opacity: 0.75;\n  transition: opacity 0.2s ease-in-out;\n}\n.entry:hover, .entry:focus-visible {\n  outline: none;\n  opacity: 1;\n}\n.entry:hover .entry__heading, .entry:focus-visible .entry__heading {\n  color: var(--bs-link-hover-color);\n  transform: scale(1.3);\n  transition: transform 0.2s ease-in-out;\n}\n.entry__overlay {\n  position: absolute;\n  background-color: var(--wiki-bg-transparent);\n  z-index: 1;\n  width: 100%;\n  min-height: 4rem;\n  line-break: anywhere;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n.entry__heading {\n  margin-bottom: var(--spacer-0);\n  padding-left: var(--spacer-3);\n  padding-right: var(--spacer-3);\n}\n\n.heading__icon {\n  height: var(--spacer-5);\n  width: var(--spacer-5);\n  border-radius: var(--bs-border-radius);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/templates/campaign-overview/campaign-overview.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".container {\n  width: 100vw;\n  min-height: 100dvh;\n  max-width: unset !important;\n  padding: 0 !important;\n  display: flex;\n  flex-direction: column;\n  background-color: var(--bs-black);\n}\n\n.campaign__heading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10%;\n}\n.campaign__empty-frame {\n  height: 90%;\n  width: 100%;\n}\n\n.heading {\n  background-color: var(--wiki-bg-transparent);\n  display: flex;\n  flex-direction: column;\n}\n.heading__buttons {\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .heading__buttons {\n    width: unset;\n  }\n}\n.heading__button {\n  margin-top: var(--spacer-1);\n  margin-bottom: var(--spacer-1);\n  display: inline-block;\n  width: 100%;\n}\n@media (min-width: 576px) {\n  .heading__button {\n    width: unset;\n    margin: var(--spacer-2);\n  }\n}\n.heading__text {\n  flex: 1;\n  text-align: center;\n}\n\n.body {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.body__images {\n  height: 100%;\n  display: flex;\n}\n\n.empty-frame {\n  display: flex;\n  position: relative;\n  justify-content: center;\n}\n.empty-frame__icon {\n  font-size: 40px;\n}\n.empty-frame__image {\n  width: 100%;\n  height: 88.5vh;\n}\n.empty-frame__text {\n  text-align: center;\n  width: 100%;\n  position: absolute;\n  padding: var(--spacer-2) var(--spacer-3);\n  background-color: var(--bs-dark);\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  max-width: calc(var(--spacer-5) * 5);\n  border-radius: var(--bs-border-radius);\n  display: flex;\n  flex-direction: column;\n  gap: var(--spacer-2);\n}\n\nbutton {\n  width: 100%;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);