/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import * as ir from '../../ir';
import { literalOrArrayLiteral } from '../conversion';
/**
 * Defer instructions take a configuration array, which should be collected into the component
 * consts. This phase finds the config options, and creates the corresponding const array.
 */
export function configureDeferInstructions(job) {
    for (const unit of job.units) {
        for (const op of unit.create) {
            if (op.kind !== ir.OpKind.Defer) {
                continue;
            }
            if (op.placeholderMinimumTime !== null) {
                op.placeholderConfig = new ir.ConstCollectedExpr(literalOrArrayLiteral([op.placeholderMinimumTime]));
            }
            if (op.loadingMinimumTime !== null || op.loadingAfterTime !== null) {
                op.loadingConfig = new ir.ConstCollectedExpr(literalOrArrayLiteral([op.loadingMinimumTime, op.loadingAfterTime]));
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXJfY29uZmlncy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvbXBpbGVyL3NyYy90ZW1wbGF0ZS9waXBlbGluZS9zcmMvcGhhc2VzL2RlZmVyX2NvbmZpZ3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBRUgsT0FBTyxLQUFLLEVBQUUsTUFBTSxVQUFVLENBQUM7QUFFL0IsT0FBTyxFQUFDLHFCQUFxQixFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXBEOzs7R0FHRztBQUNILE1BQU0sVUFBVSwwQkFBMEIsQ0FBQyxHQUE0QjtJQUNyRSxLQUFLLE1BQU0sSUFBSSxJQUFJLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM3QixLQUFLLE1BQU0sRUFBRSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztZQUM3QixJQUFJLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztnQkFDaEMsU0FBUztZQUNYLENBQUM7WUFFRCxJQUFJLEVBQUUsQ0FBQyxzQkFBc0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDdkMsRUFBRSxDQUFDLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLGtCQUFrQixDQUM5QyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQ25ELENBQUM7WUFDSixDQUFDO1lBQ0QsSUFBSSxFQUFFLENBQUMsa0JBQWtCLEtBQUssSUFBSSxJQUFJLEVBQUUsQ0FBQyxnQkFBZ0IsS0FBSyxJQUFJLEVBQUUsQ0FBQztnQkFDbkUsRUFBRSxDQUFDLGFBQWEsR0FBRyxJQUFJLEVBQUUsQ0FBQyxrQkFBa0IsQ0FDMUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FDcEUsQ0FBQztZQUNKLENBQUM7UUFDSCxDQUFDO0lBQ0gsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmltcG9ydCAqIGFzIGlyIGZyb20gJy4uLy4uL2lyJztcbmltcG9ydCB0eXBlIHtDb21wb25lbnRDb21waWxhdGlvbkpvYn0gZnJvbSAnLi4vY29tcGlsYXRpb24nO1xuaW1wb3J0IHtsaXRlcmFsT3JBcnJheUxpdGVyYWx9IGZyb20gJy4uL2NvbnZlcnNpb24nO1xuXG4vKipcbiAqIERlZmVyIGluc3RydWN0aW9ucyB0YWtlIGEgY29uZmlndXJhdGlvbiBhcnJheSwgd2hpY2ggc2hvdWxkIGJlIGNvbGxlY3RlZCBpbnRvIHRoZSBjb21wb25lbnRcbiAqIGNvbnN0cy4gVGhpcyBwaGFzZSBmaW5kcyB0aGUgY29uZmlnIG9wdGlvbnMsIGFuZCBjcmVhdGVzIHRoZSBjb3JyZXNwb25kaW5nIGNvbnN0IGFycmF5LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY29uZmlndXJlRGVmZXJJbnN0cnVjdGlvbnMoam9iOiBDb21wb25lbnRDb21waWxhdGlvbkpvYik6IHZvaWQge1xuICBmb3IgKGNvbnN0IHVuaXQgb2Ygam9iLnVuaXRzKSB7XG4gICAgZm9yIChjb25zdCBvcCBvZiB1bml0LmNyZWF0ZSkge1xuICAgICAgaWYgKG9wLmtpbmQgIT09IGlyLk9wS2luZC5EZWZlcikge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG9wLnBsYWNlaG9sZGVyTWluaW11bVRpbWUgIT09IG51bGwpIHtcbiAgICAgICAgb3AucGxhY2Vob2xkZXJDb25maWcgPSBuZXcgaXIuQ29uc3RDb2xsZWN0ZWRFeHByKFxuICAgICAgICAgIGxpdGVyYWxPckFycmF5TGl0ZXJhbChbb3AucGxhY2Vob2xkZXJNaW5pbXVtVGltZV0pLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKG9wLmxvYWRpbmdNaW5pbXVtVGltZSAhPT0gbnVsbCB8fCBvcC5sb2FkaW5nQWZ0ZXJUaW1lICE9PSBudWxsKSB7XG4gICAgICAgIG9wLmxvYWRpbmdDb25maWcgPSBuZXcgaXIuQ29uc3RDb2xsZWN0ZWRFeHByKFxuICAgICAgICAgIGxpdGVyYWxPckFycmF5TGl0ZXJhbChbb3AubG9hZGluZ01pbmltdW1UaW1lLCBvcC5sb2FkaW5nQWZ0ZXJUaW1lXSksXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0=