import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { CreateUpdateState } from '../_models/create-update-states';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.scss']
})
export class CreateUpdateComponent<T> {
  @Input() heading!: string;
  @Input() state!: CreateUpdateState;
  @Input() userModel: Partial<T> = {};
  @Input() formlyFields!: FormlyFieldConfig[];
  @Input() serverModel!: T;
  
  @Output() create: EventEmitter<T> = new EventEmitter();
  @Output() update: EventEmitter<T> = new EventEmitter();
  @Output() cancel: EventEmitter<void> = new EventEmitter();
  
  onCancel(): void{
    this.cancel.emit();
  }
  
  onSubmit(submittedData: Partial<T>): void{
    switch(this.state){
      case 'CREATE':
        this.create.emit(submittedData as T);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.update.emit(submittedData as T);
        break;
    }
  }
}
