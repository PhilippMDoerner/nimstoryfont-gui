/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { InjectionToken, ɵRuntimeError as RuntimeError } from '@angular/core';
import { isAbsoluteUrl, isValidPath, normalizePath, normalizeSrc } from '../url';
/**
 * Noop image loader that does no transformation to the original src and just returns it as is.
 * This loader is used as a default one if more specific logic is not provided in an app config.
 *
 * @see {@link ImageLoader}
 * @see {@link NgOptimizedImage}
 */
export const noopImageLoader = (config) => config.src;
/**
 * Injection token that configures the image loader function.
 *
 * @see {@link ImageLoader}
 * @see {@link NgOptimizedImage}
 * @publicApi
 */
export const IMAGE_LOADER = new InjectionToken(ngDevMode ? 'ImageLoader' : '', {
    providedIn: 'root',
    factory: () => noopImageLoader,
});
/**
 * Internal helper function that makes it easier to introduce custom image loaders for the
 * `NgOptimizedImage` directive. It is enough to specify a URL builder function to obtain full DI
 * configuration for a given loader: a DI token corresponding to the actual loader function, plus DI
 * tokens managing preconnect check functionality.
 * @param buildUrlFn a function returning a full URL based on loader's configuration
 * @param exampleUrls example of full URLs for a given loader (used in error messages)
 * @returns a set of DI providers corresponding to the configured image loader
 */
