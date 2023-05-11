import{require_markup_templating}from"./chunk-O7TFRVLW.mjs";import{__commonJS}from"./chunk-NNAAFZ4U.mjs";var require_django=__commonJS({"../../node_modules/refractor/lang/django.js"(exports,module){var refractorMarkupTemplating=require_markup_templating();module.exports=django;django.displayName="django";django.aliases=["jinja2"];function django(Prism){Prism.register(refractorMarkupTemplating),function(Prism2){Prism2.languages.django={comment:/^\{#[\s\S]*?#\}$/,tag:{pattern:/(^\{%[+-]?\s*)\w+/,lookbehind:!0,alias:"keyword"},delimiter:{pattern:/^\{[{%][+-]?|[+-]?[}%]\}$/,alias:"punctuation"},string:{pattern:/("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,greedy:!0},filter:{pattern:/(\|)\w+/,lookbehind:!0,alias:"function"},test:{pattern:/(\bis\s+(?:not\s+)?)(?!not\b)\w+/,lookbehind:!0,alias:"function"},function:/\b[a-z_]\w+(?=\s*\()/i,keyword:/\b(?:and|as|by|else|for|if|import|in|is|loop|not|or|recursive|with|without)\b/,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,number:/\b\d+(?:\.\d+)?\b/,boolean:/[Ff]alse|[Nn]one|[Tt]rue/,variable:/\b\w+\b/,punctuation:/[{}[\](),.:;]/};var pattern=/\{\{[\s\S]*?\}\}|\{%[\s\S]*?%\}|\{#[\s\S]*?#\}/g,markupTemplating=Prism2.languages["markup-templating"];Prism2.hooks.add("before-tokenize",function(env){markupTemplating.buildPlaceholders(env,"django",pattern)}),Prism2.hooks.add("after-tokenize",function(env){markupTemplating.tokenizePlaceholders(env,"django")}),Prism2.languages.jinja2=Prism2.languages.django,Prism2.hooks.add("before-tokenize",function(env){markupTemplating.buildPlaceholders(env,"jinja2",pattern)}),Prism2.hooks.add("after-tokenize",function(env){markupTemplating.tokenizePlaceholders(env,"jinja2")})}(Prism)}}});export{require_django};
