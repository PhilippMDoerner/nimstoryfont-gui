import { Meta, StoryFn, moduleMetadata } from "@storybook/angular";
import { IconComponent } from "../icon/icon.component";
import { ButtonComponent } from "./button.component";

export default {
  title: "DesignSystem/Atoms/ButtonComponent",
  component: ButtonComponent,
  decorators: [
    moduleMetadata({
      imports: [],
      declarations: [IconComponent],
    }),
  ],
  args: {
    type: "PRIMARY",
    text: "ButtonText",
    icon: "plus",
    size: "MEDIUM",
    isSubmitButton: false,
  },
} as Meta<ButtonComponent>;

const Template: StoryFn<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
    <div class="d-flex flex-column">
      <div>
        Button Size: {{size}}
        <app-button [text]="text" [icon]="icon" [type]="type" [size]="size">
        </app-button>
        <app-button [text]="text" [icon]="icon" [type]="type" [size]="size" [outline]="true">
        </app-button>
      </div>
      
      <div class="my-4">
        Button Size: SMALL
        <app-button [text]="text" [icon]="icon" [type]="type" [size]="'SMALL'">
        </app-button>
        <app-button [text]="text" [icon]="icon" [type]="type" [size]="'SMALL'" [outline]="true">
        </app-button>
      </div>
      
      <div>
        Button Size: LARGE
        <app-button [text]="text" [icon]="icon" [type]="type" [size]="'LARGE'">
        </app-button>
        <app-button [text]="text" [icon]="icon" [type]="type" [size]="'LARGE'" [outline]="true">
        </app-button>
      </div>
      
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "SECONDARY",
};

export const Dark = Template.bind({});
Dark.args = {
  type: "DARK",
};

export const Warning = Template.bind({});
Warning.args = {
  type: "WARNING",
};

export const Danger = Template.bind({});
Danger.args = {
  type: "DANGER",
};

export const Light = Template.bind({});
Light.args = {
  type: "LIGHT",
};

export const Info = Template.bind({});
Info.args = {
  type: "INFO",
};

export const NoText = Template.bind({});
NoText.args = {
  text: undefined,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  icon: undefined,
};
