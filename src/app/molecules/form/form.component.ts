import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
  
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Output() formCancel: EventEmitter<null> = new EventEmitter();

  usedFields!: FormlyFieldConfig[];
  
  ngOnInit(): void {
    this.usedFields = this.disabled 
      ? this.toDisabledFieldList(this.fields)
      : this.fields;
  }
  
  ngOnChanges(): void {
    this.usedFields = this.disabled 
      ? this.toDisabledFieldList(this.fields)
      : this.fields;
  }
  
  toDisabledFieldList(fields: FormlyFieldConfig[]): FormlyFieldConfig[]{
    return fields.map(field => {
      const newField: FormlyFieldConfig = JSON.parse(JSON.stringify(field));
      const properties = newField.props;
      
      const canBeDisabled = properties != null;
      if(!canBeDisabled){
        return newField;
      }
  
      properties.disabled = true;
      return newField;
    });
  }
  
  onSubmit(): void{
    const isValidForm = this.form.valid;
    if(!isValidForm){
      return;
    }
    
    this.formSubmit.emit(this.model);
  }

  onCancel(): void{
    this.formCancel.emit();
  }
}
