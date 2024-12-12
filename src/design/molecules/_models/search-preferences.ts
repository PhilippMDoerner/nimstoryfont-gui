export interface ArticleCategory {
  label: string;
  active: boolean;
  color: string;
}

export const DEFAULT_SEARCH_PREFERENCES = [
  { label: 'Character', active: false, color: '--character-color' },
  { label: 'Creature', active: false, color: '--creature-color' },
  { label: 'Diaryentry', active: false, color: '--diaryentry-color' },
  { label: 'Encounter', active: false, color: '--encounter-color' },
  { label: 'Item', active: false, color: '--item-color' },
  { label: 'Location', active: false, color: '--location-color' },
  { label: 'Map', active: false, color: '--map-color' },
  { label: 'Organization', active: false, color: '--organization-color' },
  { label: 'Quest', active: false, color: '--quest-color' },
  { label: 'SessionAudio', active: false, color: '--sessionaudio-color' },
  { label: 'Rules', active: false, color: '--rules-color' },
  { label: 'Spell', active: false, color: '--spell-color' },
] as const satisfies ArticleCategory[];

export type CategoryLabel =
  (typeof DEFAULT_SEARCH_PREFERENCES)[number]['label'];

export const GRAPH_CATEGORIES = [
  'Character',
  'Item',
  'Organization',
  'Location',
] as const satisfies CategoryLabel[];
