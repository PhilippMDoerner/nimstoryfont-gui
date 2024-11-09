import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  OnInit,
  signal,
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
export class CollapsiblePanelComponent implements OnInit {
  isOpen = input(false);
  _isOpen = signal(false);

  constructor() {
    effect(() => this._isOpen.set(this.isOpen()), { allowSignalWrites: true });
  }

  ngOnInit(): void {
    this._isOpen.set(this.isOpen());
  }

  togglePanel() {
    this._isOpen.set(!this._isOpen());
  }
}
