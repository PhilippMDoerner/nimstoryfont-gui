import { inject } from '@angular/core';
import { signalStoreFeature, SignalStoreFeature } from '@ngrx/signals';
import { BaseService } from 'src/app/_services/base.service';
import { EmptyFeature } from './types';
import {
  CreateComputed,
  CreateMethods,
  CreateState,
  withCreateMutation,
} from './withCreateMutation';
import {
  DeleteComputed,
  DeleteMethods,
  DeleteState,
  withDeleteMutation,
} from './withDeleteMutation';
import {
  QueryComputed,
  QueryMethods,
  QueryState,
  withQuery,
} from './withQuery';
import {
  UpdateComputed,
  UpdateMethods,
  UpdateState,
  withUpdateMutation,
} from './withUpdatMutation';

type NameQueryArgs = { campaignName: string; name: string };
type DeleteArgs = { pk: number };
type UpdateArgs<T> = { pk: number; article: T };

export type ArticleState<T, Prop extends string> = QueryState<T, Prop> &
  UpdateState<T, Prop> &
  CreateState<T, Prop> &
  DeleteState<T, Prop>;

export type ArticleComputed<Prop extends string> = QueryComputed<Prop> &
  UpdateComputed<Prop> &
  CreateComputed<Prop> &
  DeleteComputed<Prop>;

export type ArticleMethods<T, Prop extends string> = QueryMethods<
  NameQueryArgs,
  Prop
> &
  UpdateMethods<UpdateArgs<T>, Prop> &
  CreateMethods<Partial<T>, Prop> &
  DeleteMethods<DeleteArgs, Prop>;

export type ArticleFeature<T, Prop extends string> = {
  state: ArticleState<T, Prop>;
  computed: ArticleComputed<Prop>;
  methods: ArticleMethods<T, Prop>;
};

export function withArticle<T, Prop extends string>(
  name: Prop,
  serviceClass: new (...args: never) => BaseService<T>,
): SignalStoreFeature<EmptyFeature, ArticleFeature<T, Prop>> {
  return signalStoreFeature(
    withQuery<T, NameQueryArgs, Prop>(name, (args: NameQueryArgs) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.readByParam(args.campaignName, args.name);
    }),
    withCreateMutation(name, (args: Partial<T>) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.create(args as T);
    }),
    withDeleteMutation(name, (args: DeleteArgs) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.delete(args.pk);
    }),
    withUpdateMutation(name, (args: UpdateArgs<T>) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.patch(args.pk, args.article);
    }),
  ) as SignalStoreFeature<EmptyFeature, ArticleFeature<T, Prop>>;
}
