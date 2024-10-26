import { HttpErrorResponse } from '@angular/common/http';
import { patchState } from '@ngrx/signals';
import { WarningsService } from 'src/app/_services/utils/warnings.service';

export function handleError(
  store: any,
  err: HttpErrorResponse,
  warningService: WarningsService,
) {
  if (err.status === 409) {
    patchState(store, { serverModel: err.error });
  } else {
    warningService.showWarning(err);
  }
}
