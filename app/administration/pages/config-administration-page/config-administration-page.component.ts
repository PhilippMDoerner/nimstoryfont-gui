import { Component, computed, inject } from '@angular/core';
import { NodeLinkTypeRaw } from 'src/app/_models/graph';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import { GlobalStore } from 'src/app/global.store';
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
  globalStore = inject(GlobalStore);

  tableData = computed<ConfigTableData>(() => {
    return {
      MARKER_TYPE: this.store.markerTypes(),
      PLAYER_CLASS: this.store.playerClasses(),
      NODE_LINK_TYPE: this.store.nodeLinkTypes(),
    };
  });

  loadTableEntries(table: ConfigTableKind): void {
    switch (table) {
      case 'MARKER_TYPE':
        this.store.loadMarkerTypes();
        break;
      case 'PLAYER_CLASS':
        this.store.loadPlayerClasses();
        break;
      case 'NODE_LINK_TYPE':
        this.store.loadNodeLinkTypes();
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
      case 'NODE_LINK_TYPE':
        this.store.deleteRelationshipType(entryId);
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
      case 'NODE_LINK_TYPE':
        this.store.createRelationshipType(event.entry as NodeLinkTypeRaw);
        break;
    }
  }
}
