import { FormsModule } from '@angular/forms';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from '../../atoms';
import { SearchFieldComponent } from './search-field.component';

export default {
  title: 'DesignSystem/Molecules/SearchFieldComponent',
  component: SearchFieldComponent,
  decorators: [
    moduleMetadata({
      imports: [AtomsModule, FormsModule],
    }),
  ],
  args: {},
} as Meta<SearchFieldComponent>;

const Template: StoryFn<SearchFieldComponent> = (args) => ({
  props: {
    ...args,
    search: action('search'),
  },
});

export const Default = Template.bind({});
Default.args = {};
