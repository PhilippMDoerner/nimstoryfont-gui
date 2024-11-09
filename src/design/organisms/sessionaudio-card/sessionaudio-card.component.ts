import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent } from 'src/design/atoms';

@Component({
  selector: 'app-sessionaudio-card',
  templateUrl: './sessionaudio-card.component.html',
  styleUrls: ['./sessionaudio-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent, RouterLink],
})
export class SessionaudioCardComponent {
  serverUrl = input.required<string>();
  sessionAudio = input.required<OverviewItem>();

  sessionAudioUrl = computed(() => {
    const campaignName = this.sessionAudio().campaign_details?.name;
    const isMainSession = this.sessionAudio().session_details?.is_main_session;
    const sessionNumber = this.sessionAudio().session_details?.session_number;
    return this.routingService.getRoutePath('sessionaudio', {
      campaign: campaignName,
      isMainSession,
      sessionNumber,
    });
  });

  constructor(private routingService: RoutingService) {}
}
