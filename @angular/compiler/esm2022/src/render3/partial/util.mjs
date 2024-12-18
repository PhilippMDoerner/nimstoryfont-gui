/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import * as o from '../../output/output_ast';
import { DefinitionMap } from '../view/util';
/**
 * Creates an array literal expression from the given array, mapping all values to an expression
 * using the provided mapping function. If the array is empty or null, then null is returned.
 *
 * @param values The array to transfer into literal array expression.
 * @param mapper The logic to use for creating an expression for the array's values.
 * @returns An array literal expression representing `values`, or null if `values` is empty or
 * is itself null.
 */
export function toOptionalLiteralArray(values, mapper) {
    if (values === null || values.length === 0) {
        return null;
    }
    return o.literalArr(values.map((value) => mapper(value)));
}
/**
 * Creates an object literal expression from the given object, mapping all values to an expression
 * using the provided mapping function. If the object has no keys, then null is returned.
 *
 * @param object The object to transfer into an object literal expression.
 * @param mapper The logic to use for creating an expression for the object's values.
 * @returns An object literal expression representing `object`, or null if `object` does not have
 * any keys.
 */
export function toOptionalLiteralMap(object, mapper) {
    const entries = Object.keys(object).map((key) => {
        const value = object[key];
        return { key, value: mapper(value), quoted: true };
    });
    if (entries.length > 0) {
        return o.literalMap(entries);
    }
    else {
        return null;
    }
}
export function compileDependencies(deps) {
    if (deps === 'invalid') {
        // The `deps` can be set to the string "invalid"  by the `unwrapConstructorDependencies()`
        // function, which tries to convert `ConstructorDeps` into `R3DependencyMetadata[]`.
        return o.literal('invalid');
    }
    else if (deps === null) {
        return o.literal(null);
    }
    else {
        return o.literalArr(deps.map(compileDependency));
    }
}
export function compileDependency(dep) {
    const depMeta = new DefinitionMap();
    depMeta.set('token', dep.token);
    if (dep.attributeNameType !== null) {
        depMeta.set('attribute', o.literal(true));
    }
    if (dep.host) {
        depMeta.set('host', o.literal(true));
    }
    if (dep.optional) {
        depMeta.set('optional', o.literal(true));
    }
    if (dep.self) {
        depMeta.set('self', o.literal(true));
    }
    if (dep.skipSelf) {
        depMeta.set('skipSelf', o.literal(true));
    }
    return depMeta.toLiteralMap();
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy9yZW5kZXIzL3BhcnRpYWwvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFDSCxPQUFPLEtBQUssQ0FBQyxNQUFNLHlCQUF5QixDQUFDO0FBRTdDLE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFJM0M7Ozs7Ozs7O0dBUUc7QUFDSCxNQUFNLFVBQVUsc0JBQXNCLENBQ3BDLE1BQWtCLEVBQ2xCLE1BQWtDO0lBRWxDLElBQUksTUFBTSxLQUFLLElBQUksSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRSxDQUFDO1FBQzNDLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNELE9BQU8sQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQzVELENBQUM7QUFFRDs7Ozs7Ozs7R0FRRztBQUNILE1BQU0sVUFBVSxvQkFBb0IsQ0FDbEMsTUFBMEIsRUFDMUIsTUFBa0M7SUFFbEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtRQUM5QyxNQUFNLEtBQUssR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDMUIsT0FBTyxFQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUMsQ0FBQztJQUNuRCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDL0IsQ0FBQztTQUFNLENBQUM7UUFDTixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxJQUErQztJQUUvQyxJQUFJLElBQUksS0FBSyxTQUFTLEVBQUUsQ0FBQztRQUN2QiwwRkFBMEY7UUFDMUYsb0ZBQW9GO1FBQ3BGLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUM5QixDQUFDO1NBQU0sSUFBSSxJQUFJLEtBQUssSUFBSSxFQUFFLENBQUM7UUFDekIsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7U0FBTSxDQUFDO1FBQ04sT0FBTyxDQUFDLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7QUFDSCxDQUFDO0FBRUQsTUFBTSxVQUFVLGlCQUFpQixDQUFDLEdBQXlCO0lBQ3pELE1BQU0sT0FBTyxHQUFHLElBQUksYUFBYSxFQUErQixDQUFDO0lBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNoQyxJQUFJLEdBQUcsQ0FBQyxpQkFBaUIsS0FBSyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELElBQUksR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDRCxJQUFJLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNqQixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUNELE9BQU8sT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0FBQ2hDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5pbXBvcnQgKiBhcyBvIGZyb20gJy4uLy4uL291dHB1dC9vdXRwdXRfYXN0JztcbmltcG9ydCB7UjNEZXBlbmRlbmN5TWV0YWRhdGF9IGZyb20gJy4uL3IzX2ZhY3RvcnknO1xuaW1wb3J0IHtEZWZpbml0aW9uTWFwfSBmcm9tICcuLi92aWV3L3V0aWwnO1xuXG5pbXBvcnQge1IzRGVjbGFyZURlcGVuZGVuY3lNZXRhZGF0YX0gZnJvbSAnLi9hcGknO1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gYXJyYXkgbGl0ZXJhbCBleHByZXNzaW9uIGZyb20gdGhlIGdpdmVuIGFycmF5LCBtYXBwaW5nIGFsbCB2YWx1ZXMgdG8gYW4gZXhwcmVzc2lvblxuICogdXNpbmcgdGhlIHByb3ZpZGVkIG1hcHBpbmcgZnVuY3Rpb24uIElmIHRoZSBhcnJheSBpcyBlbXB0eSBvciBudWxsLCB0aGVuIG51bGwgaXMgcmV0dXJuZWQuXG4gKlxuICogQHBhcmFtIHZhbHVlcyBUaGUgYXJyYXkgdG8gdHJhbnNmZXIgaW50byBsaXRlcmFsIGFycmF5IGV4cHJlc3Npb24uXG4gKiBAcGFyYW0gbWFwcGVyIFRoZSBsb2dpYyB0byB1c2UgZm9yIGNyZWF0aW5nIGFuIGV4cHJlc3Npb24gZm9yIHRoZSBhcnJheSdzIHZhbHVlcy5cbiAqIEByZXR1cm5zIEFuIGFycmF5IGxpdGVyYWwgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgYHZhbHVlc2AsIG9yIG51bGwgaWYgYHZhbHVlc2AgaXMgZW1wdHkgb3JcbiAqIGlzIGl0c2VsZiBudWxsLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9PcHRpb25hbExpdGVyYWxBcnJheTxUPihcbiAgdmFsdWVzOiBUW10gfCBudWxsLFxuICBtYXBwZXI6ICh2YWx1ZTogVCkgPT4gby5FeHByZXNzaW9uLFxuKTogby5MaXRlcmFsQXJyYXlFeHByIHwgbnVsbCB7XG4gIGlmICh2YWx1ZXMgPT09IG51bGwgfHwgdmFsdWVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBvLmxpdGVyYWxBcnIodmFsdWVzLm1hcCgodmFsdWUpID0+IG1hcHBlcih2YWx1ZSkpKTtcbn1cblxuLyoqXG4gKiBDcmVhdGVzIGFuIG9iamVjdCBsaXRlcmFsIGV4cHJlc3Npb24gZnJvbSB0aGUgZ2l2ZW4gb2JqZWN0LCBtYXBwaW5nIGFsbCB2YWx1ZXMgdG8gYW4gZXhwcmVzc2lvblxuICogdXNpbmcgdGhlIHByb3ZpZGVkIG1hcHBpbmcgZnVuY3Rpb24uIElmIHRoZSBvYmplY3QgaGFzIG5vIGtleXMsIHRoZW4gbnVsbCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAcGFyYW0gb2JqZWN0IFRoZSBvYmplY3QgdG8gdHJhbnNmZXIgaW50byBhbiBvYmplY3QgbGl0ZXJhbCBleHByZXNzaW9uLlxuICogQHBhcmFtIG1hcHBlciBUaGUgbG9naWMgdG8gdXNlIGZvciBjcmVhdGluZyBhbiBleHByZXNzaW9uIGZvciB0aGUgb2JqZWN0J3MgdmFsdWVzLlxuICogQHJldHVybnMgQW4gb2JqZWN0IGxpdGVyYWwgZXhwcmVzc2lvbiByZXByZXNlbnRpbmcgYG9iamVjdGAsIG9yIG51bGwgaWYgYG9iamVjdGAgZG9lcyBub3QgaGF2ZVxuICogYW55IGtleXMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b09wdGlvbmFsTGl0ZXJhbE1hcDxUPihcbiAgb2JqZWN0OiB7W2tleTogc3RyaW5nXTogVH0sXG4gIG1hcHBlcjogKHZhbHVlOiBUKSA9PiBvLkV4cHJlc3Npb24sXG4pOiBvLkxpdGVyYWxNYXBFeHByIHwgbnVsbCB7XG4gIGNvbnN0IGVudHJpZXMgPSBPYmplY3Qua2V5cyhvYmplY3QpLm1hcCgoa2V5KSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBvYmplY3Rba2V5XTtcbiAgICByZXR1cm4ge2tleSwgdmFsdWU6IG1hcHBlcih2YWx1ZSksIHF1b3RlZDogdHJ1ZX07XG4gIH0pO1xuXG4gIGlmIChlbnRyaWVzLmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4gby5saXRlcmFsTWFwKGVudHJpZXMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlRGVwZW5kZW5jaWVzKFxuICBkZXBzOiBSM0RlcGVuZGVuY3lNZXRhZGF0YVtdIHwgJ2ludmFsaWQnIHwgbnVsbCxcbik6IG8uTGl0ZXJhbEV4cHIgfCBvLkxpdGVyYWxBcnJheUV4cHIge1xuICBpZiAoZGVwcyA9PT0gJ2ludmFsaWQnKSB7XG4gICAgLy8gVGhlIGBkZXBzYCBjYW4gYmUgc2V0IHRvIHRoZSBzdHJpbmcgXCJpbnZhbGlkXCIgIGJ5IHRoZSBgdW53cmFwQ29uc3RydWN0b3JEZXBlbmRlbmNpZXMoKWBcbiAgICAvLyBmdW5jdGlvbiwgd2hpY2ggdHJpZXMgdG8gY29udmVydCBgQ29uc3RydWN0b3JEZXBzYCBpbnRvIGBSM0RlcGVuZGVuY3lNZXRhZGF0YVtdYC5cbiAgICByZXR1cm4gby5saXRlcmFsKCdpbnZhbGlkJyk7XG4gIH0gZWxzZSBpZiAoZGVwcyA9PT0gbnVsbCkge1xuICAgIHJldHVybiBvLmxpdGVyYWwobnVsbCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG8ubGl0ZXJhbEFycihkZXBzLm1hcChjb21waWxlRGVwZW5kZW5jeSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjb21waWxlRGVwZW5kZW5jeShkZXA6IFIzRGVwZW5kZW5jeU1ldGFkYXRhKTogby5MaXRlcmFsTWFwRXhwciB7XG4gIGNvbnN0IGRlcE1ldGEgPSBuZXcgRGVmaW5pdGlvbk1hcDxSM0RlY2xhcmVEZXBlbmRlbmN5TWV0YWRhdGE+KCk7XG4gIGRlcE1ldGEuc2V0KCd0b2tlbicsIGRlcC50b2tlbik7XG4gIGlmIChkZXAuYXR0cmlidXRlTmFtZVR5cGUgIT09IG51bGwpIHtcbiAgICBkZXBNZXRhLnNldCgnYXR0cmlidXRlJywgby5saXRlcmFsKHRydWUpKTtcbiAgfVxuICBpZiAoZGVwLmhvc3QpIHtcbiAgICBkZXBNZXRhLnNldCgnaG9zdCcsIG8ubGl0ZXJhbCh0cnVlKSk7XG4gIH1cbiAgaWYgKGRlcC5vcHRpb25hbCkge1xuICAgIGRlcE1ldGEuc2V0KCdvcHRpb25hbCcsIG8ubGl0ZXJhbCh0cnVlKSk7XG4gIH1cbiAgaWYgKGRlcC5zZWxmKSB7XG4gICAgZGVwTWV0YS5zZXQoJ3NlbGYnLCBvLmxpdGVyYWwodHJ1ZSkpO1xuICB9XG4gIGlmIChkZXAuc2tpcFNlbGYpIHtcbiAgICBkZXBNZXRhLnNldCgnc2tpcFNlbGYnLCBvLmxpdGVyYWwodHJ1ZSkpO1xuICB9XG4gIHJldHVybiBkZXBNZXRhLnRvTGl0ZXJhbE1hcCgpO1xufVxuIl19