import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent as TinyMCEEditorComponent } from '@tinymce/tinymce-angular';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, filter, interval, map, take } from 'rxjs';
import { AlertComponent } from 'src/app/design/atoms/alert/alert.component';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { HtmlTextComponent } from 'src/app/design/atoms/html-text/html-text.component';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { SeparatorComponent } from 'src/app/design/atoms/separator/separator.component';
import { componentId } from 'src/utils/DOM';
import { ElementKind } from '../../atoms/_models/button';
import { TINYMCE_SETTINGS } from '../../organisms/formly-editor-field/formly-editor-field.constants';

export type TextFieldState = 'DISPLAY' | 'UPDATE' | 'OUTDATED_UPDATE';

/**
 * Possible scenarios
 */

@Component({
  selector: 'app-editor',
  imports: [
    NgTemplateOutlet,
    HtmlTextComponent,
    IconComponent,
    TinyMCEEditorComponent,
    FormsModule,
    AlertComponent,
    SeparatorComponent,
    ButtonComponent,
  ],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EditorComponent {
  destroyRef = inject(DestroyRef);

  text = input.required<string>();
  placeholder = input.required<string>();
  canUpdate = input.required<boolean>();
  serverModel = input<string>();
  state = input<TextFieldState>('DISPLAY');
  submitButtonKind = input<ElementKind>('PRIMARY');
  cancelButtonKind = input<ElementKind>('SECONDARY');
  enableAutosave = input<boolean>(true);
  toggleField = output<void>();
  update = output<string>();
  autosave = output<string>();
  cancel = output<void>();

  editorId = componentId();
  settings = TINYMCE_SETTINGS;
  textModel = '';

  editorField = viewChild.required<TinyMCEEditorComponent>('editor');

  constructor() {
    this.startAutosaveBehavior();

    effect(() => {
      switch (this.state()) {
        case 'DISPLAY':
          return this.resetTextfield();
        case 'UPDATE':
        case 'OUTDATED_UPDATE':
          return this.toUpdateState();
      }
    });
  }

  startEdit() {
    this.toggleField.emit();
  }

  finishEdit() {
    this.update.emit(this.textModel);
  }

  cancelEdit() {
    this.cancel.emit();
  }

  private toUpdateState() {
    this.resetTextfield();
    this.focusField();
  }

  private resetTextfield() {
    this.textModel = this.text();
  }

  private startAutosaveBehavior() {
    interval(5_000)
      .pipe(
        filter(() => this.enableAutosave()),
        map(() => this.textModel),
        distinctUntilChanged(),
        filter(
          (newText) => this.state() === 'UPDATE' && this.text() !== newText,
        ),
        takeUntilDestroyed(),
      )
      .subscribe((newText) => this.autosave.emit(newText));
  }

  private focusField() {
    interval(100)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.editorField().editor.iframeElement?.focus();
      });
  }
}
