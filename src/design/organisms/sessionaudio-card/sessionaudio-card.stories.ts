import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { OverviewItem } from 'src/app/_models/overview';
import { FormlyDatepickerFieldComponent, OrganismsModule } from '..';
import {
  dateMessage,
  dateValidator,
  integerValidator,
  notIntegerMessage,
  requiredMessage,
  requiredValidator,
} from '../../../app/_services/formly/validators';
import { SessionaudioCardComponent } from './sessionaudio-card.component';

const dummySessionAudio: OverviewItem = {
  getAbsoluteRouterUrl: () => '/sessionaudio/456',
  article_type: 'audio',
  name: 'Audio of Main Session 83',
  pk: 1001,
  name_full: 'The Adventure Begins - Session 1',
  description: 'The first session of our epic D&D campaign',
  update_datetime: '2022-01-01T10:00:00Z',
  session_details: {
    pk: 1,
    session_number: 1,
    is_main_session: true,
    is_main_session_int: 1,
  },
  audio_url: 'dnd-session-1-audio.mp3',
  download_url: 'dnd-session-1-audio-download.mp3',
  campaign_details: {
    pk: 100,
    name: 'The Chronicles of Adventure',
  },
};

export default {
  title: 'DesignSystem/Organisms/SessionaudioCardComponent',
  component: SessionaudioCardComponent,
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
    serverUrl: 'https://www.aldrune.com',
    sessionAudio: dummySessionAudio,
  },
} as Meta<SessionaudioCardComponent>;

const Template: StoryFn<SessionaudioCardComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
