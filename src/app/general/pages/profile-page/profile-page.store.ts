import { inject } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { EMPTY, switchMap, take } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/article/user.service';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { GlobalStore } from 'src/app/global.store';
import { CampaignMembership } from 'src/design/templates/_models/campaign-membership';
import { PasswordModel } from 'src/design/templates/profile/profile.component';
import { filterNil } from 'src/utils/rxjs-operators';

export type ProfilePageState = {
  user: User | undefined;
};

const iniitalState: ProfilePageState = {
  user: undefined,
};

export const ProfilePageStore = signalStore(
  withState(iniitalState),
  withMethods((state) => {
    const globalStore = inject(GlobalStore);
    const userService = inject(UserService);

    const currentUserPk$ = toObservable(globalStore.currentUserPk).pipe(
      filterNil(),
      take(1),
    );
    return {
      loadThisUser: () => {
        patchState(state, { user: undefined });
        currentUserPk$
          .pipe(
            switchMap((userPK) => userService.read(userPK)),
            take(1),
          )
          .subscribe((user) => patchState(state, { user }));
      },
      profileUpdate: (profile: Partial<User>) => {
        currentUserPk$
          .pipe(
            switchMap((userPk) => userService.patchUser(userPk, profile)),
            take(1),
          )
          .subscribe((user) => patchState(state, { user }));
      },
      passwordUpdate: (passwordModel: PasswordModel) => {
        currentUserPk$
          .pipe(
            switchMap((userPk) => userService.patchUser(userPk, passwordModel)),
            take(1),
          )
          .subscribe((user) => patchState(state, { user }));
      },
      profileDelete: () => {
        currentUserPk$
          .pipe(
            switchMap((userPk) => userService.delete(userPk)),
            take(1),
          )
          .subscribe(() => globalStore.logout());
      },
    };
  }),
  withMethods((state) => {
    const campaignService = inject(CampaignService);
    const user$ = toObservable(state.user).pipe(filterNil(), take(1));
    return {
      leaveCampaign: (membership: CampaignMembership) => {
        user$
          .pipe(
            switchMap((user) => {
              switch (membership.role) {
                case 'member':
                  return campaignService.removeMember(
                    membership.campaignName,
                    user,
                  );
                case 'admin':
                  return campaignService.removeAdmin(
                    membership.campaignName,
                    user,
                  );
                case 'guest':
                  return campaignService.removeGuest(
                    membership.campaignName,
                    user,
                  );
                default:
                  return EMPTY;
              }
            }),
            take(1),
          )
          .subscribe(() => state.loadThisUser());
      },
    };
  }),
);