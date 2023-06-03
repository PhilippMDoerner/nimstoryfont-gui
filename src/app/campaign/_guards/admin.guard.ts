import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RoutingService } from "src/app/_services/routing.service";
import { TokenService } from "src/app/_services/utils/token.service";

export const authGuard = (next: ActivatedRouteSnapshot) => {
  const tokenService = inject(TokenService);
  const routingService = inject(RoutingService);
  
  const isLoggedIn = tokenService.hasValidJWTToken();
  if (!isLoggedIn) {
    routingService.routeToPath('login');
    return false;
  }
  
  const hasRequiredPermissions: boolean = tokenService.isSuperUser() || tokenService.isAdmin();
  if(!hasRequiredPermissions){
    routingService.routeToPath('campaign-overview');
    return false;
  }
  
  return hasRequiredPermissions;
};