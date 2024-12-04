import { inject } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { signalStore, withState } from '@ngrx/signals';
import { switchMap, take } from 'rxjs';
import { ArticleService } from 'src/app/_services/article/article.service';
import { GlobalStore } from 'src/app/global.store';
import { filterNil } from 'src/utils/rxjs-operators';
import { withQueries } from 'src/utils/store/withQueries';

export type GraphPageState = {};

const initialState: GraphPageState = {};

export const GraphPageStore = signalStore(
  withState(initialState),
  withQueries(() => {
    const articleService = inject(ArticleService);
    const globalStore = inject(GlobalStore);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
    );
    return {
      graph: () =>
        campaignName$.pipe(
          takeUntilDestroyed(),
          take(1),
          switchMap((campaignName) => articleService.getNodeMap(campaignName)),
        ),
    };
  }),
);
