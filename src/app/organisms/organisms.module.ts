import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { MoleculesModule } from '../molecules/molecules.module';
import { FormlyDatepickerFieldComponent } from './formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from './formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from './formly-select-disable/formly-select-disable-field.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { PageComponent } from './page/page.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FilterListComponent } from './filter-list/filter-list.component';
import { IconCardListComponent } from './icon-card-list/icon-card-list.component';



@NgModule({
  declarations: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
    FormlyDatepickerFieldComponent,
    FormlySelectDisableFieldComponent,
    SidebarComponent,
    PageComponent,
    FilterListComponent,
    IconCardListComponent,
  ],
  imports: [
    CommonModule,
    MoleculesModule,
    FormlyModule,
  ],
  exports: [
    PageContainerComponent,
    FormlyEditorFieldComponent,
    FormlyDatepickerFieldComponent,
    FormlySelectDisableFieldComponent,
    MoleculesModule,
    SidebarComponent,
    PageComponent,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
  ]
})
export class OrganismsModule { }
