import {
  computed,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import {
  patchState,
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { take } from 'rxjs';
import { toTitleCase } from 'src/utils/string';
import { EmptyFeature, QueryFunction, RequestStatus } from '../types';

export type QueryState<T, Prop extends string> = {
  [K in Prop as `${K}QueryRequestStatus`]: RequestStatus;
} & {
  [K in Prop as `${K}QueryError`]: any | undefined;
} & {
  [K in Prop as `${K}Data`]: T | undefined;
};

export type QueryComputed<Prop extends string> = {
  [K in Prop as `is${Capitalize<K>}QueryPending`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}QuerySucceeded`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}QueryFailed`]: Signal<boolean>;
};

export type QueryMethods<QueryArgs, Prop extends string> = {
  [K in Prop as `load${Capitalize<K>}`]: (args: QueryArgs) => void;
} & {};

export type QueryFeature<T, QueryArgs, Prop extends string> = {
  state: QueryState<T, Prop>;
  computed: QueryComputed<Prop>;
  methods: QueryMethods<QueryArgs, Prop>;
};

/**
 * Adds the following to the store:
 * signals:
 * - `${name}RequestStatus` - The status of the HTTP request fetching the data
 * - `${name}Error` - The error object if the HTTP request failed
 * - `${name}Data` - The data fetched by the HTTP request
 * computedSignals:
 * - `is${name}Pending` - Whether the HTTP request is pending
 * - `has${name}Loaded` - Whether the HTTP request was successful
 * - `has${name}Error` - Whether the HTTP request failed
 * methods:
 * - `load${name}`: Triggers an HTTP request using `query` for fetching the data and puts it in the store, updating `${name}RequestStatus`, `${name}Error` and `${name}Data` accordingly.
 */
export function withQuery<T, QueryArgs, Prop extends string>(
  name: Prop,
  query: QueryFunction<QueryArgs, T>,
): SignalStoreFeature<EmptyFeature, QueryFeature<T, QueryArgs, Prop>> {
  const keys = getKeys(name);
  const getRequestStatus = (store: any): RequestStatus =>
    store[keys.requestStatus]();
  return signalStoreFeature(
    withState<QueryState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.data]: undefined,
    } as QueryState<T, Prop>),

    withComputed((store) => ({
      [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
      [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
      [keys.hasFailed]: computed(() => getRequestStatus(store) === 'error'),
    })),

    withMethods(
      (store, environmentInjector = inject(EnvironmentInjector)) =>
        ({
          [keys.load]: (args: QueryArgs) => {
            patchState(store, {
              [keys.requestStatus]: 'pending',
              [keys.data]: undefined,
              [keys.error]: undefined,
            } as QueryState<T, Prop>);

            const queryResult = runInInjectionContext(environmentInjector, () =>
              query(args),
            );

            queryResult.pipe(take(1)).subscribe({
              next: (data) => {
                patchState(store, {
                  [keys.requestStatus]: 'success',
                  [keys.error]: undefined,
                  [keys.data]: data,
                } as QueryState<T, Prop>);
              },
              error: (error) => {
                patchState(store, {
                  [keys.requestStatus]: 'error',
                  [keys.error]: error,
                  [keys.data]: undefined,
                } as QueryState<T, Prop>);
              },
            });
          },
        }) as QueryMethods<QueryArgs, Prop>,
    ),
  ) as SignalStoreFeature<EmptyFeature, QueryFeature<T, QueryArgs, Prop>>;
}

const dataField = (name: string) => `${name}Data`;

function getKeys(name: string) {
  const titleName = toTitleCase(name);
  return {
    requestStatus: `${name}QueryRequestStatus`,
    error: `${name}QueryError`,
    data: dataField(name),
    isPending: `is${titleName}QueryPending`,
    hasLoaded: `has${titleName}QuerySucceeded`,
    hasFailed: `has${titleName}QueryFailed`,
    load: `load${titleName}`,
  };
}
