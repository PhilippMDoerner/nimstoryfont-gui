/**
 * @license Angular v18.2.12
 * (c) 2010-2024 Google LLC. https://angular.io/
 * License: MIT
 */

import * as i0 from '@angular/core';
import { ɵDeferBlockState, ɵtriggerResourceLoading, ɵrenderDeferBlockState, ɵCONTAINER_HEADER_OFFSET, ɵgetDeferBlocks, ɵDeferBlockBehavior, InjectionToken, inject as inject$1, NgZone, ErrorHandler, Injectable, ɵNoopNgZone, ɵEffectScheduler, ApplicationRef, ɵPendingTasks, getDebugNode, RendererFactory2, ɵdetectChangesInViewIfRequired, ɵstringify, ɵReflectionCapabilities, Directive, Component, Pipe, NgModule, ɵgetAsyncClassMetadataFn, ɵgenerateStandaloneInDeclarationsError, ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT, ɵdepsTracker, ɵgetInjectableDef, resolveForwardRef, ɵNG_COMP_DEF, ɵisComponentDefPendingResolution, ɵresolveComponentResources, ɵRender3NgModuleRef, ApplicationInitStatus, LOCALE_ID, ɵDEFAULT_LOCALE_ID, ɵsetLocaleId, ɵRender3ComponentFactory, ɵcompileComponent, ɵNG_DIR_DEF, ɵcompileDirective, ɵNG_PIPE_DEF, ɵcompilePipe, ɵNG_MOD_DEF, ɵtransitiveScopesFor, ɵpatchComponentDefWithScope, ɵNG_INJ_DEF, ɵcompileNgModuleDefs, ɵclearResolutionOfComponentResourcesQueue, ɵrestoreComponentResolutionQueue, ɵinternalProvideZoneChangeDetection, ɵINTERNAL_APPLICATION_ERROR_HANDLER, ɵZONELESS_ENABLED, ɵChangeDetectionScheduler, ɵChangeDetectionSchedulerImpl, Compiler, ɵDEFER_BLOCK_CONFIG, COMPILER_OPTIONS, Injector, ɵisEnvironmentProviders, ɵNgModuleFactory, ModuleWithComponentFactories, ɵconvertToBitFlags, InjectFlags, ɵsetAllowDuplicateNgModuleIdsForTest, ɵresetCompiledComponents, ɵsetUnknownElementStrictMode, ɵsetUnknownPropertyStrictMode, ɵgetUnknownElementStrictMode, ɵgetUnknownPropertyStrictMode, runInInjectionContext, EnvironmentInjector, ɵflushModuleScopingQueueAsMuchAsPossible } from '@angular/core';
export { ɵDeferBlockBehavior as DeferBlockBehavior, ɵDeferBlockState as DeferBlockState } from '@angular/core';
import { Subscription } from 'rxjs';
import { ResourceLoader } from '@angular/compiler';

/**
 * Wraps a test function in an asynchronous test zone. The test will automatically
 * complete when all asynchronous calls within this zone are done. Can be used
 * to wrap an {@link inject} call.
 *
 * Example:
 *
 * ```
 * it('...', waitForAsync(inject([AClass], (object) => {
 *   object.doSomething.then(() => {
 *     expect(...);
 *   })
 * })));
 * ```
 *
 * @publicApi
 */
function waitForAsync(fn) {
    const _Zone = typeof Zone !== 'undefined' ? Zone : null;
    if (!_Zone) {
        return function () {
            return Promise.reject('Zone is needed for the waitForAsync() test helper but could not be found. ' +
                'Please make sure that your environment includes zone.js');
        };
    }
    const asyncTest = _Zone && _Zone[_Zone.__symbol__('asyncTest')];
    if (typeof asyncTest === 'function') {
        return asyncTest(fn);
    }
    return function () {
        return Promise.reject('zone-testing.js is needed for the async() test helper but could not be found. ' +
            'Please make sure that your environment includes zone.js/testing');
    };
}

/**
 * Represents an individual defer block for testing purposes.
 *
 * @publicApi
 */
class DeferBlockFixture {
    /** @nodoc */
    constructor(block, componentFixture) {
        this.block = block;
        this.componentFixture = componentFixture;
    }
    /**
     * Renders the specified state of the defer fixture.
     * @param state the defer state to render
     */
    async render(state) {
        if (!hasStateTemplate(state, this.block)) {
            const stateAsString = getDeferBlockStateNameFromEnum(state);
            throw new Error(`Tried to render this defer block in the \`${stateAsString}\` state, ` +
                `but there was no @${stateAsString.toLowerCase()} block defined in a template.`);
        }
        if (state === ɵDeferBlockState.Complete) {
            await ɵtriggerResourceLoading(this.block.tDetails, this.block.lView, this.block.tNode);
        }
        // If the `render` method is used explicitly - skip timer-based scheduling for
        // `@placeholder` and `@loading` blocks and render them immediately.
        const skipTimerScheduling = true;
        ɵrenderDeferBlockState(state, this.block.tNode, this.block.lContainer, skipTimerScheduling);
        this.componentFixture.detectChanges();
    }
    /**
     * Retrieves all nested child defer block fixtures
     * in a given defer block.
     */
    getDeferBlocks() {
        const deferBlocks = [];
        // An LContainer that represents a defer block has at most 1 view, which is
        // located right after an LContainer header. Get a hold of that view and inspect
        // it for nested defer blocks.
        const deferBlockFixtures = [];
        if (this.block.lContainer.length >= ɵCONTAINER_HEADER_OFFSET) {
            const lView = this.block.lContainer[ɵCONTAINER_HEADER_OFFSET];
            ɵgetDeferBlocks(lView, deferBlocks);
            for (const block of deferBlocks) {
                deferBlockFixtures.push(new DeferBlockFixture(block, this.componentFixture));
            }
        }
        return Promise.resolve(deferBlockFixtures);
    }
}
function hasStateTemplate(state, block) {
    switch (state) {
        case ɵDeferBlockState.Placeholder:
            return block.tDetails.placeholderTmplIndex !== null;
        case ɵDeferBlockState.Loading:
            return block.tDetails.loadingTmplIndex !== null;
        case ɵDeferBlockState.Error:
            return block.tDetails.errorTmplIndex !== null;
        case ɵDeferBlockState.Complete:
            return true;
        default:
            return false;
    }
}
function getDeferBlockStateNameFromEnum(state) {
    switch (state) {
        case ɵDeferBlockState.Placeholder:
            return 'Placeholder';
        case ɵDeferBlockState.Loading:
            return 'Loading';
        case ɵDeferBlockState.Error:
            return 'Error';
        default:
            return 'Main';
    }
}

/** Whether test modules should be torn down by default. */
const TEARDOWN_TESTING_MODULE_ON_DESTROY_DEFAULT = true;
/** Whether unknown elements in templates should throw by default. */
const THROW_ON_UNKNOWN_ELEMENTS_DEFAULT = false;
/** Whether unknown properties in templates should throw by default. */
const THROW_ON_UNKNOWN_PROPERTIES_DEFAULT = false;
/** Whether defer blocks should use manual triggering or play through normally. */
const DEFER_BLOCK_DEFAULT_BEHAVIOR = ɵDeferBlockBehavior.Playthrough;
/**
 * An abstract class for inserting the root test component element in a platform independent way.
 *
 * @publicApi
 */
class TestComponentRenderer {
    insertRootElement(rootElementId) { }
    removeAllRootElements() { }
}
/**
 * @publicApi
 */
const ComponentFixtureAutoDetect = new InjectionToken('ComponentFixtureAutoDetect');
/**
 * @publicApi
 */
const ComponentFixtureNoNgZone = new InjectionToken('ComponentFixtureNoNgZone');

const RETHROW_APPLICATION_ERRORS = new InjectionToken('rethrow application errors');
class TestBedApplicationErrorHandler {
    constructor() {
        this.zone = inject$1(NgZone);
        this.userErrorHandler = inject$1(ErrorHandler);
        this.whenStableRejectFunctions = new Set();
    }
    handleError(e) {
        try {
            this.zone.runOutsideAngular(() => this.userErrorHandler.handleError(e));
        }
        catch (userError) {
            e = userError;
        }
        // Instead of throwing the error when there are outstanding `fixture.whenStable` promises,
        // reject those promises with the error. This allows developers to write
        // expectAsync(fix.whenStable()).toBeRejected();
        if (this.whenStableRejectFunctions.size > 0) {
            for (const fn of this.whenStableRejectFunctions.values()) {
                fn(e);
            }
            this.whenStableRejectFunctions.clear();
        }
        else {
            throw e;
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: TestBedApplicationErrorHandler, deps: [], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: TestBedApplicationErrorHandler }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: TestBedApplicationErrorHandler, decorators: [{
            type: Injectable
        }] });

/**
 * Fixture for debugging and testing a component.
 *
 * @publicApi
 */
class ComponentFixture {
    /** @nodoc */
    constructor(componentRef) {
        this.componentRef = componentRef;
        this._isDestroyed = false;
        /** @internal */
        this._noZoneOptionIsSet = inject$1(ComponentFixtureNoNgZone, { optional: true });
        /** @internal */
        this._ngZone = this._noZoneOptionIsSet ? new ɵNoopNgZone() : inject$1(NgZone);
        /** @internal */
        this._effectRunner = inject$1(ɵEffectScheduler);
        // Inject ApplicationRef to ensure NgZone stableness causes after render hooks to run
        // This will likely happen as a result of fixture.detectChanges because it calls ngZone.run
        // This is a crazy way of doing things but hey, it's the world we live in.
        // The zoneless scheduler should instead do this more imperatively by attaching
        // the `ComponentRef` to `ApplicationRef` and calling `appRef.tick` as the `detectChanges`
        // behavior.
        /** @internal */
        this._appRef = inject$1(ApplicationRef);
        /** @internal */
        this._testAppRef = this._appRef;
        this.pendingTasks = inject$1(ɵPendingTasks);
        this.appErrorHandler = inject$1(TestBedApplicationErrorHandler);
        // TODO(atscott): Remove this from public API
        this.ngZone = this._noZoneOptionIsSet ? null : this._ngZone;
        this.changeDetectorRef = componentRef.changeDetectorRef;
        this.elementRef = componentRef.location;
        this.debugElement = getDebugNode(this.elementRef.nativeElement);
        this.componentInstance = componentRef.instance;
        this.nativeElement = this.elementRef.nativeElement;
        this.componentRef = componentRef;
    }
    /**
     * Do a change detection run to make sure there were no changes.
     */
    checkNoChanges() {
        this.changeDetectorRef.checkNoChanges();
    }
    /**
     * Return whether the fixture is currently stable or has async tasks that have not been completed
     * yet.
     */
    isStable() {
        return !this.pendingTasks.hasPendingTasks.value;
    }
    /**
     * Get a promise that resolves when the fixture is stable.
     *
     * This can be used to resume testing after events have triggered asynchronous activity or
     * asynchronous change detection.
     */
    whenStable() {
        if (this.isStable()) {
            return Promise.resolve(false);
        }
        return new Promise((resolve, reject) => {
            this.appErrorHandler.whenStableRejectFunctions.add(reject);
            this._appRef.whenStable().then(() => {
                this.appErrorHandler.whenStableRejectFunctions.delete(reject);
                resolve(true);
            });
        });
    }
    /**
     * Retrieves all defer block fixtures in the component fixture.
     */
    getDeferBlocks() {
        const deferBlocks = [];
        const lView = this.componentRef.hostView['_lView'];
        ɵgetDeferBlocks(lView, deferBlocks);
        const deferBlockFixtures = [];
        for (const block of deferBlocks) {
            deferBlockFixtures.push(new DeferBlockFixture(block, this));
        }
        return Promise.resolve(deferBlockFixtures);
    }
    _getRenderer() {
        if (this._renderer === undefined) {
            this._renderer = this.componentRef.injector.get(RendererFactory2, null);
        }
        return this._renderer;
    }
    /**
     * Get a promise that resolves when the ui state is stable following animations.
     */
    whenRenderingDone() {
        const renderer = this._getRenderer();
        if (renderer && renderer.whenRenderingDone) {
            return renderer.whenRenderingDone();
        }
        return this.whenStable();
    }
    /**
     * Trigger component destruction.
     */
    destroy() {
        if (!this._isDestroyed) {
            this.componentRef.destroy();
            this._isDestroyed = true;
        }
    }
}
/**
 * ComponentFixture behavior that actually attaches the component to the application to ensure
 * behaviors between fixture and application do not diverge. `detectChanges` is disabled by default
 * (instead, tests should wait for the scheduler to detect changes), `whenStable` is directly the
 * `ApplicationRef.isStable`, and `autoDetectChanges` cannot be disabled.
 */
