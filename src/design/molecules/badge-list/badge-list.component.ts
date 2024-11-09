import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { RouterLink } from '@angular/router';

import { ElementType } from 'src/design/atoms/_models/button';
import { BadgeComponent } from 'src/design/atoms/badge/badge.component';
import { InteractiveBadgeComponent } from 'src/design/atoms/interactive-badge/interactive-badge.component';
import { BadgeListEntry, BadgeListSelectOptions } from '../_models/badge-list';
import { SmallCreateFormComponent } from '../small-create-form/small-create-form.component';

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
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    SmallCreateFormComponent,
    InteractiveBadgeComponent,
    NgTemplateOutlet,
    BadgeComponent,
    RouterLink,
  ],
  standalone: true,
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

  createKind = computed<CreateBadgeKind | undefined>(
    () => this.createOptions()?.kind,
  );
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
