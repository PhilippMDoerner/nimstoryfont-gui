import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { EditorComponent } from './editor/editor.component';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [
    EditorComponent,
    PageContainerComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    EditorModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    EditorComponent,
    PageContainerComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
