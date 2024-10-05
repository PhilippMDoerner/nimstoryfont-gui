import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import * as x from 'leaflet';
import { dummyMap } from 'src/app/_services/article/map.service.mock';
import { MoleculesModule } from 'src/design/molecules';
import { AtomsModule } from '../../atoms';
import { NgxLeafletMapComponent } from './ngx-leaflet-map.component';

const y = x;

export default {
  title: 'DesignSystem/Organisms/NgxLeafletMapComponent',
  component: NgxLeafletMapComponent,
  decorators: [
    moduleMetadata({
      imports: [AtomsModule, MoleculesModule, LeafletModule],
      declarations: [],
    }),
  ],
  args: {
    mapData: dummyMap,
    serverUrl: 'https://www.aldrune.com',
  },
} as Meta<NgxLeafletMapComponent>;

const Template: StoryFn<NgxLeafletMapComponent> = (args) => ({
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {};
