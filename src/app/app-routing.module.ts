import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  campaignSetResolver,
  resetTracking,
  trackCampaignName,
} from './_resolvers/campaign.resolver';
import { adminRoutes } from './administration/administration-routes';
import { campaignRoutes } from './campaign/campaign-routes';
import { generalRoutes } from './general/general-routes';

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
      {
        path: '',
        children: [
          {
            path: 'admin',
            children: adminRoutes,
          },
          ...generalRoutes,
        ],
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
