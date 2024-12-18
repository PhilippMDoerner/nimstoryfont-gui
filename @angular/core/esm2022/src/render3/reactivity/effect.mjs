/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { createWatch } from '@angular/core/primitives/signals';
import { ChangeDetectorRef } from '../../change_detection';
import { assertInInjectionContext } from '../../di/contextual';
import { InjectionToken } from '../../di/injection_token';
import { Injector } from '../../di/injector';
import { inject } from '../../di/injector_compatibility';
import { ɵɵdefineInjectable } from '../../di/interface/defs';
import { ErrorHandler } from '../../error_handler';
import { DestroyRef } from '../../linker/destroy_ref';
import { FLAGS, EFFECTS_TO_SCHEDULE } from '../interfaces/view';
import { assertNotInReactiveContext } from './asserts';
import { performanceMarkFeature } from '../../util/performance';
import { PendingTasks } from '../../pending_tasks';
/**
 * Not public API, which guarantees `EffectScheduler` only ever comes from the application root
 * injector.
 */
export const APP_EFFECT_SCHEDULER = new InjectionToken('', {
    providedIn: 'root',
    factory: () => inject(EffectScheduler),
});
/**
 * A scheduler which manages the execution of effects.
 */
export class EffectScheduler {
    /** @nocollapse */
    static { this.ɵprov = ɵɵdefineInjectable({
        token: EffectScheduler,
        providedIn: 'root',
        factory: () => new ZoneAwareEffectScheduler(),
    }); }
}
/**
 * A wrapper around `ZoneAwareQueueingScheduler` that schedules flushing via the microtask queue
 * when.
 */
export class ZoneAwareEffectScheduler {
    constructor() {
        this.queuedEffectCount = 0;
        this.queues = new Map();
        this.pendingTasks = inject(PendingTasks);
        this.taskId = null;
    }
    scheduleEffect(handle) {
        this.enqueue(handle);
        if (this.taskId === null) {
            const taskId = (this.taskId = this.pendingTasks.add());
            queueMicrotask(() => {
                this.flush();
                this.pendingTasks.remove(taskId);
                this.taskId = null;
            });
        }
    }
    enqueue(handle) {
        const zone = handle.creationZone;
        if (!this.queues.has(zone)) {
            this.queues.set(zone, new Set());
        }
        const queue = this.queues.get(zone);
        if (queue.has(handle)) {
            return;
        }
        this.queuedEffectCount++;
        queue.add(handle);
    }
    /**
     * Run all scheduled effects.
     *
     * Execution order of effects within the same zone is guaranteed to be FIFO, but there is no
     * ordering guarantee between effects scheduled in different zones.
     */
    flush() {
        while (this.queuedEffectCount > 0) {
            for (const [zone, queue] of this.queues) {
                // `zone` here must be defined.
                if (zone === null) {
                    this.flushQueue(queue);
                }
                else {
                    zone.run(() => this.flushQueue(queue));
                }
            }
        }
    }
    flushQueue(queue) {
        for (const handle of queue) {
            queue.delete(handle);
            this.queuedEffectCount--;
            // TODO: what happens if this throws an error?
            handle.run();
        }
    }
}
/**
 * Core reactive node for an Angular effect.
 *
 * `EffectHandle` combines the reactive graph's `Watch` base node for effects with the framework's
 * scheduling abstraction (`EffectScheduler`) as well as automatic cleanup via `DestroyRef` if
 * available/requested.
 */
class EffectHandle {
    constructor(scheduler, effectFn, creationZone, destroyRef, injector, allowSignalWrites) {
        this.scheduler = scheduler;
        this.effectFn = effectFn;
        this.creationZone = creationZone;
        this.injector = injector;
        this.watcher = createWatch((onCleanup) => this.runEffect(onCleanup), () => this.schedule(), allowSignalWrites);
        this.unregisterOnDestroy = destroyRef?.onDestroy(() => this.destroy());
    }
    runEffect(onCleanup) {
        try {
            this.effectFn(onCleanup);
        }
        catch (err) {
            // Inject the `ErrorHandler` here in order to avoid circular DI error
            // if the effect is used inside of a custom `ErrorHandler`.
            const errorHandler = this.injector.get(ErrorHandler, null, { optional: true });
            errorHandler?.handleError(err);
        }
    }
    run() {
        this.watcher.run();
    }
    schedule() {
        this.scheduler.scheduleEffect(this);
    }
    destroy() {
        this.watcher.destroy();
        this.unregisterOnDestroy?.();
        // Note: if the effect is currently scheduled, it's not un-scheduled, and so the scheduler will
        // retain a reference to it. Attempting to execute it will be a no-op.
    }
}
/**
 * Create a global `Effect` for the given reactive function.
 *
 * @developerPreview
 */
