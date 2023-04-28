import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AtomsModule } from '../atoms/atoms.module';
import { ArticleFooterComponent } from './article-footer/article-footer.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';
import { CompareFormComponent } from './compare-form/compare-form.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { FormComponent } from './form/form.component';
import { FormlyFileFieldComponent } from './formly-file-field/formly-file-field.component';
import { ListComponent } from './list/list.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { SidebarLegendComponent } from './sidebar-legend/sidebar-legend.component';
import { SmallCreateFormComponent } from './small-create-form/small-create-form.component';



@NgModule({
  declarations: [
    EditToggleComponent,
    ConfirmationToggleButtonComponent,
    ArticleFooterComponent,
    PageBackgroundComponent,
    SidebarLegendComponent,
    FormlyFileFieldComponent,
    FormComponent,
    CompareFormComponent,
    SmallCreateFormComponent,
    ListComponent,
    ConfirmationModalComponent,
    BadgeListComponent,
    CollapsiblePanelComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    ReactiveFormsModule,
    FormsModule,
    EditorModule,
    FormlyBootstrapModule,
    FormlyModule,
  ],
  exports: [
    EditToggleComponent,
    ConfirmationToggleButtonComponent,
    ArticleFooterComponent,
    PageBackgroundComponent,
    SidebarLegendComponent,
    FormlyFileFieldComponent,
    FormComponent,
    CompareFormComponent,
    SmallCreateFormComponent,
    ListComponent,
    ConfirmationModalComponent,
    BadgeListComponent,
    CollapsiblePanelComponent,
    EditorModule,
    AtomsModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class MoleculesModule { }
