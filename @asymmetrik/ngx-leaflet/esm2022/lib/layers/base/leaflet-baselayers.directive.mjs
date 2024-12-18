import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { LeafletUtil } from '../../core/leaflet.util';
import { LeafletDirectiveWrapper } from '../../core/leaflet.directive.wrapper';
import { LeafletControlLayersWrapper } from '../control/leaflet-control-layers.wrapper';
import * as i0 from "@angular/core";
import * as i1 from "../../core/leaflet.directive";
/**
 * Baselayers directive
 *
 * This directive is provided as a convenient way to add baselayers to the map. The input accepts
 * a key-value map of layer name -> layer. Mutable changed are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed. This directive
 * will also add the layers control so users can switch between available base layers.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the plugin will use the last one it sees.
 */
export class LeafletBaseLayersDirective {
    // Set/get baseLayers
    set baseLayers(v) {
        this.baseLayersValue = v;
        this.updateBaseLayers();
    }
    get baseLayers() {
        return this.baseLayersValue;
    }
    constructor(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        // Output for once the layers control is ready
        this.layersControlReady = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
        this.controlLayers = new LeafletControlLayersWrapper(this.zone, this.layersControlReady);
        this.baseLayersDiffer = this.differs.find({}).create();
    }
    ngOnDestroy() {
        this.baseLayers = {};
        if (null != this.controlLayers.getLayersControl()) {
            this.controlLayers.getLayersControl().remove();
        }
    }
    ngOnInit() {
        // Init the map
        this.leafletDirective.init();
        // Create the control outside angular to prevent events from triggering chnage detection
        this.zone.runOutsideAngular(() => {
            // Initially configure the controlLayers
            this.controlLayers
                .init({}, this.layersControlOptions)
                .addTo(this.leafletDirective.getMap());
        });
        this.updateBaseLayers();
    }
    ngDoCheck() {
        this.updateBaseLayers();
    }
    updateBaseLayers() {
        const map = this.leafletDirective.getMap();
        const layersControl = this.controlLayers.getLayersControl();
        if (null != map && null != layersControl && null != this.baseLayersDiffer) {
            const changes = this.baseLayersDiffer.diff(this.baseLayersValue);
            const results = this.controlLayers.applyBaseLayerChanges(changes);
            if (results.changed()) {
                this.syncBaseLayer();
            }
        }
    }
    /**
     * Check the current base layer and change it to the new one if necessary
     */
    syncBaseLayer() {
        const map = this.leafletDirective.getMap();
        const layers = LeafletUtil.mapToArray(this.baseLayers);
        let foundLayer;
        // Search all the layers in the map to see if we can find them in the baselayer array
        map.eachLayer((l) => {
            foundLayer = layers.find((bl) => (l === bl));
        });
        // Did we find the layer?
        if (null != foundLayer) {
            // Yes - set the baselayer to the one we found
            this.baseLayer = foundLayer;
        }
        else {
            // No - set the baselayer to the first in the array and add it to the map
            if (layers.length > 0) {
                this.baseLayer = layers[0];
                // Add layers outside of angular to prevent events from triggering change detection
                this.zone.runOutsideAngular(() => {
                    this.baseLayer.addTo(map);
                });
            }
        }
    }
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletBaseLayersDirective, deps: [{ token: i1.LeafletDirective }, { token: i0.KeyValueDiffers }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive }); }
    static { this.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "18.0.1", type: LeafletBaseLayersDirective, selector: "[leafletBaseLayers]", inputs: { baseLayers: ["leafletBaseLayers", "baseLayers"], layersControlOptions: ["leafletLayersControlOptions", "layersControlOptions"] }, outputs: { layersControlReady: "leafletLayersControlReady" }, ngImport: i0 }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletBaseLayersDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[leafletBaseLayers]'
                }]
        }], ctorParameters: () => [{ type: i1.LeafletDirective }, { type: i0.KeyValueDiffers }, { type: i0.NgZone }], propDecorators: { baseLayers: [{
                type: Input,
                args: ['leafletBaseLayers']
            }], layersControlOptions: [{
                type: Input,
                args: ['leafletLayersControlOptions']
            }], layersControlReady: [{
                type: Output,
                args: ['leafletLayersControlReady']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1iYXNlbGF5ZXJzLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1sZWFmbGV0L3NyYy9saWIvbGF5ZXJzL2Jhc2UvbGVhZmxldC1iYXNlbGF5ZXJzLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQ04sU0FBUyxFQUFXLFlBQVksRUFBRSxLQUFLLEVBQy9CLE1BQU0sRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFdEQsT0FBTyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDL0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQUd4Rjs7Ozs7Ozs7OztHQVVHO0FBSUgsTUFBTSxPQUFPLDBCQUEwQjtJQVN0QyxxQkFBcUI7SUFDckIsSUFDSSxVQUFVLENBQUMsQ0FBNEI7UUFDMUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFFekIsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDekIsQ0FBQztJQUNELElBQUksVUFBVTtRQUNiLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztJQUM3QixDQUFDO0lBY0QsWUFBWSxnQkFBa0MsRUFBVSxPQUF3QixFQUFVLElBQVk7UUFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBVHRHLDhDQUE4QztRQUNULHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBUzVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGtC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LFNBQVMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzNCLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNGLENBQUM7SUFFRixDQUFDOzhHQW5IVywwQkFBMEI7a0dBQTFCLDBCQUEwQjs7MkZBQTFCLDBCQUEwQjtrQkFIdEMsU0FBUzttQkFBQztvQkFDVixRQUFRLEVBQUUscUJBQXFCO2lCQUMvQjt3SUFZSSxVQUFVO3NCQURiLEtBQUs7dUJBQUMsbUJBQW1CO2dCQVdZLG9CQUFvQjtzQkFBekQsS0FBSzt1QkFBQyw2QkFBNkI7Z0JBR0Msa0JBQWtCO3NCQUF0RCxNQUFNO3VCQUFDLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG5cdERpcmVjdGl2ZSwgRG9DaGVjaywgRXZlbnRFbWl0dGVyLCBJbnB1dCwgS2V5VmFsdWVEaWZmZXIsIEtleVZhbHVlRGlmZmVycywgTmdab25lLCBPbkRlc3Ryb3ksXG5cdE9uSW5pdCwgT3V0cHV0XG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBDb250cm9sLCBMYXllciB9IGZyb20gJ2xlYWZsZXQnO1xuXG5pbXBvcnQgeyBMZWFmbGV0VXRpbCB9IGZyb20gJy4uLy4uL2NvcmUvbGVhZmxldC51dGlsJztcbmltcG9ydCB7IExlYWZsZXREaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9jb3JlL2xlYWZsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IExlYWZsZXREaXJlY3RpdmVXcmFwcGVyIH0gZnJvbSAnLi4vLi4vY29yZS9sZWFmbGV0LmRpcmVjdGl2ZS53cmFwcGVyJztcbmltcG9ydCB7IExlYWZsZXRDb250cm9sTGF5ZXJzV3JhcHBlciB9IGZyb20gJy4uL2NvbnRyb2wvbGVhZmxldC1jb250cm9sLWxheWVycy53cmFwcGVyJztcblxuXG4vKipcbiAqIEJhc2VsYXllcnMgZGlyZWN0aXZlXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgaXMgcHJvdmlkZWQgYXMgYSBjb252ZW5pZW50IHdheSB0byBhZGQgYmFzZWxheWVycyB0byB0aGUgbWFwLiBUaGUgaW5wdXQgYWNjZXB0c1xuICogYSBrZXktdmFsdWUgbWFwIG9mIGxheWVyIG5hbWUgLT4gbGF5ZXIuIE11dGFibGUgY2hhbmdlZCBhcmUgZGV0ZWN0ZWQuIE9uIGNoYW5nZXMsIGEgZGlmZmVyIGlzXG4gKiB1c2VkIHRvIGRldGVybWluZSB3aGF0IGNoYW5nZWQgc28gdGhhdCBsYXllcnMgYXJlIGFwcHJvcHJpYXRlbHkgYWRkZWQgb3IgcmVtb3ZlZC4gVGhpcyBkaXJlY3RpdmVcbiAqIHdpbGwgYWxzbyBhZGQgdGhlIGxheWVycyBjb250cm9sIHNvIHVzZXJzIGNhbiBzd2l0Y2ggYmV0d2VlbiBhdmFpbGFibGUgYmFzZSBsYXllcnMuXG4gKlxuICogVG8gc3BlY2lmeSB3aGljaCBsYXllciB0byBzaG93IGFzIHRoZSAnYWN0aXZlJyBiYXNlbGF5ZXIsIHlvdSB3aWxsIHdhbnQgdG8gYWRkIGl0IHRvIHRoZSBtYXBcbiAqIHVzaW5nIHRoZSBsYXllcnMgZGlyZWN0aXZlLiBPdGhlcndpc2UsIHRoZSBwbHVnaW4gd2lsbCB1c2UgdGhlIGxhc3Qgb25lIGl0IHNlZXMuXG4gKi9cbkBEaXJlY3RpdmUoe1xuXHRzZWxlY3RvcjogJ1tsZWFmbGV0QmFzZUxheWVyc10nXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRCYXNlTGF5ZXJzRGlyZWN0aXZlXG5cdGltcGxlbWVudHMgRG9DaGVjaywgT25EZXN0cm95LCBPbkluaXQge1xuXG5cdC8vIEJhc2UgTGF5ZXJzXG5cdGJhc2VMYXllcnNWYWx1ZTogeyBbbmFtZTogc3RyaW5nXTogTGF5ZXIgfTtcblxuXHQvLyBCYXNlIExheWVycyBNYXAgRGlmZmVyXG5cdGJhc2VMYXllcnNEaWZmZXI6IEtleVZhbHVlRGlmZmVyPHN0cmluZywgTGF5ZXI+O1xuXG5cdC8vIFNldC9nZXQgYmFzZUxheWVyc1xuXHRASW5wdXQoJ2xlYWZsZXRCYXNlTGF5ZXJzJylcblx0c2V0IGJhc2VMYXllcnModjogeyBbbmFtZTogc3RyaW5nXTogTGF5ZXIgfSkge1xuXHRcdHRoaXMuYmFzZUxheWVyc1ZhbHVlID0gdjtcblxuXHRcdHRoaXMudXBkYXRlQmFzZUxheWVycygpO1xuXHR9XG5cdGdldCBiYXNlTGF5ZXJzKCk6IHsgW25hbWU6IHN0cmluZ106IExheWVyIH0ge1xuXHRcdHJldHVybiB0aGlzLmJhc2VMYXllcnNWYWx1ZTtcblx0fVxuXG5cdC8vIENvbnRyb2wgT3B0aW9uc1xuXHRASW5wdXQoJ2xlYWZsZXRMYXllcnNDb250cm9sT3B0aW9ucycpIGxheWVyc0NvbnRyb2xPcHRpb25zOiBDb250cm9sLkxheWVyc09wdGlvbnM7XG5cblx0Ly8gT3V0cHV0IGZvciBvbmNlIHRoZSBsYXllcnMgY29udHJvbCBpcyByZWFkeVxuXHRAT3V0cHV0KCdsZWFmbGV0TGF5ZXJzQ29udHJvbFJlYWR5JykgbGF5ZXJzQ29udHJvbFJlYWR5ID0gbmV3IEV2ZW50RW1pdHRlcjxDb250cm9sLkxheWVycz4oKTtcblxuXHQvLyBBY3RpdmUgQmFzZSBMYXllclxuXHRwcml2YXRlIGJhc2VMYXllcjogTGF5ZXI7XG5cblx0cHJpdmF0ZSBsZWFmbGV0RGlyZWN0aXZlOiBMZWFmbGV0RGlyZWN0aXZlV3JhcHBlcjtcblx0cHJpdmF0ZSBjb250cm9sTGF5ZXJzOiBMZWFmbGV0Q29udHJvbExheWVyc1dyYXBwZXI7XG5cblx0Y29uc3RydWN0b3IobGVhZmxldERpcmVjdGl2ZTogTGVhZmxldERpcmVjdGl2ZSwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG5cdFx0dGhpcy5sZWFmbGV0RGlyZWN0aXZlID0gbmV3IExlYWZsZXREaXJlY3RpdmVXcmFwcGVyKGxlYWZsZXREaXJlY3RpdmUpO1xuXHRcdHRoaXMuY29udHJvbExheWVycyA9IG5ldyBMZWFmbGV0Q29udHJvbExheWVyc1dyYXBwZXIodGhpcy56b25lLCB0aGlzLmxheWVyc0NvbnRyb2xSZWFkeSk7XG5cdFx0dGhpcy5iYXNlTGF5ZXJzRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoe30pLmNyZWF0ZTxzdHJpbmcsIExheWVyPigpO1xuXHR9XG5cblx0bmdPbkRlc3Ryb3koKSB7XG5cdFx0dGhpcy5iYXNlTGF5ZXJzID0ge307XG5cdFx0aWYgKG51bGwgIT0gdGhpcy5jb250cm9sTGF5ZXJzLmdldExheWVyc0NvbnRyb2woKSkge1xuXHRcdFx0dGhpcy5jb250cm9sTGF5ZXJzLmdldExheWVyc0NvbnRyb2woKS5yZW1vdmUoKTtcblx0XHR9XG5cdH1cblxuXHRuZ09uSW5pdCgpIHtcblxuXHRcdC8vIEluaXQgdGhlIG1hcFxuXHRcdHRoaXMubGVhZmxldERpcmVjdGl2ZS5pbml0KCk7XG5cblx0XHQvLyBDcmVhdGUgdGhlIGNvbnRyb2wgb3V0c2lkZSBhbmd1bGFyIHRvIHByZXZlbnQgZXZlbnRzIGZyb20gdHJpZ2dlcmluZyBjaG5hZ2UgZGV0ZWN0aW9uXG5cdFx0dGhpcy56b25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcblxuXHRcdFx0Ly8gSW5pdGlhbGx5IGNvbmZpZ3VyZSB0aGUgY29udHJvbExheWVyc1xuXHRcdFx0dGhpcy5jb250cm9sTGF5ZXJzXG5cdFx0XHRcdC5pbml0KHt9LCB0aGlzLmxheWVyc0NvbnRyb2xPcHRpb25zKVxuXHRcdFx0XHQuYWRkVG8odGhpcy5sZWFmbGV0RGlyZWN0aXZlLmdldE1hcCgpKTtcblxuXHRcdH0pO1xuXG5cdFx0dGhpcy51cGRhdGVCYXNlTGF5ZXJzKCk7XG5cblx0fVxuXG5cdG5nRG9DaGVjaygpIHtcblx0XHR0aGlzLnVwZGF0ZUJhc2VMYXllcnMoKTtcblx0fVxuXG5cdHByb3RlY3RlZCB1cGRhdGVCYXNlTGF5ZXJzKCkge1xuXG5cdFx0Y29uc3QgbWFwID0gdGhpcy5sZWFmbGV0RGlyZWN0aXZlLmdldE1hcCgpO1xuXHRcdGNvbnN0IGxheWVyc0NvbnRyb2wgPSB0aGlzLmNvbnRyb2xMYXllcnMuZ2V0TGF5ZXJzQ29udHJvbCgpO1xuXG5cdFx0aWYgKG51bGwgIT0gbWFwICYmIG51bGwgIT0gbGF5ZXJzQ29udHJvbCAmJiBudWxsICE9IHRoaXMuYmFzZUxheWVyc0RpZmZlcikge1xuXHRcdFx0Y29uc3QgY2hhbmdlcyA9IHRoaXMuYmFzZUxheWVyc0RpZmZlci5kaWZmKHRoaXMuYmFzZUxheWVyc1ZhbHVlKTtcblx0XHRcdGNvbnN0IHJlc3VsdHMgPSB0aGlzLmNvbnRyb2xMYXllcnMuYXBwbHlCYXNlTGF5ZXJDaGFuZ2VzKGNoYW5nZXMpO1xuXG5cdFx0XHRpZiAocmVzdWx0cy5jaGFuZ2VkKCkpIHtcblx0XHRcdFx0dGhpcy5zeW5jQmFzZUxheWVyKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2sgdGhlIGN1cnJlbnQgYmFzZSBsYXllciBhbmQgY2hhbmdlIGl0IHRvIHRoZSBuZXcgb25lIGlmIG5lY2Vzc2FyeVxuXHQgKi9cblx0cHJvdGVjdGVkIHN5bmNCYXNlTGF5ZXIoKSB7XG5cblx0XHRjb25zdCBtYXAgPSB0aGlzLmxlYWZsZXREaXJlY3RpdmUuZ2V0TWFwKCk7XG5cdFx0Y29uc3QgbGF5ZXJzID0gTGVhZmxldFV0aWwubWFwVG9BcnJheSh0aGlzLmJhc2VMYXllcnMpO1xuXHRcdGxldCBmb3VuZExheWVyOiBMYXllcjtcblxuXHRcdC8vIFNlYXJjaCBhbGwgdGhlIGxheWVycyBpbiB0aGUgbWFwIHRvIHNlZSBpZiB3ZSBjYW4gZmluZCB0aGVtIGluIHRoZSBiYXNlbGF5ZXIgYXJyYXlcblx0XHRtYXAuZWFjaExheWVyKChsOiBMYXllcikgPT4ge1xuXHRcdFx0Zm91bmRMYXllciA9IGxheWVycy5maW5kKChibCkgPT4gKGwgPT09IGJsKSk7XG5cdFx0fSk7XG5cblx0XHQvLyBEaWQgd2UgZmluZCB0aGUgbGF5ZXI/XG5cdFx0aWYgKG51bGwgIT0gZm91bmRMYXllcikge1xuXHRcdFx0Ly8gWWVzIC0gc2V0IHRoZSBiYXNlbGF5ZXIgdG8gdGhlIG9uZSB3ZSBmb3VuZFxuXHRcdFx0dGhpcy5iYXNlTGF5ZXIgPSBmb3VuZExheWVyO1xuXHRcdH1cblx0XHRlbHNlIHtcblx0XHRcdC8vIE5vIC0gc2V0IHRoZSBiYXNlbGF5ZXIgdG8gdGhlIGZpcnN0IGluIHRoZSBhcnJheSBhbmQgYWRkIGl0IHRvIHRoZSBtYXBcblx0XHRcdGlmIChsYXllcnMubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR0aGlzLmJhc2VMYXllciA9IGxheWVyc1swXTtcblxuXHRcdFx0XHQvLyBBZGQgbGF5ZXJzIG91dHNpZGUgb2YgYW5ndWxhciB0byBwcmV2ZW50IGV2ZW50cyBmcm9tIHRyaWdnZXJpbmcgY2hhbmdlIGRldGVjdGlvblxuXHRcdFx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMuYmFzZUxheWVyLmFkZFRvKG1hcCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH1cblxuXHR9XG59XG4iXX0=