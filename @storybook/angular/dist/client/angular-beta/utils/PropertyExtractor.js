"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.PropertyExtractor = exports.uniqueArray = exports.REMOVED_MODULES = exports.reflectionCapabilities = void 0;
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const ts_dedent_1 = require("ts-dedent");
const NgModulesAnalyzer_1 = require("./NgModulesAnalyzer");
exports.reflectionCapabilities = new core_1.ɵReflectionCapabilities();
exports.REMOVED_MODULES = new core_1.InjectionToken('REMOVED_MODULES');
const uniqueArray = (arr) => {
    return arr
        .flat(Number.MAX_VALUE)
        .filter(Boolean)
        .filter((value, index, self) => self.indexOf(value) === index);
};
exports.uniqueArray = uniqueArray;
class PropertyExtractor {
    /* eslint-enable @typescript-eslint/lines-between-class-members */
    constructor(metadata, component) {
        this.metadata = metadata;
        this.component = component;
        /* eslint-disable @typescript-eslint/lines-between-class-members */
        this.declarations = [];
        /**
         * Analyze NgModule Metadata
         *
         * - Removes Restricted Imports
         * - Extracts providers from ModuleWithProviders
         * - Returns a new NgModuleMetadata object
         */
        this.analyzeMetadata = (metadata) => {
            const declarations = [...(metadata?.declarations || [])];
            const providers = [...(metadata?.providers || [])];
            const applicationProviders = [];
            const imports = [...(metadata?.imports || [])].reduce((acc, imported) => {
                // remove ngModule and use only its providers if it is restricted
                // (e.g. BrowserModule, BrowserAnimationsModule, NoopAnimationsModule, ...etc)
                const [isRestricted, restrictedProviders] = _a.analyzeRestricted(imported);
                if (isRestricted) {
                    applicationProviders.unshift(restrictedProviders || []);
                    return acc;
                }
                acc.push(imported);
                return acc;
            }, []);
            return { ...metadata, imports, providers, applicationProviders, declarations };
        };
        this.init();
    }
    // With the new way of mounting standalone components to the DOM via bootstrapApplication API,
    // we should now pass ModuleWithProviders to the providers array of the bootstrapApplication function.
    static warnImportsModuleWithProviders(propertyExtractor) {
        const hasModuleWithProvidersImport = propertyExtractor.imports.some((importedModule) => 'ngModule' in importedModule);
        if (hasModuleWithProvidersImport) {
            console.warn((0, ts_dedent_1.dedent)(`
          Storybook Warning: 
          moduleMetadata property 'imports' contains one or more ModuleWithProviders, likely the result of a 'Module.forRoot()'-style call.
          In Storybook 7.0 we use Angular's new 'bootstrapApplication' API to mount the component to the DOM, which accepts a list of providers to set up application-wide providers.
          Use the 'applicationConfig' decorator from '@storybook/angular' to pass your ModuleWithProviders to the 'providers' property in combination with the importProvidersFrom helper function from '@angular/core' to extract all the necessary providers.
          Visit https://angular.io/guide/standalone-components#configuring-dependency-injection for more information
          `));
        }
    }
    init() {
        const analyzed = this.analyzeMetadata(this.metadata);
        this.imports = (0, exports.uniqueArray)([common_1.CommonModule, analyzed.imports]);
        this.providers = (0, exports.uniqueArray)(analyzed.providers);
        this.applicationProviders = (0, exports.uniqueArray)(analyzed.applicationProviders);
        this.declarations = (0, exports.uniqueArray)(analyzed.declarations);
        if (this.component) {
            const { isDeclarable, isStandalone } = _a.analyzeDecorators(this.component);
            const isDeclared = (0, NgModulesAnalyzer_1.isComponentAlreadyDeclared)(this.component, analyzed.declarations, this.imports);
            if (isStandalone) {
                this.imports.push(this.component);
            }
            else if (isDeclarable && !isDeclared) {
                this.declarations.push(this.component);
            }
        }
    }
}
exports.PropertyExtractor = PropertyExtractor;
_a = PropertyExtractor;
PropertyExtractor.analyzeRestricted = (ngModule) => {
    if (ngModule === platform_browser_1.BrowserModule) {
        console.warn((0, ts_dedent_1.dedent) `
          Storybook Warning:
          You have imported the "BrowserModule", which is not necessary anymore. 
          In Storybook v7.0 we are using Angular's new bootstrapApplication API to mount an Angular application to the DOM.
          Note that the BrowserModule providers are automatically included when starting an application with bootstrapApplication()
          Please remove the "BrowserModule" from the list of imports in your moduleMetadata definition to remove this warning.
        `);
        return [true];
    }
    if (ngModule === animations_1.BrowserAnimationsModule) {
        console.warn((0, ts_dedent_1.dedent) `
          Storybook Warning:
          You have added the "BrowserAnimationsModule" to the list of "imports" in your moduleMetadata definition of your Story.
          In Storybook 7.0 we use Angular's new 'bootstrapApplication' API to mount the component to the DOM, which accepts a list of providers to set up application-wide providers.
          Use the 'applicationConfig' decorator from '@storybook/angular' and add the "provideAnimations" function to the list of "providers".
          If your Angular version does not support "provide-like" functions, use the helper function importProvidersFrom instead to set up animations. For this case, please add "importProvidersFrom(BrowserAnimationsModule)" to the list of providers of your applicationConfig definition.
          Please visit https://angular.io/guide/standalone-components#configuring-dependency-injection for more information.
        `);
        return [true, (0, animations_1.provideAnimations)()];
    }
    if (ngModule === animations_1.NoopAnimationsModule) {
        console.warn((0, ts_dedent_1.dedent) `
          Storybook Warning:
          You have added the "NoopAnimationsModule" to the list of "imports" in your moduleMetadata definition of your Story.
          In Storybook v7.0 we are using Angular's new bootstrapApplication API to mount an Angular application to the DOM, which accepts a list of providers to set up application-wide providers.
          Use the 'applicationConfig' decorator from '@storybook/angular' and add the "provideNoopAnimations" function to the list of "providers".
          If your Angular version does not support "provide-like" functions, use the helper function importProvidersFrom instead to set up noop animations and to extract all necessary providers from NoopAnimationsModule. For this case, please add "importProvidersFrom(NoopAnimationsModule)" to the list of providers of your applicationConfig definition.
          Please visit https://angular.io/guide/standalone-components#configuring-dependency-injection for more information.
        `);
        return [true, (0, animations_1.provideNoopAnimations)()];
    }
    return [false];
};
PropertyExtractor.analyzeDecorators = (component) => {
    const decorators = exports.reflectionCapabilities.annotations(component);
    const isComponent = decorators.some((d) => _a.isDecoratorInstanceOf(d, 'Component'));
    const isDirective = decorators.some((d) => _a.isDecoratorInstanceOf(d, 'Directive'));
    const isPipe = decorators.some((d) => _a.isDecoratorInstanceOf(d, 'Pipe'));
    const isDeclarable = isComponent || isDirective || isPipe;
    // Check if the hierarchically lowest Component or Directive decorator (the only relevant for importing dependencies) is standalone.
    const isStandalone = !!((isComponent || isDirective) &&
        [...decorators]
            .reverse() // reflectionCapabilities returns decorators in a hierarchically top-down order
            .find((d) => _a.isDecoratorInstanceOf(d, 'Component') || _a.isDecoratorInstanceOf(d, 'Directive'))?.standalone);
    return { isDeclarable, isStandalone };
};
PropertyExtractor.isDecoratorInstanceOf = (decorator, name) => {
    let factory;
    switch (name) {
        case 'Component':
            factory = core_1.Component;
            break;
        case 'Directive':
            factory = core_1.Directive;
            break;
        case 'Pipe':
            factory = core_1.Pipe;
            break;
        case 'Injectable':
            factory = core_1.Injectable;
            break;
        case 'Input':
            factory = core_1.Input;
            break;
        case 'Output':
            factory = core_1.Output;
            break;
        default:
            throw new Error(`Unknown decorator type: ${name}`);
    }
    return decorator instanceof factory || decorator.ngMetadataName === name;
};