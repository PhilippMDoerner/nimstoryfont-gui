import { loginGuard } from '../_guards/login.guard';
import { onlyOnlineGuard } from '../_guards/only-online.guard';
import { GeneralRoute } from '../_models/route';

export const generalRoutes: GeneralRoute[] = [
  //Login Routes
  {
    path: `login`,
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent,
      ),
    data: { name: 'login' },
  },
  {
    path: `login/:state`,
    loadComponent: () =>
      import('./pages/login-page/login-page.component').then(
        (m) => m.LoginPageComponent,
      ),
    data: { name: 'login-state' },
  },
  //User Routes
  {
    path: `profile/me`,
    loadComponent: () =>
      import('./pages/profile-page/profile-page.component').then(
        (m) => m.ProfilePageComponent,
      ),
    data: { name: 'direct-profile' },
    canActivate: [loginGuard, onlyOnlineGuard],
  },
];
