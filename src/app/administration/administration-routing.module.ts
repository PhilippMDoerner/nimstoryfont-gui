import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { siteAdminGuard } from '../_guards/admin.guard';
import { AdminRoute } from '../_models/route';
import { campaignDetailSetResolver } from '../_resolvers/campaign.resolver';
import { siteGroupsResolver } from './_resolvers/group.resolver';
import { siteStatisticsResolver } from './_resolvers/statistics.resolver';
import { siteUsersResolver } from './_resolvers/users.resolver';
import { ConfigAdministrationPageComponent } from './pages/config-administration-page/config-administration-page.component';
import { SiteAdministrationPageComponent } from './pages/site-administration-page/site-administration-page.component';

const adminRoutes: AdminRoute[] = [
  //General Admin Routes
  {
    path: `admin`,
    component: SiteAdministrationPageComponent,
    data: { name: 'admin' },
    canActivate: [siteAdminGuard],
    resolve: {
      siteUsersResolver,
      siteGroupsResolver,
      siteStatisticsResolver,
      campaignDetailSetResolver,
    },
  },
  {
    path: `configtables`,
    component: ConfigAdministrationPageComponent,
    data: { name: 'config-tables' },
    canActivate: [siteAdminGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(adminRoutes)],
  exports: [RouterModule],
})
export class AdministrationRoutingModule {}
