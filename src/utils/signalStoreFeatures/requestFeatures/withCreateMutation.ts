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
import { CreateFunction, RequestStatus } from './types';

export type CreateState<T, Prop extends string> = {
  [K in Prop as `${K}CreateRequestStatus`]: RequestStatus;
} & {
  [L in Prop as `${L}CreationError`]: any | undefined;
} & {
  [M in Prop as `${M}Data`]: T | undefined;
};

function getKeys(name: string) {
  const titleCaseName = toTitleCase(name);
  const createName = `create${titleCaseName}`;
  const createTitleName = toTitleCase(createName);

  return {
    requestStatus: `${createName}RequestStatus`,
    error: `${createName}Error`,
    data: `${name}Data`,
    isPending: `is${createTitleName}Pending`,
    hasLoaded: `has${createTitleName}Loaded`,
    hasError: `has${createTitleName}Error`,
    create: createName,
  };
}

export function withCreateMutation<T, Prop extends string>(
  name: Prop,
  creationMutation: CreateFunction<T>,
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
      [keys.create]: (args: Partial<T>) => {
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
