import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { Icon } from 'src/design/atoms';
import { ConfigTableData, ConfigTableKind } from '../_models/config-table';

interface ConfigTable {
  name: string;
  kind: ConfigTableKind;
  entries?: any[];
  icon: Icon;
  model: unknown;
  formFields: FormlyFieldConfig[];
  showForm: boolean;
}

@Component({
  selector: 'app-config-tables',
  templateUrl: './config-tables.component.html',
  styleUrls: ['./config-tables.component.scss'],
})
export class ConfigTablesComponent {
  tableData = input.required<ConfigTableData>();

  @Output() loadTableEntries: EventEmitter<ConfigTableKind> =
    new EventEmitter();
  @Output() deleteTableEntry: EventEmitter<{
    table: ConfigTableKind;
    entry: unknown;
  }> = new EventEmitter();
  @Output() createTableEntry: EventEmitter<{
    table: ConfigTableKind;
    entry: unknown;
  }> = new EventEmitter();

  tables = computed<ConfigTable[]>(() => [
    {
      name: 'Marker Type',
      kind: 'MARKER_TYPE',
      icon: 'tag',
      model: { name: null, is_text_marker: false, icon: null, color: null },
      formFields: [
        this.formlyService.buildInputConfig({
          key: 'name',
          inputKind: 'NAME',
        }),
        this.formlyService.buildCheckboxConfig({
          key: 'is_text_marker',
          label: 'Show name instead of Icon',
          defaultValue: false,
        }),
        this.formlyService.buildInputConfig({
          key: 'icon',
          inputKind: 'NAME',
        }),
        this.formlyService.buildInputConfig({
          key: 'color',
          inputKind: 'STRING',
        }),
      ],
      showForm: false,
      entries: this.tableData().MARKER_TYPE,
    },
    {
      name: 'Class',
      kind: 'PLAYER_CLASS',
      icon: 'user',
      model: { name: null },
      formFields: [
        this.formlyService.buildInputConfig({
          key: 'name',
          inputKind: 'NAME',
        }),
      ],
      entries: this.tableData().PLAYER_CLASS,
      showForm: false,
    },
  ]);

  campaignOverviewUrl = this.routingService.getRoutePath('campaign-overview');

  constructor(
    private routingService: RoutingService,
    private formlyService: FormlyService,
  ) {}

  createEntry(kind: ConfigTableKind, entry: unknown): void {
    this.createTableEntry.emit({ table: kind, entry: entry });
    this.getTable(kind).showForm = false;
  }

  private getTable(kind: ConfigTableKind): ConfigTable {
    return this.tables().find((table) => table.kind === kind) as ConfigTable;
  }
}
