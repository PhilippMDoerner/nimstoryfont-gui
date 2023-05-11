var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var add_component_parameters_exports={};__export(add_component_parameters_exports,{default:()=>transformer});module.exports=__toCommonJS(add_component_parameters_exports);function transformer(file,api){let j=api.jscodeshift,root=j(file.source),importMap={};root.find(j.ImportDeclaration).forEach(imp=>imp.node.specifiers.forEach(spec=>{importMap[spec.local.name]=!0}));function getLeafName(string){let parts=string.split(/\/|\.|\|/);return parts[parts.length-1]}function addComponentParameter(call){let{node}=call,leafName=getLeafName(node.arguments[0].value);return j.callExpression(j.memberExpression(node,j.identifier("addParameters")),[j.objectExpression([j.property("init",j.identifier("component"),j.identifier(leafName))])])}return root.find(j.CallExpression).filter(call=>call.node.callee.name==="storiesOf").filter(call=>call.node.arguments.length>0&&call.node.arguments[0].type==="Literal").filter(call=>{let leafName=getLeafName(call.node.arguments[0].value);return importMap[leafName]}).replaceWith(addComponentParameter),root.toSource()}0&&(module.exports={});
