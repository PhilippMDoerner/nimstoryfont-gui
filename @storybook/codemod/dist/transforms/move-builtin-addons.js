var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var move_builtin_addons_exports={};__export(move_builtin_addons_exports,{default:()=>transformer});module.exports=__toCommonJS(move_builtin_addons_exports);function transformer(file,api){let j=api.jscodeshift,createImportDeclaration=(specifiers,source)=>j.importDeclaration(specifiers.map(s=>j.importSpecifier(j.identifier(s))),j.literal(source)),deprecates={action:[["action"],"@storybook/addon-actions"],linkTo:[["linkTo"],"@storybook/addon-links"]};return j(file.source).find(j.ImportDeclaration).filter(i=>i.value.source.value==="@storybook/react").forEach(i=>{let importStatement=i.value;importStatement.specifiers=importStatement.specifiers.filter(specifier=>{let item=deprecates[specifier.local.name];if(item){let[specifiers,moduleName]=item;return i.insertAfter(createImportDeclaration(specifiers,moduleName)),!1}return specifier})}).toSource({quote:"single"})}0&&(module.exports={});
