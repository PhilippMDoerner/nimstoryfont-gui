import { WritableStateSource } from '@ngrx/signals';
import {
  MethodsDictionary,
  SignalStoreFeature,
  SignalStoreFeatureResult,
  StateSignals,
} from '@ngrx/signals/src/signal-store-models';
import { RequestMap } from '../factory-types';
import { AllNewMethods, withDeleteMethods } from './withDeleteMethods';
import { AllNewProperties, withCreateState } from './withDeleteState';

export type DeleteFeatureResult<Requests extends RequestMap> = {
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

export function withCreates<
  Input extends SignalStoreFeatureResult,
  Requests extends RequestMap,
>(
  createsFactory: (store: InnerStore<Input>) => Requests,
): SignalStoreFeature<Input, DeleteFeatureResult<Requests>> {
  return ((store) => {
    const deletes = createsFactory({
      ...store.stateSignals,
      ...store.computedSignals,
      ...store.methods,
    } as InnerStore<Input>);

    const storeWithstate = withCreateState(deletes)(store);
    return withDeleteMethods(deletes)(storeWithstate);
  }) as SignalStoreFeature<Input, DeleteFeatureResult<Requests>>;
}
