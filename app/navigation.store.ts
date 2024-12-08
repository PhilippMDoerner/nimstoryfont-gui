import { computed, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withState,
} from '@ngrx/signals';
import { filter, map, pairwise } from 'rxjs';
import { log } from 'src/utils/logging';

export type NavigationState = {
  history: {
    currentRoute: RoutesRecognized | undefined;
    priorRoute: RoutesRecognized | undefined;
  };
};

const initialState: NavigationState = {
  history: {
    currentRoute: undefined,
    priorRoute: undefined,
  },
};

export const NavigationStore = signalStore(
  withState(initialState),
  withComputed((state) => {
    const router = inject(Router);
    const currentRoute$ = router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => router.routerState.snapshot.root),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
    );

    return {
      currentRoute: toSignal(currentRoute$),
      priorUrl: computed(() => state.history().priorRoute?.url),
      currentUrl: computed(() => state.history().currentRoute?.url),
    };
  }),
  withHooks((store) => {
    log('NavigationStore', store);
    const router = inject(Router);
    return {
      onInit: () => {
        router.events
          .pipe(
            filter((event) => event instanceof RoutesRecognized),
            pairwise(),
            takeUntilDestroyed(),
          )
          .subscribe(([priorRoute, currentRoute]) => {
            patchState(store, {
              history: {
                currentRoute,
                priorRoute,
              },
            });
          });
      },
    };
  }),
);
