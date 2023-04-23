import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ElementType } from 'src/app/atoms/_models/button';
import { BadgeListEntry } from '../_models/badge-list';

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss']
})
export class BadgeListComponent {
  @Input() entries!: BadgeListEntry[];
  @Input() options!: any[];
  @Input() optionLabelProp!: string;
  @Input() optionValueProp!: string;
  @Input() label: string = 'Entry';
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() submitButtonType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  
  @Output() entryDelete: EventEmitter<any> = new EventEmitter();
  @Output() entryCreate: EventEmitter<{entry: any}> = new EventEmitter();
  
  onEntryDelete(entry: BadgeListEntry){
    if(!this.canDelete){
      return;
    }

    this.entryDelete.emit(entry.badgeValue);
  }
  
  onEntryCreate(selectedOption: any){
    if(!this.canCreate){
      return;
    }

    this.entryCreate.emit(selectedOption);
  }

}
