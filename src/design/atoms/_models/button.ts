export const ELEMENT_TYPES = [
  'PRIMARY',
  'SECONDARY',
  'DARK',
  'DANGER',
  'WARNING',
  'LIGHT',
  'INFO',
] as const;
export type ElementKind = (typeof ELEMENT_TYPES)[number];

const BUTTON_OUTLINE_KINDS = [
  'PRIMARY-OUTLINE',
  'SECONDARY-OUTLINE',
  'DARK-OUTLINE',
  'DANGER-OUTLINE',
  'WARNING-OUTLINE',
  'LIGHT-OUTLINE',
  'INFO-OUTLINE',
] as const;
export type ButtonOutlineKind = (typeof BUTTON_OUTLINE_KINDS)[number];
export type ButtonKind = ElementKind | ButtonOutlineKind | 'NONE';

export function toOutlineKind(kind: ButtonKind): ButtonOutlineKind | undefined {
  switch (kind) {
    case 'PRIMARY':
    case 'SECONDARY':
    case 'DARK':
    case 'DANGER':
    case 'WARNING':
    case 'LIGHT':
    case 'INFO':
      return `${kind}-OUTLINE`;
    case 'PRIMARY-OUTLINE':
    case 'SECONDARY-OUTLINE':
    case 'DARK-OUTLINE':
    case 'DANGER-OUTLINE':
    case 'WARNING-OUTLINE':
    case 'LIGHT-OUTLINE':
    case 'INFO-OUTLINE':
      return kind;
    case 'NONE':
      return undefined;
  }
}

export function toElementKind(kind: ButtonKind): ElementKind | undefined {
  switch (kind) {
    case 'PRIMARY':
    case 'SECONDARY':
    case 'DARK':
    case 'DANGER':
    case 'WARNING':
    case 'LIGHT':
    case 'INFO':
      return kind;
    case 'PRIMARY-OUTLINE':
    case 'SECONDARY-OUTLINE':
    case 'DARK-OUTLINE':
    case 'DANGER-OUTLINE':
    case 'WARNING-OUTLINE':
    case 'LIGHT-OUTLINE':
    case 'INFO-OUTLINE':
      return kind.replace('-OUTLINE', '') as ElementKind;
    case 'NONE':
      return undefined;
  }
}

export const ELEMENT_SIZES = ['SMALL', 'MEDIUM', 'LARGE'] as const;
export type ElementSize = (typeof ELEMENT_SIZES)[number];
