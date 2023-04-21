import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ElementType } from 'src/app/atoms/_models/button';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button.component';

const templateBuilder = (buttonType: ElementType) => `
  <app-confirmation-toggle-button 
    class="d-block" 
    style="max-width: 400px;"
    [toggleType]="'${buttonType}'"
    [confirmationQuestion]="'Delete this entry?'"
  >
    <app-icon [icon]="'trash'"></app-icon>
  </app-confirmation-toggle-button>
`

export default {
  title: 'DesignSystem/Molecules/ConfirmationToggleButtonComponent',
  component: ConfirmationToggleButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule
      ],
    }),
  ],
} as Meta<ConfirmationToggleButtonComponent>;

const DangerTemplate: StoryFn<ConfirmationToggleButtonComponent> = (args: ConfirmationToggleButtonComponent) => ({ 
  props: {
    ...args,
  },
  template: templateBuilder('DANGER'),
});

export const Default = DangerTemplate.bind({});
Default.args = {}

const WarningTemplate: StoryFn<ConfirmationToggleButtonComponent> = (args: ConfirmationToggleButtonComponent) => ({ 
  props: {
    ...args,
  },
  template: templateBuilder('WARNING'),
});

export const Warning = WarningTemplate.bind({});
Warning.args = {}

const PrimaryTemplate: StoryFn<ConfirmationToggleButtonComponent> = (args: ConfirmationToggleButtonComponent) => ({ 
  props: {
    ...args,
  },
  template: templateBuilder('PRIMARY'),
});

export const Primary = PrimaryTemplate.bind({});
Primary.args = {}

const TertiaryTemplate: StoryFn<ConfirmationToggleButtonComponent> = (args: ConfirmationToggleButtonComponent) => ({ 
  props: {
    ...args,
  },
  template: templateBuilder('DARK'),
});

export const Tertiary = TertiaryTemplate.bind({});
Primary.args = {}