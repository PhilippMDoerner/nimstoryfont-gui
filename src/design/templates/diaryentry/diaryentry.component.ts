import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { DiaryEntry, DiaryEntryStump } from 'src/app/_models/diaryentry';
import { Encounter, EncounterConnection } from 'src/app/_models/encounter';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';

type DiaryEntryState = 'DISPLAY' | 'EDIT';

@Component({
  selector: 'app-diaryentry',
  templateUrl: './diaryentry.component.html',
  styleUrls: ['./diaryentry.component.scss']
})
export class DiaryentryComponent implements OnInit, OnChanges {
  @Input() diaryentry!: DiaryEntry;
  @Input() campaignCharacters!: OverviewItem[];
  @Input() encounterServerModel?: Encounter;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() diaryentryDelete: EventEmitter<DiaryEntry> = new EventEmitter();
  @Output() encounterConnectionDelete: EventEmitter<EncounterConnection> = new EventEmitter();
  @Output() encounterConnectionCreate: EventEmitter<EncounterConnection> = new EventEmitter();
  @Output() encounterDelete: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterUpdate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCreate: EventEmitter<Encounter> = new EventEmitter();
  @Output() encounterCutInsert: EventEmitter<{encounter: Encounter, newOrderIndex: number}> = new EventEmitter();
  @Output() encounterSwap: EventEmitter<{enc1: Encounter, enc2: Encounter}> = new EventEmitter();
  
  state: DiaryEntryState = 'DISPLAY';
  overviewUrl!: string;
  updateUrl!: string;
  nextDiaryentryUrl?: string;
  priorDiaryentryUrl?: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.diaryentry.campaign_details.name;
    this.overviewUrl = this.routingService.getRoutePath(
      'diaryentry-overview', 
      {campaign: campaignName}
    );
    
    this.setUrl();
  }
  
  ngOnChanges(): void {
    this.setUrl();
  }
  
  toggleState(): void{
    const isDisplayState = this.state === 'DISPLAY';
    this.state = isDisplayState ? 'EDIT' : 'DISPLAY';
  }
  
  private setUrl(): void{
    const priorDiaryentryStub = this.diaryentry.adjacent_diaryentries.prior_diaryentry;
    this.priorDiaryentryUrl = this.createDiaryentryURL(priorDiaryentryStub);
    
    const nextDiaryentryStub = this.diaryentry.adjacent_diaryentries.next_diaryentry;
    this.nextDiaryentryUrl = this.createDiaryentryURL(nextDiaryentryStub);
    
    const campaignName = this.diaryentry.campaign_details.name;
    const sessionNumber: number = this.diaryentry.session_details?.session_number as number;
    const authorName: string = this.diaryentry.author_details?.name as string;
    const isMainSession: number = this.diaryentry.session_details?.is_main_session_int as number;
    this.updateUrl = this.routingService.getRoutePath(
      'diaryentry-update',
      {
        sessionNumber: sessionNumber,
        isMainSession: isMainSession,
        authorName: authorName,
        campaign: campaignName
      }
    );    
  }
  
  private createDiaryentryURL(stub: DiaryEntryStump): string | undefined{
    if (stub == null){
      return undefined;
    }
    const campaignName: string = stub.session_details.campaign_details?.name as string;
    const sessionNumber: number = stub.session_details.session_number;
    const authorName: string = stub.author_details.name;
    const isMainSession: number = stub.session_details.is_main_session_int as number;

    return this.routingService.getRoutePath('diaryentry', {
      sessionNumber: sessionNumber,
      isMainSession: isMainSession,
      authorName: authorName,
      campaign: campaignName
    });
  }
}
