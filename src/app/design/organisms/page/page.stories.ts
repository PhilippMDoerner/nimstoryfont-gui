import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { Campaign } from 'src/app/_models/campaign';
import { MoleculesModule } from 'src/app/design/molecules';
import { PageContainerComponent } from '../page-container/page-container.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { PageComponent } from './page.component';

const dummyCampaign: Campaign = {
  name: 'Aldrune',
  subtitle: 'A campaign for testing',
  pk: 1,
  background_image: '/assets/default_images/audio_pic_default.webp',
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
  title: 'DesignSystem/Organisms/PageComponent',
  component: PageComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MoleculesModule,
        RouterTestingModule,
      ],
      declarations: [
        SidebarComponent,
        PageContainerComponent,
      ]
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    serverUrl: 'https://www.aldrune.com',
    user: dummyUserData,
    campaign: dummyCampaign,
  }
} as Meta<PageComponent>;

const Template: StoryFn<PageComponent> = (args: PageComponent) => ({ 
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};

