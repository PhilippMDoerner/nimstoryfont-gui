import {
  ChangeDetectionStrategy,
  Component,
  effect,
  input,
  OnInit,
  signal,
} from '@angular/core';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import {
  HeadingComponent,
  HeadingLevel,
} from 'src/design/atoms/heading/heading.component';
import { IconComponent } from 'src/design/atoms/icon/icon.component';
import { SeparatorComponent } from 'src/design/atoms/separator/separator.component';

@Component({
  selector: 'app-collapsible-panel',
  templateUrl: './collapsible-panel.component.html',
  styleUrls: ['./collapsible-panel.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [SeparatorComponent, IconComponent, NgbCollapse, HeadingComponent],
})
export class CollapsiblePanelComponent implements OnInit {
  headingLevel = input.required<HeadingLevel>();
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
