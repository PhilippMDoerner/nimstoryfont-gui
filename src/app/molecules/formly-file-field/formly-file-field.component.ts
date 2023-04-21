import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { FieldType, FieldTypeConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-formly-file-field',
  templateUrl: './formly-file-field.component.html',
  styleUrls: ['./formly-file-field.component.scss']
})
export class FormlyFileFieldComponent extends FieldType<FieldTypeConfig>{
  //Extends needs to be this elaborate as otherwise the Angular compiler does not know
  //that FieldType.formControl contains all fields required to satisfy the interface FormControl
  //https://github.com/ngx-formly/ngx-formly/issues/2842#issuecomment-1016476706
  @ViewChild('fileInputElement') fileInputElement!: ElementRef;
  
  constructor(
    private renderer: Renderer2,
  ){
    super();
  }
  
  // Required as only clicking on the label counts as clicking on the file-field button
  // Thus we catch that event, stop its propagation and click specifically on the file-field button
  // in a way that won't cause that event to bubble upwards.
  onButtonClick($event: Event){
    $event.stopPropagation();
    const element: HTMLElement = this.fileInputElement.nativeElement;
    const event = new MouseEvent('click', { bubbles: false });
    element.dispatchEvent(event);
  }
}