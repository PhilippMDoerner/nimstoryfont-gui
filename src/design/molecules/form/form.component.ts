import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  Signal,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { ElementType, Icon } from '../../atoms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent<T> {
  form = new FormGroup({});

  model = input.required<T>();
  fields = input.required<FormlyFieldConfig[]>();
  enctype = input<string>('application/x-www-form-urlencoded');
  enableSubmitButtons = input<boolean>(true);
  disabled = input<boolean>(false);
  submitButtonType = input<ElementType>('PRIMARY');
  cancelButtonType = input<ElementType>('SECONDARY');
  submitIcon = input<Icon | undefined>(undefined);

  @Output() formlySubmit: EventEmitter<NonNullable<T>> = new EventEmitter<
    NonNullable<T>
  >();
  @Output() formlyCancel: EventEmitter<null> = new EventEmitter();

  _fields: Signal<FormlyFieldConfig[]> = computed(() =>
    this.fields().map((field): FormlyFieldConfig => {
      const canBeDisabled = field.props != null; // props = template-specific options. No props means you can't set anything to disabled
      if (!canBeDisabled) return field;

      return {
        ...field,
        props: {
          ...field.props,
          disabled: this.disabled(),
        },
      };
    }),
  );

  onSubmit(event: Event | undefined): void {
    event?.preventDefault(); //Prevent event from bubbling up
    const isValidForm = this.form.valid;
    if (!isValidForm) {
      return;
    }

    const formData = this.form.value as Partial<T>;
    this.formlySubmit.emit({
      ...this.model(),
      ...formData,
    } as NonNullable<T>);
  }

  onCancel(): void {
    this.formlyCancel.emit();
  }
}
