import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot
} from '@angular/router';
import { Store } from '@ngrx/store';
import { loadCurrentUser, loadSiteUsers } from '../app.actions';

export const userResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadCurrentUser());
}

export const siteUsersResolver: ResolveFn<void> = (
  route: ActivatedRouteSnapshot, 
  state: RouterStateSnapshot
) => {
  inject(Store).dispatch(loadSiteUsers());
}
