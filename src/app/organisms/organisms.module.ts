import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormlyDatepickerFieldComponent } from './formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from './formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from './formly-select-disable/formly-select-disable-field.component';
import { ImageCarouselCardComponent } from './image-carousel-card/image-carousel-card.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { PageContainerComponent } from './page-container/page-container.component';



@NgModule({
  declarations: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
    FormlyDatepickerFieldComponent,
    FormlySelectDisableFieldComponent,
    ImageCarouselCardComponent,
    LeafletMapComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    MoleculesModule,
    EditorModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    FormlyBootstrapModule,
    FormlyModule,
    NgbModule,
  ],
  exports: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
    FormlyDatepickerFieldComponent,
    FormlySelectDisableFieldComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
