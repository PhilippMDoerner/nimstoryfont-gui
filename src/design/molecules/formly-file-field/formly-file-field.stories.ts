import { FormGroup, ReactiveFormsModule } from "@angular/forms";
import { FormlyBootstrapModule } from "@ngx-formly/bootstrap";
import { FormlyFieldConfig, FormlyModule } from "@ngx-formly/core";
import {
  Meta,
  StoryFn,
  componentWrapperDecorator,
  moduleMetadata,
} from "@storybook/angular";
import { AtomsModule } from "../../atoms";
import { FormlyFileFieldComponent } from "./formly-file-field.component";

export default {
  title: "DesignSystem/Molecules/FormlyFileFieldComponent",
  component: FormlyFileFieldComponent,
  args: {
    form: new FormGroup({}),
    model: {},
    options: {},
    fields: [
      {
        key: "file",
        type: "file",
        props: {
          buttonType: "SECONDARY",
        },
      } as FormlyFieldConfig,
    ],
  },
  decorators: [
    moduleMetadata({
      declarations: [FormlyFileFieldComponent],
      imports: [
        AtomsModule,
        ReactiveFormsModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
          types: [
            {
              name: "file",
              component: FormlyFileFieldComponent,
              wrappers: ["form-field"],
            },
          ],
        }),
      ],
    }),
    componentWrapperDecorator(
      () => `
      <form [formGroup]="form">
        <formly-form 
          [model]="model" 
          [fields]="fields" 
          [options]="options" 
          [form]="form"
        ></formly-form>
      </form>
    `,
    ),
  ],
} as Meta<FormlyFileFieldComponent>;

const Template: StoryFn<FormlyFileFieldComponent> = (
  args: FormlyFileFieldComponent,
) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};

const PrimaryTemplate: StoryFn<FormlyFileFieldComponent> = (
  args: FormlyFileFieldComponent,
) => ({
  props: {
    ...args,
    fields: [
      {
        key: "file",
        type: "file",
        props: {
          buttonType: "PRIMARY",
        },
      },
    ],
  },
});
export const Primary = PrimaryTemplate.bind({});
Primary.args = {};
