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

export interface FormlyInterface<T> {
  key: Exclude<keyof T, symbol>;
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

export interface FormlyOverviewSelectConfig<Model, Option>
  extends FormlyInterface<Model> {
  labelProp: keyof Option;
  valueProp?: keyof Option;
  sortProp?: keyof Option;
  sortDirection?: 'asc' | 'desc';
  campaign?: string;
  options$: Observable<Option[]>;
}

export type DisabledFunction<T> = (
  options: Observable<T[]>,
  formlyOptions: FormlyTemplateOptions,
  model: any,
  control: AbstractControl,
) => Observable<boolean[]>;

export interface FormlyOverviewDisabledSelectConfig<Model, Option>
  extends FormlyOverviewSelectConfig<Model, Option> {
  disabledExpression: DisabledFunction<Option>;
  tooltipMessage: string;
  warningMessage: string;
}

export type InputKind = 'NUMBER' | 'STRING' | 'NAME' | 'NUMBER_FRACTION';

export interface FormlyInputConfig<T> extends FormlyInterface<T> {
  placeholder?: string;
  maxLength?: number;
  minLength?: number;
  parsers?: any;
  inputKind: InputKind;
}

export type FileFieldKind = 'IMAGE' | 'OTHER';

export interface FormlyFileConfig<T> extends FormlyInterface<T> {
  fileButtonType?: ElementKind;
  fileFieldKind?: FileFieldKind;
}

export interface StaticOption {
  label: String;
  value: String | Number;
}

export interface FormlyCustomStringSelectConfig<T> extends FormlyInterface<T> {
  options: string[];
}

export interface FormlyCustomSelectConfig<T> extends FormlyInterface<T> {
  options: StaticOption[];
}

export interface FormlyCheckboxConfig<T> extends FormlyInterface<T> {
  defaultValue: boolean;
}

export interface FormlyDatepickerConfig<T> extends FormlyInterface<T> {}

export interface FormlyCustomSessionSelect<T> extends FormlyInterface<T> {}

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
export type FormlyAutocompleteConfig<Model, Option> = FormlyInterface<Model> &
  CustomAutocompleteProps<Option>;
