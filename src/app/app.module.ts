import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { TemplatesModule } from 'src/design/templates/templates.module';
import { FormlyFileFieldComponent } from '../design/molecules';
import {
  FormlyDatepickerFieldComponent,
  FormlyEditorFieldComponent,
  FormlySelectDisableFieldComponent,
} from '../design/organisms';
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
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LeafletModule,
    TemplatesModule,
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
  ],
  providers: [
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
    provideHttpClient(withInterceptors([addTokenInterceptor])),
  ],
})
export class AppModule {}
