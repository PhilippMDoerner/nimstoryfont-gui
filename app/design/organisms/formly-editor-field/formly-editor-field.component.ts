import { Component } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-editor-field',
  templateUrl: './formly-editor-field.component.html',
  styleUrls: ['./formly-editor-field.component.scss'],
})
export class FormlyEditorFieldComponent extends FieldType<FieldTypeConfig>{
  settings = {
    plugins: [
        'advlist autolink lists link image charmap anchor',
        'searchreplace visualblocks fullscreen media',
        'table paste help wordcount'
    ],
    toolbar: [
        'undo redo | formatselect | bold italic underline strikethrough subscript superscript link unlink blockquote | backcolor forecolor hilitecolor fontsizeselect |',
        'alignleft aligncenter alignright | bullist numlist outdent indent | removeformat | table help'
    ],
    skin: 'oxide-dark',
    content_css: 'dark',
    browser_spellcheck: true,
    menubar: false,
    height: 500,
    convert_urls: false,
    relative_urls: false,
    branding: false,
    base_url: '/tinymce',
    suffix: '.min'
  };
}