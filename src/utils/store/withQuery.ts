import { HttpErrorResponse } from '@angular/common/http';
import {
  EnvironmentInjector,
  inject,
  runInInjectionContext,
  Signal,
} from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStoreFeature,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { Observable } from 'dist/nimstoryfont-gui/browser/tinymce/tinymce';
import { ObservableInput, pipe, switchMap, tap, Unsubscribable } from 'rxjs';
import { capitalize, uncapitalize } from '../string';

export type QueryState = 'init' | 'loading' | 'success' | 'error';

type RxMethod<Input extends object> = ((
  input: Input | Signal<Input> | Observable<Input>,
) => Unsubscribable) &
  Unsubscribable;

type WithQueryState<Prop extends string, Entity> = Record<
  Uncapitalize<Prop>,
  Entity | undefined
> &
  Record<`${Uncapitalize<Prop>}Error`, HttpErrorResponse> &
  Record<`${Uncapitalize<Prop>}QueryState`, QueryState>;

type WithQueryMethods<Prop extends string, Params extends object> = Record<
  `load${Capitalize<Prop>}`,
  RxMethod<Params>
>;

function getKeys<Prop extends string>(name: Prop) {
  return {
    dataField: uncapitalize(name),
    errorField: `${uncapitalize(name)}Error`,
    queryStateField: `${uncapitalize(name)}QueryState`,
    loadMethod: `load${capitalize(name)}`,
  };
}

export function withQuery<
  Prop extends string,
  Params extends object,
  Entity extends object,
>(name: Prop, loadFunc: (params: Params) => ObservableInput<Entity>) {
  const keys = getKeys(name);
  return signalStoreFeature(
    withState({
      [keys.dataField]: undefined,
      [keys.errorField]: undefined,
      [keys.queryStateField]: 'init',
    } as WithQueryState<Prop, Entity>),
    withMethods((state) => {
      const injector = inject(EnvironmentInjector);

      return {
        [keys.loadMethod]: rxMethod<Params>(
          pipe(
            tap(() =>
              patchState(state, {
                [keys.dataField]: undefined,
                [keys.queryStateField]: 'loading' satisfies QueryState,
              } as Partial<WithQueryState<Prop, Entity>>),
            ),
            switchMap((params) => {
              return runInInjectionContext(injector, () => loadFunc(params));
            }),
            tapResponse({
              next: (entity: Entity) =>
                patchState(state, {
                  [keys.dataField]: entity,
                  [keys.queryStateField]: 'success' satisfies QueryState,
                } as Partial<WithQueryState<Prop, Entity>>),
              error: (err: HttpErrorResponse) =>
                patchState(state, {
                  [keys.errorField]: err,
                  [keys.queryStateField]: 'error' satisfies QueryState,
                } as Partial<WithQueryState<Prop, Entity>>),
            }),
          ),
        ),
      } as WithQueryMethods<Prop, Params>;
    }),
  );
}
