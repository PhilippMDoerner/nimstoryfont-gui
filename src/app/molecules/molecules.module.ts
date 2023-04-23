import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { EditorModule } from '@tinymce/tinymce-angular';
import { AtomsModule } from '../atoms/atoms.module';
import { ArticleFooterComponent } from './article-footer/article-footer.component';
import { BadgeListComponent } from './badge-list/badge-list.component';
import { CompareFormComponent } from './compare-form/compare-form.component';
import { ConfirmationModalComponent } from './confirmation-modal/confirmation-modal.component';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { FormComponent } from './form/form.component';
import { FormlyFileFieldComponent } from './formly-file-field/formly-file-field.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { ListComponent } from './list/list.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { SidebarLegendComponent } from './sidebar-legend/sidebar-legend.component';
import { SmallCreateFormComponent } from './small-create-form/small-create-form.component';
import { IconToggleButtonComponent } from './toggle-button/icon-toggle-button.component';



@NgModule({
  declarations: [
    EditToggleComponent,
    IconToggleButtonComponent,
    ConfirmationToggleButtonComponent,
    ArticleFooterComponent,
    PageBackgroundComponent,
    SidebarLegendComponent,
    FormlyFileFieldComponent,
    ImageCarouselComponent,
    FormComponent,
    CompareFormComponent,
    SmallCreateFormComponent,
    ListComponent,
    ConfirmationModalComponent,
    BadgeListComponent
  ],
  imports: [
    CommonModule,
    AtomsModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    EditorModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      types: [{ name: 'file', component: FormlyFileFieldComponent, wrappers: ['form-field'] }],
    })
  ],
  exports: [
    EditToggleComponent,
    IconToggleButtonComponent,
    ConfirmationToggleButtonComponent,
    ArticleFooterComponent,
    PageBackgroundComponent,
    SidebarLegendComponent,
    FormlyFileFieldComponent,
    ImageCarouselComponent,
    FormComponent,
    CompareFormComponent,
    SmallCreateFormComponent,
    ListComponent,
    ConfirmationModalComponent,
    BadgeListComponent,
  ]
})
export class MoleculesModule { }
