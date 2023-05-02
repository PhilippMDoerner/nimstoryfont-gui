import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MoleculesModule } from '../molecules/molecules.module';
import { FilterListComponent } from './filter-list/filter-list.component';
import { FormlyDatepickerFieldComponent } from './formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from './formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from './formly-select-disable/formly-select-disable-field.component';
import { IconCardListComponent } from './icon-card-list/icon-card-list.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    FilterListComponent,
    FormlyDatepickerFieldComponent,
    FormlyEditorFieldComponent,
    FormlySelectDisableFieldComponent,
    IconCardListComponent,
    ImageGridComponent,
    PageComponent,
    PageContainerComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    FormlyModule,
    MoleculesModule,
  ],
  exports: [
    FilterListComponent,
    FormlyDatepickerFieldComponent,
    FormlyEditorFieldComponent,
    FormlySelectDisableFieldComponent,
    IconCardListComponent,
    ImageGridComponent,
    MoleculesModule,
    PageComponent,
    PageContainerComponent,
    SidebarComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
