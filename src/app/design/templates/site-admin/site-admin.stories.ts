import { CommonModule } from "@angular/common";
import { RouterTestingModule } from "@angular/router/testing";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormlyModule } from "@ngx-formly/core";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn, moduleMetadata } from "@storybook/angular";
import { dummyGroups } from "src/app/_services/article/group.service.mock";
import { dummyUsers } from "src/app/_services/article/user.mock.service";
import {
  fieldMatchValidator,
  fieldsDontMatchMessage,
  hasSpecialCharactersMessage,
  integerValidator,
  notIntegerMessage,
  requiredMessage,
  requiredValidator,
  specialCharacterValidator,
} from "src/app/_services/formly/validators";
import {
  dummyCampaigns,
  dummySiteStatistics,
} from "src/app/_services/utils/campaign.mock.service";
import { FormlyFileFieldComponent } from "../../molecules";
import {
  FormlySelectDisableFieldComponent,
  OrganismsModule,
} from "../../organisms";
import { SiteAdminComponent } from "./site-admin.component";

export default {
  title: "DesignSystem/Templates/SiteAdminComponent",
  component: SiteAdminComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        OrganismsModule,
        NgbModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [
            {
              name: "file",
              component: FormlyFileFieldComponent,
              wrappers: ["form-field"],
            },
            {
              name: "select-disable",
              component: FormlySelectDisableFieldComponent,
            },
          ],
          validationMessages: [
            requiredMessage,
            notIntegerMessage,
            hasSpecialCharactersMessage,
            fieldsDontMatchMessage,
          ],
          validators: [
            requiredValidator,
            integerValidator,
            specialCharacterValidator,
            fieldMatchValidator,
          ],
        }),
      ],
      declarations: [],
    }),
  ],
  args: {
    users: dummyUsers,
    campaigns: dummyCampaigns,
    allGroups: dummyGroups,
    statistics: dummySiteStatistics,
    serverUrl: "https://www.aldrune.com",
  },
} as Meta<SiteAdminComponent>;

const Template: StoryFn<SiteAdminComponent> = (args: SiteAdminComponent) => ({
  props: {
    ...args,
    createCampaign: action("createCampaign"),
    createUser: action("createUser"),
    addUserGroup: action("addUserGroup"),
    removeUserGroup: action("removeUserGroup"),
    downloadDatabase: action("downloadDatabase"),
    deleteUser: action("deleteUser"),
  },
});

export const Default = Template.bind({});
Default.args = {};
