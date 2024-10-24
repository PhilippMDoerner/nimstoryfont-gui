import { HttpErrorResponse } from '@angular/common/http';
import { signalStoreFeature, withState } from '@ngrx/signals';
import {
  getKeys,
  Query,
  QueryMap,
  QueryState,
  UnionToIntersection,
} from './types';

/**
 * Creates an object with a bunch of properties based on an input name
 */
type NewProperties<Name extends string, Q> =
  Q extends Query<infer Params, infer Response>
    ? Record<Uncapitalize<Name>, Response | undefined> &
        Record<`${Name}Error`, HttpErrorResponse> &
        Record<`${Uncapitalize<Name>}QueryState`, QueryState>
    : never;

/**
 * Type describing a gigantic object that contains `NewProperties` for each key inside the Queries-object.
 * So { x: NewProperties<x>, y: NewPropeties<y>, z: NewProperties<z>... }
 **/
type AllNewPropertiesObject<Queries extends QueryMap> = {
  [Key in keyof Queries & string]: NewProperties<
    Key,
    UnionToIntersection<Queries[Key]>
  >;
};

/**
 * Type union of all properties from AllNewPropertiesObject
 * Essentially `NewProperties<x> | NewProperties<y> | NewProperties<z>...`
 */
type NewPropertiesUnion<Queries extends QueryMap> =
  AllNewPropertiesObject<Queries>[keyof AllNewPropertiesObject<Queries>];

/**
 * An intersection type of all new properties. Thus any instance of this type
 * must have all the fields that were derived via `NewProperties` for all keys in `Queries`.
 */
export type AllNewProperties<Queries extends QueryMap> = UnionToIntersection<
  NewPropertiesUnion<Queries>
>;

export function withQueriesState<Queries extends QueryMap>(queries: Queries) {
  return signalStoreFeature(
    withState(() => {
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
