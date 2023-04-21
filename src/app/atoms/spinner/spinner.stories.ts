import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { SpinnerComponent } from './spinner.component';

const templateFunc = (thickness: number): string => `
  <app-spinner style="--thickness:${thickness}px;"></app-spinner>
`;

export default {
  title: 'DesignSystem/Atoms/SpinnerComponent',
  component: SpinnerComponent,
  decorators: [
    moduleMetadata({
      imports: []
    }),
  ],
} as Meta<SpinnerComponent>;

const Template: StoryFn<SpinnerComponent> = (args: SpinnerComponent) => ({ 
  props: {
    ...args,
  },
  template: templateFunc(16),
});

export const Default = Template.bind({});
Default.args = {}