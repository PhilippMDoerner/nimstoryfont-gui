import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementType } from '../../atoms';

type State = 'DISPLAY' | 'CREATE';

@Component({
  selector: 'app-small-create-form',
  templateUrl: './small-create-form.component.html',
  styleUrls: ['./small-create-form.component.scss']
})
export class SmallCreateFormComponent {
  @Input() options!: any[];
  @Input() labelProp!: string;
  @Input() badgeText: string = 'Add Entry';
  @Input() valueProp!: string;
  @Input() submitButtonType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  @Input() isDisabledFunction: Function = (_: any) => false;
  
  @Output() create: EventEmitter<any> = new EventEmitter();
  
  form = new FormGroup({});
  userModel: any = {};
  state: State = 'DISPLAY';
  
  changeState(newState: State){
    this.state = newState;
  }
  
  onChange(event: any){
    const selectedIndex = event.srcElement.value;
    this.userModel = this.options[selectedIndex];
  }
  
  onCancel(){
    this.changeState('DISPLAY');
    this.userModel = {};
  }
  
  onSubmit(){
    this.changeState('DISPLAY');
    
    const hasValue = this.userModel[this.valueProp] != null;
    if(hasValue){
      this.create.emit(this.userModel);
    }
    this.userModel = {};
  }
}
