import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { OverviewItem } from 'src/app/_models/overview';
import { OrganismsModule } from 'src/app/detail';
import { QuestTableComponent } from './quest-table.component';

const dummyQuest: OverviewItem = {
  article_type: 'quest',
  name: 'The Black Knight',
  status: 'In progress',
  abstract: 'A black knight that does things',
  name_full: 'The Black Knight - A quest to defeat a powerful undead warrior',
  description: 'The players are hired to find and defeat the Black Knight, a powerful undead warrior who is terrorizing the countryside',
  update_date: '2022-05-10',
  campaign_details: {pk: 456, name: 'Medieval Fantasy RPG'},
  getAbsoluteRouterUrl: () => '/quests/345',
  pk: 345
};





export default {
  title: 'Application/Login/QuestTableComponent',
  component: QuestTableComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
      ],
      declarations: [
      ]
    }),
  ],
  args: {
    questTaker: 'Potato',
    quests: Array(5).fill(dummyQuest),
  }
} as Meta<QuestTableComponent>;

const Template: StoryFn<QuestTableComponent> = (args: QuestTableComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}

export const NoQuests = Template.bind({});
NoQuests.args = {
  quests: [],
}
