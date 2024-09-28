import {
  signalStoreFeature,
  SignalStoreFeature,
  watchState,
  withHooks,
} from '@ngrx/signals';
import { environment } from 'src/environments/environment';

export function withDevtools(): SignalStoreFeature {
  return signalStoreFeature(
    withHooks({
      onInit(store) {
        if (environment.kind === 'PRODUCTION') return;

        watchState(store, (state) => {
          console.groupCollapsed('State');
          console.trace('[Debug] source');
          console.log('[Debug] state', state);
          console.groupEnd();
        });
      },
    }),
  );
}
