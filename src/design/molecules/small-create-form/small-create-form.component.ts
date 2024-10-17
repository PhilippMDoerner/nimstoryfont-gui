import {
  Component,
  computed,
  EventEmitter,
  input,
  Input,
  Output,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementType } from '../../atoms';

type State = 'DISPLAY' | 'CREATE';

@Component({
  selector: 'app-small-create-form',
  templateUrl: './small-create-form.component.html',
  styleUrls: ['./small-create-form.component.scss'],
})
export class SmallCreateFormComponent<T> {
  @Input() options!: T[];
  labelProp = input.required<keyof T>();
  @Input() badgeText: string = 'Add Entry';
  @Input() valueProp!: keyof T;
  @Input() submitButtonType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  @Input() isDisabledFunction: Function = (_: any) => false;

  @Output() create: EventEmitter<T> = new EventEmitter();

  selectFieldName = computed(() => `select-' + ${String(this.labelProp())}`);
  form = new FormGroup({});
  userModel: Partial<T> = {};
  state: State = 'DISPLAY';

  changeState(newState: State) {
    this.state = newState;
  }

  onChange(event: any) {
    const selectedIndex = event.srcElement.value;
    this.userModel = this.options[selectedIndex];
  }

  onCancel() {
    this.changeState('DISPLAY');
    this.userModel = {};
  }

  onSubmit() {
    this.changeState('DISPLAY');

    const hasValue = this.userModel[this.valueProp] != null;
    if (hasValue) {
      this.create.emit(this.userModel as T);
    }
    this.userModel = {};
  }
}
