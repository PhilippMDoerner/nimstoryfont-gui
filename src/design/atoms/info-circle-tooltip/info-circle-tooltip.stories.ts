import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Meta, StoryFn, moduleMetadata } from "@storybook/angular";
import { IconComponent } from "../icon/icon.component";
import { InfoCircleTooltipComponent } from "./info-circle-tooltip.component";

export default {
  title: "DesignSystem/Atoms/InfoCircleTooltipComponent",
  component: InfoCircleTooltipComponent,
  decorators: [
    moduleMetadata({
      imports: [NgbModule],
      declarations: [IconComponent],
    }),
  ],
  args: {
    text: "SomeText",
    tooltip: "Tooltip text beautiful",
  },
} as Meta<InfoCircleTooltipComponent>;

const Template: StoryFn<InfoCircleTooltipComponent> = (
  args: InfoCircleTooltipComponent,
) => ({
  props: {
    ...args,
  },
  template: `
    <div class="my-5">
      <app-info-circle-tooltip
        [tooltip]="tooltip"
        [text]="text"
      ></app-info-circle-tooltip>
    </div>
  `,
});

export const Default = Template.bind({});
Default.args = {};
