import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { ConfirmationModalComponent } from './confirmation-modal.component';

export default {
  title: 'DesignSystem/Molecules/ConfirmationModalComponent',
  component: ConfirmationModalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
        NgbModule,
      ],
      declarations: [
        
      ],
    }),
    componentWrapperDecorator(() => `
      NOTE: This is currently broken, <a href="https://github.com/storybookjs/storybook/issues/10272"> but only in storybook </a>. <br>
      The ng-content will work as normal in normal components
      <app-confirmation-modal 
        [heading]="heading"
        [confirmValue]="confirmValue"
        [modalType]="modalType"
        [cancelButtonType]="cancelButtonType"
        [submitButtonLabel]="submitButtonLabel"
        [cancelButtonLabel]="cancelButtonLabel"
        [submitIcon]="submitIcon"
        (modalClose)="modalClose($event)" 
        (confirm)="confirm($event)"
        (cancel)="cancel($event)"
      >
      
        <ng-container selector="body">
          <h3> Body </h3>
          This is the modal body content.
        </ng-container>
        
        <ng-container>
          <app-button 
            [type]="'SECONDARY'" 
            [text]="'Open Modal'"
          ></app-button>
        </ng-container>
        
      </app-confirmation-modal>
    `)
  ],
  args: {
    heading: "Modal Heading",
    cancelButtonLabel: "No",
    submitButtonLabel: "Yes",
    modalType: "PRIMARY",
    cancelButtonType: "SECONDARY",
    confirmValue: "Confirm value to emit",
    submitIcon: 'plus',
  }
} as Meta<ConfirmationModalComponent>;

const Template: StoryFn<ConfirmationModalComponent> = (args: ConfirmationModalComponent) => ({ 
  props: {
    ...args,
    modalClose: action('modalClose'),
    confirm: action('confirm'),
    cancel: action('cancel')
  },
});

export const Default = Template.bind({});
Default.args = {}


export const Secondary = Template.bind({});
Secondary.args = {
  modalType: 'SECONDARY'
}

export const Dark = Template.bind({});
Dark.args = {
  modalType: 'DARK'
}

export const Warning = Template.bind({});
Warning.args = {
  modalType: 'WARNING'
}

export const Danger = Template.bind({});
Danger.args = {
  modalType: 'DANGER'
}

export const Light = Template.bind({});
Light.args = {
  modalType: 'LIGHT'
}

export const Info = Template.bind({});
Info.args = {
  modalType: 'INFO'
}