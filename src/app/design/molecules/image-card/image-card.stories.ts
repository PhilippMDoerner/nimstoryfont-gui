import { CommonModule } from '@angular/common';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { ImageCardComponent } from './image-card.component';


export default {
  title: 'DesignSystem/Molecules/ImageCardComponent',
  component: ImageCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
      ],
    }),
  ],
  args: {
    serverUrl: 'https://images.dog.ceo',
    imageUrl: "/breeds/malinois/n02105162_1572.jpg",
    text: 'Cute Doggo',
    alt: 'A cute little doggo',
  },
} as Meta<ImageCardComponent>;

const Template: StoryFn<ImageCardComponent> = (args: ImageCardComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}

export const NoImage = Template.bind({});
NoImage.args = {
  imageUrl: undefined,
}