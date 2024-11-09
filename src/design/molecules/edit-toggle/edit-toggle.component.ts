import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ButtonComponent, ElementType } from '../../atoms';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent],
})
export class EditToggleComponent {
  buttonType = input<ElementType>('SECONDARY');
  toggled = input<boolean>(false);
  _toggled = false;
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    effect(() => (this._toggled = this.toggled()));
  }

  onClick() {
    this._toggled = !this._toggled;
    this.toggle.emit(this._toggled);
  }
}
