// withExample.ts
import {
  signalStore,
  signalStoreFeature,
  SignalStoreFeature,
  type,
  withMethods,
  withState,
} from '@ngrx/signals';

export type ExampleState<Prop extends string> = {
  [K in Prop as `${K}Field`]: string;
};

export type ExampleMethods<Prop extends string> = {
  [K in Prop as `do${K}`]: () => void;
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
  methods: ExampleMethods<Prop>;
};

export function withExample<Prop extends string>(
  name: Prop,
): SignalStoreFeature<EmptyFeature, FilledFeature<Prop>> {
  return signalStoreFeature(
    { methods: type<{ _exampleCb: (name: string) => void }>() },
    withState<ExampleState<Prop>>({
      [`${name}Field`]: 'foo',
    } as ExampleState<Prop>),
    withMethods((store) => {
      return {
        [`do${name}`]: () => {
          // Some logic
          store._exampleCb(name);
        },
      } as ExampleMethods<Prop>;
    }),
  ) as SignalStoreFeature<EmptyFeature, FilledFeature<Prop>>;
}

export const ExampleStore = signalStore(
  { providedIn: 'root' },
  withMethods((store) => ({
    _exampleCb(id: string) {
      // code for callback here...
    },
  })),
  withExample('example'),
  withExample('other'),
);
