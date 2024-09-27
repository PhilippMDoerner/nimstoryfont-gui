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
import { EmptyFeature, RequestStatus, UpdateFunction } from './types';

export type UpdateState<T, Prop extends string> = {
  [K in Prop as `${K}UpdateRequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}UpdateError`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

export type UpdateComputed<Prop extends string> = {
  [K in Prop as `is${Capitalize<K>}UpdatePending`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}UpdateLoaded`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}UpdateFailed`]: Signal<boolean>;
};

export type UpdateMethods<UpdateArgs, Prop extends string> = {
  [K in Prop as `update${Capitalize<K>}`]: (args: UpdateArgs) => void;
} & {};

export type UpdateFeature<T, UpdateArgs, Prop extends string> = {
  state: UpdateState<T, Prop>;
  signals: UpdateComputed<Prop>;
  computed: UpdateComputed<Prop>;
  methods: UpdateMethods<UpdateArgs, Prop>;
};

export function withUpdateMutation<T, UpdateArgs, Prop extends string>(
  name: Prop,
  updateMutation: UpdateFunction<UpdateArgs, T>,
): SignalStoreFeature<EmptyFeature, UpdateFeature<T, UpdateArgs, Prop>> {
  const keys = getKeys(name);
  const getRequestStatus = (store: any): RequestStatus =>
    store[keys.requestStatus]();

  return signalStoreFeature(
    withState<UpdateState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.data]: undefined,
    } as UpdateState<T, Prop>),

    withComputed((store) => ({
      [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
      [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
      [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
    })),

    withMethods((store, environmentInjector = inject(EnvironmentInjector)) => ({
      [keys.update]: (args: UpdateArgs) => {
        patchState(store, {
          [keys.requestStatus]: 'pending',
          [keys.error]: undefined,
        } as UpdateState<T, Prop>);

        const updateResult = runInInjectionContext(environmentInjector, () =>
          updateMutation(args),
        );
        updateResult.pipe(take(1)).subscribe({
          next: (data) => {
            patchState(store, {
              [keys.requestStatus]: 'success',
              [keys.data]: data,
            } as UpdateState<T, Prop>);
          },
          error: (error) => {
            patchState(store, {
              [keys.requestStatus]: 'error',
              [keys.error]: error,
            } as UpdateState<T, Prop>);
          },
        });
      },
    })),
  ) as SignalStoreFeature<EmptyFeature, UpdateFeature<T, UpdateArgs, Prop>>;
}

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);

  return {
    requestStatus: `${titleCaseName}UpdateRequestStatus`,
    error: `${titleCaseName}UpdateError`,
    data: `${name}Data`,
    isPending: `is${titleCaseName}UpdatePending`,
    hasLoaded: `has${titleCaseName}UpdateLoaded`,
    hasError: `has${titleCaseName}UpdateError`,
    update: `update${titleCaseName}`,
  };
}
