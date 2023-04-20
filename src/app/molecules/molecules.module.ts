import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AtomsModule } from '../atoms/atoms.module';
import { ArticleFooterComponent } from './article-footer/article-footer.component';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button/confirmation-toggle-button.component';
import { EditToggleComponent } from './edit-toggle/edit-toggle.component';
import { IconToggleButtonComponent } from './toggle-button/icon-toggle-button.component';
import { PageBackgroundComponent } from './page-background/page-background.component';



@NgModule({
  declarations: [
    EditToggleComponent,
    IconToggleButtonComponent,
    ConfirmationToggleButtonComponent,
    ArticleFooterComponent,
    PageBackgroundComponent,
  ],
  imports: [
    CommonModule,
    AtomsModule,
    RouterModule,
  ]
})
export class MoleculesModule { }
