import { inject } from "@angular/core";
import { ActivatedRouteSnapshot } from "@angular/router";
import { CampaignRole } from "src/app/_models/token";
import { RoutingService } from "src/app/_services/routing.service";
import { TokenService } from "src/app/_services/utils/token.service";

export const campaignGuard = (route: ActivatedRouteSnapshot) => {
  const tokenService = inject(TokenService);
  const routingService = inject(RoutingService);
  
  const isLoggedIn: boolean = tokenService.hasValidJWTToken();
  if (!isLoggedIn) {
    routingService.routeToPath('login');
    return false;
  }

  const isAdmin: boolean = tokenService.isSuperUser() || tokenService.isAdmin();
  if(isAdmin){
    return true;
  }

  const campaignNameOfRoute: string = route.params['campaign'];
  if (campaignNameOfRoute == null) throw "Invalid Route Exception. The campaign-route you're trying to access has no campaign name parameter";

  const hasNoRoleInCampaign: boolean = tokenService.getCampaignRole(campaignNameOfRoute) == null;
  if (hasNoRoleInCampaign){
    routingService.routeToPath('campaign-overview');
    return false;
  }

  const requiredMiniumRole: CampaignRole = route.data['requiredRole']; 
  if (requiredMiniumRole == null) throw "Invalid Route Exception. The campaign-route you're trying to access has no defined minimum role needed to access it";

  return hasRoleOrBetter(campaignNameOfRoute, requiredMiniumRole, tokenService);
}

function hasRoleOrBetter(campaignName: string, role: CampaignRole, tokenService: TokenService): boolean{
  const isCampaignAdmin: boolean = tokenService.isCampaignAdmin(campaignName);
  const isCampaignMember: boolean = tokenService.isCampaignMember(campaignName);
  const isCampaignGuest: boolean = tokenService.isCampaignGuest(campaignName);
  
  switch(role){
    case "admin":
      return isCampaignAdmin;
    case "member":
    case "globalmember":
      return isCampaignAdmin || isCampaignMember;
    case "guest":
    case "globalguest":
      return isCampaignAdmin || isCampaignMember || isCampaignGuest;
  }
}
