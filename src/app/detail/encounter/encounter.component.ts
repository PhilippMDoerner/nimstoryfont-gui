import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyServiceService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { Encounter, EncounterConnection } from 'src/app/detail/_models/encounter';
import { BadgeListEntry } from 'src/app/molecules';

type EncounterState = "DISPLAY" | "UPDATE" | "OUTDATEDUPDATE" | "CREATE";

@Component({
  selector: 'app-encounter',
  templateUrl: './encounter.component.html',
  styleUrls: ['./encounter.component.scss']
})
export class EncounterComponent implements OnInit, OnChanges{
  @Input() encounter?: Encounter;
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
  @Output() encounterCreate: EventEmitter<Encounter> = new EventEmitter();

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
    const isInCreateScenario = this.encounter == null && this.canCreate;
    if(isInCreateScenario){
      this.changeState('CREATE', {} as Encounter);
    }
    
    if(this.encounter){
      this.setBadgeEntries();
    }
  }
  
  ngOnChanges(): void {
    this.setBadgeEntries();
  }
  
  setBadgeEntries(){
    const encounterConnections = this.encounter?.encounterConnections ?? [];
    this.badgeEntries = this.parseConnection(encounterConnections);
  }
  
  changeState(newState: EncounterState, newModel: Encounter | undefined){
    this.state = newState;
    this.userModel = { ...newModel } as Encounter;
  }
  
  onEncounterCreate(encounter: Encounter){
    this.encounterCreate.emit(encounter);
    this.encounter = encounter;
    this.changeState('DISPLAY', encounter);
  }
  
  onEncounterDelete(){
    this.encounterDelete.emit(this.encounter);
    this.changeState('DISPLAY', undefined);
  }
  
  onEncounterUpdate(encounter: Encounter){
    this.encounterUpdate.emit(encounter);
    this.encounter = encounter;
    this.changeState('DISPLAY', undefined);
  }
  
  onConnectionDelete(connection: EncounterConnection){
    if(!this.canDelete){
      return;
    }
  
    this.connectionDelete.emit(connection);
  }
  
  onConnectionCreate(character: OverviewItem){
    const newConnection: EncounterConnection = {
      encounter: this.encounter?.pk as number,
      character: character.pk,
    };
    this.connectionCreate.emit(newConnection);
  }
  
  onToggle(toggled: boolean){
    const isInDisplayState = this.state === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Encounter | undefined = toggled ? {...this.encounter} as Encounter : undefined;
    this.changeState(nextState, nextModel)
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
