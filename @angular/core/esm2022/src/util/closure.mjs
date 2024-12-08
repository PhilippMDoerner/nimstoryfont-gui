/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
/**
 * Convince closure compiler that the wrapped function has no side-effects.
 *
 * Closure compiler always assumes that `toString` has no side-effects. We use this quirk to
 * allow us to execute a function but have closure compiler mark the call as no-side-effects.
 * It is important that the return value for the `noSideEffects` function be assigned
 * to something which is retained otherwise the call to `noSideEffects` will be removed by closure
 * compiler.
 */
export function noSideEffects(fn) {
    return { toString: fn }.toString();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xvc3VyZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3V0aWwvY2xvc3VyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxhQUFhLENBQUksRUFBVztJQUMxQyxPQUFPLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyxDQUFDLFFBQVEsRUFBa0IsQ0FBQztBQUNuRCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG4vKipcbiAqIENvbnZpbmNlIGNsb3N1cmUgY29tcGlsZXIgdGhhdCB0aGUgd3JhcHBlZCBmdW5jdGlvbiBoYXMgbm8gc2lkZS1lZmZlY3RzLlxuICpcbiAqIENsb3N1cmUgY29tcGlsZXIgYWx3YXlzIGFzc3VtZXMgdGhhdCBgdG9TdHJpbmdgIGhhcyBubyBzaWRlLWVmZmVjdHMuIFdlIHVzZSB0aGlzIHF1aXJrIHRvXG4gKiBhbGxvdyB1cyB0byBleGVjdXRlIGEgZnVuY3Rpb24gYnV0IGhhdmUgY2xvc3VyZSBjb21waWxlciBtYXJrIHRoZSBjYWxsIGFzIG5vLXNpZGUtZWZmZWN0cy5cbiAqIEl0IGlzIGltcG9ydGFudCB0aGF0IHRoZSByZXR1cm4gdmFsdWUgZm9yIHRoZSBgbm9TaWRlRWZmZWN0c2AgZnVuY3Rpb24gYmUgYXNzaWduZWRcbiAqIHRvIHNvbWV0aGluZyB3aGljaCBpcyByZXRhaW5lZCBvdGhlcndpc2UgdGhlIGNhbGwgdG8gYG5vU2lkZUVmZmVjdHNgIHdpbGwgYmUgcmVtb3ZlZCBieSBjbG9zdXJlXG4gKiBjb21waWxlci5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG5vU2lkZUVmZmVjdHM8VD4oZm46ICgpID0+IFQpOiBUIHtcbiAgcmV0dXJuIHt0b1N0cmluZzogZm59LnRvU3RyaW5nKCkgYXMgdW5rbm93biBhcyBUO1xufVxuIl19