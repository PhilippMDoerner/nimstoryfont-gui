import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';

interface ConfigTable {
  name: string;
  kind: ConfigTableKind;
  entries: any[];
  icon: string;
  model: unknown;
  formFields: FormlyFieldConfig[];
  showForm: boolean;
}

export type ConfigTableKind = 'MARKER_TYPE' | 'PLAYER_CLASS';
const tableKinds: ConfigTableKind[] = [ 'MARKER_TYPE', 'PLAYER_CLASS']

export type ConfigTableData = {
  [key in ConfigTableKind]: any;
}


@Component({
  selector: 'app-config-tables',
  templateUrl: './config-tables.component.html',
  styleUrls: ['./config-tables.component.scss']
})
export class ConfigTablesComponent implements OnChanges{
  @Input() tableData!: ConfigTableData;
  
  @Output() loadTableEntries: EventEmitter<ConfigTableKind> = new EventEmitter();
  @Output() deleteTableEntry: EventEmitter<{table: ConfigTableKind, entry: any}> = new EventEmitter();
  @Output() createTableEntry: EventEmitter<any> = new EventEmitter();
  
  tables: ConfigTable[] = [
    {
      name: "Marker Type",
      kind: 'MARKER_TYPE',
      icon: "tag",
      model: {name: null, is_text_marker: false, icon: null, color: null},
      formFields: [
        this.formlyService.buildInputConfig({
          key: "name", 
          inputKind: 'NAME',
        }),
        this.formlyService.buildCheckboxConfig({
          key: "is_text_marker", 
          label: "Show name instead of Icon", 
          defaultValue: false
        }),
        this.formlyService.buildInputConfig({
          key: "icon",
          inputKind: 'NAME',
        }),
        this.formlyService.buildInputConfig({
          key: "color",
          inputKind: 'STRING',
        })
      ],
      showForm: false,
      entries: [],
    },
    {
      name: "Class",
      kind: 'PLAYER_CLASS',
      icon: "user",
      model: {name: null},
      formFields: [
        this.formlyService.buildInputConfig({
          key: "name", 
          inputKind: 'NAME'
        })
      ],
      entries: [],
      showForm: false,
    }
  ];
    
  campaignOverviewUrl!: string;
  
  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ){}
  
  ngOnChanges(): void {
    this.addDataToTables();
    this.setCampaignOverviewUrl();
  }
  
  private addDataToTables(): void{
    this.tables = tableKinds.map(
      kind => {
        const table: ConfigTable = this.tables.find(table => table.kind === kind) as ConfigTable;
        return {
          ...table,
          entries: this.tableData[kind],
        }
      }
    );
  }
  
  private setCampaignOverviewUrl(): void{
    this.campaignOverviewUrl = this.routingService.getRoutePath('campaign-overview');
  }
}
