import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { PageBackgroundComponent } from './page-background.component';

export default {
  title: 'PageBackgroundComponent',
  component: PageBackgroundComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
      ],
    }),
  ],
} as Meta<PageBackgroundComponent>;

const Template: StoryFn<PageBackgroundComponent> = (args: PageBackgroundComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {
  serverUrl: 'https://www.aldrune.com',
  imageUrl: '/assets/default_images/audio_pic_default.webp',
}

export const NoImage = Template.bind({});
NoImage.args = {
  serverUrl: 'https://www.aldrune.com',
}