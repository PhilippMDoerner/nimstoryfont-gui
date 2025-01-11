import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { MapComponent } from 'src/design/templates/map/map.component';
import { environment } from 'src/environments/environment';
import { MapPageStore } from './map-page.store';

@Component({
    selector: 'app-map-page',
    templateUrl: './map-page.component.html',
    styleUrls: ['./map-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MapComponent]
})
export class MapPageComponent {
  serverUrl = environment.backendDomain;
  store = inject(MapPageStore);
  globalStore = inject(GlobalStore);
  routingService = inject(RoutingService);

  mapChange(map: OverviewItem): void {
    const mapName = map.name;
    this.routingService.routeToPath('map', {
      campaign: this.globalStore.campaignName(),
      name: mapName,
    });
  }
}
