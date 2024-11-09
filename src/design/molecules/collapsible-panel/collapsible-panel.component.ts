import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
} from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent, SeparatorComponent } from 'src/design/atoms';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SeparatorComponent, IconComponent, NgbCollapse],
})
export class CollapsiblePanelComponent {
  isOpen = input(false);
  _isOpen = false;

  constructor() {
    effect(() => (this._isOpen = this.isOpen()));
  }
  togglePanel() {
    this._isOpen = !this._isOpen;
  }
}
