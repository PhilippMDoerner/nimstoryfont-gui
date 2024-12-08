/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import * as ir from '../../ir';
import { CompilationJobKind } from '../compilation';
function kindTest(kind) {
    return (op) => op.kind === kind;
}
function kindWithInterpolationTest(kind, interpolation) {
    return (op) => {
        return op.kind === kind && interpolation === op.expression instanceof ir.Interpolation;
    };
}
function basicListenerKindTest(op) {
    return ((op.kind === ir.OpKind.Listener && !(op.hostListener && op.isAnimationListener)) ||
        op.kind === ir.OpKind.TwoWayListener);
}
function nonInterpolationPropertyKindTest(op) {
    return ((op.kind === ir.OpKind.Property || op.kind === ir.OpKind.TwoWayProperty) &&
        !(op.expression instanceof ir.Interpolation));
}
/**
 * Defines the groups based on `OpKind` that ops will be divided into, for the various create
 * op kinds. Ops will be collected into groups, then optionally transformed, before recombining
 * the groups in the order defined here.
 */
const CREATE_ORDERING = [
    { test: (op) => op.kind === ir.OpKind.Listener && op.hostListener && op.isAnimationListener },
    { test: basicListenerKindTest },
];
/**
 * Defines the groups based on `OpKind` that ops will be divided into, for the various update
 * op kinds.
 */
const UPDATE_ORDERING = [
    { test: kindTest(ir.OpKind.StyleMap), transform: keepLast },
    { test: kindTest(ir.OpKind.ClassMap), transform: keepLast },
    { test: kindTest(ir.OpKind.StyleProp) },
    { test: kindTest(ir.OpKind.ClassProp) },
    { test: kindWithInterpolationTest(ir.OpKind.Attribute, true) },
    { test: kindWithInterpolationTest(ir.OpKind.Property, true) },
    { test: nonInterpolationPropertyKindTest },
    { test: kindWithInterpolationTest(ir.OpKind.Attribute, false) },
];
/**
 * Host bindings have their own update ordering.
 */
const UPDATE_HOST_ORDERING = [
    { test: kindWithInterpolationTest(ir.OpKind.HostProperty, true) },
    { test: kindWithInterpolationTest(ir.OpKind.HostProperty, false) },
    { test: kindTest(ir.OpKind.Attribute) },
    { test: kindTest(ir.OpKind.StyleMap), transform: keepLast },
    { test: kindTest(ir.OpKind.ClassMap), transform: keepLast },
    { test: kindTest(ir.OpKind.StyleProp) },
    { test: kindTest(ir.OpKind.ClassProp) },
];
/**
 * The set of all op kinds we handle in the reordering phase.
 */
const handledOpKinds = new Set([
    ir.OpKind.Listener,
    ir.OpKind.TwoWayListener,
    ir.OpKind.StyleMap,
    ir.OpKind.ClassMap,
    ir.OpKind.StyleProp,
    ir.OpKind.ClassProp,
    ir.OpKind.Property,
    ir.OpKind.TwoWayProperty,
    ir.OpKind.HostProperty,
    ir.OpKind.Attribute,
]);
/**
 * Many type of operations have ordering constraints that must be respected. For example, a
 * `ClassMap` instruction must be ordered after a `StyleMap` instruction, in order to have
 * predictable semantics that match TemplateDefinitionBuilder and don't break applications.
 */
export function orderOps(job) {
    for (const unit of job.units) {
        // First, we pull out ops that need to be ordered. Then, when we encounter an op that shouldn't
        // be reordered, put the ones we've pulled so far back in the correct order. Finally, if we
        // still have ops pulled at the end, put them back in the correct order.
        // Create mode:
        orderWithin(unit.create, CREATE_ORDERING);
        // Update mode:
        const ordering = unit.job.kind === CompilationJobKind.Host ? UPDATE_HOST_ORDERING : UPDATE_ORDERING;
        orderWithin(unit.update, ordering);
    }
}
/**
 * Order all the ops within the specified group.
 */
