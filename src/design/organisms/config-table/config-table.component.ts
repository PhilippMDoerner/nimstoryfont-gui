import { KeyValuePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
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
    KeyValuePipe,
  ],
  templateUrl: './config-table.component.html',
  styleUrl: './config-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfigTableComponent<T extends object> {
  table = input.required<ConfigTable<T>>();

  loadTableEntries = output<void>();
  deleteTableEntry = output<T>();
  createTableEntry = output<T>();

  createEntry(entry: Partial<T>): void {
    this.createTableEntry.emit(entry as T);
  }
}
