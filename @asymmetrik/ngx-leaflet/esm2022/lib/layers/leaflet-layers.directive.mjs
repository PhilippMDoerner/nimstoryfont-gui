import { Directive, Input } from '@angular/core';
import { LeafletDirectiveWrapper } from '../core/leaflet.directive.wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../core/leaflet.directive";
/**
 * Layers directive
 *
 * This directive is used to directly control map layers. As changes are made to the input array of
 * layers, the map is synched to the array. As layers are added or removed from the input array, they
 * are also added or removed from the map. The input array is treated as immutable. To detect changes,
 * you must change the array instance.
 *
 * Important Note: The input layers array is assumed to be immutable. This means you need to use an
 * immutable array implementation or create a new copy of your array when you make changes, otherwise
 * this directive won't detect the change. This is by design. It's for performance reasons. Change
 * detection of mutable arrays requires diffing the state of the array on every DoCheck cycle, which
 * is extremely expensive from a time complexity perspective.
 *
 */
export class LeafletLayersDirective {
    // Set/get the layers
    set layers(v) {
        this.layersValue = v;
        // Now that we have a differ, do an immediate layer update
        this.updateLayers();
    }
    get layers() {
        return this.layersValue;
    }
    constructor(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
        this.layersDiffer = this.differs.find([]).create();
    }
    ngDoCheck() {
        this.updateLayers();
    }
    ngOnInit() {
        // Init the map
        this.leafletDirective.init();
        // Update layers once the map is ready
        this.updateLayers();
    }
    ngOnDestroy() {
        this.layers = [];
    }
    /**
     * Update the state of the layers.
     * We use an iterable differ to synchronize the map layers with the state of the bound layers array.
     * This is important because it allows us to react to changes to the contents of the array as well
     * as changes to the actual array instance.
     */
    updateLayers() {
        const map = this.leafletDirective.getMap();
        if (null != map && null != this.layersDiffer) {
            const changes = this.layersDiffer.diff(this.layersValue);
            if (null != changes) {
                // Run outside angular to ensure layer events don't trigger change detection
                this.zone.runOutsideAngular(() => {
                    changes.forEachRemovedItem((c) => {
                        map.removeLayer(c.item);
                    });
                    changes.forEachAddedItem((c) => {
                        map.addLayer(c.item);
                    });
                });
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletLayersDirective, deps: [{ token: i1.LeafletDirective }, { token: i0.IterableDiffers }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: LeafletLayersDirective, selector: "[leafletLayers]", inputs: { layers: ["leafletLayers", "layers"] }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletLayersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[leafletLayers]'
                }]
        }], ctorParameters: () => [{ type: i1.LeafletDirective }, { type: i0.IterableDiffers }, { type: i0.NgZone }], propDecorators: { layers: [{
                type: Input,
                args: ['leafletLayers']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1sYXllcnMuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvbmd4LWxlYWZsZXQvc3JjL2xpYi9sYXllcnMvbGVhZmxldC1sYXllcnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVcsS0FBSyxFQUE4RCxNQUFNLGVBQWUsQ0FBQztBQUt0SCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQzs7O0FBRzVFOzs7Ozs7Ozs7Ozs7OztHQWNHO0FBSUgsTUFBTSxPQUFPLHNCQUFzQjtJQVNsQyxxQkFBcUI7SUFDckIsSUFDSSxNQUFNLENBQUMsQ0FBVTtRQUNwQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUVyQiwwREFBMEQ7UUFDMUQsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCxJQUFJLE1BQU07UUFDVCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDekIsQ0FBQztJQUtELFlBQVksZ0JBQWtDLEVBQVUsT0FBd0IsRUFBVSxJQUFZO1FBQTlDLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBQVUsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNyRyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFTLENBQUM7SUFDM0QsQ0FBQztJQUVELFNBQVM7UUFDUixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELFFBQVE7UUFFUCxlQUFlO1FBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksRUFBRSxDQUFDO1FBRTdCLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFFckIsQ0FBQztJQUVELFdBQVc7UUFDVixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSyxZQUFZO1FBRW5CLE1BQU0sR0FBRyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUUzQyxJQUFJLElBQUksSUFBSSxHQUFHLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUU5QyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDekQsSUFBSSxJQUFJLElBQUksT0FBTyxFQUFFLENBQUM7Z0JBRXJCLDRFQUE0RTtnQkFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7b0JBRWhDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO3dCQUNoQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekIsQ0FBQyxDQUFDLENBQUM7b0JBQ0gsT0FBTyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7d0JBQzlCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN0QixDQUFDLENBQUMsQ0FBQztnQkFFSixDQUFDLENBQUMsQ0FBQztZQUVKLENBQUM7UUFFRixDQUFDO0lBRUYsQ0FBQzs4R0E5RVcsc0JBQXNCO2tHQUF0QixzQkFBc0I7OzJGQUF0QixzQkFBc0I7a0JBSGxDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGlCQUFpQjtpQkFDM0I7d0lBWUksTUFBTTtzQkFEVCxLQUFLO3VCQUFDLGVBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIERvQ2hlY2ssIElucHV0LCBJdGVyYWJsZURpZmZlciwgSXRlcmFibGVEaWZmZXJzLCBOZ1pvbmUsIE9uRGVzdHJveSwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IExheWVyfSBmcm9tICdsZWFmbGV0JztcblxuaW1wb3J0IHsgTGVhZmxldERpcmVjdGl2ZSB9IGZyb20gJy4uL2NvcmUvbGVhZmxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGVhZmxldERpcmVjdGl2ZVdyYXBwZXIgfSBmcm9tICcuLi9jb3JlL2xlYWZsZXQuZGlyZWN0aXZlLndyYXBwZXInO1xuXG5cbi8qKlxuICogTGF5ZXJzIGRpcmVjdGl2ZVxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHVzZWQgdG8gZGlyZWN0bHkgY29udHJvbCBtYXAgbGF5ZXJzLiBBcyBjaGFuZ2VzIGFyZSBtYWRlIHRvIHRoZSBpbnB1dCBhcnJheSBvZlxuICogbGF5ZXJzLCB0aGUgbWFwIGlzIHN5bmNoZWQgdG8gdGhlIGFycmF5LiBBcyBsYXllcnMgYXJlIGFkZGVkIG9yIHJlbW92ZWQgZnJvbSB0aGUgaW5wdXQgYXJyYXksIHRoZXlcbiAqIGFyZSBhbHNvIGFkZGVkIG9yIHJlbW92ZWQgZnJvbSB0aGUgbWFwLiBUaGUgaW5wdXQgYXJyYXkgaXMgdHJlYXRlZCBhcyBpbW11dGFibGUuIFRvIGRldGVjdCBjaGFuZ2VzLFxuICogeW91IG11c3QgY2hhbmdlIHRoZSBhcnJheSBpbnN0YW5jZS5cbiAqXG4gKiBJbXBvcnRhbnQgTm90ZTogVGhlIGlucHV0IGxheWVycyBhcnJheSBpcyBhc3N1bWVkIHRvIGJlIGltbXV0YWJsZS4gVGhpcyBtZWFucyB5b3UgbmVlZCB0byB1c2UgYW5cbiAqIGltbXV0YWJsZSBhcnJheSBpbXBsZW1lbnRhdGlvbiBvciBjcmVhdGUgYSBuZXcgY29weSBvZiB5b3VyIGFycmF5IHdoZW4geW91IG1ha2UgY2hhbmdlcywgb3RoZXJ3aXNlXG4gKiB0aGlzIGRpcmVjdGl2ZSB3b24ndCBkZXRlY3QgdGhlIGNoYW5nZS4gVGhpcyBpcyBieSBkZXNpZ24uIEl0J3MgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuIENoYW5nZVxuICogZGV0ZWN0aW9uIG9mIG11dGFibGUgYXJyYXlzIHJlcXVpcmVzIGRpZmZpbmcgdGhlIHN0YXRlIG9mIHRoZSBhcnJheSBvbiBldmVyeSBEb0NoZWNrIGN5Y2xlLCB3aGljaFxuICogaXMgZXh0cmVtZWx5IGV4cGVuc2l2ZSBmcm9tIGEgdGltZSBjb21wbGV4aXR5IHBlcnNwZWN0aXZlLlxuICpcbiAqL1xuQERpcmVjdGl2ZSh7XG5cdHNlbGVjdG9yOiAnW2xlYWZsZXRMYXllcnNdJ1xufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TGF5ZXJzRGlyZWN0aXZlXG5cdGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95LCBPbkluaXQge1xuXG5cdC8vIEFycmF5IG9mIGNvbmZpZ3VyZWQgbGF5ZXJzXG5cdGxheWVyc1ZhbHVlOiBMYXllcltdO1xuXG5cdC8vIERpZmZlciB0byBkbyBjaGFuZ2UgZGV0ZWN0aW9uIG9uIHRoZSBhcnJheVxuXHRsYXllcnNEaWZmZXI6IEl0ZXJhYmxlRGlmZmVyPExheWVyPjtcblxuXHQvLyBTZXQvZ2V0IHRoZSBsYXllcnNcblx0QElucHV0KCdsZWFmbGV0TGF5ZXJzJylcblx0c2V0IGxheWVycyh2OiBMYXllcltdKSB7XG5cdFx0dGhpcy5sYXllcnNWYWx1ZSA9IHY7XG5cblx0XHQvLyBOb3cgdGhhdCB3ZSBoYXZlIGEgZGlmZmVyLCBkbyBhbiBpbW1lZGlhdGUgbGF5ZXIgdXBkYXRlXG5cdFx0dGhpcy51cGRhdGVMYXllcnMoKTtcblx0fVxuXHRnZXQgbGF5ZXJzKCk6IExheWVyW10ge1xuXHRcdHJldHVybiB0aGlzLmxheWVyc1ZhbHVlO1xuXHR9XG5cblx0Ly8gV3JhcHBlciBmb3IgdGhlIGxlYWZsZXQgZGlyZWN0aXZlIChtYW5hZ2VzIHRoZSBwYXJlbnQgZGlyZWN0aXZlKVxuXHRwcml2YXRlIGxlYWZsZXREaXJlY3RpdmU6IExlYWZsZXREaXJlY3RpdmVXcmFwcGVyO1xuXG5cdGNvbnN0cnVjdG9yKGxlYWZsZXREaXJlY3RpdmU6IExlYWZsZXREaXJlY3RpdmUsIHByaXZhdGUgZGlmZmVyczogSXRlcmFibGVEaWZmZXJzLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuXHRcdHRoaXMubGVhZmxldERpcmVjdGl2ZSA9IG5ldyBMZWFmbGV0RGlyZWN0aXZlV3JhcHBlcihsZWFmbGV0RGlyZWN0aXZlKTtcblx0XHR0aGlzLmxheWVyc0RpZmZlciA9IHRoaXMuZGlmZmVycy5maW5kKFtdKS5jcmVhdGU8TGF5ZXI+KCk7XG5cdH1cblxuXHRuZ0RvQ2hlY2soKSB7XG5cdFx0dGhpcy51cGRhdGVMYXllcnMoKTtcblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgbWFwXG5cdFx0dGhpcy5sZWFmbGV0RGlyZWN0aXZlLmluaXQoKTtcblxuXHRcdC8vIFVwZGF0ZSBsYXllcnMgb25jZSB0aGUgbWFwIGlzIHJlYWR5XG5cdFx0dGhpcy51cGRhdGVMYXllcnMoKTtcblxuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5sYXllcnMgPSBbXTtcblx0fVxuXG5cdC8qKlxuXHQgKiBVcGRhdGUgdGhlIHN0YXRlIG9mIHRoZSBsYXllcnMuXG5cdCAqIFdlIHVzZSBhbiBpdGVyYWJsZSBkaWZmZXIgdG8gc3luY2hyb25pemUgdGhlIG1hcCBsYXllcnMgd2l0aCB0aGUgc3RhdGUgb2YgdGhlIGJvdW5kIGxheWVycyBhcnJheS5cblx0ICogVGhpcyBpcyBpbXBvcnRhbnQgYmVjYXVzZSBpdCBhbGxvd3MgdXMgdG8gcmVhY3QgdG8gY2hhbmdlcyB0byB0aGUgY29udGVudHMgb2YgdGhlIGFycmF5IGFzIHdlbGxcblx0ICogYXMgY2hhbmdlcyB0byB0aGUgYWN0dWFsIGFycmF5IGluc3RhbmNlLlxuXHQgKi9cblx0cHJpdmF0ZSB1cGRhdGVMYXllcnMoKSB7XG5cblx0XHRjb25zdCBtYXAgPSB0aGlzLmxlYWZsZXREaXJlY3RpdmUuZ2V0TWFwKCk7XG5cblx0XHRpZiAobnVsbCAhPSBtYXAgJiYgbnVsbCAhPSB0aGlzLmxheWVyc0RpZmZlcikge1xuXG5cdFx0XHRjb25zdCBjaGFuZ2VzID0gdGhpcy5sYXllcnNEaWZmZXIuZGlmZih0aGlzLmxheWVyc1ZhbHVlKTtcblx0XHRcdGlmIChudWxsICE9IGNoYW5nZXMpIHtcblxuXHRcdFx0XHQvLyBSdW4gb3V0c2lkZSBhbmd1bGFyIHRvIGVuc3VyZSBsYXllciBldmVudHMgZG9uJ3QgdHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uXG5cdFx0XHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdFx0XHRjaGFuZ2VzLmZvckVhY2hSZW1vdmVkSXRlbSgoYykgPT4ge1xuXHRcdFx0XHRcdFx0bWFwLnJlbW92ZUxheWVyKGMuaXRlbSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0Y2hhbmdlcy5mb3JFYWNoQWRkZWRJdGVtKChjKSA9PiB7XG5cdFx0XHRcdFx0XHRtYXAuYWRkTGF5ZXIoYy5pdGVtKTtcblx0XHRcdFx0XHR9KTtcblxuXHRcdFx0XHR9KTtcblxuXHRcdFx0fVxuXG5cdFx0fVxuXG5cdH1cblxufVxuIl19