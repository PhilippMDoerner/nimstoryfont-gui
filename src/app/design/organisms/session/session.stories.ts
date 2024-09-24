import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { Session } from '../../../_models/session';
import {
  dateMessage,
  dateValidator,
  integerValidator,
  notIntegerMessage,
  requiredMessage,
  requiredValidator,
} from '../../../_services/formly/validators';
import {
  FormlyDatepickerFieldComponent,
  OrganismsModule,
} from '../../../design/organisms';
import { SessionComponent } from './session.component';

const dummySession: Session = {
  pk: 1,
  is_main_session: true,
  is_main_session_int: 1,
  session_number: 10,
  session_date: '2023-04-20',
  start_day: 1,
  end_day: 2,
  name: "The Dragon's Lair",
  title: 'Dungeons and Dragons Session',
  has_recording: true,
  diaryentries: [
    {
      author_name: 'John',
      name: 'The party met in a tavern and decided to take on the quest to slay the dragon.',
    },
    {
      author_name: 'Sarah',
      name: "The party encountered some goblins on their way to the dragon's lair.",
    },
    {
      author_name: 'Bob',
      name: 'The party defeated the dragon and claimed its treasure hoard.',
    },
  ],
  campaign: 2,
  campaign_details: { pk: 2, name: 'Dungeons and Dragons Campaign' },
};

export default {
  title: 'DesignSystem/Organisms/SessionComponent',
  component: SessionComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [
            { name: 'datepicker', component: FormlyDatepickerFieldComponent },
          ],
          validationMessages: [requiredMessage, dateMessage, notIntegerMessage],
          validators: [requiredValidator, dateValidator, integerValidator],
        }),
      ],
      declarations: [],
    }),
  ],
  args: {
    session: dummySession,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
  },
} as Meta<SessionComponent>;

const Template: StoryFn<SessionComponent> = (args) => ({
  props: {
    ...args,
    sessionDelete: action('sessionDelete'),
    sessionCreate: action('sessionCreate'),
    sessionUpdate: action('sessionUpdate'),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const NoPermission = Template.bind({});
NoPermission.args = {
  canCreate: false,
  canUpdate: false,
  canDelete: false,
};

export const NoSession = Template.bind({});
NoSession.args = {
  session: undefined,
};

export const NoSessionNoCreate = Template.bind({});
NoSessionNoCreate.args = {
  session: undefined,
  canCreate: false,
};
