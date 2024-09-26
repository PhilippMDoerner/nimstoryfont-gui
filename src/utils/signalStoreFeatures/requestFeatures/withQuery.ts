import {
  computed,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
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
import { QueryFunction, RequestStatus } from './types';

export type QueryState<T, Prop extends string> = {
  [K in Prop as `${K}RequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}Error`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

type Config = {
  methodName?: string;
  dataFielddName?: string;
};

function getKeys(name: string, config?: Config) {
  const titleCaseName = toTitleCase(name);
  return {
    requestStatus: `${name}RequestStatus`,
    error: `${name}Error`,
    data: config?.dataFielddName ?? `${name}Data`,
    isPending: `is${titleCaseName}Pending`,
    hasLoaded: `has${titleCaseName}Loaded`,
    hasError: `has${titleCaseName}Error`,
    load: config?.methodName ?? `load${titleCaseName}`,
  };
}

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
  config?: Config,
): SignalStoreFeature {
  const keys = getKeys(name, config);
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
      [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
    })),

    withMethods((store, environmentInjector = inject(EnvironmentInjector)) => ({
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
    })),
  );
}
