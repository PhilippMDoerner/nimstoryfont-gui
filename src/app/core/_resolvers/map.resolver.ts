import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Params,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import * as _ from 'lodash';
import { combineLatest, first } from 'rxjs';
import { CampaignOverview } from 'src/app/_models/campaign';
import { OverviewItem } from 'src/app/_models/overview';
import { loadMap, loadMapOverviewItems } from '../app.actions';
import { selectCurrentCampaign, selectMapOverviewItems } from '../app.reducer';

export const mapResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const mapName = route.params['name'];
  const campaignName = route.params['campaign'];
  inject(Store).dispatch(loadMap({ mapName, campaignName }));
}

export const mapOverviewResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const campaignName = route.params['campaignName'];
  inject(Store).dispatch(loadMapOverviewItems({ campaignName }))
}

export const mapDefaultResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  const store = inject(Store);
  const campaign$ = store.select(selectCurrentCampaign);
  const availableMaps$ = store.select(selectMapOverviewItems);
  combineLatest([
    campaign$,
    availableMaps$
  ])
    .pipe(first())
    .subscribe(
      ([campaign, availableMaps]: [CampaignOverview | undefined, OverviewItem[]]) => {
        const mapName: string | undefined = getDefaultMapName(route.params, campaign as CampaignOverview, availableMaps);
        const hasValidMapName = !_.isNil(mapName);
        if(!hasValidMapName){
          return;
        }
        
        inject(Store).dispatch(loadMap({ mapName, campaignName: campaign?.name as string }));
      }
    );
}

function getDefaultMapName(
  params: Params,
  campaign: CampaignOverview,
  maps: OverviewItem  []
): string | undefined{
  const hasMap = maps.length > 0;
  if (!hasMap) {
    return undefined;
  }

  const hasMapParameter: boolean = params['name'] != null;
  if(hasMapParameter){
    return params['name'] as string;
  }

  const hasCampaignDefaultMap = !_.isNil(campaign.default_map_details?.name);
  if (hasCampaignDefaultMap){
    return campaign.default_map_details?.name as string;
  }

  const firstMapName: string = maps[0].name;
  return firstMapName;
}