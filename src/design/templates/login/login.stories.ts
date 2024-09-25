import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import {
  requiredMessage,
  requiredValidator,
} from 'src/app/_services/formly/validators';
import { OrganismsModule } from '../../organisms';
import { LoginComponent } from './login.component';

export default {
  title: 'DesignSystem/Templates/LoginComponent',
  component: LoginComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [],
          validationMessages: [requiredMessage],
          validators: [requiredValidator],
        }),
      ],
      declarations: [],
    }),
  ],
  args: {
    extraMessage: 'Extra message of some sort',
    resetErrorMessage: 'Message for error during reset',
  },
} as Meta<LoginComponent>;

const Template: StoryFn<LoginComponent> = (args) => ({
  props: {
    ...args,
    login: action('login'),
    resetPassword: action('resetPassword'),
  },
});

export const Default = Template.bind({});
Default.args = {};
