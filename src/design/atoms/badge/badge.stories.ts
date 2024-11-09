import { Meta, StoryFn } from '@storybook/angular';
import { BadgeComponent } from './badge.component';

export default {
  title: 'DesignSystem/Atoms/BadgeComponent',
  component: BadgeComponent,
  args: {
    text: 'BadgeText',
    type: 'PRIMARY',
    icon: undefined,
  },
} as Meta<BadgeComponent>;

const Template: StoryFn<BadgeComponent> = (args: any) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  type: 'SECONDARY',
};

export const Dark = Template.bind({});
Dark.args = {
  type: 'DARK',
};

export const Warning = Template.bind({});
Warning.args = {
  type: 'WARNING',
};

export const Danger = Template.bind({});
Danger.args = {
  type: 'DANGER',
};

export const Light = Template.bind({});
Light.args = {
  type: 'LIGHT',
};

export const Info = Template.bind({});
Info.args = {
  type: 'INFO',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'times',
};
