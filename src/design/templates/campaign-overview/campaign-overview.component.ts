import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { CampaignOverview } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent, SpinnerComponent } from 'src/design/atoms';
import { ImageGridComponent } from 'src/design/organisms';

@Component({
  selector: 'app-campaign-overview',
  templateUrl: './campaign-overview.component.html',
  styleUrls: ['./campaign-overview.component.scss'],
  standalone: true,
  imports: [ButtonComponent, RouterLink, ImageGridComponent, SpinnerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CampaignOverviewComponent {
  serverUrl = input.required<string>();
  userName = input.required<string | undefined>();
  campaigns = input.required<CampaignOverview[] | undefined>();
  isGlobalAdmin = input(false);

  @Output() logout: EventEmitter<void> = new EventEmitter();

  profileUrl = computed(() =>
    this.routingService.getRoutePath('direct-profile', {
      username: this.userName(),
    }),
  );
  configTableUrl = computed(() =>
    this.routingService.getRoutePath('config-tables'),
  );
  generalAdminUrl = computed(() => this.routingService.getRoutePath('admin'));
  dragonFrameUrl = '/assets/dragon-frame.jpg';

  constructor(private routingService: RoutingService) {}

  onCampaignClick(event: CampaignOverview): void {
    this.routingService.routeToPath('home', { campaign: event.name });
  }
}
