import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { shareReplay, switchMap, take } from 'rxjs';
import { Timestamp } from 'src/app/_models/sessionAudio';
import { errorToast } from 'src/app/_models/toast';
import { SessionAudioTimestampService } from 'src/app/_services/article/session-audio-timestamp.service';
import { SessionAudioService } from 'src/app/_services/article/session-audio.service';
import { GlobalStore } from 'src/app/global.store';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { sortByProp } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { withQueries } from 'src/utils/store/withQueries';

type SessionaudioPageState = {
  createTimestampState: RequestState;
  deleteTimestampState: RequestState;
};

const initialState: SessionaudioPageState = {
  createTimestampState: 'init',
  deleteTimestampState: 'init',
};

export const SessionaudioPageStore = signalStore(
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const sessionaudioService = inject(SessionAudioService);
    const timestampService = inject(SessionAudioTimestampService);
    const globalStore = inject(GlobalStore);
    const campaign$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      sessionaudio: (params: {
        isMainSession: number;
        sessionNumber: number;
      }) =>
        campaign$.pipe(
          take(1),
          switchMap((campaignName) =>
            sessionaudioService.readByParam(campaignName, {
              ...params,
              name: '',
            }),
          ),
        ),
      timestamps: (params: { isMainSession: number; sessionNumber: number }) =>
        campaign$.pipe(
          take(1),
          switchMap((campaignName) =>
            timestampService.getTimestamps(
              campaignName,
              params.isMainSession,
              params.sessionNumber,
            ),
          ),
        ),
    };
  }),
  withMethods((state) => {
    const sessionaudioService = inject(SessionAudioService);
    const timestampService = inject(SessionAudioTimestampService);
    const globalStore = inject(GlobalStore);
    const toastService = inject(ToastService);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );
    return {
      createTimestamp: (timestamp: Timestamp) => {
        patchState(state, { createTimestampState: 'loading' });
        timestampService
          .create(timestamp)
          .pipe(take(1))
          .subscribe({
            next: (newTimestamp) => {
              const newTimestamps = [
                ...(state.timestamps() ?? []),
                newTimestamp,
              ];
              patchState(state, {
                createTimestampState: 'success',
                timestamps: sortByProp(newTimestamps, 'time'),
              });
            },
            error: (err: HttpErrorResponse) => {
              toastService.addToast(errorToast(err));
              patchState(state, {
                createTimestampState: 'error',
              });
            },
          });
      },
      deleteTimestamp: (timestampPk: number) => {
        patchState(state, { deleteTimestampState: 'loading' });
        timestampService
          .delete(timestampPk)
          .pipe(take(1))
          .subscribe({
            next: () => {
              const newTimestamps = (state.timestamps() ?? []).filter(
                (timestamp) => timestamp.pk !== timestampPk,
              );
              patchState(state, {
                deleteTimestampState: 'success',
                timestamps: sortByProp(newTimestamps, 'time'),
              });
            },
            error: (err: HttpErrorResponse) => {
              toastService.addToast(errorToast(err));
              patchState(state, {
                deleteTimestampState: 'error',
              });
            },
          });
      },
    };
  }),
);
