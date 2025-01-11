import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import { LinkEntry } from '../_models/link-entry';
type State = 'DISPLAY' | 'DELETE';

@Component({
    selector: 'app-link-entry',
    templateUrl: './link-entry.component.html',
    styleUrls: ['./link-entry.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [ButtonComponent, NgTemplateOutlet]
})
export class LinkEntryComponent<T> {
  entry = input.required<LinkEntry<T>>();
  canDelete = input(false);
  deleteMessage = input('Delete entry?');

  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() linkClick: EventEmitter<any> = new EventEmitter();

  state = signal<State>('DISPLAY');

  changeState(newState: State) {
    this.state.set(newState);
  }
}