class ScheduledComponentFixture extends ComponentFixture {
    constructor() {
        super(...arguments);
        this._autoDetect = inject$1(ComponentFixtureAutoDetect, { optional: true }) ?? true;
    }
    initialize() {
        if (this._autoDetect) {
            this._appRef.attachView(this.componentRef.hostView);
        }
    }
    detectChanges(checkNoChanges = true) {
        if (!checkNoChanges) {
            throw new Error('Cannot disable `checkNoChanges` in this configuration. ' +
                'Use `fixture.componentRef.hostView.changeDetectorRef.detectChanges()` instead.');
        }
        this._effectRunner.flush();
        this._appRef.tick();
        this._effectRunner.flush();
    }
    autoDetectChanges(autoDetect = true) {
        if (!autoDetect) {
            throw new Error('Cannot disable autoDetect after it has been enabled when using the zoneless scheduler. ' +
                'To disable autoDetect, add `{provide: ComponentFixtureAutoDetect, useValue: false}` to the TestBed providers.');
        }
        else if (!this._autoDetect) {
            this._autoDetect = autoDetect;
            this._appRef.attachView(this.componentRef.hostView);
        }
        this.detectChanges();
    }
}
/**
 * ComponentFixture behavior that attempts to act as a "mini application".
 */
class PseudoApplicationComponentFixture extends ComponentFixture {
    constructor() {
        super(...arguments);
        this._subscriptions = new Subscription();
        this._autoDetect = inject$1(ComponentFixtureAutoDetect, { optional: true }) ?? false;
        this.afterTickSubscription = undefined;
        this.beforeRenderSubscription = undefined;
    }
    initialize() {
        if (this._autoDetect) {
            this.subscribeToAppRefEvents();
        }
        this.componentRef.hostView.onDestroy(() => {
            this.unsubscribeFromAppRefEvents();
        });
        // Create subscriptions outside the NgZone so that the callbacks run outside
        // of NgZone.
        this._ngZone.runOutsideAngular(() => {
            this._subscriptions.add(this._ngZone.onError.subscribe({
                next: (error) => {
                    throw error;
                },
            }));
        });
    }
    detectChanges(checkNoChanges = true) {
        this._effectRunner.flush();
        // Run the change detection inside the NgZone so that any async tasks as part of the change
        // detection are captured by the zone and can be waited for in isStable.
        this._ngZone.run(() => {
            this.changeDetectorRef.detectChanges();
            if (checkNoChanges) {
                this.checkNoChanges();
            }
        });
        // Run any effects that were created/dirtied during change detection. Such effects might become
        // dirty in response to input signals changing.
        this._effectRunner.flush();
    }
    autoDetectChanges(autoDetect = true) {
        if (this._noZoneOptionIsSet) {
            throw new Error('Cannot call autoDetectChanges when ComponentFixtureNoNgZone is set.');
        }
        if (autoDetect !== this._autoDetect) {
            if (autoDetect) {
                this.subscribeToAppRefEvents();
            }
            else {
                this.unsubscribeFromAppRefEvents();
            }
        }
        this._autoDetect = autoDetect;
        this.detectChanges();
    }
    subscribeToAppRefEvents() {
        this._ngZone.runOutsideAngular(() => {
            this.afterTickSubscription = this._testAppRef.afterTick.subscribe(() => {
                this.checkNoChanges();
            });
            this.beforeRenderSubscription = this._testAppRef.beforeRender.subscribe((isFirstPass) => {
                try {
                    ɵdetectChangesInViewIfRequired(this.componentRef.hostView._lView, this.componentRef.hostView.notifyErrorHandler, isFirstPass, false /** zoneless enabled */);
                }
                catch (e) {
                    // If an error occurred during change detection, remove the test view from the application
                    // ref tracking. Note that this isn't exactly desirable but done this way because of how
                    // things used to work with `autoDetect` and uncaught errors. Ideally we would surface
                    // this error to the error handler instead and continue refreshing the view like
                    // what would happen in the application.
                    this.unsubscribeFromAppRefEvents();
                    throw e;
                }
            });
            this._testAppRef.externalTestViews.add(this.componentRef.hostView);
        });
    }
    unsubscribeFromAppRefEvents() {
        this.afterTickSubscription?.unsubscribe();
        this.beforeRenderSubscription?.unsubscribe();
        this.afterTickSubscription = undefined;
        this.beforeRenderSubscription = undefined;
        this._testAppRef.externalTestViews.delete(this.componentRef.hostView);
    }
    destroy() {
        this.unsubscribeFromAppRefEvents();
        this._subscriptions.unsubscribe();
        super.destroy();
    }
}

const _Zone = typeof Zone !== 'undefined' ? Zone : null;
const fakeAsyncTestModule = _Zone && _Zone[_Zone.__symbol__('fakeAsyncTest')];
const fakeAsyncTestModuleNotLoadedErrorMessage = `zone-testing.js is needed for the fakeAsync() test helper but could not be found.
        Please make sure that your environment includes zone.js/testing`;
/**
 * Clears out the shared fake async zone for a test.
 * To be called in a global `beforeEach`.
 *
 * @publicApi
 */
function resetFakeAsyncZone() {
    if (fakeAsyncTestModule) {
        return fakeAsyncTestModule.resetFakeAsyncZone();
    }
    throw new Error(fakeAsyncTestModuleNotLoadedErrorMessage);
}
function resetFakeAsyncZoneIfExists() {
    if (fakeAsyncTestModule) {
        fakeAsyncTestModule.resetFakeAsyncZone();
    }
}
/**
 * Wraps a function to be executed in the `fakeAsync` zone:
 * - Microtasks are manually executed by calling `flushMicrotasks()`.
 * - Timers are synchronous; `tick()` simulates the asynchronous passage of time.
 *
 * Can be used to wrap `inject()` calls.
 *
 * @param fn The function that you want to wrap in the `fakeAsync` zone.
 * @param options
 *   - flush: When true, will drain the macrotask queue after the test function completes.
 *     When false, will throw an exception at the end of the function if there are pending timers.
 *
 * @usageNotes
 * ### Example
 *
 * {@example core/testing/ts/fake_async.ts region='basic'}
 *
 *
 * @returns The function wrapped to be executed in the `fakeAsync` zone.
 * Any arguments passed when calling this returned function will be passed through to the `fn`
 * function in the parameters when it is called.
 *
 * @publicApi
 */
function fakeAsync(fn, options) {
    if (fakeAsyncTestModule) {
        return fakeAsyncTestModule.fakeAsync(fn, options);
    }
    throw new Error(fakeAsyncTestModuleNotLoadedErrorMessage);
}
/**
 * Simulates the asynchronous passage of time for the timers in the `fakeAsync` zone.
 *
 * The microtasks queue is drained at the very start of this function and after any timer callback
 * has been executed.
 *
 * @param millis The number of milliseconds to advance the virtual timer.
 * @param tickOptions The options to pass to the `tick()` function.
 *
 * @usageNotes
 *
 * The `tick()` option is a flag called `processNewMacroTasksSynchronously`,
 * which determines whether or not to invoke new macroTasks.
 *
 * If you provide a `tickOptions` object, but do not specify a
 * `processNewMacroTasksSynchronously` property (`tick(100, {})`),
 * then `processNewMacroTasksSynchronously` defaults to true.
 *
 * If you omit the `tickOptions` parameter (`tick(100))`), then
 * `tickOptions` defaults to `{processNewMacroTasksSynchronously: true}`.
 *
 * ### Example
 *
 * {@example core/testing/ts/fake_async.ts region='basic'}
 *
 * The following example includes a nested timeout (new macroTask), and
 * the `tickOptions` parameter is allowed to default. In this case,
 * `processNewMacroTasksSynchronously` defaults to true, and the nested
 * function is executed on each tick.
 *
 * ```
 * it ('test with nested setTimeout', fakeAsync(() => {
 *   let nestedTimeoutInvoked = false;
 *   function funcWithNestedTimeout() {
 *     setTimeout(() => {
 *       nestedTimeoutInvoked = true;
 *     });
 *   };
 *   setTimeout(funcWithNestedTimeout);
 *   tick();
 *   expect(nestedTimeoutInvoked).toBe(true);
 * }));
 * ```
 *
 * In the following case, `processNewMacroTasksSynchronously` is explicitly
 * set to false, so the nested timeout function is not invoked.
 *
 * ```
 * it ('test with nested setTimeout', fakeAsync(() => {
 *   let nestedTimeoutInvoked = false;
 *   function funcWithNestedTimeout() {
 *     setTimeout(() => {
 *       nestedTimeoutInvoked = true;
 *     });
 *   };
 *   setTimeout(funcWithNestedTimeout);
 *   tick(0, {processNewMacroTasksSynchronously: false});
 *   expect(nestedTimeoutInvoked).toBe(false);
 * }));
 * ```
 *
 *
 * @publicApi
 */
function tick(millis = 0, tickOptions = {
    processNewMacroTasksSynchronously: true,
}) {
    if (fakeAsyncTestModule) {
        return fakeAsyncTestModule.tick(millis, tickOptions);
    }
    throw new Error(fakeAsyncTestModuleNotLoadedErrorMessage);
}
/**
 * Flushes any pending microtasks and simulates the asynchronous passage of time for the timers in
 * the `fakeAsync` zone by
 * draining the macrotask queue until it is empty.
 *
 * @param maxTurns The maximum number of times the scheduler attempts to clear its queue before
 *     throwing an error.
 * @returns The simulated time elapsed, in milliseconds.
 *
 * @publicApi
 */
