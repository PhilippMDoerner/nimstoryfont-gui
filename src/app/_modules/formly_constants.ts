import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FormlyFileFieldComponent } from 'src/app/design//molecules';

import { FormlyAutocompleteFieldComponent } from 'src/app/design/molecules/formly-autocomplete-field/formly-autocomplete-field.component';
import { FormlyDatepickerFieldComponent } from 'src/app/design/organisms/formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from 'src/app/design/organisms/formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from 'src/app/design/organisms/formly-select-disable/formly-select-disable-field.component';
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
  notNumberMesage,
  numberValidator,
  requiredIconMessage,
  requiredIconValidator,
  requiredMessage,
  requiredValidator,
  sessionAlreadyHasAuthor,
  specialCharacterValidator,
  timeValidator,
} from '../_services/formly/validators';

export const FORMLY_CONFIG: ConfigOption = {
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
    {
      name: 'autocomplete',
      component: FormlyAutocompleteFieldComponent,
    },
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
    notNumberMesage,
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
    numberValidator,
  ],
};

export const FORMLY_MODULE = FormlyModule.forRoot(FORMLY_CONFIG);

export const FORMLY_CHILD_MODULE = FormlyModule.forChild(FORMLY_CONFIG);
