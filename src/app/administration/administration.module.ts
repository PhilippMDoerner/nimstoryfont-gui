import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { ConfigAdministrationPageComponent } from './pages/config-administration-page/config-administration-page.component';
import { SiteAdministrationPageComponent } from './pages/site-administration-page/site-administration-page.component';

@NgModule({
  declarations: [
    ConfigAdministrationPageComponent,
    SiteAdministrationPageComponent,
  ],
  imports: [CommonModule, TemplatesModule],
})
export class AdministrationModule {}
