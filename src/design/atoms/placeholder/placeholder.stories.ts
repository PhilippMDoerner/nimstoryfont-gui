import { Meta, StoryObj } from '@storybook/angular';
import { PlaceholderComponent } from './placeholder.component';

export default {
  title: 'DesignSystem/Atoms/PlaceholderComponent',
  component: PlaceholderComponent,
  args: {
    width: 400,
    height: 40,
  },
} as Meta<PlaceholderComponent>;

type Story = StoryObj<typeof PlaceholderComponent>;

export const Default: Story = {
  render: (args: any) => {
    return {
      props: args,
      template: `
        <app-placeholder style="height:{{height}}px; width:{{width}}px;"></app-placeholder>
      `,
    };
  },
};
