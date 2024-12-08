import { NgModule } from '@angular/core';
import { LeafletDirective } from './core/leaflet.directive';
import { LeafletLayerDirective } from './layers/leaflet-layer.directive';
import { LeafletLayersDirective } from './layers/leaflet-layers.directive';
import { LeafletLayersControlDirective } from './layers/control/leaflet-control-layers.directive';
import { LeafletBaseLayersDirective } from './layers/base/leaflet-baselayers.directive';
import * as i0 from "@angular/core";
export class LeafletModule {
    static { this.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule }); }
    static { this.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "18.0.1", ngImport: i0, type: LeafletModule, declarations: [LeafletDirective,
            LeafletLayerDirective,
            LeafletLayersDirective,
            LeafletLayersControlDirective,
            LeafletBaseLayersDirective], exports: [LeafletDirective,
            LeafletLayerDirective,
            LeafletLayersDirective,
            LeafletLayersControlDirective,
            LeafletBaseLayersDirective] }); }
    static { this.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletModule }); }
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.0.1", ngImport: i0, type: LeafletModule, decorators: [{
            type: NgModule,
            args: [{
                    exports: [
                        LeafletDirective,
                        LeafletLayerDirective,
                        LeafletLayersDirective,
                        LeafletLayersControlDirective,
                        LeafletBaseLayersDirective
                    ],
                    declarations: [
                        LeafletDirective,
                        LeafletLayerDirective,
                        LeafletLayersDirective,
                        LeafletLayersControlDirective,
                        LeafletBaseLayersDirective
                    ]
                }]
        }] });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGVhZmxldC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9uZ3gtbGVhZmxldC9zcmMvbGliL2xlYWZsZXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFekMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUQsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDekUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sbURBQW1ELENBQUM7QUFDbEcsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sNENBQTRDLENBQUM7O0FBa0J4RixNQUFNLE9BQU8sYUFBYTs4R0FBYixhQUFhOytHQUFiLGFBQWEsaUJBUHhCLGdCQUFnQjtZQUNoQixxQkFBcUI7WUFDckIsc0JBQXNCO1lBQ3RCLDZCQUE2QjtZQUM3QiwwQkFBMEIsYUFYMUIsZ0JBQWdCO1lBQ2hCLHFCQUFxQjtZQUNyQixzQkFBc0I7WUFDdEIsNkJBQTZCO1lBQzdCLDBCQUEwQjsrR0FVZixhQUFhOzsyRkFBYixhQUFhO2tCQWhCekIsUUFBUTttQkFBQztvQkFDVCxPQUFPLEVBQUU7d0JBQ1IsZ0JBQWdCO3dCQUNoQixxQkFBcUI7d0JBQ3JCLHNCQUFzQjt3QkFDdEIsNkJBQTZCO3dCQUM3QiwwQkFBMEI7cUJBQzFCO29CQUNELFlBQVksRUFBRTt3QkFDYixnQkFBZ0I7d0JBQ2hCLHFCQUFxQjt3QkFDckIsc0JBQXNCO3dCQUN0Qiw2QkFBNkI7d0JBQzdCLDBCQUEwQjtxQkFDMUI7aUJBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBMZWFmbGV0RGlyZWN0aXZlIH0gZnJvbSAnLi9jb3JlL2xlYWZsZXQuZGlyZWN0aXZlJztcbmltcG9ydCB7IExlYWZsZXRMYXllckRpcmVjdGl2ZSB9IGZyb20gJy4vbGF5ZXJzL2xlYWZsZXQtbGF5ZXIuZGlyZWN0aXZlJztcbmltcG9ydCB7IExlYWZsZXRMYXllcnNEaXJlY3RpdmUgfSBmcm9tICcuL2xheWVycy9sZWFmbGV0LWxheWVycy5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgTGVhZmxldExheWVyc0NvbnRyb2xEaXJlY3RpdmUgfSBmcm9tICcuL2xheWVycy9jb250cm9sL2xlYWZsZXQtY29udHJvbC1sYXllcnMuZGlyZWN0aXZlJztcbmltcG9ydCB7IExlYWZsZXRCYXNlTGF5ZXJzRGlyZWN0aXZlIH0gZnJvbSAnLi9sYXllcnMvYmFzZS9sZWFmbGV0LWJhc2VsYXllcnMuZGlyZWN0aXZlJztcblxuQE5nTW9kdWxlKHtcblx0ZXhwb3J0czogW1xuXHRcdExlYWZsZXREaXJlY3RpdmUsXG5cdFx0TGVhZmxldExheWVyRGlyZWN0aXZlLFxuXHRcdExlYWZsZXRMYXllcnNEaXJlY3RpdmUsXG5cdFx0TGVhZmxldExheWVyc0NvbnRyb2xEaXJlY3RpdmUsXG5cdFx0TGVhZmxldEJhc2VMYXllcnNEaXJlY3RpdmVcblx0XSxcblx0ZGVjbGFyYXRpb25zOiBbXG5cdFx0TGVhZmxldERpcmVjdGl2ZSxcblx0XHRMZWFmbGV0TGF5ZXJEaXJlY3RpdmUsXG5cdFx0TGVhZmxldExheWVyc0RpcmVjdGl2ZSxcblx0XHRMZWFmbGV0TGF5ZXJzQ29udHJvbERpcmVjdGl2ZSxcblx0XHRMZWFmbGV0QmFzZUxheWVyc0RpcmVjdGl2ZVxuXHRdXG59KVxuZXhwb3J0IGNsYXNzIExlYWZsZXRNb2R1bGUge1xuXG59XG4iXX0=