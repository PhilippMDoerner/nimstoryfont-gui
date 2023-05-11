"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const testing_1 = require("@angular/core/testing");
const testing_2 = require("@angular/platform-browser-dynamic/testing");
const NgComponentAnalyzer_1 = require("./NgComponentAnalyzer");
describe('getComponentInputsOutputs', () => {
    it('should return empty if no I/O found', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({})
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.getComponentInputsOutputs)(FooComponent)).toEqual({
            inputs: [],
            outputs: [],
        });
        class BarComponent {
        }
        expect((0, NgComponentAnalyzer_1.getComponentInputsOutputs)(BarComponent)).toEqual({
            inputs: [],
            outputs: [],
        });
    });
    it('should return I/O', () => {
        let FooComponent = class FooComponent {
            constructor() {
                this.output = new core_1.EventEmitter();
                this.outputWithBindingPropertyName = new core_1.EventEmitter();
            }
        };
        __decorate([
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], FooComponent.prototype, "input", void 0);
        __decorate([
            (0, core_1.Input)('inputPropertyName'),
            __metadata("design:type", String)
        ], FooComponent.prototype, "inputWithBindingPropertyName", void 0);
        __decorate([
            (0, core_1.Output)(),
            __metadata("design:type", Object)
        ], FooComponent.prototype, "output", void 0);
        __decorate([
            (0, core_1.Output)('outputPropertyName'),
            __metadata("design:type", Object)
        ], FooComponent.prototype, "outputWithBindingPropertyName", void 0);
        FooComponent = __decorate([
            (0, core_1.Component)({
                template: '',
                inputs: ['inputInComponentMetadata'],
                outputs: ['outputInComponentMetadata'],
            })
        ], FooComponent);
        const fooComponentFactory = resolveComponentFactory(FooComponent);
        const { inputs, outputs } = (0, NgComponentAnalyzer_1.getComponentInputsOutputs)(FooComponent);
        expect({ inputs, outputs }).toEqual({
            inputs: [
                { propName: 'inputInComponentMetadata', templateName: 'inputInComponentMetadata' },
                { propName: 'input', templateName: 'input' },
                { propName: 'inputWithBindingPropertyName', templateName: 'inputPropertyName' },
            ],
            outputs: [
                { propName: 'outputInComponentMetadata', templateName: 'outputInComponentMetadata' },
                { propName: 'output', templateName: 'output' },
                { propName: 'outputWithBindingPropertyName', templateName: 'outputPropertyName' },
            ],
        });
        expect(sortByPropName(inputs)).toEqual(sortByPropName(fooComponentFactory.inputs));
        expect(sortByPropName(outputs)).toEqual(sortByPropName(fooComponentFactory.outputs));
    });
    it("should return I/O when some of component metadata has the same name as one of component's properties", () => {
        let FooComponent = class FooComponent {
            constructor() {
                this.output = new core_1.EventEmitter();
                this.outputWithBindingPropertyName = new core_1.EventEmitter();
            }
        };
        __decorate([
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], FooComponent.prototype, "input", void 0);
        __decorate([
            (0, core_1.Input)('inputPropertyName'),
            __metadata("design:type", String)
        ], FooComponent.prototype, "inputWithBindingPropertyName", void 0);
        __decorate([
            (0, core_1.Output)(),
            __metadata("design:type", Object)
        ], FooComponent.prototype, "output", void 0);
        __decorate([
            (0, core_1.Output)('outputPropertyName'),
            __metadata("design:type", Object)
        ], FooComponent.prototype, "outputWithBindingPropertyName", void 0);
        FooComponent = __decorate([
            (0, core_1.Component)({
                template: '',
                inputs: ['input', 'inputWithBindingPropertyName'],
                outputs: ['outputWithBindingPropertyName'],
            })
        ], FooComponent);
        const fooComponentFactory = resolveComponentFactory(FooComponent);
        const { inputs, outputs } = (0, NgComponentAnalyzer_1.getComponentInputsOutputs)(FooComponent);
        expect(sortByPropName(inputs)).toEqual(sortByPropName(fooComponentFactory.inputs));
        expect(sortByPropName(outputs)).toEqual(sortByPropName(fooComponentFactory.outputs));
    });
    it('should return I/O in the presence of multiple decorators', () => {
        let FooComponent = class FooComponent {
        };
        __decorate([
            (0, core_1.Input)(),
            (0, core_1.HostBinding)('class.preceeding-first'),
            __metadata("design:type", String)
        ], FooComponent.prototype, "inputPreceedingHostBinding", void 0);
        __decorate([
            (0, core_1.HostBinding)('class.following-binding'),
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], FooComponent.prototype, "inputFollowingHostBinding", void 0);
        FooComponent = __decorate([
            (0, core_1.Component)({
                template: '',
            })
        ], FooComponent);
        const fooComponentFactory = resolveComponentFactory(FooComponent);
        const { inputs, outputs } = (0, NgComponentAnalyzer_1.getComponentInputsOutputs)(FooComponent);
        expect({ inputs, outputs }).toEqual({
            inputs: [
                { propName: 'inputPreceedingHostBinding', templateName: 'inputPreceedingHostBinding' },
                { propName: 'inputFollowingHostBinding', templateName: 'inputFollowingHostBinding' },
            ],
            outputs: [],
        });
        expect(sortByPropName(inputs)).toEqual(sortByPropName(fooComponentFactory.inputs));
        expect(sortByPropName(outputs)).toEqual(sortByPropName(fooComponentFactory.outputs));
    });
    it('should return I/O with extending classes', () => {
        let BarComponent = class BarComponent {
        };
        __decorate([
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], BarComponent.prototype, "a", void 0);
        __decorate([
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], BarComponent.prototype, "b", void 0);
        BarComponent = __decorate([
            (0, core_1.Component)({
                template: '',
            })
        ], BarComponent);
        let FooComponent = class FooComponent extends BarComponent {
        };
        __decorate([
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], FooComponent.prototype, "b", void 0);
        __decorate([
            (0, core_1.Input)(),
            __metadata("design:type", String)
        ], FooComponent.prototype, "c", void 0);
        FooComponent = __decorate([
            (0, core_1.Component)({
                template: '',
            })
        ], FooComponent);
        const fooComponentFactory = resolveComponentFactory(FooComponent);
        const { inputs, outputs } = (0, NgComponentAnalyzer_1.getComponentInputsOutputs)(FooComponent);
        expect({ inputs, outputs }).toEqual({
            inputs: [
                { propName: 'a', templateName: 'a' },
                { propName: 'b', templateName: 'b' },
                { propName: 'c', templateName: 'c' },
            ],
            outputs: [],
        });
        expect(sortByPropName(inputs)).toEqual(sortByPropName(fooComponentFactory.inputs));
        expect(sortByPropName(outputs)).toEqual(sortByPropName(fooComponentFactory.outputs));
    });
});
describe('isDeclarable', () => {
    it('should return true with a Component', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({})
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.isDeclarable)(FooComponent)).toEqual(true);
    });
    it('should return true with a Directive', () => {
        let FooDirective = class FooDirective {
        };
        FooDirective = __decorate([
            (0, core_1.Directive)({})
        ], FooDirective);
        expect((0, NgComponentAnalyzer_1.isDeclarable)(FooDirective)).toEqual(true);
    });
    it('should return true with a Pipe', () => {
        let FooPipe = class FooPipe {
        };
        FooPipe = __decorate([
            (0, core_1.Pipe)({ name: 'pipe' })
        ], FooPipe);
        expect((0, NgComponentAnalyzer_1.isDeclarable)(FooPipe)).toEqual(true);
    });
    it('should return false with simple class', () => {
        class FooPipe {
        }
        expect((0, NgComponentAnalyzer_1.isDeclarable)(FooPipe)).toEqual(false);
    });
    it('should return false with Injectable', () => {
        let FooInjectable = class FooInjectable {
        };
        FooInjectable = __decorate([
            (0, core_1.Injectable)()
        ], FooInjectable);
        expect((0, NgComponentAnalyzer_1.isDeclarable)(FooInjectable)).toEqual(false);
    });
});
describe('isComponent', () => {
    it('should return true with a Component', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({})
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.isComponent)(FooComponent)).toEqual(true);
    });
    it('should return false with simple class', () => {
        class FooPipe {
        }
        expect((0, NgComponentAnalyzer_1.isComponent)(FooPipe)).toEqual(false);
    });
    it('should return false with Directive', () => {
        let FooDirective = class FooDirective {
        };
        FooDirective = __decorate([
            (0, core_1.Directive)()
        ], FooDirective);
        expect((0, NgComponentAnalyzer_1.isComponent)(FooDirective)).toEqual(false);
    });
});
describe('isStandaloneComponent', () => {
    it('should return true with a Component with "standalone: true"', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({ standalone: true })
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooComponent)).toEqual(true);
    });
    it('should return false with a Component with "standalone: false"', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({ standalone: false })
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooComponent)).toEqual(false);
    });
    it('should return false with a Component without the "standalone" property', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({})
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooComponent)).toEqual(false);
    });
    it('should return false with simple class', () => {
        class FooPipe {
        }
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooPipe)).toEqual(false);
    });
    it('should return true with a Directive with "standalone: true"', () => {
        let FooDirective = class FooDirective {
        };
        FooDirective = __decorate([
            (0, core_1.Directive)({ standalone: true })
        ], FooDirective);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooDirective)).toEqual(true);
    });
    it('should return false with a Directive with "standalone: false"', () => {
        let FooDirective = class FooDirective {
        };
        FooDirective = __decorate([
            (0, core_1.Directive)({ standalone: false })
        ], FooDirective);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooDirective)).toEqual(false);
    });
    it('should return false with Directive without the "standalone" property', () => {
        let FooDirective = class FooDirective {
        };
        FooDirective = __decorate([
            (0, core_1.Directive)()
        ], FooDirective);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooDirective)).toEqual(false);
    });
    it('should return true with a Pipe with "standalone: true"', () => {
        let FooPipe = class FooPipe {
        };
        FooPipe = __decorate([
            (0, core_1.Pipe)({ name: 'FooPipe', standalone: true })
        ], FooPipe);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooPipe)).toEqual(true);
    });
    it('should return false with a Pipe with "standalone: false"', () => {
        let FooPipe = class FooPipe {
        };
        FooPipe = __decorate([
            (0, core_1.Pipe)({ name: 'FooPipe', standalone: false })
        ], FooPipe);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooPipe)).toEqual(false);
    });
    it('should return false with Pipe without the "standalone" property', () => {
        let FooPipe = class FooPipe {
        };
        FooPipe = __decorate([
            (0, core_1.Pipe)({
                name: 'fooPipe',
            })
        ], FooPipe);
        expect((0, NgComponentAnalyzer_1.isStandaloneComponent)(FooPipe)).toEqual(false);
    });
});
describe('getComponentDecoratorMetadata', () => {
    it('should return Component with a Component', () => {
        let FooComponent = class FooComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({ selector: 'foo' })
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.getComponentDecoratorMetadata)(FooComponent)).toBeInstanceOf(core_1.Component);
        expect((0, NgComponentAnalyzer_1.getComponentDecoratorMetadata)(FooComponent)).toEqual({
            changeDetection: 1,
            selector: 'foo',
        });
    });
    it('should return Component with extending classes', () => {
        let BarComponent = class BarComponent {
        };
        BarComponent = __decorate([
            (0, core_1.Component)({ selector: 'bar' })
        ], BarComponent);
        let FooComponent = class FooComponent extends BarComponent {
        };
        FooComponent = __decorate([
            (0, core_1.Component)({ selector: 'foo' })
        ], FooComponent);
        expect((0, NgComponentAnalyzer_1.getComponentDecoratorMetadata)(FooComponent)).toBeInstanceOf(core_1.Component);
        expect((0, NgComponentAnalyzer_1.getComponentDecoratorMetadata)(FooComponent)).toEqual({
            changeDetection: 1,
            selector: 'foo',
        });
    });
});
function sortByPropName(array) {
    return array.sort((a, b) => a.propName.localeCompare(b.propName));
}
function resolveComponentFactory(component) {
    testing_1.TestBed.configureTestingModule({
        declarations: [component],
    }).overrideModule(testing_2.BrowserDynamicTestingModule, {
        set: {
            entryComponents: [component],
        },
    });
    const componentFactoryResolver = testing_1.TestBed.inject(core_1.ComponentFactoryResolver);
    return componentFactoryResolver.resolveComponentFactory(component);
}
