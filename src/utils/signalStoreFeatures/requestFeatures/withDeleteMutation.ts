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
import { DeleteFunction, RequestStatus } from './types';

export type DeleteState<T, Prop extends string> = {
  [K in Prop as `${K}DeleteRequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}DeleteError`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);
  const deleteName = `delete${titleCaseName}`;
  const deleteTitleName = toTitleCase(deleteName);

  return {
    requestStatus: `${deleteName}RequestStatus`,
    error: `${deleteName}Error`,
    data: `${name}Data`,
    isPending: `is${deleteTitleName}Pending`,
    hasLoaded: `has${deleteTitleName}Loaded`,
    hasError: `has${deleteTitleName}Error`,
    delete: deleteName,
  };
}

export function withDeleteMutation<T, DeleteArgs, Prop extends string>(
  name: Prop,
  deleteMutation: DeleteFunction<DeleteArgs>,
): SignalStoreFeature {
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
          },
          error: (error) => {
            patchState(store, {
              [keys.requestStatus]: 'error',
              [keys.error]: error,
            } as DeleteState<T, Prop>);
          },
        });
      },
    })),
  );
}
