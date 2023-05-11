import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-quest-overview',
  templateUrl: './quest-overview.component.html',
  styleUrls: ['./quest-overview.component.scss']
})
export class QuestOverviewComponent implements OnInit, OnChanges{
  @Input() quests!: OverviewItem[];
  @Input() campaignName!: string;
  
  homeUrl!: string;
  createUrl!: string;
  groupedQuests!: {key:string, value:OverviewItem[]}[];
  
  constructor(
    private routingService: RoutingService
  ){}
  
  ngOnInit(): void {
    this.homeUrl = this.routingService.getRoutePath(
      'home',
      {campaign: this.campaignName},
    );
    
    this.createUrl = this.routingService.getRoutePath(
      'quest-create',
      { campaign: this.campaignName }
    );
    
    this.setGroupedQuests();
  }
  
  ngOnChanges(): void {
    this.setGroupedQuests();
  }
  
  private setGroupedQuests(): void{
    this.groupedQuests = this.groupQuestsByTaker(this.quests);
  }
  
  private groupQuestsByTaker(itemArray: OverviewItem[]): {key:string, value:OverviewItem[]}[]{
    /**
     * Turns an array of QuestObjects into an array of objects, the object containing 
     * an array of all quests associated with a given quest Taker 
     * */
    const callback = (accumulator: {[key: string]: any}, quest: OverviewItem) => {
      const questTaker: string = quest.taker_details?.name as string;
      
      const hasQuestTaker = accumulator.hasOwnProperty(questTaker);
      if(hasQuestTaker){
        accumulator[questTaker].push(quest);
      } else {
        accumulator[questTaker] = [quest];
      }
      return accumulator;
    }
    const groupedQuests = itemArray.reduce(callback, {});

    const result = Object.keys(groupedQuests).map(key => ({key, value: groupedQuests[key] }));
  
    // Sort by Quest-Taker alphabetically, but put "Group" quests always at the start
    const sortedResults = result.sort((objA, objB) =>{
        if (objA.key === "Group") return -1;
        else if (objB.key === "Group") return 1;
        else if (objA.key > objB.key) return 1;
        else if (objA.key === objB.key) return 0;
        else return -1;
    });

    // Sort individual quests by quest-status, In-progress > On Hold > Completed > Failed
    const statusValues: any = {
      "In progress": 1, 
      "On Hold": 2, 
      "Completed": 3, 
      "Failed": 4 
    };
    for (const [index, quest] of sortedResults.entries()){
      sortedResults[index].value = quest.value.sort((objA: OverviewItem, objB: OverviewItem) => {
        const isSameStatus = objA.status === objB.status;
        if (!isSameStatus){
          return statusValues[objA.status as string] - statusValues[objB.status as string];
        } else {
          if ((objA.name ?? '') > (objB.name ?? '')){
            return 1;
          } else if ((objA.name ?? '') < (objB.name ?? '')){
            return -1;
          } else {
            return 0;
          }
        }
      });
    }

    return sortedResults;
  }


}
