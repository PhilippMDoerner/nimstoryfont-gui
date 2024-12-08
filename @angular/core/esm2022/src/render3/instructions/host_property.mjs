/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.dev/license
 */
import { bindingUpdated } from '../bindings';
import { RENDERER } from '../interfaces/view';
import { getCurrentDirectiveDef, getLView, getSelectedTNode, getTView, nextBindingIndex, } from '../state';
import { elementPropertyInternal, loadComponentRenderer, storePropertyBindingMetadata, } from './shared';
/**
 * Update a property on a host element. Only applies to native node properties, not inputs.
 *
 * Operates on the element selected by index via the {@link select} instruction.
 *
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 * @returns This function returns itself so that it may be chained
 * (e.g. `property('name', ctx.name)('title', ctx.title)`)
 *
 * @codeGenApi
 */
export function ɵɵhostProperty(propName, value, sanitizer) {
    const lView = getLView();
    const bindingIndex = nextBindingIndex();
    if (bindingUpdated(lView, bindingIndex, value)) {
        const tView = getTView();
        const tNode = getSelectedTNode();
        elementPropertyInternal(tView, tNode, lView, propName, value, lView[RENDERER], sanitizer, true);
        ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
    }
    return ɵɵhostProperty;
}
/**
 * Updates a synthetic host binding (e.g. `[@foo]`) on a component or directive.
 *
 * This instruction is for compatibility purposes and is designed to ensure that a
 * synthetic host binding (e.g. `@HostBinding('@foo')`) properly gets rendered in
 * the component's renderer. Normally all host bindings are evaluated with the parent
 * component's renderer, but, in the case of animation @triggers, they need to be
 * evaluated with the sub component's renderer (because that's where the animation
 * triggers are defined).
 *
 * Do not use this instruction as a replacement for `elementProperty`. This instruction
 * only exists to ensure compatibility with the ViewEngine's host binding behavior.
 *
 * @param index The index of the element to update in the data array
 * @param propName Name of property. Because it is going to DOM, this is not subject to
 *        renaming as part of minification.
 * @param value New value to write.
 * @param sanitizer An optional function used to sanitize the value.
 *
 * @codeGenApi
 */
