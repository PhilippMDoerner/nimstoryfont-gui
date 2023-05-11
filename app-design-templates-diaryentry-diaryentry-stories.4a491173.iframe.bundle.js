(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[6059],{"./src/app/design/templates/diaryentry/diaryentry.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermission:()=>NoPermission,default:()=>diaryentry_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2020/testing.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_models_encounter=__webpack_require__("./src/app/_models/encounter.ts"),validators=__webpack_require__("./src/app/_services/formly/validators.ts"),organisms=__webpack_require__("./src/app/design/organisms/index.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,diaryentry_componentngResource=__webpack_require__("./src/app/design/templates/diaryentry/diaryentry.component.scss?ngResource"),diaryentry_componentngResource_default=__webpack_require__.n(diaryentry_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts");let DiaryentryComponent=((_class=class DiaryentryComponent{constructor(routingService){this.routingService=routingService,this.canUpdate=!1,this.canCreate=!1,this.canDelete=!1,this.diaryentryDelete=new core.EventEmitter,this.encounterConnectionDelete=new core.EventEmitter,this.encounterConnectionCreate=new core.EventEmitter,this.encounterDelete=new core.EventEmitter,this.encounterUpdate=new core.EventEmitter,this.encounterCreate=new core.EventEmitter,this.encounterCutInsert=new core.EventEmitter,this.encounterSwap=new core.EventEmitter,this.state="DISPLAY"}ngOnInit(){const campaignName=this.diaryentry.campaign_details.name;this.overviewUrl=this.routingService.getRoutePath("diaryentry-overview",{campaign:campaignName}),this.setUrl()}ngOnChanges(){this.setUrl()}toggleState(){const isDisplayState="DISPLAY"===this.state;this.state=isDisplayState?"EDIT":"DISPLAY"}setUrl(){const priorDiaryentryStub=this.diaryentry.adjacent_diaryentries.prior_diaryentry;this.priorDiaryentryUrl=this.createDiaryentryURL(priorDiaryentryStub);const nextDiaryentryStub=this.diaryentry.adjacent_diaryentries.next_diaryentry;this.nextDiaryentryUrl=this.createDiaryentryURL(nextDiaryentryStub);const campaignName=this.diaryentry.campaign_details.name,sessionNumber=this.diaryentry.session_details?.session_number,authorName=this.diaryentry.author_details?.name,isMainSession=this.diaryentry.session_details?.is_main_session_int;this.updateUrl=this.routingService.getRoutePath("diaryentry-update",{sessionNumber,isMainSession,authorName,campaign:campaignName})}createDiaryentryURL(stub){if(null==stub)return;const campaignName=stub.session_details.campaign_details?.name,sessionNumber=stub.session_details.session_number,authorName=stub.author_details.name,isMainSession=stub.session_details.is_main_session_int;return this.routingService.getRoutePath("diaryentry",{sessionNumber,isMainSession,authorName,campaign:campaignName})}}).ctorParameters=()=>[{type:routing_service.Z}],_class.propDecorators={diaryentry:[{type:core.Input}],campaignCharacters:[{type:core.Input}],encounterServerModel:[{type:core.Input}],canUpdate:[{type:core.Input}],canCreate:[{type:core.Input}],canDelete:[{type:core.Input}],diaryentryDelete:[{type:core.Output}],encounterConnectionDelete:[{type:core.Output}],encounterConnectionCreate:[{type:core.Output}],encounterDelete:[{type:core.Output}],encounterUpdate:[{type:core.Output}],encounterCreate:[{type:core.Output}],encounterCutInsert:[{type:core.Output}],encounterSwap:[{type:core.Output}]},_class);DiaryentryComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-diaryentry",template:'<article class="container diarentry">\n  <ng-container *ngIf="canUpdate">\n    <div class="diaryentry__edit-row edit-row">\n      <div class="edit-row__edit-container edit-container">\n        <a class="edit-container__button" [routerLink]="updateUrl">\n          <app-button\n            [icon]="\'pencil\'"\n            [type]="\'SECONDARY\'"\n          ></app-button>\n        </a>\n        <app-button\n          class="edit-container__button"\n          [type]="\'SECONDARY\'"\n          [icon]="state === \'DISPLAY\' ? \'pencil\' : \'times\'"\n          [text]="state === \'DISPLAY\' ? \'Edit Encounters\' : \'Read Diaryentry\'"\n          (click)="toggleState()"\n        ></app-button>\n      </div>\n    </div>\n  </ng-container>\n\n    \x3c!-- Heading --\x3e\n    <div class="row">\n        <h1 class="col-12 diaryentry__heading">\n            Diary Entry # {{ diaryentry.session_details?.session_number }} <br>\n            {{ diaryentry.title }}\n        </h1>\n        <h6 class="col-12 diaryentry__subheading"> \n          Written by: {{ diaryentry.author_details?.name }} <br>\n          on {{diaryentry.session_details?.session_date | date: "longDate"}}\n        </h6>\n    </div>\n\n    \x3c!-- Next/Prior Diaryentry Buttons --\x3e\n    <ng-container *ngTemplateOutlet="navButtons"></ng-container>\n\n    \x3c!-- DiaryEntry Text In Encounters --\x3e\n    <app-diaryentry-encounters\n      [diaryEntryPk]="diaryentry.pk ?? -1"\n      [encounters]="diaryentry.encounters"\n      [campaignCharacters]="campaignCharacters"\n      [encounterServerModel]="encounterServerModel"\n      [canUpdate]="canUpdate"\n      [canDelete]="canDelete"\n      [canCreate]="canCreate"\n      [state]="state === \'DISPLAY\' ? \'READ\' : \'EDIT\'"\n      (connectionDelete)="encounterConnectionDelete.emit($event)"\n      (connectionCreate)="encounterConnectionCreate.emit($event)"\n      (encounterDelete)="encounterDelete.emit($event)"\n      (encounterUpdate)="encounterUpdate.emit($event)"\n      (encounterCreate)="encounterCreate.emit($event)"\n      (encounterSwap)="encounterSwap.emit($event)"\n      (encounterCutInsert)="encounterCutInsert.emit($event)"\n    ></app-diaryentry-encounters>\n\n    \x3c!-- Next/Prior Diaryentry Buttons --\x3e\n    <ng-container *ngTemplateOutlet="navButtons"></ng-container>\n\n    \x3c!-- Footer (Move to other Article + Delete Article) --\x3e\n    <app-article-footer\n      [buttonLink]="overviewUrl"\n      [buttonLabel]="\'Back to Diaryentries\'"\n      [showDelete]="canDelete"\n      [deleteMessage]="\'Delete this Diaryentry?\'"\n      (delete)="diaryentryDelete.emit(diaryentry)"\n    ></app-article-footer>\n    \n</article>\n\n<ng-template #navButtons>\n  \x3c!-- Next/Prior Diaryentry Buttons --\x3e\n  <div class="row diaryentry__nav-buttons nav-buttons">\n    \x3c!-- Next Diaryentry --\x3e\n    <div class="col-lg-2 col-md-4 col-5 nav-buttons__button-container">\n      <ng-container *ngIf="diaryentry.adjacent_diaryentries.next_diaryentry">\n        <a class="nav-buttons__button nav-buttons__button--left" [routerLink]="nextDiaryentryUrl"> \n          <app-button\n            [text]="\'Next\'"\n            [icon]="\'arrow-left\'"\n            [type]="\'SECONDARY\'"\n          ></app-button>\n        </a>\n      </ng-container>\n    </div>\n\n\n    \x3c!-- Prior Diaryentry --\x3e\n    <div class="col-lg-2 col-md-4 col-5 nav-buttons__button-container">\n      <ng-container *ngIf="diaryentry.adjacent_diaryentries.prior_diaryentry">\n        <a class="nav-buttons__button nav-buttons__button--right" [routerLink]="priorDiaryentryUrl">\n          <app-button\n            [text]="\'Back\'"\n            [icon]="\'arrow-right\'"\n            [type]="\'SECONDARY\'"\n          ></app-button> \n        </a>\n      </ng-container>\n    </div>\n  </div>  \n</ng-template>',styles:[diaryentry_componentngResource_default()]})],DiaryentryComponent);const dummyDiaryEntry={pk:456,title:"Session Recap - Orc Raid",author:789,author_details:{pk:789,name:"Jane Doe"},session:123,session_details:{pk:123,is_main_session:!0,session_number:5,session_date:"2022-05-01",campaign_details:{pk:1,name:"Campaign of Adventures"},diaryentries:[{author_name:"John Doe",name:"Session Recap - Goblin Ambush"}]},encounters:[{pk:1,description:"\n      <p>In this <strong>epic encounter</strong>, the adventurers find themselves facing a fearsome <em>red dragon</em> deep within the twisting caverns of the mountains. The air is thick with the stench of sulfur as the dragon's massive form looms before them, its scales glinting in the flickering light of the torches.</p>\n\n      <p>The dragon roars, its fiery breath scorching the stone walls and causing the ground to tremble beneath the adventurers' feet. But they stand firm, weapons at the ready, knowing that this is the moment they have been training for.</p>\n\n      <p>The battle is fierce, with the dragon lashing out with razor-sharp claws and blasting the adventurers with jets of searing flame. But they are determined to prevail, and with each blow they strike, they chip away at the dragon's armor and weaken its resolve.</p>\n\n      <p>Finally, with a mighty roar, the dragon falls, its lifeless body crashing to the ground in a thunderous heap. The adventurers are battered and bruised, but they emerge victorious, their spirits lifted by the knowledge that they have faced one of the greatest challenges of their lives and emerged triumphant.</p>\n    ",encounterConnections:[{pk:1,encounter:1,encounter_details:{name:"Dragon",name_full:"Red Dragon",pk:1},character:1,character_details:{name:"Adventurer",name_full:"Adventurer One",pk:1}},{pk:2,encounter:1,encounter_details:{name:"Dragon",name_full:"Red Dragon",pk:1},character:2,character_details:{name:"Adventurer",name_full:"Adventurer Two",pk:2}},{pk:1,encounter:4,encounter_details:{name:"Goblin Ambush",name_full:"Goblin Ambush",pk:4},character:4,character_details:{name:"Warrior",name_full:"Warrior Four",pk:4}},{pk:1,encounter:5,encounter_details:{name:"Treasure Hunt",name_full:"Treasure Hunt",pk:5},character:5,character_details:{name:"Wizard",name_full:"Wizard Five",pk:5}},{pk:1,encounter:6,encounter_details:{name:"Orc Battle",name_full:"Orc Battle",pk:6},character:6,character_details:{name:"Ranger",name_full:"Ranger Six",pk:6}},{pk:1,encounter:7,encounter_details:{name:"Bandit Raid",name_full:"Bandit Raid",pk:7},character:7,character_details:{name:"Paladin",name_full:"Paladin Seven",pk:7}}],location:1,location_details:{name:"Cave",pk:1,name_full:"Cave of the Red Dragon",parent_location_name:"Mountains"},title:"The Battle of the Red Dragon's Lair",diaryentry:1,diaryentry_details:{author_name:"Dungeon Master",is_main_session:1,session_number:1},order_index:1,name:"Encounter 1",creation_datetime:"2022-04-23T12:34:56.789Z",update_datetime:"2022-04-23T12:34:56.789Z",campaign:1,campaign_details:{pk:1,name:"Campaign 1"},getAbsoluteRouterUrl:()=>"/encounters/1/"},{pk:2,description:"\n      <p>A group of adventurers are hired to retrieve a stolen artifact from a well-guarded tomb. The tomb is filled with traps and monsters, but the adventurers are determined to complete the job and earn their reward.</p>\n    ",encounterConnections:[{pk:1,encounter:2,encounter_details:{name:"Tomb",name_full:"The Tomb of the Lost Artifact",pk:2},character:1,character_details:{name:"Rogue",name_full:"Rogue One",pk:1}},{pk:2,encounter:2,encounter_details:{name:"Tomb",name_full:"The Tomb of the Lost Artifact",pk:2},character:2,character_details:{name:"Fighter",name_full:"Fighter Two",pk:2}},{pk:3,encounter:2,encounter_details:{name:"Tomb",name_full:"The Tomb of the Lost Artifact",pk:2},character:3,character_details:{name:"Cleric",name_full:"Cleric Three",pk:3}}],location:2,location_details:{name:"Tomb",pk:2,name_full:"The Tomb of the Lost Artifact",parent_location_name:"Desert"},title:"The Tomb of the Lost Artifact",diaryentry:2,diaryentry_details:{author_name:"Dungeon Master",is_main_session:1,session_number:2},order_index:2,name:"Encounter 2",creation_datetime:"2022-04-23T12:34:56.789Z",update_datetime:"2022-04-23T12:34:56.789Z",campaign:1,campaign_details:{pk:1,name:"Campaign 1"},getAbsoluteRouterUrl:()=>"/encounters/2/"},{pk:2,description:"\n      <p>A peaceful meadow is disturbed by the sudden appearance of a swarm of angry bees. The buzzing grows louder as the bees form a whirlwind around the adventurers, stinging them fiercely. Despite the pain, the adventurers remain calm and work together to disperse the swarm.</p>\n    ",encounterConnections:[{pk:3,encounter:2,encounter_details:{name:"Bee Swarm",name_full:"Angry Bee Swarm",pk:2},character:3,character_details:{name:"Bard",name_full:"Bard Three",pk:3}},{pk:4,encounter:2,encounter_details:{name:"Bee Swarm",name_full:"Angry Bee Swarm",pk:2},character:4,character_details:{name:"Warrior",name_full:"Warrior Four",pk:4}}],location:2,location_details:{name:"Meadow",pk:2,name_full:"Meadow of the Angry Bees",parent_location_name:"Forest"},title:"The Bee Swarm Attack",diaryentry:2,diaryentry_details:{author_name:"Dungeon Master",is_main_session:0,session_number:2},order_index:2,name:"Encounter 2",creation_datetime:"2022-04-23T13:34:56.789Z",update_datetime:"2022-04-23T13:34:56.789Z",campaign:1,campaign_details:{pk:1,name:"Campaign 1"},getAbsoluteRouterUrl:()=>"/encounters/2/"}].map((encounter=>new _models_encounter.o(encounter))),campaign_details:{pk:1,name:"Campaign of Adventures"},adjacent_diaryentries:{next_diaryentry:{author_details:{pk:789,name:"Jane Doe"},session_details:{pk:124,is_main_session:!0,session_number:6,session_date:"2022-05-08",campaign_details:{pk:1,name:"Campaign of Adventures"}}},prior_diaryentry:{author_details:{pk:789,name:"Jane Doe"},session_details:{pk:122,is_main_session:!0,session_number:4,session_date:"2022-04-24",campaign_details:{pk:1,name:"Campaign of Adventures"}}}},getAbsoluteRouterUrl:()=>"https://example.com/diaryentries/456"},diaryentry_stories={title:"DesignSystem/Templates/DiaryentryComponent",component:DiaryentryComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[organisms.kJ,testing.Z_,ngx_formly_core.X0.forRoot({types:[{name:"text-editor",component:organisms.nC}],validationMessages:[validators.Bw,validators.l$],validators:[validators.np,validators.x5]})],declarations:[]})],args:{diaryentry:dummyDiaryEntry,campaignCharacters:[],encounterServerModel:void 0,canCreate:!0,canUpdate:!0,canDelete:!0}},Template=args=>({props:{...args,diaryentryDelete:(0,dist.aD)("diaryentryDelete"),encounterConnectionDelete:(0,dist.aD)("encounterConnectionDelete"),encounterConnectionCreate:(0,dist.aD)("encounterConnectionCreate"),encounterDelete:(0,dist.aD)("encounterDelete"),encounterUpdate:(0,dist.aD)("encounterUpdate"),encounterCreate:(0,dist.aD)("encounterCreate"),encounterCutInsert:(0,dist.aD)("encounterCutInsert"),encounterSwap:(0,dist.aD)("encounterSwap")}}),Default=Template.bind({});Default.args={};const NoPermission=Template.bind({});NoPermission.args={canDelete:!1,canUpdate:!1,canCreate:!1}},"./src/app/_services/formly/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Be:()=>requiredIconMessage,Bo:()=>fieldsDontMatchMessage,Bw:()=>requiredMessage,Ds:()=>hasSpecialCharactersMessage,K7:()=>requiredIconValidator,Kg:()=>sessionAuthorUniqueValidator,U3:()=>iconValidator,UP:()=>invalidTimeMessage,YM:()=>timeValidator,_7:()=>fieldMatchValidator,cc:()=>specialCharacterValidator,eS:()=>sessionAlreadyHasAuthor,l$:()=>notIntegerMessage,np:()=>requiredValidator,ol:()=>dateMessage,sm:()=>dateValidator,ud:()=>faPrefixMessage,x5:()=>integerValidator});var _home_runner_work_nimstoryfont_gui_nimstoryfont_gui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const invalidTimeMessage={name:"time",message:"Time must have 'hh:mm:ss' pattern"},requiredMessage={name:"required",message:"This field is required!"},dateMessage={name:"date",message:"This date does not follow the pattern: 'YYYY-MM-DD'. Sorry to be such a Nazi about it. The computer is forcing me."},requiredIconMessage={name:"requiredIcon",message:"This field requires a fontawesome icon as input. Here is a list of them: https://fontawesome.com/v4.7.0/icons/"},faPrefixMessage={name:"faPrefix",message:"Icons are stored without the 'fa-' from font-awesome prefix"},notIntegerMessage={name:"notInteger",message:"Your input is not an integer. This field requires an integer number. No amount of revolution can overcome this."},hasSpecialCharactersMessage={name:"hasSpecialCharacters",message:'Your input includes one of the following invalid special characters: [ ] ( ) ? | \\ " % ~ # < > :. If you need to rebel, please dont against this.'},fieldsDontMatchMessage={name:"fieldMatch",message:"Password Not Matching"},sessionAlreadyHasAuthor={name:"isInvalidSessionAuthorPair",message:"\n    The author you selected already has a diaryentry in the session you selected. You \n    can't have 2 diaryentries from the same author in the same session. Consider writing \n    your diaryentry as an encounter instead into the diaryentry at the spot you just considered."};const timeValidator={name:"time",validation:function timeValidation(control){const isValidTime=/\d\d.[0-5]\d.[0-5]\d/.test(control.value);return isValidTime?null:{time:!isValidTime}}};function requiredValidation(control){return!!control.value||0===control.value?null:{required:!0}}const requiredValidator={name:"required",validation:requiredValidation},requiredIconValidator={name:"requiredIcon",validation:requiredValidation};const dateValidator={name:"date",validation:function dateValidation(control){return/[1-2]\d{3}-(0\d|1[0-2])-[0-3]\d/.test(control.value)?null:{date:!0}}};const iconValidator={name:"faPrefix",validation:function iconValidation(control){const hasFaPrefix=/fa-/.test(control.value);return hasFaPrefix?null:{faPrefix:hasFaPrefix}}};const integerValidator={name:"notInteger",validation:function isIntegerValidation(control){const isInteger="number"==typeof control.value&&Number.isInteger(control.value);return isInteger?null:{notInteger:!isInteger}}};const specialCharacterValidator={name:"hasSpecialCharacters",validation:function hasNoSpecialCharactersValidation(control){if("string"==typeof control.value){const specialCharacters=["[","]","(",")","|","\\",'"',"%","~","#","<",">","?","/",":"];for(const specialCharacter of specialCharacters)if(control.value.includes(specialCharacter))return{hasSpecialCharacters:!0}}return null}};const fieldMatchValidator={name:"fieldMatch",validation:function passwordMatchValidation(control){const{password,passwordConfirm}=control.value;return passwordConfirm&&password?passwordConfirm===password?{passwordMatch:!0}:null:{passwordMatch:!0}}};function _isSessionAuthorPairUniqueValidator(){return(_isSessionAuthorPairUniqueValidator=(0,_home_runner_work_nimstoryfont_gui_nimstoryfont_gui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((function*(control){const{session:selectedSessionId,author:selectedAuthorId}=control.value,selectFieldOptionsObs=control.controls.session._fields[0].templateOptions.options,selectedOption=(yield selectFieldOptionsObs.toPromise()).find((option=>option.pk===selectedSessionId));if(null==selectedOption)throw"WeirdError. You selected a session, its id got into the model and somehow that field is no longer among the options (?)";const selectedAuthorAlreadyHasDiaryentryOnSession=selectedOption.author_ids.includes(selectedAuthorId),isInitialValue=control.pristine;return selectedAuthorAlreadyHasDiaryentryOnSession&&!isInitialValue?{passwordMatch:{message:"That account already has a diaryentry written for that session. Accounts can only have one Diaryentry per session"}}:{passwordMatch:null}}))).apply(this,arguments)}const sessionAuthorUniqueValidator={name:"sessionAuthorPairUnique",validation:function isSessionAuthorPairUniqueValidator(_x){return _isSessionAuthorPairUniqueValidator.apply(this,arguments)}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/app/design/templates/diaryentry/diaryentry.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".diaryentry__edit-row {\n  width: 100%;\n  margin-bottom: var(--spacer-3);\n}\n.diaryentry__heading {\n  text-align: center;\n}\n.diaryentry__subheading {\n  margin-bottom: var(--spacer-3);\n  text-align: center;\n}\n.diaryentry__images {\n  margin-bottom: var(--spacer-3);\n}\n.diaryentry__quote {\n  margin-bottom: var(--spacer-5);\n}\n.diaryentry__description {\n  margin-bottom: var(--spacer-5);\n}\n.diaryentry__items {\n  margin-bottom: var(--spacer-5);\n}\n.diaryentry__nav-buttons {\n  margin-bottom: var(--spacer-3);\n}\n\n.nav-buttons {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.nav-buttons__button-container {\n  display: flex;\n}\n.nav-buttons__button {\n  width: 100%;\n  display: flex;\n}\n.nav-buttons__button--left {\n  justify-content: flex-start;\n}\n.nav-buttons__button--right {\n  justify-content: flex-end;\n}\n\n.edit-row {\n  display: flex;\n  justify-content: flex-end;\n}\n.edit-row__edit-container {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.edit-container__button {\n  margin-top: var(--spacer-1);\n  margin-bottom: var(--spacer-1);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);