import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from 'src/design/atoms/button/button.component';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  imports: [ButtonComponent, FormsModule],
})
export class SearchFieldComponent {
  NON_NORMAL_CHARACTER_REGEXP: RegExp = /[^a-zA-Z0-9']/g;
  TWO_OR_MORE_WHITESPACE_REGEXP: RegExp = /\s\s+/g;

  placeholder = input('Enter Search Query');
  btnAriaLabel = input('Trigger a search');
  @Output() appSearch: EventEmitter<string> = new EventEmitter();

  searchString: string = '';

  startSearch(): void {
    if (this.searchString == null) {
      return;
    }

    this.searchString = this.cleanText(this.searchString);

    if (this.searchString == null || this.searchString === '') {
      return;
    }
    this.appSearch.emit(this.searchString);
  }

  private cleanText(str: string): string {
    return str
      .replace(this.NON_NORMAL_CHARACTER_REGEXP, ' ')
      .trim()
      .replace(this.TWO_OR_MORE_WHITESPACE_REGEXP, ' '); //Removes scenarios with more than 1 consecutive whitespace
  }
}