function flush(maxTurns) {
    if (fakeAsyncTestModule) {
        return fakeAsyncTestModule.flush(maxTurns);
    }
    throw new Error(fakeAsyncTestModuleNotLoadedErrorMessage);
}
/**
 * Discard all remaining periodic tasks.
 *
 * @publicApi
 */
function discardPeriodicTasks() {
    if (fakeAsyncTestModule) {
        return fakeAsyncTestModule.discardPeriodicTasks();
    }
    throw new Error(fakeAsyncTestModuleNotLoadedErrorMessage);
}
/**
 * Flush any pending microtasks.
 *
 * @publicApi
 */
function flushMicrotasks() {
    if (fakeAsyncTestModule) {
        return fakeAsyncTestModule.flushMicrotasks();
    }
    throw new Error(fakeAsyncTestModuleNotLoadedErrorMessage);
}

let _nextReferenceId = 0;
class MetadataOverrider {
    constructor() {
        this._references = new Map();
    }
    /**
     * Creates a new instance for the given metadata class
     * based on an old instance and overrides.
     */
    overrideMetadata(metadataClass, oldMetadata, override) {
        const props = {};
        if (oldMetadata) {
            _valueProps(oldMetadata).forEach((prop) => (props[prop] = oldMetadata[prop]));
        }
        if (override.set) {
            if (override.remove || override.add) {
                throw new Error(`Cannot set and add/remove ${ɵstringify(metadataClass)} at the same time!`);
            }
            setMetadata(props, override.set);
        }
        if (override.remove) {
            removeMetadata(props, override.remove, this._references);
        }
        if (override.add) {
            addMetadata(props, override.add);
        }
        return new metadataClass(props);
    }
}
function removeMetadata(metadata, remove, references) {
    const removeObjects = new Set();
    for (const prop in remove) {
        const removeValue = remove[prop];
        if (Array.isArray(removeValue)) {
            removeValue.forEach((value) => {
                removeObjects.add(_propHashKey(prop, value, references));
            });
        }
        else {
            removeObjects.add(_propHashKey(prop, removeValue, references));
        }
    }
    for (const prop in metadata) {
        const propValue = metadata[prop];
        if (Array.isArray(propValue)) {
            metadata[prop] = propValue.filter((value) => !removeObjects.has(_propHashKey(prop, value, references)));
        }
        else {
            if (removeObjects.has(_propHashKey(prop, propValue, references))) {
                metadata[prop] = undefined;
            }
        }
    }
}
function addMetadata(metadata, add) {
    for (const prop in add) {
        const addValue = add[prop];
        const propValue = metadata[prop];
        if (propValue != null && Array.isArray(propValue)) {
            metadata[prop] = propValue.concat(addValue);
        }
        else {
            metadata[prop] = addValue;
        }
    }
}
function setMetadata(metadata, set) {
    for (const prop in set) {
        metadata[prop] = set[prop];
    }
}
function _propHashKey(propName, propValue, references) {
    let nextObjectId = 0;
    const objectIds = new Map();
    const replacer = (key, value) => {
        if (value !== null && typeof value === 'object') {
            if (objectIds.has(value)) {
                return objectIds.get(value);
            }
            // Record an id for this object such that any later references use the object's id instead
            // of the object itself, in order to break cyclic pointers in objects.
            objectIds.set(value, `ɵobj#${nextObjectId++}`);
            // The first time an object is seen the object itself is serialized.
            return value;
        }
        else if (typeof value === 'function') {
            value = _serializeReference(value, references);
        }
        return value;
    };
    return `${propName}:${JSON.stringify(propValue, replacer)}`;
}
function _serializeReference(ref, references) {
    let id = references.get(ref);
    if (!id) {
        id = `${ɵstringify(ref)}${_nextReferenceId++}`;
        references.set(ref, id);
    }
    return id;
}
function _valueProps(obj) {
    const props = [];
    // regular public props
    Object.keys(obj).forEach((prop) => {
        if (!prop.startsWith('_')) {
            props.push(prop);
        }
    });
    // getters
    let proto = obj;
    while ((proto = Object.getPrototypeOf(proto))) {
        Object.keys(proto).forEach((protoProp) => {
            const desc = Object.getOwnPropertyDescriptor(proto, protoProp);
            if (!protoProp.startsWith('_') && desc && 'get' in desc) {
                props.push(protoProp);
            }
        });
    }
    return props;
}

const reflection = new ɵReflectionCapabilities();
/**
 * Allows to override ivy metadata for tests (via the `TestBed`).
 */
class OverrideResolver {
    constructor() {
        this.overrides = new Map();
        this.resolved = new Map();
    }
    addOverride(type, override) {
        const overrides = this.overrides.get(type) || [];
        overrides.push(override);
        this.overrides.set(type, overrides);
        this.resolved.delete(type);
    }
    setOverrides(overrides) {
        this.overrides.clear();
        overrides.forEach(([type, override]) => {
            this.addOverride(type, override);
        });
    }
    getAnnotation(type) {
        const annotations = reflection.annotations(type);
        // Try to find the nearest known Type annotation and make sure that this annotation is an
        // instance of the type we are looking for, so we can use it for resolution. Note: there might
        // be multiple known annotations found due to the fact that Components can extend Directives (so
        // both Directive and Component annotations would be present), so we always check if the known
        // annotation has the right type.
        for (let i = annotations.length - 1; i >= 0; i--) {
            const annotation = annotations[i];
            const isKnownType = annotation instanceof Directive ||
                annotation instanceof Component ||
                annotation instanceof Pipe ||
                annotation instanceof NgModule;
            if (isKnownType) {
                return annotation instanceof this.type ? annotation : null;
            }
        }
        return null;
    }
    resolve(type) {
        let resolved = this.resolved.get(type) || null;
        if (!resolved) {
            resolved = this.getAnnotation(type);
            if (resolved) {
                const overrides = this.overrides.get(type);
                if (overrides) {
                    const overrider = new MetadataOverrider();
                    overrides.forEach((override) => {
                        resolved = overrider.overrideMetadata(this.type, resolved, override);
                    });
                }
            }
            this.resolved.set(type, resolved);
        }
        return resolved;
    }
}
class DirectiveResolver extends OverrideResolver {
    get type() {
        return Directive;
    }
}
class ComponentResolver extends OverrideResolver {
    get type() {
        return Component;
    }
}
class PipeResolver extends OverrideResolver {
    get type() {
        return Pipe;
    }
}
class NgModuleResolver extends OverrideResolver {
    get type() {
        return NgModule;
    }
}

