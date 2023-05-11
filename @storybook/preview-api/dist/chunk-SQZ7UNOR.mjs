import{combineParameters,composeStepRunners,normalizeInputTypes,sortStoriesV6,userOrAutoTitle}from"./chunk-T7VADZWI.mjs";import{dedent as dedent2}from"ts-dedent";import{global as global2}from"@storybook/global";import{logger as logger2}from"@storybook/client-logger";import{toId as toId2,sanitize}from"@storybook/csf";import{global}from"@storybook/global";import{dedent}from"ts-dedent";import{SynchronousPromise}from"synchronous-promise";import{toId,isExportStory,storyNameFromExport}from"@storybook/csf";import{logger}from"@storybook/client-logger";var AUTODOCS_TAG="autodocs",STORIES_MDX_TAG="stories-mdx",StoryStoreFacade=class{constructor(){this.projectAnnotations={loaders:[],decorators:[],parameters:{},argsEnhancers:[],argTypesEnhancers:[],args:{},argTypes:{}},this.entries={},this.csfExports={}}importFn(path){return SynchronousPromise.resolve().then(()=>{let moduleExports=this.csfExports[path];if(!moduleExports)throw new Error(`Unknown path: ${path}`);return moduleExports})}getStoryIndex(store){let fileNameOrder=Object.keys(this.csfExports),storySortParameter=this.projectAnnotations.parameters?.options?.storySort,sortableV6=Object.entries(this.entries).map(([storyId,{type,importPath,...entry}])=>{let exports=this.csfExports[importPath],csfFile=store.processCSFFileWithCache(exports,importPath,exports.default.title),storyLike;return type==="story"?storyLike=store.storyFromCSFFile({storyId,csfFile}):storyLike={...entry,story:entry.name,kind:entry.title,componentId:toId(entry.componentId||entry.title),parameters:{fileName:importPath}},[storyId,storyLike,csfFile.meta.parameters,this.projectAnnotations.parameters||{}]}),sortedV7;try{sortedV7=sortStoriesV6(sortableV6,storySortParameter,fileNameOrder)}catch(err){throw typeof storySortParameter=="function"?new Error(dedent`
          Error sorting stories with sort parameter ${storySortParameter}:

          > ${err.message}
          
          Are you using a V7-style sort function in V6 compatibility mode?
          
          More info: https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#v7-style-story-sort
        `):err}return{v:4,entries:sortedV7.reduce((acc,s)=>(acc[s.id]=this.entries[s.id],acc),{})}}clearFilenameExports(fileName){this.csfExports[fileName]&&(Object.entries(this.entries).forEach(([id,{importPath}])=>{importPath===fileName&&delete this.entries[id]}),this.csfExports[fileName]={})}addStoriesFromExports(fileName,fileExports){if(fileName.match(/\.mdx$/)&&!fileName.match(/\.stories\.mdx$/)&&global.FEATURES?.storyStoreV7MdxErrors!==!1)throw new Error(dedent`
        Cannot index \`.mdx\` file (\`${fileName}\`) in \`storyStoreV7: false\` mode.

        The legacy story store does not support new-style \`.mdx\` files. If the file above
        is not intended to be indexed (i.e. displayed as an entry in the sidebar), either
        exclude it from your \`stories\` glob, or add <Meta isTemplate /> to it.
        
        If you wanted to index the file, you'll need to name it \`stories.mdx\` and stick to the
        legacy (6.x) MDX API, or use the new store.`);if(this.csfExports[fileName]===fileExports)return;this.clearFilenameExports(fileName);let{default:defaultExport,__namedExportsOrder,...namedExports}=fileExports,{id:componentId,title,tags:componentTags=[]}=defaultExport||{},specifiers=(global.STORIES||[]).map(specifier=>({...specifier,importPathMatcher:new RegExp(specifier.importPathMatcher)}));if(title=userOrAutoTitle(fileName,specifiers,title),!title){logger.info(`Unexpected default export without title in '${fileName}': ${JSON.stringify(fileExports.default)}`);return}this.csfExports[fileName]={...fileExports,default:{...defaultExport,title}};let sortedExports=namedExports;Array.isArray(__namedExportsOrder)&&(sortedExports={},__namedExportsOrder.forEach(name=>{let namedExport=namedExports[name];namedExport&&(sortedExports[name]=namedExport)}));let storyExports=Object.entries(sortedExports).filter(([key])=>isExportStory(key,defaultExport)),docsOptions=global.DOCS_OPTIONS||{},{autodocs}=docsOptions,componentAutodocs=componentTags.includes(AUTODOCS_TAG),autodocsOptedIn=autodocs===!0||autodocs==="tag"&&componentAutodocs;if(storyExports.length&&(componentTags.includes(STORIES_MDX_TAG)||autodocsOptedIn)){let name=docsOptions.defaultName,docsId=toId(componentId||title,name);this.entries[docsId]={type:"docs",id:docsId,title,name,importPath:fileName,...componentId&&{componentId},tags:[...componentTags,"docs",...autodocsOptedIn&&!componentAutodocs?[AUTODOCS_TAG]:[]],storiesImports:[]}}storyExports.forEach(([key,storyExport])=>{let exportName=storyNameFromExport(key),id=storyExport.parameters?.__id||toId(componentId||title,exportName),name=typeof storyExport!="function"&&storyExport.name||storyExport.storyName||storyExport.story?.name||exportName;storyExport.parameters?.docsOnly||(this.entries[id]={type:"story",id,name,title,importPath:fileName,...componentId&&{componentId},tags:[...storyExport.tags||componentTags,"story"]})})}};var warningAlternatives={addDecorator:"Instead, use `export const decorators = [];` in your `preview.js`.",addParameters:"Instead, use `export const parameters = {};` in your `preview.js`.",addLoader:"Instead, use `export const loaders = [];` in your `preview.js`.",addArgs:"",addArgTypes:"",addArgsEnhancer:"",addArgTypesEnhancer:"",addStepRunner:"",getGlobalRender:"",setGlobalRender:""},checkMethod=method=>{if(global2.FEATURES?.storyStoreV7)throw new Error(dedent2`You cannot use \`${method}\` with the new Story Store.

      ${warningAlternatives[method]}`);if(!global2.__STORYBOOK_CLIENT_API__)throw new Error(`Singleton client API not yet initialized, cannot call \`${method}\`.`)},addDecorator=decorator=>{checkMethod("addDecorator"),global2.__STORYBOOK_CLIENT_API__?.addDecorator(decorator)},addParameters=parameters=>{checkMethod("addParameters"),global2.__STORYBOOK_CLIENT_API__?.addParameters(parameters)},addLoader=loader=>{checkMethod("addLoader"),global2.__STORYBOOK_CLIENT_API__?.addLoader(loader)},addArgs=args=>{checkMethod("addArgs"),global2.__STORYBOOK_CLIENT_API__?.addArgs(args)},addArgTypes=argTypes=>{checkMethod("addArgTypes"),global2.__STORYBOOK_CLIENT_API__?.addArgTypes(argTypes)},addArgsEnhancer=enhancer=>{checkMethod("addArgsEnhancer"),global2.__STORYBOOK_CLIENT_API__?.addArgsEnhancer(enhancer)},addArgTypesEnhancer=enhancer=>{checkMethod("addArgTypesEnhancer"),global2.__STORYBOOK_CLIENT_API__?.addArgTypesEnhancer(enhancer)},addStepRunner=stepRunner=>{checkMethod("addStepRunner"),global2.__STORYBOOK_CLIENT_API__?.addStepRunner(stepRunner)};var setGlobalRender=render=>{checkMethod("setGlobalRender"),global2.__STORYBOOK_CLIENT_API__&&(global2.__STORYBOOK_CLIENT_API__.facade.projectAnnotations.render=render)},invalidStoryTypes=new Set(["string","number","boolean","symbol"]),ClientApi=class{constructor({storyStore}={}){this.lastFileName=0;this.addDecorator=decorator=>{this.facade.projectAnnotations.decorators?.push(decorator)};this.addParameters=({globals,globalTypes,...parameters})=>{this.facade.projectAnnotations.parameters=combineParameters(this.facade.projectAnnotations.parameters,parameters),globals&&(this.facade.projectAnnotations.globals={...this.facade.projectAnnotations.globals,...globals}),globalTypes&&(this.facade.projectAnnotations.globalTypes={...this.facade.projectAnnotations.globalTypes,...normalizeInputTypes(globalTypes)})};this.addStepRunner=stepRunner=>{this.facade.projectAnnotations.runStep=composeStepRunners([this.facade.projectAnnotations.runStep,stepRunner].filter(Boolean))};this.addLoader=loader=>{this.facade.projectAnnotations.loaders?.push(loader)};this.addArgs=args=>{this.facade.projectAnnotations.args={...this.facade.projectAnnotations.args,...args}};this.addArgTypes=argTypes=>{this.facade.projectAnnotations.argTypes={...this.facade.projectAnnotations.argTypes,...normalizeInputTypes(argTypes)}};this.addArgsEnhancer=enhancer=>{this.facade.projectAnnotations.argsEnhancers?.push(enhancer)};this.addArgTypesEnhancer=enhancer=>{this.facade.projectAnnotations.argTypesEnhancers?.push(enhancer)};this._addedExports={};this.storiesOf=(kind,m)=>{if(!kind&&typeof kind!="string")throw new Error("Invalid or missing kind provided for stories, should be a string");if(m||logger2.warn(`Missing 'module' parameter for story with a kind of '${kind}'. It will break your HMR`),m){let proto=Object.getPrototypeOf(m);proto.exports&&proto.exports.default&&logger2.error(`Illegal mix of CSF default export and storiesOf calls in a single file: ${proto.i}`)}let baseFilename=m&&m.id?`${m.id}`:(this.lastFileName++).toString(),fileName=baseFilename,i=1;for(;this._addedExports[fileName];)i+=1,fileName=`${baseFilename}-${i}`;m&&m.hot&&m.hot.accept&&(m.hot.accept(),m.hot.dispose(()=>{this.facade.clearFilenameExports(fileName),delete this._addedExports[fileName],setTimeout(()=>{this._loadAddedExports(),this.onImportFnChanged?.({importFn:this.importFn.bind(this)})},0)}));let hasAdded=!1,api={kind:kind.toString(),add:()=>api,addDecorator:()=>api,addLoader:()=>api,addParameters:()=>api};Object.keys(this.addons).forEach(name=>{let addon=this.addons[name];api[name]=(...args)=>(addon.apply(api,args),api)});let meta={id:sanitize(kind),title:kind,decorators:[],loaders:[],parameters:{}};this._addedExports[fileName]={default:meta};let counter=0;return api.add=(storyName,storyFn,parameters={})=>{if(hasAdded=!0,typeof storyName!="string")throw new Error(`Invalid or missing storyName provided for a "${kind}" story.`);if(!storyFn||Array.isArray(storyFn)||invalidStoryTypes.has(typeof storyFn))throw new Error(`Cannot load story "${storyName}" in "${kind}" due to invalid format. Storybook expected a function/object but received ${typeof storyFn} instead.`);let{decorators,loaders,component,args,argTypes,...storyParameters}=parameters,storyId=parameters.__id||toId2(kind,storyName),csfExports=this._addedExports[fileName];return csfExports[`story${counter}`]={name:storyName,parameters:{fileName,__id:storyId,...storyParameters},decorators,loaders,args,argTypes,component,render:storyFn},counter+=1,api},api.addDecorator=decorator=>{if(hasAdded)throw new Error(`You cannot add a decorator after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);return meta.decorators?.push(decorator),api},api.addLoader=loader=>{if(hasAdded)throw new Error("You cannot add a loader after the first story for a kind.");return meta.loaders?.push(loader),api},api.addParameters=({component,args,argTypes,tags,...parameters})=>{if(hasAdded)throw new Error(`You cannot add parameters after the first story for a kind.
Read more here: https://github.com/storybookjs/storybook/blob/master/MIGRATION.md#can-no-longer-add-decoratorsparameters-after-stories`);return meta.parameters=combineParameters(meta.parameters,parameters),component&&(meta.component=component),args&&(meta.args={...meta.args,...args}),argTypes&&(meta.argTypes={...meta.argTypes,...argTypes}),tags&&(meta.tags=tags),api},api};this.raw=()=>this.storyStore?.raw();this.facade=new StoryStoreFacade,this.addons={},this.storyStore=storyStore}importFn(path){return this.facade.importFn(path)}getStoryIndex(){if(!this.storyStore)throw new Error("Cannot get story index before setting storyStore");return this.facade.getStoryIndex(this.storyStore)}_loadAddedExports(){Object.entries(this._addedExports).forEach(([fileName,fileExports])=>this.facade.addStoriesFromExports(fileName,fileExports))}get _storyStore(){return this.storyStore}};import{global as global3}from"@storybook/global";import{parse}from"qs";var getQueryParams=()=>{let{document}=global3;return document&&document.location&&document.location.search?parse(document.location.search,{ignoreQueryPrefix:!0}):{}},getQueryParam=key=>getQueryParams()[key];export{addDecorator,addParameters,addLoader,addArgs,addArgTypes,addArgsEnhancer,addArgTypesEnhancer,addStepRunner,setGlobalRender,ClientApi,getQueryParams,getQueryParam};
