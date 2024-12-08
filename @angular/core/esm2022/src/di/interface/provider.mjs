/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export function isEnvironmentProviders(value) {
    return value && !!value.ɵproviders;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3NyYy9kaS9pbnRlcmZhY2UvcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBZ1hILE1BQU0sVUFBVSxzQkFBc0IsQ0FDcEMsS0FBcUU7SUFFckUsT0FBTyxLQUFLLElBQUksQ0FBQyxDQUFFLEtBQXNDLENBQUMsVUFBVSxDQUFDO0FBQ3ZFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCB7VHlwZX0gZnJvbSAnLi4vLi4vaW50ZXJmYWNlL3R5cGUnO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGBJbmplY3RvcmAgdG8gcmV0dXJuIGEgdmFsdWUgZm9yIGEgdG9rZW4uXG4gKiBCYXNlIGZvciBgVmFsdWVQcm92aWRlcmAgZGVjb3JhdG9yLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBWYWx1ZVNhbnNQcm92aWRlciB7XG4gIC8qKlxuICAgKiBUaGUgdmFsdWUgdG8gaW5qZWN0LlxuICAgKi9cbiAgdXNlVmFsdWU6IGFueTtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBgSW5qZWN0b3JgIHRvIHJldHVybiBhIHZhbHVlIGZvciBhIHRva2VuLlxuICogQHNlZSBbRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICogIyMjIEV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nVmFsdWVQcm92aWRlcid9XG4gKlxuICogIyMjIE11bHRpLXZhbHVlIGV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nTXVsdGlQcm92aWRlckFzcGVjdCd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZhbHVlUHJvdmlkZXIgZXh0ZW5kcyBWYWx1ZVNhbnNQcm92aWRlciB7XG4gIC8qKlxuICAgKiBBbiBpbmplY3Rpb24gdG9rZW4uIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBgVHlwZWAgb3IgYEluamVjdGlvblRva2VuYCwgYnV0IGNhbiBiZSBgYW55YC5cbiAgICovXG4gIHByb3ZpZGU6IGFueTtcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBpbmplY3RvciByZXR1cm5zIGFuIGFycmF5IG9mIGluc3RhbmNlcy4gVGhpcyBpcyB1c2VmdWwgdG8gYWxsb3cgbXVsdGlwbGVcbiAgICogcHJvdmlkZXJzIHNwcmVhZCBhY3Jvc3MgbWFueSBmaWxlcyB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24gdG8gYSBjb21tb24gdG9rZW4uXG4gICAqL1xuICBtdWx0aT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgYEluamVjdG9yYCB0byByZXR1cm4gYW4gaW5zdGFuY2Ugb2YgYHVzZUNsYXNzYCBmb3IgYSB0b2tlbi5cbiAqIEJhc2UgZm9yIGBTdGF0aWNDbGFzc1Byb3ZpZGVyYCBkZWNvcmF0b3IuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHtcbiAgLyoqXG4gICAqIEFuIG9wdGlvbmFsIGNsYXNzIHRvIGluc3RhbnRpYXRlIGZvciB0aGUgYHRva2VuYC4gQnkgZGVmYXVsdCwgdGhlIGBwcm92aWRlYFxuICAgKiBjbGFzcyBpcyBpbnN0YW50aWF0ZWQuXG4gICAqL1xuICB1c2VDbGFzczogVHlwZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgYHRva2VuYHMgdG8gYmUgcmVzb2x2ZWQgYnkgdGhlIGluamVjdG9yLiBUaGUgbGlzdCBvZiB2YWx1ZXMgaXMgdGhlblxuICAgKiB1c2VkIGFzIGFyZ3VtZW50cyB0byB0aGUgYHVzZUNsYXNzYCBjb25zdHJ1Y3Rvci5cbiAgICovXG4gIGRlcHM6IGFueVtdO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGBJbmplY3RvcmAgdG8gcmV0dXJuIGFuIGluc3RhbmNlIG9mIGB1c2VDbGFzc2AgZm9yIGEgdG9rZW4uXG4gKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBHdWlkZV0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nU3RhdGljQ2xhc3NQcm92aWRlcid9XG4gKlxuICogTm90ZSB0aGF0IGZvbGxvd2luZyB0d28gcHJvdmlkZXJzIGFyZSBub3QgZXF1YWw6XG4gKlxuICoge0BleGFtcGxlIGNvcmUvZGkvdHMvcHJvdmlkZXJfc3BlYy50cyByZWdpb249J1N0YXRpY0NsYXNzUHJvdmlkZXJEaWZmZXJlbmNlJ31cbiAqXG4gKiAjIyMgTXVsdGktdmFsdWUgZXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3Byb3ZpZGVyX3NwZWMudHMgcmVnaW9uPSdNdWx0aVByb3ZpZGVyQXNwZWN0J31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgU3RhdGljQ2xhc3NQcm92aWRlciBleHRlbmRzIFN0YXRpY0NsYXNzU2Fuc1Byb3ZpZGVyIHtcbiAgLyoqXG4gICAqIEFuIGluamVjdGlvbiB0b2tlbi4gVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIGBUeXBlYCBvciBgSW5qZWN0aW9uVG9rZW5gLCBidXQgY2FuIGJlIGBhbnlgLlxuICAgKi9cbiAgcHJvdmlkZTogYW55O1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGluamVjdG9yIHJldHVybnMgYW4gYXJyYXkgb2YgaW5zdGFuY2VzLiBUaGlzIGlzIHVzZWZ1bCB0byBhbGxvdyBtdWx0aXBsZVxuICAgKiBwcm92aWRlcnMgc3ByZWFkIGFjcm9zcyBtYW55IGZpbGVzIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiB0byBhIGNvbW1vbiB0b2tlbi5cbiAgICovXG4gIG11bHRpPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBgSW5qZWN0b3JgIHRvIHJldHVybiBhbiBpbnN0YW5jZSBvZiBhIHRva2VuLlxuICpcbiAqIEBzZWUgW0RlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXShndWlkZS9kaS9kZXBlbmRlbmN5LWluamVjdGlvbi5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIGBgYHRzXG4gKiBASW5qZWN0YWJsZShTb21lTW9kdWxlLCB7ZGVwczogW119KVxuICogY2xhc3MgTXlTZXJ2aWNlIHt9XG4gKiBgYGBcbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3RydWN0b3JTYW5zUHJvdmlkZXIge1xuICAvKipcbiAgICogQSBsaXN0IG9mIGB0b2tlbmBzIHRvIGJlIHJlc29sdmVkIGJ5IHRoZSBpbmplY3Rvci5cbiAgICovXG4gIGRlcHM/OiBhbnlbXTtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBgSW5qZWN0b3JgIHRvIHJldHVybiBhbiBpbnN0YW5jZSBvZiBhIHRva2VuLlxuICpcbiAqIEBzZWUgW0RlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXShndWlkZS9kaS9kZXBlbmRlbmN5LWluamVjdGlvbi5cbiAqXG4gKiBAdXNhZ2VOb3Rlc1xuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3Byb3ZpZGVyX3NwZWMudHMgcmVnaW9uPSdDb25zdHJ1Y3RvclByb3ZpZGVyJ31cbiAqXG4gKiAjIyMgTXVsdGktdmFsdWUgZXhhbXBsZVxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3Byb3ZpZGVyX3NwZWMudHMgcmVnaW9uPSdNdWx0aVByb3ZpZGVyQXNwZWN0J31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ29uc3RydWN0b3JQcm92aWRlciBleHRlbmRzIENvbnN0cnVjdG9yU2Fuc1Byb3ZpZGVyIHtcbiAgLyoqXG4gICAqIEFuIGluamVjdGlvbiB0b2tlbi4gVHlwaWNhbGx5IGFuIGluc3RhbmNlIG9mIGBUeXBlYCBvciBgSW5qZWN0aW9uVG9rZW5gLCBidXQgY2FuIGJlIGBhbnlgLlxuICAgKi9cbiAgcHJvdmlkZTogVHlwZTxhbnk+O1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGluamVjdG9yIHJldHVybnMgYW4gYXJyYXkgb2YgaW5zdGFuY2VzLiBUaGlzIGlzIHVzZWZ1bCB0byBhbGxvdyBtdWx0aXBsZVxuICAgKiBwcm92aWRlcnMgc3ByZWFkIGFjcm9zcyBtYW55IGZpbGVzIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiB0byBhIGNvbW1vbiB0b2tlbi5cbiAgICovXG4gIG11bHRpPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBgSW5qZWN0b3JgIHRvIHJldHVybiBhIHZhbHVlIG9mIGFub3RoZXIgYHVzZUV4aXN0aW5nYCB0b2tlbi5cbiAqXG4gKiBAc2VlIHtAbGluayBFeGlzdGluZ1Byb3ZpZGVyfVxuICogQHNlZSBbRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLlxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBFeGlzdGluZ1NhbnNQcm92aWRlciB7XG4gIC8qKlxuICAgKiBFeGlzdGluZyBgdG9rZW5gIHRvIHJldHVybi4gKEVxdWl2YWxlbnQgdG8gYGluamVjdG9yLmdldCh1c2VFeGlzdGluZylgKVxuICAgKi9cbiAgdXNlRXhpc3Rpbmc6IGFueTtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBgSW5qZWN0b3JgIHRvIHJldHVybiBhIHZhbHVlIG9mIGFub3RoZXIgYHVzZUV4aXN0aW5nYCB0b2tlbi5cbiAqXG4gKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBHdWlkZV0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nRXhpc3RpbmdQcm92aWRlcid9XG4gKlxuICogIyMjIE11bHRpLXZhbHVlIGV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nTXVsdGlQcm92aWRlckFzcGVjdCd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEV4aXN0aW5nUHJvdmlkZXIgZXh0ZW5kcyBFeGlzdGluZ1NhbnNQcm92aWRlciB7XG4gIC8qKlxuICAgKiBBbiBpbmplY3Rpb24gdG9rZW4uIFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBgVHlwZWAgb3IgYEluamVjdGlvblRva2VuYCwgYnV0IGNhbiBiZSBgYW55YC5cbiAgICovXG4gIHByb3ZpZGU6IGFueTtcblxuICAvKipcbiAgICogV2hlbiB0cnVlLCBpbmplY3RvciByZXR1cm5zIGFuIGFycmF5IG9mIGluc3RhbmNlcy4gVGhpcyBpcyB1c2VmdWwgdG8gYWxsb3cgbXVsdGlwbGVcbiAgICogcHJvdmlkZXJzIHNwcmVhZCBhY3Jvc3MgbWFueSBmaWxlcyB0byBwcm92aWRlIGNvbmZpZ3VyYXRpb24gaW5mb3JtYXRpb24gdG8gYSBjb21tb24gdG9rZW4uXG4gICAqL1xuICBtdWx0aT86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgYEluamVjdG9yYCB0byByZXR1cm4gYSB2YWx1ZSBieSBpbnZva2luZyBhIGB1c2VGYWN0b3J5YCBmdW5jdGlvbi5cbiAqXG4gKiBAc2VlIHtAbGluayBGYWN0b3J5UHJvdmlkZXJ9XG4gKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBHdWlkZV0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24uXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEZhY3RvcnlTYW5zUHJvdmlkZXIge1xuICAvKipcbiAgICogQSBmdW5jdGlvbiB0byBpbnZva2UgdG8gY3JlYXRlIGEgdmFsdWUgZm9yIHRoaXMgYHRva2VuYC4gVGhlIGZ1bmN0aW9uIGlzIGludm9rZWQgd2l0aFxuICAgKiByZXNvbHZlZCB2YWx1ZXMgb2YgYHRva2VuYHMgaW4gdGhlIGBkZXBzYCBmaWVsZC5cbiAgICovXG4gIHVzZUZhY3Rvcnk6IEZ1bmN0aW9uO1xuXG4gIC8qKlxuICAgKiBBIGxpc3Qgb2YgYHRva2VuYHMgdG8gYmUgcmVzb2x2ZWQgYnkgdGhlIGluamVjdG9yLiBUaGUgbGlzdCBvZiB2YWx1ZXMgaXMgdGhlblxuICAgKiB1c2VkIGFzIGFyZ3VtZW50cyB0byB0aGUgYHVzZUZhY3RvcnlgIGZ1bmN0aW9uLlxuICAgKi9cbiAgZGVwcz86IGFueVtdO1xufVxuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGBJbmplY3RvcmAgdG8gcmV0dXJuIGEgdmFsdWUgYnkgaW52b2tpbmcgYSBgdXNlRmFjdG9yeWAgZnVuY3Rpb24uXG4gKiBAc2VlIFtEZXBlbmRlbmN5IEluamVjdGlvbiBHdWlkZV0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nRmFjdG9yeVByb3ZpZGVyJ31cbiAqXG4gKiBEZXBlbmRlbmNpZXMgY2FuIGFsc28gYmUgbWFya2VkIGFzIG9wdGlvbmFsOlxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3Byb3ZpZGVyX3NwZWMudHMgcmVnaW9uPSdGYWN0b3J5UHJvdmlkZXJPcHRpb25hbERlcHMnfVxuICpcbiAqICMjIyBNdWx0aS12YWx1ZSBleGFtcGxlXG4gKlxuICoge0BleGFtcGxlIGNvcmUvZGkvdHMvcHJvdmlkZXJfc3BlYy50cyByZWdpb249J011bHRpUHJvdmlkZXJBc3BlY3QnfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBGYWN0b3J5UHJvdmlkZXIgZXh0ZW5kcyBGYWN0b3J5U2Fuc1Byb3ZpZGVyIHtcbiAgLyoqXG4gICAqIEFuIGluamVjdGlvbiB0b2tlbi4gKFR5cGljYWxseSBhbiBpbnN0YW5jZSBvZiBgVHlwZWAgb3IgYEluamVjdGlvblRva2VuYCwgYnV0IGNhbiBiZSBgYW55YCkuXG4gICAqL1xuICBwcm92aWRlOiBhbnk7XG5cbiAgLyoqXG4gICAqIFdoZW4gdHJ1ZSwgaW5qZWN0b3IgcmV0dXJucyBhbiBhcnJheSBvZiBpbnN0YW5jZXMuIFRoaXMgaXMgdXNlZnVsIHRvIGFsbG93IG11bHRpcGxlXG4gICAqIHByb3ZpZGVycyBzcHJlYWQgYWNyb3NzIG1hbnkgZmlsZXMgdG8gcHJvdmlkZSBjb25maWd1cmF0aW9uIGluZm9ybWF0aW9uIHRvIGEgY29tbW9uIHRva2VuLlxuICAgKi9cbiAgbXVsdGk/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIERlc2NyaWJlcyBob3cgYW4gYEluamVjdG9yYCBzaG91bGQgYmUgY29uZmlndXJlZCBhcyBzdGF0aWMgKHRoYXQgaXMsIHdpdGhvdXQgcmVmbGVjdGlvbikuXG4gKiBBIHN0YXRpYyBwcm92aWRlciBwcm92aWRlcyB0b2tlbnMgdG8gYW4gaW5qZWN0b3IgZm9yIHZhcmlvdXMgdHlwZXMgb2YgZGVwZW5kZW5jaWVzLlxuICpcbiAqIEBzZWUge0BsaW5rIEluamVjdG9yLmNyZWF0ZSgpfVxuICogQHNlZSBbRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLXByb3ZpZGVycykuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBTdGF0aWNQcm92aWRlciA9XG4gIHwgVmFsdWVQcm92aWRlclxuICB8IEV4aXN0aW5nUHJvdmlkZXJcbiAgfCBTdGF0aWNDbGFzc1Byb3ZpZGVyXG4gIHwgQ29uc3RydWN0b3JQcm92aWRlclxuICB8IEZhY3RvcnlQcm92aWRlclxuICB8IGFueVtdO1xuXG4vKipcbiAqIENvbmZpZ3VyZXMgdGhlIGBJbmplY3RvcmAgdG8gcmV0dXJuIGFuIGluc3RhbmNlIG9mIGBUeXBlYCB3aGVuIGBUeXBlJyBpcyB1c2VkIGFzIHRoZSB0b2tlbi5cbiAqXG4gKiBDcmVhdGUgYW4gaW5zdGFuY2UgYnkgaW52b2tpbmcgdGhlIGBuZXdgIG9wZXJhdG9yIGFuZCBzdXBwbHlpbmcgYWRkaXRpb25hbCBhcmd1bWVudHMuXG4gKiBUaGlzIGZvcm0gaXMgYSBzaG9ydCBmb3JtIG9mIGBUeXBlUHJvdmlkZXJgO1xuICpcbiAqIEZvciBtb3JlIGRldGFpbHMsIHNlZSB0aGUgW1wiRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVcIl0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nVHlwZVByb3ZpZGVyJ31cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgVHlwZVByb3ZpZGVyIGV4dGVuZHMgVHlwZTxhbnk+IHt9XG5cbi8qKlxuICogQ29uZmlndXJlcyB0aGUgYEluamVjdG9yYCB0byByZXR1cm4gYSB2YWx1ZSBieSBpbnZva2luZyBhIGB1c2VDbGFzc2AgZnVuY3Rpb24uXG4gKiBCYXNlIGZvciBgQ2xhc3NQcm92aWRlcmAgZGVjb3JhdG9yLlxuICpcbiAqIEBzZWUgW0RlcGVuZGVuY3kgSW5qZWN0aW9uIEd1aWRlXShndWlkZS9kaS9kZXBlbmRlbmN5LWluamVjdGlvbi5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NTYW5zUHJvdmlkZXIge1xuICAvKipcbiAgICogQ2xhc3MgdG8gaW5zdGFudGlhdGUgZm9yIHRoZSBgdG9rZW5gLlxuICAgKi9cbiAgdXNlQ2xhc3M6IFR5cGU8YW55Pjtcbn1cblxuLyoqXG4gKiBDb25maWd1cmVzIHRoZSBgSW5qZWN0b3JgIHRvIHJldHVybiBhbiBpbnN0YW5jZSBvZiBgdXNlQ2xhc3NgIGZvciBhIHRva2VuLlxuICogQHNlZSBbRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLlxuICpcbiAqIEB1c2FnZU5vdGVzXG4gKlxuICoge0BleGFtcGxlIGNvcmUvZGkvdHMvcHJvdmlkZXJfc3BlYy50cyByZWdpb249J0NsYXNzUHJvdmlkZXInfVxuICpcbiAqIE5vdGUgdGhhdCBmb2xsb3dpbmcgdHdvIHByb3ZpZGVycyBhcmUgbm90IGVxdWFsOlxuICpcbiAqIHtAZXhhbXBsZSBjb3JlL2RpL3RzL3Byb3ZpZGVyX3NwZWMudHMgcmVnaW9uPSdDbGFzc1Byb3ZpZGVyRGlmZmVyZW5jZSd9XG4gKlxuICogIyMjIE11bHRpLXZhbHVlIGV4YW1wbGVcbiAqXG4gKiB7QGV4YW1wbGUgY29yZS9kaS90cy9wcm92aWRlcl9zcGVjLnRzIHJlZ2lvbj0nTXVsdGlQcm92aWRlckFzcGVjdCd9XG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIENsYXNzUHJvdmlkZXIgZXh0ZW5kcyBDbGFzc1NhbnNQcm92aWRlciB7XG4gIC8qKlxuICAgKiBBbiBpbmplY3Rpb24gdG9rZW4uIChUeXBpY2FsbHkgYW4gaW5zdGFuY2Ugb2YgYFR5cGVgIG9yIGBJbmplY3Rpb25Ub2tlbmAsIGJ1dCBjYW4gYmUgYGFueWApLlxuICAgKi9cbiAgcHJvdmlkZTogYW55O1xuXG4gIC8qKlxuICAgKiBXaGVuIHRydWUsIGluamVjdG9yIHJldHVybnMgYW4gYXJyYXkgb2YgaW5zdGFuY2VzLiBUaGlzIGlzIHVzZWZ1bCB0byBhbGxvdyBtdWx0aXBsZVxuICAgKiBwcm92aWRlcnMgc3ByZWFkIGFjcm9zcyBtYW55IGZpbGVzIHRvIHByb3ZpZGUgY29uZmlndXJhdGlvbiBpbmZvcm1hdGlvbiB0byBhIGNvbW1vbiB0b2tlbi5cbiAgICovXG4gIG11bHRpPzogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBEZXNjcmliZXMgaG93IHRoZSBgSW5qZWN0b3JgIHNob3VsZCBiZSBjb25maWd1cmVkLlxuICogQHNlZSBbRGVwZW5kZW5jeSBJbmplY3Rpb24gR3VpZGVdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLlxuICpcbiAqIEBzZWUge0BsaW5rIFN0YXRpY1Byb3ZpZGVyfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqL1xuZXhwb3J0IHR5cGUgUHJvdmlkZXIgPVxuICB8IFR5cGVQcm92aWRlclxuICB8IFZhbHVlUHJvdmlkZXJcbiAgfCBDbGFzc1Byb3ZpZGVyXG4gIHwgQ29uc3RydWN0b3JQcm92aWRlclxuICB8IEV4aXN0aW5nUHJvdmlkZXJcbiAgfCBGYWN0b3J5UHJvdmlkZXJcbiAgfCBhbnlbXTtcblxuLyoqXG4gKiBFbmNhcHN1bGF0ZWQgYFByb3ZpZGVyYHMgdGhhdCBhcmUgb25seSBhY2NlcHRlZCBkdXJpbmcgY3JlYXRpb24gb2YgYW4gYEVudmlyb25tZW50SW5qZWN0b3JgIChlLmcuXG4gKiBpbiBhbiBgTmdNb2R1bGVgKS5cbiAqXG4gKiBVc2luZyB0aGlzIHdyYXBwZXIgdHlwZSBwcmV2ZW50cyBwcm92aWRlcnMgd2hpY2ggYXJlIG9ubHkgZGVzaWduZWQgdG8gd29yayBpblxuICogYXBwbGljYXRpb24vZW52aXJvbm1lbnQgaW5qZWN0b3JzIGZyb20gYmVpbmcgYWNjaWRlbnRhbGx5IGluY2x1ZGVkIGluXG4gKiBgQENvbXBvbmVudC5wcm92aWRlcnNgIGFuZCBlbmRpbmcgdXAgaW4gYSBjb21wb25lbnQgaW5qZWN0b3IuXG4gKlxuICogVGhpcyB3cmFwcGVyIHR5cGUgcHJldmVudHMgYWNjZXNzIHRvIHRoZSBgUHJvdmlkZXJgcyBpbnNpZGUuXG4gKlxuICogQHNlZSB7QGxpbmsgbWFrZUVudmlyb25tZW50UHJvdmlkZXJzfVxuICogQHNlZSB7QGxpbmsgaW1wb3J0UHJvdmlkZXJzRnJvbX1cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCB0eXBlIEVudmlyb25tZW50UHJvdmlkZXJzID0ge1xuICDJtWJyYW5kOiAnRW52aXJvbm1lbnRQcm92aWRlcnMnO1xufTtcblxuZXhwb3J0IGludGVyZmFjZSBJbnRlcm5hbEVudmlyb25tZW50UHJvdmlkZXJzIGV4dGVuZHMgRW52aXJvbm1lbnRQcm92aWRlcnMge1xuICDJtXByb3ZpZGVyczogKFByb3ZpZGVyIHwgRW52aXJvbm1lbnRQcm92aWRlcnMpW107XG5cbiAgLyoqXG4gICAqIElmIHByZXNlbnQsIGluZGljYXRlcyB0aGF0IHRoZSBgRW52aXJvbm1lbnRQcm92aWRlcnNgIHdlcmUgZGVyaXZlZCBmcm9tIE5nTW9kdWxlIHByb3ZpZGVycy5cbiAgICpcbiAgICogVGhpcyBpcyB1c2VkIHRvIHByb2R1Y2UgY2xlYXJlciBlcnJvciBtZXNzYWdlcy5cbiAgICovXG4gIMm1ZnJvbU5nTW9kdWxlPzogdHJ1ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRW52aXJvbm1lbnRQcm92aWRlcnMoXG4gIHZhbHVlOiBQcm92aWRlciB8IEVudmlyb25tZW50UHJvdmlkZXJzIHwgSW50ZXJuYWxFbnZpcm9ubWVudFByb3ZpZGVycyxcbik6IHZhbHVlIGlzIEludGVybmFsRW52aXJvbm1lbnRQcm92aWRlcnMge1xuICByZXR1cm4gdmFsdWUgJiYgISEodmFsdWUgYXMgSW50ZXJuYWxFbnZpcm9ubWVudFByb3ZpZGVycykuybVwcm92aWRlcnM7XG59XG5cbi8qKlxuICogRGVzY3JpYmVzIGEgZnVuY3Rpb24gdGhhdCBpcyB1c2VkIHRvIHByb2Nlc3MgcHJvdmlkZXIgbGlzdHMgKHN1Y2ggYXMgcHJvdmlkZXJcbiAqIG92ZXJyaWRlcykuXG4gKi9cbmV4cG9ydCB0eXBlIFByb2Nlc3NQcm92aWRlcnNGdW5jdGlvbiA9IChwcm92aWRlcnM6IFByb3ZpZGVyW10pID0+IFByb3ZpZGVyW107XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBhbiBOZ01vZHVsZSB0aGF0IGFzc29jaWF0ZXMgaXQgd2l0aCBwcm92aWRlcnNcbiAqIFVzYWdlIHdpdGhvdXQgYSBnZW5lcmljIHR5cGUgaXMgZGVwcmVjYXRlZC5cbiAqXG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTW9kdWxlV2l0aFByb3ZpZGVyczxUPiB7XG4gIG5nTW9kdWxlOiBUeXBlPFQ+O1xuICBwcm92aWRlcnM/OiBBcnJheTxQcm92aWRlciB8IEVudmlyb25tZW50UHJvdmlkZXJzPjtcbn1cblxuLyoqXG4gKiBQcm92aWRlcnMgdGhhdCB3ZXJlIGltcG9ydGVkIGZyb20gTmdNb2R1bGVzIHZpYSB0aGUgYGltcG9ydFByb3ZpZGVyc0Zyb21gIGZ1bmN0aW9uLlxuICpcbiAqIFRoZXNlIHByb3ZpZGVycyBhcmUgbWVhbnQgZm9yIHVzZSBpbiBhbiBhcHBsaWNhdGlvbiBpbmplY3RvciAob3Igb3RoZXIgZW52aXJvbm1lbnQgaW5qZWN0b3JzKSBhbmRcbiAqIHNob3VsZCBub3QgYmUgdXNlZCBpbiBjb21wb25lbnQgaW5qZWN0b3JzLlxuICpcbiAqIFRoaXMgdHlwZSBjYW5ub3QgYmUgZGlyZWN0bHkgaW1wbGVtZW50ZWQuIEl0J3MgcmV0dXJuZWQgZnJvbSB0aGUgYGltcG9ydFByb3ZpZGVyc0Zyb21gIGZ1bmN0aW9uXG4gKiBhbmQgc2VydmVzIHRvIHByZXZlbnQgdGhlIGV4dHJhY3RlZCBOZ01vZHVsZSBwcm92aWRlcnMgZnJvbSBiZWluZyB1c2VkIGluIHRoZSB3cm9uZyBjb250ZXh0cy5cbiAqXG4gKiBAc2VlIHtAbGluayBpbXBvcnRQcm92aWRlcnNGcm9tfVxuICpcbiAqIEBwdWJsaWNBcGlcbiAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBFbnZpcm9ubWVudFByb3ZpZGVyc2BcbiAqL1xuZXhwb3J0IHR5cGUgSW1wb3J0ZWROZ01vZHVsZVByb3ZpZGVycyA9IEVudmlyb25tZW50UHJvdmlkZXJzO1xuIl19