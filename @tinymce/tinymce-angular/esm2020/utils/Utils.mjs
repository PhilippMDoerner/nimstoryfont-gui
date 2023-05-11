/**
 * Copyright (c) 2017-present, Ephox, Inc.
 *
 * This source code is licensed under the Apache 2 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
import { fromEvent } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { validEvents } from '../editor/Events';
// Caretaker note: `fromEvent` supports passing JQuery-style event targets, the editor has `on` and `off` methods which
// will be invoked upon subscription and teardown.
const listenTinyMCEEvent = (editor, eventName, destroy$) => fromEvent(editor, eventName).pipe(takeUntil(destroy$));
const bindHandlers = (ctx, editor, destroy$) => {
    const allowedEvents = getValidEvents(ctx);
    allowedEvents.forEach((eventName) => {
        const eventEmitter = ctx[eventName];
        listenTinyMCEEvent(editor, eventName.substring(2), destroy$).subscribe((event) => {
            // Caretaker note: `ngZone.run()` runs change detection since it notifies the forked Angular zone that it's
            // being re-entered. We don't want to run `ApplicationRef.tick()` if anyone listens to the specific event
            // within the template. E.g. if the `onSelectionChange` is not listened within the template like:
            // `<editor (onSelectionChange)="..."></editor>`
            // then its `observers` array will be empty, and we won't run "dead" change detection.
            if (eventEmitter.observers.length > 0) {
                ctx.ngZone.run(() => eventEmitter.emit({ event, editor }));
            }
        });
    });
};
const getValidEvents = (ctx) => {
    const ignoredEvents = parseStringProperty(ctx.ignoreEvents, []);
    const allowedEvents = parseStringProperty(ctx.allowedEvents, validEvents).filter((event) => validEvents.includes(event) && !ignoredEvents.includes(event));
    return allowedEvents;
};
const parseStringProperty = (property, defaultValue) => {
    if (typeof property === 'string') {
        return property.split(',').map((value) => value.trim());
    }
    if (Array.isArray(property)) {
        return property;
    }
    return defaultValue;
};
let unique = 0;
const uuid = (prefix) => {
    const date = new Date();
    const time = date.getTime();
    const random = Math.floor(Math.random() * 1000000000);
    unique++;
    return prefix + '_' + random + unique + String(time);
};
const isTextarea = (element) => typeof element !== 'undefined' && element.tagName.toLowerCase() === 'textarea';
const normalizePluginArray = (plugins) => {
    if (typeof plugins === 'undefined' || plugins === '') {
        return [];
    }
    return Array.isArray(plugins) ? plugins : plugins.split(' ');
};
const mergePlugins = (initPlugins, inputPlugins) => normalizePluginArray(initPlugins).concat(normalizePluginArray(inputPlugins));
// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = () => { };
const isNullOrUndefined = (value) => value === null || value === undefined;
export { listenTinyMCEEvent, bindHandlers, uuid, isTextarea, normalizePluginArray, mergePlugins, noop, isNullOrUndefined };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXRpbHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi90aW55bWNlLWFuZ3VsYXItY29tcG9uZW50L3NyYy9tYWluL3RzL3V0aWxzL1V0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRztBQUdILE9BQU8sRUFBRSxTQUFTLEVBQVcsTUFBTSxNQUFNLENBQUM7QUFFMUMsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRzNDLE9BQU8sRUFBRSxXQUFXLEVBQVUsTUFBTSxrQkFBa0IsQ0FBQztBQUV2RCx1SEFBdUg7QUFDdkgsa0RBQWtEO0FBQ2xELE1BQU0sa0JBQWtCLEdBQUcsQ0FDekIsTUFBVyxFQUNYLFNBQWlCLEVBQ2pCLFFBQXVCLEVBQ3ZCLEVBQUUsQ0FBQyxTQUFTLENBQUMsTUFBd0YsRUFBRSxTQUFTLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7QUFFOUksTUFBTSxZQUFZLEdBQUcsQ0FBQyxHQUFvQixFQUFFLE1BQVcsRUFBRSxRQUF1QixFQUFRLEVBQUU7SUFDeEYsTUFBTSxhQUFhLEdBQUcsY0FBYyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLEVBQUUsRUFBRTtRQUNsQyxNQUFNLFlBQVksR0FBc0IsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRXZELGtCQUFrQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQy9FLDJHQUEyRztZQUMzRyx5R0FBeUc7WUFDekcsaUdBQWlHO1lBQ2pHLGdEQUFnRDtZQUNoRCxzRkFBc0Y7WUFDdEYsSUFBSSxZQUFZLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JDLEdB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UyxDQUFDO0FBRTNHLE9BQU8sRUFDTCxrQkFBa0IsRUFDbEIsWUFBWSxFQUNaLElBQUksRUFDSixVQUFVLEVBQ1Ysb0JBQW9CLEVBQ3BCLFlBQVksRUFDWixJQUFJLEVBQ0osaUJBQWlCLEVBQ2xCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNy1wcmVzZW50LCBFcGhveCwgSW5jLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSAyIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICovXG5cbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBIYXNFdmVudFRhcmdldEFkZFJlbW92ZSB9IGZyb20gJ3J4anMvaW50ZXJuYWwvb2JzZXJ2YWJsZS9mcm9tRXZlbnQnO1xuaW1wb3J0IHsgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgeyBFZGl0b3JDb21wb25lbnQgfSBmcm9tICcuLi9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudCc7XG5pbXBvcnQgeyB2YWxpZEV2ZW50cywgRXZlbnRzIH0gZnJvbSAnLi4vZWRpdG9yL0V2ZW50cyc7XG5cbi8vIENhcmV0YWtlciBub3RlOiBgZnJvbUV2ZW50YCBzdXBwb3J0cyBwYXNzaW5nIEpRdWVyeS1zdHlsZSBldmVudCB0YXJnZXRzLCB0aGUgZWRpdG9yIGhhcyBgb25gIGFuZCBgb2ZmYCBtZXRob2RzIHdoaWNoXG4vLyB3aWxsIGJlIGludm9rZWQgdXBvbiBzdWJzY3JpcHRpb24gYW5kIHRlYXJkb3duLlxuY29uc3QgbGlzdGVuVGlueU1DRUV2ZW50ID0gKFxuICBlZGl0b3I6IGFueSxcbiAgZXZlbnROYW1lOiBzdHJpbmcsXG4gIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+XG4pID0+IGZyb21FdmVudChlZGl0b3IgYXMgSGFzRXZlbnRUYXJnZXRBZGRSZW1vdmU8dW5rbm93bj4gfCBBcnJheUxpa2U8SGFzRXZlbnRUYXJnZXRBZGRSZW1vdmU8dW5rbm93bj4+LCBldmVudE5hbWUpLnBpcGUodGFrZVVudGlsKGRlc3Ryb3kkKSk7XG5cbmNvbnN0IGJpbmRIYW5kbGVycyA9IChjdHg6IEVkaXRvckNvbXBvbmVudCwgZWRpdG9yOiBhbnksIGRlc3Ryb3kkOiBTdWJqZWN0PHZvaWQ+KTogdm9pZCA9PiB7XG4gIGNvbnN0IGFsbG93ZWRFdmVudHMgPSBnZXRWYWxpZEV2ZW50cyhjdHgpO1xuICBhbGxvd2VkRXZlbnRzLmZvckVhY2goKGV2ZW50TmFtZSkgPT4ge1xuICAgIGNvbnN0IGV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBjdHhbZXZlbnROYW1lXTtcblxuICAgIGxpc3RlblRpbnlNQ0VFdmVudChlZGl0b3IsIGV2ZW50TmFtZS5zdWJzdHJpbmcoMiksIGRlc3Ryb3kkKS5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAvLyBDYXJldGFrZXIgbm90ZTogYG5nWm9uZS5ydW4oKWAgcnVucyBjaGFuZ2UgZGV0ZWN0aW9uIHNpbmNlIGl0IG5vdGlmaWVzIHRoZSBmb3JrZWQgQW5ndWxhciB6b25lIHRoYXQgaXQnc1xuICAgICAgLy8gYmVpbmcgcmUtZW50ZXJlZC4gV2UgZG9uJ3Qgd2FudCB0byBydW4gYEFwcGxpY2F0aW9uUmVmLnRpY2soKWAgaWYgYW55b25lIGxpc3RlbnMgdG8gdGhlIHNwZWNpZmljIGV2ZW50XG4gICAgICAvLyB3aXRoaW4gdGhlIHRlbXBsYXRlLiBFLmcuIGlmIHRoZSBgb25TZWxlY3Rpb25DaGFuZ2VgIGlzIG5vdCBsaXN0ZW5lZCB3aXRoaW4gdGhlIHRlbXBsYXRlIGxpa2U6XG4gICAgICAvLyBgPGVkaXRvciAob25TZWxlY3Rpb25DaGFuZ2UpPVwiLi4uXCI+PC9lZGl0b3I+YFxuICAgICAgLy8gdGhlbiBpdHMgYG9ic2VydmVyc2AgYXJyYXkgd2lsbCBiZSBlbXB0eSwgYW5kIHdlIHdvbid0IHJ1biBcImRlYWRcIiBjaGFuZ2UgZGV0ZWN0aW9uLlxuICAgICAgaWYgKGV2ZW50RW1pdHRlci5vYnNlcnZlcnMubGVuZ3RoID4gMCkge1xuICAgICAgICBjdHgubmdab25lLnJ1bigoKSA9PiBldmVudEVtaXR0ZXIuZW1pdCh7IGV2ZW50LCBlZGl0b3IgfSkpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IGdldFZhbGlkRXZlbnRzID0gKGN0eDogRWRpdG9yQ29tcG9uZW50KTogKGtleW9mIEV2ZW50cylbXSA9PiB7XG4gIGNvbnN0IGlnbm9yZWRFdmVudHMgPSBwYXJzZVN0cmluZ1Byb3BlcnR5KGN0eC5pZ25vcmVFdmVudHMsIFtdKTtcbiAgY29uc3QgYWxsb3dlZEV2ZW50cyA9IHBhcnNlU3RyaW5nUHJvcGVydHkoY3R4LmFsbG93ZWRFdmVudHMsIHZhbGlkRXZlbnRzKS5maWx0ZXIoXG4gICAgKGV2ZW50KSA9PiB2YWxpZEV2ZW50cy5pbmNsdWRlcyhldmVudCBhcyAoa2V5b2YgRXZlbnRzKSkgJiYgIWlnbm9yZWRFdmVudHMuaW5jbHVkZXMoZXZlbnQpKSBhcyAoa2V5b2YgRXZlbnRzKVtdO1xuICByZXR1cm4gYWxsb3dlZEV2ZW50cztcbn07XG5cbmNvbnN0IHBhcnNlU3RyaW5nUHJvcGVydHkgPSAocHJvcGVydHk6IHN0cmluZyB8IHN0cmluZ1tdIHwgdW5kZWZpbmVkLCBkZWZhdWx0VmFsdWU6IChrZXlvZiBFdmVudHMpW10pOiBzdHJpbmdbXSA9PiB7XG4gIGlmICggdHlwZW9mIHByb3BlcnR5ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBwcm9wZXJ0eS5zcGxpdCgnLCcpLm1hcCgodmFsdWUpID0+IHZhbHVlLnRyaW0oKSk7XG4gIH1cbiAgaWYgKCBBcnJheS5pc0FycmF5KHByb3BlcnR5KSkge1xuICAgIHJldHVybiBwcm9wZXJ0eTtcbiAgfVxuICByZXR1cm4gZGVmYXVsdFZhbHVlO1xufTtcblxubGV0IHVuaXF1ZSA9IDA7XG5cbmNvbnN0IHV1aWQgPSAocHJlZml4OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgY29uc3QgdGltZSA9IGRhdGUuZ2V0VGltZSgpO1xuICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMDAwMDAwKTtcblxuICB1bmlxdWUrKztcblxuICByZXR1cm4gcHJlZml4ICsgJ18nICsgcmFuZG9tICsgdW5pcXVlICsgU3RyaW5nKHRpbWUpO1xufTtcblxuY29uc3QgaXNUZXh0YXJlYSA9IChlbGVtZW50PzogRWxlbWVudCk6IGVsZW1lbnQgaXMgSFRNTFRleHRBcmVhRWxlbWVudCA9PiB0eXBlb2YgZWxlbWVudCAhPT0gJ3VuZGVmaW5lZCcgJiYgZWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICd0ZXh0YXJlYSc7XG5cbmNvbnN0IG5vcm1hbGl6ZVBsdWdpbkFycmF5ID0gKHBsdWdpbnM/OiBzdHJpbmcgfCBzdHJpbmdbXSk6IHN0cmluZ1tdID0+IHtcbiAgaWYgKHR5cGVvZiBwbHVnaW5zID09PSAndW5kZWZpbmVkJyB8fCBwbHVnaW5zID09PSAnJykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBBcnJheS5pc0FycmF5KHBsdWdpbnMpID8gcGx1Z2lucyA6IHBsdWdpbnMuc3BsaXQoJyAnKTtcbn07XG5cbmNvbnN0IG1lcmdlUGx1Z2lucyA9IChpbml0UGx1Z2luczogc3RyaW5nIHwgc3RyaW5nW10sIGlucHV0UGx1Z2lucz86IHN0cmluZyB8IHN0cmluZ1tdKSA9PlxuICBub3JtYWxpemVQbHVnaW5BcnJheShpbml0UGx1Z2lucykuY29uY2F0KG5vcm1hbGl6ZVBsdWdpbkFycmF5KGlucHV0UGx1Z2lucykpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWVtcHR5LWZ1bmN0aW9uXG5jb25zdCBub29wOiAoLi4uYXJnczogYW55W10pID0+IHZvaWQgPSAoKSA9PiB7IH07XG5cbmNvbnN0IGlzTnVsbE9yVW5kZWZpbmVkID0gKHZhbHVlOiBhbnkpOiB2YWx1ZSBpcyBudWxsIHwgdW5kZWZpbmVkID0+IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG5cbmV4cG9ydCB7XG4gIGxpc3RlblRpbnlNQ0VFdmVudCxcbiAgYmluZEhhbmRsZXJzLFxuICB1dWlkLFxuICBpc1RleHRhcmVhLFxuICBub3JtYWxpemVQbHVnaW5BcnJheSxcbiAgbWVyZ2VQbHVnaW5zLFxuICBub29wLFxuICBpc051bGxPclVuZGVmaW5lZFxufTtcbiJdfQ==