/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
const UNUSABLE_INTERPOLATION_REGEXPS = [
    /@/, // control flow reserved symbol
    /^\s*$/, // empty
    /[<>]/, // html tag
    /^[{}]$/, // i18n expansion
    /&(#|[a-z])/i, // character reference,
    /^\/\//, // comment
];
export function assertInterpolationSymbols(identifier, value) {
    if (value != null && !(Array.isArray(value) && value.length == 2)) {
        throw new Error(`Expected '${identifier}' to be an array, [start, end].`);
    }
    else if (value != null) {
        const start = value[0];
        const end = value[1];
        // Check for unusable interpolation symbols
        UNUSABLE_INTERPOLATION_REGEXPS.forEach((regexp) => {
            if (regexp.test(start) || regexp.test(end)) {
                throw new Error(`['${start}', '${end}'] contains unusable interpolation symbol.`);
            }
        });
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXJ0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9hc3NlcnRpb25zLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUVILE1BQU0sOEJBQThCLEdBQUc7SUFDckMsR0FBRyxFQUFFLCtCQUErQjtJQUNwQyxPQUFPLEVBQUUsUUFBUTtJQUNqQixNQUFNLEVBQUUsV0FBVztJQUNuQixRQUFRLEVBQUUsaUJBQWlCO0lBQzNCLGFBQWEsRUFBRSx1QkFBdUI7SUFDdEMsT0FBTyxFQUFFLFVBQVU7Q0FDcEIsQ0FBQztBQUVGLE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxVQUFrQixFQUFFLEtBQVU7SUFDdkUsSUFBSSxLQUFLLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNsRSxNQUFNLElBQUksS0FBSyxDQUFDLGFBQWEsVUFBVSxpQ0FBaUMsQ0FBQyxDQUFDO0lBQzVFLENBQUM7U0FBTSxJQUFJLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQztRQUN6QixNQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFXLENBQUM7UUFDakMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBVyxDQUFDO1FBQy9CLDJDQUEyQztRQUMzQyw4QkFBOEIsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtZQUNoRCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUMzQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssS0FBSyxPQUFPLEdBQUcsNENBQTRDLENBQUMsQ0FBQztZQUNwRixDQUFDO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuY29uc3QgVU5VU0FCTEVfSU5URVJQT0xBVElPTl9SRUdFWFBTID0gW1xuICAvQC8sIC8vIGNvbnRyb2wgZmxvdyByZXNlcnZlZCBzeW1ib2xcbiAgL15cXHMqJC8sIC8vIGVtcHR5XG4gIC9bPD5dLywgLy8gaHRtbCB0YWdcbiAgL15be31dJC8sIC8vIGkxOG4gZXhwYW5zaW9uXG4gIC8mKCN8W2Etel0pL2ksIC8vIGNoYXJhY3RlciByZWZlcmVuY2UsXG4gIC9eXFwvXFwvLywgLy8gY29tbWVudFxuXTtcblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2VydEludGVycG9sYXRpb25TeW1ib2xzKGlkZW50aWZpZXI6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xuICBpZiAodmFsdWUgIT0gbnVsbCAmJiAhKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIHZhbHVlLmxlbmd0aCA9PSAyKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihgRXhwZWN0ZWQgJyR7aWRlbnRpZmllcn0nIHRvIGJlIGFuIGFycmF5LCBbc3RhcnQsIGVuZF0uYCk7XG4gIH0gZWxzZSBpZiAodmFsdWUgIT0gbnVsbCkge1xuICAgIGNvbnN0IHN0YXJ0ID0gdmFsdWVbMF0gYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVuZCA9IHZhbHVlWzFdIGFzIHN0cmluZztcbiAgICAvLyBDaGVjayBmb3IgdW51c2FibGUgaW50ZXJwb2xhdGlvbiBzeW1ib2xzXG4gICAgVU5VU0FCTEVfSU5URVJQT0xBVElPTl9SRUdFWFBTLmZvckVhY2goKHJlZ2V4cCkgPT4ge1xuICAgICAgaWYgKHJlZ2V4cC50ZXN0KHN0YXJ0KSB8fCByZWdleHAudGVzdChlbmQpKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgWycke3N0YXJ0fScsICcke2VuZH0nXSBjb250YWlucyB1bnVzYWJsZSBpbnRlcnBvbGF0aW9uIHN5bWJvbC5gKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufVxuIl19