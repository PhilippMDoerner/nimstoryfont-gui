import { Component, EventEmitter, Input, Output } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { Encounter, EncounterConnection } from '../../_models/encounter';

@Component({
  selector: 'app-encounter-accordion',
  templateUrl: './encounter-accordion.component.html',
  styleUrls: ['./encounter-accordion.component.scss']
})
export class EncounterAccordionComponent {
  @Input() encounters!: Encounter[];
  @Input() campaignCharacters!: OverviewItem[];
  @Input() campaignName!: string;
  @Input() serverModel?: Encounter;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() connectionDelete: EventEmitter<EncounterConnection> = new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnection> = new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();

  onPanelChange(event: any){
    console.log(event);
  }
}
