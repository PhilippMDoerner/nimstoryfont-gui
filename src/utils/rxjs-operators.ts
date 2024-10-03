import { filter, OperatorFunction, pipe, take } from 'rxjs';

export function filterNil<T>(): OperatorFunction<T, NonNullable<T>> {
  return filter((x) => x != null);
}

export function takeFirstNonNil<T>(): OperatorFunction<T, NonNullable<T>> {
  return pipe(filterNil(), take(1));
}
