import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { SiteAdministrationPageComponent } from './pages/site-administration-page/site-administration-page.component';
import { SiteAdministrationPageStore } from './pages/site-administration-page/site-administration-page.store';

@NgModule({
  declarations: [
    // ConfigAdministrationPageComponent,
    SiteAdministrationPageComponent,
  ],
  imports: [CommonModule, TemplatesModule],
  providers: [SiteAdministrationPageStore],
})
export class AdministrationModule {}
