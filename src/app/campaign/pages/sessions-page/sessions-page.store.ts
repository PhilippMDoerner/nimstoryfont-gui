import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { map, shareReplay, switchMap, take } from 'rxjs';
import { Session, SessionRaw } from 'src/app/_models/session';
import { SessionService } from 'src/app/_services/article/session.service';
import { WarningsService } from 'src/app/_services/utils/warnings.service';
import { GlobalStore } from 'src/app/global.store';
import { replaceItem, sortByProp } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { withQueries } from 'src/utils/store/withQueries';

type SessionsPageState = {
  updateSessionState: RequestState;
  deleteSessionState: RequestState;
  createSessionState: RequestState;
  sessionServerModel: undefined | Session;
};

const initialState: SessionsPageState = {
  updateSessionState: 'init' as RequestState,
  deleteSessionState: 'init' as RequestState,
  createSessionState: 'init' as RequestState,
  sessionServerModel: undefined,
};

function sortSessions(sessions: Session[]): Session[] {
  return sortByProp(sessions, 'session_number', 'desc');
}

export const SessionsPageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const sessionService = inject(SessionService);
    const globalStore = inject(GlobalStore);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      sessions: () =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            sessionService.campaignDetailList(campaignName),
          ),
          map((sessions) => sortByProp(sessions, 'session_number', 'desc')),
        ),
    };
  }),
  withMethods((store) => {
    const sessionService = inject(SessionService);
    const warningService = inject(WarningsService);

    return {
      reset: () =>
        patchState(store, {
          updateSessionState: 'init',
          deleteSessionState: 'init',
          createSessionState: 'init',
          sessionsError: undefined,
          sessionsQueryState: 'init',
          sessionServerModel: undefined,
        }),
      updateSession(session: Session) {
        patchState(store, {
          updateSessionState: 'loading',
          sessionsError: undefined,
          sessionServerModel: undefined,
        });

        sessionService
          .update(session.pk as number, session)
          .pipe(take(1))
          .subscribe({
            next: (updatedSession) => {
              const sessions = store.sessions();
              if (!sessions) return;

              const newSessions = replaceItem(sessions, updatedSession, 'pk');
              patchState(store, {
                updateSessionState: 'success',
                sessions: sortSessions(newSessions),
              });
            },
            error: (error) => {
              if (error.status === 409) {
                patchState(store, {
                  updateSessionState: 'error',
                  sessionServerModel: error.error,
                });
              } else {
                warningService.showWarning(error);
              }
            },
          });
      },
      deleteSession(sessionPk: number) {
        patchState(store, {
          deleteSessionState: 'loading',
          sessionsError: undefined,
        });

        sessionService
          .delete(sessionPk)
          .pipe(take(1))
          .subscribe({
            next: () =>
              patchState(store, {
                deleteSessionState: 'success',
                sessions: store
                  .sessions()
                  ?.filter((session) => session.pk !== sessionPk),
              }),
            error: warningService.showWarning,
          });
      },
      createSession(session: SessionRaw) {
        patchState(store, {
          createSessionState: 'loading',
          sessionServerModel: undefined,
        });
        sessionService.create(session).subscribe({
          next: (newSession) => {
            const newSessions = [...(store.sessions() ?? []), newSession];
            patchState(store, {
              createSessionState: 'success',
              sessions: sortSessions(newSessions),
            });
          },
          error: warningService.showWarning,
        });
      },
    };
  }),
);