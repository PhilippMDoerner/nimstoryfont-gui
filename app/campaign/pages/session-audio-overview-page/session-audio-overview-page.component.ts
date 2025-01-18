import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from 'src/app/design//atoms/button/button.component';
import { SessionaudioCardComponent } from 'src/app/design//organisms/sessionaudio-card/sessionaudio-card.component';
import { PageContainerComponent } from 'src/app/design/organisms/page-container/page-container.component';
import { GlobalStore } from 'src/app/global.store';
import { environment } from 'src/environments/environment';
import { SessionAudioOverviewPageStore } from './session-audio-overview-page.store';

@Component({
  selector: 'app-session-audio-overview-page',
  imports: [
    PageContainerComponent,
    SessionaudioCardComponent,
    ButtonComponent,
    RouterLink,
  ],
  templateUrl: './session-audio-overview-page.component.html',
  styleUrl: './session-audio-overview-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SessionAudioOverviewPageComponent {
  serverUrl = environment.backendDomain;
  store = inject(SessionAudioOverviewPageStore);
  globalStore = inject(GlobalStore);
  routingService = inject(RoutingService);

  homeUrl = computed(() =>
    this.routingService.getRoutePath('home', {
      campaign: this.globalStore.campaignName(),
    }),
  );

  createUrl = computed(() =>
    this.routingService.getRoutePath('sessionaudio-create', {
      campaign: this.globalStore.campaignName(),
    }),
  );
}
