import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, catchError, of, switchMap } from 'rxjs';
import { MarkerTypeService } from 'src/app/_services/article/marker-type.service';
import { PlayerClassService } from 'src/app/_services/article/player-class.service';
import { CRUDService } from 'src/app/_services/service.interfaces';
import { ConfigTableKind } from 'src/design/templates/_models/config-table';
import {
  createConfigTableEntry,
  createConfigTableEntryFailure,
  createConfigTableEntrySuccess,
  deleteConfigTableEntry,
  deleteConfigTableEntryFailure,
  deleteConfigTableEntrySuccess,
  loadConfigTableEntries,
  loadConfigTableEntriesFailure,
  loadConfigTableEntriesSuccess,
} from '../app.actions';

@Injectable()
export class LoadConfigTablesEffects {
  load$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(loadConfigTableEntries),
        switchMap(({ table }): Observable<Action> => {
          const service = this.getService(table);
          return service.loadList().pipe(
            switchMap((entries: unknown[]) =>
              of(loadConfigTableEntriesSuccess({ table, entries: entries })),
            ),
            catchError((error) => of(loadConfigTableEntriesFailure(error))),
          );
        }),
      ),
  );

  deleteEntry$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(deleteConfigTableEntry),
        switchMap(({ table, entryId }): Observable<Action> => {
          const service = this.getService(table);
          return service.delete(entryId).pipe(
            switchMap(() =>
              of(deleteConfigTableEntrySuccess({ table, entryId })),
            ),
            catchError((error) => of(deleteConfigTableEntryFailure(error))),
          );
        }),
      ),
  );

  createEntry$: Observable<Action> = createEffect(
    (): Observable<Action> =>
      this.actions$.pipe(
        ofType(createConfigTableEntry),
        switchMap(({ table, entry }): Observable<Action> => {
          const service = this.getService(table);
          return service.doCreate(entry).pipe(
            switchMap((newEntry) =>
              of(createConfigTableEntrySuccess({ table, entry: newEntry })),
            ),
            catchError((error) => of(createConfigTableEntryFailure(error))),
          );
        }),
      ),
  );

  private getService(tableKind: ConfigTableKind): CRUDService<any> {
    switch (tableKind) {
      case 'MARKER_TYPE':
        return this.markerTypeService;
      case 'PLAYER_CLASS':
        return this.playerClassService;
    }
  }

  constructor(
    private actions$: Actions,
    private markerTypeService: MarkerTypeService,
    private playerClassService: PlayerClassService,
  ) {}
}
