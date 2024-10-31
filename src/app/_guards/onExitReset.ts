import { inject, InjectionToken, Type } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  RouterStateSnapshot,
} from '@angular/router';

type Resettable = { reset: () => void };
type TypableInjectionToken<T> = InjectionToken<T> | Type<T>;

/**
 * Calls the reset method of the given injectable object, when the route is being exited.
 */
export function onExitReset(
  resettable: TypableInjectionToken<Resettable>,
): CanActivateFn {
  return (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
    inject(resettable).reset();
    return true;
  };
}
