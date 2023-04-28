import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss']
})
export class CollapsiblePanelComponent {
  @Input() heading!: string;
  
  isOpen: boolean = false;
  
  togglePanel(){
    this.isOpen = !this.isOpen;
  }
}
