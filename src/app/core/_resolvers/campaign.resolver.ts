import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CampaignService } from 'src/app/_services/utils/campaign.service';

export const campaignSetResolver: ResolveFn<void> = () => {
  inject(CampaignService).loadCampaignOverview();
};

export const campaignDetailSetResolver: ResolveFn<void> = () => {
  inject(CampaignService).loadList();
};
