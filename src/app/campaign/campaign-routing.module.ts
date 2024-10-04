import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { campaignGuard } from '../_guards/campaign.guard';
import { CampaignRoute } from '../_models/route';
import { mapDefaultResolver, mapResolver } from './_resolvers/map.resolver';
import { recentlyUpdatedArticleResolver } from './_resolvers/recently-updated-article.resolver';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

const campaignRoutes: CampaignRoute[] = [
  //Home Routes
  {
    path: `home`,
    component: HomePageComponent,
    data: { name: 'home', requiredMinimumRole: 'guest' },
    canActivate: [campaignGuard],
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
    canActivate: [campaignGuard],
    resolve: {
      mapDefaultResolver: mapDefaultResolver,
    },
  },
  {
    path: `map/:name`,
    component: MapPageComponent,
    data: { name: 'map', requiredMinimumRole: 'guest' },
    canActivate: [campaignGuard],
    resolve: {
      mapResolver: mapResolver,
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
@NgModule({
  imports: [RouterModule.forChild(campaignRoutes)],
  exports: [RouterModule],
})
export class CampaignRoutingModule {}
