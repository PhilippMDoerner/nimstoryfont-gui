import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dummyCampaign } from 'src/app/_services/utils/campaign.mock.service';
import { PageComponent } from './page.component';

const dummyUserData = {
  accessToken: {
    token: 'abc123',
    exp: 1651345060,
    type: 'access',
  },
  refreshToken: {
    token: 'def456',
    exp: 1651345090,
    type: 'refresh',
  },
  userId: 123,
  userName: 'John Doe',
  isAdmin: true,
  isSuperUser: false,
  campaignMemberships: {
    'Campaign A': 'member',
    'Campaign B': 'admin',
  },
};

export default {
  title: 'DesignSystem/Organisms/PageComponent',
  component: PageComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule],
    }),
  ],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    serverUrl: 'https://www.aldrune.com',
    user: dummyUserData,
    campaign: dummyCampaign,
  },
} as Meta<PageComponent>;

const Template: StoryFn<PageComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
