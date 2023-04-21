import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DEFAULT_SEARCH_PREFERENCES, SidebarOption } from '../_models/search-preferences';

@Component({
  selector: 'app-sidebar-legend',
  templateUrl: './sidebar-legend.component.html',
  styleUrls: ['./sidebar-legend.component.scss']
})
export class SidebarLegendComponent {
  @Input() interactable: boolean = false;
  @Input() sidebarEntries: SidebarOption[] = DEFAULT_SEARCH_PREFERENCES;
  
  @Output() sidebarChange: EventEmitter<SidebarOption[]> = new EventEmitter<SidebarOption[]>();
  
  constructor() { }  

  onSidebarEntryClick(clickedOptionIndex: number): void{
    if (!this.interactable) return // You should not be able to select entries when this thing has been set to not be interactable
    
    const entry = this.sidebarEntries[clickedOptionIndex];
    entry.active = !entry.active;
    
    this.sidebarChange.emit(this.sidebarEntries);
  }
}
