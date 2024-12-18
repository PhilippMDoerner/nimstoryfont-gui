import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
  Signal,
} from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CharacterDetails } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { BadgeComponent } from '../../atoms/badge/badge.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { SeparatorComponent } from '../../atoms/separator/separator.component';
import { BadgeListComponent } from '../../molecules/badge-list/badge-list.component';
import { CompareFormComponent } from '../../molecules/compare-form/compare-form.component';
import { FormComponent } from '../../molecules/form/form.component';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { CreateUpdateState } from '../_models/create-update-states';

type MembershipFormState = 'CREATE' | 'DISPLAY';

@Component({
  selector: 'app-character-create-update',
  templateUrl: './character-create-update.component.html',
  styleUrls: ['./character-create-update.component.scss'],
  standalone: true,
  imports: [
    PageContainerComponent,
    ButtonComponent,
    NgTemplateOutlet,
    FormComponent,
    SeparatorComponent,
    BadgeListComponent,
    BadgeComponent,
    CompareFormComponent,
  ],
})
export class CharacterCreateUpdateComponent {
  state = input.required<CreateUpdateState>();
  campaignName = input.required<string>();
  userModel = input<Partial<CharacterDetails>>({});
  serverModel = input.required<CharacterDetails | undefined>();
  lastVisitedPlaceOptions = input.required<OverviewItem[]>();

  @Output() create: EventEmitter<CharacterDetails> = new EventEmitter();
  @Output() update: EventEmitter<CharacterDetails> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();

  lastVisitedPlaceOptions$ = toObservable(this.lastVisitedPlaceOptions);
  formlyFields: Signal<FormlyFieldConfig[]> = computed(() => [
    this.formlyService.buildCheckboxConfig({
      key: 'player_character',
      label: 'Player Character',
      defaultValue: false,
    }),
    this.formlyService.buildCheckboxConfig({
      key: 'alive',
      defaultValue: true,
    }),
    this.formlyService.buildInputConfig({
      key: 'name',
      inputKind: 'NAME',
    }),
    this.formlyService.buildInputConfig({
      key: 'title',
      required: false,
      inputKind: 'STRING',
    }),
    this.formlyService.buildStaticStringSelectConfig({
      key: 'gender',
      label: 'Sex',
      options: ['Other', 'Female', 'Male'],
    }),
    this.formlyService.buildInputConfig({
      key: 'race',
      inputKind: 'STRING',
    }),
    this.formlyService.buildOverviewSelectConfig({
      key: 'current_location',
      sortProp: 'name_full',
      labelProp: 'name_full',
      label: 'Location',
      campaign: this.campaignName(),
      required: false,
      options$: this.lastVisitedPlaceOptions$,
    }),
  ]);

  heading = computed(() => this.getHeading(this.state()));

  membershipFormState = signal<MembershipFormState>('DISPLAY');

  constructor(private formlyService: FormlyService) {}

  onCancel(): void {
    this.cancel.emit();
  }

  onSubmit(submittedData: Partial<CharacterDetails>): void {
    switch (this.state()) {
      case 'CREATE':
        this.create.emit(submittedData as CharacterDetails);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.update.emit(submittedData as CharacterDetails);
        break;
    }
  }

  private getHeading(state: CreateUpdateState): string {
    switch (state) {
      case 'CREATE':
        return 'Creating New Character';
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return `Updating Character ${this.userModel().name}`;
    }
  }
}
