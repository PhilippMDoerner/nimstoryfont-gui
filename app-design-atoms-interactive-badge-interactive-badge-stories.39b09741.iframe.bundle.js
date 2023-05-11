(self.webpackChunknimstoryfont_gui=self.webpackChunknimstoryfont_gui||[]).push([[6319],{"./src/app/design/atoms/interactive-badge/interactive-badge.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,Dark:()=>Dark,Default:()=>Default,Secondary:()=>Secondary,Warning:()=>Warning,WithLink:()=>WithLink,WithoutIcon:()=>WithoutIcon,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _angular_router_testing__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@angular/router/fesm2020/testing.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_angular__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/app/design/atoms/icon/icon.component.ts");const __WEBPACK_DEFAULT_EXPORT__={title:"DesignSystem/Atoms/InteractiveBadgeComponent",component:__webpack_require__("./src/app/design/atoms/interactive-badge/interactive-badge.component.ts").B,decorators:[(0,_storybook_angular__WEBPACK_IMPORTED_MODULE_1__.moduleMetadata)({imports:[_angular_router_testing__WEBPACK_IMPORTED_MODULE_4__.Z_],declarations:[_icon_icon_component__WEBPACK_IMPORTED_MODULE_2__.o]})],args:{text:"BadgeText",type:"PRIMARY",icon:"times",textLink:void 0}},Template=args=>({props:{...args,iconClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("iconClick"),labelClick:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_0__.aD)("labelClick")}}),Default=Template.bind({});Default.args={};const Secondary=Template.bind({});Secondary.args={type:"SECONDARY"};const Dark=Template.bind({});Dark.args={type:"DARK"};const Warning=Template.bind({});Warning.args={type:"WARNING"};const Danger=Template.bind({});Danger.args={type:"DANGER"};const WithoutIcon=Template.bind({});WithoutIcon.args={icon:void 0};const WithLink=Template.bind({});WithLink.args={textLink:"/to/other/page"}},"./src/app/design/atoms/_models/icon.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>ALL_SOLID_ICONS,f:()=>ALL_REGULAR_ICONS});const ALL_REGULAR_ICONS=["comments","magic","times","map","file-audio-o","book","user","user-plus","user-circle","group","envelope-o","database","trash","plus","table","check","refresh","pencil","arrow-left","arrow-right","hourglass","spinner","search","volume-up","clock-o","info-circle","calendar","lock","plus-square","home","th-list","chevron-down","chevron-up","chevron-left","chevron-right","hammer","upload"],ALL_SOLID_ICONS=["male","book-open","compass","sitemap","question-circle","hand-sparkles","calendar-alt","globe-americas","dragon","sign-out-alt","user-cog","desktop","download","redo-alt","cog","cut","file","copy","clipboard","up-long","down-long"]},"./src/app/design/atoms/icon/icon.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>IconComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,icon_componentngResource=__webpack_require__("./src/app/design/atoms/icon/icon.component.scss?ngResource"),icon_componentngResource_default=__webpack_require__.n(icon_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs"),icon=__webpack_require__("./src/app/design/atoms/_models/icon.ts");let IconComponent=((_class=class IconComponent{constructor(){this.iconType="REGULAR"}ngOnChanges(){const isSolidIcon=icon.I.includes(this.icon);this.iconType=isSolidIcon?"SOLID":"REGULAR"}}).propDecorators={icon:[{type:core.Input}]},_class);IconComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-icon",template:"<div \n  [ngClass]=\"{\n    'fas': iconType === 'SOLID',\n    'fa': iconType === 'REGULAR'\n  }\"\n  class=\"fa-{{icon}}\"\n></div>\n",styles:[icon_componentngResource_default()]})],IconComponent)},"./src/app/design/atoms/interactive-badge/interactive-badge.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{B:()=>InteractiveBadgeComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js");var _class,interactive_badge_componentngResource=__webpack_require__("./src/app/design/atoms/interactive-badge/interactive-badge.component.scss?ngResource"),interactive_badge_componentngResource_default=__webpack_require__.n(interactive_badge_componentngResource),core=__webpack_require__("./node_modules/@angular/core/fesm2020/core.mjs");let InteractiveBadgeComponent=((_class=class InteractiveBadgeComponent{constructor(){this.iconClick=new core.EventEmitter,this.labelClick=new core.EventEmitter}ngOnInit(){this.iconType=this.iconType??this.type}}).propDecorators={type:[{type:core.Input}],text:[{type:core.Input}],textLink:[{type:core.Input}],icon:[{type:core.Input}],iconType:[{type:core.Input}],iconClick:[{type:core.Output}],labelClick:[{type:core.Output}]},_class);InteractiveBadgeComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"app-interactive-badge",template:"<div class=\"badge-container\">\n  <a \n    [routerLink]=\"textLink\"\n    (click)=\"labelClick.emit()\"\n    class=\"badge\"\n    [ngClass]=\"{\n      'badge--part1': icon,\n      'bg-primary': type === 'PRIMARY',\n      'bg-secondary': type === 'SECONDARY',\n      'bg-dark': type === 'DARK',\n      'bg-danger': type === 'DANGER',\n      'bg-warning': type === 'WARNING',\n      'bg-info': type === 'INFO',\n      'bg-light': type === 'LIGHT',\n    }\"\n  >\n    {{text}}\n  </a>\n  \n  <ng-container *ngIf=\"icon\">\n    <a \n      (click)=\"iconClick.emit()\"\n      class=\"badge badge--part2\"\n      [ngClass]=\"{\n        'bg-primary': iconType === 'PRIMARY',\n        'bg-secondary': iconType === 'SECONDARY',\n        'bg-dark': iconType === 'DARK',\n        'bg-danger': iconType === 'DANGER',\n        'bg-warning': iconType === 'WARNING',\n        'bg-info': iconType === 'INFO',\n        'bg-light': iconType === 'LIGHT',\n      }\"\n    >\n      <app-icon [icon]=\"icon\"></app-icon>\n    </a>\n  </ng-container>\n</div>\n\n",styles:[interactive_badge_componentngResource_default()]})],InteractiveBadgeComponent)},"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_KKE3V3AL.aD});var chunk_KKE3V3AL=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-KKE3V3AL.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./node_modules/css-loader/dist/runtime/api.js":module=>{"use strict";module.exports=function(cssWithMappingToString){var list=[];return list.toString=function toString(){return this.map((function(item){var content="",needLayer=void 0!==item[5];return item[4]&&(content+="@supports (".concat(item[4],") {")),item[2]&&(content+="@media ".concat(item[2]," {")),needLayer&&(content+="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {")),content+=cssWithMappingToString(item),needLayer&&(content+="}"),item[2]&&(content+="}"),item[4]&&(content+="}"),content})).join("")},list.i=function i(modules,media,dedupe,supports,layer){"string"==typeof modules&&(modules=[[null,modules,void 0]]);var alreadyImportedModules={};if(dedupe)for(var k=0;k<this.length;k++){var id=this[k][0];null!=id&&(alreadyImportedModules[id]=!0)}for(var _k=0;_k<modules.length;_k++){var item=[].concat(modules[_k]);dedupe&&alreadyImportedModules[item[0]]||(void 0!==layer&&(void 0===item[5]||(item[1]="@layer".concat(item[5].length>0?" ".concat(item[5]):""," {").concat(item[1],"}")),item[5]=layer),media&&(item[2]?(item[1]="@media ".concat(item[2]," {").concat(item[1],"}"),item[2]=media):item[2]=media),supports&&(item[4]?(item[1]="@supports (".concat(item[4],") {").concat(item[1],"}"),item[4]=supports):item[4]="".concat(supports)),list.push(item))}},list}},"./node_modules/css-loader/dist/runtime/noSourceMaps.js":module=>{"use strict";module.exports=function(i){return i[1]}},"./node_modules/rxjs/dist/esm5/internal/BehaviorSubject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{X:()=>BehaviorSubject});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),BehaviorSubject=function(_super){function BehaviorSubject(_value){var _this=_super.call(this)||this;return _this._value=_value,_this}return(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ZT)(BehaviorSubject,_super),Object.defineProperty(BehaviorSubject.prototype,"value",{get:function(){return this.getValue()},enumerable:!1,configurable:!0}),BehaviorSubject.prototype._subscribe=function(subscriber){var subscription=_super.prototype._subscribe.call(this,subscriber);return!subscription.closed&&subscriber.next(this._value),subscription},BehaviorSubject.prototype.getValue=function(){var hasError=this.hasError,thrownError=this.thrownError,_value=this._value;if(hasError)throw thrownError;return this._throwIfClosed(),_value},BehaviorSubject.prototype.next=function(value){_super.prototype.next.call(this,this._value=value)},BehaviorSubject}(__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js").x)},"./node_modules/rxjs/dist/esm5/internal/observable/combineLatest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>combineLatest});var _Observable__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_from__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js"),_util_identity__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/executeSchedule.js");function combineLatest(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(args),resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.jO)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),observables=_a.args,keys=_a.keys;if(0===observables.length)return(0,_from__WEBPACK_IMPORTED_MODULE_2__.D)([],scheduler);var result=new _Observable__WEBPACK_IMPORTED_MODULE_3__.y(function combineLatestInit(observables,scheduler,valueTransform){void 0===valueTransform&&(valueTransform=_util_identity__WEBPACK_IMPORTED_MODULE_5__.y);return function(subscriber){maybeSchedule(scheduler,(function(){for(var length=observables.length,values=new Array(length),active=length,remainingFirstValues=length,_loop_1=function(i){maybeSchedule(scheduler,(function(){var source=(0,_from__WEBPACK_IMPORTED_MODULE_2__.D)(observables[i],scheduler),hasFirstValue=!1;source.subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_7__.x)(subscriber,(function(value){values[i]=value,hasFirstValue||(hasFirstValue=!0,remainingFirstValues--),remainingFirstValues||subscriber.next(valueTransform(values.slice()))}),(function(){--active||subscriber.complete()})))}),subscriber)},i=0;i<length;i++)_loop_1(i)}),subscriber)}}(observables,scheduler,keys?function(values){return(0,_util_createObject__WEBPACK_IMPORTED_MODULE_4__.n)(keys,values)}:_util_identity__WEBPACK_IMPORTED_MODULE_5__.y));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.Z)(resultSelector)):result}function maybeSchedule(scheduler,execute,subscription){scheduler?(0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_8__.f)(subscription,scheduler,execute):execute()}},"./node_modules/rxjs/dist/esm5/internal/observable/concat.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>concat});var mergeAll=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeAll.js");var util_args=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),from=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/from.js");function concat(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return function concatAll(){return(0,mergeAll.J)(1)}()((0,from.D)(args,(0,util_args.yG)(args)))}},"./node_modules/rxjs/dist/esm5/internal/operators/finalize.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>finalize});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function finalize(callback){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){try{source.subscribe(subscriber)}finally{subscriber.add(callback)}}))}},"./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>mapTo});var _map__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js");function mapTo(value){return(0,_map__WEBPACK_IMPORTED_MODULE_0__.U)((function(){return value}))}},"./node_modules/rxjs/dist/esm5/internal/operators/startWith.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>startWith});var _observable_concat__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js");function startWith(){for(var values=[],_i=0;_i<arguments.length;_i++)values[_i]=arguments[_i];var scheduler=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.yG)(values);return(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){(scheduler?(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source,scheduler):(0,_observable_concat__WEBPACK_IMPORTED_MODULE_2__.z)(values,source)).subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/switchMap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>switchMap});var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function switchMap(project,resultSelector){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.e)((function(source,subscriber){var innerSubscriber=null,index=0,isComplete=!1,checkComplete=function(){return isComplete&&!innerSubscriber&&subscriber.complete()};source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(value){null==innerSubscriber||innerSubscriber.unsubscribe();var innerIndex=0,outerIndex=index++;(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_2__.Xf)(project(value,outerIndex)).subscribe(innerSubscriber=(0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_1__.x)(subscriber,(function(innerValue){return subscriber.next(resultSelector?resultSelector(value,innerValue,outerIndex,innerIndex++):innerValue)}),(function(){innerSubscriber=null,checkComplete()})))}),(function(){isComplete=!0,checkComplete()})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/take.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>take});var _observable_empty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/empty.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js");function take(count){return count<=0?function(){return _observable_empty__WEBPACK_IMPORTED_MODULE_0__.E}:(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){var seen=0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.x)(subscriber,(function(value){++seen<=count&&(subscriber.next(value),count<=seen&&subscriber.complete())})))}))}},"./node_modules/rxjs/dist/esm5/internal/operators/tap.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>tap});var _util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),_util_lift__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_identity__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/identity.js");function tap(observerOrNext,error,complete){var tapObserver=(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.m)(observerOrNext)||error||complete?{next:observerOrNext,error,complete}:observerOrNext;return tapObserver?(0,_util_lift__WEBPACK_IMPORTED_MODULE_1__.e)((function(source,subscriber){var _a;null===(_a=tapObserver.subscribe)||void 0===_a||_a.call(tapObserver);var isUnsub=!0;source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__.x)(subscriber,(function(value){var _a;null===(_a=tapObserver.next)||void 0===_a||_a.call(tapObserver,value),subscriber.next(value)}),(function(){var _a;isUnsub=!1,null===(_a=tapObserver.complete)||void 0===_a||_a.call(tapObserver),subscriber.complete()}),(function(err){var _a;isUnsub=!1,null===(_a=tapObserver.error)||void 0===_a||_a.call(tapObserver,err),subscriber.error(err)}),(function(){var _a,_b;isUnsub&&(null===(_a=tapObserver.unsubscribe)||void 0===_a||_a.call(tapObserver)),null===(_b=tapObserver.finalize)||void 0===_b||_b.call(tapObserver)})))})):_util_identity__WEBPACK_IMPORTED_MODULE_3__.y}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{n:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.js"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.U)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.ev)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.CR)(args))):fn(args)}(fn,args)}))}},"./src/app/design/atoms/icon/icon.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./src/app/design/atoms/interactive-badge/interactive-badge.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,":host {\n  --inner-badge-padding: var(--spacer-2);\n}\n\n.badge-container {\n  display: flex;\n  flex-direction: row;\n}\n\n.badge {\n  cursor: pointer;\n  border-bottom: none;\n  text-decoration: none;\n}\n.badge--part1 {\n  border-top-right-radius: unset;\n  border-bottom-right-radius: unset;\n  padding-right: var(--inner-badge-padding);\n}\n.badge--part2 {\n  border-top-left-radius: unset;\n  border-bottom-left-radius: unset;\n  padding-left: var(--inner-badge-padding);\n  padding-right: var(--inner-badge-padding);\n  border-left: 1.5px solid var(--bs-white);\n}\n\n.bg-warning,\n.bg-light,\n.bg-info {\n  color: var(--bs-black);\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);