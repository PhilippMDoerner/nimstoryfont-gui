import { Injectable } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable, map } from 'rxjs';
import { FormlyCheckboxConfig, FormlyDatepickerConfig, FormlyFileConfig, FormlyInputConfig, FormlyInterface, FormlyOverviewDisabledSelectConfig, FormlyOverviewSelectConfig, FormlyPasswordInterface, FormlyCustomSelectConfig as FormlyStaticSelectConfig, FormlyCustomStringSelectConfig as FormlyStaticStringSelectConfig, StaticOption } from 'src/app/_models/formly';
import { OverviewItem } from 'src/app/_models/overview';
import { OverviewService } from '../article/overview.service';

@Injectable({
  providedIn: 'root'
})
export class FormlyServiceService {

  constructor(
    private overviewService: OverviewService,
  ) { }
  
  buildOverviewSelectConfig(config: FormlyOverviewSelectConfig): FormlyFieldConfig{
    const options$: Observable<any[]> = this.getOverviewItems(config);
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'select',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props:{
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        labelProp: config.labelProp,
        valueProp: config.valueProp ?? 'pk',
        options: options$,
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators: {
        validation: validators
      }
    };
  }
  
  buildDisableSelectConfig(config: FormlyOverviewDisabledSelectConfig): FormlyFieldConfig{
    const options$: Observable<any[]> = this.getOverviewItems(config);
    const validators = this.getValidators(config);
    
    return {
      key: config.key,
      type: 'select-disable',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide ?? false,
      props:{
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        labelProp:  config.labelProp,
        valueProp:  config.valueProp ?? 'pk',
        options: options$,
        required: config.required ?? true,
        disabledExpression: config.disabledExpression,
        tooltipMessage: config.tooltipMessage,
        warningMessage: config.warningMessage,
        additionalProperties: {
          showWrapperLabel: config.showWrapperLabel ?? true,
        }
      },
      validators: {
        validation: validators
      },
    };
  }
  
  buildStaticSelectConfig(config: FormlyStaticSelectConfig): FormlyFieldConfig{
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'select',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide ?? false,
      props:{
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        options: config.options,
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators: {
        validation: validators,
      },
    }
  }
  
  buildStaticStringSelectConfig(partialConfig: FormlyStaticStringSelectConfig): FormlyFieldConfig{
    const optionStrings: string[] = partialConfig.options;
    
    let options: StaticOption[] = optionStrings.map(str => {
      return {label: str, value: str}
    });
    
    const config: FormlyStaticSelectConfig = {
      ...partialConfig,
      options
    };
    
    return this.buildStaticSelectConfig(config);
  }
    
  buildInputConfig(config: FormlyInputConfig): FormlyFieldConfig{
    const validators = this.getValidators(config);
    if(config.inputKind === 'NUMBER'){
      validators.push('notInteger');
    }
    if(config.inputKind === 'NAME'){
      //Why 'hasSpecialCharacters' validation? Names are used in URLs, they mustn't have special characters
      validators.push('hasSpecialCharacters');
    }
    
    let innerInputType: 'string' | 'number';
    switch(config.inputKind){
      case 'NUMBER':
        innerInputType = 'number';
        break;
      default:
        innerInputType = 'string'
    }
    
    return {
      key: config.key,
      type: 'input',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide ?? false,
      parsers: config.parsers,
      props:{
        maxLength: config.maxLength,
        minLength: config.minLength,
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        type: innerInputType,
        required: config.required ?? true,
        disabled: !!config.disabled,
        placeholder: config.placeholder ?? undefined,
      },
      validators:{
        validation: validators,
      }
    }
  }
  
  buildSinglePasswordConfig(config: FormlyInterface): FormlyFieldConfig{
    const validators = this.getValidators(config);

    return {
      key: config.key,
      type: 'input',
      className: config.className,
      fieldGroupClassName: config.fieldGroupClassName,
      templateOptions:{
        label: config.label ?? 'Password',
        type: 'password',
        required: true,
        placeholder: 'Your password',
        disabled: config.disabled,
      },
      validators:{
        validation: validators
      }
    }
  }
  
