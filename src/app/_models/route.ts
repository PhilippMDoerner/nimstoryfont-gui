import { Route } from '@angular/router';
import { siteAdminGuard } from '../_guards/admin.guard';
import { campaignGuard } from '../_guards/campaign.guard';
import { loginGuard } from '../_guards/login.guard';
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
  canActivate?: [typeof loginGuard];
}

export interface AdminRoute extends BaseNamedRoute {
  canActivate: [typeof siteAdminGuard];
}

export interface CampaignRoute extends BaseNamedRoute {
  data: RoleRouteData;
  canActivate: [typeof campaignGuard];
}
