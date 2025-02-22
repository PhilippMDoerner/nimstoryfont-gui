import { isPlatformServer } from '@angular/common';
import { computed, inject, PLATFORM_ID, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RoutesRecognized } from '@angular/router';
import { signalStore, withComputed, withProps } from '@ngrx/signals';
import { EMPTY, filter, map, pairwise } from 'rxjs';

export const NavigationStore = signalStore(
  withProps(() => {
    const isInServer = isPlatformServer(inject(PLATFORM_ID));
    if (isInServer) return { _currentRoute$: EMPTY, _history$: EMPTY };
    const router = inject(Router);

    return {
      _currentRoute$: router.events.pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => router.routerState.snapshot.root),
        map((route) => {
          while (route.firstChild) {
            route = route.firstChild;
          }
          return route;
        }),
      ),
      _history$: router.events.pipe(
        filter((event) => event instanceof RoutesRecognized),
        map((event) => event.url),
        pairwise(),
        map(([priorRoute, currentRoute]) => ({
          currentRoute: currentRoute,
          priorRoute: priorRoute,
        })),
      ),
    };
  }),
  withComputed((state) => {
    const isInServer = isPlatformServer(inject(PLATFORM_ID));
    if (isInServer)
      return {
        currentRoute: signal(undefined),
        priorUrl: signal(undefined),
        currentUrl: signal(undefined),
      };

    const history = toSignal(state._history$);
    return {
      currentRoute: toSignal(state._currentRoute$),
      priorUrl: computed(() => history()?.priorRoute),
      currentUrl: computed(() => history()?.currentRoute),
    };
  }),
);
