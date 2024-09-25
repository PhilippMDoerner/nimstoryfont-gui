import { RouterTestingModule } from '@angular/router/testing';
import { FormlyModule } from '@ngx-formly/core';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { UserServiceMockProvider } from 'src/app/_services/article/user.mock.service';
import {
  dateMessage,
  dateValidator,
  requiredMessage,
  requiredValidator,
} from 'src/app/_services/formly/validators';
import {
  dummyCampaign,
  dummyStatistics,
} from 'src/app/_services/utils/campaign.mock.service';
import {
  FormlySelectDisableFieldComponent,
  OrganismsModule,
} from '../../organisms';
import { CampaignAdminComponent } from './campaign-admin.component';

export default {
  title: 'DesignSystem/Templates/CampaignAdminComponent',
  component: CampaignAdminComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [
            {
              name: 'select-disable',
              component: FormlySelectDisableFieldComponent,
            },
          ],
          validationMessages: [requiredMessage, dateMessage],
          validators: [requiredValidator, dateValidator],
        }),
      ],
      declarations: [],
      providers: [UserServiceMockProvider],
    }),
  ],
  args: {
    campaign: dummyCampaign,
    campaignStatistics: dummyStatistics,
    serverUrl: 'https://www.aldrune.com',
  },
} as Meta<CampaignAdminComponent>;

const Template: StoryFn<CampaignAdminComponent> = (args) => ({
  props: {
    ...args,
    removeMember: action('removeMember'),
    addMember: action('addMember'),
    removeAdmin: action('removeAdmin'),
    addAdmin: action('addAdmin'),
    removeGuest: action('removeGuest'),
    addGuest: action('addGuest'),
    removeEmptySearchResponse: action('removeEmptySearchResponse'),
    addEmptySearchResponse: action('addEmptySearchResponse'),
    deactivateCampaign: action('deactivateCampaign'),
  },
});

export const Default = Template.bind({});
Default.args = {};
