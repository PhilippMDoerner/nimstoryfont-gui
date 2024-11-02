import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import { DiaryEntry, DiaryEntryStump } from 'src/app/_models/diaryentry';
import {
  Encounter,
  EncounterConnection,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { Session } from 'src/app/_models/session';
import { RoutingService } from 'src/app/_services/routing.service';

type DiaryEntryState = 'DISPLAY' | 'EDIT';

@Component({
  selector: 'app-diaryentry',
  templateUrl: './diaryentry.component.html',
  styleUrls: ['./diaryentry.component.scss'],
})
export class DiaryentryComponent {
  diaryentry = input.required<DiaryEntry>();
  campaignCharacters = input.required<OverviewItem[]>();
  campaignLocations = input.required<OverviewItem[]>();
  encounterServerModel = input.required<Encounter | undefined>();
  canUpdate = input.required<boolean>();
  canCreate = input.required<boolean>();
  canDelete = input.required<boolean>();

  @Output() diaryentryDelete: EventEmitter<DiaryEntry> = new EventEmitter();
  @Output() encounterConnectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() encounterConnectionCreate: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCreate: EventEmitter<EncounterRaw> = new EventEmitter();
  @Output() encounterCutInsert: EventEmitter<{
    encounter: Encounter;
    newOrderIndex: number;
  }> = new EventEmitter();
  @Output() encounterSwap: EventEmitter<{ enc1: Encounter; enc2: Encounter }> =
    new EventEmitter();
  addUnfinishedEncounter = output<{ encounter: EncounterRaw; index: number }>();

  campaignName = computed(() => this.diaryentry().campaign_details.name);
  state = signal<DiaryEntryState>('DISPLAY');
  overviewUrl = computed(() =>
    this.routingService.getRoutePath('diaryentry-overview', {
      campaign: this.campaignName(),
    }),
  );
  updateUrl = computed(() => {
    const {
      session_number: sessionNumber,
      is_main_session_int: isMainSession,
    } = this.diaryentry().session_details as Session;
    const authorName: string = this.diaryentry().author_details?.name as string;
    return this.routingService.getRoutePath('diaryentry-update', {
      sessionNumber: sessionNumber,
      isMainSession: isMainSession,
      authorName: authorName,
      campaign: this.campaignName(),
    });
  });
  nextDiaryentryUrl = computed(() => {
    const nextDiaryentryStub =
      this.diaryentry().adjacent_diaryentries.next_diaryentry;
    return this.createDiaryentryURL(nextDiaryentryStub);
  });
  priorDiaryentryUrl = computed(() => {
    const priorDiaryentryStub =
      this.diaryentry().adjacent_diaryentries.prior_diaryentry;
    return this.createDiaryentryURL(priorDiaryentryStub);
  });

  constructor(private routingService: RoutingService) {}

  toggleState(): void {
    const isDisplayState = this.state() === 'DISPLAY';
    this.state.set(isDisplayState ? 'EDIT' : 'DISPLAY');
  }

  private createDiaryentryURL(stub: DiaryEntryStump): string | undefined {
    if (stub == null) {
      return undefined;
    }
    const campaignName: string = stub.session_details.campaign_details
      ?.name as string;
    const sessionNumber: number = stub.session_details.session_number;
    const authorName: string = stub.author_details.name;
    const isMainSession: number = stub.session_details
      .is_main_session_int as number;

    return this.routingService.getRoutePath('diaryentry', {
      sessionNumber: sessionNumber,
      isMainSession: isMainSession,
      authorName: authorName,
      campaign: campaignName,
    });
  }
}
