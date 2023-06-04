import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dummyCampaign } from 'src/app/_services/utils/campaign.mock.service';
import { MoleculesModule } from 'src/app/design/molecules';
import { SidebarComponent } from './sidebar.component';

// Add MockTokenService

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
  }
} as Meta<SidebarComponent>;

const Template: StoryFn<SidebarComponent> = (args: SidebarComponent) => ({ 
  props: {
    ...args
  },
});

export const Default = Template.bind({});
Default.args = {};
