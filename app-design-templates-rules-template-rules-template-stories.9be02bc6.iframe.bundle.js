(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[1512],{"./src/app/design/templates/rules-template/rules-template.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoPermissions:()=>NoPermissions,NoRules:()=>NoRules,default:()=>rules_template_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2020/common.mjs"),testing=__webpack_require__("./node_modules/@angular/router/fesm2020/testing.mjs"),ngx_formly_core=__webpack_require__("./node_modules/@ngx-formly/core/fesm2020/ngx-formly-core.mjs"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),angular_dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),validators=__webpack_require__("./src/app/_services/formly/validators.ts"),organisms=(__webpack_require__("./node_modules/tinymce/tinymce.js"),__webpack_require__("./src/app/design/organisms/index.ts")),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,rules_template_componentngResource=__webpack_require__("./src/app/design/templates/rules-template/rules-template.component.scss?ngResource"),rules_template_componentngResource_default=__webpack_require__.n(rules_template_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts");let RulesTemplateComponent=((_class=class RulesTemplateComponent{constructor(routingService){this.routingService=routingService,this.canUpdate=!1,this.canDelete=!1,this.canCreate=!1,this.ruleDelete=new core.EventEmitter,this.ruleUpdate=new core.EventEmitter,this.ruleCreate=new core.EventEmitter}ngOnInit(){this.homeUrl=this.routingService.getRoutePath("home",{campaign:this.campaignName})}}).ctorParameters=()=>[{type:routing_service.Z}],_class.propDecorators={campaignName:[{type:core.Input}],rules:[{type:core.Input}],canUpdate:[{type:core.Input}],canDelete:[{type:core.Input}],canCreate:[{type:core.Input}],serverModel:[{type:core.Input}],ruleDelete:[{type:core.Output}],ruleUpdate:[{type:core.Output}],ruleCreate:[{type:core.Output}]},_class);RulesTemplateComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-rules-template",template:'<h1 class="heading"> \n  Rules\n</h1>\n\n<app-rules\n  [rules]="rules"\n  [serverModel]="serverModel"\n  [canCreate]="canCreate"\n  [canUpdate]="canUpdate"\n  [canDelete]="canDelete"\n  (ruleDelete)="ruleDelete.emit($event)"\n  (ruleCreate)="ruleCreate.emit($event)"\n  (ruleUpdate)="ruleUpdate.emit($event)"\n></app-rules>\n\n<div class="container">\n  <a class="row back-link" [routerLink]="homeUrl">\n    <app-button\n      [type]="\'SECONDARY\'"\n      [text]="\'Back to Frontpage\'"\n    ></app-button>\n  </a>\n</div>',styles:[rules_template_componentngResource_default()]})],RulesTemplateComponent);const dummyRule={getAbsoluteRouterUrl:()=>"/dnd/rules/1",pk:1,name:"The 'Critical Hit' Rule",creation_datetime:"2022-03-15T10:30:00Z",update_datetime:"2022-03-18T16:45:00Z",description:"\n    <p>In our campaign, we've decided to implement a 'critical hit' rule that can add some extra excitement to combat encounters. Whenever a player rolls a natural 20 on an attack roll, they will score a critical hit. This means that they will automatically hit their target, regardless of the target's AC, and will deal maximum damage for that attack. This rule applies to both players and enemies, so everyone has a chance to land a critical hit! </p>\n\n    <p>However, there is a risk involved in attempting a critical hit. If a player rolls a natural 1 on their attack roll while attempting a critical hit, they will suffer a critical failure. This means that their attack will miss and they will take some form of penalty, such as losing their balance and falling prone, or damaging their weapon in the process. This adds an element of unpredictability to combat, and encourages players to weigh the potential rewards and risks of attempting a critical hit.\" </p>\n\n    <p> This rule adds an exciting element of chance to combat encounters in the campaign, while also providing some risk and uncertainty for players who attempt to score a critical hit. By implementing this rule, players will have to think strategically about when to attempt a critical hit and when to play it safe, adding an additional layer of strategy and excitement to combat encounters. </p>\n  ",campaign:2,campaign_details:{pk:2,name:"The Quest for the Lost City"}},rules_template_stories={title:"DesignSystem/Templates/RulesTemplateComponent",component:RulesTemplateComponent,decorators:[(0,angular_dist.moduleMetadata)({imports:[common.CommonModule,organisms.kJ,testing.Z_,ngx_formly_core.X0.forRoot({types:[{name:"text-editor",component:organisms.nC}],validationMessages:[validators.Bw,validators.l$,validators.Ds],validators:[validators.np,validators.x5,validators.cc]})],declarations:[]})],args:{rules:Array(10).fill(dummyRule),canCreate:!0,canUpdate:!0,canDelete:!0,serverModel:void 0,campaignName:"Aldrune"}},Template=args=>({props:{...args,ruleDelete:(0,dist.aD)("ruleDelete"),ruleUpdate:(0,dist.aD)("ruleUpdate"),ruleCreate:(0,dist.aD)("ruleCreate")}}),Default=Template.bind({});Default.args={};const NoPermissions=Template.bind({});NoPermissions.args={canUpdate:!1,canCreate:!1,canDelete:!1};const NoRules=Template.bind({});NoRules.args={rules:[]}},"./src/app/_services/formly/validators.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Be:()=>requiredIconMessage,Bo:()=>fieldsDontMatchMessage,Bw:()=>requiredMessage,Ds:()=>hasSpecialCharactersMessage,K7:()=>requiredIconValidator,Kg:()=>sessionAuthorUniqueValidator,U3:()=>iconValidator,UP:()=>invalidTimeMessage,YM:()=>timeValidator,_7:()=>fieldMatchValidator,cc:()=>specialCharacterValidator,eS:()=>sessionAlreadyHasAuthor,l$:()=>notIntegerMessage,np:()=>requiredValidator,ol:()=>dateMessage,sm:()=>dateValidator,ud:()=>faPrefixMessage,x5:()=>integerValidator});var _home_runner_work_nimstoryfont_gui_nimstoryfont_gui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const invalidTimeMessage={name:"time",message:"Time must have 'hh:mm:ss' pattern"},requiredMessage={name:"required",message:"This field is required!"},dateMessage={name:"date",message:"This date does not follow the pattern: 'YYYY-MM-DD'. Sorry to be such a Nazi about it. The computer is forcing me."},requiredIconMessage={name:"requiredIcon",message:"This field requires a fontawesome icon as input. Here is a list of them: https://fontawesome.com/v4.7.0/icons/"},faPrefixMessage={name:"faPrefix",message:"Icons are stored without the 'fa-' from font-awesome prefix"},notIntegerMessage={name:"notInteger",message:"Your input is not an integer. This field requires an integer number. No amount of revolution can overcome this."},hasSpecialCharactersMessage={name:"hasSpecialCharacters",message:'Your input includes one of the following invalid special characters: [ ] ( ) ? | \\ " % ~ # < > :. If you need to rebel, please dont against this.'},fieldsDontMatchMessage={name:"fieldMatch",message:"Password Not Matching"},sessionAlreadyHasAuthor={name:"isInvalidSessionAuthorPair",message:"\n    The author you selected already has a diaryentry in the session you selected. You \n    can't have 2 diaryentries from the same author in the same session. Consider writing \n    your diaryentry as an encounter instead into the diaryentry at the spot you just considered."};const timeValidator={name:"time",validation:function timeValidation(control){const isValidTime=/\d\d.[0-5]\d.[0-5]\d/.test(control.value);return isValidTime?null:{time:!isValidTime}}};function requiredValidation(control){return!!control.value||0===control.value?null:{required:!0}}const requiredValidator={name:"required",validation:requiredValidation},requiredIconValidator={name:"requiredIcon",validation:requiredValidation};const dateValidator={name:"date",validation:function dateValidation(control){return/[1-2]\d{3}-(0\d|1[0-2])-[0-3]\d/.test(control.value)?null:{date:!0}}};const iconValidator={name:"faPrefix",validation:function iconValidation(control){const hasFaPrefix=/fa-/.test(control.value);return hasFaPrefix?null:{faPrefix:hasFaPrefix}}};const integerValidator={name:"notInteger",validation:function isIntegerValidation(control){const isInteger="number"==typeof control.value&&Number.isInteger(control.value);return isInteger?null:{notInteger:!isInteger}}};const specialCharacterValidator={name:"hasSpecialCharacters",validation:function hasNoSpecialCharactersValidation(control){if("string"==typeof control.value){const specialCharacters=["[","]","(",")","|","\\",'"',"%","~","#","<",">","?","/",":"];for(const specialCharacter of specialCharacters)if(control.value.includes(specialCharacter))return{hasSpecialCharacters:!0}}return null}};const fieldMatchValidator={name:"fieldMatch",validation:function passwordMatchValidation(control){const{password,passwordConfirm}=control.value;return passwordConfirm&&password?passwordConfirm===password?{passwordMatch:!0}:null:{passwordMatch:!0}}};function _isSessionAuthorPairUniqueValidator(){return(_isSessionAuthorPairUniqueValidator=(0,_home_runner_work_nimstoryfont_gui_nimstoryfont_gui_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__.Z)((function*(control){const{session:selectedSessionId,author:selectedAuthorId}=control.value,selectFieldOptionsObs=control.controls.session._fields[0].templateOptions.options,selectedOption=(yield selectFieldOptionsObs.toPromise()).find((option=>option.pk===selectedSessionId));if(null==selectedOption)throw"WeirdError. You selected a session, its id got into the model and somehow that field is no longer among the options (?)";const selectedAuthorAlreadyHasDiaryentryOnSession=selectedOption.author_ids.includes(selectedAuthorId),isInitialValue=control.pristine;return selectedAuthorAlreadyHasDiaryentryOnSession&&!isInitialValue?{passwordMatch:{message:"That account already has a diaryentry written for that session. Accounts can only have one Diaryentry per session"}}:{passwordMatch:null}}))).apply(this,arguments)}const sessionAuthorUniqueValidator={name:"sessionAuthorPairUnique",validation:function isSessionAuthorPairUniqueValidator(_x){return _isSessionAuthorPairUniqueValidator.apply(this,arguments)}}},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./src/app/design/templates/rules-template/rules-template.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".heading {\n  text-align: center;\n}\n\n.back-link {\n  width: -moz-fit-content;\n  width: fit-content;\n  display: inline-block;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);