import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import * as x from 'leaflet';
import { MoleculesModule } from 'src/app/design/molecules';
import { ExtendedMap } from '../../../_models/map';
import { MapMarker } from '../../../_models/mapMarker';
import { AtomsModule } from '../../../design/atoms';
import { NgxLeafletMapComponent } from './ngx-leaflet-map.component';

const y = x;


const dummyMarkers: MapMarker[] = [
  {
    getAbsoluteRouterUrl: () => "/marker1/url",
    pk: 106,
    color: undefined,
    icon: undefined,
    longitude: 532,
    latitude: 553,
    map: 2,
    map_details: {
      name: "The World"
    },
    location: 50,
    location_details: {
      name: "Galway",
      description: "<p>The New Capital of Fen's High Kingdom</p>\n<p>&nbsp;</p>\n<p>Galway City Breakdown</p>\n<p>Eastern Lakeway - 15 Buildings<br />Western Lakeway - 40 Buildings<br />Myria Island - 7 Buildings<br />River District - 46 Buildings, several temporary Refugee Shelters<br />Forest District - 85 Buildings<br />Hill District - 149 Buildings<br />Galway Proper - 60 Buildings</p>\n<p>Total - 402 Civilian Buildings in Galway</p>\n<p>Estimated Population: 4000+</p>",
      parent_location_name: "none",
      sublocations: []
    },
    type: 11,
    type_details: {
      name: "Settlement",
      icon: "home",
      is_text_marker: false,
      fontawesome_type: "fa",
      color: "lightgreen",
      pk: 11
    },
    campaign_details: { name: 'Aldrune', id: 1}
  },
  {
    getAbsoluteRouterUrl: () => "/marker2/url",
    pk: 137,
    color: undefined,
    icon: undefined,
    longitude: 752,
    latitude: 579,
    map: 2,
    map_details: {
      name: "The World"
    },
    location: 206,
    location_details: {
      name: "Eastern sea",
      description: "<p>The ocean east of Aldrune, now accessible through the path carved by the world serpent.</p>",
      parent_location_name: "none",
      sublocations: [
        "Lighthouse"
      ]
    },
    type: 23,
    type_details: {
      name: "Sea/Ocean",
      icon: "water",
      is_text_marker: true,
      fontawesome_type: "fa",
      color: "gray",
      pk: 23
    },
    campaign_details: { name: 'Aldrune', id: 1}
  }
];

const dummyMap: ExtendedMap = {
  getAbsoluteRouterUrl: () => "/map/url",
  pk: 2,
  name: "The World",
  image: "/media/Aldrune_World_1.jpg",
  icon: "/media/globe",
  update_datetime: "2021-06-26T17:10:35.352119Z",
  campaign: 1,
  campaign_details: {
    name: "Aldrune",
    pk: 1
  },
  markers: dummyMarkers
}

export default {
  title: 'DesignSystem/Organisms/NgxLeafletMapComponent',
  component: NgxLeafletMapComponent,
  decorators: [
    moduleMetadata({
      imports: [
        AtomsModule,
        MoleculesModule,
        LeafletModule,
      ],       
      declarations: [
      ]
    }),
  ],
  args: {
    mapData: dummyMap,
    serverUrl: 'https://www.aldrune.com'
  },
} as Meta<NgxLeafletMapComponent>;

const Template: StoryFn<NgxLeafletMapComponent> = (args: NgxLeafletMapComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}
