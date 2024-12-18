/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { CONTAINER_HEADER_OFFSET, DEHYDRATED_VIEWS, } from '../render3/interfaces/container';
import { isLContainer, isLView } from '../render3/interfaces/type_checks';
import { HEADER_OFFSET, HOST, PARENT, RENDERER, TVIEW, } from '../render3/interfaces/view';
import { nativeRemoveNode } from '../render3/node_manipulation';
import { EMPTY_ARRAY } from '../util/empty';
import { validateSiblingNodeExists } from './error_handling';
import { cleanupI18nHydrationData } from './i18n';
import { NUM_ROOT_NODES } from './interfaces';
import { getLNodeForHydration } from './utils';
/**
 * Removes all dehydrated views from a given LContainer:
 * both in internal data structure, as well as removing
 * corresponding DOM nodes that belong to that dehydrated view.
 */
export function removeDehydratedViews(lContainer) {
    const views = lContainer[DEHYDRATED_VIEWS] ?? [];
    const parentLView = lContainer[PARENT];
    const renderer = parentLView[RENDERER];
    for (const view of views) {
        removeDehydratedView(view, renderer);
        ngDevMode && ngDevMode.dehydratedViewsRemoved++;
    }
    // Reset the value to an empty array to indicate that no
    // further processing of dehydrated views is needed for
    // this view container (i.e. do not trigger the lookup process
    // once again in case a `ViewContainerRef` is created later).
    lContainer[DEHYDRATED_VIEWS] = EMPTY_ARRAY;
}
/**
 * Helper function to remove all nodes from a dehydrated view.
 */
function removeDehydratedView(dehydratedView, renderer) {
    let nodesRemoved = 0;
    let currentRNode = dehydratedView.firstChild;
    if (currentRNode) {
        const numNodes = dehydratedView.data[NUM_ROOT_NODES];
        while (nodesRemoved < numNodes) {
            ngDevMode && validateSiblingNodeExists(currentRNode);
            const nextSibling = currentRNode.nextSibling;
            nativeRemoveNode(renderer, currentRNode, false);
            currentRNode = nextSibling;
            nodesRemoved++;
        }
    }
}
/**
 * Walks over all views within this LContainer invokes dehydrated views
 * cleanup function for each one.
 */
function cleanupLContainer(lContainer) {
    removeDehydratedViews(lContainer);
    // The host could be an LView if this container is on a component node.
    // In this case, descend into host LView for further cleanup. See also
    // LContainer[HOST] docs for additional information.
    const hostLView = lContainer[HOST];
    if (isLView(hostLView)) {
        cleanupLView(hostLView);
    }
    for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
        cleanupLView(lContainer[i]);
    }
}
/**
 * Walks over `LContainer`s and components registered within
 * this LView and invokes dehydrated views cleanup function for each one.
 */
function cleanupLView(lView) {
    cleanupI18nHydrationData(lView);
    const tView = lView[TVIEW];
    for (let i = HEADER_OFFSET; i < tView.bindingStartIndex; i++) {
        if (isLContainer(lView[i])) {
            const lContainer = lView[i];
            cleanupLContainer(lContainer);
        }
        else if (isLView(lView[i])) {
            // This is a component, enter the `cleanupLView` recursively.
            cleanupLView(lView[i]);
        }
    }
}
/**
 * Walks over all views registered within the ApplicationRef and removes
 * all dehydrated views from all `LContainer`s along the way.
 */
