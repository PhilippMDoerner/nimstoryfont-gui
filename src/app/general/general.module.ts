import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CampaignOverviewPageComponent } from '../campaign';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginPageStore } from './pages/login-page/login-page.store';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { ProfilePageStore } from './pages/profile-page/profile-page.store';

@NgModule({
  imports: [
    CommonModule,
    LoginPageComponent,
    ProfilePageComponent,
    CampaignOverviewPageComponent,
  ],
  providers: [LoginPageStore, ProfilePageStore],
})
export class GeneralModule {}
