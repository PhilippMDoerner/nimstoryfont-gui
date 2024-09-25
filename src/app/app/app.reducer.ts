import {
  Action,
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import { ConfigTableData } from '../../design/templates/_models/config-table';
import { PermissionGroup } from '../_models/auth';
import {
  Campaign,
  CampaignOverview,
  WikiStatistics,
} from '../_models/campaign';
import { SpecialLoginState } from '../_models/login';
import { ExtendedMap } from '../_models/map';
import { OverviewItem } from '../_models/overview';
import { User } from '../_models/user';
import {
  clearCurrentCampaign,
  createConfigTableEntrySuccess,
  deleteConfigTableEntrySuccess,
  deleteMapSuccess,
  loadCampaignDetailSetSuccess,
  loadCampaignSetFailure,
  loadCampaignSetSuccess,
  loadConfigTableEntriesFailure,
  loadConfigTableEntriesSuccess,
  loadCurrentUserSuccess,
  loadMapFailure,
  loadMapOverviewItemsFailure,
  loadMapOverviewItemsSuccess,
  loadMapSuccess,
  loadRecentlyUpdatedArticlesFailure,
  loadRecentlyUpdatedArticlesSuccess,
  loadSiteStatisticsSuccess,
  loadSiteUserGroupsSuccess,
  loadSiteUsersSuccess,
  resetPassword,
  resetPasswordFailure,
  resetPasswordSuccess,
  resetRecentlyUpdatedArticleLoadState,
  setCurrentCampaign as setCurrentCampaignName,
} from './app.actions';

export const APP_STORE = 'app';

export interface AppState {
  campaignSet: CampaignOverview[];
  campaignDetailSet?: Campaign[];
  currentCampaignName?: string;
  mapOverviewItems: OverviewItem[];
  map?: ExtendedMap;
  recentlyUpdatedArticles: OverviewItem[];
  canLoadMoreRecentlyUpdatedArticles: boolean;
  resetErrorMessage?: string;
  specialLoginState?: SpecialLoginState;
  configTableEntries: ConfigTableData;
  currentUser?: User;
  siteUsers?: User[];
  siteStatistics?: WikiStatistics;
  siteUserGroups?: PermissionGroup[];
}

const initialState: AppState = {
  campaignSet: [],
  currentCampaignName: undefined,
  mapOverviewItems: [],
  map: undefined,
  recentlyUpdatedArticles: [],
  resetErrorMessage: undefined,
  specialLoginState: undefined,
  canLoadMoreRecentlyUpdatedArticles: true,
  configTableEntries: {},
  currentUser: undefined,
  siteStatistics: undefined,
  campaignDetailSet: undefined,
  siteUserGroups: undefined,
  siteUsers: undefined,
};

const reducer = createReducer(
  initialState,
  on(
    loadCampaignSetSuccess,
    (state, { data: campaigns }): AppState => ({
      ...state,
      campaignSet: [...campaigns],
    }),
  ),
  on(
    loadCampaignSetFailure,
    (state, { error }): AppState => ({
      ...state,
      campaignSet: [],
    }),
  ),
  on(
    setCurrentCampaignName,
    (state, { campaignName }): AppState => ({
      ...state,
      currentCampaignName: campaignName,
    }),
  ),
  on(
    resetPassword,
    resetPasswordSuccess,
    (state): AppState => ({
      ...state,
      resetErrorMessage: undefined,
    }),
  ),
  on(
    resetPasswordFailure,
    (state, { error }): AppState => ({
      ...state,
      resetErrorMessage: error.message,
    }),
  ),
  on(
    clearCurrentCampaign,
    (state): AppState => ({
      ...state,
      currentCampaignName: undefined,
    }),
  ),
  on(
    loadMapOverviewItemsSuccess,
    (state, { mapOverviewItems }): AppState => ({
      ...state,
      mapOverviewItems: [...mapOverviewItems],
    }),
  ),
  on(
    loadMapOverviewItemsFailure,
    (state): AppState => ({
      ...state,
      mapOverviewItems: [],
    }),
  ),
  on(
    loadMapSuccess,
    (state, { map }): AppState => ({
      ...state,
      map: { ...map },
    }),
  ),
  on(
    loadMapFailure,
    deleteMapSuccess,
    (state): AppState => ({
      ...state,
      map: undefined,
    }),
  ),
  on(
    loadRecentlyUpdatedArticlesSuccess,
    (state, { recentlyUpdatedArticles }): AppState => ({
      ...state,
      recentlyUpdatedArticles: recentlyUpdatedArticles,
      canLoadMoreRecentlyUpdatedArticles: !!recentlyUpdatedArticles,
    }),
  ),
  on(
    loadRecentlyUpdatedArticlesFailure,
    (state): AppState => ({
      ...state,
      recentlyUpdatedArticles: [],
    }),
  ),
  on(
    resetRecentlyUpdatedArticleLoadState,
    (state): AppState => ({
      ...state,
      canLoadMoreRecentlyUpdatedArticles: true,
    }),
  ),
  on(loadConfigTableEntriesSuccess, (state, { table, entries }): AppState => {
    const newConfigTableEntries = {
      ...state.configTableEntries,
      [table]: entries,
    };

    return {
      ...state,
      configTableEntries: newConfigTableEntries,
    };
  }),
  on(
    loadConfigTableEntriesFailure,
    (state, { table }): AppState => ({
      ...state,
      configTableEntries: {
        ...state.configTableEntries,
        [table]: undefined,
      },
    }),
  ),
  on(deleteConfigTableEntrySuccess, (state, { table, entryId }): AppState => {
    const entries = state.configTableEntries[table];
    const newEntries = entries?.filter((entry) => entry.id === entryId);

    const newConfigTableEntries = {
      ...state.configTableEntries,
      [table]: newEntries,
    };

    return {
      ...state,
      configTableEntries: newConfigTableEntries,
    };
  }),
  on(createConfigTableEntrySuccess, (state, { table, entry }): AppState => {
    const entries = state.configTableEntries[table];
    entries?.push(entry);

    return {
      ...state,
      configTableEntries: {
        ...state.configTableEntries,
        [table]: entries,
      },
    };
  }),
  on(
    loadCurrentUserSuccess,
    (state, user): AppState => ({
      ...state,
      currentUser: user,
    }),
  ),
  on(
    loadCampaignDetailSetSuccess,
    (state, { data: campaigns }): AppState => ({
      ...state,
      campaignDetailSet: campaigns,
    }),
  ),
  on(
    loadSiteStatisticsSuccess,
    (state, { statistics }): AppState => ({
      ...state,
      siteStatistics: statistics,
    }),
  ),
  on(
    loadSiteUserGroupsSuccess,
    (state, { data: groups }): AppState => ({
      ...state,
      siteUserGroups: groups,
    }),
  ),
  on(
    loadSiteUsersSuccess,
    (state, { users }): AppState => ({
      ...state,
      siteUsers: users,
    }),
  ),
);

export const appReducer = (
  state: AppState | undefined,
  action: Action,
): AppState => reducer(state, action);

// SELECTORS
export const selectCampaignState = createFeatureSelector<AppState>(APP_STORE);
export const selectMapOverviewItems = createSelector(
  selectCampaignState,
  (state: AppState): OverviewItem[] =>
    state?.mapOverviewItems as OverviewItem[],
);
export const selectMap = createSelector(
  selectCampaignState,
  (state: AppState): ExtendedMap => state?.map as ExtendedMap,
);
export const selectCampaigns = createSelector(
  selectCampaignState,
  (state: AppState) => state?.campaignSet,
);
export const selectCurrentCampaignName = createSelector(
  selectCampaignState,
  (state: AppState) => state?.currentCampaignName,
);
export const selectCurrentCampaign = createSelector(
  selectCampaignState,
  (state: AppState): CampaignOverview | undefined => {
    const campaignName = state.currentCampaignName;
    return state.campaignSet.find((campaign) => campaign.name === campaignName);
  },
);
export const selectRecentlyUpdatedArticles = createSelector(
  selectCampaignState,
  (state: AppState): OverviewItem[] =>
    state?.recentlyUpdatedArticles as OverviewItem[],
);
export const selectSpecialLoginState = createSelector(
  selectCampaignState,
  (state: AppState): SpecialLoginState | undefined => state?.specialLoginState,
);
export const selectResetPasswordErrorMessage = createSelector(
  selectCampaignState,
  (state: AppState): string | undefined => state?.resetErrorMessage,
);
export const selectCanLoadMoreArticles = createSelector(
  selectCampaignState,
  (state: AppState): boolean => state?.canLoadMoreRecentlyUpdatedArticles,
);
export const selectConfigTableData = createSelector(
  selectCampaignState,
  (state: AppState): ConfigTableData => state?.configTableEntries,
);
export const selectCurrentUser = createSelector(
  selectCampaignState,
  (state: AppState): User | undefined => state?.currentUser,
);
export const selectAllSiteUsers = createSelector(
  selectCampaignState,
  (state: AppState): User[] | undefined => state?.siteUsers,
);
export const selectAllSiteCampaigns = createSelector(
  selectCampaignState,
  (state: AppState): Campaign[] | undefined => state.campaignDetailSet,
);
export const selectAllSiteGroups = createSelector(
  selectCampaignState,
  (state: AppState): PermissionGroup[] | undefined => state?.siteUserGroups,
);
export const selectSiteStatistics = createSelector(
  selectCampaignState,
  (state: AppState): WikiStatistics | undefined => state.siteStatistics,
);
