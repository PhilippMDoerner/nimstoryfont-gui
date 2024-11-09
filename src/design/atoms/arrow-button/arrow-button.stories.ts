import { Meta, StoryFn } from '@storybook/angular';
import { ArrowButtonComponent } from './arrow-button.component';

export default {
  title: 'DesignSystem/Atoms/ArrowButtonComponent',
  component: ArrowButtonComponent,
  args: {
    type: 'PRIMARY',
  },
} as Meta<ArrowButtonComponent>;

const Template: StoryFn<ArrowButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <div class="d-flex flex-column">
      <div>
        Button Size: {{size}}
        <app-arrow-button [icon]="'up'" [type]="type">
        </app-arrow-button>
        <app-arrow-button [icon]="'down'" [type]="type"[outline]="true">
        </app-arrow-button>
      </div>
    </div>
  `,
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
