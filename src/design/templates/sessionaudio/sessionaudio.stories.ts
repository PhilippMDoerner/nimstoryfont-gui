import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { SessionAudio, Timestamp } from 'src/app/_models/sessionAudio';
import {
  integerValidator,
  invalidTimeMessage,
  notIntegerMessage,
  requiredMessage,
  requiredValidator,
  timeValidator,
} from 'src/app/_services/formly/validators';
import { OrganismsModule } from '../../organisms';
import { SessionaudioComponent } from './sessionaudio.component';

const dummyTimestamps: Timestamp[] = [
  {
    pk: 1,
    name: 'Timestamp 1',
    time: 1.5,
    encounter: 'Encounter 1',
    session_audio: 123,
  },
  {
    pk: 2,
    name: 'Timestamp 2',
    time: 2.3,
    encounter: 'Encounter 1',
    session_audio: 123,
  },
  {
    pk: 3,
    name: 'Timestamp 3',
    time: 3.2,
    encounter: 'Encounter 2',
    session_audio: 456,
  },
  {
    pk: 4,
    name: 'Timestdsfa fasdfdas fsdafsdamp 4',
    time: 4.1,
    encounter: 'Encounter 2',
    session_audio: 456,
  },
  { pk: 5, name: 'Timestamp 5', time: 4.8, session_audio: 789 },
];

const dummySessionAudio: SessionAudio = {
  pk: 123,
  name: 'Session Audio 1',
  audio_file: '/tech/piano2-CoolEdit.mp3',
  audio_url: '/tech/piano2-CoolEdit.mp3',
  session: 12,
  session_details: {
    pk: 12,
    is_main_session: true,
    session_number: 12,
    session_date: '2022-06-01',
    name: 'Session Audio 1',
  },
  sessionAudioNeighbours: {
    nextSessionAudio: { isMainSessionInt: 1, sessionNumber: 13 },
    priorSessionAudio: { isMainSessionInt: 1, sessionNumber: 11 },
  },
  has_recording: true,
  campaign: 1,
  campaign_details: { pk: 1, name: 'Campaign of Adventures' },
  creation_datetime: '2022-05-01T10:00:00Z',
  update_datetime: '2022-05-03T14:30:00Z',
  getAbsoluteRouterUrl: () => 'https://example.com/session-audio/123',
};

export default {
  title: 'DesignSystem/Templates/SessionaudioComponent',
  component: SessionaudioComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          validationMessages: [
            requiredMessage,
            notIntegerMessage,
            invalidTimeMessage,
          ],
          validators: [requiredValidator, integerValidator, timeValidator],
        }),
      ],
      declarations: [],
    }),
  ],
  args: {
    downloadSource: 'https://www.potato.testurl.com',
    canDelete: true,
    canCreate: true,
    canUpdate: true,
    timestamps: dummyTimestamps,
    sessionaudio: dummySessionAudio,
    serverUrl: 'https://www.kozco.com',
  },
} as Meta<SessionaudioComponent>;

const Template: StoryFn<SessionaudioComponent> = (args) => ({
  props: {
    ...args,
    deleteTimestamp: action('deleteTimestamp'),
    createTimestamp: action('createTimestamp'),
    sessionaudioDelete: action('sessionaudioDelete'),
  },
});

export const Default = Template.bind({});
Default.args = {};
