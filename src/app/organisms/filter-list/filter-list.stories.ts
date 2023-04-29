import { RouterTestingModule } from '@angular/router/testing';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { MoleculesModule } from 'src/app/molecules/molecules.module';
import { FilterListComponent } from './filter-list.component';

const dummyEntries = [
  { label: 'Thorngrim Stonefist', link: 'https://example.com/Thorngrim' },
  { label: 'Eilistraee Moonwhisper', link: 'https://example.com/Eilistraee' },
  { label: 'Zarathustra the Unyielding', link: 'https://example.com/Zarathustra' },
  { label: 'Rufus Redbeard', link: 'https://example.com/Rufus' },
  { label: 'Iridessa Silverblade', link: 'https://example.com/Iridessa' },
  { label: 'Fintan Ironclad', link: 'https://example.com/Fintan' },
  { label: 'Baldor the Bold', link: 'https://example.com/Baldor' },
  { label: 'Gorg Ironfist', link: 'https://example.com/Gorg' },
  { label: 'Astrid the Archer', link: 'https://example.com/Astrid' },
  { label: 'Kethryllia Shadowstar', link: 'https://example.com/Kethryllia' },
  { label: 'Hrog the Hammer', link: 'https://example.com/Hrog' },
  { label: 'Lyra the Luminous', link: 'https://example.com/Lyra' },
  { label: 'Gethin the Grim', link: 'https://example.com/Gethin' },
  { label: 'Zephyr the Zealous', link: 'https://example.com/Zephyr' },
  { label: 'Eryndor the Evergreen', link: 'https://example.com/Eryndor' },
  { label: 'Sarai the Slayer', link: 'https://example.com/Sarai' },
  { label: 'Kael the Kind', link: 'https://example.com/Kael' },
  { label: 'Lirien the Loremaster', link: 'https://example.com/Lirien' },
  { label: 'Vesper the Valiant', link: 'https://example.com/Vesper' },
  { label: 'Gallio the Glorious', link: 'https://example.com/Gallio' },
];


export default {
  title: 'DesignSystem/Organisms/FilterListComponent',
  component: FilterListComponent,
  args: {
    heading: "Some Heading",
    entries: dummyEntries,
    labelProp: 'label',
  },
  decorators: [
    moduleMetadata({
      declarations: [
      ],
      imports: [
        MoleculesModule,
        RouterTestingModule,
      ],
    }),
  ],
} as Meta<FilterListComponent>;

const Template: StoryFn<FilterListComponent> = (args: FilterListComponent) => ({ 
  props: {
    ...args,
  },
});

export const Default = Template.bind({});
Default.args = {}