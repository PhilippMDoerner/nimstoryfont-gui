import { Meta, StoryFn } from '@storybook/angular';
import { ImageCardComponent } from './image-card.component';

export default {
  title: 'DesignSystem/Molecules/ImageCardComponent',
  component: ImageCardComponent,
  args: {
    serverUrl: 'https://images.dog.ceo',
    imageUrl: '/breeds/malinois/n02105162_1572.jpg',
    text: 'Cute Doggo',
    alt: 'A cute little doggo',
  },
} as Meta<ImageCardComponent>;

const Template: StoryFn<ImageCardComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
