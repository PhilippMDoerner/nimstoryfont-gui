import {
  computed,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
} from '@angular/core';
import {
  patchState,
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { take } from 'rxjs';
import { toTitleCase } from 'src/utils/string';
import { PageeableQueryFunction, RequestStatus } from './types';

export type PageableQueryState<T, Prop extends string> = {
  [K in Prop as `${K}RequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}Error`]: any | undefined;
} & {
  [M in Prop as `${M}Items`]: T[] | undefined;
} & {
  [N in Prop as `${N}LastPageIndex`]: number | undefined;
};

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);
  return {
    requestStatus: `${name}RequestStatus`,
    error: `${name}Error`,
    items: `${name}Items`,
    latestPageIndex: `${name}LatestPageIndex`,
    nextPageIndex: `${name}NextPageIndex`,
    isPending: `is${titleCaseName}Pending`,
    hasLoaded: `has${titleCaseName}Loaded`,
    hasError: `has${titleCaseName}Error`,
    loadNext: `loadNext${titleCaseName}Page`,
    loadPrior: `loadPrior${titleCaseName}Pag`,
  };
}

export function withPageableQuery<T, QueryArgs, Prop extends string>(
  name: Prop,
  query: PageeableQueryFunction<QueryArgs, T[]>,
): SignalStoreFeature {
  const keys = getKeys(name);
  const getRequestStatus = (store: any): RequestStatus =>
    store[keys.requestStatus]();

  return signalStoreFeature(
    withState<PageableQueryState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.items]: undefined,
      [keys.latestPageIndex]: undefined,
    } as PageableQueryState<T, Prop>),

    withComputed((store: any) => ({
      [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
      [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
      [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
      [keys.nextPageIndex]: computed(() => {
        const currentIndex = store[keys.latestPageIndex]() as
          | number
          | undefined;
        const hasLoadedAnyPage = currentIndex !== undefined;
        return hasLoadedAnyPage ? currentIndex + 1 : 0;
      }),
    })),

    withMethods(
      (store: any, environmentInjector = inject(EnvironmentInjector)) => ({
        [keys.loadNext]: (args: QueryArgs) => {
          if (store[keys.isPending]() === true) return;

          patchState(store, {
            [keys.requestStatus]: 'pending',
            [keys.error]: undefined,
          } as PageableQueryState<T, Prop>);

          const queryResult = runInInjectionContext(environmentInjector, () =>
            query(args, store[keys.nextPageIndex]()),
          );

          queryResult.pipe(take(1)).subscribe({
            next: (newItems) => {
              const items: T[] = store[keys.items]() ?? [];

              patchState(store, {
                [keys.requestStatus]: 'success',
                [keys.error]: undefined,
                [keys.latestPageIndex]: store[keys.nextPageIndex](),
                [keys.items]: items.concat(newItems),
              } as PageableQueryState<T, Prop>);
            },
            error: (error) => {
              patchState(store, {
                [keys.requestStatus]: 'error',
                [keys.error]: error,
              } as PageableQueryState<T, Prop>);
            },
          });
        },
      }),
    ),
  );
}
