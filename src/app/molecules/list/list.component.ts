import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ListEntry } from '../_models/list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  @Input() heading!: string;
  @Input() entries!: ListEntry[];
  @Input() enableCreate: boolean = false;
  @Input() emptyListText: string = "No entries yet";
  
  @Output() create: EventEmitter<null> = new EventEmitter();
  
  onCreateButtonClick(){
    if(!this.enableCreate){
      return;
    }
    
    this.create.emit();
  }
}
