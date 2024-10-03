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
import { withQuery } from 'src/utils/signalStoreFeatures/requestFeatures/withQuery';
import { Login } from '../_models/login';
import { UserData } from '../_models/token';
import { TokenService } from '../_services/utils/token.service';

export type AuthStoreType = InstanceType<typeof AuthStore>;

export const AuthStore = signalStore(
  { providedIn: 'root' },
  withDevtools('Auth'),
  withQuery<UserData, Login, 'login'>('login', (login: Login) => {
    const tokenService = inject(TokenService);
    return tokenService
      .login(login)
      .pipe(tap((data) => tokenService.storeUserData(data)));
  }),
  withComputed((store) => {
    const userData = store.loginData;

    return {
      userName: computed(() => userData()?.userName),
      isGlobalAdmin: computed(
        () => (userData()?.isAdmin || userData()?.isSuperUser) ?? false,
      ),
    };
  }),
  withMethods((store) => {
    const userData = store.loginData;
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
        patchState(store, { loginData: TokenService.getUserData() });
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