export function effect(effectFn, options) {
    performanceMarkFeature('NgSignals');
    ngDevMode &&
        assertNotInReactiveContext(effect, 'Call `effect` outside of a reactive context. For example, schedule the ' +
            'effect inside the component constructor.');
    !options?.injector && assertInInjectionContext(effect);
    const injector = options?.injector ?? inject(Injector);
    const destroyRef = options?.manualCleanup !== true ? injector.get(DestroyRef) : null;
    const handle = new EffectHandle(injector.get(APP_EFFECT_SCHEDULER), effectFn, typeof Zone === 'undefined' ? null : Zone.current, destroyRef, injector, options?.allowSignalWrites ?? false);
    // Effects need to be marked dirty manually to trigger their initial run. The timing of this
    // marking matters, because the effects may read signals that track component inputs, which are
    // only available after those components have had their first update pass.
    //
    // We inject `ChangeDetectorRef` optionally, to determine whether this effect is being created in
    // the context of a component or not. If it is, then we check whether the component has already
    // run its update pass, and defer the effect's initial scheduling until the update pass if it
    // hasn't already run.
    const cdr = injector.get(ChangeDetectorRef, null, { optional: true });
    if (!cdr || !(cdr._lView[FLAGS] & 8 /* LViewFlags.FirstLViewPass */)) {
        // This effect is either not running in a view injector, or the view has already
        // undergone its first change detection pass, which is necessary for any required inputs to be
        // set.
        handle.watcher.notify();
    }
    else {
        // Delay the initialization of the effect until the view is fully initialized.
        (cdr._lView[EFFECTS_TO_SCHEDULE] ??= []).push(handle.watcher.notify);
    }
    return handle;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWZmZWN0LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvcmVuZGVyMy9yZWFjdGl2aXR5L2VmZmVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCxPQUFPLEVBQUMsV0FBVyxFQUFnQyxNQUFNLGtDQUFrQyxDQUFDO0FBRTVGLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLHdCQUF3QixDQUFDO0FBQ3pELE9BQU8sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQzdELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN4RCxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sbUJBQW1CLENBQUM7QUFDM0MsT0FBTyxFQUFDLE1BQU0sRUFBQyxNQUFNLGlDQUFpQyxDQUFDO0FBQ3ZELE9BQU8sRUFBQyxrQkFBa0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQzNELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUVqRCxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDcEQsT0FBTyxFQUFDLEtBQUssRUFBYyxtQkFBbUIsRUFBQyxNQUFNLG9CQUFvQixDQUFDO0FBRTFFLE9BQU8sRUFBQywwQkFBMEIsRUFBQyxNQUFNLFdBQVcsQ0FBQztBQUNyRCxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUM5RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUF1QmpEOzs7R0FHRztBQUNILE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUFHLElBQUksY0FBYyxDQUFDLEVBQUUsRUFBRTtJQUN6RCxVQUFVLEVBQUUsTUFBTTtJQUNsQixPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQztDQUN2QyxD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QUFDLFFBQVEsRUFBRSxJQUFJLEVBQUMsQ0FBNEIsQ0FBQztJQUMvRixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxvQ0FBNEIsQ0FBQyxFQUFFLENBQUM7UUFDN0QsZ0ZBQWdGO1FBQ2hGLDhGQUE4RjtRQUM5RixPQUFPO1FBQ1AsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO1NBQU0sQ0FBQztRQUNOLDhFQUE4RTtRQUM5RSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsbUJBQW1CLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRUQsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmRldi9saWNlbnNlXG4gKi9cblxuaW1wb3J0IHtjcmVhdGVXYXRjaCwgV2F0Y2gsIFdhdGNoQ2xlYW51cFJlZ2lzdGVyRm59IGZyb20gJ0Bhbmd1bGFyL2NvcmUvcHJpbWl0aXZlcy9zaWduYWxzJztcblxuaW1wb3J0IHtDaGFuZ2VEZXRlY3RvclJlZn0gZnJvbSAnLi4vLi4vY2hhbmdlX2RldGVjdGlvbic7XG5pbXBvcnQge2Fzc2VydEluSW5qZWN0aW9uQ29udGV4dH0gZnJvbSAnLi4vLi4vZGkvY29udGV4dHVhbCc7XG5pbXBvcnQge0luamVjdGlvblRva2VufSBmcm9tICcuLi8uLi9kaS9pbmplY3Rpb25fdG9rZW4nO1xuaW1wb3J0IHtJbmplY3Rvcn0gZnJvbSAnLi4vLi4vZGkvaW5qZWN0b3InO1xuaW1wb3J0IHtpbmplY3R9IGZyb20gJy4uLy4uL2RpL2luamVjdG9yX2NvbXBhdGliaWxpdHknO1xuaW1wb3J0IHvJtcm1ZGVmaW5lSW5qZWN0YWJsZX0gZnJvbSAnLi4vLi4vZGkvaW50ZXJmYWNlL2RlZnMnO1xuaW1wb3J0IHtFcnJvckhhbmRsZXJ9IGZyb20gJy4uLy4uL2Vycm9yX2hhbmRsZXInO1xuaW1wb3J0IHR5cGUge1ZpZXdSZWZ9IGZyb20gJy4uL3ZpZXdfcmVmJztcbmltcG9ydCB7RGVzdHJveVJlZn0gZnJvbSAnLi4vLi4vbGlua2VyL2Rlc3Ryb3lfcmVmJztcbmltcG9ydCB7RkxBR1MsIExWaWV3RmxhZ3MsIEVGRkVDVFNfVE9fU0NIRURVTEV9IGZyb20gJy4uL2ludGVyZmFjZXMvdmlldyc7XG5cbmltcG9ydCB7YXNzZXJ0Tm90SW5SZWFjdGl2ZUNvbnRleHR9IGZyb20gJy4vYXNzZXJ0cyc7XG5pbXBvcnQge3BlcmZvcm1hbmNlTWFya0ZlYXR1cmV9IGZyb20gJy4uLy4uL3V0aWwvcGVyZm9ybWFuY2UnO1xuaW1wb3J0IHtQZW5kaW5nVGFza3N9IGZyb20gJy4uLy4uL3BlbmRpbmdfdGFza3MnO1xuXG4vKipcbiAqIEFuIGVmZmVjdCBjYW4sIG9wdGlvbmFsbHksIHJlZ2lzdGVyIGEgY2xlYW51cCBmdW5jdGlvbi4gSWYgcmVnaXN0ZXJlZCwgdGhlIGNsZWFudXAgaXMgZXhlY3V0ZWRcbiAqIGJlZm9yZSB0aGUgbmV4dCBlZmZlY3QgcnVuLiBUaGUgY2xlYW51cCBmdW5jdGlvbiBtYWtlcyBpdCBwb3NzaWJsZSB0byBcImNhbmNlbFwiIGFueSB3b3JrIHRoYXQgdGhlXG4gKiBwcmV2aW91cyBlZmZlY3QgcnVuIG1pZ2h0IGhhdmUgc3RhcnRlZC5cbiAqXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5leHBvcnQgdHlwZSBFZmZlY3RDbGVhbnVwRm4gPSAoKSA9PiB2b2lkO1xuXG4vKipcbiAqIEEgY2FsbGJhY2sgcGFzc2VkIHRvIHRoZSBlZmZlY3QgZnVuY3Rpb24gdGhhdCBtYWtlcyBpdCBwb3NzaWJsZSB0byByZWdpc3RlciBjbGVhbnVwIGxvZ2ljLlxuICpcbiAqIEBkZXZlbG9wZXJQcmV2aWV3XG4gKi9cbmV4cG9ydCB0eXBlIEVmZmVjdENsZWFudXBSZWdpc3RlckZuID0gKGNsZWFudXBGbjogRWZmZWN0Q2xlYW51cEZuKSA9PiB2b2lkO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxhYmxlRWZmZWN0IHtcbiAgcnVuKCk6IHZvaWQ7XG4gIGNyZWF0aW9uWm9uZTogdW5rbm93bjtcbn1cblxuLyoqXG4gKiBOb3QgcHVibGljIEFQSSwgd2hpY2ggZ3VhcmFudGVlcyBgRWZmZWN0U2NoZWR1bGVyYCBvbmx5IGV2ZXIgY29tZXMgZnJvbSB0aGUgYXBwbGljYXRpb24gcm9vdFxuICogaW5qZWN0b3IuXG4gKi9cbmV4cG9ydCBjb25zdCBBUFBfRUZGRUNUX1NDSEVEVUxFUiA9IG5ldyBJbmplY3Rpb25Ub2tlbignJywge1xuICBwcm92aWRlZEluOiAncm9vdCcsXG4gIGZhY3Rvcnk6ICgpID0+IGluamVjdChFZmZlY3RTY2hlZHVsZXIpLFxufSk7XG5cbi8qKlxuICogQSBzY2hlZHVsZXIgd2hpY2ggbWFuYWdlcyB0aGUgZXhlY3V0aW9uIG9mIGVmZmVjdHMuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBFZmZlY3RTY2hlZHVsZXIge1xuICAvKipcbiAgICogU2NoZWR1bGUgdGhlIGdpdmVuIGVmZmVjdCB0byBiZSBleGVjdXRlZCBhdCBhIGxhdGVyIHRpbWUuXG4gICAqXG4gICAqIEl0IGlzIGFuIGVycm9yIHRvIGF0dGVtcHQgdG8gZXhlY3V0ZSBhbnkgZWZmZWN0cyBzeW5jaHJvbm91c2x5IGR1cmluZyBhIHNjaGVkdWxpbmcgb3BlcmF0aW9uLlxuICAgKi9cbiAgYWJzdHJhY3Qgc2NoZWR1bGVFZmZlY3QoZTogU2NoZWR1bGFibGVFZmZlY3QpOiB2b2lkO1xuXG4gIC8qKlxuICAgKiBSdW4gYW55IHNjaGVkdWxlZCBlZmZlY3RzLlxuICAgKi9cbiAgYWJzdHJhY3QgZmx1c2goKTogdm9pZDtcblxuICAvKiogQG5vY29sbGFwc2UgKi9cbiAgc3RhdGljIMm1cHJvdiA9IC8qKiBAcHVyZU9yQnJlYWtNeUNvZGUgKi8gybXJtWRlZmluZUluamVjdGFibGUoe1xuICAgIHRva2VuOiBFZmZlY3RTY2hlZHVsZXIsXG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnLFxuICAgIGZhY3Rvcnk6ICgpID0+IG5ldyBab25lQXdhcmVFZmZlY3RTY2hlZHVsZXIoKSxcbiAgfSk7XG59XG5cbi8qKlxuICogQSB3cmFwcGVyIGFyb3VuZCBgWm9uZUF3YXJlUXVldWVpbmdTY2hlZHVsZXJgIHRoYXQgc2NoZWR1bGVzIGZsdXNoaW5nIHZpYSB0aGUgbWljcm90YXNrIHF1ZXVlXG4gKiB3aGVuLlxuICovXG5leHBvcnQgY2xhc3MgWm9uZUF3YXJlRWZmZWN0U2NoZWR1bGVyIGltcGxlbWVudHMgRWZmZWN0U2NoZWR1bGVyIHtcbiAgcHJpdmF0ZSBxdWV1ZWRFZmZlY3RDb3VudCA9IDA7XG4gIHByaXZhdGUgcXVldWVzID0gbmV3IE1hcDxab25lIHwgbnVsbCwgU2V0PFNjaGVkdWxhYmxlRWZmZWN0Pj4oKTtcbiAgcHJpdmF0ZSByZWFkb25seSBwZW5kaW5nVGFza3MgPSBpbmplY3QoUGVuZGluZ1Rhc2tzKTtcbiAgcHJpdmF0ZSB0YXNrSWQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xuXG4gIHNjaGVkdWxlRWZmZWN0KGhhbmRsZTogU2NoZWR1bGFibGVFZmZlY3QpOiB2b2lkIHtcbiAgICB0aGlzLmVucXVldWUoaGFuZGxlKTtcblxuICAgIGlmICh0aGlzLnRhc2tJZCA9PT0gbnVsbCkge1xuICAgICAgY29uc3QgdGFza0lkID0gKHRoaXMudGFza0lkID0gdGhpcy5wZW5kaW5nVGFza3MuYWRkKCkpO1xuICAgICAgcXVldWVNaWNyb3Rhc2soKCkgPT4ge1xuICAgICAgICB0aGlzLmZsdXNoKCk7XG4gICAgICAgIHRoaXMucGVuZGluZ1Rhc2tzLnJlbW92ZSh0YXNrSWQpO1xuICAgICAgICB0aGlzLnRhc2tJZCA9IG51bGw7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGVucXVldWUoaGFuZGxlOiBTY2hlZHVsYWJsZUVmZmVjdCk6IHZvaWQge1xuICAgIGNvbnN0IHpvbmUgPSBoYW5kbGUuY3JlYXRpb25ab25lIGFzIFpvbmUgfCBudWxsO1xuICAgIGlmICghdGhpcy5xdWV1ZXMuaGFzKHpvbmUpKSB7XG4gICAgICB0aGlzLnF1ZXVlcy5zZXQoem9uZSwgbmV3IFNldCgpKTtcbiAgICB9XG5cbiAgICBjb25zdCBxdWV1ZSA9IHRoaXMucXVldWVzLmdldCh6b25lKSE7XG4gICAgaWYgKHF1ZXVlLmhhcyhoYW5kbGUpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucXVldWVkRWZmZWN0Q291bnQrKztcbiAgICBxdWV1ZS5hZGQoaGFuZGxlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW4gYWxsIHNjaGVkdWxlZCBlZmZlY3RzLlxuICAgKlxuICAgKiBFeGVjdXRpb24gb3JkZXIgb2YgZWZmZWN0cyB3aXRoaW4gdGhlIHNhbWUgem9uZSBpcyBndWFyYW50ZWVkIHRvIGJlIEZJRk8sIGJ1dCB0aGVyZSBpcyBub1xuICAgKiBvcmRlcmluZyBndWFyYW50ZWUgYmV0d2VlbiBlZmZlY3RzIHNjaGVkdWxlZCBpbiBkaWZmZXJlbnQgem9uZXMuXG4gICAqL1xuICBmbHVzaCgpOiB2b2lkIHtcbiAgICB3aGlsZSAodGhpcy5xdWV1ZWRFZmZlY3RDb3VudCA+IDApIHtcbiAgICAgIGZvciAoY29uc3QgW3pvbmUsIHF1ZXVlXSBvZiB0aGlzLnF1ZXVlcykge1xuICAgICAgICAvLyBgem9uZWAgaGVyZSBtdXN0IGJlIGRlZmluZWQuXG4gICAgICAgIGlmICh6b25lID09PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5mbHVzaFF1ZXVlKHF1ZXVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB6b25lLnJ1bigoKSA9PiB0aGlzLmZsdXNoUXVldWUocXVldWUpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZmx1c2hRdWV1ZShxdWV1ZTogU2V0PFNjaGVkdWxhYmxlRWZmZWN0Pik6IHZvaWQge1xuICAgIGZvciAoY29uc3QgaGFuZGxlIG9mIHF1ZXVlKSB7XG4gICAgICBxdWV1ZS5kZWxldGUoaGFuZGxlKTtcbiAgICAgIHRoaXMucXVldWVkRWZmZWN0Q291bnQtLTtcblxuICAgICAgLy8gVE9ETzogd2hhdCBoYXBwZW5zIGlmIHRoaXMgdGhyb3dzIGFuIGVycm9yP1xuICAgICAgaGFuZGxlLnJ1bigpO1xuICAgIH1cbiAgfVxufVxuXG4vKipcbiAqIENvcmUgcmVhY3RpdmUgbm9kZSBmb3IgYW4gQW5ndWxhciBlZmZlY3QuXG4gKlxuICogYEVmZmVjdEhhbmRsZWAgY29tYmluZXMgdGhlIHJlYWN0aXZlIGdyYXBoJ3MgYFdhdGNoYCBiYXNlIG5vZGUgZm9yIGVmZmVjdHMgd2l0aCB0aGUgZnJhbWV3b3JrJ3NcbiAqIHNjaGVkdWxpbmcgYWJzdHJhY3Rpb24gKGBFZmZlY3RTY2hlZHVsZXJgKSBhcyB3ZWxsIGFzIGF1dG9tYXRpYyBjbGVhbnVwIHZpYSBgRGVzdHJveVJlZmAgaWZcbiAqIGF2YWlsYWJsZS9yZXF1ZXN0ZWQuXG4gKi9cbmNsYXNzIEVmZmVjdEhhbmRsZSBpbXBsZW1lbnRzIEVmZmVjdFJlZiwgU2NoZWR1bGFibGVFZmZlY3Qge1xuICB1bnJlZ2lzdGVyT25EZXN0cm95OiAoKCkgPT4gdm9pZCkgfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IHdhdGNoZXI6IFdhdGNoO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgc2NoZWR1bGVyOiBFZmZlY3RTY2hlZHVsZXIsXG4gICAgcHJpdmF0ZSBlZmZlY3RGbjogKG9uQ2xlYW51cDogRWZmZWN0Q2xlYW51cFJlZ2lzdGVyRm4pID0+IHZvaWQsXG4gICAgcHVibGljIGNyZWF0aW9uWm9uZTogWm9uZSB8IG51bGwsXG4gICAgZGVzdHJveVJlZjogRGVzdHJveVJlZiB8IG51bGwsXG4gICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3IsXG4gICAgYWxsb3dTaWduYWxXcml0ZXM6IGJvb2xlYW4sXG4gICkge1xuICAgIHRoaXMud2F0Y2hlciA9IGNyZWF0ZVdhdGNoKFxuICAgICAgKG9uQ2xlYW51cCkgPT4gdGhpcy5ydW5FZmZlY3Qob25DbGVhbnVwKSxcbiAgICAgICgpID0+IHRoaXMuc2NoZWR1bGUoKSxcbiAgICAgIGFsbG93U2lnbmFsV3JpdGVzLFxuICAgICk7XG4gICAgdGhpcy51bnJlZ2lzdGVyT25EZXN0cm95ID0gZGVzdHJveVJlZj8ub25EZXN0cm95KCgpID0+IHRoaXMuZGVzdHJveSgpKTtcbiAgfVxuXG4gIHByaXZhdGUgcnVuRWZmZWN0KG9uQ2xlYW51cDogV2F0Y2hDbGVhbnVwUmVnaXN0ZXJGbik6IHZvaWQge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLmVmZmVjdEZuKG9uQ2xlYW51cCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJbmplY3QgdGhlIGBFcnJvckhhbmRsZXJgIGhlcmUgaW4gb3JkZXIgdG8gYXZvaWQgY2lyY3VsYXIgREkgZXJyb3JcbiAgICAgIC8vIGlmIHRoZSBlZmZlY3QgaXMgdXNlZCBpbnNpZGUgb2YgYSBjdXN0b20gYEVycm9ySGFuZGxlcmAuXG4gICAgICBjb25zdCBlcnJvckhhbmRsZXIgPSB0aGlzLmluamVjdG9yLmdldChFcnJvckhhbmRsZXIsIG51bGwsIHtvcHRpb25hbDogdHJ1ZX0pO1xuICAgICAgZXJyb3JIYW5kbGVyPy5oYW5kbGVFcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuXG4gIHJ1bigpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoZXIucnVuKCk7XG4gIH1cblxuICBwcml2YXRlIHNjaGVkdWxlKCk6IHZvaWQge1xuICAgIHRoaXMuc2NoZWR1bGVyLnNjaGVkdWxlRWZmZWN0KHRoaXMpO1xuICB9XG5cbiAgZGVzdHJveSgpOiB2b2lkIHtcbiAgICB0aGlzLndhdGNoZXIuZGVzdHJveSgpO1xuICAgIHRoaXMudW5yZWdpc3Rlck9uRGVzdHJveT8uKCk7XG5cbiAgICAvLyBOb3RlOiBpZiB0aGUgZWZmZWN0IGlzIGN1cnJlbnRseSBzY2hlZHVsZWQsIGl0J3Mgbm90IHVuLXNjaGVkdWxlZCwgYW5kIHNvIHRoZSBzY2hlZHVsZXIgd2lsbFxuICAgIC8vIHJldGFpbiBhIHJlZmVyZW5jZSB0byBpdC4gQXR0ZW1wdGluZyB0byBleGVjdXRlIGl0IHdpbGwgYmUgYSBuby1vcC5cbiAgfVxufVxuXG4vKipcbiAqIEEgZ2xvYmFsIHJlYWN0aXZlIGVmZmVjdCwgd2hpY2ggY2FuIGJlIG1hbnVhbGx5IGRlc3Ryb3llZC5cbiAqXG4gKiBAZGV2ZWxvcGVyUHJldmlld1xuICovXG5leHBvcnQgaW50ZXJmYWNlIEVmZmVjdFJlZiB7XG4gIC8qKlxuICAgKiBTaHV0IGRvd24gdGhlIGVmZmVjdCwgcmVtb3ZpbmcgaXQgZnJvbSBhbnkgdXBjb21pbmcgc2NoZWR1bGVkIGV4ZWN1dGlvbnMuXG4gICAqL1xuICBkZXN0cm95KCk6IHZvaWQ7XG59XG5cbi8qKlxuICogT3B0aW9ucyBwYXNzZWQgdG8gdGhlIGBlZmZlY3RgIGZ1bmN0aW9uLlxuICpcbiAqIEBkZXZlbG9wZXJQcmV2aWV3XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlYXRlRWZmZWN0T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgYEluamVjdG9yYCBpbiB3aGljaCB0byBjcmVhdGUgdGhlIGVmZmVjdC5cbiAgICpcbiAgICogSWYgdGhpcyBpcyBub3QgcHJvdmlkZWQsIHRoZSBjdXJyZW50IFtpbmplY3Rpb24gY29udGV4dF0oZ3VpZGUvZGkvZGVwZW5kZW5jeS1pbmplY3Rpb24tY29udGV4dClcbiAgICogd2lsbCBiZSB1c2VkIGluc3RlYWQgKHZpYSBgaW5qZWN0YCkuXG4gICAqL1xuICBpbmplY3Rvcj86IEluamVjdG9yO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBgZWZmZWN0YCBzaG91bGQgcmVxdWlyZSBtYW51YWwgY2xlYW51cC5cbiAgICpcbiAgICogSWYgdGhpcyBpcyBgZmFsc2VgICh0aGUgZGVmYXVsdCkgdGhlIGVmZmVjdCB3aWxsIGF1dG9tYXRpY2FsbHkgcmVnaXN0ZXIgaXRzZWxmIHRvIGJlIGNsZWFuZWQgdXBcbiAgICogd2l0aCB0aGUgY3VycmVudCBgRGVzdHJveVJlZmAuXG4gICAqL1xuICBtYW51YWxDbGVhbnVwPzogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGUgYGVmZmVjdGAgc2hvdWxkIGFsbG93IHdyaXRpbmcgdG8gc2lnbmFscy5cbiAgICpcbiAgICogVXNpbmcgZWZmZWN0cyB0byBzeW5jaHJvbml6ZSBkYXRhIGJ5IHdyaXRpbmcgdG8gc2lnbmFscyBjYW4gbGVhZCB0byBjb25mdXNpbmcgYW5kIHBvdGVudGlhbGx5XG4gICAqIGluY29ycmVjdCBiZWhhdmlvciwgYW5kIHNob3VsZCBiZSBlbmFibGVkIG9ubHkgd2hlbiBuZWNlc3NhcnkuXG4gICAqL1xuICBhbGxvd1NpZ25hbFdyaXRlcz86IGJvb2xlYW47XG59XG5cbi8qKlxuICogQ3JlYXRlIGEgZ2xvYmFsIGBFZmZlY3RgIGZvciB0aGUgZ2l2ZW4gcmVhY3RpdmUgZnVuY3Rpb24uXG4gKlxuICogQGRldmVsb3BlclByZXZpZXdcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGVmZmVjdChcbiAgZWZmZWN0Rm46IChvbkNsZWFudXA6IEVmZmVjdENsZWFudXBSZWdpc3RlckZuKSA9PiB2b2lkLFxuICBvcHRpb25zPzogQ3JlYXRlRWZmZWN0T3B0aW9ucyxcbik6IEVmZmVjdFJlZiB7XG4gIHBlcmZvcm1hbmNlTWFya0ZlYXR1cmUoJ05nU2lnbmFscycpO1xuICBuZ0Rldk1vZGUgJiZcbiAgICBhc3NlcnROb3RJblJlYWN0aXZlQ29udGV4dChcbiAgICAgIGVmZmVjdCxcbiAgICAgICdDYWxsIGBlZmZlY3RgIG91dHNpZGUgb2YgYSByZWFjdGl2ZSBjb250ZXh0LiBGb3IgZXhhbXBsZSwgc2NoZWR1bGUgdGhlICcgK1xuICAgICAgICAnZWZmZWN0IGluc2lkZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yLicsXG4gICAgKTtcblxuICAhb3B0aW9ucz8uaW5qZWN0b3IgJiYgYXNzZXJ0SW5JbmplY3Rpb25Db250ZXh0KGVmZmVjdCk7XG4gIGNvbnN0IGluamVjdG9yID0gb3B0aW9ucz8uaW5qZWN0b3IgPz8gaW5qZWN0KEluamVjdG9yKTtcbiAgY29uc3QgZGVzdHJveVJlZiA9IG9wdGlvbnM/Lm1hbnVhbENsZWFudXAgIT09IHRydWUgPyBpbmplY3Rvci5nZXQoRGVzdHJveVJlZikgOiBudWxsO1xuXG4gIGNvbnN0IGhhbmRsZSA9IG5ldyBFZmZlY3RIYW5kbGUoXG4gICAgaW5qZWN0b3IuZ2V0KEFQUF9FRkZFQ1RfU0NIRURVTEVSKSxcbiAgICBlZmZlY3RGbixcbiAgICB0eXBlb2YgWm9uZSA9PT0gJ3VuZGVmaW5lZCcgPyBudWxsIDogWm9uZS5jdXJyZW50LFxuICAgIGRlc3Ryb3lSZWYsXG4gICAgaW5qZWN0b3IsXG4gICAgb3B0aW9ucz8uYWxsb3dTaWduYWxXcml0ZXMgPz8gZmFsc2UsXG4gICk7XG5cbiAgLy8gRWZmZWN0cyBuZWVkIHRvIGJlIG1hcmtlZCBkaXJ0eSBtYW51YWxseSB0byB0cmlnZ2VyIHRoZWlyIGluaXRpYWwgcnVuLiBUaGUgdGltaW5nIG9mIHRoaXNcbiAgLy8gbWFya2luZyBtYXR0ZXJzLCBiZWNhdXNlIHRoZSBlZmZlY3RzIG1heSByZWFkIHNpZ25hbHMgdGhhdCB0cmFjayBjb21wb25lbnQgaW5wdXRzLCB3aGljaCBhcmVcbiAgLy8gb25seSBhdmFpbGFibGUgYWZ0ZXIgdGhvc2UgY29tcG9uZW50cyBoYXZlIGhhZCB0aGVpciBmaXJzdCB1cGRhdGUgcGFzcy5cbiAgLy9cbiAgLy8gV2UgaW5qZWN0IGBDaGFuZ2VEZXRlY3RvclJlZmAgb3B0aW9uYWxseSwgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgdGhpcyBlZmZlY3QgaXMgYmVpbmcgY3JlYXRlZCBpblxuICAvLyB0aGUgY29udGV4dCBvZiBhIGNvbXBvbmVudCBvciBub3QuIElmIGl0IGlzLCB0aGVuIHdlIGNoZWNrIHdoZXRoZXIgdGhlIGNvbXBvbmVudCBoYXMgYWxyZWFkeVxuICAvLyBydW4gaXRzIHVwZGF0ZSBwYXNzLCBhbmQgZGVmZXIgdGhlIGVmZmVjdCdzIGluaXRpYWwgc2NoZWR1bGluZyB1bnRpbCB0aGUgdXBkYXRlIHBhc3MgaWYgaXRcbiAgLy8gaGFzbid0IGFscmVhZHkgcnVuLlxuICBjb25zdCBjZHIgPSBpbmplY3Rvci5nZXQoQ2hhbmdlRGV0ZWN0b3JSZWYsIG51bGwsIHtvcHRpb25hbDogdHJ1ZX0pIGFzIFZpZXdSZWY8dW5rbm93bj4gfCBudWxsO1xuICBpZiAoIWNkciB8fCAhKGNkci5fbFZpZXdbRkxBR1NdICYgTFZpZXdGbGFncy5GaXJzdExWaWV3UGFzcykpIHtcbiAgICAvLyBUaGlzIGVmZmVjdCBpcyBlaXRoZXIgbm90IHJ1bm5pbmcgaW4gYSB2aWV3IGluamVjdG9yLCBvciB0aGUgdmlldyBoYXMgYWxyZWFkeVxuICAgIC8vIHVuZGVyZ29uZSBpdHMgZmlyc3QgY2hhbmdlIGRldGVjdGlvbiBwYXNzLCB3aGljaCBpcyBuZWNlc3NhcnkgZm9yIGFueSByZXF1aXJlZCBpbnB1dHMgdG8gYmVcbiAgICAvLyBzZXQuXG4gICAgaGFuZGxlLndhdGNoZXIubm90aWZ5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gRGVsYXkgdGhlIGluaXRpYWxpemF0aW9uIG9mIHRoZSBlZmZlY3QgdW50aWwgdGhlIHZpZXcgaXMgZnVsbHkgaW5pdGlhbGl6ZWQuXG4gICAgKGNkci5fbFZpZXdbRUZGRUNUU19UT19TQ0hFRFVMRV0gPz89IFtdKS5wdXNoKGhhbmRsZS53YXRjaGVyLm5vdGlmeSk7XG4gIH1cblxuICByZXR1cm4gaGFuZGxlO1xufVxuIl19