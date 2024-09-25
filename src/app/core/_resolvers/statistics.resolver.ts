import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Store } from "@ngrx/store";
import { loadSiteStatistics } from "../app.actions";

export const siteStatisticsResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadSiteStatistics());
}