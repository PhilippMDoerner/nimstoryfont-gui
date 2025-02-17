import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { interval, Observable, retry, tap } from 'rxjs';
import { ToastService } from 'src/app/design/organisms/toast-overlay/toast-overlay.component';
import { log } from 'src/utils/logging';
import { httpErrorToast, ToastButtons, ToastConfig } from '../_models/toast';
import { RoutingService } from '../_services/routing.service';
import { TokenService } from '../_services/utils/token.service';
import { AuthStore } from '../auth.store';
import { GlobalStore } from '../global.store';

const logoutInfoToast: ToastConfig = {
  type: 'INFO',
  dismissMs: 3000,
  header: {
    text: 'Session expired',
  },
  body: {
    text: 'You have been logged out',
  },
  onToastClick: (dismiss) => dismiss(),
};

const notFoundToast = (
  routingService: RoutingService,
  campaignName: string | undefined,
): ToastConfig => {
  const buttons: ToastButtons = [
    {
      label: 'Go back',
      icon: 'arrow-left',
      onClick: (dismiss) => {
        history.back();
        dismiss();
      },
    },
  ];
  if (campaignName) {
    buttons.push({
      label: 'Home',
      icon: 'home',
      onClick: (dismiss) => {
        const isInCampaign = campaignName != null;
        if (isInCampaign) {
          routingService.routeToPath('home', { campaign: campaignName });
        } else {
          routingService.routeToPath('campaign-overview');
        }
        dismiss();
      },
    });
  }

  return {
    type: 'WARNING',
    header: {
      text: "We couldn't find the page you're looking for",
    },
    body: {
      buttons: buttons,
    },
  };
};

export function errorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const tokenService = inject(TokenService);
  const toastService = inject(ToastService);
  const routingService = inject(RoutingService);
  const globalStore = inject(GlobalStore);
  const authStore = inject(AuthStore);

  const isRefresRequest = req.url.includes(tokenService.refreshTokenUrl);
  if (isRefresRequest) {
    return next(req).pipe(
      retry(2),
      tap((err) => {
        if (err instanceof HttpErrorResponse) {
          toastService.addToast(logoutInfoToast);
          authStore.logout();
          routingService.routeToPath('login');
        }
      }),
    );
  }

  return next(req).pipe(
    retry({
      count: 3,
      resetOnSuccess: true,
      delay: (err: HttpErrorResponse, count) => {
        log(retry.name, err, count);
        switch (err.status) {
          case 401:
            return tokenService.refreshUserData();
          case 502:
            return interval(1000);
          default:
            throw err;
        }
      },
    }),
    tap({
      error: (err: HttpErrorResponse) => {
        switch (err.status) {
          case 404:
            const isFileUrl = req.url.endsWith('.json');
            if (!isFileUrl) {
              toastService.addToast(
                notFoundToast(routingService, globalStore.campaignName()),
              );
            }
            break;
          case 500:
          case 502:
            toastService.addToast(httpErrorToast(err));
            break;
        }
      },
    }),
  );
}
