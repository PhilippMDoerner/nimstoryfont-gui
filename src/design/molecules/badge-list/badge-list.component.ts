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

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss'],
})
export class BadgeListComponent<T, O> {
  entries = input.required<BadgeListEntry<T>[]>();
  createOptions = input<BadgeListSelectOptions<O> | string>();
  label = input('Entry');
  canCreate = input(false);
  canDelete = input(false);
  submitButtonType = input<ElementType>('PRIMARY');
  cancelButtonType = input<ElementType>('SECONDARY');

  @Output() entryDelete: EventEmitter<T> = new EventEmitter();
  @Output() entryCreate: EventEmitter<O> = new EventEmitter();

  createKind = computed(() => this.toCreateKind(this.createOptions()));
  createLink = computed(() =>
    this.createKind() === 'LINK' ? (this.createOptions() as string) : undefined,
  );
  options = computed(() =>
    this.createKind() === 'SELECT'
      ? (this.createOptions() as BadgeListSelectOptions<O>).options
      : undefined,
  );
  optionLabelProp = computed(() =>
    this.createKind() === 'SELECT'
      ? (this.createOptions() as BadgeListSelectOptions<O>).labelProp
      : undefined,
  );
  optionValueProp = computed(() =>
    this.createKind() === 'SELECT'
      ? (this.createOptions() as BadgeListSelectOptions<O>).valueProp
      : undefined,
  );

  private toCreateKind(
    createOptions: BadgeListSelectOptions<O> | string | undefined,
  ): CreateBadgeKind {
    if (createOptions == undefined) {
      return 'NONE';
    }

    const isCreateByLink = typeof createOptions === 'string';
    if (isCreateByLink) {
      return 'LINK';
    }

    return 'SELECT';
  }

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
