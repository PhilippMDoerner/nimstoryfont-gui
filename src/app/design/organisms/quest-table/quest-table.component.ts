import { Component, Input, OnInit } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';

type DisplayState = "Default" | "All" | "Completed" | "Failed" | "On hold" | "In progress"
type TableType = "success" | "warning" | "danger"

@Component({
  selector: 'app-quest-table',
  templateUrl: './quest-table.component.html',
  styleUrls: ['./quest-table.component.scss']
})
export class QuestTableComponent implements OnInit{
  DISPLAY_STATES: DisplayState[] = ["Default", "All", "Completed", "Failed", "On hold", "In progress"];
  STATE_ICON_MAPPING = {
    'Completed': 'check-square-o',
    'On Hold': 'hourglass-half',
    'Failed': 'times',
    'In progress': 'spinner',
  }
  
  STATE_TABLE_TYPE_MAPPING = {
    'Completed': 'success',
    'On Hold': 'warning',
    'Failed': 'danger',
    'In progress': '',
  }
  
  @Input() questTaker!: string;
  @Input() quests!: OverviewItem[];
  
  state: DisplayState = 'Default'; 
  displayQuests!: OverviewItem[];
  
  ngOnInit(): void {
    this.filterQuests();
  }
  
  filterQuests(){
    this.displayQuests = this.quests.filter(
      quest => this.shouldDisplayQuest(quest)
    );
  }
  
  shouldDisplayQuest(quest: OverviewItem): boolean{
    const isShowingAllQuests = this.state.toLowerCase() === 'all';
    if(isShowingAllQuests){
      return true;
    }
    
    const isMatchingDesiredState = this.state.toLowerCase() === quest.status?.toLowerCase();
    if(isMatchingDesiredState){
      return true;
    }
    
    const isDefaultState = this.state === 'Default';
    const isMatchingDefault =  ['in progress', 'on hold'].includes(quest.status?.toLowerCase() as string);
    return isDefaultState && isMatchingDefault;
  }
}
