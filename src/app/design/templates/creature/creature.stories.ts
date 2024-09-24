import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { Creature } from 'src/app/_models/creature';
import {
  integerValidator,
  notIntegerMessage,
  requiredMessage,
  requiredValidator,
} from 'src/app/_services/formly/validators';
import { FormlyFileFieldComponent } from '../../molecules';
import { OrganismsModule } from '../../organisms';
import { CreatureComponent } from './creature.component';

const dummyCreature: Creature = {
  getAbsoluteRouterUrl: () => 'https://example.com/creatures/123',
  pk: 123,
  name: 'Goblin',
  creation_datetime: '2022-04-01T12:00:00Z',
  update_datetime: '2022-04-02T15:30:00Z',
  description: 'A small, green-skinned humanoid with sharp teeth and claws.',
  campaign: 4,
  campaign_details: { pk: 4, name: 'Lost Mines of Phandelver' },
  images: [
    {
      pk: 1,
      image: '/breeds/mastiff-tibetan/n02108551_5830.jpg',
      name: 'Goblin portrait',
      creature_article: 123,
    },
    {
      pk: 2,
      image: '/breeds/germanshepherd/IMG_20200801_005830_387.jpg',
      name: 'Goblin horde',
      creature_article: 123,
    },
  ],
};

export default {
  title: 'DesignSystem/Templates/CreatureComponent',
  component: CreatureComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'file',
              component: FormlyFileFieldComponent,
              wrappers: ['form-field'],
            },
          ],
          validationMessages: [requiredMessage, notIntegerMessage],
          validators: [requiredValidator, integerValidator],
        }),
      ],
      declarations: [],
    }),
  ],
  args: {
    imageServerModel: undefined,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    creature: dummyCreature,
    serverUrl: 'https://images.dog.ceo',
  },
} as Meta<CreatureComponent>;

const Template: StoryFn<CreatureComponent> = (args) => ({
  props: {
    ...args,
    createImage: action('createImage'),
    deleteImage: action('deleteImage'),
    updateImage: action('updateImage'),
    creatureDelete: action('creatureDelete'),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const NoPermission = Template.bind({});
NoPermission.args = {
  canDelete: false,
  canUpdate: false,
  canCreate: false,
};
