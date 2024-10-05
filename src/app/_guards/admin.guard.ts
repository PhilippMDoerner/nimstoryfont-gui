import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs';
import { RoutingService } from 'src/app/_services/routing.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { log } from 'src/utils/logging';

export const siteAdminGuard = (next: ActivatedRouteSnapshot) => {
  const tokenService = inject(TokenService);
  const routingService = inject(RoutingService);

  const isLoggedIn = tokenService.hasValidJWTToken();
  if (!isLoggedIn) {
    log(siteAdminGuard.name, 'User is not logged in');
    routingService.routeToPath('login');
    return false;
  }

  return tokenService.isGlobalAdmin$.pipe(
    map((isAdmin) => {
      if (!isAdmin) {
        log(
          siteAdminGuard.name,
          'User is not admin, routing to campaign-overview',
        );
        routingService.routeToPath('campaign-overview');
        return false;
      }

      return isAdmin;
    }),
  );
};
