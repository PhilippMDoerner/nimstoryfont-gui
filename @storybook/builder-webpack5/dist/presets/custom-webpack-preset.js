"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __export=(target,all)=>{for(var name in all)__defProp(target,name,{get:all[name],enumerable:!0})},__copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod)),__toCommonJS=mod=>__copyProps(__defProp({},"__esModule",{value:!0}),mod);var custom_webpack_preset_exports={};__export(custom_webpack_preset_exports,{swc:()=>swc,webpack:()=>webpack,webpackInstance:()=>webpackInstance,webpackVersion:()=>webpackVersion});module.exports=__toCommonJS(custom_webpack_preset_exports);var import_node_logger2=require("storybook/internal/node-logger"),import_core_webpack=require("@storybook/core-webpack"),webpackReal=__toESM(require("webpack"));var import_node_logger=require("storybook/internal/node-logger");async function createDefaultWebpackConfig(storybookBaseConfig,options){if(options.presetsList?.some(preset=>/@storybook(\/|\\)preset-create-react-app/.test(typeof preset=="string"?preset:preset.name)))return storybookBaseConfig;let hasPostcssAddon=options.presetsList?.some(preset=>/@storybook(\/|\\)addon-postcss/.test(typeof preset=="string"?preset:preset.name)),cssLoaders={};hasPostcssAddon||(import_node_logger.logger.info("=> Using implicit CSS loaders"),cssLoaders={test:/\.css$/,sideEffects:!0,use:[require.resolve("style-loader"),{loader:require.resolve("css-loader"),options:{importLoaders:1}}]});let isProd=storybookBaseConfig.mode!=="development";return{...storybookBaseConfig,module:{...storybookBaseConfig.module,rules:[...storybookBaseConfig.module?.rules||[],cssLoaders,{test:/\.(svg|ico|jpg|jpeg|png|apng|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,type:"asset/resource",generator:{filename:isProd?"static/media/[name].[contenthash:8][ext]":"static/media/[path][name][ext]"}},{test:/\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,type:"asset",parser:{dataUrlCondition:{maxSize:1e4}},generator:{filename:isProd?"static/media/[name].[contenthash:8][ext]":"static/media/[path][name][ext]"}},{resourceQuery:/raw/,type:"asset/source"}]},resolve:{...storybookBaseConfig.resolve,conditionNames:[...storybookBaseConfig.resolve?.conditionNames??[],"storybook","stories","test","..."],fallback:{crypto:!1,assert:!1,...storybookBaseConfig.resolve?.fallback}}}}var swc=config=>({...config,env:{...config?.env??{},targets:config?.env?.targets??{chrome:100,safari:15,firefox:91},bugfixes:config?.env?.bugfixes??!0}});async function webpack(config,options){let{configDir,configType,presets}=options,coreOptions=await presets.apply("core"),defaultConfig=config;coreOptions?.disableWebpackDefaults||(defaultConfig=await createDefaultWebpackConfig(config,options));let finalDefaultConfig=await presets.apply("webpackFinal",defaultConfig,options),customConfig=(0,import_core_webpack.loadCustomWebpackConfig)(configDir);return typeof customConfig=="function"?(import_node_logger2.logger.info("=> Loading custom Webpack config (full-control mode)."),customConfig({config:finalDefaultConfig,mode:configType})):(import_node_logger2.logger.info("=> Using default Webpack5 setup"),finalDefaultConfig)}var webpackInstance=async()=>webpackReal,webpackVersion=async()=>"5";0&&(module.exports={swc,webpack,webpackInstance,webpackVersion});
