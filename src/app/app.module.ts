import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { addTokenInterceptor } from './_interceptors/tokenInterceptor';
import { FORMLY_MODULE } from './_modules/formly';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignModule } from './campaign/campaign.module';
import { GeneralModule } from './general/general.module';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LeafletModule,
    AdministrationModule,
    GeneralModule,
    CampaignModule,
    FormlyBootstrapModule,
    ReactiveFormsModule,
    TemplatesModule,
    FORMLY_MODULE,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    provideHttpClient(withInterceptors([addTokenInterceptor])),
  ],
})
export class AppModule {}
