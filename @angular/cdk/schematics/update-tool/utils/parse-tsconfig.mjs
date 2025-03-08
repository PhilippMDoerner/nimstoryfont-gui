"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsconfigParseError = void 0;
exports.parseTsconfigFile = parseTsconfigFile;
const ts = require("typescript");
const virtual_host_1 = require("./virtual-host");
const path_1 = require("path");
const diagnostics_1 = require("./diagnostics");
/** Code of the error raised by TypeScript when a tsconfig doesn't match any files. */
const NO_INPUTS_ERROR_CODE = 18003;
/** Class capturing a tsconfig parse error. */
class TsconfigParseError extends Error {
}
exports.TsconfigParseError = TsconfigParseError;
/**
 * Attempts to parse the specified tsconfig file.
 *
 * @throws {TsconfigParseError} If the tsconfig could not be read or parsed.
 */
function parseTsconfigFile(tsconfigPath, fileSystem) {
    if (!fileSystem.fileExists(tsconfigPath)) {
        throw new TsconfigParseError(`Tsconfig cannot not be read: ${tsconfigPath}`);
    }
    const { config, error } = ts.readConfigFile(tsconfigPath, p => fileSystem.read(fileSystem.resolve(p)));
    // If there is a config reading error, we never attempt to parse the config.
    if (error) {
        throw new TsconfigParseError((0, diagnostics_1.formatDiagnostics)([error], fileSystem));
    }
    const parsed = ts.parseJsonConfigFileContent(config, new virtual_host_1.FileSystemHost(fileSystem), (0, path_1.dirname)(tsconfigPath), {});
    // Skip the "No inputs found..." error since we don't want to interrupt the migration if a
    // tsconfig doesn't match a file. This will result in an empty `Program` which is still valid.
    const errors = parsed.errors.filter(diag => diag.code !== NO_INPUTS_ERROR_CODE);
    if (errors.length) {
        throw new TsconfigParseError((0, diagnostics_1.formatDiagnostics)(errors, fileSystem));
    }
    return parsed;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFyc2UtdHNjb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9zcmMvY2RrL3NjaGVtYXRpY3MvdXBkYXRlLXRvb2wvdXRpbHMvcGFyc2UtdHNjb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7Ozs7R0FNRzs7O0FBbUJILDhDQWtDQztBQW5ERCxpQ0FBaUM7QUFFakMsaURBQThDO0FBQzlDLCtCQUE2QjtBQUM3QiwrQ0FBZ0Q7QUFFaEQsc0ZBQXNGO0FBQ3RGLE1BQU0sb0JBQW9CLEdBQUcsS0FBSyxDQUFDO0FBRW5DLDhDQUE4QztBQUM5QyxNQUFhLGtCQUFtQixTQUFRLEtBQUs7Q0FBRztBQUFoRCxnREFBZ0Q7QUFFaEQ7Ozs7R0FJRztBQUNILFNBQWdCLGlCQUFpQixDQUMvQixZQUEyQixFQUMzQixVQUFzQjtJQUV0QixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDO1FBQ3pDLE1BQU0sSUFBSSxrQkFBa0IsQ0FBQyxnQ0FBZ0MsWUFBWSxFQUFFLENBQUMsQ0FBQztJQUMvRSxDQUFDO0lBRUQsTUFBTSxFQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUMsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUN2QyxZQUFZLEVBQ1osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUUsQ0FDN0MsQ0FBQztJQUVGLDRFQUE0RTtJQUM1RSxJQUFJLEtBQUssRUFBRSxDQUFDO1FBQ1YsTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUEsK0JBQWlCLEVBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxNQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsMEJBQTBCLENBQzFDLE1BQU0sRUFDTixJQUFJLDZCQUFjLENBQUMsVUFBVSxDQUFDLEVBQzlCLElBQUEsY0FBTyxFQUFDLFlBQVksQ0FBQyxFQUNyQixFQUFFLENBQ0gsQ0FBQztJQUVGLDBGQUEwRjtJQUMxRiw4RkFBOEY7SUFDOUYsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLG9CQUFvQixDQUFDLENBQUM7SUFFaEYsSUFBSSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbEIsTUFBTSxJQUFJLGtCQUFrQixDQUFDLElBQUEsK0JBQWlCLEVBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEUsQ0FBQztJQUVELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIHRzIGZyb20gJ3R5cGVzY3JpcHQnO1xuaW1wb3J0IHtGaWxlU3lzdGVtLCBXb3Jrc3BhY2VQYXRofSBmcm9tICcuLi9maWxlLXN5c3RlbSc7XG5pbXBvcnQge0ZpbGVTeXN0ZW1Ib3N0fSBmcm9tICcuL3ZpcnR1YWwtaG9zdCc7XG5pbXBvcnQge2Rpcm5hbWV9IGZyb20gJ3BhdGgnO1xuaW1wb3J0IHtmb3JtYXREaWFnbm9zdGljc30gZnJvbSAnLi9kaWFnbm9zdGljcyc7XG5cbi8qKiBDb2RlIG9mIHRoZSBlcnJvciByYWlzZWQgYnkgVHlwZVNjcmlwdCB3aGVuIGEgdHNjb25maWcgZG9lc24ndCBtYXRjaCBhbnkgZmlsZXMuICovXG5jb25zdCBOT19JTlBVVFNfRVJST1JfQ09ERSA9IDE4MDAzO1xuXG4vKiogQ2xhc3MgY2FwdHVyaW5nIGEgdHNjb25maWcgcGFyc2UgZXJyb3IuICovXG5leHBvcnQgY2xhc3MgVHNjb25maWdQYXJzZUVycm9yIGV4dGVuZHMgRXJyb3Ige31cblxuLyoqXG4gKiBBdHRlbXB0cyB0byBwYXJzZSB0aGUgc3BlY2lmaWVkIHRzY29uZmlnIGZpbGUuXG4gKlxuICogQHRocm93cyB7VHNjb25maWdQYXJzZUVycm9yfSBJZiB0aGUgdHNjb25maWcgY291bGQgbm90IGJlIHJlYWQgb3IgcGFyc2VkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcGFyc2VUc2NvbmZpZ0ZpbGUoXG4gIHRzY29uZmlnUGF0aDogV29ya3NwYWNlUGF0aCxcbiAgZmlsZVN5c3RlbTogRmlsZVN5c3RlbSxcbik6IHRzLlBhcnNlZENvbW1hbmRMaW5lIHtcbiAgaWYgKCFmaWxlU3lzdGVtLmZpbGVFeGlzdHModHNjb25maWdQYXRoKSkge1xuICAgIHRocm93IG5ldyBUc2NvbmZpZ1BhcnNlRXJyb3IoYFRzY29uZmlnIGNhbm5vdCBub3QgYmUgcmVhZDogJHt0c2NvbmZpZ1BhdGh9YCk7XG4gIH1cblxuICBjb25zdCB7Y29uZmlnLCBlcnJvcn0gPSB0cy5yZWFkQ29uZmlnRmlsZShcbiAgICB0c2NvbmZpZ1BhdGgsXG4gICAgcCA9PiBmaWxlU3lzdGVtLnJlYWQoZmlsZVN5c3RlbS5yZXNvbHZlKHApKSEsXG4gICk7XG5cbiAgLy8gSWYgdGhlcmUgaXMgYSBjb25maWcgcmVhZGluZyBlcnJvciwgd2UgbmV2ZXIgYXR0ZW1wdCB0byBwYXJzZSB0aGUgY29uZmlnLlxuICBpZiAoZXJyb3IpIHtcbiAgICB0aHJvdyBuZXcgVHNjb25maWdQYXJzZUVycm9yKGZvcm1hdERpYWdub3N0aWNzKFtlcnJvcl0sIGZpbGVTeXN0ZW0pKTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IHRzLnBhcnNlSnNvbkNvbmZpZ0ZpbGVDb250ZW50KFxuICAgIGNvbmZpZyxcbiAgICBuZXcgRmlsZVN5c3RlbUhvc3QoZmlsZVN5c3RlbSksXG4gICAgZGlybmFtZSh0c2NvbmZpZ1BhdGgpLFxuICAgIHt9LFxuICApO1xuXG4gIC8vIFNraXAgdGhlIFwiTm8gaW5wdXRzIGZvdW5kLi4uXCIgZXJyb3Igc2luY2Ugd2UgZG9uJ3Qgd2FudCB0byBpbnRlcnJ1cHQgdGhlIG1pZ3JhdGlvbiBpZiBhXG4gIC8vIHRzY29uZmlnIGRvZXNuJ3QgbWF0Y2ggYSBmaWxlLiBUaGlzIHdpbGwgcmVzdWx0IGluIGFuIGVtcHR5IGBQcm9ncmFtYCB3aGljaCBpcyBzdGlsbCB2YWxpZC5cbiAgY29uc3QgZXJyb3JzID0gcGFyc2VkLmVycm9ycy5maWx0ZXIoZGlhZyA9PiBkaWFnLmNvZGUgIT09IE5PX0lOUFVUU19FUlJPUl9DT0RFKTtcblxuICBpZiAoZXJyb3JzLmxlbmd0aCkge1xuICAgIHRocm93IG5ldyBUc2NvbmZpZ1BhcnNlRXJyb3IoZm9ybWF0RGlhZ25vc3RpY3MoZXJyb3JzLCBmaWxlU3lzdGVtKSk7XG4gIH1cblxuICByZXR1cm4gcGFyc2VkO1xufVxuIl19