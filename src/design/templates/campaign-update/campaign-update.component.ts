import { JsonPipe } from '@angular/common';
import { Component, computed, input, output } from '@angular/core';
import { Campaign } from 'src/app/_models/campaign';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { AtomsModule } from 'src/design/atoms';
import { OrganismsModule } from 'src/design/organisms';
import { CreateUpdateState } from '../_models/create-update-states';
import { TemplatesModule } from '../templates.module';

@Component({
  selector: 'app-campaign-update',
  standalone: true,
  imports: [AtomsModule, OrganismsModule, TemplatesModule, JsonPipe],
  templateUrl: './campaign-update.component.html',
  styleUrl: './campaign-update.component.scss',
})
export class CampaignUpdateComponent {
  userModel = input.required<Partial<Campaign>>();
  _userModel = computed(() => this.removeFileValues(this.userModel()));
  serverModel = input<Campaign | undefined>(undefined);
  _serverModel = computed(() => {
    if (this.serverModel() == null) return undefined;
    return this.removeFileValues(this.serverModel() as Campaign);
  });
  mapOptions = input.required<OverviewItem[]>();
  formState = computed((): CreateUpdateState => {
    const hasAttempedOutdatedUpdate = this.serverModel() != null;
    return hasAttempedOutdatedUpdate ? 'OUTDATED_UPDATE' : 'UPDATE';
  });

  cancel = output<void>();
  update = output<Partial<Campaign>>();

  formlyFields = computed(() => [
    this.formlyService.buildInputConfig({
      key: 'name',
      inputKind: 'NAME',
      required: true,
      maxLength: 400,
    }),
    this.formlyService.buildInputConfig({
      key: 'subtitle',
      inputKind: 'STRING',
      required: false,
      maxLength: 400,
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: 'default_map',
      label: 'Default Map',
      valueProp: 'pk',
      labelProp: 'name',
      options$: this.mapOptions(),
      required: false,
    }),
    this.formlyService.buildFileFieldConfig({
      key: 'background_image',
      required: false,
    }),
    this.formlyService.buildFileFieldConfig({ key: 'icon', required: false }),
  ]);

  constructor(private formlyService: FormlyService) {}

  /**
   * File-values must be removed from a user-model, as formly will try to
   * set the values of those fields into input elements.
   * For file-inputs specifically however this is not possible, as the browser
   * forbids setting that one's value programmatically to anything other than ''.
   * For better error messages, use the original model and check out the error message in brave.
   * Also:
   * - https://developer.mozilla.org/en-US/docs/Web/API/DOMException#invalidstateerror
   * - https://stackoverflow.com/a/49971122/7481094
   */
  removeFileValues(model: Partial<Campaign>): Partial<Campaign> {
    return {
      ...model,
      background_image: '',
      icon: '',
    };
  }
}
