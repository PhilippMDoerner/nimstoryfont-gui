import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { campaignGuard } from '../_guards/campaign.guard';
import { CampaignOverviewRoute, CampaignRoute } from '../_models/route';
import { campaignResolver } from '../_resolvers/campaign.resolver';
import { siteUsersResolver } from '../_resolvers/users.resolver';
import { CharacterService } from '../_services/article/character.service';
import { CreatureService } from '../_services/article/creature.service';
import { DiaryentryService } from '../_services/article/diaryentry.service';
import { ItemService } from '../_services/article/item.service';
import { LocationService } from '../_services/article/location.service';
import { OrganizationService } from '../_services/article/organization.service';
import {
  mapDefaultResolver,
  mapOverviewResolver,
  mapResolver,
} from './_resolvers/map.resolver';
import { recentlyUpdatedArticleResolver } from './_resolvers/recently-updated-article.resolver';
import { statisticsResolver } from './_resolvers/statistics.resolver';
import { CampaignAdminPageComponent } from './pages/campaign-admin-page/campaign-admin-page.component';
import { CampaignUpdatePageComponent } from './pages/campaign-update-page/campaign-update-page.component';
import { GeneralOverviewPageComponent } from './pages/general-overview-page/general-overview-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

const innerCampaignOverviewRoutes: CampaignOverviewRoute[] = [
  {
    path: 'character',
    component: GeneralOverviewPageComponent,
    canActivate: [campaignGuard],
    data: {
      name: 'character-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'CHARACTER',
    },
    resolve: {
      charactersResolver: (route: ActivatedRouteSnapshot) =>
        inject(CharacterService).loadCampaignList(route.params['campaign']),
    },
  },
  {
    path: 'creature',
    component: GeneralOverviewPageComponent,
    canActivate: [campaignGuard],
    data: {
      name: 'creature-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'CREATURE',
    },
    resolve: {
      charactersResolver: (route: ActivatedRouteSnapshot) =>
        inject(CreatureService).loadCampaignList(route.params['campaign']),
    },
  },
  {
    path: 'diaryentry',
    component: GeneralOverviewPageComponent,
    canActivate: [campaignGuard],
    data: {
      name: 'diaryentry-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'DIARYENTRY',
    },
    resolve: {
      charactersResolver: (route: ActivatedRouteSnapshot) =>
        inject(DiaryentryService).loadCampaignList(route.params['campaign']),
    },
  },
  {
    path: 'item',
    component: GeneralOverviewPageComponent,
    canActivate: [campaignGuard],
    data: {
      name: 'item-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'ITEM',
    },
    resolve: {
      charactersResolver: (route: ActivatedRouteSnapshot) =>
        inject(ItemService).loadCampaignList(route.params['campaign']),
    },
  },
  {
    path: 'location',
    component: GeneralOverviewPageComponent,
    canActivate: [campaignGuard],
    data: {
      name: 'location-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'LOCATION',
    },
    resolve: {
      charactersResolver: (route: ActivatedRouteSnapshot) =>
        inject(LocationService).loadCampaignList(route.params['campaign']),
    },
  },
  {
    path: 'organization',
    component: GeneralOverviewPageComponent,
    canActivate: [campaignGuard],
    data: {
      name: 'organization-overview',
      requiredMinimumRole: 'guest',
      overviewType: 'ORGANIZATION',
    },
    resolve: {
      charactersResolver: (route: ActivatedRouteSnapshot) =>
        inject(OrganizationService).loadCampaignList(route.params['campaign']),
    },
  },
];

const innerCampaignRoutes: CampaignRoute[] = [
  //Campaign Admin Routes
  {
    path: `admin`,
    component: CampaignAdminPageComponent,
    data: { name: 'campaign-admin', requiredMinimumRole: 'admin' },
    resolve: {
      campaignResolver,
      statisticsResolver,
      siteUsersResolver,
    },
  },
  {
    path: 'admin/update',
    component: CampaignUpdatePageComponent,
    data: { name: 'campaign-update', requiredMinimumRole: 'admin' },
    resolve: {
      mapOverviewResolver,
      campaignResolver,
    },
  },
  //Home Routes
  {
    path: `home`,
    component: HomePageComponent,
    data: { name: 'home', requiredMinimumRole: 'guest' },
    resolve: {
      recentlyUpdatedArticleResolver,
    },
  },
  // Character Routes
  // Map Routes
  // {
  // 	path: `map/create`,
  // 	component: MapUpdateComponent,
  // 	data:{ name: "map-create", requiredRole: CampaignRole.MEMBER},
  // 	resolve: {
  // 		campaign: CampaignResolver,
  // 		modelData: MapUpdateResolver,
  // 	}
  // },
  {
    path: `map/default`,
    component: MapPageComponent,
    data: { name: 'default-map', requiredMinimumRole: 'guest' },
    resolve: {
      mapDefaultResolver,
    },
  },
  {
    path: `map/:name`,
    component: MapPageComponent,
    data: { name: 'map', requiredMinimumRole: 'guest' },
    resolve: {
      mapResolver,
    },
  },
  // {
  // 	path: `map/:name/update`,
  // 	component: MapUpdateComponent,
  // 	data:{ name: "map-update", requiredRole: CampaignRole.MEMBER},
  // 	resolve: {
  // 		campaign: CampaignResolver,
  // 		modelData: MapUpdateResolver,
  // 	}
  // },
];

export const campaignRoutes = [
  {
    path: '',
    children: [...innerCampaignRoutes, ...innerCampaignOverviewRoutes],
    canActivate: [campaignGuard],
  },
];
