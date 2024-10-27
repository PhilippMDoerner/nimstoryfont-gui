import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';
import { TINYMCE_SETTINGS } from './formly-editor-field.constants';

@Component({
  selector: 'app-formly-editor-field',
  templateUrl: './formly-editor-field.component.html',
  styleUrls: ['./formly-editor-field.component.scss'],
})
export class FormlyEditorFieldComponent extends FieldType<FieldTypeConfig> {
  settings = TINYMCE_SETTINGS;
}
