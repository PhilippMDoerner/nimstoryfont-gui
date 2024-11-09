export const ELEMENT_TYPES = [
  'PRIMARY',
  'SECONDARY',
  'DARK',
  'DANGER',
  'WARNING',
  'LIGHT',
  'INFO',
] as const;
export type ElementType = (typeof ELEMENT_TYPES)[number];

export const ELEMENT_SIZES = ['SMALL', 'MEDIUM', 'LARGE'] as const;
export type ElementSize = (typeof ELEMENT_SIZES)[number];
