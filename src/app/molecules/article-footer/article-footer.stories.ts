import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { ConfirmationToggleButtonComponent } from '../confirmation-toggle-button/confirmation-toggle-button.component';
import { ArticleFooterComponent } from './article-footer.component';
import { RouterTestingModule } from '@angular/router/testing';

export default {
  title: 'DesignSystem/Molecules/ArticleFooterComponent',
  component: ArticleFooterComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
        RouterTestingModule,
      ],
      declarations: [
        ConfirmationToggleButtonComponent,
      ]
    }),
  ],
  args: {
    buttonLabel: 'Click me',
    buttonLink: '/to/other/page',
    deleteMessage: 'Delete this entry?',
    showDelete: true
  }
} as Meta<ArticleFooterComponent>;

const Template: StoryFn<ArticleFooterComponent> = (args: ArticleFooterComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Click me',  
}