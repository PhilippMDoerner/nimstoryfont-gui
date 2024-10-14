import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RoutingService } from 'src/app/_services/routing.service';
import { log } from 'src/utils/logging';
import { GlobalStore } from '../global.store';

export const siteAdminGuard = (next: ActivatedRouteSnapshot) => {
  const routingService = inject(RoutingService);
  const globalStore = inject(GlobalStore);

  const isLoggedIn = globalStore.hasValidJWTToken();
  if (!isLoggedIn) {
    log(siteAdminGuard.name, 'User is not logged in');
    routingService.routeToPath('login');
    return false;
  }

  const isAdmin = globalStore.isCampaignAdmin();
  if (!isAdmin) {
    log(siteAdminGuard.name, 'User is not admin, routing to campaign-overview');
    routingService.routeToPath('campaign-overview');
    return false;
  }

  return isAdmin;
};
