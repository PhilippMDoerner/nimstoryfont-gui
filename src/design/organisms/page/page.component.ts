import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, filter, fromEvent, map, switchMap } from 'rxjs';
import { RoutingService } from 'src/app/_services/routing.service';
import { SwipeService } from 'src/app/_services/swipe.service';
import { TitleService } from 'src/app/_services/utils/title.service';
import { MOBILE_WIDTH, SWIPE_X_THRESHOLD } from 'src/app/app.constants';
import { GlobalStore } from 'src/app/global.store';
import { PageBackgroundComponent } from 'src/design/molecules';
import { delayFalsy, filterNil } from 'src/utils/rxjs-operators';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  standalone: true,
  imports: [
    SidebarComponent,
    PageBackgroundComponent,
    RouterOutlet,
    AsyncPipe,
    NgTemplateOutlet,
    RouterLink,
    IconComponent,
  ],
  providers: [NgbOffcanvas],
})
export class PageComponent {
  titleService = inject(TitleService);
  globalStore = inject(GlobalStore);
  sidebarService = inject(NgbOffcanvas);
  swipeService = inject(SwipeService);
  routingService = inject(RoutingService);
  host = inject(ElementRef);

  serverUrl = input.required<string>();

  @Output() logout: EventEmitter<void> = new EventEmitter();

  contentElement = viewChild.required<ElementRef<HTMLDivElement>>('content');
  innerContentElement =
    viewChild.required<ElementRef<HTMLDivElement>>('innerContent');
  sidebarTemplate = viewChild.required<TemplateRef<any>>('sidebar');
  sidebarElement = viewChild<ElementRef<HTMLElement>>('sidebarElement');

  pageSwipesRight$ = this.swipeService
    .getSwipeEvents(this.host)
    .pipe(filter((swipeDistance) => swipeDistance > SWIPE_X_THRESHOLD));

  hasCampaignAdminPrivileges = this.globalStore.hasRoleOrBetter('admin');
  showSidebar = signal(this.isMobile() ? false : true);
  canShowSidebar = computed(() => !!this.globalStore.currentCampaign());
  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.globalStore.campaignName(),
    }),
  );

  campaignBackgroundImage$ = toObservable(
    this.globalStore.currentCampaign,
  ).pipe(
    map((campaign) => campaign?.background_image),
    delayFalsy(1000),
  );

  constructor() {
    this.pageSwipesRight$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.openSidebar());

    /**
     * Due to the structure of the webpage (left sidebar, right a global content section)
     * where the scrollable element is not window or document or body, but instead the .page
     * element, none of the child-elements can know when a scroll event is triggered.
     * This propagates a scroll-event to the window, making it "global" in a sense.
     * That way, all child components (e.g. home.component) can listen to scroll events.
     */
    const contentScrolls$ = toObservable(this.innerContentElement).pipe(
      filterNil(),
      switchMap((innerContent) =>
        fromEvent<Event>(innerContent.nativeElement, 'scroll'),
      ),
    );
    contentScrolls$
      .pipe(takeUntilDestroyed(), debounceTime(50))
      .subscribe((event) => this.dispatchCustomPageScrollEvent(event));
  }

  closeSidebar() {
    if (!this.isMobile()) return;

    this.sidebarService.dismiss();
    this.showSidebar.set(false);
  }

  openSidebar() {
    if (!this.isMobile() || !this.canShowSidebar()) return;
    this.sidebarService.open(this.sidebarTemplate(), {
      ariaLabelledBy: 'offcanvas-basic-title',
    });
    this.showSidebar.set(true);
  }

  private isMobile() {
    return window.innerWidth <= MOBILE_WIDTH;
  }

  private dispatchCustomPageScrollEvent(event: Event): void {
    const pageScrollEvent: CustomEvent = new CustomEvent('page.scroll', {
      ...event,
      detail: {
        pageElement: this.innerContentElement(),
      },
    });
    this.globalStore.fireScrollEvent(pageScrollEvent);
  }
}
