/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export const ERROR_ORIGINAL_ERROR = 'ngOriginalError';
export function wrappedError(message, originalError) {
    const msg = `${message} caused by: ${originalError instanceof Error ? originalError.message : originalError}`;
    const error = Error(msg);
    error[ERROR_ORIGINAL_ERROR] = originalError;
    return error;
}
export function getOriginalError(error) {
    return error[ERROR_ORIGINAL_ERROR];
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3JzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvdXRpbC9lcnJvcnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsTUFBTSxDQUFDLE1BQU0sb0JBQW9CLEdBQUcsaUJBQWlCLENBQUM7QUFFdEQsTUFBTSxVQUFVLFlBQVksQ0FBQyxPQUFlLEVBQUUsYUFBa0I7SUFDOUQsTUFBTSxHQUFHLEdBQUcsR0FBRyxPQUFPLGVBQ3BCLGFBQWEsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGFBQzNELEVBQUUsQ0FBQztJQUNILE1BQU0sS0FBSyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixLQUFhLENBQUMsb0JBQW9CLENBQUMsR0FBRyxhQUFhLENBQUM7SUFDckQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDO0FBRUQsTUFBTSxVQUFVLGdCQUFnQixDQUFDLEtBQVk7SUFDM0MsT0FBUSxLQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUM5QyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5leHBvcnQgY29uc3QgRVJST1JfT1JJR0lOQUxfRVJST1IgPSAnbmdPcmlnaW5hbEVycm9yJztcblxuZXhwb3J0IGZ1bmN0aW9uIHdyYXBwZWRFcnJvcihtZXNzYWdlOiBzdHJpbmcsIG9yaWdpbmFsRXJyb3I6IGFueSk6IEVycm9yIHtcbiAgY29uc3QgbXNnID0gYCR7bWVzc2FnZX0gY2F1c2VkIGJ5OiAke1xuICAgIG9yaWdpbmFsRXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IG9yaWdpbmFsRXJyb3IubWVzc2FnZSA6IG9yaWdpbmFsRXJyb3JcbiAgfWA7XG4gIGNvbnN0IGVycm9yID0gRXJyb3IobXNnKTtcbiAgKGVycm9yIGFzIGFueSlbRVJST1JfT1JJR0lOQUxfRVJST1JdID0gb3JpZ2luYWxFcnJvcjtcbiAgcmV0dXJuIGVycm9yO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZ2luYWxFcnJvcihlcnJvcjogRXJyb3IpOiBFcnJvciB7XG4gIHJldHVybiAoZXJyb3IgYXMgYW55KVtFUlJPUl9PUklHSU5BTF9FUlJPUl07XG59XG4iXX0=