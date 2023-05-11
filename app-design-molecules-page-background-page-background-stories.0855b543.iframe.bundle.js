(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[7085],{"./src/app/design/molecules/page-background/page-background.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,NoImage:()=>NoImage,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_angular__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_atoms__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/app/design/atoms/index.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Molecules/PageBackgroundComponent",component:__webpack_require__("./src/app/design/molecules/page-background/page-background.component.ts").f,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_0__.moduleMetadata)({imports:[_atoms__WEBPACK_IMPORTED_MODULE_1__.cg]})],args:{serverUrl:"https://www.aldrune.com",imageUrl:"/assets/default_images/audio_pic_default.webp"}},Template=args=>({props:{...args},template:'\n    <div style="height: 100vh;">\n      <app-page-background\n        [serverUrl]="serverUrl"\n        [imageUrl]="imageUrl"\n      ></app-page-background>\n    </div>\n  '}),Default=Template.bind({});Default.args={};const NoImage=Template.bind({});NoImage.args={imageUrl:void 0}},"./src/app/_functions/animate.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>animateElement});const animateElement=(element,animationName,prefix="animate__")=>{if(null==element)throw"Invalid Input Exception. The given element is null";const animationCSSClass=`${prefix}${animationName}`;return new Promise(((resolve,reject)=>{element.classList.add(`${prefix}animated`,animationCSSClass);element.addEventListener("animationend",(event=>{event.stopPropagation(),element.classList.remove(`${prefix}animated`,animationCSSClass),resolve("Animation ended")}),{once:!0})}))}},"./src/app/design/molecules/page-background/page-background.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{f:()=>PageBackgroundComponent});var asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,page_background_componentngResource=__webpack_require__("./src/app/design/molecules/page-background/page-background.component.scss?ngResource"),page_background_componentngResource_default=__webpack_require__.n(page_background_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),animate=__webpack_require__("./src/app/_functions/animate.ts");let PageBackgroundComponent=((_class=class PageBackgroundComponent{constructor(){this.defaultImageUrl="/assets/default_images/background_default.webp"}ngOnChanges(){const newPartialImageUrl=this.imageUrl??this.defaultImageUrl,fullImageUrl=`${this.serverUrl}${newPartialImageUrl}`;fullImageUrl!==this.currentImageUrl&&this.updateCurrentImage(fullImageUrl)}updateCurrentImage(newUrl){var _this=this;return(0,asyncToGenerator.Z)((function*(){yield _this.animateBackgroundImage("fadeOut"),_this.currentImageUrl=newUrl,yield _this.animateBackgroundImage("fadeIn")}))()}animateBackgroundImage(animation){var _this2=this;return(0,asyncToGenerator.Z)((function*(){if(null!=_this2.backgroundImage)return(0,animate.s)(_this2.backgroundImage.nativeElement,animation)}))()}}).ctorParameters=()=>[],_class.propDecorators={imageUrl:[{type:core.Input}],serverUrl:[{type:core.Input}],backgroundImage:[{type:core.ViewChild,args:["backgroundImage"]}]},_class);PageBackgroundComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-page-background",template:"<div\n  class=\"image\"\n  #backgroundImage\n  [style.background-image]=\"'linear-gradient(0deg, rgba(19, 21, 25, .5), rgba(19, 21, 25, .5)), url('+ currentImageUrl +')'\"\n></div>\n",styles:[page_background_componentngResource_default()]})],PageBackgroundComponent)},"./src/app/design/molecules/page-background/page-background.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,".image {\n  height: 100%;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);