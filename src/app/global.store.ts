import { isPlatformServer } from '@angular/common';
import {
  computed,
  effect,
  ElementRef,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Observable, of, take } from 'rxjs';
import { ToastService } from 'src/app/design/organisms/toast-overlay/toast-overlay.component';
import { CampaignOverview } from './_models/campaign';
import { CampaignRole } from './_models/token';
import { OnlineService } from './_services/online.service';
import { CampaignService } from './_services/utils/campaign.service';
import { GlobalUrlParamsService } from './_services/utils/global-url-params.service';
import { TokenService } from './_services/utils/token.service';
import { AuthStore } from './auth.store';

export type ContentScrollEvent = CustomEvent<
  Event & { pageElement: ElementRef<HTMLDivElement> }
>;
export type ScreenSize = {
  width: number;
  height: number;
};

export function hasRoleOrBetter(
  role: CampaignRole,
  minimumRole: CampaignRole,
): boolean {
  switch (minimumRole) {
    case 'member':
      return ['member', 'admin'].includes(role);
    case 'admin':
      return role === 'admin';
    case 'guest':
      return ['member', 'admin', 'guest'].includes(role);
    default:
      return false;
  }
}

export type GlobalState = {
  currentCampaign: CampaignOverview | undefined;
  campaigns: CampaignOverview[] | undefined;
  contentScrollEvents: ContentScrollEvent | undefined;
};

const SSRDefaultScreenSize$: Observable<ScreenSize> = of({
  height: 600,
  width: 600,
});

const initialAuthState: GlobalState = {
  contentScrollEvents: undefined,
  currentCampaign: undefined,
  campaigns: undefined,
};

export const GlobalStore = signalStore(
  withState(initialAuthState),
  withComputed((state) => {
    const isInServer = isPlatformServer(inject(PLATFORM_ID));
    const authStore = inject(AuthStore);

    const screenSize$ = isInServer
      ? SSRDefaultScreenSize$
      : new Observable<ScreenSize>((observer) => {
          const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
              observer.next({
                width: entry.contentRect.width,
                height: entry.contentRect.height,
              });
            }
          });

          resizeObserver.observe(document.body);

          return () => resizeObserver.disconnect();
        });
    return {
      screenSize: toSignal(screenSize$),
      campaignName: computed(() => state.currentCampaign()?.name),
      currentCampaignRole: computed(() => {
        const currentCampaign = state.currentCampaign();
        if (currentCampaign == null) return undefined;
        return authStore.getCampaignRole(currentCampaign.name);
      }),
    };
  }),
  withMethods((state) => {
    const tokenService = inject(TokenService);
    const campaignService = inject(CampaignService);
    const toastService = inject(ToastService);
    const isOnline = toSignal(inject(OnlineService).online$);
    const authStore = inject(AuthStore);

    return {
      isCampaignMember: (campaignName?: string): boolean => {
        campaignName = campaignName ?? state.campaignName();
        const userData = authStore.authData();
        if (userData == null) return false;
        const role = tokenService.getCampaignRole(userData, campaignName);
        return authStore.isGlobalAdmin() || role === 'guest';
      },
      isCampaignAdmin: (campaignName?: string): boolean => {
        campaignName = campaignName ?? state.campaignName();
        const userData = authStore.authData();
        if (userData == null) return false;
        const role = tokenService.getCampaignRole(userData, campaignName);
        return authStore.isGlobalAdmin() || role === 'admin';
      },
      isCampaignGuest: (campaignName?: string): boolean => {
        campaignName = campaignName ?? state.campaignName();
        const userData = authStore.authData();
        if (userData == null) return false;
        const role = tokenService.getCampaignRole(userData, campaignName);
        return authStore.isGlobalAdmin() || role === 'guest';
      },
      canPerformActionsOfRole: (minimumRole: CampaignRole) => {
        const hasRolePermissions = computed<boolean>(() => {
          const currentRole = state.currentCampaignRole();
          if (currentRole == null) return false;
          return hasRoleOrBetter(currentRole, minimumRole);
        });
        return computed<boolean>(() => hasRolePermissions() && !!isOnline());
      },
      loadCampaignOverview: () => {
        campaignService
          .campaignOverview()
          .pipe(take(1))
          .subscribe((campaigns) =>
            patchState(state, { campaigns: campaigns }),
          );
      },

      fireScrollEvent: (event: ContentScrollEvent) => {
        patchState(state, { contentScrollEvents: event });
      },
    };
  }),
  withHooks((store) => {
    const paramsService = inject(GlobalUrlParamsService);
    return {
      onInit: () => {
        const campaignParam$ =
          paramsService.campaignNameParam$.pipe(takeUntilDestroyed());
        const campaignParam = toSignal(campaignParam$);

        effect(() => {
          const campaigns = store.campaigns();
          const currentCampaignName = campaignParam();
          const currentCampaign = campaigns?.find(
            (campaign) => campaign.name === currentCampaignName,
          );
          patchState(store, { campaigns, currentCampaign });
        });
      },
    };
  }),
);
