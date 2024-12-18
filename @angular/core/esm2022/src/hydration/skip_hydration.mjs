/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * The name of an attribute that can be added to the hydration boundary node
 * (component host node) to disable hydration for the content within that boundary.
 */
export const SKIP_HYDRATION_ATTR_NAME = 'ngSkipHydration';
/** Lowercase name of the `ngSkipHydration` attribute used for case-insensitive comparisons. */
const SKIP_HYDRATION_ATTR_NAME_LOWER_CASE = 'ngskiphydration';
/**
 * Helper function to check if a given TNode has the 'ngSkipHydration' attribute.
 */
export function hasSkipHydrationAttrOnTNode(tNode) {
    const attrs = tNode.mergedAttrs;
    if (attrs === null)
        return false;
    // only ever look at the attribute name and skip the values
    for (let i = 0; i < attrs.length; i += 2) {
        const value = attrs[i];
        // This is a marker, which means that the static attributes section is over,
        // so we can exit early.
        if (typeof value === 'number')
            return false;
        if (typeof value === 'string' && value.toLowerCase() === SKIP_HYDRATION_ATTR_NAME_LOWER_CASE) {
            return true;
        }
    }
    return false;
}
/**
 * Helper function to check if a given RElement has the 'ngSkipHydration' attribute.
 */
export function hasSkipHydrationAttrOnRElement(rNode) {
    return rNode.hasAttribute(SKIP_HYDRATION_ATTR_NAME);
}
/**
 * Checks whether a TNode has a flag to indicate that it's a part of
 * a skip hydration block.
 */
export function hasInSkipHydrationBlockFlag(tNode) {
    return (tNode.flags & 128 /* TNodeFlags.inSkipHydrationBlock */) === 128 /* TNodeFlags.inSkipHydrationBlock */;
}
/**
 * Helper function that determines if a given node is within a skip hydration block
 * by navigating up the TNode tree to see if any parent nodes have skip hydration
 * attribute.
 */
export function isInSkipHydrationBlock(tNode) {
    if (hasInSkipHydrationBlockFlag(tNode)) {
        return true;
    }
    let currentTNode = tNode.parent;
    while (currentTNode) {
        if (hasInSkipHydrationBlockFlag(tNode) || hasSkipHydrationAttrOnTNode(currentTNode)) {
            return true;
        }
        currentTNode = currentTNode.parent;
    }
    return false;
}
/**
 * Check if an i18n block is in a skip hydration section by looking at a parent TNode
 * to determine if this TNode is in a skip hydration section or the TNode has
 * the `ngSkipHydration` attribute.
 */
