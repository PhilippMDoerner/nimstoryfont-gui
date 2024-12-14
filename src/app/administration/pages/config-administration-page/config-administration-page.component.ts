import { Component, computed, inject } from '@angular/core';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import {
  ConfigTableData,
  ConfigTableKind,
} from 'src/design/organisms/_model/config-table';
import { ConfigTablesComponent } from '../../../../design/templates/config-tables/config-tables.component';
import { ConfigAdministrationPageStore } from './config-administration-page.store';

@Component({
  selector: 'app-config-administration-page',
  templateUrl: './config-administration-page.component.html',
  styleUrls: ['./config-administration-page.component.scss'],
  standalone: true,
  providers: [ConfigAdministrationPageStore],
  imports: [ConfigTablesComponent],
})
export class ConfigAdministrationPageComponent {
  store = inject(ConfigAdministrationPageStore);
  tableData = computed<ConfigTableData>(() => {
    return {
      MARKER_TYPE: this.store.markerTypes(),
      PLAYER_CLASS: this.store.playerClasses(),
    };
  });
  markerTypesLoaded = computed(
    () => this.store.markerTypeLoadState() === 'done',
  );
  playerClassesLoaded = computed(
    () => this.store.playerClassLoadState() === 'done',
  );

  loadTableEntries(table: ConfigTableKind): void {
    switch (table) {
      case 'MARKER_TYPE':
        this.store.loadMarkerTypes();
        break;
      case 'PLAYER_CLASS':
        this.store.loadPlayerClasses();
        break;
    }
  }

  deleteTableEntry(event: { table: ConfigTableKind; entry: any }): void {
    const entryId: number = event.entry.id ?? event.entry.pk;
    if (entryId == null) return;

    switch (event.table) {
      case 'MARKER_TYPE':
        this.store.deleteMarkerType(entryId);
        break;
      case 'PLAYER_CLASS':
        this.store.deletePlayerClass(entryId);
        break;
    }
  }

  createTableEntry(event: { table: ConfigTableKind; entry: unknown }): void {
    if (event.entry == null) return;
    switch (event.table) {
      case 'MARKER_TYPE':
        this.store.createMarkerType(event.entry as MapMarkerType);
        break;
      case 'PLAYER_CLASS':
        this.store.createPlayerClass(event.entry as PlayerClass);
        break;
    }
  }
}
