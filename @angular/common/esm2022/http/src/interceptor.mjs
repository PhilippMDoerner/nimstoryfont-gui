/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { isPlatformServer } from '@angular/common';
import { EnvironmentInjector, inject, Injectable, InjectionToken, PLATFORM_ID, runInInjectionContext, ɵConsole as Console, ɵformatRuntimeError as formatRuntimeError, ɵPendingTasks as PendingTasks, } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { HttpBackend, HttpHandler } from './backend';
import { FetchBackend } from './fetch';
import * as i0 from "@angular/core";
import * as i1 from "./backend";
function interceptorChainEndFn(req, finalHandlerFn) {
    return finalHandlerFn(req);
}
/**
 * Constructs a `ChainedInterceptorFn` which adapts a legacy `HttpInterceptor` to the
 * `ChainedInterceptorFn` interface.
 */
function adaptLegacyInterceptorToChain(chainTailFn, interceptor) {
    return (initialRequest, finalHandlerFn) => interceptor.intercept(initialRequest, {
        handle: (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn),
    });
}
/**
 * Constructs a `ChainedInterceptorFn` which wraps and invokes a functional interceptor in the given
 * injector.
 */
function chainedInterceptorFn(chainTailFn, interceptorFn, injector) {
    return (initialRequest, finalHandlerFn) => runInInjectionContext(injector, () => interceptorFn(initialRequest, (downstreamRequest) => chainTailFn(downstreamRequest, finalHandlerFn)));
}
/**
 * A multi-provider token that represents the array of registered
 * `HttpInterceptor` objects.
 *
 * @publicApi
 */
export const HTTP_INTERCEPTORS = new InjectionToken(ngDevMode ? 'HTTP_INTERCEPTORS' : '');
/**
 * A multi-provided token of `HttpInterceptorFn`s.
 */
export const HTTP_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? 'HTTP_INTERCEPTOR_FNS' : '');
/**
 * A multi-provided token of `HttpInterceptorFn`s that are only set in root.
 */
export const HTTP_ROOT_INTERCEPTOR_FNS = new InjectionToken(ngDevMode ? 'HTTP_ROOT_INTERCEPTOR_FNS' : '');
// TODO(atscott): We need a larger discussion about stability and what should contribute to stability.
// Should the whole interceptor chain contribute to stability or just the backend request #55075?
// Should HttpClient contribute to stability automatically at all?
export const REQUESTS_CONTRIBUTE_TO_STABILITY = new InjectionToken(ngDevMode ? 'REQUESTS_CONTRIBUTE_TO_STABILITY' : '', { providedIn: 'root', factory: () => true });
/**
 * Creates an `HttpInterceptorFn` which lazily initializes an interceptor chain from the legacy
 * class-based interceptors and runs the request through it.
 */
