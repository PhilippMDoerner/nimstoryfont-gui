import { Component, EventEmitter, input, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ButtonComponent } from 'src/design/atoms/button/button.component';
import {
  HeadingComponent,
  HeadingLevel,
} from 'src/design/atoms/heading/heading.component';
import { ListEntry } from '../_models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  standalone: true,
  imports: [ButtonComponent, RouterLink, HeadingComponent],
})
export class ListComponent {
  heading = input.required<string>();
  headingLevel = input.required<HeadingLevel>();
  entries = input.required<ListEntry[]>();
  enableCreate = input(false);
  emptyListText = input('No entries yet');

  @Output() create: EventEmitter<null> = new EventEmitter();

  onCreateButtonClick() {
    if (!this.enableCreate()) {
      return;
    }

    this.create.emit();
  }
}
