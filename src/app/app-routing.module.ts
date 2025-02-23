import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from 'src/environments/environment';
import { loginGuard } from './_guards/login.guard';
import {
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

const errorRoutes: Routes = [
  {
    path: `error/:errorStatus`,
    loadComponent: () =>
      import('./general/pages/error-page/error-page.component').then(
        (m) => m.ErrorPageComponent,
      ),
    data: { name: 'error' },
  },
  {
    path: '**',
    loadComponent: () =>
      import('./general/pages/error-page/error-page.component').then(
        (m) => m.ErrorPageComponent,
      ),
    data: { name: '404' },
  },
];

export const ROUTES: Routes = [
  {
    path: '',
    children: [
      ...redirectRoutes,
      {
        path: environment.frontendPrefix,
        children: [
          ...generalRoutes,
          {
            path: '',
            // resolve: { campaignSetResolver },
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
                    loadComponent: () =>
                      import(
                        './general/pages/campaign-overview-page/campaign-overview-page.component'
                      ).then((m) => m.CampaignOverviewPageComponent),
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
      ...errorRoutes,
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES, {
      enableViewTransitions: true,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
