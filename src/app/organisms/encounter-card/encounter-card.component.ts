import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BadgeListEntry } from 'src/app/_models/badge-list';
import { Encounter, EncounterConnection } from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyServiceService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';

type EncounterState = "DISPLAY" | "UPDATE" | "OUTDATEDUPDATE";


@Component({
  selector: 'app-encounter-card',
  templateUrl: './encounter-card.component.html',
  styleUrls: ['./encounter-card.component.scss']
})
export class EncounterCardComponent implements OnInit{
  @Input() encounter!: Encounter;
  @Input() characters!: OverviewItem[];
  @Input() campaignName!: string;
  @Input() serverModel?: Encounter;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() connectionDelete: EventEmitter<EncounterConnection> = new EventEmitter();
  @Output() connectionCreate: EventEmitter<EncounterConnection> = new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();

  userModel!: Encounter;
  state: EncounterState = 'DISPLAY';
  badgeEntries!: BadgeListEntry[];
  
  formlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "title", 
      inputKind: 'STRING'
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: "location", 
      label: "Encounter Location", 
      sortProp: "name_full", 
      overviewType: 'LOCATION', 
      campaign: this.campaignName,
      labelProp: 'name',
    }),
    this.formlyService.buildEditorConfig({
      key: "description", 
      required: true
    }),
  ];
  
  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyServiceService,
  ){}
  
  ngOnInit(): void {
    const encounterConnections = this.encounter.encounterConnections ?? [];
    this.badgeEntries = this.parseConnection(encounterConnections);
  }
  
  changeState(newState: EncounterState){
    this.state = newState;
  }
  
  onEncounterDelete(){
    this.encounterDelete.emit(this.encounter);
    this.changeState('DISPLAY');
  }
  
  onEncounterUpdate(encounter: Encounter){
    this.encounterUpdate.emit(encounter);
    this.changeState('DISPLAY');
  }
  
  onConnectionDelete(connection: EncounterConnection){
    if(!this.canDelete){
      return;
    }
  
    this.connectionDelete.emit(connection);
  }
  
  onConnectionCreate(character: OverviewItem){
    const newConnection: EncounterConnection = {
      encounter: this.encounter.pk as number,
      character: character.pk,
    };
    this.connectionCreate.emit(newConnection);
  }
  
  onToggle(toggled: boolean){
    this.state = toggled ? 'UPDATE' : 'DISPLAY';
  }
      
  private parseConnection(connections: EncounterConnection[]): BadgeListEntry[]{
    return connections.map(con => {
      const characterName = con.character_details?.name as string;
      const link = this.routingService.getRoutePath(
        'character', 
        {
          name: characterName,
          campaign: this.campaignName,
        }
      );
      
      return { 
        text: characterName,
        badgeValue: con,
        link
      };
    });
  }
}