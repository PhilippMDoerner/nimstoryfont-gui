/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { BehaviorSubject } from 'rxjs';
import { ActivatedRoute, RouterState, } from './router_state';
import { TreeNode } from './utils/tree';
export function createRouterState(routeReuseStrategy, curr, prevState) {
    const root = createNode(routeReuseStrategy, curr._root, prevState ? prevState._root : undefined);
    return new RouterState(root, curr);
}
function createNode(routeReuseStrategy, curr, prevState) {
    // reuse an activated route that is currently displayed on the screen
    if (prevState && routeReuseStrategy.shouldReuseRoute(curr.value, prevState.value.snapshot)) {
        const value = prevState.value;
        value._futureSnapshot = curr.value;
        const children = createOrReuseChildren(routeReuseStrategy, curr, prevState);
        return new TreeNode(value, children);
    }
    else {
        if (routeReuseStrategy.shouldAttach(curr.value)) {
            // retrieve an activated route that is used to be displayed, but is not currently displayed
            const detachedRouteHandle = routeReuseStrategy.retrieve(curr.value);
            if (detachedRouteHandle !== null) {
                const tree = detachedRouteHandle.route;
                tree.value._futureSnapshot = curr.value;
                tree.children = curr.children.map((c) => createNode(routeReuseStrategy, c));
                return tree;
            }
        }
        const value = createActivatedRoute(curr.value);
        const children = curr.children.map((c) => createNode(routeReuseStrategy, c));
        return new TreeNode(value, children);
    }
}
function createOrReuseChildren(routeReuseStrategy, curr, prevState) {
    return curr.children.map((child) => {
        for (const p of prevState.children) {
            if (routeReuseStrategy.shouldReuseRoute(child.value, p.value.snapshot)) {
                return createNode(routeReuseStrategy, child, p);
            }
        }
        return createNode(routeReuseStrategy, child);
    });
}
function createActivatedRoute(c) {
    return new ActivatedRoute(new BehaviorSubject(c.url), new BehaviorSubject(c.params), new BehaviorSubject(c.queryParams), new BehaviorSubject(c.fragment), new BehaviorSubject(c.data), c.outlet, c.component, c);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3JlYXRlX3JvdXRlcl9zdGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL3JvdXRlci9zcmMvY3JlYXRlX3JvdXRlcl9zdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sTUFBTSxDQUFDO0FBR3JDLE9BQU8sRUFDTCxjQUFjLEVBRWQsV0FBVyxHQUVaLE1BQU0sZ0JBQWdCLENBQUM7QUFDeEIsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUV0QyxNQUFNLFVBQVUsaUJBQWlCLENBQy9CLGtCQUFzQyxFQUN0QyxJQUF5QixFQUN6QixTQUFzQjtJQUV0QixNQUFNLElBQUksR0FBRyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2pHLE9BQU8sSUFBSSxXQUFXLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ3JDLENBQUM7QUFFRCxTQUFTLFVBQVUsQ0FDakIsa0JBQXNDLEVBQ3RDLElBQXNDLEVBQ3RDLFNBQW9DO0lBRXBDLHFFQUFxRTtJQUNyRSxJQUFJLFNBQVMsSUFBSSxrQkFBa0IsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztRQUMzRixNQUFNLEtBQUssR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQzlCLEtBQUssQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNuQyxNQUFNLFFBQVEsR0FBRyxxQkFBcUIsQ0FBQyxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7UUFDNUUsT0FBTyxJQUFJLFFBQVEsQ0FBaUIsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7U0FBTSxDQUFDO1FBQ04sSUFBSSxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7WUFDaEQsMkZBQTJGO1lBQzNGLE1BQU0sbUJBQW1CLEdBQUcsa0JBQWtCLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNwRSxJQUFJLG1CQUFtQixLQUFLLElBQUksRUFBRSxDQUFDO2dCQUNqQyxNQUFNLElBQUksR0FBSSxtQkFBbUQsQ0FBQyxLQUFLLENBQUM7Z0JBQ3hFLElBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7Z0JBQ3hDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1RSxPQUFPLElBQUksQ0FBQztZQUNkLENBQUM7UUFDSCxDQUFDO1FBRUQsTUFBTSxLQUFLLEdBQUcsb0JBQW9CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQy9DLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxVQUFVLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxPQUFPLElBQUksUUFBUSxDQUFpQixLQUFLLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdkQsQ0FBQztBQUNILENBQUM7QUFFRCxTQUFTLHFCQUFxQixDQUM1QixrQkFBc0MsRUFDdEMsSUFBc0MsRUFDdEMsU0FBbUM7SUFFbkMsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1FBQ2pDLEtBQUssTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQ25DLElBQUksa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQ3ZFLE9BQU8sVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNsRCxDQUFDO1FBQ0gsQ0FBQztRQUNELE9BQU8sVUFBVSxDQUFDLGtCQUFrQixFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQy9DLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVELFNBQVMsb0JBQW9CLENBQUMsQ0FBeUI7SUFDckQsT0FBTyxJQUFJLGNBQWMsQ0FDdkIsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUMxQixJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEVBQzdCLElBQUksZUFBZSxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsRUFDbEMsSUFBSSxlQUFlLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxFQUMvQixJQUFJLGVBQWUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQzNCLENBQUMsQ0FBQyxNQUFNLEVBQ1IsQ0FBQyxDQUFDLFNBQVMsRUFDWCxDQUFDLENBQ0YsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCB7QmVoYXZpb3JTdWJqZWN0fSBmcm9tICdyeGpzJztcblxuaW1wb3J0IHtEZXRhY2hlZFJvdXRlSGFuZGxlSW50ZXJuYWwsIFJvdXRlUmV1c2VTdHJhdGVneX0gZnJvbSAnLi9yb3V0ZV9yZXVzZV9zdHJhdGVneSc7XG5pbXBvcnQge1xuICBBY3RpdmF0ZWRSb3V0ZSxcbiAgQWN0aXZhdGVkUm91dGVTbmFwc2hvdCxcbiAgUm91dGVyU3RhdGUsXG4gIFJvdXRlclN0YXRlU25hcHNob3QsXG59IGZyb20gJy4vcm91dGVyX3N0YXRlJztcbmltcG9ydCB7VHJlZU5vZGV9IGZyb20gJy4vdXRpbHMvdHJlZSc7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSb3V0ZXJTdGF0ZShcbiAgcm91dGVSZXVzZVN0cmF0ZWd5OiBSb3V0ZVJldXNlU3RyYXRlZ3ksXG4gIGN1cnI6IFJvdXRlclN0YXRlU25hcHNob3QsXG4gIHByZXZTdGF0ZTogUm91dGVyU3RhdGUsXG4pOiBSb3V0ZXJTdGF0ZSB7XG4gIGNvbnN0IHJvb3QgPSBjcmVhdGVOb2RlKHJvdXRlUmV1c2VTdHJhdGVneSwgY3Vyci5fcm9vdCwgcHJldlN0YXRlID8gcHJldlN0YXRlLl9yb290IDogdW5kZWZpbmVkKTtcbiAgcmV0dXJuIG5ldyBSb3V0ZXJTdGF0ZShyb290LCBjdXJyKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTm9kZShcbiAgcm91dGVSZXVzZVN0cmF0ZWd5OiBSb3V0ZVJldXNlU3RyYXRlZ3ksXG4gIGN1cnI6IFRyZWVOb2RlPEFjdGl2YXRlZFJvdXRlU25hcHNob3Q+LFxuICBwcmV2U3RhdGU/OiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4sXG4pOiBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4ge1xuICAvLyByZXVzZSBhbiBhY3RpdmF0ZWQgcm91dGUgdGhhdCBpcyBjdXJyZW50bHkgZGlzcGxheWVkIG9uIHRoZSBzY3JlZW5cbiAgaWYgKHByZXZTdGF0ZSAmJiByb3V0ZVJldXNlU3RyYXRlZ3kuc2hvdWxkUmV1c2VSb3V0ZShjdXJyLnZhbHVlLCBwcmV2U3RhdGUudmFsdWUuc25hcHNob3QpKSB7XG4gICAgY29uc3QgdmFsdWUgPSBwcmV2U3RhdGUudmFsdWU7XG4gICAgdmFsdWUuX2Z1dHVyZVNuYXBzaG90ID0gY3Vyci52YWx1ZTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGNyZWF0ZU9yUmV1c2VDaGlsZHJlbihyb3V0ZVJldXNlU3RyYXRlZ3ksIGN1cnIsIHByZXZTdGF0ZSk7XG4gICAgcmV0dXJuIG5ldyBUcmVlTm9kZTxBY3RpdmF0ZWRSb3V0ZT4odmFsdWUsIGNoaWxkcmVuKTtcbiAgfSBlbHNlIHtcbiAgICBpZiAocm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZEF0dGFjaChjdXJyLnZhbHVlKSkge1xuICAgICAgLy8gcmV0cmlldmUgYW4gYWN0aXZhdGVkIHJvdXRlIHRoYXQgaXMgdXNlZCB0byBiZSBkaXNwbGF5ZWQsIGJ1dCBpcyBub3QgY3VycmVudGx5IGRpc3BsYXllZFxuICAgICAgY29uc3QgZGV0YWNoZWRSb3V0ZUhhbmRsZSA9IHJvdXRlUmV1c2VTdHJhdGVneS5yZXRyaWV2ZShjdXJyLnZhbHVlKTtcbiAgICAgIGlmIChkZXRhY2hlZFJvdXRlSGFuZGxlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHRyZWUgPSAoZGV0YWNoZWRSb3V0ZUhhbmRsZSBhcyBEZXRhY2hlZFJvdXRlSGFuZGxlSW50ZXJuYWwpLnJvdXRlO1xuICAgICAgICB0cmVlLnZhbHVlLl9mdXR1cmVTbmFwc2hvdCA9IGN1cnIudmFsdWU7XG4gICAgICAgIHRyZWUuY2hpbGRyZW4gPSBjdXJyLmNoaWxkcmVuLm1hcCgoYykgPT4gY3JlYXRlTm9kZShyb3V0ZVJldXNlU3RyYXRlZ3ksIGMpKTtcbiAgICAgICAgcmV0dXJuIHRyZWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgY29uc3QgdmFsdWUgPSBjcmVhdGVBY3RpdmF0ZWRSb3V0ZShjdXJyLnZhbHVlKTtcbiAgICBjb25zdCBjaGlsZHJlbiA9IGN1cnIuY2hpbGRyZW4ubWFwKChjKSA9PiBjcmVhdGVOb2RlKHJvdXRlUmV1c2VTdHJhdGVneSwgYykpO1xuICAgIHJldHVybiBuZXcgVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+KHZhbHVlLCBjaGlsZHJlbik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlT3JSZXVzZUNoaWxkcmVuKFxuICByb3V0ZVJldXNlU3RyYXRlZ3k6IFJvdXRlUmV1c2VTdHJhdGVneSxcbiAgY3VycjogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGVTbmFwc2hvdD4sXG4gIHByZXZTdGF0ZTogVHJlZU5vZGU8QWN0aXZhdGVkUm91dGU+LFxuKSB7XG4gIHJldHVybiBjdXJyLmNoaWxkcmVuLm1hcCgoY2hpbGQpID0+IHtcbiAgICBmb3IgKGNvbnN0IHAgb2YgcHJldlN0YXRlLmNoaWxkcmVuKSB7XG4gICAgICBpZiAocm91dGVSZXVzZVN0cmF0ZWd5LnNob3VsZFJldXNlUm91dGUoY2hpbGQudmFsdWUsIHAudmFsdWUuc25hcHNob3QpKSB7XG4gICAgICAgIHJldHVybiBjcmVhdGVOb2RlKHJvdXRlUmV1c2VTdHJhdGVneSwgY2hpbGQsIHApO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gY3JlYXRlTm9kZShyb3V0ZVJldXNlU3RyYXRlZ3ksIGNoaWxkKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFjdGl2YXRlZFJvdXRlKGM6IEFjdGl2YXRlZFJvdXRlU25hcHNob3QpIHtcbiAgcmV0dXJuIG5ldyBBY3RpdmF0ZWRSb3V0ZShcbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0KGMudXJsKSxcbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0KGMucGFyYW1zKSxcbiAgICBuZXcgQmVoYXZpb3JTdWJqZWN0KGMucXVlcnlQYXJhbXMpLFxuICAgIG5ldyBCZWhhdmlvclN1YmplY3QoYy5mcmFnbWVudCksXG4gICAgbmV3IEJlaGF2aW9yU3ViamVjdChjLmRhdGEpLFxuICAgIGMub3V0bGV0LFxuICAgIGMuY29tcG9uZW50LFxuICAgIGMsXG4gICk7XG59XG4iXX0=