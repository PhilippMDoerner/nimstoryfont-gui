import { WritableStateSource } from '@ngrx/signals';
import {
  MethodsDictionary,
  SignalStoreFeature,
  SignalStoreFeatureResult,
  StateSignals,
} from '@ngrx/signals/src/signal-store-models';
import { RequestMap } from '../factory-types';
import { AllNewMethods, withUpdateMethods } from './withUpdateMethods';
import { AllNewProperties, withUpdateState } from './withUpdateState';

export type UpdateFeatureResult<Requests extends RequestMap> = {
  computed: {};
  methods: MethodsDictionary & AllNewMethods<Requests>;
  state: {} & AllNewProperties<Requests>;
};

export type InnerStore<Input extends SignalStoreFeatureResult> = StateSignals<
  Input['state']
> &
  Input['computed'] &
  Input['methods'] &
  WritableStateSource<Input['state']>;

export function withUpdates<
  Input extends SignalStoreFeatureResult,
  Requests extends RequestMap,
>(
  updatesFactory: (store: InnerStore<Input>) => Requests,
): SignalStoreFeature<Input, UpdateFeatureResult<Requests>> {
  return ((store) => {
    const updates = updatesFactory({
      ...store.stateSignals,
      ...store.computedSignals,
      ...store.methods,
    } as InnerStore<Input>);

    const storeWithstate = withUpdateState(updates)(store);
    return withUpdateMethods(updates)(storeWithstate);
  }) as SignalStoreFeature<Input, UpdateFeatureResult<Requests>>;
}
