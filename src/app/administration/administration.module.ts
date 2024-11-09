import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { ConfigAdministrationPageComponent } from './pages/config-administration-page/config-administration-page.component';
import { ConfigAdministrationPageStore } from './pages/config-administration-page/config-administration-page.store';
import { SiteAdministrationPageComponent } from './pages/site-administration-page/site-administration-page.component';
import { SiteAdministrationPageStore } from './pages/site-administration-page/site-administration-page.store';

@NgModule({
    imports: [CommonModule, TemplatesModule, ConfigAdministrationPageComponent,
        SiteAdministrationPageComponent],
    providers: [SiteAdministrationPageStore, ConfigAdministrationPageStore],
})
export class AdministrationModule {}
