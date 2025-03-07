import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  DestroyRef,
  effect,
  inject,
  input,
  output,
  signal,
  viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditorComponent } from '@tinymce/tinymce-angular';

import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { distinctUntilChanged, filter, interval, map, take } from 'rxjs';
import { AlertComponent } from 'src/app/design/atoms/alert/alert.component';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { HtmlTextComponent } from 'src/app/design/atoms/html-text/html-text.component';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { SeparatorComponent } from 'src/app/design/atoms/separator/separator.component';
import { componentId } from 'src/utils/DOM';
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
  destroyRef = inject(DestroyRef);

  text = input.required<string>();
  placeholder = input.required<string>();
  canUpdate = input.required<boolean>();
  serverModel = input<string>();
  heading = input<string>();
  update = output<string>();

  editorId = componentId();
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

  editorField = viewChild.required<EditorComponent>('editor');

  constructor() {
    effect(() => {
      const hasUpdateFailed = this.serverModel() != undefined;

      if (hasUpdateFailed) {
        this.state.set('OUTDATED_UPDATE');
      }
    });

    this.startAutosaveBehavior();
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

  private startAutosaveBehavior() {
    interval(10_000)
      .pipe(
        map(() => this.textModel),
        distinctUntilChanged(),
        filter((newText) => this.text() !== newText),
        takeUntilDestroyed(),
      )
      .subscribe((newText) => this.update.emit(newText));
  }

  private focusField() {
    interval(100)
      .pipe(take(1), takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.editorField().editor.iframeElement?.focus();
      });
  }
}
