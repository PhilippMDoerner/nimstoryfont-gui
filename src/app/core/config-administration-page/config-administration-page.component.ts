import { Component } from '@angular/core';
import {
  combineLatest,
  delay,
  filter,
  first,
  map,
  Observable,
  startWith,
} from 'rxjs';
import { MapMarkerType } from 'src/app/_models/mapMarkerType';
import { PlayerClass } from 'src/app/_models/playerclass';
import { MarkerTypeService } from 'src/app/_services/article/marker-type.service';
import { PlayerClassService } from 'src/app/_services/article/player-class.service';
import {
  ConfigTableData,
  ConfigTableKind,
} from 'src/design/templates/_models/config-table';

@Component({
  selector: 'app-config-administration-page',
  templateUrl: './config-administration-page.component.html',
  styleUrls: ['./config-administration-page.component.scss'],
})
export class ConfigAdministrationPageComponent {
  tableData$: Observable<ConfigTableData> = combineLatest({
    markerTypes: this.markerTypeService.list.data,
    playerClasses: this.playerClassService.list.data,
  }).pipe(
    map(({ markerTypes, playerClasses }) => ({
      MARKER_TYPE: markerTypes,
      PLAYER_CLASS: playerClasses,
    })),
  );

  markerTypesLoaded$ = combineLatest({
    isDeleteDone: this.markerTypeService.delete.hasSucceeded.pipe(
      startWith(false),
    ),
    isCreateDone: this.markerTypeService.create.hasSucceeded.pipe(
      startWith(false),
    ),
  }).pipe(
    filter((data) => data.isCreateDone || data.isDeleteDone),
    delay(100),
  );
  playerClassesLoaded$ = combineLatest({
    isDeleteDone: this.playerClassService.delete.hasSucceeded.pipe(
      startWith(false),
    ),
    isCreateDone: this.playerClassService.create.hasSucceeded.pipe(
      startWith(false),
    ),
  }).pipe(
    filter((data) => data.isCreateDone || data.isDeleteDone),
    delay(100),
  );

  constructor(
    private markerTypeService: MarkerTypeService,
    private playerClassService: PlayerClassService,
  ) {}

  loadTableEntries(table: ConfigTableKind): void {
    switch (table) {
      case 'MARKER_TYPE':
        this.markerTypeService.loadList();
        break;
      case 'PLAYER_CLASS':
        this.playerClassService.loadList();
        break;
    }
  }

  deleteTableEntry(event: { table: ConfigTableKind; entry: any }): void {
    const entryId: number = event.entry.id ?? event.entry.pk;
    if (entryId == null) return;

    switch (event.table) {
      case 'MARKER_TYPE':
        this.markerTypeService.runDelete(entryId);
        this.markerTypesLoaded$
          .pipe(first())
          .subscribe(() => this.loadTableEntries(event.table));
        break;
      case 'PLAYER_CLASS':
        this.playerClassService.runDelete(entryId);
        this.playerClassesLoaded$
          .pipe(first())
          .subscribe(() => this.loadTableEntries(event.table));
        break;
    }
  }

  createTableEntry(event: { table: ConfigTableKind; entry: unknown }): void {
    if (event.entry == null) return;
    switch (event.table) {
      case 'MARKER_TYPE':
        this.markerTypeService.runCreate(event.entry as MapMarkerType);
        this.markerTypesLoaded$
          .pipe(first())
          .subscribe(() => this.loadTableEntries(event.table));
        break;
      case 'PLAYER_CLASS':
        this.playerClassService.runCreate(event.entry as PlayerClass);
        this.playerClassesLoaded$
          .pipe(first())
          .subscribe(() => this.loadTableEntries(event.table));
        break;
    }
  }
}
