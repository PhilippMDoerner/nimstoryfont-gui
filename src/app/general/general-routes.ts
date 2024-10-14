import { GeneralRoute } from '../_models/route';
import { LoginPageComponent } from './pages/login-page/login-page.component';

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
  // {
  //   path: `profile/me`,
  //   component: ProfilePageComponent,
  //   data: { name: 'direct-profile' },
  //   canActivate: [loginGuard],
  //   resolve: {
  //     userResolver,
  //   },
  // },
];
