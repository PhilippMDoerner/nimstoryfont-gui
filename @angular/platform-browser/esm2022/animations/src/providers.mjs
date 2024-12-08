/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { AnimationDriver, NoopAnimationDriver, ɵAnimationEngine as AnimationEngine, ɵAnimationRendererFactory as AnimationRendererFactory, ɵAnimationStyleNormalizer as AnimationStyleNormalizer, ɵWebAnimationsDriver as WebAnimationsDriver, ɵWebAnimationsStyleNormalizer as WebAnimationsStyleNormalizer, } from '@angular/animations/browser';
import { DOCUMENT } from '@angular/common';
import { ANIMATION_MODULE_TYPE, Inject, Injectable, NgZone, RendererFactory2, } from '@angular/core';
import { ɵDomRendererFactory2 as DomRendererFactory2 } from '@angular/platform-browser';
import * as i0 from "@angular/core";
import * as i1 from "@angular/animations/browser";
export class InjectableAnimationEngine extends AnimationEngine {
    // The `ApplicationRef` is injected here explicitly to force the dependency ordering.
    // Since the `ApplicationRef` should be created earlier before the `AnimationEngine`, they
    // both have `ngOnDestroy` hooks and `flush()` must be called after all views are destroyed.
    constructor(doc, driver, normalizer) {
        super(doc, driver, normalizer);
    }
    ngOnDestroy() {
        this.flush();
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: InjectableAnimationEngine, deps: [{ token: DOCUMENT }, { token: i1.AnimationDriver }, { token: i1.ɵAnimationStyleNormalizer }], target: i0.ɵɵFactoryTarget.Injectable }); }
    static { this.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: InjectableAnimationEngine }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.12", ngImport: i0, type: InjectableAnimationEngine, decorators: [{
            type: Injectable
        }], ctorParameters: () => [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i1.AnimationDriver }, { type: i1.ɵAnimationStyleNormalizer }] });
export function instantiateDefaultStyleNormalizer() {
    return new WebAnimationsStyleNormalizer();
}
export function instantiateRendererFactory(renderer, engine, zone) {
    return new AnimationRendererFactory(renderer, engine, zone);
}
const SHARED_ANIMATION_PROVIDERS = [
    { provide: AnimationStyleNormalizer, useFactory: instantiateDefaultStyleNormalizer },
    { provide: AnimationEngine, useClass: InjectableAnimationEngine },
    {
        provide: RendererFactory2,
        useFactory: instantiateRendererFactory,
        deps: [DomRendererFactory2, AnimationEngine, NgZone],
    },
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserModule.
 */
export const BROWSER_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useFactory: () => new WebAnimationsDriver() },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'BrowserAnimations' },
    ...SHARED_ANIMATION_PROVIDERS,
];
/**
 * Separate providers from the actual module so that we can do a local modification in Google3 to
 * include them in the BrowserTestingModule.
 */
