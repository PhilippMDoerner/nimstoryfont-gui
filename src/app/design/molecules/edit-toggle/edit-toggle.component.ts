import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { HotkeyDirective } from 'src/app/_directives/hotkey.directive';
import { ElementKind } from 'src/app/design/atoms/_models/button';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';

@Component({
  selector: 'app-edit-toggle',
  templateUrl: './edit-toggle.component.html',
  styleUrls: ['./edit-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, HotkeyDirective],
})
export class EditToggleComponent {
  buttonKind = input<ElementKind>('SECONDARY');
  toggled = input<boolean>(false);
  disabledHotkey = input(false);
  title = input.required<string>();
  _toggled = signal(false);

  toggle = output<boolean>();

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
