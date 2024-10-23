import { signalStoreFeature } from '@ngrx/signals';
import { QueryMap } from './types';
import { withQueryMethods } from './withQueryMethods';
import { withQueriesState } from './withQueryState';

// The types below are useless as `AllNewMethods` and `AllNewProperties` inside them get evaluated to unknown
// type QueriesFeatureResult<Queries extends QueryMap> = {
//   computed: {};
//   methods: MethodsDictionary & AllNewMethods<Queries>;
//   state: {} & AllNewProperties<Queries>;
// };

// type QueriesFeature<Queries extends QueryMap> = SignalStoreFeature<
//   EmptyFeatureResult,
//   QueriesFeatureResult<Queries>
// >;

export function withQueries<Queries extends QueryMap>(
  queriesFactory: () => Queries,
) {
  return signalStoreFeature(
    withQueriesState(queriesFactory),
    withQueryMethods(queriesFactory),
  );
}
