import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { combineLatest, filter, map, Observable, switchMap, tap } from 'rxjs';
import { CampaignRole } from 'src/app/_models/token';
import { RoutingService } from '../routing.service';
import { GlobalUrlParamsService } from './global-url-params.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardService implements CanActivate {
  constructor(
    private routingService: RoutingService,
    private tokenService: TokenService,
  ) {}

  canActivate(): boolean {
    const isLoggedIn: boolean = this.isUserLoggedIn();
    if (!isLoggedIn) {
      this.routingService.routeToPath('login');
    }

    return isLoggedIn;
  }

  isUserLoggedIn(): boolean {
    return this.tokenService.hasValidJWTToken();
  }
}

@Injectable({
  providedIn: 'root',
})
export class AdminGuardService implements CanActivate {
  //Administrative Permissions are special in that their values are booleans. You either are, or aren't an admin.
  constructor(
    public tokenService: TokenService,
    public routingService: RoutingService,
  ) {}
  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> | boolean {
    if (!this.isUserLoggedIn()) {
      this.routingService.routeToPath('login');
      return false;
    }

    return this.tokenService.isGlobalAdmin$.pipe(
      tap((isAdmin) => {
        if (!isAdmin) this.routingService.routeToPath('campaign-overview');
      }),
    );
  }

  isUserLoggedIn(): boolean {
    return this.tokenService.hasValidJWTToken();
  }
}

@Injectable({
  providedIn: 'root',
})
export class CampaignGuardService extends AdminGuardService {
  //Administrative Permissions are special in that their values are booleans. You either are, or aren't an admin.
  constructor(
    tokenService: TokenService,
    routingService: RoutingService,
    public paramService: GlobalUrlParamsService,
  ) {
    super(tokenService, routingService);
  }

  override canActivate(
    route: ActivatedRouteSnapshot,
  ): Observable<boolean> | boolean {
    if (!this.isUserLoggedIn()) {
      this.routingService.routeToPath('login');
      return false;
    }

    const currentCampaignName$ = this.paramService.campaignNameParam$;
    const isGlobalAdmin$ = this.tokenService.isGlobalAdmin$;
    const role$ = currentCampaignName$.pipe(
      filter((campaignName) => campaignName != null),
      switchMap((campaignName) =>
        this.tokenService.getCampaignRole(campaignName),
      ),
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
          this.routingService.routeToPath('campaign-overview');
          return false;
        }

        const requiredMiniumRole: CampaignRole =
          route.data['requiredMinimumRole'];
        if (requiredMiniumRole == null) {
          throw "Invalid Route Exception. The campaign-route you're trying to access has no defined minimum role needed to access it";
        }

        return this.hasRoleOrBetter(role, requiredMiniumRole);
      }),
    );
  }

  hasRoleOrBetter(role: CampaignRole, minimumRole: CampaignRole): boolean {
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
}
