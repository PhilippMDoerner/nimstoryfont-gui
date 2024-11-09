import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AtomsModule } from '../atoms';
import { ArticleFooterComponent } from './article-footer/article-footer.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { ChoiceSelectComponent } from './choice-select/choice-select.component';
import { CollapsiblePanelComponent } from './collapsible-panel/collapsible-panel.component';
import { CompareFormComponent } from './compare-form/compare-form.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { FormComponent } from './form/form.component';
import { FileValueAccessor } from './formly-file-field/file-value-accessor';
import { FormlyFileFieldComponent } from './formly-file-field/formly-file-field.component';
import { IconCardComponent } from './icon-card/icon-card.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { LinkEntryComponent } from './link-entry/link-entry.component';
import { ListComponent } from './list/list.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { SearchFieldComponent } from './search-field/search-field.component';
import { SidebarLegendComponent } from './sidebar-legend/sidebar-legend.component';
import { SmallCreateFormComponent } from './small-create-form/small-create-form.component';

@NgModule({
  declarations: [FileValueAccessor],
  imports: [
    SidebarLegendComponent,
    SearchFieldComponent,
    ConfirmationModalComponent,
    EditToggleComponent,
    FormlyFileFieldComponent,
    IconCardComponent,
    ImageCardComponent,
    LinkEntryComponent,
    ListComponent,
    PageBackgroundComponent,

    BadgeListComponent,
    SmallCreateFormComponent,
    ChoiceSelectComponent,
    CollapsiblePanelComponent,
    CompareFormComponent,
    FormComponent,
    ConfirmationToggleButtonComponent,
    ArticleFooterComponent,
    AtomsModule,
    CommonModule,
    EditorModule,
    FormlyBootstrapModule,
    FormlyModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ArticleFooterComponent,
    AtomsModule,
    BadgeListComponent,
    CollapsiblePanelComponent,
    CollapsiblePanelComponent,
    CompareFormComponent,
    ConfirmationModalComponent,
    ConfirmationToggleButtonComponent,
    EditorModule,
    EditToggleComponent,
    FormComponent,
    FormlyBootstrapModule,
    FormlyFileFieldComponent,
    FormsModule,
    IconCardComponent,
    ImageCardComponent,
    ListComponent,
    PageBackgroundComponent,
    ReactiveFormsModule,
    SearchFieldComponent,
    SidebarLegendComponent,
    SmallCreateFormComponent,
    ChoiceSelectComponent,
    LinkEntryComponent,
  ],
})
export class MoleculesModule {}
