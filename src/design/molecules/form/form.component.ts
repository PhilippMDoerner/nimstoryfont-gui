import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { distinctUntilChanged, interval, map, startWith } from 'rxjs';
import { ElementType } from 'src/design/atoms/_models/button';
import { Icon } from 'src/design/atoms/_models/icon';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    ButtonComponent,
    FormlyModule,
    NgbTooltip,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    NgTemplateOutlet,
  ],
})
export class FormComponent<T> {
  form = new FormGroup({});

  model = input.required<T>();
  fields = input.required<FormlyFieldConfig[]>();
  enctype = input('application/x-www-form-urlencoded'); //Default form enctype in HTML5
  enableSubmitButtons = input(true);
  disabled = input(false);
  submitButtonType = input<ElementType>('PRIMARY');
  cancelButtonType = input<ElementType>('SECONDARY');
  submitIcon = input<Icon>();

  @Output() formlySubmit: EventEmitter<NonNullable<T>> = new EventEmitter();
  @Output() formlyCancel: EventEmitter<null> = new EventEmitter();

  formErrors = toSignal(
    interval(1000).pipe(
      startWith([]),
      map(() => this.form.errors),
      distinctUntilChanged(),
      map((errors) => {
        if (errors == null) return [];

        return Object.keys(errors).map(
          (errorName) => errors[errorName].message as string,
        );
      }),
      distinctUntilChanged(),
    ),
  );

  usedFields = computed<FormlyFieldConfig[]>(() => {
    return this.fields().map((field) => {
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

    this.formlySubmit.emit(this.model() as NonNullable<T>);
  }

  onCancel(): void {
    this.formlyCancel.emit();
  }
}
