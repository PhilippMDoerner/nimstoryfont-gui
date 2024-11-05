import {
  ChangeDetectionStrategy,
  Component,
  computed,
  inject,
} from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { filter, mergeMap, skip, take } from 'rxjs';
import { Organization, OrganizationRaw } from 'src/app/_models/organization';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { GlobalStore } from 'src/app/global.store';
import { CreateUpdateState } from 'src/design/templates/_models/create-update-states';
import { filterNil } from 'src/utils/rxjs-operators';
import { TemplatesModule } from '../../../../design/templates/templates.module';
import { OrganizationCreateUpdatePageStore } from './organization-create-update-page.store';

@Component({
  selector: 'app-organization-create-update-page',
  standalone: true,
  imports: [TemplatesModule],
  templateUrl: './organization-create-update-page.component.html',
  styleUrl: './organization-create-update-page.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrganizationCreateUpdatePageComponent {
  globalStore = inject(GlobalStore);
  store = inject(OrganizationCreateUpdatePageStore);

  private route = inject(ActivatedRoute);
  private routeUrlSegments = toSignal(this.route.url);
  private routingService = inject(RoutingService);
  private formlyService = inject(FormlyService);

  campaignCharacters$ = toObservable(this.store.campaignCharacters).pipe(
    filterNil(),
  );
  campaignLocations$ = toObservable(this.store.campaignLocations).pipe(
    filterNil(),
  );
  organizationUpdateState$ = toObservable(this.store.organizationUpdateState);
  organizationCreateState$ = toObservable(this.store.createState);
  organization$ = toObservable(this.store.organization);

  state = computed<CreateUpdateState>(() => {
    const pathSegments = this.routeUrlSegments()?.map(
      (segment) => segment.path,
    );
    const isUpdatePage = pathSegments?.includes('update');
    if (!isUpdatePage) {
      return 'CREATE';
    }

    const isOutdatedUpdate = this.store.organizationServerModel() != null;
    if (isOutdatedUpdate) {
      return 'OUTDATED_UPDATE';
    } else {
      return 'UPDATE';
    }
  });

  userModel = computed(() => {
    switch (this.state()) {
      case 'CREATE':
        return {
          campaign: this.globalStore.currentCampaign()?.pk,
        } as Partial<OrganizationRaw>;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return this.store.organization();
    }
  });

  heading = computed(() => {
    switch (this.state()) {
      case 'CREATE':
        return 'Adding a new Organization';
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return `Updating Organization ${this.store.organization()?.name}`;
    }
  });

  formlyFields = computed<FormlyFieldConfig[]>(() => [
    this.formlyService.buildInputConfig({ key: 'name', inputKind: 'NAME' }),
    this.formlyService.buildOverviewSelectConfig({
      key: 'leader',
      valueProp: 'name',
      labelProp: 'name',
      options$: this.campaignCharacters$,
      campaign: this.globalStore.campaignName(),
      required: false,
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: 'headquarter',
      sortProp: 'name_full',
      labelProp: 'name',
      options$: this.campaignLocations$,
      campaign: this.globalStore.campaignName(),
      required: false,
    }),
  ]);

  cancel() {
    const campaign = this.globalStore.campaignName();
    switch (this.state()) {
      case 'CREATE':
        this.routingService.routeToPath('organization-overview', {
          campaign,
        });
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.routeToOrganization(this.store.organization());
    }
  }

  update(organization: Organization) {
    this.store.updateOrganization(organization as Organization);

    this.organizationUpdateState$
      .pipe(
        skip(1),
        filter((state) => state === 'success'),
        take(1),
      )
      .subscribe(() =>
        this.routeToOrganization(this.store.organization() as Organization),
      );
  }

  create(organization: Partial<OrganizationRaw>) {
    // TODO: Figure out why this gets called twice sometimes
    this.store.createOrganization(organization as OrganizationRaw);
    this.organizationCreateState$
      .pipe(
        filter((state) => state === 'success'),
        take(1),
        mergeMap(() => this.organization$),
        filterNil(),
      )
      .subscribe((organization) =>
        this.routeToOrganization(organization as Organization),
      );
  }

  private routeToOrganization(organization: Organization | undefined) {
    if (organization == null) return;

    this.routingService.routeToPath('organization', {
      campaign: this.globalStore.campaignName(),
      name: organization.name,
    });
  }
}
