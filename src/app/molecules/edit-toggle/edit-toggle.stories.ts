import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { IconToggleButtonComponent } from '../toggle-button/icon-toggle-button.component';
import { EditToggleComponent } from './edit-toggle.component';

export default {
  title: 'EditToggleComponent',
  component: EditToggleComponent,
  decorators: [
    moduleMetadata({
      declarations: [
        IconToggleButtonComponent,
      ],
      imports: [
        AtomsModule,
      ],
    }),
  ],
} as Meta<EditToggleComponent>;

const Template: StoryFn<EditToggleComponent> = (args: EditToggleComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}