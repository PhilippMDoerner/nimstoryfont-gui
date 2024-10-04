import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';
import { loginGuard } from '../_guards/login.guard';
import { GeneralRoute } from '../_models/route';
import { CampaignOverviewPageComponent } from '../campaign';
import { userResolver } from './_resolvers/user.resolver';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

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

@NgModule({
  imports: [RouterModule.forChild(generalRoutes)],
  exports: [RouterModule],
})
export class GeneralRoutingModule {}
