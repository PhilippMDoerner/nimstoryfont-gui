import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { EditorModule } from '@tinymce/tinymce-angular';
import { OverviewItem } from 'src/app/_models/overview';
import { integerValidator, notIntegerMessage, requiredMessage, requiredValidator } from 'src/app/_services/formly/validators';
import { AtomsModule } from 'src/app/atoms/atoms.module';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { FormlyEditorFieldComponent } from 'src/app/organisms';
import * as all from 'tinymce/tinymce';
import { Encounter, EncounterConnection, EncounterObject } from '../../_models/encounter';
import { EncounterComponent } from './encounter.component';

const x = all;

const dummyEncounter: Encounter = new EncounterObject({
  pk: 1,
  description: `
    <p>In this <strong>epic encounter</strong>, the adventurers find themselves facing a fearsome <em>red dragon</em> deep within the twisting caverns of the mountains. The air is thick with the stench of sulfur as the dragon's massive form looms before them, its scales glinting in the flickering light of the torches.</p>

    <p>The dragon roars, its fiery breath scorching the stone walls and causing the ground to tremble beneath the adventurers' feet. But they stand firm, weapons at the ready, knowing that this is the moment they have been training for.</p>

    <p>The battle is fierce, with the dragon lashing out with razor-sharp claws and blasting the adventurers with jets of searing flame. But they are determined to prevail, and with each blow they strike, they chip away at the dragon's armor and weaken its resolve.</p>

    <p>Finally, with a mighty roar, the dragon falls, its lifeless body crashing to the ground in a thunderous heap. The adventurers are battered and bruised, but they emerge victorious, their spirits lifted by the knowledge that they have faced one of the greatest challenges of their lives and emerged triumphant.</p>
  `,
  encounterConnections: [
      {
          pk: 1,
          encounter: 1,
          encounter_details: {
              name: "Dragon",
              name_full: "Red Dragon",
              pk: 1
          },
          character: 1,
          character_details: {
              name: "Adventurer",
              name_full: "Adventurer One",
              pk: 1
          }
      },
      {
          pk: 2,
          encounter: 1,
          encounter_details: {
              name: "Dragon",
              name_full: "Red Dragon",
              pk: 1
          },
          character: 2,
          character_details: {
              name: "Adventurer",
              name_full: "Adventurer Two",
              pk: 2
          }
      },
      {
        "pk": 1,
        "encounter": 4,
        "encounter_details": {
          "name": "Goblin Ambush",
          "name_full": "Goblin Ambush",
          "pk": 4
        },
        "character": 4,
        "character_details": {
          "name": "Warrior",
          "name_full": "Warrior Four",
          "pk": 4
        }
      },
      {
        "pk": 1,
        "encounter": 5,
        "encounter_details": {
          "name": "Treasure Hunt",
          "name_full": "Treasure Hunt",
          "pk": 5
        },
        "character": 5,
        "character_details": {
          "name": "Wizard",
          "name_full": "Wizard Five",
          "pk": 5
        }
      },
      {
        "pk": 1,
        "encounter": 6,
        "encounter_details": {
          "name": "Orc Battle",
          "name_full": "Orc Battle",
          "pk": 6
        },
        "character": 6,
        "character_details": {
          "name": "Ranger",
          "name_full": "Ranger Six",
          "pk": 6
        }
      },
      {
        "pk": 1,
        "encounter": 7,
        "encounter_details": {
          "name": "Bandit Raid",
          "name_full": "Bandit Raid",
          "pk": 7
        },
        "character": 7,
        "character_details": {
          "name": "Paladin",
          "name_full": "Paladin Seven",
          "pk": 7
        }
      },
  ],
  location: 1,
  location_details: {
      name: "Cave",
      pk: 1,
      name_full: "Cave of the Red Dragon",
      parent_location_name: "Mountains"
  },
  title: "The Battle of the Red Dragon's Lair",
  diaryentry: 1,
  diaryentry_details: {
      author_name: "Dungeon Master",
      is_main_session: 1,
      session_number: 1
  },
  order_index: 1,
  name: "Encounter 1",
  creation_datetime: "2022-04-23T12:34:56.789Z",
  update_datetime: "2022-04-23T12:34:56.789Z",
  campaign: 1,
  campaign_details: {
      pk: 1,
      name: "Aldrune"
  },
  getAbsoluteRouterUrl: () => "/encounters/1/"
}); 

