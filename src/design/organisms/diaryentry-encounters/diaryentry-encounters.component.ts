import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
} from '@angular/core';
import { animateElement } from 'src/app/_functions/animate';
import {
  Encounter,
  EncounterConnection,
  EncounterObject,
  EncounterRaw,
} from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';

type ListState = 'READ' | 'EDIT';
interface DiaryEntryEncounter {
  encounter: Encounter;
  isUpdating: boolean;
}

@Component({
  selector: 'app-diaryentry-encounters',
  templateUrl: './diaryentry-encounters.component.html',
  styleUrls: ['./diaryentry-encounters.component.scss'],
})
export class DiaryentryEncountersComponent implements OnInit, OnChanges {
  @Input() diaryEntryPk!: number;
  @Input() encounters!: Encounter[];
  @Input() campaignCharacters!: OverviewItem[];
  @Input() campaignLocations!: OverviewItem[];
  @Input() encounterServerModel?: Encounter;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() state: ListState = 'READ';

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

  isUpdatingAnything: boolean = false;
  isUpdatingGlobally: boolean = false;
  cutEncounterIndex?: number;
  diaryEntryEncounters!: DiaryEntryEncounter[];

  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setDiaryEntryEncounters();
  }

  ngOnChanges(): void {
    this.isUpdatingAnything = false;
    this.isUpdatingGlobally = false;
    this.setDiaryEntryEncounters();
  }

  setDiaryEntryEncounters() {
    this.diaryEntryEncounters = this.encounters.map((encounter) => ({
      encounter,
      isUpdating: false,
    }));

    this.sortEncounters();
  }

  changeState(newState: ListState) {
    this.state = newState;
  }

  addEmptyEncounterAtIndex(listIndex: number) {
    const newOrderIndex: number = this.getOrderIndexForNewEncounter(listIndex);

    //Create and add Encounter
    const newEncounter: Partial<Encounter> = new EncounterObject({
      diaryentry: this.diaryEntryPk,
      title: 'New Encounter',
      order_index: newOrderIndex,
      encounterConnections: [],
    });

    const isNewFirstEncounter: boolean = listIndex < 0;
    const insertionIndex: number = isNewFirstEncounter ? 0 : listIndex + 1;

    this.insertEncounter(newEncounter as Encounter, insertionIndex);
  }

  async onInsertExcisedEncounter(insertionIndex: number) {
    if (this.cutEncounterIndex == null) {
      return;
    }

    const cutPositions = [this.cutEncounterIndex, this.cutEncounterIndex - 1];
    const isInsertingIntoCutPosition = cutPositions.includes(insertionIndex);
    if (isInsertingIntoCutPosition) {
      return;
    }

    const isInsertingAtLastPosition = insertionIndex > this.encounters.length;
    let newOrderIndex: number;
    if (isInsertingAtLastPosition) {
      const lastEncounter = this.encounters[this.encounters.length - 1];
      newOrderIndex = lastEncounter.nextOrderIndex();
    } else {
      const encounterBeforeInsertion: Encounter =
        this.encounters[insertionIndex];
      newOrderIndex = encounterBeforeInsertion.order_index;
    }

    const encounterToInsert: Encounter =
      this.encounters[this.cutEncounterIndex];
    this.isUpdatingAnything = true;
    this.isUpdatingGlobally = true;
    this.encounterCutInsert.emit({
      encounter: encounterToInsert,
      newOrderIndex,
    });
  }

  onExcisionClick(encounterIndex: number) {
    const isAlreadyCuttingEncounter = this.cutEncounterIndex != null;
    const isCuttingThisEncounter = this.cutEncounterIndex === encounterIndex;

    if (isAlreadyCuttingEncounter && isCuttingThisEncounter) {
      this.cutEncounterIndex = undefined;
    } else if (!isAlreadyCuttingEncounter) {
      this.cutEncounterIndex = encounterIndex;
    }
  }

  onEncounterOrderIncrease(encounterIndex: number): void {
    const isLastEncounter = encounterIndex === this.encounters.length - 1;
    if (isLastEncounter) return; //encounter is already last, can't increase more

    const nextEncounterIndex = encounterIndex + 1;

    this.swapEncounters(encounterIndex, nextEncounterIndex);
  }

  onEncounterOrderDecrease(encounterIndex: number): void {
    const isFirstEncounter = encounterIndex === 0;
    if (isFirstEncounter) return; //encounter is already first, can't decrease more

    const priorEncounterIndex = encounterIndex - 1;

    this.swapEncounters(encounterIndex, priorEncounterIndex);
  }

  onEncounterCreateCancel(encounterIndex: number) {
    this.removeEncounter(encounterIndex);
  }

  onEncounterDelete(encounterIndex: number) {
    const encounterToDelete = this.encounters[encounterIndex];
    this.encounterDelete.emit(encounterToDelete);
    this.removeEncounter(encounterIndex);
  }

  async swapEncounters(
    encounterIndex1: number,
    encounterIndex2: number,
  ): Promise<void> {
    this.isUpdatingAnything = true;

    // Hide Encounters during Update
    this.diaryEntryEncounters[encounterIndex1].isUpdating = true;
    this.diaryEntryEncounters[encounterIndex2].isUpdating = true;

    // Swap order indices of both encounters
    const encounter1: Encounter =
      this.diaryEntryEncounters[encounterIndex1].encounter;
    const encounter2: Encounter =
      this.diaryEntryEncounters[encounterIndex2].encounter;

    this.encounterSwap.emit({ enc1: encounter1, enc2: encounter2 });
  }

  private sortEncounters() {
    this.diaryEntryEncounters.sort(
      (encounter1: DiaryEntryEncounter, encounter2: DiaryEntryEncounter) => {
        const order_index1: number = encounter1.encounter.order_index;
        const order_index2: number = encounter2.encounter.order_index;

        if (order_index1 == null && order_index2 == null) {
          return 0;
        } else if (order_index1 == null) {
          return 1;
        } else if (order_index2 == null) {
          return -1;
        } else {
          return order_index1 - order_index2;
        }
      },
    );
  }

  private insertEncounter(encounter: Encounter, insertionIndex: number): void {
    const entriesToDelete: number = 0;
    this.encounters.splice(insertionIndex, entriesToDelete, encounter);
    this.ngOnChanges();
  }

  private removeEncounter(removalIndex: number) {
    const cardElements: HTMLElement[] =
      this.elementRef.nativeElement.querySelectorAll('app-card');
    const cardElement: HTMLElement = cardElements[removalIndex];

    animateElement(cardElement, 'zoomOut').then(() => {
      const entriesToDelete: number = 1;
      this.encounters.splice(removalIndex, entriesToDelete);
      this.ngOnChanges();
    });
  }

  /**
   * Determines the order index the encounter should have based on the place where it is supposed to be inserted into
   * @param {number} encounterIndex - The index on this.encounters after which the new encounter shall be inserted.
   * This will increment the index of the encounter currently there and all after it by one, though not in this function
   */
  private getOrderIndexForNewEncounter(insertionIndex: number): number {
    const isNewFirstEncounter: boolean = insertionIndex < 0;
    const isNewFirstEncounterInEmptyDiaryentry: boolean =
      this.encounters.length === 0;
    const isNewFirstEncounterInFullDiaryentry: boolean =
      isNewFirstEncounter && !isNewFirstEncounterInEmptyDiaryentry;

    let newOrderIndex: number;
    if (isNewFirstEncounterInEmptyDiaryentry) {
      newOrderIndex = 0;
    } else if (isNewFirstEncounterInFullDiaryentry) {
      const firstEncounter: Encounter = this.encounters[0];
      newOrderIndex = firstEncounter.priorOrderIndex();
    } else {
      //is new encounter after some other encounter
      const priorEncounter: Encounter = this.encounters[insertionIndex];
      newOrderIndex = priorEncounter.getShiftedOrderIndex();
    }

    return newOrderIndex;
  }
}
