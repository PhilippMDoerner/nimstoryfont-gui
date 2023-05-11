import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { LeafletDirectiveWrapper } from '../core/leaflet.directive.wrapper';
import { LeafletUtil } from '../core/leaflet.util';
import * as i0 from "@angular/core";
import * as i1 from "../core/leaflet.directive";
/**
 * Layer directive
 *
 * This directive is used to directly control a single map layer. The purpose of this directive is to
 * be used as part of a child structural directive of the map element.
 *
 */
export class LeafletLayerDirective {
    constructor(leafletDirective, zone) {
        this.zone = zone;
        // Layer Events
        this.onAdd = new EventEmitter();
        this.onRemove = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
    }
    ngOnInit() {
        // Init the map
        this.leafletDirective.init();
    }
    ngOnDestroy() {
        if (null != this.layer) {
            // Unregister the event handlers
            this.removeLayerEventListeners(this.layer);
            // Remove the layer from the map
            this.layer.remove();
        }
    }
    ngOnChanges(changes) {
        if (changes['layer']) {
            // Update the layer
            const p = changes['layer'].previousValue;
            const n = changes['layer'].currentValue;
            this.zone.runOutsideAngular(() => {
                if (null != p) {
                    this.removeLayerEventListeners(p);
                    p.remove();
                }
                if (null != n) {
                    this.addLayerEventListeners(n);
                    this.leafletDirective.getMap().addLayer(n);
                }
            });
        }
    }
    addLayerEventListeners(l) {
        this.onAddLayerHandler = (e) => LeafletUtil.handleEvent(this.zone, this.onAdd, e);
        l.on('add', this.onAddLayerHandler);
        this.onRemoveLayerHandler = (e) => LeafletUtil.handleEvent(this.zone, this.onRemove, e);
        l.on('remove', this.onRemoveLayerHandler);
    }
    removeLayerEventListeners(l) {
        l.off('add', this.onAddLayerHandler);
        l.off('remove', this.onRemoveLayerHandler);
    }
}
LeafletLayerDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LeafletLayerDirective, deps: [{ token: i1.LeafletDirective }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
LeafletLayerDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.1", type: LeafletLayerDirective, selector: "[leafletLayer]", inputs: { layer: ["leafletLayer", "layer"] }, outputs: { onAdd: "leafletLayerAdd", onRemove: "leafletLayerRemove" }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LeafletLayerDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[leafletLayer]'
                }]
        }], ctorParameters: function () { return [{ type: i1.LeafletDirective }, { type: i0.NgZone }]; }, propDecorators: { layer: [{
                type: Input,
                args: ['leafletLayer']
            }], onAdd: [{
                type: Output,
                args: ['leafletLayerAdd']
            }], onRemove: [{
                type: Output,
                args: ['leafletLayerRemove']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1sYXllci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGVhZmxldC9zcmMvbGliL2xheWVycy9sZWFmbGV0LWxheWVyLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQXdDLE1BQU0sRUFFNUUsTUFBTSxlQUFlLENBQUM7QUFLdkIsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7QUFHbkQ7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLHFCQUFxQjtJQWdCakMsWUFBWSxnQkFBa0MsRUFBVSxJQUFZO1FBQVosU0FBSSxHQUFKLElBQUksQ0FBUTtRQVhwRSxlQUFlO1FBQ1ksVUFBSyxHQUFHLElBQUksWUFBWSxFQUFnQixDQUFDO1FBQ3RDLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQVV6RSxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSx1QkFBdUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxRQUFRO1FBRVAsZUFBZTtRQUNmLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUU5QixDQUFDO0lBRUQsV0FBVztRQUVWLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFFdkIsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFFM0MsZ0NBQWdDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDcEI7SUFFRixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXdDO1FBRW5ELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO1lBRXJCLG1CQUFtQjtZQUNuQixNQUFNLENBQUMsR0FBVSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsYUFBYSxDQUFDO1lBQ2hELE1BQU0sQ0FBQyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxZQUFZLENBQUM7WUFFeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLEVBQUU7Z0JBQ2hDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRTtvQkFDZCxJQUFJLENBQUMseUJBQXlCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztpQkFDWDtnQkFDRCxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLHNCQUFzQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMzQztZQUNGLENBQUMsQ0FBQyxDQUFDO1NBRUg7SUFFRixDQUFDO0lBRU8sc0JBQXNCLENBQUMsQ0FBUTtRQUV0QyxJQUFJLENBQUMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFlLEVBQUUsRUFBRSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ2hHLENBQUMsQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBRXBDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxDQUFDLENBQWUsRUFBRSxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDdEcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFM0MsQ0FBQztJQUVPLHlCQUF5QixDQUFDLENBQVE7UUFFekMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFFNUMsQ0FBQzs7a0hBOUVXLHFCQUFxQjtzR0FBckIscUJBQXFCOzJGQUFyQixxQkFBcUI7a0JBSGpDLFNBQVM7bUJBQUM7b0JBQ1YsUUFBUSxFQUFFLGdCQUFnQjtpQkFDMUI7NEhBSXVCLEtBQUs7c0JBQTNCLEtBQUs7dUJBQUMsY0FBYztnQkFHTSxLQUFLO3NCQUEvQixNQUFNO3VCQUFDLGlCQUFpQjtnQkFDSyxRQUFRO3NCQUFyQyxNQUFNO3VCQUFDLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgTmdab25lLCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBPdXRwdXQsXG5cdFNpbXBsZUNoYW5nZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTGF5ZXIsIExlYWZsZXRFdmVudCB9IGZyb20gJ2xlYWZsZXQnO1xuXG5pbXBvcnQgeyBMZWFmbGV0RGlyZWN0aXZlIH0gZnJvbSAnLi4vY29yZS9sZWFmbGV0LmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBMZWFmbGV0RGlyZWN0aXZlV3JhcHBlciB9IGZyb20gJy4uL2NvcmUvbGVhZmxldC5kaXJlY3RpdmUud3JhcHBlcic7XG5pbXBvcnQgeyBMZWFmbGV0VXRpbCB9IGZyb20gJy4uL2NvcmUvbGVhZmxldC51dGlsJztcblxuXG4vKipcbiAqIExheWVyIGRpcmVjdGl2ZVxuICpcbiAqIFRoaXMgZGlyZWN0aXZlIGlzIHVzZWQgdG8gZGlyZWN0bHkgY29udHJvbCBhIHNpbmdsZSBtYXAgbGF5ZXIuIFRoZSBwdXJwb3NlIG9mIHRoaXMgZGlyZWN0aXZlIGlzIHRvXG4gKiBiZSB1c2VkIGFzIHBhcnQgb2YgYSBjaGlsZCBzdHJ1Y3R1cmFsIGRpcmVjdGl2ZSBvZiB0aGUgbWFwIGVsZW1lbnQuXG4gKlxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbGVhZmxldExheWVyXSdcbn0pXG5leHBvcnQgY2xhc3MgTGVhZmxldExheWVyRGlyZWN0aXZlXG5cdGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCB7XG5cblx0QElucHV0KCdsZWFmbGV0TGF5ZXInKSBsYXllcjogTGF5ZXI7XG5cblx0Ly8gTGF5ZXIgRXZlbnRzXG5cdEBPdXRwdXQoJ2xlYWZsZXRMYXllckFkZCcpIG9uQWRkID0gbmV3IEV2ZW50RW1pdHRlcjxMZWFmbGV0RXZlbnQ+KCk7XG5cdEBPdXRwdXQoJ2xlYWZsZXRMYXllclJlbW92ZScpIG9uUmVtb3ZlID0gbmV3IEV2ZW50RW1pdHRlcjxMZWFmbGV0RXZlbnQ+KCk7XG5cblx0Ly8gTGF5ZXIgRXZlbnQgaGFuZGxlcnNcblx0cHJpdmF0ZSBvbkFkZExheWVySGFuZGxlcjogYW55O1xuXHRwcml2YXRlIG9uUmVtb3ZlTGF5ZXJIYW5kbGVyOiBhbnk7XG5cblx0Ly8gV3JhcHBlciBmb3IgdGhlIGxlYWZsZXQgZGlyZWN0aXZlIChtYW5hZ2VzIHRoZSBwYXJlbnQgZGlyZWN0aXZlKVxuXHRwcml2YXRlIGxlYWZsZXREaXJlY3RpdmU6IExlYWZsZXREaXJlY3RpdmVXcmFwcGVyO1xuXG5cdGNvbnN0cnVjdG9yKGxlYWZsZXREaXJlY3RpdmU6IExlYWZsZXREaXJlY3RpdmUsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG5cdFx0dGhpcy5sZWFmbGV0RGlyZWN0aXZlID0gbmV3IExlYWZsZXREaXJlY3RpdmVXcmFwcGVyKGxlYWZsZXREaXJlY3RpdmUpO1xuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHQvLyBJbml0IHRoZSBtYXBcblx0XHR0aGlzLmxlYWZsZXREaXJlY3RpdmUuaW5pdCgpO1xuXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblxuXHRcdGlmIChudWxsICE9IHRoaXMubGF5ZXIpIHtcblxuXHRcdFx0Ly8gVW5yZWdpc3RlciB0aGUgZXZlbnQgaGFuZGxlcnNcblx0XHRcdHRoaXMucmVtb3ZlTGF5ZXJFdmVudExpc3RlbmVycyh0aGlzLmxheWVyKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBsYXllciBmcm9tIHRoZSBtYXBcblx0XHRcdHRoaXMubGF5ZXIucmVtb3ZlKCk7XG5cdFx0fVxuXG5cdH1cblxuXHRuZ09uQ2hhbmdlcyhjaGFuZ2VzOiB7IFtrZXk6IHN0cmluZ106IFNpbXBsZUNoYW5nZSB9KSB7XG5cblx0XHRpZiAoY2hhbmdlc1snbGF5ZXInXSkge1xuXG5cdFx0XHQvLyBVcGRhdGUgdGhlIGxheWVyXG5cdFx0XHRjb25zdCBwOiBMYXllciA9IGNoYW5nZXNbJ2xheWVyJ10ucHJldmlvdXNWYWx1ZTtcblx0XHRcdGNvbnN0IG4gPSBjaGFuZ2VzWydsYXllciddLmN1cnJlbnRWYWx1ZTtcblxuXHRcdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblx0XHRcdFx0aWYgKG51bGwgIT0gcCkge1xuXHRcdFx0XHRcdHRoaXMucmVtb3ZlTGF5ZXJFdmVudExpc3RlbmVycyhwKTtcblx0XHRcdFx0XHRwLnJlbW92ZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmIChudWxsICE9IG4pIHtcblx0XHRcdFx0XHR0aGlzLmFkZExheWVyRXZlbnRMaXN0ZW5lcnMobik7XG5cdFx0XHRcdFx0dGhpcy5sZWFmbGV0RGlyZWN0aXZlLmdldE1hcCgpLmFkZExheWVyKG4pO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdH1cblxuXHR9XG5cblx0cHJpdmF0ZSBhZGRMYXllckV2ZW50TGlzdGVuZXJzKGw6IExheWVyKSB7XG5cblx0XHR0aGlzLm9uQWRkTGF5ZXJIYW5kbGVyID0gKGU6IExlYWZsZXRFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uQWRkLCBlKTtcblx0XHRsLm9uKCdhZGQnLCB0aGlzLm9uQWRkTGF5ZXJIYW5kbGVyKTtcblxuXHRcdHRoaXMub25SZW1vdmVMYXllckhhbmRsZXIgPSAoZTogTGVhZmxldEV2ZW50KSA9PiBMZWFmbGV0VXRpbC5oYW5kbGVFdmVudCh0aGlzLnpvbmUsIHRoaXMub25SZW1vdmUsIGUpO1xuXHRcdGwub24oJ3JlbW92ZScsIHRoaXMub25SZW1vdmVMYXllckhhbmRsZXIpO1xuXG5cdH1cblxuXHRwcml2YXRlIHJlbW92ZUxheWVyRXZlbnRMaXN0ZW5lcnMobDogTGF5ZXIpIHtcblxuXHRcdGwub2ZmKCdhZGQnLCB0aGlzLm9uQWRkTGF5ZXJIYW5kbGVyKTtcblx0XHRsLm9mZigncmVtb3ZlJywgdGhpcy5vblJlbW92ZUxheWVySGFuZGxlcik7XG5cblx0fVxuXG59XG4iXX0=