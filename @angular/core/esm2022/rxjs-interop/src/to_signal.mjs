/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { assertInInjectionContext, assertNotInReactiveContext, computed, DestroyRef, inject, signal, ɵRuntimeError, } from '@angular/core';
/**
 * Get the current value of an `Observable` as a reactive `Signal`.
 *
 * `toSignal` returns a `Signal` which provides synchronous reactive access to values produced
 * by the given `Observable`, by subscribing to that `Observable`. The returned `Signal` will always
 * have the most recent value emitted by the subscription, and will throw an error if the
 * `Observable` errors.
 *
 * With `requireSync` set to `true`, `toSignal` will assert that the `Observable` produces a value
 * immediately upon subscription. No `initialValue` is needed in this case, and the returned signal
 * does not include an `undefined` type.
 *
 * By default, the subscription will be automatically cleaned up when the current [injection
 * context](guide/di/dependency-injection-context) is destroyed. For example, when `toSignal` is
 * called during the construction of a component, the subscription will be cleaned up when the
 * component is destroyed. If an injection context is not available, an explicit `Injector` can be
 * passed instead.
 *
 * If the subscription should persist until the `Observable` itself completes, the `manualCleanup`
 * option can be specified instead, which disables the automatic subscription teardown. No injection
 * context is needed in this configuration as well.
 *
 * @developerPreview
 */
