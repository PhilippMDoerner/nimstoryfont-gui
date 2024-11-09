import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  inject,
  input,
  output,
  Output,
  signal,
} from '@angular/core';
import {
  Encounter,
  EncounterConnection,
  EncounterRaw,
  getShiftedOrderIndex,
  nextOrderIndex,
  priorOrderIndex,
} from 'src/app/_models/encounter';
import { DiaryentryPageStore } from 'src/app/campaign/pages/diaryentry-page/diaryentry-page.store';

import { ArrowButtonComponent } from 'src/design/atoms/arrow-button/arrow-button.component';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { CardComponent } from 'src/design/atoms/card/card.component';
import { HtmlTextComponent } from 'src/design/atoms/html-text/html-text.component';
import { SpinnerComponent } from 'src/design/atoms/spinner/spinner.component';
import { EncounterComponent } from '../encounter/encounter.component';

type ListState = 'READ' | 'EDIT';

@Component({
  selector: 'app-diaryentry-encounters',
  templateUrl: './diaryentry-encounters.component.html',
  styleUrls: ['./diaryentry-encounters.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    CardComponent,
    HtmlTextComponent,
    NgClass,
    EncounterComponent,
    ArrowButtonComponent,
    SpinnerComponent,
    NgTemplateOutlet,
  ],
})
export class DiaryentryEncountersComponent {
  store = inject(DiaryentryPageStore);

  diaryEntryPk = computed(() => this.store.diaryentry()?.pk);
  campaignCharacters = this.store.campaignCharacters;
  campaignLocations = this.store.campaignLocations;
  encounterServerModel = this.store.encounterServerModel;
  canUpdate = this.store.hasWritePermission;
  canDelete = this.store.hasWritePermission;
  canCreate = this.store.hasWritePermission;
  state = input<ListState>('READ');

  @Output() connectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnection> =
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

  encountersToAdd = signal<EncounterRaw[]>([]);
  isUpdatingGlobally = this.store.isUpdatingGlobally;
  isUpdatingAnything = this.store.isUpdatingAnyEncounters;
  cutEncounterIndex = signal<number | undefined>(undefined);
  diaryEntryEncounters = this.store.diaryEntryEncounters;

  addEmptyEncounterAtIndex(listIndex: number) {
    const newOrderIndex: number = this.getOrderIndexForNewEncounter(listIndex);
    //Create and add Encounter
    const newEncounter: EncounterRaw = {
      diaryentry: this.diaryEntryPk() as number,
      title: 'New Encounter',
      order_index: newOrderIndex,
      description: '',
    };

    this.store.addEmptyEncounterForCreation(newEncounter);
  }

  onInsertExcisedEncounter(insertionIndex: number) {
    const cutEncounterIndex = this.cutEncounterIndex();
    if (cutEncounterIndex == null) {
      return;
    }

    const cutPositions = [cutEncounterIndex, cutEncounterIndex - 1];
    const isInsertingIntoCutPosition = cutPositions.includes(insertionIndex);
    if (isInsertingIntoCutPosition) {
      return;
    }

    const isInsertingAtLastPosition =
      insertionIndex > this.diaryEntryEncounters().length;
    let newOrderIndex: number;
    if (isInsertingAtLastPosition) {
      const lastEncounter = this.diaryEntryEncounters()[
        this.diaryEntryEncounters().length - 1
      ].encounter as Encounter;
      newOrderIndex = nextOrderIndex(lastEncounter);
    } else {
      const encounterBeforeInsertion: Encounter = this.diaryEntryEncounters()[
        insertionIndex
      ].encounter as Encounter;
      newOrderIndex = encounterBeforeInsertion.order_index;
    }

    const encounterToInsert: Encounter = this.diaryEntryEncounters()[
      cutEncounterIndex
    ].encounter as Encounter;
    this.store.cutInsertEncounter(encounterToInsert, newOrderIndex);
  }

  onExcisionClick(encounterIndex: number) {
    const isAlreadyCuttingEncounter = this.cutEncounterIndex() != null;
    const isCuttingThisEncounter = this.cutEncounterIndex() === encounterIndex;

    if (isAlreadyCuttingEncounter && isCuttingThisEncounter) {
      this.cutEncounterIndex.set(undefined);
    } else if (!isAlreadyCuttingEncounter) {
      this.cutEncounterIndex.set(encounterIndex);
    }
  }

