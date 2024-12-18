/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { map, mergeMap } from 'rxjs/operators';
import { recognize as recognizeFn } from '../recognize';
export function recognize(injector, configLoader, rootComponentType, config, serializer, paramsInheritanceStrategy) {
    return mergeMap((t) => recognizeFn(injector, configLoader, rootComponentType, config, t.extractedUrl, serializer, paramsInheritanceStrategy).pipe(map(({ state: targetSnapshot, tree: urlAfterRedirects }) => {
        return { ...t, targetSnapshot, urlAfterRedirects };
    })));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVjb2duaXplLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcm91dGVyL3NyYy9vcGVyYXRvcnMvcmVjb2duaXplLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sRUFBQyxHQUFHLEVBQUUsUUFBUSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFJN0MsT0FBTyxFQUFDLFNBQVMsSUFBSSxXQUFXLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJdEQsTUFBTSxVQUFVLFNBQVMsQ0FDdkIsUUFBNkIsRUFDN0IsWUFBZ0MsRUFDaEMsaUJBQW1DLEVBQ25DLE1BQWUsRUFDZixVQUF5QixFQUN6Qix5QkFBaUQ7SUFFakQsT0FBTyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUNwQixXQUFXLENBQ1QsUUFBUSxFQUNSLFlBQVksRUFDWixpQkFBaUIsRUFDakIsTUFBTSxFQUNOLENBQUMsQ0FBQyxZQUFZLEVBQ2QsVUFBVSxFQUNWLHlCQUF5QixDQUMxQixDQUFDLElBQUksQ0FDSixHQUFHLENBQUMsQ0FBQyxFQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLGlCQUFpQixFQUFDLEVBQUUsRUFBRTtRQUN2RCxPQUFPLEVBQUMsR0FBRyxDQUFDLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFDLENBQUM7SUFDbkQsQ0FBQyxDQUFDLENBQ0gsQ0FDRixDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtFbnZpcm9ubWVudEluamVjdG9yLCBUeXBlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TW9ub1R5cGVPcGVyYXRvckZ1bmN0aW9ufSBmcm9tICdyeGpzJztcbmltcG9ydCB7bWFwLCBtZXJnZU1hcH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQge1JvdXRlfSBmcm9tICcuLi9tb2RlbHMnO1xuaW1wb3J0IHtOYXZpZ2F0aW9uVHJhbnNpdGlvbn0gZnJvbSAnLi4vbmF2aWdhdGlvbl90cmFuc2l0aW9uJztcbmltcG9ydCB7cmVjb2duaXplIGFzIHJlY29nbml6ZUZufSBmcm9tICcuLi9yZWNvZ25pemUnO1xuaW1wb3J0IHtSb3V0ZXJDb25maWdMb2FkZXJ9IGZyb20gJy4uL3JvdXRlcl9jb25maWdfbG9hZGVyJztcbmltcG9ydCB7VXJsU2VyaWFsaXplcn0gZnJvbSAnLi4vdXJsX3RyZWUnO1xuXG5leHBvcnQgZnVuY3Rpb24gcmVjb2duaXplKFxuICBpbmplY3RvcjogRW52aXJvbm1lbnRJbmplY3RvcixcbiAgY29uZmlnTG9hZGVyOiBSb3V0ZXJDb25maWdMb2FkZXIsXG4gIHJvb3RDb21wb25lbnRUeXBlOiBUeXBlPGFueT4gfCBudWxsLFxuICBjb25maWc6IFJvdXRlW10sXG4gIHNlcmlhbGl6ZXI6IFVybFNlcmlhbGl6ZXIsXG4gIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3k6ICdlbXB0eU9ubHknIHwgJ2Fsd2F5cycsXG4pOiBNb25vVHlwZU9wZXJhdG9yRnVuY3Rpb248TmF2aWdhdGlvblRyYW5zaXRpb24+IHtcbiAgcmV0dXJuIG1lcmdlTWFwKCh0KSA9PlxuICAgIHJlY29nbml6ZUZuKFxuICAgICAgaW5qZWN0b3IsXG4gICAgICBjb25maWdMb2FkZXIsXG4gICAgICByb290Q29tcG9uZW50VHlwZSxcbiAgICAgIGNvbmZpZyxcbiAgICAgIHQuZXh0cmFjdGVkVXJsLFxuICAgICAgc2VyaWFsaXplcixcbiAgICAgIHBhcmFtc0luaGVyaXRhbmNlU3RyYXRlZ3ksXG4gICAgKS5waXBlKFxuICAgICAgbWFwKCh7c3RhdGU6IHRhcmdldFNuYXBzaG90LCB0cmVlOiB1cmxBZnRlclJlZGlyZWN0c30pID0+IHtcbiAgICAgICAgcmV0dXJuIHsuLi50LCB0YXJnZXRTbmFwc2hvdCwgdXJsQWZ0ZXJSZWRpcmVjdHN9O1xuICAgICAgfSksXG4gICAgKSxcbiAgKTtcbn1cbiJdfQ==