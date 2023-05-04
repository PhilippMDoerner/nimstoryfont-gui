import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { Spell } from 'src/app/_models/spell';
import { hasSpecialCharactersMessage, integerValidator, notIntegerMessage, requiredMessage, requiredValidator, specialCharacterValidator } from 'src/app/_services/formly/validators';
import { MoleculesModule } from 'src/app/design/molecules/molecules.module';
import * as all from 'tinymce/tinymce';
import { AtomsModule } from '../../design/atoms/atoms.module';
import { FormlyEditorFieldComponent } from '../../design/organisms';
import { SpellComponent } from '../spell/spell.component';
import { SpellsComponent } from './spells.component';

const x = all;

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

export default {
  title: 'Application/Login/SpellsComponent',
  component: SpellsComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        AtomsModule,
        MoleculesModule,
        NgbModule,
        EditorModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
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
        FormlyEditorFieldComponent,
        SpellComponent,
      ]
    }),
  ],
  args: {
    spells: Array(10).fill(dummySpell),
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    serverModel: undefined,
  },
} as Meta<SpellsComponent>;

const Template: StoryFn<SpellsComponent> = (args: SpellsComponent) => ({ 
  props: {
    ...args,
    spellDelete: action('spellDelete'),
    spellUpdate: action('spellUpdate'),
    spellCreate: action('spellCreate'),
    connectionDelete: action('connectionDelete'),
    connectionCreate: action('connectionCreate'),
  },
});

export const Default = Template.bind({});
Default.args = {}


export const NoPermissions = Template.bind({});
NoPermissions.args = {
  canUpdate: false,
  canCreate: false,
  canDelete: false,
}

export const NoSpells = Template.bind({});
NoSpells.args = {
  spells: [],
}