  onEncounterOrderIncrease(encounterIndex: number): void {
    const isLastEncounter =
      encounterIndex === this.diaryEntryEncounters().length - 1;
    if (isLastEncounter) return; //encounter is already last, can't increase more

    const encounter = this.diaryEntryEncounters()[encounterIndex]
      .encounter as Encounter;
    const nextEncounter = this.nextRealEncounter(encounterIndex + 1);
    if (!nextEncounter) return;

    this.store.swapEncounters(encounter.pk, nextEncounter.pk);
  }

  onEncounterOrderDecrease(encounterIndex: number): void {
    const isFirstEncounter = encounterIndex === 0;
    if (isFirstEncounter) return; //encounter is already first, can't decrease more

    const encounter = this.diaryEntryEncounters()[encounterIndex]
      .encounter as Encounter;
    const priorEncounter = this.priorRealEncounter(encounterIndex - 1);
    if (!priorEncounter) return;

    this.store.swapEncounters(encounter.pk, priorEncounter.pk);
  }

  onEncounterCreateCancel(encounterIndex: number) {
    const createEncounterToRemove =
      this.diaryEntryEncounters()[encounterIndex].encounter;
    this.store.removeEmptyEncounterForCreation(createEncounterToRemove);
  }

  onEncounterDelete(encounterIndex: number) {
    const encounterToDelete =
      this.diaryEntryEncounters()[encounterIndex].encounter;
    this.store.removeEncounter(encounterToDelete as Encounter);
  }

  onEncounterCreate(encounter: EncounterRaw) {
    const newEncounter = {
      ...encounter,
      order_index: nextOrderIndex(encounter),
    };
    this.encounterCreate.emit(newEncounter);
    this.store.removeEmptyEncounterForCreation(encounter);
  }

  /**
   * Determines the order index the encounter should have based on the place where it is supposed to be inserted into
   * @param {number} encounterIndex - The index on this.encounters after which the new encounter shall be inserted.
   * This will increment the index of the encounter currently there and all after it by one, though not in this function
   */
  private getOrderIndexForNewEncounter(insertionIndex: number): number {
    const isNewFirstEncounter: boolean = insertionIndex < 0;
    const isEmptyDiaryEntry: boolean = this.store.realEncounters().length === 0;
    const isNewFirstEncounterInFullDiaryentry: boolean =
      isNewFirstEncounter && !isEmptyDiaryEntry;

    const isLastEncounterInFullDiaryentry =
      insertionIndex >= this.store.realEncounters().length &&
      !isEmptyDiaryEntry;

    if (isEmptyDiaryEntry) {
      return 0;
    } else if (isNewFirstEncounterInFullDiaryentry) {
      const firstEncounter: Encounter = this.store.realEncounters()[0];
      return priorOrderIndex(firstEncounter);
    } else if (isLastEncounterInFullDiaryentry) {
      const lastEncounter: Encounter =
        this.store.realEncounters()[this.store.realEncounters().length - 1];
      return nextOrderIndex(lastEncounter);
    } else {
      //is new encounter after some other encounter
      const priorEncounter = this.diaryEntryEncounters()[insertionIndex];
      return getShiftedOrderIndex(priorEncounter.encounter);
    }
  }

  private isRealEncounter(encounter: Encounter | EncounterRaw): boolean {
    return 'pk' in encounter;
  }

  private nextRealEncounter(encounterIndex: number): Encounter | undefined {
    const realEncountersAfterIndex = this.diaryEntryEncounters()
      .slice(encounterIndex)
      .filter((encounter) => this.isRealEncounter(encounter.encounter));

    return realEncountersAfterIndex[0]?.encounter as Encounter | undefined;
  }

  private priorRealEncounter(encounterIndex: number): Encounter | undefined {
    const realEncountersBeforeIndex = this.diaryEntryEncounters()
      .slice(0, encounterIndex + 1)
      .reverse()
      .filter((encounter) => this.isRealEncounter(encounter.encounter));

    return realEncountersBeforeIndex[0]?.encounter as Encounter | undefined;
  }
}
