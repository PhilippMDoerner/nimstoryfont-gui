import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomePageStore } from './pages/home-page/home-page.store';

@NgModule({
    imports: [CommonModule, TemplatesModule, HomePageComponent],
    providers: [HomePageStore],
})
export class CampaignModule {}
