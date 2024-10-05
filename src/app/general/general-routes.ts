import { loginGuard } from '../_guards/login.guard';
import { GeneralRoute } from '../_models/route';
import { CampaignOverviewPageComponent } from '../campaign';
import { userResolver } from './_resolvers/user.resolver';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

export const generalRoutes: GeneralRoute[] = [
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
