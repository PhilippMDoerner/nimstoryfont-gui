/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
export { createComputed } from './src/computed';
export { defaultEquals } from './src/equality';
export { setThrowInvalidWriteToSignalError } from './src/errors';
export { REACTIVE_NODE, SIGNAL, consumerAfterComputation, consumerBeforeComputation, consumerDestroy, consumerMarkDirty, consumerPollProducersForChange, getActiveConsumer, isInNotificationPhase, isReactive, producerAccessed, producerIncrementEpoch, producerNotifyConsumers, producerUpdateValueVersion, producerUpdatesAllowed, setActiveConsumer, } from './src/graph';
export { SIGNAL_NODE, createSignal, runPostSignalSetFn, setPostSignalSetFn, signalSetFn, signalUpdateFn, } from './src/signal';
export { createWatch } from './src/watch';
export { setAlternateWeakRefImpl } from './src/weak_ref';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb3JlL3ByaW1pdGl2ZXMvc2lnbmFscy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQWUsY0FBYyxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFDNUQsT0FBTyxFQUFrQixhQUFhLEVBQUMsTUFBTSxnQkFBZ0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsaUNBQWlDLEVBQUMsTUFBTSxjQUFjLENBQUM7QUFDL0QsT0FBTyxFQUNMLGFBQWEsRUFHYixNQUFNLEVBQ04sd0JBQXdCLEVBQ3hCLHlCQUF5QixFQUN6QixlQUFlLEVBQ2YsaUJBQWlCLEVBQ2pCLDhCQUE4QixFQUM5QixpQkFBaUIsRUFDakIscUJBQXFCLEVBQ3JCLFVBQVUsRUFDVixnQkFBZ0IsRUFDaEIsc0JBQXNCLEVBQ3RCLHVCQUF1QixFQUN2QiwwQkFBMEIsRUFDMUIsc0JBQXNCLEVBQ3RCLGlCQUFpQixHQUNsQixNQUFNLGFBQWEsQ0FBQztBQUNyQixPQUFPLEVBQ0wsV0FBVyxFQUdYLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsa0JBQWtCLEVBQ2xCLFdBQVcsRUFDWCxjQUFjLEdBQ2YsTUFBTSxjQUFjLENBQUM7QUFDdEIsT0FBTyxFQUFnRCxXQUFXLEVBQUMsTUFBTSxhQUFhLENBQUM7QUFDdkYsT0FBTyxFQUFDLHVCQUF1QixFQUFDLE1BQU0sZ0JBQWdCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5kZXYvbGljZW5zZVxuICovXG5cbmV4cG9ydCB7Q29tcHV0ZWROb2RlLCBjcmVhdGVDb21wdXRlZH0gZnJvbSAnLi9zcmMvY29tcHV0ZWQnO1xuZXhwb3J0IHtWYWx1ZUVxdWFsaXR5Rm4sIGRlZmF1bHRFcXVhbHN9IGZyb20gJy4vc3JjL2VxdWFsaXR5JztcbmV4cG9ydCB7c2V0VGhyb3dJbnZhbGlkV3JpdGVUb1NpZ25hbEVycm9yfSBmcm9tICcuL3NyYy9lcnJvcnMnO1xuZXhwb3J0IHtcbiAgUkVBQ1RJVkVfTk9ERSxcbiAgUmVhY3RpdmUsXG4gIFJlYWN0aXZlTm9kZSxcbiAgU0lHTkFMLFxuICBjb25zdW1lckFmdGVyQ29tcHV0YXRpb24sXG4gIGNvbnN1bWVyQmVmb3JlQ29tcHV0YXRpb24sXG4gIGNvbnN1bWVyRGVzdHJveSxcbiAgY29uc3VtZXJNYXJrRGlydHksXG4gIGNvbnN1bWVyUG9sbFByb2R1Y2Vyc0ZvckNoYW5nZSxcbiAgZ2V0QWN0aXZlQ29uc3VtZXIsXG4gIGlzSW5Ob3RpZmljYXRpb25QaGFzZSxcbiAgaXNSZWFjdGl2ZSxcbiAgcHJvZHVjZXJBY2Nlc3NlZCxcbiAgcHJvZHVjZXJJbmNyZW1lbnRFcG9jaCxcbiAgcHJvZHVjZXJOb3RpZnlDb25zdW1lcnMsXG4gIHByb2R1Y2VyVXBkYXRlVmFsdWVWZXJzaW9uLFxuICBwcm9kdWNlclVwZGF0ZXNBbGxvd2VkLFxuICBzZXRBY3RpdmVDb25zdW1lcixcbn0gZnJvbSAnLi9zcmMvZ3JhcGgnO1xuZXhwb3J0IHtcbiAgU0lHTkFMX05PREUsXG4gIFNpZ25hbEdldHRlcixcbiAgU2lnbmFsTm9kZSxcbiAgY3JlYXRlU2lnbmFsLFxuICBydW5Qb3N0U2lnbmFsU2V0Rm4sXG4gIHNldFBvc3RTaWduYWxTZXRGbixcbiAgc2lnbmFsU2V0Rm4sXG4gIHNpZ25hbFVwZGF0ZUZuLFxufSBmcm9tICcuL3NyYy9zaWduYWwnO1xuZXhwb3J0IHtXYXRjaCwgV2F0Y2hDbGVhbnVwRm4sIFdhdGNoQ2xlYW51cFJlZ2lzdGVyRm4sIGNyZWF0ZVdhdGNofSBmcm9tICcuL3NyYy93YXRjaCc7XG5leHBvcnQge3NldEFsdGVybmF0ZVdlYWtSZWZJbXBsfSBmcm9tICcuL3NyYy93ZWFrX3JlZic7XG4iXX0=