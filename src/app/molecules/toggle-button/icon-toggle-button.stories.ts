import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { IconToggleButtonComponent } from './icon-toggle-button.component';

export default {
  title: 'DesignSystem/Molecules/IconToggleButtonComponent',
  component: IconToggleButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
      ],
    }),
  ],
} as Meta<IconToggleButtonComponent>;

const Template: StoryFn<IconToggleButtonComponent> = (args: IconToggleButtonComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  buttonType: 'SECONDARY',
  toggledStateIcon: 'times',
  untoggledStateIcon: 'book'
}