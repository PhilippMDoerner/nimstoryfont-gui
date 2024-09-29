import {
  computed,
  EnvironmentInjector,
  inject,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import {
  EmptyFeatureResult,
  patchState,
  SignalStoreFeature,
  signalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { take } from 'rxjs';
import { toTitleCase } from 'src/utils/string';
import { DeleteFunction, RequestStatus } from '../types';

export type DeleteState<T, Prop extends string> = Record<
  `${Prop}DeleteRequestSuccess`,
  RequestStatus
> &
  Record<`${Prop}DeleteError`, any | undefined> &
  Record<`${Prop}Data`, T | undefined>;

export type DeleteComputed<Prop extends string> = Record<
  `is${Capitalize<Prop>}DeletePending`,
  Signal<boolean>
> &
  Record<`has${Capitalize<Prop>}DeleteLoaded`, Signal<boolean>> &
  Record<`has${Capitalize<Prop>}DeleteFailed`, Signal<boolean>>;

export type DeleteMethods<QueryArgs, Prop extends string> = Record<
  `delete${Capitalize<Prop>}`,
  (args: QueryArgs) => void
>;

export type DeleteFeature<T, DeleteArgs, Prop extends string> = {
  state: DeleteState<T, Prop>;
  signals: DeleteComputed<Prop>;
  computed: DeleteComputed<Prop>;
  methods: DeleteMethods<DeleteArgs, Prop>;
};

export function withDeleteMutation<T, DeleteArgs, Prop extends string>(
  name: Prop,
  deleteMutation: DeleteFunction<DeleteArgs>,
): SignalStoreFeature<EmptyFeatureResult, DeleteFeature<T, DeleteArgs, Prop>> {
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

            // Optional additional Behavior Post Store update
            const onSuccess = (
              store as Record<string, (args: DeleteArgs) => void>
            )[keys.onRequestSuccess];
            if (onSuccess) onSuccess(args);
          },
          error: (error) => {
            patchState(store, {
              [keys.requestStatus]: 'error',
              [keys.error]: error,
            } as DeleteState<T, Prop>);

            const onError = (
              store as Record<string, (args: DeleteArgs) => void>
            )[keys.onRequestError];
            if (onError) onError(error);
          },
        });
      },
    })),
  ) as SignalStoreFeature<
    EmptyFeatureResult,
    DeleteFeature<T, DeleteArgs, Prop>
  >;
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
    onRequestSuccess: `onDelete${titleCaseName}Success`,
    onRequestError: `onDelete${titleCaseName}Error`,
  };
}
