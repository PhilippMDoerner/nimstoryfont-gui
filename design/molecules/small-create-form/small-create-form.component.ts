import { NgTemplateOutlet } from '@angular/common';
import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ElementKind } from 'src/design/atoms/_models/button';
import { BadgeComponent } from 'src/design/atoms/badge/badge.component';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

type State = 'DISPLAY' | 'CREATE';
export type DisableableOption<T> = { value: T; disabled: boolean };
@Component({
  selector: 'app-small-create-form',
  templateUrl: './small-create-form.component.html',
  styleUrls: ['./small-create-form.component.scss'],
  standalone: true,
  imports: [BadgeComponent, NgTemplateOutlet, ButtonComponent],
})
export class SmallCreateFormComponent<T> {
  options = input.required<T[]>();
  labelProp = input.required<keyof T>();
  badgeText = input<string>('Add Entry');
  valueProp = input.required<keyof T>();
  submitButtonType = input<ElementKind>('PRIMARY');
  cancelButtonType = input<ElementKind>('SECONDARY');

  @Output() create: EventEmitter<T> = new EventEmitter();

  selectFieldName = computed(() => `select-' + ${String(this.labelProp())}`);
  form = new FormGroup({});
  userModel: Partial<T> = {};
  state = signal<State>('DISPLAY');

  changeState(newState: State) {
    this.state.set(newState);
  }

  onChange(event: any) {
    const selectedIndex = event.srcElement.value;
    this.userModel = this.options()[selectedIndex];
  }

  onCancel() {
    this.changeState('DISPLAY');
    this.userModel = {};
  }

  onSubmit() {
    this.changeState('DISPLAY');

    const hasValue = this.userModel[this.valueProp()] != null;
    if (hasValue) {
      this.create.emit(this.userModel as T);
    }
    this.userModel = {};
  }
}
