import { Meta, moduleMetadata, StoryObj } from '@storybook/angular';
import { FORMLY_MODULE } from 'src/app/_modules/formly';
import { dummyMaps } from 'src/app/_services/article/map.service.mock';
import { dummyCampaign } from 'src/app/_services/utils/campaign.mock.service';
import { CampaignUpdateComponent } from './campaign-update.component';

export default {
  title: 'DesignSystem/Templates/CampaignUpdate',
  component: CampaignUpdateComponent,

  decorators: [
    moduleMetadata({
      imports: [FORMLY_MODULE],
    }),
  ],
  args: {
    userModel: dummyCampaign,
    serverModel: undefined,
    mapOptions: dummyMaps,
  },
  argTypes: {
    cancel: { action: 'cancel' },
  },
} as Meta<CampaignUpdateComponent>;

type Story = StoryObj<CampaignUpdateComponent>;

export const Default: Story = {};
