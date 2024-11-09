import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
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
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonComponent, NgTemplateOutlet],
})
export class LinkEntryComponent<T> {
  entry = input.required<LinkEntry<T>>();
  columnSizes = input<[number, number, number]>();
  canDelete = input(false);
  deleteMessage = input('Delete entry?');

  _columnSizes = computed(() => {
    const columnSizes = this.columnSizes();
    if (columnSizes != null) return columnSizes;

    return this.canDelete() ? [3, 8, 1] : [3, 9, 0];
  });
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() linkClick: EventEmitter<any> = new EventEmitter();

  state = signal<State>('DISPLAY');

  changeState(newState: State) {
    this.state.set(newState);
  }
}
