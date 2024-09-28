import {
  computed,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
  Signal,
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
import { EmptyFeature, PageeableQueryFunction, RequestStatus } from '../types';

export type PageableQueryState<T, Prop extends string> = {
  [K in Prop as `${K}RequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}Error`]: any | undefined;
} & {
  [M in Prop as `${M}Items`]: T[] | undefined;
} & {
  [N in Prop as `${N}LastPageIndex`]: number | undefined;
} & {
  [K in Prop as `canLoadMore${Capitalize<K>}Pages`]: boolean;
};

export type PageableQueryComputed<Prop extends string> = {
  [K in Prop as `is${Capitalize<K>}PageQueryPending`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}PageQuerySucceeded`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}PageQueryFailed`]: Signal<boolean>;
} & {
  [K in Prop as `next${Capitalize<K>}PageIndex`]: Signal<number>;
};

export type PageableQueryMethods<QueryArgs, Prop extends string> = {
  [K in Prop as `loadNext${Capitalize<K>}Page`]: (args: QueryArgs) => void;
} & {
  [K in Prop as `loadPrior${Capitalize<K>}Page`]: (args: QueryArgs) => void;
} & {
  [K in Prop as `loadFirst${Capitalize<K>}Page`]: (args: QueryArgs) => void;
};

export type PageableQueryFeature<T, QueryArgs, Prop extends string> = {
  state: PageableQueryState<T, Prop>;
  computed: PageableQueryComputed<Prop>;
  methods: PageableQueryMethods<QueryArgs, Prop>;
};

export function withPageableQuery<T, QueryArgs, Prop extends string>(
  name: Prop,
  query: PageeableQueryFunction<QueryArgs, T[]>,
): SignalStoreFeature<EmptyFeature, PageableQueryFeature<T, QueryArgs, Prop>> {
  const keys = getKeys(name);

  return signalStoreFeature(
    withState<PageableQueryState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.items]: undefined,
      [keys.latestPageIndex]: undefined,
      [keys.canLoadMore]: true,
    } as PageableQueryState<T, Prop>),

    withComputed((store) => {
      const getRequestStatus = (store: any): RequestStatus =>
        store[keys.requestStatus]();
      const getLatestPageIndex = (store: any): number | undefined =>
        store[keys.latestPageIndex]();
      return {
        [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
        [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
        [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
        [keys.nextPageIndex]: computed(() => {
          const currentIndex = getLatestPageIndex(store);
          const hasLoadedAnyPage = currentIndex !== undefined;
          return hasLoadedAnyPage ? currentIndex + 1 : 0;
        }),
      };
    }),

    withMethods((store, environmentInjector = inject(EnvironmentInjector)) => {
      const getNextPageIndex = (store: any): number =>
        store[keys.nextPageIndex]();
      const getItems = (store: any): T[] => store[keys.items]() ?? [];

      return {
        [keys.loadNext]: (args: QueryArgs) => {
          const isAlreadyLoading = store[keys.isPending]() === true;
          const canLoadPage = store[keys.canLoadMore]() === true;
          if (isAlreadyLoading || !canLoadPage) return;

          patchState(store, {
            [keys.requestStatus]: 'pending',
            [keys.error]: undefined,
          } as PageableQueryState<T, Prop>);

          const queryResult = runInInjectionContext(environmentInjector, () =>
            query(args, getNextPageIndex(store)),
          );

          queryResult.pipe(take(1)).subscribe({
            next: (newItems) => {
              const items: T[] = getItems(store);
              const canLoadMore = newItems.length > 0;

              patchState(store, {
                [keys.requestStatus]: 'success',
                [keys.error]: undefined,
                [keys.latestPageIndex]: store[keys.nextPageIndex](),
                [keys.items]: items.concat(newItems),
                [keys.canLoadMore]: canLoadMore,
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
        [keys.loadFirst]: (args: QueryArgs) => {
          const isAlreadyLoading = store[keys.isPending]() === true;
          const canLoadPage = store[keys.canLoadMore]() === true;
          if (isAlreadyLoading || !canLoadPage) return;

          patchState(store, {
            [keys.requestStatus]: 'pending',
            [keys.error]: undefined,
            [keys.latestPageIndex]: undefined,
            [keys.items]: undefined,
          } as PageableQueryState<T, Prop>);

          const firstPageIndex = 0;
          const queryResult = runInInjectionContext(environmentInjector, () =>
            query(args, firstPageIndex),
          );

          queryResult.pipe(take(1)).subscribe({
            next: (newItems) => {
              const items: T[] = getItems(store);
              const canLoadMore = newItems.length > 0;

              patchState(store, {
                [keys.requestStatus]: 'success',
                [keys.error]: undefined,
                [keys.latestPageIndex]: store[keys.nextPageIndex](),
                [keys.items]: items.concat(newItems),
                [keys.canLoadMore]: canLoadMore,
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
      };
    }),
  ) as SignalStoreFeature<
    EmptyFeature,
    PageableQueryFeature<T, QueryArgs, Prop>
  >;
}

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);
  return {
    requestStatus: `${name}RequestStatus`,
    error: `${name}Error`,
    items: `${name}Items`,
    latestPageIndex: `latest${titleCaseName}PageIndex`,
    nextPageIndex: `next${titleCaseName}PageIndex`,
    canLoadMore: `canLoadMore${titleCaseName}Pages`,
    isPending: `is${titleCaseName}QueryPending`,
    hasLoaded: `has${titleCaseName}QuerySucceeded`,
    hasError: `has${titleCaseName}QueryFailed`,
    loadNext: `loadNext${titleCaseName}Page`,
    loadPrior: `loadPrior${titleCaseName}Page`,
    loadFirst: `loadFirst${titleCaseName}Page`,
  };
}
