import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { CampaignOverviewPageComponent } from '../campaign';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    LoginPageComponent,
    ProfilePageComponent,
    CampaignOverviewPageComponent,
  ],
  imports: [CommonModule, TemplatesModule],
})
export class GeneralModule {}
