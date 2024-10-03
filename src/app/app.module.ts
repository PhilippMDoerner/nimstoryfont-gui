import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { FormlyFileFieldComponent } from '../design/molecules';
import {
  FormlyDatepickerFieldComponent,
  FormlyEditorFieldComponent,
  FormlySelectDisableFieldComponent,
} from '../design/organisms';
import { TemplatesModule } from '../design/templates/templates.module';
import { addTokenInterceptor } from './_interceptors/tokenInterceptor';
import {
  dateMessage,
  dateValidator,
  faPrefixMessage,
  fieldMatchValidator,
  fieldsDontMatchMessage,
  hasSpecialCharactersMessage,
  iconValidator,
  integerValidator,
  invalidTimeMessage,
  notIntegerMessage,
  requiredIconMessage,
  requiredIconValidator,
  requiredMessage,
  requiredValidator,
  sessionAlreadyHasAuthor,
  sessionAuthorUniqueValidator,
  specialCharacterValidator,
  timeValidator,
} from './_services/formly/validators';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CampaignOverviewPageComponent } from './core/campaign-overview-page/campaign-overview-page.component';
import { ConfigAdministrationPageComponent } from './core/config-administration-page/config-administration-page.component';
import { HomePageComponent } from './core/home-page/home-page.component';
import { LoginPageComponent } from './core/login-page/login-page.component';
import { MapPageComponent } from './core/map-page/map-page.component';
import { ProfilePageComponent } from './core/profile-page/profile-page.component';
import { SiteAdministrationPageComponent } from './core/site-administration-page/site-administration-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MapPageComponent,
    HomePageComponent,
    CampaignOverviewPageComponent,
    LoginPageComponent,
    ProfilePageComponent,
    ConfigAdministrationPageComponent,
    SiteAdministrationPageComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    AdministrationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LeafletModule,
    FormlyModule.forRoot({
      types: [
        {
          name: 'file',
          component: FormlyFileFieldComponent,
          wrappers: ['form-field'],
        },
        { name: 'text-editor', component: FormlyEditorFieldComponent },
        {
          name: 'select-disable',
          component: FormlySelectDisableFieldComponent,
        },
        { name: 'datepicker', component: FormlyDatepickerFieldComponent },
      ],
      validationMessages: [
        invalidTimeMessage,
        requiredMessage,
        dateMessage,
        requiredIconMessage,
        faPrefixMessage,
        notIntegerMessage,
        hasSpecialCharactersMessage,
        fieldsDontMatchMessage,
        sessionAlreadyHasAuthor,
      ],
      validators: [
        timeValidator,
        requiredValidator,
        dateValidator,
        requiredIconValidator,
        iconValidator,
        integerValidator,
        specialCharacterValidator,
        fieldMatchValidator,
        sessionAuthorUniqueValidator,
      ],
    }),
    //TODO: Remove those below, we're using services now
    TemplatesModule,
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    provideHttpClient(withInterceptors([addTokenInterceptor])),
  ],
})
export class AppModule {}
