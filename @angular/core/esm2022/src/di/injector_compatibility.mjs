/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import '../util/ng_dev_mode';
import { RuntimeError } from '../errors';
import { emitInjectEvent } from '../render3/debug/injector_profiler';
import { stringify } from '../util/stringify';
import { resolveForwardRef } from './forward_ref';
import { getInjectImplementation, injectRootLimpMode } from './inject_switch';
import { InjectFlags, } from './interface/injector';
const _THROW_IF_NOT_FOUND = {};
export const THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
/*
 * Name of a property (that we patch onto DI decorator), which is used as an annotation of which
 * InjectFlag this decorator represents. This allows to avoid direct references to the DI decorators
 * in the code, thus making them tree-shakable.
 */
const DI_DECORATOR_FLAG = '__NG_DI_FLAG__';
export const NG_TEMP_TOKEN_PATH = 'ngTempTokenPath';
const NG_TOKEN_PATH = 'ngTokenPath';
const NEW_LINE = /\n/gm;
const NO_NEW_LINE = 'ɵ';
export const SOURCE = '__source';
/**
 * Current injector value used by `inject`.
 * - `undefined`: it is an error to call `inject`
 * - `null`: `inject` can be called but there is no injector (limp-mode).
 * - Injector instance: Use the injector for resolution.
 */
let _currentInjector = undefined;
export function getCurrentInjector() {
    return _currentInjector;
}
export function setCurrentInjector(injector) {
    const former = _currentInjector;
    _currentInjector = injector;
    return former;
}
export function injectInjectorOnly(token, flags = InjectFlags.Default) {
    if (_currentInjector === undefined) {
        throw new RuntimeError(-203 /* RuntimeErrorCode.MISSING_INJECTION_CONTEXT */, ngDevMode &&
            `inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`runInInjectionContext\`.`);
    }
    else if (_currentInjector === null) {
        return injectRootLimpMode(token, undefined, flags);
    }
    else {
        const value = _currentInjector.get(token, flags & InjectFlags.Optional ? null : undefined, flags);
        ngDevMode && emitInjectEvent(token, value, flags);
        return value;
    }
}
export function ɵɵinject(token, flags = InjectFlags.Default) {
    return (getInjectImplementation() || injectInjectorOnly)(resolveForwardRef(token), flags);
}
/**
 * Throws an error indicating that a factory function could not be generated by the compiler for a
 * particular class.
 *
 * The name of the class is not mentioned here, but will be in the generated factory function name
 * and thus in the stack trace.
 *
 * @codeGenApi
 */
export function ɵɵinvalidFactoryDep(index) {
    throw new RuntimeError(202 /* RuntimeErrorCode.INVALID_FACTORY_DEPENDENCY */, ngDevMode &&
        `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${index} of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index ${index} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.`);
}
/**
 * Injects a token from the currently active injector.
 * `inject` is only supported in an [injection context](guide/di/dependency-injection-context). It
 * can be used during:
 * - Construction (via the `constructor`) of a class being instantiated by the DI system, such
 * as an `@Injectable` or `@Component`.
 * - In the initializer for fields of such classes.
 * - In the factory function specified for `useFactory` of a `Provider` or an `@Injectable`.
 * - In the `factory` function specified for an `InjectionToken`.
 * - In a stackframe of a function call in a DI context
 *
 * @param token A token that represents a dependency that should be injected.
 * @param flags Optional flags that control how injection is executed.
 * The flags correspond to injection strategies that can be specified with
 * parameter decorators `@Host`, `@Self`, `@SkipSelf`, and `@Optional`.
 * @returns the injected value if operation is successful, `null` otherwise.
 * @throws if called outside of a supported context.
 *
 * @usageNotes
 * In practice the `inject()` calls are allowed in a constructor, a constructor parameter and a
 * field initializer:
 *
 * ```typescript
 * @Injectable({providedIn: 'root'})
 * export class Car {
 *   radio: Radio|undefined;
 *   // OK: field initializer
 *   spareTyre = inject(Tyre);
 *
 *   constructor() {
 *     // OK: constructor body
 *     this.radio = inject(Radio);
 *   }
 * }
 * ```
 *
 * It is also legal to call `inject` from a provider's factory:
 *
 * ```typescript
 * providers: [
 *   {provide: Car, useFactory: () => {
 *     // OK: a class factory
 *     const engine = inject(Engine);
 *     return new Car(engine);
 *   }}
 * ]
 * ```
 *
 * Calls to the `inject()` function outside of the class creation context will result in error. Most
 * notably, calls to `inject()` are disallowed after a class instance was created, in methods
 * (including lifecycle hooks):
 *
 * ```typescript
 * @Component({ ... })
 * export class CarComponent {
 *   ngOnInit() {
 *     // ERROR: too late, the component instance was already created
 *     const engine = inject(Engine);
 *     engine.start();
 *   }
 * }
 * ```
 *
 * @publicApi
 */
export function inject(token, flags = InjectFlags.Default) {
    // The `as any` here _shouldn't_ be necessary, but without it JSCompiler
    // throws a disambiguation  error due to the multiple signatures.
    return ɵɵinject(token, convertToBitFlags(flags));
}
// Converts object-based DI flags (`InjectOptions`) to bit flags (`InjectFlags`).
export function convertToBitFlags(flags) {
    if (typeof flags === 'undefined' || typeof flags === 'number') {
        return flags;
    }
    // While TypeScript doesn't accept it without a cast, bitwise OR with false-y values in
    // JavaScript is a no-op. We can use that for a very codesize-efficient conversion from
    // `InjectOptions` to `InjectFlags`.
    return (0 /* InternalInjectFlags.Default */ | // comment to force a line break in the formatter
        (flags.optional && 8 /* InternalInjectFlags.Optional */) |
        (flags.host && 1 /* InternalInjectFlags.Host */) |
        (flags.self && 2 /* InternalInjectFlags.Self */) |
        (flags.skipSelf && 4 /* InternalInjectFlags.SkipSelf */));
}
export function injectArgs(types) {
    const args = [];
    for (let i = 0; i < types.length; i++) {
        const arg = resolveForwardRef(types[i]);
        if (Array.isArray(arg)) {
            if (arg.length === 0) {
                throw new RuntimeError(900 /* RuntimeErrorCode.INVALID_DIFFER_INPUT */, ngDevMode && 'Arguments array must have arguments.');
            }
            let type = undefined;
            let flags = InjectFlags.Default;
            for (let j = 0; j < arg.length; j++) {
                const meta = arg[j];
                const flag = getInjectFlag(meta);
                if (typeof flag === 'number') {
                    // Special case when we handle @Inject decorator.
                    if (flag === -1 /* DecoratorFlags.Inject */) {
                        type = meta.token;
                    }
                    else {
                        flags |= flag;
                    }
                }
                else {
                    type = meta;
                }
            }
            args.push(ɵɵinject(type, flags));
        }
        else {
            args.push(ɵɵinject(arg));
        }
    }
    return args;
}
/**
 * Attaches a given InjectFlag to a given decorator using monkey-patching.
 * Since DI decorators can be used in providers `deps` array (when provider is configured using
 * `useFactory`) without initialization (e.g. `Host`) and as an instance (e.g. `new Host()`), we
 * attach the flag to make it available both as a static property and as a field on decorator
 * instance.
 *
 * @param decorator Provided DI decorator.
 * @param flag InjectFlag that should be applied.
 */