export function ɵɵsyntheticHostProperty(propName, value, sanitizer) {
    const lView = getLView();
    const bindingIndex = nextBindingIndex();
    if (bindingUpdated(lView, bindingIndex, value)) {
        const tView = getTView();
        const tNode = getSelectedTNode();
        const currentDef = getCurrentDirectiveDef(tView.data);
        const renderer = loadComponentRenderer(currentDef, tNode, lView);
        elementPropertyInternal(tView, tNode, lView, propName, value, renderer, sanitizer, true);
        ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
    }
    return ɵɵsyntheticHostProperty;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9zdF9wcm9wZXJ0eS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL3BhY2thZ2VzL2NvcmUvc3JjL3JlbmRlcjMvaW5zdHJ1Y3Rpb25zL2hvc3RfcHJvcGVydHkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztHQU1HO0FBQ0gsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLGFBQWEsQ0FBQztBQUUzQyxPQUFPLEVBQUMsUUFBUSxFQUFDLE1BQU0sb0JBQW9CLENBQUM7QUFDNUMsT0FBTyxFQUNMLHNCQUFzQixFQUN0QixRQUFRLEVBQ1IsZ0JBQWdCLEVBQ2hCLFFBQVEsRUFDUixnQkFBZ0IsR0FDakIsTUFBTSxVQUFVLENBQUM7QUFHbEIsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixxQkFBcUIsRUFDckIsNEJBQTRCLEdBQzdCLE1BQU0sVUFBVSxDQUFDO0FBRWxCOzs7Ozs7Ozs7Ozs7O0dBYUc7QUFDSCxNQUFNLFVBQVUsY0FBYyxDQUM1QixRQUFnQixFQUNoQixLQUFRLEVBQ1IsU0FBOEI7SUFFOUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDL0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqQyx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDaEcsU0FBUyxJQUFJLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0QsT0FBTyxjQUFjLENBQUM7QUFDeEIsQ0FBQztBQUVEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQW9CRztBQUNILE1BQU0sVUFBVSx1QkFBdUIsQ0FDckMsUUFBZ0IsRUFDaEIsS0FBb0IsRUFDcEIsU0FBOEI7SUFFOUIsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7SUFDekIsTUFBTSxZQUFZLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztJQUN4QyxJQUFJLGNBQWMsQ0FBQyxLQUFLLEVBQUUsWUFBWSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUM7UUFDL0MsTUFBTSxLQUFLLEdBQUcsUUFBUSxFQUFFLENBQUM7UUFDekIsTUFBTSxLQUFLLEdBQUcsZ0JBQWdCLEVBQUUsQ0FBQztRQUNqQyxNQUFNLFVBQVUsR0FBRyxzQkFBc0IsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEQsTUFBTSxRQUFRLEdBQUcscUJBQXFCLENBQUMsVUFBVSxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNqRSx1QkFBdUIsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDekYsU0FBUyxJQUFJLDRCQUE0QixDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUN2RixDQUFDO0lBQ0QsT0FBTyx1QkFBdUIsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuZGV2L2xpY2Vuc2VcbiAqL1xuaW1wb3J0IHtiaW5kaW5nVXBkYXRlZH0gZnJvbSAnLi4vYmluZGluZ3MnO1xuaW1wb3J0IHtTYW5pdGl6ZXJGbn0gZnJvbSAnLi4vaW50ZXJmYWNlcy9zYW5pdGl6YXRpb24nO1xuaW1wb3J0IHtSRU5ERVJFUn0gZnJvbSAnLi4vaW50ZXJmYWNlcy92aWV3JztcbmltcG9ydCB7XG4gIGdldEN1cnJlbnREaXJlY3RpdmVEZWYsXG4gIGdldExWaWV3LFxuICBnZXRTZWxlY3RlZFROb2RlLFxuICBnZXRUVmlldyxcbiAgbmV4dEJpbmRpbmdJbmRleCxcbn0gZnJvbSAnLi4vc3RhdGUnO1xuaW1wb3J0IHtOT19DSEFOR0V9IGZyb20gJy4uL3Rva2Vucyc7XG5cbmltcG9ydCB7XG4gIGVsZW1lbnRQcm9wZXJ0eUludGVybmFsLFxuICBsb2FkQ29tcG9uZW50UmVuZGVyZXIsXG4gIHN0b3JlUHJvcGVydHlCaW5kaW5nTWV0YWRhdGEsXG59IGZyb20gJy4vc2hhcmVkJztcblxuLyoqXG4gKiBVcGRhdGUgYSBwcm9wZXJ0eSBvbiBhIGhvc3QgZWxlbWVudC4gT25seSBhcHBsaWVzIHRvIG5hdGl2ZSBub2RlIHByb3BlcnRpZXMsIG5vdCBpbnB1dHMuXG4gKlxuICogT3BlcmF0ZXMgb24gdGhlIGVsZW1lbnQgc2VsZWN0ZWQgYnkgaW5kZXggdmlhIHRoZSB7QGxpbmsgc2VsZWN0fSBpbnN0cnVjdGlvbi5cbiAqXG4gKiBAcGFyYW0gcHJvcE5hbWUgTmFtZSBvZiBwcm9wZXJ0eS4gQmVjYXVzZSBpdCBpcyBnb2luZyB0byBET00sIHRoaXMgaXMgbm90IHN1YmplY3QgdG9cbiAqICAgICAgICByZW5hbWluZyBhcyBwYXJ0IG9mIG1pbmlmaWNhdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgdG8gd3JpdGUuXG4gKiBAcGFyYW0gc2FuaXRpemVyIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc2FuaXRpemUgdGhlIHZhbHVlLlxuICogQHJldHVybnMgVGhpcyBmdW5jdGlvbiByZXR1cm5zIGl0c2VsZiBzbyB0aGF0IGl0IG1heSBiZSBjaGFpbmVkXG4gKiAoZS5nLiBgcHJvcGVydHkoJ25hbWUnLCBjdHgubmFtZSkoJ3RpdGxlJywgY3R4LnRpdGxlKWApXG4gKlxuICogQGNvZGVHZW5BcGlcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIMm1ybVob3N0UHJvcGVydHk8VD4oXG4gIHByb3BOYW1lOiBzdHJpbmcsXG4gIHZhbHVlOiBULFxuICBzYW5pdGl6ZXI/OiBTYW5pdGl6ZXJGbiB8IG51bGwsXG4pOiB0eXBlb2YgybXJtWhvc3RQcm9wZXJ0eSB7XG4gIGNvbnN0IGxWaWV3ID0gZ2V0TFZpZXcoKTtcbiAgY29uc3QgYmluZGluZ0luZGV4ID0gbmV4dEJpbmRpbmdJbmRleCgpO1xuICBpZiAoYmluZGluZ1VwZGF0ZWQobFZpZXcsIGJpbmRpbmdJbmRleCwgdmFsdWUpKSB7XG4gICAgY29uc3QgdFZpZXcgPSBnZXRUVmlldygpO1xuICAgIGNvbnN0IHROb2RlID0gZ2V0U2VsZWN0ZWRUTm9kZSgpO1xuICAgIGVsZW1lbnRQcm9wZXJ0eUludGVybmFsKHRWaWV3LCB0Tm9kZSwgbFZpZXcsIHByb3BOYW1lLCB2YWx1ZSwgbFZpZXdbUkVOREVSRVJdLCBzYW5pdGl6ZXIsIHRydWUpO1xuICAgIG5nRGV2TW9kZSAmJiBzdG9yZVByb3BlcnR5QmluZGluZ01ldGFkYXRhKHRWaWV3LmRhdGEsIHROb2RlLCBwcm9wTmFtZSwgYmluZGluZ0luZGV4KTtcbiAgfVxuICByZXR1cm4gybXJtWhvc3RQcm9wZXJ0eTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIGEgc3ludGhldGljIGhvc3QgYmluZGluZyAoZS5nLiBgW0Bmb29dYCkgb24gYSBjb21wb25lbnQgb3IgZGlyZWN0aXZlLlxuICpcbiAqIFRoaXMgaW5zdHJ1Y3Rpb24gaXMgZm9yIGNvbXBhdGliaWxpdHkgcHVycG9zZXMgYW5kIGlzIGRlc2lnbmVkIHRvIGVuc3VyZSB0aGF0IGFcbiAqIHN5bnRoZXRpYyBob3N0IGJpbmRpbmcgKGUuZy4gYEBIb3N0QmluZGluZygnQGZvbycpYCkgcHJvcGVybHkgZ2V0cyByZW5kZXJlZCBpblxuICogdGhlIGNvbXBvbmVudCdzIHJlbmRlcmVyLiBOb3JtYWxseSBhbGwgaG9zdCBiaW5kaW5ncyBhcmUgZXZhbHVhdGVkIHdpdGggdGhlIHBhcmVudFxuICogY29tcG9uZW50J3MgcmVuZGVyZXIsIGJ1dCwgaW4gdGhlIGNhc2Ugb2YgYW5pbWF0aW9uIEB0cmlnZ2VycywgdGhleSBuZWVkIHRvIGJlXG4gKiBldmFsdWF0ZWQgd2l0aCB0aGUgc3ViIGNvbXBvbmVudCdzIHJlbmRlcmVyIChiZWNhdXNlIHRoYXQncyB3aGVyZSB0aGUgYW5pbWF0aW9uXG4gKiB0cmlnZ2VycyBhcmUgZGVmaW5lZCkuXG4gKlxuICogRG8gbm90IHVzZSB0aGlzIGluc3RydWN0aW9uIGFzIGEgcmVwbGFjZW1lbnQgZm9yIGBlbGVtZW50UHJvcGVydHlgLiBUaGlzIGluc3RydWN0aW9uXG4gKiBvbmx5IGV4aXN0cyB0byBlbnN1cmUgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBWaWV3RW5naW5lJ3MgaG9zdCBiaW5kaW5nIGJlaGF2aW9yLlxuICpcbiAqIEBwYXJhbSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgdG8gdXBkYXRlIGluIHRoZSBkYXRhIGFycmF5XG4gKiBAcGFyYW0gcHJvcE5hbWUgTmFtZSBvZiBwcm9wZXJ0eS4gQmVjYXVzZSBpdCBpcyBnb2luZyB0byBET00sIHRoaXMgaXMgbm90IHN1YmplY3QgdG9cbiAqICAgICAgICByZW5hbWluZyBhcyBwYXJ0IG9mIG1pbmlmaWNhdGlvbi5cbiAqIEBwYXJhbSB2YWx1ZSBOZXcgdmFsdWUgdG8gd3JpdGUuXG4gKiBAcGFyYW0gc2FuaXRpemVyIEFuIG9wdGlvbmFsIGZ1bmN0aW9uIHVzZWQgdG8gc2FuaXRpemUgdGhlIHZhbHVlLlxuICpcbiAqIEBjb2RlR2VuQXBpXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiDJtcm1c3ludGhldGljSG9zdFByb3BlcnR5PFQ+KFxuICBwcm9wTmFtZTogc3RyaW5nLFxuICB2YWx1ZTogVCB8IE5PX0NIQU5HRSxcbiAgc2FuaXRpemVyPzogU2FuaXRpemVyRm4gfCBudWxsLFxuKTogdHlwZW9mIMm1ybVzeW50aGV0aWNIb3N0UHJvcGVydHkge1xuICBjb25zdCBsVmlldyA9IGdldExWaWV3KCk7XG4gIGNvbnN0IGJpbmRpbmdJbmRleCA9IG5leHRCaW5kaW5nSW5kZXgoKTtcbiAgaWYgKGJpbmRpbmdVcGRhdGVkKGxWaWV3LCBiaW5kaW5nSW5kZXgsIHZhbHVlKSkge1xuICAgIGNvbnN0IHRWaWV3ID0gZ2V0VFZpZXcoKTtcbiAgICBjb25zdCB0Tm9kZSA9IGdldFNlbGVjdGVkVE5vZGUoKTtcbiAgICBjb25zdCBjdXJyZW50RGVmID0gZ2V0Q3VycmVudERpcmVjdGl2ZURlZih0Vmlldy5kYXRhKTtcbiAgICBjb25zdCByZW5kZXJlciA9IGxvYWRDb21wb25lbnRSZW5kZXJlcihjdXJyZW50RGVmLCB0Tm9kZSwgbFZpZXcpO1xuICAgIGVsZW1lbnRQcm9wZXJ0eUludGVybmFsKHRWaWV3LCB0Tm9kZSwgbFZpZXcsIHByb3BOYW1lLCB2YWx1ZSwgcmVuZGVyZXIsIHNhbml0aXplciwgdHJ1ZSk7XG4gICAgbmdEZXZNb2RlICYmIHN0b3JlUHJvcGVydHlCaW5kaW5nTWV0YWRhdGEodFZpZXcuZGF0YSwgdE5vZGUsIHByb3BOYW1lLCBiaW5kaW5nSW5kZXgpO1xuICB9XG4gIHJldHVybiDJtcm1c3ludGhldGljSG9zdFByb3BlcnR5O1xufVxuIl19