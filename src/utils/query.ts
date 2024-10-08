import { HttpErrorResponse } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  BehaviorSubject,
  filter,
  map,
  merge,
  Observable,
  shareReplay,
  Subject,
  switchMap,
  take,
  tap,
} from 'rxjs';
import { mapVoid } from './rxjs-operators';

export type RequestState = 'pending' | 'success' | 'error';

export function createRequestSubjects<T>() {
  const state = new BehaviorSubject<RequestState>('pending');
  const data = new BehaviorSubject<T | undefined>(undefined);
  const error = new Subject<HttpErrorResponse | undefined>();

  return {
    data,
    state: state,
    error: error,
    isLoading: state.pipe(map((state) => state === 'pending')),
    hasFailed: state.pipe(map((state) => state === 'error')),
    hasSucceeded: state.pipe(
      filter((state) => state === 'success'),
      map(() => true),
    ),
  };
}

export type RequestPipeline<T> = {
  data$: Observable<T | undefined>;
  error$: Observable<HttpErrorResponse>;
  isLoading$: Observable<boolean>;
  hasFailed$: Observable<boolean>;
  hasSucceeded$: Observable<boolean>;
  onRequestSuccess$: Observable<void>;
  onRequestFailed$: Observable<void>;
  onRequestStart$: Observable<void>;
};

export const createRequestPipeline = <Params, Response>(
  trigger$: Observable<Params>,
  requestCb: (params: Params) => Observable<Response>,
): RequestPipeline<Response> => {
  const state$ = new Subject<RequestState>();
  const error$ = new Subject<HttpErrorResponse>();
  const data$: Observable<Response | undefined> = trigger$.pipe(
    tap(() => state$.next('pending')),
    switchMap((params) => requestCb(params)),
    shareReplay(1),
    tap({
      error: (err) => {
        state$.next('error');
        error$.next(err);
      },
      next: () => state$.next('success'),
    }),
    takeUntilDestroyed(),
  );

  data$.subscribe();

  return {
    data$,
    error$: error$.asObservable(),
    isLoading$: state$.pipe(
      map((state) => state === 'pending'),
      shareReplay(1),
    ),
    hasFailed$: state$.pipe(
      map((state) => state === 'error'),
      shareReplay(1),
    ),
    hasSucceeded$: state$.pipe(
      map((state) => state === 'success'),
      shareReplay(1),
    ),
    onRequestSuccess$: state$.pipe(
      filter((state) => state === 'success'),
      mapVoid(),
    ),
    onRequestFailed$: state$.pipe(
      filter((state) => state === 'error'),
      mapVoid(),
    ),
    onRequestStart$: state$.pipe(
      filter((state) => state === 'pending'),
      mapVoid(),
    ),
  };
};

export const mergeRequestPipelines = <T>(
  ...pipelines: RequestPipeline<T>[]
): RequestPipeline<T> => {
  return {
    data$: merge(...pipelines.map((x) => x.data$)),
    error$: merge(...pipelines.map((x) => x.error$)),
    isLoading$: merge(...pipelines.map((x) => x.isLoading$)),
    hasFailed$: merge(...pipelines.map((x) => x.hasFailed$)),
    hasSucceeded$: merge(...pipelines.map((x) => x.hasSucceeded$)),
    onRequestSuccess$: merge(...pipelines.map((x) => x.onRequestSuccess$)),
    onRequestFailed$: merge(...pipelines.map((x) => x.onRequestFailed$)),
    onRequestStart$: merge(...pipelines.map((x) => x.onRequestStart$)),
  };
};

export function trackQuery<T>(
  data$: Observable<T>,
  trackingSubjects: ReturnType<typeof createRequestSubjects<T>>,
  clearWhilePending = false,
) {
  trackingSubjects.state.next('pending');
  trackingSubjects.error.next(undefined);
  if (clearWhilePending) {
    trackingSubjects.data.next(undefined);
  }

  return data$.pipe(take(1)).subscribe({
    error: (error) => {
      trackingSubjects.state.next('error');
      trackingSubjects.error.next(error);
    },

    next: (data) => {
      trackingSubjects.data.next(data);
      trackingSubjects.state.next('success');
    },
  });
}
