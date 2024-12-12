import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { SelectableEntryComponent } from '../../atoms/selectable-entry/selectable-entry.component';
import {
  CategoryOption,
  DEFAULT_SEARCH_PREFERENCES,
} from '../_models/search-preferences';

@Component({
  selector: 'app-sidebar-legend',
  templateUrl: './sidebar-legend.component.html',
  styleUrls: ['./sidebar-legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SelectableEntryComponent],
})
export class SidebarLegendComponent {
  interactable = input(false);
  sidebarEntries = input<CategoryOption[]>(DEFAULT_SEARCH_PREFERENCES);

  @Output() sidebarChange: EventEmitter<CategoryOption[]> = new EventEmitter<
    CategoryOption[]
  >();

  constructor() {}

  onSidebarEntryClick(clickedOptionIndex: number): void {
    if (!this.interactable) return; // You should not be able to select entries when this thing has been set to not be interactable

    const entry = this.sidebarEntries()[clickedOptionIndex];
    entry.active = !entry.active;

    this.sidebarChange.emit(this.sidebarEntries());
  }
}
