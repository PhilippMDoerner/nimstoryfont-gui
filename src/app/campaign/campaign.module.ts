import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MapPageComponent } from './pages/map-page/map-page.component';

@NgModule({
  declarations: [HomePageComponent, MapPageComponent],
  imports: [CommonModule, TemplatesModule],
})
export class CampaignModule {}
