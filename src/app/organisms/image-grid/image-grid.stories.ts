import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { ImageGridComponent } from './image-grid.component';

const dummyEntries: any[] = [
  {
    entryType: 'CHARACTER',
    icon: 'user',
    link: 'https://example.com/characters/123',
    title: 'John Smith',
    subText: 'Level 10 Paladin',
    updateDatetime: '2022-04-28T14:30:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'CREATURE',
    icon: 'dragon',
    link: 'https://example.com/creatures/456',
    title: 'Red Dragon',
    subText: 'CR 10',
    updateDatetime: '2022-04-27T10:15:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'DIARYENTRY',
    icon: 'book-open',
    link: 'https://example.com/diary/789',
    title: 'Adventures in the Underdark',
    subText: 'Session 3',
    updateDatetime: '2022-04-26T18:00:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'ENCOUNTER',
    icon: 'dice',
    link: 'https://example.com/encounters/1234',
    title: 'Orc Ambush',
    subText: 'Difficulty: Hard',
    updateDatetime: '2022-04-25T15:30:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'ITEM',
    icon: 'magic',
    link: 'https://example.com/items/567',
    title: 'Sword of Sharpness',
    subText: 'Legendary Weapon',
    updateDatetime: '2022-04-24T12:00:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'LOCATION',
    icon: 'map-marker-alt',
    link: 'https://example.com/locations/890',
    title: 'The Forbidden Forest',
    subText: 'Home of the Treants',
    updateDatetime: '2022-04-23T09:45:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'MAP',
    icon: 'map',
    link: 'https://example.com/maps/1234',
    title: 'World Map',
    subText: 'All regions',
    updateDatetime: '2022-04-22T17:30:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
  {
    entryType: 'MARKER_TYPE',
    icon: 'map-marker',
    link: 'https://example.com/markers/4567',
    title: 'City',
    subText: 'Capital of the Kingdom',
    updateDatetime: '2022-04-21T14:15:00Z',
    image: '/media/campaign_backgrounds/bg.jpg',
  },
];

export default {
  title: 'DesignSystem/Organisms/ImageGridComponent',
  component: ImageGridComponent,
  args: {
    entries: dummyEntries,
    imageProp: 'image',
    labelProp: 'title',
    serverUrl: 'https://www.aldrune.com',
  },
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [
        MoleculesModule,
        RouterTestingModule,
      ],
    }),
  ],
} as Meta<ImageGridComponent>;

const Template: StoryFn<ImageGridComponent> = (args: ImageGridComponent) => ({ 
  props: {
    ...args,
    entryClick: action('entryClick'),
  },
});

export const Default = Template.bind({});
Default.args = {}

export const TwoEntries = Template.bind({});
TwoEntries.args = {
  entries: dummyEntries.slice(0, 2),
}

export const ThreeEntries = Template.bind({});
ThreeEntries.args = {
  entries: dummyEntries.slice(0, 3),
}

export const FourEntries = Template.bind({});
FourEntries.args = {
  entries: dummyEntries.slice(0, 4),
}

export const FiveEntries = Template.bind({});
FiveEntries.args = {
  entries: dummyEntries.slice(0, 5),
}