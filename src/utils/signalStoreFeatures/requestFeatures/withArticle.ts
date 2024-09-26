import { inject } from '@angular/core';
import { signalStoreFeature, SignalStoreFeature } from '@ngrx/signals';
import { BaseService } from 'src/app/_services/base.service';
import { toTitleCase } from 'src/utils/string';
import { withCreateMutation } from './withCreateMutation';
import { withDeleteMutation } from './withDeleteMutation';
import { withQuery } from './withQuery';
import { withUpdateMutation } from './withUpdatMutation';

type PkQueryArgs = { pk: number };
type NameQueryArgs = { campaignName: string; name: string };
type DeleteArgs = { pk: number };
type UpdateArgs<T> = { pk: number; article: T };

export function withArticle<T, Prop extends string>(
  name: Prop,
  serviceClass: new (...args: never) => BaseService<T>,
): SignalStoreFeature {
  return signalStoreFeature(
    withQuery<T, NameQueryArgs, Prop>(name, (args: NameQueryArgs) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.readByParam(args.campaignName, args.name);
    }),
    withQuery<T, PkQueryArgs, Prop>(
      name,
      (args: PkQueryArgs) => {
        const service = inject<BaseService<T>>(serviceClass);
        return service.read(args.pk);
      },
      { methodName: `load${toTitleCase(name)}ByPk` },
    ),
    withCreateMutation<T, Prop>(name, (args: Partial<T>) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.create(args as T);
    }),
    withDeleteMutation<T, DeleteArgs, Prop>(name, (args: DeleteArgs) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.delete(args.pk);
    }),
    withUpdateMutation<T, UpdateArgs<T>, Prop>(name, (args: UpdateArgs<T>) => {
      const service = inject<BaseService<T>>(serviceClass);
      return service.patch(args.pk, args.article);
    }),
  );
}