var TestingModuleOverride;
(function (TestingModuleOverride) {
    TestingModuleOverride[TestingModuleOverride["DECLARATION"] = 0] = "DECLARATION";
    TestingModuleOverride[TestingModuleOverride["OVERRIDE_TEMPLATE"] = 1] = "OVERRIDE_TEMPLATE";
})(TestingModuleOverride || (TestingModuleOverride = {}));
function isTestingModuleOverride(value) {
    return (value === TestingModuleOverride.DECLARATION || value === TestingModuleOverride.OVERRIDE_TEMPLATE);
}
function assertNoStandaloneComponents(types, resolver, location) {
    types.forEach((type) => {
        if (!ɵgetAsyncClassMetadataFn(type)) {
            const component = resolver.resolve(type);
            if (component && component.standalone) {
                throw new Error(ɵgenerateStandaloneInDeclarationsError(type, location));
            }
        }
    });
}
class TestBedCompiler {
    constructor(platform, additionalModuleTypes) {
        this.platform = platform;
        this.additionalModuleTypes = additionalModuleTypes;
        this.originalComponentResolutionQueue = null;
        // Testing module configuration
        this.declarations = [];
        this.imports = [];
        this.providers = [];
        this.schemas = [];
        // Queues of components/directives/pipes that should be recompiled.
        this.pendingComponents = new Set();
        this.pendingDirectives = new Set();
        this.pendingPipes = new Set();
        // Set of components with async metadata, i.e. components with `@defer` blocks
        // in their templates.
        this.componentsWithAsyncMetadata = new Set();
        // Keep track of all components and directives, so we can patch Providers onto defs later.
        this.seenComponents = new Set();
        this.seenDirectives = new Set();
        // Keep track of overridden modules, so that we can collect all affected ones in the module tree.
        this.overriddenModules = new Set();
        // Store resolved styles for Components that have template overrides present and `styleUrls`
        // defined at the same time.
        this.existingComponentStyles = new Map();
        this.resolvers = initResolvers();
        // Map of component type to an NgModule that declares it.
        //
        // There are a couple special cases:
        // - for standalone components, the module scope value is `null`
        // - when a component is declared in `TestBed.configureTestingModule()` call or
        //   a component's template is overridden via `TestBed.overrideTemplateUsingTestingModule()`.
        //   we use a special value from the `TestingModuleOverride` enum.
        this.componentToModuleScope = new Map();
        // Map that keeps initial version of component/directive/pipe defs in case
        // we compile a Type again, thus overriding respective static fields. This is
        // required to make sure we restore defs to their initial states between test runs.
        // Note: one class may have multiple defs (for example: ɵmod and ɵinj in case of an
        // NgModule), store all of them in a map.
        this.initialNgDefs = new Map();
        // Array that keeps cleanup operations for initial versions of component/directive/pipe/module
        // defs in case TestBed makes changes to the originals.
        this.defCleanupOps = [];
        this._injector = null;
        this.compilerProviders = null;
        this.providerOverrides = [];
        this.rootProviderOverrides = [];
        // Overrides for injectables with `{providedIn: SomeModule}` need to be tracked and added to that
        // module's provider list.
        this.providerOverridesByModule = new Map();
        this.providerOverridesByToken = new Map();
        this.scopesWithOverriddenProviders = new Set();
        this.testModuleRef = null;
        this.deferBlockBehavior = DEFER_BLOCK_DEFAULT_BEHAVIOR;
        class DynamicTestModule {
        }
        this.testModuleType = DynamicTestModule;
    }
    setCompilerProviders(providers) {
        this.compilerProviders = providers;
        this._injector = null;
    }
    configureTestingModule(moduleDef) {
        // Enqueue any compilation tasks for the directly declared component.
        if (moduleDef.declarations !== undefined) {
            // Verify that there are no standalone components
            assertNoStandaloneComponents(moduleDef.declarations, this.resolvers.component, '"TestBed.configureTestingModule" call');
            this.queueTypeArray(moduleDef.declarations, TestingModuleOverride.DECLARATION);
            this.declarations.push(...moduleDef.declarations);
        }
        // Enqueue any compilation tasks for imported modules.
        if (moduleDef.imports !== undefined) {
            this.queueTypesFromModulesArray(moduleDef.imports);
            this.imports.push(...moduleDef.imports);
        }
        if (moduleDef.providers !== undefined) {
            this.providers.push(...moduleDef.providers);
        }
        this.providers.push({
            provide: RETHROW_APPLICATION_ERRORS,
            useValue: moduleDef._rethrowApplicationTickErrors ?? false,
        });
        if (moduleDef.schemas !== undefined) {
            this.schemas.push(...moduleDef.schemas);
        }
        this.deferBlockBehavior = moduleDef.deferBlockBehavior ?? DEFER_BLOCK_DEFAULT_BEHAVIOR;
    }
    overrideModule(ngModule, override) {
        if (ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT) {
            ɵdepsTracker.clearScopeCacheFor(ngModule);
        }
        this.overriddenModules.add(ngModule);
        // Compile the module right away.
        this.resolvers.module.addOverride(ngModule, override);
        const metadata = this.resolvers.module.resolve(ngModule);
        if (metadata === null) {
            throw invalidTypeError(ngModule.name, 'NgModule');
        }
        this.recompileNgModule(ngModule, metadata);
        // At this point, the module has a valid module def (ɵmod), but the override may have introduced
        // new declarations or imported modules. Ingest any possible new types and add them to the
        // current queue.
        this.queueTypesFromModulesArray([ngModule]);
    }
    overrideComponent(component, override) {
        this.verifyNoStandaloneFlagOverrides(component, override);
        this.resolvers.component.addOverride(component, override);
        this.pendingComponents.add(component);
        // If this is a component with async metadata (i.e. a component with a `@defer` block
        // in a template) - store it for future processing.
        this.maybeRegisterComponentWithAsyncMetadata(component);
    }
    overrideDirective(directive, override) {
        this.verifyNoStandaloneFlagOverrides(directive, override);
        this.resolvers.directive.addOverride(directive, override);
        this.pendingDirectives.add(directive);
    }
    overridePipe(pipe, override) {
        this.verifyNoStandaloneFlagOverrides(pipe, override);
        this.resolvers.pipe.addOverride(pipe, override);
        this.pendingPipes.add(pipe);
    }
    verifyNoStandaloneFlagOverrides(type, override) {
        if (override.add?.hasOwnProperty('standalone') ||
            override.set?.hasOwnProperty('standalone') ||
            override.remove?.hasOwnProperty('standalone')) {
            throw new Error(`An override for the ${type.name} class has the \`standalone\` flag. ` +
                `Changing the \`standalone\` flag via TestBed overrides is not supported.`);
        }
    }
    overrideProvider(token, provider) {
        let providerDef;
        if (provider.useFactory !== undefined) {
            providerDef = {
                provide: token,
                useFactory: provider.useFactory,
                deps: provider.deps || [],
                multi: provider.multi,
            };
        }
        else if (provider.useValue !== undefined) {
            providerDef = { provide: token, useValue: provider.useValue, multi: provider.multi };
        }
        else {
            providerDef = { provide: token };
        }
        const injectableDef = typeof token !== 'string' ? ɵgetInjectableDef(token) : null;
        const providedIn = injectableDef === null ? null : resolveForwardRef(injectableDef.providedIn);
        const overridesBucket = providedIn === 'root' ? this.rootProviderOverrides : this.providerOverrides;
        overridesBucket.push(providerDef);
        // Keep overrides grouped by token as well for fast lookups using token
        this.providerOverridesByToken.set(token, providerDef);
        if (injectableDef !== null && providedIn !== null && typeof providedIn !== 'string') {
            const existingOverrides = this.providerOverridesByModule.get(providedIn);
            if (existingOverrides !== undefined) {
                existingOverrides.push(providerDef);
            }
            else {
                this.providerOverridesByModule.set(providedIn, [providerDef]);
            }
        }
    }
    overrideTemplateUsingTestingModule(type, template) {
        const def = type[ɵNG_COMP_DEF];
        const hasStyleUrls = () => {
            const metadata = this.resolvers.component.resolve(type);
            return !!metadata.styleUrl || !!metadata.styleUrls?.length;
        };
        const overrideStyleUrls = !!def && !ɵisComponentDefPendingResolution(type) && hasStyleUrls();
        // In Ivy, compiling a component does not require knowing the module providing the
        // component's scope, so overrideTemplateUsingTestingModule can be implemented purely via
        // overrideComponent. Important: overriding template requires full Component re-compilation,
        // which may fail in case styleUrls are also present (thus Component is considered as required
        // resolution). In order to avoid this, we preemptively set styleUrls to an empty array,
        // preserve current styles available on Component def and restore styles back once compilation
        // is complete.
        const override = overrideStyleUrls
            ? { template, styles: [], styleUrls: [], styleUrl: undefined }
            : { template };
        this.overrideComponent(type, { set: override });
        if (overrideStyleUrls && def.styles && def.styles.length > 0) {
            this.existingComponentStyles.set(type, def.styles);
        }
        // Set the component's scope to be the testing module.
        this.componentToModuleScope.set(type, TestingModuleOverride.OVERRIDE_TEMPLATE);
    }
    async resolvePendingComponentsWithAsyncMetadata() {
        if (this.componentsWithAsyncMetadata.size === 0)
            return;
        const promises = [];
        for (const component of this.componentsWithAsyncMetadata) {
            const asyncMetadataFn = ɵgetAsyncClassMetadataFn(component);
            if (asyncMetadataFn) {
                promises.push(asyncMetadataFn());
            }
        }
        this.componentsWithAsyncMetadata.clear();
        const resolvedDeps = await Promise.all(promises);
        const flatResolvedDeps = resolvedDeps.flat(2);
        this.queueTypesFromModulesArray(flatResolvedDeps);
        // Loaded standalone components might contain imports of NgModules
        // with providers, make sure we override providers there too.
        for (const component of flatResolvedDeps) {
            this.applyProviderOverridesInScope(component);
        }
    }
    async compileComponents() {
        this.clearComponentResolutionQueue();
        // Wait for all async metadata for components that were
        // overridden, we need resolved metadata to perform an override
        // and re-compile a component.
        await this.resolvePendingComponentsWithAsyncMetadata();
        // Verify that there were no standalone components present in the `declarations` field
        // during the `TestBed.configureTestingModule` call. We perform this check here in addition
        // to the logic in the `configureTestingModule` function, since at this point we have
        // all async metadata resolved.
        assertNoStandaloneComponents(this.declarations, this.resolvers.component, '"TestBed.configureTestingModule" call');
        // Run compilers for all queued types.
        let needsAsyncResources = this.compileTypesSync();
        // compileComponents() should not be async unless it needs to be.
        if (needsAsyncResources) {
            let resourceLoader;
            let resolver = (url) => {
                if (!resourceLoader) {
                    resourceLoader = this.injector.get(ResourceLoader);
                }
                return Promise.resolve(resourceLoader.get(url));
            };
            await ɵresolveComponentResources(resolver);
        }
    }
    finalize() {
        // One last compile
        this.compileTypesSync();
        // Create the testing module itself.
        this.compileTestModule();
        this.applyTransitiveScopes();
        this.applyProviderOverrides();
        // Patch previously stored `styles` Component values (taken from ɵcmp), in case these
        // Components have `styleUrls` fields defined and template override was requested.
        this.patchComponentsWithExistingStyles();
        // Clear the componentToModuleScope map, so that future compilations don't reset the scope of
        // every component.
        this.componentToModuleScope.clear();
        const parentInjector = this.platform.injector;
        this.testModuleRef = new ɵRender3NgModuleRef(this.testModuleType, parentInjector, []);
        // ApplicationInitStatus.runInitializers() is marked @internal to core.
        // Cast it to any before accessing it.
        this.testModuleRef.injector.get(ApplicationInitStatus).runInitializers();
        // Set locale ID after running app initializers, since locale information might be updated while
        // running initializers. This is also consistent with the execution order while bootstrapping an
        // app (see `packages/core/src/application_ref.ts` file).
        const localeId = this.testModuleRef.injector.get(LOCALE_ID, ɵDEFAULT_LOCALE_ID);
        ɵsetLocaleId(localeId);
        return this.testModuleRef;
    }
    /**
     * @internal
     */
    _compileNgModuleSync(moduleType) {
        this.queueTypesFromModulesArray([moduleType]);
        this.compileTypesSync();
        this.applyProviderOverrides();
        this.applyProviderOverridesInScope(moduleType);
        this.applyTransitiveScopes();
    }
    /**
     * @internal
     */
    async _compileNgModuleAsync(moduleType) {
        this.queueTypesFromModulesArray([moduleType]);
        await this.compileComponents();
        this.applyProviderOverrides();
        this.applyProviderOverridesInScope(moduleType);
        this.applyTransitiveScopes();
    }
    /**
     * @internal
     */
    _getModuleResolver() {
        return this.resolvers.module;
    }
    /**
     * @internal
     */
    _getComponentFactories(moduleType) {
        return maybeUnwrapFn(moduleType.ɵmod.declarations).reduce((factories, declaration) => {
            const componentDef = declaration.ɵcmp;
            componentDef && factories.push(new ɵRender3ComponentFactory(componentDef, this.testModuleRef));
            return factories;
        }, []);
    }
    compileTypesSync() {
        // Compile all queued components, directives, pipes.
        let needsAsyncResources = false;
        this.pendingComponents.forEach((declaration) => {
            if (ɵgetAsyncClassMetadataFn(declaration)) {
                throw new Error(`Component '${declaration.name}' has unresolved metadata. ` +
                    `Please call \`await TestBed.compileComponents()\` before running this test.`);
            }
            needsAsyncResources = needsAsyncResources || ɵisComponentDefPendingResolution(declaration);
            const metadata = this.resolvers.component.resolve(declaration);
            if (metadata === null) {
                throw invalidTypeError(declaration.name, 'Component');
            }
            this.maybeStoreNgDef(ɵNG_COMP_DEF, declaration);
            if (ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT) {
                ɵdepsTracker.clearScopeCacheFor(declaration);
            }
            ɵcompileComponent(declaration, metadata);
        });
        this.pendingComponents.clear();
        this.pendingDirectives.forEach((declaration) => {
            const metadata = this.resolvers.directive.resolve(declaration);
            if (metadata === null) {
                throw invalidTypeError(declaration.name, 'Directive');
            }
            this.maybeStoreNgDef(ɵNG_DIR_DEF, declaration);
            ɵcompileDirective(declaration, metadata);
        });
        this.pendingDirectives.clear();
        this.pendingPipes.forEach((declaration) => {
            const metadata = this.resolvers.pipe.resolve(declaration);
            if (metadata === null) {
                throw invalidTypeError(declaration.name, 'Pipe');
            }
            this.maybeStoreNgDef(ɵNG_PIPE_DEF, declaration);
            ɵcompilePipe(declaration, metadata);
        });
        this.pendingPipes.clear();
        return needsAsyncResources;
    }
    applyTransitiveScopes() {
        if (this.overriddenModules.size > 0) {
            // Module overrides (via `TestBed.overrideModule`) might affect scopes that were previously
            // calculated and stored in `transitiveCompileScopes`. If module overrides are present,
            // collect all affected modules and reset scopes to force their re-calculation.
            const testingModuleDef = this.testModuleType[ɵNG_MOD_DEF];
            const affectedModules = this.collectModulesAffectedByOverrides(testingModuleDef.imports);
            if (affectedModules.size > 0) {
                affectedModules.forEach((moduleType) => {
                    if (!ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT) {
                        this.storeFieldOfDefOnType(moduleType, ɵNG_MOD_DEF, 'transitiveCompileScopes');
                        moduleType[ɵNG_MOD_DEF].transitiveCompileScopes = null;
                    }
                    else {
                        ɵdepsTracker.clearScopeCacheFor(moduleType);
                    }
                });
            }
        }
        const moduleToScope = new Map();
        const getScopeOfModule = (moduleType) => {
            if (!moduleToScope.has(moduleType)) {
                const isTestingModule = isTestingModuleOverride(moduleType);
                const realType = isTestingModule ? this.testModuleType : moduleType;
                moduleToScope.set(moduleType, ɵtransitiveScopesFor(realType));
            }
            return moduleToScope.get(moduleType);
        };
        this.componentToModuleScope.forEach((moduleType, componentType) => {
            if (moduleType !== null) {
                const moduleScope = getScopeOfModule(moduleType);
                this.storeFieldOfDefOnType(componentType, ɵNG_COMP_DEF, 'directiveDefs');
                this.storeFieldOfDefOnType(componentType, ɵNG_COMP_DEF, 'pipeDefs');
                ɵpatchComponentDefWithScope(getComponentDef(componentType), moduleScope);
            }
            // `tView` that is stored on component def contains information about directives and pipes
            // that are in the scope of this component. Patching component scope will cause `tView` to be
            // changed. Store original `tView` before patching scope, so the `tView` (including scope
            // information) is restored back to its previous/original state before running next test.
            // Resetting `tView` is also needed for cases when we apply provider overrides and those
            // providers are defined on component's level, in which case they may end up included into
            // `tView.blueprint`.
            this.storeFieldOfDefOnType(componentType, ɵNG_COMP_DEF, 'tView');
        });
        this.componentToModuleScope.clear();
    }
    applyProviderOverrides() {
        const maybeApplyOverrides = (field) => (type) => {
            const resolver = field === ɵNG_COMP_DEF ? this.resolvers.component : this.resolvers.directive;
            const metadata = resolver.resolve(type);
            if (this.hasProviderOverrides(metadata.providers)) {
                this.patchDefWithProviderOverrides(type, field);
            }
        };
        this.seenComponents.forEach(maybeApplyOverrides(ɵNG_COMP_DEF));
        this.seenDirectives.forEach(maybeApplyOverrides(ɵNG_DIR_DEF));
        this.seenComponents.clear();
        this.seenDirectives.clear();
    }
    /**
     * Applies provider overrides to a given type (either an NgModule or a standalone component)
     * and all imported NgModules and standalone components recursively.
     */
    applyProviderOverridesInScope(type) {
        const hasScope = isStandaloneComponent(type) || isNgModule(type);
        // The function can be re-entered recursively while inspecting dependencies
        // of an NgModule or a standalone component. Exit early if we come across a
        // type that can not have a scope (directive or pipe) or the type is already
        // processed earlier.
        if (!hasScope || this.scopesWithOverriddenProviders.has(type)) {
            return;
        }
        this.scopesWithOverriddenProviders.add(type);
        // NOTE: the line below triggers JIT compilation of the module injector,
        // which also invokes verification of the NgModule semantics, which produces
        // detailed error messages. The fact that the code relies on this line being
        // present here is suspicious and should be refactored in a way that the line
        // below can be moved (for ex. after an early exit check below).
        const injectorDef = type[ɵNG_INJ_DEF];
        // No provider overrides, exit early.
        if (this.providerOverridesByToken.size === 0)
            return;
        if (isStandaloneComponent(type)) {
            // Visit all component dependencies and override providers there.
            const def = getComponentDef(type);
            const dependencies = maybeUnwrapFn(def.dependencies ?? []);
            for (const dependency of dependencies) {
                this.applyProviderOverridesInScope(dependency);
            }
        }
        else {
            const providers = [
                ...injectorDef.providers,
                ...(this.providerOverridesByModule.get(type) || []),
            ];
            if (this.hasProviderOverrides(providers)) {
                this.maybeStoreNgDef(ɵNG_INJ_DEF, type);
                this.storeFieldOfDefOnType(type, ɵNG_INJ_DEF, 'providers');
                injectorDef.providers = this.getOverriddenProviders(providers);
            }
            // Apply provider overrides to imported modules recursively
            const moduleDef = type[ɵNG_MOD_DEF];
            const imports = maybeUnwrapFn(moduleDef.imports);
            for (const importedModule of imports) {
                this.applyProviderOverridesInScope(importedModule);
            }
            // Also override the providers on any ModuleWithProviders imports since those don't appear in
            // the moduleDef.
            for (const importedModule of flatten(injectorDef.imports)) {
                if (isModuleWithProviders(importedModule)) {
                    this.defCleanupOps.push({
                        object: importedModule,
                        fieldName: 'providers',
                        originalValue: importedModule.providers,
                    });
                    importedModule.providers = this.getOverriddenProviders(importedModule.providers);
                }
            }
        }
    }
    patchComponentsWithExistingStyles() {
        this.existingComponentStyles.forEach((styles, type) => (type[ɵNG_COMP_DEF].styles = styles));
        this.existingComponentStyles.clear();
    }
    queueTypeArray(arr, moduleType) {
        for (const value of arr) {
            if (Array.isArray(value)) {
                this.queueTypeArray(value, moduleType);
            }
            else {
                this.queueType(value, moduleType);
            }
        }
    }
    recompileNgModule(ngModule, metadata) {
        // Cache the initial ngModuleDef as it will be overwritten.
        this.maybeStoreNgDef(ɵNG_MOD_DEF, ngModule);
        this.maybeStoreNgDef(ɵNG_INJ_DEF, ngModule);
        ɵcompileNgModuleDefs(ngModule, metadata);
    }
    maybeRegisterComponentWithAsyncMetadata(type) {
        const asyncMetadataFn = ɵgetAsyncClassMetadataFn(type);
        if (asyncMetadataFn) {
            this.componentsWithAsyncMetadata.add(type);
        }
    }
    queueType(type, moduleType) {
        // If this is a component with async metadata (i.e. a component with a `@defer` block
        // in a template) - store it for future processing.
        this.maybeRegisterComponentWithAsyncMetadata(type);
        const component = this.resolvers.component.resolve(type);
        if (component) {
            // Check whether a give Type has respective NG def (ɵcmp) and compile if def is
            // missing. That might happen in case a class without any Angular decorators extends another
            // class where Component/Directive/Pipe decorator is defined.
            if (ɵisComponentDefPendingResolution(type) || !type.hasOwnProperty(ɵNG_COMP_DEF)) {
                this.pendingComponents.add(type);
            }
            this.seenComponents.add(type);
            // Keep track of the module which declares this component, so later the component's scope
            // can be set correctly. If the component has already been recorded here, then one of several
            // cases is true:
            // * the module containing the component was imported multiple times (common).
            // * the component is declared in multiple modules (which is an error).
            // * the component was in 'declarations' of the testing module, and also in an imported module
            //   in which case the module scope will be TestingModuleOverride.DECLARATION.
            // * overrideTemplateUsingTestingModule was called for the component in which case the module
            //   scope will be TestingModuleOverride.OVERRIDE_TEMPLATE.
            //
            // If the component was previously in the testing module's 'declarations' (meaning the
            // current value is TestingModuleOverride.DECLARATION), then `moduleType` is the component's
            // real module, which was imported. This pattern is understood to mean that the component
            // should use its original scope, but that the testing module should also contain the
            // component in its scope.
            if (!this.componentToModuleScope.has(type) ||
                this.componentToModuleScope.get(type) === TestingModuleOverride.DECLARATION) {
                this.componentToModuleScope.set(type, moduleType);
            }
            return;
        }
        const directive = this.resolvers.directive.resolve(type);
        if (directive) {
            if (!type.hasOwnProperty(ɵNG_DIR_DEF)) {
                this.pendingDirectives.add(type);
            }
            this.seenDirectives.add(type);
            return;
        }
        const pipe = this.resolvers.pipe.resolve(type);
        if (pipe && !type.hasOwnProperty(ɵNG_PIPE_DEF)) {
            this.pendingPipes.add(type);
            return;
        }
    }
    queueTypesFromModulesArray(arr) {
        // Because we may encounter the same NgModule or a standalone Component while processing
        // the dependencies of an NgModule or a standalone Component, we cache them in this set so we
        // can skip ones that have already been seen encountered. In some test setups, this caching
        // resulted in 10X runtime improvement.
        const processedDefs = new Set();
        const queueTypesFromModulesArrayRecur = (arr) => {
            for (const value of arr) {
                if (Array.isArray(value)) {
                    queueTypesFromModulesArrayRecur(value);
                }
                else if (hasNgModuleDef(value)) {
                    const def = value.ɵmod;
                    if (processedDefs.has(def)) {
                        continue;
                    }
                    processedDefs.add(def);
                    // Look through declarations, imports, and exports, and queue
                    // everything found there.
                    this.queueTypeArray(maybeUnwrapFn(def.declarations), value);
                    queueTypesFromModulesArrayRecur(maybeUnwrapFn(def.imports));
                    queueTypesFromModulesArrayRecur(maybeUnwrapFn(def.exports));
                }
                else if (isModuleWithProviders(value)) {
                    queueTypesFromModulesArrayRecur([value.ngModule]);
                }
                else if (isStandaloneComponent(value)) {
                    this.queueType(value, null);
                    const def = getComponentDef(value);
                    if (processedDefs.has(def)) {
                        continue;
                    }
                    processedDefs.add(def);
                    const dependencies = maybeUnwrapFn(def.dependencies ?? []);
                    dependencies.forEach((dependency) => {
                        // Note: in AOT, the `dependencies` might also contain regular
                        // (NgModule-based) Component, Directive and Pipes, so we handle
                        // them separately and proceed with recursive process for standalone
                        // Components and NgModules only.
                        if (isStandaloneComponent(dependency) || hasNgModuleDef(dependency)) {
                            queueTypesFromModulesArrayRecur([dependency]);
                        }
                        else {
                            this.queueType(dependency, null);
                        }
                    });
                }
            }
        };
        queueTypesFromModulesArrayRecur(arr);
    }
    // When module overrides (via `TestBed.overrideModule`) are present, it might affect all modules
    // that import (even transitively) an overridden one. For all affected modules we need to
    // recalculate their scopes for a given test run and restore original scopes at the end. The goal
    // of this function is to collect all affected modules in a set for further processing. Example:
    // if we have the following module hierarchy: A -> B -> C (where `->` means `imports`) and module
    // `C` is overridden, we consider `A` and `B` as affected, since their scopes might become
    // invalidated with the override.
    collectModulesAffectedByOverrides(arr) {
        const seenModules = new Set();
        const affectedModules = new Set();
        const calcAffectedModulesRecur = (arr, path) => {
            for (const value of arr) {
                if (Array.isArray(value)) {
                    // If the value is an array, just flatten it (by invoking this function recursively),
                    // keeping "path" the same.
                    calcAffectedModulesRecur(value, path);
                }
                else if (hasNgModuleDef(value)) {
                    if (seenModules.has(value)) {
                        // If we've seen this module before and it's included into "affected modules" list, mark
                        // the whole path that leads to that module as affected, but do not descend into its
                        // imports, since we already examined them before.
                        if (affectedModules.has(value)) {
                            path.forEach((item) => affectedModules.add(item));
                        }
                        continue;
                    }
                    seenModules.add(value);
                    if (this.overriddenModules.has(value)) {
                        path.forEach((item) => affectedModules.add(item));
                    }
                    // Examine module imports recursively to look for overridden modules.
                    const moduleDef = value[ɵNG_MOD_DEF];
                    calcAffectedModulesRecur(maybeUnwrapFn(moduleDef.imports), path.concat(value));
                }
            }
        };
        calcAffectedModulesRecur(arr, []);
        return affectedModules;
    }
    /**
     * Preserve an original def (such as ɵmod, ɵinj, etc) before applying an override.
     * Note: one class may have multiple defs (for example: ɵmod and ɵinj in case of
     * an NgModule). If there is a def in a set already, don't override it, since
     * an original one should be restored at the end of a test.
     */
    maybeStoreNgDef(prop, type) {
        if (!this.initialNgDefs.has(type)) {
            this.initialNgDefs.set(type, new Map());
        }
        const currentDefs = this.initialNgDefs.get(type);
        if (!currentDefs.has(prop)) {
            const currentDef = Object.getOwnPropertyDescriptor(type, prop);
            currentDefs.set(prop, currentDef);
        }
    }
    storeFieldOfDefOnType(type, defField, fieldName) {
        const def = type[defField];
        const originalValue = def[fieldName];
        this.defCleanupOps.push({ object: def, fieldName, originalValue });
    }
    /**
     * Clears current components resolution queue, but stores the state of the queue, so we can
     * restore it later. Clearing the queue is required before we try to compile components (via
     * `TestBed.compileComponents`), so that component defs are in sync with the resolution queue.
     */
    clearComponentResolutionQueue() {
        if (this.originalComponentResolutionQueue === null) {
            this.originalComponentResolutionQueue = new Map();
        }
        ɵclearResolutionOfComponentResourcesQueue().forEach((value, key) => this.originalComponentResolutionQueue.set(key, value));
    }
    /*
     * Restores component resolution queue to the previously saved state. This operation is performed
     * as a part of restoring the state after completion of the current set of tests (that might
     * potentially mutate the state).
     */
    restoreComponentResolutionQueue() {
        if (this.originalComponentResolutionQueue !== null) {
            ɵrestoreComponentResolutionQueue(this.originalComponentResolutionQueue);
            this.originalComponentResolutionQueue = null;
        }
    }
    restoreOriginalState() {
        // Process cleanup ops in reverse order so the field's original value is restored correctly (in
        // case there were multiple overrides for the same field).
        forEachRight(this.defCleanupOps, (op) => {
            op.object[op.fieldName] = op.originalValue;
        });
        // Restore initial component/directive/pipe defs
        this.initialNgDefs.forEach((defs, type) => {
            if (ɵUSE_RUNTIME_DEPS_TRACKER_FOR_JIT) {
                ɵdepsTracker.clearScopeCacheFor(type);
            }
            defs.forEach((descriptor, prop) => {
                if (!descriptor) {
                    // Delete operations are generally undesirable since they have performance
                    // implications on objects they were applied to. In this particular case, situations
                    // where this code is invoked should be quite rare to cause any noticeable impact,
                    // since it's applied only to some test cases (for example when class with no
                    // annotations extends some @Component) when we need to clear 'ɵcmp' field on a given
                    // class to restore its original state (before applying overrides and running tests).
                    delete type[prop];
                }
                else {
                    Object.defineProperty(type, prop, descriptor);
                }
            });
        });
        this.initialNgDefs.clear();
        this.scopesWithOverriddenProviders.clear();
        this.restoreComponentResolutionQueue();
        // Restore the locale ID to the default value, this shouldn't be necessary but we never know
        ɵsetLocaleId(ɵDEFAULT_LOCALE_ID);
    }
    compileTestModule() {
        class RootScopeModule {
        }
        ɵcompileNgModuleDefs(RootScopeModule, {
            providers: [
                ...this.rootProviderOverrides,
                ɵinternalProvideZoneChangeDetection({}),
                TestBedApplicationErrorHandler,
                {
                    provide: ɵINTERNAL_APPLICATION_ERROR_HANDLER,
                    useFactory: () => {
                        if (inject$1(ɵZONELESS_ENABLED) || inject$1(RETHROW_APPLICATION_ERRORS, { optional: true })) {
                            const handler = inject$1(TestBedApplicationErrorHandler);
                            return (e) => {
                                handler.handleError(e);
                            };
                        }
                        else {
                            const userErrorHandler = inject$1(ErrorHandler);
                            const ngZone = inject$1(NgZone);
                            return (e) => ngZone.runOutsideAngular(() => userErrorHandler.handleError(e));
                        }
                    },
                },
                { provide: ɵChangeDetectionScheduler, useExisting: ɵChangeDetectionSchedulerImpl },
            ],
        });
        const providers = [
            { provide: Compiler, useFactory: () => new R3TestCompiler(this) },
            { provide: ɵDEFER_BLOCK_CONFIG, useValue: { behavior: this.deferBlockBehavior } },
            ...this.providers,
            ...this.providerOverrides,
        ];
        const imports = [RootScopeModule, this.additionalModuleTypes, this.imports || []];
        ɵcompileNgModuleDefs(this.testModuleType, {
            declarations: this.declarations,
            imports,
            schemas: this.schemas,
            providers,
        }, 
        /* allowDuplicateDeclarationsInRoot */ true);
        this.applyProviderOverridesInScope(this.testModuleType);
    }
    get injector() {
        if (this._injector !== null) {
            return this._injector;
        }
        const providers = [];
        const compilerOptions = this.platform.injector.get(COMPILER_OPTIONS);
        compilerOptions.forEach((opts) => {
            if (opts.providers) {
                providers.push(opts.providers);
            }
        });
        if (this.compilerProviders !== null) {
            providers.push(...this.compilerProviders);
        }
        this._injector = Injector.create({ providers, parent: this.platform.injector });
        return this._injector;
    }
    // get overrides for a specific provider (if any)
    getSingleProviderOverrides(provider) {
        const token = getProviderToken(provider);
        return this.providerOverridesByToken.get(token) || null;
    }
    getProviderOverrides(providers) {
        if (!providers || !providers.length || this.providerOverridesByToken.size === 0)
            return [];
        // There are two flattening operations here. The inner flattenProviders() operates on the
        // metadata's providers and applies a mapping function which retrieves overrides for each
        // incoming provider. The outer flatten() then flattens the produced overrides array. If this is
        // not done, the array can contain other empty arrays (e.g. `[[], []]`) which leak into the
        // providers array and contaminate any error messages that might be generated.
        return flatten(flattenProviders(providers, (provider) => this.getSingleProviderOverrides(provider) || []));
    }
    getOverriddenProviders(providers) {
        if (!providers || !providers.length || this.providerOverridesByToken.size === 0)
            return [];
        const flattenedProviders = flattenProviders(providers);
        const overrides = this.getProviderOverrides(flattenedProviders);
        const overriddenProviders = [...flattenedProviders, ...overrides];
        const final = [];
        const seenOverriddenProviders = new Set();
        // We iterate through the list of providers in reverse order to make sure provider overrides
        // take precedence over the values defined in provider list. We also filter out all providers
        // that have overrides, keeping overridden values only. This is needed, since presence of a
        // provider with `ngOnDestroy` hook will cause this hook to be registered and invoked later.
        forEachRight(overriddenProviders, (provider) => {
            const token = getProviderToken(provider);
            if (this.providerOverridesByToken.has(token)) {
                if (!seenOverriddenProviders.has(token)) {
                    seenOverriddenProviders.add(token);
                    // Treat all overridden providers as `{multi: false}` (even if it's a multi-provider) to
                    // make sure that provided override takes highest precedence and is not combined with
                    // other instances of the same multi provider.
                    final.unshift({ ...provider, multi: false });
                }
            }
            else {
                final.unshift(provider);
            }
        });
        return final;
    }
    hasProviderOverrides(providers) {
        return this.getProviderOverrides(providers).length > 0;
    }
    patchDefWithProviderOverrides(declaration, field) {
        const def = declaration[field];
        if (def && def.providersResolver) {
            this.maybeStoreNgDef(field, declaration);
            const resolver = def.providersResolver;
            const processProvidersFn = (providers) => this.getOverriddenProviders(providers);
            this.storeFieldOfDefOnType(declaration, field, 'providersResolver');
            def.providersResolver = (ngDef) => resolver(ngDef, processProvidersFn);
        }
    }
}
function initResolvers() {
    return {
        module: new NgModuleResolver(),
        component: new ComponentResolver(),
        directive: new DirectiveResolver(),
        pipe: new PipeResolver(),
    };
}
function isStandaloneComponent(value) {
    const def = getComponentDef(value);
    return !!def?.standalone;
}
function getComponentDef(value) {
    return value.ɵcmp ?? null;
}
function hasNgModuleDef(value) {
    return value.hasOwnProperty('ɵmod');
}
function isNgModule(value) {
    return hasNgModuleDef(value);
}
function maybeUnwrapFn(maybeFn) {
    return maybeFn instanceof Function ? maybeFn() : maybeFn;
}
function flatten(values) {
    const out = [];
    values.forEach((value) => {
        if (Array.isArray(value)) {
            out.push(...flatten(value));
        }
        else {
            out.push(value);
        }
    });
    return out;
}
function identityFn(value) {
    return value;
}
function flattenProviders(providers, mapFn = identityFn) {
    const out = [];
    for (let provider of providers) {
        if (ɵisEnvironmentProviders(provider)) {
            provider = provider.ɵproviders;
        }
        if (Array.isArray(provider)) {
            out.push(...flattenProviders(provider, mapFn));
        }
        else {
            out.push(mapFn(provider));
        }
    }
    return out;
}
function getProviderField(provider, field) {
    return provider && typeof provider === 'object' && provider[field];
}
function getProviderToken(provider) {
    return getProviderField(provider, 'provide') || provider;
}
function isModuleWithProviders(value) {
    return value.hasOwnProperty('ngModule');
}
function forEachRight(values, fn) {
    for (let idx = values.length - 1; idx >= 0; idx--) {
        fn(values[idx], idx);
    }
}
function invalidTypeError(name, expectedType) {
    return new Error(`${name} class doesn't have @${expectedType} decorator or is missing metadata.`);
}
class R3TestCompiler {
    constructor(testBed) {
        this.testBed = testBed;
    }
    compileModuleSync(moduleType) {
        this.testBed._compileNgModuleSync(moduleType);
        return new ɵNgModuleFactory(moduleType);
    }
    async compileModuleAsync(moduleType) {
        await this.testBed._compileNgModuleAsync(moduleType);
        return new ɵNgModuleFactory(moduleType);
    }
    compileModuleAndAllComponentsSync(moduleType) {
        const ngModuleFactory = this.compileModuleSync(moduleType);
        const componentFactories = this.testBed._getComponentFactories(moduleType);
        return new ModuleWithComponentFactories(ngModuleFactory, componentFactories);
    }
    async compileModuleAndAllComponentsAsync(moduleType) {
        const ngModuleFactory = await this.compileModuleAsync(moduleType);
        const componentFactories = this.testBed._getComponentFactories(moduleType);
        return new ModuleWithComponentFactories(ngModuleFactory, componentFactories);
    }
    clearCache() { }
    clearCacheFor(type) { }
    getModuleId(moduleType) {
        const meta = this.testBed._getModuleResolver().resolve(moduleType);
        return (meta && meta.id) || undefined;
    }
}

