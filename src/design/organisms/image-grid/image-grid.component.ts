import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import * as _ from 'lodash';

type ColumnCount = 1 | 2 | 3

@Component({
  selector: 'app-image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: ['./image-grid.component.scss']
})
export class ImageGridComponent implements OnInit{
  EMPTY_IMAGE_URL: string = "";
  
  @Input() entries!: any[];
  @Input() serverUrl!: string;
  @Input() imageProp!: string;
  @Input() labelProp!: string;
  
  @Output() entryClick: EventEmitter<any> = new EventEmitter();
  
  entryGrid!: any[][];
  columnCount: ColumnCount = 1;
  
  ngOnInit(): void {
    this.setColumnCount();
    this.entryGrid = _.chunk(this.entries, this.columnCount);
  }
  
  setColumnCount(): void{
    if(this.entries.length === 1){
      this.columnCount = 1;
    } else if(this.entries.length === 2 || this.entries.length === 4){
      this.columnCount = 2;
    } else {
      this.columnCount = 3;
    }
  }
}
