import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { httpInterceptorProviders } from './_interceptors';
import { dateMessage, dateValidator, faPrefixMessage, fieldMatchValidator, fieldsDontMatchMessage, hasSpecialCharactersMessage, iconValidator, integerValidator, invalidTimeMessage, notIntegerMessage, requiredIconMessage, requiredIconValidator, requiredMessage, requiredValidator, sessionAlreadyHasAuthor, sessionAuthorUniqueValidator, specialCharacterValidator, timeValidator } from './_services/formly/validators';
import { AdministrationModule } from './administration/administration.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormlyFileFieldComponent } from './design/molecules/formly-file-field/formly-file-field.component';
import { FormlyDatepickerFieldComponent, FormlyEditorFieldComponent, FormlySelectDisableFieldComponent, OrganismsModule } from './design/organisms';
import { DetailModule } from './detail/detail.module';
import { RootModule } from './root/root.module';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    OrganismsModule,
    RootModule,
    DetailModule,
    AdministrationModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormlyModule.forRoot({
      types: [
        { name: 'file', component: FormlyFileFieldComponent, wrappers: ['form-field'] },
        { name: 'text-editor', component: FormlyEditorFieldComponent },
        { name: 'select-disable', component: FormlySelectDisableFieldComponent },
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
    StoreModule.forRoot({}, {}),
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
