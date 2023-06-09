import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../icon/icon.component';
import { InteractiveBadgeComponent } from './interactive-badge.component';

export default {
  title: 'DesignSystem/Atoms/InteractiveBadgeComponent',
  component: InteractiveBadgeComponent,
  decorators: [
    moduleMetadata({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        IconComponent,
      ]
    }),
  ],
  args: {
    text: 'BadgeText',
    type: 'PRIMARY',
    icon: 'times',
    textLink: undefined,
  },
} as Meta<InteractiveBadgeComponent>;

const Template: StoryFn<InteractiveBadgeComponent> = (args: InteractiveBadgeComponent) => ({ 
  props: {
    ...args,
    iconClick: action('iconClick'),
    labelClick: action('labelClick'),
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


export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  icon: undefined,
}

export const WithLink = Template.bind({});
WithLink.args = {
  textLink: '/to/other/page',
}