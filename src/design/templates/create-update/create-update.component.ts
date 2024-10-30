import { Component, input, output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CreateUpdateState } from '../_models/create-update-states';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss'],
})
export class CreateUpdateComponent<T, O> {
  heading = input.required<string>();
  state = input.required<CreateUpdateState>();
  userModel = input<Partial<T> | O>();
  formlyFields = input.required<FormlyFieldConfig[]>();
  serverModel = input.required<T | O>();

  create = output<NonNullable<T>>();
  update = output<NonNullable<T>>();
  cancel = output<void>();

  onSubmit(submittedData: Partial<T>): void {
    if (submittedData == null) return;
    console.log('onSubmit', submittedData);
    switch (this.state()) {
      case 'CREATE':
        this.create.emit(submittedData as NonNullable<T>);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.update.emit(submittedData as NonNullable<T>);
        break;
    }
  }
}
