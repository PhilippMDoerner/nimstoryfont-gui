import {
  ChangeDetectionStrategy,
  Component,
  computed,
  effect,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HtmlTextComponent } from 'src/app/design/atoms/html-text/html-text.component';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { ElementKind } from '../../atoms/_models/button';
import { EditorComponent } from '../../molecules/editor/editor.component';

export type TextFieldState = 'DISPLAY' | 'UPDATE' | 'OUTDATED_UPDATE';

@Component({
  selector: 'app-editable-text',
  imports: [
    HtmlTextComponent,
    IconComponent,
    EditorComponent,
    FormsModule,
    EditorComponent,
  ],
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
  submitButtonKind = input<ElementKind>('PRIMARY');
  cancelButtonKind = input<ElementKind>('SECONDARY');
  update = output<string>();

  state = signal<TextFieldState>('DISPLAY');
  editButtonText = computed(() => {
    switch (this.state()) {
      case 'DISPLAY':
        return 'edit';
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        return 'cancel';
    }
  });

  editorField = viewChild.required<EditorComponent>('editor');

  constructor() {
    effect(() => {
      const hasUpdateFailed = this.serverModel() != undefined;

      if (hasUpdateFailed) {
        this.state.set('OUTDATED_UPDATE');
      }
    });
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
  }

  finishEdit(newTextValue: string) {
    this.update.emit(newTextValue);
    this.state.set('DISPLAY');
  }

  cancelEdit() {
    this.state.set('DISPLAY');
  }
}
