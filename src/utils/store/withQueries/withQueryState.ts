import { HttpErrorResponse } from '@angular/common/http';
import { signalStoreFeature, withState } from '@ngrx/signals';
import {
  getKeys,
  Query,
  QueryMap,
  QueryState,
  SomeVersionOfU2I,
} from './types';

// Creates an object with a bunch of properties based on an input name
type NewProperties<Name extends string, Q> =
  Q extends Query<infer Params, infer Response>
    ? Record<Uncapitalize<Name>, Response | undefined> &
        Record<`${Name}Error`, HttpErrorResponse> &
        Record<`${Uncapitalize<Name>}QueryState`, QueryState>
    : never;

// I think represents a single slice of:
// `{ <queryName>: { <queyName>: Response, <queryName>Error: HttpErrorResponse, <queryName>QueryState: QueryState } }`
type SingleNewPropertiesObjectSlice<Queries extends QueryMap> = {
  [Key in keyof Queries & string]: NewProperties<
    Key,
    SomeVersionOfU2I<Queries[Key]>
  >;
};

// Unpacked version of `SingleNewPropertiesObjectSlice`, essentially just `{ <queyName>: Response, <queryName>Error: HttpErrorResponse, <queryName>QueryState: QueryState }`
type SingleNewProperty<Queries extends QueryMap> =
  SingleNewPropertiesObjectSlice<Queries>[keyof SingleNewPropertiesObjectSlice<Queries>];

// Extracts params from queries and that... interacts.. somehow to make the correct type
export type AllNewProperties<Queries extends QueryMap> = SomeVersionOfU2I<
  SingleNewProperty<Queries>
>;

export function withQueriesState<Queries extends QueryMap>(
  queriesFactory: () => Queries,
) {
  return signalStoreFeature(
    withState(() => {
      const queries = queriesFactory();
      const queryStates = Object.keys(queries)
        .map((queryName) => getKeys(queryName))
        .map((keys) => {
          const x = {
            [keys.dataField]: undefined,
            [keys.errorField]: undefined,
            [keys.queryStateField]: 'init' satisfies QueryState,
          };
          return x;
        });

      const queryStateSignals = queryStates.reduce(
        (acc, queryState) => ({ ...acc, ...queryState }),
        {},
      ) as AllNewProperties<Queries> & {};
      return queryStateSignals;
    }),
  );
}
