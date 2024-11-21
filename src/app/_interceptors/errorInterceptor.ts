import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandlerFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { errorToast, ToastButtons, ToastConfig } from '../_models/toast';
import { RoutingService } from '../_services/routing.service';
import { GlobalStore } from '../global.store';

const notFoundToast = (
  routingService: RoutingService,
  campaignName: string | undefined,
): ToastConfig => {
  const buttons: ToastButtons = [
    {
      label: 'Go back',
      icon: 'arrow-left',
      onClick: () => history.back(),
    },
  ];
  if (campaignName) {
    buttons.push({
      label: 'Home',
      icon: 'home',
      onClick: () => routingService.routeToPath('home'),
    });
  }

  return {
    type: 'WARNING',
    important: true,
    body: {
      text: "We couldn't find the page you're looking for",
      buttons: buttons,
    },
  };
};

export function errorInterceptor(
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
): Observable<HttpEvent<unknown>> {
  const toastService = inject(ToastService);
  const routingService = inject(RoutingService);
  const globalStore = inject(GlobalStore);
  return next(req).pipe(
    tap({
      error: (err: HttpErrorResponse) => {
        switch (err.status) {
          case 404:
            toastService.addToast(
              notFoundToast(routingService, globalStore.campaignName()),
            );
            break;
          case 500:
            toastService.addToast(errorToast(err));
            break;
        }
      },
    }),
  );
}
