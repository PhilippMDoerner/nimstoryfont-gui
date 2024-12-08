/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY.
  (function(global) {
    global.ng ??= {};
    global.ng.common ??= {};
    global.ng.common.locales ??= {};
    const u = undefined;
    function plural(val) {
const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, '').length, e = parseInt(val.toString().replace(/^[^e]*(e([-+]?\d+))?/, '$2')) || 0;

if (i === Math.floor(i) && (i >= 0 && i <= 1))
    return 1;
if (e === 0 && (!(i === 0) && (i % 1000000 === 0 && v === 0)) || !(e >= 0 && e <= 5))
    return 4;
return 5;
}
    global.ng.common.locales['pt-ao'] = ["pt-AO",[["a.m.","p.m."],u,["da manhã","da tarde"]],[["a.m.","p.m."],u,["manhã","tarde"]],[["D","S","T","Q","Q","S","S"],["domingo","segunda","terça","quarta","quinta","sexta","sábado"],["domingo","segunda-feira","terça-feira","quarta-feira","quinta-feira","sexta-feira","sábado"],["dom.","seg.","ter.","qua.","qui.","sex.","sáb."]],u,[["J","F","M","A","M","J","J","A","S","O","N","D"],["jan.","fev.","mar.","abr.","mai.","jun.","jul.","ago.","set.","out.","nov.","dez."],["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"]],u,[["a.C.","d.C."],u,["antes de Cristo","depois de Cristo"]],1,[6,0],["dd/MM/yy","dd/MM/y","d 'de' MMMM 'de' y","EEEE, d 'de' MMMM 'de' y"],["HH:mm","HH:mm:ss","HH:mm:ss z","HH:mm:ss zzzz"],["{1}, {0}",u,"{1} 'às' {0}",u],[","," ",";","%","+","-","E","×","‰","∞","NaN",":"],["#,##0.###","#,##0%","#,##0.00 ¤","#E0"],"AOA","Kz","kwanza angolano",{"AOA":["Kz"],"AUD":["AU$","$"],"BYN":[u,"р."],"JPY":["JP¥","¥"],"PHP":[u,"₱"],"PTE":["​"],"RON":[u,"L"],"THB":["฿"],"TWD":["NT$"],"USD":["US$","$"]},"ltr", plural, [[["meia-noite","meio-dia","manhã","tarde","noite","madrugada"],["meia-noite","meio-dia","da manhã","da tarde","da noite","da madrugada"],u],[["meia-noite","meio-dia","manhã","tarde","noite","madrugada"],u,u],["00:00","12:00",["06:00","12:00"],["12:00","19:00"],["19:00","24:00"],["00:00","06:00"]]]];
  })(globalThis);
    