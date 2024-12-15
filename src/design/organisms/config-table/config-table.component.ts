import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  output,
} from '@angular/core';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { CardComponent } from '../../atoms/card/card.component';
import { IconComponent } from '../../atoms/icon/icon.component';
import { SeparatorComponent } from '../../atoms/separator/separator.component';
import { ConfirmationToggleButtonComponent } from '../../molecules/confirmation-toggle-button/confirmation-toggle-button.component';
import { FormComponent } from '../../molecules/form/form.component';
import { ConfigTable } from '../_model/config-table';

type TableEntry = {
  id: number;
  campaignId: number;
  properties: { key: string; value: any }[];
};

@Component({
  selector: 'app-config-table',
  standalone: true,
  imports: [
    IconComponent,
    SeparatorComponent,
    ConfirmationToggleButtonComponent,
    FormComponent,
    CardComponent,
    ButtonComponent,
  ],
  templateUrl: './config-table.component.html',
  styleUrl: './config-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigTableComponent<
  FullObj extends object,
  RawObj extends object,
> {
  table = input.required<ConfigTable<FullObj, RawObj>>();
  tableEntries = computed<TableEntry[]>(() => {
    const entries = this.table().entries ?? [];
    const entryIdProp = this.table().idProp;
    const campaignIdProp = this.table().campaignIdProp;
    return entries.map(
      (entry): TableEntry =>
        this.toTableEntry(entry, entryIdProp, campaignIdProp),
    );
  });

  columnNames = computed<string[]>(() => {
    const firstEntry = this.table().entries?.[0];
    if (!firstEntry) return [];

    return Object.keys(firstEntry).filter((key) => key !== this.table().idProp);
  });

  loadTableEntries = output<void>();
  deleteTableEntry = output<FullObj>();
  createTableEntry = output<RawObj>();

  createEntry(entry: Partial<RawObj>): void {
    this.createTableEntry.emit(entry as RawObj);
  }

  deleteEntry(entryId: number): void {
    const entry = this.table().entries?.find(
      (entry) => entry[this.table().idProp] === entryId,
    );
    if (!entry) return;
    this.deleteTableEntry.emit(entry);
  }

  private toTableEntry(
    entry: FullObj,
    entryIdProp: keyof FullObj,
    campaignIdProp: keyof FullObj,
  ): TableEntry {
    const properties = Object.keys(entry)
      .filter((key) => key !== entryIdProp)
      .map((key) => ({
        key,
        value: (entry as any)[key],
      }));

    return {
      id: entry[entryIdProp] as number,
      campaignId: entry[campaignIdProp] as number,
      properties,
    };
  }
}
