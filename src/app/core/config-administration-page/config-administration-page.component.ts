import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {
  ConfigTableData,
  ConfigTableKind,
} from 'src/design/templates/_models/config-table';
import {
  createConfigTableEntry,
  deleteConfigTableEntry,
  loadConfigTableEntries,
} from '../app.actions';
import { selectConfigTableData } from '../app.reducer';

@Component({
  selector: 'app-config-administration-page',
  templateUrl: './config-administration-page.component.html',
  styleUrls: ['./config-administration-page.component.scss'],
})
export class ConfigAdministrationPageComponent implements OnInit {
  tableData$!: Observable<ConfigTableData>;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.tableData$ = this.store.select(selectConfigTableData);
  }

  loadTableEntries(table: ConfigTableKind): void {
    this.store.dispatch(loadConfigTableEntries({ table }));
  }

  deleteTableEntry(event: { table: ConfigTableKind; entry: any }): void {
    this.store.dispatch(
      deleteConfigTableEntry({
        entryId: event.entry.id,
        table: event.table,
      }),
    );
  }

  createTableEntry(event: { table: ConfigTableKind; entry: unknown }): void {
    this.store.dispatch(
      createConfigTableEntry({
        table: event.table,
        entry: event.entry,
      }),
    );
  }
}
