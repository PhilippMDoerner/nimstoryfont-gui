/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { internalProvideZoneChangeDetection } from '../change_detection/scheduling/ng_zone_scheduling';
import { createOrReusePlatformInjector } from '../platform/platform';
import { assertStandaloneComponentType } from '../render3/errors';
import { EnvironmentNgModuleRefAdapter } from '../render3/ng_module_ref';
import { ChangeDetectionScheduler } from '../change_detection/scheduling/zoneless_scheduling';
import { ChangeDetectionSchedulerImpl } from '../change_detection/scheduling/zoneless_scheduling_impl';
import { bootstrap } from '../platform/bootstrap';
/**
 * Internal create application API that implements the core application creation logic and optional
 * bootstrap logic.
 *
 * Platforms (such as `platform-browser`) may require different set of application and platform
 * providers for an application to function correctly. As a result, platforms may use this function
 * internally and supply the necessary providers during the bootstrap, while exposing
 * platform-specific APIs as a part of their public API.
 *
 * @returns A promise that returns an `ApplicationRef` instance once resolved.
 */
export function internalCreateApplication(config) {
    try {
        const { rootComponent, appProviders, platformProviders } = config;
        if ((typeof ngDevMode === 'undefined' || ngDevMode) && rootComponent !== undefined) {
            assertStandaloneComponentType(rootComponent);
        }
        const platformInjector = createOrReusePlatformInjector(platformProviders);
        // Create root application injector based on a set of providers configured at the platform
        // bootstrap level as well as providers passed to the bootstrap call by a user.
        const allAppProviders = [
            internalProvideZoneChangeDetection({}),
            { provide: ChangeDetectionScheduler, useExisting: ChangeDetectionSchedulerImpl },
            ...(appProviders || []),
        ];
        const adapter = new EnvironmentNgModuleRefAdapter({
            providers: allAppProviders,
            parent: platformInjector,
            debugName: typeof ngDevMode === 'undefined' || ngDevMode ? 'Environment Injector' : '',
            // We skip environment initializers because we need to run them inside the NgZone, which
            // happens after we get the NgZone instance from the Injector.
            runEnvironmentInitializers: false,
        });
        return bootstrap({
            r3Injector: adapter.injector,
            platformInjector,
            rootComponent,
        });
    }
    catch (e) {
        return Promise.reject(e);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX2FwcGxpY2F0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvYXBwbGljYXRpb24vY3JlYXRlX2FwcGxpY2F0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQyxrQ0FBa0MsRUFBQyxNQUFNLG1EQUFtRCxDQUFDO0FBSXJHLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ25FLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hFLE9BQU8sRUFBQyw2QkFBNkIsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBSXZFLE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLG9EQUFvRCxDQUFDO0FBQzVGLE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLHlEQUF5RCxDQUFDO0FBQ3JHLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUVoRDs7Ozs7Ozs7OztHQVVHO0FBRUgsTUFBTSxVQUFVLHlCQUF5QixDQUFDLE1BSXpDO0lBQ0MsSUFBSSxDQUFDO1FBQ0gsTUFBTSxFQUFDLGFBQWEsRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUMsR0FBRyxNQUFNLENBQUM7UUFFaEUsSUFBSSxDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsSUFBSSxhQUFhLEtBQUssU0FBUyxFQUFFLENBQUM7WUFDbkYsNkJBQTZCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDL0MsQ0FBQztRQUVELE1BQU0sZ0JBQWdCLEdBQUcsNkJBQTZCLENBQUMsaUJBQXFDLENBQUMsQ0FBQztRQUU5RiwwRkFBMEY7UUFDMUYsK0VBQStFO1FBQy9FLE1BQU0sZUFBZSxHQUFHO1lBQ3RCLGtDQUFrQyxDQUFDLEVBQUUsQ0FBQztZQUN0QyxFQUFDLE9BQU8sRUFBRSx3QkFBd0IsRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUM7WUFDOUUsR0FBRyxDQUFDLFlBQVksSUFBSSxFQUFFLENBQUM7U0FDeEIsQ0FBQztRQUNGLE1BQU0sT0FBTyxHQUFHLElBQUksNkJBQTZCLENBQUM7WUFDaEQsU0FBUyxFQUFFLGVBQWU7WUFDMUIsTUFBTSxFQUFFLGdCQUF1QztZQUMvQyxTQUFTLEVBQUUsT0FBTyxTQUFTLEtBQUssV0FBVyxJQUFJLFNBQVMsQ0FBQyxDQUFDLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDdEYsd0ZBQXdGO1lBQ3hGLDhEQUE4RDtZQUM5RCwwQkFBMEIsRUFBRSxLQUFLO1NBQ2xDLENBQUMsQ0FBQztRQUVILE9BQU8sU0FBUyxDQUFDO1lBQ2YsVUFBVSxFQUFFLE9BQU8sQ0FBQyxRQUFRO1lBQzVCLGdCQUFnQjtZQUNoQixhQUFhO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7UUFDWCxPQUFPLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCB7aW50ZXJuYWxQcm92aWRlWm9uZUNoYW5nZURldGVjdGlvbn0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbi9zY2hlZHVsaW5nL25nX3pvbmVfc2NoZWR1bGluZyc7XG5pbXBvcnQge0Vudmlyb25tZW50UHJvdmlkZXJzLCBQcm92aWRlciwgU3RhdGljUHJvdmlkZXJ9IGZyb20gJy4uL2RpL2ludGVyZmFjZS9wcm92aWRlcic7XG5pbXBvcnQge0Vudmlyb25tZW50SW5qZWN0b3J9IGZyb20gJy4uL2RpL3IzX2luamVjdG9yJztcbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vaW50ZXJmYWNlL3R5cGUnO1xuaW1wb3J0IHtjcmVhdGVPclJldXNlUGxhdGZvcm1JbmplY3Rvcn0gZnJvbSAnLi4vcGxhdGZvcm0vcGxhdGZvcm0nO1xuaW1wb3J0IHthc3NlcnRTdGFuZGFsb25lQ29tcG9uZW50VHlwZX0gZnJvbSAnLi4vcmVuZGVyMy9lcnJvcnMnO1xuaW1wb3J0IHtFbnZpcm9ubWVudE5nTW9kdWxlUmVmQWRhcHRlcn0gZnJvbSAnLi4vcmVuZGVyMy9uZ19tb2R1bGVfcmVmJztcbmltcG9ydCB7Tmdab25lfSBmcm9tICcuLi96b25lL25nX3pvbmUnO1xuXG5pbXBvcnQge19jYWxsQW5kUmVwb3J0VG9FcnJvckhhbmRsZXIsIEFwcGxpY2F0aW9uUmVmfSBmcm9tICcuL2FwcGxpY2F0aW9uX3JlZic7XG5pbXBvcnQge0NoYW5nZURldGVjdGlvblNjaGVkdWxlcn0gZnJvbSAnLi4vY2hhbmdlX2RldGVjdGlvbi9zY2hlZHVsaW5nL3pvbmVsZXNzX3NjaGVkdWxpbmcnO1xuaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TY2hlZHVsZXJJbXBsfSBmcm9tICcuLi9jaGFuZ2VfZGV0ZWN0aW9uL3NjaGVkdWxpbmcvem9uZWxlc3Nfc2NoZWR1bGluZ19pbXBsJztcbmltcG9ydCB7Ym9vdHN0cmFwfSBmcm9tICcuLi9wbGF0Zm9ybS9ib290c3RyYXAnO1xuXG4vKipcbiAqIEludGVybmFsIGNyZWF0ZSBhcHBsaWNhdGlvbiBBUEkgdGhhdCBpbXBsZW1lbnRzIHRoZSBjb3JlIGFwcGxpY2F0aW9uIGNyZWF0aW9uIGxvZ2ljIGFuZCBvcHRpb25hbFxuICogYm9vdHN0cmFwIGxvZ2ljLlxuICpcbiAqIFBsYXRmb3JtcyAoc3VjaCBhcyBgcGxhdGZvcm0tYnJvd3NlcmApIG1heSByZXF1aXJlIGRpZmZlcmVudCBzZXQgb2YgYXBwbGljYXRpb24gYW5kIHBsYXRmb3JtXG4gKiBwcm92aWRlcnMgZm9yIGFuIGFwcGxpY2F0aW9uIHRvIGZ1bmN0aW9uIGNvcnJlY3RseS4gQXMgYSByZXN1bHQsIHBsYXRmb3JtcyBtYXkgdXNlIHRoaXMgZnVuY3Rpb25cbiAqIGludGVybmFsbHkgYW5kIHN1cHBseSB0aGUgbmVjZXNzYXJ5IHByb3ZpZGVycyBkdXJpbmcgdGhlIGJvb3RzdHJhcCwgd2hpbGUgZXhwb3NpbmdcbiAqIHBsYXRmb3JtLXNwZWNpZmljIEFQSXMgYXMgYSBwYXJ0IG9mIHRoZWlyIHB1YmxpYyBBUEkuXG4gKlxuICogQHJldHVybnMgQSBwcm9taXNlIHRoYXQgcmV0dXJucyBhbiBgQXBwbGljYXRpb25SZWZgIGluc3RhbmNlIG9uY2UgcmVzb2x2ZWQuXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludGVybmFsQ3JlYXRlQXBwbGljYXRpb24oY29uZmlnOiB7XG4gIHJvb3RDb21wb25lbnQ/OiBUeXBlPHVua25vd24+O1xuICBhcHBQcm92aWRlcnM/OiBBcnJheTxQcm92aWRlciB8IEVudmlyb25tZW50UHJvdmlkZXJzPjtcbiAgcGxhdGZvcm1Qcm92aWRlcnM/OiBQcm92aWRlcltdO1xufSk6IFByb21pc2U8QXBwbGljYXRpb25SZWY+IHtcbiAgdHJ5IHtcbiAgICBjb25zdCB7cm9vdENvbXBvbmVudCwgYXBwUHJvdmlkZXJzLCBwbGF0Zm9ybVByb3ZpZGVyc30gPSBjb25maWc7XG5cbiAgICBpZiAoKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkgJiYgcm9vdENvbXBvbmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBhc3NlcnRTdGFuZGFsb25lQ29tcG9uZW50VHlwZShyb290Q29tcG9uZW50KTtcbiAgICB9XG5cbiAgICBjb25zdCBwbGF0Zm9ybUluamVjdG9yID0gY3JlYXRlT3JSZXVzZVBsYXRmb3JtSW5qZWN0b3IocGxhdGZvcm1Qcm92aWRlcnMgYXMgU3RhdGljUHJvdmlkZXJbXSk7XG5cbiAgICAvLyBDcmVhdGUgcm9vdCBhcHBsaWNhdGlvbiBpbmplY3RvciBiYXNlZCBvbiBhIHNldCBvZiBwcm92aWRlcnMgY29uZmlndXJlZCBhdCB0aGUgcGxhdGZvcm1cbiAgICAvLyBib290c3RyYXAgbGV2ZWwgYXMgd2VsbCBhcyBwcm92aWRlcnMgcGFzc2VkIHRvIHRoZSBib290c3RyYXAgY2FsbCBieSBhIHVzZXIuXG4gICAgY29uc3QgYWxsQXBwUHJvdmlkZXJzID0gW1xuICAgICAgaW50ZXJuYWxQcm92aWRlWm9uZUNoYW5nZURldGVjdGlvbih7fSksXG4gICAgICB7cHJvdmlkZTogQ2hhbmdlRGV0ZWN0aW9uU2NoZWR1bGVyLCB1c2VFeGlzdGluZzogQ2hhbmdlRGV0ZWN0aW9uU2NoZWR1bGVySW1wbH0sXG4gICAgICAuLi4oYXBwUHJvdmlkZXJzIHx8IFtdKSxcbiAgICBdO1xuICAgIGNvbnN0IGFkYXB0ZXIgPSBuZXcgRW52aXJvbm1lbnROZ01vZHVsZVJlZkFkYXB0ZXIoe1xuICAgICAgcHJvdmlkZXJzOiBhbGxBcHBQcm92aWRlcnMsXG4gICAgICBwYXJlbnQ6IHBsYXRmb3JtSW5qZWN0b3IgYXMgRW52aXJvbm1lbnRJbmplY3RvcixcbiAgICAgIGRlYnVnTmFtZTogdHlwZW9mIG5nRGV2TW9kZSA9PT0gJ3VuZGVmaW5lZCcgfHwgbmdEZXZNb2RlID8gJ0Vudmlyb25tZW50IEluamVjdG9yJyA6ICcnLFxuICAgICAgLy8gV2Ugc2tpcCBlbnZpcm9ubWVudCBpbml0aWFsaXplcnMgYmVjYXVzZSB3ZSBuZWVkIHRvIHJ1biB0aGVtIGluc2lkZSB0aGUgTmdab25lLCB3aGljaFxuICAgICAgLy8gaGFwcGVucyBhZnRlciB3ZSBnZXQgdGhlIE5nWm9uZSBpbnN0YW5jZSBmcm9tIHRoZSBJbmplY3Rvci5cbiAgICAgIHJ1bkVudmlyb25tZW50SW5pdGlhbGl6ZXJzOiBmYWxzZSxcbiAgICB9KTtcblxuICAgIHJldHVybiBib290c3RyYXAoe1xuICAgICAgcjNJbmplY3RvcjogYWRhcHRlci5pbmplY3RvcixcbiAgICAgIHBsYXRmb3JtSW5qZWN0b3IsXG4gICAgICByb290Q29tcG9uZW50LFxuICAgIH0pO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuICB9XG59XG4iXX0=