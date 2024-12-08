/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { assertDefined } from '../../util/assert';
import { assertLView } from '../assert';
import { readPatchedLView } from '../context_discovery';
import { isLContainer, isLView } from '../interfaces/type_checks';
import { CHILD_HEAD, CONTEXT, FLAGS, NEXT } from '../interfaces/view';
import { getLViewParent } from './view_utils';
/**
 * Retrieve the root view from any component or `LView` by walking the parent `LView` until
 * reaching the root `LView`.
 *
 * @param componentOrLView any component or `LView`
 */
export function getRootView(componentOrLView) {
    ngDevMode && assertDefined(componentOrLView, 'component');
    let lView = isLView(componentOrLView) ? componentOrLView : readPatchedLView(componentOrLView);
    while (lView && !(lView[FLAGS] & 512 /* LViewFlags.IsRoot */)) {
        lView = getLViewParent(lView);
    }
    ngDevMode && assertLView(lView);
    return lView;
}
/**
 * Returns the context information associated with the application where the target is situated. It
 * does this by walking the parent views until it gets to the root view, then getting the context
 * off of that.
 *
 * @param viewOrComponent the `LView` or component to get the root context for.
 */
export function getRootContext(viewOrComponent) {
    const rootView = getRootView(viewOrComponent);
    ngDevMode &&
        assertDefined(rootView[CONTEXT], 'Root view has no context. Perhaps it is disconnected?');
    return rootView[CONTEXT];
}
/**
 * Gets the first `LContainer` in the LView or `null` if none exists.
 */
export function getFirstLContainer(lView) {
    return getNearestLContainer(lView[CHILD_HEAD]);
}
/**
 * Gets the next `LContainer` that is a sibling of the given container.
 */
