import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ElementType } from 'src/app/atoms/_models/button';
import { BadgeListEntry, BadgeListSelectOptions } from '../_models/badge-list';

type CreateBadgeKind = "LINK" | "SELECT" | "NONE";

@Component({
  selector: 'app-badge-list',
  templateUrl: './badge-list.component.html',
  styleUrls: ['./badge-list.component.scss']
})
export class BadgeListComponent implements OnInit{
  @Input() entries!: BadgeListEntry[];
  @Input() createOptions!: BadgeListSelectOptions | string;
  @Input() label: string = 'Entry';
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() submitButtonType: ElementType = 'PRIMARY';
  @Input() cancelButtonType: ElementType = 'SECONDARY';
  
  @Output() entryDelete: EventEmitter<any> = new EventEmitter();
  @Output() entryCreate: EventEmitter<{entry: any}> = new EventEmitter();
  
  options?: any[];
  optionLabelProp?: string;
  optionValueProp?: string;
  createLink?: string;
  createKind!: CreateBadgeKind;
  
  ngOnInit(): void {
    this.setCreateKind();
    
    switch(this.createKind){
      case 'LINK':
        this.createLink = this.createOptions as string;
        break;
      case 'SELECT':
        const data = this.createOptions as BadgeListSelectOptions;
        this.options = data.options;
        this.optionLabelProp = data.labelProp;
        this.optionValueProp = data.valueProp;
    }
  }
  
  setCreateKind(){
    if (this.createOptions == undefined){
      this.createKind = 'NONE';
      return;
    }
    
    const isCreateByLink = (typeof this.createOptions) === "string";
    if(isCreateByLink){
      this.createKind = 'LINK';
      return;
    }
    
    this.createKind = 'SELECT';
  }
  
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
