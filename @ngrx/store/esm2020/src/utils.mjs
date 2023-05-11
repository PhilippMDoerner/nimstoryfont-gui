/**
 * @description
 * Combines reducers for individual features into a single reducer.
 *
 * You can use this function to delegate handling of state transitions to multiple reducers, each acting on their
 * own sub-state within the root state.
 *
 * @param reducers An object mapping keys of the root state to their corresponding feature reducer.
 * @param initialState Provides a state value if the current state is `undefined`, as it is initially.
 * @returns A reducer function.
 *
 * @usageNotes
 *
 * **Example combining two feature reducers into one "root" reducer**
 *
 * ```ts
 * export const reducer = combineReducers({
 *   featureA: featureAReducer,
 *   featureB: featureBReducer
 * });
 * ```
 *
 * You can also override the initial states of the sub-features:
 * ```ts
 * export const reducer = combineReducers({
 *   featureA: featureAReducer,
 *   featureB: featureBReducer
 * }, {
 *   featureA: { counterA: 13 },
 *   featureB: { counterB: 37 }
 * });
 * ```
 */
export function combineReducers(reducers, initialState = {}) {
    const reducerKeys = Object.keys(reducers);
    const finalReducers = {};
    for (let i = 0; i < reducerKeys.length; i++) {
        const key = reducerKeys[i];
        if (typeof reducers[key] === 'function') {
            finalReducers[key] = reducers[key];
        }
    }
    const finalReducerKeys = Object.keys(finalReducers);
    return function combination(state, action) {
        state = state === undefined ? initialState : state;
        let hasChanged = false;
        const nextState = {};
        for (let i = 0; i < finalReducerKeys.length; i++) {
            const key = finalReducerKeys[i];
            const reducer = finalReducers[key];
            const previousStateForKey = state[key];
            const nextStateForKey = reducer(previousStateForKey, action);
            nextState[key] = nextStateForKey;
            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
        }
        return hasChanged ? nextState : state;
    };
}
export function omit(object, keyToRemove) {
    return Object.keys(object)
        .filter((key) => key !== keyToRemove)
        .reduce((result, key) => Object.assign(result, { [key]: object[key] }), {});
}
export function compose(...functions) {
    return function (arg) {
        if (functions.length === 0) {
            return arg;
        }
        const last = functions[functions.length - 1];
        const rest = functions.slice(0, -1);
        return rest.reduceRight((composed, fn) => fn(composed), last(arg));
    };
}
export function createReducerFactory(reducerFactory, metaReducers) {
    if (Array.isArray(metaReducers) && metaReducers.length > 0) {
        reducerFactory = compose.apply(null, [
            ...metaReducers,
            reducerFactory,
        ]);
    }
    return (reducers, initialState) => {
        const reducer = reducerFactory(reducers);
        return (state, action) => {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}
export function createFeatureReducerFactory(metaReducers) {
    const reducerFactory = Array.isArray(metaReducers) && metaReducers.length > 0
        ? compose(...metaReducers)
        : (r) => r;
    return (reducer, initialState) => {
        reducer = reducerFactory(reducer);
        return (state, action) => {
            state = state === undefined ? initialState : state;
            return reducer(state, action);
        };
    };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9tb2R1bGVzL3N0b3JlL3NyYy91dGlscy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FnQ0c7QUFDSCxNQUFNLFVBQVUsZUFBZSxDQUM3QixRQUFhLEVBQ2IsZUFBb0IsRUFBRTtJQUV0QixNQUFNLFdBQVcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQzFDLE1BQU0sYUFBYSxHQUFRLEVBQUUsQ0FBQztJQUU5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsV0FBVyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUMzQyxNQUFNLEdBQUcsR0FBRyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0IsSUFBSSxPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDdkMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwQztLQUNGO0lBRUQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBRXBELE9BQU8sU0FBUyxXQUFXLENBQUMsS0FBSyxFQUFFLE1BQU07UUFDdkMsS0FBSyxHQUFHLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQ25ELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixNQUFNLFNBQVMsR0FBUSxFQUFFLENBQUM7UUFDMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoRCxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQyxNQUFNLE9BQU8sR0FBUSxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDeEMsTUFBTSxtQkFBbUIsR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsTUFBTSxlQUFlLEdBQUcsT0FBTyxDQUFDLG1CQUFtQixFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBRTdELFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxlQUFlLENBQUM7WUFDakMsVUFBVSxHQUFHLFVBQVUsSUFBSSxlQUFlLEtBQUssbUJBQW1CLENBQUM7U0FDcEU7UUFDRCxPQUFPLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDeEMsQ0FBQyxDQUFDO0FBQ0osQ0FBQztBQUVELE1BQU0sVUFBVSxJQUFJLENBQ2xCLE1BQVMsRUFDVCxXQUFvQjtJQUVwQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO1NBQ3ZCLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxLQUFLLFdBQVcsQ0FBQztTQUNwQyxNQUFNLENBQUMsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUNoRixDQUFDO0FBd0JELE1BQU0sVUFBVSxPQUFPLENBQUMsR0FBRyxTQUFnQjtJQUN6QyxPQUFPLFVBQVUsR0FBUTtRQUN2QixJQUFJLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzFCLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFFRCxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztRQUM3QyxNQUFNLElBQUksR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRXBDLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDLENBQUM7QUFDSixDQUFDO0FBRUQsTUFBTSxVQUFVLG9CQUFvQixDQUNsQyxjQUEwQyxFQUMxQyxZQUFrQztJQUVsQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLElBQUksWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7UUFDekQsY0FBc0IsR0FBRyxPQUFPLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRTtZQUM1QyxHQUFHLFlBQVk7WUFDZixjQUFjO1NBQ2YsQ0FBQyxDQUFDO0tBQ0o7SUFFRCxPQUFPLENBQUMsUUFBZ0MsRUFBRSxZQUE4QixFQUFFLEVBQUU7UUFDMUUsTUFBTSxPQUFPLEdBQUcsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3pDLE9BQU8sQ0FBQyxLQUFvQixFQUFFLE1BQVMsRUFBRSxFQUFFO1lBQ3pDLEtBQUssR0FBRyxLQUFLLEtBQUssU0FBUyxDQUFDLENBQUMsQ0FBRSxZQUFrQixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDMUQsT0FBTyxPQUFPLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ2hDLENBQUMsQ0FBQztJQUNKLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFRCxNQUFNLFVBQVUsMkJBQTJCLENBQ3pDLFlBQWtDO0lBRWxDLE1BQU0sY0FBYyxHQUNsQixLQUFLLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQztRQUNwRCxDQUFDLENBQUMsT0FBTyxDQUFzQixHQUFHLFlBQVksQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQyxDQUFzQixFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFcEMsT0FBTyxDQUFDLE9BQTRCLEVBQUUsWUFBZ0IsRUFBRSxFQUFFO1FBQ3hELE9BQU8sR0FBRyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFbEMsT0FBTyxDQUFDLEtBQW9CLEVBQUUsTUFBUyxFQUFFLEVBQUU7WUFDekMsS0FBSyxHQUFHLEtBQUssS0FBSyxTQUFTLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQ25ELE9BQU8sT0FBTyxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7SUFDSixDQUFDLENBQUM7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWN0aW9uLFxuICBBY3Rpb25SZWR1Y2VyLFxuICBBY3Rpb25SZWR1Y2VyRmFjdG9yeSxcbiAgQWN0aW9uUmVkdWNlck1hcCxcbiAgTWV0YVJlZHVjZXIsXG4gIEluaXRpYWxTdGF0ZSxcbn0gZnJvbSAnLi9tb2RlbHMnO1xuXG5leHBvcnQgZnVuY3Rpb24gY29tYmluZVJlZHVjZXJzPFQsIFYgZXh0ZW5kcyBBY3Rpb24gPSBBY3Rpb24+KFxuICByZWR1Y2VyczogQWN0aW9uUmVkdWNlck1hcDxULCBWPixcbiAgaW5pdGlhbFN0YXRlPzogUGFydGlhbDxUPlxuKTogQWN0aW9uUmVkdWNlcjxULCBWPjtcbi8qKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb21iaW5lcyByZWR1Y2VycyBmb3IgaW5kaXZpZHVhbCBmZWF0dXJlcyBpbnRvIGEgc2luZ2xlIHJlZHVjZXIuXG4gKlxuICogWW91IGNhbiB1c2UgdGhpcyBmdW5jdGlvbiB0byBkZWxlZ2F0ZSBoYW5kbGluZyBvZiBzdGF0ZSB0cmFuc2l0aW9ucyB0byBtdWx0aXBsZSByZWR1Y2VycywgZWFjaCBhY3Rpbmcgb24gdGhlaXJcbiAqIG93biBzdWItc3RhdGUgd2l0aGluIHRoZSByb290IHN0YXRlLlxuICpcbiAqIEBwYXJhbSByZWR1Y2VycyBBbiBvYmplY3QgbWFwcGluZyBrZXlzIG9mIHRoZSByb290IHN0YXRlIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcgZmVhdHVyZSByZWR1Y2VyLlxuICogQHBhcmFtIGluaXRpYWxTdGF0ZSBQcm92aWRlcyBhIHN0YXRlIHZhbHVlIGlmIHRoZSBjdXJyZW50IHN0YXRlIGlzIGB1bmRlZmluZWRgLCBhcyBpdCBpcyBpbml0aWFsbHkuXG4gKiBAcmV0dXJucyBBIHJlZHVjZXIgZnVuY3Rpb24uXG4gKlxuICogQHVzYWdlTm90ZXNcbiAqXG4gKiAqKkV4YW1wbGUgY29tYmluaW5nIHR3byBmZWF0dXJlIHJlZHVjZXJzIGludG8gb25lIFwicm9vdFwiIHJlZHVjZXIqKlxuICpcbiAqIGBgYHRzXG4gKiBleHBvcnQgY29uc3QgcmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gKiAgIGZlYXR1cmVBOiBmZWF0dXJlQVJlZHVjZXIsXG4gKiAgIGZlYXR1cmVCOiBmZWF0dXJlQlJlZHVjZXJcbiAqIH0pO1xuICogYGBgXG4gKlxuICogWW91IGNhbiBhbHNvIG92ZXJyaWRlIHRoZSBpbml0aWFsIHN0YXRlcyBvZiB0aGUgc3ViLWZlYXR1cmVzOlxuICogYGBgdHNcbiAqIGV4cG9ydCBjb25zdCByZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAqICAgZmVhdHVyZUE6IGZlYXR1cmVBUmVkdWNlcixcbiAqICAgZmVhdHVyZUI6IGZlYXR1cmVCUmVkdWNlclxuICogfSwge1xuICogICBmZWF0dXJlQTogeyBjb3VudGVyQTogMTMgfSxcbiAqICAgZmVhdHVyZUI6IHsgY291bnRlckI6IDM3IH1cbiAqIH0pO1xuICogYGBgXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lUmVkdWNlcnMoXG4gIHJlZHVjZXJzOiBhbnksXG4gIGluaXRpYWxTdGF0ZTogYW55ID0ge31cbik6IEFjdGlvblJlZHVjZXI8YW55LCBBY3Rpb24+IHtcbiAgY29uc3QgcmVkdWNlcktleXMgPSBPYmplY3Qua2V5cyhyZWR1Y2Vycyk7XG4gIGNvbnN0IGZpbmFsUmVkdWNlcnM6IGFueSA9IHt9O1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcmVkdWNlcktleXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBrZXkgPSByZWR1Y2VyS2V5c1tpXTtcbiAgICBpZiAodHlwZW9mIHJlZHVjZXJzW2tleV0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGZpbmFsUmVkdWNlcnNba2V5XSA9IHJlZHVjZXJzW2tleV07XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZmluYWxSZWR1Y2VyS2V5cyA9IE9iamVjdC5rZXlzKGZpbmFsUmVkdWNlcnMpO1xuXG4gIHJldHVybiBmdW5jdGlvbiBjb21iaW5hdGlvbihzdGF0ZSwgYWN0aW9uKSB7XG4gICAgc3RhdGUgPSBzdGF0ZSA9PT0gdW5kZWZpbmVkID8gaW5pdGlhbFN0YXRlIDogc3RhdGU7XG4gICAgbGV0IGhhc0NoYW5nZWQgPSBmYWxzZTtcbiAgICBjb25zdCBuZXh0U3RhdGU6IGFueSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmluYWxSZWR1Y2VyS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgY29uc3Qga2V5ID0gZmluYWxSZWR1Y2VyS2V5c1tpXTtcbiAgICAgIGNvbnN0IHJlZHVjZXI6IGFueSA9IGZpbmFsUmVkdWNlcnNba2V5XTtcbiAgICAgIGNvbnN0IHByZXZpb3VzU3RhdGVGb3JLZXkgPSBzdGF0ZVtrZXldO1xuICAgICAgY29uc3QgbmV4dFN0YXRlRm9yS2V5ID0gcmVkdWNlcihwcmV2aW91c1N0YXRlRm9yS2V5LCBhY3Rpb24pO1xuXG4gICAgICBuZXh0U3RhdGVba2V5XSA9IG5leHRTdGF0ZUZvcktleTtcbiAgICAgIGhhc0NoYW5nZWQgPSBoYXNDaGFuZ2VkIHx8IG5leHRTdGF0ZUZvcktleSAhPT0gcHJldmlvdXNTdGF0ZUZvcktleTtcbiAgICB9XG4gICAgcmV0dXJuIGhhc0NoYW5nZWQgPyBuZXh0U3RhdGUgOiBzdGF0ZTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9taXQ8VCBleHRlbmRzIHsgW2tleTogc3RyaW5nXTogYW55IH0+KFxuICBvYmplY3Q6IFQsXG4gIGtleVRvUmVtb3ZlOiBrZXlvZiBUXG4pOiBQYXJ0aWFsPFQ+IHtcbiAgcmV0dXJuIE9iamVjdC5rZXlzKG9iamVjdClcbiAgICAuZmlsdGVyKChrZXkpID0+IGtleSAhPT0ga2V5VG9SZW1vdmUpXG4gICAgLnJlZHVjZSgocmVzdWx0LCBrZXkpID0+IE9iamVjdC5hc3NpZ24ocmVzdWx0LCB7IFtrZXldOiBvYmplY3Rba2V5XSB9KSwge30pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBPigpOiAoaTogQSkgPT4gQTtcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlPEEsIEI+KGI6IChpOiBBKSA9PiBCKTogKGk6IEEpID0+IEI7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBLCBCLCBDPihjOiAoaTogQikgPT4gQywgYjogKGk6IEEpID0+IEIpOiAoaTogQSkgPT4gQztcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlPEEsIEIsIEMsIEQ+KFxuICBkOiAoaTogQykgPT4gRCxcbiAgYzogKGk6IEIpID0+IEMsXG4gIGI6IChpOiBBKSA9PiBCXG4pOiAoaTogQSkgPT4gRDtcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlPEEsIEIsIEMsIEQsIEU+KFxuICBlOiAoaTogRCkgPT4gRSxcbiAgZDogKGk6IEMpID0+IEQsXG4gIGM6IChpOiBCKSA9PiBDLFxuICBiOiAoaTogQSkgPT4gQlxuKTogKGk6IEEpID0+IEU7XG5leHBvcnQgZnVuY3Rpb24gY29tcG9zZTxBLCBCLCBDLCBELCBFLCBGPihcbiAgZjogKGk6IEUpID0+IEYsXG4gIGU6IChpOiBEKSA9PiBFLFxuICBkOiAoaTogQykgPT4gRCxcbiAgYzogKGk6IEIpID0+IEMsXG4gIGI6IChpOiBBKSA9PiBCXG4pOiAoaTogQSkgPT4gRjtcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlPEEgPSBhbnksIEYgPSBhbnk+KC4uLmZ1bmN0aW9uczogYW55W10pOiAoaTogQSkgPT4gRjtcbmV4cG9ydCBmdW5jdGlvbiBjb21wb3NlKC4uLmZ1bmN0aW9uczogYW55W10pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChhcmc6IGFueSkge1xuICAgIGlmIChmdW5jdGlvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gYXJnO1xuICAgIH1cblxuICAgIGNvbnN0IGxhc3QgPSBmdW5jdGlvbnNbZnVuY3Rpb25zLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IHJlc3QgPSBmdW5jdGlvbnMuc2xpY2UoMCwgLTEpO1xuXG4gICAgcmV0dXJuIHJlc3QucmVkdWNlUmlnaHQoKGNvbXBvc2VkLCBmbikgPT4gZm4oY29tcG9zZWQpLCBsYXN0KGFyZykpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlUmVkdWNlckZhY3Rvcnk8VCwgViBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbj4oXG4gIHJlZHVjZXJGYWN0b3J5OiBBY3Rpb25SZWR1Y2VyRmFjdG9yeTxULCBWPixcbiAgbWV0YVJlZHVjZXJzPzogTWV0YVJlZHVjZXI8VCwgVj5bXVxuKTogQWN0aW9uUmVkdWNlckZhY3Rvcnk8VCwgVj4ge1xuICBpZiAoQXJyYXkuaXNBcnJheShtZXRhUmVkdWNlcnMpICYmIG1ldGFSZWR1Y2Vycy5sZW5ndGggPiAwKSB7XG4gICAgKHJlZHVjZXJGYWN0b3J5IGFzIGFueSkgPSBjb21wb3NlLmFwcGx5KG51bGwsIFtcbiAgICAgIC4uLm1ldGFSZWR1Y2VycyxcbiAgICAgIHJlZHVjZXJGYWN0b3J5LFxuICAgIF0pO1xuICB9XG5cbiAgcmV0dXJuIChyZWR1Y2VyczogQWN0aW9uUmVkdWNlck1hcDxULCBWPiwgaW5pdGlhbFN0YXRlPzogSW5pdGlhbFN0YXRlPFQ+KSA9PiB7XG4gICAgY29uc3QgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KHJlZHVjZXJzKTtcbiAgICByZXR1cm4gKHN0YXRlOiBUIHwgdW5kZWZpbmVkLCBhY3Rpb246IFYpID0+IHtcbiAgICAgIHN0YXRlID0gc3RhdGUgPT09IHVuZGVmaW5lZCA/IChpbml0aWFsU3RhdGUgYXMgVCkgOiBzdGF0ZTtcbiAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH07XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGZWF0dXJlUmVkdWNlckZhY3Rvcnk8VCwgViBleHRlbmRzIEFjdGlvbiA9IEFjdGlvbj4oXG4gIG1ldGFSZWR1Y2Vycz86IE1ldGFSZWR1Y2VyPFQsIFY+W11cbik6IChyZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQsIFY+LCBpbml0aWFsU3RhdGU/OiBUKSA9PiBBY3Rpb25SZWR1Y2VyPFQsIFY+IHtcbiAgY29uc3QgcmVkdWNlckZhY3RvcnkgPVxuICAgIEFycmF5LmlzQXJyYXkobWV0YVJlZHVjZXJzKSAmJiBtZXRhUmVkdWNlcnMubGVuZ3RoID4gMFxuICAgICAgPyBjb21wb3NlPEFjdGlvblJlZHVjZXI8VCwgVj4+KC4uLm1ldGFSZWR1Y2VycylcbiAgICAgIDogKHI6IEFjdGlvblJlZHVjZXI8VCwgVj4pID0+IHI7XG5cbiAgcmV0dXJuIChyZWR1Y2VyOiBBY3Rpb25SZWR1Y2VyPFQsIFY+LCBpbml0aWFsU3RhdGU/OiBUKSA9PiB7XG4gICAgcmVkdWNlciA9IHJlZHVjZXJGYWN0b3J5KHJlZHVjZXIpO1xuXG4gICAgcmV0dXJuIChzdGF0ZTogVCB8IHVuZGVmaW5lZCwgYWN0aW9uOiBWKSA9PiB7XG4gICAgICBzdGF0ZSA9IHN0YXRlID09PSB1bmRlZmluZWQgPyBpbml0aWFsU3RhdGUgOiBzdGF0ZTtcbiAgICAgIHJldHVybiByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xuICAgIH07XG4gIH07XG59XG4iXX0=