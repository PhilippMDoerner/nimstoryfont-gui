import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import * as Howler from 'howler';
import { PlayerComponent } from './player.component';

const x = Howler;

export default {
  title: 'DesignSystem/Organisms/PlayerComponent',
  component: PlayerComponent,
  decorators: [
    moduleMetadata({
      imports: []
    }),
  ],
  args: {
    audioSource: "https://www.kozco.com/tech/piano2-CoolEdit.mp3",
    downloadSource: "https://www.potato.testurl.com",
  }
} as Meta<PlayerComponent>;

const Template: StoryFn<PlayerComponent> = (args: PlayerComponent) => ({ 
  props: {
    ...args,
  },
  template: `
    <div style="margin-top: 25rem;">
      <app-player 
        [audioSource]="audioSource" 
        [downloadSource]="downloadSource"
      ></app-player>
    </div>
  `
});

export const Default = Template.bind({});
Default.args = {}