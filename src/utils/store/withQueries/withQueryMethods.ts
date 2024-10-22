import { tapResponse } from '@ngrx/operators';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { MethodsDictionary } from '@ngrx/signals/src/signal-store-models';
import { pipe, switchMap, tap } from 'rxjs';
import { SomeVersionOfU2I } from '../../type-utilities';
import { getKeys, Query, QueryMap, QueryState } from './types';

type NewMethods<Name extends string, Q> =
  Q extends Query<infer Params, infer Response>
    ? Record<`load${Capitalize<Name>}`, ReturnType<typeof rxMethod<Params>>>
    : never;

type SingleNewMethodObjectSlice<Queries extends QueryMap<unknown>> = {
  [Key in keyof Queries & string]: NewMethods<
    Key,
    SomeVersionOfU2I<Queries[Key]>
  >;
};

type SingleNewMethod<Queries extends QueryMap<unknown>> =
  SingleNewMethodObjectSlice<Queries>[keyof SingleNewMethodObjectSlice<Queries>];

// Extracts params from queries and that... interacts.. somehow to make the correct type
export type AllNewMethods<Queries extends QueryMap<unknown>> = SomeVersionOfU2I<
  SingleNewMethod<Queries>
>;

/** This version works but is incapable of havin */
export function withQueryMethods<Queries extends QueryMap<any>>(
  queriesFactory: () => Queries,
) {
  return signalStoreFeature(
    withMethods((store) => {
      const queries = queriesFactory();
      const queryKeys = Object.keys(queries).map((queryName) =>
        getKeys(queryName),
      );

      const queryLoadFunctions = queryKeys.map((keys) => {
        return {
          [keys.loadMethod]: rxMethod(
            pipe(
              tap(() =>
                patchState(store, {
                  [keys.queryStateField]: 'loading' satisfies QueryState,
                }),
              ),
              switchMap((params) => queries[keys.name](params)),
              tapResponse({
                next: (val) =>
                  patchState(store, {
                    [keys.dataField]: val,
                    [keys.queryStateField]: 'success' satisfies QueryState,
                  } as any),
                error: (err) =>
                  patchState(store, {
                    [keys.errorField]: err,
                    [keys.queryStateField]: 'error' satisfies QueryState,
                  } as any),
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
