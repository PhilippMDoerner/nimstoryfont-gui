import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { map, take } from 'rxjs';
import { Campaign, CampaignRaw } from 'src/app/_models/campaign';
import { MapService } from 'src/app/_services/article/map.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { environment } from 'src/environments/environment';
import { takeFirstNonNil } from 'src/utils/rxjs-operators';
import { CampaignUpdateComponent } from '../../../../design/templates/campaign-update/campaign-update.component';

@Component({
  selector: 'app-campaign-update-page',
  standalone: true,
  imports: [CampaignUpdateComponent, AsyncPipe, JsonPipe],
  templateUrl: './campaign-update-page.component.html',
  styleUrl: './campaign-update-page.component.scss',
})
export class CampaignUpdatePageComponent {
  serverUrl = environment.backendDomain;
  campaign$ = this.campaignService.read.data$;
  mapOptions$ = this.mapService.campaignList.data$;
  serverModel$ = this.campaignService.update.error$.pipe(
    map((errorResponse) => errorResponse?.error as Campaign),
  );

  constructor(
    private campaignService: CampaignService,
    private mapService: MapService,
    private routingService: RoutingService,
  ) {}

  updateCampaign(campaign: Partial<Campaign>) {
    const campaignPk = campaign.pk as number;
    const name = campaign.name as string;
    if (!campaignPk || !name) {
      return;
    }

    let rawCampaign: CampaignRaw &
      Record<'pk', number> &
      Record<'update_datetime', string> = {
      has_audio_recording_permission: false,
      is_deactivated: false,
      name,
      default_map_id: campaign.default_map_details?.id,
      background_image: campaign.background_image ?? '',
      icon: campaign.icon,
      pk: campaignPk,
      subtitle: campaign.subtitle,
      update_datetime: campaign.update_datetime as string,
    };

    this.campaignService.runUpdate(campaignPk, rawCampaign);

    this.campaignService.update.onRequestSuccess$
      .pipe(take(1))
      .subscribe(() => this.routeToAdmin());
  }

  cancel() {
    this.routeToAdmin();
  }

  private routeToAdmin() {
    this.campaign$.pipe(takeFirstNonNil()).subscribe((campaign) => {
      this.routingService.routeToPath('campaign-admin', {
        campaign: campaign?.name,
      });
    });
  }
}
