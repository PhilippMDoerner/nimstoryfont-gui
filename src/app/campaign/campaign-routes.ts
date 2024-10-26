import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, Route } from '@angular/router';
import { campaignGuard } from '../_guards/campaign.guard';
import { CampaignOverviewRoute } from '../_models/route';
import { characterResolver } from '../_resolvers/character.resolver';
import { CampaignAdminPageComponent } from './pages/campaign-admin-page/campaign-admin-page.component';
import { CampaignUpdatePageComponent } from './pages/campaign-update-page/campaign-update-page.component';
import { CharacterUpdatePageComponent } from './pages/character-create-update-page/character-create-update-page.component';
import { CharacterCreateUpdateStore } from './pages/character-create-update-page/character-create-update-page.store';
import { CharacterPageComponent } from './pages/character-page/character-page.component';
import { CharacterStore } from './pages/character-page/character-page.store';
import { CreaturePageComponent } from './pages/creature-page/creature-page.component';
import { CreaturePageStore } from './pages/creature-page/creature-page.store';
import { GeneralOverviewPageComponent } from './pages/general-overview-page/general-overview-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

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
  },
];

const innerCampaignRoutes: Route[] = [
  //Campaign Admin Routes
  {
    path: `admin`,
    component: CampaignAdminPageComponent,
    data: { name: 'campaign-admin', requiredMinimumRole: 'admin' },
  },
  {
    path: 'admin/update',
    component: CampaignUpdatePageComponent,
    data: { name: 'campaign-update', requiredMinimumRole: 'admin' },
  },
  //Home Routes
  {
    path: `home`,
    component: HomePageComponent,
    data: { name: 'home', requiredMinimumRole: 'guest' },
    resolve: {},
  },
  // Character Routes
  {
    path: 'character',
    children: [
      {
        path: 'create',
        component: CharacterUpdatePageComponent,
        data: { name: 'character-create', requiredMinimumRole: 'member' },
        resolve: {
          loadLocations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignLocations(),
          loadOrganizations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignOrganizations(),
          loadClasses: () =>
            inject(CharacterCreateUpdateStore).loadPlayerClasses(),
        },
      },
      {
        path: ':name',
        component: CharacterPageComponent,
        data: { name: 'character', requiredMinimumRole: 'guest' },
        resolve: {
          loadCharacters: () => inject(CharacterStore).loadCampaignCharacters(),
          loadCharacter: characterResolver,
          loadOrganizations: () =>
            inject(CharacterStore).loadCampaignOrganizations(),
          loadEncounters: () => inject(CharacterStore).loadCampaignEncounters(),
          loadSessions: () => inject(CharacterStore).loadCampaignSessions(),
          loadLocations: () => inject(CharacterStore).loadCampaignLocations(),
        },
      },
      {
        path: ':name/update',
        component: CharacterUpdatePageComponent,
        data: { name: 'character-update', requiredMinimumRole: 'guest' },
        resolve: {
          loadCharacter: (route: ActivatedRouteSnapshot) =>
            inject(CharacterCreateUpdateStore).loadCharacter(
              route.params['name'],
            ),
          loadLocations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignLocations(),
          loadOrganizations: () =>
            inject(CharacterCreateUpdateStore).loadCampaignOrganizations(),
          loadClasses: () =>
            inject(CharacterCreateUpdateStore).loadPlayerClasses(),
        },
      },
    ],
  },
  // Creature Routes
  {
    path: 'creature',
    children: [
      {
        path: ':name',
        component: CreaturePageComponent,
        data: { name: 'creature', requiredMinimumRole: 'guest' },
        resolve: {
          loadCreature: (route: ActivatedRouteSnapshot) =>
            inject(CreaturePageStore).loadCreature(route.params['name']),
        },
      },
    ],
  },
  // // Location Routes
  // {
  //   path: 'location/:parent_name/:name',
  //   component: LocationPageComponent,
  //   data: { name: 'location', requiredMinimumRole: 'guest' },
  //   resolve: {},
  // },
  // // Organization Routes
  // {
  //   path: 'organization/:name',
  //   component: OrganizationPageComponent,
  //   data: { name: 'organization', requiredMinimumRole: 'guest' },
  //   resolve: {},
  // },
  // // Quote Routes
  // {
  //   path: 'quotes/:name',
  //   component: QuoteOverviewPageComponent,
  //   data: { name: 'quote-overview', requiredMinimumRole: 'guest' },
  //   resolve: {},
  // },
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
  // {
  //   path: `map/default`,
  //   component: MapPageComponent,
  //   data: { name: 'default-map', requiredMinimumRole: 'guest' },
  //   resolve: {
  //     mapDefaultResolver,
  //   },
  // },
  // {
  //   path: `map/:name`,
  //   component: MapPageComponent,
  //   data: { name: 'map', requiredMinimumRole: 'guest' },
  //   resolve: {
  //     mapResolver,
  //   },
  // },
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
    children: [...innerCampaignOverviewRoutes, ...innerCampaignRoutes],
    canActivate: [campaignGuard],
  },
];
