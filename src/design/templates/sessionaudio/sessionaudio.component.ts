import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { SessionAudio, Timestamp } from 'src/app/_models/sessionAudio';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonComponent, IconComponent } from 'src/design/atoms';
import { ArticleFooterComponent } from 'src/design/molecules';
import {
  PageContainerComponent,
  SessionaudioPlayerComponent,
} from 'src/design/organisms';

@Component({
  selector: 'app-sessionaudio',
  templateUrl: './sessionaudio.component.html',
  styleUrls: ['./sessionaudio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    PageContainerComponent,
    IconComponent,
    ButtonComponent,
    RouterLink,
    SessionaudioPlayerComponent,
    ArticleFooterComponent,
  ],
})
export class SessionaudioComponent {
  sessionaudio = input.required<SessionAudio>();
  timestamps = input.required<Timestamp[]>();
  serverUrl = input.required<string>();
  canUpdate = input<boolean>(false);
  canCreate = input<boolean>(false);
  canDelete = input<boolean>(false);

  @Output() sessionaudioDelete: EventEmitter<SessionAudio> = new EventEmitter();
  @Output() deleteTimestamp: EventEmitter<Timestamp> = new EventEmitter();
  @Output() createTimestamp: EventEmitter<Timestamp> = new EventEmitter();

  campaignName = computed(
    () => this.sessionaudio().session_details?.campaign_details?.name,
  );
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('sessionaudio-overview', {
      campaign: this.campaignName(),
    }),
  );
  updateUrl = computed(() =>
    this.routingService.getRoutePath('sessionaudio', {
      campaign: this.campaignName(),
      sessionNumber: this.sessionaudio().session_details?.session_number,
      isMainSession: this.sessionaudio().session_details?.is_main_session_int,
    }),
  );
  nextSessionAudioUrl = computed(() =>
    this.createSessionAudioUrl(
      this.sessionaudio().sessionAudioNeighbours?.nextSessionAudio,
    ),
  );
  priorSessionAudioUrl = computed(() =>
    this.createSessionAudioUrl(
      this.sessionaudio().sessionAudioNeighbours?.priorSessionAudio,
    ),
  );

  constructor(private routingService: RoutingService) {}

  private createSessionAudioUrl(
    sessionAudioData:
      | { isMainSessionInt: number; sessionNumber: number }
      | undefined,
  ): string | undefined {
    if (sessionAudioData == null) {
      return undefined;
    }

    if (
      sessionAudioData.isMainSessionInt == null ||
      sessionAudioData.sessionNumber == null
    ) {
      throw new Error(
        `Invalid URL Building exception. Trying to build a URL with incomplete parameters ${sessionAudioData}`,
      );
    }

    return this.routingService.getRoutePath('sessionaudio', {
      campaign: this.campaignName(),
      isMainSession: sessionAudioData.isMainSessionInt,
      sessionNumber: sessionAudioData.sessionNumber,
    });
  }
}
