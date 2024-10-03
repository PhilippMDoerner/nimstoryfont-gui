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
} from './core';
import {
  campaignDetailSetResolver,
  campaignSetResolver,
  resetTracking,
  trackCampaignName,
} from './core/_resolvers/campaign.resolver';
import { siteGroupsResolver } from './core/_resolvers/group.resolver';
import { recentlyUpdatedArticleResolver } from './core/_resolvers/recently-updated-article.resolver';
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
    redirectTo: `campaigns`,
    pathMatch: 'full',
    data: { name: 'start' },
  },
  {
    path: '',
    redirectTo: `campaigns`,
    pathMatch: 'full',
    data: { name: 'start' },
  },
  {
    path: `home`,
    redirectTo: `campaigns`,
    pathMatch: 'full',
    data: { name: 'no-campaigns' },
  },
  //Login Routes
  {
    path: `login`,
    component: LoginPageComponent,
    data: { name: 'login' },
  },
  {
    path: `login/:state`,
    component: LoginPageComponent,
    data: { name: 'login-state' },
  },
  //User Routes
  {
    path: `profile/me`,
    component: ProfilePageComponent,
    data: { name: 'direct-profile' },
    canActivate: [loginGuard],
    resolve: {
      userResolver,
    },
  },
  {
    path: `campaigns`,
    component: CampaignOverviewPageComponent,
    data: { name: 'campaign-overview' },
    canActivate: [loginGuard],
    resolve: {},
  },
];

const adminRoutes: AdminRoute[] = [
  //General Admin Routes
  {
    path: `admin`,
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
    path: `configtables`,
    component: ConfigAdministrationPageComponent,
    data: { name: 'config-tables' },
    canActivate: [siteAdminGuard],
  },
];

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

const homeRoutes: any[] = [];

@NgModule({
  imports: [
    RouterModule.forRoot(
      [
        {
          path: environment.frontendPrefix,
          children: [
            {
              path: '',
              children: [...generalRoutes, ...homeRoutes, ...adminRoutes],
              resolve: {
                resetTracking,
              },
            },
            {
              path: ':campaign',
              children: campaignRoutes,
              resolve: { trackCampaignName },
            },
          ],
          resolve: {
            campaignSetResolver,
          },
        },
      ],
      { enableViewTransitions: true },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
