import { Component, computed, inject, Signal } from '@angular/core';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import {
  ConfigTableData,
  ConfigTableKind,
} from 'src/design/templates/_models/config-table';
import { CoreStore } from '../core.store';

@Component({
  selector: 'app-config-administration-page',
  templateUrl: './config-administration-page.component.html',
  styleUrls: ['./config-administration-page.component.scss'],
})
export class ConfigAdministrationPageComponent {
  readonly coreStore = inject(CoreStore);
  tableData: Signal<ConfigTableData> = computed(() => ({
    MARKER_TYPE: this.coreStore.markerTypeTableData(),
    PLAYER_CLASS: this.coreStore.playerClassTableData(),
  }));

  loadTableEntries(table: ConfigTableKind): void {
    switch (table) {
      case 'MARKER_TYPE':
        this.coreStore.loadMarkerTypeTable();
        break;
      case 'PLAYER_CLASS':
        this.coreStore.loadPlayerClassTable();
        break;
    }
  }

  deleteTableEntry(event: { table: ConfigTableKind; entry: any }): void {
    const entryId: number = event.entry.id ?? event.entry.pk;
    if (entryId == null) return;

    switch (event.table) {
      case 'MARKER_TYPE':
        this.coreStore.deleteMarkerType({ entryId });
        break;
      case 'PLAYER_CLASS':
        this.coreStore.deletePlayerClass({ entryId });
        break;
    }
  }

  createTableEntry(event: { table: ConfigTableKind; entry: unknown }): void {
    if (event.entry == null) return;
    switch (event.table) {
      case 'MARKER_TYPE':
        this.coreStore.createMarkerType(event.entry as MapMarkerType);
        break;
      case 'PLAYER_CLASS':
        this.coreStore.createPlayerClass(event.entry as PlayerClass);
        break;
    }
  }
}
