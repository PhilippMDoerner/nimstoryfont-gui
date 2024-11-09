import { NgClass, NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  input,
  signal,
} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import {
  GroupByFirstLetterPipe,
  GroupByPipe,
} from 'src/design/atoms/_pipes/groupObjects';
import { FilterListEntry } from '../_model/filterListEntry';

type GroupMode = 'PROPERTY' | 'LETTER';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [
    GroupByFirstLetterPipe,
    NgClass,
    GroupByPipe,
    RouterLink,
    NgTemplateOutlet,
  ],
})
export class FilterListComponent<T> {
  entries = input.required<FilterListEntry<T>[]>();
  labelProp = input.required<Exclude<keyof T, symbol | number>>();
  heading = input.required<string>();
  groupProp = input<string>();
  forceSingleLine = input(false);

  filterValue = signal<string | undefined>(undefined);

  displayEntries = computed<FilterListEntry<T>[]>(() => {
    const filterValue = this.filterValue();
    if (filterValue == null || filterValue === '') {
      return this.entries();
    }

    return this.entries().filter((entry) => {
      const entryLabel = entry[this.labelProp()] as string;
      return entryLabel.toLowerCase().includes(filterValue);
    });
  });
  mode = computed<GroupMode>(() => (this.groupProp() ? 'PROPERTY' : 'LETTER'));

  constructor(private routing: Router) {}

  openFirstArticle(event: SubmitEvent) {
    event.preventDefault();
    const hasEntry = this.displayEntries().length > 0;
    if (!hasEntry) {
      return;
    }

    const entry = this.displayEntries()[0];
    this.routing.navigateByUrl(entry.link);
  }
}
