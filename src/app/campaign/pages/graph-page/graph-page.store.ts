import { HttpErrorResponse } from '@angular/common/http';
import { computed, inject } from '@angular/core';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { tapResponse } from '@ngrx/operators';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { map, pipe, switchMap, take, tap } from 'rxjs';
import { ArticleNode, NodeLinkRaw } from 'src/app/_models/graph';
import { httpErrorToast } from 'src/app/_models/toast';
import { RelationshipTypeService } from 'src/app/_services/article/relationship-type.service';
import { RelationshipService } from 'src/app/_services/article/relationship.service';
import { GlobalStore } from 'src/app/global.store';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { withQueries } from 'src/utils/store/withQueries';

export type GraphPageState = {
  createLinkState: RequestState;
};

const initialState: GraphPageState = {
  createLinkState: 'init',
};

export const GraphPageStore = signalStore(
  withState(initialState),
  withQueries(() => {
    const relationshipService = inject(RelationshipService);
    const relationshipTypeService = inject(RelationshipTypeService);
    const globalStore = inject(GlobalStore);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
    );
    return {
      graph: () =>
        campaignName$.pipe(
          takeUntilDestroyed(),
          take(1),
          switchMap((campaignName) =>
            relationshipService.getNodeMap(campaignName),
          ),
        ),
      linkTypes: () =>
        campaignName$.pipe(
          takeUntilDestroyed(),
          take(1),
          switchMap((campaign) =>
            relationshipTypeService.campaignList(campaign),
          ),
        ),
    };
  }),
  withComputed((state) => {
    return {
      customLinks: computed(() => {
        const customLinks = state
          .graph()
          ?.links.filter((link) => link.linkKind === 'custom');
        return customLinks?.map((link) => ({
          link,
          label: `${(link.source as ArticleNode).record.name} ${link.label} ${(link.target as ArticleNode).record.name}`,
        }));
      }),
    };
  }),
  withMethods((state) => {
    const relationshipService = inject(RelationshipService);
    const toastService = inject(ToastService);

    return {
      createConnection: rxMethod<NodeLinkRaw>(
        pipe(
          tap(() => patchState(state, { createLinkState: 'loading' })),
          switchMap((data) => relationshipService.create(data)),
          map((newLink) =>
            relationshipService.parseLink(newLink, state.graph()?.nodes ?? []),
          ),
          filterNil(),
          tapResponse({
            next: (newLink) =>
              patchState(state, {
                createLinkState: 'success',
                graph: {
                  nodes: state.graph()?.nodes ?? [],
                  links: [...(state.graph()?.links ?? []), newLink],
                },
              }),
            error: (err: HttpErrorResponse) => {
              patchState(state, { createLinkState: 'error' });
              toastService.addToast(httpErrorToast(err));
            },
          }),
        ),
      ),
      deleteConnection: rxMethod<number | undefined>(
        pipe(
          filterNil(),
          switchMap((id) => relationshipService.delete(id).pipe(map(() => id))),
          tapResponse({
            next: (id) =>
              patchState(state, {
                graph: {
                  nodes: state.graph()?.nodes ?? [],
                  links: (state.graph()?.links ?? []).filter(
                    (link) => link.id !== id,
                  ),
                },
              }),
            error: (err: HttpErrorResponse) => {
              toastService.addToast(httpErrorToast(err));
            },
          }),
        ),
      ),
    };
  }),
);
