import { ConfigOption, FormlyModule } from '@ngx-formly/core';
import { FormlyFileFieldComponent } from '../../design/molecules';

import { FormlyDatepickerFieldComponent } from 'src/design/organisms/formly-datepicker-field/formly-datepicker-field.component';
import { FormlyEditorFieldComponent } from 'src/design/organisms/formly-editor-field/formly-editor-field.component';
import { FormlySelectDisableFieldComponent } from 'src/design/organisms/formly-select-disable/formly-select-disable-field.component';
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
  ],
};

export const FORMLY_MODULE = FormlyModule.forRoot(FORMLY_CONFIG);

export const FORMLY_CHILD_MODULE = FormlyModule.forChild(FORMLY_CONFIG);
