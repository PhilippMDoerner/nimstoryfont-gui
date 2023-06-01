import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dummyMarkerTypes } from 'src/app/_services/article/marker-type.service.mock';
import { dummyOrganizations } from 'src/app/_services/article/organization.service.mock';
import { dummyClasses } from 'src/app/_services/article/player-class.service.mock';
import { FormlyProvider } from 'src/app/_services/formly/formly-service.mock';
import { dateMessage, dateValidator, faPrefixMessage, fieldMatchValidator, fieldsDontMatchMessage, hasSpecialCharactersMessage, iconValidator, integerValidator, invalidTimeMessage, notIntegerMessage, requiredIconMessage, requiredIconValidator, requiredMessage, requiredValidator, sessionAlreadyHasAuthor, sessionAuthorUniqueValidator, specialCharacterValidator, timeValidator } from '../../../_services/formly/validators';
import { FormlyFileFieldComponent } from '../../molecules';
import { FormlyDatepickerFieldComponent, FormlyEditorFieldComponent, FormlySelectDisableFieldComponent, OrganismsModule } from '../../organisms';
import { ConfigTablesComponent } from './config-tables.component';

export default {
  title: 'DesignSystem/Templates/ConfigTablesComponent',
  component: ConfigTablesComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
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
      ],       
      declarations: [
      ],
      providers: [
        FormlyProvider, 
      ]
    }),
  ],
  args: {
    campaignName: 'Aldrune',
    state: 'CREATE',
    userModel: {},
    serverModel: undefined,
    classOptions: dummyClasses,
    organizations: dummyOrganizations
  },
} as Meta<ConfigTablesComponent>;

const Template: StoryFn<ConfigTablesComponent> = (args: ConfigTablesComponent) => ({ 
  props: {
    ...args,
    loadTableEntries: action('loadTableEntries'),
    deleteTableEntry: action('deleteTableEntry'),
    createTableEntry: action('createTableEntry'),
  },
});

export const Default = Template.bind({});
Default.args = {}

export const WithData = Template.bind({});
WithData.args = {
  tableData: {
    MARKER_TYPE: dummyMarkerTypes,
    PLAYER_CLASS: dummyClasses, 
  }
}