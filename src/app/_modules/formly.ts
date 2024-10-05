import { FormlyModule } from '@ngx-formly/core';
import { FormlyFileFieldComponent } from '../../design/molecules';
import {
  FormlyDatepickerFieldComponent,
  FormlyEditorFieldComponent,
  FormlySelectDisableFieldComponent,
} from '../../design/organisms';
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
} from '../_services/formly/validators';

export const FORMLY_MODULE = FormlyModule.forRoot({
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
});