export function getNextLContainer(container) {
    return getNearestLContainer(container[NEXT]);
}
function getNearestLContainer(viewOrContainer) {
    while (viewOrContainer !== null && !isLContainer(viewOrContainer)) {
        viewOrContainer = viewOrContainer[NEXT];
    }
    return viewOrContainer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld190cmF2ZXJzYWxfdXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9yZW5kZXIzL3V0aWwvdmlld190cmF2ZXJzYWxfdXRpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxXQUFXLENBQUM7QUFDdEMsT0FBTyxFQUFDLGdCQUFnQixFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFFdEQsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsVUFBVSxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQXFCLElBQUksRUFBUyxNQUFNLG9CQUFvQixDQUFDO0FBRS9GLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFFNUM7Ozs7O0dBS0c7QUFDSCxNQUFNLFVBQVUsV0FBVyxDQUFJLGdCQUE0QjtJQUN6RCxTQUFTLElBQUksYUFBYSxDQUFDLGdCQUFnQixFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzFELElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUUsQ0FBQztJQUMvRixPQUFPLEtBQUssSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyw4QkFBb0IsQ0FBQyxFQUFFLENBQUM7UUFDcEQsS0FBSyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUUsQ0FBQztJQUNqQyxDQUFDO0lBQ0QsU0FBUyxJQUFJLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxPQUFPLEtBQWlCLENBQUM7QUFDM0IsQ0FBQztBQUVEOzs7Ozs7R0FNRztBQUNILE1BQU0sVUFBVSxjQUFjLENBQUksZUFBOEI7SUFDOUQsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLGVBQWUsQ0FBQyxDQUFDO0lBQzlDLFNBQVM7UUFDUCxhQUFhLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxFQUFFLHVEQUF1RCxDQUFDLENBQUM7SUFDNUYsT0FBTyxRQUFRLENBQUMsT0FBTyxDQUFNLENBQUM7QUFDaEMsQ0FBQztBQUVEOztHQUVHO0FBQ0gsTUFBTSxVQUFVLGtCQUFrQixDQUFDLEtBQVk7SUFDN0MsT0FBTyxvQkFBb0IsQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztBQUNqRCxDQUFDO0FBRUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCLENBQUMsU0FBcUI7SUFDckQsT0FBTyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztBQUMvQyxDQUFDO0FBRUQsU0FBUyxvQkFBb0IsQ0FBQyxlQUEwQztJQUN0RSxPQUFPLGVBQWUsS0FBSyxJQUFJLElBQUksQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQztRQUNsRSxlQUFlLEdBQUcsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFDRCxPQUFPLGVBQW9DLENBQUM7QUFDOUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHthc3NlcnREZWZpbmVkfSBmcm9tICcuLi8uLi91dGlsL2Fzc2VydCc7XG5pbXBvcnQge2Fzc2VydExWaWV3fSBmcm9tICcuLi9hc3NlcnQnO1xuaW1wb3J0IHtyZWFkUGF0Y2hlZExWaWV3fSBmcm9tICcuLi9jb250ZXh0X2Rpc2NvdmVyeSc7XG5pbXBvcnQge0xDb250YWluZXJ9IGZyb20gJy4uL2ludGVyZmFjZXMvY29udGFpbmVyJztcbmltcG9ydCB7aXNMQ29udGFpbmVyLCBpc0xWaWV3fSBmcm9tICcuLi9pbnRlcmZhY2VzL3R5cGVfY2hlY2tzJztcbmltcG9ydCB7Q0hJTERfSEVBRCwgQ09OVEVYVCwgRkxBR1MsIExWaWV3LCBMVmlld0ZsYWdzLCBORVhULCBQQVJFTlR9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5cbmltcG9ydCB7Z2V0TFZpZXdQYXJlbnR9IGZyb20gJy4vdmlld191dGlscyc7XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIHJvb3QgdmlldyBmcm9tIGFueSBjb21wb25lbnQgb3IgYExWaWV3YCBieSB3YWxraW5nIHRoZSBwYXJlbnQgYExWaWV3YCB1bnRpbFxuICogcmVhY2hpbmcgdGhlIHJvb3QgYExWaWV3YC5cbiAqXG4gKiBAcGFyYW0gY29tcG9uZW50T3JMVmlldyBhbnkgY29tcG9uZW50IG9yIGBMVmlld2BcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RWaWV3PFQ+KGNvbXBvbmVudE9yTFZpZXc6IExWaWV3IHwge30pOiBMVmlldzxUPiB7XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnREZWZpbmVkKGNvbXBvbmVudE9yTFZpZXcsICdjb21wb25lbnQnKTtcbiAgbGV0IGxWaWV3ID0gaXNMVmlldyhjb21wb25lbnRPckxWaWV3KSA/IGNvbXBvbmVudE9yTFZpZXcgOiByZWFkUGF0Y2hlZExWaWV3KGNvbXBvbmVudE9yTFZpZXcpITtcbiAgd2hpbGUgKGxWaWV3ICYmICEobFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5Jc1Jvb3QpKSB7XG4gICAgbFZpZXcgPSBnZXRMVmlld1BhcmVudChsVmlldykhO1xuICB9XG4gIG5nRGV2TW9kZSAmJiBhc3NlcnRMVmlldyhsVmlldyk7XG4gIHJldHVybiBsVmlldyBhcyBMVmlldzxUPjtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBjb250ZXh0IGluZm9ybWF0aW9uIGFzc29jaWF0ZWQgd2l0aCB0aGUgYXBwbGljYXRpb24gd2hlcmUgdGhlIHRhcmdldCBpcyBzaXR1YXRlZC4gSXRcbiAqIGRvZXMgdGhpcyBieSB3YWxraW5nIHRoZSBwYXJlbnQgdmlld3MgdW50aWwgaXQgZ2V0cyB0byB0aGUgcm9vdCB2aWV3LCB0aGVuIGdldHRpbmcgdGhlIGNvbnRleHRcbiAqIG9mZiBvZiB0aGF0LlxuICpcbiAqIEBwYXJhbSB2aWV3T3JDb21wb25lbnQgdGhlIGBMVmlld2Agb3IgY29tcG9uZW50IHRvIGdldCB0aGUgcm9vdCBjb250ZXh0IGZvci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldFJvb3RDb250ZXh0PFQ+KHZpZXdPckNvbXBvbmVudDogTFZpZXc8VD4gfCB7fSk6IFQge1xuICBjb25zdCByb290VmlldyA9IGdldFJvb3RWaWV3KHZpZXdPckNvbXBvbmVudCk7XG4gIG5nRGV2TW9kZSAmJlxuICAgIGFzc2VydERlZmluZWQocm9vdFZpZXdbQ09OVEVYVF0sICdSb290IHZpZXcgaGFzIG5vIGNvbnRleHQuIFBlcmhhcHMgaXQgaXMgZGlzY29ubmVjdGVkPycpO1xuICByZXR1cm4gcm9vdFZpZXdbQ09OVEVYVF0gYXMgVDtcbn1cblxuLyoqXG4gKiBHZXRzIHRoZSBmaXJzdCBgTENvbnRhaW5lcmAgaW4gdGhlIExWaWV3IG9yIGBudWxsYCBpZiBub25lIGV4aXN0cy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEZpcnN0TENvbnRhaW5lcihsVmlldzogTFZpZXcpOiBMQ29udGFpbmVyIHwgbnVsbCB7XG4gIHJldHVybiBnZXROZWFyZXN0TENvbnRhaW5lcihsVmlld1tDSElMRF9IRUFEXSk7XG59XG5cbi8qKlxuICogR2V0cyB0aGUgbmV4dCBgTENvbnRhaW5lcmAgdGhhdCBpcyBhIHNpYmxpbmcgb2YgdGhlIGdpdmVuIGNvbnRhaW5lci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldE5leHRMQ29udGFpbmVyKGNvbnRhaW5lcjogTENvbnRhaW5lcik6IExDb250YWluZXIgfCBudWxsIHtcbiAgcmV0dXJuIGdldE5lYXJlc3RMQ29udGFpbmVyKGNvbnRhaW5lcltORVhUXSk7XG59XG5cbmZ1bmN0aW9uIGdldE5lYXJlc3RMQ29udGFpbmVyKHZpZXdPckNvbnRhaW5lcjogTENvbnRhaW5lciB8IExWaWV3IHwgbnVsbCkge1xuICB3aGlsZSAodmlld09yQ29udGFpbmVyICE9PSBudWxsICYmICFpc0xDb250YWluZXIodmlld09yQ29udGFpbmVyKSkge1xuICAgIHZpZXdPckNvbnRhaW5lciA9IHZpZXdPckNvbnRhaW5lcltORVhUXTtcbiAgfVxuICByZXR1cm4gdmlld09yQ29udGFpbmVyIGFzIExDb250YWluZXIgfCBudWxsO1xufVxuIl19