/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { exportNgVar } from '../../dom/util';
import { AngularProfiler } from './common_tools';
const PROFILER_GLOBAL_NAME = 'profiler';
/**
 * Enabled Angular debug tools that are accessible via your browser's
 * developer console.
 *
 * Usage:
 *
 * 1. Open developer console (e.g. in Chrome Ctrl + Shift + j)
 * 1. Type `ng.` (usually the console will show auto-complete suggestion)
 * 1. Try the change detection profiler `ng.profiler.timeChangeDetection()`
 *    then hit Enter.
 *
 * @publicApi
 */
export function enableDebugTools(ref) {
    exportNgVar(PROFILER_GLOBAL_NAME, new AngularProfiler(ref));
    return ref;
}
/**
 * Disables Angular tools.
 *
 * @publicApi
 */
export function disableDebugTools() {
    exportNgVar(PROFILER_GLOBAL_NAME, null);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9vbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9wbGF0Zm9ybS1icm93c2VyL3NyYy9icm93c2VyL3Rvb2xzL3Rvb2xzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUlILE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUUzQyxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFL0MsTUFBTSxvQkFBb0IsR0FBRyxVQUFVLENBQUM7QUFFeEM7Ozs7Ozs7Ozs7OztHQVlHO0FBQ0gsTUFBTSxVQUFVLGdCQUFnQixDQUFJLEdBQW9CO0lBQ3RELFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQzVELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxNQUFNLFVBQVUsaUJBQWlCO0lBQy9CLFdBQVcsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQztBQUMxQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0NvbXBvbmVudFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7ZXhwb3J0TmdWYXJ9IGZyb20gJy4uLy4uL2RvbS91dGlsJztcblxuaW1wb3J0IHtBbmd1bGFyUHJvZmlsZXJ9IGZyb20gJy4vY29tbW9uX3Rvb2xzJztcblxuY29uc3QgUFJPRklMRVJfR0xPQkFMX05BTUUgPSAncHJvZmlsZXInO1xuXG4vKipcbiAqIEVuYWJsZWQgQW5ndWxhciBkZWJ1ZyB0b29scyB0aGF0IGFyZSBhY2Nlc3NpYmxlIHZpYSB5b3VyIGJyb3dzZXInc1xuICogZGV2ZWxvcGVyIGNvbnNvbGUuXG4gKlxuICogVXNhZ2U6XG4gKlxuICogMS4gT3BlbiBkZXZlbG9wZXIgY29uc29sZSAoZS5nLiBpbiBDaHJvbWUgQ3RybCArIFNoaWZ0ICsgailcbiAqIDEuIFR5cGUgYG5nLmAgKHVzdWFsbHkgdGhlIGNvbnNvbGUgd2lsbCBzaG93IGF1dG8tY29tcGxldGUgc3VnZ2VzdGlvbilcbiAqIDEuIFRyeSB0aGUgY2hhbmdlIGRldGVjdGlvbiBwcm9maWxlciBgbmcucHJvZmlsZXIudGltZUNoYW5nZURldGVjdGlvbigpYFxuICogICAgdGhlbiBoaXQgRW50ZXIuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlRGVidWdUb29sczxUPihyZWY6IENvbXBvbmVudFJlZjxUPik6IENvbXBvbmVudFJlZjxUPiB7XG4gIGV4cG9ydE5nVmFyKFBST0ZJTEVSX0dMT0JBTF9OQU1FLCBuZXcgQW5ndWxhclByb2ZpbGVyKHJlZikpO1xuICByZXR1cm4gcmVmO1xufVxuXG4vKipcbiAqIERpc2FibGVzIEFuZ3VsYXIgdG9vbHMuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZURlYnVnVG9vbHMoKTogdm9pZCB7XG4gIGV4cG9ydE5nVmFyKFBST0ZJTEVSX0dMT0JBTF9OQU1FLCBudWxsKTtcbn1cbiJdfQ==