function orderWithin(opList, ordering) {
    let opsToOrder = [];
    // Only reorder ops that target the same xref; do not mix ops that target different xrefs.
    let firstTargetInGroup = null;
    for (const op of opList) {
        const currentTarget = ir.hasDependsOnSlotContextTrait(op) ? op.target : null;
        if (!handledOpKinds.has(op.kind) ||
            (currentTarget !== firstTargetInGroup &&
                firstTargetInGroup !== null &&
                currentTarget !== null)) {
            ir.OpList.insertBefore(reorder(opsToOrder, ordering), op);
            opsToOrder = [];
            firstTargetInGroup = null;
        }
        if (handledOpKinds.has(op.kind)) {
            opsToOrder.push(op);
            ir.OpList.remove(op);
            firstTargetInGroup = currentTarget ?? firstTargetInGroup;
        }
    }
    opList.push(reorder(opsToOrder, ordering));
}
/**
 * Reorders the given list of ops according to the ordering defined by `ORDERING`.
 */
function reorder(ops, ordering) {
    // Break the ops list into groups based on OpKind.
    const groups = Array.from(ordering, () => new Array());
    for (const op of ops) {
        const groupIndex = ordering.findIndex((o) => o.test(op));
        groups[groupIndex].push(op);
    }
    // Reassemble the groups into a single list, in the correct order.
    return groups.flatMap((group, i) => {
        const transform = ordering[i].transform;
        return transform ? transform(group) : group;
    });
}
/**
 * Keeps only the last op in a list of ops.
 */
