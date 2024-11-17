import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { loginGuard } from './_guards/login.guard';
import {
  campaignSetResolver,
  resetTracking,
  trackCampaignName,
} from './_resolvers/campaign.resolver';
import { adminRoutes } from './administration/administration-routes';
import { campaignRoutes } from './campaign/campaign-routes';
import { generalRoutes } from './general/general-routes';
import { CampaignOverviewPageComponent } from './general/pages/campaign-overview-page/campaign-overview-page.component';

const redirectRoutes: Routes = [
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
    path: `home`,
    redirectTo: `${environment.frontendPrefix}/campaigns`,
    pathMatch: 'full',
    data: { name: 'no-campaigns' },
  },
];

const routes: Routes = [
  ...redirectRoutes,
  {
    path: environment.frontendPrefix,
    children: [
      ...generalRoutes,
      {
        path: '',
        resolve: { campaignSetResolver },
        children: [
          {
            path: '',
            children: [
              {
                path: 'admin',
                children: adminRoutes,
              },
              {
                path: `campaigns`,
                component: CampaignOverviewPageComponent,
                data: { name: 'campaign-overview' },
                canActivate: [loginGuard],
              },
            ],
            resolve: { resetTracking },
          },
          {
            path: ':campaign',
            children: campaignRoutes,
            resolve: { trackCampaignName },
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
