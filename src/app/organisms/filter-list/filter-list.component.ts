import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filter-list',
  templateUrl: './filter-list.component.html',
  styleUrls: ['./filter-list.component.scss']
})
export class FilterListComponent implements OnInit, OnChanges{
  @Input() entries!: any[];
  @Input() labelProp!: string;
  @Input() heading!: string;
  
  @ViewChild('filterInputElement') filterInputElement!: ElementRef;
  
  displayEntries!: any[];
  
  constructor(
    private routing: Router,
  ){}
  
  ngOnInit(): void {
    this.displayEntries = this.entries;
  }
  
  ngOnChanges(): void {
    // this.updateDisplayEntries();
  }
  
  updateDisplayEntries(){
    console.log("Fired");
    const filterValue = this.filterInputElement.nativeElement.value;
    if(filterValue == null || filterValue === ""){
      this.displayEntries = this.entries;
    }
    
    const displayEntries = this.entries.filter(
      entry => entry[this.labelProp].toLowerCase().includes(filterValue),
    );
    
    this.displayEntries = displayEntries;
  }

  openFirstArticle(){
    const hasEntry = this.displayEntries.length > 0;
    if(!hasEntry){
      return;
    }
    
    const entry = this.displayEntries[0];
    this.routing.navigateByUrl(entry.link);
  }
}