function keepLast(ops) {
    return ops.slice(ops.length - 1);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21waWxlci9zcmMvdGVtcGxhdGUvcGlwZWxpbmUvc3JjL3BoYXNlcy9vcmRlcmluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEtBQUssRUFBRSxNQUFNLFVBQVUsQ0FBQztBQUMvQixPQUFPLEVBQUMsa0JBQWtCLEVBQXNCLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkUsU0FBUyxRQUFRLENBQUMsSUFBZTtJQUMvQixPQUFPLENBQUMsRUFBZSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxLQUFLLElBQUksQ0FBQztBQUMvQyxDQUFDO0FBRUQsU0FBUyx5QkFBeUIsQ0FDaEMsSUFBdUUsRUFDdkUsYUFBc0I7SUFFdEIsT0FBTyxDQUFDLEVBQWUsRUFBRSxFQUFFO1FBQ3pCLE9BQU8sRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLElBQUksYUFBYSxLQUFLLEVBQUUsQ0FBQyxVQUFVLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztJQUN6RixDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsU0FBUyxxQkFBcUIsQ0FBQyxFQUFlO0lBQzVDLE9BQU8sQ0FDTCxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssRUFBRSxDQUFDLE1BQU0sQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxZQUFZLElBQUksRUFBRSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDaEYsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FDckMsQ0FBQztBQUNKLENBQUM7QUFFRCxTQUFTLGdDQUFnQyxDQUFDLEVBQWU7SUFDdkQsT0FBTyxDQUNMLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxFQUFFLENBQUMsTUFBTSxDQUFDLFFBQVEsSUFBSSxFQUFFLENB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U0FBUyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7UUFDeEMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzlDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQUVEOztHQUVHO0FBQ0gsU0FBUyxRQUFRLENBQUksR0FBYTtJQUNoQyxPQUFPLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNuQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgKiBhcyBpciBmcm9tICcuLi8uLi9pcic7XG5pbXBvcnQge0NvbXBpbGF0aW9uSm9iS2luZCwgdHlwZSBDb21waWxhdGlvbkpvYn0gZnJvbSAnLi4vY29tcGlsYXRpb24nO1xuXG5mdW5jdGlvbiBraW5kVGVzdChraW5kOiBpci5PcEtpbmQpOiAob3A6IGlyLlVwZGF0ZU9wKSA9PiBib29sZWFuIHtcbiAgcmV0dXJuIChvcDogaXIuVXBkYXRlT3ApID0+IG9wLmtpbmQgPT09IGtpbmQ7XG59XG5cbmZ1bmN0aW9uIGtpbmRXaXRoSW50ZXJwb2xhdGlvblRlc3QoXG4gIGtpbmQ6IGlyLk9wS2luZC5BdHRyaWJ1dGUgfCBpci5PcEtpbmQuUHJvcGVydHkgfCBpci5PcEtpbmQuSG9zdFByb3BlcnR5LFxuICBpbnRlcnBvbGF0aW9uOiBib29sZWFuLFxuKTogKG9wOiBpci5VcGRhdGVPcCkgPT4gYm9vbGVhbiB7XG4gIHJldHVybiAob3A6IGlyLlVwZGF0ZU9wKSA9PiB7XG4gICAgcmV0dXJuIG9wLmtpbmQgPT09IGtpbmQgJiYgaW50ZXJwb2xhdGlvbiA9PT0gb3AuZXhwcmVzc2lvbiBpbnN0YW5jZW9mIGlyLkludGVycG9sYXRpb247XG4gIH07XG59XG5cbmZ1bmN0aW9uIGJhc2ljTGlzdGVuZXJLaW5kVGVzdChvcDogaXIuQ3JlYXRlT3ApOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAob3Aua2luZCA9PT0gaXIuT3BLaW5kLkxpc3RlbmVyICYmICEob3AuaG9zdExpc3RlbmVyICYmIG9wLmlzQW5pbWF0aW9uTGlzdGVuZXIpKSB8fFxuICAgIG9wLmtpbmQgPT09IGlyLk9wS2luZC5Ud29XYXlMaXN0ZW5lclxuICApO1xufVxuXG5mdW5jdGlvbiBub25JbnRlcnBvbGF0aW9uUHJvcGVydHlLaW5kVGVzdChvcDogaXIuVXBkYXRlT3ApOiBib29sZWFuIHtcbiAgcmV0dXJuIChcbiAgICAob3Aua2luZCA9PT0gaXIuT3BLaW5kLlByb3BlcnR5IHx8IG9wLmtpbmQgPT09IGlyLk9wS2luZC5Ud29XYXlQcm9wZXJ0eSkgJiZcbiAgICAhKG9wLmV4cHJlc3Npb24gaW5zdGFuY2VvZiBpci5JbnRlcnBvbGF0aW9uKVxuICApO1xufVxuXG5pbnRlcmZhY2UgUnVsZTxUIGV4dGVuZHMgaXIuQ3JlYXRlT3AgfCBpci5VcGRhdGVPcD4ge1xuICB0ZXN0OiAob3A6IFQpID0+IGJvb2xlYW47XG4gIHRyYW5zZm9ybT86IChvcHM6IEFycmF5PFQ+KSA9PiBBcnJheTxUPjtcbn1cblxuLyoqXG4gKiBEZWZpbmVzIHRoZSBncm91cHMgYmFzZWQgb24gYE9wS2luZGAgdGhhdCBvcHMgd2lsbCBiZSBkaXZpZGVkIGludG8sIGZvciB0aGUgdmFyaW91cyBjcmVhdGVcbiAqIG9wIGtpbmRzLiBPcHMgd2lsbCBiZSBjb2xsZWN0ZWQgaW50byBncm91cHMsIHRoZW4gb3B0aW9uYWxseSB0cmFuc2Zvcm1lZCwgYmVmb3JlIHJlY29tYmluaW5nXG4gKiB0aGUgZ3JvdXBzIGluIHRoZSBvcmRlciBkZWZpbmVkIGhlcmUuXG4gKi9cbmNvbnN0IENSRUFURV9PUkRFUklORzogQXJyYXk8UnVsZTxpci5DcmVhdGVPcD4+ID0gW1xuICB7dGVzdDogKG9wKSA9PiBvcC5raW5kID09PSBpci5PcEtpbmQuTGlzdGVuZXIgJiYgb3AuaG9zdExpc3RlbmVyICYmIG9wLmlzQW5pbWF0aW9uTGlzdGVuZXJ9LFxuICB7dGVzdDogYmFzaWNMaXN0ZW5lcktpbmRUZXN0fSxcbl07XG5cbi8qKlxuICogRGVmaW5lcyB0aGUgZ3JvdXBzIGJhc2VkIG9uIGBPcEtpbmRgIHRoYXQgb3BzIHdpbGwgYmUgZGl2aWRlZCBpbnRvLCBmb3IgdGhlIHZhcmlvdXMgdXBkYXRlXG4gKiBvcCBraW5kcy5cbiAqL1xuY29uc3QgVVBEQVRFX09SREVSSU5HOiBBcnJheTxSdWxlPGlyLlVwZGF0ZU9wPj4gPSBbXG4gIHt0ZXN0OiBraW5kVGVzdChpci5PcEtpbmQuU3R5bGVNYXApLCB0cmFuc2Zvcm06IGtlZXBMYXN0fSxcbiAge3Rlc3Q6IGtpbmRUZXN0KGlyLk9wS2luZC5DbGFzc01hcCksIHRyYW5zZm9ybToga2VlcExhc3R9LFxuICB7dGVzdDoga2luZFRlc3QoaXIuT3BLaW5kLlN0eWxlUHJvcCl9LFxuICB7dGVzdDoga2luZFRlc3QoaXIuT3BLaW5kLkNsYXNzUHJvcCl9LFxuICB7dGVzdDoga2luZFdpdGhJbnRlcnBvbGF0aW9uVGVzdChpci5PcEtpbmQuQXR0cmlidXRlLCB0cnVlKX0sXG4gIHt0ZXN0OiBraW5kV2l0aEludGVycG9sYXRpb25UZXN0KGlyLk9wS2luZC5Qcm9wZXJ0eSwgdHJ1ZSl9LFxuICB7dGVzdDogbm9uSW50ZXJwb2xhdGlvblByb3BlcnR5S2luZFRlc3R9LFxuICB7dGVzdDoga2luZFdpdGhJbnRlcnBvbGF0aW9uVGVzdChpci5PcEtpbmQuQXR0cmlidXRlLCBmYWxzZSl9LFxuXTtcblxuLyoqXG4gKiBIb3N0IGJpbmRpbmdzIGhhdmUgdGhlaXIgb3duIHVwZGF0ZSBvcmRlcmluZy5cbiAqL1xuY29uc3QgVVBEQVRFX0hPU1RfT1JERVJJTkc6IEFycmF5PFJ1bGU8aXIuVXBkYXRlT3A+PiA9IFtcbiAge3Rlc3Q6IGtpbmRXaXRoSW50ZXJwb2xhdGlvblRlc3QoaXIuT3BLaW5kLkhvc3RQcm9wZXJ0eSwgdHJ1ZSl9LFxuICB7dGVzdDoga2luZFdpdGhJbnRlcnBvbGF0aW9uVGVzdChpci5PcEtpbmQuSG9zdFByb3BlcnR5LCBmYWxzZSl9LFxuICB7dGVzdDoga2luZFRlc3QoaXIuT3BLaW5kLkF0dHJpYnV0ZSl9LFxuICB7dGVzdDoga2luZFRlc3QoaXIuT3BLaW5kLlN0eWxlTWFwKSwgdHJhbnNmb3JtOiBrZWVwTGFzdH0sXG4gIHt0ZXN0OiBraW5kVGVzdChpci5PcEtpbmQuQ2xhc3NNYXApLCB0cmFuc2Zvcm06IGtlZXBMYXN0fSxcbiAge3Rlc3Q6IGtpbmRUZXN0KGlyLk9wS2luZC5TdHlsZVByb3ApfSxcbiAge3Rlc3Q6IGtpbmRUZXN0KGlyLk9wS2luZC5DbGFzc1Byb3ApfSxcbl07XG5cbi8qKlxuICogVGhlIHNldCBvZiBhbGwgb3Aga2luZHMgd2UgaGFuZGxlIGluIHRoZSByZW9yZGVyaW5nIHBoYXNlLlxuICovXG5jb25zdCBoYW5kbGVkT3BLaW5kcyA9IG5ldyBTZXQoW1xuICBpci5PcEtpbmQuTGlzdGVuZXIsXG4gIGlyLk9wS2luZC5Ud29XYXlMaXN0ZW5lcixcbiAgaXIuT3BLaW5kLlN0eWxlTWFwLFxuICBpci5PcEtpbmQuQ2xhc3NNYXAsXG4gIGlyLk9wS2luZC5TdHlsZVByb3AsXG4gIGlyLk9wS2luZC5DbGFzc1Byb3AsXG4gIGlyLk9wS2luZC5Qcm9wZXJ0eSxcbiAgaXIuT3BLaW5kLlR3b1dheVByb3BlcnR5LFxuICBpci5PcEtpbmQuSG9zdFByb3BlcnR5LFxuICBpci5PcEtpbmQuQXR0cmlidXRlLFxuXSk7XG5cbi8qKlxuICogTWFueSB0eXBlIG9mIG9wZXJhdGlvbnMgaGF2ZSBvcmRlcmluZyBjb25zdHJhaW50cyB0aGF0IG11c3QgYmUgcmVzcGVjdGVkLiBGb3IgZXhhbXBsZSwgYVxuICogYENsYXNzTWFwYCBpbnN0cnVjdGlvbiBtdXN0IGJlIG9yZGVyZWQgYWZ0ZXIgYSBgU3R5bGVNYXBgIGluc3RydWN0aW9uLCBpbiBvcmRlciB0byBoYXZlXG4gKiBwcmVkaWN0YWJsZSBzZW1hbnRpY3MgdGhhdCBtYXRjaCBUZW1wbGF0ZURlZmluaXRpb25CdWlsZGVyIGFuZCBkb24ndCBicmVhayBhcHBsaWNhdGlvbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBvcmRlck9wcyhqb2I6IENvbXBpbGF0aW9uSm9iKSB7XG4gIGZvciAoY29uc3QgdW5pdCBvZiBqb2IudW5pdHMpIHtcbiAgICAvLyBGaXJzdCwgd2UgcHVsbCBvdXQgb3BzIHRoYXQgbmVlZCB0byBiZSBvcmRlcmVkLiBUaGVuLCB3aGVuIHdlIGVuY291bnRlciBhbiBvcCB0aGF0IHNob3VsZG4ndFxuICAgIC8vIGJlIHJlb3JkZXJlZCwgcHV0IHRoZSBvbmVzIHdlJ3ZlIHB1bGxlZCBzbyBmYXIgYmFjayBpbiB0aGUgY29ycmVjdCBvcmRlci4gRmluYWxseSwgaWYgd2VcbiAgICAvLyBzdGlsbCBoYXZlIG9wcyBwdWxsZWQgYXQgdGhlIGVuZCwgcHV0IHRoZW0gYmFjayBpbiB0aGUgY29ycmVjdCBvcmRlci5cblxuICAgIC8vIENyZWF0ZSBtb2RlOlxuICAgIG9yZGVyV2l0aGluKHVuaXQuY3JlYXRlLCBDUkVBVEVfT1JERVJJTkcgYXMgQXJyYXk8UnVsZTxpci5DcmVhdGVPcCB8IGlyLlVwZGF0ZU9wPj4pO1xuXG4gICAgLy8gVXBkYXRlIG1vZGU6XG4gICAgY29uc3Qgb3JkZXJpbmcgPVxuICAgICAgdW5pdC5qb2Iua2luZCA9PT0gQ29tcGlsYXRpb25Kb2JLaW5kLkhvc3QgPyBVUERBVEVfSE9TVF9PUkRFUklORyA6IFVQREFURV9PUkRFUklORztcbiAgICBvcmRlcldpdGhpbih1bml0LnVwZGF0ZSwgb3JkZXJpbmcgYXMgQXJyYXk8UnVsZTxpci5DcmVhdGVPcCB8IGlyLlVwZGF0ZU9wPj4pO1xuICB9XG59XG5cbi8qKlxuICogT3JkZXIgYWxsIHRoZSBvcHMgd2l0aGluIHRoZSBzcGVjaWZpZWQgZ3JvdXAuXG4gKi9cbmZ1bmN0aW9uIG9yZGVyV2l0aGluKFxuICBvcExpc3Q6IGlyLk9wTGlzdDxpci5DcmVhdGVPcCB8IGlyLlVwZGF0ZU9wPixcbiAgb3JkZXJpbmc6IEFycmF5PFJ1bGU8aXIuQ3JlYXRlT3AgfCBpci5VcGRhdGVPcD4+LFxuKSB7XG4gIGxldCBvcHNUb09yZGVyOiBBcnJheTxpci5DcmVhdGVPcCB8IGlyLlVwZGF0ZU9wPiA9IFtdO1xuICAvLyBPbmx5IHJlb3JkZXIgb3BzIHRoYXQgdGFyZ2V0IHRoZSBzYW1lIHhyZWY7IGRvIG5vdCBtaXggb3BzIHRoYXQgdGFyZ2V0IGRpZmZlcmVudCB4cmVmcy5cbiAgbGV0IGZpcnN0VGFyZ2V0SW5Hcm91cDogaXIuWHJlZklkIHwgbnVsbCA9IG51bGw7XG4gIGZvciAoY29uc3Qgb3Agb2Ygb3BMaXN0KSB7XG4gICAgY29uc3QgY3VycmVudFRhcmdldCA9IGlyLmhhc0RlcGVuZHNPblNsb3RDb250ZXh0VHJhaXQob3ApID8gb3AudGFyZ2V0IDogbnVsbDtcbiAgICBpZiAoXG4gICAgICAhaGFuZGxlZE9wS2luZHMuaGFzKG9wLmtpbmQpIHx8XG4gICAgICAoY3VycmVudFRhcmdldCAhPT0gZmlyc3RUYXJnZXRJbkdyb3VwICYmXG4gICAgICAgIGZpcnN0VGFyZ2V0SW5Hcm91cCAhPT0gbnVsbCAmJlxuICAgICAgICBjdXJyZW50VGFyZ2V0ICE9PSBudWxsKVxuICAgICkge1xuICAgICAgaXIuT3BMaXN0Lmluc2VydEJlZm9yZShyZW9yZGVyKG9wc1RvT3JkZXIsIG9yZGVyaW5nKSwgb3ApO1xuICAgICAgb3BzVG9PcmRlciA9IFtdO1xuICAgICAgZmlyc3RUYXJnZXRJbkdyb3VwID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGhhbmRsZWRPcEtpbmRzLmhhcyhvcC5raW5kKSkge1xuICAgICAgb3BzVG9PcmRlci5wdXNoKG9wKTtcbiAgICAgIGlyLk9wTGlzdC5yZW1vdmUob3ApO1xuICAgICAgZmlyc3RUYXJnZXRJbkdyb3VwID0gY3VycmVudFRhcmdldCA/PyBmaXJzdFRhcmdldEluR3JvdXA7XG4gICAgfVxuICB9XG4gIG9wTGlzdC5wdXNoKHJlb3JkZXIob3BzVG9PcmRlciwgb3JkZXJpbmcpKTtcbn1cblxuLyoqXG4gKiBSZW9yZGVycyB0aGUgZ2l2ZW4gbGlzdCBvZiBvcHMgYWNjb3JkaW5nIHRvIHRoZSBvcmRlcmluZyBkZWZpbmVkIGJ5IGBPUkRFUklOR2AuXG4gKi9cbmZ1bmN0aW9uIHJlb3JkZXI8VCBleHRlbmRzIGlyLkNyZWF0ZU9wIHwgaXIuVXBkYXRlT3A+KFxuICBvcHM6IEFycmF5PFQ+LFxuICBvcmRlcmluZzogQXJyYXk8UnVsZTxUPj4sXG4pOiBBcnJheTxUPiB7XG4gIC8vIEJyZWFrIHRoZSBvcHMgbGlzdCBpbnRvIGdyb3VwcyBiYXNlZCBvbiBPcEtpbmQuXG4gIGNvbnN0IGdyb3VwcyA9IEFycmF5LmZyb20ob3JkZXJpbmcsICgpID0+IG5ldyBBcnJheTxUPigpKTtcbiAgZm9yIChjb25zdCBvcCBvZiBvcHMpIHtcbiAgICBjb25zdCBncm91cEluZGV4ID0gb3JkZXJpbmcuZmluZEluZGV4KChvKSA9PiBvLnRlc3Qob3ApKTtcbiAgICBncm91cHNbZ3JvdXBJbmRleF0ucHVzaChvcCk7XG4gIH1cbiAgLy8gUmVhc3NlbWJsZSB0aGUgZ3JvdXBzIGludG8gYSBzaW5nbGUgbGlzdCwgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuXG4gIHJldHVybiBncm91cHMuZmxhdE1hcCgoZ3JvdXAsIGkpID0+IHtcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBvcmRlcmluZ1tpXS50cmFuc2Zvcm07XG4gICAgcmV0dXJuIHRyYW5zZm9ybSA/IHRyYW5zZm9ybShncm91cCkgOiBncm91cDtcbiAgfSk7XG59XG5cbi8qKlxuICogS2VlcHMgb25seSB0aGUgbGFzdCBvcCBpbiBhIGxpc3Qgb2Ygb3BzLlxuICovXG5mdW5jdGlvbiBrZWVwTGFzdDxUPihvcHM6IEFycmF5PFQ+KSB7XG4gIHJldHVybiBvcHMuc2xpY2Uob3BzLmxlbmd0aCAtIDEpO1xufVxuIl19