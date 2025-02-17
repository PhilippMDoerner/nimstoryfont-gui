import { AsyncPipe, NgOptimizedImage } from '@angular/common';
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
import {
  NgbActiveOffcanvas,
  NgbTooltipModule,
} from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { Campaign } from 'src/app/_models/campaign';
import { NamedRouteData } from 'src/app/_models/route';
import { OnlineService } from 'src/app/_services/online.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { SwipeService } from 'src/app/_services/swipe.service';
import { TitleService } from 'src/app/_services/utils/title.service';
import { SWIPE_X_THRESHOLD } from 'src/app/app.constants';
import { AuthStore } from 'src/app/auth.store';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { hasRoleOrBetter } from 'src/app/global.store';
import { NavigationStore } from 'src/app/navigation.store';
import { environment } from 'src/environments/environment';
import { ArticleMetaData, SIDEBAR_ENTRIES } from '../_model/sidebar';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [
    RouterLink,
    NgOptimizedImage,
    IconComponent,
    AsyncPipe,
    NgbTooltipModule,
  ],
  providers: [NgbActiveOffcanvas],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarComponent {
  authStore = inject(AuthStore);
  routingService = inject(RoutingService);
  swipeService = inject(SwipeService);
  titleService = inject(TitleService);
  host = inject(ElementRef);
  activeOffcanvas = inject(NgbActiveOffcanvas);
  online$ = inject(OnlineService).online$;
  sidebarSwipesLeft$ = this.swipeService
    .getSwipeEvents(this.host)
    .pipe(filter((swipeDistance) => swipeDistance < SWIPE_X_THRESHOLD * -1));
  currentRoute = inject(NavigationStore).currentRoute;
  activeRouteName = computed(
    () => (this.currentRoute()?.data as NamedRouteData | undefined)?.name,
  );
  campaign = input<Campaign | undefined>(undefined);
  hasCampaignAdminPrivileges = input<boolean>(false);

  @Output() logout: EventEmitter<null> = new EventEmitter();
  closeSidebar = output<void>();

  serverUrl = environment.backendDomain;
  sidebarEntries: Signal<ArticleMetaData[]> = computed(() => {
    const campaignName = this.campaign()?.name;
    if (!campaignName) return [];
    const currentRole = this.authStore.getCampaignRole(campaignName);
    if (!currentRole) return [];

    const activeRouteName = this.activeRouteName();

    return SIDEBAR_ENTRIES.filter((entry) =>
      hasRoleOrBetter(currentRole, entry.requiresRole),
    ).map((entry) => {
      const route = this.routingService.hasRoutePath(entry.route)
        ? this.routingService.getRoutePath(entry.route, {
            campaign: this.campaign()?.name,
          })
        : entry.route;
      return {
        ...entry,
        route,
        isActiveTab: activeRouteName
          ? entry.associatedRoutes.has(activeRouteName)
          : false,
      };
    });
  });

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
