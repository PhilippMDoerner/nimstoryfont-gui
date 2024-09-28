import {
  signalStoreFeature,
  SignalStoreFeature,
  watchState,
  withHooks,
} from '@ngrx/signals';
import { environment } from 'src/environments/environment';

export function withDevtools(name = 'Store'): SignalStoreFeature {
  return signalStoreFeature(
    withHooks({
      onInit(store) {
        if (environment.kind === 'PRODUCTION') return;

        watchState(store, (state) => {
          const { changeCause, changeCauseParent } = getErrorCauses(
            getStackTrace(new Error()),
          );

          console.groupCollapsed(
            `[Debug ${name}]: ${changeCause} => ${changeCauseParent}`,
          );
          console.trace('[Debug] source');
          console.log('[Debug] state', state);
          console.groupEnd();
        });
      },
    }),
  );
}

const getStackTrace = (error: Error) => error.stack?.split('\n') as string[];
const trimTraceLine = (entry: string) => entry.trim().split('@')[0];

function getErrorCauses(changeTraceLines: string[]) {
  const usefulLines = changeTraceLines
    .slice(0, 30)
    .filter(
      (line) =>
        !BLACKLIST.some((blackListWord) => line.startsWith(blackListWord)),
    );

  const changeCause = trimTraceLine(usefulLines?.[0] as string);
  const changeCauseParent = trimTraceLine(usefulLines?.[1] as string);
  return { changeCause, changeCauseParent };
}

const BLACKLIST = [
  'notifyWatchers@',
  'patchState@',
  'ConsumerObserver2',
  'Subscriber2',
  'BehaviorSubject2',
  'Observable2',
  'Subject2',
  'errorContext',
  'onInit@',
  'SignalStore',
  'createHook',
  'Angular',
  'hydrate',
  'getOrCreateInjectable',
  'runInInjectorProfilerContext',
  'watchState',
  'withDevtools',
  'withHooks',
  'lookupTokenUsing',
  'get@',
  'ɵɵdirectiveInject',
  'ɵɵinject',
  'inject',
  'getNodeInjectable',
  'create@',
];
