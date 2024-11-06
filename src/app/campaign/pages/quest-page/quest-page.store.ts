import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { signalStore, withComputed, withState } from '@ngrx/signals';
import { shareReplay, switchMap, take } from 'rxjs';
import { Quest } from 'src/app/_models/quest';
import { QuestService } from 'src/app/_services/article/quest.service';
import { GlobalStore } from 'src/app/global.store';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { withQueries } from 'src/utils/store/withQueries';
import { withUpdates } from 'src/utils/store/withUpdates';

type QuestPageState = {
  questDeleteState: RequestState;
};

const initialState: QuestPageState = {
  questDeleteState: 'init',
};

export const QuestPageStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const globalStore = inject(GlobalStore);
    const questService = inject(QuestService);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      shareReplay(1),
      filterNil(),
    );

    return {
      quest: (name: string) =>
        campaignName$.pipe(
          take(1),
          switchMap((campaignName) =>
            questService.readByParam(campaignName, { name }),
          ),
        ),
    };
  }),
  withUpdates(() => {
    const questService = inject(QuestService);
    return {
      quest: (updatedQuest: Quest) =>
        questService.update(updatedQuest.pk as number, updatedQuest),
    };
  }),
);
