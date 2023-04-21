import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { Meta, StoryFn, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';
import { FormlyDatepickerFieldComponent } from './formly-datepicker-field.component';
import { AtomsModule } from 'src/app/atoms/atoms.module';


export default {
  title: 'DesignSystem/Organisms/FormlyDatepickerFieldComponent',
  component: FormlyDatepickerFieldComponent,
  args: {
    form: new FormGroup({}),
    model: {},
    options: {},
    fields: [
      {
        key: 'date',
        type: 'datepicker',
      },
    ],
  },
  decorators: [
    moduleMetadata({
      declarations: [
        FormlyDatepickerFieldComponent
      ],
      imports: [
        AtomsModule,
        ReactiveFormsModule,
        FormlyBootstrapModule,
        NgbModule,
        FormlyModule.forRoot({
          types: [
            { name: 'datepicker', component: FormlyDatepickerFieldComponent },
          ]
        }),
      ],
    }),
    componentWrapperDecorator(() => `
      <form [formGroup]="form">
        <formly-form 
          [model]="model" 
          [fields]="fields" 
          [options]="options" 
          [form]="form"
        ></formly-form>
      </form>
    `),
  ],
} as Meta<FormlyDatepickerFieldComponent>;

const Template: StoryFn<FormlyDatepickerFieldComponent> = (args: FormlyDatepickerFieldComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}