const dummyCharacters: OverviewItem[] = [
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Gandalf",
    "pk": 1,
    "name_full": "Gandalf the Grey",
    "player_character": true,
    "images": [
      {
        "pk": 1,
        "image": "http://example.com/gandalf.jpg",
        "name": "Gandalf portrait",
        "character_article": 1,
        "creature_article": undefined,
        "encounter_article": undefined,
        "item_article": undefined,
        "location_article": undefined,
        "organization_article": undefined,
        "article_type": "Character",
        "imageFile": undefined
      }
    ]
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Frodo",
    "pk": 2,
    "name_full": "Frodo Baggins",
    "player_character": true,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Gimli",
    "pk": 3,
    "name_full": "Gimli son of Glóin",
    "player_character": false,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Legolas",
    "pk": 4,
    "name_full": "Legolas Greenleaf",
    "player_character": false,
    "images": [
      {
        "pk": 2,
        "image": "http://example.com/legolas.jpg",
        "name": "Legolas portrait",
        "character_article": 4,
        "creature_article": undefined,
        "encounter_article": undefined,
        "item_article": undefined,
        "location_article": undefined,
        "organization_article": undefined,
        "article_type": "Character",
        "imageFile": undefined
      }
    ]
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Bilbo",
    "pk": 5,
    "name_full": "Bilbo Baggins",
    "player_character": false,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Aragorn",
    "pk": 6,
    "name_full": "Aragorn son of Arathorn",
    "player_character": false,
    "images": [
      {
        "pk": 3,
        "image": "http://example.com/aragorn.jpg",
        "name": "Aragorn portrait",
        "character_article": 6,
        "creature_article": undefined,
        "encounter_article": undefined,
        "item_article": undefined,
        "location_article": undefined,
        "organization_article": undefined,
        "article_type": "Character",
        "imageFile": undefined
      }
    ]
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Saruman",
    "pk": 7,
    "name_full": "Saruman the White",
    "player_character": false,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",

    "article_type": "Character",
    "name": "Sif",
    "pk": 18,
    "name_full": "Sif the Swift",
    "description": "Sif is a skilled warrior known for her lightning-fast strikes and agility. She is fiercely loyal to her friends and will stop at nothing to protect them.",
    "update_date": "2022-03-15T10:30:00.000Z",
    "player_character": true,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Gorin",
    "pk": 19,
    "name_full": "Gorin Ironfist",
    "description": "Gorin is a dwarf from the Iron Hills, known for his strength and unwavering determination. He has a fondness for ale and a good brawl.",
    "update_date": "2022-02-23T14:15:00.000Z",
    "player_character": true,
    "images": [
        {
            "pk": 42,
            "image": "https://example.com/images/gorin1.jpg",
            "name": "Gorin 1",
            "character_article": 19,
            "creature_article": undefined,
            "encounter_article": undefined,
            "item_article": undefined,
            "location_article": undefined,
            "organization_article": undefined,
            "article_type": "Character",
            "imageFile": undefined
        },
        {
            "pk": 43,
            "image": "https://example.com/images/gorin2.jpg",
            "name": "Gorin 2",
            "character_article": 19,
            "creature_article": undefined,
            "encounter_article": undefined,
            "item_article": undefined,
            "location_article": undefined,
            "organization_article": undefined,
            "article_type": "Character",
            "imageFile": undefined
        }
    ]
  },
  {
    getAbsoluteRouterUrl: () => "/search/character/123",
    "article_type": "Character",
    "name": "Lirien",
    "pk": 20,
    "name_full": "Lirien Windrider",
    "description": "Lirien is an elven archer, renowned for her skill with the bow. She is fiercely independent and often clashes with authority figures.",
    "update_date": "2022-03-20T08:45:00.000Z",
    "player_character": true,
    "images": [
        {
            "pk": 44,
            "image": "https://example.com/images/lirien1.jpg",
            "name": "Lirien 1",
            "character_article": 20,
            "creature_article": undefined,
            "encounter_article": undefined,
            "item_article": undefined,
            "location_article": undefined,
            "organization_article": undefined,
            "article_type": "Character",
            "imageFile": undefined
        }
    ]
  }
];

export default {
  title: 'Application/Detail/EncounterComponent',
  component: EncounterComponent,
  decorators: [
    moduleMetadata({
      imports: [
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
          ],
          validators: [
            requiredValidator,
            integerValidator,
          ],
        }),
      ],       
      declarations: [
        FormlyEditorFieldComponent,
      ]
    }),
  ],
  args: {
    encounter: dummyEncounter,
    characters: dummyCharacters,
    serverModel: undefined,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
  },
} as Meta<EncounterComponent>;

const Template: StoryFn<EncounterComponent> = (args: EncounterComponent) => ({ 
  props: {
    ...args,
    connectionDelete: action('connectionDelete'),
    connectionCreate: action('connectionCreate'),
    encounterDelete: action('encounterDelete'),
    encounterUpdate: action('encounterUpdate'),
    encounterCreate: action('encounterCreate'),
  },
});

export const Default = Template.bind({});
Default.args = {}

const shortConnectionList = dummyEncounter.encounterConnections?.slice(0, 3) as EncounterConnection[];
export const FewerConnections = Template.bind({});
FewerConnections.args = {
  encounter: {
    ...dummyEncounter,
    encounterConnections: [
      ...shortConnectionList,
    ]
  }
}

export const NoPermissions = Template.bind({});
NoPermissions.args = {
  canUpdate: false,
  canCreate: false,
  canDelete: false,
}

export const NoEncounter = Template.bind({});
NoEncounter.args = {
  encounter: undefined,
}

export const NoEncounterNoCreatePermission = Template.bind({});
NoEncounterNoCreatePermission.args = {
  encounter: undefined,
  canCreate: false,
}