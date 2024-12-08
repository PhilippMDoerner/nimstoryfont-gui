/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/// <reference types="dom-view-transitions" />
import { DOCUMENT } from '@angular/common';
import { afterNextRender, InjectionToken, NgZone, runInInjectionContext, } from '@angular/core';
export const CREATE_VIEW_TRANSITION = new InjectionToken(ngDevMode ? 'view transition helper' : '');
export const VIEW_TRANSITION_OPTIONS = new InjectionToken(ngDevMode ? 'view transition options' : '');
/**
 * A helper function for using browser view transitions. This function skips the call to
 * `startViewTransition` if the browser does not support it.
 *
 * @returns A Promise that resolves when the view transition callback begins.
 */
export function createViewTransition(injector, from, to) {
    const transitionOptions = injector.get(VIEW_TRANSITION_OPTIONS);
    const document = injector.get(DOCUMENT);
    // Create promises outside the Angular zone to avoid causing extra change detections
    return injector.get(NgZone).runOutsideAngular(() => {
        if (!document.startViewTransition || transitionOptions.skipNextTransition) {
            transitionOptions.skipNextTransition = false;
            // The timing of `startViewTransition` is closer to a macrotask. It won't be called
            // until the current event loop exits so we use a promise resolved in a timeout instead
            // of Promise.resolve().
            return new Promise((resolve) => setTimeout(resolve));
        }
        let resolveViewTransitionStarted;
        const viewTransitionStarted = new Promise((resolve) => {
            resolveViewTransitionStarted = resolve;
        });
        const transition = document.startViewTransition(() => {
            resolveViewTransitionStarted();
            // We don't actually update dom within the transition callback. The resolving of the above
            // promise unblocks the Router navigation, which synchronously activates and deactivates
            // routes (the DOM update). This view transition waits for the next change detection to
            // complete (below), which includes the update phase of the routed components.
            return createRenderPromise(injector);
        });
        const { onViewTransitionCreated } = transitionOptions;
        if (onViewTransitionCreated) {
            runInInjectionContext(injector, () => onViewTransitionCreated({ transition, from, to }));
        }
        return viewTransitionStarted;
    });
}
/**
 * Creates a promise that resolves after next render.
 */
