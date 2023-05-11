import{__commonJS}from"./chunk-NNAAFZ4U.mjs";var require_csharp=__commonJS({"../../node_modules/highlight.js/lib/languages/csharp.js"(exports,module){function csharp(hljs){let BUILT_IN_KEYWORDS=["bool","byte","char","decimal","delegate","double","dynamic","enum","float","int","long","nint","nuint","object","sbyte","short","string","ulong","uint","ushort"],FUNCTION_MODIFIERS=["public","private","protected","static","internal","protected","abstract","async","extern","override","unsafe","virtual","new","sealed","partial"],LITERAL_KEYWORDS=["default","false","null","true"],NORMAL_KEYWORDS=["abstract","as","base","break","case","class","const","continue","do","else","event","explicit","extern","finally","fixed","for","foreach","goto","if","implicit","in","interface","internal","is","lock","namespace","new","operator","out","override","params","private","protected","public","readonly","record","ref","return","sealed","sizeof","stackalloc","static","struct","switch","this","throw","try","typeof","unchecked","unsafe","using","virtual","void","volatile","while"],CONTEXTUAL_KEYWORDS=["add","alias","and","ascending","async","await","by","descending","equals","from","get","global","group","init","into","join","let","nameof","not","notnull","on","or","orderby","partial","remove","select","set","unmanaged","value|0","var","when","where","with","yield"],KEYWORDS={keyword:NORMAL_KEYWORDS.concat(CONTEXTUAL_KEYWORDS),built_in:BUILT_IN_KEYWORDS,literal:LITERAL_KEYWORDS},TITLE_MODE=hljs.inherit(hljs.TITLE_MODE,{begin:"[a-zA-Z](\\.?\\w)*"}),NUMBERS={className:"number",variants:[{begin:"\\b(0b[01']+)"},{begin:"(-?)\\b([\\d']+(\\.[\\d']*)?|\\.[\\d']+)(u|U|l|L|ul|UL|f|F|b|B)"},{begin:"(-?)(\\b0[xX][a-fA-F0-9']+|(\\b[\\d']+(\\.[\\d']*)?|\\.[\\d']+)([eE][-+]?[\\d']+)?)"}],relevance:0},VERBATIM_STRING={className:"string",begin:'@"',end:'"',contains:[{begin:'""'}]},VERBATIM_STRING_NO_LF=hljs.inherit(VERBATIM_STRING,{illegal:/\n/}),SUBST={className:"subst",begin:/\{/,end:/\}/,keywords:KEYWORDS},SUBST_NO_LF=hljs.inherit(SUBST,{illegal:/\n/}),INTERPOLATED_STRING={className:"string",begin:/\$"/,end:'"',illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},hljs.BACKSLASH_ESCAPE,SUBST_NO_LF]},INTERPOLATED_VERBATIM_STRING={className:"string",begin:/\$@"/,end:'"',contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},SUBST]},INTERPOLATED_VERBATIM_STRING_NO_LF=hljs.inherit(INTERPOLATED_VERBATIM_STRING,{illegal:/\n/,contains:[{begin:/\{\{/},{begin:/\}\}/},{begin:'""'},SUBST_NO_LF]});SUBST.contains=[INTERPOLATED_VERBATIM_STRING,INTERPOLATED_STRING,VERBATIM_STRING,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,NUMBERS,hljs.C_BLOCK_COMMENT_MODE],SUBST_NO_LF.contains=[INTERPOLATED_VERBATIM_STRING_NO_LF,INTERPOLATED_STRING,VERBATIM_STRING_NO_LF,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE,NUMBERS,hljs.inherit(hljs.C_BLOCK_COMMENT_MODE,{illegal:/\n/})];let STRING={variants:[INTERPOLATED_VERBATIM_STRING,INTERPOLATED_STRING,VERBATIM_STRING,hljs.APOS_STRING_MODE,hljs.QUOTE_STRING_MODE]},GENERIC_MODIFIER={begin:"<",end:">",contains:[{beginKeywords:"in out"},TITLE_MODE]},TYPE_IDENT_RE=hljs.IDENT_RE+"(<"+hljs.IDENT_RE+"(\\s*,\\s*"+hljs.IDENT_RE+")*>)?(\\[\\])?",AT_IDENTIFIER={begin:"@"+hljs.IDENT_RE,relevance:0};return{name:"C#",aliases:["cs","c#"],keywords:KEYWORDS,illegal:/::/,contains:[hljs.COMMENT("///","$",{returnBegin:!0,contains:[{className:"doctag",variants:[{begin:"///",relevance:0},{begin:"<!--|-->"},{begin:"</?",end:">"}]}]}),hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE,{className:"meta",begin:"#",end:"$",keywords:{"meta-keyword":"if else elif endif define undef warning error line region endregion pragma checksum"}},STRING,NUMBERS,{beginKeywords:"class interface",relevance:0,end:/[{;=]/,illegal:/[^\s:,]/,contains:[{beginKeywords:"where class"},TITLE_MODE,GENERIC_MODIFIER,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},{beginKeywords:"namespace",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[TITLE_MODE,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},{beginKeywords:"record",relevance:0,end:/[{;=]/,illegal:/[^\s:]/,contains:[TITLE_MODE,GENERIC_MODIFIER,hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},{className:"meta",begin:"^\\s*\\[",excludeBegin:!0,end:"\\]",excludeEnd:!0,contains:[{className:"meta-string",begin:/"/,end:/"/}]},{beginKeywords:"new return throw await else",relevance:0},{className:"function",begin:"("+TYPE_IDENT_RE+"\\s+)+"+hljs.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,end:/\s*[{;=]/,excludeEnd:!0,keywords:KEYWORDS,contains:[{beginKeywords:FUNCTION_MODIFIERS.join(" "),relevance:0},{begin:hljs.IDENT_RE+"\\s*(<.+>\\s*)?\\(",returnBegin:!0,contains:[hljs.TITLE_MODE,GENERIC_MODIFIER],relevance:0},{className:"params",begin:/\(/,end:/\)/,excludeBegin:!0,excludeEnd:!0,keywords:KEYWORDS,relevance:0,contains:[STRING,NUMBERS,hljs.C_BLOCK_COMMENT_MODE]},hljs.C_LINE_COMMENT_MODE,hljs.C_BLOCK_COMMENT_MODE]},AT_IDENTIFIER]}}module.exports=csharp}});export default require_csharp();
