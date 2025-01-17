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
import { FormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';

import { AlertComponent } from 'src/app/design/atoms/alert/alert.component';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { HtmlTextComponent } from 'src/app/design/atoms/html-text/html-text.component';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { SeparatorComponent } from 'src/app/design/atoms/separator/separator.component';
import { TINYMCE_SETTINGS } from '../formly-editor-field/formly-editor-field.constants';

type State = 'DISPLAY' | 'UPDATE' | 'OUTDATED_UPDATE';

@Component({
  selector: 'app-editable-text',
  imports: [
    NgTemplateOutlet,
    HtmlTextComponent,
    IconComponent,
    EditorComponent,
    FormsModule,
    AlertComponent,
    SeparatorComponent,
    ButtonComponent,
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
