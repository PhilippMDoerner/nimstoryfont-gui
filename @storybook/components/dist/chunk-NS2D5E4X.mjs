import{require_markup_templating}from"./chunk-O7TFRVLW.mjs";import{__commonJS}from"./chunk-NNAAFZ4U.mjs";var require_ftl=__commonJS({"../../node_modules/refractor/lang/ftl.js"(exports,module){var refractorMarkupTemplating=require_markup_templating();module.exports=ftl;ftl.displayName="ftl";ftl.aliases=[];function ftl(Prism){Prism.register(refractorMarkupTemplating),function(Prism2){for(var FTL_EXPR=/[^<()"']|\((?:<expr>)*\)|<(?!#--)|<#--(?:[^-]|-(?!->))*-->|"(?:[^\\"]|\\.)*"|'(?:[^\\']|\\.)*'/.source,i=0;i<2;i++)FTL_EXPR=FTL_EXPR.replace(/<expr>/g,function(){return FTL_EXPR});FTL_EXPR=FTL_EXPR.replace(/<expr>/g,/[^\s\S]/.source);var ftl2={comment:/<#--[\s\S]*?-->/,string:[{pattern:/\br("|')(?:(?!\1)[^\\]|\\.)*\1/,greedy:!0},{pattern:RegExp(/("|')(?:(?!\1|\$\{)[^\\]|\\.|\$\{(?:(?!\})(?:<expr>))*\})*\1/.source.replace(/<expr>/g,function(){return FTL_EXPR})),greedy:!0,inside:{interpolation:{pattern:RegExp(/((?:^|[^\\])(?:\\\\)*)\$\{(?:(?!\})(?:<expr>))*\}/.source.replace(/<expr>/g,function(){return FTL_EXPR})),lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:null}}}}],keyword:/\b(?:as)\b/,boolean:/\b(?:false|true)\b/,"builtin-function":{pattern:/((?:^|[^?])\?\s*)\w+/,lookbehind:!0,alias:"function"},function:/\b\w+(?=\s*\()/,number:/\b\d+(?:\.\d+)?\b/,operator:/\.\.[<*!]?|->|--|\+\+|&&|\|\||\?{1,2}|[-+*/%!=<>]=?|\b(?:gt|gte|lt|lte)\b/,punctuation:/[,;.:()[\]{}]/};ftl2.string[1].inside.interpolation.inside.rest=ftl2,Prism2.languages.ftl={"ftl-comment":{pattern:/^<#--[\s\S]*/,alias:"comment"},"ftl-directive":{pattern:/^<[\s\S]+>$/,inside:{directive:{pattern:/(^<\/?)[#@][a-z]\w*/i,lookbehind:!0,alias:"keyword"},punctuation:/^<\/?|\/?>$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:ftl2}}},"ftl-interpolation":{pattern:/^\$\{[\s\S]*\}$/,inside:{punctuation:/^\$\{|\}$/,content:{pattern:/\s*\S[\s\S]*/,alias:"ftl",inside:ftl2}}}},Prism2.hooks.add("before-tokenize",function(env){var pattern=RegExp(/<#--[\s\S]*?-->|<\/?[#@][a-zA-Z](?:<expr>)*?>|\$\{(?:<expr>)*?\}/.source.replace(/<expr>/g,function(){return FTL_EXPR}),"gi");Prism2.languages["markup-templating"].buildPlaceholders(env,"ftl",pattern)}),Prism2.hooks.add("after-tokenize",function(env){Prism2.languages["markup-templating"].tokenizePlaceholders(env,"ftl")})}(Prism)}}});export{require_ftl};
