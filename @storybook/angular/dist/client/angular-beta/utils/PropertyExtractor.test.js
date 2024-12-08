"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@angular/common");
const core_1 = require("@angular/core");
const platform_browser_1 = require("@angular/platform-browser");
const animations_1 = require("@angular/platform-browser/animations");
const vitest_1 = require("vitest");
const test_module_1 = require("../__testfixtures__/test.module");
const PropertyExtractor_1 = require("./PropertyExtractor");
const TEST_TOKEN = new core_1.InjectionToken('testToken');
const TestTokenProvider = { provide: TEST_TOKEN, useValue: 123 };
const TestService = (0, core_1.Injectable)()(class {
});
const TestComponent1 = (0, core_1.Component)({})(class {
});
const TestComponent2 = (0, core_1.Component)({})(class {
});
const StandaloneTestComponent = (0, core_1.Component)({ standalone: true })(class {
});
const StandaloneTestDirective = (0, core_1.Directive)({ standalone: true })(class {
});
const MixedTestComponent1 = (0, core_1.Component)({ standalone: true })(class extends StandaloneTestComponent {
});
const MixedTestComponent2 = (0, core_1.Component)({})(class extends MixedTestComponent1 {
});
const MixedTestComponent3 = (0, core_1.Component)({ standalone: true })(class extends MixedTestComponent2 {
});
const TestModuleWithDeclarations = (0, core_1.NgModule)({ declarations: [TestComponent1] })(class {
});
const TestModuleWithImportsAndProviders = (0, core_1.NgModule)({
    imports: [TestModuleWithDeclarations],
    providers: [TestTokenProvider],
})(class {
});
const analyzeMetadata = (metadata, component) => {
    return new PropertyExtractor_1.PropertyExtractor(metadata, component);
};
const extractImports = (metadata, component) => {
    const { imports } = new PropertyExtractor_1.PropertyExtractor(metadata, component);
    return imports;
};
const extractDeclarations = (metadata, component) => {
    const { declarations } = new PropertyExtractor_1.PropertyExtractor(metadata, component);
    return declarations;
};
const extractProviders = (metadata, component) => {
    const { providers } = new PropertyExtractor_1.PropertyExtractor(metadata, component);
    return providers;
};
const extractApplicationProviders = (metadata, component) => {
    const { applicationProviders } = new PropertyExtractor_1.PropertyExtractor(metadata, component);
    return applicationProviders;
};
(0, vitest_1.describe)('PropertyExtractor', () => {
    vitest_1.vi.spyOn(console, 'warn').mockImplementation(() => { });
    (0, vitest_1.describe)('analyzeMetadata', () => {
        (0, vitest_1.it)('should remove BrowserModule', () => {
            const metadata = {
                imports: [platform_browser_1.BrowserModule],
            };
            const { imports, providers, applicationProviders } = analyzeMetadata(metadata);
            (0, vitest_1.expect)(imports.flat(Number.MAX_VALUE)).toEqual([common_1.CommonModule]);
            (0, vitest_1.expect)(providers.flat(Number.MAX_VALUE)).toEqual([]);
            (0, vitest_1.expect)(applicationProviders.flat(Number.MAX_VALUE)).toEqual([]);
        });
        (0, vitest_1.it)('should remove BrowserAnimationsModule and use its providers instead', () => {
            const metadata = {
                imports: [animations_1.BrowserAnimationsModule],
            };
            const { imports, providers, applicationProviders } = analyzeMetadata(metadata);
            (0, vitest_1.expect)(imports.flat(Number.MAX_VALUE)).toEqual([common_1.CommonModule]);
            (0, vitest_1.expect)(providers.flat(Number.MAX_VALUE)).toEqual([]);
            (0, vitest_1.expect)(applicationProviders.flat(Number.MAX_VALUE)).toEqual((0, animations_1.provideAnimations)());
        });
        (0, vitest_1.it)('should remove NoopAnimationsModule and use its providers instead', () => {
            const metadata = {
                imports: [animations_1.NoopAnimationsModule],
            };
            const { imports, providers, applicationProviders } = analyzeMetadata(metadata);
            (0, vitest_1.expect)(imports.flat(Number.MAX_VALUE)).toEqual([common_1.CommonModule]);
            (0, vitest_1.expect)(providers.flat(Number.MAX_VALUE)).toEqual([]);
            (0, vitest_1.expect)(applicationProviders.flat(Number.MAX_VALUE)).toEqual((0, animations_1.provideNoopAnimations)());
        });
        (0, vitest_1.it)('should remove Browser/Animations modules recursively', () => {
            const metadata = {
                imports: [animations_1.BrowserAnimationsModule, platform_browser_1.BrowserModule],
            };
            const { imports, providers, applicationProviders } = analyzeMetadata(metadata);
            (0, vitest_1.expect)(imports.flat(Number.MAX_VALUE)).toEqual([common_1.CommonModule]);
            (0, vitest_1.expect)(providers.flat(Number.MAX_VALUE)).toEqual([]);
            (0, vitest_1.expect)(applicationProviders.flat(Number.MAX_VALUE)).toEqual((0, animations_1.provideAnimations)());
        });
        (0, vitest_1.it)('should not destructure Angular official module', () => {
            const metadata = {
                imports: [test_module_1.WithOfficialModule],
            };
            const { imports, providers, applicationProviders } = analyzeMetadata(metadata);
            (0, vitest_1.expect)(imports.flat(Number.MAX_VALUE)).toEqual([common_1.CommonModule, test_module_1.WithOfficialModule]);
            (0, vitest_1.expect)(providers.flat(Number.MAX_VALUE)).toEqual([]);
            (0, vitest_1.expect)(applicationProviders.flat(Number.MAX_VALUE)).toEqual([]);
        });
    });
    (0, vitest_1.describe)('extractImports', () => {
        (0, vitest_1.it)('should return Angular official modules', () => {
            const imports = extractImports({ imports: [TestModuleWithImportsAndProviders] });
            (0, vitest_1.expect)(imports).toEqual([common_1.CommonModule, TestModuleWithImportsAndProviders]);
        });
        (0, vitest_1.it)('should return standalone components', () => {
            const imports = extractImports({
                imports: [TestModuleWithImportsAndProviders],
            }, StandaloneTestComponent);
            (0, vitest_1.expect)(imports).toEqual([
                common_1.CommonModule,
                TestModuleWithImportsAndProviders,
                StandaloneTestComponent,
            ]);
        });
        (0, vitest_1.it)('should return standalone directives', () => {
            const imports = extractImports({
                imports: [TestModuleWithImportsAndProviders],
            }, StandaloneTestDirective);
            (0, vitest_1.expect)(imports).toEqual([
                common_1.CommonModule,
                TestModuleWithImportsAndProviders,
                StandaloneTestDirective,
            ]);
        });
    });
    (0, vitest_1.describe)('extractDeclarations', () => {
        (0, vitest_1.it)('should return an array of declarations that contains `storyComponent`', () => {
            const declarations = extractDeclarations({ declarations: [TestComponent1] }, TestComponent2);
            (0, vitest_1.expect)(declarations).toEqual([TestComponent1, TestComponent2]);
        });
    });
    (0, vitest_1.describe)('analyzeDecorators', () => {
        (0, vitest_1.it)('isStandalone should be false', () => {
            const { isStandalone } = PropertyExtractor_1.PropertyExtractor.analyzeDecorators(TestComponent1);
            (0, vitest_1.expect)(isStandalone).toBe(false);
        });
        (0, vitest_1.it)('isStandalone should be true', () => {
            const { isStandalone } = PropertyExtractor_1.PropertyExtractor.analyzeDecorators(StandaloneTestComponent);
            (0, vitest_1.expect)(isStandalone).toBe(true);
        });
        (0, vitest_1.it)('isStandalone should be true', () => {
            const { isStandalone } = PropertyExtractor_1.PropertyExtractor.analyzeDecorators(MixedTestComponent1);
            (0, vitest_1.expect)(isStandalone).toBe(true);
        });
        (0, vitest_1.it)('isStandalone should be false', () => {
            const { isStandalone } = PropertyExtractor_1.PropertyExtractor.analyzeDecorators(MixedTestComponent2);
            (0, vitest_1.expect)(isStandalone).toBe(false);
        });
        (0, vitest_1.it)('isStandalone should be true', () => {
            const { isStandalone } = PropertyExtractor_1.PropertyExtractor.analyzeDecorators(MixedTestComponent3);
            (0, vitest_1.expect)(isStandalone).toBe(true);
        });
    });
    (0, vitest_1.describe)('extractProviders', () => {
        (0, vitest_1.it)('should return an array of providers', () => {
            const providers = extractProviders({
                providers: [TestService],
            });
            (0, vitest_1.expect)(providers).toEqual([TestService]);
        });
        (0, vitest_1.it)('should return an array of singletons extracted', () => {
            const singeltons = extractApplicationProviders({
                imports: [animations_1.BrowserAnimationsModule],
            });
            (0, vitest_1.expect)(singeltons).toEqual((0, animations_1.provideAnimations)());
        });
    });
});
