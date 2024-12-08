import { Meta, StoryFn } from '@storybook/angular';
import { ArrowButtonComponent } from './arrow-button.component';

export default {
  title: 'DesignSystem/Atoms/ArrowButtonComponent',
  component: ArrowButtonComponent,
  args: {
    kind: 'PRIMARY',
  },
} as Meta<ArrowButtonComponent>;

const Template: StoryFn<ArrowButtonComponent> = (args: any) => ({
  props: args,
  template: `
    <div class="d-flex flex-column">
      <div>
        Button Size: {{size}}
        <app-arrow-button [icon]="'up'" [kind]="type">
        </app-arrow-button>
        <app-arrow-button [icon]="'down'" [kind]="type"[outline]="true">
        </app-arrow-button>
      </div>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: 'SECONDARY',
};

export const Dark = Template.bind({});
Dark.args = {
  kind: 'DARK',
};

export const Warning = Template.bind({});
Warning.args = {
  kind: 'WARNING',
};

export const Danger = Template.bind({});
Danger.args = {
  kind: 'DANGER',
};

export const Light = Template.bind({});
Light.args = {
  kind: 'LIGHT',
};

export const Info = Template.bind({});
Info.args = {
  kind: 'INFO',
};
