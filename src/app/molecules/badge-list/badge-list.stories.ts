import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { BadgeListEntry } from '../_models/badge-list';
import { SmallCreateFormComponent } from '../small-create-form/small-create-form.component';
import { BadgeListComponent } from './badge-list.component';

const dummyOptions: any[] = [  
  {"myLabel": "A value", "myValue": 5},
  {"myLabel": "Another value", "myValue": 7},
  {"myLabel": "Yet another value", "myValue": 2},
  {"myLabel": "More values", "myValue": 9},
  {"myLabel": "Even more values", "myValue": 4},
  {"myLabel": "Values galore", "myValue": 1},
  {"myLabel": "The value of values", "myValue": 8},
  {"myLabel": "The value of life", "myValue": 42},
  {"myLabel": "The value of time", "myValue": 24},
  {"myLabel": "The value of money", "myValue": 100},
  {"myLabel": "The value of love", "myValue": 99},
  {"myLabel": "The value of friendship", "myValue": 7},
  {"myLabel": "The value of knowledge", "myValue": 314},
  {"myLabel": "The value of wisdom", "myValue": 999},
  {"myLabel": "The value of power", "myValue": 666},
]

const dummyBadgeList: BadgeListEntry[] = [
  {
    text: "Badge 1",
    link: "https://example.com/badge1",
    badgeValue: {
      count: 10,
      color: "green"
    }
  },
  {
    text: "Badge 2",
    link: "https://example.com/badge2",
    badgeValue: {
      count: 5,
      color: "blue"
    }
  },
  {
    text: "Badge 3",
    link: "https://example.com/badge3",
    badgeValue: {
      count: 2,
      color: "red"
    }
  },
  {
    text: "Badge 4",
    link: "https://example.com/badge4",
    badgeValue: {
      count: 20,
      color: "purple"
    }
  },
  {
    text: "Badge 5",
    link: "https://example.com/badge5",
    badgeValue: {
      count: 7,
      color: "orange"
    }
  }
];


export default {
  title: 'DesignSystem/Molecules/BadgeListComponent',
  component: BadgeListComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
        RouterTestingModule,
      ],
      declarations: [
        SmallCreateFormComponent
      ]
    }),
  ],
  args: {
    entries: dummyBadgeList,
    options: dummyOptions,
    optionLabelProp: 'myLabel',
    optionValueProp: 'myValue',
    label: 'Character',
    canCreate: true,
    canDelete: true,
    submitButtonType: 'PRIMARY',
    cancelButtonType: 'SECONDARY',
  }
} as Meta<BadgeListComponent>;

const Template: StoryFn<BadgeListComponent> = (args: BadgeListComponent) => ({ 
  props: {
    ...args,
    entryDelete: action('entryDelete'),
    entryCreate: action('entryCreate'),
  },
});

export const Default = Template.bind({});
Default.args = {}
