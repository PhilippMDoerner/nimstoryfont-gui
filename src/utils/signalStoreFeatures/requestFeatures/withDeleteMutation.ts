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
import {
  DeleteFunction,
  EmptyFeature,
  RequestFeatureConfig,
  RequestStatus,
} from '../types';

export type DeleteState<T, Prop extends string> = {
  [K in Prop as `${K}DeleteRequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}DeleteError`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

export type DeleteComputed<Prop extends string> = {
  [K in Prop as `is${Capitalize<K>}DeletePending`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}DeleteLoaded`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}DeleteFailed`]: Signal<boolean>;
};

export type DeleteMethods<QueryArgs, Prop extends string> = {
  [K in Prop as `delete${Capitalize<K>}`]: (args: QueryArgs) => void;
} & {};

export type DeleteFeature<T, DeleteArgs, Prop extends string> = {
  state: DeleteState<T, Prop>;
  signals: DeleteComputed<Prop>;
  computed: DeleteComputed<Prop>;
  methods: DeleteMethods<DeleteArgs, Prop>;
};

export function withDeleteMutation<T, DeleteArgs, Prop extends string>(
  name: Prop,
  deleteMutation: DeleteFunction<DeleteArgs>,
  config?: RequestFeatureConfig<T>,
): SignalStoreFeature<EmptyFeature, DeleteFeature<T, DeleteArgs, Prop>> {
  const keys = getKeys(name);
  const getRequestStatus = (store: any): RequestStatus =>
    store[keys.requestStatus]();

  return signalStoreFeature(
    withState<DeleteState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.data]: undefined,
    } as DeleteState<T, Prop>),

    withComputed((store) => ({
      [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
      [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
      [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
    })),

    withMethods((store, environmentInjector = inject(EnvironmentInjector)) => ({
      [keys.delete]: (args: DeleteArgs) => {
        patchState(store, {
          [keys.requestStatus]: 'pending',
          [keys.error]: undefined,
        } as DeleteState<T, Prop>);

        const deleteResult = runInInjectionContext(environmentInjector, () =>
          deleteMutation(args),
        );
        deleteResult.pipe(take(1)).subscribe({
          next: () => {
            patchState(store, {
              [keys.requestStatus]: 'success',
              [keys.data]: undefined,
            } as DeleteState<T, Prop>);

            if (config?.successUpdate) config.successUpdate(store);
          },
          error: (error) => {
            patchState(store, {
              [keys.requestStatus]: 'error',
              [keys.error]: error,
            } as DeleteState<T, Prop>);

            if (config?.errorUpdate) config.errorUpdate(store, error);
          },
        });
      },
    })),
  ) as SignalStoreFeature<EmptyFeature, DeleteFeature<T, DeleteArgs, Prop>>;
}

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);

  return {
    requestStatus: `${name}DeleteRequestStatus`,
    error: `${name}DeleteError`,
    data: `${name}Data`,
    isPending: `is${titleCaseName}DeletePending`,
    hasLoaded: `has${titleCaseName}DeleteLoaded`,
    hasError: `has${titleCaseName}DeleteError`,
    delete: `delete${titleCaseName}`,
  };
}