// The formatter and CI disagree on how this import statement should be formatted. Both try to keep
let _nextRootElementId = 0;
/**
 * Returns a singleton of the `TestBed` class.
 *
 * @publicApi
 */
function getTestBed() {
    return TestBedImpl.INSTANCE;
}
/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * TestBed is the primary api for writing unit tests for Angular applications and libraries.
 */
class TestBedImpl {
    constructor() {
        /**
         * Defer block behavior option that specifies whether defer blocks will be triggered manually
         * or set to play through.
         */
        this._instanceDeferBlockBehavior = DEFER_BLOCK_DEFAULT_BEHAVIOR;
        // Properties
        this.platform = null;
        this.ngModule = null;
        this._compiler = null;
        this._testModuleRef = null;
        this._activeFixtures = [];
        /**
         * Internal-only flag to indicate whether a module
         * scoping queue has been checked and flushed already.
         * @nodoc
         */
        this.globalCompilationChecked = false;
    }
    static { this._INSTANCE = null; }
    static get INSTANCE() {
        return (TestBedImpl._INSTANCE = TestBedImpl._INSTANCE || new TestBedImpl());
    }
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     *
     * @publicApi
     */
    static initTestEnvironment(ngModule, platform, options) {
        const testBed = TestBedImpl.INSTANCE;
        testBed.initTestEnvironment(ngModule, platform, options);
        return testBed;
    }
    /**
     * Reset the providers for the test injector.
     *
     * @publicApi
     */
    static resetTestEnvironment() {
        TestBedImpl.INSTANCE.resetTestEnvironment();
    }
    static configureCompiler(config) {
        return TestBedImpl.INSTANCE.configureCompiler(config);
    }
    /**
     * Allows overriding default providers, directives, pipes, modules of the test injector,
     * which are defined in test_injector.js
     */
    static configureTestingModule(moduleDef) {
        return TestBedImpl.INSTANCE.configureTestingModule(moduleDef);
    }
    /**
     * Compile components with a `templateUrl` for the test's NgModule.
     * It is necessary to call this function
     * as fetching urls is asynchronous.
     */
    static compileComponents() {
        return TestBedImpl.INSTANCE.compileComponents();
    }
    static overrideModule(ngModule, override) {
        return TestBedImpl.INSTANCE.overrideModule(ngModule, override);
    }
    static overrideComponent(component, override) {
        return TestBedImpl.INSTANCE.overrideComponent(component, override);
    }
    static overrideDirective(directive, override) {
        return TestBedImpl.INSTANCE.overrideDirective(directive, override);
    }
    static overridePipe(pipe, override) {
        return TestBedImpl.INSTANCE.overridePipe(pipe, override);
    }
    static overrideTemplate(component, template) {
        return TestBedImpl.INSTANCE.overrideTemplate(component, template);
    }
    /**
     * Overrides the template of the given component, compiling the template
     * in the context of the TestingModule.
     *
     * Note: This works for JIT and AOTed components as well.
     */
    static overrideTemplateUsingTestingModule(component, template) {
        return TestBedImpl.INSTANCE.overrideTemplateUsingTestingModule(component, template);
    }
    static overrideProvider(token, provider) {
        return TestBedImpl.INSTANCE.overrideProvider(token, provider);
    }
    static inject(token, notFoundValue, flags) {
        return TestBedImpl.INSTANCE.inject(token, notFoundValue, ɵconvertToBitFlags(flags));
    }
    /** @deprecated from v9.0.0 use TestBed.inject */
    static get(token, notFoundValue = Injector.THROW_IF_NOT_FOUND, flags = InjectFlags.Default) {
        return TestBedImpl.INSTANCE.inject(token, notFoundValue, flags);
    }
    /**
     * Runs the given function in the `EnvironmentInjector` context of `TestBed`.
     *
     * @see {@link EnvironmentInjector#runInContext}
     */
    static runInInjectionContext(fn) {
        return TestBedImpl.INSTANCE.runInInjectionContext(fn);
    }
    static createComponent(component) {
        return TestBedImpl.INSTANCE.createComponent(component);
    }
    static resetTestingModule() {
        return TestBedImpl.INSTANCE.resetTestingModule();
    }
    static execute(tokens, fn, context) {
        return TestBedImpl.INSTANCE.execute(tokens, fn, context);
    }
    static get platform() {
        return TestBedImpl.INSTANCE.platform;
    }
    static get ngModule() {
        return TestBedImpl.INSTANCE.ngModule;
    }
    static flushEffects() {
        return TestBedImpl.INSTANCE.flushEffects();
    }
    /**
     * Initialize the environment for testing with a compiler factory, a PlatformRef, and an
     * angular module. These are common to every test in the suite.
     *
     * This may only be called once, to set up the common providers for the current test
     * suite on the current platform. If you absolutely need to change the providers,
     * first use `resetTestEnvironment`.
     *
     * Test modules and platforms for individual platforms are available from
     * '@angular/<platform_name>/testing'.
     *
     * @publicApi
     */
    initTestEnvironment(ngModule, platform, options) {
        if (this.platform || this.ngModule) {
            throw new Error('Cannot set base providers because it has already been called');
        }
        TestBedImpl._environmentTeardownOptions = options?.teardown;
        TestBedImpl._environmentErrorOnUnknownElementsOption = options?.errorOnUnknownElements;
        TestBedImpl._environmentErrorOnUnknownPropertiesOption = options?.errorOnUnknownProperties;
        this.platform = platform;
        this.ngModule = ngModule;
        this._compiler = new TestBedCompiler(this.platform, this.ngModule);
        // TestBed does not have an API which can reliably detect the start of a test, and thus could be
        // used to track the state of the NgModule registry and reset it correctly. Instead, when we
        // know we're in a testing scenario, we disable the check for duplicate NgModule registration
        // completely.
        ɵsetAllowDuplicateNgModuleIdsForTest(true);
    }
    /**
     * Reset the providers for the test injector.
     *
     * @publicApi
     */
    resetTestEnvironment() {
        this.resetTestingModule();
        this._compiler = null;
        this.platform = null;
        this.ngModule = null;
        TestBedImpl._environmentTeardownOptions = undefined;
        ɵsetAllowDuplicateNgModuleIdsForTest(false);
    }
    resetTestingModule() {
        this.checkGlobalCompilationFinished();
        ɵresetCompiledComponents();
        if (this._compiler !== null) {
            this.compiler.restoreOriginalState();
        }
        this._compiler = new TestBedCompiler(this.platform, this.ngModule);
        // Restore the previous value of the "error on unknown elements" option
        ɵsetUnknownElementStrictMode(this._previousErrorOnUnknownElementsOption ?? THROW_ON_UNKNOWN_ELEMENTS_DEFAULT);
        // Restore the previous value of the "error on unknown properties" option
        ɵsetUnknownPropertyStrictMode(this._previousErrorOnUnknownPropertiesOption ?? THROW_ON_UNKNOWN_PROPERTIES_DEFAULT);
        // We have to chain a couple of try/finally blocks, because each step can
        // throw errors and we don't want it to interrupt the next step and we also
        // want an error to be thrown at the end.
        try {
            this.destroyActiveFixtures();
        }
        finally {
            try {
                if (this.shouldTearDownTestingModule()) {
                    this.tearDownTestingModule();
                }
            }
            finally {
                this._testModuleRef = null;
                this._instanceTeardownOptions = undefined;
                this._instanceErrorOnUnknownElementsOption = undefined;
                this._instanceErrorOnUnknownPropertiesOption = undefined;
                this._instanceDeferBlockBehavior = DEFER_BLOCK_DEFAULT_BEHAVIOR;
            }
        }
        return this;
    }
    configureCompiler(config) {
        if (config.useJit != null) {
            throw new Error('JIT compiler is not configurable via TestBed APIs.');
        }
        if (config.providers !== undefined) {
            this.compiler.setCompilerProviders(config.providers);
        }
        return this;
    }
    configureTestingModule(moduleDef) {
        this.assertNotInstantiated('TestBed.configureTestingModule', 'configure the test module');
        // Trigger module scoping queue flush before executing other TestBed operations in a test.
        // This is needed for the first test invocation to ensure that globally declared modules have
        // their components scoped properly. See the `checkGlobalCompilationFinished` function
        // description for additional info.
        this.checkGlobalCompilationFinished();
        // Always re-assign the options, even if they're undefined.
        // This ensures that we don't carry them between tests.
        this._instanceTeardownOptions = moduleDef.teardown;
        this._instanceErrorOnUnknownElementsOption = moduleDef.errorOnUnknownElements;
        this._instanceErrorOnUnknownPropertiesOption = moduleDef.errorOnUnknownProperties;
        this._instanceDeferBlockBehavior = moduleDef.deferBlockBehavior ?? DEFER_BLOCK_DEFAULT_BEHAVIOR;
        // Store the current value of the strict mode option,
        // so we can restore it later
        this._previousErrorOnUnknownElementsOption = ɵgetUnknownElementStrictMode();
        ɵsetUnknownElementStrictMode(this.shouldThrowErrorOnUnknownElements());
        this._previousErrorOnUnknownPropertiesOption = ɵgetUnknownPropertyStrictMode();
        ɵsetUnknownPropertyStrictMode(this.shouldThrowErrorOnUnknownProperties());
        this.compiler.configureTestingModule(moduleDef);
        return this;
    }
    compileComponents() {
        return this.compiler.compileComponents();
    }
    inject(token, notFoundValue, flags) {
        if (token === TestBed) {
            return this;
        }
        const UNDEFINED = {};
        const result = this.testModuleRef.injector.get(token, UNDEFINED, ɵconvertToBitFlags(flags));
        return result === UNDEFINED
            ? this.compiler.injector.get(token, notFoundValue, flags)
            : result;
    }
    /** @deprecated from v9.0.0 use TestBed.inject */
    get(token, notFoundValue = Injector.THROW_IF_NOT_FOUND, flags = InjectFlags.Default) {
        return this.inject(token, notFoundValue, flags);
    }
    runInInjectionContext(fn) {
        return runInInjectionContext(this.inject(EnvironmentInjector), fn);
    }
    execute(tokens, fn, context) {
        const params = tokens.map((t) => this.inject(t));
        return fn.apply(context, params);
    }
    overrideModule(ngModule, override) {
        this.assertNotInstantiated('overrideModule', 'override module metadata');
        this.compiler.overrideModule(ngModule, override);
        return this;
    }
    overrideComponent(component, override) {
        this.assertNotInstantiated('overrideComponent', 'override component metadata');
        this.compiler.overrideComponent(component, override);
        return this;
    }
    overrideTemplateUsingTestingModule(component, template) {
        this.assertNotInstantiated('TestBed.overrideTemplateUsingTestingModule', 'Cannot override template when the test module has already been instantiated');
        this.compiler.overrideTemplateUsingTestingModule(component, template);
        return this;
    }
    overrideDirective(directive, override) {
        this.assertNotInstantiated('overrideDirective', 'override directive metadata');
        this.compiler.overrideDirective(directive, override);
        return this;
    }
    overridePipe(pipe, override) {
        this.assertNotInstantiated('overridePipe', 'override pipe metadata');
        this.compiler.overridePipe(pipe, override);
        return this;
    }
    /**
     * Overwrites all providers for the given token with the given provider definition.
     */
    overrideProvider(token, provider) {
        this.assertNotInstantiated('overrideProvider', 'override provider');
        this.compiler.overrideProvider(token, provider);
        return this;
    }
    overrideTemplate(component, template) {
        return this.overrideComponent(component, { set: { template, templateUrl: null } });
    }
    createComponent(type) {
        const testComponentRenderer = this.inject(TestComponentRenderer);
        const rootElId = `root${_nextRootElementId++}`;
        testComponentRenderer.insertRootElement(rootElId);
        if (ɵgetAsyncClassMetadataFn(type)) {
            throw new Error(`Component '${type.name}' has unresolved metadata. ` +
                `Please call \`await TestBed.compileComponents()\` before running this test.`);
        }
        const componentDef = type.ɵcmp;
        if (!componentDef) {
            throw new Error(`It looks like '${ɵstringify(type)}' has not been compiled.`);
        }
        const componentFactory = new ɵRender3ComponentFactory(componentDef);
        const initComponent = () => {
            const componentRef = componentFactory.create(Injector.NULL, [], `#${rootElId}`, this.testModuleRef);
            return this.runInInjectionContext(() => {
                const isZoneless = this.inject(ɵZONELESS_ENABLED);
                const fixture = isZoneless
                    ? new ScheduledComponentFixture(componentRef)
                    : new PseudoApplicationComponentFixture(componentRef);
                fixture.initialize();
                return fixture;
            });
        };
        const noNgZone = this.inject(ComponentFixtureNoNgZone, false);
        const ngZone = noNgZone ? null : this.inject(NgZone, null);
        const fixture = ngZone ? ngZone.run(initComponent) : initComponent();
        this._activeFixtures.push(fixture);
        return fixture;
    }
    /**
     * @internal strip this from published d.ts files due to
     * https://github.com/microsoft/TypeScript/issues/36216
     */
    get compiler() {
        if (this._compiler === null) {
            throw new Error(`Need to call TestBed.initTestEnvironment() first`);
        }
        return this._compiler;
    }
    /**
     * @internal strip this from published d.ts files due to
     * https://github.com/microsoft/TypeScript/issues/36216
     */
    get testModuleRef() {
        if (this._testModuleRef === null) {
            this._testModuleRef = this.compiler.finalize();
        }
        return this._testModuleRef;
    }
    assertNotInstantiated(methodName, methodDescription) {
        if (this._testModuleRef !== null) {
            throw new Error(`Cannot ${methodDescription} when the test module has already been instantiated. ` +
                `Make sure you are not using \`inject\` before \`${methodName}\`.`);
        }
    }
    /**
     * Check whether the module scoping queue should be flushed, and flush it if needed.
     *
     * When the TestBed is reset, it clears the JIT module compilation queue, cancelling any
     * in-progress module compilation. This creates a potential hazard - the very first time the
     * TestBed is initialized (or if it's reset without being initialized), there may be pending
     * compilations of modules declared in global scope. These compilations should be finished.
     *
     * To ensure that globally declared modules have their components scoped properly, this function
     * is called whenever TestBed is initialized or reset. The _first_ time that this happens, prior
     * to any other operations, the scoping queue is flushed.
     */
    checkGlobalCompilationFinished() {
        // Checking _testNgModuleRef is null should not be necessary, but is left in as an additional
        // guard that compilations queued in tests (after instantiation) are never flushed accidentally.
        if (!this.globalCompilationChecked && this._testModuleRef === null) {
            ɵflushModuleScopingQueueAsMuchAsPossible();
        }
        this.globalCompilationChecked = true;
    }
    destroyActiveFixtures() {
        let errorCount = 0;
        this._activeFixtures.forEach((fixture) => {
            try {
                fixture.destroy();
            }
            catch (e) {
                errorCount++;
                console.error('Error during cleanup of component', {
                    component: fixture.componentInstance,
                    stacktrace: e,
                });
            }
        });
        this._activeFixtures = [];
        if (errorCount > 0 && this.shouldRethrowTeardownErrors()) {
            throw Error(`${errorCount} ${errorCount === 1 ? 'component' : 'components'} ` +
                `threw errors during cleanup`);
        }
    }
    shouldRethrowTeardownErrors() {
        const instanceOptions = this._instanceTeardownOptions;
        const environmentOptions = TestBedImpl._environmentTeardownOptions;
        // If the new teardown behavior hasn't been configured, preserve the old behavior.
        if (!instanceOptions && !environmentOptions) {
            return TEARDOWN_TESTING_MODULE_ON_DESTROY_DEFAULT;
        }
        // Otherwise use the configured behavior or default to rethrowing.
        return (instanceOptions?.rethrowErrors ??
            environmentOptions?.rethrowErrors ??
            this.shouldTearDownTestingModule());
    }
    shouldThrowErrorOnUnknownElements() {
        // Check if a configuration has been provided to throw when an unknown element is found
        return (this._instanceErrorOnUnknownElementsOption ??
            TestBedImpl._environmentErrorOnUnknownElementsOption ??
            THROW_ON_UNKNOWN_ELEMENTS_DEFAULT);
    }
    shouldThrowErrorOnUnknownProperties() {
        // Check if a configuration has been provided to throw when an unknown property is found
        return (this._instanceErrorOnUnknownPropertiesOption ??
            TestBedImpl._environmentErrorOnUnknownPropertiesOption ??
            THROW_ON_UNKNOWN_PROPERTIES_DEFAULT);
    }
    shouldTearDownTestingModule() {
        return (this._instanceTeardownOptions?.destroyAfterEach ??
            TestBedImpl._environmentTeardownOptions?.destroyAfterEach ??
            TEARDOWN_TESTING_MODULE_ON_DESTROY_DEFAULT);
    }
    getDeferBlockBehavior() {
        return this._instanceDeferBlockBehavior;
    }
    tearDownTestingModule() {
        // If the module ref has already been destroyed, we won't be able to get a test renderer.
        if (this._testModuleRef === null) {
            return;
        }
        // Resolve the renderer ahead of time, because we want to remove the root elements as the very
        // last step, but the injector will be destroyed as a part of the module ref destruction.
        const testRenderer = this.inject(TestComponentRenderer);
        try {
            this._testModuleRef.destroy();
        }
        catch (e) {
            if (this.shouldRethrowTeardownErrors()) {
                throw e;
            }
            else {
                console.error('Error during cleanup of a testing module', {
                    component: this._testModuleRef.instance,
                    stacktrace: e,
                });
            }
        }
        finally {
            testRenderer.removeAllRootElements?.();
        }
    }
    /**
     * Execute any pending effects.
     *
     * @developerPreview
     */
    flushEffects() {
        this.inject(ɵEffectScheduler).flush();
    }
}
/**
 * @description
 * Configures and initializes environment for unit testing and provides methods for
 * creating components and services in unit tests.
 *
 * `TestBed` is the primary api for writing unit tests for Angular applications and libraries.
 *
 * @publicApi
 */
