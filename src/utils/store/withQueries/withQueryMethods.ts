import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { MethodsDictionary } from '@ngrx/signals/src/signal-store-models';
import { Observable, take } from 'rxjs';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import {
  Request,
  RequestMap,
  RequestState,
  UnionToIntersection,
} from '../factory-types';
import { getKeys } from './types';

/**
 * Creates an object with a bunch of methods based on an input name
 */
type NewMethods<Name extends string, Q> =
  Q extends Request<void, infer Resp extends object>
    ? Record<`load${Capitalize<Name>}`, () => Observable<Resp>>
    : Q extends Request<infer Params, infer Resp extends object>
      ? Record<`load${Capitalize<Name>}`, (params: Params) => Observable<Resp>>
      : never;

/**
 * Type describing a gigantic object that contains `NewProperties` for each key inside the Queries-object.
 * So { x: NewMethods<x>, y: NewMethods<y>, z: NewMethods<z>... }
 **/
type AllNewMethodsObject<Queries extends RequestMap> = {
  [Key in keyof Queries & string]: NewMethods<
    Key,
    UnionToIntersection<Queries[Key]>
  >;
};

/**
 * Type union of all methods from AllNewMethodsObject
 * Essentially `NewMethods<x> | NewMethods<y> | NewMethods<z>...`
 */
type NewMethodUnion<Queries extends RequestMap> =
  AllNewMethodsObject<Queries>[keyof AllNewMethodsObject<Queries>];

/**
 * An intersection type of all new methods. Thus any instance of this type
 * must have all the fields that were derived via `NewMethods` for all keys in `Queries`.
 */ export type AllNewMethods<Queries extends RequestMap> = UnionToIntersection<
  NewMethodUnion<Queries>
>;

export function withQueryMethods<Queries extends RequestMap>(queries: Queries) {
  return signalStoreFeature(
    withMethods((store) => {
      const toastService = inject(ToastService);

      const queryLoadFunctions = Object.keys(queries)
        .map((queryName) => getKeys(queryName))
        .map((keys) => {
          return {
            [keys.loadMethod]: (params: any) => {
              patchState(store, {
                [keys.queryStateField]: 'loading' satisfies RequestState,
                [keys.errorField]: undefined,
              });
              return queries[keys.name](params).pipe(
                take(1),
                tapResponse({
                  next: (val) =>
                    patchState(store, {
                      [keys.dataField]: val,
                      [keys.queryStateField]: 'success' satisfies RequestState,
                    }),
                  error: (err: HttpErrorResponse) => {
                    patchState(store, {
                      [keys.errorField]: err,
                      [keys.queryStateField]: 'error' satisfies RequestState,
                    });
                  },
                }),
              );
            },
          };
        });

      return queryLoadFunctions.reduce(
        (acc, queryLoadFunction) => ({ ...acc, ...queryLoadFunction }),
        {},
      ) as MethodsDictionary & AllNewMethods<Queries>;
    }),
  );
}
