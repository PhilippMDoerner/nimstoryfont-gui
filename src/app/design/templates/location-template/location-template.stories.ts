import { RouterTestingModule } from "@angular/router/testing";
import { FormlyModule } from "@ngx-formly/core";
import { action } from "@storybook/addon-actions";
import { Meta, StoryFn, moduleMetadata } from "@storybook/angular";
import { Location } from "src/app/_models/location";
import {
  integerValidator,
  notIntegerMessage,
  requiredMessage,
  requiredValidator,
} from "src/app/_services/formly/validators";
import { FormlyFileFieldComponent } from "../../molecules";
import { OrganismsModule } from "../../organisms";
import { LocationTemplateComponent } from "./location-template.component";

const dummyLocation: Location = {
  getAbsoluteRouterUrl: () => "location/2",
  name_full: "Central Park",
  name: "Central Park",
  description: "A large public park in New York City.",
  parent_location: 456,
  images: [
    {
      pk: 1,
      image: "/breeds/mastiff-tibetan/n02108551_5830.jpg",
      name: "Goblin portrait",
      creature_article: 123,
    },
    {
      pk: 2,
      image: "/breeds/germanshepherd/IMG_20200801_005830_387.jpg",
      name: "Goblin horde",
      creature_article: 123,
    },
  ],
  parent_location_details: {
    pk: 456,
    name: "New York City",
    parent_location: "United States",
    name_full: "New York City, United States",
  },
  parent_location_list: ["United States", "New York City"],
  characters: [
    { name: "John Smith", pk: 789, name_full: "John Smith" },
    { name: "Jane Doe", pk: 987, name_full: "Jane Doe" },
  ],
  sublocations: [
    {
      creation_datetime: "2022-05-06T09:30:00.000Z",
      update_datetime: "2022-05-06T10:15:00.000Z",
      name: "The Pond",
      pk: 124,
      characters: [
        { name: "Bob Johnson", pk: 456, name_full: "Bob Johnson" },
        { name: "Alice Williams", pk: 654, name_full: "Alice Williams" },
      ],
      name_full: "The Pond, Central Park",
      description: "A small body of water in Central Park.",
      getAbsoluteRouterUrl: () => "/location/1",
    },
  ],
  marker_details: [
    { map: "map1", map_icon: "icon1" },
    { map: "map2", map_icon: "icon2" },
  ],
  getAbsoluteRouterUrlForParentLocation() {
    return `https://example.com/locations/${this.parent_location}`;
  },
};

export default {
  title: "DesignSystem/Templates/LocationTemplateComponent",
  component: LocationTemplateComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        RouterTestingModule,
        FormlyModule.forRoot({
          types: [
            {
              name: "file",
              component: FormlyFileFieldComponent,
              wrappers: ["form-field"],
            },
          ],
          validationMessages: [requiredMessage, notIntegerMessage],
          validators: [requiredValidator, integerValidator],
        }),
      ],
      declarations: [],
    }),
  ],
  args: {
    imageServerModel: undefined,
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    location: dummyLocation,
    serverUrl: "https://images.dog.ceo",
  },
} as Meta<LocationTemplateComponent>;

const Template: StoryFn<LocationTemplateComponent> = (
  args: LocationTemplateComponent,
) => ({
  props: {
    ...args,
    createImage: action("createImage"),
    deleteImage: action("deleteImage"),
    updateImage: action("updateImage"),
    locationDelete: action("locationDelete"),
  },
});

export const Default = Template.bind({});
Default.args = {};

export const NoPermission = Template.bind({});
NoPermission.args = {
  canDelete: false,
  canUpdate: false,
  canCreate: false,
};
