import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn } from '@angular/router';
import { combineLatest, map, switchMap } from 'rxjs';
import { CampaignRole } from 'src/app/_models/token';
import { RoutingService } from 'src/app/_services/routing.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { GlobalUrlParamsService } from '../_services/utils/global-url-params.service';

export const campaignGuard: CanActivateFn = (next: ActivatedRouteSnapshot) => {
  const tokenService = inject(TokenService);
  const routingService = inject(RoutingService);
  const paramService = inject(GlobalUrlParamsService);

  const isLoggedIn: boolean = tokenService.hasValidJWTToken();
  if (!isLoggedIn) {
    routingService.routeToPath('login');
    return false;
  }

  const currentCampaignName$ = paramService.campaignNameParam$;
  const isGlobalAdmin$ = tokenService.isGlobalAdmin$;
  const role$ = currentCampaignName$.pipe(
    switchMap((campaignName) => tokenService.getCampaignRole(campaignName)),
  );

  return combineLatest({
    campaignName: currentCampaignName$,
    isAdmin: isGlobalAdmin$,
    role: role$,
  }).pipe(
    map(({ campaignName, isAdmin, role }) => {
      if (isAdmin) return true;

      if (campaignName == null) {
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
