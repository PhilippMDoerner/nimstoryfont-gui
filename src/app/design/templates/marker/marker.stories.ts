import { RouterTestingModule } from '@angular/router/testing';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import * as x from 'leaflet';
import { MapMarker } from '../../../_models/mapMarker';
import { OrganismsModule } from '../../organisms';
import { MarkerComponent } from './marker.component';

const y = x;

const dummyMarker: MapMarker = {
  pk: 1,
  getAbsoluteRouterUrl: () => "https://example.com/map-marker/1",
  color: "#ff0000",
  icon: "plus",
  latitude: 51.5074,
  longitude: -0.1278,
  map: 123,
  map_details: { name: "Map of London" },
  location: 456,
  location_details: {
    name: "London",
    parent_location_name: "United Kingdom",
    description: "Capital city of England",
    sublocations: ["Westminster", "Camden", "Kensington and Chelsea"],
  },
  type: 789,
  type_details: {
    name: "Landmark",
    is_text_marker: false,
    icon: "fa-landmark",
    color: "#ffa500",
    pk: 789,
    fontawesome_type: "solid",
  },
  campaign_details: { name: "Campaign of Adventures", id: 1 },
};

export default {
  title: 'DesignSystem/Templates/MarkerComponent',
  component: MarkerComponent,
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
    marker: dummyMarker,
    canUpdate: true,
    canDelete: true,
  },
} as Meta<MarkerComponent>;

const Template: StoryFn<MarkerComponent> = (args: MarkerComponent) => ({ 
  props: {
    ...args,
    markerDelete: action('markerDelete'),
  },
});

export const Default = Template.bind({});
Default.args = {}

export const NoPermission = Template.bind({});
NoPermission.args = {
  canDelete: false,
  canUpdate: false,
}
