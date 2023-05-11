import { BrowserModule } from '@angular/platform-browser';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from '../../atoms';
import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button.component';

export default {
  title: 'DesignSystem/Molecules/ConfirmationToggleButtonComponent',
  component: ConfirmationToggleButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
        BrowserModule
      ],
    }),
  ],
  args: {
    confirmationQuestion: 'Are you sure?',
    toggleType: 'DANGER',
    cancelButtonType: 'SECONDARY',
  }
} as Meta<ConfirmationToggleButtonComponent>;

const Template: StoryFn<ConfirmationToggleButtonComponent> = (args: ConfirmationToggleButtonComponent) => ({ 
  props: {
    ...args,
    confirm: action('confirm'),
  },
  template: `
    <app-confirmation-toggle-button
      (confirm)="confirm($event)"
      [toggleType]="toggleType"
      [icon]="'trash'"
      [text]="'Delete'"
      [confirmationQuestion]="confirmationQuestion"
    ></app-confirmation-toggle-button>
  `
});

export const Default = Template.bind({});
Default.args = {}


export const Warning = Template.bind({});
Warning.args = {
  toggleType: 'WARNING'
}

export const Primary = Template.bind({});
Primary.args = {
  toggleType: 'PRIMARY'
}


export const Secondary = Template.bind({});
Secondary.args = {
  toggleType: 'SECONDARY'
}


export const Dark = Template.bind({});
Dark.args = {
  toggleType: 'DARK'
}