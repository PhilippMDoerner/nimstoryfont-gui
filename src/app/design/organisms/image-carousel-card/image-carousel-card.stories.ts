import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dateMessage, dateValidator, fieldMatchValidator, fieldsDontMatchMessage, integerValidator, notIntegerMessage, requiredMessage, requiredValidator } from 'src/app/_services/formly/validators';
import { MoleculesModule } from 'src/app/design/molecules';
import { FormlyFileFieldComponent } from 'src/app/design/molecules/formly-file-field/formly-file-field.component';
import { Image } from '../../../_models/image';
import { ImageCarouselComponent } from '../image-carousel/image-carousel.component';
import { ImageCarouselCardComponent } from './image-carousel-card.component';

const dummyImages: Image[] = [
  {
    "pk": 1,
    "image": "/breeds/germanshepherd/IMG_20200801_005830_387.jpg",
    "name": "Image 1",
    "character_article": 1,
    "creature_article": undefined,
    "encounter_article": undefined,
    "item_article": undefined,
    "location_article": undefined,
    "organization_article": undefined,
    "article_type": "Type A"
  },
  {
    "pk": 2,
    "image": "/breeds/mastiff-tibetan/n02108551_5830.jpg",
    "name": "Image 2",
    "character_article": undefined,
    "creature_article": 3,
    "encounter_article": undefined,
    "item_article": undefined,
    "location_article": undefined,
    "organization_article": undefined,
    "article_type": "Type B"
  },
  {
    "pk": 3,
    "image": "/breeds/malinois/n02105162_1572.jpg",
    "name": "Image 3",
    "character_article": undefined,
    "creature_article": undefined,
    "encounter_article": 5,
    "item_article": undefined,
    "location_article": undefined,
    "organization_article": undefined,
    "article_type": "Type C"
  },
  {
    "pk": 4,
    "image": "/breeds/ridgeback-rhodesian/n02087394_1352.jpg",
    "name": "Image 4",
    "character_article": undefined,
    "creature_article": undefined,
    "encounter_article": undefined,
    "item_article": 7,
    "location_article": undefined,
    "organization_article": undefined,
    "article_type": "Type D"
  }
];


export default {
  title: 'DesignSystem/Organisms/ImageCarouselCardComponent',
  component: ImageCarouselCardComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MoleculesModule,
        FormlyModule.forRoot({
          types: [
            { name: 'file', component: FormlyFileFieldComponent, wrappers: ['form-field'] },
          ],
          validationMessages: [
            requiredMessage,
            dateMessage,
            notIntegerMessage,
            fieldsDontMatchMessage,
          ],
          validators: [
            requiredValidator,
            dateValidator,
            integerValidator,
            fieldMatchValidator,
          ],
        }),
      ],       
      declarations: [
        ImageCarouselComponent
      ]
    }),
  ],
  args: {
    images: dummyImages,
    serverUrl: 'https://images.dog.ceo',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
  },
} as Meta<ImageCarouselCardComponent>;

const Template: StoryFn<ImageCarouselCardComponent> = (args: ImageCarouselCardComponent) => ({ 
  props: {
    ...args,
    deleteImage: action('deleteImage'),
    createImage: action('createImage'),
    updateImage: action('updateImage'),
  },
});

export const Default = Template.bind({});
Default.args = {}

export const NoImages = Template.bind({});
NoImages.args = {
  images: [],
}