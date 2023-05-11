"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var src_exports={};__export(src_exports,{esbuild:()=>esbuild,rollup:()=>rollup,unplugin:()=>unplugin,vite:()=>vite,webpack:()=>webpack});module.exports=__toCommonJS(src_exports);var import_unplugin=require("unplugin"),import_promises=__toESM(require("fs/promises")),import_csf_tools=require("@storybook/csf-tools"),STORIES_REGEX=/\.(story|stories)\.[tj]sx?$/,logger=console,unplugin=(0,import_unplugin.createUnplugin)(options=>({name:"unplugin-csf",enforce:"pre",loadInclude(id){return STORIES_REGEX.test(id)},async load(fname){var _a;let code=await import_promises.default.readFile(fname,"utf-8");try{let csf=(0,import_csf_tools.loadCsf)(code,{makeTitle:userTitle=>userTitle||"default"}).parse();return(0,import_csf_tools.enrichCsf)(csf,options),(0,import_csf_tools.formatCsf)(csf,{sourceMaps:!0})}catch(err){return(_a=err.message)!=null&&_a.startsWith("CSF:")||logger.warn(err.message),code}}})),{esbuild}=unplugin,{webpack}=unplugin,{rollup}=unplugin,{vite}=unplugin;0&&(module.exports={esbuild,rollup,unplugin,vite,webpack});
