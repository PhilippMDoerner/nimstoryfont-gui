import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import * as x from 'leaflet';
import { dummyMarkers } from 'src/app/_services/article/marker.service.mock';
import { MoleculesModule } from 'src/app/design/molecules';
import { ExtendedMap } from '../../../_models/map';
import { AtomsModule } from '../../../design/atoms';
import { NgxLeafletMapComponent } from './ngx-leaflet-map.component';

const y = x;

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
