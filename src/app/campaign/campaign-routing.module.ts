import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { CampaignRoute, GeneralRoute } from '../_models/route';
import { campaignGuard } from './_guards/campaign.guard';
import { loginGuard } from './_guards/login.guard';
import { mapDefaultResolver, mapResolver } from './_resolvers/map.resolver';
import { CampaignOverviewPageComponent } from './campaign-overview-page/campaign-overview-page.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MapPageComponent } from './map-page/map-page.component';

const generalRoutes: GeneralRoute[] = [
	{
		path: `${environment.frontendPrefix}/campaigns`, 
		component: CampaignOverviewPageComponent, 
		data:{ name: "campaign-overview"}, 
		canActivate: [ loginGuard ],
	},
]

const campaignRoutes: CampaignRoute[] = [
  //Home Routes
	{
		path: `${environment.frontendPrefix}/home/:campaign`, 
		component: HomePageComponent, 
    data:{ name: "home", requiredMinimumRole: 'guest'}, 
		canActivate: [campaignGuard],
	},
  // Map Routes
	// {
	// 	path: `${environment.frontendPrefix}/map/:campaign/create`,
	// 	component: MapUpdateComponent,
	// 	data:{ name: "map-create", requiredRole: CampaignRole.MEMBER},
	// 	resolve: { 
	// 		campaign: CampaignResolver,
	// 		modelData: MapUpdateResolver,
	// 	}
	// },
	{
		path: `${environment.frontendPrefix}/map/:campaign/default`,
		component: MapPageComponent,
		data:{ name: "default-map", requiredMinimumRole: 'guest'},
    canActivate: [campaignGuard],
    resolve: {
		  mapDefaultResolver: mapDefaultResolver,
		}
	},
	{
		path: `${environment.frontendPrefix}/map/:campaign/:name`,
		component: MapPageComponent,
		data:{ name: "map", requiredMinimumRole: 'guest'},
    canActivate: [campaignGuard],
    resolve: {
			mapResolver: mapResolver,
		}
	},
	// {
	// 	path: `${environment.frontendPrefix}/map/:campaign/:name/update`,
	// 	component: MapUpdateComponent,
	// 	data:{ name: "map-update", requiredRole: CampaignRole.MEMBER},
	// 	resolve: { 
	// 		campaign: CampaignResolver,
	// 		modelData: MapUpdateResolver,
	// 	}
	// },
];

const homeRoutes: any[] = [];

@NgModule({
  imports: [RouterModule.forChild([
    ...campaignRoutes,
    ...homeRoutes,
		...generalRoutes,
  ])],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
