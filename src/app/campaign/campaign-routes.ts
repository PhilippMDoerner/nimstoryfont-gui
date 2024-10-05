import { campaignGuard } from '../_guards/campaign.guard';
import { CampaignRoute } from '../_models/route';
import { campaignResolver } from '../_resolvers/campaign.resolver';
import { siteUsersResolver } from '../_resolvers/users.resolver';
import { mapDefaultResolver, mapResolver } from './_resolvers/map.resolver';
import { recentlyUpdatedArticleResolver } from './_resolvers/recently-updated-article.resolver';
import { statisticsResolver } from './_resolvers/statistics.resolver';
import { CampaignAdminPageComponent } from './pages/campaign-admin-page/campaign-admin-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

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
  //Home Routes
  {
    path: `home`,
    component: HomePageComponent,
    data: { name: 'home', requiredMinimumRole: 'guest' },
    resolve: {
      recentlyUpdatedArticleResolver,
    },
  },
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
    children: innerCampaignRoutes,
    canActivate: [campaignGuard],
  },
];
