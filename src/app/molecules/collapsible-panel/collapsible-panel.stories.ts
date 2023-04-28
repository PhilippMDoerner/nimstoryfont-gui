import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { CollapsiblePanelComponent } from './collapsible-panel.component';


export default {
  title: 'DesignSystem/Molecules/CollapsiblePanelComponent',
  component: CollapsiblePanelComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
      ],
      declarations: [
      ]
    }),
  ],
  args: {
    heading: 'Some Heading',
  },
} as Meta<CollapsiblePanelComponent>;

const Template: StoryFn<CollapsiblePanelComponent> = (args: CollapsiblePanelComponent) => ({ 
  props: {
    ...args,
  },
  template: `
  NOTE: This is currently broken, <a href="https://github.com/storybookjs/storybook/issues/10272"> but only in storybook </a>. <br>
  The ng-content will work as normal in normal components
  <app-collapsible-panel> 
    <span heading>{{heading}}</span>
    <app-button [icon]="'plus'" [text]="'Add things'"></app-button>
    
  </app-collapsible-panel>
`,
});

export const Default = Template.bind({});
Default.args = {}
