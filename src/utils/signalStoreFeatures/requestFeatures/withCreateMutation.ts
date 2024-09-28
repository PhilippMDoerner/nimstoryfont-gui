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
import { CreateFunction, RequestStatus } from '../types';

export type CreateState<T, Prop extends string> = {
  [K in Prop as `${K}CreateRequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}CreateError`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

export type CreateComputed<Prop extends string> = {
  [K in Prop as `is${Capitalize<K>}CreatePending`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}CreateLoaded`]: Signal<boolean>;
} & {
  [K in Prop as `has${Capitalize<K>}CreateFailed`]: Signal<boolean>;
};

export type CreateMethods<CreateArgs, Prop extends string> = {
  [K in Prop as `create${Capitalize<K>}`]: (args: CreateArgs) => void;
} & {};

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
  };
}

export function withCreateMutation<T, CreateArgs, Prop extends string>(
  name: Prop,
  creationMutation: CreateFunction<CreateArgs, T>,
): SignalStoreFeature {
  const keys = getKeys(name);
  const getRequestStatus = (store: any): RequestStatus =>
    store[keys.requestStatus]();

  return signalStoreFeature(
    withState<CreateState<T, Prop>>({
      [keys.requestStatus]: 'init' satisfies RequestStatus,
      [keys.error]: undefined,
      [keys.data]: undefined,
    } as CreateState<T, Prop>),

    withComputed((store) => ({
      [keys.isPending]: computed(() => getRequestStatus(store) === 'pending'),
      [keys.hasLoaded]: computed(() => getRequestStatus(store) === 'success'),
      [keys.hasError]: computed(() => getRequestStatus(store) === 'error'),
    })),

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
          },
          error: (error) => {
            patchState(store, {
              [keys.requestStatus]: 'error',
              [keys.error]: error,
            } as CreateState<T, Prop>);
          },
        });
      },
    })),
  );
}
