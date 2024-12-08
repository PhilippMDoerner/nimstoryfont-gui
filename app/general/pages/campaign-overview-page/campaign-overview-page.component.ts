import { AnimationEvent } from '@angular/animations';
import { Component, HostListener, inject } from '@angular/core';
import { GlobalStore } from 'src/app/global.store';
import { slideInOut } from 'src/design/animations/slideInOut';
import { showSidebarSignal } from 'src/design/organisms/page/page.component';
import { environment } from 'src/environments/environment';
import { CampaignOverviewComponent } from '../../../../design/templates/campaign-overview/campaign-overview.component';

@Component({
  selector: 'app-campaign-overview-page',
  templateUrl: './campaign-overview-page.component.html',
  styleUrls: ['./campaign-overview-page.component.scss'],
  host: {
    '[@slideInOut]': '',
  },
  animations: [slideInOut],
  standalone: true,
  imports: [CampaignOverviewComponent],
})
export class CampaignOverviewPageComponent {
  public readonly globalStore = inject(GlobalStore);
  serverUrl = environment.backendDomain;

  @HostListener('@slideInOut.start', ['$event'])
  @HostListener('@slideInOut.done', ['$event'])
  onAnimation(event: AnimationEvent) {
    const isStartOfEnterAnimation =
      event.fromState === 'void' && event.phaseName === 'start';
    if (isStartOfEnterAnimation) {
      showSidebarSignal.set(false);
    }
    const isEndOfLeaveAnimation =
      event.toState === 'void' && event.phaseName === 'done';
    if (isEndOfLeaveAnimation) {
      showSidebarSignal.set(true);
    }
  }

  logout(): void {
    this.globalStore.logout();
  }
}
