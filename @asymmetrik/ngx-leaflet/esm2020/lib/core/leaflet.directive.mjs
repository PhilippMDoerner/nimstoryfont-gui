import { Directive, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { latLng, map } from 'leaflet';
import { LeafletUtil } from './leaflet.util';
import * as i0 from "@angular/core";
export class LeafletDirective {
    constructor(element, zone) {
        this.element = element;
        this.zone = zone;
        this.DEFAULT_ZOOM = 1;
        this.DEFAULT_CENTER = latLng(38.907192, -77.036871);
        this.DEFAULT_FPZ_OPTIONS = {};
        this.fitBoundsOptions = this.DEFAULT_FPZ_OPTIONS;
        this.panOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomOptions = this.DEFAULT_FPZ_OPTIONS;
        this.zoomPanOptions = this.DEFAULT_FPZ_OPTIONS;
        // Default configuration
        this.options = {};
        // Configure callback function for the map
        this.mapReady = new EventEmitter();
        this.zoomChange = new EventEmitter();
        this.centerChange = new EventEmitter();
        // Mouse Map Events
        this.onClick = new EventEmitter();
        this.onDoubleClick = new EventEmitter();
        this.onMouseDown = new EventEmitter();
        this.onMouseUp = new EventEmitter();
        this.onMouseMove = new EventEmitter();
        this.onMouseOver = new EventEmitter();
        this.onMouseOut = new EventEmitter();
        // Map Move Events
        this.onMapMove = new EventEmitter();
        this.onMapMoveStart = new EventEmitter();
        this.onMapMoveEnd = new EventEmitter();
        // Map Zoom Events
        this.onMapZoom = new EventEmitter();
        this.onMapZoomStart = new EventEmitter();
        this.onMapZoomEnd = new EventEmitter();
        // Nothing here
    }
    ngOnInit() {
        // Create the map outside of angular so the various map events don't trigger change detection
        this.zone.runOutsideAngular(() => {
            // Create the map with some reasonable defaults
            this.map = map(this.element.nativeElement, this.options);
            this.addMapEventListeners();
        });
        // Only setView if there is a center/zoom
        if (null != this.center && null != this.zoom) {
            this.setView(this.center, this.zoom);
        }
        // Set up all the initial settings
        if (null != this.fitBounds) {
            this.setFitBounds(this.fitBounds);
        }
        if (null != this.maxBounds) {
            this.setMaxBounds(this.maxBounds);
        }
        if (null != this.minZoom) {
            this.setMinZoom(this.minZoom);
        }
        if (null != this.maxZoom) {
            this.setMaxZoom(this.maxZoom);
        }
        this.doResize();
        // Fire map ready event
        this.mapReady.emit(this.map);
    }
    ngOnChanges(changes) {
        /*
         * The following code is to address an issue with our (basic) implementation of
         * zooming and panning. From our testing, it seems that a pan operation followed
         * by a zoom operation in the same thread will interfere with eachother. The zoom
         * operation interrupts/cancels the pan, resulting in a final center point that is
         * inaccurate. The solution seems to be to either separate them with a timeout or
          * to collapse them into a setView call.
         */
        // Zooming and Panning
        if (changes['zoom'] && changes['center'] && null != this.zoom && null != this.center) {
            this.setView(changes['center'].currentValue, changes['zoom'].currentValue);
        }
        // Set the zoom level
        else if (changes['zoom']) {
            this.setZoom(changes['zoom'].currentValue);
        }
        // Set the map center
        else if (changes['center']) {
            this.setCenter(changes['center'].currentValue);
        }
        // Other options
        if (changes['fitBounds']) {
            this.setFitBounds(changes['fitBounds'].currentValue);
        }
        if (changes['maxBounds']) {
            this.setMaxBounds(changes['maxBounds'].currentValue);
        }
        if (changes['minZoom']) {
            this.setMinZoom(changes['minZoom'].currentValue);
        }
        if (changes['maxZoom']) {
            this.setMaxZoom(changes['maxZoom'].currentValue);
        }
    }
    ngOnDestroy() {
        // If this directive is destroyed, the map is too
        if (null != this.map) {
            this.map.remove();
        }
    }
    getMap() {
        return this.map;
    }
    onResize() {
        this.delayResize();
    }
    addMapEventListeners() {
        const registerEventHandler = (eventName, handler) => {
            this.map.on(eventName, handler);
        };
        // Add all the pass-through mouse event handlers
        registerEventHandler('click', (e) => LeafletUtil.handleEvent(this.zone, this.onClick, e));
        registerEventHandler('dblclick', (e) => LeafletUtil.handleEvent(this.zone, this.onDoubleClick, e));
        registerEventHandler('mousedown', (e) => LeafletUtil.handleEvent(this.zone, this.onMouseDown, e));
        registerEventHandler('mouseup', (e) => LeafletUtil.handleEvent(this.zone, this.onMouseUp, e));
        registerEventHandler('mouseover', (e) => LeafletUtil.handleEvent(this.zone, this.onMouseOver, e));
        registerEventHandler('mouseout', (e) => LeafletUtil.handleEvent(this.zone, this.onMouseOut, e));
        registerEventHandler('mousemove', (e) => LeafletUtil.handleEvent(this.zone, this.onMouseMove, e));
        registerEventHandler('zoomstart', (e) => LeafletUtil.handleEvent(this.zone, this.onMapZoomStart, e));
        registerEventHandler('zoom', (e) => LeafletUtil.handleEvent(this.zone, this.onMapZoom, e));
        registerEventHandler('zoomend', (e) => LeafletUtil.handleEvent(this.zone, this.onMapZoomEnd, e));
        registerEventHandler('movestart', (e) => LeafletUtil.handleEvent(this.zone, this.onMapMoveStart, e));
        registerEventHandler('move', (e) => LeafletUtil.handleEvent(this.zone, this.onMapMove, e));
        registerEventHandler('moveend', (e) => LeafletUtil.handleEvent(this.zone, this.onMapMoveEnd, e));
        // Update any things for which we provide output bindings
        const outputUpdateHandler = () => {
            const zoom = this.map.getZoom();
            if (zoom !== this.zoom) {
                this.zoom = zoom;
                LeafletUtil.handleEvent(this.zone, this.zoomChange, zoom);
            }
            const center = this.map.getCenter();
            if (null != center || null != this.center) {
                if (((null == center || null == this.center) && center !== this.center)
                    || (center.lat !== this.center.lat || center.lng !== this.center.lng)) {
                    this.center = center;
                    LeafletUtil.handleEvent(this.zone, this.centerChange, center);
                }
            }
        };
        registerEventHandler('moveend', outputUpdateHandler);
        registerEventHandler('zoomend', outputUpdateHandler);
    }
    /**
     * Resize the map to fit it's parent container
     */
    doResize() {
        // Run this outside of angular so the map events stay outside of angular
        this.zone.runOutsideAngular(() => {
            // Invalidate the map size to trigger it to update itself
            if (null != this.map) {
                this.map.invalidateSize({});
            }
        });
    }
    /**
     * Manage a delayed resize of the component
     */
    delayResize() {
        if (null != this.resizeTimer) {
            clearTimeout(this.resizeTimer);
        }
        this.resizeTimer = setTimeout(this.doResize.bind(this), 200);
    }
    /**
     * Set the view (center/zoom) all at once
     * @param center The new center
     * @param zoom The new zoom level
     */
    setView(center, zoom) {
        if (null != this.map && null != center && null != zoom) {
            this.map.setView(center, zoom, this.zoomPanOptions);
        }
    }
    /**
     * Set the map zoom level
     * @param zoom the new zoom level for the map
     */
    setZoom(zoom) {
        if (null != this.map && null != zoom) {
            this.map.setZoom(zoom, this.zoomOptions);
        }
    }
    /**
     * Set the center of the map
     * @param center the center point
     */
    setCenter(center) {
        if (null != this.map && null != center) {
            this.map.panTo(center, this.panOptions);
        }
    }
    /**
     * Fit the map to the bounds
     * @param latLngBounds the boundary to set
     */
    setFitBounds(latLngBounds) {
        if (null != this.map && null != latLngBounds) {
            this.map.fitBounds(latLngBounds, this.fitBoundsOptions);
        }
    }
    /**
     * Set the map's max bounds
     * @param latLngBounds the boundary to set
     */
    setMaxBounds(latLngBounds) {
        if (null != this.map && null != latLngBounds) {
            this.map.setMaxBounds(latLngBounds);
        }
    }
    /**
     * Set the map's min zoom
     * @param number the new min zoom
     */
    setMinZoom(zoom) {
        if (null != this.map && null != zoom) {
            this.map.setMinZoom(zoom);
        }
    }
    /**
     * Set the map's min zoom
     * @param number the new min zoom
     */
    setMaxZoom(zoom) {
        if (null != this.map && null != zoom) {
            this.map.setMaxZoom(zoom);
        }
    }
}
LeafletDirective.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LeafletDirective, deps: [{ token: i0.ElementRef }, { token: i0.NgZone }], target: i0.ɵɵFactoryTarget.Directive });
LeafletDirective.ɵdir = i0.ɵɵngDeclareDirective({ minVersion: "14.0.0", version: "15.0.1", type: LeafletDirective, selector: "[leaflet]", inputs: { fitBoundsOptions: ["leafletFitBoundsOptions", "fitBoundsOptions"], panOptions: ["leafletPanOptions", "panOptions"], zoomOptions: ["leafletZoomOptions", "zoomOptions"], zoomPanOptions: ["leafletZoomPanOptions", "zoomPanOptions"], options: ["leafletOptions", "options"], zoom: ["leafletZoom", "zoom"], center: ["leafletCenter", "center"], fitBounds: ["leafletFitBounds", "fitBounds"], maxBounds: ["leafletMaxBounds", "maxBounds"], minZoom: ["leafletMinZoom", "minZoom"], maxZoom: ["leafletMaxZoom", "maxZoom"] }, outputs: { mapReady: "leafletMapReady", zoomChange: "leafletZoomChange", centerChange: "leafletCenterChange", onClick: "leafletClick", onDoubleClick: "leafletDoubleClick", onMouseDown: "leafletMouseDown", onMouseUp: "leafletMouseUp", onMouseMove: "leafletMouseMove", onMouseOver: "leafletMouseOver", onMouseOut: "leafletMouseOut", onMapMove: "leafletMapMove", onMapMoveStart: "leafletMapMoveStart", onMapMoveEnd: "leafletMapMoveEnd", onMapZoom: "leafletMapZoom", onMapZoomStart: "leafletMapZoomStart", onMapZoomEnd: "leafletMapZoomEnd" }, host: { listeners: { "window:resize": "onResize()" } }, usesOnChanges: true, ngImport: i0 });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "15.0.1", ngImport: i0, type: LeafletDirective, decorators: [{
            type: Directive,
            args: [{
                    selector: '[leaflet]'
                }]
        }], ctorParameters: function () { return [{ type: i0.ElementRef }, { type: i0.NgZone }]; }, propDecorators: { fitBoundsOptions: [{
                type: Input,
                args: ['leafletFitBoundsOptions']
            }], panOptions: [{
                type: Input,
                args: ['leafletPanOptions']
            }], zoomOptions: [{
                type: Input,
                args: ['leafletZoomOptions']
            }], zoomPanOptions: [{
                type: Input,
                args: ['leafletZoomPanOptions']
            }], options: [{
                type: Input,
                args: ['leafletOptions']
            }], mapReady: [{
                type: Output,
                args: ['leafletMapReady']
            }], zoom: [{
                type: Input,
                args: ['leafletZoom']
            }], zoomChange: [{
                type: Output,
                args: ['leafletZoomChange']
            }], center: [{
                type: Input,
                args: ['leafletCenter']
            }], centerChange: [{
                type: Output,
                args: ['leafletCenterChange']
            }], fitBounds: [{
                type: Input,
                args: ['leafletFitBounds']
            }], maxBounds: [{
                type: Input,
                args: ['leafletMaxBounds']
            }], minZoom: [{
                type: Input,
                args: ['leafletMinZoom']
            }], maxZoom: [{
                type: Input,
                args: ['leafletMaxZoom']
            }], onClick: [{
                type: Output,
                args: ['leafletClick']
            }], onDoubleClick: [{
                type: Output,
                args: ['leafletDoubleClick']
            }], onMouseDown: [{
                type: Output,
                args: ['leafletMouseDown']
            }], onMouseUp: [{
                type: Output,
                args: ['leafletMouseUp']
            }], onMouseMove: [{
                type: Output,
                args: ['leafletMouseMove']
            }], onMouseOver: [{
                type: Output,
                args: ['leafletMouseOver']
            }], onMouseOut: [{
                type: Output,
                args: ['leafletMouseOut']
            }], onMapMove: [{
                type: Output,
                args: ['leafletMapMove']
            }], onMapMoveStart: [{
                type: Output,
                args: ['leafletMapMoveStart']
            }], onMapMoveEnd: [{
                type: Output,
                args: ['leafletMapMoveEnd']
            }], onMapZoom: [{
                type: Output,
                args: ['leafletMapZoom']
            }], onMapZoomStart: [{
                type: Output,
                args: ['leafletMapZoomStart']
            }], onMapZoomEnd: [{
                type: Output,
                args: ['leafletMapZoomEnd']
            }], onResize: [{
                type: HostListener,
                args: ['window:resize', []]
            }] } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGVhZmxldC9zcmMvbGliL2NvcmUvbGVhZmxldC5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUNOLFNBQVMsRUFBYyxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBd0MsTUFBTSxFQUV0RyxNQUFNLGVBQWUsQ0FBQztBQUV2QixPQUFPLEVBQUUsTUFBTSxFQUF5RCxHQUFHLEVBQW1CLE1BQU0sU0FBUyxDQUFDO0FBRTlHLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7QUFLN0MsTUFBTSxPQUFPLGdCQUFnQjtJQWdFNUIsWUFBb0IsT0FBbUIsRUFBVSxJQUFZO1FBQXpDLFlBQU8sR0FBUCxPQUFPLENBQVk7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFRO1FBN0RwRCxpQkFBWSxHQUFHLENBQUMsQ0FBQztRQUNqQixtQkFBYyxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyx3QkFBbUIsR0FBRyxFQUFFLENBQUM7UUFPQSxxQkFBZ0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUM7UUFDbEQsZUFBVSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNyQyxnQkFBVyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUNwQyxtQkFBYyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztRQUcxRSx3QkFBd0I7UUFDQyxZQUFPLEdBQWUsRUFBRSxDQUFDO1FBRWxELDBDQUEwQztRQUNmLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBTyxDQUFDO1FBSWpDLGVBQVUsR0FBRyxJQUFJLFlBQVksRUFBVSxDQUFDO1FBSXRDLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQWV6RSxtQkFBbUI7UUFDSyxZQUFPLEdB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QW1CO2dCQXNHM0IsUUFBUTtzQkFEUCxZQUFZO3VCQUFDLGVBQWUsRUFBRSxFQUFFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcblx0RGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE5nWm9uZSwgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIE9uSW5pdCwgT3V0cHV0LFxuXHRTaW1wbGVDaGFuZ2Vcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IGxhdExuZywgTGF0TG5nLCBMYXRMbmdCb3VuZHMsIExlYWZsZXRFdmVudCwgTGVhZmxldE1vdXNlRXZlbnQsIG1hcCwgTWFwLCBNYXBPcHRpb25zIH0gZnJvbSAnbGVhZmxldCc7XG5cbmltcG9ydCB7IExlYWZsZXRVdGlsIH0gZnJvbSAnLi9sZWFmbGV0LnV0aWwnO1xuXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbGVhZmxldF0nXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXREaXJlY3RpdmVcblx0aW1wbGVtZW50cyBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0IHtcblxuXHRyZWFkb25seSBERUZBVUxUX1pPT00gPSAxO1xuXHRyZWFkb25seSBERUZBVUxUX0NFTlRFUiA9IGxhdExuZygzOC45MDcxOTIsIC03Ny4wMzY4NzEpO1xuXHRyZWFkb25seSBERUZBVUxUX0ZQWl9PUFRJT05TID0ge307XG5cblx0cmVzaXplVGltZXI6IGFueTtcblxuXHQvLyBSZWZlcmVuY2UgdG8gdGhlIHByaW1hcnkgbWFwIG9iamVjdFxuXHRtYXA6IE1hcDtcblxuXHRASW5wdXQoJ2xlYWZsZXRGaXRCb3VuZHNPcHRpb25zJykgZml0Qm91bmRzT3B0aW9ucyA9IHRoaXMuREVGQVVMVF9GUFpfT1BUSU9OUztcblx0QElucHV0KCdsZWFmbGV0UGFuT3B0aW9ucycpIHBhbk9wdGlvbnMgPSB0aGlzLkRFRkFVTFRfRlBaX09QVElPTlM7XG5cdEBJbnB1dCgnbGVhZmxldFpvb21PcHRpb25zJykgem9vbU9wdGlvbnMgPSB0aGlzLkRFRkFVTFRfRlBaX09QVElPTlM7XG5cdEBJbnB1dCgnbGVhZmxldFpvb21QYW5PcHRpb25zJykgem9vbVBhbk9wdGlvbnMgPSB0aGlzLkRFRkFVTFRfRlBaX09QVElPTlM7XG5cblxuXHQvLyBEZWZhdWx0IGNvbmZpZ3VyYXRpb25cblx0QElucHV0KCdsZWFmbGV0T3B0aW9ucycpIG9wdGlvbnM6IE1hcE9wdGlvbnMgPSB7fTtcblxuXHQvLyBDb25maWd1cmUgY2FsbGJhY2sgZnVuY3Rpb24gZm9yIHRoZSBtYXBcblx0QE91dHB1dCgnbGVhZmxldE1hcFJlYWR5JykgbWFwUmVhZHkgPSBuZXcgRXZlbnRFbWl0dGVyPE1hcD4oKTtcblxuXHQvLyBab29tIGxldmVsIGZvciB0aGUgbWFwXG5cdEBJbnB1dCgnbGVhZmxldFpvb20nKSB6b29tOiBudW1iZXI7XG5cdEBPdXRwdXQoJ2xlYWZsZXRab29tQ2hhbmdlJykgem9vbUNoYW5nZSA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG5cdC8vIENlbnRlciBvZiB0aGUgbWFwXG5cdEBJbnB1dCgnbGVhZmxldENlbnRlcicpIGNlbnRlcjogTGF0TG5nO1xuXHRAT3V0cHV0KCdsZWFmbGV0Q2VudGVyQ2hhbmdlJykgY2VudGVyQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxMYXRMbmc+KCk7XG5cblx0Ly8gU2V0IGZpdCBib3VuZHMgZm9yIG1hcFxuXHRASW5wdXQoJ2xlYWZsZXRGaXRCb3VuZHMnKSBmaXRCb3VuZHM6IExhdExuZ0JvdW5kcztcblxuXHQvLyBTZXQgdGhlIG1heCBib3VuZHMgZm9yIHRoZSBtYXBcblx0QElucHV0KCdsZWFmbGV0TWF4Qm91bmRzJykgbWF4Qm91bmRzOiBMYXRMbmdCb3VuZHM7XG5cblx0Ly8gU2V0IHRoZSBtaW4gem9vbSBmb3IgdGhlIG1hcFxuXHRASW5wdXQoJ2xlYWZsZXRNaW5ab29tJykgbWluWm9vbTogbnVtYmVyO1xuXG5cdC8vIFNldCB0aGUgbWF4IHpvb20gZm9yIHRoZSBtYXBcblx0QElucHV0KCdsZWFmbGV0TWF4Wm9vbScpIG1heFpvb206IG51bWJlcjtcblxuXG5cdC8vIE1vdXNlIE1hcCBFdmVudHNcblx0QE91dHB1dCgnbGVhZmxldENsaWNrJykgb25DbGljayA9IG5ldyBFdmVudEVtaXR0ZXI8TGVhZmxldE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoJ2xlYWZsZXREb3VibGVDbGljaycpIG9uRG91YmxlQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRNb3VzZUV2ZW50PigpO1xuXHRAT3V0cHV0KCdsZWFmbGV0TW91c2VEb3duJykgb25Nb3VzZURvd24gPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRNb3VzZUV2ZW50PigpO1xuXHRAT3V0cHV0KCdsZWFmbGV0TW91c2VVcCcpIG9uTW91c2VVcCA9IG5ldyBFdmVudEVtaXR0ZXI8TGVhZmxldE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoJ2xlYWZsZXRNb3VzZU1vdmUnKSBvbk1vdXNlTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TGVhZmxldE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoJ2xlYWZsZXRNb3VzZU92ZXInKSBvbk1vdXNlT3ZlciA9IG5ldyBFdmVudEVtaXR0ZXI8TGVhZmxldE1vdXNlRXZlbnQ+KCk7XG5cdEBPdXRwdXQoJ2xlYWZsZXRNb3VzZU91dCcpIG9uTW91c2VPdXQgPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRNb3VzZUV2ZW50PigpO1xuXG5cdC8vIE1hcCBNb3ZlIEV2ZW50c1xuXHRAT3V0cHV0KCdsZWFmbGV0TWFwTW92ZScpIG9uTWFwTW92ZSA9IG5ldyBFdmVudEVtaXR0ZXI8TGVhZmxldEV2ZW50PigpO1xuXHRAT3V0cHV0KCdsZWFmbGV0TWFwTW92ZVN0YXJ0Jykgb25NYXBNb3ZlU3RhcnQgPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRFdmVudD4oKTtcblx0QE91dHB1dCgnbGVhZmxldE1hcE1vdmVFbmQnKSBvbk1hcE1vdmVFbmQgPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRFdmVudD4oKTtcblxuXHQvLyBNYXAgWm9vbSBFdmVudHNcblx0QE91dHB1dCgnbGVhZmxldE1hcFpvb20nKSBvbk1hcFpvb20gPSBuZXcgRXZlbnRFbWl0dGVyPExlYWZsZXRFdmVudD4oKTtcblx0QE91dHB1dCgnbGVhZmxldE1hcFpvb21TdGFydCcpIG9uTWFwWm9vbVN0YXJ0ID0gbmV3IEV2ZW50RW1pdHRlcjxMZWFmbGV0RXZlbnQ+KCk7XG5cdEBPdXRwdXQoJ2xlYWZsZXRNYXBab29tRW5kJykgb25NYXBab29tRW5kID0gbmV3IEV2ZW50RW1pdHRlcjxMZWFmbGV0RXZlbnQ+KCk7XG5cblx0Y29uc3RydWN0b3IocHJpdmF0ZSBlbGVtZW50OiBFbGVtZW50UmVmLCBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuXHRcdC8vIE5vdGhpbmcgaGVyZVxuXHR9XG5cblx0bmdPbkluaXQoKSB7XG5cblx0XHQvLyBDcmVhdGUgdGhlIG1hcCBvdXRzaWRlIG9mIGFuZ3VsYXIgc28gdGhlIHZhcmlvdXMgbWFwIGV2ZW50cyBkb24ndCB0cmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb25cblx0XHR0aGlzLnpvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xuXG5cdFx0XHQvLyBDcmVhdGUgdGhlIG1hcCB3aXRoIHNvbWUgcmVhc29uYWJsZSBkZWZhdWx0c1xuXHRcdFx0dGhpcy5tYXAgPSBtYXAodGhpcy5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQsIHRoaXMub3B0aW9ucyk7XG5cdFx0XHR0aGlzLmFkZE1hcEV2ZW50TGlzdGVuZXJzKCk7XG5cblx0XHR9KTtcblxuXHRcdC8vIE9ubHkgc2V0VmlldyBpZiB0aGVyZSBpcyBhIGNlbnRlci96b29tXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5jZW50ZXIgJiYgbnVsbCAhPSB0aGlzLnpvb20pIHtcblx0XHRcdHRoaXMuc2V0Vmlldyh0aGlzLmNlbnRlciwgdGhpcy56b29tKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdXAgYWxsIHRoZSBpbml0aWFsIHNldHRpbmdzXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5maXRCb3VuZHMpIHtcblx0XHRcdHRoaXMuc2V0Rml0Qm91bmRzKHRoaXMuZml0Qm91bmRzKTtcblx0XHR9XG5cblx0XHRpZiAobnVsbCAhPSB0aGlzLm1heEJvdW5kcykge1xuXHRcdFx0dGhpcy5zZXRNYXhCb3VuZHModGhpcy5tYXhCb3VuZHMpO1xuXHRcdH1cblxuXHRcdGlmIChudWxsICE9IHRoaXMubWluWm9vbSkge1xuXHRcdFx0dGhpcy5zZXRNaW5ab29tKHRoaXMubWluWm9vbSk7XG5cdFx0fVxuXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5tYXhab29tKSB7XG5cdFx0XHR0aGlzLnNldE1heFpvb20odGhpcy5tYXhab29tKTtcblx0XHR9XG5cblx0XHR0aGlzLmRvUmVzaXplKCk7XG5cblx0XHQvLyBGaXJlIG1hcCByZWFkeSBldmVudFxuXHRcdHRoaXMubWFwUmVhZHkuZW1pdCh0aGlzLm1hcCk7XG5cblx0fVxuXG5cdG5nT25DaGFuZ2VzKGNoYW5nZXM6IHsgW2tleTogc3RyaW5nXTogU2ltcGxlQ2hhbmdlIH0pIHtcblxuXHRcdC8qXG5cdFx0ICogVGhlIGZvbGxvd2luZyBjb2RlIGlzIHRvIGFkZHJlc3MgYW4gaXNzdWUgd2l0aCBvdXIgKGJhc2ljKSBpbXBsZW1lbnRhdGlvbiBvZlxuXHRcdCAqIHpvb21pbmcgYW5kIHBhbm5pbmcuIEZyb20gb3VyIHRlc3RpbmcsIGl0IHNlZW1zIHRoYXQgYSBwYW4gb3BlcmF0aW9uIGZvbGxvd2VkXG5cdFx0ICogYnkgYSB6b29tIG9wZXJhdGlvbiBpbiB0aGUgc2FtZSB0aHJlYWQgd2lsbCBpbnRlcmZlcmUgd2l0aCBlYWNob3RoZXIuIFRoZSB6b29tXG5cdFx0ICogb3BlcmF0aW9uIGludGVycnVwdHMvY2FuY2VscyB0aGUgcGFuLCByZXN1bHRpbmcgaW4gYSBmaW5hbCBjZW50ZXIgcG9pbnQgdGhhdCBpc1xuXHRcdCAqIGluYWNjdXJhdGUuIFRoZSBzb2x1dGlvbiBzZWVtcyB0byBiZSB0byBlaXRoZXIgc2VwYXJhdGUgdGhlbSB3aXRoIGEgdGltZW91dCBvclxuXHRcdCAgKiB0byBjb2xsYXBzZSB0aGVtIGludG8gYSBzZXRWaWV3IGNhbGwuXG5cdFx0ICovXG5cblx0XHQvLyBab29taW5nIGFuZCBQYW5uaW5nXG5cdFx0aWYgKGNoYW5nZXNbJ3pvb20nXSAmJiBjaGFuZ2VzWydjZW50ZXInXSAmJiBudWxsICE9IHRoaXMuem9vbSAmJiBudWxsICE9IHRoaXMuY2VudGVyKSB7XG5cdFx0XHR0aGlzLnNldFZpZXcoY2hhbmdlc1snY2VudGVyJ10uY3VycmVudFZhbHVlLCBjaGFuZ2VzWyd6b29tJ10uY3VycmVudFZhbHVlKTtcblx0XHR9XG5cdFx0Ly8gU2V0IHRoZSB6b29tIGxldmVsXG5cdFx0ZWxzZSBpZiAoY2hhbmdlc1snem9vbSddKSB7XG5cdFx0XHR0aGlzLnNldFpvb20oY2hhbmdlc1snem9vbSddLmN1cnJlbnRWYWx1ZSk7XG5cdFx0fVxuXHRcdC8vIFNldCB0aGUgbWFwIGNlbnRlclxuXHRcdGVsc2UgaWYgKGNoYW5nZXNbJ2NlbnRlciddKSB7XG5cdFx0XHR0aGlzLnNldENlbnRlcihjaGFuZ2VzWydjZW50ZXInXS5jdXJyZW50VmFsdWUpO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyIG9wdGlvbnNcblx0XHRpZiAoY2hhbmdlc1snZml0Qm91bmRzJ10pIHtcblx0XHRcdHRoaXMuc2V0Rml0Qm91bmRzKGNoYW5nZXNbJ2ZpdEJvdW5kcyddLmN1cnJlbnRWYWx1ZSk7XG5cdFx0fVxuXG5cdFx0aWYgKGNoYW5nZXNbJ21heEJvdW5kcyddKSB7XG5cdFx0XHR0aGlzLnNldE1heEJvdW5kcyhjaGFuZ2VzWydtYXhCb3VuZHMnXS5jdXJyZW50VmFsdWUpO1xuXHRcdH1cblxuXHRcdGlmIChjaGFuZ2VzWydtaW5ab29tJ10pIHtcblx0XHRcdHRoaXMuc2V0TWluWm9vbShjaGFuZ2VzWydtaW5ab29tJ10uY3VycmVudFZhbHVlKTtcblx0XHR9XG5cblx0XHRpZiAoY2hhbmdlc1snbWF4Wm9vbSddKSB7XG5cdFx0XHR0aGlzLnNldE1heFpvb20oY2hhbmdlc1snbWF4Wm9vbSddLmN1cnJlbnRWYWx1ZSk7XG5cdFx0fVxuXG5cdH1cblxuXHRuZ09uRGVzdHJveSgpIHtcblx0XHQvLyBJZiB0aGlzIGRpcmVjdGl2ZSBpcyBkZXN0cm95ZWQsIHRoZSBtYXAgaXMgdG9vXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5tYXApIHtcblx0XHRcdHRoaXMubWFwLnJlbW92ZSgpO1xuXHRcdH1cblx0fVxuXG5cdHB1YmxpYyBnZXRNYXAoKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwO1xuXHR9XG5cblxuXHRASG9zdExpc3RlbmVyKCd3aW5kb3c6cmVzaXplJywgW10pXG5cdG9uUmVzaXplKCkge1xuXHRcdHRoaXMuZGVsYXlSZXNpemUoKTtcblx0fVxuXG5cdHByaXZhdGUgYWRkTWFwRXZlbnRMaXN0ZW5lcnMoKSB7XG5cblx0XHRjb25zdCByZWdpc3RlckV2ZW50SGFuZGxlciA9IChldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogKGU6IExlYWZsZXRFdmVudCkgPT4gYW55KSA9PiB7XG5cdFx0XHR0aGlzLm1hcC5vbihldmVudE5hbWUsIGhhbmRsZXIpO1xuXHRcdH07XG5cblxuXHRcdC8vIEFkZCBhbGwgdGhlIHBhc3MtdGhyb3VnaCBtb3VzZSBldmVudCBoYW5kbGVyc1xuXHRcdHJlZ2lzdGVyRXZlbnRIYW5kbGVyKCdjbGljaycsIChlOiBMZWFmbGV0TW91c2VFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uQ2xpY2ssIGUpKTtcblx0XHRyZWdpc3RlckV2ZW50SGFuZGxlcignZGJsY2xpY2snLCAoZTogTGVhZmxldE1vdXNlRXZlbnQpID0+IExlYWZsZXRVdGlsLmhhbmRsZUV2ZW50KHRoaXMuem9uZSwgdGhpcy5vbkRvdWJsZUNsaWNrLCBlKSk7XG5cdFx0cmVnaXN0ZXJFdmVudEhhbmRsZXIoJ21vdXNlZG93bicsIChlOiBMZWFmbGV0TW91c2VFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uTW91c2VEb3duLCBlKSk7XG5cdFx0cmVnaXN0ZXJFdmVudEhhbmRsZXIoJ21vdXNldXAnLCAoZTogTGVhZmxldE1vdXNlRXZlbnQpID0+IExlYWZsZXRVdGlsLmhhbmRsZUV2ZW50KHRoaXMuem9uZSwgdGhpcy5vbk1vdXNlVXAsIGUpKTtcblx0XHRyZWdpc3RlckV2ZW50SGFuZGxlcignbW91c2VvdmVyJywgKGU6IExlYWZsZXRNb3VzZUV2ZW50KSA9PiBMZWFmbGV0VXRpbC5oYW5kbGVFdmVudCh0aGlzLnpvbmUsIHRoaXMub25Nb3VzZU92ZXIsIGUpKTtcblx0XHRyZWdpc3RlckV2ZW50SGFuZGxlcignbW91c2VvdXQnLCAoZTogTGVhZmxldE1vdXNlRXZlbnQpID0+IExlYWZsZXRVdGlsLmhhbmRsZUV2ZW50KHRoaXMuem9uZSwgdGhpcy5vbk1vdXNlT3V0LCBlKSk7XG5cdFx0cmVnaXN0ZXJFdmVudEhhbmRsZXIoJ21vdXNlbW92ZScsIChlOiBMZWFmbGV0TW91c2VFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uTW91c2VNb3ZlLCBlKSk7XG5cblx0XHRyZWdpc3RlckV2ZW50SGFuZGxlcignem9vbXN0YXJ0JywgKGU6IExlYWZsZXRFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uTWFwWm9vbVN0YXJ0LCBlKSk7XG5cdFx0cmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3pvb20nLCAoZTogTGVhZmxldEV2ZW50KSA9PiBMZWFmbGV0VXRpbC5oYW5kbGVFdmVudCh0aGlzLnpvbmUsIHRoaXMub25NYXBab29tLCBlKSk7XG5cdFx0cmVnaXN0ZXJFdmVudEhhbmRsZXIoJ3pvb21lbmQnLCAoZTogTGVhZmxldEV2ZW50KSA9PiBMZWFmbGV0VXRpbC5oYW5kbGVFdmVudCh0aGlzLnpvbmUsIHRoaXMub25NYXBab29tRW5kLCBlKSk7XG5cdFx0cmVnaXN0ZXJFdmVudEhhbmRsZXIoJ21vdmVzdGFydCcsIChlOiBMZWFmbGV0RXZlbnQpID0+IExlYWZsZXRVdGlsLmhhbmRsZUV2ZW50KHRoaXMuem9uZSwgdGhpcy5vbk1hcE1vdmVTdGFydCwgZSkpO1xuXHRcdHJlZ2lzdGVyRXZlbnRIYW5kbGVyKCdtb3ZlJywgKGU6IExlYWZsZXRFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uTWFwTW92ZSwgZSkpO1xuXHRcdHJlZ2lzdGVyRXZlbnRIYW5kbGVyKCdtb3ZlZW5kJywgKGU6IExlYWZsZXRFdmVudCkgPT4gTGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLm9uTWFwTW92ZUVuZCwgZSkpO1xuXG5cblx0XHQvLyBVcGRhdGUgYW55IHRoaW5ncyBmb3Igd2hpY2ggd2UgcHJvdmlkZSBvdXRwdXQgYmluZGluZ3Ncblx0XHRjb25zdCBvdXRwdXRVcGRhdGVIYW5kbGVyID0gKCkgPT4ge1xuXHRcdFx0Y29uc3Qgem9vbSA9IHRoaXMubWFwLmdldFpvb20oKTtcblx0XHRcdGlmICh6b29tICE9PSB0aGlzLnpvb20pIHtcblx0XHRcdFx0dGhpcy56b29tID0gem9vbTtcblx0XHRcdFx0TGVhZmxldFV0aWwuaGFuZGxlRXZlbnQodGhpcy56b25lLCB0aGlzLnpvb21DaGFuZ2UsIHpvb20pO1xuXHRcdFx0fVxuXG5cdFx0XHRjb25zdCBjZW50ZXIgPSB0aGlzLm1hcC5nZXRDZW50ZXIoKTtcblx0XHRcdGlmIChudWxsICE9IGNlbnRlciB8fCBudWxsICE9IHRoaXMuY2VudGVyKSB7XG5cblx0XHRcdFx0aWYgKCgobnVsbCA9PSBjZW50ZXIgfHwgbnVsbCA9PSB0aGlzLmNlbnRlcikgJiYgY2VudGVyICE9PSB0aGlzLmNlbnRlcilcblx0XHRcdFx0XHR8fCAoY2VudGVyLmxhdCAhPT0gdGhpcy5jZW50ZXIubGF0IHx8IGNlbnRlci5sbmcgIT09IHRoaXMuY2VudGVyLmxuZykpIHtcblxuXHRcdFx0XHRcdHRoaXMuY2VudGVyID0gY2VudGVyO1xuXHRcdFx0XHRcdExlYWZsZXRVdGlsLmhhbmRsZUV2ZW50KHRoaXMuem9uZSwgdGhpcy5jZW50ZXJDaGFuZ2UsIGNlbnRlcik7XG5cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRyZWdpc3RlckV2ZW50SGFuZGxlcignbW92ZWVuZCcsIG91dHB1dFVwZGF0ZUhhbmRsZXIpO1xuXHRcdHJlZ2lzdGVyRXZlbnRIYW5kbGVyKCd6b29tZW5kJywgb3V0cHV0VXBkYXRlSGFuZGxlcik7XG5cdH1cblxuXHQvKipcblx0ICogUmVzaXplIHRoZSBtYXAgdG8gZml0IGl0J3MgcGFyZW50IGNvbnRhaW5lclxuXHQgKi9cblx0cHJpdmF0ZSBkb1Jlc2l6ZSgpIHtcblxuXHRcdC8vIFJ1biB0aGlzIG91dHNpZGUgb2YgYW5ndWxhciBzbyB0aGUgbWFwIGV2ZW50cyBzdGF5IG91dHNpZGUgb2YgYW5ndWxhclxuXHRcdHRoaXMuem9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XG5cblx0XHRcdC8vIEludmFsaWRhdGUgdGhlIG1hcCBzaXplIHRvIHRyaWdnZXIgaXQgdG8gdXBkYXRlIGl0c2VsZlxuXHRcdFx0aWYgKG51bGwgIT0gdGhpcy5tYXApIHtcblx0XHRcdFx0dGhpcy5tYXAuaW52YWxpZGF0ZVNpemUoe30pO1xuXHRcdFx0fVxuXG5cdFx0fSk7XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBNYW5hZ2UgYSBkZWxheWVkIHJlc2l6ZSBvZiB0aGUgY29tcG9uZW50XG5cdCAqL1xuXHRwcml2YXRlIGRlbGF5UmVzaXplKCkge1xuXHRcdGlmIChudWxsICE9IHRoaXMucmVzaXplVGltZXIpIHtcblx0XHRcdGNsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVyKTtcblx0XHR9XG5cdFx0dGhpcy5yZXNpemVUaW1lciA9IHNldFRpbWVvdXQodGhpcy5kb1Jlc2l6ZS5iaW5kKHRoaXMpLCAyMDApO1xuXHR9XG5cblxuXHQvKipcblx0ICogU2V0IHRoZSB2aWV3IChjZW50ZXIvem9vbSkgYWxsIGF0IG9uY2Vcblx0ICogQHBhcmFtIGNlbnRlciBUaGUgbmV3IGNlbnRlclxuXHQgKiBAcGFyYW0gem9vbSBUaGUgbmV3IHpvb20gbGV2ZWxcblx0ICovXG5cdHByaXZhdGUgc2V0VmlldyhjZW50ZXI6IExhdExuZywgem9vbTogbnVtYmVyKSB7XG5cblx0XHRpZiAobnVsbCAhPSB0aGlzLm1hcCAmJiBudWxsICE9IGNlbnRlciAmJiBudWxsICE9IHpvb20pIHtcblx0XHRcdHRoaXMubWFwLnNldFZpZXcoY2VudGVyLCB6b29tLCB0aGlzLnpvb21QYW5PcHRpb25zKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIG1hcCB6b29tIGxldmVsXG5cdCAqIEBwYXJhbSB6b29tIHRoZSBuZXcgem9vbSBsZXZlbCBmb3IgdGhlIG1hcFxuXHQgKi9cblx0cHJpdmF0ZSBzZXRab29tKHpvb206IG51bWJlcikge1xuXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5tYXAgJiYgbnVsbCAhPSB6b29tKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRab29tKHpvb20sIHRoaXMuem9vbU9wdGlvbnMpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgY2VudGVyIG9mIHRoZSBtYXBcblx0ICogQHBhcmFtIGNlbnRlciB0aGUgY2VudGVyIHBvaW50XG5cdCAqL1xuXHRwcml2YXRlIHNldENlbnRlcihjZW50ZXI6IExhdExuZykge1xuXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5tYXAgJiYgbnVsbCAhPSBjZW50ZXIpIHtcblx0XHRcdHRoaXMubWFwLnBhblRvKGNlbnRlciwgdGhpcy5wYW5PcHRpb25zKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBGaXQgdGhlIG1hcCB0byB0aGUgYm91bmRzXG5cdCAqIEBwYXJhbSBsYXRMbmdCb3VuZHMgdGhlIGJvdW5kYXJ5IHRvIHNldFxuXHQgKi9cblx0cHJpdmF0ZSBzZXRGaXRCb3VuZHMobGF0TG5nQm91bmRzOiBMYXRMbmdCb3VuZHMpIHtcblxuXHRcdGlmIChudWxsICE9IHRoaXMubWFwICYmIG51bGwgIT0gbGF0TG5nQm91bmRzKSB7XG5cdFx0XHR0aGlzLm1hcC5maXRCb3VuZHMobGF0TG5nQm91bmRzLCB0aGlzLmZpdEJvdW5kc09wdGlvbnMpO1xuXHRcdH1cblxuXHR9XG5cblx0LyoqXG5cdCAqIFNldCB0aGUgbWFwJ3MgbWF4IGJvdW5kc1xuXHQgKiBAcGFyYW0gbGF0TG5nQm91bmRzIHRoZSBib3VuZGFyeSB0byBzZXRcblx0ICovXG5cdHByaXZhdGUgc2V0TWF4Qm91bmRzKGxhdExuZ0JvdW5kczogTGF0TG5nQm91bmRzKSB7XG5cblx0XHRpZiAobnVsbCAhPSB0aGlzLm1hcCAmJiBudWxsICE9IGxhdExuZ0JvdW5kcykge1xuXHRcdFx0dGhpcy5tYXAuc2V0TWF4Qm91bmRzKGxhdExuZ0JvdW5kcyk7XG5cdFx0fVxuXG5cdH1cblxuXHQvKipcblx0ICogU2V0IHRoZSBtYXAncyBtaW4gem9vbVxuXHQgKiBAcGFyYW0gbnVtYmVyIHRoZSBuZXcgbWluIHpvb21cblx0ICovXG5cdHByaXZhdGUgc2V0TWluWm9vbSh6b29tOiBudW1iZXIpIHtcblxuXHRcdGlmIChudWxsICE9IHRoaXMubWFwICYmIG51bGwgIT0gem9vbSkge1xuXHRcdFx0dGhpcy5tYXAuc2V0TWluWm9vbSh6b29tKTtcblx0XHR9XG5cblx0fVxuXG5cdC8qKlxuXHQgKiBTZXQgdGhlIG1hcCdzIG1pbiB6b29tXG5cdCAqIEBwYXJhbSBudW1iZXIgdGhlIG5ldyBtaW4gem9vbVxuXHQgKi9cblx0cHJpdmF0ZSBzZXRNYXhab29tKHpvb206IG51bWJlcikge1xuXG5cdFx0aWYgKG51bGwgIT0gdGhpcy5tYXAgJiYgbnVsbCAhPSB6b29tKSB7XG5cdFx0XHR0aGlzLm1hcC5zZXRNYXhab29tKHpvb20pO1xuXHRcdH1cblxuXHR9XG5cbn1cbiJdfQ==