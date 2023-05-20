import { Observable, of } from "rxjs";
import { ArticleKind, OverviewItem } from "src/app/_models/overview";
import { dummyOverviewCharacters } from "./character-service.mock";
import { dummyLocations } from "./location.service.mock";
import { dummyOrganizations } from "./organization.service.mock";
import { OverviewService } from "./overview.service";

export class OverviewServiceMock implements Partial<OverviewService> {
  getCampaignOverviewItems(
    campaign: string, 
    overviewType: ArticleKind, 
    sortProperty?: keyof OverviewItem
  ): Observable<OverviewItem[]>{
    return this.getDummyData(overviewType);
  }
  
  getAllOverviewItems(
    overviewType: ArticleKind, 
    sortProperty?: keyof OverviewItem
  ): Observable<OverviewItem[]>{
    return this.getDummyData(overviewType);
  }
  
  private getDummyData(overviewType: ArticleKind): Observable<OverviewItem[]>{
    switch(overviewType){
      case "CHARACTER":
        return of(dummyOverviewCharacters);
      case "CREATURE":
      case "DIARYENTRY":
      case "ENCOUNTER":
      case "ITEM":
      case "LOCATION":
        return of(dummyLocations);
      case "MAP":
      case "MARKER_TYPE":
      case "MARKER_TYPE_TYPE":
      case "ORGANIZATION":
        return of(dummyOrganizations);
      case "QUEST":
      case "QUOTE":
      case "RULE":
      case "SPELL":
      case "USER":
      case "SESSION":
      case "SESSIONAUDIO":
        return of([]);
    }
  }
}