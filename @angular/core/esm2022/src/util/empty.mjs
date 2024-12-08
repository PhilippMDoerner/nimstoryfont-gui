/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { initNgDevMode } from './ng_dev_mode';
/**
 * This file contains reuseable "empty" symbols that can be used as default return values
 * in different parts of the rendering code. Because the same symbols are returned, this
 * allows for identity checks against these values to be consistently used by the framework
 * code.
 */
export const EMPTY_OBJ = {};
export const EMPTY_ARRAY = [];
// freezing the values prevents any code from accidentally inserting new values in
if ((typeof ngDevMode === 'undefined' || ngDevMode) && initNgDevMode()) {
    // These property accesses can be ignored because ngDevMode will be set to false
    // when optimizing code and the whole if statement will be dropped.
    // tslint:disable-next-line:no-toplevel-property-access
    Object.freeze(EMPTY_OBJ);
    // tslint:disable-next-line:no-toplevel-property-access
    Object.freeze(EMPTY_ARRAY);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1wdHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy91dGlsL2VtcHR5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUNILE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFNUM7Ozs7O0dBS0c7QUFFSCxNQUFNLENBQUMsTUFBTSxTQUFTLEdBQVUsRUFBVyxDQUFDO0FBQzVDLE1BQU0sQ0FBQyxNQUFNLFdBQVcsR0FBVSxFQUFFLENBQUM7QUFFckMsa0ZBQWtGO0FBQ2xGLElBQUksQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxDQUFDLElBQUksYUFBYSxFQUFFLEVBQUUsQ0FBQztJQUN2RSxnRkFBZ0Y7SUFDaEYsbUVBQW1FO0lBQ25FLHVEQUF1RDtJQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pCLHVEQUF1RDtJQUN2RCxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQzdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5pbXBvcnQge2luaXROZ0Rldk1vZGV9IGZyb20gJy4vbmdfZGV2X21vZGUnO1xuXG4vKipcbiAqIFRoaXMgZmlsZSBjb250YWlucyByZXVzZWFibGUgXCJlbXB0eVwiIHN5bWJvbHMgdGhhdCBjYW4gYmUgdXNlZCBhcyBkZWZhdWx0IHJldHVybiB2YWx1ZXNcbiAqIGluIGRpZmZlcmVudCBwYXJ0cyBvZiB0aGUgcmVuZGVyaW5nIGNvZGUuIEJlY2F1c2UgdGhlIHNhbWUgc3ltYm9scyBhcmUgcmV0dXJuZWQsIHRoaXNcbiAqIGFsbG93cyBmb3IgaWRlbnRpdHkgY2hlY2tzIGFnYWluc3QgdGhlc2UgdmFsdWVzIHRvIGJlIGNvbnNpc3RlbnRseSB1c2VkIGJ5IHRoZSBmcmFtZXdvcmtcbiAqIGNvZGUuXG4gKi9cblxuZXhwb3J0IGNvbnN0IEVNUFRZX09CSjogbmV2ZXIgPSB7fSBhcyBuZXZlcjtcbmV4cG9ydCBjb25zdCBFTVBUWV9BUlJBWTogYW55W10gPSBbXTtcblxuLy8gZnJlZXppbmcgdGhlIHZhbHVlcyBwcmV2ZW50cyBhbnkgY29kZSBmcm9tIGFjY2lkZW50YWxseSBpbnNlcnRpbmcgbmV3IHZhbHVlcyBpblxuaWYgKCh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpICYmIGluaXROZ0Rldk1vZGUoKSkge1xuICAvLyBUaGVzZSBwcm9wZXJ0eSBhY2Nlc3NlcyBjYW4gYmUgaWdub3JlZCBiZWNhdXNlIG5nRGV2TW9kZSB3aWxsIGJlIHNldCB0byBmYWxzZVxuICAvLyB3aGVuIG9wdGltaXppbmcgY29kZSBhbmQgdGhlIHdob2xlIGlmIHN0YXRlbWVudCB3aWxsIGJlIGRyb3BwZWQuXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby10b3BsZXZlbC1wcm9wZXJ0eS1hY2Nlc3NcbiAgT2JqZWN0LmZyZWV6ZShFTVBUWV9PQkopO1xuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tdG9wbGV2ZWwtcHJvcGVydHktYWNjZXNzXG4gIE9iamVjdC5mcmVlemUoRU1QVFlfQVJSQVkpO1xufVxuIl19