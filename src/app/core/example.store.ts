import { signalStore, withHooks } from '@ngrx/signals';

// withExample.ts - SignalStoreFeature with types that should impact the ExampleStore type
import {
  signalStoreFeature,
  SignalStoreFeature,
  withState,
} from '@ngrx/signals';

export type ExampleState<Prop extends string> = {
  [K in Prop as `${K}Field1`]: string;
};

export type EmptyFeature = {
  state: {};
  signals: {};
  methods: {};
  computed: {};
};

export type FilledFeature<Prop extends string> = {
  state: ExampleState<Prop>;
  computed: {};
  methods: {};
};

export function withExample<Prop extends string>(
  name: Prop,
): SignalStoreFeature<EmptyFeature, FilledFeature<Prop>> {
  return signalStoreFeature(
    withState<ExampleState<Prop>>({
      [`${name}Field1`]: 'foo',
    } as ExampleState<Prop>),
  ) as SignalStoreFeature<EmptyFeature, FilledFeature<Prop>>;
}

export const ExampleStore = signalStore(
  { providedIn: 'root' },
  withExample('example'),
  withHooks((store) => {
    return {
      onInit() {},
    };
  }),
);
