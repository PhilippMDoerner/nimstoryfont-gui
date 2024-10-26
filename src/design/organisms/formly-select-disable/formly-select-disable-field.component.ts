import { Component, OnChanges, OnInit } from '@angular/core';
import { FieldType } from '@ngx-formly/bootstrap/form-field';
import { FieldTypeConfig } from '@ngx-formly/core';
import { Observable, ReplaySubject, map, take } from 'rxjs';

interface CanDisableOption {
  enabled: boolean;
  value: any;
}

@Component({
  selector: 'app-formly-select-disable',
  templateUrl: './formly-select-disable-field.component.html',
  styleUrls: ['./formly-select-disable-field.component.scss'],
})
export class FormlySelectDisableFieldComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit, OnChanges
{
  public static EMPTY_OPTION_LABEL = '------';
  public static EMPTY_OPTION_VALUE = null;

  selectOptions$ = new ReplaySubject<{ option: any; enabled: boolean }[]>(1);
  hasInvalidOptionSelected$: Observable<boolean> = this.selectOptions$.pipe(
    map((options) => {
      const selectedOptionPk: number = this.model.session;
      const selectedOption = options.find(
        (option) => option.option.pk === selectedOptionPk,
      );
      const hasASelectedOption = selectedOption != null;
      if (!hasASelectedOption) return false;

      const isSelectedOptionDisabled = !selectedOption.enabled;
      return isSelectedOptionDisabled;
    }),
  );
  isLoading$: Observable<boolean> = this.selectOptions$?.pipe(
    map((options) => options == null),
  );

  modelValue: any;

  ngOnInit(): void {
    const options$ = this.props.options as Observable<
      { option: any; enabled: boolean }[]
    >;
    const areObservableOptions: boolean = options$ instanceof Observable;
    if (!areObservableOptions) {
      throw "InvalidSelectOptionsException. You tried to create a FormlySelectDisableComponent - field, but provided an option that wasn't an Observable!";
    }

    options$.pipe(take(1)).subscribe((val) => this.selectOptions$.next(val));

    this.setModelValue();
  }

  ngOnChanges() {
    this.setModelValue();
  }

  setModelValue() {
    const key: string = this.key as string;
    const model = this.field.model;
    this.modelValue = model[key];
  }
}
