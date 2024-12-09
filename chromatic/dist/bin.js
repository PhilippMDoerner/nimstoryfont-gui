#!/usr/bin/env node
'use strict';

!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="b0728df1-9867-5a40-a7d7-a0fdae262e04")}catch(e){}}();

var chunkTKGT252T_js = require('./chunk-TKGT252T.js');

var D=chunkTKGT252T_js.c((q,k)=>{k.exports={name:"dotenv",version:"16.4.5",description:"Loads environment variables from .env file",main:"lib/main.js",types:"lib/main.d.ts",exports:{".":{types:"./lib/main.d.ts",require:"./lib/main.js",default:"./lib/main.js"},"./config":"./config.js","./config.js":"./config.js","./lib/env-options":"./lib/env-options.js","./lib/env-options.js":"./lib/env-options.js","./lib/cli-options":"./lib/cli-options.js","./lib/cli-options.js":"./lib/cli-options.js","./package.json":"./package.json"},scripts:{"dts-check":"tsc --project tests/types/tsconfig.json",lint:"standard","lint-readme":"standard-markdown",pretest:"npm run lint && npm run dts-check",test:"tap tests/*.js --100 -Rspec","test:coverage":"tap --coverage-report=lcov",prerelease:"npm test",release:"standard-version"},repository:{type:"git",url:"git://github.com/motdotla/dotenv.git"},funding:"https://dotenvx.com",keywords:["dotenv","env",".env","environment","variables","config","settings"],readmeFilename:"README.md",license:"BSD-2-Clause",devDependencies:{"@definitelytyped/dtslint":"^0.0.133","@types/node":"^18.11.3",decache:"^4.6.1",sinon:"^14.0.1",standard:"^17.0.0","standard-markdown":"^7.1.0","standard-version":"^9.5.0",tap:"^16.3.0",tar:"^6.1.11",typescript:"^4.8.4"},engines:{node:">=12"},browser:{fs:!1}};});var V=chunkTKGT252T_js.c((W,u)=>{var _=chunkTKGT252T_js.a("fs"),h=chunkTKGT252T_js.a("path"),j=chunkTKGT252T_js.a("os"),K=chunkTKGT252T_js.a("crypto"),Y=D(),N=Y.version,$=/(?:^|^)\s*(?:export\s+)?([\w.-]+)(?:\s*=\s*?|:\s+?)(\s*'(?:\\'|[^'])*'|\s*"(?:\\"|[^"])*"|\s*`(?:\\`|[^`])*`|[^#\r\n]+)?\s*(?:#.*)?(?:$|$)/mg;function x(e){let n={},r=e.toString();r=r.replace(/\r\n?/mg,`
`);let o;for(;(o=$.exec(r))!=null;){let c=o[1],t=o[2]||"";t=t.trim();let s=t[0];t=t.replace(/^(['"`])([\s\S]*)\1$/mg,"$2"),s==='"'&&(t=t.replace(/\\n/g,`
`),t=t.replace(/\\r/g,"\r")),n[c]=t;}return n}function R(e){let n=y(e),r=i.configDotenv({path:n});if(!r.parsed){let s=new Error(`MISSING_DATA: Cannot parse ${n} for an unknown reason`);throw s.code="MISSING_DATA",s}let o=O(e).split(","),c=o.length,t;for(let s=0;s<c;s++)try{let a=o[s].trim(),l=L(r,a);t=i.decrypt(l.ciphertext,l.key);break}catch(a){if(s+1>=c)throw a}return i.parse(t)}function C(e){console.log(`[dotenv@${N}][INFO] ${e}`);}function F(e){console.log(`[dotenv@${N}][WARN] ${e}`);}function g(e){console.log(`[dotenv@${N}][DEBUG] ${e}`);}function O(e){return e&&e.DOTENV_KEY&&e.DOTENV_KEY.length>0?e.DOTENV_KEY:process.env.DOTENV_KEY&&process.env.DOTENV_KEY.length>0?process.env.DOTENV_KEY:""}function L(e,n){let r;try{r=new URL(n);}catch(a){if(a.code==="ERR_INVALID_URL"){let l=new Error("INVALID_DOTENV_KEY: Wrong format. Must be in valid uri format like dotenv://:key_1234@dotenvx.com/vault/.env.vault?environment=development");throw l.code="INVALID_DOTENV_KEY",l}throw a}let o=r.password;if(!o){let a=new Error("INVALID_DOTENV_KEY: Missing key part");throw a.code="INVALID_DOTENV_KEY",a}let c=r.searchParams.get("environment");if(!c){let a=new Error("INVALID_DOTENV_KEY: Missing environment part");throw a.code="INVALID_DOTENV_KEY",a}let t=`DOTENV_VAULT_${c.toUpperCase()}`,s=e.parsed[t];if(!s){let a=new Error(`NOT_FOUND_DOTENV_ENVIRONMENT: Cannot locate environment ${t} in your .env.vault file.`);throw a.code="NOT_FOUND_DOTENV_ENVIRONMENT",a}return {ciphertext:s,key:o}}function y(e){let n=null;if(e&&e.path&&e.path.length>0)if(Array.isArray(e.path))for(let r of e.path)_.existsSync(r)&&(n=r.endsWith(".vault")?r:`${r}.vault`);else n=e.path.endsWith(".vault")?e.path:`${e.path}.vault`;else n=h.resolve(process.cwd(),".env.vault");return _.existsSync(n)?n:null}function m(e){return e[0]==="~"?h.join(j.homedir(),e.slice(1)):e}function G(e){C("Loading env from encrypted .env.vault");let n=i._parseVault(e),r=process.env;return e&&e.processEnv!=null&&(r=e.processEnv),i.populate(r,n,e),{parsed:n}}function U(e){let n=h.resolve(process.cwd(),".env"),r="utf8",o=!!(e&&e.debug);e&&e.encoding?r=e.encoding:o&&g("No encoding is specified. UTF-8 is used by default");let c=[n];if(e&&e.path)if(!Array.isArray(e.path))c=[m(e.path)];else {c=[];for(let l of e.path)c.push(m(l));}let t,s={};for(let l of c)try{let p=i.parse(_.readFileSync(l,{encoding:r}));i.populate(s,p,e);}catch(p){o&&g(`Failed to load ${l} ${p.message}`),t=p;}let a=process.env;return e&&e.processEnv!=null&&(a=e.processEnv),i.populate(a,s,e),t?{parsed:s,error:t}:{parsed:s}}function P(e){if(O(e).length===0)return i.configDotenv(e);let n=y(e);return n?i._configVault(e):(F(`You set DOTENV_KEY but you are missing a .env.vault file at ${n}. Did you forget to build it?`),i.configDotenv(e))}function B(e,n){let r=Buffer.from(n.slice(-64),"hex"),o=Buffer.from(e,"base64"),c=o.subarray(0,12),t=o.subarray(-16);o=o.subarray(12,-16);try{let s=K.createDecipheriv("aes-256-gcm",r,c);return s.setAuthTag(t),`${s.update(o)}${s.final()}`}catch(s){let a=s instanceof RangeError,l=s.message==="Invalid key length",p=s.message==="Unsupported state or unable to authenticate data";if(a||l){let f=new Error("INVALID_DOTENV_KEY: It must be 64 characters long (or more)");throw f.code="INVALID_DOTENV_KEY",f}else if(p){let f=new Error("DECRYPTION_FAILED: Please check your DOTENV_KEY");throw f.code="DECRYPTION_FAILED",f}else throw s}}function S(e,n,r={}){let o=!!(r&&r.debug),c=!!(r&&r.override);if(typeof n!="object"){let t=new Error("OBJECT_REQUIRED: Please check the processEnv argument being passed to populate");throw t.code="OBJECT_REQUIRED",t}for(let t of Object.keys(n))Object.prototype.hasOwnProperty.call(e,t)?(c===!0&&(e[t]=n[t]),o&&g(c===!0?`"${t}" is already defined and WAS overwritten`:`"${t}" is already defined and was NOT overwritten`)):e[t]=n[t];}var i={configDotenv:U,_configVault:G,_parseVault:R,config:P,decrypt:B,parse:x,populate:S};u.exports.configDotenv=i.configDotenv;u.exports._configVault=i._configVault;u.exports._parseVault=i._parseVault;u.exports.config=i.config;u.exports.decrypt=i.decrypt;u.exports.parse=i.parse;u.exports.populate=i.populate;u.exports=i;});var I=chunkTKGT252T_js.c((H,T)=>{var d={};process.env.DOTENV_CONFIG_ENCODING!=null&&(d.encoding=process.env.DOTENV_CONFIG_ENCODING);process.env.DOTENV_CONFIG_PATH!=null&&(d.path=process.env.DOTENV_CONFIG_PATH);process.env.DOTENV_CONFIG_DEBUG!=null&&(d.debug=process.env.DOTENV_CONFIG_DEBUG);process.env.DOTENV_CONFIG_OVERRIDE!=null&&(d.override=process.env.DOTENV_CONFIG_OVERRIDE);process.env.DOTENV_CONFIG_DOTENV_KEY!=null&&(d.DOTENV_KEY=process.env.DOTENV_CONFIG_DOTENV_KEY);T.exports=d;});var w=chunkTKGT252T_js.c((J,b)=>{var M=/^dotenv_config_(encoding|path|debug|override|DOTENV_KEY)=(.+)$/;b.exports=function(n){return n.reduce(function(r,o){let c=o.match(M);return c&&(r[c[1]]=c[2]),r},{})};});(function(){V().config(Object.assign({},I(),w()(process.argv)));})();var A={init:()=>import('./init-ABQFSJQJ.js').then(({main:e})=>e(process.argv.slice(3))),main:()=>import('./main-B7TZLN7N.js').then(({main:e})=>e(process.argv.slice(2))),trace:()=>import('./trace-RLZV4WV3.js').then(({main:e})=>e(process.argv.slice(3))),"trim-stats-file":()=>import('./trimStatsFile-B32JUOXW.js').then(({main:e})=>e(process.argv.slice(3)))};(A[process.argv[2]]||A.main)();
//# sourceMappingURL=out.js.map
//# sourceMappingURL=bin.js.map
//# debugId=b0728df1-9867-5a40-a7d7-a0fdae262e04