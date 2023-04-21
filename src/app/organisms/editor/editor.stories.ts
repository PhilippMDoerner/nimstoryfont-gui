import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { EditorModule, TINYMCE_SCRIPT_SRC } from '@tinymce/tinymce-angular';
import { EditorComponent } from './editor.component';

export default {
  title: 'DesignSystem/Organisms/EditorComponent',
  component: EditorComponent,
  decorators: [
    moduleMetadata({
      imports: [
        EditorModule,
        FormsModule,
        ReactiveFormsModule,
      ],
      declarations: [
        EditorComponent,
      ],
      providers: [
        { provide: TINYMCE_SCRIPT_SRC, useValue: 'tinymce.min.js' },
      ]
    }),
  ],
  args: {
    text: 'Potato'
  }
} as Meta<EditorComponent>;

const Template: StoryFn<EditorComponent> = (args: EditorComponent) => ({ 
  props: args,
  template: `
    Note: This component does not display that it updates text in the parent, that must be tested out.
    <app-editor [(text)]="text"></app-editor>
  `
});

export const Default = Template.bind({});
Default.args = {}
