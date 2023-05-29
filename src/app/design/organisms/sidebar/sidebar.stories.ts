import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dummyCampaign } from 'src/app/_services/utils/campaign.mock.service';
import { MoleculesModule } from 'src/app/design/molecules';
import { SidebarComponent } from './sidebar.component';

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
