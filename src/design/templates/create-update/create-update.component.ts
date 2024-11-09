import { Component, input, output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CreateUpdateState } from '../_models/create-update-states';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { ButtonComponent } from '../../atoms/button/button.component';
import { NgSwitch, NgSwitchCase, NgTemplateOutlet } from '@angular/common';
import { FormComponent } from '../../molecules/form/form.component';
import { CompareFormComponent } from '../../molecules/compare-form/compare-form.component';

@Component({
    selector: 'app-create-update',
    templateUrl: './create-update.component.html',
    styleUrls: ['./create-update.component.scss'],
    standalone: true,
    imports: [
        PageContainerComponent,
        ButtonComponent,
        NgSwitch,
        NgSwitchCase,
        NgTemplateOutlet,
        FormComponent,
        CompareFormComponent,
    ],
})
export class CreateUpdateComponent<Full, Raw> {
  heading = input.required<string>();
  state = input.required<CreateUpdateState>();
  userModel = input<Full | Partial<Raw>>();
  formlyFields = input.required<FormlyFieldConfig[]>();
  serverModel = input.required<Full | undefined>();

  create = output<NonNullable<Partial<Raw>>>();
  update = output<NonNullable<Full>>();
  cancel = output<void>();

  onSubmit(submittedData: Partial<Raw> | Full): void {
    if (submittedData == null) return;
    console.log('onSubmit', submittedData);
    switch (this.state()) {
      case 'CREATE':
        this.create.emit(submittedData as NonNullable<Full>);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.update.emit(submittedData as NonNullable<Full>);
        break;
    }
  }
}
