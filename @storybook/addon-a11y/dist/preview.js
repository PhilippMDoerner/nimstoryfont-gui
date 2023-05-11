"use strict";var __create=Object.create;var __defProp=Object.defineProperty;var __getOwnPropDesc=Object.getOwnPropertyDescriptor;var __getOwnPropNames=Object.getOwnPropertyNames;var __getProtoOf=Object.getPrototypeOf,__hasOwnProp=Object.prototype.hasOwnProperty;var __copyProps=(to,from,except,desc)=>{if(from&&typeof from=="object"||typeof from=="function")for(let key of __getOwnPropNames(from))!__hasOwnProp.call(to,key)&&key!==except&&__defProp(to,key,{get:()=>from[key],enumerable:!(desc=__getOwnPropDesc(from,key))||desc.enumerable});return to};var __toESM=(mod,isNodeMode,target)=>(target=mod!=null?__create(__getProtoOf(mod)):{},__copyProps(isNodeMode||!mod||!mod.__esModule?__defProp(target,"default",{value:mod,enumerable:!0}):target,mod));var import_global=require("@storybook/global"),import_preview_api=require("@storybook/preview-api");var ADDON_ID="storybook/a11y",PANEL_ID=`${ADDON_ID}/panel`;var RESULT=`${ADDON_ID}/result`,REQUEST=`${ADDON_ID}/request`,RUNNING=`${ADDON_ID}/running`,ERROR=`${ADDON_ID}/error`,MANUAL=`${ADDON_ID}/manual`,EVENTS={RESULT,REQUEST,RUNNING,ERROR,MANUAL};var{document,window:globalWindow}=import_global.global,channel=import_preview_api.addons.getChannel(),active=!1,activeStoryId,handleRequest=async storyId=>{let{manual}=await getParams(storyId);manual||await run(storyId)},run=async storyId=>{activeStoryId=storyId;try{let input=await getParams(storyId);if(!active){active=!0,channel.emit(EVENTS.RUNNING);let axe=(await import("axe-core")).default,{element="#storybook-root",config,options={}}=input,htmlElement=document.querySelector(element);if(!htmlElement)return;axe.reset(),config&&axe.configure(config);let result=await axe.run(htmlElement,options);activeStoryId===storyId?channel.emit(EVENTS.RESULT,result):(active=!1,run(activeStoryId))}}catch(error){channel.emit(EVENTS.ERROR,error)}finally{active=!1}},getParams=async storyId=>{let{parameters}=await globalWindow.__STORYBOOK_STORY_STORE__.loadStory({storyId})||{};return parameters.a11y||{config:{},options:{}}};channel.on(EVENTS.REQUEST,handleRequest);channel.on(EVENTS.MANUAL,run);