export function attachInjectFlag(decorator, flag) {
    decorator[DI_DECORATOR_FLAG] = flag;
    decorator.prototype[DI_DECORATOR_FLAG] = flag;
    return decorator;
}
/**
 * Reads monkey-patched property that contains InjectFlag attached to a decorator.
 *
 * @param token Token that may contain monkey-patched DI flags property.
 */
export function getInjectFlag(token) {
    return token[DI_DECORATOR_FLAG];
}
export function catchInjectorError(e, token, injectorErrorName, source) {
    const tokenPath = e[NG_TEMP_TOKEN_PATH];
    if (token[SOURCE]) {
        tokenPath.unshift(token[SOURCE]);
    }
    e.message = formatError('\n' + e.message, tokenPath, injectorErrorName, source);
    e[NG_TOKEN_PATH] = tokenPath;
    e[NG_TEMP_TOKEN_PATH] = null;
    throw e;
}
export function formatError(text, obj, injectorErrorName, source = null) {
    text = text && text.charAt(0) === '\n' && text.charAt(1) == NO_NEW_LINE ? text.slice(2) : text;
    let context = stringify(obj);
    if (Array.isArray(obj)) {
        context = obj.map(stringify).join(' -> ');
    }
    else if (typeof obj === 'object') {
        let parts = [];
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                let value = obj[key];
                parts.push(key + ':' + (typeof value === 'string' ? JSON.stringify(value) : stringify(value)));
            }
        }
        context = `{${parts.join(', ')}}`;
    }
    return `${injectorErrorName}${source ? '(' + source + ')' : ''}[${context}]: ${text.replace(NEW_LINE, '\n  ')}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5qZWN0b3JfY29tcGF0aWJpbGl0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2RpL2luamVjdG9yX2NvbXBhdGliaWxpdHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxxQkFBcUIsQ0FBQztBQUU3QixPQUFPLEVBQUMsWUFBWSxFQUFtQixNQUFNLFdBQVcsQ0FBQztBQUV6RCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDbkUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBRTVDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNoRCxPQUFPLEVBQUMsdUJBQXVCLEVBQUUsa0JBQWtCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUU1RSxPQUFPLEVBRUwsV0FBVyxHQUdaLE1BQU0sc0JBQXNCLENBQUM7QUFJOUIsTUFBTSxtQkFBbUIsR0FBRyxFQUFFLENBQUM7QUFDL0IsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsbUJBQW1CLENBQUM7QUFFdEQ7Ozs7R0FJRztBQUNILE1BQU0saUJBQWlCLEdBQUcsZ0JBQWdCLENBQUM7QUFFM0MsTUFBTSxDQUFDLE1BQU0sa0JBQWtCLEdBQUcsaUJBQWlCLENBQUM7QUFDcEQsTUFBTSxhQUFhLEdBQUcsYUFBYSxDQUFDO0FBQ3BDLE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQztBQUN4QixNQUFNLFdBQVcsR0FBRyxHQUFHLENBQUM7QUFDeEIsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFHLFVBQVUsQ0FBQztBQUVqQzs7Ozs7R0FLRztBQUNILElBQUksZ0JBQWdCLEdBQWdDLFNBQVMsQ0FBQztBQUU5RCxNQUFNLFVBQVUsa0JBQWtCO0lBQ2hDLE9BQU8sZ0JBQWdCLENBQUM7QUFDMUIsQ0FBQztBQUVELE1BQU0sVUFB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QyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCAnLi4vdXRpbC9uZ19kZXZfbW9kZSc7XG5cbmltcG9ydCB7UnVudGltZUVycm9yLCBSdW50aW1lRXJyb3JDb2RlfSBmcm9tICcuLi9lcnJvcnMnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi9pbnRlcmZhY2UvdHlwZSc7XG5pbXBvcnQge2VtaXRJbmplY3RFdmVudH0gZnJvbSAnLi4vcmVuZGVyMy9kZWJ1Zy9pbmplY3Rvcl9wcm9maWxlcic7XG5pbXBvcnQge3N0cmluZ2lmeX0gZnJvbSAnLi4vdXRpbC9zdHJpbmdpZnknO1xuXG5pbXBvcnQge3Jlc29sdmVGb3J3YXJkUmVmfSBmcm9tICcuL2ZvcndhcmRfcmVmJztcbmltcG9ydCB7Z2V0SW5qZWN0SW1wbGVtZW50YXRpb24sIGluamVjdFJvb3RMaW1wTW9kZX0gZnJvbSAnLi9pbmplY3Rfc3dpdGNoJztcbmltcG9ydCB0eXBlIHtJbmplY3Rvcn0gZnJvbSAnLi9pbmplY3Rvcic7XG5pbXBvcnQge1xuICBEZWNvcmF0b3JGbGFncyxcbiAgSW5qZWN0RmxhZ3MsXG4gIEluamVjdE9wdGlvbnMsXG4gIEludGVybmFsSW5qZWN0RmxhZ3MsXG59IGZyb20gJy4vaW50ZXJmYWNlL2luamVjdG9yJztcbmltcG9ydCB7UHJvdmlkZXJUb2tlbn0gZnJvbSAnLi9wcm92aWRlcl90b2tlbic7XG5pbXBvcnQgdHlwZSB7SG9zdEF0dHJpYnV0ZVRva2VufSBmcm9tICcuL2hvc3RfYXR0cmlidXRlX3Rva2VuJztcblxuY29uc3QgX1RIUk9XX0lGX05PVF9GT1VORCA9IHt9O1xuZXhwb3J0IGNvbnN0IFRIUk9XX0lGX05PVF9GT1VORCA9IF9USFJPV19JRl9OT1RfRk9VTkQ7XG5cbi8qXG4gKiBOYW1lIG9mIGEgcHJvcGVydHkgKHRoYXQgd2UgcGF0Y2ggb250byBESSBkZWNvcmF0b3IpLCB3aGljaCBpcyB1c2VkIGFzIGFuIGFubm90YXRpb24gb2Ygd2hpY2hcbiAqIEluamVjdEZsYWcgdGhpcyBkZWNvcmF0b3IgcmVwcmVzZW50cy4gVGhpcyBhbGxvd3MgdG8gYXZvaWQgZGlyZWN0IHJlZmVyZW5jZXMgdG8gdGhlIERJIGRlY29yYXRvcnNcbiAqIGluIHRoZSBjb2RlLCB0aHVzIG1ha2luZyB0aGVtIHRyZWUtc2hha2FibGUuXG4gKi9cbmNvbnN0IERJX0RFQ09SQVRPUl9GTEFHID0gJ19fTkdfRElfRkxBR19fJztcblxuZXhwb3J0IGNvbnN0IE5HX1RFTVBfVE9LRU5fUEFUSCA9ICduZ1RlbXBUb2tlblBhdGgnO1xuY29uc3QgTkdfVE9LRU5fUEFUSCA9ICduZ1Rva2VuUGF0aCc7XG5jb25zdCBORVdfTElORSA9IC9cXG4vZ207XG5jb25zdCBOT19ORVdfTElORSA9ICfJtSc7XG5leHBvcnQgY29uc3QgU09VUkNFID0gJ19fc291cmNlJztcblxuLyoqXG4gKiBDdXJyZW50IGluamVjdG9yIHZhbHVlIHVzZWQgYnkgYGluamVjdGAuXG4gKiAtIGB1bmRlZmluZWRgOiBpdCBpcyBhbiBlcnJvciB0byBjYWxsIGBpbmplY3RgXG4gKiAtIGBudWxsYDogYGluamVjdGAgY2FuIGJlIGNhbGxlZCBidXQgdGhlcmUgaXMgbm8gaW5qZWN0b3IgKGxpbXAtbW9kZSkuXG4gKiAtIEluamVjdG9yIGluc3RhbmNlOiBVc2UgdGhlIGluamVjdG9yIGZvciByZXNvbHV0aW9uLlxuICovXG5sZXQgX2N1cnJlbnRJbmplY3RvcjogSW5qZWN0b3IgfCB1bmRlZmluZWQgfCBudWxsID0gdW5kZWZpbmVkO1xuXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudEluamVjdG9yKCk6IEluamVjdG9yIHwgdW5kZWZpbmVkIHwgbnVsbCB7XG4gIHJldHVybiBfY3VycmVudEluamVjdG9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudEluamVjdG9yKFxuICBpbmplY3RvcjogSW5qZWN0b3IgfCBudWxsIHwgdW5kZWZpbmVkLFxuKTogSW5qZWN0b3IgfCB1bmRlZmluZWQgfCBudWxsIHtcbiAgY29uc3QgZm9ybWVyID0gX2N1cnJlbnRJbmplY3RvcjtcbiAgX2N1cnJlbnRJbmplY3RvciA9IGluamVjdG9yO1xuICByZXR1cm4gZm9ybWVyO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0SW5qZWN0b3JPbmx5PFQ+KHRva2VuOiBQcm92aWRlclRva2VuPFQ+KTogVDtcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RJbmplY3Rvck9ubHk8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4sIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RJbmplY3Rvck9ubHk8VD4oXG4gIHRva2VuOiBQcm92aWRlclRva2VuPFQ+LFxuICBmbGFncyA9IEluamVjdEZsYWdzLkRlZmF1bHQsXG4pOiBUIHwgbnVsbCB7XG4gIGlmIChfY3VycmVudEluamVjdG9yID09PSB1bmRlZmluZWQpIHtcbiAgICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFxuICAgICAgUnVudGltZUVycm9yQ29kZS5NSVNTSU5HX0lOSkVDVElPTl9DT05URVhULFxuICAgICAgbmdEZXZNb2RlICYmXG4gICAgICAgIGBpbmplY3QoKSBtdXN0IGJlIGNhbGxlZCBmcm9tIGFuIGluamVjdGlvbiBjb250ZXh0IHN1Y2ggYXMgYSBjb25zdHJ1Y3RvciwgYSBmYWN0b3J5IGZ1bmN0aW9uLCBhIGZpZWxkIGluaXRpYWxpemVyLCBvciBhIGZ1bmN0aW9uIHVzZWQgd2l0aCBcXGBydW5JbkluamVjdGlvbkNvbnRleHRcXGAuYCxcbiAgICApO1xuICB9IGVsc2UgaWYgKF9jdXJyZW50SW5qZWN0b3IgPT09IG51bGwpIHtcbiAgICByZXR1cm4gaW5qZWN0Um9vdExpbXBNb2RlKHRva2VuLCB1bmRlZmluZWQsIGZsYWdzKTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCB2YWx1ZSA9IF9jdXJyZW50SW5qZWN0b3IuZ2V0KFxuICAgICAgdG9rZW4sXG4gICAgICBmbGFncyAmIEluamVjdEZsYWdzLk9wdGlvbmFsID8gbnVsbCA6IHVuZGVmaW5lZCxcbiAgICAgIGZsYWdzLFxuICAgICk7XG4gICAgbmdEZXZNb2RlICYmIGVtaXRJbmplY3RFdmVudCh0b2tlbiBhcyBUeXBlPHVua25vd24+LCB2YWx1ZSwgZmxhZ3MpO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxufVxuXG4vKipcbiAqIEdlbmVyYXRlZCBpbnN0cnVjdGlvbjogaW5qZWN0cyBhIHRva2VuIGZyb20gdGhlIGN1cnJlbnRseSBhY3RpdmUgaW5qZWN0b3IuXG4gKlxuICogKEFkZGl0aW9uYWwgZG9jdW1lbnRhdGlvbiBtb3ZlZCB0byBgaW5qZWN0YCwgYXMgaXQgaXMgdGhlIHB1YmxpYyBBUEksIGFuZCBhbiBhbGlhcyBmb3IgdGhpc1xuICogaW5zdHJ1Y3Rpb24pXG4gKlxuICogQHNlZSBpbmplY3RcbiAqIEBjb2RlR2VuQXBpXG4gKiBAcHVibGljQXBpIFRoaXMgaW5zdHJ1Y3Rpb24gaGFzIGJlZW4gZW1pdHRlZCBieSBWaWV3RW5naW5lIGZvciBzb21lIHRpbWUgYW5kIGlzIGRlcGxveWVkIHRvIG5wbS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4pOiBUO1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4sIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiDJtcm1aW5qZWN0KHRva2VuOiBIb3N0QXR0cmlidXRlVG9rZW4pOiBzdHJpbmc7XG5leHBvcnQgZnVuY3Rpb24gybXJtWluamVjdCh0b2tlbjogSG9zdEF0dHJpYnV0ZVRva2VuLCBmbGFncz86IEluamVjdEZsYWdzKTogc3RyaW5nIHwgbnVsbDtcbmV4cG9ydCBmdW5jdGlvbiDJtcm1aW5qZWN0PFQ+KFxuICB0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiB8IEhvc3RBdHRyaWJ1dGVUb2tlbixcbiAgZmxhZ3M/OiBJbmplY3RGbGFncyxcbik6IHN0cmluZyB8IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gybXJtWluamVjdDxUPihcbiAgdG9rZW46IFByb3ZpZGVyVG9rZW48VD4gfCBIb3N0QXR0cmlidXRlVG9rZW4sXG4gIGZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdCxcbik6IFQgfCBudWxsIHtcbiAgcmV0dXJuIChnZXRJbmplY3RJbXBsZW1lbnRhdGlvbigpIHx8IGluamVjdEluamVjdG9yT25seSkoXG4gICAgcmVzb2x2ZUZvcndhcmRSZWYodG9rZW4gYXMgVHlwZTxUPiksXG4gICAgZmxhZ3MsXG4gICk7XG59XG5cbi8qKlxuICogVGhyb3dzIGFuIGVycm9yIGluZGljYXRpbmcgdGhhdCBhIGZhY3RvcnkgZnVuY3Rpb24gY291bGQgbm90IGJlIGdlbmVyYXRlZCBieSB0aGUgY29tcGlsZXIgZm9yIGFcbiAqIHBhcnRpY3VsYXIgY2xhc3MuXG4gKlxuICogVGhlIG5hbWUgb2YgdGhlIGNsYXNzIGlzIG5vdCBtZW50aW9uZWQgaGVyZSwgYnV0IHdpbGwgYmUgaW4gdGhlIGdlbmVyYXRlZCBmYWN0b3J5IGZ1bmN0aW9uIG5hbWVcbiAqIGFuZCB0aHVzIGluIHRoZSBzdGFjayB0cmFjZS5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtWludmFsaWRGYWN0b3J5RGVwKGluZGV4OiBudW1iZXIpOiBuZXZlciB7XG4gIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgUnVudGltZUVycm9yQ29kZS5JTlZBTElEX0ZBQ1RPUllfREVQRU5ERU5DWSxcbiAgICBuZ0Rldk1vZGUgJiZcbiAgICAgIGBUaGlzIGNvbnN0cnVjdG9yIGlzIG5vdCBjb21wYXRpYmxlIHdpdGggQW5ndWxhciBEZXBlbmRlbmN5IEluamVjdGlvbiBiZWNhdXNlIGl0cyBkZXBlbmRlbmN5IGF0IGluZGV4ICR7aW5kZXh9IG9mIHRoZSBwYXJhbWV0ZXIgbGlzdCBpcyBpbnZhbGlkLlxuVGhpcyBjYW4gaGFwcGVuIGlmIHRoZSBkZXBlbmRlbmN5IHR5cGUgaXMgYSBwcmltaXRpdmUgbGlrZSBhIHN0cmluZyBvciBpZiBhbiBhbmNlc3RvciBvZiB0aGlzIGNsYXNzIGlzIG1pc3NpbmcgYW4gQW5ndWxhciBkZWNvcmF0b3IuXG5cblBsZWFzZSBjaGVjayB0aGF0IDEpIHRoZSB0eXBlIGZvciB0aGUgcGFyYW1ldGVyIGF0IGluZGV4ICR7aW5kZXh9IGlzIGNvcnJlY3QgYW5kIDIpIHRoZSBjb3JyZWN0IEFuZ3VsYXIgZGVjb3JhdG9ycyBhcmUgZGVmaW5lZCBmb3IgdGhpcyBjbGFzcyBhbmQgaXRzIGFuY2VzdG9ycy5gLFxuICApO1xufVxuXG4vKipcbiAqIEBwYXJhbSB0b2tlbiBBIHRva2VuIHRoYXQgcmVwcmVzZW50cyBhIGRlcGVuZGVuY3kgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcmV0dXJucyB0aGUgaW5qZWN0ZWQgdmFsdWUgaWYgb3BlcmF0aW9uIGlzIHN1Y2Nlc3NmdWwsIGBudWxsYCBvdGhlcndpc2UuXG4gKiBAdGhyb3dzIGlmIGNhbGxlZCBvdXRzaWRlIG9mIGEgc3VwcG9ydGVkIGNvbnRleHQuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0PFQ+KHRva2VuOiBQcm92aWRlclRva2VuPFQ+KTogVDtcbi8qKlxuICogQHBhcmFtIHRva2VuIEEgdG9rZW4gdGhhdCByZXByZXNlbnRzIGEgZGVwZW5kZW5jeSB0aGF0IHNob3VsZCBiZSBpbmplY3RlZC5cbiAqIEBwYXJhbSBmbGFncyBDb250cm9sIGhvdyBpbmplY3Rpb24gaXMgZXhlY3V0ZWQuIFRoZSBmbGFncyBjb3JyZXNwb25kIHRvIGluamVjdGlvbiBzdHJhdGVnaWVzIHRoYXRcbiAqICAgICBjYW4gYmUgc3BlY2lmaWVkIHdpdGggcGFyYW1ldGVyIGRlY29yYXRvcnMgYEBIb3N0YCwgYEBTZWxmYCwgYEBTa2lwU2VsZmAsIGFuZCBgQE9wdGlvbmFsYC5cbiAqIEByZXR1cm5zIHRoZSBpbmplY3RlZCB2YWx1ZSBpZiBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bCwgYG51bGxgIG90aGVyd2lzZS5cbiAqIEB0aHJvd3MgaWYgY2FsbGVkIG91dHNpZGUgb2YgYSBzdXBwb3J0ZWQgY29udGV4dC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKiBAZGVwcmVjYXRlZCBwcmVmZXIgYW4gb3B0aW9ucyBvYmplY3QgaW5zdGVhZCBvZiBgSW5qZWN0RmxhZ3NgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3Q8VD4odG9rZW46IFByb3ZpZGVyVG9rZW48VD4sIGZsYWdzPzogSW5qZWN0RmxhZ3MpOiBUIHwgbnVsbDtcbi8qKlxuICogQHBhcmFtIHRva2VuIEEgdG9rZW4gdGhhdCByZXByZXNlbnRzIGEgZGVwZW5kZW5jeSB0aGF0IHNob3VsZCBiZSBpbmplY3RlZC5cbiAqIEBwYXJhbSBvcHRpb25zIENvbnRyb2wgaG93IGluamVjdGlvbiBpcyBleGVjdXRlZC4gT3B0aW9ucyBjb3JyZXNwb25kIHRvIGluamVjdGlvbiBzdHJhdGVnaWVzXG4gKiAgICAgdGhhdCBjYW4gYmUgc3BlY2lmaWVkIHdpdGggcGFyYW1ldGVyIGRlY29yYXRvcnMgYEBIb3N0YCwgYEBTZWxmYCwgYEBTa2lwU2VsZmAsIGFuZFxuICogICAgIGBAT3B0aW9uYWxgLlxuICogQHJldHVybnMgdGhlIGluamVjdGVkIHZhbHVlIGlmIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLlxuICogQHRocm93cyBpZiBjYWxsZWQgb3V0c2lkZSBvZiBhIHN1cHBvcnRlZCBjb250ZXh0LCBvciBpZiB0aGUgdG9rZW4gaXMgbm90IGZvdW5kLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdDxUPih0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiwgb3B0aW9uczogSW5qZWN0T3B0aW9ucyAmIHtvcHRpb25hbD86IGZhbHNlfSk6IFQ7XG4vKipcbiAqIEBwYXJhbSB0b2tlbiBBIHRva2VuIHRoYXQgcmVwcmVzZW50cyBhIGRlcGVuZGVuY3kgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcGFyYW0gb3B0aW9ucyBDb250cm9sIGhvdyBpbmplY3Rpb24gaXMgZXhlY3V0ZWQuIE9wdGlvbnMgY29ycmVzcG9uZCB0byBpbmplY3Rpb24gc3RyYXRlZ2llc1xuICogICAgIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRoIHBhcmFtZXRlciBkZWNvcmF0b3JzIGBASG9zdGAsIGBAU2VsZmAsIGBAU2tpcFNlbGZgLCBhbmRcbiAqICAgICBgQE9wdGlvbmFsYC5cbiAqIEByZXR1cm5zIHRoZSBpbmplY3RlZCB2YWx1ZSBpZiBvcGVyYXRpb24gaXMgc3VjY2Vzc2Z1bCwgIGBudWxsYCBpZiB0aGUgdG9rZW4gaXMgbm90XG4gKiAgICAgZm91bmQgYW5kIG9wdGlvbmFsIGluamVjdGlvbiBoYXMgYmVlbiByZXF1ZXN0ZWQuXG4gKiBAdGhyb3dzIGlmIGNhbGxlZCBvdXRzaWRlIG9mIGEgc3VwcG9ydGVkIGNvbnRleHQsIG9yIGlmIHRoZSB0b2tlbiBpcyBub3QgZm91bmQgYW5kIG9wdGlvbmFsXG4gKiAgICAgaW5qZWN0aW9uIHdhcyBub3QgcmVxdWVzdGVkLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdDxUPih0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiwgb3B0aW9uczogSW5qZWN0T3B0aW9ucyk6IFQgfCBudWxsO1xuLyoqXG4gKiBAcGFyYW0gdG9rZW4gQSB0b2tlbiB0aGF0IHJlcHJlc2VudHMgYSBzdGF0aWMgYXR0cmlidXRlIG9uIHRoZSBob3N0IG5vZGUgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcmV0dXJucyBWYWx1ZSBvZiB0aGUgYXR0cmlidXRlIGlmIGl0IGV4aXN0cy5cbiAqIEB0aHJvd3MgSWYgY2FsbGVkIG91dHNpZGUgb2YgYSBzdXBwb3J0ZWQgY29udGV4dCBvciB0aGUgYXR0cmlidXRlIGRvZXMgbm90IGV4aXN0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGluamVjdCh0b2tlbjogSG9zdEF0dHJpYnV0ZVRva2VuKTogc3RyaW5nO1xuLyoqXG4gKiBAcGFyYW0gdG9rZW4gQSB0b2tlbiB0aGF0IHJlcHJlc2VudHMgYSBzdGF0aWMgYXR0cmlidXRlIG9uIHRoZSBob3N0IG5vZGUgdGhhdCBzaG91bGQgYmUgaW5qZWN0ZWQuXG4gKiBAcmV0dXJucyBWYWx1ZSBvZiB0aGUgYXR0cmlidXRlIGlmIGl0IGV4aXN0cywgb3RoZXJ3aXNlIGBudWxsYC5cbiAqIEB0aHJvd3MgSWYgY2FsbGVkIG91dHNpZGUgb2YgYSBzdXBwb3J0ZWQgY29udGV4dC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3QodG9rZW46IEhvc3RBdHRyaWJ1dGVUb2tlbiwgb3B0aW9uczoge29wdGlvbmFsOiB0cnVlfSk6IHN0cmluZyB8IG51bGw7XG4vKipcbiAqIEBwYXJhbSB0b2tlbiBBIHRva2VuIHRoYXQgcmVwcmVzZW50cyBhIHN0YXRpYyBhdHRyaWJ1dGUgb24gdGhlIGhvc3Qgbm9kZSB0aGF0IHNob3VsZCBiZSBpbmplY3RlZC5cbiAqIEByZXR1cm5zIFZhbHVlIG9mIHRoZSBhdHRyaWJ1dGUgaWYgaXQgZXhpc3RzLlxuICogQHRocm93cyBJZiBjYWxsZWQgb3V0c2lkZSBvZiBhIHN1cHBvcnRlZCBjb250ZXh0IG9yIHRoZSBhdHRyaWJ1dGUgZG9lcyBub3QgZXhpc3QuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0KHRva2VuOiBIb3N0QXR0cmlidXRlVG9rZW4sIG9wdGlvbnM6IHtvcHRpb25hbDogZmFsc2V9KTogc3RyaW5nO1xuLyoqXG4gKiBJbmplY3RzIGEgdG9rZW4gZnJvbSB0aGUgY3VycmVudGx5IGFjdGl2ZSBpbmplY3Rvci5cbiAqIGBpbmplY3RgIGlzIG9ubHkgc3VwcG9ydGVkIGluIGFuIFtpbmplY3Rpb24gY29udGV4dF0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24tY29udGV4dCkuIEl0XG4gKiBjYW4gYmUgdXNlZCBkdXJpbmc6XG4gKiAtIENvbnN0cnVjdGlvbiAodmlhIHRoZSBgY29uc3RydWN0b3JgKSBvZiBhIGNsYXNzIGJlaW5nIGluc3RhbnRpYXRlZCBieSB0aGUgREkgc3lzdGVtLCBzdWNoXG4gKiBhcyBhbiBgQEluamVjdGFibGVgIG9yIGBAQ29tcG9uZW50YC5cbiAqIC0gSW4gdGhlIGluaXRpYWxpemVyIGZvciBmaWVsZHMgb2Ygc3VjaCBjbGFzc2VzLlxuICogLSBJbiB0aGUgZmFjdG9yeSBmdW5jdGlvbiBzcGVjaWZpZWQgZm9yIGB1c2VGYWN0b3J5YCBvZiBhIGBQcm92aWRlcmAgb3IgYW4gYEBJbmplY3RhYmxlYC5cbiAqIC0gSW4gdGhlIGBmYWN0b3J5YCBmdW5jdGlvbiBzcGVjaWZpZWQgZm9yIGFuIGBJbmplY3Rpb25Ub2tlbmAuXG4gKiAtIEluIGEgc3RhY2tmcmFtZSBvZiBhIGZ1bmN0aW9uIGNhbGwgaW4gYSBESSBjb250ZXh0XG4gKlxuICogQHBhcmFtIHRva2VuIEEgdG9rZW4gdGhhdCByZXByZXNlbnRzIGEgZGVwZW5kZW5jeSB0aGF0IHNob3VsZCBiZSBpbmplY3RlZC5cbiAqIEBwYXJhbSBmbGFncyBPcHRpb25hbCBmbGFncyB0aGF0IGNvbnRyb2wgaG93IGluamVjdGlvbiBpcyBleGVjdXRlZC5cbiAqIFRoZSBmbGFncyBjb3JyZXNwb25kIHRvIGluamVjdGlvbiBzdHJhdGVnaWVzIHRoYXQgY2FuIGJlIHNwZWNpZmllZCB3aXRoXG4gKiBwYXJhbWV0ZXIgZGVjb3JhdG9ycyBgQEhvc3RgLCBgQFNlbGZgLCBgQFNraXBTZWxmYCwgYW5kIGBAT3B0aW9uYWxgLlxuICogQHJldHVybnMgdGhlIGluamVjdGVkIHZhbHVlIGlmIG9wZXJhdGlvbiBpcyBzdWNjZXNzZnVsLCBgbnVsbGAgb3RoZXJ3aXNlLlxuICogQHRocm93cyBpZiBjYWxsZWQgb3V0c2lkZSBvZiBhIHN1cHBvcnRlZCBjb250ZXh0LlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBJbiBwcmFjdGljZSB0aGUgYGluamVjdCgpYCBjYWxscyBhcmUgYWxsb3dlZCBpbiBhIGNvbnN0cnVjdG9yLCBhIGNvbnN0cnVjdG9yIHBhcmFtZXRlciBhbmQgYVxuICogZmllbGQgaW5pdGlhbGl6ZXI6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuICogQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290J30pXG4gKiBleHBvcnQgY2xhc3MgQ2FyIHtcbiAqICAgcmFkaW86IFJhZGlvfHVuZGVmaW5lZDtcbiAqICAgLy8gT0s6IGZpZWxkIGluaXRpYWxpemVyXG4gKiAgIHNwYXJlVHlyZSA9IGluamVjdChUeXJlKTtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIC8vIE9LOiBjb25zdHJ1Y3RvciBib2R5XG4gKiAgICAgdGhpcy5yYWRpbyA9IGluamVjdChSYWRpbyk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEl0IGlzIGFsc28gbGVnYWwgdG8gY2FsbCBgaW5qZWN0YCBmcm9tIGEgcHJvdmlkZXIncyBmYWN0b3J5OlxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIHByb3ZpZGVyczogW1xuICogICB7cHJvdmlkZTogQ2FyLCB1c2VGYWN0b3J5OiAoKSA9PiB7XG4gKiAgICAgLy8gT0s6IGEgY2xhc3MgZmFjdG9yeVxuICogICAgIGNvbnN0IGVuZ2luZSA9IGluamVjdChFbmdpbmUpO1xuICogICAgIHJldHVybiBuZXcgQ2FyKGVuZ2luZSk7XG4gKiAgIH19XG4gKiBdXG4gKiBgYGBcbiAqXG4gKiBDYWxscyB0byB0aGUgYGluamVjdCgpYCBmdW5jdGlvbiBvdXRzaWRlIG9mIHRoZSBjbGFzcyBjcmVhdGlvbiBjb250ZXh0IHdpbGwgcmVzdWx0IGluIGVycm9yLiBNb3N0XG4gKiBub3RhYmx5LCBjYWxscyB0byBgaW5qZWN0KClgIGFyZSBkaXNhbGxvd2VkIGFmdGVyIGEgY2xhc3MgaW5zdGFuY2Ugd2FzIGNyZWF0ZWQsIGluIG1ldGhvZHNcbiAqIChpbmNsdWRpbmcgbGlmZWN5Y2xlIGhvb2tzKTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBAQ29tcG9uZW50KHsgLi4uIH0pXG4gKiBleHBvcnQgY2xhc3MgQ2FyQ29tcG9uZW50IHtcbiAqICAgbmdPbkluaXQoKSB7XG4gKiAgICAgLy8gRVJST1I6IHRvbyBsYXRlLCB0aGUgY29tcG9uZW50IGluc3RhbmNlIHdhcyBhbHJlYWR5IGNyZWF0ZWRcbiAqICAgICBjb25zdCBlbmdpbmUgPSBpbmplY3QoRW5naW5lKTtcbiAqICAgICBlbmdpbmUuc3RhcnQoKTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5qZWN0PFQ+KFxuICB0b2tlbjogUHJvdmlkZXJUb2tlbjxUPiB8IEhvc3RBdHRyaWJ1dGVUb2tlbixcbiAgZmxhZ3M6IEluamVjdEZsYWdzIHwgSW5qZWN0T3B0aW9ucyA9IEluamVjdEZsYWdzLkRlZmF1bHQsXG4pIHtcbiAgLy8gVGhlIGBhcyBhbnlgIGhlcmUgX3Nob3VsZG4ndF8gYmUgbmVjZXNzYXJ5LCBidXQgd2l0aG91dCBpdCBKU0NvbXBpbGVyXG4gIC8vIHRocm93cyBhIGRpc2FtYmlndWF0aW9uICBlcnJvciBkdWUgdG8gdGhlIG11bHRpcGxlIHNpZ25hdHVyZXMuXG4gIHJldHVybiDJtcm1aW5qZWN0KHRva2VuIGFzIGFueSwgY29udmVydFRvQml0RmxhZ3MoZmxhZ3MpKTtcbn1cblxuLy8gQ29udmVydHMgb2JqZWN0LWJhc2VkIERJIGZsYWdzIChgSW5qZWN0T3B0aW9uc2ApIHRvIGJpdCBmbGFncyAoYEluamVjdEZsYWdzYCkuXG5leHBvcnQgZnVuY3Rpb24gY29udmVydFRvQml0RmxhZ3MoXG4gIGZsYWdzOiBJbmplY3RPcHRpb25zIHwgSW5qZWN0RmxhZ3MgfCB1bmRlZmluZWQsXG4pOiBJbmplY3RGbGFncyB8IHVuZGVmaW5lZCB7XG4gIGlmICh0eXBlb2YgZmxhZ3MgPT09ICd1bmRlZmluZWQnIHx8IHR5cGVvZiBmbGFncyA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gZmxhZ3M7XG4gIH1cblxuICAvLyBXaGlsZSBUeXBlU2NyaXB0IGRvZXNuJ3QgYWNjZXB0IGl0IHdpdGhvdXQgYSBjYXN0LCBiaXR3aXNlIE9SIHdpdGggZmFsc2UteSB2YWx1ZXMgaW5cbiAgLy8gSmF2YVNjcmlwdCBpcyBhIG5vLW9wLiBXZSBjYW4gdXNlIHRoYXQgZm9yIGEgdmVyeSBjb2Rlc2l6ZS1lZmZpY2llbnQgY29udmVyc2lvbiBmcm9tXG4gIC8vIGBJbmplY3RPcHRpb25zYCB0byBgSW5qZWN0RmxhZ3NgLlxuICByZXR1cm4gKEludGVybmFsSW5qZWN0RmxhZ3MuRGVmYXVsdCB8IC8vIGNvbW1lbnQgdG8gZm9yY2UgYSBsaW5lIGJyZWFrIGluIHRoZSBmb3JtYXR0ZXJcbiAgICAoKGZsYWdzLm9wdGlvbmFsICYmIEludGVybmFsSW5qZWN0RmxhZ3MuT3B0aW9uYWwpIGFzIG51bWJlcikgfFxuICAgICgoZmxhZ3MuaG9zdCAmJiBJbnRlcm5hbEluamVjdEZsYWdzLkhvc3QpIGFzIG51bWJlcikgfFxuICAgICgoZmxhZ3Muc2VsZiAmJiBJbnRlcm5hbEluamVjdEZsYWdzLlNlbGYpIGFzIG51bWJlcikgfFxuICAgICgoZmxhZ3Muc2tpcFNlbGYgJiYgSW50ZXJuYWxJbmplY3RGbGFncy5Ta2lwU2VsZikgYXMgbnVtYmVyKSkgYXMgSW5qZWN0RmxhZ3M7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmplY3RBcmdzKHR5cGVzOiAoUHJvdmlkZXJUb2tlbjxhbnk+IHwgYW55W10pW10pOiBhbnlbXSB7XG4gIGNvbnN0IGFyZ3M6IGFueVtdID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdHlwZXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBhcmcgPSByZXNvbHZlRm9yd2FyZFJlZih0eXBlc1tpXSk7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSkge1xuICAgICAgaWYgKGFyZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJ1bnRpbWVFcnJvcihcbiAgICAgICAgICBSdW50aW1lRXJyb3JDb2RlLklOVkFMSURfRElGRkVSX0lOUFVULFxuICAgICAgICAgIG5nRGV2TW9kZSAmJiAnQXJndW1lbnRzIGFycmF5IG11c3QgaGF2ZSBhcmd1bWVudHMuJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGxldCB0eXBlOiBUeXBlPGFueT4gfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gICAgICBsZXQgZmxhZ3M6IEluamVjdEZsYWdzID0gSW5qZWN0RmxhZ3MuRGVmYXVsdDtcblxuICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcmcubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IGFyZ1tqXTtcbiAgICAgICAgY29uc3QgZmxhZyA9IGdldEluamVjdEZsYWcobWV0YSk7XG4gICAgICAgIGlmICh0eXBlb2YgZmxhZyA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAvLyBTcGVjaWFsIGNhc2Ugd2hlbiB3ZSBoYW5kbGUgQEluamVjdCBkZWNvcmF0b3IuXG4gICAgICAgICAgaWYgKGZsYWcgPT09IERlY29yYXRvckZsYWdzLkluamVjdCkge1xuICAgICAgICAgICAgdHlwZSA9IG1ldGEudG9rZW47XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZsYWdzIHw9IGZsYWc7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHR5cGUgPSBtZXRhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGFyZ3MucHVzaCjJtcm1aW5qZWN0KHR5cGUhLCBmbGFncykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcmdzLnB1c2goybXJtWluamVjdChhcmcpKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFyZ3M7XG59XG5cbi8qKlxuICogQXR0YWNoZXMgYSBnaXZlbiBJbmplY3RGbGFnIHRvIGEgZ2l2ZW4gZGVjb3JhdG9yIHVzaW5nIG1vbmtleS1wYXRjaGluZy5cbiAqIFNpbmNlIERJIGRlY29yYXRvcnMgY2FuIGJlIHVzZWQgaW4gcHJvdmlkZXJzIGBkZXBzYCBhcnJheSAod2hlbiBwcm92aWRlciBpcyBjb25maWd1cmVkIHVzaW5nXG4gKiBgdXNlRmFjdG9yeWApIHdpdGhvdXQgaW5pdGlhbGl6YXRpb24gKGUuZy4gYEhvc3RgKSBhbmQgYXMgYW4gaW5zdGFuY2UgKGUuZy4gYG5ldyBIb3N0KClgKSwgd2VcbiAqIGF0dGFjaCB0aGUgZmxhZyB0byBtYWtlIGl0IGF2YWlsYWJsZSBib3RoIGFzIGEgc3RhdGljIHByb3BlcnR5IGFuZCBhcyBhIGZpZWxkIG9uIGRlY29yYXRvclxuICogaW5zdGFuY2UuXG4gKlxuICogQHBhcmFtIGRlY29yYXRvciBQcm92aWRlZCBESSBkZWNvcmF0b3IuXG4gKiBAcGFyYW0gZmxhZyBJbmplY3RGbGFnIHRoYXQgc2hvdWxkIGJlIGFwcGxpZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhdHRhY2hJbmplY3RGbGFnKGRlY29yYXRvcjogYW55LCBmbGFnOiBJbnRlcm5hbEluamVjdEZsYWdzIHwgRGVjb3JhdG9yRmxhZ3MpOiBhbnkge1xuICBkZWNvcmF0b3JbRElfREVDT1JBVE9SX0ZMQUddID0gZmxhZztcbiAgZGVjb3JhdG9yLnByb3RvdHlwZVtESV9ERUNPUkFUT1JfRkxBR10gPSBmbGFnO1xuICByZXR1cm4gZGVjb3JhdG9yO1xufVxuXG4vKipcbiAqIFJlYWRzIG1vbmtleS1wYXRjaGVkIHByb3BlcnR5IHRoYXQgY29udGFpbnMgSW5qZWN0RmxhZyBhdHRhY2hlZCB0byBhIGRlY29yYXRvci5cbiAqXG4gKiBAcGFyYW0gdG9rZW4gVG9rZW4gdGhhdCBtYXkgY29udGFpbiBtb25rZXktcGF0Y2hlZCBESSBmbGFncyBwcm9wZXJ0eS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEluamVjdEZsYWcodG9rZW46IGFueSk6IG51bWJlciB8IHVuZGVmaW5lZCB7XG4gIHJldHVybiB0b2tlbltESV9ERUNPUkFUT1JfRkxBR107XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjYXRjaEluamVjdG9yRXJyb3IoXG4gIGU6IGFueSxcbiAgdG9rZW46IGFueSxcbiAgaW5qZWN0b3JFcnJvck5hbWU6IHN0cmluZyxcbiAgc291cmNlOiBzdHJpbmcgfCBudWxsLFxuKTogbmV2ZXIge1xuICBjb25zdCB0b2tlblBhdGg6IGFueVtdID0gZVtOR19URU1QX1RPS0VOX1BBVEhdO1xuICBpZiAodG9rZW5bU09VUkNFXSkge1xuICAgIHRva2VuUGF0aC51bnNoaWZ0KHRva2VuW1NPVVJDRV0pO1xuICB9XG4gIGUubWVzc2FnZSA9IGZvcm1hdEVycm9yKCdcXG4nICsgZS5tZXNzYWdlLCB0b2tlblBhdGgsIGluamVjdG9yRXJyb3JOYW1lLCBzb3VyY2UpO1xuICBlW05HX1RPS0VOX1BBVEhdID0gdG9rZW5QYXRoO1xuICBlW05HX1RFTVBfVE9LRU5fUEFUSF0gPSBudWxsO1xuICB0aHJvdyBlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RXJyb3IoXG4gIHRleHQ6IHN0cmluZyxcbiAgb2JqOiBhbnksXG4gIGluamVjdG9yRXJyb3JOYW1lOiBzdHJpbmcsXG4gIHNvdXJjZTogc3RyaW5nIHwgbnVsbCA9IG51bGwsXG4pOiBzdHJpbmcge1xuICB0ZXh0ID0gdGV4dCAmJiB0ZXh0LmNoYXJBdCgwKSA9PT0gJ1xcbicgJiYgdGV4dC5jaGFyQXQoMSkgPT0gTk9fTkVXX0xJTkUgPyB0ZXh0LnNsaWNlKDIpIDogdGV4dDtcbiAgbGV0IGNvbnRleHQgPSBzdHJpbmdpZnkob2JqKTtcbiAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgIGNvbnRleHQgPSBvYmoubWFwKHN0cmluZ2lmeSkuam9pbignIC0+ICcpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnKSB7XG4gICAgbGV0IHBhcnRzID0gPHN0cmluZ1tdPltdO1xuICAgIGZvciAobGV0IGtleSBpbiBvYmopIHtcbiAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICBsZXQgdmFsdWUgPSBvYmpba2V5XTtcbiAgICAgICAgcGFydHMucHVzaChcbiAgICAgICAgICBrZXkgKyAnOicgKyAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyA/IEpTT04uc3RyaW5naWZ5KHZhbHVlKSA6IHN0cmluZ2lmeSh2YWx1ZSkpLFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBjb250ZXh0ID0gYHske3BhcnRzLmpvaW4oJywgJyl9fWA7XG4gIH1cbiAgcmV0dXJuIGAke2luamVjdG9yRXJyb3JOYW1lfSR7c291cmNlID8gJygnICsgc291cmNlICsgJyknIDogJyd9WyR7Y29udGV4dH1dOiAke3RleHQucmVwbGFjZShcbiAgICBORVdfTElORSxcbiAgICAnXFxuICAnLFxuICApfWA7XG59XG4iXX0=