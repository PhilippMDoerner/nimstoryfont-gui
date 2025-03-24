export interface MetaDataEntry {
  name: string;
  value: string;
}

export type MetaDataKind = 'general';

export type MetaDataEntryRaw = MetaDataEntry & {
  category: MetaDataKind;
};

export interface UserMetadata {
  hasSeenOnboarding: boolean;
}
