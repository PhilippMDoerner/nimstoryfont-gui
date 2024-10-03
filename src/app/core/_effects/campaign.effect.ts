import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CampaignService } from '../../_services/utils/campaign.service';
import {
  loadCampaignDetailSet,
  loadCampaignDetailSetFailure,
  loadCampaignDetailSetSuccess,
  loadCampaignSet,
  loadCampaignSetFailure,
  loadCampaignSetSuccess,
} from '../app.actions';
import { createBasicEffect } from './_effects-factory';

@Injectable()
export class CampaignEffects {
  loadCampaignSet$: Observable<Action>;
  loadCampaignDetailSet$: Observable<Action>;

  constructor(private campaignService: CampaignService) {
    this.loadCampaignSet$ = createBasicEffect({
      startAction: loadCampaignSet,
      endAction: loadCampaignSetSuccess,
      failureAction: loadCampaignSetFailure,
      serviceCall: () => this.campaignService.campaignOverview(),
    });

    this.loadCampaignDetailSet$ = createBasicEffect({
      startAction: loadCampaignDetailSet,
      endAction: loadCampaignDetailSetSuccess,
      failureAction: loadCampaignDetailSetFailure,
      serviceCall: () => this.campaignService.loadList(),
    });
  }
}