function createRenderPromise(injector) {
    return new Promise((resolve) => {
        // Wait for the microtask queue to empty after the next render happens (by waiting a macrotask).
        // This ensures any follow-up renders in the microtask queue are completed before the
        // view transition starts animating.
        afterNextRender({ read: () => setTimeout(resolve) }, { injector });
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld190cmFuc2l0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy91dGlscy92aWV3X3RyYW5zaXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsOENBQThDO0FBRTlDLE9BQU8sRUFBQyxRQUFRLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN6QyxPQUFPLEVBQ0wsZUFBZSxFQUNmLGNBQWMsRUFFZCxNQUFNLEVBQ04scUJBQXFCLEdBQ3RCLE1BQU0sZUFBZSxDQUFDO0FBSXZCLE1BQU0sQ0FBQyxNQUFNLHNCQUFzQixHQUFHLElBQUksY0FBYyxDQUN0RCxTQUFTLENBQUMsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQzFDLENBQUM7QUFDRixNQUFNLENBQUMsTUFBTSx1QkFBdUIsR0FBRyxJQUFJLGNBQWMsQ0FFdkQsU0FBUyxDQUFDLENBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7QUFtRTlDOzs7OztHQUtHO0FBQ0gsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxRQUFrQixFQUNsQixJQUE0QixFQUM1QixFQUEwQjtJQUUxQixNQUFNLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQztJQUNoRSxNQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3hDLG9GQUFvRjtJQUNwRixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsaUJBQWlCLENBQUMsR0FBRyxFQUFFO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsbUJBQW1CLElBQUksaUJBQWlCLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztZQUMxRSxpQkFBaUIsQ0FBQyxrQkFBa0IsR0FBRyxLQUFLLENBQUM7WUFDN0MsbUZBQW1GO1lBQ25GLHVGQUF1RjtZQUN2Rix3QkFBd0I7WUFDeEIsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7UUFDdkQsQ0FBQztRQUVELElBQUksNEJBQXdDLENBQUM7UUFDN0MsTUFBTSxxQkFBcUIsR0FBRyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzFELDRCQUE0QixHQUFHLE9BQU8sQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEVBQUU7WUFDbkQsNEJBQTRCLEVBQUUsQ0FBQztZQUMvQiwwRkFBMEY7WUFDMUYsd0ZBQXdGO1lBQ3hGLHVGQUF1RjtZQUN2Riw4RUFBOEU7WUFDOUUsT0FBTyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sRUFBQyx1QkFBdUIsRUFBQyxHQUFHLGlCQUFpQixDQUFDO1FBQ3BELElBQUksdUJBQXVCLEVBQUUsQ0FBQztZQUM1QixxQkFBcUIsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsdUJBQXVCLENBQUMsRUFBQyxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQztRQUN6RixDQUFDO1FBQ0QsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsbUJBQW1CLENBQUMsUUFBa0I7SUFDN0MsT0FBTyxJQUFJLE9BQU8sQ0FBTyxDQUFDLE9BQU8sRUFBRSxFQUFFO1FBQ25DLGdHQUFnRztRQUNoRyxxRkFBcUY7UUFDckYsb0NBQW9DO1FBQ3BDLGVBQWUsQ0FBQyxFQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUMsRUFBRSxFQUFDLFFBQVEsRUFBQyxDQUFDLENBQUM7SUFDakUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSB0eXBlcz1cImRvbS12aWV3LXRyYW5zaXRpb25zXCIgLz5cblxuaW1wb3J0IHtET0NVTUVOVH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7XG4gIGFmdGVyTmV4dFJlbmRlcixcbiAgSW5qZWN0aW9uVG9rZW4sXG4gIEluamVjdG9yLFxuICBOZ1pvbmUsXG4gIHJ1bkluSW5qZWN0aW9uQ29udGV4dCxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7QWN0aXZhdGVkUm91dGVTbmFwc2hvdH0gZnJvbSAnLi4vcm91dGVyX3N0YXRlJztcblxuZXhwb3J0IGNvbnN0IENSRUFURV9WSUVXX1RSQU5TSVRJT04gPSBuZXcgSW5qZWN0aW9uVG9rZW48dHlwZW9mIGNyZWF0ZVZpZXdUcmFuc2l0aW9uPihcbiAgbmdEZXZNb2RlID8gJ3ZpZXcgdHJhbnNpdGlvbiBoZWxwZXInIDogJycsXG4pO1xuZXhwb3J0IGNvbnN0IFZJRVdfVFJBTlNJVElPTl9PUFRJT05TID0gbmV3IEluamVjdGlvblRva2VuPFxuICBWaWV3VHJhbnNpdGlvbnNGZWF0dXJlT3B0aW9ucyAmIHtza2lwTmV4dFRyYW5zaXRpb246IGJvb2xlYW59XG4+KG5nRGV2TW9kZSA/ICd2aWV3IHRyYW5zaXRpb24gb3B0aW9ucycgOiAnJyk7XG5cbi8qKlxuICogT3B0aW9ucyB0byBjb25maWd1cmUgdGhlIFZpZXcgVHJhbnNpdGlvbnMgaW50ZWdyYXRpb24gaW4gdGhlIFJvdXRlci5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKiBAcHVibGljQXBpXG4gKiBAc2VlIHdpdGhWaWV3VHJhbnNpdGlvbnNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3VHJhbnNpdGlvbnNGZWF0dXJlT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBTa2lwcyB0aGUgdmVyeSBmaXJzdCBjYWxsIHRvIGBzdGFydFZpZXdUcmFuc2l0aW9uYC4gVGhpcyBjYW4gYmUgdXNlZnVsIGZvciBkaXNhYmxpbmcgdGhlXG4gICAqIGFuaW1hdGlvbiBkdXJpbmcgdGhlIGFwcGxpY2F0aW9uJ3MgaW5pdGlhbCBsb2FkaW5nIHBoYXNlLlxuICAgKi9cbiAgc2tpcEluaXRpYWxUcmFuc2l0aW9uPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBydW4gYWZ0ZXIgdGhlIGBWaWV3VHJhbnNpdGlvbmAgaXMgY3JlYXRlZC5cbiAgICpcbiAgICogVGhpcyBmdW5jdGlvbiBpcyBydW4gaW4gYW4gaW5qZWN0aW9uIGNvbnRleHQgYW5kIGNhbiB1c2UgYGluamVjdGAuXG4gICAqL1xuICBvblZpZXdUcmFuc2l0aW9uQ3JlYXRlZD86ICh0cmFuc2l0aW9uSW5mbzogVmlld1RyYW5zaXRpb25JbmZvKSA9PiB2b2lkO1xufVxuXG4vKipcbiAqIFRoZSBpbmZvcm1hdGlvbiBwYXNzZWQgdG8gdGhlIGBvblZpZXdUcmFuc2l0aW9uQ3JlYXRlZGAgZnVuY3Rpb24gcHJvdmlkZWQgaW4gdGhlXG4gKiBgd2l0aFZpZXdUcmFuc2l0aW9uc2AgZmVhdHVyZSBvcHRpb25zLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWaWV3VHJhbnNpdGlvbkluZm8ge1xuICAvLyBUT0RPKGF0c2NvdHQpOiBUaGlzIHR5cGUgY2FuL3Nob3VsZCBiZSB0aGUgYnVpbHQtaW4gYFZpZXdUcmFuc2l0aW9uYCB0eXBlXG4gIC8vIGZyb20gQHR5cGVzL2RvbS12aWV3LXRyYW5zaXRpb25zIGJ1dCBleHBvcnRpbmcgdGhhdCB0eXBlIGZyb20gdGhlIHB1YmxpYyBBUEkgaXMgY3VycmVudGx5IG5vdFxuICAvLyBzdXBwb3J0ZWQgYnkgdG9vbGluZy5cbiAgLyoqXG4gICAqIFRoZSBgVmlld1RyYW5zaXRpb25gIHJldHVybmVkIGJ5IHRoZSBjYWxsIHRvIGBzdGFydFZpZXdUcmFuc2l0aW9uYC5cbiAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVmlld1RyYW5zaXRpb25cbiAgICovXG4gIHRyYW5zaXRpb246IHtcbiAgICAvKipcbiAgICAgKiBAc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9WaWV3VHJhbnNpdGlvbi9maW5pc2hlZFxuICAgICAqL1xuICAgIGZpbmlzaGVkOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1ZpZXdUcmFuc2l0aW9uL3JlYWR5XG4gICAgICovXG4gICAgcmVhZHk6IFByb21pc2U8dm9pZD47XG4gICAgLyoqXG4gICAgICogQHNlZSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvVmlld1RyYW5zaXRpb24vdXBkYXRlQ2FsbGJhY2tEb25lXG4gICAgICovXG4gICAgdXBkYXRlQ2FsbGJhY2tEb25lOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIEBzZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1ZpZXdUcmFuc2l0aW9uL3NraXBUcmFuc2l0aW9uXG4gICAgICovXG4gICAgc2tpcFRyYW5zaXRpb24oKTogdm9pZDtcbiAgfTtcbiAgLyoqXG4gICAqIFRoZSBgQWN0aXZhdGVkUm91dGVTbmFwc2hvdGAgdGhhdCB0aGUgbmF2aWdhdGlvbiBpcyB0cmFuc2l0aW9uaW5nIGZyb20uXG4gICAqL1xuICBmcm9tOiBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90O1xuICAvKipcbiAgICogVGhlIGBBY3RpdmF0ZWRSb3V0ZVNuYXBzaG90YCB0aGF0IHRoZSBuYXZpZ2F0aW9uIGlzIHRyYW5zaXRpb25pbmcgdG8uXG4gICAqL1xuICB0bzogQWN0aXZhdGVkUm91dGVTbmFwc2hvdDtcbn1cblxuLyoqXG4gKiBBIGhlbHBlciBmdW5jdGlvbiBmb3IgdXNpbmcgYnJvd3NlciB2aWV3IHRyYW5zaXRpb25zLiBUaGlzIGZ1bmN0aW9uIHNraXBzIHRoZSBjYWxsIHRvXG4gKiBgc3RhcnRWaWV3VHJhbnNpdGlvbmAgaWYgdGhlIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCBpdC5cbiAqXG4gKiBAcmV0dXJucyBBIFByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIHRoZSB2aWV3IHRyYW5zaXRpb24gY2FsbGJhY2sgYmVnaW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVmlld1RyYW5zaXRpb24oXG4gIGluamVjdG9yOiBJbmplY3RvcixcbiAgZnJvbTogQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgdG86IEFjdGl2YXRlZFJvdXRlU25hcHNob3QsXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgdHJhbnNpdGlvbk9wdGlvbnMgPSBpbmplY3Rvci5nZXQoVklFV19UUkFOU0lUSU9OX09QVElPTlMpO1xuICBjb25zdCBkb2N1bWVudCA9IGluamVjdG9yLmdldChET0NVTUVOVCk7XG4gIC8vIENyZWF0ZSBwcm9taXNlcyBvdXRzaWRlIHRoZSBBbmd1bGFyIHpvbmUgdG8gYXZvaWQgY2F1c2luZyBleHRyYSBjaGFuZ2UgZGV0ZWN0aW9uc1xuICByZXR1cm4gaW5qZWN0b3IuZ2V0KE5nWm9uZSkucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuICAgIGlmICghZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbiB8fCB0cmFuc2l0aW9uT3B0aW9ucy5za2lwTmV4dFRyYW5zaXRpb24pIHtcbiAgICAgIHRyYW5zaXRpb25PcHRpb25zLnNraXBOZXh0VHJhbnNpdGlvbiA9IGZhbHNlO1xuICAgICAgLy8gVGhlIHRpbWluZyBvZiBgc3RhcnRWaWV3VHJhbnNpdGlvbmAgaXMgY2xvc2VyIHRvIGEgbWFjcm90YXNrLiBJdCB3b24ndCBiZSBjYWxsZWRcbiAgICAgIC8vIHVudGlsIHRoZSBjdXJyZW50IGV2ZW50IGxvb3AgZXhpdHMgc28gd2UgdXNlIGEgcHJvbWlzZSByZXNvbHZlZCBpbiBhIHRpbWVvdXQgaW5zdGVhZFxuICAgICAgLy8gb2YgUHJvbWlzZS5yZXNvbHZlKCkuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHNldFRpbWVvdXQocmVzb2x2ZSkpO1xuICAgIH1cblxuICAgIGxldCByZXNvbHZlVmlld1RyYW5zaXRpb25TdGFydGVkOiAoKSA9PiB2b2lkO1xuICAgIGNvbnN0IHZpZXdUcmFuc2l0aW9uU3RhcnRlZCA9IG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICByZXNvbHZlVmlld1RyYW5zaXRpb25TdGFydGVkID0gcmVzb2x2ZTtcbiAgICB9KTtcbiAgICBjb25zdCB0cmFuc2l0aW9uID0gZG9jdW1lbnQuc3RhcnRWaWV3VHJhbnNpdGlvbigoKSA9PiB7XG4gICAgICByZXNvbHZlVmlld1RyYW5zaXRpb25TdGFydGVkKCk7XG4gICAgICAvLyBXZSBkb24ndCBhY3R1YWxseSB1cGRhdGUgZG9tIHdpdGhpbiB0aGUgdHJhbnNpdGlvbiBjYWxsYmFjay4gVGhlIHJlc29sdmluZyBvZiB0aGUgYWJvdmVcbiAgICAgIC8vIHByb21pc2UgdW5ibG9ja3MgdGhlIFJvdXRlciBuYXZpZ2F0aW9uLCB3aGljaCBzeW5jaHJvbm91c2x5IGFjdGl2YXRlcyBhbmQgZGVhY3RpdmF0ZXNcbiAgICAgIC8vIHJvdXRlcyAodGhlIERPTSB1cGRhdGUpLiBUaGlzIHZpZXcgdHJhbnNpdGlvbiB3YWl0cyBmb3IgdGhlIG5leHQgY2hhbmdlIGRldGVjdGlvbiB0b1xuICAgICAgLy8gY29tcGxldGUgKGJlbG93KSwgd2hpY2ggaW5jbHVkZXMgdGhlIHVwZGF0ZSBwaGFzZSBvZiB0aGUgcm91dGVkIGNvbXBvbmVudHMuXG4gICAgICByZXR1cm4gY3JlYXRlUmVuZGVyUHJvbWlzZShpbmplY3Rvcik7XG4gICAgfSk7XG4gICAgY29uc3Qge29uVmlld1RyYW5zaXRpb25DcmVhdGVkfSA9IHRyYW5zaXRpb25PcHRpb25zO1xuICAgIGlmIChvblZpZXdUcmFuc2l0aW9uQ3JlYXRlZCkge1xuICAgICAgcnVuSW5JbmplY3Rpb25Db250ZXh0KGluamVjdG9yLCAoKSA9PiBvblZpZXdUcmFuc2l0aW9uQ3JlYXRlZCh7dHJhbnNpdGlvbiwgZnJvbSwgdG99KSk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3VHJhbnNpdGlvblN0YXJ0ZWQ7XG4gIH0pO1xufVxuXG4vKipcbiAqIENyZWF0ZXMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgYWZ0ZXIgbmV4dCByZW5kZXIuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVJlbmRlclByb21pc2UoaW5qZWN0b3I6IEluamVjdG9yKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgIC8vIFdhaXQgZm9yIHRoZSBtaWNyb3Rhc2sgcXVldWUgdG8gZW1wdHkgYWZ0ZXIgdGhlIG5leHQgcmVuZGVyIGhhcHBlbnMgKGJ5IHdhaXRpbmcgYSBtYWNyb3Rhc2spLlxuICAgIC8vIFRoaXMgZW5zdXJlcyBhbnkgZm9sbG93LXVwIHJlbmRlcnMgaW4gdGhlIG1pY3JvdGFzayBxdWV1ZSBhcmUgY29tcGxldGVkIGJlZm9yZSB0aGVcbiAgICAvLyB2aWV3IHRyYW5zaXRpb24gc3RhcnRzIGFuaW1hdGluZy5cbiAgICBhZnRlck5leHRSZW5kZXIoe3JlYWQ6ICgpID0+IHNldFRpbWVvdXQocmVzb2x2ZSl9LCB7aW5qZWN0b3J9KTtcbiAgfSk7XG59XG4iXX0=