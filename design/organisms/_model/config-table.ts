import { FormlyFieldConfig } from '@ngx-formly/core';
import { Icon } from 'src/design/atoms/_models/icon';

export interface ConfigTable<FullObj extends object, RawObj extends object> {
  name: string;
  kind: ConfigTableKind;
  entries?: FullObj[];
  icon: Icon;
  model: Partial<RawObj>;
  formFields: FormlyFieldConfig[];
  showForm: boolean;
  idProp: keyof FullObj;
  campaignIdProp: keyof FullObj;
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
