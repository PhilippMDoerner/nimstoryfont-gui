import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { take } from 'rxjs';
import { PermissionGroup } from 'src/app/_models/auth';
import {
  BaseCampaignData,
  Campaign,
  CampaignRaw,
  WikiStatistics,
} from 'src/app/_models/campaign';
import { errorToast } from 'src/app/_models/toast';
import { User, UserRaw } from 'src/app/_models/user';
import { GroupService } from 'src/app/_services/article/group.service';
import { UserService } from 'src/app/_services/article/user.service';
import { AdminService } from 'src/app/_services/utils/admin.service';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { replaceItem } from 'src/utils/array';

export type SiteAdministrationPageState = {
  allSiteUsers: User[] | undefined;
  allSiteCampaigns: Campaign[] | undefined;
  allPermissionGroups: PermissionGroup[] | undefined;
  siteStatistics: WikiStatistics | undefined;
};

const initialState: SiteAdministrationPageState = {
  allSiteUsers: undefined,
  allSiteCampaigns: undefined,
  allPermissionGroups: undefined,
  siteStatistics: undefined,
};

export const SiteAdministrationPageStore = signalStore(
  withState(initialState),
  withMethods((state) => {
    const userService = inject(UserService);
    const groupService = inject(GroupService);
    const campaignService = inject(CampaignService);
    const adminService = inject(AdminService);
    const toastService = inject(ToastService);

    return {
      loadUsers: () => {
        patchState(state, { allSiteUsers: undefined });
        userService
          .list()
          .pipe(take(1))
          .subscribe((users) => patchState(state, { allSiteUsers: users }));
      },
      loadCampaigns: () => {
        patchState(state, { allSiteCampaigns: undefined });
        campaignService
          .list()
          .pipe(take(1))
          .subscribe((campaigns) =>
            patchState(state, { allSiteCampaigns: campaigns }),
          );
      },
      loadGroups: () => {
        patchState(state, { allPermissionGroups: undefined });
        groupService
          .list()
          .pipe(take(1))
          .subscribe((groups) =>
            patchState(state, { allPermissionGroups: groups }),
          );
      },
      loadStatistics: () => {
        patchState(state, { siteStatistics: undefined });
        adminService
          .getStatistics()
          .pipe(take(1))
          .subscribe((statistics) =>
            patchState(state, { siteStatistics: statistics }),
          );
      },
      createCampaign(campaign: BaseCampaignData): void {
        const requestData: CampaignRaw = {
          background_image: campaign.background_image as string,
          has_audio_recording_permission: false,
          is_deactivated: false,
          name: campaign.name,
          default_map_id: undefined,
          icon: campaign.icon,
          subtitle: campaign.subtitle,
        };
        campaignService
          .create(requestData)
          .pipe(take(1))
          .subscribe((campaign) =>
            patchState(state, {
              allSiteCampaigns: [campaign, ...(state.allSiteCampaigns() ?? [])],
            }),
          );
      },
      addUserToGroup(user: User, groupId: number): void {
        const newUserState: User = {
          ...user,
          groups: [...(user.groups ?? []), groupId],
        };
        userService
          .updateUserGroups(newUserState)
          .pipe(take(1))
          .subscribe((updatedUser) => {
            const newList = replaceItem(
              state.allSiteUsers() ?? [],
              updatedUser,
              'pk',
            );
            patchState(state, { allSiteUsers: newList });
          });
      },
      removeUserFromGroup(user: User, groupId: number): void {
        const newUserState: User = {
          ...user,
          groups: user.groups?.filter((id) => id !== groupId),
        };
        userService
          .updateUserGroups(newUserState)
          .pipe(take(1))
          .subscribe((updatedUser) => {
            const newList = replaceItem(
              state.allSiteUsers() ?? [],
              updatedUser,
              'pk',
            );
            patchState(state, { allSiteUsers: newList });
          });
      },
      startDatabaseDownload: (): void => {
        adminService
          .downloadDatabase()
          .pipe(take(1))
          .subscribe({
            next: (dataBlob: Blob) => {
              const a = document.createElement('a');
              const blobAsFileUrl = URL.createObjectURL(dataBlob);
              a.href = blobAsFileUrl;
              a.download = 'db.sqlite3';
              a.click();
              URL.revokeObjectURL(blobAsFileUrl);
            },
            error: (err: HttpErrorResponse) =>
              toastService.addToast(errorToast(err)),
          });
      },
      createUser: (user: User): void => {
        userService
          .create(user as UserRaw)
          .pipe(take(1))
          .subscribe((createdUser) =>
            patchState(state, {
              allSiteUsers: [createdUser, ...(state.allSiteUsers() ?? [])],
            }),
          );
      },
      deleteUser: (user: User): void => {
        userService
          .delete(user.pk as number)
          .pipe(take(1))
          .subscribe(() =>
            patchState(state, {
              allSiteUsers: state
                .allSiteUsers()
                ?.filter((u) => u.pk !== user.pk),
            }),
          );
      },
    };
  }),
);
