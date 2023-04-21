import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { DEFAULT_SEARCH_PREFERENCES } from '../_models/search-preferences';
import { SidebarLegendComponent } from './sidebar-legend.component';

export default {
  title: 'SidebarLegendComponent',
  component: SidebarLegendComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
      ],
    }),
  ],
  args: {
    interactable: true,
    sidebarEntries: DEFAULT_SEARCH_PREFERENCES,
  },
  parameters: {
    backgrounds: { default: 'grey' }, // https://storybook.js.org/docs/angular/essentials/backgrounds
  }
} as Meta<SidebarLegendComponent>;

const Template: StoryFn<SidebarLegendComponent> = (args: SidebarLegendComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}
