import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { PageContainerComponent } from './page-container.component';

export default {
  title: 'DesignSystem/Organisms/PageContainerComponent',
  component: PageContainerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MoleculesModule,
      ],
      declarations: [
      ]
    }),
  ],
  parameters: {
    backgrounds: { default: 'grey' }, // https://storybook.js.org/docs/angular/essentials/backgrounds
  },
  args: {
    imageServerUrl: 'https://www.aldrune.com',
    backgroundImageUrl: '/assets/default_images/audio_pic_default.webp',
  }
} as Meta<PageContainerComponent>;

const Template: StoryFn<PageContainerComponent> = (args: PageContainerComponent) => ({ 
  props: {
    ...args
  },
  template: `
    <app-page-container
      [imageServerUrl]="imageServerUrl"
      [backgroundImageUrl]="backgroundImageUrl"
    >
      <h1 class="text-center"> A headline </h1>
      <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt aliquam sapiente facilis laudantium eveniet laborum explicabo perspiciatis tempore culpa quia vitae, modi ullam animi, molestias itaque alias fugit in neque. </p>
    </app-page-container>
  `
});

export const Default = Template.bind({});
Default.args = {};

export const NoImage = Template.bind({});
NoImage.args = {
  backgroundImageUrl: undefined,
};
