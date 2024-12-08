import {
  ChangeDetectionStrategy,
  Component,
  computed,
  ElementRef,
  EventEmitter,
  inject,
  input,
  output,
  Output,
  Signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { Campaign } from 'src/app/_models/campaign';
import { RoutingService } from 'src/app/_services/routing.service';
import { SwipeService } from 'src/app/_services/swipe.service';
import { TitleService } from 'src/app/_services/utils/title.service';
import { SWIPE_X_THRESHOLD } from 'src/app/app.constants';
import { IconComponent } from 'src/design/atoms/icon/icon.component';
import { environment } from 'src/environments/environment';
import { ArticleMetaData, SIDEBAR_ENTRIES } from '../_model/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  standalone: true,
  imports: [RouterLink, IconComponent],
  providers: [NgbActiveOffcanvas],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  routingService = inject(RoutingService);
  swipeService = inject(SwipeService);
  titleService = inject(TitleService);
  host = inject(ElementRef);
  sidebarSwipesLeft$ = this.swipeService
    .getSwipeEvents(this.host)
    .pipe(filter((swipeDistance) => swipeDistance < SWIPE_X_THRESHOLD * -1));

  campaign = input<Campaign | undefined>(undefined);
  hasCampaignAdminPrivileges = input<boolean>(false);
  activeOffcanvas = inject(NgbActiveOffcanvas);

  @Output() logout: EventEmitter<null> = new EventEmitter();
  closeSidebar = output<void>();

  serverUrl = environment.backendDomain;
  sidebarEntries: Signal<ArticleMetaData[]> = computed(() =>
    SIDEBAR_ENTRIES.map((entry) => {
      const route = this.routingService.hasRoutePath(entry.route)
        ? this.routingService.getRoutePath(entry.route, {
            campaign: this.campaign()?.name,
          })
        : entry.route;
      return {
        ...entry,
        route,
      };
    }),
  );

  campaignOverviewUrl: string =
    this.routingService.getRoutePath('campaign-overview');

  campaignAdminUrl = computed(() => {
    return this.routingService.getRoutePath('campaign-admin', {
      campaign: this.campaign()?.name,
    });
  });
  homeUrl = computed(() => {
    return this.routingService.getRoutePath('home', {
      campaign: this.campaign()?.name,
    });
  });
  profileUrl = this.routingService.getRoutePath('direct-profile');

  constructor() {
    this.sidebarSwipesLeft$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.closeSidebar.emit());
  }
}
