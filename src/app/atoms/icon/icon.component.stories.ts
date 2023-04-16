import { CommonModule } from '@angular/common';
import { Meta, StoryFn, moduleMetadata } from '@storybook/angular';
import { AtomsModule } from '../atoms.module';
import { ALL_REGULAR_ICONS, ALL_SOLID_ICONS, IconComponent } from './icon.component';

export default {
  title: 'IconComponent',
  component: IconComponent,
  decorators: [
    moduleMetadata({
      imports: [
        CommonModule,
        AtomsModule
      ]
    }),
  ],
} as Meta<IconComponent>;

const Template: StoryFn<IconComponent> = (args: IconComponent) => ({ 
  props: {
    ...args,
    solidIcons: ALL_SOLID_ICONS,
    regularIcons: ALL_REGULAR_ICONS,
  },
  template: `
    <h3 *ngFor="let regIcon of regularIcons">
      <app-icon [icon]="regIcon"></app-icon>
      {{ regIcon }}
    </h3>
    <h3 *ngFor="let solIcon of solidIcons">
      <app-icon [icon]="solIcon"></app-icon>
      {{ solIcon }}
    </h3>
  `,
  moduleMetadata: {
    imports: [
      CommonModule,
    ]
  }
});

export const Default = Template.bind({});
Default.args = {
  icon : 'book'
}
Default.decorators = [
  moduleMetadata({
    imports: [
      CommonModule,
      AtomsModule
    ]
  }),
];