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
import { RequestStatus, UpdateFunction } from './types';

export type UpdateState<T, Prop extends string> = {
  [K in Prop as `${K}UpdateRequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}UpdateError`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);
  const updateName = `update${titleCaseName}`;
  const updateTitleName = toTitleCase(updateName);

  return {
    requestStatus: `${updateName}RequestStatus`,
    error: `${updateName}Error`,
    data: `${name}Data`,
    isPending: `is${updateTitleName}Pending`,
    hasLoaded: `has${updateTitleName}Loaded`,
    hasError: `has${updateTitleName}Error`,
    update: updateName,
  };
}

export function withUpdateMutation<T, UpdateArgs, Prop extends string>(
  name: Prop,
  updateMutation: UpdateFunction<UpdateArgs, T>,
): SignalStoreFeature {
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
  );
}
