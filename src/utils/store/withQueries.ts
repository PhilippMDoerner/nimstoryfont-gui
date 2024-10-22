import { HttpErrorResponse } from '@angular/common/http';
import {
  EmptyFeatureResult,
  signalStore,
  signalStoreFeature,
  SignalStoreFeature,
  withState,
} from '@ngrx/signals';
import { Observable, of } from 'rxjs';
import { capitalize, uncapitalize } from '../string';

type QueryState = 'init' | 'loading' | 'success' | 'error';
type Query<Params, Response> = (params: Params) => Observable<Response>;
type QueryMap<T extends any | unknown> = Record<string, Query<T, T>>;

// Utility type for getting the param type of a function... I think
type SomeVersionOfU2I<U> = (U extends any ? (x: U) => any : never) extends (
  x: infer I,
) => any
  ? I
  : never;

type StringKey<T> = Extract<keyof T, string>;

// Creates an object with a bunch of properties based on an input name
type NewProperties<Name extends string, Q> =
  Q extends Query<infer Params, infer Response>
    ? Record<Uncapitalize<Name>, Response | undefined> &
        Record<`${Name}Error`, HttpErrorResponse> &
        Record<`${Uncapitalize<Name>}QueryState`, QueryState>
    : never;

// I think represents a single slice of:
// `{ <queryName>: { <queyName>: Response, <queryName>Error: HttpErrorResponse, <queryName>QueryState: QueryState } }`
type SingleNewPropertiesObjectSlice<Queries extends QueryMap<unknown>> = {
  [Key in keyof Queries & string]: NewProperties<
    Key,
    SomeVersionOfU2I<Queries[Key]>
  >;
};

// Unpacked version of `SingleNewPropertiesObjectSlice`, essentially just `{ <queyName>: Response, <queryName>Error: HttpErrorResponse, <queryName>QueryState: QueryState }`
type SingleNewProperty<Queries extends QueryMap<unknown>> =
  SingleNewPropertiesObjectSlice<Queries>[keyof SingleNewPropertiesObjectSlice<Queries>];

// Extracts params from queries and that... interacts.. somehow to make the correct type
type AllNewProperties<Queries extends QueryMap<unknown>> = SomeVersionOfU2I<
  SingleNewProperty<Queries>
>;

type QueriesFeatureResult<Queries extends QueryMap<any>> = {
  computed: {};
  methods: {};
  state: {} & AllNewProperties<Queries>;
};

type QueriesFeature<Queries extends QueryMap<any>> = SignalStoreFeature<
  EmptyFeatureResult,
  QueriesFeatureResult<Queries>
>;

type ExpandRecursively<T> = T extends object
  ? T extends infer O
    ? { [K in keyof O]: ExpandRecursively<O[K]> }
    : never
  : T;

const queriesFactory = () => {
  return { characters: (param: { name: string }) => of(5) };
};

type X = ExpandRecursively<QueriesFeature<ReturnType<typeof queriesFactory>>>;
type Y = ExpandRecursively<
  QueriesFeatureResult<ReturnType<typeof queriesFactory>>
>;

function getKeys<Name extends string>(
  name: Name,
): Record<'name', Name> &
  Record<'dataField', Uncapitalize<Name>> &
  Record<'errorField', `${Uncapitalize<Name>}Error`> &
  Record<'queryStateField', `${Uncapitalize<Name>}QueryState`> &
  Record<'loadMethod', `load${Capitalize<Name>}`> {
  return {
    name,
    dataField: uncapitalize(name),
    errorField: `${uncapitalize(name)}Error`,
    queryStateField: `${uncapitalize(name)}QueryState`,
    loadMethod: `load${capitalize(name)}`,
  };
}

export function withQueries<Queries extends QueryMap<any>>(
  queriesFactory: () => Queries,
) {
  const queries = queriesFactory() satisfies Queries;
  const queryStates = Object.keys(queries)
    .map((queryName) => getKeys(queryName as StringKey<Queries>))
    .map((keys) => {
      const x = {
        [keys.dataField]: undefined,
        [keys.errorField]: undefined,
        [keys.queryStateField]: 'init' satisfies QueryState,
      } as SingleNewProperty<Queries>;
      return x;
    });

  const queryStateSignals = queryStates.reduce(
    (acc, queryState) => ({ ...acc, ...queryState }),
    {},
  ) as AllNewProperties<Queries> & {};

  return signalStoreFeature(withState(queryStateSignals));
}

export const MyStore = signalStore(
  { providedIn: 'root' },
  withQueries<ReturnType<typeof queriesFactory>>(() => {
    return { characters: (param: { name: string }) => of(5) };
  }),
);
