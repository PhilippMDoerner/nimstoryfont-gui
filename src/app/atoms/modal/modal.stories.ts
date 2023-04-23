import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from '../button/button.component';
import { ModalComponent } from './modal.component';

export default {
  title: 'DesignSystem/Atoms/ModalComponent',
  component: ModalComponent,
  decorators: [
    moduleMetadata({
      imports: [
        NgbModule,
      ],
      declarations: [
        ButtonComponent
      ],
    }),
    componentWrapperDecorator(() => `
      NOTE: This is currently broken, <a href="https://github.com/storybookjs/storybook/issues/10272"> but only in storybook </a>. <br>
      The ng-content will work as normal in normal components
      <app-modal 
        [heading]="heading" 
        (modalClose)="modalClose($event)" 
      >
      
        <ng-container selector="body">
          <h3> Body </h3>
          This is the modal body content.
        </ng-container>
        
        <ng-container>
          <app-button [type]="'SECONDARY'">
            Open Modal
          </app-button>
        </ng-container>
        
      </app-modal>
    `)
  ],
  args: {
    heading: "Modal Heading",
  }
} as Meta<ModalComponent>;

const Template: StoryFn<ModalComponent> = (args: ModalComponent) => ({ 
  props: {
    ...args,
    modalClose: action('modalClose'),
  },
});

export const Default = Template.bind({});
Default.args = {}