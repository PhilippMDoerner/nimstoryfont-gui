import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { DatePipe, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { DiaryEntry, DiaryEntryStump } from 'src/app/_models/diaryentry';
import {
  Encounter,
  EncounterConnection,
  EncounterConnectionRaw,
  EncounterRaw,
  getShiftedOrderIndex,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { Session } from 'src/app/_models/session';
import { RoutingService } from 'src/app/_services/routing.service';
import { ButtonLinkComponent } from '../../atoms/button-link/button-link.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ArticleFooterComponent } from '../../molecules/article-footer/article-footer.component';
import { DiaryentryEncountersComponent } from '../../organisms/diaryentry-encounters/diaryentry-encounters.component';
import {
  DragAndDropListComponent,
  MoveEvent,
} from '../../organisms/drag-and-drop-list/drag-and-drop-list.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

type DiaryEntryState = 'DISPLAY' | 'EDIT';

@Component({
  selector: 'app-diaryentry',
  templateUrl: './diaryentry.component.html',
  styleUrls: ['./diaryentry.component.scss'],
  imports: [
    PageContainerComponent,
    RouterLink,
    ButtonComponent,
    NgTemplateOutlet,
    DiaryentryEncountersComponent,
    ArticleFooterComponent,
    DatePipe,
    HotkeyDirective,
    ButtonLinkComponent,
    DragAndDropListComponent,
  ],
})
export class DiaryentryComponent {
  diaryentry = input.required<DiaryEntry>();
  sortedEncounters = input.required<Encounter[]>();
  campaignCharacters = input.required<OverviewItem[]>();
  campaignLocations = input.required<OverviewItem[]>();
  encounterServerModel = input.required<Encounter | undefined>();
  canUpdate = input.required<boolean>();
  canCreate = input.required<boolean>();
  canDelete = input.required<boolean>();
  isUpdatingEncounters = input.required<boolean>();

  @Output() diaryentryDelete: EventEmitter<DiaryEntry> = new EventEmitter();
  @Output() encounterConnectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() encounterConnectionCreate: EventEmitter<EncounterConnectionRaw> =
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

  state = signal<DiaryEntryState>('DISPLAY');
  campaignName = computed(() => this.diaryentry().campaign_details.name);
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

  constructor(public routingService: RoutingService) {}

  toggleState(): void {
    const isDisplayState = this.state() === 'DISPLAY';
    this.state.set(isDisplayState ? 'EDIT' : 'DISPLAY');
  }

  rearrangeEncounters(event: CdkDragDrop<Encounter[]>) {
    const encounters = this.diaryentry().encounters;
    const encounter = encounters[event.previousIndex];
    const newOrderIndex = getShiftedOrderIndex(encounters[event.currentIndex]);
    this.encounterCutInsert.emit({ encounter, newOrderIndex });
  }

  swapEncounters(event: MoveEvent<Encounter>) {
    this.encounterSwap.emit({ enc1: event.encounter1, enc2: event.encounter2 });
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
