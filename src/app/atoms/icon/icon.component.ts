import { Component, Input, OnChanges } from '@angular/core';

export const ALL_REGULAR_ICONS = [
  'comments',
  'magic',
  'times',
  'map',
  'file-audio-o',
  'book',
  'user',
  'user-plus',
  'user-circle',
  'group',
  'envelope-o',
  'database',
  'trash',
  'plus',
  'table',
  'check',
  'refresh',
  'pencil',
  'arrow-left',
  'arrow-right',
  'hourglass',
  'spinner',
  'search',
  'volume-up',
  'clock-o',
  'info-circle',
  'long-arrow-up',
  'long-arrow-down',
  'calendar',
  'lock',
  'plus-square',
  'home',
  'th-list',
  'chevron-down',
  'chevron-up',
  'chevron-left',
  'chevron-right',
  'hammer'
]

type typedRegularIcons = typeof ALL_REGULAR_ICONS;
export type RegularIcon = typedRegularIcons[number]; // this compiles to 'comments' | 'magic'...

export const ALL_SOLID_ICONS = [
  'male',
  'book-open',
  'compass',
  'sitemap',
  'question-circle',
  'hand-sparkles',
  'calendar-alt',
  'globe-americas',
  'dragon',
  'sign-out-alt',
  'user-cog',
  'desktop',
  'download',
  'redo-alt',
  'cog',
  'cut',
  'file',
  'copy',
  'clipboard'
]

type typedSolidIcons = typeof ALL_SOLID_ICONS;
export type SolidIcon = typedSolidIcons[number]; // this compiles to 'male' | 'book-open'...

type IconType = "SOLID" | "REGULAR";

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent implements OnChanges{
  @Input() icon!: SolidIcon | RegularIcon;
  iconType: IconType = "REGULAR";
  
  ngOnChanges(): void {
    const isSolidIcon = ALL_SOLID_ICONS.includes(this.icon);
    this.iconType = isSolidIcon ? 'SOLID' : 'REGULAR';
  }
}
