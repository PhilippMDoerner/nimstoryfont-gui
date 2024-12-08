/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { OpKind } from '../enums';
/**
 * Create a `StatementOp`.
 */
export function createStatementOp(statement) {
    return {
        kind: OpKind.Statement,
        statement,
        ...NEW_OP,
    };
}
/**
 * Create a `VariableOp`.
 */
export function createVariableOp(xref, variable, initializer, flags) {
    return {
        kind: OpKind.Variable,
        xref,
        variable,
        initializer,
        flags,
        ...NEW_OP,
    };
}
/**
 * Static structure shared by all operations.
 *
 * Used as a convenience via the spread operator (`...NEW_OP`) when creating new operations, and
 * ensures the fields are always in the same order.
 */
export const NEW_OP = {
    debugListId: null,
    prev: null,
    next: null,
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tcGlsZXIvc3JjL3RlbXBsYXRlL3BpcGVsaW5lL2lyL3NyYy9vcHMvc2hhcmVkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBQyxNQUFNLEVBQWdCLE1BQU0sVUFBVSxDQUFDO0FBNEIvQzs7R0FFRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FBc0IsU0FBc0I7SUFDM0UsT0FBTztRQUNMLElBQUksRUFBRSxNQUFNLENBQUMsU0FBUztRQUN0QixTQUFTO1FBQ1QsR0FBRyxNQUFNO0tBQ1YsQ0FBQztBQUNKLENBQUM7QUE0QkQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsZ0JBQWdCLENBQzlCLElBQVksRUFDWixRQUEwQixFQUMxQixXQUF5QixFQUN6QixLQUFvQjtJQUVwQixPQUFPO1FBQ0wsSUFBSSxFQUFFLE1BQU0sQ0FBQyxRQUFRO1FBQ3JCLElBQUk7UUFDSixRQUFRO1FBQ1IsV0FBVztRQUNYLEtBQUs7UUFDTCxHQUFHLE1BQU07S0FDVixDQUFDO0FBQ0osQ0FBQztBQUVEOzs7OztHQUtHO0FBQ0gsTUFBTSxDQUFDLE1BQU0sTUFBTSxHQUFtRDtJQUNwRSxXQUFXLEVBQUUsSUFBSTtJQUNqQixJQUFJLEVBQUUsSUFBSTtJQUNWLElBQUksRUFBRSxJQUFJO0NBQ1gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0ICogYXMgbyBmcm9tICcuLi8uLi8uLi8uLi8uLi9vdXRwdXQvb3V0cHV0X2FzdCc7XG5pbXBvcnQge09wS2luZCwgVmFyaWFibGVGbGFnc30gZnJvbSAnLi4vZW51bXMnO1xuaW1wb3J0IHtPcCwgWHJlZklkfSBmcm9tICcuLi9vcGVyYXRpb25zJztcbmltcG9ydCB7U2VtYW50aWNWYXJpYWJsZX0gZnJvbSAnLi4vdmFyaWFibGUnO1xuXG4vKipcbiAqIEEgc3BlY2lhbCBgT3BgIHdoaWNoIGlzIHVzZWQgaW50ZXJuYWxseSBpbiB0aGUgYE9wTGlzdGAgbGlua2VkIGxpc3QgdG8gcmVwcmVzZW50IHRoZSBoZWFkIGFuZFxuICogdGFpbCBub2RlcyBvZiB0aGUgbGlzdC5cbiAqXG4gKiBgTGlzdEVuZE9wYCBpcyBjcmVhdGVkIGludGVybmFsbHkgaW4gdGhlIGBPcExpc3RgIGFuZCBzaG91bGQgbm90IGJlIGluc3RhbnRpYXRlZCBkaXJlY3RseS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBMaXN0RW5kT3A8T3BUIGV4dGVuZHMgT3A8T3BUPj4gZXh0ZW5kcyBPcDxPcFQ+IHtcbiAga2luZDogT3BLaW5kLkxpc3RFbmQ7XG59XG5cbi8qKlxuICogQW4gYE9wYCB3aGljaCBkaXJlY3RseSB3cmFwcyBhbiBvdXRwdXQgYFN0YXRlbWVudGAuXG4gKlxuICogT2Z0ZW4gYFN0YXRlbWVudE9wYHMgYXJlIHRoZSBmaW5hbCByZXN1bHQgb2YgSVIgcHJvY2Vzc2luZy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBTdGF0ZW1lbnRPcDxPcFQgZXh0ZW5kcyBPcDxPcFQ+PiBleHRlbmRzIE9wPE9wVD4ge1xuICBraW5kOiBPcEtpbmQuU3RhdGVtZW50O1xuXG4gIC8qKlxuICAgKiBUaGUgb3V0cHV0IHN0YXRlbWVudC5cbiAgICovXG4gIHN0YXRlbWVudDogby5TdGF0ZW1lbnQ7XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgYFN0YXRlbWVudE9wYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVN0YXRlbWVudE9wPE9wVCBleHRlbmRzIE9wPE9wVD4+KHN0YXRlbWVudDogby5TdGF0ZW1lbnQpOiBTdGF0ZW1lbnRPcDxPcFQ+IHtcbiAgcmV0dXJuIHtcbiAgICBraW5kOiBPcEtpbmQuU3RhdGVtZW50LFxuICAgIHN0YXRlbWVudCxcbiAgICAuLi5ORVdfT1AsXG4gIH07XG59XG5cbi8qKlxuICogT3BlcmF0aW9uIHdoaWNoIGRlY2xhcmVzIGFuZCBpbml0aWFsaXplcyBhIGBTZW1hbnRpY1ZhcmlhYmxlYCwgdGhhdCBpcyB2YWxpZCBlaXRoZXIgaW4gY3JlYXRlIG9yXG4gKiB1cGRhdGUgSVIuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVmFyaWFibGVPcDxPcFQgZXh0ZW5kcyBPcDxPcFQ+PiBleHRlbmRzIE9wPE9wVD4ge1xuICBraW5kOiBPcEtpbmQuVmFyaWFibGU7XG5cbiAgLyoqXG4gICAqIGBYcmVmSWRgIHdoaWNoIGlkZW50aWZpZXMgdGhpcyBzcGVjaWZpYyB2YXJpYWJsZSwgYW5kIGlzIHVzZWQgdG8gcmVmZXJlbmNlIHRoaXMgdmFyaWFibGUgZnJvbVxuICAgKiBvdGhlciBwYXJ0cyBvZiB0aGUgSVIuXG4gICAqL1xuICB4cmVmOiBYcmVmSWQ7XG5cbiAgLyoqXG4gICAqIFRoZSBgU2VtYW50aWNWYXJpYWJsZWAgd2hpY2ggZGVzY3JpYmVzIHRoZSBtZWFuaW5nIGJlaGluZCB0aGlzIHZhcmlhYmxlLlxuICAgKi9cbiAgdmFyaWFibGU6IFNlbWFudGljVmFyaWFibGU7XG5cbiAgLyoqXG4gICAqIEV4cHJlc3Npb24gcmVwcmVzZW50aW5nIHRoZSB2YWx1ZSBvZiB0aGUgdmFyaWFibGUuXG4gICAqL1xuICBpbml0aWFsaXplcjogby5FeHByZXNzaW9uO1xuXG4gIGZsYWdzOiBWYXJpYWJsZUZsYWdzO1xufVxuXG4vKipcbiAqIENyZWF0ZSBhIGBWYXJpYWJsZU9wYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVZhcmlhYmxlT3A8T3BUIGV4dGVuZHMgT3A8T3BUPj4oXG4gIHhyZWY6IFhyZWZJZCxcbiAgdmFyaWFibGU6IFNlbWFudGljVmFyaWFibGUsXG4gIGluaXRpYWxpemVyOiBvLkV4cHJlc3Npb24sXG4gIGZsYWdzOiBWYXJpYWJsZUZsYWdzLFxuKTogVmFyaWFibGVPcDxPcFQ+IHtcbiAgcmV0dXJuIHtcbiAgICBraW5kOiBPcEtpbmQuVmFyaWFibGUsXG4gICAgeHJlZixcbiAgICB2YXJpYWJsZSxcbiAgICBpbml0aWFsaXplcixcbiAgICBmbGFncyxcbiAgICAuLi5ORVdfT1AsXG4gIH07XG59XG5cbi8qKlxuICogU3RhdGljIHN0cnVjdHVyZSBzaGFyZWQgYnkgYWxsIG9wZXJhdGlvbnMuXG4gKlxuICogVXNlZCBhcyBhIGNvbnZlbmllbmNlIHZpYSB0aGUgc3ByZWFkIG9wZXJhdG9yIChgLi4uTkVXX09QYCkgd2hlbiBjcmVhdGluZyBuZXcgb3BlcmF0aW9ucywgYW5kXG4gKiBlbnN1cmVzIHRoZSBmaWVsZHMgYXJlIGFsd2F5cyBpbiB0aGUgc2FtZSBvcmRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IE5FV19PUDogUGljazxPcDxhbnk+LCAnZGVidWdMaXN0SWQnIHwgJ3ByZXYnIHwgJ25leHQnPiA9IHtcbiAgZGVidWdMaXN0SWQ6IG51bGwsXG4gIHByZXY6IG51bGwsXG4gIG5leHQ6IG51bGwsXG59O1xuIl19