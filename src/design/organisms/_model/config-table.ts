import { FormlyFieldConfig } from '@ngx-formly/core';
import { Icon } from 'src/design/atoms/_models/icon';

export interface ConfigTable<T extends object> {
  name: string;
  kind: ConfigTableKind;
  entries?: T[];
  icon: Icon;
  model: Partial<T>;
  formFields: FormlyFieldConfig[];
  showForm: boolean;
  idProp: keyof T;
}

export const CONFIG_TABLE_KINDS = [
  'MARKER_TYPE',
  'PLAYER_CLASS',
  'NODE_LINK_TYPE',
] as const;
export type ConfigTableKind = (typeof CONFIG_TABLE_KINDS)[number];

export type ConfigTableData = {
  [key in ConfigTableKind]?: any[] | undefined;
};
