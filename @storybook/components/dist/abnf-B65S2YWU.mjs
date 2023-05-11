import{__commonJS}from"./chunk-NNAAFZ4U.mjs";var require_abnf=__commonJS({"../../node_modules/highlight.js/lib/languages/abnf.js"(exports,module){function source(re){return re?typeof re=="string"?re:re.source:null}function concat(...args){return args.map(x=>source(x)).join("")}function abnf(hljs){let regexes={ruleDeclaration:/^[a-zA-Z][a-zA-Z0-9-]*/,unexpectedChars:/[!@#$^&',?+~`|:]/},keywords=["ALPHA","BIT","CHAR","CR","CRLF","CTL","DIGIT","DQUOTE","HEXDIG","HTAB","LF","LWSP","OCTET","SP","VCHAR","WSP"],commentMode=hljs.COMMENT(/;/,/$/),terminalBinaryMode={className:"symbol",begin:/%b[0-1]+(-[0-1]+|(\.[0-1]+)+){0,1}/},terminalDecimalMode={className:"symbol",begin:/%d[0-9]+(-[0-9]+|(\.[0-9]+)+){0,1}/},terminalHexadecimalMode={className:"symbol",begin:/%x[0-9A-F]+(-[0-9A-F]+|(\.[0-9A-F]+)+){0,1}/},caseSensitivityIndicatorMode={className:"symbol",begin:/%[si]/},ruleDeclarationMode={className:"attribute",begin:concat(regexes.ruleDeclaration,/(?=\s*=)/)};return{name:"Augmented Backus-Naur Form",illegal:regexes.unexpectedChars,keywords,contains:[ruleDeclarationMode,commentMode,terminalBinaryMode,terminalDecimalMode,terminalHexadecimalMode,caseSensitivityIndicatorMode,hljs.QUOTE_STRING_MODE,hljs.NUMBER_MODE]}}module.exports=abnf}});export default require_abnf();
