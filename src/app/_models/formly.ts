import { AbstractControl } from '@angular/forms';
import { FormlyFieldConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { ElementKind } from 'src/design/atoms/_models/button';

export interface FormlyPasswordInterface {
  label?: string;
  className?: string;
  validators?: string[];
  disabled?: boolean;
}

export interface FormlyInterface {
  key: string;
  label?: string;
  required?: boolean;
  hide?: boolean;
  wrappers?: string[];
  className?: string;
  fieldGroupClassName?: string;
  validators?: string[];
  disabled?: boolean;
  showWrapperLabel?: boolean;
}

export interface FormlyOverviewSelectConfig<T> extends FormlyInterface {
  labelProp: keyof T;
  valueProp?: keyof T;
  sortProp?: keyof T;
  sortDirection?: 'asc' | 'desc';
  campaign?: string;
  options$: Observable<T[]>;
}

export type DisabledFunction<T> = (
  options: Observable<T[]>,
  formlyOptions: FormlyTemplateOptions,
  model: any,
  control: AbstractControl,
) => Observable<boolean[]>;

export interface FormlyOverviewDisabledSelectConfig<T>
  extends FormlyOverviewSelectConfig<T> {
  disabledExpression: DisabledFunction<T>;
  tooltipMessage: string;
  warningMessage: string;
}

export type InputKind = 'NUMBER' | 'STRING' | 'NAME';

export interface FormlyInputConfig extends FormlyInterface {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  parsers?: any;
  inputKind: InputKind;
}

export type FileFieldKind = 'IMAGE' | 'OTHER';

export interface FormlyFileConfig extends FormlyInterface {
  fileButtonType?: ElementKind;
  fileFieldKind?: FileFieldKind;
}

export interface StaticOption {
  label: String;
  value: String | Number;
}

export interface FormlyCustomStringSelectConfig extends FormlyInterface {
  options: string[];
}

export interface FormlyCustomSelectConfig extends FormlyInterface {
  options: StaticOption[];
}

export interface FormlyCheckboxConfig extends FormlyInterface {
  defaultValue: boolean;
}

export interface FormlyDatepickerConfig extends FormlyInterface {}

export interface FormlyCustomSessionSelect extends FormlyInterface {}

export type LoadAutocompleteOptions<T> = (
  searchTerm: string,
  props: FormlyFieldConfig['props'],
  formControl: AbstractControl,
) => Observable<T[]>;

export type CustomAutocompleteProps<T> = {
  optionLabelProp: keyof T;
  optionValueProp: keyof T;
  optionKeyProp: keyof T;
  loadOptions: LoadAutocompleteOptions<T>;
  initialValue$?: Observable<T>;
};
export type FormlyAutocompleteConfig<T> = FormlyInterface &
  CustomAutocompleteProps<T>;
