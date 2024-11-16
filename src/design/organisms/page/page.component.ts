import { AsyncPipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  inject,
  input,
  Output,
  signal,
  TemplateRef,
  viewChild,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { RouterOutlet } from '@angular/router';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { filter } from 'rxjs';
import { SwipeService } from 'src/app/_services/swipe.service';
import { TitleService } from 'src/app/_services/utils/title.service';
import { MOBILE_WIDTH, SWIPE_X_THRESHOLD } from 'src/app/app.constants';
import { GlobalStore } from 'src/app/global.store';
import { PageBackgroundComponent } from 'src/design/molecules';
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
    IconComponent,
  ],
  providers: [NgbOffcanvas],
})
export class PageComponent {
  titleService = inject(TitleService);
  globalStore = inject(GlobalStore);
  sidebarService = inject(NgbOffcanvas);
  serverUrl = input.required<string>();
  swipeService = inject(SwipeService);

  @Output() logout: EventEmitter<void> = new EventEmitter();
  host = inject(ElementRef);
  contentElement = viewChild.required<ElementRef<HTMLDivElement>>('content');
  innerContentElement =
    viewChild.required<ElementRef<PageBackgroundComponent>>('innerContent');
  sidebarTemplate = viewChild.required<TemplateRef<any>>('sidebar');
  sidebarElement = viewChild<ElementRef<HTMLElement>>('sidebarElement');

  pageSwipesRight$ = this.swipeService
    .getSwipeEvents(this.host)
    .pipe(filter((swipeDistance) => swipeDistance > SWIPE_X_THRESHOLD));

  hasCampaignAdminPrivileges = this.globalStore.hasRoleOrBetter('admin');
  showSidebar = signal(this.isMobile() ? false : true);

  constructor() {
    this.pageSwipesRight$
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.openSidebar());
  }

  closeSidebar() {
    if (!this.isMobile()) return;

    this.sidebarService.dismiss();
    this.showSidebar.set(false);
  }

  openSidebar() {
    if (!this.isMobile()) return;
    console.log('Open sidebar');
    this.sidebarService.open(this.sidebarTemplate(), {
      ariaLabelledBy: 'offcanvas-basic-title',
    });
    this.showSidebar.set(true);
  }

  /**
   * Due to the structure of the webpage (left sidebar, right a global content section)
   * where the scrollable element is not window or document or body, but instead the .page
   * element, none of the child-elements can know when a scroll event is triggered.
   * This propagates a scroll-event to the window, making it "global" in a sense.
   * That way, all child components (e.g. home.component) can listen to scroll events.
   */
  onPageScroll(event: Event): void {
    this.dispatchCustomPageScrollEvent(event);
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
