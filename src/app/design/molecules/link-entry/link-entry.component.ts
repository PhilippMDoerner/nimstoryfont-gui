import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LinkEntry } from '../_models/link-entry';

type State = "DISPLAY" | "DELETE";

@Component({
  selector: 'app-link-entry',
  templateUrl: './link-entry.component.html',
  styleUrls: ['./link-entry.component.scss']
})
export class LinkEntryComponent<T>{
  @Input() entry!: LinkEntry<T>;
  @Input() canDelete: boolean = false;
  @Input() columnSizes: number[] = this.canDelete ? [3, 8, 1] : [3, 9, 0];
  @Input() deleteMessage: string = 'Delete entry?';
  
  @Output() delete: EventEmitter<any> = new EventEmitter();
  @Output() linkClick: EventEmitter<any> = new EventEmitter();
  
  state: State = 'DISPLAY';
  
  changeState(newState: State){
    this.state = newState;
  }
}
