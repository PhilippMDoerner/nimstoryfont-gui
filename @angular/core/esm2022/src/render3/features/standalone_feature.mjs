/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { ɵɵinject as inject } from '../../di/injector_compatibility';
import { ɵɵdefineInjectable as defineInjectable } from '../../di/interface/defs';
import { internalImportProvidersFrom } from '../../di/provider_collection';
import { EnvironmentInjector } from '../../di/r3_injector';
import { performanceMarkFeature } from '../../util/performance';
import { createEnvironmentInjector } from '../ng_module_ref';
/**
 * A service used by the framework to create instances of standalone injectors. Those injectors are
 * created on demand in case of dynamic component instantiation and contain ambient providers
 * collected from the imports graph rooted at a given standalone component.
 */
class StandaloneService {
    constructor(_injector) {
        this._injector = _injector;
        this.cachedInjectors = new Map();
    }
    getOrCreateStandaloneInjector(componentDef) {
        if (!componentDef.standalone) {
            return null;
        }
        if (!this.cachedInjectors.has(componentDef)) {
            const providers = internalImportProvidersFrom(false, componentDef.type);
            const standaloneInjector = providers.length > 0
                ? createEnvironmentInjector([providers], this._injector, `Standalone[${componentDef.type.name}]`)
                : null;
            this.cachedInjectors.set(componentDef, standaloneInjector);
        }
        return this.cachedInjectors.get(componentDef);
    }
    ngOnDestroy() {
        try {
            for (const injector of this.cachedInjectors.values()) {
                if (injector !== null) {
                    injector.destroy();
                }
            }
        }
        finally {
            this.cachedInjectors.clear();
        }
    }
    /** @nocollapse */
    static { this.ɵprov = defineInjectable({
        token: StandaloneService,
        providedIn: 'environment',
        factory: () => new StandaloneService(inject(EnvironmentInjector)),
    }); }
}
/**
 * A feature that acts as a setup code for the {@link StandaloneService}.
 *
 * The most important responsibility of this feature is to expose the "getStandaloneInjector"
 * function (an entry points to a standalone injector creation) on a component definition object. We
 * go through the features infrastructure to make sure that the standalone injector creation logic
 * is tree-shakable and not included in applications that don't use standalone components.
 *
 * @codeGenApi
 */
