import { tapResponse } from '@ngrx/operators';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { MethodsDictionary } from '@ngrx/signals/src/signal-store-models';
import { pipe, switchMap, take, tap } from 'rxjs';
import {
  getKeys,
  Query,
  QueryMap,
  QueryState,
  UnionToIntersection,
} from './types';

/**
 * Creates an object with a bunch of methods based on an input name
 */
type NewMethods<Name extends string, Q> =
  Q extends Query<void, any>
    ? Record<`load${Capitalize<Name>}`, ReturnType<typeof rxMethod<void>>>
    : Q extends Query<infer Params, any>
      ? Record<`load${Capitalize<Name>}`, ReturnType<typeof rxMethod<Params>>>
      : never;

/**
 * Type describing a gigantic object that contains `NewProperties` for each key inside the Queries-object.
 * So { x: NewMethods<x>, y: NewMethods<y>, z: NewMethods<z>... }
 **/
type AllNewMethodsObject<Queries extends QueryMap> = {
  [Key in keyof Queries & string]: NewMethods<
    Key,
    UnionToIntersection<Queries[Key]>
  >;
};

/**
 * Type union of all methods from AllNewMethodsObject
 * Essentially `NewMethods<x> | NewMethods<y> | NewMethods<z>...`
 */
type NewMethodUnion<Queries extends QueryMap> =
  AllNewMethodsObject<Queries>[keyof AllNewMethodsObject<Queries>];

/**
 * An intersection type of all new methods. Thus any instance of this type
 * must have all the fields that were derived via `NewMethods` for all keys in `Queries`.
 */ export type AllNewMethods<Queries extends QueryMap> = UnionToIntersection<
  NewMethodUnion<Queries>
>;

export function withQueryMethods<Queries extends QueryMap>(queries: Queries) {
  return signalStoreFeature(
    withMethods((store) => {
      const queryLoadFunctions = Object.keys(queries)
        .map((queryName) => getKeys(queryName))
        .map((keys) => {
          return {
            [keys.loadMethod]: rxMethod(
              pipe(
                tap(() =>
                  patchState(store, {
                    [keys.queryStateField]: 'loading' satisfies QueryState,
                  }),
                ),
                switchMap((params) => queries[keys.name](params)),
                take(1),
                tapResponse({
                  next: (val) =>
                    patchState(store, {
                      [keys.dataField]: val,
                      [keys.queryStateField]: 'success' satisfies QueryState,
                    }),
                  error: (err) =>
                    patchState(store, {
                      [keys.errorField]: err,
                      [keys.queryStateField]: 'error' satisfies QueryState,
                    }),
                }),
              ),
            ),
          };
        });

      return queryLoadFunctions.reduce(
        (acc, queryLoadFunction) => ({ ...acc, ...queryLoadFunction }),
        {},
      ) as MethodsDictionary & AllNewMethods<Queries>;
    }),
  );
}
