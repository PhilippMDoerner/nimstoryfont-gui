import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import {
  campaignSetResolver,
  resetTracking,
  trackCampaignName,
} from './_resolvers/campaign.resolver';

const routes = [
  {
    path: environment.frontendPrefix,
    children: [
      {
        path: '',
        children: [
          {
            path: 'admin',
            loadChildren: () =>
              import('./administration/administration.module').then(
                (m) => m.AdministrationModule,
              ),
          },
          {
            path: 'general',
            loadChildren: () =>
              import('./general/general.module').then((m) => m.GeneralModule),
          },
        ],
        resolve: {
          resetTracking,
        },
      },
      {
        path: ':campaign',
        loadChildren: () =>
          import('./campaign/campaign.module').then((m) => m.CampaignModule),
        resolve: { trackCampaignName },
      },
    ],
    resolve: {
      campaignSetResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableViewTransitions: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
