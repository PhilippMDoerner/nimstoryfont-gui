import { Component, OnChanges, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FieldType } from '@ngx-formly/bootstrap/form-field';
import { FieldTypeConfig, FormlyTemplateOptions } from '@ngx-formly/core';
import { Observable, map, of } from 'rxjs';

interface CanDisableOption{
  enabled: boolean;
  value: any;
}

@Component({
  selector: 'app-formly-select-disable',
  templateUrl: './formly-select-disable-field.component.html',
  styleUrls: ['./formly-select-disable-field.component.scss']
})
export class FormlySelectDisableFieldComponent extends FieldType<FieldTypeConfig> implements OnInit, OnChanges{

  private static EMPTY_OPTION_LABEL = "------";
  private static EMPTY_OPTION_VALUE = null;
    
  selectOptions$: Observable<any[]> = of([]);
  hasInvalidOptionSelected$: Observable<boolean> = of(false);
  isLoading$!: Observable<boolean>;
  
  modelValue: any;

  ngOnInit(): void {
    const selectOptionValues$ = this.props.options as Observable<any[]>;
    const areObservableOptions: boolean = (selectOptionValues$ instanceof Observable);
    if(!areObservableOptions){
      throw "InvalidSelectOptionsException. You tried to create a FormlySelectDisableComponent - field, but provided an option that wasn't an Observable!"
    }
    this.isLoading$ = selectOptionValues$?.pipe(
      map(options => options == null)
    );
    this.selectOptions$ = selectOptionValues$?.pipe(
      map(options => {
        const hasOptions = options != null;
        if (!hasOptions){
          return [];
        }
        
        return options.map(
          option => ({ enabled: !this.isDisabledOption(option, this), value: option})
        );
      }),
    );
    
    this.hasInvalidOptionSelected$ = this.selectOptions$.pipe(
      map((canDisableOptions: CanDisableOption[]) => {
        const selectedOptionPk: number = this.model.session;
        const selectedOption: CanDisableOption | undefined = canDisableOptions.find(
          (option: CanDisableOption) => option.value.pk === selectedOptionPk
        );
        const hasSelectedOption = selectedOption != null;
        if(!hasSelectedOption) return false;
        
        const hasSelectedDisabledOption = !selectedOption.enabled;
        return hasSelectedDisabledOption;
      })
    );
    
    this.setModelValue();
  }
  
  ngOnChanges(){
    this.setModelValue();
  }
  
  setModelValue(){
    const key: string = this.key as string;
    const model = this.field.model;
    this.modelValue = model[key];
  }

  isDisabledOption(option: any, thisComponentRef: this): boolean{
    if(!this.canDisableOptions(thisComponentRef)){
      return false;
    };
    
    if(this.isEmptyOption(option, thisComponentRef)){
      return false;
    }
    
    return this.runCustomIsDisabledOptionCheck(option, thisComponentRef);
  }
  
  private runCustomIsDisabledOptionCheck(option: any, thisComponentRef: this): boolean{
    const isDisabledOption_Function: Function = thisComponentRef.props['disabledExpression'];
    const templateOptions: FormlyTemplateOptions = thisComponentRef.props;
    const formControl: AbstractControl = thisComponentRef.formControl;
    const model = thisComponentRef.model;
    
    return isDisabledOption_Function(option, templateOptions, model, formControl);
  }
  
  private isEmptyOption(option: any, thisComponentRef: this): boolean {
    const label = option[thisComponentRef.key as any];
    const value = option[thisComponentRef.props['valueProp']];
    return label === FormlySelectDisableFieldComponent.EMPTY_OPTION_LABEL 
      && value === FormlySelectDisableFieldComponent.EMPTY_OPTION_VALUE;
  }
  
  private canDisableOptions(thisComponentRef: this): boolean {
    return thisComponentRef.props['disabledExpression'] != null;
  }
}
