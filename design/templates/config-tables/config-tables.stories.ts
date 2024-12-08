import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { dummyMarkerTypes } from 'src/app/_services/article/marker-type.service.mock';
import { dummyOrganizations } from 'src/app/_services/article/organization.service.mock';
import { dummyClasses } from 'src/app/_services/article/player-class.service.mock';
import { FormlyProvider } from 'src/app/_services/formly/formly-service.mock';

import { FORMLY_MODULE } from 'src/app/_modules/formly_constants';
import { ConfigTablesComponent } from './config-tables.component';

export default {
  title: 'DesignSystem/Templates/ConfigTablesComponent',
  component: ConfigTablesComponent,
  decorators: [
    moduleMetadata({
      imports: [RouterTestingModule, FORMLY_MODULE],
      declarations: [],
      providers: [FormlyProvider],
    }),
  ],
  args: {
    campaignName: 'Aldrune',
    state: 'CREATE',
    userModel: {},
    serverModel: undefined,
    classOptions: dummyClasses,
    organizations: dummyOrganizations,
  },
} as Meta<ConfigTablesComponent>;

const Template: StoryFn<ConfigTablesComponent> = (args) => ({
  props: {
    ...args,
    loadTableEntries: action('loadTableEntries'),
    deleteTableEntry: action('deleteTableEntry'),
    createTableEntry: action('createTableEntry'),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const WithData = Template.bind({});
WithData.args = {
  tableData: {
    MARKER_TYPE: dummyMarkerTypes,
    PLAYER_CLASS: dummyClasses,
  },
};