export function toSignal(source, options) {
    ngDevMode &&
        assertNotInReactiveContext(toSignal, 'Invoking `toSignal` causes new subscriptions every time. ' +
            'Consider moving `toSignal` outside of the reactive context and read the signal value where needed.');
    const requiresCleanup = !options?.manualCleanup;
    requiresCleanup && !options?.injector && assertInInjectionContext(toSignal);
    const cleanupRef = requiresCleanup
        ? (options?.injector?.get(DestroyRef) ?? inject(DestroyRef))
        : null;
    const equal = makeToSignalEqual(options?.equal);
    // Note: T is the Observable value type, and U is the initial value type. They don't have to be
    // the same - the returned signal gives values of type `T`.
    let state;
    if (options?.requireSync) {
        // Initially the signal is in a `NoValue` state.
        state = signal({ kind: 0 /* StateKind.NoValue */ }, { equal });
    }
    else {
        // If an initial value was passed, use it. Otherwise, use `undefined` as the initial value.
        state = signal({ kind: 1 /* StateKind.Value */, value: options?.initialValue }, { equal });
    }
    // Note: This code cannot run inside a reactive context (see assertion above). If we'd support
    // this, we would subscribe to the observable outside of the current reactive context, avoiding
    // that side-effect signal reads/writes are attribute to the current consumer. The current
    // consumer only needs to be notified when the `state` signal changes through the observable
    // subscription. Additional context (related to async pipe):
    // https://github.com/angular/angular/pull/50522.
    const sub = source.subscribe({
        next: (value) => state.set({ kind: 1 /* StateKind.Value */, value }),
        error: (error) => {
            if (options?.rejectErrors) {
                // Kick the error back to RxJS. It will be caught and rethrown in a macrotask, which causes
                // the error to end up as an uncaught exception.
                throw error;
            }
            state.set({ kind: 2 /* StateKind.Error */, error });
        },
        // Completion of the Observable is meaningless to the signal. Signals don't have a concept of
        // "complete".
    });
    if (options?.requireSync && state().kind === 0 /* StateKind.NoValue */) {
        throw new ɵRuntimeError(601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) &&
            '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
    }
    // Unsubscribe when the current context is destroyed, if requested.
    cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
    // The actual returned signal is a `computed` of the `State` signal, which maps the various states
    // to either values or errors.
    return computed(() => {
        const current = state();
        switch (current.kind) {
            case 1 /* StateKind.Value */:
                return current.value;
            case 2 /* StateKind.Error */:
                throw current.error;
            case 0 /* StateKind.NoValue */:
                // This shouldn't really happen because the error is thrown on creation.
                throw new ɵRuntimeError(601 /* ɵRuntimeErrorCode.REQUIRE_SYNC_WITHOUT_SYNC_EMIT */, (typeof ngDevMode === 'undefined' || ngDevMode) &&
                    '`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.');
        }
    }, { equal: options?.equal });
}
function makeToSignalEqual(userEquality = Object.is) {
    return (a, b) => a.kind === 1 /* StateKind.Value */ && b.kind === 1 /* StateKind.Value */ && userEquality(a.value, b.value);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9fc2lnbmFsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9yeGpzLWludGVyb3Avc3JjL3RvX3NpZ25hbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQ0wsd0JBQXdCLEVBQ3hCLDBCQUEwQixFQUMxQixRQUFRLEVBQ1IsVUFBVSxFQUNWLE1BQU0sRUFFTixNQUFNLEVBR04sYUFBYSxHQUVkLE1BQU0sZUFBZSxDQUFDO0FBd0Z2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0F1Qkc7QUFDSCxNQUFNLFVBQVUsUUFBUSxDQUN0QixNQUF1QyxFQUN2QyxPQUFxRDtJQUVyRCxTQUFTO1FBQ1AsMEJBQTBCLENBQ3hCLFFBQVEsRUFDUiwyREFBMkQ7WUFDekQsb0dBQW9HLENBQ3ZHLENBQUM7SUFFSixNQUFNLGVBQWUsR0FBRyxDQUFDLE9BQU8sRUFBRSxhQUFhLENBQUM7SUFDaEQsZUFBZSxJQUFJLENBQUMsT0FBTyxFQUFFLFFBQVEsSUFBSSx3QkFBd0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1RSxNQUFNLFVBQVUsR0FBRyxlQUFlO1FBQ2hDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsR0FBRyxDQUFDLFVBQVUsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUM1RCxDQUFDLENBQUMsSUFBSSxDQUFDO0lBRVQsTUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUMsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBRWhELCtGQUErRjtJQUMvRiwyREFBMkQ7SUFDM0QsSUFBSSxLQUFtQyxDQUFDO0lBQ3hDLElBQUksT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ3pCLGdEQUFnRDtRQUNoRCxLQUFLLEdBQUcsTUFBTSxDQUFDLEVBQUMsSUFBSSwyQkFBbUIsRUFBQyxFQUFFLEVBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQztJQUNyRCxDQUFDO1NBQU0sQ0FBQztRQUNOLDJGQUEyRjtRQUMzRixLQUFLLEdBQUcsTUFBTSxDQUNaLEVBQUMsSUFBSSx5QkFBaUIsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQWlCLEVBQUMsRUFDMUQsRUFBQyxLQUFLLEVBQUMsQ0FDUixDQUFDO0lBQ0osQ0FBQztJQUVELDhGQUE4RjtJQUM5RiwrRkFBK0Y7SUFDL0YsMEZBQTBGO0lBQzFGLDRGQUE0RjtJQUM1Riw0REFBNEQ7SUFDNUQsaURBQWlEO0lBQ2pELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7UUFDM0IsSUFBSSxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUMsSUFBSSx5QkFBaUIsRUFBRSxLQUFLLEVBQUMsQ0FBQztRQUMxRCxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNmLElBQUksT0FBTyxFQUFFLFlBQVksRUFBRSxDQUFDO2dCQUMxQiwyRkFBMkY7Z0JBQzNGLGdEQUFnRDtnQkFDaEQsTUFBTSxLQUFLLENBQUM7WUFDZCxDQUFDO1lBQ0QsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFDLElBQUkseUJBQWlCLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUM1QyxDQUFDO1FBQ0QsNkZBQTZGO1FBQzdGLGNBQWM7S0FDZixDQUFDLENBQUM7SUFFSCxJQUFJLE9BQU8sRUFBRSxXQUFXLElBQUksS0FBSyxFQUFFLENBQUMsSUFBSSw4QkFBc0IsRUFBRSxDQUFDO1FBQy9ELE1BQU0sSUFBSSxhQUFhLDZEQUVyQixDQUFDLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUM7WUFDN0MscUZBQXFGLENBQ3hGLENBQUM7SUFDSixDQUFDO0lBRUQsbUVBQW1FO0lBQ25FLFVBQVUsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUVqRCxrR0FBa0c7SUFDbEcsOEJBQThCO0lBQzlCLE9BQU8sUUFBUSxDQUNiLEdBQUcsRUFBRTtRQUNILE1BQU0sT0FBTyxHQUFHLEtBQUssRUFBRSxDQUFDO1FBQ3hCLFFBQVEsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3JCO2dCQUNFLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztZQUN2QjtnQkFDRSxNQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUM7WUFDdEI7Z0JBQ0Usd0VBQXdFO2dCQUN4RSxNQUFNLElBQUksYUFBYSw2REFFckIsQ0FBQyxPQUFPLFNBQVMsS0FBSyxXQUFXLElBQUksU0FBUyxDQUFDO29CQUM3QyxxRkFBcUYsQ0FDeEYsQ0FBQztRQUNOLENBQUM7SUFDSCxDQUFDLEVBQ0QsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUN4QixDQUFDO0FBQ0osQ0FBQztBQUVELFNBQVMsaUJBQWlCLENBQ3hCLGVBQW1DLE1BQU0sQ0FBQyxFQUFFO0lBRTVDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FDZCxDQUFDLENBQUMsSUFBSSw0QkFBb0IsSUFBSSxDQUFDLENBQUMsSUFBSSw0QkFBb0IsSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDL0YsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtcbiAgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0LFxuICBhc3NlcnROb3RJblJlYWN0aXZlQ29udGV4dCxcbiAgY29tcHV0ZWQsXG4gIERlc3Ryb3lSZWYsXG4gIGluamVjdCxcbiAgSW5qZWN0b3IsXG4gIHNpZ25hbCxcbiAgU2lnbmFsLFxuICBXcml0YWJsZVNpZ25hbCxcbiAgybVSdW50aW1lRXJyb3IsXG4gIMm1UnVudGltZUVycm9yQ29kZSxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1ZhbHVlRXF1YWxpdHlGbn0gZnJvbSAnQGFuZ3VsYXIvY29yZS9wcmltaXRpdmVzL3NpZ25hbHMnO1xuaW1wb3J0IHtPYnNlcnZhYmxlLCBTdWJzY3JpYmFibGV9IGZyb20gJ3J4anMnO1xuXG4vKipcbiAqIE9wdGlvbnMgZm9yIGB0b1NpZ25hbGAuXG4gKlxuICogQHB1YmxpY0FwaVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFRvU2lnbmFsT3B0aW9uczxUPiB7XG4gIC8qKlxuICAgKiBJbml0aWFsIHZhbHVlIGZvciB0aGUgc2lnbmFsIHByb2R1Y2VkIGJ5IGB0b1NpZ25hbGAuXG4gICAqXG4gICAqIFRoaXMgd2lsbCBiZSB0aGUgdmFsdWUgb2YgdGhlIHNpZ25hbCB1bnRpbCB0aGUgb2JzZXJ2YWJsZSBlbWl0cyBpdHMgZmlyc3QgdmFsdWUuXG4gICAqL1xuICBpbml0aWFsVmFsdWU/OiB1bmtub3duO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHJlcXVpcmUgdGhhdCB0aGUgb2JzZXJ2YWJsZSBlbWl0cyBzeW5jaHJvbm91c2x5IHdoZW4gYHRvU2lnbmFsYCBzdWJzY3JpYmVzLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIGB0cnVlYCwgYHRvU2lnbmFsYCB3aWxsIGFzc2VydCB0aGF0IHRoZSBvYnNlcnZhYmxlIHByb2R1Y2VzIGEgdmFsdWUgaW1tZWRpYXRlbHkgdXBvblxuICAgKiBzdWJzY3JpcHRpb24uIFNldHRpbmcgdGhpcyBvcHRpb24gcmVtb3ZlcyB0aGUgbmVlZCB0byBlaXRoZXIgZGVhbCB3aXRoIGB1bmRlZmluZWRgIGluIHRoZVxuICAgKiBzaWduYWwgdHlwZSBvciBwcm92aWRlIGFuIGBpbml0aWFsVmFsdWVgLCBhdCB0aGUgY29zdCBvZiBhIHJ1bnRpbWUgZXJyb3IgaWYgdGhpcyByZXF1aXJlbWVudCBpc1xuICAgKiBub3QgbWV0LlxuICAgKi9cbiAgcmVxdWlyZVN5bmM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBgSW5qZWN0b3JgIHdoaWNoIHdpbGwgcHJvdmlkZSB0aGUgYERlc3Ryb3lSZWZgIHVzZWQgdG8gY2xlYW4gdXAgdGhlIE9ic2VydmFibGUgc3Vic2NyaXB0aW9uLlxuICAgKlxuICAgKiBJZiB0aGlzIGlzIG5vdCBwcm92aWRlZCwgYSBgRGVzdHJveVJlZmAgd2lsbCBiZSByZXRyaWV2ZWQgZnJvbSB0aGUgY3VycmVudCBbaW5qZWN0aW9uXG4gICAqIGNvbnRleHRdKGd1aWRlL2RpL2RlcGVuZGVuY3ktaW5qZWN0aW9uLWNvbnRleHQpLCB1bmxlc3MgbWFudWFsIGNsZWFudXAgaXMgcmVxdWVzdGVkLlxuICAgKi9cbiAgaW5qZWN0b3I/OiBJbmplY3RvcjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgc3Vic2NyaXB0aW9uIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IGNsZWFuZWQgdXAgKHZpYSBgRGVzdHJveVJlZmApIHdoZW5cbiAgICogYHRvU2lnbmFsYCdzIGNyZWF0aW9uIGNvbnRleHQgaXMgZGVzdHJveWVkLlxuICAgKlxuICAgKiBJZiBtYW51YWwgY2xlYW51cCBpcyBlbmFibGVkLCB0aGVuIGBEZXN0cm95UmVmYCBpcyBub3QgdXNlZCwgYW5kIHRoZSBzdWJzY3JpcHRpb24gd2lsbCBwZXJzaXN0XG4gICAqIHVudGlsIHRoZSBgT2JzZXJ2YWJsZWAgaXRzZWxmIGNvbXBsZXRlcy5cbiAgICovXG4gIG1hbnVhbENsZWFudXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIGB0b1NpZ25hbGAgc2hvdWxkIHRocm93IGVycm9ycyBmcm9tIHRoZSBPYnNlcnZhYmxlIGVycm9yIGNoYW5uZWwgYmFjayB0byBSeEpTLCB3aGVyZVxuICAgKiB0aGV5J2xsIGJlIHByb2Nlc3NlZCBhcyB1bmNhdWdodCBleGNlcHRpb25zLlxuICAgKlxuICAgKiBJbiBwcmFjdGljZSwgdGhpcyBtZWFucyB0aGF0IHRoZSBzaWduYWwgcmV0dXJuZWQgYnkgYHRvU2lnbmFsYCB3aWxsIGtlZXAgcmV0dXJuaW5nIHRoZSBsYXN0XG4gICAqIGdvb2QgdmFsdWUgZm9yZXZlciwgYXMgT2JzZXJ2YWJsZXMgd2hpY2ggZXJyb3IgcHJvZHVjZSBubyBmdXJ0aGVyIHZhbHVlcy4gVGhpcyBvcHRpb24gZW11bGF0ZXNcbiAgICogdGhlIGJlaGF2aW9yIG9mIHRoZSBgYXN5bmNgIHBpcGUuXG4gICAqL1xuICByZWplY3RFcnJvcnM/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIGNvbXBhcmlzb24gZnVuY3Rpb24gd2hpY2ggZGVmaW5lcyBlcXVhbGl0eSBmb3IgdmFsdWVzIGVtaXR0ZWQgYnkgdGhlIG9ic2VydmFibGUuXG4gICAqXG4gICAqIEVxdWFsaXR5IGNvbXBhcmlzb25zIGFyZSBleGVjdXRlZCBhZ2FpbnN0IHRoZSBpbml0aWFsIHZhbHVlIGlmIG9uZSBpcyBwcm92aWRlZC5cbiAgICovXG4gIGVxdWFsPzogVmFsdWVFcXVhbGl0eUZuPFQ+O1xufVxuXG4vLyBCYXNlIGNhc2U6IG5vIG9wdGlvbnMgLT4gYHVuZGVmaW5lZGAgaW4gdGhlIHJlc3VsdCB0eXBlLlxuZXhwb3J0IGZ1bmN0aW9uIHRvU2lnbmFsPFQ+KHNvdXJjZTogT2JzZXJ2YWJsZTxUPiB8IFN1YnNjcmliYWJsZTxUPik6IFNpZ25hbDxUIHwgdW5kZWZpbmVkPjtcbi8vIE9wdGlvbnMgd2l0aCBgdW5kZWZpbmVkYCBpbml0aWFsIHZhbHVlIGFuZCBubyBgcmVxdWlyZWRTeW5jYCAtPiBgdW5kZWZpbmVkYC5cbmV4cG9ydCBmdW5jdGlvbiB0b1NpZ25hbDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPFQ+IHwgU3Vic2NyaWJhYmxlPFQ+LFxuICBvcHRpb25zOiBOb0luZmVyPFRvU2lnbmFsT3B0aW9uczxUIHwgdW5kZWZpbmVkPj4gJiB7XG4gICAgaW5pdGlhbFZhbHVlPzogdW5kZWZpbmVkO1xuICAgIHJlcXVpcmVTeW5jPzogZmFsc2U7XG4gIH0sXG4pOiBTaWduYWw8VCB8IHVuZGVmaW5lZD47XG4vLyBPcHRpb25zIHdpdGggYG51bGxgIGluaXRpYWwgdmFsdWUgLT4gYG51bGxgLlxuZXhwb3J0IGZ1bmN0aW9uIHRvU2lnbmFsPFQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8VD4gfCBTdWJzY3JpYmFibGU8VD4sXG4gIG9wdGlvbnM6IE5vSW5mZXI8VG9TaWduYWxPcHRpb25zPFQgfCBudWxsPj4gJiB7aW5pdGlhbFZhbHVlPzogbnVsbDsgcmVxdWlyZVN5bmM/OiBmYWxzZX0sXG4pOiBTaWduYWw8VCB8IG51bGw+O1xuLy8gT3B0aW9ucyB3aXRoIGB1bmRlZmluZWRgIGluaXRpYWwgdmFsdWUgYW5kIGByZXF1aXJlZFN5bmNgIC0+IHN0cmljdCByZXN1bHQgdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiB0b1NpZ25hbDxUPihcbiAgc291cmNlOiBPYnNlcnZhYmxlPFQ+IHwgU3Vic2NyaWJhYmxlPFQ+LFxuICBvcHRpb25zOiBOb0luZmVyPFRvU2lnbmFsT3B0aW9uczxUPj4gJiB7aW5pdGlhbFZhbHVlPzogdW5kZWZpbmVkOyByZXF1aXJlU3luYzogdHJ1ZX0sXG4pOiBTaWduYWw8VD47XG4vLyBPcHRpb25zIHdpdGggYSBtb3JlIHNwZWNpZmljIGluaXRpYWwgdmFsdWUgdHlwZS5cbmV4cG9ydCBmdW5jdGlvbiB0b1NpZ25hbDxULCBjb25zdCBVIGV4dGVuZHMgVD4oXG4gIHNvdXJjZTogT2JzZXJ2YWJsZTxUPiB8IFN1YnNjcmliYWJsZTxUPixcbiAgb3B0aW9uczogTm9JbmZlcjxUb1NpZ25hbE9wdGlvbnM8VCB8IFU+PiAmIHtpbml0aWFsVmFsdWU6IFU7IHJlcXVpcmVTeW5jPzogZmFsc2V9LFxuKTogU2lnbmFsPFQgfCBVPjtcblxuLyoqXG4gKiBHZXQgdGhlIGN1cnJlbnQgdmFsdWUgb2YgYW4gYE9ic2VydmFibGVgIGFzIGEgcmVhY3RpdmUgYFNpZ25hbGAuXG4gKlxuICogYHRvU2lnbmFsYCByZXR1cm5zIGEgYFNpZ25hbGAgd2hpY2ggcHJvdmlkZXMgc3luY2hyb25vdXMgcmVhY3RpdmUgYWNjZXNzIHRvIHZhbHVlcyBwcm9kdWNlZFxuICogYnkgdGhlIGdpdmVuIGBPYnNlcnZhYmxlYCwgYnkgc3Vic2NyaWJpbmcgdG8gdGhhdCBgT2JzZXJ2YWJsZWAuIFRoZSByZXR1cm5lZCBgU2lnbmFsYCB3aWxsIGFsd2F5c1xuICogaGF2ZSB0aGUgbW9zdCByZWNlbnQgdmFsdWUgZW1pdHRlZCBieSB0aGUgc3Vic2NyaXB0aW9uLCBhbmQgd2lsbCB0aHJvdyBhbiBlcnJvciBpZiB0aGVcbiAqIGBPYnNlcnZhYmxlYCBlcnJvcnMuXG4gKlxuICogV2l0aCBgcmVxdWlyZVN5bmNgIHNldCB0byBgdHJ1ZWAsIGB0b1NpZ25hbGAgd2lsbCBhc3NlcnQgdGhhdCB0aGUgYE9ic2VydmFibGVgIHByb2R1Y2VzIGEgdmFsdWVcbiAqIGltbWVkaWF0ZWx5IHVwb24gc3Vic2NyaXB0aW9uLiBObyBgaW5pdGlhbFZhbHVlYCBpcyBuZWVkZWQgaW4gdGhpcyBjYXNlLCBhbmQgdGhlIHJldHVybmVkIHNpZ25hbFxuICogZG9lcyBub3QgaW5jbHVkZSBhbiBgdW5kZWZpbmVkYCB0eXBlLlxuICpcbiAqIEJ5IGRlZmF1bHQsIHRoZSBzdWJzY3JpcHRpb24gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGNsZWFuZWQgdXAgd2hlbiB0aGUgY3VycmVudCBbaW5qZWN0aW9uXG4gKiBjb250ZXh0XShndWlkZS9kaS9kZXBlbmRlbmN5LWluamVjdGlvbi1jb250ZXh0KSBpcyBkZXN0cm95ZWQuIEZvciBleGFtcGxlLCB3aGVuIGB0b1NpZ25hbGAgaXNcbiAqIGNhbGxlZCBkdXJpbmcgdGhlIGNvbnN0cnVjdGlvbiBvZiBhIGNvbXBvbmVudCwgdGhlIHN1YnNjcmlwdGlvbiB3aWxsIGJlIGNsZWFuZWQgdXAgd2hlbiB0aGVcbiAqIGNvbXBvbmVudCBpcyBkZXN0cm95ZWQuIElmIGFuIGluamVjdGlvbiBjb250ZXh0IGlzIG5vdCBhdmFpbGFibGUsIGFuIGV4cGxpY2l0IGBJbmplY3RvcmAgY2FuIGJlXG4gKiBwYXNzZWQgaW5zdGVhZC5cbiAqXG4gKiBJZiB0aGUgc3Vic2NyaXB0aW9uIHNob3VsZCBwZXJzaXN0IHVudGlsIHRoZSBgT2JzZXJ2YWJsZWAgaXRzZWxmIGNvbXBsZXRlcywgdGhlIGBtYW51YWxDbGVhbnVwYFxuICogb3B0aW9uIGNhbiBiZSBzcGVjaWZpZWQgaW5zdGVhZCwgd2hpY2ggZGlzYWJsZXMgdGhlIGF1dG9tYXRpYyBzdWJzY3JpcHRpb24gdGVhcmRvd24uIE5vIGluamVjdGlvblxuICogY29udGV4dCBpcyBuZWVkZWQgaW4gdGhpcyBjb25maWd1cmF0aW9uIGFzIHdlbGwuXG4gKlxuICogQGRldmVsb3BlclByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRvU2lnbmFsPFQsIFUgPSB1bmRlZmluZWQ+KFxuICBzb3VyY2U6IE9ic2VydmFibGU8VD4gfCBTdWJzY3JpYmFibGU8VD4sXG4gIG9wdGlvbnM/OiBUb1NpZ25hbE9wdGlvbnM8VCB8IFU+ICYge2luaXRpYWxWYWx1ZT86IFV9LFxuKTogU2lnbmFsPFQgfCBVPiB7XG4gIG5nRGV2TW9kZSAmJlxuICAgIGFzc2VydE5vdEluUmVhY3RpdmVDb250ZXh0KFxuICAgICAgdG9TaWduYWwsXG4gICAgICAnSW52b2tpbmcgYHRvU2lnbmFsYCBjYXVzZXMgbmV3IHN1YnNjcmlwdGlvbnMgZXZlcnkgdGltZS4gJyArXG4gICAgICAgICdDb25zaWRlciBtb3ZpbmcgYHRvU2lnbmFsYCBvdXRzaWRlIG9mIHRoZSByZWFjdGl2ZSBjb250ZXh0IGFuZCByZWFkIHRoZSBzaWduYWwgdmFsdWUgd2hlcmUgbmVlZGVkLicsXG4gICAgKTtcblxuICBjb25zdCByZXF1aXJlc0NsZWFudXAgPSAhb3B0aW9ucz8ubWFudWFsQ2xlYW51cDtcbiAgcmVxdWlyZXNDbGVhbnVwICYmICFvcHRpb25zPy5pbmplY3RvciAmJiBhc3NlcnRJbkluamVjdGlvbkNvbnRleHQodG9TaWduYWwpO1xuICBjb25zdCBjbGVhbnVwUmVmID0gcmVxdWlyZXNDbGVhbnVwXG4gICAgPyAob3B0aW9ucz8uaW5qZWN0b3I/LmdldChEZXN0cm95UmVmKSA/PyBpbmplY3QoRGVzdHJveVJlZikpXG4gICAgOiBudWxsO1xuXG4gIGNvbnN0IGVxdWFsID0gbWFrZVRvU2lnbmFsRXF1YWwob3B0aW9ucz8uZXF1YWwpO1xuXG4gIC8vIE5vdGU6IFQgaXMgdGhlIE9ic2VydmFibGUgdmFsdWUgdHlwZSwgYW5kIFUgaXMgdGhlIGluaXRpYWwgdmFsdWUgdHlwZS4gVGhleSBkb24ndCBoYXZlIHRvIGJlXG4gIC8vIHRoZSBzYW1lIC0gdGhlIHJldHVybmVkIHNpZ25hbCBnaXZlcyB2YWx1ZXMgb2YgdHlwZSBgVGAuXG4gIGxldCBzdGF0ZTogV3JpdGFibGVTaWduYWw8U3RhdGU8VCB8IFU+PjtcbiAgaWYgKG9wdGlvbnM/LnJlcXVpcmVTeW5jKSB7XG4gICAgLy8gSW5pdGlhbGx5IHRoZSBzaWduYWwgaXMgaW4gYSBgTm9WYWx1ZWAgc3RhdGUuXG4gICAgc3RhdGUgPSBzaWduYWwoe2tpbmQ6IFN0YXRlS2luZC5Ob1ZhbHVlfSwge2VxdWFsfSk7XG4gIH0gZWxzZSB7XG4gICAgLy8gSWYgYW4gaW5pdGlhbCB2YWx1ZSB3YXMgcGFzc2VkLCB1c2UgaXQuIE90aGVyd2lzZSwgdXNlIGB1bmRlZmluZWRgIGFzIHRoZSBpbml0aWFsIHZhbHVlLlxuICAgIHN0YXRlID0gc2lnbmFsPFN0YXRlPFQgfCBVPj4oXG4gICAgICB7a2luZDogU3RhdGVLaW5kLlZhbHVlLCB2YWx1ZTogb3B0aW9ucz8uaW5pdGlhbFZhbHVlIGFzIFV9LFxuICAgICAge2VxdWFsfSxcbiAgICApO1xuICB9XG5cbiAgLy8gTm90ZTogVGhpcyBjb2RlIGNhbm5vdCBydW4gaW5zaWRlIGEgcmVhY3RpdmUgY29udGV4dCAoc2VlIGFzc2VydGlvbiBhYm92ZSkuIElmIHdlJ2Qgc3VwcG9ydFxuICAvLyB0aGlzLCB3ZSB3b3VsZCBzdWJzY3JpYmUgdG8gdGhlIG9ic2VydmFibGUgb3V0c2lkZSBvZiB0aGUgY3VycmVudCByZWFjdGl2ZSBjb250ZXh0LCBhdm9pZGluZ1xuICAvLyB0aGF0IHNpZGUtZWZmZWN0IHNpZ25hbCByZWFkcy93cml0ZXMgYXJlIGF0dHJpYnV0ZSB0byB0aGUgY3VycmVudCBjb25zdW1lci4gVGhlIGN1cnJlbnRcbiAgLy8gY29uc3VtZXIgb25seSBuZWVkcyB0byBiZSBub3RpZmllZCB3aGVuIHRoZSBgc3RhdGVgIHNpZ25hbCBjaGFuZ2VzIHRocm91Z2ggdGhlIG9ic2VydmFibGVcbiAgLy8gc3Vic2NyaXB0aW9uLiBBZGRpdGlvbmFsIGNvbnRleHQgKHJlbGF0ZWQgdG8gYXN5bmMgcGlwZSk6XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbmd1bGFyL2FuZ3VsYXIvcHVsbC81MDUyMi5cbiAgY29uc3Qgc3ViID0gc291cmNlLnN1YnNjcmliZSh7XG4gICAgbmV4dDogKHZhbHVlKSA9PiBzdGF0ZS5zZXQoe2tpbmQ6IFN0YXRlS2luZC5WYWx1ZSwgdmFsdWV9KSxcbiAgICBlcnJvcjogKGVycm9yKSA9PiB7XG4gICAgICBpZiAob3B0aW9ucz8ucmVqZWN0RXJyb3JzKSB7XG4gICAgICAgIC8vIEtpY2sgdGhlIGVycm9yIGJhY2sgdG8gUnhKUy4gSXQgd2lsbCBiZSBjYXVnaHQgYW5kIHJldGhyb3duIGluIGEgbWFjcm90YXNrLCB3aGljaCBjYXVzZXNcbiAgICAgICAgLy8gdGhlIGVycm9yIHRvIGVuZCB1cCBhcyBhbiB1bmNhdWdodCBleGNlcHRpb24uXG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgc3RhdGUuc2V0KHtraW5kOiBTdGF0ZUtpbmQuRXJyb3IsIGVycm9yfSk7XG4gICAgfSxcbiAgICAvLyBDb21wbGV0aW9uIG9mIHRoZSBPYnNlcnZhYmxlIGlzIG1lYW5pbmdsZXNzIHRvIHRoZSBzaWduYWwuIFNpZ25hbHMgZG9uJ3QgaGF2ZSBhIGNvbmNlcHQgb2ZcbiAgICAvLyBcImNvbXBsZXRlXCIuXG4gIH0pO1xuXG4gIGlmIChvcHRpb25zPy5yZXF1aXJlU3luYyAmJiBzdGF0ZSgpLmtpbmQgPT09IFN0YXRlS2luZC5Ob1ZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IMm1UnVudGltZUVycm9yKFxuICAgICAgybVSdW50aW1lRXJyb3JDb2RlLlJFUVVJUkVfU1lOQ19XSVRIT1VUX1NZTkNfRU1JVCxcbiAgICAgICh0eXBlb2YgbmdEZXZNb2RlID09PSAndW5kZWZpbmVkJyB8fCBuZ0Rldk1vZGUpICYmXG4gICAgICAgICdgdG9TaWduYWwoKWAgY2FsbGVkIHdpdGggYHJlcXVpcmVTeW5jYCBidXQgYE9ic2VydmFibGVgIGRpZCBub3QgZW1pdCBzeW5jaHJvbm91c2x5LicsXG4gICAgKTtcbiAgfVxuXG4gIC8vIFVuc3Vic2NyaWJlIHdoZW4gdGhlIGN1cnJlbnQgY29udGV4dCBpcyBkZXN0cm95ZWQsIGlmIHJlcXVlc3RlZC5cbiAgY2xlYW51cFJlZj8ub25EZXN0cm95KHN1Yi51bnN1YnNjcmliZS5iaW5kKHN1YikpO1xuXG4gIC8vIFRoZSBhY3R1YWwgcmV0dXJuZWQgc2lnbmFsIGlzIGEgYGNvbXB1dGVkYCBvZiB0aGUgYFN0YXRlYCBzaWduYWwsIHdoaWNoIG1hcHMgdGhlIHZhcmlvdXMgc3RhdGVzXG4gIC8vIHRvIGVpdGhlciB2YWx1ZXMgb3IgZXJyb3JzLlxuICByZXR1cm4gY29tcHV0ZWQoXG4gICAgKCkgPT4ge1xuICAgICAgY29uc3QgY3VycmVudCA9IHN0YXRlKCk7XG4gICAgICBzd2l0Y2ggKGN1cnJlbnQua2luZCkge1xuICAgICAgICBjYXNlIFN0YXRlS2luZC5WYWx1ZTpcbiAgICAgICAgICByZXR1cm4gY3VycmVudC52YWx1ZTtcbiAgICAgICAgY2FzZSBTdGF0ZUtpbmQuRXJyb3I6XG4gICAgICAgICAgdGhyb3cgY3VycmVudC5lcnJvcjtcbiAgICAgICAgY2FzZSBTdGF0ZUtpbmQuTm9WYWx1ZTpcbiAgICAgICAgICAvLyBUaGlzIHNob3VsZG4ndCByZWFsbHkgaGFwcGVuIGJlY2F1c2UgdGhlIGVycm9yIGlzIHRocm93biBvbiBjcmVhdGlvbi5cbiAgICAgICAgICB0aHJvdyBuZXcgybVSdW50aW1lRXJyb3IoXG4gICAgICAgICAgICDJtVJ1bnRpbWVFcnJvckNvZGUuUkVRVUlSRV9TWU5DX1dJVEhPVVRfU1lOQ19FTUlULFxuICAgICAgICAgICAgKHR5cGVvZiBuZ0Rldk1vZGUgPT09ICd1bmRlZmluZWQnIHx8IG5nRGV2TW9kZSkgJiZcbiAgICAgICAgICAgICAgJ2B0b1NpZ25hbCgpYCBjYWxsZWQgd2l0aCBgcmVxdWlyZVN5bmNgIGJ1dCBgT2JzZXJ2YWJsZWAgZGlkIG5vdCBlbWl0IHN5bmNocm9ub3VzbHkuJyxcbiAgICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAge2VxdWFsOiBvcHRpb25zPy5lcXVhbH0sXG4gICk7XG59XG5cbmZ1bmN0aW9uIG1ha2VUb1NpZ25hbEVxdWFsPFQ+KFxuICB1c2VyRXF1YWxpdHk6IFZhbHVlRXF1YWxpdHlGbjxUPiA9IE9iamVjdC5pcyxcbik6IFZhbHVlRXF1YWxpdHlGbjxTdGF0ZTxUPj4ge1xuICByZXR1cm4gKGEsIGIpID0+XG4gICAgYS5raW5kID09PSBTdGF0ZUtpbmQuVmFsdWUgJiYgYi5raW5kID09PSBTdGF0ZUtpbmQuVmFsdWUgJiYgdXNlckVxdWFsaXR5KGEudmFsdWUsIGIudmFsdWUpO1xufVxuXG5jb25zdCBlbnVtIFN0YXRlS2luZCB7XG4gIE5vVmFsdWUsXG4gIFZhbHVlLFxuICBFcnJvcixcbn1cblxuaW50ZXJmYWNlIE5vVmFsdWVTdGF0ZSB7XG4gIGtpbmQ6IFN0YXRlS2luZC5Ob1ZhbHVlO1xufVxuXG5pbnRlcmZhY2UgVmFsdWVTdGF0ZTxUPiB7XG4gIGtpbmQ6IFN0YXRlS2luZC5WYWx1ZTtcbiAgdmFsdWU6IFQ7XG59XG5cbmludGVyZmFjZSBFcnJvclN0YXRlIHtcbiAga2luZDogU3RhdGVLaW5kLkVycm9yO1xuICBlcnJvcjogdW5rbm93bjtcbn1cblxudHlwZSBTdGF0ZTxUPiA9IE5vVmFsdWVTdGF0ZSB8IFZhbHVlU3RhdGU8VD4gfCBFcnJvclN0YXRlO1xuIl19