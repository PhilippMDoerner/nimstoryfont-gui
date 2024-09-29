import { Observable } from 'rxjs';
import { BaseService } from 'src/app/_services/base.service';

export type RequestStatus = 'init' | 'pending' | 'success' | 'error';

/**
 * The below type works through being a construct signature.
 * What this does is match any class whose **constructor** matches the function type below
 * Essentially new () => T defines a constructor-function-type for the class T and it will match anything that matches T.
 * In this case T is BaseService<T>, which matches all children that inherit from it as well.
 */
export type BaseServiceChild<T> = new (...args: never) => BaseService<T>;

export type RequestFeatureConfig<T> = {
  successUpdate?: (store: any, data?: T) => void; //In withDeleteMutation data is undefined
  errorUpdate?: (store: any, error: any) => void;
};

export type PageeableQueryFunction<Q, T> = (
  args: Q,
  pageIndex: number,
) => Observable<T>;
export type QueryFunction<Q, T> = (args: Q) => Observable<T>;
export type CreateFunction<Q, T> = (args: Q) => Observable<T>;
export type DeleteFunction<Q> = (args: Q) => Observable<void>;
export type UpdateFunction<Q, T> = (args: Q) => Observable<T>;
