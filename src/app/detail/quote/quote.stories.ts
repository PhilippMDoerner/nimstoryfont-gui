import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { OverviewItem } from 'src/app/_models/overview';
import { Character } from '../../_models/character';
import { Quote } from '../../_models/quote';
import { OrganismsModule } from '../../design/organisms';
import { QuoteComponent } from './quote.component';

const dummyQuote: Quote = {
  quote: "In the darkest of times, the light within us shines the brightest.",
  description: "Said by a wise old wizard to a young hero about to embark on a perilous quest.",
  pk: 1,
  session: 3,
  session_details: {
    pk: 3,
    is_main_session: true,
    is_main_session_int: 1,
    session_number: 3,
    session_date: "2023-04-20",
    start_day: 1,
    end_day: 5,
    name: "The Quest for the Sacred Amulet",
    title: "The Quest",
  },
  encounter: 2,
  connections: [
    {
      character: 1,
      character_details: {
        pk: 1,
        name: "Gandalf",
        name_full: "Gandalf the Grey",
      },
      quote: 2,
      pk: 2,
    },
    {
      character: 2,
      character_details: {
        pk: 2,
        name: "Frodo",
        name_full: "Frodo Baggins",
      },
      quote: 3,
      pk: 3,
    },
  ],
};

const dummyCharacter: Character = {
  getAbsoluteRouterUrl: () => "/dummy/url",
  player_character: false,
  alive: true,
  title: "Gandalf the Grey",
  gender: "Male",
  race: "Maia",
  description:
    "A wise and powerful wizard, Gandalf the Grey is a member of the Fellowship of the Ring and a key figure in the fight against the Dark Lord Sauron.",
  organizations: [
    {
      pk: 1,
      name: "The White Council",
      organization_id: 1,
      role: "Member",
    },
    {
      pk: 2,
      name: "The Fellowship of the Ring",
      organization_id: 2,
      role: "Member",
    },
  ],
  current_location: 3,
  current_location_details: {
    pk: 3,
    name_full: "Moria",
    parent_location: "Middle-earth",
  },
  items: [
    {
      pk: 1,
      name: "Glamdring",
    },
    {
      pk: 2,
      name: "Staff",
    },
  ],
  encounters: [
    {
      name: "The Council of Elrond",
      creation_datetime: "2023-04-22T12:00:00.000Z",
      update_datetime: "2023-04-23T12:00:00.000Z",
      encounterConnections: [
        {
          connection_pk: 1,
          character_name: "Gandalf the Grey",
        },
        {
          connection_pk: 2,
          character_name: "Frodo Baggins",
        },
      ],
      description:
        "At the Council of Elrond, Gandalf reveals the true nature of the One Ring and urges the Fellowship to destroy it in the fires of Mount Doom.",
      pk: 1,
    },
    {
      name: "The Battle of Helm's Deep",
      creation_datetime: "2023-04-23T12:00:00.000Z",
      update_datetime: "2023-04-24T12:00:00.000Z",
      encounterConnections: [
        {
          connection_pk: 3,
          character_name: "Gandalf the Grey",
        },
        {
          connection_pk: 4,
          character_name: "Aragorn",
        },
      ],
      description:
        "Gandalf arrives at Helm's Deep with reinforcements and turns the tide of the battle against Saruman's forces.",
      pk: 2,
    },
  ],
  images: [],
  player_class_connections: [
    {
      pk: 1,
      player_class: 8,
      character: 5,
      player_class_details: {
        name: "Paladin",
        pk: 8,
      }
    },
  ],
  campaign: 1,
  campaign_details: {
    pk: 1,
    name: "The War of the Ring",
  },
};

const dummyCharacters: OverviewItem[] = [
  {
    getAbsoluteRouterUrl: () => '/character/456',
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
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Frodo",
    "pk": 2,
    "name_full": "Frodo Baggins",
    "player_character": true,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Gimli",
    "pk": 3,
    "name_full": "Gimli son of Glóin",
    "player_character": false,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => '/character/456',
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
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Bilbo",
    "pk": 5,
    "name_full": "Bilbo Baggins",
    "player_character": false,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => '/character/456',
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
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Saruman",
    "pk": 7,
    "name_full": "Saruman the White",
    "player_character": false,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Sif",
    "pk": 18,
    "name_full": "Sif the Swift",
    "description": "Sif is a skilled warrior known for her lightning-fast strikes and agility. She is fiercely loyal to her friends and will stop at nothing to protect them.",
    "update_datetime": "2022-03-15T10:30:00.000Z",
    "player_character": true,
    "images": []
  },
  {
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Gorin",
    "pk": 19,
    "name_full": "Gorin Ironfist",
    "description": "Gorin is a dwarf from the Iron Hills, known for his strength and unwavering determination. He has a fondness for ale and a good brawl.",
    "update_datetime": "2022-02-23T14:15:00.000Z",
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
    getAbsoluteRouterUrl: () => '/character/456',
    "article_type": "Character",
    "name": "Lirien",
    "pk": 20,
    "name_full": "Lirien Windrider",
    "description": "Lirien is an elven archer, renowned for her skill with the bow. She is fiercely independent and often clashes with authority figures.",
    "update_datetime": "2022-03-20T08:45:00.000Z",
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
  title: 'Application/Detail/QuoteComponent',
  component: QuoteComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
      ],
      declarations: [
      ]
    }),
  ],
  args: {
    quote: dummyQuote,
    character: dummyCharacter,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    campaignCharacters: dummyCharacters,
  }
} as Meta<QuoteComponent>;

const Template: StoryFn<QuoteComponent> = (args: QuoteComponent) => ({ 
  props: {
    ...args,
    quoteDelete: action('quoteDelete'),
    quoteCreate: action('quoteCreate'),
    quoteUpdate: action('quoteUpdate'),
    refreshQuote: action('refreshQuote'),
    connectionDelete: action('connectionDelete'),
    connectionCreate: action('connectionCreate'),
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