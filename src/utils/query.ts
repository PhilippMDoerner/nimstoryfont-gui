import { BehaviorSubject, filter, map, Observable, Subject, take } from 'rxjs';

export type RequestState = 'pending' | 'success' | 'error';

export function createRequestSubjects<T>() {
  const state = new BehaviorSubject<RequestState>('pending');
  const data = new BehaviorSubject<T | undefined>(undefined);
  const error = new Subject<unknown>();

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

export function trackQuery<T>(
  data$: Observable<T>,
  trackingSubjects: ReturnType<typeof createRequestSubjects<T>>,
) {
  trackingSubjects.state.next('pending');
  trackingSubjects.data.next(undefined);
  trackingSubjects.error.next(undefined);

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
