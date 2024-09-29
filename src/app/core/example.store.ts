import { patchState, signalStore, withMethods } from '@ngrx/signals';
import { withExample } from './withExample';

export type ExampleStoreType = InstanceType<typeof ExampleStore>;

export const ExampleStore = signalStore(
  { providedIn: 'root' },
  withMethods((store) => {
    return {
      _onexampleSuccess: () => {
        patchState(store, { otherField: 'bar' });
      },
    };
  }),
  withExample('example'),
  withExample('other'),
);
