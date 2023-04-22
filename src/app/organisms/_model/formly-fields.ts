export interface FormlyInterface{
  key: string,
  label?: string,
  required?: boolean,
  hide?: boolean,
  wrappers?: string[],
  className?: string,
  fieldGroupClassName?: string,
  validators?: string[],
  disabled?: boolean,
  showWrapperLabel?: boolean,
}

export interface FormlyOverviewSelectConfig extends FormlyInterface{
  labelProp?: string,
  valueProp?: string,
  sortProp?: string,
  overviewType: any,
  campaign?: string,
}

export interface FormlyOverviewDisabledSelectConfig extends FormlyOverviewSelectConfig{
  disabledExpression: Function,
  tooltipMessage: string,
  warningMessage: string,
}