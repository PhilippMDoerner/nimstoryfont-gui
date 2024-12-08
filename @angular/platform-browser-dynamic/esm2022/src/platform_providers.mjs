/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ɵPLATFORM_BROWSER_ID as PLATFORM_BROWSER_ID } from '@angular/common';
import { ResourceLoader } from '@angular/compiler';
import { COMPILER_OPTIONS, PLATFORM_ID } from '@angular/core';
import { ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS as INTERNAL_BROWSER_PLATFORM_PROVIDERS } from '@angular/platform-browser';
import { ResourceLoaderImpl } from './resource_loader/resource_loader_impl';
/**
 * @publicApi
 */
export const INTERNAL_BROWSER_DYNAMIC_PLATFORM_PROVIDERS = [
    INTERNAL_BROWSER_PLATFORM_PROVIDERS,
    {
        provide: COMPILER_OPTIONS,
        useValue: { providers: [{ provide: ResourceLoader, useClass: ResourceLoaderImpl, deps: [] }] },
        multi: true,
    },
    { provide: PLATFORM_ID, useValue: PLATFORM_BROWSER_ID },
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm1fcHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljL3NyYy9wbGF0Zm9ybV9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUFDLG9CQUFvQixJQUFJLG1CQUFtQixFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDNUUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBQyxnQkFBZ0IsRUFBRSxXQUFXLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBQzVFLE9BQU8sRUFBQyxvQ0FBb0MsSUFBSSxtQ0FBbUMsRUFBQyxNQUFNLDJCQUEyQixDQUFDO0FBRXRILE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHdDQUF3QyxDQUFDO0FBRTFFOztHQUVHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sMkNBQTJDLEdBQXFCO0lBQzNFLG1DQUFtQztJQUNuQztRQUNFLE9BQU8sRUFBRSxnQkFBZ0I7UUFDekIsUUFBUSxFQUFFLEVBQUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsY0FBYyxFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDLENBQUMsRUFBQztRQUMxRixLQUFLLEVBQUUsSUFBSTtLQUNaO0lBQ0QsRUFBQyxPQUFPLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxtQkFBbUIsRUFBQztDQUN0RCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge8m1UExBVEZPUk1fQlJPV1NFUl9JRCBhcyBQTEFURk9STV9CUk9XU0VSX0lEfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHtSZXNvdXJjZUxvYWRlcn0gZnJvbSAnQGFuZ3VsYXIvY29tcGlsZXInO1xuaW1wb3J0IHtDT01QSUxFUl9PUFRJT05TLCBQTEFURk9STV9JRCwgU3RhdGljUHJvdmlkZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHvJtUlOVEVSTkFMX0JST1dTRVJfUExBVEZPUk1fUFJPVklERVJTIGFzIElOVEVSTkFMX0JST1dTRVJfUExBVEZPUk1fUFJPVklERVJTfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuaW1wb3J0IHtSZXNvdXJjZUxvYWRlckltcGx9IGZyb20gJy4vcmVzb3VyY2VfbG9hZGVyL3Jlc291cmNlX2xvYWRlcl9pbXBsJztcblxuLyoqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBJTlRFUk5BTF9CUk9XU0VSX0RZTkFNSUNfUExBVEZPUk1fUFJPVklERVJTOiBTdGF0aWNQcm92aWRlcltdID0gW1xuICBJTlRFUk5BTF9CUk9XU0VSX1BMQVRGT1JNX1BST1ZJREVSUyxcbiAge1xuICAgIHByb3ZpZGU6IENPTVBJTEVSX09QVElPTlMsXG4gICAgdXNlVmFsdWU6IHtwcm92aWRlcnM6IFt7cHJvdmlkZTogUmVzb3VyY2VMb2FkZXIsIHVzZUNsYXNzOiBSZXNvdXJjZUxvYWRlckltcGwsIGRlcHM6IFtdfV19LFxuICAgIG11bHRpOiB0cnVlLFxuICB9LFxuICB7cHJvdmlkZTogUExBVEZPUk1fSUQsIHVzZVZhbHVlOiBQTEFURk9STV9CUk9XU0VSX0lEfSxcbl07XG4iXX0=