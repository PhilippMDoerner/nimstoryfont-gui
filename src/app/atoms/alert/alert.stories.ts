import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AlertComponent } from './alert.component';

export default {
  title: 'DesignSystem/Atoms/AlertComponent',
  component: AlertComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [
      ]
    }),
  ],
  args: {
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci temporibus quas, quam veniam beatae necessitatibus. Ut cupiditate illo harum debitis. Temporibus accusamus, ab exercitationem vero assumenda saepe recusandae nostrum similique.',
    type: 'PRIMARY',
  }
} as Meta<AlertComponent>;

const Template: StoryFn<AlertComponent> = (args: AlertComponent) => ({ 
  props: {
    ...args,
  },
  template: `
    <app-alert [type]="type">
      {{text}}
    </app-alert>
  `
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

export const Light = Template.bind({});
Light.args = {
  type: 'LIGHT'
}

export const Info = Template.bind({});
Info.args = {
  type: 'INFO'
}