import { campaignGuard } from '../_guards/campaign.guard';
import { CampaignOverviewRoute, CampaignRoute } from '../_models/route';
import { CampaignAdminPageComponent } from './pages/campaign-admin-page/campaign-admin-page.component';
import { CampaignUpdatePageComponent } from './pages/campaign-update-page/campaign-update-page.component';
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

const innerCampaignRoutes: CampaignRoute[] = [
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
  // {
  //   path: 'character/:name',
  //   component: CharacterPageComponent,
  //   data: { name: 'character', requiredMinimumRole: 'guest' },
  //   resolve: {
  //     characterResolver,
  //     randomQuoteResolver,
  //     characterListResolver,
  //   },
  // },
  // {
  //   path: 'character/:name/update',
  //   component: CharacterUpdatePageComponent,
  //   data: { name: 'character-update', requiredMinimumRole: 'guest' },
  //   resolve: {},
  // },
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
    children: [
      ...innerCampaignRoutes,
      // ...innerCampaignOverviewRoutes
    ],
    canActivate: [campaignGuard],
  },
];
