import { inject } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RoutingService } from 'src/app/_services/routing.service';
import { log } from 'src/utils/logging';
import { GlobalStore } from '../global.store';

export const loginGuard = (next: ActivatedRouteSnapshot) => {
  const globalStore = inject(GlobalStore);
  const routingService = inject(RoutingService);

  const isLoggedIn: boolean = globalStore.hasValidJWTToken();
  if (!isLoggedIn) {
    log(loginGuard.name, 'User is not logged in');
    routingService.routeToPath('login');
    return false;
  }

  return isLoggedIn;
};
