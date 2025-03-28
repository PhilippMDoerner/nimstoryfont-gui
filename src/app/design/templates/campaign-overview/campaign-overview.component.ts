import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CampaignOverview } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { SpinnerComponent } from 'src/app/design/atoms/spinner/spinner.component';
import {
  ImageGridComponent,
  ImageGridEntry,
} from 'src/app/design/organisms/image-grid/image-grid.component';
import { ButtonLinkComponent } from '../../atoms/button-link/button-link.component';

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrls: ['./campaign-overview.component.scss'],
  imports: [
    NgTemplateOutlet,
    ButtonComponent,
    RouterLink,
    ImageGridComponent,
    SpinnerComponent,
    ButtonLinkComponent,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignOverviewComponent {
  serverUrl = input.required<string>();
  userName = input.required<string | undefined>();
  campaigns = input.required<CampaignOverview[] | undefined>();
  isGlobalAdmin = input(false);

  readonly logout = output<void>();

  profileUrl = computed(() =>
    this.routingService.getRoutePath('direct-profile', {
      username: this.userName(),
    }),
  );
  configTableUrl = computed(() =>
    this.routingService.getRoutePath('config-tables'),
  );
  generalAdminUrl = computed(() => this.routingService.getRoutePath('admin'));
  gridEntries = computed<ImageGridEntry[] | undefined>(() =>
    this.campaigns()?.map((campaign) => ({
      imageUrl: campaign.background_image,
      label: campaign.name,
      icon: campaign.icon,
      link: this.routingService.getRoutePath('home', {
        campaign: campaign.name,
      }),
      ariaLabel: `Look at campaign ${campaign.name}`,
    })),
  );
  dragonFrameUrl = '/assets/dragon-frame.jpg';

  constructor(private routingService: RoutingService) {}
}
