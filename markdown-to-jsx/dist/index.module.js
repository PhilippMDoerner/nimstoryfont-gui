import*as n from"react";function r(){return r=Object.assign||function(n){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&(n[e]=t[e])}return n},r.apply(this,arguments)}var t=["children","options"],e=["allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","cellPadding","cellSpacing","charSet","className","classId","colSpan","contentEditable","contextMenu","crossOrigin","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hrefLang","inputMode","keyParams","keyType","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","radioGroup","readOnly","rowSpan","spellCheck","srcDoc","srcLang","srcSet","tabIndex","useMap"].reduce(function(n,r){return n[r.toLowerCase()]=r,n},{for:"htmlFor"}),o={amp:"&",apos:"'",gt:">",lt:"<",nbsp:" ",quot:"“"},u=["style","script"],a=/([-A-Z0-9_:]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|(?:\{((?:\\.|{[^}]*?}|[^}])*)\})))?/gi,c=/mailto:/i,i=/\n{2,}$/,_=/^( *>[^\n]+(\n[^\n]+)*\n*)+\n{2,}/,f=/^ *> ?/gm,l=/^ {2,}\n/,s=/^(?:( *[-*_])){3,} *(?:\n *)+\n/,d=/^\s*(`{3,}|~{3,}) *(\S+)?([^\n]*?)?\n([\s\S]+?)\s*\1 *(?:\n *)*\n?/,p=/^(?: {4}[^\n]+\n*)+(?:\n *)+\n?/,m=/^(`+)\s*([\s\S]*?[^`])\s*\1(?!`)/,g=/^(?:\n *)*\n/,v=/\r\n?/g,y=/^\[\^([^\]]+)](:.*)\n/,h=/^\[\^([^\]]+)]/,k=/\f/g,x=/^\s*?\[(x|\s)\]/,b=/^ *(#{1,6}) *([^\n]+?)(?: +#*)?(?:\n *)*(?:\n|$)/,S=/^([^\n]+)\n *(=|-){3,} *(?:\n *)+\n/,$=/^ *(?!<[a-z][^ >/]* ?\/>)<([a-z][^ >/]*) ?([^>]*)\/{0}>\n?(\s*(?:<\1[^>]*?>[\s\S]*?<\/\1>|(?!<\1)[\s\S])*?)<\/\1>\n*/i,z=/&([a-zA-Z]+);/g,w=/^<!--[\s\S]*?(?:-->)/,A=/^(data|aria|x)-[a-z_][a-z\d_.-]*$/,E=/^ *<([a-z][a-z0-9:]*)(?:\s+((?:<.*?>|[^>])*))?\/?>(?!<\/\1>)(\s*\n)?/i,L=/^\{.*\}$/,M=/^(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/,I=/^<([^ >]+@[^ >]+)>/,O=/^<([^ >]+:\/[^ >]+)>/,B=/-([a-z])?/gi,R=/^(.*\|?.*)\n *(\|? *[-:]+ *\|[-| :]*)\n((?:.*\|.*\n)*)\n?/,T=/^\[([^\]]*)\]:\s+<?([^\s>]+)>?\s*("([^"]*)")?/,j=/^!\[([^\]]*)\] ?\[([^\]]*)\]/,C=/^\[([^\]]*)\] ?\[([^\]]*)\]/,D=/(\[|\])/g,N=/(\n|^[-*]\s|^#|^ {2,}|^-{2,}|^>\s)/,Z=/\t/g,F=/^ *\| */,P=/(^ *\||\| *$)/g,G=/ *$/,H=/^ *:-+: *$/,q=/^ *:-+ *$/,U=/^ *-+: *$/,V=/^([*_])\1((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1\1(?!\1)/,W=/^([*_])((?:\[.*?\][([].*?[)\]]|<.*?>(?:.*?<.*?>)?|`.*?`|~+.*?~+|.)*?)\1(?!\1|\w)/,Q=/^==((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)==/,X=/^~~((?:\[.*?\]|<.*?>(?:.*?<.*?>)?|`.*?`|.)*?)~~/,J=/^\\([^0-9A-Za-z\s])/,K=/^[\s\S]+?(?=[^0-9A-Z\s\u00c0-\uffff&;.()'"]|\d+\.|\n\n| {2,}\n|\w+:\S|$)/i,Y=/^\n+/,nn=/^([ \t]*)/,rn=/\\([^\\])/g,tn=/ *\n+$/,en=/(?:^|\n)( *)$/,on="(?:\\d+\\.)",un="(?:[*+-])";function an(n){return"( *)("+(1===n?on:un)+") +"}var cn=an(1),_n=an(2);function fn(n){return new RegExp("^"+(1===n?cn:_n))}var ln=fn(1),sn=fn(2);function dn(n){return new RegExp("^"+(1===n?cn:_n)+"[^\\n]*(?:\\n(?!\\1"+(1===n?on:un)+" )[^\\n]*)*(\\n|$)","gm")}var pn=dn(1),mn=dn(2);function gn(n){var r=1===n?on:un;return new RegExp("^( *)("+r+") [\\s\\S]+?(?:\\n{2,}(?! )(?!\\1"+r+" (?!"+r+" ))\\n*|\\s*\\n*$)")}var vn=gn(1),yn=gn(2);function hn(n,r){var t=1===r,e=t?vn:yn,o=t?pn:mn,u=t?ln:sn;return{t:function(n,r,t){var o=en.exec(t);return o&&(r.o||!r.u&&!r.i)?e.exec(n=o[1]+n):null},_:Nn.HIGH,l:function(n,r,e){var a=t?+n[2]:void 0,c=n[0].replace(i,"\n").match(o),_=!1;return{p:c.map(function(n,t){var o=u.exec(n)[0].length,a=new RegExp("^ {1,"+o+"}","gm"),i=n.replace(a,"").replace(u,""),f=t===c.length-1,l=-1!==i.indexOf("\n\n")||f&&_;_=l;var s,d=e.u,p=e.o;e.o=!0,l?(e.u=!1,s=i.replace(tn,"\n\n")):(e.u=!0,s=i.replace(tn,""));var m=r(s,e);return e.u=d,e.o=p,m}),m:t,g:a}},v:function(r,t,e){return n(r.m?"ol":"ul",{key:e.h,start:r.g},r.p.map(function(r,o){return n("li",{key:o},t(r,e))}))}}}var kn=/^\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,xn=/^!\[([^\]]*)]\( *((?:\([^)]*\)|[^() ])*) *"?([^)"]*)?"?\)/,bn=[_,d,p,b,S,w,R,pn,vn,mn,yn],Sn=[].concat(bn,[/^[^\n]+(?:  \n|\n{2,})/,$,E]);function $n(n){return n.replace(/[ÀÁÂÃÄÅàáâãäåæÆ]/g,"a").replace(/[çÇ]/g,"c").replace(/[ðÐ]/g,"d").replace(/[ÈÉÊËéèêë]/g,"e").replace(/[ÏïÎîÍíÌì]/g,"i").replace(/[Ññ]/g,"n").replace(/[øØœŒÕõÔôÓóÒò]/g,"o").replace(/[ÜüÛûÚúÙù]/g,"u").replace(/[ŸÿÝý]/g,"y").replace(/[^a-z0-9- ]/gi,"").replace(/ /gi,"-").toLowerCase()}function zn(n){return U.test(n)?"right":H.test(n)?"center":q.test(n)?"left":null}function wn(n,r,t){var e=t.k;t.k=!0;var o=r(n.trim(),t);t.k=e;var u=[[]];return o.forEach(function(n,r){"tableSeparator"===n.type?0!==r&&r!==o.length-1&&u.push([]):("text"!==n.type||null!=o[r+1]&&"tableSeparator"!==o[r+1].type||(n.S=n.S.replace(G,"")),u[u.length-1].push(n))}),u}function An(n,r,t){t.u=!0;var e=wn(n[1],r,t),o=n[2].replace(P,"").split("|").map(zn),u=function(n,r,t){return n.trim().split("\n").map(function(n){return wn(n,r,t)})}(n[3],r,t);return t.u=!1,{$:o,A:u,L:e,type:"table"}}function En(n,r){return null==n.$[r]?{}:{textAlign:n.$[r]}}function Ln(n){return function(r,t){return t.u?n.exec(r):null}}function Mn(n){return function(r,t){return t.u||t.i?n.exec(r):null}}function In(n){return function(r,t){return t.u||t.i?null:n.exec(r)}}function On(n){return function(r){return n.exec(r)}}function Bn(n,r,t){if(r.u||r.i)return null;if(t&&!t.endsWith("\n"))return null;var e="";n.split("\n").every(function(n){return!bn.some(function(r){return r.test(n)})&&(e+=n+"\n",n.trim())});var o=e.trimEnd();return""==o?null:[e,o]}function Rn(n){try{if(decodeURIComponent(n).replace(/[^A-Za-z0-9/:]/g,"").match(/^\s*(javascript|vbscript|data(?!:image)):/i))return null}catch(n){return null}return n}function Tn(n){return n.replace(rn,"$1")}function jn(n,r,t){var e=t.u||!1,o=t.i||!1;t.u=!0,t.i=!0;var u=n(r,t);return t.u=e,t.i=o,u}function Cn(n,r,t){var e=t.u||!1,o=t.i||!1;t.u=!1,t.i=!0;var u=n(r,t);return t.u=e,t.i=o,u}function Dn(n,r,t){return t.u=!1,n(r+"\n\n",t)}var Nn,Zn=function(n,r,t){return{S:jn(r,n[1],t)}};function Fn(){return{}}function Pn(){return null}function Gn(){return[].slice.call(arguments).filter(Boolean).join(" ")}function Hn(n,r,t){for(var e=n,o=r.split(".");o.length&&void 0!==(e=e[o[0]]);)o.shift();return e||t}function qn(n,r){var t=Hn(r,n);return t?"function"==typeof t||"object"==typeof t&&"render"in t?t:Hn(r,n+".component",n):n}function Un(t,i){void 0===i&&(i={}),i.overrides=i.overrides||{},i.slugify=i.slugify||$n,i.namedCodesToUnicode=i.namedCodesToUnicode?r({},o,i.namedCodesToUnicode):o;var P=i.createElement||n.createElement;function G(n,t){var e=Hn(i.overrides,n+".props",{});return P.apply(void 0,[qn(n,i.overrides),r({},t,e,{className:Gn(null==t?void 0:t.className,e.className)||void 0})].concat([].slice.call(arguments,2)))}function H(r){var t=!1;i.forceInline?t=!0:i.forceBlock||(t=!1===N.test(r));for(var e=un(on(t?r:r.trimEnd().replace(Y,"")+"\n\n",{u:t}));"string"==typeof e[e.length-1]&&!e[e.length-1].trim();)e.pop();if(null===i.wrapper)return e;var o,u=i.wrapper||(t?"span":"div");if(e.length>1||i.forceWrapper)o=e;else{if(1===e.length)return"string"==typeof(o=e[0])?G("span",{key:"outer"},o):o;o=null}return n.createElement(u,{key:"outer"},o)}function q(r){var t=r.match(a);return t?t.reduce(function(r,t,o){var u=t.indexOf("=");if(-1!==u){var a=function(n){return-1!==n.indexOf("-")&&null===n.match(A)&&(n=n.replace(B,function(n,r){return r.toUpperCase()})),n}(t.slice(0,u)).trim(),c=function(n){var r=n[0];return('"'===r||"'"===r)&&n.length>=2&&n[n.length-1]===r?n.slice(1,-1):n}(t.slice(u+1).trim()),i=e[a]||a,_=r[i]=function(n,r){return"style"===n?r.split(/;\s?/).reduce(function(n,r){var t=r.slice(0,r.indexOf(":"));return n[t.replace(/(-[a-z])/g,function(n){return n[1].toUpperCase()})]=r.slice(t.length+1).trim(),n},{}):"href"===n?Rn(r):(r.match(L)&&(r=r.slice(1,r.length-1)),"true"===r||"false"!==r&&r)}(a,c);"string"==typeof _&&($.test(_)||E.test(_))&&(r[i]=n.cloneElement(H(_.trim()),{key:o}))}else"style"!==t&&(r[e[t]||t]=!0);return r},{}):null}var U=[],rn={},tn={blockQuote:{t:In(_),_:Nn.HIGH,l:function(n,r,t){return{S:r(n[0].replace(f,""),t)}},v:function(n,r,t){return G("blockquote",{key:t.h},r(n.S,t))}},breakLine:{t:On(l),_:Nn.HIGH,l:Fn,v:function(n,r,t){return G("br",{key:t.h})}},breakThematic:{t:In(s),_:Nn.HIGH,l:Fn,v:function(n,r,t){return G("hr",{key:t.h})}},codeBlock:{t:In(p),_:Nn.MAX,l:function(n){return{S:n[0].replace(/^ {4}/gm,"").replace(/\n+$/,""),M:void 0}},v:function(n,t,e){return G("pre",{key:e.h},G("code",r({},n.I,{className:n.M?"lang-"+n.M:""}),n.S))}},codeFenced:{t:In(d),_:Nn.MAX,l:function(n){return{I:q(n[3]||""),S:n[4],M:n[2]||void 0,type:"codeBlock"}}},codeInline:{t:Mn(m),_:Nn.LOW,l:function(n){return{S:n[2]}},v:function(n,r,t){return G("code",{key:t.h},n.S)}},footnote:{t:In(y),_:Nn.MAX,l:function(n){return U.push({O:n[2],B:n[1]}),{}},v:Pn},footnoteReference:{t:Ln(h),_:Nn.HIGH,l:function(n){return{S:n[1],R:"#"+i.slugify(n[1])}},v:function(n,r,t){return G("a",{key:t.h,href:Rn(n.R)},G("sup",{key:t.h},n.S))}},gfmTask:{t:Ln(x),_:Nn.HIGH,l:function(n){return{T:"x"===n[1].toLowerCase()}},v:function(n,r,t){return G("input",{checked:n.T,key:t.h,readOnly:!0,type:"checkbox"})}},heading:{t:In(b),_:Nn.HIGH,l:function(n,r,t){return{S:jn(r,n[2],t),j:i.slugify(n[2]),C:n[1].length}},v:function(n,r,t){return G("h"+n.C,{id:n.j,key:t.h},r(n.S,t))}},headingSetext:{t:In(S),_:Nn.MAX,l:function(n,r,t){return{S:jn(r,n[1],t),C:"="===n[2]?1:2,type:"heading"}}},htmlComment:{t:On(w),_:Nn.HIGH,l:function(){return{}},v:Pn},image:{t:Mn(xn),_:Nn.HIGH,l:function(n){return{D:n[1],R:Tn(n[2]),N:n[3]}},v:function(n,r,t){return G("img",{key:t.h,alt:n.D||void 0,title:n.N||void 0,src:Rn(n.R)})}},link:{t:Ln(kn),_:Nn.LOW,l:function(n,r,t){return{S:Cn(r,n[1],t),R:Tn(n[2]),N:n[3]}},v:function(n,r,t){return G("a",{key:t.h,href:Rn(n.R),title:n.N},r(n.S,t))}},linkAngleBraceStyleDetector:{t:Ln(O),_:Nn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],R:n[1],type:"link"}}},linkBareUrlDetector:{t:function(n,r){return r.Z?null:Ln(M)(n,r)},_:Nn.MAX,l:function(n){return{S:[{S:n[1],type:"text"}],R:n[1],N:void 0,type:"link"}}},linkMailtoDetector:{t:Ln(I),_:Nn.MAX,l:function(n){var r=n[1],t=n[1];return c.test(t)||(t="mailto:"+t),{S:[{S:r.replace("mailto:",""),type:"text"}],R:t,type:"link"}}},orderedList:hn(G,1),unorderedList:hn(G,2),newlineCoalescer:{t:In(g),_:Nn.LOW,l:Fn,v:function(){return"\n"}},paragraph:{t:Bn,_:Nn.LOW,l:Zn,v:function(n,r,t){return G("p",{key:t.h},r(n.S,t))}},ref:{t:Ln(T),_:Nn.MAX,l:function(n){return rn[n[1]]={R:n[2],N:n[4]},{}},v:Pn},refImage:{t:Mn(j),_:Nn.MAX,l:function(n){return{D:n[1]||void 0,F:n[2]}},v:function(n,r,t){return G("img",{key:t.h,alt:n.D,src:Rn(rn[n.F].R),title:rn[n.F].N})}},refLink:{t:Ln(C),_:Nn.MAX,l:function(n,r,t){return{S:r(n[1],t),P:r(n[0].replace(D,"\\$1"),t),F:n[2]}},v:function(n,r,t){return rn[n.F]?G("a",{key:t.h,href:Rn(rn[n.F].R),title:rn[n.F].N},r(n.S,t)):G("span",{key:t.h},r(n.P,t))}},table:{t:In(R),_:Nn.HIGH,l:An,v:function(n,r,t){return G("table",{key:t.h},G("thead",null,G("tr",null,n.L.map(function(e,o){return G("th",{key:o,style:En(n,o)},r(e,t))}))),G("tbody",null,n.A.map(function(e,o){return G("tr",{key:o},e.map(function(e,o){return G("td",{key:o,style:En(n,o)},r(e,t))}))})))}},tableSeparator:{t:function(n,r){return r.k?F.exec(n):null},_:Nn.HIGH,l:function(){return{type:"tableSeparator"}},v:function(){return" | "}},text:{t:On(K),_:Nn.MIN,l:function(n){return{S:n[0].replace(z,function(n,r){return i.namedCodesToUnicode[r]?i.namedCodesToUnicode[r]:n})}},v:function(n){return n.S}},textBolded:{t:Mn(V),_:Nn.MED,l:function(n,r,t){return{S:r(n[2],t)}},v:function(n,r,t){return G("strong",{key:t.h},r(n.S,t))}},textEmphasized:{t:Mn(W),_:Nn.LOW,l:function(n,r,t){return{S:r(n[2],t)}},v:function(n,r,t){return G("em",{key:t.h},r(n.S,t))}},textEscaped:{t:Mn(J),_:Nn.HIGH,l:function(n){return{S:n[1],type:"text"}}},textMarked:{t:Mn(Q),_:Nn.LOW,l:Zn,v:function(n,r,t){return G("mark",{key:t.h},r(n.S,t))}},textStrikethroughed:{t:Mn(X),_:Nn.LOW,l:Zn,v:function(n,r,t){return G("del",{key:t.h},r(n.S,t))}}};!0!==i.disableParsingRawHTML&&(tn.htmlBlock={t:On($),_:Nn.HIGH,l:function(n,r,t){var e,o=n[3].match(nn),a=new RegExp("^"+o[1],"gm"),c=n[3].replace(a,""),i=(e=c,Sn.some(function(n){return n.test(e)})?Dn:jn),_=n[1].toLowerCase(),f=-1!==u.indexOf(_);t.Z=t.Z||"a"===_;var l=f?n[3]:i(r,c,t);return t.Z=!1,{I:q(n[2]),S:l,G:f,H:f?_:n[1]}},v:function(n,t,e){return G(n.H,r({key:e.h},n.I),n.G?n.S:t(n.S,e))}},tn.htmlSelfClosing={t:On(E),_:Nn.HIGH,l:function(n){return{I:q(n[2]||""),H:n[1]}},v:function(n,t,e){return G(n.H,r({},n.I,{key:e.h}))}});var en,on=function(n){var r=Object.keys(n);function t(e,o){for(var u=[],a="";e;)for(var c=0;c<r.length;){var i=r[c],_=n[i],f=_.t(e,o,a);if(f){var l=f[0];e=e.substring(l.length);var s=_.l(f,t,o);null==s.type&&(s.type=i),u.push(s),a=l;break}c++}return u}return r.sort(function(r,t){var e=n[r]._,o=n[t]._;return e!==o?e-o:r<t?-1:1}),function(n,r){return t(function(n){return n.replace(v,"\n").replace(k,"").replace(Z,"    ")}(n),r)}}(tn),un=(en=function(n){return function(r,t,e){return n[r.type].v(r,t,e)}}(tn),function n(r,t){if(void 0===t&&(t={}),Array.isArray(r)){for(var e=t.h,o=[],u=!1,a=0;a<r.length;a++){t.h=a;var c=n(r[a],t),i="string"==typeof c;i&&u?o[o.length-1]+=c:null!==c&&o.push(c),u=i}return t.h=e,o}return en(r,n,t)}),an=H(t);return U.length?G("div",null,an,G("footer",{key:"footer"},U.map(function(n){return G("div",{id:i.slugify(n.B),key:n.B},n.B,un(on(n.O,{u:!0})))}))):an}!function(n){n[n.MAX=0]="MAX",n[n.HIGH=1]="HIGH",n[n.MED=2]="MED",n[n.LOW=3]="LOW",n[n.MIN=4]="MIN"}(Nn||(Nn={}));export default function(r){var e=r.children,o=r.options,u=function(n,r){if(null==n)return{};var t,e,o={},u=Object.keys(n);for(e=0;e<u.length;e++)r.indexOf(t=u[e])>=0||(o[t]=n[t]);return o}(r,t);return n.cloneElement(Un(e,o),u)}export{Un as compiler};
//# sourceMappingURL=index.module.js.map
