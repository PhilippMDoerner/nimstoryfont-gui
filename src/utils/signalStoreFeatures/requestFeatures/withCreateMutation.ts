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
import { CreateFunction, RequestStatus } from '../types';

export type CreateState<T, Prop extends string> = Record<
  `${Prop}CreateRequestStatus`,
  RequestStatus
> &
  Record<`${Prop}CreateError`, any | undefined> &
  Record<`${Prop}Data`, T | undefined>;

export type CreateComputed<Prop extends string> = Record<
  `is${Capitalize<Prop>}CreatePending`,
  Signal<boolean>
> &
  Record<`has${Capitalize<Prop>}CreateLoaded`, Signal<boolean>> &
  Record<`has${Capitalize<Prop>}CreateFailed`, Signal<boolean>>;

export type CreateMethods<CreateArgs, Prop extends string> = Record<
  `create${Capitalize<Prop>}`,
  (args: CreateArgs) => void
>;

export type CreateFeature<T, CreateArgs, Prop extends string> = {
  state: CreateState<T, Prop>;
  computed: CreateComputed<Prop>;
  methods: CreateMethods<CreateArgs, Prop>;
};

export function withCreateMutation<T, CreateArgs, Prop extends string>(
  name: Prop,
  creationMutation: CreateFunction<CreateArgs, T>,
): SignalStoreFeature<EmptyFeatureResult, CreateFeature<T, CreateArgs, Prop>> {
  const keys = getKeys(name);

  return signalStoreFeature(
    withState<CreateState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.data]: undefined,
    } as CreateState<T, Prop>),

    withComputed((store) => {
      const getRequestStatus = (store: any): Signal<RequestStatus> =>
        store[keys.requestStatus];
      return {
        [keys.isPending]: computed(
          () => getRequestStatus(store)() === 'pending',
        ),
        [keys.hasLoaded]: computed(
          () => getRequestStatus(store)() === 'success',
        ),
        [keys.hasError]: computed(() => getRequestStatus(store)() === 'error'),
      };
    }),

    withMethods((store, environmentInjector = inject(EnvironmentInjector)) => ({
      [keys.create]: (args: CreateArgs) => {
        patchState(store, {
          [keys.requestStatus]: 'pending',
          [keys.data]: undefined,
          [keys.error]: undefined,
        } as CreateState<T, Prop>);

        const createResult = runInInjectionContext(environmentInjector, () =>
          creationMutation(args),
        );
        createResult.pipe(take(1)).subscribe({
          next: (data) => {
            patchState(store, {
              [keys.requestStatus]: 'success',
              [keys.data]: data,
            } as CreateState<T, Prop>);

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
            } as CreateState<T, Prop>);

            // Optional additional Behavior Post Store update
            const onError = store[keys.onRequestError];
            if (onError) onError();
          },
        });
      },
    })),
  ) as SignalStoreFeature<
    EmptyFeatureResult,
    CreateFeature<T, CreateArgs, Prop>
  >;
}

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);

  return {
    requestStatus: `${name}CreateRequestStatus`,
    error: `${name}CreateError`,
    data: `${name}Data`,
    isPending: `is${titleCaseName}CreatePending`,
    hasLoaded: `has${titleCaseName}CreateLoaded`,
    hasError: `has${titleCaseName}CreateError`,
    create: `create${titleCaseName}`,
    onRequestSuccess: `onCreate${titleCaseName}Success`,
    onRequestError: `onCreate${titleCaseName}Error`,
  };
}
