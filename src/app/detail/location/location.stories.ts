import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { OrganismsModule } from "..";
import { Location, LocationCharacter } from "../_models/location";
import { LocationComponent } from "./location.component";

const dummyLocation: Location = {  
  name: "The Dark Forest",
  name_full: "The Dark Forest",
  description: "<p>The Dark Forest is a dense, sprawling forest shrouded in perpetual mist and darkness. It is said that those who enter the forest are never seen again, their screams echoing through the trees for eternity.</p><p>Legends speak of ancient curses and malevolent spirits haunting the forest, and travelers are warned to stay away. However, some brave or foolish souls venture into the forest in search of rare herbs and magical artifacts, risking life and limb to uncover its secrets.</p><p>Rumors also abound of a hidden village deep within the forest, where a secretive society of druids and witches practice forbidden magic and worship dark deities.</p>",
  parent_location: 1,
  images: [],
  parent_location_details: {
    pk: 1,
    name: "The Kingdom of Eldrid",
    parent_location: "",
    name_full: "The Kingdom of Eldrid"
  },
  parent_location_list: ["The Kingdom of Eldrid", "The Northern Territories"],
  characters: [
    {name: "Elena", pk: 123, name_full: "Elena, the Witch of the Dark Forest"},
    {name: "Thorne", pk: 456, name_full: "Thorne, the Shadow Assassin"}
  ],
  sublocations: [
    {
      creation_datetime: "2022-03-15T10:22:34.567Z",
      update_datetime: "2022-05-01T14:12:45.678Z",
      name: "The Witch's Hut",
      pk: 789,
      characters: [{name: "Morgana", pk: 234, name_full: "Morgana, the Dark Witch"}],
      name_full: "The Witch's Hut in the Dark Forest",
      description: `
        <p>
          The Witch's Hut is a small, dilapidated cabin hidden deep in the heart of the Dark Forest. 
          It is said to be the dwelling place of Elena, the Witch of the Dark Forest, who brews powerful potions and performs arcane rituals within its walls.
        </p>
        
        <p>
          The hut is surrounded by twisted trees and eerie toadstools, and the air is thick with the scent of herbs and incense. 
          Visitors are warned to approach with caution, as Elena is known to be both unpredictable and dangerous.
        </p>
      `,
      parent_location: 2,
      getAbsoluteRouterUrl: () => "/locations/the-kingdom-of-eldrid",
    }
  ],
  marker_details: [
    {map: "The Kingdom of Eldrid", map_icon: "https://example.com/dark-forest-icon.png"}
  ],
  getAbsoluteRouterUrl: () => "/locations/the-kingdom-of-eldrid",
  getAbsoluteRouterUrlForParentLocation: () => "/locations/the-kingdom-of-eldrid"
};

export default {
  title: 'Application/Detail/LocationComponent',
  component: LocationComponent,
  decorators: [
    moduleMetadata({
      imports: [
          OrganismsModule,
          RouterTestingModule,
      ],       
      declarations: [
      ]
    }),
  ],
  args: {
    location: dummyLocation,
  },
} as Meta<LocationComponent>;

const Template: StoryFn<LocationComponent> = (args: LocationComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}

const shortCharacterList = dummyLocation.characters?.slice(0, 3) as LocationCharacter[];
export const FewerConnections = Template.bind({});
FewerConnections.args = {
  location: {
    ...dummyLocation,
    characters: [
      ...shortCharacterList,
    ]
  }
}
