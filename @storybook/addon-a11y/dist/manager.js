import * as React11 from 'react';
import React11__default, { isValidElement, createRef, cloneElement, PureComponent, useState, useCallback, useMemo, Fragment, useRef, useEffect, useLayoutEffect } from 'react';
import { Badge, ActionBar, ScrollArea, WithTooltip, TooltipLinkList, IconButton, Spaced, EmptyTabContent } from 'storybook/internal/components';
import { addons, types, useAddonState, useStorybookApi, useChannel, useParameter, useStorybookState } from 'storybook/internal/manager-api';
import { convert, themes, styled, Global } from 'storybook/internal/theming';
import { ChevronSmallDownIcon, SyncIcon, CheckIcon, AccessibilityIcon } from '@storybook/icons';
import { STORY_RENDERED, STORY_CHANGED } from 'storybook/internal/core-events';
import { HIGHLIGHT } from '@storybook/addon-highlight';
import { findDOMNode } from 'react-dom';

var ADDON_ID="storybook/a11y",PANEL_ID=`${ADDON_ID}/panel`,PARAM_KEY="a11y",RESULT=`${ADDON_ID}/result`,REQUEST=`${ADDON_ID}/request`,RUNNING=`${ADDON_ID}/running`,ERROR=`${ADDON_ID}/error`,MANUAL=`${ADDON_ID}/manual`,EVENTS={RESULT,REQUEST,RUNNING,ERROR,MANUAL};var colorsByType=[convert(themes.light).color.negative,convert(themes.light).color.positive,convert(themes.light).color.warning],A11yContext=React11.createContext({results:{passes:[],incomplete:[],violations:[]},setResults:()=>{},highlighted:[],toggleHighlight:()=>{},clearHighlights:()=>{},tab:0,setTab:()=>{}}),defaultResult={passes:[],incomplete:[],violations:[]},A11yContextProvider=({active,...props})=>{let[results,setResults]=useAddonState(ADDON_ID,defaultResult),[tab,setTab]=React11.useState(0),[highlighted,setHighlighted]=React11.useState([]),api=useStorybookApi(),storyEntry=api.getCurrentStoryData(),handleToggleHighlight=React11.useCallback((target,highlight)=>{setHighlighted(prevHighlighted=>highlight?[...prevHighlighted,...target]:prevHighlighted.filter(t=>!target.includes(t)));},[]),handleRun=renderedStoryId=>{emit(EVENTS.REQUEST,renderedStoryId,api.getParameters(renderedStoryId,"a11y"));},handleClearHighlights=React11.useCallback(()=>setHighlighted([]),[]),handleSetTab=React11.useCallback(index=>{handleClearHighlights(),setTab(index);},[]),handleReset=React11.useCallback(()=>{setTab(0),setResults(defaultResult);},[]),emit=useChannel({[STORY_RENDERED]:handleRun,[STORY_CHANGED]:handleReset});return React11.useEffect(()=>{emit(HIGHLIGHT,{elements:highlighted,color:colorsByType[tab]});},[highlighted,tab]),React11.useEffect(()=>{active&&storyEntry?.type==="story"?handleRun(storyEntry.id):handleClearHighlights();},[active,handleClearHighlights,emit,storyEntry]),active?React11.createElement(A11yContext.Provider,{value:{results,setResults,highlighted,toggleHighlight:handleToggleHighlight,clearHighlights:handleClearHighlights,tab,setTab:handleSetTab},...props}):null},useA11yContext=()=>React11.useContext(A11yContext);var Checkbox=styled.input(({disabled})=>({cursor:disabled?"not-allowed":"pointer"}));function areAllRequiredElementsHighlighted(elementsToHighlight,highlighted){let highlightedCount=elementsToHighlight.filter(item=>highlighted.includes(item.target[0])).length;return highlightedCount===0?1:highlightedCount===elementsToHighlight.length?0:2}var HighlightToggle=({toggleId,elementsToHighlight=[]})=>{let{toggleHighlight,highlighted}=useA11yContext(),checkBoxRef=React11__default.useRef(null),[checkBoxState,setChecked]=React11__default.useState(areAllRequiredElementsHighlighted(elementsToHighlight,highlighted));React11__default.useEffect(()=>{let newState=areAllRequiredElementsHighlighted(elementsToHighlight,highlighted);checkBoxRef.current&&(checkBoxRef.current.indeterminate=newState===2),setChecked(newState);},[elementsToHighlight,highlighted]);let handleToggle=React11__default.useCallback(()=>{toggleHighlight(elementsToHighlight.map(e=>e.target[0]),checkBoxState!==0);},[elementsToHighlight,checkBoxState,toggleHighlight]);return React11__default.createElement(Checkbox,{ref:checkBoxRef,id:toggleId,type:"checkbox","aria-label":"Highlight result",disabled:!elementsToHighlight.length,onChange:handleToggle,checked:checkBoxState===0})},HighlightToggle_default=HighlightToggle;var extendStatics=function(d,b){return extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(d2,b2){d2.__proto__=b2;}||function(d2,b2){for(var p in b2)Object.prototype.hasOwnProperty.call(b2,p)&&(d2[p]=b2[p]);},extendStatics(d,b)};function __extends(d,b){if(typeof b!="function"&&b!==null)throw new TypeError("Class extends value "+String(b)+" is not a constructor or null");extendStatics(d,b);function __(){this.constructor=d;}d.prototype=b===null?Object.create(b):(__.prototype=b.prototype,new __);}var __assign=function(){return __assign=Object.assign||function(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&(t[p]=s[p]);}return t},__assign.apply(this,arguments)};function __rest(s,e){var t={};for(var p in s)Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0&&(t[p]=s[p]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++)e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i])&&(t[p[i]]=s[p[i]]);return t}var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function isObject$3(value){var type=typeof value;return value!=null&&(type=="object"||type=="function")}var isObject_1=isObject$3,freeGlobal$1=typeof commonjsGlobal=="object"&&commonjsGlobal&&commonjsGlobal.Object===Object&&commonjsGlobal,_freeGlobal=freeGlobal$1,freeGlobal=_freeGlobal,freeSelf=typeof self=="object"&&self&&self.Object===Object&&self,root$2=freeGlobal||freeSelf||Function("return this")(),_root=root$2,root$1=_root,now$1=function(){return root$1.Date.now()},now_1=now$1,reWhitespace=/\s/;function trimmedEndIndex$1(string){for(var index=string.length;index--&&reWhitespace.test(string.charAt(index)););return index}var _trimmedEndIndex=trimmedEndIndex$1,trimmedEndIndex=_trimmedEndIndex,reTrimStart=/^\s+/;function baseTrim$1(string){return string&&string.slice(0,trimmedEndIndex(string)+1).replace(reTrimStart,"")}var _baseTrim=baseTrim$1,root=_root,Symbol$2=root.Symbol,_Symbol=Symbol$2,Symbol$1=_Symbol,objectProto$1=Object.prototype,hasOwnProperty=objectProto$1.hasOwnProperty,nativeObjectToString$1=objectProto$1.toString,symToStringTag$1=Symbol$1?Symbol$1.toStringTag:void 0;function getRawTag$1(value){var isOwn=hasOwnProperty.call(value,symToStringTag$1),tag=value[symToStringTag$1];try{value[symToStringTag$1]=void 0;var unmasked=!0;}catch{}var result=nativeObjectToString$1.call(value);return unmasked&&(isOwn?value[symToStringTag$1]=tag:delete value[symToStringTag$1]),result}var _getRawTag=getRawTag$1,objectProto=Object.prototype,nativeObjectToString=objectProto.toString;function objectToString$1(value){return nativeObjectToString.call(value)}var _objectToString=objectToString$1,Symbol=_Symbol,getRawTag=_getRawTag,objectToString=_objectToString,nullTag="[object Null]",undefinedTag="[object Undefined]",symToStringTag=Symbol?Symbol.toStringTag:void 0;function baseGetTag$1(value){return value==null?value===void 0?undefinedTag:nullTag:symToStringTag&&symToStringTag in Object(value)?getRawTag(value):objectToString(value)}var _baseGetTag=baseGetTag$1;function isObjectLike$1(value){return value!=null&&typeof value=="object"}var isObjectLike_1=isObjectLike$1,baseGetTag=_baseGetTag,isObjectLike=isObjectLike_1,symbolTag="[object Symbol]";function isSymbol$1(value){return typeof value=="symbol"||isObjectLike(value)&&baseGetTag(value)==symbolTag}var isSymbol_1=isSymbol$1,baseTrim=_baseTrim,isObject$2=isObject_1,isSymbol=isSymbol_1,NAN=NaN,reIsBadHex=/^[-+]0x[0-9a-f]+$/i,reIsBinary=/^0b[01]+$/i,reIsOctal=/^0o[0-7]+$/i,freeParseInt=parseInt;function toNumber$1(value){if(typeof value=="number")return value;if(isSymbol(value))return NAN;if(isObject$2(value)){var other=typeof value.valueOf=="function"?value.valueOf():value;value=isObject$2(other)?other+"":other;}if(typeof value!="string")return value===0?value:+value;value=baseTrim(value);var isBinary=reIsBinary.test(value);return isBinary||reIsOctal.test(value)?freeParseInt(value.slice(2),isBinary?2:8):reIsBadHex.test(value)?NAN:+value}var toNumber_1=toNumber$1,isObject$1=isObject_1,now=now_1,toNumber=toNumber_1,FUNC_ERROR_TEXT$1="Expected a function",nativeMax=Math.max,nativeMin=Math.min;function debounce$1(func,wait,options){var lastArgs,lastThis,maxWait,result,timerId,lastCallTime,lastInvokeTime=0,leading=!1,maxing=!1,trailing=!0;if(typeof func!="function")throw new TypeError(FUNC_ERROR_TEXT$1);wait=toNumber(wait)||0,isObject$1(options)&&(leading=!!options.leading,maxing="maxWait"in options,maxWait=maxing?nativeMax(toNumber(options.maxWait)||0,wait):maxWait,trailing="trailing"in options?!!options.trailing:trailing);function invokeFunc(time){var args=lastArgs,thisArg=lastThis;return lastArgs=lastThis=void 0,lastInvokeTime=time,result=func.apply(thisArg,args),result}function leadingEdge(time){return lastInvokeTime=time,timerId=setTimeout(timerExpired,wait),leading?invokeFunc(time):result}function remainingWait(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime,timeWaiting=wait-timeSinceLastCall;return maxing?nativeMin(timeWaiting,maxWait-timeSinceLastInvoke):timeWaiting}function shouldInvoke(time){var timeSinceLastCall=time-lastCallTime,timeSinceLastInvoke=time-lastInvokeTime;return lastCallTime===void 0||timeSinceLastCall>=wait||timeSinceLastCall<0||maxing&&timeSinceLastInvoke>=maxWait}function timerExpired(){var time=now();if(shouldInvoke(time))return trailingEdge(time);timerId=setTimeout(timerExpired,remainingWait(time));}function trailingEdge(time){return timerId=void 0,trailing&&lastArgs?invokeFunc(time):(lastArgs=lastThis=void 0,result)}function cancel(){timerId!==void 0&&clearTimeout(timerId),lastInvokeTime=0,lastArgs=lastCallTime=lastThis=timerId=void 0;}function flush(){return timerId===void 0?result:trailingEdge(now())}function debounced(){var time=now(),isInvoking=shouldInvoke(time);if(lastArgs=arguments,lastThis=this,lastCallTime=time,isInvoking){if(timerId===void 0)return leadingEdge(lastCallTime);if(maxing)return clearTimeout(timerId),timerId=setTimeout(timerExpired,wait),invokeFunc(lastCallTime)}return timerId===void 0&&(timerId=setTimeout(timerExpired,wait)),result}return debounced.cancel=cancel,debounced.flush=flush,debounced}var debounce_1=debounce$1,debounce=debounce_1,isObject=isObject_1,FUNC_ERROR_TEXT="Expected a function";function throttle(func,wait,options){var leading=!0,trailing=!0;if(typeof func!="function")throw new TypeError(FUNC_ERROR_TEXT);return isObject(options)&&(leading="leading"in options?!!options.leading:leading,trailing="trailing"in options?!!options.trailing:trailing),debounce(func,wait,{leading,maxWait:wait,trailing})}var throttle_1=throttle,patchResizeHandler=function(resizeCallback,refreshMode,refreshRate,refreshOptions){switch(refreshMode){case"debounce":return debounce_1(resizeCallback,refreshRate,refreshOptions);case"throttle":return throttle_1(resizeCallback,refreshRate,refreshOptions);default:return resizeCallback}},isFunction=function(fn){return typeof fn=="function"},isSSR=function(){return typeof window>"u"},isDOMElement=function(element){return element instanceof Element||element instanceof HTMLDocument},createNotifier=function(onResize,setSize,handleWidth,handleHeight){return function(_a){var width=_a.width,height=_a.height;setSize(function(prev){return prev.width===width&&prev.height===height||prev.width===width&&!handleHeight||prev.height===height&&!handleWidth?prev:(onResize&&isFunction(onResize)&&onResize(width,height),{width,height})});}};(function(_super){__extends(ResizeDetector2,_super);function ResizeDetector2(props){var _this=_super.call(this,props)||this;_this.cancelHandler=function(){_this.resizeHandler&&_this.resizeHandler.cancel&&(_this.resizeHandler.cancel(),_this.resizeHandler=null);},_this.attachObserver=function(){var _a2=_this.props,targetRef=_a2.targetRef,observerOptions=_a2.observerOptions;if(!isSSR()){targetRef&&targetRef.current&&(_this.targetRef.current=targetRef.current);var element=_this.getElement();element&&(_this.observableElement&&_this.observableElement===element||(_this.observableElement=element,_this.resizeObserver.observe(element,observerOptions)));}},_this.getElement=function(){var _a2=_this.props,querySelector=_a2.querySelector,targetDomEl=_a2.targetDomEl;if(isSSR())return null;if(querySelector)return document.querySelector(querySelector);if(targetDomEl&&isDOMElement(targetDomEl))return targetDomEl;if(_this.targetRef&&isDOMElement(_this.targetRef.current))return _this.targetRef.current;var currentElement=findDOMNode(_this);if(!currentElement)return null;var renderType=_this.getRenderType();switch(renderType){case"renderProp":return currentElement;case"childFunction":return currentElement;case"child":return currentElement;case"childArray":return currentElement;default:return currentElement.parentElement}},_this.createResizeHandler=function(entries){var _a2=_this.props,_b=_a2.handleWidth,handleWidth=_b===void 0?!0:_b,_c=_a2.handleHeight,handleHeight=_c===void 0?!0:_c,onResize=_a2.onResize;if(!(!handleWidth&&!handleHeight)){var notifyResize=createNotifier(onResize,_this.setState.bind(_this),handleWidth,handleHeight);entries.forEach(function(entry){var _a3=entry&&entry.contentRect||{},width=_a3.width,height=_a3.height,shouldSetSize=!_this.skipOnMount&&!isSSR();shouldSetSize&&notifyResize({width,height}),_this.skipOnMount=!1;});}},_this.getRenderType=function(){var _a2=_this.props,render=_a2.render,children=_a2.children;return isFunction(render)?"renderProp":isFunction(children)?"childFunction":isValidElement(children)?"child":Array.isArray(children)?"childArray":"parent"};var skipOnMount=props.skipOnMount,refreshMode=props.refreshMode,_a=props.refreshRate,refreshRate=_a===void 0?1e3:_a,refreshOptions=props.refreshOptions;return _this.state={width:void 0,height:void 0},_this.skipOnMount=skipOnMount,_this.targetRef=createRef(),_this.observableElement=null,isSSR()||(_this.resizeHandler=patchResizeHandler(_this.createResizeHandler,refreshMode,refreshRate,refreshOptions),_this.resizeObserver=new window.ResizeObserver(_this.resizeHandler)),_this}return ResizeDetector2.prototype.componentDidMount=function(){this.attachObserver();},ResizeDetector2.prototype.componentDidUpdate=function(){this.attachObserver();},ResizeDetector2.prototype.componentWillUnmount=function(){isSSR()||(this.observableElement=null,this.resizeObserver.disconnect(),this.cancelHandler());},ResizeDetector2.prototype.render=function(){var _a=this.props,render=_a.render,children=_a.children,_b=_a.nodeType,WrapperTag=_b===void 0?"div":_b,_c=this.state,width=_c.width,height=_c.height,childProps={width,height,targetRef:this.targetRef},renderType=this.getRenderType(),typedChildren;switch(renderType){case"renderProp":return render&&render(childProps);case"childFunction":return typedChildren=children,typedChildren(childProps);case"child":if(typedChildren=children,typedChildren.type&&typeof typedChildren.type=="string"){childProps.targetRef;var nativeProps=__rest(childProps,["targetRef"]);return cloneElement(typedChildren,nativeProps)}return cloneElement(typedChildren,childProps);case"childArray":return typedChildren=children,typedChildren.map(function(el){return !!el&&cloneElement(el,childProps)});default:return React11.createElement(WrapperTag,null)}},ResizeDetector2})(PureComponent);var useEnhancedEffect=isSSR()?useEffect:useLayoutEffect;function useResizeDetector(props){props===void 0&&(props={});var _a=props.skipOnMount,skipOnMount=_a===void 0?!1:_a,refreshMode=props.refreshMode,_b=props.refreshRate,refreshRate=_b===void 0?1e3:_b,refreshOptions=props.refreshOptions,_c=props.handleWidth,handleWidth=_c===void 0?!0:_c,_d=props.handleHeight,handleHeight=_d===void 0?!0:_d,targetRef=props.targetRef,observerOptions=props.observerOptions,onResize=props.onResize,skipResize=useRef(skipOnMount),localRef=useRef(null),ref=targetRef??localRef,resizeHandler=useRef(),_e=useState({width:void 0,height:void 0}),size=_e[0],setSize=_e[1];return useEnhancedEffect(function(){if(!isSSR()){var notifyResize=createNotifier(onResize,setSize,handleWidth,handleHeight),resizeCallback=function(entries){!handleWidth&&!handleHeight||entries.forEach(function(entry){var _a2=entry&&entry.contentRect||{},width=_a2.width,height=_a2.height,shouldSetSize=!skipResize.current&&!isSSR();shouldSetSize&&notifyResize({width,height}),skipResize.current=!1;});};resizeHandler.current=patchResizeHandler(resizeCallback,refreshMode,refreshRate,refreshOptions);var resizeObserver=new window.ResizeObserver(resizeHandler.current);return ref.current&&resizeObserver.observe(ref.current,observerOptions),function(){resizeObserver.disconnect();var patchedResizeHandler=resizeHandler.current;patchedResizeHandler&&patchedResizeHandler.cancel&&patchedResizeHandler.cancel();}}},[refreshMode,refreshRate,refreshOptions,handleWidth,handleHeight,onResize,observerOptions,ref.current]),__assign({ref},size)}var List=styled.div({display:"flex",flexDirection:"column",paddingBottom:4,paddingRight:4,paddingTop:4,fontWeight:400}),Item=styled.div(({elementWidth})=>({flexDirection:elementWidth>407?"row":"inherit",marginBottom:elementWidth>407?6:12,display:elementWidth>407?"flex":"block"})),StyledBadge=styled(Badge)({padding:"2px 8px",marginBottom:3,minWidth:65,maxWidth:"fit-content",width:"100%",textAlign:"center"}),Message=styled.div({paddingLeft:6,paddingRight:23});var formatSeverityText=severity=>severity.charAt(0).toUpperCase().concat(severity.slice(1)),Rule=({rule})=>{let{ref,width}=useResizeDetector({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),badgeType=null;switch(rule.impact){case"critical":badgeType="critical";break;case"serious":badgeType="negative";break;case"moderate":badgeType="warning";break;case"minor":badgeType="neutral";break;}return React11__default.createElement(Item,{ref,elementWidth:width||0},React11__default.createElement(StyledBadge,{status:badgeType},formatSeverityText(rule.impact)),React11__default.createElement(Message,null,rule.message))},Rules=({rules})=>React11__default.createElement(List,null,rules.map((rule,index)=>React11__default.createElement(Rule,{rule,key:index})));var Item2=styled.li({fontWeight:600}),ItemTitle=styled.span(({theme})=>({borderBottom:`1px solid ${theme.appBorderColor}`,width:"100%",display:"flex",paddingBottom:6,marginBottom:6,justifyContent:"space-between"})),HighlightToggleElement=styled.span({fontWeight:"normal",alignSelf:"center",paddingRight:15,input:{margin:0,display:"block"}}),Element2=({element,type})=>{let{any,all,none}=element,rules=[...any,...all,...none],highlightToggleId=`${type}-${element.target[0]}`;return React11__default.createElement(Item2,null,React11__default.createElement(ItemTitle,null,element.target[0],React11__default.createElement(HighlightToggleElement,null,React11__default.createElement(HighlightToggle_default,{toggleId:highlightToggleId,elementsToHighlight:[element]}))),React11__default.createElement(Rules,{rules}))},Elements=({elements,type})=>React11__default.createElement("ol",null,elements.map((element,index)=>React11__default.createElement(Element2,{element,key:index,type})));var Wrapper=styled.div({padding:12,marginBottom:10}),Description=styled.p({margin:"0 0 12px"}),Link=styled.a({marginTop:12,textDecoration:"underline",color:"inherit",display:"block"}),Info=({item})=>React11__default.createElement(Wrapper,null,React11__default.createElement(Description,null,item.description),React11__default.createElement(Link,{href:item.helpUrl,target:"_blank"},"More info..."));var Wrapper2=styled.div({display:"flex",flexWrap:"wrap",margin:"12px 0"}),Item3=styled.div(({theme})=>({margin:"0 6px",padding:5,border:`1px solid ${theme.appBorderColor}`,borderRadius:theme.appBorderRadius})),Tags=({tags})=>React11__default.createElement(Wrapper2,null,tags.map(tag=>React11__default.createElement(Item3,{key:tag},tag)));var Wrapper3=styled.div(({theme})=>({display:"flex",width:"100%",borderBottom:`1px solid ${theme.appBorderColor}`,"&:hover":{background:theme.background.hoverable}})),Icon=styled(ChevronSmallDownIcon)({marginRight:10,transition:"transform 0.1s ease-in-out",verticalAlign:"inherit"}),HeaderBar=styled.div(({theme})=>({padding:theme.layoutMargin,paddingLeft:theme.layoutMargin-3,lineHeight:"20px",background:"none",color:"inherit",textAlign:"left",cursor:"pointer",borderLeft:"3px solid transparent",width:"100%","&:focus":{outline:"0 none",borderLeft:`3px solid ${theme.color.secondary}`}})),HighlightToggleElement2=styled.span({fontWeight:"normal",float:"right",marginRight:15,alignSelf:"center",input:{margin:0,display:"block"}}),Item4=props=>{let[open,onToggle]=useState(!1),{item,type}=props,highlightToggleId=`${type}-${item.id}`;return React11__default.createElement(Fragment,null,React11__default.createElement(Wrapper3,null,React11__default.createElement(HeaderBar,{onClick:()=>onToggle(!open),role:"button"},React11__default.createElement(Icon,{style:{transform:`rotate(${open?0:-90}deg)`}}),item.help),React11__default.createElement(HighlightToggleElement2,null,React11__default.createElement(HighlightToggle_default,{toggleId:highlightToggleId,elementsToHighlight:item.nodes}))),open?React11__default.createElement(Fragment,null,React11__default.createElement(Info,{item,key:"info"}),React11__default.createElement(Elements,{elements:item.nodes,type,key:"elements"}),React11__default.createElement(Tags,{tags:item.tags,key:"tags"})):null)};var Report=({items,empty,type})=>React11__default.createElement(Fragment,null,items&&items.length?items.map(item=>React11__default.createElement(Item4,{item,key:`${type}:${item.id}`,type})):React11__default.createElement(EmptyTabContent,{title:empty}));var Container=styled.div({width:"100%",position:"relative",minHeight:"100%"}),HighlightToggleLabel=styled.label(({theme})=>({cursor:"pointer",userSelect:"none",color:theme.color.dark})),GlobalToggle=styled.div(({elementWidth,theme})=>({cursor:"pointer",fontSize:13,lineHeight:"20px",padding:elementWidth>450?"10px 15px 10px 0":"10px 0px 10px 15px",height:"40px",border:"none",marginTop:elementWidth>450?-40:0,float:elementWidth>450?"right":"left",display:"flex",alignItems:"center",width:elementWidth>450?"auto":"100%",borderBottom:elementWidth>450?"none":`1px solid ${theme.appBorderColor}`,input:{marginLeft:10,marginRight:0,marginTop:-1,marginBottom:0}})),Item5=styled.button(({theme})=>({textDecoration:"none",padding:"10px 15px",cursor:"pointer",fontWeight:theme.typography.weight.bold,fontSize:theme.typography.size.s2-1,lineHeight:1,height:40,border:"none",borderTop:"3px solid transparent",borderBottom:"3px solid transparent",background:"transparent","&:focus":{outline:"0 none",borderBottom:`3px solid ${theme.color.secondary}`}}),({active,theme})=>active?{opacity:1,borderBottom:`3px solid ${theme.color.secondary}`}:{}),TabsWrapper=styled.div({}),List2=styled.div(({theme})=>({boxShadow:`${theme.appBorderColor} 0 -1px 0 0 inset`,background:theme.background.app,display:"flex",justifyContent:"space-between",whiteSpace:"nowrap"}));function retrieveAllNodesFromResults(items){return items.reduce((acc,item)=>acc.concat(item.nodes),[])}var Tabs=({tabs})=>{let{ref,width}=useResizeDetector({refreshMode:"debounce",handleHeight:!1,handleWidth:!0}),{tab:activeTab,setTab}=useA11yContext(),handleToggle=React11.useCallback(event=>{setTab(parseInt(event.currentTarget.getAttribute("data-index")||"",10));},[setTab]),highlightToggleId=`${tabs[activeTab].type}-global-checkbox`;return React11.createElement(Container,{ref},React11.createElement(List2,null,React11.createElement(TabsWrapper,null,tabs.map((tab,index)=>React11.createElement(Item5,{key:index,"data-index":index,active:activeTab===index,onClick:handleToggle},tab.label)))),tabs[activeTab].items.length>0?React11.createElement(GlobalToggle,{elementWidth:width||0},React11.createElement(HighlightToggleLabel,{htmlFor:highlightToggleId},"Highlight results"),React11.createElement(HighlightToggle_default,{toggleId:highlightToggleId,elementsToHighlight:retrieveAllNodesFromResults(tabs[activeTab].items)})):null,tabs[activeTab].panel)};var Icon2=styled(SyncIcon)({marginRight:4}),RotatingIcon=styled(Icon2)(({theme})=>({animation:`${theme.animation.rotate360} 1s linear infinite;`})),Passes=styled.span(({theme})=>({color:theme.color.positiveText})),Violations=styled.span(({theme})=>({color:theme.color.negativeText})),Incomplete=styled.span(({theme})=>({color:theme.color.warningText})),Centered=styled.span({display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}),A11YPanel=()=>{let{manual}=useParameter("a11y",{manual:!1}),[status,setStatus]=useState(manual?"manual":"initial"),[error,setError]=React11__default.useState(void 0),{setResults,results}=useA11yContext(),{storyId}=useStorybookState(),api=useStorybookApi();React11__default.useEffect(()=>{setStatus(manual?"manual":"initial");},[manual]);let handleResult=axeResults=>{setStatus("ran"),setResults(axeResults),setTimeout(()=>{status==="ran"&&setStatus("ready");},900);},handleRun=useCallback(()=>{setStatus("running");},[]),handleError=useCallback(err=>{setStatus("error"),setError(err);},[]),emit=useChannel({[EVENTS.RUNNING]:handleRun,[EVENTS.RESULT]:handleResult,[EVENTS.ERROR]:handleError}),handleManual=useCallback(()=>{setStatus("running"),emit(EVENTS.MANUAL,storyId,api.getParameters(storyId,"a11y"));},[storyId]),manualActionItems=useMemo(()=>[{title:"Run test",onClick:handleManual}],[handleManual]),readyActionItems=useMemo(()=>[{title:status==="ready"?"Rerun tests":React11__default.createElement(React11__default.Fragment,null,React11__default.createElement(CheckIcon,null)," Tests completed"),onClick:handleManual}],[status,handleManual]),tabs=useMemo(()=>{let{passes,incomplete,violations}=results;return [{label:React11__default.createElement(Violations,null,violations.length," Violations"),panel:React11__default.createElement(Report,{items:violations,type:0,empty:"No accessibility violations found."}),items:violations,type:0},{label:React11__default.createElement(Passes,null,passes.length," Passes"),panel:React11__default.createElement(Report,{items:passes,type:1,empty:"No accessibility checks passed."}),items:passes,type:1},{label:React11__default.createElement(Incomplete,null,incomplete.length," Incomplete"),panel:React11__default.createElement(Report,{items:incomplete,type:2,empty:"No accessibility checks incomplete."}),items:incomplete,type:2}]},[results]);return React11__default.createElement(React11__default.Fragment,null,status==="initial"&&React11__default.createElement(Centered,null,"Initializing..."),status==="manual"&&React11__default.createElement(React11__default.Fragment,null,React11__default.createElement(Centered,null,"Manually run the accessibility scan."),React11__default.createElement(ActionBar,{key:"actionbar",actionItems:manualActionItems})),status==="running"&&React11__default.createElement(Centered,null,React11__default.createElement(RotatingIcon,{size:12})," Please wait while the accessibility scan is running ..."),(status==="ready"||status==="ran")&&React11__default.createElement(React11__default.Fragment,null,React11__default.createElement(ScrollArea,{vertical:!0,horizontal:!0},React11__default.createElement(Tabs,{key:"tabs",tabs})),React11__default.createElement(ActionBar,{key:"actionbar",actionItems:readyActionItems})),status==="error"&&React11__default.createElement(Centered,null,"The accessibility scan encountered an error.",React11__default.createElement("br",null),typeof error=="string"?error:JSON.stringify(error)))};var Filters=props=>React11.createElement("svg",{...props},React11.createElement("defs",null,React11.createElement("filter",{id:"protanopia"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.567, 0.433, 0, 0, 0 0.558, 0.442, 0, 0, 0 0, 0.242, 0.758, 0, 0 0, 0, 0, 1, 0"})),React11.createElement("filter",{id:"protanomaly"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.817, 0.183, 0, 0, 0 0.333, 0.667, 0, 0, 0 0, 0.125, 0.875, 0, 0 0, 0, 0, 1, 0"})),React11.createElement("filter",{id:"deuteranopia"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.625, 0.375, 0, 0, 0 0.7, 0.3, 0, 0, 0 0, 0.3, 0.7, 0, 0 0, 0, 0, 1, 0"})),React11.createElement("filter",{id:"deuteranomaly"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.8, 0.2, 0, 0, 0 0.258, 0.742, 0, 0, 0 0, 0.142, 0.858, 0, 0 0, 0, 0, 1, 0"})),React11.createElement("filter",{id:"tritanopia"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.95, 0.05,  0, 0, 0 0,  0.433, 0.567, 0, 0 0,  0.475, 0.525, 0, 0 0,  0, 0, 1, 0"})),React11.createElement("filter",{id:"tritanomaly"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.967, 0.033, 0, 0, 0 0, 0.733, 0.267, 0, 0 0, 0.183, 0.817, 0, 0 0, 0, 0, 1, 0"})),React11.createElement("filter",{id:"achromatopsia"},React11.createElement("feColorMatrix",{in:"SourceGraphic",type:"matrix",values:"0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0.299, 0.587, 0.114, 0, 0 0, 0, 0, 1, 0"}))));var iframeId="storybook-preview-iframe",baseList=[{name:"blurred vision",percentage:22.9},{name:"deuteranomaly",percentage:2.7},{name:"deuteranopia",percentage:.56},{name:"protanomaly",percentage:.66},{name:"protanopia",percentage:.59},{name:"tritanomaly",percentage:.01},{name:"tritanopia",percentage:.016},{name:"achromatopsia",percentage:1e-4},{name:"grayscale"}],getFilter=filterName=>filterName?filterName==="blurred vision"?"blur(2px)":filterName==="grayscale"?"grayscale(100%)":`url('#${filterName}')`:"none",Hidden=styled.div(()=>({"&, & svg":{position:"absolute",width:0,height:0}})),ColorIcon=styled.span({background:"linear-gradient(to right, #F44336, #FF9800, #FFEB3B, #8BC34A, #2196F3, #9C27B0)",borderRadius:"1rem",display:"block",height:"1rem",width:"1rem"},({filter})=>({filter:getFilter(filter)}),({theme})=>({boxShadow:`${theme.appBorderColor} 0 0 0 1px inset`})),Column=styled.span({display:"flex",flexDirection:"column"}),Title=styled.span({textTransform:"capitalize"}),Description2=styled.span(({theme})=>({fontSize:11,color:theme.textMutedColor})),getColorList=(active,set)=>[...active!==null?[{id:"reset",title:"Reset color filter",onClick:()=>{set(null);},right:void 0,active:!1}]:[],...baseList.map(i=>{let description=i.percentage!==void 0?`${i.percentage}% of users`:void 0;return {id:i.name,title:React11__default.createElement(Column,null,React11__default.createElement(Title,null,i.name),description&&React11__default.createElement(Description2,null,description)),onClick:()=>{set(i);},right:React11__default.createElement(ColorIcon,{filter:i.name}),active:active===i}})],VisionSimulator=()=>{let[filter,setFilter]=useState(null);return React11__default.createElement(React11__default.Fragment,null,filter&&React11__default.createElement(Global,{styles:{[`#${iframeId}`]:{filter:getFilter(filter.name)}}}),React11__default.createElement(WithTooltip,{placement:"top",tooltip:({onHide})=>{let colorList=getColorList(filter,i=>{setFilter(i),onHide();});return React11__default.createElement(TooltipLinkList,{links:colorList})},closeOnOutsideClick:!0,onDoubleClick:()=>setFilter(null)},React11__default.createElement(IconButton,{key:"filter",active:!!filter,title:"Vision simulator"},React11__default.createElement(AccessibilityIcon,null))),React11__default.createElement(Hidden,null,React11__default.createElement(Filters,null)))};var Title2=()=>{let[addonState]=useAddonState(ADDON_ID),violationsNb=addonState?.violations?.length||0,incompleteNb=addonState?.incomplete?.length||0,count=violationsNb+incompleteNb;return React11__default.createElement("div",null,React11__default.createElement(Spaced,{col:1},React11__default.createElement("span",{style:{display:"inline-block",verticalAlign:"middle"}},"Accessibility"),count===0?"":React11__default.createElement(Badge,{status:"neutral"},count)))};addons.register(ADDON_ID,api=>{addons.add(PANEL_ID,{title:"",type:types.TOOL,match:({viewMode,tabId})=>viewMode==="story"&&!tabId,render:()=>React11__default.createElement(VisionSimulator,null)}),addons.add(PANEL_ID,{title:Title2,type:types.PANEL,render:({active=!0})=>React11__default.createElement(A11yContextProvider,{active},React11__default.createElement(A11YPanel,null)),paramKey:PARAM_KEY});});