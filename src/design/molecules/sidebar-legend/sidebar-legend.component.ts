import { NgClass } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { IconComponent } from 'src/design/atoms';
import {
  DEFAULT_SEARCH_PREFERENCES,
  SidebarOption,
} from '../_models/search-preferences';

@Component({
  selector: 'app-sidebar-legend',
  templateUrl: './sidebar-legend.component.html',
  styleUrls: ['./sidebar-legend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [IconComponent, NgClass],
})
export class SidebarLegendComponent {
  interactable = input(false);
  sidebarEntries = input<SidebarOption[]>(DEFAULT_SEARCH_PREFERENCES);

  @Output() sidebarChange: EventEmitter<SidebarOption[]> = new EventEmitter<
    SidebarOption[]
  >();

  constructor() {}

  onSidebarEntryClick(clickedOptionIndex: number): void {
    if (!this.interactable) return; // You should not be able to select entries when this thing has been set to not be interactable

    const entry = this.sidebarEntries()[clickedOptionIndex];
    entry.active = !entry.active;

    this.sidebarChange.emit(this.sidebarEntries());
  }
}
