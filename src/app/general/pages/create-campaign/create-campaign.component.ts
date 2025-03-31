import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { BaseCampaignData } from 'src/app/_models/campaign';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { SiteAdministrationPageStore } from 'src/app/administration/pages/site-administration-page/site-administration-page.store';
import { NavigationStore } from 'src/app/navigation.store';
import { CreateUpdateComponent } from '../../../design/templates/create-update/create-update.component';

@Component({
  selector: 'app-create-campaign',
  imports: [CreateUpdateComponent],
  templateUrl: './create-campaign.component.html',
  styleUrl: './create-campaign.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateCampaignComponent {
  readonly store = inject(SiteAdministrationPageStore);

  private readonly formlyService = inject(FormlyService);
  private readonly navigationStore = inject(NavigationStore);
  private readonly routingService = inject(RoutingService);
  private readonly router = inject(Router);
  private readonly DEFAULT_URL =
    this.routingService.getRoutePath('campaign-overview');

  campaignModel: Partial<BaseCampaignData> = {};
  campaignFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'name',
      inputKind: 'NAME',
      required: true,
      maxLength: 40,
      placeholder: "Your campaign's name...",
    }),
    this.formlyService.buildInputConfig({
      key: 'subtitle',
      inputKind: 'STRING',
      required: false,
      maxLength: 400,
      placeholder: 'The subtitle to show on the home page',
    }),
    this.formlyService.buildFileFieldConfig({
      key: 'background_image',
      required: true,
      fileButtonType: 'DARK',
    }),
    this.formlyService.buildFileFieldConfig({
      key: 'icon',
      required: true,
      fileButtonType: 'DARK',
    }),
  ];

  routeBack() {
    const url = this.navigationStore.priorUrl() ?? this.DEFAULT_URL;
    this.router.navigateByUrl(url);
  }
}
