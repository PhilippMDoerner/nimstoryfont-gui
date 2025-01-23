import { siteAdminGuard } from '../_guards/admin.guard';
import { onExitReset } from '../_guards/onExitReset.guard';
import { onlyOnlineGuard } from '../_guards/only-online.guard';
import { AdminRoute } from '../_models/route';
import { ConfigAdministrationPageComponent } from './pages/config-administration-page/config-administration-page.component';
import { ConfigAdministrationPageStore } from './pages/config-administration-page/config-administration-page.store';
import { SiteAdministrationPageComponent } from './pages/site-administration-page/site-administration-page.component';

export const adminRoutes: AdminRoute[] = [
  //General Admin Routes
  {
    path: ``,
    component: SiteAdministrationPageComponent,
    loadComponent: () =>
      import(
        './pages/site-administration-page/site-administration-page.component'
      ).then((m) => m.SiteAdministrationPageComponent),
    data: { name: 'admin' },
    canActivate: [siteAdminGuard, onlyOnlineGuard],
  },
  {
    path: `configtables`,
    component: ConfigAdministrationPageComponent,
    loadComponent: () =>
      import(
        './pages/config-administration-page/config-administration-page.component'
      ).then((m) => m.ConfigAdministrationPageComponent),
    data: { name: 'config-tables' },
    canActivate: [siteAdminGuard],
    providers: [ConfigAdministrationPageStore],
    canDeactivate: [onExitReset(ConfigAdministrationPageStore)],
  },
];
