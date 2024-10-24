import { Observable } from 'rxjs';
import { capitalize, uncapitalize } from 'src/utils/string';

/** Transforms a type-union (A | B | C) into a type-intersection (A & B & C) */
export type UnionToIntersection<U> = (
  U extends any ? (x: U) => any : never
) extends (x: infer I) => any
  ? I
  : never;

export type QueryState = 'init' | 'loading' | 'success' | 'error';
export type Query<Params, Response> = (params: Params) => Observable<Response>;
export type QueryMap = Record<string, Query<any, any>>;

export function getKeys<Name extends string>(
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
