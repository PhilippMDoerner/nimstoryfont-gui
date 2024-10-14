import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { switchMap, take, tap } from 'rxjs';
import { OverviewItem } from 'src/app/_models/overview';
import { RecentlyUpdatedService } from 'src/app/_services/article/recently-updated.service';
import { GlobalStore } from 'src/app/global.store';
import { log } from 'src/utils/logging';
import { filterNil } from 'src/utils/rxjs-operators';

export type HomePageState = {
  recentlyUpdatedArticles: OverviewItem[];
  canLoadMore: boolean;
  isLoading: boolean;
};

const initialState: HomePageState = {
  recentlyUpdatedArticles: [],
  canLoadMore: true,
  isLoading: false,
};

export const HomePageStore = signalStore(
  withState(initialState),
  withMethods((state) => {
    const recentlyUpdatedService = inject(RecentlyUpdatedService);
    const globalStore = inject(GlobalStore);
    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
    );
    return {
      loadMoreArticles: (pageNumber: number) => {
        campaignName$
          .pipe(
            take(1),
            tap(() => patchState(state, { isLoading: true })),
            switchMap((campaign) =>
              recentlyUpdatedService.getRecentlyUpdatedArticle(
                campaign,
                pageNumber,
              ),
            ),
            take(1),
          )
          .subscribe({
            next: (articles) => {
              const isLastPage = articles.length === 0;
              const recentlyUpdatedArticles = state
                .recentlyUpdatedArticles()
                .concat(articles);

              patchState(state, {
                isLoading: false,
                canLoadMore: !isLastPage,
                recentlyUpdatedArticles,
              });
            },
            // error: (err) => patchState(state, { isLoading: false }),
          });
      },
    };
  }),
  withHooks((store) => {
    return {
      onInit: () => {
        log('HomePageStore', store);
      },
    };
  }),
);
