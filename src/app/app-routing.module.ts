import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { campaignGuard } from './_guards/campaign.guard';
import { loginGuard } from './_guards/login.guard';
import { CampaignRoute, GeneralRoute } from './_models/route';
import { CampaignOverviewPageComponent, HomePageComponent, MapPageComponent, mapDefaultResolver, mapResolver, updateCurrentCampaignResolver } from './app';
import { clearCurrentCampaignResolver } from './app/_resolvers/campaign.resolver';

const generalRoutes: GeneralRoute[] = [
  //Redirect Routes
  {
    path: environment.frontendPrefix,
    redirectTo: `${environment.frontendPrefix}/campaigns`, 
    pathMatch: 'full',
    data: {name: 'start'}
  },
  {
    path: "",
    redirectTo: `${environment.frontendPrefix}/campaigns`, 
    pathMatch: 'full',
    data: {name: 'start'}
  },
  {
    path: `${environment.frontendPrefix}/home`,
    redirectTo: `${environment.frontendPrefix}/campaigns`, 
    pathMatch: "full",
    data: {name: "no-campaigns"}
  },
	{
		path: `${environment.frontendPrefix}/campaigns`, 
		component: CampaignOverviewPageComponent, 
		data:{ name: "campaign-overview"}, 
		canActivate: [ loginGuard ],
		resolve: {
			clearCurrentCampaignResolver
		}
	},
];

const campaignRoutes: CampaignRoute[] = [
  //Home Routes
	{
		path: `${environment.frontendPrefix}/home/:campaign`, 
		component: HomePageComponent, 
    data:{ name: "home", requiredMinimumRole: 'guest'}, 
		canActivate: [campaignGuard],
    resolve: {
      updateCurrentCampaignResolver
    }
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
  imports: [RouterModule.forRoot([
    ...generalRoutes,
    ...campaignRoutes,
    ...homeRoutes,
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
