export type ConfigTableKind = 'MARKER_TYPE' | 'PLAYER_CLASS';
export const configTableKinds: ConfigTableKind[] = [
  'MARKER_TYPE',
  'PLAYER_CLASS',
];

export type ConfigTableData = {
  [key in ConfigTableKind]?: any[] | undefined;
};
