import{__commonJS}from"./chunk-NNAAFZ4U.mjs";var require_markdown=__commonJS({"../../node_modules/highlight.js/lib/languages/markdown.js"(exports,module){function source(re){return re?typeof re=="string"?re:re.source:null}function concat(...args){return args.map(x=>source(x)).join("")}function markdown(hljs){let INLINE_HTML={begin:/<\/?[A-Za-z_]/,end:">",subLanguage:"xml",relevance:0},HORIZONTAL_RULE={begin:"^[-\\*]{3,}",end:"$"},CODE={className:"code",variants:[{begin:"(`{3,})[^`](.|\\n)*?\\1`*[ ]*"},{begin:"(~{3,})[^~](.|\\n)*?\\1~*[ ]*"},{begin:"```",end:"```+[ ]*$"},{begin:"~~~",end:"~~~+[ ]*$"},{begin:"`.+?`"},{begin:"(?=^( {4}|\\t))",contains:[{begin:"^( {4}|\\t)",end:"(\\n)$"}],relevance:0}]},LIST={className:"bullet",begin:"^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",end:"\\s+",excludeEnd:!0},LINK_REFERENCE={begin:/^\[[^\n]+\]:/,returnBegin:!0,contains:[{className:"symbol",begin:/\[/,end:/\]/,excludeBegin:!0,excludeEnd:!0},{className:"link",begin:/:\s*/,end:/$/,excludeBegin:!0}]},LINK={variants:[{begin:/\[.+?\]\[.*?\]/,relevance:0},{begin:/\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,relevance:2},{begin:concat(/\[.+?\]\(/,/[A-Za-z][A-Za-z0-9+.-]*/,/:\/\/.*?\)/),relevance:2},{begin:/\[.+?\]\([./?&#].*?\)/,relevance:1},{begin:/\[.+?\]\(.*?\)/,relevance:0}],returnBegin:!0,contains:[{className:"string",relevance:0,begin:"\\[",end:"\\]",excludeBegin:!0,returnEnd:!0},{className:"link",relevance:0,begin:"\\]\\(",end:"\\)",excludeBegin:!0,excludeEnd:!0},{className:"symbol",relevance:0,begin:"\\]\\[",end:"\\]",excludeBegin:!0,excludeEnd:!0}]},BOLD={className:"strong",contains:[],variants:[{begin:/_{2}/,end:/_{2}/},{begin:/\*{2}/,end:/\*{2}/}]},ITALIC={className:"emphasis",contains:[],variants:[{begin:/\*(?!\*)/,end:/\*/},{begin:/_(?!_)/,end:/_/,relevance:0}]};BOLD.contains.push(ITALIC),ITALIC.contains.push(BOLD);let CONTAINABLE=[INLINE_HTML,LINK];return BOLD.contains=BOLD.contains.concat(CONTAINABLE),ITALIC.contains=ITALIC.contains.concat(CONTAINABLE),CONTAINABLE=CONTAINABLE.concat(BOLD,ITALIC),{name:"Markdown",aliases:["md","mkdown","mkd"],contains:[{className:"section",variants:[{begin:"^#{1,6}",end:"$",contains:CONTAINABLE},{begin:"(?=^.+?\\n[=-]{2,}$)",contains:[{begin:"^[=-]*$"},{begin:"^",end:"\\n",contains:CONTAINABLE}]}]},INLINE_HTML,LIST,BOLD,ITALIC,{className:"quote",begin:"^>\\s+",contains:CONTAINABLE,end:"$"},CODE,HORIZONTAL_RULE,LINK,LINK_REFERENCE]}}module.exports=markdown}});export default require_markdown();