export function cleanupDehydratedViews(appRef) {
    const viewRefs = appRef._views;
    for (const viewRef of viewRefs) {
        const lNode = getLNodeForHydration(viewRef);
        // An `lView` might be `null` if a `ViewRef` represents
        // an embedded view (not a component view).
        if (lNode !== null && lNode[HOST] !== null) {
            if (isLView(lNode)) {
                cleanupLView(lNode);
            }
            else {
                // Cleanup in all views within this view container
                cleanupLContainer(lNode);
            }
            ngDevMode && ngDevMode.dehydratedViewsCleanupRuns++;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xlYW51cC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL2h5ZHJhdGlvbi9jbGVhbnVwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsZ0JBQWdCLEdBRWpCLE1BQU0saUNBQWlDLENBQUM7QUFHekMsT0FBTyxFQUFDLFlBQVksRUFBRSxPQUFPLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQ0wsYUFBYSxFQUNiLElBQUksRUFHSixNQUFNLEVBQ04sUUFBUSxFQUNSLEtBQUssR0FDTixNQUFNLDRCQUE0QixDQUFDO0FBQ3BDLE9BQU8sRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFMUMsT0FBTyxFQUFDLHlCQUF5QixFQUFDLE1BQU0sa0JBQWtCLENBQUM7QUFDM0QsT0FBTyxFQUFDLHdCQUF3QixFQUFDLE1BQU0sUUFBUSxDQUFDO0FBQ2hELE9BQU8sRUFBMEIsY0FBYyxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQ3JFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUU3Qzs7OztHQUlHO0FBQ0gsTUFBTSxVQUFVLHFCQUFxQixDQUFDLFVBQXNCO0lBQzFELE1BQU0sS0FBSyxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNqRCxNQUFNLFdBQVcsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsTUFBTSxRQUFRLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZDLEtBQUssTUFBTSxJQUFJLElBQUksS0FBSyxFQUFFLENBQUM7UUFDekIsb0JBQW9CLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3JD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QyxFQUFFLENBQUM7Z0JBQ25CLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN0QixDQUFDO2lCQUFNLENBQUM7Z0JBQ04sa0RBQWtEO2dCQUNsRCxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMzQixDQUFDO1lBQ0QsU0FBUyxJQUFJLFNBQVMsQ0FBQywwQkFBMEIsRUFBRSxDQUFDO1FBQ3RELENBQUM7SUFDSCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtBcHBsaWNhdGlvblJlZn0gZnJvbSAnLi4vYXBwbGljYXRpb24vYXBwbGljYXRpb25fcmVmJztcbmltcG9ydCB7XG4gIENPTlRBSU5FUl9IRUFERVJfT0ZGU0VULFxuICBERUhZRFJBVEVEX1ZJRVdTLFxuICBMQ29udGFpbmVyLFxufSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvY29udGFpbmVyJztcbmltcG9ydCB7UmVuZGVyZXJ9IGZyb20gJy4uL3JlbmRlcjMvaW50ZXJmYWNlcy9yZW5kZXJlcic7XG5pbXBvcnQge1JOb2RlfSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvcmVuZGVyZXJfZG9tJztcbmltcG9ydCB7aXNMQ29udGFpbmVyLCBpc0xWaWV3fSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvdHlwZV9jaGVja3MnO1xuaW1wb3J0IHtcbiAgSEVBREVSX09GRlNFVCxcbiAgSE9TVCxcbiAgSFlEUkFUSU9OLFxuICBMVmlldyxcbiAgUEFSRU5ULFxuICBSRU5ERVJFUixcbiAgVFZJRVcsXG59IGZyb20gJy4uL3JlbmRlcjMvaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7bmF0aXZlUmVtb3ZlTm9kZX0gZnJvbSAnLi4vcmVuZGVyMy9ub2RlX21hbmlwdWxhdGlvbic7XG5pbXBvcnQge0VNUFRZX0FSUkFZfSBmcm9tICcuLi91dGlsL2VtcHR5JztcblxuaW1wb3J0IHt2YWxpZGF0ZVNpYmxpbmdOb2RlRXhpc3RzfSBmcm9tICcuL2Vycm9yX2hhbmRsaW5nJztcbmltcG9ydCB7Y2xlYW51cEkxOG5IeWRyYXRpb25EYXRhfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtEZWh5ZHJhdGVkQ29udGFpbmVyVmlldywgTlVNX1JPT1RfTk9ERVN9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQge2dldExOb2RlRm9ySHlkcmF0aW9ufSBmcm9tICcuL3V0aWxzJztcblxuLyoqXG4gKiBSZW1vdmVzIGFsbCBkZWh5ZHJhdGVkIHZpZXdzIGZyb20gYSBnaXZlbiBMQ29udGFpbmVyOlxuICogYm90aCBpbiBpbnRlcm5hbCBkYXRhIHN0cnVjdHVyZSwgYXMgd2VsbCBhcyByZW1vdmluZ1xuICogY29ycmVzcG9uZGluZyBET00gbm9kZXMgdGhhdCBiZWxvbmcgdG8gdGhhdCBkZWh5ZHJhdGVkIHZpZXcuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVEZWh5ZHJhdGVkVmlld3MobENvbnRhaW5lcjogTENvbnRhaW5lcikge1xuICBjb25zdCB2aWV3cyA9IGxDb250YWluZXJbREVIWURSQVRFRF9WSUVXU10gPz8gW107XG4gIGNvbnN0IHBhcmVudExWaWV3ID0gbENvbnRhaW5lcltQQVJFTlRdO1xuICBjb25zdCByZW5kZXJlciA9IHBhcmVudExWaWV3W1JFTkRFUkVSXTtcbiAgZm9yIChjb25zdCB2aWV3IG9mIHZpZXdzKSB7XG4gICAgcmVtb3ZlRGVoeWRyYXRlZFZpZXcodmlldywgcmVuZGVyZXIpO1xuICAgIG5nRGV2TW9kZSAmJiBuZ0Rldk1vZGUuZGVoeWRyYXRlZFZpZXdzUmVtb3ZlZCsrO1xuICB9XG4gIC8vIFJlc2V0IHRoZSB2YWx1ZSB0byBhbiBlbXB0eSBhcnJheSB0byBpbmRpY2F0ZSB0aGF0IG5vXG4gIC8vIGZ1cnRoZXIgcHJvY2Vzc2luZyBvZiBkZWh5ZHJhdGVkIHZpZXdzIGlzIG5lZWRlZCBmb3JcbiAgLy8gdGhpcyB2aWV3IGNvbnRhaW5lciAoaS5lLiBkbyBub3QgdHJpZ2dlciB0aGUgbG9va3VwIHByb2Nlc3NcbiAgLy8gb25jZSBhZ2FpbiBpbiBjYXNlIGEgYFZpZXdDb250YWluZXJSZWZgIGlzIGNyZWF0ZWQgbGF0ZXIpLlxuICBsQ29udGFpbmVyW0RFSFlEUkFURURfVklFV1NdID0gRU1QVFlfQVJSQVk7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIHJlbW92ZSBhbGwgbm9kZXMgZnJvbSBhIGRlaHlkcmF0ZWQgdmlldy5cbiAqL1xuZnVuY3Rpb24gcmVtb3ZlRGVoeWRyYXRlZFZpZXcoZGVoeWRyYXRlZFZpZXc6IERlaHlkcmF0ZWRDb250YWluZXJWaWV3LCByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgbGV0IG5vZGVzUmVtb3ZlZCA9IDA7XG4gIGxldCBjdXJyZW50Uk5vZGUgPSBkZWh5ZHJhdGVkVmlldy5maXJzdENoaWxkO1xuICBpZiAoY3VycmVudFJOb2RlKSB7XG4gICAgY29uc3QgbnVtTm9kZXMgPSBkZWh5ZHJhdGVkVmlldy5kYXRhW05VTV9ST09UX05PREVTXTtcbiAgICB3aGlsZSAobm9kZXNSZW1vdmVkIDwgbnVtTm9kZXMpIHtcbiAgICAgIG5nRGV2TW9kZSAmJiB2YWxpZGF0ZVNpYmxpbmdOb2RlRXhpc3RzKGN1cnJlbnRSTm9kZSk7XG4gICAgICBjb25zdCBuZXh0U2libGluZzogUk5vZGUgPSBjdXJyZW50Uk5vZGUubmV4dFNpYmxpbmchO1xuICAgICAgbmF0aXZlUmVtb3ZlTm9kZShyZW5kZXJlciwgY3VycmVudFJOb2RlLCBmYWxzZSk7XG4gICAgICBjdXJyZW50Uk5vZGUgPSBuZXh0U2libGluZztcbiAgICAgIG5vZGVzUmVtb3ZlZCsrO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIFdhbGtzIG92ZXIgYWxsIHZpZXdzIHdpdGhpbiB0aGlzIExDb250YWluZXIgaW52b2tlcyBkZWh5ZHJhdGVkIHZpZXdzXG4gKiBjbGVhbnVwIGZ1bmN0aW9uIGZvciBlYWNoIG9uZS5cbiAqL1xuZnVuY3Rpb24gY2xlYW51cExDb250YWluZXIobENvbnRhaW5lcjogTENvbnRhaW5lcikge1xuICByZW1vdmVEZWh5ZHJhdGVkVmlld3MobENvbnRhaW5lcik7XG5cbiAgLy8gVGhlIGhvc3QgY291bGQgYmUgYW4gTFZpZXcgaWYgdGhpcyBjb250YWluZXIgaXMgb24gYSBjb21wb25lbnQgbm9kZS5cbiAgLy8gSW4gdGhpcyBjYXNlLCBkZXNjZW5kIGludG8gaG9zdCBMVmlldyBmb3IgZnVydGhlciBjbGVhbnVwLiBTZWUgYWxzb1xuICAvLyBMQ29udGFpbmVyW0hPU1RdIGRvY3MgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24uXG4gIGNvbnN0IGhvc3RMVmlldyA9IGxDb250YWluZXJbSE9TVF07XG4gIGlmIChpc0xWaWV3KGhvc3RMVmlldykpIHtcbiAgICBjbGVhbnVwTFZpZXcoaG9zdExWaWV3KTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSBDT05UQUlORVJfSEVBREVSX09GRlNFVDsgaSA8IGxDb250YWluZXIubGVuZ3RoOyBpKyspIHtcbiAgICBjbGVhbnVwTFZpZXcobENvbnRhaW5lcltpXSBhcyBMVmlldyk7XG4gIH1cbn1cblxuLyoqXG4gKiBXYWxrcyBvdmVyIGBMQ29udGFpbmVyYHMgYW5kIGNvbXBvbmVudHMgcmVnaXN0ZXJlZCB3aXRoaW5cbiAqIHRoaXMgTFZpZXcgYW5kIGludm9rZXMgZGVoeWRyYXRlZCB2aWV3cyBjbGVhbnVwIGZ1bmN0aW9uIGZvciBlYWNoIG9uZS5cbiAqL1xuZnVuY3Rpb24gY2xlYW51cExWaWV3KGxWaWV3OiBMVmlldykge1xuICBjbGVhbnVwSTE4bkh5ZHJhdGlvbkRhdGEobFZpZXcpO1xuXG4gIGNvbnN0IHRWaWV3ID0gbFZpZXdbVFZJRVddO1xuICBmb3IgKGxldCBpID0gSEVBREVSX09GRlNFVDsgaSA8IHRWaWV3LmJpbmRpbmdTdGFydEluZGV4OyBpKyspIHtcbiAgICBpZiAoaXNMQ29udGFpbmVyKGxWaWV3W2ldKSkge1xuICAgICAgY29uc3QgbENvbnRhaW5lciA9IGxWaWV3W2ldO1xuICAgICAgY2xlYW51cExDb250YWluZXIobENvbnRhaW5lcik7XG4gICAgfSBlbHNlIGlmIChpc0xWaWV3KGxWaWV3W2ldKSkge1xuICAgICAgLy8gVGhpcyBpcyBhIGNvbXBvbmVudCwgZW50ZXIgdGhlIGBjbGVhbnVwTFZpZXdgIHJlY3Vyc2l2ZWx5LlxuICAgICAgY2xlYW51cExWaWV3KGxWaWV3W2ldKTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBXYWxrcyBvdmVyIGFsbCB2aWV3cyByZWdpc3RlcmVkIHdpdGhpbiB0aGUgQXBwbGljYXRpb25SZWYgYW5kIHJlbW92ZXNcbiAqIGFsbCBkZWh5ZHJhdGVkIHZpZXdzIGZyb20gYWxsIGBMQ29udGFpbmVyYHMgYWxvbmcgdGhlIHdheS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsZWFudXBEZWh5ZHJhdGVkVmlld3MoYXBwUmVmOiBBcHBsaWNhdGlvblJlZikge1xuICBjb25zdCB2aWV3UmVmcyA9IGFwcFJlZi5fdmlld3M7XG4gIGZvciAoY29uc3Qgdmlld1JlZiBvZiB2aWV3UmVmcykge1xuICAgIGNvbnN0IGxOb2RlID0gZ2V0TE5vZGVGb3JIeWRyYXRpb24odmlld1JlZik7XG4gICAgLy8gQW4gYGxWaWV3YCBtaWdodCBiZSBgbnVsbGAgaWYgYSBgVmlld1JlZmAgcmVwcmVzZW50c1xuICAgIC8vIGFuIGVtYmVkZGVkIHZpZXcgKG5vdCBhIGNvbXBvbmVudCB2aWV3KS5cbiAgICBpZiAobE5vZGUgIT09IG51bGwgJiYgbE5vZGVbSE9TVF0gIT09IG51bGwpIHtcbiAgICAgIGlmIChpc0xWaWV3KGxOb2RlKSkge1xuICAgICAgICBjbGVhbnVwTFZpZXcobE5vZGUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2xlYW51cCBpbiBhbGwgdmlld3Mgd2l0aGluIHRoaXMgdmlldyBjb250YWluZXJcbiAgICAgICAgY2xlYW51cExDb250YWluZXIobE5vZGUpO1xuICAgICAgfVxuICAgICAgbmdEZXZNb2RlICYmIG5nRGV2TW9kZS5kZWh5ZHJhdGVkVmlld3NDbGVhbnVwUnVucysrO1xuICAgIH1cbiAgfVxufVxuIl19