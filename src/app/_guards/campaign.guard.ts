import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { combineLatest, map } from 'rxjs';
import { CampaignRole } from 'src/app/_models/token';
import { RoutingService } from 'src/app/_services/routing.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { log } from 'src/utils/logging';
import { GlobalUrlParamsService } from '../_services/utils/global-url-params.service';

export const campaignGuard: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const tokenService = inject(TokenService);
  const routingService = inject(RoutingService);
  const paramService = inject(GlobalUrlParamsService);

  const isLoggedIn: boolean = tokenService.hasValidJWTToken();
  if (!isLoggedIn) {
    log(campaignGuard.name, 'User is not logged in');
    routingService.routeToPath('login');
    return false;
  }

  const currentCampaignName = next.params['campaign'];
  const isGlobalAdmin$ = tokenService.isGlobalAdmin$;
  const role$ = tokenService.getCampaignRole(currentCampaignName);

  return combineLatest({
    isAdmin: isGlobalAdmin$,
    role: role$,
  }).pipe(
    map(({ isAdmin, role }) => {
      if (isAdmin) return true;

      if (currentCampaignName == null) {
        throw "Invalid Route Exception. The campaign-route you're trying to access has no campaign name parameter";
      }

      const hasRoleInCampaign = role != null;
      if (!hasRoleInCampaign) {
        routingService.routeToPath('campaign-overview');
        return false;
      }

      const requiredMiniumRole: CampaignRole = next.data['requiredMinimumRole'];
      if (requiredMiniumRole == null) {
        throw "Invalid Route Exception. The campaign-route you're trying to access has no defined minimum role needed to access it";
      }

      return hasRoleOrBetter(role, requiredMiniumRole);
    }),
  );
};

function hasRoleOrBetter(
  role: CampaignRole,
  minimumRole: CampaignRole,
): boolean {
  switch (minimumRole) {
    case 'member':
      return ['member', 'admin'].includes(role);
    case 'admin':
      return role === 'admin';
    case 'guest':
      return ['member', 'admin', 'guest'].includes(role);
    default:
      return false;
  }
}
