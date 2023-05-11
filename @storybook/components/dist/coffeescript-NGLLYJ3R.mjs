import{__commonJS}from"./chunk-NNAAFZ4U.mjs";var require_coffeescript=__commonJS({"../../node_modules/highlight.js/lib/languages/coffeescript.js"(exports,module){var KEYWORDS=["as","in","of","if","for","while","finally","var","new","function","do","return","void","else","break","catch","instanceof","with","throw","case","default","try","switch","continue","typeof","delete","let","yield","const","class","debugger","async","await","static","import","from","export","extends"],LITERALS=["true","false","null","undefined","NaN","Infinity"],TYPES=["Intl","DataView","Number","Math","Date","String","RegExp","Object","Function","Boolean","Error","Symbol","Set","Map","WeakSet","WeakMap","Proxy","Reflect","JSON","Promise","Float64Array","Int16Array","Int32Array","Int8Array","Uint16Array","Uint32Array","Float32Array","Array","Uint8Array","Uint8ClampedArray","ArrayBuffer","BigInt64Array","BigUint64Array","BigInt"],ERROR_TYPES=["EvalError","InternalError","RangeError","ReferenceError","SyntaxError","TypeError","URIError"],BUILT_IN_GLOBALS=["setInterval","setTimeout","clearInterval","clearTimeout","require","exports","eval","isFinite","isNaN","parseFloat","parseInt","decodeURI","decodeURIComponent","encodeURI","encodeURIComponent","escape","unescape"],BUILT_IN_VARIABLES=["arguments","this","super","console","window","document","localStorage","module","global"],BUILT_INS=[].concat(BUILT_IN_GLOBALS,BUILT_IN_VARIABLES,TYPES,ERROR_TYPES);function coffeescript(hljs){let COFFEE_BUILT_INS=["npm","print"],COFFEE_LITERALS=["yes","no","on","off"],COFFEE_KEYWORDS=["then","unless","until","loop","by","when","and","or","is","isnt","not"],NOT_VALID_KEYWORDS=["var","const","let","function","static"],excluding=list=>kw=>!list.includes(kw),KEYWORDS$1={keyword:KEYWORDS.concat(COFFEE_KEYWORDS).filter(excluding(NOT_VALID_KEYWORDS)),literal:LITERALS.concat(COFFEE_LITERALS),built_in:BUILT_INS.concat(COFFEE_BUILT_INS)},JS_IDENT_RE="[A-Za-z$_][0-9A-Za-z$_]*",SUBST={className:"subst",begin:/#\{/,end:/\}/,keywords:KEYWORDS$1},EXPRESSIONS=[hljs.BINARY_NUMBER_MODE,hljs.inherit(hljs.C_NUMBER_MODE,{starts:{end:"(\\s*/)?",relevance:0}}),{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[hljs.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[hljs.BACKSLASH_ESCAPE,SUBST]},{begin:/"/,end:/"/,contains:[hljs.BACKSLASH_ESCAPE,SUBST]}]},{className:"regexp",variants:[{begin:"///",end:"///",contains:[SUBST,hljs.HASH_COMMENT_MODE]},{begin:"//[gim]{0,3}(?=\\W)",relevance:0},{begin:/\/(?![ *]).*?(?![\\]).\/[gim]{0,3}(?=\W)/}]},{begin:"@"+JS_IDENT_RE},{subLanguage:"javascript",excludeBegin:!0,excludeEnd:!0,variants:[{begin:"```",end:"```"},{begin:"`",end:"`"}]}];SUBST.contains=EXPRESSIONS;let TITLE=hljs.inherit(hljs.TITLE_MODE,{begin:JS_IDENT_RE}),POSSIBLE_PARAMS_RE="(\\(.*\\)\\s*)?\\B[-=]>",PARAMS={className:"params",begin:"\\([^\\(]",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:KEYWORDS$1,contains:["self"].concat(EXPRESSIONS)}]};return{name:"CoffeeScript",aliases:["coffee","cson","iced"],keywords:KEYWORDS$1,illegal:/\/\*/,contains:EXPRESSIONS.concat([hljs.COMMENT("###","###"),hljs.HASH_COMMENT_MODE,{className:"function",begin:"^\\s*"+JS_IDENT_RE+"\\s*=\\s*"+POSSIBLE_PARAMS_RE,end:"[-=]>",returnBegin:!0,contains:[TITLE,PARAMS]},{begin:/[:\(,=]\s*/,relevance:0,contains:[{className:"function",begin:POSSIBLE_PARAMS_RE,end:"[-=]>",returnBegin:!0,contains:[PARAMS]}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[TITLE]},TITLE]},{begin:JS_IDENT_RE+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}module.exports=coffeescript}});export default require_coffeescript();
