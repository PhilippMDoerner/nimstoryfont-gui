import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { FormlyEditorFieldComponent } from 'src/app/organisms';
import { OrganismsModule } from '..';
import { PlayerClass } from '../../_models/playerclass';
import { Spell } from '../../_models/spell';
import { hasSpecialCharactersMessage, integerValidator, notIntegerMessage, requiredMessage, requiredValidator, specialCharacterValidator } from '../../_services/formly/validators';
import { SpellComponent } from './spell.component';

const dummySpell: Spell = {
  getAbsoluteRouterUrl: () => "/spells/1",
  spell_level: 3,
  casting_time: "1 Action",
  range: "Self",
  components: "VSM*",
  duration: "Instantaneous",
  concentration: true,
  ritual: false,
  school: "Necromancy",
  saving_throw: "CON",
  damage: "8d6",
  description: "You draw forth the soul of a creature you have slain...",
  player_class_connections: [
    {
      player_class: 1,
      spell: 1,
      player_class_details: {
        pk: 1,
        name: "Wizard",
      },
    },
    {
      player_class: 2,
      spell: 1,
      player_class_details: {
        pk: 2,
        name: "Sorcerer",
      },
    },
  ],
  pk: 123,
  name: "Soul Cage",
  creation_datetime: "2022-04-25T12:00:00.000Z",
  update_datetime: "2022-04-25T14:30:00.000Z",
  campaign: 1,
  campaign_details: {
    pk: 1,
    name: "Tales from the Sword Coast",
  },
};

const dummyClasses: PlayerClass[] = [
  { pk: 1, name: "Barbarian" },
  { pk: 2, name: "Bard" },
  { pk: 3, name: "Cleric" },
  { pk: 4, name: "Druid" },
  { pk: 5, name: "Fighter" },
  { pk: 6, name: "Monk" },
  { pk: 7, name: "Paladin" },
  { pk: 8, name: "Ranger" },
  { pk: 9, name: "Rogue" },
  { pk: 10, name: "Wizard" }
];


export default {
  title: 'Application/Detail/SpellComponent',
  component: SpellComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [
            { name: 'text-editor', component: FormlyEditorFieldComponent },
          ],
          validationMessages: [
            requiredMessage,
            notIntegerMessage,
            hasSpecialCharactersMessage,
          ],
          validators: [
            requiredValidator,
            integerValidator,
            specialCharacterValidator,
          ],
        }),
      ],
      declarations: [
      ]
    }),
  ],
  args: {
    spell: dummySpell,
    playerClasses: dummyClasses,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    serverModel: undefined,
  }
} as Meta<SpellComponent>;

const Template: StoryFn<SpellComponent> = (args: SpellComponent) => ({ 
  props: {
    ...args,
    spellDelete: action('spellDelete'),
    spellCreate: action('spellCreate'),
    spellUpdate: action('spellUpdate'),
    connectionCreate: action('connectionCreate'),
    connectionDelete: action('connectionDelete'),
  },
});

export const Default = Template.bind({});
Default.args = {}

export const NoPermission = Template.bind({});
NoPermission.args = {
  canCreate: false,
  canUpdate: false,
  canDelete: false,
}

export const NoSpell = Template.bind({});
NoSpell.args = {
  spell: undefined
}

export const NoSpellNoCreate = Template.bind({});
NoSpellNoCreate.args = {
  spell: undefined,
  canCreate: false,
}