import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldProps } from '@ngx-formly/bootstrap/form-field';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { Icon } from 'src/app/atoms';
import { ElementType } from 'src/app/atoms/_models/button';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit, OnChanges{
  form = new FormGroup({});

  @Input() model!: any;
  @Input() fields!: FormlyFieldConfig[];
  @Input() enctype: string = "application/x-www-form-urlencoded"; //Default form enctype in HTML5
  @Input() enableSubmitButtons: boolean = true;
  @Input() disabled: boolean = false;
  @Input() submitButtonType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  @Input() submitIcon?: Icon;
  
  @Output() formlySubmit: EventEmitter<any> = new EventEmitter();
  @Output() formlyCancel: EventEmitter<null> = new EventEmitter();

  usedFields!: FormlyFieldConfig[];
  
  ngOnInit(): void {
    this.usedFields = this.copyFields(this.fields);
    
    if(this.disabled){
      this.disableFields(this.usedFields);
    }
  }
  
  ngOnChanges(): void {
    this.usedFields = this.copyFields(this.fields);

    if(this.disabled){
      this.disableFields(this.usedFields);
    }
  }
  
  copyFields(fields: FormlyFieldConfig[]): FormlyFieldConfig[]{
    return fields.map(field => this.copyField(field));
  }
  
  copyField(field: FormlyFieldConfig): FormlyFieldConfig {
    const newField: FormlyFieldConfig = JSON.parse(JSON.stringify(field));
    
    const isSelectFieldWithObservable = field.props?.options instanceof Observable;
    if(isSelectFieldWithObservable){
      const properties = newField.props as FormlyFieldProps;
      properties.options = field.props?.options;
    }
    
    return newField;
  }
  
  disableFields(fields: FormlyFieldConfig[]){
    for(let field of fields){
      const properties = field.props;
      
      const canBeDisabled = properties != null;
      if(!canBeDisabled){
        continue;
      }

      properties.disabled = true;
    }
  }
  
  onSubmit(): void{
    const isValidForm = this.form.valid;
    if(!isValidForm){
      return;
    }
    
    this.formlySubmit.emit(this.model);
  }

  onCancel(): void{
    this.formlyCancel.emit();
  }
}
