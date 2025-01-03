import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FieldType, FieldTypeConfig, FormlyModule } from '@ngx-formly/core';
import { FileFieldKind } from 'src/app/_models/formly';
import { ElementKind } from 'src/design/atoms/_models/button';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

// WARNING: DO NOT USE IN FORMS THAT UPDATE
// THIS FIELD DOES NOT TOLERATE RECEIVING EXISTING VALUES
@Component({
  selector: 'app-formly-file-field',
  templateUrl: './formly-file-field.component.html',
  styleUrls: ['./formly-file-field.component.scss'],
  standalone: true,
  imports: [
    ButtonComponent,
    FormlyModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
  ],
})
export class FormlyFileFieldComponent
  extends FieldType<FieldTypeConfig>
  implements OnInit
{
  //Extends needs to be this elaborate as otherwise the Angular compiler does not know
  //that FieldType.formControl contains all fields required to satisfy the interface FormControl
  //https://github.com/ngx-formly/ngx-formly/issues/2842#issuecomment-1016476706
  @ViewChild('fileInputElement') fileInputElement!: ElementRef;

  selectedFileName?: string;
  buttonType!: ElementKind;
  fieldKind!: FileFieldKind;

  ngOnInit(): void {
    this.buttonType = this.props['buttonType'];
    this.fieldKind = this.props['fileFieldKind'];
  }

  onFileSelect(event: any) {
    const files = event.target.files;
    const hasSelectedFile = files.length > 0;
    if (!hasSelectedFile) return;
    const file: File = files[0];
    this.model[this.key as string] = file;

    const filePath: string = event.target.value;
    this.setModelValue(filePath);
  }

  private setModelValue(filePath: string): void {
    const isWindowsPath = filePath.includes('\\');
    const splitter = isWindowsPath ? '\\' : '/';

    this.selectedFileName = filePath?.split(splitter).pop();
  }

  // Required as only clicking on the label counts as clicking on the file-field button
  // Thus we catch that event, stop its propagation and click specifically on the file-field button
  // in a way that won't cause that event to bubble upwards.
  onButtonClick(event: Event) {
    event.stopPropagation();
    const element: HTMLElement = this.fileInputElement.nativeElement;
    const newClick = new MouseEvent('click', { bubbles: false });
    element.dispatchEvent(newClick);
  }
}
