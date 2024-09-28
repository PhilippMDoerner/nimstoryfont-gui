import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { siteAdminGuard } from './_guards/admin.guard';
import { campaignGuard } from './_guards/campaign.guard';
import { loginGuard } from './_guards/login.guard';
import { AdminRoute, CampaignRoute, GeneralRoute } from './_models/route';
import {
  CampaignOverviewPageComponent,
  HomePageComponent,
  MapPageComponent,
  mapDefaultResolver,
  mapResolver,
  updateCurrentCampaignResolver,
} from './core';
import {
  campaignDetailSetResolver,
  campaignSetResolver,
  clearCurrentCampaignResolver,
} from './core/_resolvers/campaign.resolver';
import { siteGroupsResolver } from './core/_resolvers/group.resolver';
import {
  recentlyUpdatedArticleResolver,
  resetRecentlyUpdatedArticleLoadStateResolver,
} from './core/_resolvers/recently-updated-article.resolver';
import { siteStatisticsResolver } from './core/_resolvers/statistics.resolver';
import {
  siteUsersResolver,
  userResolver,
} from './core/_resolvers/user.resolver';
import { ConfigAdministrationPageComponent } from './core/config-administration-page/config-administration-page.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { ProfilePageComponent } from './core/profile-page/profile-page.component';
import { SiteAdministrationPageComponent } from './core/site-administration-page/site-administration-page.component';
const generalRoutes: GeneralRoute[] = [
  //Redirect Routes
  {
    path: environment.frontendPrefix,
    redirectTo: `${environment.frontendPrefix}/campaigns`,
    pathMatch: 'full',
    data: { name: 'start' },
  },
  {
    path: '',
    redirectTo: `${environment.frontendPrefix}/campaigns`,
    pathMatch: 'full',
    data: { name: 'start' },
  },
  {
    path: `${environment.frontendPrefix}/home`,
    redirectTo: `${environment.frontendPrefix}/campaigns`,
    pathMatch: 'full',
    data: { name: 'no-campaigns' },
  },
  //Login Routes
  {
    path: `${environment.frontendPrefix}/login`,
    component: LoginPageComponent,
    data: { name: 'login' },
  },
  {
    path: `${environment.frontendPrefix}/login/:state`,
    component: LoginPageComponent,
    data: { name: 'login-state' },
  },
  //User Routes
  {
    path: `${environment.frontendPrefix}/profile/me`,
    component: ProfilePageComponent,
    data: { name: 'direct-profile' },
    canActivate: [loginGuard],
    resolve: {
      userResolver,
    },
  },
  {
    path: `${environment.frontendPrefix}/campaigns`,
    component: CampaignOverviewPageComponent,
    data: { name: 'campaign-overview' },
    canActivate: [loginGuard],
    resolve: {
      clearCurrentCampaignResolver,
    },
  },
];

const adminRoutes: AdminRoute[] = [
  //General Admin Routes
  {
    path: `${environment.frontendPrefix}/admin`,
    component: SiteAdministrationPageComponent,
    data: { name: 'admin' },
    canActivate: [siteAdminGuard],
    resolve: {
      siteUsersResolver,
      siteGroupsResolver,
      siteStatisticsResolver,
      campaignDetailSetResolver,
    },
  },
  {
    path: `${environment.frontendPrefix}/configtables`,
    component: ConfigAdministrationPageComponent,
    data: { name: 'config-tables' },
    canActivate: [siteAdminGuard],
  },
];

const campaignRoutes: CampaignRoute[] = [
  //Home Routes
  {
    path: `${environment.frontendPrefix}/home/:campaign`,
    component: HomePageComponent,
    data: { name: 'home', requiredMinimumRole: 'guest' },
    canActivate: [campaignGuard],
    resolve: {
      updateCurrentCampaignResolver,
      recentlyUpdatedArticleResolver,
      resetRecentlyUpdatedArticleLoadStateResolver,
    },
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
    data: { name: 'default-map', requiredMinimumRole: 'guest' },
    canActivate: [campaignGuard],
    resolve: {
      mapDefaultResolver: mapDefaultResolver,
    },
  },
  {
    path: `${environment.frontendPrefix}/map/:campaign/:name`,
    component: MapPageComponent,
    data: { name: 'map', requiredMinimumRole: 'guest' },
    canActivate: [campaignGuard],
    resolve: {
      mapResolver: mapResolver,
    },
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
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        children: [
          ...generalRoutes,
          ...campaignRoutes,
          ...homeRoutes,
          ...adminRoutes,
        ],
        resolve: {
          campaignSetResolver,
        },
      },
    ]),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
