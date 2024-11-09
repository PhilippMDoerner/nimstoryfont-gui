import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { filter, take } from 'rxjs';
import { Location } from 'src/app/_models/location';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { LocationTemplateComponent } from 'src/design/templates';
import { environment } from 'src/environments/environment';
import { LocationPageStore } from './location-page.store';

@Component({
  selector: 'app-location-page',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [LocationTemplateComponent],
  templateUrl: './location-page.component.html',
  styleUrl: './location-page.component.scss',
})
export class LocationPageComponent {
  serverUrl = environment.backendDomain;
  globalStore = inject(GlobalStore);
  store = inject(LocationPageStore);
  routingService = inject(RoutingService);

  locationDeleteState$ = toObservable(this.store.locationDeleteState);

  onLocationDelete(location: Location) {
    this.store.deleteLocation(location.pk as number);
    this.locationDeleteState$
      .pipe(
        filter((state) => state === 'success'),
        take(1),
      )
      .subscribe(() => {
        this.routingService.routeToPath('location-overview', {
          campaign: this.globalStore.campaignName(),
        });
      });
  }
}
