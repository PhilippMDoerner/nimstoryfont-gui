/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { SIGNAL } from '@angular/core/primitives/signals';
/**
 * Checks if the given `value` is a reactive `Signal`.
 */
export function isSignal(value) {
    return typeof value === 'function' && value[SIGNAL] !== undefined;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9yZWFjdGl2aXR5L2FwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0sa0NBQWtDLENBQUM7QUFjeEQ7O0dBRUc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUFDLEtBQWM7SUFDckMsT0FBTyxPQUFPLEtBQUssS0FBSyxVQUFVLElBQUssS0FBeUIsQ0FBQyxNQUFNLENBQUMsS0FBSyxTQUFTLENBQUM7QUFDekYsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtTSUdOQUx9IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcHJpbWl0aXZlcy9zaWduYWxzJztcblxuLyoqXG4gKiBBIHJlYWN0aXZlIHZhbHVlIHdoaWNoIG5vdGlmaWVzIGNvbnN1bWVycyBvZiBhbnkgY2hhbmdlcy5cbiAqXG4gKiBTaWduYWxzIGFyZSBmdW5jdGlvbnMgd2hpY2ggcmV0dXJucyB0aGVpciBjdXJyZW50IHZhbHVlLiBUbyBhY2Nlc3MgdGhlIGN1cnJlbnQgdmFsdWUgb2YgYSBzaWduYWwsXG4gKiBjYWxsIGl0LlxuICpcbiAqIE9yZGluYXJ5IHZhbHVlcyBjYW4gYmUgdHVybmVkIGludG8gYFNpZ25hbGBzIHdpdGggdGhlIGBzaWduYWxgIGZ1bmN0aW9uLlxuICovXG5leHBvcnQgdHlwZSBTaWduYWw8VD4gPSAoKCkgPT4gVCkgJiB7XG4gIFtTSUdOQUxdOiB1bmtub3duO1xufTtcblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGdpdmVuIGB2YWx1ZWAgaXMgYSByZWFjdGl2ZSBgU2lnbmFsYC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzU2lnbmFsKHZhbHVlOiB1bmtub3duKTogdmFsdWUgaXMgU2lnbmFsPHVua25vd24+IHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gJ2Z1bmN0aW9uJyAmJiAodmFsdWUgYXMgU2lnbmFsPHVua25vd24+KVtTSUdOQUxdICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogQSBjb21wYXJpc29uIGZ1bmN0aW9uIHdoaWNoIGNhbiBkZXRlcm1pbmUgaWYgdHdvIHZhbHVlcyBhcmUgZXF1YWwuXG4gKi9cbmV4cG9ydCB0eXBlIFZhbHVlRXF1YWxpdHlGbjxUPiA9IChhOiBULCBiOiBUKSA9PiBib29sZWFuO1xuIl19