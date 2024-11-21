import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { Quest } from 'src/app/_models/quest';
import { QuestComponent } from './quest.component';

const dummyQuest: Quest = {
  pk: 123,
  name: 'Rescue the Princess',
  status: 'In progress',
  taker: 456,
  taker_details: {
    name: 'Sir Lancelot',
    name_full: 'Sir Lancelot of Camelot',
    pk: 456,
  },
  abstract:
    "The king's daughter has been kidnapped by a dragon, and Sir Lancelot has been tasked with rescuing her.",
  description:
    "Sir Lancelot must journey to the dragon's lair, fight the beast, and rescue the princess. He will need to be well-prepared and gather allies along the way.",
  giver: 789,
  giver_details: {
    name: 'King Arthur',
    name_full: 'Arthur Pendragon, King of Camelot',
    pk: 789,
  },
  start_session: 12,
  start_session_details: {
    pk: 12,
    is_main_session: true,
    session_number: 12,
    session_date: '2022-06-01',
  },
  end_session: 16,
  end_session_details: {
    pk: 16,
    is_main_session: false,
    session_number: 16,
    session_date: '2022-06-30',
  },
  campaign: 1,
  campaign_details: { pk: 1, name: 'Campaign of Adventures' },
  creation_datetime: '2022-05-01T10:00:00Z',
  update_datetime: '2022-05-03T14:30:00Z',
  getAbsoluteRouterUrl: () => 'https://example.com/quests/123',
};

export default {
  title: 'DesignSystem/Templates/QuestComponent',
  component: QuestComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
      declarations: [],
    }),
  ],
  args: {
    canUpdate: true,
    canDelete: true,
    quest: dummyQuest,
  },
} as Meta<QuestComponent>;

const Template: StoryFn<QuestComponent> = (args) => ({
  props: {
    ...args,
    createImage: action('createImage'),
    deleteImage: action('deleteImage'),
    updateImage: action('updateImage'),
    itemDelete: action('itemDelete'),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const NoPermission = Template.bind({});
NoPermission.args = {
  canDelete: false,
  canUpdate: false,
};
