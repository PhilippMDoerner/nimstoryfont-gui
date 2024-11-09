import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../../atoms';
import { CollapsiblePanelComponent } from './collapsible-panel.component';

export default {
  title: 'DesignSystem/Molecules/CollapsiblePanelComponent',
  component: CollapsiblePanelComponent,
  decorators: [
    moduleMetadata({
      imports: [ButtonComponent],
    }),
  ],
  args: {
    isOpen: false,
    heading: 'Some Heading',
  },
} as Meta<CollapsiblePanelComponent>;

const Template: StoryFn<CollapsiblePanelComponent> = (args: any) => ({
  props: {
    ...args,
  },
  template: `
  <app-collapsible-panel>
    <div heading> {{heading}} </div>
    <app-button body [icon]="'plus'" [text]="'Add things'"></app-button>
    
  </app-collapsible-panel>
`,
});

export const Default = Template.bind({});
Default.args = {};
