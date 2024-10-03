import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Params,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import * as _ from 'lodash';
import { combineLatest, take } from 'rxjs';
import { CampaignOverview } from 'src/app/_models/campaign';
import { OverviewItem } from 'src/app/_models/overview';
import { MapService } from 'src/app/_services/article/map.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { filterNil, takeFirstNonNil } from 'src/utils/rxjs-operators';

export const mapResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const mapService = inject(MapService);
  const mapName = route.params['name'];

  inject(GlobalUrlParamsService)
    .campaignNameParam$.pipe(takeFirstNonNil())
    .subscribe((name) => mapService.loadReadByParam(name, { name: mapName }));
};

export const mapOverviewResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const mapService = inject(MapService);
  inject(GlobalUrlParamsService)
    .campaignNameParam$.pipe(takeFirstNonNil())
    .subscribe((name) => mapService.loadCampaignList(name));
};

export const mapDefaultResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const mapService = inject(MapService);
  const campaign$ = inject(GlobalUrlParamsService).currentCampaign.pipe(
    filterNil(),
  );
  const availableMaps$ = mapService.campaignList.data;
  combineLatest({
    campaign: campaign$,
    maps: availableMaps$,
  })
    .pipe(take(1))
    .subscribe(({ campaign, maps }) => {
      const mapName: string | undefined = getDefaultMapName(
        route.params,
        campaign as CampaignOverview,
        maps ?? [],
      );
      const hasValidMapName = mapName != null;
      if (!hasValidMapName) {
        return;
      }

      mapService.loadReadByParam(campaign?.name, { name: mapName });
    });
};

function getDefaultMapName(
  params: Params,
  campaign: CampaignOverview,
  maps: OverviewItem[],
): string | undefined {
  const hasMap = maps.length > 0;
  if (!hasMap) {
    return undefined;
  }

  const hasMapParameter: boolean = params['name'] != null;
  if (hasMapParameter) {
    return params['name'] as string;
  }

  const hasCampaignDefaultMap = !_.isNil(campaign.default_map_details?.name);
  if (hasCampaignDefaultMap) {
    return campaign.default_map_details?.name as string;
  }

  const firstMapName: string = maps[0].name;
  return firstMapName;
}
