import {
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { ElementType } from '../../atoms';
import { BadgeListEntry, BadgeListSelectOptions } from '../_models/badge-list';

type CreateBadgeKind = 'LINK' | 'SELECT' | 'NONE';

type LinkCreateOptions = { kind: 'LINK'; link: string };
type BadgeCreateOptions<T> = {
  kind: 'SELECT';
  config: BadgeListSelectOptions<T>;
};
type CreateOptions<T> =
  | BadgeCreateOptions<T>
  | LinkCreateOptions
  | { kind: 'NONE' };

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss'],
})
export class BadgeListComponent<T, O> {
  entries = input.required<BadgeListEntry<T>[]>();
  createOptions = input<CreateOptions<O>>();
  label = input('Entry');
  canCreate = input(false);
  canDelete = input(false);
  submitButtonType = input<ElementType>('PRIMARY');
  cancelButtonType = input<ElementType>('SECONDARY');

  @Output() entryDelete: EventEmitter<T> = new EventEmitter();
  @Output() entryCreate: EventEmitter<O> = new EventEmitter();

  createKind = computed(() => this.createOptions()?.kind);
  createLink = computed(() =>
    this.createKind() === 'LINK'
      ? (this.createOptions() as LinkCreateOptions).link
      : undefined,
  );
  options = computed(() =>
    this.createKind() === 'SELECT'
      ? (this.createOptions() as BadgeCreateOptions<O>).config.options
      : undefined,
  );
  optionLabelProp = computed(() =>
    this.createKind() === 'SELECT'
      ? (this.createOptions() as BadgeCreateOptions<O>).config.labelProp
      : undefined,
  );
  optionValueProp = computed(() =>
    this.createKind() === 'SELECT'
      ? (this.createOptions() as BadgeCreateOptions<O>).config.valueProp
      : undefined,
  );

  onEntryDelete(entry: BadgeListEntry<T>) {
    if (!this.canDelete()) {
      return;
    }

    this.entryDelete.emit(entry.badgeValue);
  }

  onEntryCreate(selectedOption: O) {
    if (!this.canCreate()) {
      return;
    }

    this.entryCreate.emit(selectedOption);
  }
}