  buildConfirmedPasswordConfig(config: FormlyPasswordInterface): FormlyFieldConfig{
    const validators = config.validators ?? [];
    validators.push('required');
    
    const passwordField = {
      key: 'password', //Hard coded, fieldMatch validator depends on this
      type: 'input',
      className: config.className,
      templateOptions:{
        label: config.label ?? 'Password',
        type: 'password',
        required: true,
        placeholder: 'Password, at least 7 characters',
        disabled: config.disabled,
      },
      validators:{
        validation: validators
      }
    }

    const confirmPasswordField = {
      key: 'passwordConfirm', //Hard coded, fieldMatch validator depends on this
      type: 'input',
      className: config.className,
      templateOptions:{
        label: (config.label) ? 'Confirm ' + config.label : 'Password Confirmation',
        type: 'password',
        required: true,
        placeholder: 'Please re-enter your password',
        disabled: config.disabled,
      },
    }

    return {
      validators: {
        validation: [
          { name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } },
        ]
      },
      fieldGroup: [
        passwordField,
        confirmPasswordField
      ]
    }
  }
  
  buildCheckboxConfig(config: FormlyCheckboxConfig): FormlyFieldConfig{
    return{
      key: config.key,
      type: 'checkbox',
      className: config.className,
      wrappers: config.wrappers,
      defaultValue: config.defaultValue,
      hideExpression: config.hide,
      props:{
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
      },
    }
  }
  
  buildDatepickerConfig(config: FormlyDatepickerConfig): FormlyFieldConfig{
    const validators = this.getValidators(config);
    validators.push('date');

    return {
      key: config.key,
      type: 'datepicker',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props:{
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators:{
        validation: validators,
      }
    }
  }
  
  buildFileFieldConfig(config: FormlyFileConfig): FormlyFieldConfig{
    const validators = this.getValidators(config);
    
    return {
      key: config.key,
      type: 'file',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props: {
        buttonType: config.fileButtonType ?? 'SECONDARY',
        fileFieldKind: config.fileFieldKind ?? 'IMAGE',
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        required: config.required ?? true,
        disabled: !!config.disabled,
      },
      validators:{
        validation: validators,
      }
    }
  }
  
  buildEditorConfig(config: FormlyInterface): FormlyFieldConfig{
    const validators = this.getValidators(config);
    
    return {
      key: config.key,
      type: 'text-editor',
      className: config.className,
      wrappers: config.wrappers,
      hideExpression: config.hide,
      props:{
        label: config.label ?? this.capitalizeFirstLetter(config.key),
        required: config.required ?? true,
        disabled: config.disabled,
      },
      validators:{
        validation: validators
      }
    }
  }

  /**
   * Convenience method to quickly turn a form of fields used to
   * create entries into one for updating entries.
   * Some fields are forbidden to be part of update forms and so they
   * will be filtered out of the form. These are:
   * - File Fields: The Browser does not allow to assign values to a file field
   *    Trying to do so will cause errors and crashes
   */
  toUpdateForm(fields: FormlyFieldConfig[]): FormlyFieldConfig[]{
    return fields.filter(field => {
      const isFileField = field.type === 'file';
      return !isFileField;
    });
  }
  
  private getValidators(config: FormlyInterface){
    const validators = config.validators ?? [];
    if (config.required) {
      validators.push('required');
    }
    
    return validators;
  }
  
  private getOverviewItems(config: FormlyOverviewSelectConfig): Observable<any[]> {
    const isCampaignSpecific = config.campaign != null;
    const sortProp = config.sortProp as keyof OverviewItem;
    let options = isCampaignSpecific 
      ? this.overviewService.getCampaignOverviewItems(config.campaign as string, config.overviewType, sortProp)
      : this.overviewService.getAllOverviewItems(config.overviewType, sortProp);
        
    if(!config.required){
      options = this.addEmptyOption(options, config);
    }
    
    return options;
  }
  
  private addEmptyOption(observable: Observable<any[]>, config: FormlyOverviewSelectConfig): Observable<any[]>{
    return observable.pipe(
      map(values => [
        this.createEmptyOption(config), 
        ...values
      ]),
    );
  }
  
  private createEmptyOption(config: FormlyOverviewSelectConfig){
    const emptyOption: any = {};
    emptyOption[config.key] = '------';
    const valueProp: string = config.valueProp ?? config.key;
    emptyOption[valueProp] = null;
    return emptyOption;
  }
  
  
  private capitalizeFirstLetter(s: string){
    return s.charAt(0).toUpperCase() + s.slice(1);
  }
}
