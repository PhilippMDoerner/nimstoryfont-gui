import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../icon/icon.component';
import { BadgeComponent } from './badge.component';

export default {
  title: 'BadgeComponent',
  component: BadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [
        IconComponent,
      ]
    }),
  ],
  args: {
    text: 'BadgeText',
    type: 'PRIMARY',
    icon: undefined,
  }
} as Meta<BadgeComponent>;

const Template: StoryFn<BadgeComponent> = (args: BadgeComponent) => ({ 
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {}

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'SECONDARY'
}

export const Dark = Template.bind({});
Dark.args = {
  type: 'DARK'
}

export const Warning = Template.bind({});
Warning.args = {
  type: 'WARNING'
}

export const Danger = Template.bind({});
Danger.args = {
  type: 'DANGER'
}


export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'times'
}