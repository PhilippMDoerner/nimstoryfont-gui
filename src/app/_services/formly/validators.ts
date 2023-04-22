import { AbstractControl, ValidationErrors } from '@angular/forms';
import { ValidatorOption } from '@ngx-formly/core/lib/models';
import { Observable } from 'rxjs';
/***
 * This is how Validators work:
 * 1) You have a validation function. That takes in a control:Formcontrol and returns ValidationErrors (when sync)
 *      When async... well don't expect a message to come out. ValidationErrors are just objects
 *      Containing the name of an error message and whether it is to be shown (true) or not (false).
 * 2) You have a validatorObject, where you associate the NAME of a validator with its VALIDATION function
 * 3) You have a name, where you associate a possible error message with a name
 *
 * Validators must all return true for a submit button to show.
 */

// Validation Messages
export const invalidTimeMessage = {
  name: 'time',
  message: "Time must have 'hh:mm:ss' pattern",
};
export const requiredMessage = {
  name: 'required',
  message: 'This field is required!',
};
export const dateMessage = {
  name: 'date',
  message:
    "This date does not follow the pattern: 'YYYY-MM-DD'. Sorry to be such a Nazi about it. The computer is forcing me.",
};
export const requiredIconMessage = {
  name: 'requiredIcon',
  message:
    'This field requires a fontawesome icon as input. Here is a list of them: https://fontawesome.com/v4.7.0/icons/',
};
export const faPrefixMessage = {
  name: 'faPrefix',
  message: "Icons are stored without the 'fa-' from font-awesome prefix",
};
export const notIntegerMessage = {
  name: 'notInteger',
  message:
    'Your input is not an integer. This field requires an integer number. No amount of revolution can overcome this.',
};
export const hasSpecialCharactersMessage = {
  name: 'hasSpecialCharacters',
  message:
    'Your input includes one of the following invalid special characters: [ ] ( ) ? | \\ " % ~ # < > :. If you need to rebel, please dont against this.',
};
export const fieldsDontMatchMessage = {
  name: 'fieldMatch',
  message: 'Password Not Matching',
};
export const sessionAlreadyHasAuthor = {
  name: 'isInvalidSessionAuthorPair',
  message: `
    The author you selected already has a diaryentry in the session you selected. You 
    can't have 2 diaryentries from the same author in the same session. Consider writing 
    your diaryentry as an encounter instead into the diaryentry at the spot you just considered.`,
};

// Validation Functions
function timeValidation(control: AbstractControl): ValidationErrors {
  const isValidTime: boolean = /\d\d.[0-5]\d.[0-5]\d/.test(control.value);
  return { time: !isValidTime };
}
export const timeValidator: ValidatorOption = { name: 'time', validation: timeValidation };

function requiredValidation(control: AbstractControl): ValidationErrors {
  const isRequiredField: boolean = !!control.value || control.value === 0;
  return { required: !isRequiredField };
}
export const requiredValidator: ValidatorOption = {
  name: 'required',
  validation: requiredValidation,
};
export const requiredIconValidator = {
  name: 'requiredIcon',
  validation: requiredValidation,
};

function dateValidation(control: AbstractControl): ValidationErrors {
  const dateHasYYYYMMDDFormat: boolean = /[1-2]\d{3}-(0\d|1[0-2])-[0-3]\d/.test(
    control.value
  );
  return { date: !dateHasYYYYMMDDFormat };
}
export const dateValidator: ValidatorOption = { name: 'date', validation: dateValidation };

function iconValidation(control: AbstractControl): ValidationErrors {
  const hasFaPrefix = /fa-/.test(control.value);
  const isValidIcon = hasFaPrefix;
  return { faPrefix: isValidIcon };
}
export const iconValidator: ValidatorOption = { name: 'faPrefix', validation: iconValidation };

function isIntegerValidation(control: AbstractControl): ValidationErrors {
  const isInteger =  typeof control.value === 'number' && Number.isInteger(control.value);
  return { notInteger: !isInteger };
}
export const integerValidator: ValidatorOption = {
  name: 'notInteger',
  validation: isIntegerValidation,
};

function hasNoSpecialCharactersValidation(control: AbstractControl): ValidationErrors {
  const isString = typeof control.value === 'string';
  if (isString) {
    const specialCharacters: string[] = [
      '[',
      ']',
      '(',
      ')',
      '|',
      '\\',
      '"',
      '%',
      '~',
      '#',
      '<',
      '>',
      '?',
      '/',
      ':',
    ];
    for (const specialCharacter of specialCharacters) {
      if (control.value.includes(specialCharacter)) {
        return { hasSpecialCharacters: true };
      }
    }
  }

  return { hasSpecialCharacters: false};
}
export const specialCharacterValidator: ValidatorOption = {
  name: 'hasSpecialCharacters',
  validation: hasNoSpecialCharactersValidation,
};

/**
 *
 * @param {AbstractControl} control - An object acting as a dictionary. Maps the key of a form-field to
 *  the field's value. Must contain
 * @returns
 */
function passwordMatchValidation(control: AbstractControl): ValidationErrors {
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  const isAnyPasswordFieldEmpty = !passwordConfirm || !password;
  if (isAnyPasswordFieldEmpty) {
    return { passwordMatch: null};
  }
  
  const arePasswordsMatching = passwordConfirm === password;
  if (arePasswordsMatching) {
    return { passwordMatch: null };
  }

  return { passwordMatch: { message: "The passwords aren't matching" } };
}
export const fieldMatchValidator: ValidatorOption = {
  name: 'fieldMatch',
  validation: passwordMatchValidation,
};

/**
 * If you wish to manipulate this, you also have to manipulate in diaryentry-article-update "hasDiaryentryForAuthor"
 * TODO: Fix how this makes way too many calls to the sessions api endpoint for no reason
 */
async function isSessionAuthorPairUniqueValidator(control: any): Promise<ValidationErrors> {
  const { session: selectedSessionId, author: selectedAuthorId } = control.value;
  const sessionFieldConfig = control.controls.session._fields[0];

  const selectFieldOptionsObs: Observable<any> =  sessionFieldConfig.templateOptions.options;
  const selectFieldOptions: any = await selectFieldOptionsObs.toPromise();
  const selectedOption = selectFieldOptions.find((option: any) => option.pk === selectedSessionId);

  if (selectedOption == null){
    throw 'WeirdError. You selected a session, its id got into the model and somehow that field is no longer among the options (?)';
  }
  
  const authorIdsWithDiaryentriesOnSession: number[] = selectedOption.author_ids;
  const selectedAuthorAlreadyHasDiaryentryOnSession: boolean = authorIdsWithDiaryentriesOnSession.includes(selectedAuthorId);
  const isInitialValue: boolean = control.pristine; //True if this is an initial value, never changed by the user

  if (selectedAuthorAlreadyHasDiaryentryOnSession && !isInitialValue) {
    return { passwordMatch: { message: "That account already has a diaryentry written for that session. Accounts can only have one Diaryentry per session" } };
  }

  return { passwordMatch: null };
}
export const sessionAuthorUniqueValidator: ValidatorOption = {
  name: 'sessionAuthorPairUnique',
  validation: isSessionAuthorPairUniqueValidator,
};