const TestBed = TestBedImpl;
/**
 * Allows injecting dependencies in `beforeEach()` and `it()`. Note: this function
 * (imported from the `@angular/core/testing` package) can **only** be used to inject dependencies
 * in tests. To inject dependencies in your application code, use the [`inject`](api/core/inject)
 * function from the `@angular/core` package instead.
 *
 * Example:
 *
 * ```
 * beforeEach(inject([Dependency, AClass], (dep, object) => {
 *   // some code that uses `dep` and `object`
 *   // ...
 * }));
 *
 * it('...', inject([AClass], (object) => {
 *   object.doSomething();
 *   expect(...);
 * })
 * ```
 *
 * @publicApi
 */
function inject(tokens, fn) {
    const testBed = TestBedImpl.INSTANCE;
    // Not using an arrow function to preserve context passed from call site
    return function () {
        return testBed.execute(tokens, fn, this);
    };
}
/**
 * @publicApi
 */
class InjectSetupWrapper {
    constructor(_moduleDef) {
        this._moduleDef = _moduleDef;
    }
    _addModule() {
        const moduleDef = this._moduleDef();
        if (moduleDef) {
            TestBedImpl.configureTestingModule(moduleDef);
        }
    }
    inject(tokens, fn) {
        const self = this;
        // Not using an arrow function to preserve context passed from call site
        return function () {
            self._addModule();
            return inject(tokens, fn).call(this);
        };
    }
}
function withModule(moduleDef, fn) {
    if (fn) {
        // Not using an arrow function to preserve context passed from call site
        return function () {
            const testBed = TestBedImpl.INSTANCE;
            if (moduleDef) {
                testBed.configureTestingModule(moduleDef);
            }
            return fn.apply(this);
        };
    }
    return new InjectSetupWrapper(() => moduleDef);
}

