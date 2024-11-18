import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { SwPush, SwUpdate } from '@angular/service-worker';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';
import { ToastConfig } from './_models/toast';

@Injectable({
  providedIn: 'root',
})
export class ServiceWorkerService {
  readonly toastService = inject(ToastService);
  readonly serviceWorkerUpdate = inject(SwUpdate);
  readonly serviceWorkerPush = inject(SwPush);

  initializeServiceWorkerInteractions() {
    this.serviceWorkerUpdate.versionUpdates
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        switch (event.type) {
          case 'VERSION_DETECTED':
            this.toastService.addToast(newVersionFoundToast);
            break;
          case 'VERSION_INSTALLATION_FAILED':
            this.toastService.addToast(newVersionInstallFailedToast);
            break;
          case 'VERSION_READY':
            this.toastService.addToast(newVersionInstalledToast);
            break;
          case 'NO_NEW_VERSION_DETECTED':
            break;
        }
      });
  }
}

const newVersionFoundToast: ToastConfig = {
  type: 'INFO',
  dismissMs: 3000,
  body: { text: 'A new version of nimstoryfont is available!' },
  onToastClick: (dismiss) => dismiss(),
};

const newVersionInstalledToast: ToastConfig = {
  type: 'INFO',
  dismissMs: 3000,
  body: { text: 'A new version of nimstoryfont has been installed!' },
  onToastClick: (dismiss) => dismiss(),
};

const newVersionInstallFailedToast: ToastConfig = {
  type: 'DANGER',
  dismissMs: 3000,
  body: { text: 'Failed to install new version of nimstoryfont' },
  onToastClick: (dismiss) => dismiss(),
};
