import { siteAdminGuard } from '../_guards/admin.guard';
import { AdminRoute } from '../_models/route';
import { ConfigAdministrationPageComponent } from './pages/config-administration-page/config-administration-page.component';
import { SiteAdministrationPageComponent } from './pages/site-administration-page/site-administration-page.component';

export const adminRoutes: AdminRoute[] = [
  //General Admin Routes
  {
    path: ``,
    component: SiteAdministrationPageComponent,
    data: { name: 'admin' },
    canActivate: [siteAdminGuard],
  },
  {
    path: `configtables`,
    component: ConfigAdministrationPageComponent,
    data: { name: 'config-tables' },
    canActivate: [siteAdminGuard],
  },
];
