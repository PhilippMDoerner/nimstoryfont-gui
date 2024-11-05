import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  @Input() serverUrl!: string;
  @Input() campaign?: Campaign;
  @Input() hasCampaignAdminPrivileges!: boolean;

  @Output() logout: EventEmitter<void> = new EventEmitter();

  @ViewChild('sidebar') sidebarElement!: ElementRef;
  @ViewChild('content') contentElement!: ElementRef;
  @ViewChild('innerContent') innerContentElement!: ElementRef;

  startX: number = 0;
  currentX: number = 0;
  threshold: number = 50;
  sidebarWidth: number = 20 * 16;
  showSidebar: boolean = false;
  mobileWidth: number = 767; //medium screen size

  @HostListener('touchstart', ['$event'])
  onTouchStart(event: TouchEvent) {
    if (!this.isMobile()) {
      return;
    }

    this.startX = event.touches[0].clientX;
  }

  @HostListener('touchmove', ['$event'])
  onTouchMove(event: TouchEvent) {
    if (!this.isMobile()) {
      return;
    }

    const currentX = event.touches[0].clientX;
    const distanceX = currentX - this.startX;

    if (distanceX > 0 && distanceX <= this.sidebarWidth) {
      this.slideRightViaMargin(distanceX);
    }
  }

  private slideRightViaMargin(newMargin: number) {
    const element: HTMLElement = this.contentElement.nativeElement;
    element.style.marginLeft = `${newMargin}px`;
  }

  private resetSlide() {
    const element: HTMLElement = this.contentElement.nativeElement;
    element.style.marginLeft = '';
  }

  @HostListener('touchend', ['$event'])
  onTouchEnd(event: TouchEvent) {
    if (!this.isMobile()) {
      return;
    }

    const currentX = event.changedTouches[0].clientX;
    const distanceX = currentX - this.startX;

    if (distanceX > this.threshold) {
      this.showSidebar = true;
    } else if (distanceX <= this.threshold) {
      this.showSidebar = false;
    }

    this.resetSlide();
    this.startX = 0;
  }

  private isMobile() {
    return screen.width <= this.mobileWidth;
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

  private dispatchCustomPageScrollEvent(event: Event): void {
    const pageScrollEvent: CustomEvent = new CustomEvent('page.scroll', {
      ...event,
      detail: {
        pageElement: this.innerContentElement,
      },
    });
    window.dispatchEvent(pageScrollEvent);
  }
}
