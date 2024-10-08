import { Component, OnInit } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { ExtendedMap } from 'src/app/_models/map';
import { OverviewItem } from 'src/app/_models/overview';
import { MapService } from 'src/app/_services/article/map.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
  canCreate$!: Observable<boolean>;
  canDelete$!: Observable<boolean>;
  canUpdate$!: Observable<boolean>;
  map$: Observable<ExtendedMap | undefined> = this.mapService.read.data$;
  mapChoices$: Observable<OverviewItem[] | undefined> =
    this.mapService.campaignList.data$;

  serverUrl = environment.backendDomain;

  constructor(
    private tokenService: TokenService,
    private paramsService: GlobalUrlParamsService,
    private mapService: MapService,
    private routingService: RoutingService,
  ) {}

  ngOnInit(): void {
    const campaignName$ = this.paramsService.campaignNameParam$;
    const hasMemberPermissions$: Observable<boolean> = campaignName$.pipe(
      switchMap((name) => this.tokenService.isCampaignMember(name as string)),
    );

    this.canCreate$ = hasMemberPermissions$;
    this.canDelete$ = hasMemberPermissions$;
    this.canUpdate$ = hasMemberPermissions$;
  }

  mapDelete(map: ExtendedMap): void {
    this.mapService.runDelete(map.pk as number);
  }

  mapChange(map: OverviewItem): void {
    const mapName = map.name;
    this.routingService.routeToPath('map', { name: mapName });
  }
}
