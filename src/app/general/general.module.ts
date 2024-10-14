import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { CampaignOverviewPageComponent } from '../campaign';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginPageStore } from './pages/login-page/login-page.store';

@NgModule({
  declarations: [
    LoginPageComponent,
    // ProfilePageComponent,
    CampaignOverviewPageComponent,
  ],
  imports: [CommonModule, TemplatesModule],
  providers: [LoginPageStore],
})
export class GeneralModule {}
