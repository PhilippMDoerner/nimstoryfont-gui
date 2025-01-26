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

import { ElementKind } from 'src/app/design/atoms/_models/button';
import { BadgeComponent } from 'src/app/design/atoms/badge/badge.component';
import { InteractiveBadgeComponent } from 'src/app/design/atoms/interactive-badge/interactive-badge.component';
import { BadgeListEntry, BadgeListSelectOptions } from '../_models/badge-list';
import { SmallCreateFormComponent } from '../small-create-form/small-create-form.component';

type CreateBadgeKind = 'LINK' | 'SELECT' | 'NONE';

type LinkCreateOptions = {
  kind: 'LINK';
  link: string;
  createBadgeLabel?: string;
};
type BadgeCreateOptions<T> = {
  kind: 'SELECT';
  config: BadgeListSelectOptions<T>;
  createBadgeLabel?: string;
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
})
export class BadgeListComponent<T, O> {
  entries = input.required<BadgeListEntry<T>[]>();
  createOptions = input<CreateOptions<O>>();
  label = input('Entry');
  canCreate = input(false);
  canDelete = input(false);
  submitButtonType = input<ElementKind>('PRIMARY');
  cancelButtonType = input<ElementKind>('SECONDARY');

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
  createBadgeLabel = computed(() => {
    if (this.createKind() === 'NONE') return undefined;
    const options = this.createOptions() as
      | BadgeCreateOptions<O>
      | LinkCreateOptions;

    return options.createBadgeLabel ?? `Add ${this.label()}`;
  });
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
