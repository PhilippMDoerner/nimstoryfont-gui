/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { assertInterpolationSymbols } from '../assertions';
export class InterpolationConfig {
    static fromArray(markers) {
        if (!markers) {
            return DEFAULT_INTERPOLATION_CONFIG;
        }
        assertInterpolationSymbols('interpolation', markers);
        return new InterpolationConfig(markers[0], markers[1]);
    }
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
}
export const DEFAULT_INTERPOLATION_CONFIG = new InterpolationConfig('{{', '}}');
export const DEFAULT_CONTAINER_BLOCKS = new Set(['switch']);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmYXVsdHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvbWxfcGFyc2VyL2RlZmF1bHRzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV6RCxNQUFNLE9BQU8sbUJBQW1CO0lBQzlCLE1BQU0sQ0FBQyxTQUFTLENBQUMsT0FBZ0M7UUFDL0MsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2IsT0FBTyw0QkFBNEIsQ0FBQztRQUN0QyxDQUFDO1FBRUQsMEJBQTBCLENBQUMsZUFBZSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3JELE9BQU8sSUFBSSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekQsQ0FBQztJQUVELFlBQ1MsS0FBYSxFQUNiLEdBQVc7UUFEWCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsUUFBRyxHQUFILEdBQUcsQ0FBUTtJQUNqQixDQUFDO0NBQ0w7QUFFRCxNQUFNLENBQUMsTUFBTSw0QkFBNEIsR0FBd0IsSUFBSSxtQkFBbUIsQ0FDdEYsSUFBSSxFQUNKLElBQUksQ0FDTCxDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge2Fzc2VydEludGVycG9sYXRpb25TeW1ib2xzfSBmcm9tICcuLi9hc3NlcnRpb25zJztcblxuZXhwb3J0IGNsYXNzIEludGVycG9sYXRpb25Db25maWcge1xuICBzdGF0aWMgZnJvbUFycmF5KG1hcmtlcnM6IFtzdHJpbmcsIHN0cmluZ10gfCBudWxsKTogSW50ZXJwb2xhdGlvbkNvbmZpZyB7XG4gICAgaWYgKCFtYXJrZXJzKSB7XG4gICAgICByZXR1cm4gREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRztcbiAgICB9XG5cbiAgICBhc3NlcnRJbnRlcnBvbGF0aW9uU3ltYm9scygnaW50ZXJwb2xhdGlvbicsIG1hcmtlcnMpO1xuICAgIHJldHVybiBuZXcgSW50ZXJwb2xhdGlvbkNvbmZpZyhtYXJrZXJzWzBdLCBtYXJrZXJzWzFdKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyBzdGFydDogc3RyaW5nLFxuICAgIHB1YmxpYyBlbmQ6IHN0cmluZyxcbiAgKSB7fVxufVxuXG5leHBvcnQgY29uc3QgREVGQVVMVF9JTlRFUlBPTEFUSU9OX0NPTkZJRzogSW50ZXJwb2xhdGlvbkNvbmZpZyA9IG5ldyBJbnRlcnBvbGF0aW9uQ29uZmlnKFxuICAne3snLFxuICAnfX0nLFxuKTtcblxuZXhwb3J0IGNvbnN0IERFRkFVTFRfQ09OVEFJTkVSX0JMT0NLUyA9IG5ldyBTZXQoWydzd2l0Y2gnXSk7XG4iXX0=