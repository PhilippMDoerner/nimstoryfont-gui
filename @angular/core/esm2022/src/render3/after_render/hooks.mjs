/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { assertInInjectionContext } from '../../di';
import { Injector } from '../../di/injector';
import { inject } from '../../di/injector_compatibility';
import { DestroyRef } from '../../linker/destroy_ref';
import { performanceMarkFeature } from '../../util/performance';
import { assertNotInReactiveContext } from '../reactivity/asserts';
import { isPlatformBrowser } from '../util/misc_utils';
import { AfterRenderPhase } from './api';
import { AfterRenderImpl, AfterRenderManager, AfterRenderSequence, } from './manager';
export function afterRender(callbackOrSpec, options) {
    ngDevMode &&
        assertNotInReactiveContext(afterRender, 'Call `afterRender` outside of a reactive context. For example, schedule the render ' +
            'callback inside the component constructor`.');
    !options?.injector && assertInInjectionContext(afterRender);
    const injector = options?.injector ?? inject(Injector);
    if (!isPlatformBrowser(injector)) {
        return NOOP_AFTER_RENDER_REF;
    }
    performanceMarkFeature('NgAfterRender');
    return afterRenderImpl(callbackOrSpec, injector, options, /* once */ false);
}
export function afterNextRender(callbackOrSpec, options) {
    !options?.injector && assertInInjectionContext(afterNextRender);
    const injector = options?.injector ?? inject(Injector);
    if (!isPlatformBrowser(injector)) {
        return NOOP_AFTER_RENDER_REF;
    }
    performanceMarkFeature('NgAfterNextRender');
    return afterRenderImpl(callbackOrSpec, injector, options, /* once */ true);
}
function getHooks(callbackOrSpec, phase) {
    if (callbackOrSpec instanceof Function) {
        const hooks = [undefined, undefined, undefined, undefined];
        hooks[phase] = callbackOrSpec;
        return hooks;
    }
    else {
        return [
            callbackOrSpec.earlyRead,
            callbackOrSpec.write,
            callbackOrSpec.mixedReadWrite,
            callbackOrSpec.read,
        ];
    }
}
/**
 * Shared implementation for `afterRender` and `afterNextRender`.
 */
