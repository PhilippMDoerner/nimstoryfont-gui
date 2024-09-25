import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dummyCharacter } from 'src/app/_services/article/character-service.mock';
import { dummyOrganizations } from 'src/app/_services/article/organization.service.mock';
import { dummyClasses } from 'src/app/_services/article/player-class.service.mock';
import { FormlyProvider } from 'src/app/_services/formly/formly-service.mock';
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
} from '../../../app/_services/formly/validators';
import { FormlyFileFieldComponent } from '../../molecules';
import {
  FormlyDatepickerFieldComponent,
  FormlyEditorFieldComponent,
  FormlySelectDisableFieldComponent,
  OrganismsModule,
} from '../../organisms';
import { CharacterCreateUpdateComponent } from './character-create-update.component';

export default {
  title: 'DesignSystem/Templates/CharacterCreateUpdateComponent',
  component: CharacterCreateUpdateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
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
      declarations: [],
      providers: [FormlyProvider],
    }),
  ],
  args: {
    campaignName: 'Aldrune',
    state: 'CREATE',
    userModel: {},
    serverModel: undefined,
    classOptions: dummyClasses,
    organizations: dummyOrganizations,
  },
} as Meta<CharacterCreateUpdateComponent>;

const Template: StoryFn<CharacterCreateUpdateComponent> = (args) => ({
  props: {
    ...args,
    create: action('create'),
    update: action('update'),
    cancel: action('cancel'),
    addClass: action('addClass'),
    removeClass: action('removeClass'),
    addOrganizationMembership: action('addOrganizationMembership'),
    removeOrganizationMembership: action('removeOrganizationMembership'),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Update = Template.bind({});
Update.args = {
  state: 'UPDATE',
  userModel: dummyCharacter,
};

export const OutdatedUpdate = Template.bind({});
OutdatedUpdate.args = {
  state: 'OUTDATED_UPDATE',
  userModel: dummyCharacter,
  serverModel: {
    ...dummyCharacter,
    alive: !dummyCharacter.alive,
    description:
      dummyCharacter.description +
      ' <strong> Some text added by somebody else <strong>',
  },
};
