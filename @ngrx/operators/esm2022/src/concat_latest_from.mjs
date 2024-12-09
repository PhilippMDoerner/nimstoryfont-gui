import { of, } from 'rxjs';
import { concatMap, withLatestFrom } from 'rxjs/operators';
/**
 * `concatLatestFrom` combines the source value
 * and the last available value from a lazily evaluated Observable
 * in a new array
 *
 * @usageNotes
 *
 * Select the active customer from the NgRx Store
 *
 * ```ts
 * import { concatLatestFrom } from '@ngrx/operators';
 * import * as fromCustomers from '../customers';
 *
 * this.actions$.pipe(
 *  concatLatestFrom(() => this.store.select(fromCustomers.selectActiveCustomer))
 * )
 * ```
 *
 * Select a customer from the NgRx Store by its id that is available on the action
 *
 * ```ts
 * import { concatLatestFrom } from '@ngrx/operators';
 * import * fromCustomers from '../customers';
 *
 * this.actions$.pipe(
 *  concatLatestFrom((action) => this.store.select(fromCustomers.selectCustomer(action.customerId)))
 * )
 * ```
 */
export function concatLatestFrom(observablesFactory) {
    return concatMap((value) => {
        const observables = observablesFactory(value);
        const observablesAsArray = Array.isArray(observables)
            ? observables
            : [observables];
        return of(value).pipe(withLatestFrom(...observablesAsArray));
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uY2F0X2xhdGVzdF9mcm9tLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vbW9kdWxlcy9vcGVyYXRvcnMvc3JjL2NvbmNhdF9sYXRlc3RfZnJvbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBR0wsRUFBRSxHQUdILE1BQU0sTUFBTSxDQUFDO0FBQ2QsT0FBTyxFQUFFLFNBQVMsRUFBRSxjQUFjLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQVMzRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTRCRztBQUNILE1BQU0sVUFBVSxnQkFBZ0IsQ0FTOUIsa0JBQW1DO0lBQ25DLE9BQU8sU0FBUyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUU7UUFDekIsTUFBTSxXQUFXLEdBQUcsa0JBQWtCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsTUFBTSxrQkFBa0IsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQztZQUNuRCxDQUFDLENBQUMsV0FBVztZQUNiLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ2xCLE9BQU8sRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FDbkIsY0FBYyxDQUFDLEdBQUcsa0JBQWtCLENBQUMsQ0FDVixDQUFDO0lBQ2hDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIE9ic2VydmFibGUsXG4gIE9ic2VydmFibGVJbnB1dCxcbiAgb2YsXG4gIE9ic2VydmVkVmFsdWVPZixcbiAgT3BlcmF0b3JGdW5jdGlvbixcbn0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBjb25jYXRNYXAsIHdpdGhMYXRlc3RGcm9tIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG4vLyBUaGUgYXJyYXkgb3ZlcmxvYWQgaXMgbmVlZGVkIGZpcnN0IGJlY2F1c2Ugd2Ugd2FudCB0byBtYWludGFpbiB0aGUgcHJvcGVyIG9yZGVyIGluIHRoZSByZXN1bHRpbmcgdHVwbGVcbmV4cG9ydCBmdW5jdGlvbiBjb25jYXRMYXRlc3RGcm9tPFQgZXh0ZW5kcyBPYnNlcnZhYmxlPHVua25vd24+W10sIFY+KFxuICBvYnNlcnZhYmxlc0ZhY3Rvcnk6ICh2YWx1ZTogVikgPT4gWy4uLlRdXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFYsIFtWLCAuLi57IFtpIGluIGtleW9mIFRdOiBPYnNlcnZlZFZhbHVlT2Y8VFtpXT4gfV0+O1xuZXhwb3J0IGZ1bmN0aW9uIGNvbmNhdExhdGVzdEZyb208VCBleHRlbmRzIE9ic2VydmFibGU8dW5rbm93bj4sIFY+KFxuICBvYnNlcnZhYmxlRmFjdG9yeTogKHZhbHVlOiBWKSA9PiBUXG4pOiBPcGVyYXRvckZ1bmN0aW9uPFYsIFtWLCBPYnNlcnZlZFZhbHVlT2Y8VD5dPjtcbi8qKlxuICogYGNvbmNhdExhdGVzdEZyb21gIGNvbWJpbmVzIHRoZSBzb3VyY2UgdmFsdWVcbiAqIGFuZCB0aGUgbGFzdCBhdmFpbGFibGUgdmFsdWUgZnJvbSBhIGxhemlseSBldmFsdWF0ZWQgT2JzZXJ2YWJsZVxuICogaW4gYSBuZXcgYXJyYXlcbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIFNlbGVjdCB0aGUgYWN0aXZlIGN1c3RvbWVyIGZyb20gdGhlIE5nUnggU3RvcmVcbiAqXG4gKiBgYGB0c1xuICogaW1wb3J0IHsgY29uY2F0TGF0ZXN0RnJvbSB9IGZyb20gJ0BuZ3J4L29wZXJhdG9ycyc7XG4gKiBpbXBvcnQgKiBhcyBmcm9tQ3VzdG9tZXJzIGZyb20gJy4uL2N1c3RvbWVycyc7XG4gKlxuICogdGhpcy5hY3Rpb25zJC5waXBlKFxuICogIGNvbmNhdExhdGVzdEZyb20oKCkgPT4gdGhpcy5zdG9yZS5zZWxlY3QoZnJvbUN1c3RvbWVycy5zZWxlY3RBY3RpdmVDdXN0b21lcikpXG4gKiApXG4gKiBgYGBcbiAqXG4gKiBTZWxlY3QgYSBjdXN0b21lciBmcm9tIHRoZSBOZ1J4IFN0b3JlIGJ5IGl0cyBpZCB0aGF0IGlzIGF2YWlsYWJsZSBvbiB0aGUgYWN0aW9uXG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IGNvbmNhdExhdGVzdEZyb20gfSBmcm9tICdAbmdyeC9vcGVyYXRvcnMnO1xuICogaW1wb3J0ICogZnJvbUN1c3RvbWVycyBmcm9tICcuLi9jdXN0b21lcnMnO1xuICpcbiAqIHRoaXMuYWN0aW9ucyQucGlwZShcbiAqICBjb25jYXRMYXRlc3RGcm9tKChhY3Rpb24pID0+IHRoaXMuc3RvcmUuc2VsZWN0KGZyb21DdXN0b21lcnMuc2VsZWN0Q3VzdG9tZXIoYWN0aW9uLmN1c3RvbWVySWQpKSlcbiAqIClcbiAqIGBgYFxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uY2F0TGF0ZXN0RnJvbTxcbiAgVCBleHRlbmRzIE9ic2VydmFibGVJbnB1dDx1bmtub3duPltdIHwgT2JzZXJ2YWJsZUlucHV0PHVua25vd24+LFxuICBWLFxuICBSID0gW1xuICAgIFYsXG4gICAgLi4uKFQgZXh0ZW5kcyBPYnNlcnZhYmxlSW5wdXQ8dW5rbm93bj5bXVxuICAgICAgPyB7IFtpIGluIGtleW9mIFRdOiBPYnNlcnZlZFZhbHVlT2Y8VFtpXT4gfVxuICAgICAgOiBbT2JzZXJ2ZWRWYWx1ZU9mPFQ+XSlcbiAgXVxuPihvYnNlcnZhYmxlc0ZhY3Rvcnk6ICh2YWx1ZTogVikgPT4gVCk6IE9wZXJhdG9yRnVuY3Rpb248ViwgUj4ge1xuICByZXR1cm4gY29uY2F0TWFwKCh2YWx1ZSkgPT4ge1xuICAgIGNvbnN0IG9ic2VydmFibGVzID0gb2JzZXJ2YWJsZXNGYWN0b3J5KHZhbHVlKTtcbiAgICBjb25zdCBvYnNlcnZhYmxlc0FzQXJyYXkgPSBBcnJheS5pc0FycmF5KG9ic2VydmFibGVzKVxuICAgICAgPyBvYnNlcnZhYmxlc1xuICAgICAgOiBbb2JzZXJ2YWJsZXNdO1xuICAgIHJldHVybiBvZih2YWx1ZSkucGlwZShcbiAgICAgIHdpdGhMYXRlc3RGcm9tKC4uLm9ic2VydmFibGVzQXNBcnJheSlcbiAgICApIGFzIHVua25vd24gYXMgT2JzZXJ2YWJsZTxSPjtcbiAgfSk7XG59XG4iXX0=