import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ButtonComponent } from './button.component';

export default {
  title: 'DesignSystem/Atoms/ButtonComponent',
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [
        ButtonComponent,
      ]
    }),
  ],
  args: {
    type: 'PRIMARY',
    text: 'ButtonText',
    size: 'MEDIUM',
  }
} as Meta<ButtonComponent>;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({ 
  props: args,
  template: `
    <div class="d-flex flex-column">
      <div>
        Button Size: {{size}}
        <app-button [type]="type" [size]="size">
          {{text}}
        </app-button>
      </div>
      
      <div class="my-4">
        Button Size: SMALL
        <app-button [type]="type" [size]="'SMALL'">
          {{text}}
        </app-button>
      </div>
      
      <div>
        Button Size: LARGE
        <app-button [type]="type" [size]="'LARGE'">
          {{text}}
        </app-button>
      </div>
      
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {}

export const Secondary = Template.bind({});
Secondary.args = {
  type : 'SECONDARY'
}

export const Dark = Template.bind({});
Dark.args = {
  type : 'DARK'
}

export const Warning = Template.bind({});
Warning.args = {
  type : 'WARNING'
}

export const Danger = Template.bind({});
Danger.args = {
  type : 'DANGER'
}

export const Light = Template.bind({});
Light.args = {
  type : 'LIGHT'
}

export const Info = Template.bind({});
Info.args = {
  type : 'INFO'
}