/**
 * Public Test Library for unit testing Angular applications. Assumes that you are running
 * with Jasmine, Mocha, or a similar framework which exports a beforeEach function and
 * allows tests to be asynchronous by either returning a promise or using a 'done' parameter.
 */
// Reset the test providers and the fake async zone before each test.
// We keep a guard because somehow this file can make it into a bundle and be executed
// beforeEach is only defined when executing the tests
globalThis.beforeEach?.(getCleanupHook(false));
// We provide both a `beforeEach` and `afterEach`, because the updated behavior for
// tearing down the module is supposed to run after the test so that we can associate
// teardown errors with the correct test.
// We keep a guard because somehow this file can make it into a bundle and be executed
// afterEach is only defined when executing the tests
globalThis.afterEach?.(getCleanupHook(true));
function getCleanupHook(expectedTeardownValue) {
    return () => {
        const testBed = TestBedImpl.INSTANCE;
        if (testBed.shouldTearDownTestingModule() === expectedTeardownValue) {
            testBed.resetTestingModule();
            resetFakeAsyncZoneIfExists();
        }
    };
}
/**
 * This API should be removed. But doing so seems to break `google3` and so it requires a bit of
 * investigation.
 *
 * A work around is to mark it as `@codeGenApi` for now and investigate later.
 *
 * @codeGenApi
 */
// TODO(iminar): Remove this code in a safe way.
const __core_private_testing_placeholder__ = '';

/**
 * @module
 * @description
 * Entry point for all public APIs of the core/testing package.
 */

/// <reference types="jasmine" />
// This file only reexports content of the `src` folder. Keep it that way.

// This file is not used to build this module. It is only used during editing

/**
 * Generated bundle index. Do not edit.
 */

export { ComponentFixture, ComponentFixtureAutoDetect, ComponentFixtureNoNgZone, DeferBlockFixture, InjectSetupWrapper, TestBed, TestComponentRenderer, __core_private_testing_placeholder__, discardPeriodicTasks, fakeAsync, flush, flushMicrotasks, getTestBed, inject, resetFakeAsyncZone, tick, waitForAsync, withModule, MetadataOverrider as ɵMetadataOverrider };
//# sourceMappingURL=testing.mjs.map
