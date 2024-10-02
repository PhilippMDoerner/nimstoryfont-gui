import { BehaviorSubject, map, Observable, Subject, take } from 'rxjs';

export type RequestState = 'pending' | 'success' | 'error';

export function createRequestSubjects<T>() {
  const state = new BehaviorSubject<RequestState>('pending');
  const data = new BehaviorSubject<T | undefined>(undefined);
  const error = new Subject();

  return {
    data,
    state: state,
    error: error,
    isLoading: state.pipe(map((state) => state === 'pending')),
    hasFailed: state.pipe(map((state) => state === 'error')),
  };
}

export function trackQuery<T>(
  data$: Observable<T>,
  trackingSubjects: ReturnType<typeof createRequestSubjects<T>>,
) {
  return data$.pipe(take(1)).subscribe({
    error: (error) => {
      trackingSubjects.state.next('error');
      trackingSubjects.error.next(error);
    },

    next: () => {
      trackingSubjects.state.next('success');
    },
  });
}
