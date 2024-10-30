import { HttpErrorResponse } from '@angular/common/http';
import { patchState, signalStoreFeature, withMethods } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { MethodsDictionary } from '@ngrx/signals/src/signal-store-models';
import { take } from 'rxjs';
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
  Q extends Request<void, any>
    ? Record<`update${Capitalize<Name>}`, ReturnType<typeof rxMethod<void>>>
    : Q extends Request<infer Params, any>
      ? Record<`update${Capitalize<Name>}`, ReturnType<typeof rxMethod<Params>>>
      : never;

/**
 * Type describing a gigantic object that contains `NewProperties` for each key inside the Requests-object.
 * So { x: NewMethods<x>, y: NewMethods<y>, z: NewMethods<z>... }
 **/
type AllNewMethodsObject<Requests extends RequestMap> = {
  [Key in keyof Requests & string]: NewMethods<
    Key,
    UnionToIntersection<Requests[Key]>
  >;
};

/**
 * Type union of all methods from AllNewMethodsObject
 * Essentially `NewMethods<x> | NewMethods<y> | NewMethods<z>...`
 */
type NewMethodUnion<Requests extends RequestMap> =
  AllNewMethodsObject<Requests>[keyof AllNewMethodsObject<Requests>];

/**
 * An intersection type of all new methods. Thus any instance of this type
 * must have all the fields that were derived via `NewMethods` for all keys in `Requests`.
 */ export type AllNewMethods<Requests extends RequestMap> =
  UnionToIntersection<NewMethodUnion<Requests>>;

export function withUpdateMethods<Requests extends RequestMap>(
  requests: Requests,
) {
  return signalStoreFeature(
    withMethods((store) => {
      const requestLoadFunctions = Object.keys(requests)
        .map((requestName) => getKeys(requestName))
        .map((keys) => {
          return {
            [keys.updateMethod]: (params: any) => {
              patchState(store, {
                [keys.requestStateField]: 'loading' satisfies RequestState,
                [keys.errorField]: undefined,
              });
              requests[keys.name](params)
                .pipe(take(1))
                .subscribe({
                  next: (val) =>
                    patchState(store, {
                      [keys.dataField]: val,
                      [keys.requestStateField]:
                        'success' satisfies RequestState,
                      [keys.serverModelField]: undefined,
                    }),
                  error: (err: HttpErrorResponse) => {
                    const isOutdatedUpdateError = err.status === 409;
                    const serverModel = isOutdatedUpdateError
                      ? err.error
                      : undefined;

                    patchState(store, {
                      [keys.errorField]: err,
                      [keys.requestStateField]: 'error' satisfies RequestState,
                      [keys.serverModelField]: serverModel,
                    });
                  },
                });
            },
          };
        });

      return requestLoadFunctions.reduce(
        (acc, requestLoadFunction) => ({ ...acc, ...requestLoadFunction }),
        {},
      ) as MethodsDictionary & AllNewMethods<Requests>;
    }),
  );
}