export function createImageLoader(buildUrlFn, exampleUrls) {
    return function provideImageLoader(path) {
        if (!isValidPath(path)) {
            throwInvalidPathError(path, exampleUrls || []);
        }
        // The trailing / is stripped (if provided) to make URL construction (concatenation) easier in
        // the individual loader functions.
        path = normalizePath(path);
        const loaderFn = (config) => {
            if (isAbsoluteUrl(config.src)) {
                // Image loader functions expect an image file name (e.g. `my-image.png`)
                // or a relative path + a file name (e.g. `/a/b/c/my-image.png`) as an input,
                // so the final absolute URL can be constructed.
                // When an absolute URL is provided instead - the loader can not
                // build a final URL, thus the error is thrown to indicate that.
                throwUnexpectedAbsoluteUrlError(path, config.src);
            }
            return buildUrlFn(path, { ...config, src: normalizeSrc(config.src) });
        };
        const providers = [{ provide: IMAGE_LOADER, useValue: loaderFn }];
        return providers;
    };
}
function throwInvalidPathError(path, exampleUrls) {
    throw new RuntimeError(2959 /* RuntimeErrorCode.INVALID_LOADER_ARGUMENTS */, ngDevMode &&
        `Image loader has detected an invalid path (\`${path}\`). ` +
            `To fix this, supply a path using one of the following formats: ${exampleUrls.join(' or ')}`);
}
function throwUnexpectedAbsoluteUrlError(path, url) {
    throw new RuntimeError(2959 /* RuntimeErrorCode.INVALID_LOADER_ARGUMENTS */, ngDevMode &&
        `Image loader has detected a \`<img>\` tag with an invalid \`ngSrc\` attribute: ${url}. ` +
            `This image loader expects \`ngSrc\` to be a relative URL - ` +
            `however the provided value is an absolute URL. ` +
            `To fix this, provide \`ngSrc\` as a path relative to the base URL ` +
            `configured for this loader (\`${path}\`).`);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2VfbG9hZGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL3NyYy9kaXJlY3RpdmVzL25nX29wdGltaXplZF9pbWFnZS9pbWFnZV9sb2FkZXJzL2ltYWdlX2xvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsY0FBYyxFQUFZLGFBQWEsSUFBSSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHdEYsT0FBTyxFQUFDLGFBQWEsRUFBRSxXQUFXLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBQyxNQUFNLFFBQVEsQ0FBQztBQXFDL0U7Ozs7OztHQU1HO0FBQ0gsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLENBQUMsTUFBeUIsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQVV6RTs7Ozs7O0dBTUc7QUFDSCxNQUFNLENBQUMsTUFBTSxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQWMsU0FBUyxDQUFDLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRTtJQUMxRixVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsZUFBZTtDQUMvQixDQUFDLENBQUM7QUFFSDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxpQkFBaUIsQ0FDL0IsVUFBK0QsRUFDL0QsV0FBc0I7SUFFdEIsT0FBTyxTQUFTLGtCQUFrQixDQUFDLElBQVk7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3ZCLHFCQUFxQixDQUFDLElBQUksRUFBRSxXQUFXLElBQUksRUFBRSxDQUFDLENBQUM7UUFDakQsQ0FBQztRQUVELDhGQUE4RjtRQUM5RixtQ0FBbUM7UUFDbkMsSUFBSSxHQUFHLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixNQUFNLFFBQVEsR0FBRyxDQUFDLE1BQXlCLEVBQUUsRUFBRTtZQUM3QyxJQUFJLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQztnQkFDOUIseUVBQXlFO2dCQUN6RSw2RUFBNkU7Z0JBQzdFLGdEQUFnRDtnQkFDaEQsZ0VBQWdFO2dCQUNoRSxnRUFBZ0U7Z0JBQ2hFLCtCQUErQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDcEQsQ0FBQztZQUVELE9BQU8sVUFBVSxDQUFDLElBQUksRUFBRSxFQUFDLEdBQUcsTUFBTSxFQUFFLEdBQUcsRUFBRSxZQUFZLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFDLENBQUMsQ0FBQztRQUN0RSxDQUFDLENBQUM7UUFFRixNQUFNLFNBQVMsR0FBZSxDQUFDLEVBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFDLENBQUMsQ0FBQztRQUM1RSxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxJQUFhLEVBQUUsV0FBcUI7SUFDakUsTUFBTSxJQUFJLFlBQVksdURBRXBCLFNBQVM7UUFDUCxnREFBZ0QsSUFBSSxPQUFPO1lBQ3pELGtFQUFrRSxXQUFXLENBQUMsSUFBSSxDQUNoRixNQUFNLENBQ1AsRUFBRSxDQUNSLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUywrQkFBK0IsQ0FBQyxJQUFZLEVBQUUsR0FBVztJQUNoRSxNQUFNLElBQUksWUFBWSx1REFFcEIsU0FBUztRQUNQLGtGQUFrRixHQUFHLElBQUk7WUFDdkYsNkRBQTZEO1lBQzdELGlEQUFpRDtZQUNqRCxvRUFBb0U7WUFDcEUsaUNBQWlDLElBQUksTUFBTSxDQUNoRCxDQUFDO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtJbmplY3Rpb25Ub2tlbiwgUHJvdmlkZXIsIMm1UnVudGltZUVycm9yIGFzIFJ1bnRpbWVFcnJvcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7UnVudGltZUVycm9yQ29kZX0gZnJvbSAnLi4vLi4vLi4vZXJyb3JzJztcbmltcG9ydCB7aXNBYnNvbHV0ZVVybCwgaXNWYWxpZFBhdGgsIG5vcm1hbGl6ZVBhdGgsIG5vcm1hbGl6ZVNyY30gZnJvbSAnLi4vdXJsJztcblxuLyoqXG4gKiBDb25maWcgb3B0aW9ucyByZWNvZ25pemVkIGJ5IHRoZSBpbWFnZSBsb2FkZXIgZnVuY3Rpb24uXG4gKlxuICogQHNlZSB7QGxpbmsgSW1hZ2VMb2FkZXJ9XG4gKiBAc2VlIHtAbGluayBOZ09wdGltaXplZEltYWdlfVxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlTG9hZGVyQ29uZmlnIHtcbiAgLyoqXG4gICAqIEltYWdlIGZpbGUgbmFtZSB0byBiZSBhZGRlZCB0byB0aGUgaW1hZ2UgcmVxdWVzdCBVUkwuXG4gICAqL1xuICBzcmM6IHN0cmluZztcbiAgLyoqXG4gICAqIFdpZHRoIG9mIHRoZSByZXF1ZXN0ZWQgaW1hZ2UgKHRvIGJlIHVzZWQgd2hlbiBnZW5lcmF0aW5nIHNyY3NldCkuXG4gICAqL1xuICB3aWR0aD86IG51bWJlcjtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIGxvYWRlciBzaG91bGQgZ2VuZXJhdGUgYSBVUkwgZm9yIGEgc21hbGwgaW1hZ2UgcGxhY2Vob2xkZXIgaW5zdGVhZCBvZiBhIGZ1bGwtc2l6ZWRcbiAgICogaW1hZ2UuXG4gICAqL1xuICBpc1BsYWNlaG9sZGVyPzogYm9vbGVhbjtcbiAgLyoqXG4gICAqIEFkZGl0aW9uYWwgdXNlci1wcm92aWRlZCBwYXJhbWV0ZXJzIGZvciB1c2UgYnkgdGhlIEltYWdlTG9hZGVyLlxuICAgKi9cbiAgbG9hZGVyUGFyYW1zPzoge1trZXk6IHN0cmluZ106IGFueX07XG59XG5cbi8qKlxuICogUmVwcmVzZW50cyBhbiBpbWFnZSBsb2FkZXIgZnVuY3Rpb24uIEltYWdlIGxvYWRlciBmdW5jdGlvbnMgYXJlIHVzZWQgYnkgdGhlXG4gKiBOZ09wdGltaXplZEltYWdlIGRpcmVjdGl2ZSB0byBwcm9kdWNlIGZ1bGwgaW1hZ2UgVVJMIGJhc2VkIG9uIHRoZSBpbWFnZSBuYW1lIGFuZCBpdHMgd2lkdGguXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgdHlwZSBJbWFnZUxvYWRlciA9IChjb25maWc6IEltYWdlTG9hZGVyQ29uZmlnKSA9PiBzdHJpbmc7XG5cbi8qKlxuICogTm9vcCBpbWFnZSBsb2FkZXIgdGhhdCBkb2VzIG5vIHRyYW5zZm9ybWF0aW9uIHRvIHRoZSBvcmlnaW5hbCBzcmMgYW5kIGp1c3QgcmV0dXJucyBpdCBhcyBpcy5cbiAqIFRoaXMgbG9hZGVyIGlzIHVzZWQgYXMgYSBkZWZhdWx0IG9uZSBpZiBtb3JlIHNwZWNpZmljIGxvZ2ljIGlzIG5vdCBwcm92aWRlZCBpbiBhbiBhcHAgY29uZmlnLlxuICpcbiAqIEBzZWUge0BsaW5rIEltYWdlTG9hZGVyfVxuICogQHNlZSB7QGxpbmsgTmdPcHRpbWl6ZWRJbWFnZX1cbiAqL1xuZXhwb3J0IGNvbnN0IG5vb3BJbWFnZUxvYWRlciA9IChjb25maWc6IEltYWdlTG9hZGVyQ29uZmlnKSA9PiBjb25maWcuc3JjO1xuXG4vKipcbiAqIE1ldGFkYXRhIGFib3V0IHRoZSBpbWFnZSBsb2FkZXIuXG4gKi9cbmV4cG9ydCB0eXBlIEltYWdlTG9hZGVySW5mbyA9IHtcbiAgbmFtZTogc3RyaW5nO1xuICB0ZXN0VXJsOiAodXJsOiBzdHJpbmcpID0+IGJvb2xlYW47XG59O1xuXG4vKipcbiAqIEluamVjdGlvbiB0b2tlbiB0aGF0IGNvbmZpZ3VyZXMgdGhlIGltYWdlIGxvYWRlciBmdW5jdGlvbi5cbiAqXG4gKiBAc2VlIHtAbGluayBJbWFnZUxvYWRlcn1cbiAqIEBzZWUge0BsaW5rIE5nT3B0aW1pemVkSW1hZ2V9XG4gKiBAcHVibGljQXBpXG4gKi9cbmV4cG9ydCBjb25zdCBJTUFHRV9MT0FERVIgPSBuZXcgSW5qZWN0aW9uVG9rZW48SW1hZ2VMb2FkZXI+KG5nRGV2TW9kZSA/ICdJbWFnZUxvYWRlcicgOiAnJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IG5vb3BJbWFnZUxvYWRlcixcbn0pO1xuXG4vKipcbiAqIEludGVybmFsIGhlbHBlciBmdW5jdGlvbiB0aGF0IG1ha2VzIGl0IGVhc2llciB0byBpbnRyb2R1Y2UgY3VzdG9tIGltYWdlIGxvYWRlcnMgZm9yIHRoZVxuICogYE5nT3B0aW1pemVkSW1hZ2VgIGRpcmVjdGl2ZS4gSXQgaXMgZW5vdWdoIHRvIHNwZWNpZnkgYSBVUkwgYnVpbGRlciBmdW5jdGlvbiB0byBvYnRhaW4gZnVsbCBESVxuICogY29uZmlndXJhdGlvbiBmb3IgYSBnaXZlbiBsb2FkZXI6IGEgREkgdG9rZW4gY29ycmVzcG9uZGluZyB0byB0aGUgYWN0dWFsIGxvYWRlciBmdW5jdGlvbiwgcGx1cyBESVxuICogdG9rZW5zIG1hbmFnaW5nIHByZWNvbm5lY3QgY2hlY2sgZnVuY3Rpb25hbGl0eS5cbiAqIEBwYXJhbSBidWlsZFVybEZuIGEgZnVuY3Rpb24gcmV0dXJuaW5nIGEgZnVsbCBVUkwgYmFzZWQgb24gbG9hZGVyJ3MgY29uZmlndXJhdGlvblxuICogQHBhcmFtIGV4YW1wbGVVcmxzIGV4YW1wbGUgb2YgZnVsbCBVUkxzIGZvciBhIGdpdmVuIGxvYWRlciAodXNlZCBpbiBlcnJvciBtZXNzYWdlcylcbiAqIEByZXR1cm5zIGEgc2V0IG9mIERJIHByb3ZpZGVycyBjb3JyZXNwb25kaW5nIHRvIHRoZSBjb25maWd1cmVkIGltYWdlIGxvYWRlclxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlSW1hZ2VMb2FkZXIoXG4gIGJ1aWxkVXJsRm46IChwYXRoOiBzdHJpbmcsIGNvbmZpZzogSW1hZ2VMb2FkZXJDb25maWcpID0+IHN0cmluZyxcbiAgZXhhbXBsZVVybHM/OiBzdHJpbmdbXSxcbikge1xuICByZXR1cm4gZnVuY3Rpb24gcHJvdmlkZUltYWdlTG9hZGVyKHBhdGg6IHN0cmluZykge1xuICAgIGlmICghaXNWYWxpZFBhdGgocGF0aCkpIHtcbiAgICAgIHRocm93SW52YWxpZFBhdGhFcnJvcihwYXRoLCBleGFtcGxlVXJscyB8fCBbXSk7XG4gICAgfVxuXG4gICAgLy8gVGhlIHRyYWlsaW5nIC8gaXMgc3RyaXBwZWQgKGlmIHByb3ZpZGVkKSB0byBtYWtlIFVSTCBjb25zdHJ1Y3Rpb24gKGNvbmNhdGVuYXRpb24pIGVhc2llciBpblxuICAgIC8vIHRoZSBpbmRpdmlkdWFsIGxvYWRlciBmdW5jdGlvbnMuXG4gICAgcGF0aCA9IG5vcm1hbGl6ZVBhdGgocGF0aCk7XG5cbiAgICBjb25zdCBsb2FkZXJGbiA9IChjb25maWc6IEltYWdlTG9hZGVyQ29uZmlnKSA9PiB7XG4gICAgICBpZiAoaXNBYnNvbHV0ZVVybChjb25maWcuc3JjKSkge1xuICAgICAgICAvLyBJbWFnZSBsb2FkZXIgZnVuY3Rpb25zIGV4cGVjdCBhbiBpbWFnZSBmaWxlIG5hbWUgKGUuZy4gYG15LWltYWdlLnBuZ2ApXG4gICAgICAgIC8vIG9yIGEgcmVsYXRpdmUgcGF0aCArIGEgZmlsZSBuYW1lIChlLmcuIGAvYS9iL2MvbXktaW1hZ2UucG5nYCkgYXMgYW4gaW5wdXQsXG4gICAgICAgIC8vIHNvIHRoZSBmaW5hbCBhYnNvbHV0ZSBVUkwgY2FuIGJlIGNvbnN0cnVjdGVkLlxuICAgICAgICAvLyBXaGVuIGFuIGFic29sdXRlIFVSTCBpcyBwcm92aWRlZCBpbnN0ZWFkIC0gdGhlIGxvYWRlciBjYW4gbm90XG4gICAgICAgIC8vIGJ1aWxkIGEgZmluYWwgVVJMLCB0aHVzIHRoZSBlcnJvciBpcyB0aHJvd24gdG8gaW5kaWNhdGUgdGhhdC5cbiAgICAgICAgdGhyb3dVbmV4cGVjdGVkQWJzb2x1dGVVcmxFcnJvcihwYXRoLCBjb25maWcuc3JjKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGJ1aWxkVXJsRm4ocGF0aCwgey4uLmNvbmZpZywgc3JjOiBub3JtYWxpemVTcmMoY29uZmlnLnNyYyl9KTtcbiAgICB9O1xuXG4gICAgY29uc3QgcHJvdmlkZXJzOiBQcm92aWRlcltdID0gW3twcm92aWRlOiBJTUFHRV9MT0FERVIsIHVzZVZhbHVlOiBsb2FkZXJGbn1dO1xuICAgIHJldHVybiBwcm92aWRlcnM7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRocm93SW52YWxpZFBhdGhFcnJvcihwYXRoOiB1bmtub3duLCBleGFtcGxlVXJsczogc3RyaW5nW10pOiBuZXZlciB7XG4gIHRocm93IG5ldyBSdW50aW1lRXJyb3IoXG4gICAgUnVudGltZUVycm9yQ29kZS5JTlZBTElEX0xPQURFUl9BUkdVTUVOVFMsXG4gICAgbmdEZXZNb2RlICYmXG4gICAgICBgSW1hZ2UgbG9hZGVyIGhhcyBkZXRlY3RlZCBhbiBpbnZhbGlkIHBhdGggKFxcYCR7cGF0aH1cXGApLiBgICtcbiAgICAgICAgYFRvIGZpeCB0aGlzLCBzdXBwbHkgYSBwYXRoIHVzaW5nIG9uZSBvZiB0aGUgZm9sbG93aW5nIGZvcm1hdHM6ICR7ZXhhbXBsZVVybHMuam9pbihcbiAgICAgICAgICAnIG9yICcsXG4gICAgICAgICl9YCxcbiAgKTtcbn1cblxuZnVuY3Rpb24gdGhyb3dVbmV4cGVjdGVkQWJzb2x1dGVVcmxFcnJvcihwYXRoOiBzdHJpbmcsIHVybDogc3RyaW5nKTogbmV2ZXIge1xuICB0aHJvdyBuZXcgUnVudGltZUVycm9yKFxuICAgIFJ1bnRpbWVFcnJvckNvZGUuSU5WQUxJRF9MT0FERVJfQVJHVU1FTlRTLFxuICAgIG5nRGV2TW9kZSAmJlxuICAgICAgYEltYWdlIGxvYWRlciBoYXMgZGV0ZWN0ZWQgYSBcXGA8aW1nPlxcYCB0YWcgd2l0aCBhbiBpbnZhbGlkIFxcYG5nU3JjXFxgIGF0dHJpYnV0ZTogJHt1cmx9LiBgICtcbiAgICAgICAgYFRoaXMgaW1hZ2UgbG9hZGVyIGV4cGVjdHMgXFxgbmdTcmNcXGAgdG8gYmUgYSByZWxhdGl2ZSBVUkwgLSBgICtcbiAgICAgICAgYGhvd2V2ZXIgdGhlIHByb3ZpZGVkIHZhbHVlIGlzIGFuIGFic29sdXRlIFVSTC4gYCArXG4gICAgICAgIGBUbyBmaXggdGhpcywgcHJvdmlkZSBcXGBuZ1NyY1xcYCBhcyBhIHBhdGggcmVsYXRpdmUgdG8gdGhlIGJhc2UgVVJMIGAgK1xuICAgICAgICBgY29uZmlndXJlZCBmb3IgdGhpcyBsb2FkZXIgKFxcYCR7cGF0aH1cXGApLmAsXG4gICk7XG59XG4iXX0=