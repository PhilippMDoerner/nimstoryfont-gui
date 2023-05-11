import { RouterTestingModule } from '@angular/router/testing';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { action } from '@storybook/addon-actions';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import * as x from 'leaflet';
import { OverviewItem } from 'src/app/_models/overview';
import { ExtendedMap } from '../../../_models/map';
import { MapMarker } from '../../../_models/mapMarker';
import { OrganismsModule } from '../../organisms';
import { MapComponent } from './map.component';
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
    campaign_details: { name: 'Aldrune', id: 1},
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
    campaign_details: { name: 'Aldrune', id: 1},
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

const mapChoices: OverviewItem[] = [
  {
    getAbsoluteRouterUrl: () => "/map/1",
    "article_type": "map",
    "description": "A map of Aldrune",
    "pk": 1,
    "name_full": "Aldrune",
    "name": "Aldrune",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2021-06-26T17:10:35.352119Z",
    "icon": "/media/map"
  },
  {
    getAbsoluteRouterUrl: () => "/map/5",
    "article_type": "map",
    "description": "A map of Bug-people map",
    "pk": 5,
    "name_full": "Bug-people map",
    "name": "Bug-people map",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2021-07-24T15:25:48.488498Z",
    "icon": "/media/sun-o"
  },
  {
    getAbsoluteRouterUrl: () => "/map/4",
    "article_type": "map",
    "description": "A map of Etruscan",
    "pk": 4,
    "name_full": "Etruscan",
    "name": "Etruscan",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2021-06-26T17:10:35.352119Z",
    "icon": "/media/university"
  },
  {
    getAbsoluteRouterUrl: () => "/map/8",
    "article_type": "map",
    "description": "A map of Guiniverse Magical Worldmap",
    "pk": 8,
    "name_full": "Guiniverse Magical Worldmap",
    "name": "Guiniverse Magical Worldmap",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2022-10-13T20:21:11.923497Z",
    "icon": "/media/globe"
  },
  {
    getAbsoluteRouterUrl: () => "/map/6",
    "article_type": "map",
    "description": "A map of Land of the dead",
    "pk": 6,
    "name_full": "Land of the dead",
    "name": "Land of the dead",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2021-08-10T19:03:46.874796Z",
    "icon": "/media/skull-crossbones"
  },
  {
    getAbsoluteRouterUrl: () => "/map/3",
    "article_type": "map",
    "description": "A map of The Galway Region",
    "pk": 3,
    "name_full": "The Galway Region",
    "name": "The Galway Region",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2021-06-26T17:10:35.352119Z",
    "icon": "/media/lightbulb-o"
  },
  {
    getAbsoluteRouterUrl: () => "/map/2",
    "article_type": "map",
    "description": "A map of The World",
    "pk": 2,
    "name_full": "The World",
    "name": "The World",
    "campaign_details": { "name": "Aldrune", "pk": 1 },
    "update_datetime": "2021-06-26T17:10:35.352119Z",
    "icon": "/media/globe"
  }
]
;


export default {
  title: 'DesignSystem/Templates/MapComponent',
  component: MapComponent,
  decorators: [
    moduleMetadata({
      imports: [
        OrganismsModule,
        LeafletModule,
        RouterTestingModule,
      ],       
      declarations: [
      ]
    }),
  ],
  args: {
    map: dummyMap,
    serverUrl: 'https://www.aldrune.com',
    canCreate: true,
    canUpdate: true,
    canDelete: true,
    mapChoices: mapChoices,
  },
} as Meta<MapComponent>;

const Template: StoryFn<MapComponent> = (args: MapComponent) => ({ 
  props: {
    ...args,
    mapDelete: action('mapDelete'),
    mapChange: action('mapChange'),
  },
});

export const Default = Template.bind({});
Default.args = {}

export const NoMap = Template.bind({});
NoMap.args = {
  mapChoices: []
}

export const NoPermission = Template.bind({});
NoPermission.args = {
  canDelete: false,
  canUpdate: false,
  canCreate: false,
}
