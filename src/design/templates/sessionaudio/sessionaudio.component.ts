import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { SessionAudio, Timestamp } from 'src/app/_models/sessionAudio';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-sessionaudio',
  templateUrl: './sessionaudio.component.html',
  styleUrls: ['./sessionaudio.component.scss']
})
export class SessionaudioComponent implements OnInit, OnChanges{
  @Input() sessionaudio!: SessionAudio;
  @Input() timestamps!: Timestamp[];
  @Input() serverUrl!: string;
  @Input() canUpdate: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() canDelete: boolean = false;
  
  @Output() sessionaudioDelete: EventEmitter<SessionAudio> = new EventEmitter();
  @Output() deleteTimestamp: EventEmitter<Timestamp> = new EventEmitter();
  @Output() createTimestamp: EventEmitter<Timestamp> = new EventEmitter();
  
  overviewUrl!: string;
  updateUrl!: string;
  nextSessionAudioUrl?: string;
  priorSessionAudioUrl?: string;
  
  constructor(
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const campaignName = this.sessionaudio.session_details?.campaign_details?.name;
    this.overviewUrl = this.routingService.getRoutePath(
      'sessionaudio-overview',
      { campaign: campaignName }
    );
    
    this.setUrls();
  }
  
  ngOnChanges(): void {
    this.setUrls();
  }
  
  private setUrls(): void{
    const campaignName = this.sessionaudio.session_details?.campaign_details?.name;
    this.updateUrl = this.routingService.getRoutePath(
      'sessionaudio',
      {
        campaign: campaignName,
        sessionNumber: this.sessionaudio.session_details?.session_number,
        isMainSession: this.sessionaudio.session_details?.is_main_session_int,
      }
    );
    
    this.nextSessionAudioUrl = this.createSessionAudioUrl(this.sessionaudio.sessionAudioNeighbours?.nextSessionAudio);
    this.priorSessionAudioUrl = this.createSessionAudioUrl(this.sessionaudio.sessionAudioNeighbours?.priorSessionAudio);

  }

  private createSessionAudioUrl(sessionAudioData: {isMainSessionInt: number, sessionNumber: number} | undefined): string | undefined{
    if (sessionAudioData == null){
      return undefined;
    }
    
    if(sessionAudioData.isMainSessionInt == null || sessionAudioData.sessionNumber == null){
      throw new Error(`Invalid URL Building exception. Trying to build a URL with incomplete parameters ${sessionAudioData}`);
    }

    const campaignName = this.sessionaudio.session_details?.campaign_details?.name;
    return this.routingService.getRoutePath('sessionaudio', {
      campaign: campaignName,
      isMainSession: sessionAudioData.isMainSessionInt, 
      sessionNumber: sessionAudioData.sessionNumber
    });
  }
}
