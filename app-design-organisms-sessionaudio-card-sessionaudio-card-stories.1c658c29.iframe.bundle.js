(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[3459],{"./src/app/design/organisms/sessionaudio-card/sessionaudio-card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>sessionaudio_card_stories});var testing=__webpack_require__("./node_modules/@angular/router/fesm2022/testing.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),formly_constants=__webpack_require__("./src/app/_modules/formly_constants.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var sessionaudio_card_componentngResource=__webpack_require__("./src/app/design/organisms/sessionaudio-card/sessionaudio-card.component.scss?ngResource"),sessionaudio_card_componentngResource_default=__webpack_require__.n(sessionaudio_card_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),router=__webpack_require__("./node_modules/@angular/router/fesm2022/router.mjs"),routing_service=__webpack_require__("./src/app/_services/routing.service.ts"),button_component=__webpack_require__("./src/app/design/atoms/button/button.component.ts");let SessionaudioCardComponent=class SessionaudioCardComponent{constructor(routingService){this.routingService=routingService,this.serverUrl=core.input.required(),this.sessionAudio=core.input.required(),this.sessionAudioUrl=(0,core.computed)((()=>{const campaignName=this.sessionAudio().campaign_details?.name,isMainSession=this.sessionAudio().session_details?.is_main_session_int,sessionNumber=this.sessionAudio().session_details?.session_number;return this.routingService.getRoutePath("sessionaudio",{campaign:campaignName,isMainSession,sessionNumber})}))}static{this.ctorParameters=()=>[{type:routing_service.O}]}static{this.propDecorators={serverUrl:[{type:core.Input,args:[{isSignal:!0,alias:"serverUrl",required:!0,transform:void 0}]}],sessionAudio:[{type:core.Input,args:[{isSignal:!0,alias:"sessionAudio",required:!0,transform:void 0}]}]}}};SessionaudioCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"app-sessionaudio-card",template:'<div class="card">\n  \x3c!-- Card Title --\x3e\n  <div class="card-header">\n    <h4 class="card-title">{{ sessionAudio().name }}</h4>\n  </div>\n\n  \x3c!-- Card Body --\x3e\n  <div class="card-body">\n    <a [routerLink]="sessionAudioUrl()" class="card-link">\n      <button\n        btn\n        [icon]="\'desktop\'"\n        [text]="\'Stream\'"\n        [kind]="\'PRIMARY\'"\n      ></button>\n    </a>\n\n    <a\n      [href]="serverUrl() + \'/\' + sessionAudio().download_url"\n      target="_blank"\n      class="card-link"\n    >\n      <button\n        btn\n        [icon]="\'download\'"\n        [text]="\'Download\'"\n        [kind]="\'DARK\'"\n      ></button>\n    </a>\n  </div>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush,imports:[button_component.Q,router.Wk],styles:[sessionaudio_card_componentngResource_default()]})],SessionaudioCardComponent);const sessionaudio_card_stories={title:"DesignSystem/Organisms/SessionaudioCardComponent",component:SessionaudioCardComponent,decorators:[(0,dist.moduleMetadata)({imports:[testing.c,formly_constants.d_]})],args:{serverUrl:"https://www.aldrune.com",sessionAudio:{getAbsoluteRouterUrl:()=>"/sessionaudio/456",article_type:"audio",name:"Audio of Main Session 83",pk:1001,name_full:"The Adventure Begins - Session 1",description:"The first session of our epic D&D campaign",update_datetime:"2022-01-01T10:00:00Z",session_details:{pk:1,session_number:1,is_main_session:!0,is_main_session_int:1},audio_url:"dnd-session-1-audio.mp3",download_url:"dnd-session-1-audio-download.mp3",campaign_details:{id:100,name:"The Chronicles of Adventure"}}}},Default=(args=>({props:{...args}})).bind({});Default.args={};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => ({\n  props: {\n    ...args\n  }\n})",...Default.parameters?.docs?.source}}}},"./src/app/design/organisms/sessionaudio-card/sessionaudio-card.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".card-title {\n  text-align: center;\n  margin-bottom: var(--spacer-0);\n}\n.card-body {\n  display: flex;\n  justify-content: center;\n  flex-direction: column;\n}\n.card-link {\n  text-align: center;\n  margin-bottom: var(--spacer-2);\n  margin-left: var(--spacer-0) !important;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);