// withExample.ts
import {
  EmptyFeatureResult,
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

export const ExampleStore = signalStore(
  withMethods((store) => {
    return {
      _onCreateSuccess() {},
    };
  }),
  withExample('example'),
  withExample('other'),
);

type OnSuccess = Record<`_onCreateSuccess`, (kind: string) => void>;

export function withExample<Prop extends string>(
  name: Prop,
): SignalStoreFeature<
  EmptyFeatureResult & {
    methods: OnSuccess;
  },
  FilledFeature<Prop>
> {
  return signalStoreFeature(
    { methods: type<OnSuccess>() },
    withState<ExampleState<Prop>>({
      [`${name}Field`]: 'foo',
    } as ExampleState<Prop>),
    withMethods((store) => {
      return {
        [`do${name}`]: () => {
          // Some logic
          if (store._onCreateSuccess) store._onCreateSuccess(name);
        },
      } as ExampleMethods<Prop>;
    }),
  ) as SignalStoreFeature<EmptyFeature, FilledFeature<Prop>>;
}
