import { filter, OperatorFunction, pipe, take, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

export function filterNil<T>(): OperatorFunction<T, NonNullable<T>> {
  return filter((x) => x != null);
}

export function takeFirstNonNil<T>(): OperatorFunction<T, NonNullable<T>> {
  return pipe(filterNil(), take(1));
}

export function throwUnless<T>(
  isSuccessCase: (value: T) => boolean,
  throwError: () => Error,
): OperatorFunction<T, T> {
  return tap((value) => {
    if (!isSuccessCase(value)) {
      throw throwError();
    }
    return value as T;
  });
}

export function debugLog<T>(debugSymbol?: string): OperatorFunction<T, T> {
  const isDevelop = environment.kind === 'DEVELOPMENT';
  return tap((x) => {
    if (isDevelop) {
      console.groupCollapsed(`[DEBUG] ${debugSymbol}:`, x);
      console.trace();
      console.groupEnd();
    }
  });
}
