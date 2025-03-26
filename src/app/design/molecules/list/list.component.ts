import { Component, input, output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeadingDirective } from 'src/app/_directives/heading.directive';
import { ButtonComponent } from 'src/app/design/atoms/button/button.component';
import { HeadingLevel } from '../../atoms/_models/heading';
import { ListEntry } from '../_models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  imports: [ButtonComponent, HeadingDirective, RouterLink],
})
export class ListComponent {
  heading = input.required<string>();
  entries = input.required<ListEntry[]>();
  ariaLevel = input.required<HeadingLevel>();
  enableCreate = input(false);
  emptyListText = input('No entries yet');

  readonly create = output<void>();

  onCreateButtonClick() {
    if (!this.enableCreate()) {
      return;
    }

    this.create.emit();
  }
}
