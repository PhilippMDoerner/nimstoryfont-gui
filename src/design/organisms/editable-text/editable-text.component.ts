import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  ElementRef,
  input,
  output,
  signal,
  viewChild,
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
  canUpdate = input.required<boolean>();
  serverModel = input<string>();
  heading = input<string>();
  update = output<string>();

  settings = TINYMCE_SETTINGS;
  state = signal<State>('DISPLAY');
  textModel = '';
  editButtonText = computed(() => {
    switch (this.state()) {
      case 'DISPLAY':
        return 'edit';
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return 'cancel';
    }
  });

  editorField = viewChild<ElementRef>('editor');

  constructor() {
    effect(
      () => {
        const hasUpdateFailed = this.serverModel() != undefined;

        if (hasUpdateFailed) {
          this.state.set('OUTDATED_UPDATE');
        }
      },
      { allowSignalWrites: true },
    );
  }

  toggleEdit() {
    if (this.state() === 'UPDATE') {
      this.cancelEdit();
    } else {
      this.startEdit();
    }
  }

  startEdit() {
    this.state.set('UPDATE');
    this.textModel = this.text();
    this.focusField();
  }

  finishEdit() {
    this.update.emit(this.textModel);
    this.state.set('DISPLAY');
  }

  cancelEdit() {
    this.textModel = this.text();
    this.state.set('DISPLAY');
  }

  private focusField() {
    setTimeout(() => (this.editorField() as any)._editor.focus(), 100);
  }
}
