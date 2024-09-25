import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadSiteUserGroups } from "../app.actions";

export const siteGroupsResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadSiteUserGroups());
}