export const BROWSER_NOOP_ANIMATIONS_PROVIDERS = [
    { provide: AnimationDriver, useClass: NoopAnimationDriver },
    { provide: ANIMATION_MODULE_TYPE, useValue: 'NoopAnimations' },
    ...SHARED_ANIMATION_PROVIDERS,
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXJzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zL3NyYy9wcm92aWRlcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxFQUNMLGVBQWUsRUFDZixtQkFBbUIsRUFDbkIsZ0JBQWdCLElBQUksZUFBZSxFQUNuQyx5QkFBeUIsSUFBSSx3QkFBd0IsRUFDckQseUJBQXlCLElBQUksd0JBQXdCLEVBQ3JELG9CQUFvQixJQUFJLG1CQUFtQixFQUMzQyw2QkFBNkIsSUFBSSw0QkFBNEIsR0FDOUQsTUFBTSw2QkFBNkIsQ0FBQztBQUNyQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDekMsT0FBTyxFQUNMLHFCQUFxQixFQUVyQixNQUFNLEVBQ04sVUFBVSxFQUNWLE1BQU0sRUFHTixnQkFBZ0IsR0FFakIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFDLG9CQUFvQixJQUFJLG1CQUFtQixFQUFDLE1BQU0sMkJBQTJCLENBQUM7OztBQUd0RixNQUFNLE9BQU8seUJBQTBCLFNBQVEsZUFBZTtJQUM1RCxxRkFBcUY7SUFDckYsMEZBQTBGO0lBQzFGLDRGQUE0RjtJQUM1RixZQUNvQixHQUFhLEVBQy9CLE1BQXVCLEVBQ3ZCLFVBQW9DO1FBRXBDLEtBQUssQ0FBQyxHQUFHLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQzt5SEFkVSx5QkFBeUIsa0JBSzFCLFFBQVE7NkhBTFAseUJBQXlCOztzR0FBekIseUJBQXlCO2tCQURyQyxVQUFVOzswQkFNTixNQUFNOzJCQUFDLFFBQVE7O0FBWXBCLE1BQU0sVUFBVSxpQ0FBaUM7SUFDL0MsT0FBTyxJQUFJLDRCQUE0QixFQUFFLENBQUM7QUFDNUMsQ0FBQztBQUVELE1BQU0sVUFBVSwwQkFBMEIsQ0FDeEMsUUFBNkIsRUFDN0IsTUFBdUIsRUFDdkIsSUFBWTtJQUVaLE9BQU8sSUFBSSx3QkFBd0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQzlELENBQUM7QUFFRCxNQUFNLDBCQUEwQixHQUFlO0lBQzdDLEVBQUMsT0FBTyxFQUFFLHdCQUF3QixFQUFFLFVBQVUsRUFBRSxpQ0FBaUMsRUFBQztJQUNsRixFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLHlCQUF5QixFQUFDO0lBQy9EO1FBQ0UsT0FBTyxFQUFFLGdCQUFnQjtRQUN6QixVQUFVLEVBQUUsMEJBQTBCO1FBQ3RDLElBQUksRUFBRSxDQUFDLG1CQUFtQixFQUFFLGVBQWUsRUFBRSxNQUFNLENBQUM7S0FDckQ7Q0FDRixDQUFDO0FBRUY7OztHQUdHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sNEJBQTRCLEdBQWU7SUFDdEQsRUFBQyxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLG1CQUFtQixFQUFFLEVBQUM7SUFDdkUsRUFBQyxPQUFPLEVBQUUscUJBQXFCLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQy9ELEdBQUcsMEJBQTBCO0NBQzlCLENBQUM7QUFFRjs7O0dBR0c7QUFDSCxNQUFNLENBQUMsTUFBTSxpQ0FBaUMsR0FBZTtJQUMzRCxFQUFDLE9BQU8sRUFBRSxlQUFlLEVBQUUsUUFBUSxFQUFFLG1CQUFtQixFQUFDO0lBQ3pELEVBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBQztJQUM1RCxHQUFHLDBCQUEwQjtDQUM5QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge1xuICBBbmltYXRpb25Ecml2ZXIsXG4gIE5vb3BBbmltYXRpb25Ecml2ZXIsXG4gIMm1QW5pbWF0aW9uRW5naW5lIGFzIEFuaW1hdGlvbkVuZ2luZSxcbiAgybVBbmltYXRpb25SZW5kZXJlckZhY3RvcnkgYXMgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5LFxuICDJtUFuaW1hdGlvblN0eWxlTm9ybWFsaXplciBhcyBBbmltYXRpb25TdHlsZU5vcm1hbGl6ZXIsXG4gIMm1V2ViQW5pbWF0aW9uc0RyaXZlciBhcyBXZWJBbmltYXRpb25zRHJpdmVyLFxuICDJtVdlYkFuaW1hdGlvbnNTdHlsZU5vcm1hbGl6ZXIgYXMgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplcixcbn0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucy9icm93c2VyJztcbmltcG9ydCB7RE9DVU1FTlR9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQge1xuICBBTklNQVRJT05fTU9EVUxFX1RZUEUsXG4gIGluamVjdCxcbiAgSW5qZWN0LFxuICBJbmplY3RhYmxlLFxuICBOZ1pvbmUsXG4gIE9uRGVzdHJveSxcbiAgUHJvdmlkZXIsXG4gIFJlbmRlcmVyRmFjdG9yeTIsXG4gIMm1Q2hhbmdlRGV0ZWN0aW9uU2NoZWR1bGVyIGFzIENoYW5nZURldGVjdGlvblNjaGVkdWxlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge8m1RG9tUmVuZGVyZXJGYWN0b3J5MiBhcyBEb21SZW5kZXJlckZhY3RvcnkyfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEluamVjdGFibGVBbmltYXRpb25FbmdpbmUgZXh0ZW5kcyBBbmltYXRpb25FbmdpbmUgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICAvLyBUaGUgYEFwcGxpY2F0aW9uUmVmYCBpcyBpbmplY3RlZCBoZXJlIGV4cGxpY2l0bHkgdG8gZm9yY2UgdGhlIGRlcGVuZGVuY3kgb3JkZXJpbmcuXG4gIC8vIFNpbmNlIHRoZSBgQXBwbGljYXRpb25SZWZgIHNob3VsZCBiZSBjcmVhdGVkIGVhcmxpZXIgYmVmb3JlIHRoZSBgQW5pbWF0aW9uRW5naW5lYCwgdGhleVxuICAvLyBib3RoIGhhdmUgYG5nT25EZXN0cm95YCBob29rcyBhbmQgYGZsdXNoKClgIG11c3QgYmUgY2FsbGVkIGFmdGVyIGFsbCB2aWV3cyBhcmUgZGVzdHJveWVkLlxuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KERPQ1VNRU5UKSBkb2M6IERvY3VtZW50LFxuICAgIGRyaXZlcjogQW5pbWF0aW9uRHJpdmVyLFxuICAgIG5vcm1hbGl6ZXI6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplcixcbiAgKSB7XG4gICAgc3VwZXIoZG9jLCBkcml2ZXIsIG5vcm1hbGl6ZXIpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5mbHVzaCgpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnN0YW50aWF0ZURlZmF1bHRTdHlsZU5vcm1hbGl6ZXIoKSB7XG4gIHJldHVybiBuZXcgV2ViQW5pbWF0aW9uc1N0eWxlTm9ybWFsaXplcigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5zdGFudGlhdGVSZW5kZXJlckZhY3RvcnkoXG4gIHJlbmRlcmVyOiBEb21SZW5kZXJlckZhY3RvcnkyLFxuICBlbmdpbmU6IEFuaW1hdGlvbkVuZ2luZSxcbiAgem9uZTogTmdab25lLFxuKSB7XG4gIHJldHVybiBuZXcgQW5pbWF0aW9uUmVuZGVyZXJGYWN0b3J5KHJlbmRlcmVyLCBlbmdpbmUsIHpvbmUpO1xufVxuXG5jb25zdCBTSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvblN0eWxlTm9ybWFsaXplciwgdXNlRmFjdG9yeTogaW5zdGFudGlhdGVEZWZhdWx0U3R5bGVOb3JtYWxpemVyfSxcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkVuZ2luZSwgdXNlQ2xhc3M6IEluamVjdGFibGVBbmltYXRpb25FbmdpbmV9LFxuICB7XG4gICAgcHJvdmlkZTogUmVuZGVyZXJGYWN0b3J5MixcbiAgICB1c2VGYWN0b3J5OiBpbnN0YW50aWF0ZVJlbmRlcmVyRmFjdG9yeSxcbiAgICBkZXBzOiBbRG9tUmVuZGVyZXJGYWN0b3J5MiwgQW5pbWF0aW9uRW5naW5lLCBOZ1pvbmVdLFxuICB9LFxuXTtcblxuLyoqXG4gKiBTZXBhcmF0ZSBwcm92aWRlcnMgZnJvbSB0aGUgYWN0dWFsIG1vZHVsZSBzbyB0aGF0IHdlIGNhbiBkbyBhIGxvY2FsIG1vZGlmaWNhdGlvbiBpbiBHb29nbGUzIHRvXG4gKiBpbmNsdWRlIHRoZW0gaW4gdGhlIEJyb3dzZXJNb2R1bGUuXG4gKi9cbmV4cG9ydCBjb25zdCBCUk9XU0VSX0FOSU1BVElPTlNfUFJPVklERVJTOiBQcm92aWRlcltdID0gW1xuICB7cHJvdmlkZTogQW5pbWF0aW9uRHJpdmVyLCB1c2VGYWN0b3J5OiAoKSA9PiBuZXcgV2ViQW5pbWF0aW9uc0RyaXZlcigpfSxcbiAge3Byb3ZpZGU6IEFOSU1BVElPTl9NT0RVTEVfVFlQRSwgdXNlVmFsdWU6ICdCcm93c2VyQW5pbWF0aW9ucyd9LFxuICAuLi5TSEFSRURfQU5JTUFUSU9OX1BST1ZJREVSUyxcbl07XG5cbi8qKlxuICogU2VwYXJhdGUgcHJvdmlkZXJzIGZyb20gdGhlIGFjdHVhbCBtb2R1bGUgc28gdGhhdCB3ZSBjYW4gZG8gYSBsb2NhbCBtb2RpZmljYXRpb24gaW4gR29vZ2xlMyB0b1xuICogaW5jbHVkZSB0aGVtIGluIHRoZSBCcm93c2VyVGVzdGluZ01vZHVsZS5cbiAqL1xuZXhwb3J0IGNvbnN0IEJST1dTRVJfTk9PUF9BTklNQVRJT05TX1BST1ZJREVSUzogUHJvdmlkZXJbXSA9IFtcbiAge3Byb3ZpZGU6IEFuaW1hdGlvbkRyaXZlciwgdXNlQ2xhc3M6IE5vb3BBbmltYXRpb25Ecml2ZXJ9LFxuICB7cHJvdmlkZTogQU5JTUFUSU9OX01PRFVMRV9UWVBFLCB1c2VWYWx1ZTogJ05vb3BBbmltYXRpb25zJ30sXG4gIC4uLlNIQVJFRF9BTklNQVRJT05fUFJPVklERVJTLFxuXTtcbiJdfQ==