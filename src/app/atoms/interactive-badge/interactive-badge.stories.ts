import { RouterTestingModule } from '@angular/router/testing';
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
    textLink: '/to/other/page',
  }
} as Meta<InteractiveBadgeComponent>;

const Template: StoryFn<InteractiveBadgeComponent> = (args: InteractiveBadgeComponent) => ({ 
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


export const WithoutIcon = Template.bind({});
WithoutIcon.args = {
  icon: undefined,
}