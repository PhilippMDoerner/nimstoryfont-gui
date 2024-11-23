import { HttpErrorResponse } from '@angular/common/http';
import { patchState } from '@ngrx/signals';
import { httpErrorToast } from 'src/app/_models/toast';
import { ToastService } from 'src/design/organisms/toast-overlay/toast-overlay.component';

export function handleError(
  store: any,
  err: HttpErrorResponse,
  toastService: ToastService,
) {
  if (err.status === 409) {
    patchState(store, { serverModel: err.error });
  } else {
    toastService.addToast(httpErrorToast(err));
  }
}

export function toServerModel<T>(err: HttpErrorResponse): T | undefined {
  if (err.status === 409) {
    return err.error;
  }
  return undefined;
}
