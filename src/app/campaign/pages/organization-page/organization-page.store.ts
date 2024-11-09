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
import { shareReplay, switchMap } from 'rxjs';
import { Organization } from 'src/app/_models/organization';
import { OrganizationService } from 'src/app/_services/article/organization.service';
import { GlobalStore } from 'src/app/global.store';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { replaceItem } from 'src/utils/array';
import { filterNil } from 'src/utils/rxjs-operators';
import { RequestState } from 'src/utils/store/factory-types';
import { handleError } from 'src/utils/store/toServerModel';
import { withImages } from 'src/utils/store/withImages';
import { withQueries } from 'src/utils/store/withQueries';
import { withUpdates } from 'src/utils/store/withUpdates';

interface OrganizationState {
  organizationDeleteState: RequestState;
}

const initialState: OrganizationState = {
  organizationDeleteState: 'init',
};

export const OrganizationStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(() => {
    const globalStore = inject(GlobalStore);
    return {
      hasWritePermission: globalStore.hasRoleOrBetter('member'),
    };
  }),
  withQueries(() => {
    const organizationService = inject(OrganizationService);
    const globalStore = inject(GlobalStore);

    const campaignName$ = toObservable(globalStore.campaignName).pipe(
      filterNil(),
      shareReplay(1),
    );

    return {
      organization: (name: string) =>
        campaignName$.pipe(
          switchMap((campaignName) =>
            organizationService.readByParam(campaignName, { name }),
          ),
        ),
    };
  }),
  withImages('organization', {
    onCreateSuccess: (state, newImg) => {
      const newOrg = {
        ...(state.organization() as Organization),
        images: [...(state.organization()?.images ?? []), newImg],
      };
      patchState(state, { organization: newOrg });
    },
    onUpdateSuccess: (state, newImg) => {
      const newOrg = {
        ...(state.organization() as Organization),
        images: replaceItem(state.organization()?.images ?? [], newImg, 'pk'),
      };
      patchState(state, { organization: newOrg });
    },
    onDeleteSuccess: (state, imgPk) => {
      const newOrg = {
        ...(state.organization() as Organization),
        images:
          state.organization()?.images?.filter((img) => img.pk !== imgPk) ?? [],
      };
      patchState(state, { organization: newOrg });
    },
  }),
  withState(initialState),
  withMethods((state) => {
    const organizationService = inject(OrganizationService);
    const toastService = inject(ToastService);

    return {
      reset: () =>
        patchState(state, {
          organizationDeleteState: 'init',
          organization: undefined,
          organizationError: undefined,
          organizationQueryState: 'init',
        }),
      deleteOrganization: (pk: number) => {
        patchState(state, {
          organizationDeleteState: 'loading',
        });
        organizationService.delete(pk).subscribe({
          next: () => {
            patchState(state, {
              organizationDeleteState: 'success',
            });
          },
          error: (err: HttpErrorResponse) =>
            handleError(state, err, toastService),
        });
      },
    };
  }),
  withUpdates(() => {
    const organizationService = inject(OrganizationService);
    return {
      organization: (update: Organization) =>
        organizationService.update(update.pk!, update),
    };
  }),
);
