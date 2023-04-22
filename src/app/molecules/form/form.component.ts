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

  ngOnInit(): void {
    if(this.disabled){
      this.disableFields();
    }
  }
  
  ngOnChanges(): void {
    if(this.disabled){
      this.disableFields();
    }
  }
  
  disableFields(){
    for(let field of this.fields){
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
    
    this.formSubmit.emit(this.model);
  }

  onCancel(): void{
    this.formCancel.emit();
  }
}
