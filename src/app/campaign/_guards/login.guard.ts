import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { RoutingService } from "src/app/_services/routing.service";
import { TokenService } from "src/app/_services/utils/token.service";

export const loginGuard = (next: ActivatedRouteSnapshot) => {
  const tokenService = inject(TokenService);
  const routingService = inject(RoutingService);
  
  const isLoggedIn: boolean = tokenService.hasValidJWTToken();
  if (!isLoggedIn){
    routingService.routeToPath('login');
    return false;
  }

  return isLoggedIn;
}

