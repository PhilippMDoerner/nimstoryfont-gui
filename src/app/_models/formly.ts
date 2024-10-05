import { Observable } from 'rxjs';
import { ElementType } from '../../design/atoms';

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

export interface FormlyOverviewSelectConfig extends FormlyInterface {
  labelProp: string;
  valueProp?: string;
  sortProp?: string;
  campaign?: string;
  options$: Observable<any[]> | any[];
}

export interface FormlyOverviewDisabledSelectConfig
  extends FormlyOverviewSelectConfig {
  disabledExpression: Function;
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
  fileButtonType?: ElementType;
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
