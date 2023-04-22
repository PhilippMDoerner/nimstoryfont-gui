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
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { FormlyFileFieldComponent } from './formly-file-field/formly-file-field.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { SidebarLegendComponent } from './sidebar-legend/sidebar-legend.component';
import { IconToggleButtonComponent } from './toggle-button/icon-toggle-button.component';
import { FormComponent } from './form/form.component';



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
    FormComponent
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
    ImageCarouselComponent
  ]
})
export class MoleculesModule { }
