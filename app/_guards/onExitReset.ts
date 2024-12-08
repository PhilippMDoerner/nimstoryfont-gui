import { inject, InjectionToken, Type } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanDeactivateFn,
  RouterStateSnapshot,
} from '@angular/router';

type Resettable = {
  reset: (
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ) => void;
};
type TypableInjectionToken<T> = InjectionToken<T> | Type<T>;

/**
 * Calls the reset method of the given injectable object, when the route is being exited.
 */
export function onExitReset<T>(
  resettable: TypableInjectionToken<Resettable>,
): CanDeactivateFn<T> {
  return (
    component: T,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot,
  ) => {
    inject(resettable).reset(currentState, nextState);
    return true;
  };
}
