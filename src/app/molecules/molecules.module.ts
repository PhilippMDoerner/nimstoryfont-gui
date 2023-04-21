import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { AtomsModule } from '../atoms/atoms.module';
import { ArticleFooterComponent } from './article-footer/article-footer.component';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { FormlyFileFieldComponent } from './formly-file-field/formly-file-field.component';
import { PageBackgroundComponent } from './page-background/page-background.component';
import { SidebarLegendComponent } from './sidebar-legend/sidebar-legend.component';
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
  ],
  imports: [
    CommonModule,
    AtomsModule,
    ReactiveFormsModule,
    RouterModule,
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
  ]
})
export class MoleculesModule { }
