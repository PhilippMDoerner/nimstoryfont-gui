import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormlyDatepickerFieldComponent } from './formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from './formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from './formly-select-disable/formly-select-disable-field.component';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
    FormlyDatepickerFieldComponent,
    FormlySelectDisableFieldComponent,
  ],
  imports: [
    CommonModule,
    MoleculesModule,
  ],
  exports: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
    FormlyDatepickerFieldComponent,
    FormlySelectDisableFieldComponent,
    MoleculesModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