export function ɵɵStandaloneFeature(definition) {
    performanceMarkFeature('NgStandalone');
    definition.getStandaloneInjector = (parentInjector) => {
        return parentInjector.get(StandaloneService).getOrCreateStandaloneInjector(definition);
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RhbmRhbG9uZV9mZWF0dXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9mZWF0dXJlcy9zdGFuZGFsb25lX2ZlYXR1cmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLFFBQVEsSUFBSSxNQUFNLEVBQUMsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSxPQUFPLEVBQUMsa0JBQWtCLElBQUksZ0JBQWdCLEVBQUMsTUFBTSx5QkFBeUIsQ0FBQztBQUMvRSxPQUFPLEVBQUMsMkJBQTJCLEVBQUMsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUV6RCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUU5RCxPQUFPLEVBQUMseUJBQXlCLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUUzRDs7OztHQUlHO0FBQ0gsTUFBTSxpQkFBaUI7SUFHckIsWUFBb0IsU0FBOEI7UUFBOUIsY0FBUyxHQUFULFNBQVMsQ0FBcUI7UUFGbEQsb0JBQWUsR0FBRyxJQUFJLEdBQUcsRUFBcUQsQ0FBQztJQUUxQixDQUFDO0lBRXRELDZCQUE2QixDQUFDLFlBQW1DO1FBQy9ELElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDN0IsT0FBTyxJQUFJLENBQUM7UUFDZCxDQUFDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUM7WUFDNUMsTUFBTSxTQUFTLEdBQUcsMkJBQTJCLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RSxNQUFNLGtCQUFrQixHQUN0QixTQUFTLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ2xCLENBQUMsQ0FBQyx5QkFBeUIsQ0FDdkIsQ0FBQyxTQUFTLENBQUMsRUFDWCxJQUFJLENBQUMsU0FBUyxFQUNkLGNBQWMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FDeEM7Z0JBQ0gsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNYLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQzdELENBQUM7UUFFRCxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBRSxDQUFDO0lBQ2pELENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDO1lBQ0gsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUM7Z0JBQ3JELElBQUksUUFBUSxLQUFLLElBQUksRUFBRSxDQUFDO29CQUN0QixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ3JCLENBQUM7WUFDSCxDQUFDO1FBQ0gsQ0FBQztnQkFBUyxDQUFDO1lBQ1QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUMvQixDQUFDO0lBQ0gsQ0FBQztJQUVELGtCQUFrQjthQUNYLFVBQUssR0FBNkIsZ0JBQWdCLENBQUM7UUFDeEQsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QixVQUFVLEVBQUUsYUFBYTtRQUN6QixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsQ0FBQztLQUNsRSxDQUFDLEFBSlUsQ0FJVDs7QUFHTDs7Ozs7Ozs7O0dBU0c7QUFDSCxNQUFNLFVBQVUsbUJBQW1CLENBQUMsVUFBaUM7SUFDbkUsc0JBQXNCLENBQUMsY0FBYyxDQUFDLENBQUM7SUFDdkMsVUFBVSxDQUFDLHFCQUFxQixHQUFHLENBQUMsY0FBbUMsRUFBRSxFQUFFO1FBQ3pFLE9BQU8sY0FBYyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLDZCQUE2QixDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3pGLENBQUMsQ0FBQztBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5pbXBvcnQge8m1ybVpbmplY3QgYXMgaW5qZWN0fSBmcm9tICcuLi8uLi9kaS9pbmplY3Rvcl9jb21wYXRpYmlsaXR5JztcbmltcG9ydCB7ybXJtWRlZmluZUluamVjdGFibGUgYXMgZGVmaW5lSW5qZWN0YWJsZX0gZnJvbSAnLi4vLi4vZGkvaW50ZXJmYWNlL2RlZnMnO1xuaW1wb3J0IHtpbnRlcm5hbEltcG9ydFByb3ZpZGVyc0Zyb219IGZyb20gJy4uLy4uL2RpL3Byb3ZpZGVyX2NvbGxlY3Rpb24nO1xuaW1wb3J0IHtFbnZpcm9ubWVudEluamVjdG9yfSBmcm9tICcuLi8uLi9kaS9yM19pbmplY3Rvcic7XG5pbXBvcnQge09uRGVzdHJveX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL2xpZmVjeWNsZV9ob29rcyc7XG5pbXBvcnQge3BlcmZvcm1hbmNlTWFya0ZlYXR1cmV9IGZyb20gJy4uLy4uL3V0aWwvcGVyZm9ybWFuY2UnO1xuaW1wb3J0IHtDb21wb25lbnREZWZ9IGZyb20gJy4uL2ludGVyZmFjZXMvZGVmaW5pdGlvbic7XG5pbXBvcnQge2NyZWF0ZUVudmlyb25tZW50SW5qZWN0b3J9IGZyb20gJy4uL25nX21vZHVsZV9yZWYnO1xuXG4vKipcbiAqIEEgc2VydmljZSB1c2VkIGJ5IHRoZSBmcmFtZXdvcmsgdG8gY3JlYXRlIGluc3RhbmNlcyBvZiBzdGFuZGFsb25lIGluamVjdG9ycy4gVGhvc2UgaW5qZWN0b3JzIGFyZVxuICogY3JlYXRlZCBvbiBkZW1hbmQgaW4gY2FzZSBvZiBkeW5hbWljIGNvbXBvbmVudCBpbnN0YW50aWF0aW9uIGFuZCBjb250YWluIGFtYmllbnQgcHJvdmlkZXJzXG4gKiBjb2xsZWN0ZWQgZnJvbSB0aGUgaW1wb3J0cyBncmFwaCByb290ZWQgYXQgYSBnaXZlbiBzdGFuZGFsb25lIGNvbXBvbmVudC5cbiAqL1xuY2xhc3MgU3RhbmRhbG9uZVNlcnZpY2UgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuICBjYWNoZWRJbmplY3RvcnMgPSBuZXcgTWFwPENvbXBvbmVudERlZjx1bmtub3duPiwgRW52aXJvbm1lbnRJbmplY3RvciB8IG51bGw+KCk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IpIHt9XG5cbiAgZ2V0T3JDcmVhdGVTdGFuZGFsb25lSW5qZWN0b3IoY29tcG9uZW50RGVmOiBDb21wb25lbnREZWY8dW5rbm93bj4pOiBFbnZpcm9ubWVudEluamVjdG9yIHwgbnVsbCB7XG4gICAgaWYgKCFjb21wb25lbnREZWYuc3RhbmRhbG9uZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmNhY2hlZEluamVjdG9ycy5oYXMoY29tcG9uZW50RGVmKSkge1xuICAgICAgY29uc3QgcHJvdmlkZXJzID0gaW50ZXJuYWxJbXBvcnRQcm92aWRlcnNGcm9tKGZhbHNlLCBjb21wb25lbnREZWYudHlwZSk7XG4gICAgICBjb25zdCBzdGFuZGFsb25lSW5qZWN0b3IgPVxuICAgICAgICBwcm92aWRlcnMubGVuZ3RoID4gMFxuICAgICAgICAgID8gY3JlYXRlRW52aXJvbm1lbnRJbmplY3RvcihcbiAgICAgICAgICAgICAgW3Byb3ZpZGVyc10sXG4gICAgICAgICAgICAgIHRoaXMuX2luamVjdG9yLFxuICAgICAgICAgICAgICBgU3RhbmRhbG9uZVske2NvbXBvbmVudERlZi50eXBlLm5hbWV9XWAsXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBudWxsO1xuICAgICAgdGhpcy5jYWNoZWRJbmplY3RvcnMuc2V0KGNvbXBvbmVudERlZiwgc3RhbmRhbG9uZUluamVjdG9yKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5jYWNoZWRJbmplY3RvcnMuZ2V0KGNvbXBvbmVudERlZikhO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZvciAoY29uc3QgaW5qZWN0b3Igb2YgdGhpcy5jYWNoZWRJbmplY3RvcnMudmFsdWVzKCkpIHtcbiAgICAgICAgaWYgKGluamVjdG9yICE9PSBudWxsKSB7XG4gICAgICAgICAgaW5qZWN0b3IuZGVzdHJveSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHRoaXMuY2FjaGVkSW5qZWN0b3JzLmNsZWFyKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBub2NvbGxhcHNlICovXG4gIHN0YXRpYyDJtXByb3YgPSAvKiogQHB1cmVPckJyZWFrTXlDb2RlICovIGRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBTdGFuZGFsb25lU2VydmljZSxcbiAgICBwcm92aWRlZEluOiAnZW52aXJvbm1lbnQnLFxuICAgIGZhY3Rvcnk6ICgpID0+IG5ldyBTdGFuZGFsb25lU2VydmljZShpbmplY3QoRW52aXJvbm1lbnRJbmplY3RvcikpLFxuICB9KTtcbn1cblxuLyoqXG4gKiBBIGZlYXR1cmUgdGhhdCBhY3RzIGFzIGEgc2V0dXAgY29kZSBmb3IgdGhlIHtAbGluayBTdGFuZGFsb25lU2VydmljZX0uXG4gKlxuICogVGhlIG1vc3QgaW1wb3J0YW50IHJlc3BvbnNpYmlsaXR5IG9mIHRoaXMgZmVhdHVyZSBpcyB0byBleHBvc2UgdGhlIFwiZ2V0U3RhbmRhbG9uZUluamVjdG9yXCJcbiAqIGZ1bmN0aW9uIChhbiBlbnRyeSBwb2ludHMgdG8gYSBzdGFuZGFsb25lIGluamVjdG9yIGNyZWF0aW9uKSBvbiBhIGNvbXBvbmVudCBkZWZpbml0aW9uIG9iamVjdC4gV2VcbiAqIGdvIHRocm91Z2ggdGhlIGZlYXR1cmVzIGluZnJhc3RydWN0dXJlIHRvIG1ha2Ugc3VyZSB0aGF0IHRoZSBzdGFuZGFsb25lIGluamVjdG9yIGNyZWF0aW9uIGxvZ2ljXG4gKiBpcyB0cmVlLXNoYWthYmxlIGFuZCBub3QgaW5jbHVkZWQgaW4gYXBwbGljYXRpb25zIHRoYXQgZG9uJ3QgdXNlIHN0YW5kYWxvbmUgY29tcG9uZW50cy5cbiAqXG4gKiBAY29kZUdlbkFwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gybXJtVN0YW5kYWxvbmVGZWF0dXJlKGRlZmluaXRpb246IENvbXBvbmVudERlZjx1bmtub3duPikge1xuICBwZXJmb3JtYW5jZU1hcmtGZWF0dXJlKCdOZ1N0YW5kYWxvbmUnKTtcbiAgZGVmaW5pdGlvbi5nZXRTdGFuZGFsb25lSW5qZWN0b3IgPSAocGFyZW50SW5qZWN0b3I6IEVudmlyb25tZW50SW5qZWN0b3IpID0+IHtcbiAgICByZXR1cm4gcGFyZW50SW5qZWN0b3IuZ2V0KFN0YW5kYWxvbmVTZXJ2aWNlKS5nZXRPckNyZWF0ZVN0YW5kYWxvbmVJbmplY3RvcihkZWZpbml0aW9uKTtcbiAgfTtcbn1cbiJdfQ==