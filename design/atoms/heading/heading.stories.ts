import { Meta, StoryFn } from '@storybook/angular';
import { HEADING_LEVELS, HeadingComponent } from './heading.component';

export default {
  title: 'DesignSystem/Atoms/HeadingComponent',
  component: HeadingComponent,
  args: {
    text: 'SomeText',
    headingLevel: 'h5',
  },
  argTypes: {
    headingLevel: {
      control: 'select',
      options: HEADING_LEVELS,
    },
  },
} as Meta<HeadingComponent>;

const Template: StoryFn<HeadingComponent> = (args) => ({
  props: {
    ...args,
  },
  template: `
    <div class="my-5">
      <app-heading [headingLevel]="headingLevel">
        {{text}}
      </app-heading>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
