import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { NodeLinkType } from 'src/app/_models/graph';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import {
  ConfigTable,
  ConfigTableData,
  ConfigTableKind,
} from 'src/design/organisms/_model/config-table';
import { ButtonComponent } from '../../atoms/button/button.component';
import { ConfigTableComponent } from '../../organisms/config-table/config-table.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

@Component({
  selector: 'app-config-tables',
  templateUrl: './config-tables.component.html',
  styleUrls: ['./config-tables.component.scss'],
  standalone: true,
  imports: [
    PageContainerComponent,
    RouterLink,
    ButtonComponent,
    ConfigTableComponent,
  ],
})
export class ConfigTablesComponent {
  currentCampaignId = input.required<number | undefined>();
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

  tables = computed<ConfigTable<any>[]>(() => [
    {
      name: 'Marker Type',
      kind: 'MARKER_TYPE',
      icon: 'tag',
      idProp: 'id',
      model: {
        name: undefined,
        is_text_marker: false,
        icon: undefined,
        color: undefined,
      },
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
    } satisfies ConfigTable<MapMarkerType>,
    {
      name: 'Class',
      kind: 'PLAYER_CLASS',
      icon: 'user',
      idProp: 'pk',
      model: { name: undefined },
      formFields: [
        this.formlyService.buildInputConfig({
          key: 'name',
          inputKind: 'NAME',
        }),
      ],
      entries: this.tableData().PLAYER_CLASS,
      showForm: false,
    } satisfies ConfigTable<PlayerClass>,
    {
      name: 'Node Link Type',
      kind: 'NODE_LINK_TYPE',
      icon: 'link',
      model: { campaign_id: this.currentCampaignId() },
      formFields: [],
      idProp: 'id',
      showForm: false,
    } satisfies ConfigTable<NodeLinkType>,
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

  private getTable<T extends object>(kind: ConfigTableKind): ConfigTable<T> {
    return this.tables().find((table) => table.kind === kind) as ConfigTable<T>;
  }
}
