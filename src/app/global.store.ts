import { computed, effect, inject } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { firstValueFrom, Observable, shareReplay, take } from 'rxjs';
import { log } from 'src/utils/logging';
import { CampaignOverview } from './_models/campaign';
import { Login } from './_models/login';
import { CampaignRole, TokenData, UserData } from './_models/token';
import { RoutingService } from './_services/routing.service';
import { CampaignService } from './_services/utils/campaign.service';
import { GlobalUrlParamsService } from './_services/utils/global-url-params.service';
import { TokenService } from './_services/utils/token.service';

export type GlobalState = {
  userData: UserData | undefined;
  currentCampaign: CampaignOverview | undefined;
  campaigns: CampaignOverview[] | undefined;
};

function isTokenExpired(token: TokenData | undefined): boolean {
  if (token == null) return true;

  const expiryTimestamp = token.exp;
  const currentTimestamp = Math.floor(new Date().getTime() / 1000);

  const isExpired = currentTimestamp >= expiryTimestamp;
  if (isExpired) {
    const currentDate = new Date(currentTimestamp * 1000).toString();
    const expiryDate = new Date(expiryTimestamp * 1000).toString();
    const tokenName = token.type.toLocaleUpperCase();
    console.log(`
      ${tokenName} Token is expired. 
      Request timestamp: ${currentDate}. 
      Token expiry timestamp: ${expiryDate}
    `);
  }
  return isExpired;
}

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

const initialAuthState: GlobalState = {
  userData: undefined,
  currentCampaign: undefined,
  campaigns: undefined,
};

export const GlobalStore = signalStore(
  withState(initialAuthState),
  withComputed((state) => {
    const tokenService = inject(TokenService);
    return {
      campaignName: computed(() => state.currentCampaign()?.name),
      currentCampaignRole: computed(() => {
        const currentCampaign = state.currentCampaign();
        const userData = state.userData();
        if (currentCampaign == null || userData == null) return undefined;
        return tokenService.getCampaignRole(userData, currentCampaign.name);
      }),
      isGlobalAdmin: computed(
        () => state.userData()?.isAdmin || state.userData()?.isSuperUser,
      ),
      currentUserName: computed(() => state.userData()?.userName),
      currentUserPk: computed(() => state.userData()?.userId),
      refreshToken: computed(() => state.userData()?.refreshToken),
      accessToken: computed(() => state.userData()?.accessToken),
      hasTokens: computed(
        () =>
          !!state.userData()?.accessToken && !!state.userData()?.refreshToken,
      ),
      hasValidJWTToken: computed(() => {
        const accessToken = state.userData()?.accessToken;
        const refreshToken = state.userData()?.refreshToken;
        const hasTokens = !!accessToken && !!refreshToken;
        if (!hasTokens) return false;

        return !isTokenExpired(accessToken);
      }),
    };
  }),
  withMethods((state) => {
    const tokenService = inject(TokenService);
    const campaignService = inject(CampaignService);
    return {
      login: async (loginData: Login) => {
        const userData = await firstValueFrom(tokenService.login(loginData));
        patchState(state, { userData: userData });
      },
      refreshUserData: () => {
        const refresh$ = (
          tokenService.refreshUserData() as Observable<UserData>
        ).pipe(take(1), shareReplay(1));

        refresh$.subscribe((userData) =>
          patchState(state, { userData: userData }),
        );

        return refresh$;
      },
      logout: () => {
        tokenService.logout();
        patchState(state, { userData: undefined });
      },
      isCampaignMember: (campaignName?: string): boolean => {
        campaignName = campaignName ?? state.campaignName();
        const userData = state.userData();
        if (userData == null) return false;
        const role = tokenService.getCampaignRole(userData, campaignName);
        return state.isGlobalAdmin() || role === 'guest';
      },
      isCampaignAdmin: (campaignName?: string): boolean => {
        campaignName = campaignName ?? state.campaignName();
        const userData = state.userData();
        if (userData == null) return false;
        const role = tokenService.getCampaignRole(userData, campaignName);
        return state.isGlobalAdmin() || role === 'admin';
      },
      isCampaignGuest: (campaignName?: string): boolean => {
        campaignName = campaignName ?? state.campaignName();
        const userData = state.userData();
        if (userData == null) return false;
        const role = tokenService.getCampaignRole(userData, campaignName);
        return state.isGlobalAdmin() || role === 'guest';
      },
      loadCampaignOverview: () => {
        campaignService
          .campaignOverview()
          .pipe(take(1))
          .subscribe((campaigns) =>
            patchState(state, { campaigns: campaigns }),
          );
      },
      hasRoleOrBetter: (minimumRole: CampaignRole) => {
        return computed(() => {
          const currentRole = state.currentCampaignRole();
          if (currentRole == null) return false;
          return hasRoleOrBetter(currentRole, minimumRole);
        });
      },
    };
  }),
  withHooks((store) => {
    const tokenService = inject(TokenService);
    const routingService = inject(RoutingService);
    const paramsService = inject(GlobalUrlParamsService);
    return {
      onInit: () => {
        log('GlobalStore', store);
        const localUserData = TokenService.getUserData();
        patchState(store, { userData: localUserData });
        effect(() => tokenService.setUserData(store.userData()));
        effect(() => {
          if (store.userData() != null) return;
          routingService.routeToPath('login');
        });

        const campaignParam$ =
          paramsService.campaignNameParam$.pipe(takeUntilDestroyed());
        const campaignParam = toSignal(campaignParam$);
        effect(
          () => {
            const campaigns = store.campaigns();
            const currentCampaignName = campaignParam();
            const currentCampaign = campaigns?.find(
              (campaign) => campaign.name === currentCampaignName,
            );
            patchState(store, { campaigns, currentCampaign });
          },
          { allowSignalWrites: true },
        );
      },
    };
  }),
);
