import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, first, switchMap } from 'rxjs';
import { ExtendedMap } from 'src/app/_models/map';
import { OverviewItem } from 'src/app/_models/overview';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { environment } from 'src/environments/environment';
import { deleteMap, loadMap } from '../app.actions';
import {
  selectCurrentCampaignName,
  selectMap,
  selectMapOverviewItems,
} from '../app.reducer';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss'],
})
export class MapPageComponent implements OnInit {
  canCreate$!: Observable<boolean>;
  canDelete$!: Observable<boolean>;
  canUpdate$!: Observable<boolean>;
  map$!: Observable<ExtendedMap | undefined>;
  mapChoices$!: Observable<OverviewItem[]>;
  serverUrl = environment.backendDomain;

  constructor(
    private tokenService: TokenService,
    private store: Store,
    private paramsService: GlobalUrlParamsService,
  ) {}

  ngOnInit(): void {
    const campaignName$ = this.paramsService.campaignNameParam$;
    const hasMemberPermissions$: Observable<boolean> = campaignName$.pipe(
      switchMap((name) => this.tokenService.isCampaignMember(name as string)),
    );

    this.canCreate$ = hasMemberPermissions$;
    this.canDelete$ = hasMemberPermissions$;
    this.canUpdate$ = hasMemberPermissions$;
    this.map$ = this.store.select(selectMap);
    this.mapChoices$ = this.store.select(selectMapOverviewItems);
  }

  mapDelete(map: ExtendedMap): void {
    this.store.dispatch(deleteMap({ map }));
  }

  mapChange(map: OverviewItem): void {
    const mapName = map.name;

    this.store
      .select(selectCurrentCampaignName)
      .pipe(first())
      .subscribe((campaignName) => {
        const payload = {
          mapName,
          campaignName: campaignName as string,
        };
        this.store.dispatch(loadMap(payload));
      });
  }
}
