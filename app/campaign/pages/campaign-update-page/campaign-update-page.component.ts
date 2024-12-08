import { Component, inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { Campaign, CampaignRaw } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { takeFirstNonNil } from 'src/utils/rxjs-operators';
import { CampaignUpdateComponent } from '../../../../design/templates/campaign-update/campaign-update.component';
import { CampaignUpdatePageStore } from './campaign-update-page.store';

@Component({
  selector: 'app-campaign-update-page',
  standalone: true,
  imports: [CampaignUpdateComponent],
  providers: [CampaignUpdatePageStore],
  templateUrl: './campaign-update-page.component.html',
  styleUrl: './campaign-update-page.component.scss',
})
export class CampaignUpdatePageComponent {
  globalStore = inject(GlobalStore);
  campaignUpdatePageStore = inject(CampaignUpdatePageStore);

  serverUrl = environment.backendDomain;
  campaign = this.campaignUpdatePageStore.campaign;
  campaign$ = toObservable(this.campaign);
  mapOptions = this.campaignUpdatePageStore.mapOptions;
  serverModel = this.campaignUpdatePageStore.serverModel;

  constructor(private routingService: RoutingService) {
    this.campaignUpdatePageStore.loadCurrentCampaignDetails();
    this.campaignUpdatePageStore.loadMapOptions();
  }

  updateCampaign(campaign: Partial<Campaign>) {
    const campaignPk = campaign.pk as number;
    const name = campaign.name as string;
    if (!campaignPk || !name) {
      return;
    }

    let rawCampaign: CampaignRaw &
      Record<'pk', number> &
      Record<'update_datetime', string> &
      Record<'subtitle', string> = {
      has_audio_recording_permission: false,
      is_deactivated: false,
      name,
      default_map_id: campaign.default_map,
      background_image: campaign.background_image ?? '',
      icon: campaign.icon,
      pk: campaignPk,
      subtitle: campaign.subtitle as string,
      update_datetime: campaign.update_datetime as string,
    };

    const request$ = this.campaignUpdatePageStore.updateCampaign(
      campaignPk,
      rawCampaign,
    );

    request$.subscribe(() => this.routeToAdmin());
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