export function isI18nInSkipHydrationBlock(parentTNode) {
    return (hasInSkipHydrationBlockFlag(parentTNode) ||
        hasSkipHydrationAttrOnTNode(parentTNode) ||
        isInSkipHydrationBlock(parentTNode));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2tpcF9oeWRyYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9oeWRyYXRpb24vc2tpcF9oeWRyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBS0g7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsaUJBQWlCLENBQUM7QUFFMUQsK0ZBQStGO0FBQy9GLE1BQU0sbUNBQW1DLEdBQUcsaUJBQWlCLENBQUM7QUFFOUQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsS0FBWTtJQUN0RCxNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsV0FBVyxDQUFDO0lBQ2hDLElBQUksS0FBSyxLQUFLLElBQUk7UUFBRSxPQUFPLEtBQUssQ0FBQztJQUNqQywyREFBMkQ7SUFDM0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2Qiw0RUFBNEU7UUFDNUUsd0JBQXdCO1FBQ3hCLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUTtZQUFFLE9BQU8sS0FBSyxDQUFDO1FBQzVDLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxXQUFXLEVBQUUsS0FBSyxtQ0FBbUMsRUFBRSxDQUFDO1lBQzdGLE9BQU8sSUFBSSxDQUFDO1FBQ2QsQ0FBQztJQUNILENBQUM7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sVUFBVSw4QkFBOEIsQ0FBQyxLQUFlO0lBQzVELE9BQU8sS0FBSyxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFFRDs7O0dBR0c7QUFDSCxNQUFNLFVBQVUsMkJBQTJCLENBQUMsS0FBWTtJQUN0RCxPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssNENBQWtDLENBQUMsOENBQW9DLENBQUM7QUFDN0YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsc0JBQXNCLENBQUMsS0FBWTtJQUNqRCxJQUFJLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsSUFBSSxZQUFZLEdBQWlCLEtBQUssQ0FBQyxNQUFNLENBQUM7SUFDOUMsT0FBTyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLDJCQUEyQixDQUFDLEtBQUssQ0FBQyxJQUFJLDJCQUEyQixDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDcEYsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBQ0QsWUFBWSxHQUFHLFlBQVksQ0FBQyxNQUFNLENBQUM7SUFDckMsQ0FBQztJQUNELE9BQU8sS0FBSyxDQUFDO0FBQ2YsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsMEJBQTBCLENBQUMsV0FBa0I7SUFDM0QsT0FBTyxDQUNMLDJCQUEyQixDQUFDLFdBQVcsQ0FBQztRQUN4QywyQkFBMkIsQ0FBQyxXQUFXLENBQUM7UUFDeEMsc0JBQXNCLENBQUMsV0FBVyxDQUFDLENBQ3BDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1ROb2RlLCBUTm9kZUZsYWdzfSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvbm9kZSc7XG5pbXBvcnQge1JFbGVtZW50fSBmcm9tICcuLi9yZW5kZXIzL2ludGVyZmFjZXMvcmVuZGVyZXJfZG9tJztcblxuLyoqXG4gKiBUaGUgbmFtZSBvZiBhbiBhdHRyaWJ1dGUgdGhhdCBjYW4gYmUgYWRkZWQgdG8gdGhlIGh5ZHJhdGlvbiBib3VuZGFyeSBub2RlXG4gKiAoY29tcG9uZW50IGhvc3Qgbm9kZSkgdG8gZGlzYWJsZSBoeWRyYXRpb24gZm9yIHRoZSBjb250ZW50IHdpdGhpbiB0aGF0IGJvdW5kYXJ5LlxuICovXG5leHBvcnQgY29uc3QgU0tJUF9IWURSQVRJT05fQVRUUl9OQU1FID0gJ25nU2tpcEh5ZHJhdGlvbic7XG5cbi8qKiBMb3dlcmNhc2UgbmFtZSBvZiB0aGUgYG5nU2tpcEh5ZHJhdGlvbmAgYXR0cmlidXRlIHVzZWQgZm9yIGNhc2UtaW5zZW5zaXRpdmUgY29tcGFyaXNvbnMuICovXG5jb25zdCBTS0lQX0hZRFJBVElPTl9BVFRSX05BTUVfTE9XRVJfQ0FTRSA9ICduZ3NraXBoeWRyYXRpb24nO1xuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0byBjaGVjayBpZiBhIGdpdmVuIFROb2RlIGhhcyB0aGUgJ25nU2tpcEh5ZHJhdGlvbicgYXR0cmlidXRlLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaGFzU2tpcEh5ZHJhdGlvbkF0dHJPblROb2RlKHROb2RlOiBUTm9kZSk6IGJvb2xlYW4ge1xuICBjb25zdCBhdHRycyA9IHROb2RlLm1lcmdlZEF0dHJzO1xuICBpZiAoYXR0cnMgPT09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgLy8gb25seSBldmVyIGxvb2sgYXQgdGhlIGF0dHJpYnV0ZSBuYW1lIGFuZCBza2lwIHRoZSB2YWx1ZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhdHRycy5sZW5ndGg7IGkgKz0gMikge1xuICAgIGNvbnN0IHZhbHVlID0gYXR0cnNbaV07XG4gICAgLy8gVGhpcyBpcyBhIG1hcmtlciwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgc3RhdGljIGF0dHJpYnV0ZXMgc2VjdGlvbiBpcyBvdmVyLFxuICAgIC8vIHNvIHdlIGNhbiBleGl0IGVhcmx5LlxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gU0tJUF9IWURSQVRJT05fQVRUUl9OQU1FX0xPV0VSX0NBU0UpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbi8qKlxuICogSGVscGVyIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIGEgZ2l2ZW4gUkVsZW1lbnQgaGFzIHRoZSAnbmdTa2lwSHlkcmF0aW9uJyBhdHRyaWJ1dGUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBoYXNTa2lwSHlkcmF0aW9uQXR0ck9uUkVsZW1lbnQock5vZGU6IFJFbGVtZW50KTogYm9vbGVhbiB7XG4gIHJldHVybiByTm9kZS5oYXNBdHRyaWJ1dGUoU0tJUF9IWURSQVRJT05fQVRUUl9OQU1FKTtcbn1cblxuLyoqXG4gKiBDaGVja3Mgd2hldGhlciBhIFROb2RlIGhhcyBhIGZsYWcgdG8gaW5kaWNhdGUgdGhhdCBpdCdzIGEgcGFydCBvZlxuICogYSBza2lwIGh5ZHJhdGlvbiBibG9jay5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGhhc0luU2tpcEh5ZHJhdGlvbkJsb2NrRmxhZyh0Tm9kZTogVE5vZGUpOiBib29sZWFuIHtcbiAgcmV0dXJuICh0Tm9kZS5mbGFncyAmIFROb2RlRmxhZ3MuaW5Ta2lwSHlkcmF0aW9uQmxvY2spID09PSBUTm9kZUZsYWdzLmluU2tpcEh5ZHJhdGlvbkJsb2NrO1xufVxuXG4vKipcbiAqIEhlbHBlciBmdW5jdGlvbiB0aGF0IGRldGVybWluZXMgaWYgYSBnaXZlbiBub2RlIGlzIHdpdGhpbiBhIHNraXAgaHlkcmF0aW9uIGJsb2NrXG4gKiBieSBuYXZpZ2F0aW5nIHVwIHRoZSBUTm9kZSB0cmVlIHRvIHNlZSBpZiBhbnkgcGFyZW50IG5vZGVzIGhhdmUgc2tpcCBoeWRyYXRpb25cbiAqIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSW5Ta2lwSHlkcmF0aW9uQmxvY2sodE5vZGU6IFROb2RlKTogYm9vbGVhbiB7XG4gIGlmIChoYXNJblNraXBIeWRyYXRpb25CbG9ja0ZsYWcodE5vZGUpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgbGV0IGN1cnJlbnRUTm9kZTogVE5vZGUgfCBudWxsID0gdE5vZGUucGFyZW50O1xuICB3aGlsZSAoY3VycmVudFROb2RlKSB7XG4gICAgaWYgKGhhc0luU2tpcEh5ZHJhdGlvbkJsb2NrRmxhZyh0Tm9kZSkgfHwgaGFzU2tpcEh5ZHJhdGlvbkF0dHJPblROb2RlKGN1cnJlbnRUTm9kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBjdXJyZW50VE5vZGUgPSBjdXJyZW50VE5vZGUucGFyZW50O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBDaGVjayBpZiBhbiBpMThuIGJsb2NrIGlzIGluIGEgc2tpcCBoeWRyYXRpb24gc2VjdGlvbiBieSBsb29raW5nIGF0IGEgcGFyZW50IFROb2RlXG4gKiB0byBkZXRlcm1pbmUgaWYgdGhpcyBUTm9kZSBpcyBpbiBhIHNraXAgaHlkcmF0aW9uIHNlY3Rpb24gb3IgdGhlIFROb2RlIGhhc1xuICogdGhlIGBuZ1NraXBIeWRyYXRpb25gIGF0dHJpYnV0ZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzSTE4bkluU2tpcEh5ZHJhdGlvbkJsb2NrKHBhcmVudFROb2RlOiBUTm9kZSk6IGJvb2xlYW4ge1xuICByZXR1cm4gKFxuICAgIGhhc0luU2tpcEh5ZHJhdGlvbkJsb2NrRmxhZyhwYXJlbnRUTm9kZSkgfHxcbiAgICBoYXNTa2lwSHlkcmF0aW9uQXR0ck9uVE5vZGUocGFyZW50VE5vZGUpIHx8XG4gICAgaXNJblNraXBIeWRyYXRpb25CbG9jayhwYXJlbnRUTm9kZSlcbiAgKTtcbn1cbiJdfQ==