import { Route } from '@angular/router';
import { GeneralOverviewType } from 'src/app/design/templates/_models/generalOverviewType';
import { siteAdminGuard } from '../_guards/admin.guard';
import { loginGuard } from '../_guards/login.guard';
import { onlyOnlineGuard } from '../_guards/only-online.guard';
import { CampaignRole } from './token';

//Route Data Models
interface NamedRouteData {
  name: string;
}

interface RoleRouteData extends NamedRouteData {
  requiredMinimumRole: CampaignRole;
}

export interface BaseNamedRoute extends Route {
  data: NamedRouteData;
}

//Route Models
export interface GeneralRoute extends BaseNamedRoute {
  canActivate?: [typeof loginGuard, ...(typeof onlyOnlineGuard)[]];
}

export interface AdminRoute extends BaseNamedRoute {
  canActivate: [typeof siteAdminGuard, ...(typeof onlyOnlineGuard)[]];
}

export interface CampaignRoute extends BaseNamedRoute {
  data: RoleRouteData;
}

export interface CampaignOverviewRoute extends BaseNamedRoute {
  data: RoleRouteData & { overviewType: GeneralOverviewType };
}
