import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  output,
  signal,
} from '@angular/core';
import { TINYMCE_SETTINGS } from '../formly-editor-field/formly-editor-field.constants';
import { OrganismsModule } from '../organisms.module';

type State = 'DISPLAY' | 'UPDATE' | 'OUTDATED_UPDATE';

@Component({
  selector: 'app-editable-text',
  standalone: true,
  imports: [OrganismsModule, NgTemplateOutlet],
  templateUrl: './editable-text.component.html',
  styleUrl: './editable-text.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditableTextComponent {
  text = input.required<string>();
  placeholder = input.required<string>();
  serverModel = input<string>();
  heading = input<string>();

  update = output<string>();

  settings = TINYMCE_SETTINGS;
  state = signal<State>('DISPLAY');
  textModel = '';

  constructor() {
    effect(() => {
      const hasServerModel = this.serverModel() != undefined;
      const isInUpdateState = this.state() === 'UPDATE';

      if (hasServerModel && isInUpdateState) {
        this.state.set('OUTDATED_UPDATE');
      }
    });
  }

  startEdit() {
    this.state.set('UPDATE');
    this.textModel = this.text();
  }

  finishEdit() {
    this.update.emit(this.textModel);
    this.state.set('DISPLAY');
  }

  cancelEdit() {
    this.textModel = this.text();
    this.state.set('DISPLAY');
  }
}
