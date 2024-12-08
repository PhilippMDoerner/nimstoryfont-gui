export const ALL_REGULAR_ICONS = [
  'calendar',
  'circle-user',
  'clock',
  'copy',
  'envelope',
  'hourglass',
  'map',
  'plus-square',
  'user',
] as const;
export const REGULAR_ICON_SET = new Set(ALL_REGULAR_ICONS);
type RegularIcon = (typeof ALL_REGULAR_ICONS)[number]; // this compiles to 'comments' | 'magic'...

export const ALL_SOLID_ICONS = [
  'anchor',
  'arrow-down-long',
  'arrow-left-long',
  'arrow-left',
  'arrow-right-long',
  'arrow-right',
  'arrow-up-long',
  'bars',
  'book-open',
  'book',
  'calendar-alt',
  'check',
  'chess-rook',
  'chevron-down',
  'chevron-left',
  'chevron-right',
  'chevron-up',
  'circle-exclamation',
  'clipboard',
  'cog',
  'comments',
  'compass',
  'copy',
  'crown',
  'cut',
  'home',
  'database',
  'desktop',
  'diamond',
  'dice',
  'down-long',
  'download',
  'dragon',
  'dungeon',
  'exclamation',
  'expand',
  'file-audio',
  'file-import',
  'file',
  'gavel',
  'globe-americas',
  'hammer',
  'hand-sparkles',
  'hat-wizard',
  'diagram-project',
  'hotel',
  'hourglass-half',
  'info-circle',
  'info',
  'location-dot',
  'lock',
  'link',
  'magic',
  'male',
  'minus',
  'monument',
  'moon',
  'mountain',
  'paw',
  'pen',
  'pencil',
  'place-of-worship',
  'plus',
  'question-circle',
  'redo-alt',
  'refresh',
  'right-from-bracket',
  'search',
  'sign-out-alt',
  'sitemap',
  'spinner',
  'square-check',
  'store',
  'table',
  'tag',
  'th-list',
  'times',
  'tint',
  'trash',
  'tree',
  'triangle-exclamation',
  'umbrella-beach',
  'university',
  'up-long',
  'upload',
  'user-cog',
  'user-plus',
  'users-gear',
  'volume-up',
  'water',
  'xmark',
] as const;
export const SOLID_ICONS_SET = new Set(ALL_SOLID_ICONS);
type SolidIcon = (typeof ALL_SOLID_ICONS)[number]; // this compiles to 'male' | 'book-open'...

export const ALL_BRAND_ICONS = ['fort-awesome'] as const;
export const BRAND_ICON_SET = new Set(ALL_BRAND_ICONS);
export type BrandIcon = (typeof ALL_BRAND_ICONS)[number];

export type Icon = SolidIcon | RegularIcon | BrandIcon;
export const ALL_ICONS = [
  ...ALL_REGULAR_ICONS,
  ...ALL_SOLID_ICONS,
  ...ALL_BRAND_ICONS,
];

export type IconKind = 'fa-brands' | 'fa-solid' | 'fa-regular';
export function toIconKind(icon: Icon): IconKind {
  const ico = icon as any;
  if (SOLID_ICONS_SET.has(ico)) {
    return 'fa-solid';
  } else if (BRAND_ICON_SET.has(ico)) {
    return 'fa-brands';
  } else if (REGULAR_ICON_SET.has(ico)) {
    return 'fa-regular';
  } else {
    throw new Error('Invalid icon: ' + icon);
  }
}