function afterRenderImpl(callbackOrSpec, injector, options, once) {
    const manager = injector.get(AfterRenderManager);
    // Lazily initialize the handler implementation, if necessary. This is so that it can be
    // tree-shaken if `afterRender` and `afterNextRender` aren't used.
    manager.impl ??= injector.get(AfterRenderImpl);
    const hooks = options?.phase ?? AfterRenderPhase.MixedReadWrite;
    const destroyRef = options?.manualCleanup !== true ? injector.get(DestroyRef) : null;
    const sequence = new AfterRenderSequence(manager.impl, getHooks(callbackOrSpec, hooks), once, destroyRef);
    manager.impl.register(sequence);
    return sequence;
}
/** `AfterRenderRef` that does nothing. */
const NOOP_AFTER_RENDER_REF = {
    destroy() { },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9va3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL2FmdGVyX3JlbmRlci9ob29rcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsd0JBQXdCLEVBQUMsTUFBTSxVQUFVLENBQUM7QUFDbEQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQzNDLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUN2RCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDOUQsT0FBTyxFQUFDLDBCQUEwQixFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDakUsT0FBTyxFQUFDLGlCQUFpQixFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDckQsT0FBTyxFQUFDLGdCQUFnQixFQUFpQixNQUFNLE9BQU8sQ0FBQztBQUN2RCxPQUFPLEVBRUwsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixtQkFBbUIsR0FDcEIsTUFBTSxXQUFXLENBQUM7QUE4TG5CLE1BQU0sVUFBVSxXQUFXLENBQ3pCLGNBT0ssRUFDTCxPQUE0QjtJQUU1QixTQUFTO1FBQ1AsMEJBQTBCLENBQ3hCLFdBQVcsRUFDWCxxRkFBcUY7WUFDbkYsNkNBQTZDLENBQ2hELENBQUM7SUFFSixDQUFDLE9BQU8sRUFBRSxRQUFRLElBQUksd0JBQXdCLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsTUFBTSxRQUFRLEdBQUcsT0FBTyxFQUFFLFFBQVEsSUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdkQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDakMsT0FBTyxxQkFBcUIsQ0FBQztJQUMvQixDQUFDO0lBRUQsc0JBQXNCLENBQUMsZUFBZSxDQUFDLENBQUM7SUFFeEMsT0FBTyxlQUFlLENBQUMsY0FBYyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzlFLENBQUM7QUFxSkQsTUFBTSxVQUFVLGVBQWUsQ0FDN0IsY0FPSyxFQUNMLE9BQTRCO0lBRTVCLENBQUMsT0FBTyxFQUFFLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUNoRSxNQUFNLFFBQVEsR0FBRyxPQUFPLEVBQUUsUUFBUSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUV2RCxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUNqQyxPQUFPLHFCQUFxQixDQUFDO0lBQy9CLENBQUM7SUFFRCxzQkFBc0IsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBRTVDLE9BQU8sZUFBZSxDQUFDLGNBQWMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM3RSxDQUFDO0FBRUQsU0FBUyxRQUFRLENBQ2YsY0FPSyxFQUNMLEtBQXVCO0lBRXZCLElBQUksY0FBYyxZQUFZLFFBQVEsRUFBRSxDQUFDO1FBQ3ZDLE1BQU0sS0FBSyxHQUFxQixDQUFDLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzdFLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxjQUFjLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO1NBQU0sQ0FBQztRQUNOLE9BQU87WUFDTCxjQUFjLENBQUMsU0FBUztZQUN4QixjQUFjLENBQUMsS0FBSztZQUNwQixjQUFjLENBQUMsY0FBYztZQUM3QixjQUFjLENBQUMsSUFBSTtTQUNwQixDQUFDO0lBQ0osQ0FBQztBQUNILENBQUM7QUFFRDs7R0FFRztBQUNILFNBQVMsZUFBZSxDQUN0QixjQU9LLEVBQ0wsUUFBa0IsRUFDbEIsT0FBdUMsRUFDdkMsSUFBYTtJQUViLE1BQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNqRCx3RkFBd0Y7SUFDeEYsa0VBQWtFO0lBQ2xFLE9BQU8sQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztJQUUvQyxNQUFNLEtBQUssR0FBRyxPQUFPLEVBQUUsS0FBSyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQztJQUNoRSxNQUFNLFVBQVUsR0FBRyxPQUFPLEVBQUUsYUFBYSxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ3JGLE1BQU0sUUFBUSxHQUFHLElBQUksbUJBQW1CLENBQ3RDLE9BQU8sQ0FBQyxJQUFJLEVBQ1osUUFBUSxDQUFDLGNBQWMsRUFBRSxLQUFLLENBQUMsRUFDL0IsSUFBSSxFQUNKLFVBQVUsQ0FDWCxDQUFDO0lBQ0YsT0FBTyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsT0FBTyxRQUFRLENBQUM7QUFDbEIsQ0FBQztBQUVELDBDQUEwQztBQUMxQyxNQUFNLHFCQUFxQixHQUFtQjtJQUM1QyxPQUFPLEtBQUksQ0FBQztDQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCB7YXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0fSBmcm9tICcuLi8uLi9kaSc7XG5pbXBvcnQge0luamVjdG9yfSBmcm9tICcuLi8uLi9kaS9pbmplY3Rvcic7XG5pbXBvcnQge2luamVjdH0gZnJvbSAnLi4vLi4vZGkvaW5qZWN0b3JfY29tcGF0aWJpbGl0eSc7XG5pbXBvcnQge0Rlc3Ryb3lSZWZ9IGZyb20gJy4uLy4uL2xpbmtlci9kZXN0cm95X3JlZic7XG5pbXBvcnQge3BlcmZvcm1hbmNlTWFya0ZlYXR1cmV9IGZyb20gJy4uLy4uL3V0aWwvcGVyZm9ybWFuY2UnO1xuaW1wb3J0IHthc3NlcnROb3RJblJlYWN0aXZlQ29udGV4dH0gZnJvbSAnLi4vcmVhY3Rpdml0eS9hc3NlcnRzJztcbmltcG9ydCB7aXNQbGF0Zm9ybUJyb3dzZXJ9IGZyb20gJy4uL3V0aWwvbWlzY191dGlscyc7XG5pbXBvcnQge0FmdGVyUmVuZGVyUGhhc2UsIEFmdGVyUmVuZGVyUmVmfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge1xuICBBZnRlclJlbmRlckhvb2tzLFxuICBBZnRlclJlbmRlckltcGwsXG4gIEFmdGVyUmVuZGVyTWFuYWdlcixcbiAgQWZ0ZXJSZW5kZXJTZXF1ZW5jZSxcbn0gZnJvbSAnLi9tYW5hZ2VyJztcblxuLyoqXG4gKiBBbiBhcmd1bWVudCBsaXN0IGNvbnRhaW5pbmcgdGhlIGZpcnN0IG5vbi1uZXZlciB0eXBlIGluIHRoZSBnaXZlbiB0eXBlIGFycmF5LCBvciBhbiBlbXB0eVxuICogYXJndW1lbnQgbGlzdCBpZiB0aGVyZSBhcmUgbm8gbm9uLW5ldmVyIHR5cGVzIGluIHRoZSB0eXBlIGFycmF5LlxuICovXG5leHBvcnQgdHlwZSDJtUZpcnN0QXZhaWxhYmxlPFQgZXh0ZW5kcyB1bmtub3duW10+ID0gVCBleHRlbmRzIFtpbmZlciBILCAuLi5pbmZlciBSXVxuICA/IFtIXSBleHRlbmRzIFtuZXZlcl1cbiAgICA/IMm1Rmlyc3RBdmFpbGFibGU8Uj5cbiAgICA6IFtIXVxuICA6IFtdO1xuXG4vKipcbiAqIE9wdGlvbnMgcGFzc2VkIHRvIGBhZnRlclJlbmRlcmAgYW5kIGBhZnRlck5leHRSZW5kZXJgLlxuICpcbiAqIEBkZXZlbG9wZXJQcmV2aWV3XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQWZ0ZXJSZW5kZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIFRoZSBgSW5qZWN0b3JgIHRvIHVzZSBkdXJpbmcgY3JlYXRpb24uXG4gICAqXG4gICAqIElmIHRoaXMgaXMgbm90IHByb3ZpZGVkLCB0aGUgY3VycmVudCBpbmplY3Rpb24gY29udGV4dCB3aWxsIGJlIHVzZWQgaW5zdGVhZCAodmlhIGBpbmplY3RgKS5cbiAgICovXG4gIGluamVjdG9yPzogSW5qZWN0b3I7XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGhvb2sgc2hvdWxkIHJlcXVpcmUgbWFudWFsIGNsZWFudXAuXG4gICAqXG4gICAqIElmIHRoaXMgaXMgYGZhbHNlYCAodGhlIGRlZmF1bHQpIHRoZSBob29rIHdpbGwgYXV0b21hdGljYWxseSByZWdpc3RlciBpdHNlbGYgdG8gYmUgY2xlYW5lZCB1cFxuICAgKiB3aXRoIHRoZSBjdXJyZW50IGBEZXN0cm95UmVmYC5cbiAgICovXG4gIG1hbnVhbENsZWFudXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaGUgcGhhc2UgdGhlIGNhbGxiYWNrIHNob3VsZCBiZSBpbnZva2VkIGluLlxuICAgKlxuICAgKiA8ZGl2IGNsYXNzPVwiYWxlcnQgaXMtY3JpdGljYWxcIj5cbiAgICpcbiAgICogRGVmYXVsdHMgdG8gYEFmdGVyUmVuZGVyUGhhc2UuTWl4ZWRSZWFkV3JpdGVgLiBZb3Ugc2hvdWxkIGNob29zZSBhIG1vcmUgc3BlY2lmaWNcbiAgICogcGhhc2UgaW5zdGVhZC4gU2VlIGBBZnRlclJlbmRlclBoYXNlYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICpcbiAgICogPC9kaXY+XG4gICAqXG4gICAqIEBkZXByZWNhdGVkIFNwZWNpZnkgdGhlIHBoYXNlIGZvciB5b3VyIGNhbGxiYWNrIHRvIHJ1biBpbiBieSBwYXNzaW5nIGEgc3BlYy1vYmplY3QgYXMgdGhlIGZpcnN0XG4gICAqICAgcGFyYW1ldGVyIHRvIGBhZnRlclJlbmRlcmAgb3IgYGFmdGVyTmV4dFJlbmRlcmAgaW5zdGVhZCBvZiBhIGZ1bmN0aW9uLlxuICAgKi9cbiAgcGhhc2U/OiBBZnRlclJlbmRlclBoYXNlO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGNhbGxiYWNrcyB0byBiZSBpbnZva2VkIGVhY2ggdGltZSB0aGUgYXBwbGljYXRpb24gZmluaXNoZXMgcmVuZGVyaW5nLCBkdXJpbmcgdGhlXG4gKiBzcGVjaWZpZWQgcGhhc2VzLiBUaGUgYXZhaWxhYmxlIHBoYXNlcyBhcmU6XG4gKiAtIGBlYXJseVJlYWRgXG4gKiAgIFVzZSB0aGlzIHBoYXNlIHRvICoqcmVhZCoqIGZyb20gdGhlIERPTSBiZWZvcmUgYSBzdWJzZXF1ZW50IGB3cml0ZWAgY2FsbGJhY2ssIGZvciBleGFtcGxlIHRvXG4gKiAgIHBlcmZvcm0gY3VzdG9tIGxheW91dCB0aGF0IHRoZSBicm93c2VyIGRvZXNuJ3QgbmF0aXZlbHkgc3VwcG9ydC4gUHJlZmVyIHRoZSBgcmVhZGAgcGhhc2UgaWZcbiAqICAgcmVhZGluZyBjYW4gd2FpdCB1bnRpbCBhZnRlciB0aGUgd3JpdGUgcGhhc2UuICoqTmV2ZXIqKiB3cml0ZSB0byB0aGUgRE9NIGluIHRoaXMgcGhhc2UuXG4gKiAtIGB3cml0ZWBcbiAqICAgIFVzZSB0aGlzIHBoYXNlIHRvICoqd3JpdGUqKiB0byB0aGUgRE9NLiAqKk5ldmVyKiogcmVhZCBmcm9tIHRoZSBET00gaW4gdGhpcyBwaGFzZS5cbiAqIC0gYG1peGVkUmVhZFdyaXRlYFxuICogICAgVXNlIHRoaXMgcGhhc2UgdG8gcmVhZCBmcm9tIGFuZCB3cml0ZSB0byB0aGUgRE9NIHNpbXVsdGFuZW91c2x5LiAqKk5ldmVyKiogdXNlIHRoaXMgcGhhc2UgaWZcbiAqICAgIGl0IGlzIHBvc3NpYmxlIHRvIGRpdmlkZSB0aGUgd29yayBhbW9uZyB0aGUgb3RoZXIgcGhhc2VzIGluc3RlYWQuXG4gKiAtIGByZWFkYFxuICogICAgVXNlIHRoaXMgcGhhc2UgdG8gKipyZWFkKiogZnJvbSB0aGUgRE9NLiAqKk5ldmVyKiogd3JpdGUgdG8gdGhlIERPTSBpbiB0aGlzIHBoYXNlLlxuICpcbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1jcml0aWNhbFwiPlxuICpcbiAqIFlvdSBzaG91bGQgcHJlZmVyIHVzaW5nIHRoZSBgcmVhZGAgYW5kIGB3cml0ZWAgcGhhc2VzIG92ZXIgdGhlIGBlYXJseVJlYWRgIGFuZCBgbWl4ZWRSZWFkV3JpdGVgXG4gKiBwaGFzZXMgd2hlbiBwb3NzaWJsZSwgdG8gYXZvaWQgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24uXG4gKlxuICogPC9kaXY+XG4gKlxuICogTm90ZSB0aGF0OlxuICogLSBDYWxsYmFja3MgcnVuIGluIHRoZSBmb2xsb3dpbmcgcGhhc2Ugb3JkZXIgKmFmdGVyIGVhY2ggcmVuZGVyKjpcbiAqICAgMS4gYGVhcmx5UmVhZGBcbiAqICAgMi4gYHdyaXRlYFxuICogICAzLiBgbWl4ZWRSZWFkV3JpdGVgXG4gKiAgIDQuIGByZWFkYFxuICogLSBDYWxsYmFja3MgaW4gdGhlIHNhbWUgcGhhc2UgcnVuIGluIHRoZSBvcmRlciB0aGV5IGFyZSByZWdpc3RlcmVkLlxuICogLSBDYWxsYmFja3MgcnVuIG9uIGJyb3dzZXIgcGxhdGZvcm1zIG9ubHksIHRoZXkgd2lsbCBub3QgcnVuIG9uIHRoZSBzZXJ2ZXIuXG4gKlxuICogVGhlIGZpcnN0IHBoYXNlIGNhbGxiYWNrIHRvIHJ1biBhcyBwYXJ0IG9mIHRoaXMgc3BlYyB3aWxsIHJlY2VpdmUgbm8gcGFyYW1ldGVycy4gRWFjaFxuICogc3Vic2VxdWVudCBwaGFzZSBjYWxsYmFjayBpbiB0aGlzIHNwZWMgd2lsbCByZWNlaXZlIHRoZSByZXR1cm4gdmFsdWUgb2YgdGhlIHByZXZpb3VzbHkgcnVuXG4gKiBwaGFzZSBjYWxsYmFjayBhcyBhIHBhcmFtZXRlci4gVGhpcyBjYW4gYmUgdXNlZCB0byBjb29yZGluYXRlIHdvcmsgYWNyb3NzIG11bHRpcGxlIHBoYXNlcy5cbiAqXG4gKiBBbmd1bGFyIGlzIHVuYWJsZSB0byB2ZXJpZnkgb3IgZW5mb3JjZSB0aGF0IHBoYXNlcyBhcmUgdXNlZCBjb3JyZWN0bHksIGFuZCBpbnN0ZWFkXG4gKiByZWxpZXMgb24gZWFjaCBkZXZlbG9wZXIgdG8gZm9sbG93IHRoZSBndWlkZWxpbmVzIGRvY3VtZW50ZWQgZm9yIGVhY2ggdmFsdWUgYW5kXG4gKiBjYXJlZnVsbHkgY2hvb3NlIHRoZSBhcHByb3ByaWF0ZSBvbmUsIHJlZmFjdG9yaW5nIHRoZWlyIGNvZGUgaWYgbmVjZXNzYXJ5LiBCeSBkb2luZ1xuICogc28sIEFuZ3VsYXIgaXMgYmV0dGVyIGFibGUgdG8gbWluaW1pemUgdGhlIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uIGFzc29jaWF0ZWQgd2l0aFxuICogbWFudWFsIERPTSBhY2Nlc3MsIGVuc3VyaW5nIHRoZSBiZXN0IGV4cGVyaWVuY2UgZm9yIHRoZSBlbmQgdXNlcnMgb2YgeW91ciBhcHBsaWNhdGlvblxuICogb3IgbGlicmFyeS5cbiAqXG4gKiA8ZGl2IGNsYXNzPVwiYWxlcnQgaXMtaW1wb3J0YW50XCI+XG4gKlxuICogQ29tcG9uZW50cyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgW2h5ZHJhdGVkXShndWlkZS9oeWRyYXRpb24pIGJlZm9yZSB0aGUgY2FsbGJhY2sgcnVucy5cbiAqIFlvdSBtdXN0IHVzZSBjYXV0aW9uIHdoZW4gZGlyZWN0bHkgcmVhZGluZyBvciB3cml0aW5nIHRoZSBET00gYW5kIGxheW91dC5cbiAqXG4gKiA8L2Rpdj5cbiAqXG4gKiBAcGFyYW0gc3BlYyBUaGUgY2FsbGJhY2sgZnVuY3Rpb25zIHRvIHJlZ2lzdGVyXG4gKiBAcGFyYW0gb3B0aW9ucyBPcHRpb25zIHRvIGNvbnRyb2wgdGhlIGJlaGF2aW9yIG9mIHRoZSBjYWxsYmFja1xuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogVXNlIGBhZnRlclJlbmRlcmAgdG8gcmVhZCBvciB3cml0ZSB0aGUgRE9NIGFmdGVyIGVhY2ggcmVuZGVyLlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0c1xuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8c3BhbiAjY29udGVudD57eyAuLi4gfX08L3NwYW4+YCxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTXlDb21wb25lbnQge1xuICogICBAVmlld0NoaWxkKCdjb250ZW50JykgY29udGVudFJlZjogRWxlbWVudFJlZjtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIGFmdGVyUmVuZGVyKHtcbiAqICAgICAgIHJlYWQ6ICgpID0+IHtcbiAqICAgICAgICAgY29uc29sZS5sb2coJ2NvbnRlbnQgaGVpZ2h0OiAnICsgdGhpcy5jb250ZW50UmVmLm5hdGl2ZUVsZW1lbnQuc2Nyb2xsSGVpZ2h0KTtcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQGRldmVsb3BlclByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyUmVuZGVyPEUgPSBuZXZlciwgVyA9IG5ldmVyLCBNID0gbmV2ZXI+KFxuICBzcGVjOiB7XG4gICAgZWFybHlSZWFkPzogKCkgPT4gRTtcbiAgICB3cml0ZT86ICguLi5hcmdzOiDJtUZpcnN0QXZhaWxhYmxlPFtFXT4pID0+IFc7XG4gICAgbWl4ZWRSZWFkV3JpdGU/OiAoLi4uYXJnczogybVGaXJzdEF2YWlsYWJsZTxbVywgRV0+KSA9PiBNO1xuICAgIHJlYWQ/OiAoLi4uYXJnczogybVGaXJzdEF2YWlsYWJsZTxbTSwgVywgRV0+KSA9PiB2b2lkO1xuICB9LFxuICBvcHRpb25zPzogT21pdDxBZnRlclJlbmRlck9wdGlvbnMsICdwaGFzZSc+LFxuKTogQWZ0ZXJSZW5kZXJSZWY7XG5cbi8qKlxuICogUmVnaXN0ZXIgYSBjYWxsYmFjayB0byBiZSBpbnZva2VkIGVhY2ggdGltZSB0aGUgYXBwbGljYXRpb24gZmluaXNoZXMgcmVuZGVyaW5nLCBkdXJpbmcgdGhlXG4gKiBgbWl4ZWRSZWFkV3JpdGVgIHBoYXNlLlxuICpcbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1jcml0aWNhbFwiPlxuICpcbiAqIFlvdSBzaG91bGQgcHJlZmVyIHNwZWNpZnlpbmcgYW4gZXhwbGljaXQgcGhhc2UgZm9yIHRoZSBjYWxsYmFjayBpbnN0ZWFkLCBvciB5b3UgcmlzayBzaWduaWZpY2FudFxuICogcGVyZm9ybWFuY2UgZGVncmFkYXRpb24uXG4gKlxuICogPC9kaXY+XG4gKlxuICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayB3aWxsIHJ1blxuICogLSBpbiB0aGUgb3JkZXIgaXQgd2FzIHJlZ2lzdGVyZWRcbiAqIC0gb25jZSBwZXIgcmVuZGVyXG4gKiAtIG9uIGJyb3dzZXIgcGxhdGZvcm1zIG9ubHlcbiAqIC0gZHVyaW5nIHRoZSBgbWl4ZWRSZWFkV3JpdGVgIHBoYXNlXG4gKlxuICogPGRpdiBjbGFzcz1cImFsZXJ0IGlzLWltcG9ydGFudFwiPlxuICpcbiAqIENvbXBvbmVudHMgYXJlIG5vdCBndWFyYW50ZWVkIHRvIGJlIFtoeWRyYXRlZF0oZ3VpZGUvaHlkcmF0aW9uKSBiZWZvcmUgdGhlIGNhbGxiYWNrIHJ1bnMuXG4gKiBZb3UgbXVzdCB1c2UgY2F1dGlvbiB3aGVuIGRpcmVjdGx5IHJlYWRpbmcgb3Igd3JpdGluZyB0aGUgRE9NIGFuZCBsYXlvdXQuXG4gKlxuICogPC9kaXY+XG4gKlxuICogQHBhcmFtIGNhbGxiYWNrIEEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gcmVnaXN0ZXJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gY29udHJvbCB0aGUgYmVoYXZpb3Igb2YgdGhlIGNhbGxiYWNrXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBVc2UgYGFmdGVyUmVuZGVyYCB0byByZWFkIG9yIHdyaXRlIHRoZSBET00gYWZ0ZXIgZWFjaCByZW5kZXIuXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqIGBgYHRzXG4gKiBAQ29tcG9uZW50KHtcbiAqICAgc2VsZWN0b3I6ICdteS1jbXAnLFxuICogICB0ZW1wbGF0ZTogYDxzcGFuICNjb250ZW50Pnt7IC4uLiB9fTwvc3Bhbj5gLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCB7XG4gKiAgIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50UmVmOiBFbGVtZW50UmVmO1xuICpcbiAqICAgY29uc3RydWN0b3IoKSB7XG4gKiAgICAgYWZ0ZXJSZW5kZXIoe1xuICogICAgICAgcmVhZDogKCkgPT4ge1xuICogICAgICAgICBjb25zb2xlLmxvZygnY29udGVudCBoZWlnaHQ6ICcgKyB0aGlzLmNvbnRlbnRSZWYubmF0aXZlRWxlbWVudC5zY3JvbGxIZWlnaHQpO1xuICogICAgICAgfVxuICogICAgIH0pO1xuICogICB9XG4gKiB9XG4gKiBgYGBcbiAqXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJSZW5kZXIoY2FsbGJhY2s6IFZvaWRGdW5jdGlvbiwgb3B0aW9ucz86IEFmdGVyUmVuZGVyT3B0aW9ucyk6IEFmdGVyUmVuZGVyUmVmO1xuXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJSZW5kZXIoXG4gIGNhbGxiYWNrT3JTcGVjOlxuICAgIHwgVm9pZEZ1bmN0aW9uXG4gICAgfCB7XG4gICAgICAgIGVhcmx5UmVhZD86ICgpID0+IHVua25vd247XG4gICAgICAgIHdyaXRlPzogKHI/OiB1bmtub3duKSA9PiB1bmtub3duO1xuICAgICAgICBtaXhlZFJlYWRXcml0ZT86IChyPzogdW5rbm93bikgPT4gdW5rbm93bjtcbiAgICAgICAgcmVhZD86IChyPzogdW5rbm93bikgPT4gdm9pZDtcbiAgICAgIH0sXG4gIG9wdGlvbnM/OiBBZnRlclJlbmRlck9wdGlvbnMsXG4pOiBBZnRlclJlbmRlclJlZiB7XG4gIG5nRGV2TW9kZSAmJlxuICAgIGFzc2VydE5vdEluUmVhY3RpdmVDb250ZXh0KFxuICAgICAgYWZ0ZXJSZW5kZXIsXG4gICAgICAnQ2FsbCBgYWZ0ZXJSZW5kZXJgIG91dHNpZGUgb2YgYSByZWFjdGl2ZSBjb250ZXh0LiBGb3IgZXhhbXBsZSwgc2NoZWR1bGUgdGhlIHJlbmRlciAnICtcbiAgICAgICAgJ2NhbGxiYWNrIGluc2lkZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yYC4nLFxuICAgICk7XG5cbiAgIW9wdGlvbnM/LmluamVjdG9yICYmIGFzc2VydEluSW5qZWN0aW9uQ29udGV4dChhZnRlclJlbmRlcik7XG4gIGNvbnN0IGluamVjdG9yID0gb3B0aW9ucz8uaW5qZWN0b3IgPz8gaW5qZWN0KEluamVjdG9yKTtcblxuICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKGluamVjdG9yKSkge1xuICAgIHJldHVybiBOT09QX0FGVEVSX1JFTkRFUl9SRUY7XG4gIH1cblxuICBwZXJmb3JtYW5jZU1hcmtGZWF0dXJlKCdOZ0FmdGVyUmVuZGVyJyk7XG5cbiAgcmV0dXJuIGFmdGVyUmVuZGVySW1wbChjYWxsYmFja09yU3BlYywgaW5qZWN0b3IsIG9wdGlvbnMsIC8qIG9uY2UgKi8gZmFsc2UpO1xufVxuXG4vKipcbiAqIFJlZ2lzdGVyIGNhbGxiYWNrcyB0byBiZSBpbnZva2VkIHRoZSBuZXh0IHRpbWUgdGhlIGFwcGxpY2F0aW9uIGZpbmlzaGVzIHJlbmRlcmluZywgZHVyaW5nIHRoZVxuICogc3BlY2lmaWVkIHBoYXNlcy4gVGhlIGF2YWlsYWJsZSBwaGFzZXMgYXJlOlxuICogLSBgZWFybHlSZWFkYFxuICogICBVc2UgdGhpcyBwaGFzZSB0byAqKnJlYWQqKiBmcm9tIHRoZSBET00gYmVmb3JlIGEgc3Vic2VxdWVudCBgd3JpdGVgIGNhbGxiYWNrLCBmb3IgZXhhbXBsZSB0b1xuICogICBwZXJmb3JtIGN1c3RvbSBsYXlvdXQgdGhhdCB0aGUgYnJvd3NlciBkb2Vzbid0IG5hdGl2ZWx5IHN1cHBvcnQuIFByZWZlciB0aGUgYHJlYWRgIHBoYXNlIGlmXG4gKiAgIHJlYWRpbmcgY2FuIHdhaXQgdW50aWwgYWZ0ZXIgdGhlIHdyaXRlIHBoYXNlLiAqKk5ldmVyKiogd3JpdGUgdG8gdGhlIERPTSBpbiB0aGlzIHBoYXNlLlxuICogLSBgd3JpdGVgXG4gKiAgICBVc2UgdGhpcyBwaGFzZSB0byAqKndyaXRlKiogdG8gdGhlIERPTS4gKipOZXZlcioqIHJlYWQgZnJvbSB0aGUgRE9NIGluIHRoaXMgcGhhc2UuXG4gKiAtIGBtaXhlZFJlYWRXcml0ZWBcbiAqICAgIFVzZSB0aGlzIHBoYXNlIHRvIHJlYWQgZnJvbSBhbmQgd3JpdGUgdG8gdGhlIERPTSBzaW11bHRhbmVvdXNseS4gKipOZXZlcioqIHVzZSB0aGlzIHBoYXNlIGlmXG4gKiAgICBpdCBpcyBwb3NzaWJsZSB0byBkaXZpZGUgdGhlIHdvcmsgYW1vbmcgdGhlIG90aGVyIHBoYXNlcyBpbnN0ZWFkLlxuICogLSBgcmVhZGBcbiAqICAgIFVzZSB0aGlzIHBoYXNlIHRvICoqcmVhZCoqIGZyb20gdGhlIERPTS4gKipOZXZlcioqIHdyaXRlIHRvIHRoZSBET00gaW4gdGhpcyBwaGFzZS5cbiAqXG4gKiA8ZGl2IGNsYXNzPVwiYWxlcnQgaXMtY3JpdGljYWxcIj5cbiAqXG4gKiBZb3Ugc2hvdWxkIHByZWZlciB1c2luZyB0aGUgYHJlYWRgIGFuZCBgd3JpdGVgIHBoYXNlcyBvdmVyIHRoZSBgZWFybHlSZWFkYCBhbmQgYG1peGVkUmVhZFdyaXRlYFxuICogcGhhc2VzIHdoZW4gcG9zc2libGUsIHRvIGF2b2lkIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uLlxuICpcbiAqIDwvZGl2PlxuICpcbiAqIE5vdGUgdGhhdDpcbiAqIC0gQ2FsbGJhY2tzIHJ1biBpbiB0aGUgZm9sbG93aW5nIHBoYXNlIG9yZGVyICpvbmNlLCBhZnRlciB0aGUgbmV4dCByZW5kZXIqOlxuICogICAxLiBgZWFybHlSZWFkYFxuICogICAyLiBgd3JpdGVgXG4gKiAgIDMuIGBtaXhlZFJlYWRXcml0ZWBcbiAqICAgNC4gYHJlYWRgXG4gKiAtIENhbGxiYWNrcyBpbiB0aGUgc2FtZSBwaGFzZSBydW4gaW4gdGhlIG9yZGVyIHRoZXkgYXJlIHJlZ2lzdGVyZWQuXG4gKiAtIENhbGxiYWNrcyBydW4gb24gYnJvd3NlciBwbGF0Zm9ybXMgb25seSwgdGhleSB3aWxsIG5vdCBydW4gb24gdGhlIHNlcnZlci5cbiAqXG4gKiBUaGUgZmlyc3QgcGhhc2UgY2FsbGJhY2sgdG8gcnVuIGFzIHBhcnQgb2YgdGhpcyBzcGVjIHdpbGwgcmVjZWl2ZSBubyBwYXJhbWV0ZXJzLiBFYWNoXG4gKiBzdWJzZXF1ZW50IHBoYXNlIGNhbGxiYWNrIGluIHRoaXMgc3BlYyB3aWxsIHJlY2VpdmUgdGhlIHJldHVybiB2YWx1ZSBvZiB0aGUgcHJldmlvdXNseSBydW5cbiAqIHBoYXNlIGNhbGxiYWNrIGFzIGEgcGFyYW1ldGVyLiBUaGlzIGNhbiBiZSB1c2VkIHRvIGNvb3JkaW5hdGUgd29yayBhY3Jvc3MgbXVsdGlwbGUgcGhhc2VzLlxuICpcbiAqIEFuZ3VsYXIgaXMgdW5hYmxlIHRvIHZlcmlmeSBvciBlbmZvcmNlIHRoYXQgcGhhc2VzIGFyZSB1c2VkIGNvcnJlY3RseSwgYW5kIGluc3RlYWRcbiAqIHJlbGllcyBvbiBlYWNoIGRldmVsb3BlciB0byBmb2xsb3cgdGhlIGd1aWRlbGluZXMgZG9jdW1lbnRlZCBmb3IgZWFjaCB2YWx1ZSBhbmRcbiAqIGNhcmVmdWxseSBjaG9vc2UgdGhlIGFwcHJvcHJpYXRlIG9uZSwgcmVmYWN0b3JpbmcgdGhlaXIgY29kZSBpZiBuZWNlc3NhcnkuIEJ5IGRvaW5nXG4gKiBzbywgQW5ndWxhciBpcyBiZXR0ZXIgYWJsZSB0byBtaW5pbWl6ZSB0aGUgcGVyZm9ybWFuY2UgZGVncmFkYXRpb24gYXNzb2NpYXRlZCB3aXRoXG4gKiBtYW51YWwgRE9NIGFjY2VzcywgZW5zdXJpbmcgdGhlIGJlc3QgZXhwZXJpZW5jZSBmb3IgdGhlIGVuZCB1c2VycyBvZiB5b3VyIGFwcGxpY2F0aW9uXG4gKiBvciBsaWJyYXJ5LlxuICpcbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1pbXBvcnRhbnRcIj5cbiAqXG4gKiBDb21wb25lbnRzIGFyZSBub3QgZ3VhcmFudGVlZCB0byBiZSBbaHlkcmF0ZWRdKGd1aWRlL2h5ZHJhdGlvbikgYmVmb3JlIHRoZSBjYWxsYmFjayBydW5zLlxuICogWW91IG11c3QgdXNlIGNhdXRpb24gd2hlbiBkaXJlY3RseSByZWFkaW5nIG9yIHdyaXRpbmcgdGhlIERPTSBhbmQgbGF5b3V0LlxuICpcbiAqIDwvZGl2PlxuICpcbiAqIEBwYXJhbSBzcGVjIFRoZSBjYWxsYmFjayBmdW5jdGlvbnMgdG8gcmVnaXN0ZXJcbiAqIEBwYXJhbSBvcHRpb25zIE9wdGlvbnMgdG8gY29udHJvbCB0aGUgYmVoYXZpb3Igb2YgdGhlIGNhbGxiYWNrXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiBVc2UgYGFmdGVyTmV4dFJlbmRlcmAgdG8gcmVhZCBvciB3cml0ZSB0aGUgRE9NIG9uY2UsXG4gKiBmb3IgZXhhbXBsZSB0byBpbml0aWFsaXplIGEgbm9uLUFuZ3VsYXIgbGlicmFyeS5cbiAqXG4gKiAjIyMgRXhhbXBsZVxuICogYGBgdHNcbiAqIEBDb21wb25lbnQoe1xuICogICBzZWxlY3RvcjogJ215LWNoYXJ0LWNtcCcsXG4gKiAgIHRlbXBsYXRlOiBgPGRpdiAjY2hhcnQ+e3sgLi4uIH19PC9kaXY+YCxcbiAqIH0pXG4gKiBleHBvcnQgY2xhc3MgTXlDaGFydENtcCB7XG4gKiAgIEBWaWV3Q2hpbGQoJ2NoYXJ0JykgY2hhcnRSZWY6IEVsZW1lbnRSZWY7XG4gKiAgIGNoYXJ0OiBNeUNoYXJ0fG51bGw7XG4gKlxuICogICBjb25zdHJ1Y3RvcigpIHtcbiAqICAgICBhZnRlck5leHRSZW5kZXIoe1xuICogICAgICAgd3JpdGU6ICgpID0+IHtcbiAqICAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBNeUNoYXJ0KHRoaXMuY2hhcnRSZWYubmF0aXZlRWxlbWVudCk7XG4gKiAgICAgICB9XG4gKiAgICAgfSk7XG4gKiAgIH1cbiAqIH1cbiAqIGBgYFxuICpcbiAqIEBkZXZlbG9wZXJQcmV2aWV3XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhZnRlck5leHRSZW5kZXI8RSA9IG5ldmVyLCBXID0gbmV2ZXIsIE0gPSBuZXZlcj4oXG4gIHNwZWM6IHtcbiAgICBlYXJseVJlYWQ/OiAoKSA9PiBFO1xuICAgIHdyaXRlPzogKC4uLmFyZ3M6IMm1Rmlyc3RBdmFpbGFibGU8W0VdPikgPT4gVztcbiAgICBtaXhlZFJlYWRXcml0ZT86ICguLi5hcmdzOiDJtUZpcnN0QXZhaWxhYmxlPFtXLCBFXT4pID0+IE07XG4gICAgcmVhZD86ICguLi5hcmdzOiDJtUZpcnN0QXZhaWxhYmxlPFtNLCBXLCBFXT4pID0+IHZvaWQ7XG4gIH0sXG4gIG9wdGlvbnM/OiBPbWl0PEFmdGVyUmVuZGVyT3B0aW9ucywgJ3BoYXNlJz4sXG4pOiBBZnRlclJlbmRlclJlZjtcblxuLyoqXG4gKiBSZWdpc3RlciBhIGNhbGxiYWNrIHRvIGJlIGludm9rZWQgdGhlIG5leHQgdGltZSB0aGUgYXBwbGljYXRpb24gZmluaXNoZXMgcmVuZGVyaW5nLCBkdXJpbmcgdGhlXG4gKiBgbWl4ZWRSZWFkV3JpdGVgIHBoYXNlLlxuICpcbiAqIDxkaXYgY2xhc3M9XCJhbGVydCBpcy1jcml0aWNhbFwiPlxuICpcbiAqIFlvdSBzaG91bGQgcHJlZmVyIHNwZWNpZnlpbmcgYW4gZXhwbGljaXQgcGhhc2UgZm9yIHRoZSBjYWxsYmFjayBpbnN0ZWFkLCBvciB5b3UgcmlzayBzaWduaWZpY2FudFxuICogcGVyZm9ybWFuY2UgZGVncmFkYXRpb24uXG4gKlxuICogPC9kaXY+XG4gKlxuICogTm90ZSB0aGF0IHRoZSBjYWxsYmFjayB3aWxsIHJ1blxuICogLSBpbiB0aGUgb3JkZXIgaXQgd2FzIHJlZ2lzdGVyZWRcbiAqIC0gb24gYnJvd3NlciBwbGF0Zm9ybXMgb25seVxuICogLSBkdXJpbmcgdGhlIGBtaXhlZFJlYWRXcml0ZWAgcGhhc2VcbiAqXG4gKiA8ZGl2IGNsYXNzPVwiYWxlcnQgaXMtaW1wb3J0YW50XCI+XG4gKlxuICogQ29tcG9uZW50cyBhcmUgbm90IGd1YXJhbnRlZWQgdG8gYmUgW2h5ZHJhdGVkXShndWlkZS9oeWRyYXRpb24pIGJlZm9yZSB0aGUgY2FsbGJhY2sgcnVucy5cbiAqIFlvdSBtdXN0IHVzZSBjYXV0aW9uIHdoZW4gZGlyZWN0bHkgcmVhZGluZyBvciB3cml0aW5nIHRoZSBET00gYW5kIGxheW91dC5cbiAqXG4gKiA8L2Rpdj5cbiAqXG4gKiBAcGFyYW0gY2FsbGJhY2sgQSBjYWxsYmFjayBmdW5jdGlvbiB0byByZWdpc3RlclxuICogQHBhcmFtIG9wdGlvbnMgT3B0aW9ucyB0byBjb250cm9sIHRoZSBiZWhhdmlvciBvZiB0aGUgY2FsbGJhY2tcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIFVzZSBgYWZ0ZXJOZXh0UmVuZGVyYCB0byByZWFkIG9yIHdyaXRlIHRoZSBET00gb25jZSxcbiAqIGZvciBleGFtcGxlIHRvIGluaXRpYWxpemUgYSBub24tQW5ndWxhciBsaWJyYXJ5LlxuICpcbiAqICMjIyBFeGFtcGxlXG4gKiBgYGB0c1xuICogQENvbXBvbmVudCh7XG4gKiAgIHNlbGVjdG9yOiAnbXktY2hhcnQtY21wJyxcbiAqICAgdGVtcGxhdGU6IGA8ZGl2ICNjaGFydD57eyAuLi4gfX08L2Rpdj5gLFxuICogfSlcbiAqIGV4cG9ydCBjbGFzcyBNeUNoYXJ0Q21wIHtcbiAqICAgQFZpZXdDaGlsZCgnY2hhcnQnKSBjaGFydFJlZjogRWxlbWVudFJlZjtcbiAqICAgY2hhcnQ6IE15Q2hhcnR8bnVsbDtcbiAqXG4gKiAgIGNvbnN0cnVjdG9yKCkge1xuICogICAgIGFmdGVyTmV4dFJlbmRlcih7XG4gKiAgICAgICB3cml0ZTogKCkgPT4ge1xuICogICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IE15Q2hhcnQodGhpcy5jaGFydFJlZi5uYXRpdmVFbGVtZW50KTtcbiAqICAgICAgIH1cbiAqICAgICB9KTtcbiAqICAgfVxuICogfVxuICogYGBgXG4gKlxuICogQGRldmVsb3BlclByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFmdGVyTmV4dFJlbmRlcihcbiAgY2FsbGJhY2s6IFZvaWRGdW5jdGlvbixcbiAgb3B0aW9ucz86IEFmdGVyUmVuZGVyT3B0aW9ucyxcbik6IEFmdGVyUmVuZGVyUmVmO1xuXG5leHBvcnQgZnVuY3Rpb24gYWZ0ZXJOZXh0UmVuZGVyKFxuICBjYWxsYmFja09yU3BlYzpcbiAgICB8IFZvaWRGdW5jdGlvblxuICAgIHwge1xuICAgICAgICBlYXJseVJlYWQ/OiAoKSA9PiB1bmtub3duO1xuICAgICAgICB3cml0ZT86IChyPzogdW5rbm93bikgPT4gdW5rbm93bjtcbiAgICAgICAgbWl4ZWRSZWFkV3JpdGU/OiAocj86IHVua25vd24pID0+IHVua25vd247XG4gICAgICAgIHJlYWQ/OiAocj86IHVua25vd24pID0+IHZvaWQ7XG4gICAgICB9LFxuICBvcHRpb25zPzogQWZ0ZXJSZW5kZXJPcHRpb25zLFxuKTogQWZ0ZXJSZW5kZXJSZWYge1xuICAhb3B0aW9ucz8uaW5qZWN0b3IgJiYgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0KGFmdGVyTmV4dFJlbmRlcik7XG4gIGNvbnN0IGluamVjdG9yID0gb3B0aW9ucz8uaW5qZWN0b3IgPz8gaW5qZWN0KEluamVjdG9yKTtcblxuICBpZiAoIWlzUGxhdGZvcm1Ccm93c2VyKGluamVjdG9yKSkge1xuICAgIHJldHVybiBOT09QX0FGVEVSX1JFTkRFUl9SRUY7XG4gIH1cblxuICBwZXJmb3JtYW5jZU1hcmtGZWF0dXJlKCdOZ0FmdGVyTmV4dFJlbmRlcicpO1xuXG4gIHJldHVybiBhZnRlclJlbmRlckltcGwoY2FsbGJhY2tPclNwZWMsIGluamVjdG9yLCBvcHRpb25zLCAvKiBvbmNlICovIHRydWUpO1xufVxuXG5mdW5jdGlvbiBnZXRIb29rcyhcbiAgY2FsbGJhY2tPclNwZWM6XG4gICAgfCBWb2lkRnVuY3Rpb25cbiAgICB8IHtcbiAgICAgICAgZWFybHlSZWFkPzogKCkgPT4gdW5rbm93bjtcbiAgICAgICAgd3JpdGU/OiAocj86IHVua25vd24pID0+IHVua25vd247XG4gICAgICAgIG1peGVkUmVhZFdyaXRlPzogKHI/OiB1bmtub3duKSA9PiB1bmtub3duO1xuICAgICAgICByZWFkPzogKHI/OiB1bmtub3duKSA9PiB2b2lkO1xuICAgICAgfSxcbiAgcGhhc2U6IEFmdGVyUmVuZGVyUGhhc2UsXG4pOiBBZnRlclJlbmRlckhvb2tzIHtcbiAgaWYgKGNhbGxiYWNrT3JTcGVjIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICBjb25zdCBob29rczogQWZ0ZXJSZW5kZXJIb29rcyA9IFt1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWRdO1xuICAgIGhvb2tzW3BoYXNlXSA9IGNhbGxiYWNrT3JTcGVjO1xuICAgIHJldHVybiBob29rcztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW1xuICAgICAgY2FsbGJhY2tPclNwZWMuZWFybHlSZWFkLFxuICAgICAgY2FsbGJhY2tPclNwZWMud3JpdGUsXG4gICAgICBjYWxsYmFja09yU3BlYy5taXhlZFJlYWRXcml0ZSxcbiAgICAgIGNhbGxiYWNrT3JTcGVjLnJlYWQsXG4gICAgXTtcbiAgfVxufVxuXG4vKipcbiAqIFNoYXJlZCBpbXBsZW1lbnRhdGlvbiBmb3IgYGFmdGVyUmVuZGVyYCBhbmQgYGFmdGVyTmV4dFJlbmRlcmAuXG4gKi9cbmZ1bmN0aW9uIGFmdGVyUmVuZGVySW1wbChcbiAgY2FsbGJhY2tPclNwZWM6XG4gICAgfCBWb2lkRnVuY3Rpb25cbiAgICB8IHtcbiAgICAgICAgZWFybHlSZWFkPzogKCkgPT4gdW5rbm93bjtcbiAgICAgICAgd3JpdGU/OiAocj86IHVua25vd24pID0+IHVua25vd247XG4gICAgICAgIG1peGVkUmVhZFdyaXRlPzogKHI/OiB1bmtub3duKSA9PiB1bmtub3duO1xuICAgICAgICByZWFkPzogKHI/OiB1bmtub3duKSA9PiB2b2lkO1xuICAgICAgfSxcbiAgaW5qZWN0b3I6IEluamVjdG9yLFxuICBvcHRpb25zOiBBZnRlclJlbmRlck9wdGlvbnMgfCB1bmRlZmluZWQsXG4gIG9uY2U6IGJvb2xlYW4sXG4pOiBBZnRlclJlbmRlclJlZiB7XG4gIGNvbnN0IG1hbmFnZXIgPSBpbmplY3Rvci5nZXQoQWZ0ZXJSZW5kZXJNYW5hZ2VyKTtcbiAgLy8gTGF6aWx5IGluaXRpYWxpemUgdGhlIGhhbmRsZXIgaW1wbGVtZW50YXRpb24sIGlmIG5lY2Vzc2FyeS4gVGhpcyBpcyBzbyB0aGF0IGl0IGNhbiBiZVxuICAvLyB0cmVlLXNoYWtlbiBpZiBgYWZ0ZXJSZW5kZXJgIGFuZCBgYWZ0ZXJOZXh0UmVuZGVyYCBhcmVuJ3QgdXNlZC5cbiAgbWFuYWdlci5pbXBsID8/PSBpbmplY3Rvci5nZXQoQWZ0ZXJSZW5kZXJJbXBsKTtcblxuICBjb25zdCBob29rcyA9IG9wdGlvbnM/LnBoYXNlID8/IEFmdGVyUmVuZGVyUGhhc2UuTWl4ZWRSZWFkV3JpdGU7XG4gIGNvbnN0IGRlc3Ryb3lSZWYgPSBvcHRpb25zPy5tYW51YWxDbGVhbnVwICE9PSB0cnVlID8gaW5qZWN0b3IuZ2V0KERlc3Ryb3lSZWYpIDogbnVsbDtcbiAgY29uc3Qgc2VxdWVuY2UgPSBuZXcgQWZ0ZXJSZW5kZXJTZXF1ZW5jZShcbiAgICBtYW5hZ2VyLmltcGwsXG4gICAgZ2V0SG9va3MoY2FsbGJhY2tPclNwZWMsIGhvb2tzKSxcbiAgICBvbmNlLFxuICAgIGRlc3Ryb3lSZWYsXG4gICk7XG4gIG1hbmFnZXIuaW1wbC5yZWdpc3RlcihzZXF1ZW5jZSk7XG4gIHJldHVybiBzZXF1ZW5jZTtcbn1cblxuLyoqIGBBZnRlclJlbmRlclJlZmAgdGhhdCBkb2VzIG5vdGhpbmcuICovXG5jb25zdCBOT09QX0FGVEVSX1JFTkRFUl9SRUY6IEFmdGVyUmVuZGVyUmVmID0ge1xuICBkZXN0cm95KCkge30sXG59O1xuIl19