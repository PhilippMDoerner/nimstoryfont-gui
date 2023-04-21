import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormlyEditorFieldComponent } from './formly-editor-field/formly-editor-field.component';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    EditorModule,
    ReactiveFormsModule,
    RouterModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [
        { name: 'text-editor', component: FormlyEditorFieldComponent }
      ]
    }),
  ],
  exports: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
