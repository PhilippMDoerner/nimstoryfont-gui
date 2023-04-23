import { NgModule } from '@angular/core';
import { BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig, HammerModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { dateMessage, dateValidator, faPrefixMessage, fieldMatchValidator, fieldsDontMatchMessage, hasSpecialCharactersMessage, iconValidator, integerValidator, invalidTimeMessage, notIntegerMessage, requiredIconMessage, requiredIconValidator, requiredMessage, requiredValidator, sessionAlreadyHasAuthor, sessionAuthorUniqueValidator, specialCharacterValidator, timeValidator } from './_services/formly/validators';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AtomsModule } from './atoms/atoms.module';
import { FormlyFileFieldComponent } from './molecules/formly-file-field/formly-file-field.component';
import { MoleculesModule } from './molecules/molecules.module';
import { FormlyDatepickerFieldComponent } from './organisms/formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from './organisms/formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from './organisms/formly-select-disable/formly-select-disable-field.component';
import { OrganismsModule } from './organisms/organisms.module';
import { TemplatesModule } from './templates/templates.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    TemplatesModule,
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    LeafletModule,
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
    FormlyBootstrapModule,
    HammerModule,
    TemplatesModule,
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerGestureConfig,
    },
    { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce/tinymce.min.js' },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
