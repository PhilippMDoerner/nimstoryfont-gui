import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { combineLatest, firstValueFrom, Observable } from 'rxjs';
import { Campaign, WikiStatistics } from 'src/app/_models/campaign';
import { EmptySearchResponse } from 'src/app/_models/emptySearchResponse';
import { CampaignRole } from 'src/app/_models/token';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/article/user.service';
import { CampaignService } from 'src/app/_services/utils/campaign.service';
import { GlobalUrlParamsService } from 'src/app/_services/utils/global-url-params.service';
import { GlobalStore } from 'src/app/global.store';

export type CampaignAdminPageState = {
  campaign: Campaign | undefined;
  users: User[] | undefined;
  campaignStatistics: WikiStatistics | undefined;
};

const initialState: CampaignAdminPageState = {
  campaign: undefined,
  users: undefined,
  campaignStatistics: undefined,
};

export const CampaignAdminPageStore = signalStore(
  withState(initialState),
  withMethods((state) => {
    const userService = inject(UserService);
    const campaignService = inject(CampaignService);
    const paramsService = inject(GlobalUrlParamsService);
    const globalStore = inject(GlobalStore);

    return {
      initialize: async () => {
        const overviewCampaign = globalStore.currentCampaign();
        if (overviewCampaign == null) return;
        const { campaign, wikiStatistics, users } = await firstValueFrom(
          combineLatest({
            users: userService.list(),
            campaign: campaignService.read(overviewCampaign?.pk),
            wikiStatistics: campaignService.statistics(overviewCampaign.name),
          }),
        );
        patchState(state, {
          users,
          campaign,
          campaignStatistics: wikiStatistics,
        });
      },
      addMemberToCampaignGroup: async (role: CampaignRole, addedUser: User) => {
        const campaign = state.campaign();
        if (campaign == null) return;

        let newUsers$: Observable<User[]>;
        let newCampaign: Campaign;
        switch (role) {
          case 'admin':
            newUsers$ = campaignService.addAdmin(campaign.name, addedUser);
            newCampaign = {
              ...campaign,
              admins: [...(campaign.admins ?? []), addedUser],
            };
            break;
          case 'member':
            newUsers$ = campaignService.addMember(campaign.name, addedUser);
            newCampaign = {
              ...campaign,
              members: [...(campaign.members ?? []), addedUser],
            };
            break;
          case 'guest':
            newUsers$ = campaignService.addGuest(campaign.name, addedUser);
            newCampaign = {
              ...campaign,
              guests: [...(campaign.guests ?? []), addedUser],
            };
            break;
          default:
            return;
        }

        const newUsers = await firstValueFrom(newUsers$);
        patchState(state, { users: newUsers, campaign: newCampaign });
      },

      removeMemberFromCampaignGroup: async (role: CampaignRole, user: User) => {
        const campaign = state.campaign();
        if (campaign == null) return;

        let newUsers$: Observable<User[]>;
        let newCampaign: Campaign;
        switch (role) {
          case 'admin':
            newUsers$ = campaignService.removeAdmin(campaign.name, user);
            newCampaign = {
              ...campaign,
              admins: campaign.admins?.filter(
                (member) => member.pk !== user.pk,
              ),
            };
            break;
          case 'member':
            newUsers$ = campaignService.removeMember(campaign.name, user);
            newCampaign = {
              ...campaign,
              members: campaign.members?.filter(
                (member) => member.pk !== user.pk,
              ),
            };
            break;
          case 'guest':
            newUsers$ = campaignService.removeGuest(campaign.name, user);
            newCampaign = {
              ...campaign,
              guests: campaign.guests?.filter(
                (member) => member.pk !== user.pk,
              ),
            };
            break;
          default:
            return;
        }

        const newUsers = await firstValueFrom(newUsers$);
        patchState(state, { users: newUsers, campaign: newCampaign });
      },

      deleteEmptySearchResponse: (deleteItem: EmptySearchResponse) => {
        campaignService.deleteEmptySearchResponse(deleteItem.id);
        const campaign = state.campaign();
        if (campaign == null) return;

        const newCampaign: Campaign | undefined = {
          ...campaign,
          emptySearchResponses: campaign.emptySearchResponses?.filter(
            (item) => item.id !== deleteItem.id,
          ),
        };

        patchState(state, { campaign: newCampaign });
      },

      addEmptySearchResponse: (newItem: EmptySearchResponse) => {
        campaignService.addEmptySearchResponse(newItem);
        const campaign = state.campaign();
        if (campaign == null) return;

        const newCampaign: Campaign | undefined = {
          ...campaign,
          emptySearchResponses: [
            ...(campaign.emptySearchResponses ?? []),
            newItem,
          ],
        };

        patchState(state, { campaign: newCampaign });
      },
    };
  }),
);
