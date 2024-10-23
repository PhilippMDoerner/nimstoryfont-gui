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
  SomeVersionOfU2I,
} from './types';

type NewMethods<Name extends string, Q> =
  Q extends Query<infer Params, infer Response>
    ? Record<`load${Capitalize<Name>}`, ReturnType<typeof rxMethod<Params>>>
    : never;

type SingleNewMethodObjectSlice<Queries extends QueryMap> = {
  [Key in keyof Queries & string]: NewMethods<
    Key,
    SomeVersionOfU2I<Queries[Key]>
  >;
};

type SingleNewMethod<Queries extends QueryMap> =
  SingleNewMethodObjectSlice<Queries>[keyof SingleNewMethodObjectSlice<Queries>];

// Extracts params from queries and that... interacts.. somehow to make the correct type
export type AllNewMethods<Queries extends QueryMap> = SomeVersionOfU2I<
  SingleNewMethod<Queries>
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

      const functions = queryLoadFunctions.reduce(
        (acc, queryLoadFunction) => ({ ...acc, ...queryLoadFunction }),
        {},
      ) as MethodsDictionary & AllNewMethods<Queries>;
      return functions;
    }),
  );
}
