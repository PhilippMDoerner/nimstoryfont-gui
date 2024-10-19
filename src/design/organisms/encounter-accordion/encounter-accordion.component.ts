import { Component, EventEmitter, input, Output } from '@angular/core';
import { CharacterEncounter } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { Encounter, EncounterConnection } from '../../../app/_models/encounter';

@Component({
  selector: 'app-encounter-accordion',
  templateUrl: './encounter-accordion.component.html',
  styleUrls: ['./encounter-accordion.component.scss'],
})
export class EncounterAccordionComponent {
  encounters = input.required<(Encounter | CharacterEncounter)[]>();
  campaignLocations = input.required<OverviewItem[]>();
  campaignCharacters = input.required<OverviewItem[]>();
  serverModel = input<Encounter>();
  canUpdate = input(false);
  canCreate = input(false);
  canDelete = input(false);

  @Output() connectionDelete: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnection> =
    new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter | CharacterEncounter> =
    new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter | CharacterEncounter> =
    new EventEmitter();
}
