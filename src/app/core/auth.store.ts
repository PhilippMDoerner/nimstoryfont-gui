import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
} from '@ngrx/signals';
import { tap } from 'rxjs';
import { withDevtools } from 'src/utils/signalStoreFeatures/devtools/withDevtools';
import {
  getQueryData,
  setQueryData,
  withQuery,
} from 'src/utils/signalStoreFeatures/requestFeatures/withQuery';
import { Login } from '../_models/login';
import { UserData } from '../_models/token';
import { TokenService } from '../_services/utils/token.service';

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withDevtools('Auth'),
  withQuery('login', (login: Login) => {
    const tokenService = inject(TokenService);
    return tokenService
      .login(login)
      .pipe(tap((data) => tokenService.setUserData(data)));
  }),
  withComputed((store) => {
    const userData = getQueryData<UserData>(store, 'login');

    return {
      userName: computed(() => userData()?.userName),
      isGlobalAdmin: computed(
        () => (userData()?.isAdmin || userData()?.isSuperUser) ?? false,
      ),
    };
  }),
  withMethods((store) => {
    const userData = getQueryData<UserData>(store, 'login');
    const tokenService = inject(TokenService);
    return {
      canWriteInCampaign: (name: string) => canWrite(userData(), name),
      canReadInCampaign: (name: string) => canRead(userData(), name),
      hasCampaignAdminRights: (name?: string) => isAdmin(userData(), name),
      logout: () => {
        tokenService.invalidateJWTToken();
        tokenService.removeJWTTokenFromLocalStorage();
      },
      login: (data: Login) => tokenService.login(data),
    };
  }),
  withHooks((store) => {
    return {
      onInit() {
        patchState(store, {
          ...setQueryData('login', TokenService.getUserData()),
        });
      },
    };
  }),
);

function isAdmin(
  userData: UserData | undefined,
  campaignName: string | undefined,
) {
  if (userData == null) return false;
  if (userData.isAdmin || userData.isSuperUser) return true;
  if (!campaignName) return false;
  const role = userData.campaignMemberships[campaignName];

  switch (role) {
    case 'admin':
      return true;
    default:
      return false;
  }
}

function canWrite(
  userData: UserData | undefined,
  campaignName: string | undefined,
): boolean {
  if (userData == null) return false;
  if (userData.isAdmin || userData.isSuperUser) return true;
  if (!campaignName) return false;

  const role = userData.campaignMemberships[campaignName];
  switch (role) {
    case 'member':
    case 'admin':
    case 'globalmember':
      return true;
    case 'guest':
    case 'globalguest':
    default:
      return false;
  }
}

function canRead(
  userData: UserData | undefined,
  campaignName: string | undefined,
): boolean {
  if (userData == null) return false;
  if (userData.isAdmin || userData.isSuperUser) return true;
  if (!campaignName) return false;
  const role = userData.campaignMemberships[campaignName];
  switch (role) {
    case 'member':
    case 'admin':
    case 'globalmember':
    case 'guest':
    case 'globalguest':
      return true;
    default:
      return false;
  }
}
