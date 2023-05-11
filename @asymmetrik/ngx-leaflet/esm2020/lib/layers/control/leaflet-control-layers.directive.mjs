import { Directive, EventEmitter, Input, Output } from '@angular/core';
import { LeafletDirectiveWrapper } from '../../core/leaflet.directive.wrapper';
import { LeafletControlLayersWrapper } from './leaflet-control-layers.wrapper';
import { LeafletControlLayersConfig } from './leaflet-control-layers-config.model';
import * as i0 from "@angular/core";
import * as i1 from "../../core/leaflet.directive";
/**
 * Layers Control
 *
 * This directive is used to configure the layers control. The input accepts an object with two
 * key-value maps of layer name -> layer. Mutable changes are detected. On changes, a differ is
 * used to determine what changed so that layers are appropriately added or removed.
 *
 * To specify which layer to show as the 'active' baselayer, you will want to add it to the map
 * using the layers directive. Otherwise, the last one it sees will be used.
 */
export class LeafletLayersControlDirective {
    constructor(leafletDirective, differs, zone) {
        this.differs = differs;
        this.zone = zone;
        this.layersControlReady = new EventEmitter();
        this.leafletDirective = new LeafletDirectiveWrapper(leafletDirective);
        this.controlLayers = new LeafletControlLayersWrapper(this.zone, this.layersControlReady);
        // Generate differs
        this.baseLayersDiffer = this.differs.find({}).create();
        this.overlaysDiffer = this.differs.find({}).create();
    }
    set layersControlConfig(v) {
        // Validation/init stuff
        if (null == v) {
            v = new LeafletControlLayersConfig();
        }
        if (null == v.baseLayers) {
            v.baseLayers = {};
        }
        if (null == v.overlays) {
            v.overlays = {};
        }
        // Store the value
        this.layersControlConfigValue = v;
        // Update the map
        this.updateLayers();
    }
    get layersControlConfig() {
        return this.layersControlConfigValue;
    }
    ngOnInit() {
        // Init the map
        this.leafletDirective.init();
        // Set up control outside of angular to avoid change detection when using the control
        this.zone.runOutsideAngular(() => {
            // Set up all the initial settings
            this.controlLayers
                .init({}, this.layersControlOptions)
                .addTo(this.leafletDirective.getMap());
        });
        this.updateLayers();
    }
    ngOnDestroy() {
        this.layersControlConfig = { baseLayers: {}, overlays: {} };
        this.controlLayers.getLayersControl().remove();
    }
    ngDoCheck() {
        this.updateLayers();
    }
    updateLayers() {
        const map = this.leafletDirective.getMap();
        const layersControl = this.controlLayers.getLayersControl();
        if (null != map && null != layersControl) {
            // Run the baselayers differ
            if (null != this.baseLayersDiffer && null != this.layersControlConfigValue.baseLayers) {
                const changes = this.baseLayersDiffer.diff(this.layersControlConfigValue.baseLayers);
                this.controlLayers.applyBaseLayerChanges(changes);
            }
            // Run the overlays differ
            if (null != this.overlaysDiffer && null != this.layersControlConfigValue.overlays) {
                const changes = this.overlaysDiffer.diff(this.layersControlConfigValue.overlays);
                this.controlLayers.applyOverlayChanges(changes);
            }
        }
    }
}
LeafletLayersControlDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LeafletLayersControlDirective, deps: [{ token: i1.LeafletDirective }, { token: i0.KeyValueDiffers }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
LeafletLayersControlDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.1", type: LeafletLayersControlDirective, selector: "[leafletLayersControl]", inputs: { layersControlConfig: ["leafletLayersControl", "layersControlConfig"], layersControlOptions: ["leafletLayersControlOptions", "layersControlOptions"] }, outputs: { layersControlReady: "leafletLayersControlReady" }, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LeafletLayersControlDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[leafletLayersControl]'
                }]
        }], ctorParameters: function () { return [{ type: i1.LeafletDirective }, { type: i0.KeyValueDiffers }, { type: i0.NgZone }]; }, propDecorators: { layersControlConfig: [{
                type: Input,
                args: ['leafletLayersControl']
            }], layersControlOptions: [{
                type: Input,
                args: ['leafletLayersControlOptions']
            }], layersControlReady: [{
                type: Output,
                args: ['leafletLayersControlReady']
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC1jb250cm9sLWxheWVycy5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGVhZmxldC9zcmMvbGliL2xheWVycy9jb250cm9sL2xlYWZsZXQtY29udHJvbC1sYXllcnMuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFDTixTQUFTLEVBQVcsWUFBWSxFQUFFLEtBQUssRUFDdkMsTUFBTSxFQUNOLE1BQU0sZUFBZSxDQUFDO0FBS3ZCLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQy9FLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxNQUFNLHVDQUF1QyxDQUFDOzs7QUFHbkY7Ozs7Ozs7OztHQVNHO0FBSUgsTUFBTSxPQUFPLDZCQUE2QjtJQW1DekMsWUFBWSxnQkFBa0MsRUFBVSxPQUF3QixFQUFVLElBQVk7UUFBOUMsWUFBTyxHQUFQLE9BQU8sQ0FBaUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBTGpFLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFrQixDQUFDO1FBTTVGLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLHVCQUF1QixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLDJCQUEyQixDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFFekYsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQWlCLENBQUM7UUFDdEUsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxF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SSxtQkFBbUI7c0JBRHRCLEtBQUs7dUJBQUMsc0JBQXNCO2dCQW1CUyxvQkFBb0I7c0JBQXpELEtBQUs7dUJBQUMsNkJBQTZCO2dCQUVDLGtCQUFrQjtzQkFBdEQsTUFBTTt1QkFBQywyQkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuXHREaXJlY3RpdmUsIERvQ2hlY2ssIEV2ZW50RW1pdHRlciwgSW5wdXQsIEtleVZhbHVlRGlmZmVyLCBLZXlWYWx1ZURpZmZlcnMsIE5nWm9uZSwgT25EZXN0cm95LCBPbkluaXQsXG5cdE91dHB1dFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbCwgTGF5ZXIgfSBmcm9tICdsZWFmbGV0JztcblxuaW1wb3J0IHsgTGVhZmxldERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2NvcmUvbGVhZmxldC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGVhZmxldERpcmVjdGl2ZVdyYXBwZXIgfSBmcm9tICcuLi8uLi9jb3JlL2xlYWZsZXQuZGlyZWN0aXZlLndyYXBwZXInO1xuaW1wb3J0IHsgTGVhZmxldENvbnRyb2xMYXllcnNXcmFwcGVyIH0gZnJvbSAnLi9sZWFmbGV0LWNvbnRyb2wtbGF5ZXJzLndyYXBwZXInO1xuaW1wb3J0IHsgTGVhZmxldENvbnRyb2xMYXllcnNDb25maWcgfSBmcm9tICcuL2xlYWZsZXQtY29udHJvbC1sYXllcnMtY29uZmlnLm1vZGVsJztcblxuXG4vKipcbiAqIExheWVycyBDb250cm9sXG4gKlxuICogVGhpcyBkaXJlY3RpdmUgaXMgdXNlZCB0byBjb25maWd1cmUgdGhlIGxheWVycyBjb250cm9sLiBUaGUgaW5wdXQgYWNjZXB0cyBhbiBvYmplY3Qgd2l0aCB0d29cbiAqIGtleS12YWx1ZSBtYXBzIG9mIGxheWVyIG5hbWUgLT4gbGF5ZXIuIE11dGFibGUgY2hhbmdlcyBhcmUgZGV0ZWN0ZWQuIE9uIGNoYW5nZXMsIGEgZGlmZmVyIGlzXG4gKiB1c2VkIHRvIGRldGVybWluZSB3aGF0IGNoYW5nZWQgc28gdGhhdCBsYXllcnMgYXJlIGFwcHJvcHJpYXRlbHkgYWRkZWQgb3IgcmVtb3ZlZC5cbiAqXG4gKiBUbyBzcGVjaWZ5IHdoaWNoIGxheWVyIHRvIHNob3cgYXMgdGhlICdhY3RpdmUnIGJhc2VsYXllciwgeW91IHdpbGwgd2FudCB0byBhZGQgaXQgdG8gdGhlIG1hcFxuICogdXNpbmcgdGhlIGxheWVycyBkaXJlY3RpdmUuIE90aGVyd2lzZSwgdGhlIGxhc3Qgb25lIGl0IHNlZXMgd2lsbCBiZSB1c2VkLlxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbGVhZmxldExheWVyc0NvbnRyb2xdJ1xufSlcbmV4cG9ydCBjbGFzcyBMZWFmbGV0TGF5ZXJzQ29udHJvbERpcmVjdGl2ZVxuXHRpbXBsZW1lbnRzIERvQ2hlY2ssIE9uRGVzdHJveSwgT25Jbml0IHtcblxuXHQvLyBDb250cm9sIExheWVycyBDb25maWd1cmF0aW9uXG5cdGxheWVyc0NvbnRyb2xDb25maWdWYWx1ZTogTGVhZmxldENvbnRyb2xMYXllcnNDb25maWc7XG5cblx0YmFzZUxheWVyc0RpZmZlcjogS2V5VmFsdWVEaWZmZXI8c3RyaW5nLCBMYXllcj47XG5cdG92ZXJsYXlzRGlmZmVyOiBLZXlWYWx1ZURpZmZlcjxzdHJpbmcsIExheWVyPjtcblxuXHRASW5wdXQoJ2xlYWZsZXRMYXllcnNDb250cm9sJylcblx0c2V0IGxheWVyc0NvbnRyb2xDb25maWcodjogTGVhZmxldENvbnRyb2xMYXllcnNDb25maWcpIHtcblxuXHRcdC8vIFZhbGlkYXRpb24vaW5pdCBzdHVmZlxuXHRcdGlmIChudWxsID09IHYpIHsgdiA9IG5ldyBMZWFmbGV0Q29udHJvbExheWVyc0NvbmZpZygpOyB9XG5cdFx0aWYgKG51bGwgPT0gdi5iYXNlTGF5ZXJzKSB7IHYuYmFzZUxheWVycyA9IHt9OyB9XG5cdFx0aWYgKG51bGwgPT0gdi5vdmVybGF5cykgeyB2Lm92ZXJsYXlzID0ge307IH1cblxuXHRcdC8vIFN0b3JlIHRoZSB2YWx1ZVxuXHRcdHRoaXMubGF5ZXJzQ29udHJvbENvbmZpZ1ZhbHVlID0gdjtcblxuXHRcdC8vIFVwZGF0ZSB0aGUgbWFwXG5cdFx0dGhpcy51cGRhdGVMYXllcnMoKTtcblxuXHR9XG5cdGdldCBsYXllcnNDb250cm9sQ29uZmlnKCk6IExlYWZsZXRDb250cm9sTGF5ZXJzQ29uZmlnIHtcblx0XHRyZXR1cm4gdGhpcy5sYXllcnNDb250cm9sQ29uZmlnVmFsdWU7XG5cdH1cblxuXHRASW5wdXQoJ2xlYWZsZXRMYXllcnNDb250cm9sT3B0aW9ucycpIGxheWVyc0NvbnRyb2xPcHRpb25zOiBhbnk7XG5cblx0QE91dHB1dCgnbGVhZmxldExheWVyc0NvbnRyb2xSZWFkeScpIGxheWVyc0NvbnRyb2xSZWFkeSA9IG5ldyBFdmVudEVtaXR0ZXI8Q29udHJvbC5MYXllcnM+KCk7XG5cblx0cHJpdmF0ZSBjb250cm9sTGF5ZXJzOiBMZWFmbGV0Q29udHJvbExheWVyc1dyYXBwZXI7XG5cdHByaXZhdGUgbGVhZmxldERpcmVjdGl2ZTogTGVhZmxldERpcmVjdGl2ZVdyYXBwZXI7XG5cblx0Y29uc3RydWN0b3IobGVhZmxldERpcmVjdGl2ZTogTGVhZmxldERpcmVjdGl2ZSwgcHJpdmF0ZSBkaWZmZXJzOiBLZXlWYWx1ZURpZmZlcnMsIHByaXZhdGUgem9uZTogTmdab25lKSB7XG5cdFx0dGhpcy5sZWFmbGV0RGlyZWN0aXZlID0gbmV3IExlYWZsZXREaXJlY3RpdmVXcmFwcGVyKGxlYWZsZXREaXJlY3RpdmUpO1xuXHRcdHRoaXMuY29udHJvbExheWVycyA9IG5ldyBMZWFmbGV0Q29udHJvbExheWVyc1dyYXBwZXIodGhpcy56b25lLCB0aGlzLmxheWVyc0NvbnRyb2xSZWFkeSk7XG5cblx0XHQvLyBHZW5lcmF0ZSBkaWZmZXJzXG5cdFx0dGhpcy5iYXNlTGF5ZXJzRGlmZmVyID0gdGhpcy5kaWZmZXJzLmZpbmQoe30pLmNyZWF0ZTxzdHJpbmcsIExheWVyPigpO1xuXHRcdHRoaXMub3ZlcmxheXNEaWZmZXIgPSB0aGlzLmRpZmZlcnMuZmluZCh7fSkuY3JlYXRlPHN0cmluZywgTGF5ZXI+KCk7XG5cblx0fVxuXG5cdG5nT25Jbml0KCkge1xuXG5cdFx0Ly8gSW5pdCB0aGUgbWFwXG5cdFx0dGhpcy5sZWFmbGV0RGlyZWN0aXZlLmluaXQoKTtcblxuXHRcdC8vIFNldCB1cCBjb250cm9sIG91dHNpZGUgb2YgYW5ndWxhciB0byBhdm9pZCBjaGFuZ2UgZGV0ZWN0aW9uIHdoZW4gdXNpbmcgdGhlIGNvbnRyb2xcblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHQvLyBTZXQgdXAgYWxsIHRoZSBpbml0aWFsIHNldHRpbmdzXG5cdFx0XHR0aGlzLmNvbnRyb2xMYXllcnNcblx0XHRcdFx0LmluaXQoe30sIHRoaXMubGF5ZXJzQ29udHJvbE9wdGlvbnMpXG5cdFx0XHRcdC5hZGRUbyh0aGlzLmxlYWZsZXREaXJlY3RpdmUuZ2V0TWFwKCkpO1xuXG5cdFx0fSk7XG5cblx0XHR0aGlzLnVwZGF0ZUxheWVycygpO1xuXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHR0aGlzLmxheWVyc0NvbnRyb2xDb25maWcgPSB7IGJhc2VMYXllcnM6IHt9LCBvdmVybGF5czoge30gfTtcblx0XHR0aGlzLmNvbnRyb2xMYXllcnMuZ2V0TGF5ZXJzQ29udHJvbCgpLnJlbW92ZSgpO1xuXHR9XG5cblx0bmdEb0NoZWNrKCkge1xuXHRcdHRoaXMudXBkYXRlTGF5ZXJzKCk7XG5cdH1cblxuXHRwcm90ZWN0ZWQgdXBkYXRlTGF5ZXJzKCkge1xuXG5cdFx0Y29uc3QgbWFwID0gdGhpcy5sZWFmbGV0RGlyZWN0aXZlLmdldE1hcCgpO1xuXHRcdGNvbnN0IGxheWVyc0NvbnRyb2wgPSB0aGlzLmNvbnRyb2xMYXllcnMuZ2V0TGF5ZXJzQ29udHJvbCgpO1xuXG5cdFx0aWYgKG51bGwgIT0gbWFwICYmIG51bGwgIT0gbGF5ZXJzQ29udHJvbCkge1xuXG5cdFx0XHQvLyBSdW4gdGhlIGJhc2VsYXllcnMgZGlmZmVyXG5cdFx0XHRpZiAobnVsbCAhPSB0aGlzLmJhc2VMYXllcnNEaWZmZXIgJiYgbnVsbCAhPSB0aGlzLmxheWVyc0NvbnRyb2xDb25maWdWYWx1ZS5iYXNlTGF5ZXJzKSB7XG5cdFx0XHRcdGNvbnN0IGNoYW5nZXMgPSB0aGlzLmJhc2VMYXllcnNEaWZmZXIuZGlmZih0aGlzLmxheWVyc0NvbnRyb2xDb25maWdWYWx1ZS5iYXNlTGF5ZXJzKTtcblx0XHRcdFx0dGhpcy5jb250cm9sTGF5ZXJzLmFwcGx5QmFzZUxheWVyQ2hhbmdlcyhjaGFuZ2VzKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUnVuIHRoZSBvdmVybGF5cyBkaWZmZXJcblx0XHRcdGlmIChudWxsICE9IHRoaXMub3ZlcmxheXNEaWZmZXIgJiYgbnVsbCAhPSB0aGlzLmxheWVyc0NvbnRyb2xDb25maWdWYWx1ZS5vdmVybGF5cykge1xuXHRcdFx0XHRjb25zdCBjaGFuZ2VzID0gdGhpcy5vdmVybGF5c0RpZmZlci5kaWZmKHRoaXMubGF5ZXJzQ29udHJvbENvbmZpZ1ZhbHVlLm92ZXJsYXlzKTtcblx0XHRcdFx0dGhpcy5jb250cm9sTGF5ZXJzLmFwcGx5T3ZlcmxheUNoYW5nZXMoY2hhbmdlcyk7XG5cdFx0XHR9XG5cblx0XHR9XG5cblx0fVxuXG59XG4iXX0=