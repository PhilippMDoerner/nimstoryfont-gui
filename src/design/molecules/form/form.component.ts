import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { ElementType, Icon } from '../../atoms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent<T> {
  form = new FormGroup({});

  @Input() model!: T;
  fields = input.required<FormlyFieldConfig[]>();
  @Input() enctype: string = 'application/x-www-form-urlencoded'; //Default form enctype in HTML5
  @Input() enableSubmitButtons: boolean = true;
  disabled = input(false);
  @Input() submitButtonType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  @Input() submitIcon?: Icon;

  @Output() formlySubmit: EventEmitter<NonNullable<T>> = new EventEmitter();
  @Output() formlyCancel: EventEmitter<null> = new EventEmitter();

  usedFields = computed<FormlyFieldConfig[]>(() => {
    return this.fields().map((field) => {
      const isSelectFieldWithObservable =
        field.props?.options instanceof Observable;
      const newProps = isSelectFieldWithObservable
        ? (field.props as FormlyFieldProps).options
        : field.props;
      return {
        ...field,
        props: {
          ...field.props,
          disabled: this.disabled() ? true : undefined,
        },
      } satisfies FormlyFieldConfig;
    });
  });

  onSubmit(event: Event | undefined): void {
    event?.preventDefault(); //Prevent event from bubbling up
    const isValidForm = this.form.valid;
    if (!isValidForm) {
      return;
    }

    this.formlySubmit.emit(this.model as NonNullable<T>);
  }

  onCancel(): void {
    this.formlyCancel.emit();
  }
}
