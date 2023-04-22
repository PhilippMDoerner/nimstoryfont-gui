import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  form = new FormGroup({});

  @Input() model!: any;
  @Input() fields!: FormlyFieldConfig[];
  @Input() enctype: string = "application/x-www-form-urlencoded"; //Default form enctype in HTML5
  @Input() enableSubmitButtons: boolean = true;
  @Output() formSubmit: EventEmitter<any> = new EventEmitter();
  @Output() formCancel: EventEmitter<null> = new EventEmitter();

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
