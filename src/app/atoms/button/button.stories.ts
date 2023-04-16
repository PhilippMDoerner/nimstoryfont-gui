import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [
        ButtonComponent,
      ]
    }),
  ],
} as Meta<ButtonComponent>;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({ 
  props: args,
  template: `
    <app-button [type]="type">
      ButtonText
    </app-button>
  `
});

export const Default = Template.bind({});
Default.args = {
  type : 'PRIMARY'
}

export const Secondary = Template.bind({});
Secondary.args = {
  type : 'SECONDARY'
}

export const Tertiary = Template.bind({});
Tertiary.args = {
  type : 'TERTIARY'
}