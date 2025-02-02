import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import { IconComponent } from 'src/app/design/atoms/icon/icon.component';
import { SeparatorComponent } from 'src/app/design/atoms/separator/separator.component';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SeparatorComponent, IconComponent, NgbCollapse],
})
export class CollapsiblePanelComponent implements OnInit {
  isOpen = input(false);
  _isOpen = signal(false);

  constructor() {
    effect(() => this._isOpen.set(this.isOpen()));
  }

  ngOnInit(): void {
    this._isOpen.set(this.isOpen());
  }

  togglePanel() {
    this._isOpen.set(!this._isOpen());
  }
}
