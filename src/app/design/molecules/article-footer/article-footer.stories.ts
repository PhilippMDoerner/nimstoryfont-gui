import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from '../../atoms/atoms.module';
import { ConfirmationToggleButtonComponent } from '../confirmation-toggle-button/confirmation-toggle-button.component';
import { ArticleFooterComponent } from './article-footer.component';

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
    buttonLink: undefined,
    deleteMessage: 'Delete this entry?',
    showDelete: true,
  }
} as Meta<ArticleFooterComponent>;

const Template: StoryFn<ArticleFooterComponent> = (args: ArticleFooterComponent) => ({ 
  props: {
    ...args,
    buttonClick: action('buttonClick'),
    delete: action('delete'),
  },
});

export const Default = Template.bind({});
Default.args = {
  buttonLabel: 'Click me',  
}

export const WithLink = Template.bind({});
WithLink.args = {
  buttonLink: '/to/other/page',
}