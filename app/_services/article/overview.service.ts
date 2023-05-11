import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ArticleKind, OverviewItem } from 'src/app/_models/overview';
import { environment } from 'src/environments/environment';
import { BaseService } from '../base.service';
import { CharacterService } from './character.service';
import { CreatureService } from './creature.service';
import { DiaryentryService } from './diaryentry.service';
import { EncounterService } from './encounter.service';
import { ItemService } from './item.service';
import { LocationService } from './location.service';
import { MapService } from './map.service';
import { MarkerTypeService } from './marker-type.service';
import { MarkerService } from './marker.service';
import { OrganizationService } from './organization.service';
import { QuestService } from './quest.service';
import { QuoteService } from './quote.service';
import { RuleService } from './rule.service';
import { SessionAudioService } from './session-audio.service';
import { SessionService } from './session.service';
import { SpellService } from './spell.service';
import { UserService } from './user.service';


@Injectable({
  providedIn: 'root'
})
export class OverviewService {
  apiUrl: string = environment.apiUrl;
  
  overviewServiceMapping: {[type in ArticleKind]: BaseService<any>} = {
    "CHARACTER": this.characterService,
    "CREATURE": this.creatureService,
    "DIARYENTRY": this.diaryentryService,
    "ENCOUNTER": this.encounterService,
    "ITEM": this.itemService,
    "LOCATION": this.locationService,
    "MAP": this.mapService,
    "MARKER_TYPE_TYPE": this.markerTypeService,    
    "MARKER_TYPE": this.markerService,
    "ORGANIZATION": this.organizationService,
    "QUEST": this.questService,
    "QUOTE": this.quoteService,
    "RULE": this.ruleService,
    "SESSION": this.sessionService,
    "SESSIONAUDIO": this.sessionaudioService,
    "SPELL": this.spellService,
    "USER": this.userService,
  }

  constructor(
    private characterService: CharacterService,
    private creatureService: CreatureService,
    private diaryentryService: DiaryentryService,
    private encounterService: EncounterService,
    private itemService: ItemService,
    private locationService: LocationService,
    private mapService: MapService,
    private markerService: MarkerService,
    private markerTypeService: MarkerTypeService,
    private organizationService: OrganizationService,
    private questService: QuestService,
    private ruleService: RuleService,
    private sessionService: SessionService,
    private sessionaudioService: SessionAudioService,
    private spellService: SpellService,
    private quoteService: QuoteService,
    private userService: UserService
  ) { }

  getCampaignOverviewItems(
    campaign: string, 
    overviewType: ArticleKind, 
    sortProperty?: keyof OverviewItem
  ): Observable<OverviewItem[]>{
    const targetService: BaseService<any> = this.overviewServiceMapping[overviewType];
    let overviewItemObservable: Observable<OverviewItem[]> = targetService.campaignList(campaign);
    
    const sortingEnabled = sortProperty != null;
    if(sortingEnabled){      
      overviewItemObservable = overviewItemObservable.pipe(
        map((items: OverviewItem[]) => this.sortByProperty(items, sortProperty))
      );
    }

    return overviewItemObservable;
  }

  getAllOverviewItems(overviewType: ArticleKind, sortProperty?: keyof OverviewItem): Observable<OverviewItem[]>{
    const targetService: BaseService<any> = this.overviewServiceMapping[overviewType];
    let overviewItemObservable: Observable<OverviewItem[]> = targetService.list();

    const sortingEnabled = sortProperty != null;
    if(sortingEnabled){      
      overviewItemObservable = overviewItemObservable.pipe(
        map((items: OverviewItem[]) => this.sortByProperty(items, sortProperty))
      );
    }
    
    return overviewItemObservable;
  }
  
  private sortByProperty(list: any[], propertyName: keyof OverviewItem): any[] {
    const isInverseSort = propertyName.startsWith("-");
    if(isInverseSort){
      propertyName = this.removeInversionPrefix(propertyName) as keyof OverviewItem;
    }
    
    const sortFunction = (item1: OverviewItem, item2: OverviewItem) => {
      const isStringSortVal = typeof item1[propertyName] === "string"; 
      
      const item1SortVal = isStringSortVal ?
        (item1[propertyName] as string).toLowerCase() :
        item1[propertyName];
      const item2SortVal = isStringSortVal ?
        (item2[propertyName] as string).toLowerCase() :
        item2[propertyName];
      
      let inCorrectOrder = (item1SortVal as any) < (item2SortVal as any);
      if(isInverseSort){
        inCorrectOrder = !inCorrectOrder;
      }
      
      return inCorrectOrder ? -1 : 1;
    };
    
    return list.sort(sortFunction);
  };
  
  
  private removeInversionPrefix(str: string): string{
    return str.substring(1);
  }
}
