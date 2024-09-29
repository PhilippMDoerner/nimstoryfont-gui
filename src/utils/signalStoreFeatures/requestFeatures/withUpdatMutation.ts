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
  signalStoreFeature,
  SignalStoreFeature,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { take } from 'rxjs';
import { toTitleCase } from 'src/utils/string';
import { RequestStatus, UpdateFunction } from '../types';

export type UpdateState<T, Prop extends string> = Record<
  `${Prop}UpdateRequestStatus`,
  RequestStatus
> &
  Record<`${Prop}UpdateError`, any | undefined> &
  Record<`${Prop}Data`, T | undefined>;

export type UpdateComputed<Prop extends string> = Record<
  `is${Capitalize<Prop>}UpdatePending`,
  Signal<boolean>
> &
  Record<`has${Capitalize<Prop>}UpdateLoaded`, Signal<boolean>> &
  Record<`has${Capitalize<Prop>}UpdateFailed`, Signal<boolean>>;

export type UpdateMethods<UpdateArgs, Prop extends string> = Record<
  `update${Capitalize<Prop>}`,
  (args: UpdateArgs) => void
>;

export type UpdateFeature<T, UpdateArgs, Prop extends string> = {
  state: UpdateState<T, Prop>;
  signals: UpdateComputed<Prop>;
  computed: UpdateComputed<Prop>;
  methods: UpdateMethods<UpdateArgs, Prop>;
};

export function withUpdateMutation<T, UpdateArgs, Prop extends string>(
  name: Prop,
  updateMutation: UpdateFunction<UpdateArgs, T>,
): SignalStoreFeature<EmptyFeatureResult, UpdateFeature<T, UpdateArgs, Prop>> {
  const keys = getKeys(name);

  return signalStoreFeature(
    withState<UpdateState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.data]: undefined,
    } as UpdateState<T, Prop>),

    withComputed((store) => {
      const getRequestStatus = (store: any): RequestStatus =>
        store[keys.requestStatus]();
      return {
        [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
        [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
        [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
      };
    }),

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

            // Optional additional Behavior Post Store update
            const onSuccess = (store as Record<string, (args: T) => void>)[
              keys.onRequestSuccess
            ];
            if (onSuccess) onSuccess(data);
          },
          error: (error) => {
            patchState(store, {
              [keys.requestStatus]: 'error',
              [keys.error]: error,
            } as UpdateState<T, Prop>);

            // Optional additional Behavior Post Store update
            const onError = (store as Record<string, (args: any) => void>)[
              keys.onRequestError
            ];
            if (onError) onError(error);
          },
        });
      },
    })),
  ) as SignalStoreFeature<
    EmptyFeatureResult,
    UpdateFeature<T, UpdateArgs, Prop>
  >;
}

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);

  return {
    requestStatus: `${name}UpdateRequestStatus`,
    error: `${name}UpdateError`,
    data: `${name}Data`,
    isPending: `is${titleCaseName}UpdatePending`,
    hasLoaded: `has${titleCaseName}UpdateLoaded`,
    hasError: `has${titleCaseName}UpdateError`,
    update: `update${titleCaseName}`,
    onRequestSuccess: `onUpdate${titleCaseName}Success`,
    onRequestError: `onUpdate${titleCaseName}Error`,
  };
}
