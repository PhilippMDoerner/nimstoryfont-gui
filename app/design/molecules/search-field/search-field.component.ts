import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-field',
  templateUrl: './search-field.component.html',
  styleUrls: ['./search-field.component.scss']
})
export class SearchFieldComponent {
  NON_NORMAL_CHARACTER_REGEXP: RegExp = /[^a-zA-Z0-9']/g;
  TWO_OR_MORE_WHITESPACE_REGEXP: RegExp = /\s\s+/g;
  
  @Input() placeholder: string = "Enter Search Query";
  @Output() search: EventEmitter<string> = new EventEmitter();
  
  searchString: string = '';
  
  constructor(){}
  
  startSearch(): void{
    if(this.searchString == null){
      return;
    }
    
    this.searchString = this.cleanText(this.searchString);

    if(this.searchString == null || this.searchString === ""){
      return;
    }

    this.search.emit(this.searchString);
  }
  
  cleanText(str: string): string{
    return str.replace(this.NON_NORMAL_CHARACTER_REGEXP, ' ')
      .trim()
      .replace(this.TWO_OR_MORE_WHITESPACE_REGEXP, ' '); //Removes scenarios with more than 1 consecutive whitespace
  }
}
