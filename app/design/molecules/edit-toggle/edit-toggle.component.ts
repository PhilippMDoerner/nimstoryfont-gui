import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { ElementKind } from 'src/app/design/atoms/_models/button';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent],
})
export class EditToggleComponent {
  buttonKind = input<ElementKind>('SECONDARY');
  toggled = input<boolean>(false);
  _toggled = signal(false);
  @Output() toggle: EventEmitter<boolean> = new EventEmitter();

  constructor() {
    effect(() => {
      this._toggled.set(this.toggled());
    });
  }

  onClick() {
    this._toggled.set(!this._toggled());
    this.toggle.emit(this._toggled());
  }
}
