import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { Campaign } from 'src/app/_models/campaign';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { ArticleMetaData } from '../_model/sidebar';
import { SidebarComponent } from './sidebar.component';

const dummyEntries: ArticleMetaData[] = [
  {
    title: "Creatures", 
    iconClass: "dragon", 
    route: "creature-overview",
    color: "red",
    article_types: ["creature"],
    showInSidebar: true,
  },
  {
    title: "Characters", 
    iconClass: "male", 
    route: "character-overview",
    color: "blue",
    article_types: ["character"],
    showInSidebar: true,
  },
  {
    title: "DiaryEntries", 
    iconClass: "book-open", 
    route: "diaryentry-overview",
    color: "darkgreen",
    article_types: ["diaryentry"],
    showInSidebar: true,
  },
  {
    title: "Items", 
    iconClass: "magic", 
    route: "item-overview",
    color: "yellow",
    article_types: ["item"],
    showInSidebar: true,
  },
  {
    title: "Locations", 
    iconClass: "compass", 
    route: "location-overview",
    color: "brown",
    article_types: ["location"],
    showInSidebar: true,
  },
  {
    title: "Maps", 
    iconClass: "map", 
    route: 'default-map',
    color: "beige",
    article_types: ["map"],
    showInSidebar: true,
  },
  {
    title: "Organizations", 
    iconClass: "sitemap", 
    route: "organization-overview",
    color: "purple",
    article_types: ["organization"],
    showInSidebar: true,
  },
  {
    title: "Quests", 
    iconClass: "question-circle", 
    route: "quest-overview",
    color: "white",
    article_types: ["quest"],
    showInSidebar: true,
  },
  {
    title: "Recordings", 
    iconClass: "file-audio-o", 
    route: "sessionaudio-overview",
    color: "green",
    article_types: ["sessionaudio", "recording"],
    showInSidebar: true,
  },
  {
    title: "Rules", 
    iconClass: "book", 
    route: "rules",
    color: "orange",
    article_types: ["rule", "rules"],
    showInSidebar: true,
  },
  {
    title: "Spells", 
    iconClass: "hand-sparkles", 
    route: "spells",
    color: "violet",
    article_types: ["spell", "spells"],
    showInSidebar: true,
  },
  {
    title: "Sessions",
    iconClass: "calendar-alt",
    route: "sessions",
    color: "green",
    article_types: ["session", "sessions"],
    showInSidebar: true,
  }
];

const dummyCampaign: Campaign = {
  name: 'Aldrune',
  subtitle: 'A campaign for testing',
  pk: 1,
  background_image: 'https://example.com/background.jpg',
  icon: 'https://www.aldrune.com/media/campaign_icons/favicon-128x128.png',
  default_map: 123,
  default_map_details: { pk: 123, name: 'Default Map' },
  is_deactivated: false,
  has_audio_recording_permission: true,
  members: [],
  admins: [],
  guests: [],
  member_group_name: 'Members',
  admin_group_name: 'Admins',
  guest_group_name: 'Guests',
  emptySearchResponses: [
    { id: 1, text: 'Empty response 1', campaign: 1 },
    { id: 2, text: 'Empty response 2', campaign: 1 }
  ]
};

const dummyUserData = {
  accessToken: {
    token: "abc123",
    exp: 1651345060,
    type: 'access',
  },
  refreshToken: {
    token: "def456",
    exp: 1651345090,
    type: 'refresh',
  },
  userId: 123,
  userName: "John Doe",
  isAdmin: true,
  isSuperUser: false,
  campaignMemberships: {
    "Campaign A": 'member',
    "Campaign B": 'admin',
  }
};



export default {
  title: 'DesignSystem/Organisms/SidebarComponent',
  component: SidebarComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MoleculesModule,
        RouterTestingModule,
      ],
      declarations: []
    }),
  ],
  args: {
    sidebarEntries: dummyEntries,
    campaign: dummyCampaign,
    user: dummyUserData,
  }
} as Meta<SidebarComponent>;

const Template: StoryFn<SidebarComponent> = (args: SidebarComponent) => ({ 
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};