export function legacyInterceptorFnFactory() {
    let chain = null;
    return (req, handler) => {
        if (chain === null) {
            const interceptors = inject(HTTP_INTERCEPTORS, { optional: true }) ?? [];
            // Note: interceptors are wrapped right-to-left so that final execution order is
            // left-to-right. That is, if `interceptors` is the array `[a, b, c]`, we want to
            // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
            // out.
            chain = interceptors.reduceRight(adaptLegacyInterceptorToChain, interceptorChainEndFn);
        }
        const pendingTasks = inject(PendingTasks);
        const contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
        if (contributeToStability) {
            const taskId = pendingTasks.add();
            return chain(req, handler).pipe(finalize(() => pendingTasks.remove(taskId)));
        }
        else {
            return chain(req, handler);
        }
    };
}
let fetchBackendWarningDisplayed = false;
/** Internal function to reset the flag in tests */
export function resetFetchBackendWarningFlag() {
    fetchBackendWarningDisplayed = false;
}
export class HttpInterceptorHandler extends HttpHandler {
    constructor(backend, injector) {
        super();
        this.backend = backend;
        this.injector = injector;
        this.chain = null;
        this.pendingTasks = inject(PendingTasks);
        this.contributeToStability = inject(REQUESTS_CONTRIBUTE_TO_STABILITY);
        // We strongly recommend using fetch backend for HTTP calls when SSR is used
        // for an application. The logic below checks if that's the case and produces
        // a warning otherwise.
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && !fetchBackendWarningDisplayed) {
            const isServer = isPlatformServer(injector.get(PLATFORM_ID));
            if (isServer && !(this.backend instanceof FetchBackend)) {
                fetchBackendWarningDisplayed = true;
                injector
                    .get(Console)
                    .warn(formatRuntimeError(2801 /* RuntimeErrorCode.NOT_USING_FETCH_BACKEND_IN_SSR */, 'Angular detected that `HttpClient` is not configured ' +
                    "to use `fetch` APIs. It's strongly recommended to " +
                    'enable `fetch` for applications that use Server-Side Rendering ' +
                    'for better performance and compatibility. ' +
                    'To enable `fetch`, add the `withFetch()` to the `provideHttpClient()` ' +
                    'call at the root of the application.'));
            }
        }
    }
    handle(initialRequest) {
        if (this.chain === null) {
            const dedupedInterceptorFns = Array.from(new Set([
                ...this.injector.get(HTTP_INTERCEPTOR_FNS),
                ...this.injector.get(HTTP_ROOT_INTERCEPTOR_FNS, []),
            ]));
            // Note: interceptors are wrapped right-to-left so that final execution order is
            // left-to-right. That is, if `dedupedInterceptorFns` is the array `[a, b, c]`, we want to
            // produce a chain that is conceptually `c(b(a(end)))`, which we build from the inside
            // out.
            this.chain = dedupedInterceptorFns.reduceRight((nextSequencedFn, interceptorFn) => chainedInterceptorFn(nextSequencedFn, interceptorFn, this.injector), interceptorChainEndFn);
        }
        if (this.contributeToStability) {
            const taskId = this.pendingTasks.add();
            return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest)).pipe(finalize(() => this.pendingTasks.remove(taskId)));
        }
        else {
            return this.chain(initialRequest, (downstreamRequest) => this.backend.handle(downstreamRequest));
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: HttpInterceptorHandler, deps: [{ token: i1.HttpBackend }, { token: i0.EnvironmentInjector }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: HttpInterceptorHandler }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: HttpInterceptorHandler, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: i1.HttpBackend }, { type: i0.EnvironmentInjector }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJjZXB0b3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vaHR0cC9zcmMvaW50ZXJjZXB0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDakQsT0FBTyxFQUNMLG1CQUFtQixFQUNuQixNQUFNLEVBQ04sVUFBVSxFQUNWLGNBQWMsRUFDZCxXQUFXLEVBQ1gscUJBQXFCLEVBQ3JCLFFBQVEsSUFBSSxPQUFPLEVBQ25CLG1CQUFtQixJQUFJLGtCQUFrQixFQUN6QyxhQUFhLElBQUksWUFBWSxHQUM5QixNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEMsT0FBTyxFQUFDLFdBQVcsRUFBRSxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFFbkQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLFNBQVMsQ0FBQzs7O0FBZ0lyQyxTQUFTLHFCQUFxQixDQUM1QixHQUFxQixFQUNyQixjQUE2QjtJQUU3QixPQUFPLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUM3QixDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyw2QkFBNkIsQ0FDcEMsV0FBc0MsRUFDdEMsV0FBNEI7SUFFNUIsT0FBTyxDQUFDLGNBQWMsRUFBRSxjQUFjLEVBQUUsRUFBRSxDQUN4QyxXQUFXLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtRQUNwQyxNQUFNLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLGlCQUFpQixFQUFFLGNBQWMsQ0FBQztLQUM5RSxDQUFDLENBQUM7QUFDUCxDQUFDO0FBRUQ7OztHQUdHO0FBQ0gsU0FBUyxvQkFBb0IsQ0FDM0IsV0FBMEMsRUFDMUMsYUFBZ0MsRUFDaEMsUUFBNkI7SUFF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QUM1QyxDQUFDLGVBQWUsRUFBRSxhQUFhLEVBQUUsRUFBRSxDQUNqQyxvQkFBb0IsQ0FBQyxlQUFlLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFDckUscUJBQXNELENBQ3ZELENBQUM7UUFDSixDQUFDO1FBRUQsSUFBSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztZQUMvQixNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3ZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxFQUFFLENBQ3RELElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQ3ZDLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0QsQ0FBQzthQUFNLENBQUM7WUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsRUFBRSxDQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsQ0FBQyxDQUN2QyxDQUFDO1FBQ0osQ0FBQztJQUNILENBQUM7eUhBakVVLHNCQUFzQjs2SEFBdEIsc0JBQXNCOztzR0FBdEIsc0JBQXNCO2tCQURsQyxVQUFVIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2lzUGxhdGZvcm1TZXJ2ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBFbnZpcm9ubWVudEluamVjdG9yLFxuICBpbmplY3QsXG4gIEluamVjdGFibGUsXG4gIEluamVjdGlvblRva2VuLFxuICBQTEFURk9STV9JRCxcbiAgcnVuSW5JbmplY3Rpb25Db250ZXh0LFxuICDJtUNvbnNvbGUgYXMgQ29uc29sZSxcbiAgybVmb3JtYXRSdW50aW1lRXJyb3IgYXMgZm9ybWF0UnVudGltZUVycm9yLFxuICDJtVBlbmRpbmdUYXNrcyBhcyBQZW5kaW5nVGFza3MsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcbmltcG9ydCB7ZmluYWxpemV9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcblxuaW1wb3J0IHtIdHRwQmFja2VuZCwgSHR0cEhhbmRsZXJ9IGZyb20gJy4vYmFja2VuZCc7XG5pbXBvcnQge1J1bnRpbWVFcnJvckNvZGV9IGZyb20gJy4vZXJyb3JzJztcbmltcG9ydCB7RmV0Y2hCYWNrZW5kfSBmcm9tICcuL2ZldGNoJztcbmltcG9ydCB7SHR0cFJlcXVlc3R9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQge0h0dHBFdmVudH0gZnJvbSAnLi9yZXNwb25zZSc7XG5cbi8qKlxuICogSW50ZXJjZXB0cyBhbmQgaGFuZGxlcyBhbiBgSHR0cFJlcXVlc3RgIG9yIGBIdHRwUmVzcG9uc2VgLlxuICpcbiAqIE1vc3QgaW50ZXJjZXB0b3JzIHRyYW5zZm9ybSB0aGUgb3V0Z29pbmcgcmVxdWVzdCBiZWZvcmUgcGFzc2luZyBpdCB0byB0aGVcbiAqIG5leHQgaW50ZXJjZXB0b3IgaW4gdGhlIGNoYWluLCBieSBjYWxsaW5nIGBuZXh0LmhhbmRsZSh0cmFuc2Zvcm1lZFJlcSlgLlxuICogQW4gaW50ZXJjZXB0b3IgbWF5IHRyYW5zZm9ybSB0aGVcbiAqIHJlc3BvbnNlIGV2ZW50IHN0cmVhbSBhcyB3ZWxsLCBieSBhcHBseWluZyBhZGRpdGlvbmFsIFJ4SlMgb3BlcmF0b3JzIG9uIHRoZSBzdHJlYW1cbiAqIHJldHVybmVkIGJ5IGBuZXh0LmhhbmRsZSgpYC5cbiAqXG4gKiBNb3JlIHJhcmVseSwgYW4gaW50ZXJjZXB0b3IgbWF5IGhhbmRsZSB0aGUgcmVxdWVzdCBlbnRpcmVseSxcbiAqIGFuZCBjb21wb3NlIGEgbmV3IGV2ZW50IHN0cmVhbSBpbnN0ZWFkIG9mIGludm9raW5nIGBuZXh0LmhhbmRsZSgpYC4gVGhpcyBpcyBhblxuICogYWNjZXB0YWJsZSBiZWhhdmlvciwgYnV0IGtlZXAgaW4gbWluZCB0aGF0IGZ1cnRoZXIgaW50ZXJjZXB0b3JzIHdpbGwgYmUgc2tpcHBlZCBlbnRpcmVseS5cbiAqXG4gKiBJdCBpcyBhbHNvIHJhcmUgYnV0IHZhbGlkIGZvciBhbiBpbnRlcmNlcHRvciB0byByZXR1cm4gbXVsdGlwbGUgcmVzcG9uc2VzIG9uIHRoZVxuICogZXZlbnQgc3RyZWFtIGZvciBhIHNpbmdsZSByZXF1ZXN0LlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqXG4gKiBAc2VlIFtIVFRQIEd1aWRlXShndWlkZS9odHRwL2ludGVyY2VwdG9ycylcbiAqIEBzZWUge0BsaW5rIEh0dHBJbnRlcmNlcHRvckZufVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVG8gdXNlIHRoZSBzYW1lIGluc3RhbmNlIG9mIGBIdHRwSW50ZXJjZXB0b3JzYCBmb3IgdGhlIGVudGlyZSBhcHAsIGltcG9ydCB0aGUgYEh0dHBDbGllbnRNb2R1bGVgXG4gKiBvbmx5IGluIHlvdXIgYEFwcE1vZHVsZWAsIGFuZCBhZGQgdGhlIGludGVyY2VwdG9ycyB0byB0aGUgcm9vdCBhcHBsaWNhdGlvbiBpbmplY3Rvci5cbiAqIElmIHlvdSBpbXBvcnQgYEh0dHBDbGllbnRNb2R1bGVgIG11bHRpcGxlIHRpbWVzIGFjcm9zcyBkaWZmZXJlbnQgbW9kdWxlcyAoZm9yIGV4YW1wbGUsIGluIGxhenlcbiAqIGxvYWRpbmcgbW9kdWxlcyksIGVhY2ggaW1wb3J0IGNyZWF0ZXMgYSBuZXcgY29weSBvZiB0aGUgYEh0dHBDbGllbnRNb2R1bGVgLCB3aGljaCBvdmVyd3JpdGVzIHRoZVxuICogaW50ZXJjZXB0b3JzIHByb3ZpZGVkIGluIHRoZSByb290IG1vZHVsZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBIdHRwSW50ZXJjZXB0b3Ige1xuICAvKipcbiAgICogSWRlbnRpZmllcyBhbmQgaGFuZGxlcyBhIGdpdmVuIEhUVFAgcmVxdWVzdC5cbiAgICogQHBhcmFtIHJlcSBUaGUgb3V0Z29pbmcgcmVxdWVzdCBvYmplY3QgdG8gaGFuZGxlLlxuICAgKiBAcGFyYW0gbmV4dCBUaGUgbmV4dCBpbnRlcmNlcHRvciBpbiB0aGUgY2hhaW4sIG9yIHRoZSBiYWNrZW5kXG4gICAqIGlmIG5vIGludGVyY2VwdG9ycyByZW1haW4gaW4gdGhlIGNoYWluLlxuICAgKiBAcmV0dXJucyBBbiBvYnNlcnZhYmxlIG9mIHRoZSBldmVudCBzdHJlYW0uXG4gICAqL1xuICBpbnRlcmNlcHQocmVxOiBIdHRwUmVxdWVzdDxhbnk+LCBuZXh0OiBIdHRwSGFuZGxlcik6IE9ic2VydmFibGU8SHR0cEV2ZW50PGFueT4+O1xufVxuXG4vKipcbiAqIFJlcHJlc2VudHMgdGhlIG5leHQgaW50ZXJjZXB0b3IgaW4gYW4gaW50ZXJjZXB0b3IgY2hhaW4sIG9yIHRoZSByZWFsIGJhY2tlbmQgaWYgdGhlcmUgYXJlIG5vXG4gKiBmdXJ0aGVyIGludGVyY2VwdG9ycy5cbiAqXG4gKiBNb3N0IGludGVyY2VwdG9ycyB3aWxsIGRlbGVnYXRlIHRvIHRoaXMgZnVuY3Rpb24sIGFuZCBlaXRoZXIgbW9kaWZ5IHRoZSBvdXRnb2luZyByZXF1ZXN0IG9yIHRoZVxuICogcmVzcG9uc2Ugd2hlbiBpdCBhcnJpdmVzLiBXaXRoaW4gdGhlIHNjb3BlIG9mIHRoZSBjdXJyZW50IHJlcXVlc3QsIGhvd2V2ZXIsIHRoaXMgZnVuY3Rpb24gbWF5IGJlXG4gKiBjYWxsZWQgYW55IG51bWJlciBvZiB0aW1lcywgZm9yIGFueSBudW1iZXIgb2YgZG93bnN0cmVhbSByZXF1ZXN0cy4gU3VjaCBkb3duc3RyZWFtIHJlcXVlc3RzIG5lZWRcbiAqIG5vdCBiZSB0byB0aGUgc2FtZSBVUkwgb3IgZXZlbiB0aGUgc2FtZSBvcmlnaW4gYXMgdGhlIGN1cnJlbnQgcmVxdWVzdC4gSXQgaXMgYWxzbyB2YWxpZCB0byBub3RcbiAqIGNhbGwgdGhlIGRvd25zdHJlYW0gaGFuZGxlciBhdCBhbGwsIGFuZCBwcm9jZXNzIHRoZSBjdXJyZW50IHJlcXVlc3QgZW50aXJlbHkgd2l0aGluIHRoZVxuICogaW50ZXJjZXB0b3IuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBzaG91bGQgb25seSBiZSBjYWxsZWQgd2l0aGluIHRoZSBzY29wZSBvZiB0aGUgcmVxdWVzdCB0aGF0J3MgY3VycmVudGx5IGJlaW5nXG4gKiBpbnRlcmNlcHRlZC4gT25jZSB0aGF0IHJlcXVlc3QgaXMgY29tcGxldGUsIHRoaXMgZG93bnN0cmVhbSBoYW5kbGVyIGZ1bmN0aW9uIHNob3VsZCBub3QgYmVcbiAqIGNhbGxlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKlxuICogQHNlZSBbSFRUUCBHdWlkZV0oZ3VpZGUvaHR0cC9pbnRlcmNlcHRvcnMpXG4gKi9cbmV4cG9ydCB0eXBlIEh0dHBIYW5kbGVyRm4gPSAocmVxOiBIdHRwUmVxdWVzdDx1bmtub3duPikgPT4gT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+O1xuXG4vKipcbiAqIEFuIGludGVyY2VwdG9yIGZvciBIVFRQIHJlcXVlc3RzIG1hZGUgdmlhIGBIdHRwQ2xpZW50YC5cbiAqXG4gKiBgSHR0cEludGVyY2VwdG9yRm5gcyBhcmUgbWlkZGxld2FyZSBmdW5jdGlvbnMgd2hpY2ggYEh0dHBDbGllbnRgIGNhbGxzIHdoZW4gYSByZXF1ZXN0IGlzIG1hZGUuXG4gKiBUaGVzZSBmdW5jdGlvbnMgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gbW9kaWZ5IHRoZSBvdXRnb2luZyByZXF1ZXN0IG9yIGFueSByZXNwb25zZSB0aGF0IGNvbWVzXG4gKiBiYWNrLCBhcyB3ZWxsIGFzIGJsb2NrLCByZWRpcmVjdCwgb3Igb3RoZXJ3aXNlIGNoYW5nZSB0aGUgcmVxdWVzdCBvciByZXNwb25zZSBzZW1hbnRpY3MuXG4gKlxuICogQW4gYEh0dHBIYW5kbGVyRm5gIHJlcHJlc2VudGluZyB0aGUgbmV4dCBpbnRlcmNlcHRvciAob3IgdGhlIGJhY2tlbmQgd2hpY2ggd2lsbCBtYWtlIGEgcmVhbCBIVFRQXG4gKiByZXF1ZXN0KSBpcyBwcm92aWRlZC4gTW9zdCBpbnRlcmNlcHRvcnMgd2lsbCBkZWxlZ2F0ZSB0byB0aGlzIGZ1bmN0aW9uLCBidXQgdGhhdCBpcyBub3QgcmVxdWlyZWRcbiAqIChzZWUgYEh0dHBIYW5kbGVyRm5gIGZvciBtb3JlIGRldGFpbHMpLlxuICpcbiAqIGBIdHRwSW50ZXJjZXB0b3JGbmBzIGFyZSBleGVjdXRlZCBpbiBhbiBbaW5qZWN0aW9uIGNvbnRleHRdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLWNvbnRleHQpLlxuICogVGhleSBoYXZlIGFjY2VzcyB0byBgaW5qZWN0KClgIHZpYSB0aGUgYEVudmlyb25tZW50SW5qZWN0b3JgIGZyb20gd2hpY2ggdGhleSB3ZXJlIGNvbmZpZ3VyZWQuXG4gKlxuICogQHNlZSBbSFRUUCBHdWlkZV0oZ3VpZGUvaHR0cC9pbnRlcmNlcHRvcnMpXG4gKiBAc2VlIHtAbGluayB3aXRoSW50ZXJjZXB0b3JzfVxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKiBIZXJlIGlzIGEgbm9vcCBpbnRlcmNlcHRvciB0aGF0IHBhc3NlcyB0aGUgcmVxdWVzdCB0aHJvdWdoIHdpdGhvdXQgbW9kaWZ5aW5nIGl0OlxuICogYGBgdHlwZXNjcmlwdFxuICogZXhwb3J0IGNvbnN0IG5vb3BJbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yRm4gPSAocmVxOiBIdHRwUmVxdWVzdDx1bmtub3duPiwgbmV4dDpcbiAqIEh0dHBIYW5kbGVyRm4pID0+IHtcbiAqICAgcmV0dXJuIG5leHQobW9kaWZpZWRSZXEpO1xuICogfTtcbiAqIGBgYFxuICpcbiAqIElmIHlvdSB3YW50IHRvIGFsdGVyIGEgcmVxdWVzdCwgY2xvbmUgaXQgZmlyc3QgYW5kIG1vZGlmeSB0aGUgY2xvbmUgYmVmb3JlIHBhc3NpbmcgaXQgdG8gdGhlXG4gKiBgbmV4dCgpYCBoYW5kbGVyIGZ1bmN0aW9uLlxuICpcbiAqIEhlcmUgaXMgYSBiYXNpYyBpbnRlcmNlcHRvciB0aGF0IGFkZHMgYSBiZWFyZXIgdG9rZW4gdG8gdGhlIGhlYWRlcnNcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGlvbkludGVyY2VwdG9yOiBIdHRwSW50ZXJjZXB0b3JGbiA9IChyZXE6IEh0dHBSZXF1ZXN0PHVua25vd24+LCBuZXh0OlxuICogSHR0cEhhbmRsZXJGbikgPT4ge1xuICogICAgY29uc3QgdXNlclRva2VuID0gJ01ZX1RPS0VOJzsgY29uc3QgbW9kaWZpZWRSZXEgPSByZXEuY2xvbmUoe1xuICogICAgICBoZWFkZXJzOiByZXEuaGVhZGVycy5zZXQoJ0F1dGhvcml6YXRpb24nLCBgQmVhcmVyICR7dXNlclRva2VufWApLFxuICogICAgfSk7XG4gKlxuICogICAgcmV0dXJuIG5leHQobW9kaWZpZWRSZXEpO1xuICogfTtcbiAqIGBgYFxuICovXG5leHBvcnQgdHlwZSBIdHRwSW50ZXJjZXB0b3JGbiA9IChcbiAgcmVxOiBIdHRwUmVxdWVzdDx1bmtub3duPixcbiAgbmV4dDogSHR0cEhhbmRsZXJGbixcbikgPT4gT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8dW5rbm93bj4+O1xuXG4vKipcbiAqIEZ1bmN0aW9uIHdoaWNoIGludm9rZXMgYW4gSFRUUCBpbnRlcmNlcHRvciBjaGFpbi5cbiAqXG4gKiBFYWNoIGludGVyY2VwdG9yIGluIHRoZSBpbnRlcmNlcHRvciBjaGFpbiBpcyB0dXJuZWQgaW50byBhIGBDaGFpbmVkSW50ZXJjZXB0b3JGbmAgd2hpY2ggY2xvc2VzXG4gKiBvdmVyIHRoZSByZXN0IG9mIHRoZSBjaGFpbiAocmVwcmVzZW50ZWQgYnkgYW5vdGhlciBgQ2hhaW5lZEludGVyY2VwdG9yRm5gKS4gVGhlIGxhc3Qgc3VjaFxuICogZnVuY3Rpb24gaW4gdGhlIGNoYWluIHdpbGwgaW5zdGVhZCBkZWxlZ2F0ZSB0byB0aGUgYGZpbmFsSGFuZGxlckZuYCwgd2hpY2ggaXMgcGFzc2VkIGRvd24gd2hlblxuICogdGhlIGNoYWluIGlzIGludm9rZWQuXG4gKlxuICogVGhpcyBwYXR0ZXJuIGFsbG93cyBmb3IgYSBjaGFpbiBvZiBtYW55IGludGVyY2VwdG9ycyB0byBiZSBjb21wb3NlZCBhbmQgd3JhcHBlZCBpbiBhIHNpbmdsZVxuICogYEh0dHBJbnRlcmNlcHRvckZuYCwgd2hpY2ggaXMgYSB1c2VmdWwgYWJzdHJhY3Rpb24gZm9yIGluY2x1ZGluZyBkaWZmZXJlbnQga2luZHMgb2YgaW50ZXJjZXB0b3JzXG4gKiAoZS5nLiBsZWdhY3kgY2xhc3MtYmFzZWQgaW50ZXJjZXB0b3JzKSBpbiB0aGUgc2FtZSBjaGFpbi5cbiAqL1xudHlwZSBDaGFpbmVkSW50ZXJjZXB0b3JGbjxSZXF1ZXN0VD4gPSAoXG4gIHJlcTogSHR0cFJlcXVlc3Q8UmVxdWVzdFQ+LFxuICBmaW5hbEhhbmRsZXJGbjogSHR0cEhhbmRsZXJGbixcbikgPT4gT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8UmVxdWVzdFQ+PjtcblxuZnVuY3Rpb24gaW50ZXJjZXB0b3JDaGFpbkVuZEZuKFxuICByZXE6IEh0dHBSZXF1ZXN0PGFueT4sXG4gIGZpbmFsSGFuZGxlckZuOiBIdHRwSGFuZGxlckZuLFxuKTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICByZXR1cm4gZmluYWxIYW5kbGVyRm4ocmVxKTtcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3RzIGEgYENoYWluZWRJbnRlcmNlcHRvckZuYCB3aGljaCBhZGFwdHMgYSBsZWdhY3kgYEh0dHBJbnRlcmNlcHRvcmAgdG8gdGhlXG4gKiBgQ2hhaW5lZEludGVyY2VwdG9yRm5gIGludGVyZmFjZS5cbiAqL1xuZnVuY3Rpb24gYWRhcHRMZWdhY3lJbnRlcmNlcHRvclRvQ2hhaW4oXG4gIGNoYWluVGFpbEZuOiBDaGFpbmVkSW50ZXJjZXB0b3JGbjxhbnk+LFxuICBpbnRlcmNlcHRvcjogSHR0cEludGVyY2VwdG9yLFxuKTogQ2hhaW5lZEludGVyY2VwdG9yRm48YW55PiB7XG4gIHJldHVybiAoaW5pdGlhbFJlcXVlc3QsIGZpbmFsSGFuZGxlckZuKSA9PlxuICAgIGludGVyY2VwdG9yLmludGVyY2VwdChpbml0aWFsUmVxdWVzdCwge1xuICAgICAgaGFuZGxlOiAoZG93bnN0cmVhbVJlcXVlc3QpID0+IGNoYWluVGFpbEZuKGRvd25zdHJlYW1SZXF1ZXN0LCBmaW5hbEhhbmRsZXJGbiksXG4gICAgfSk7XG59XG5cbi8qKlxuICogQ29uc3RydWN0cyBhIGBDaGFpbmVkSW50ZXJjZXB0b3JGbmAgd2hpY2ggd3JhcHMgYW5kIGludm9rZXMgYSBmdW5jdGlvbmFsIGludGVyY2VwdG9yIGluIHRoZSBnaXZlblxuICogaW5qZWN0b3IuXG4gKi9cbmZ1bmN0aW9uIGNoYWluZWRJbnRlcmNlcHRvckZuKFxuICBjaGFpblRhaWxGbjogQ2hhaW5lZEludGVyY2VwdG9yRm48dW5rbm93bj4sXG4gIGludGVyY2VwdG9yRm46IEh0dHBJbnRlcmNlcHRvckZuLFxuICBpbmplY3RvcjogRW52aXJvbm1lbnRJbmplY3Rvcixcbik6IENoYWluZWRJbnRlcmNlcHRvckZuPHVua25vd24+IHtcbiAgcmV0dXJuIChpbml0aWFsUmVxdWVzdCwgZmluYWxIYW5kbGVyRm4pID0+XG4gICAgcnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PlxuICAgICAgaW50ZXJjZXB0b3JGbihpbml0aWFsUmVxdWVzdCwgKGRvd25zdHJlYW1SZXF1ZXN0KSA9PlxuICAgICAgICBjaGFpblRhaWxGbihkb3duc3RyZWFtUmVxdWVzdCwgZmluYWxIYW5kbGVyRm4pLFxuICAgICAgKSxcbiAgICApO1xufVxuXG4vKipcbiAqIEEgbXVsdGktcHJvdmlkZXIgdG9rZW4gdGhhdCByZXByZXNlbnRzIHRoZSBhcnJheSBvZiByZWdpc3RlcmVkXG4gKiBgSHR0cEludGVyY2VwdG9yYCBvYmplY3RzLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGNvbnN0IEhUVFBfSU5URVJDRVBUT1JTID0gbmV3IEluamVjdGlvblRva2VuPHJlYWRvbmx5IEh0dHBJbnRlcmNlcHRvcltdPihcbiAgbmdEZXZNb2RlID8gJ0hUVFBfSU5URVJDRVBUT1JTJyA6ICcnLFxuKTtcblxuLyoqXG4gKiBBIG11bHRpLXByb3ZpZGVkIHRva2VuIG9mIGBIdHRwSW50ZXJjZXB0b3JGbmBzLlxuICovXG5leHBvcnQgY29uc3QgSFRUUF9JTlRFUkNFUFRPUl9GTlMgPSBuZXcgSW5qZWN0aW9uVG9rZW48cmVhZG9ubHkgSHR0cEludGVyY2VwdG9yRm5bXT4oXG4gIG5nRGV2TW9kZSA/ICdIVFRQX0lOVEVSQ0VQVE9SX0ZOUycgOiAnJyxcbik7XG5cbi8qKlxuICogQSBtdWx0aS1wcm92aWRlZCB0b2tlbiBvZiBgSHR0cEludGVyY2VwdG9yRm5gcyB0aGF0IGFyZSBvbmx5IHNldCBpbiByb290LlxuICovXG5leHBvcnQgY29uc3QgSFRUUF9ST09UX0lOVEVSQ0VQVE9SX0ZOUyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxyZWFkb25seSBIdHRwSW50ZXJjZXB0b3JGbltdPihcbiAgbmdEZXZNb2RlID8gJ0hUVFBfUk9PVF9JTlRFUkNFUFRPUl9GTlMnIDogJycsXG4pO1xuXG4vLyBUT0RPKGF0c2NvdHQpOiBXZSBuZWVkIGEgbGFyZ2VyIGRpc2N1c3Npb24gYWJvdXQgc3RhYmlsaXR5IGFuZCB3aGF0IHNob3VsZCBjb250cmlidXRlIHRvIHN0YWJpbGl0eS5cbi8vIFNob3VsZCB0aGUgd2hvbGUgaW50ZXJjZXB0b3IgY2hhaW4gY29udHJpYnV0ZSB0byBzdGFiaWxpdHkgb3IganVzdCB0aGUgYmFja2VuZCByZXF1ZXN0ICM1NTA3NT9cbi8vIFNob3VsZCBIdHRwQ2xpZW50IGNvbnRyaWJ1dGUgdG8gc3RhYmlsaXR5IGF1dG9tYXRpY2FsbHkgYXQgYWxsP1xuZXhwb3J0IGNvbnN0IFJFUVVFU1RTX0NPTlRSSUJVVEVfVE9fU1RBQklMSVRZID0gbmV3IEluamVjdGlvblRva2VuPGJvb2xlYW4+KFxuICBuZ0Rldk1vZGUgPyAnUkVRVUVTVFNfQ09OVFJJQlVURV9UT19TVEFCSUxJVFknIDogJycsXG4gIHtwcm92aWRlZEluOiAncm9vdCcsIGZhY3Rvcnk6ICgpID0+IHRydWV9LFxuKTtcblxuLyoqXG4gKiBDcmVhdGVzIGFuIGBIdHRwSW50ZXJjZXB0b3JGbmAgd2hpY2ggbGF6aWx5IGluaXRpYWxpemVzIGFuIGludGVyY2VwdG9yIGNoYWluIGZyb20gdGhlIGxlZ2FjeVxuICogY2xhc3MtYmFzZWQgaW50ZXJjZXB0b3JzIGFuZCBydW5zIHRoZSByZXF1ZXN0IHRocm91Z2ggaXQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsZWdhY3lJbnRlcmNlcHRvckZuRmFjdG9yeSgpOiBIdHRwSW50ZXJjZXB0b3JGbiB7XG4gIGxldCBjaGFpbjogQ2hhaW5lZEludGVyY2VwdG9yRm48YW55PiB8IG51bGwgPSBudWxsO1xuXG4gIHJldHVybiAocmVxLCBoYW5kbGVyKSA9PiB7XG4gICAgaWYgKGNoYWluID09PSBudWxsKSB7XG4gICAgICBjb25zdCBpbnRlcmNlcHRvcnMgPSBpbmplY3QoSFRUUF9JTlRFUkNFUFRPUlMsIHtvcHRpb25hbDogdHJ1ZX0pID8/IFtdO1xuICAgICAgLy8gTm90ZTogaW50ZXJjZXB0b3JzIGFyZSB3cmFwcGVkIHJpZ2h0LXRvLWxlZnQgc28gdGhhdCBmaW5hbCBleGVjdXRpb24gb3JkZXIgaXNcbiAgICAgIC8vIGxlZnQtdG8tcmlnaHQuIFRoYXQgaXMsIGlmIGBpbnRlcmNlcHRvcnNgIGlzIHRoZSBhcnJheSBgW2EsIGIsIGNdYCwgd2Ugd2FudCB0b1xuICAgICAgLy8gcHJvZHVjZSBhIGNoYWluIHRoYXQgaXMgY29uY2VwdHVhbGx5IGBjKGIoYShlbmQpKSlgLCB3aGljaCB3ZSBidWlsZCBmcm9tIHRoZSBpbnNpZGVcbiAgICAgIC8vIG91dC5cbiAgICAgIGNoYWluID0gaW50ZXJjZXB0b3JzLnJlZHVjZVJpZ2h0KFxuICAgICAgICBhZGFwdExlZ2FjeUludGVyY2VwdG9yVG9DaGFpbixcbiAgICAgICAgaW50ZXJjZXB0b3JDaGFpbkVuZEZuIGFzIENoYWluZWRJbnRlcmNlcHRvckZuPGFueT4sXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHBlbmRpbmdUYXNrcyA9IGluamVjdChQZW5kaW5nVGFza3MpO1xuICAgIGNvbnN0IGNvbnRyaWJ1dGVUb1N0YWJpbGl0eSA9IGluamVjdChSRVFVRVNUU19DT05UUklCVVRFX1RPX1NUQUJJTElUWSk7XG4gICAgaWYgKGNvbnRyaWJ1dGVUb1N0YWJpbGl0eSkge1xuICAgICAgY29uc3QgdGFza0lkID0gcGVuZGluZ1Rhc2tzLmFkZCgpO1xuICAgICAgcmV0dXJuIGNoYWluKHJlcSwgaGFuZGxlcikucGlwZShmaW5hbGl6ZSgoKSA9PiBwZW5kaW5nVGFza3MucmVtb3ZlKHRhc2tJZCkpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNoYWluKHJlcSwgaGFuZGxlcik7XG4gICAgfVxuICB9O1xufVxuXG5sZXQgZmV0Y2hCYWNrZW5kV2FybmluZ0Rpc3BsYXllZCA9IGZhbHNlO1xuXG4vKiogSW50ZXJuYWwgZnVuY3Rpb24gdG8gcmVzZXQgdGhlIGZsYWcgaW4gdGVzdHMgKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNldEZldGNoQmFja2VuZFdhcm5pbmdGbGFnKCkge1xuICBmZXRjaEJhY2tlbmRXYXJuaW5nRGlzcGxheWVkID0gZmFsc2U7XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBIdHRwSW50ZXJjZXB0b3JIYW5kbGVyIGV4dGVuZHMgSHR0cEhhbmRsZXIge1xuICBwcml2YXRlIGNoYWluOiBDaGFpbmVkSW50ZXJjZXB0b3JGbjx1bmtub3duPiB8IG51bGwgPSBudWxsO1xuICBwcml2YXRlIHJlYWRvbmx5IHBlbmRpbmdUYXNrcyA9IGluamVjdChQZW5kaW5nVGFza3MpO1xuICBwcml2YXRlIHJlYWRvbmx5IGNvbnRyaWJ1dGVUb1N0YWJpbGl0eSA9IGluamVjdChSRVFVRVNUU19DT05UUklCVVRFX1RPX1NUQUJJTElUWSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBiYWNrZW5kOiBIdHRwQmFja2VuZCxcbiAgICBwcml2YXRlIGluamVjdG9yOiBFbnZpcm9ubWVudEluamVjdG9yLFxuICApIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLy8gV2Ugc3Ryb25nbHkgcmVjb21tZW5kIHVzaW5nIGZldGNoIGJhY2tlbmQgZm9yIEhUVFAgY2FsbHMgd2hlbiBTU1IgaXMgdXNlZFxuICAgIC8vIGZvciBhbiBhcHBsaWNhdGlvbi4gVGhlIGxvZ2ljIGJlbG93IGNoZWNrcyBpZiB0aGF0J3MgdGhlIGNhc2UgYW5kIHByb2R1Y2VzXG4gICAgLy8gYSB3YXJuaW5nIG90aGVyd2lzZS5cbiAgICBpZiAoKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkgJiYgIWZldGNoQmFja2VuZFdhcm5pbmdEaXNwbGF5ZWQpIHtcbiAgICAgIGNvbnN0IGlzU2VydmVyID0gaXNQbGF0Zm9ybVNlcnZlcihpbmplY3Rvci5nZXQoUExBVEZPUk1fSUQpKTtcbiAgICAgIGlmIChpc1NlcnZlciAmJiAhKHRoaXMuYmFja2VuZCBpbnN0YW5jZW9mIEZldGNoQmFja2VuZCkpIHtcbiAgICAgICAgZmV0Y2hCYWNrZW5kV2FybmluZ0Rpc3BsYXllZCA9IHRydWU7XG4gICAgICAgIGluamVjdG9yXG4gICAgICAgICAgLmdldChDb25zb2xlKVxuICAgICAgICAgIC53YXJuKFxuICAgICAgICAgICAgZm9ybWF0UnVudGltZUVycm9yKFxuICAgICAgICAgICAgICBSdW50aW1lRXJyb3JDb2RlLk5PVF9VU0lOR19GRVRDSF9CQUNLRU5EX0lOX1NTUixcbiAgICAgICAgICAgICAgJ0FuZ3VsYXIgZGV0ZWN0ZWQgdGhhdCBgSHR0cENsaWVudGAgaXMgbm90IGNvbmZpZ3VyZWQgJyArXG4gICAgICAgICAgICAgICAgXCJ0byB1c2UgYGZldGNoYCBBUElzLiBJdCdzIHN0cm9uZ2x5IHJlY29tbWVuZGVkIHRvIFwiICtcbiAgICAgICAgICAgICAgICAnZW5hYmxlIGBmZXRjaGAgZm9yIGFwcGxpY2F0aW9ucyB0aGF0IHVzZSBTZXJ2ZXItU2lkZSBSZW5kZXJpbmcgJyArXG4gICAgICAgICAgICAgICAgJ2ZvciBiZXR0ZXIgcGVyZm9ybWFuY2UgYW5kIGNvbXBhdGliaWxpdHkuICcgK1xuICAgICAgICAgICAgICAgICdUbyBlbmFibGUgYGZldGNoYCwgYWRkIHRoZSBgd2l0aEZldGNoKClgIHRvIHRoZSBgcHJvdmlkZUh0dHBDbGllbnQoKWAgJyArXG4gICAgICAgICAgICAgICAgJ2NhbGwgYXQgdGhlIHJvb3Qgb2YgdGhlIGFwcGxpY2F0aW9uLicsXG4gICAgICAgICAgICApLFxuICAgICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb3ZlcnJpZGUgaGFuZGxlKGluaXRpYWxSZXF1ZXN0OiBIdHRwUmVxdWVzdDxhbnk+KTogT2JzZXJ2YWJsZTxIdHRwRXZlbnQ8YW55Pj4ge1xuICAgIGlmICh0aGlzLmNoYWluID09PSBudWxsKSB7XG4gICAgICBjb25zdCBkZWR1cGVkSW50ZXJjZXB0b3JGbnMgPSBBcnJheS5mcm9tKFxuICAgICAgICBuZXcgU2V0KFtcbiAgICAgICAgICAuLi50aGlzLmluamVjdG9yLmdldChIVFRQX0lOVEVSQ0VQVE9SX0ZOUyksXG4gICAgICAgICAgLi4udGhpcy5pbmplY3Rvci5nZXQoSFRUUF9ST09UX0lOVEVSQ0VQVE9SX0ZOUywgW10pLFxuICAgICAgICBdKSxcbiAgICAgICk7XG5cbiAgICAgIC8vIE5vdGU6IGludGVyY2VwdG9ycyBhcmUgd3JhcHBlZCByaWdodC10by1sZWZ0IHNvIHRoYXQgZmluYWwgZXhlY3V0aW9uIG9yZGVyIGlzXG4gICAgICAvLyBsZWZ0LXRvLXJpZ2h0LiBUaGF0IGlzLCBpZiBgZGVkdXBlZEludGVyY2VwdG9yRm5zYCBpcyB0aGUgYXJyYXkgYFthLCBiLCBjXWAsIHdlIHdhbnQgdG9cbiAgICAgIC8vIHByb2R1Y2UgYSBjaGFpbiB0aGF0IGlzIGNvbmNlcHR1YWxseSBgYyhiKGEoZW5kKSkpYCwgd2hpY2ggd2UgYnVpbGQgZnJvbSB0aGUgaW5zaWRlXG4gICAgICAvLyBvdXQuXG4gICAgICB0aGlzLmNoYWluID0gZGVkdXBlZEludGVyY2VwdG9yRm5zLnJlZHVjZVJpZ2h0KFxuICAgICAgICAobmV4dFNlcXVlbmNlZEZuLCBpbnRlcmNlcHRvckZuKSA9PlxuICAgICAgICAgIGNoYWluZWRJbnRlcmNlcHRvckZuKG5leHRTZXF1ZW5jZWRGbiwgaW50ZXJjZXB0b3JGbiwgdGhpcy5pbmplY3RvciksXG4gICAgICAgIGludGVyY2VwdG9yQ2hhaW5FbmRGbiBhcyBDaGFpbmVkSW50ZXJjZXB0b3JGbjx1bmtub3duPixcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuY29udHJpYnV0ZVRvU3RhYmlsaXR5KSB7XG4gICAgICBjb25zdCB0YXNrSWQgPSB0aGlzLnBlbmRpbmdUYXNrcy5hZGQoKTtcbiAgICAgIHJldHVybiB0aGlzLmNoYWluKGluaXRpYWxSZXF1ZXN0LCAoZG93bnN0cmVhbVJlcXVlc3QpID0+XG4gICAgICAgIHRoaXMuYmFja2VuZC5oYW5kbGUoZG93bnN0cmVhbVJlcXVlc3QpLFxuICAgICAgKS5waXBlKGZpbmFsaXplKCgpID0+IHRoaXMucGVuZGluZ1Rhc2tzLnJlbW92ZSh0YXNrSWQpKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLmNoYWluKGluaXRpYWxSZXF1ZXN0LCAoZG93bnN0cmVhbVJlcXVlc3QpID0+XG4gICAgICAgIHRoaXMuYmFja2VuZC5oYW5kbGUoZG93bnN0cmVhbVJlcXVlc3QpLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiJdfQ==