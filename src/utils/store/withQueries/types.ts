import {
  SignalStoreFeatureResult,
  StateSignals,
  WritableStateSource,
} from '@ngrx/signals';
import { Observable } from 'rxjs';
import { capitalize, uncapitalize } from 'src/utils/string';

export type SomeVersionOfU2I<U> = (
  U extends any ? (x: U) => any : never
) extends (x: infer I) => any
  ? I
  : never;

export type ToPublicStore<Input extends SignalStoreFeatureResult> =
  StateSignals<Input['state']> &
    Input['computed'] &
    Input['methods'] &
    WritableStateSource<Input['state']>;

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
