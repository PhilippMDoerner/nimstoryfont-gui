import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent {
  @Input() text!: string;
  @Output() textChange = new EventEmitter<string>();
  
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
  }
  
  constructor(){console.log(this)}
  
  onEditorKeyUp() {
    this.textChange.emit(this.text);
  }
}
