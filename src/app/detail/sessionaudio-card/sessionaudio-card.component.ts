import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { RoutingService } from 'src/app/_services/routing.service';

@Component({
  selector: 'app-sessionaudio-card',
  templateUrl: './sessionaudio-card.component.html',
  styleUrls: ['./sessionaudio-card.component.scss']
})
export class SessionaudioCardComponent implements OnInit, OnChanges{
  @Input() serverUrl!: string;
  @Input() sessionAudio!: OverviewItem;
  
  sessionAudioUrl!: string;
  
  constructor(
    private routingService: RoutingService
  ){}
  
  ngOnInit(): void {
    this.setSessionAudioUrl();
  }
  
  ngOnChanges(): void {
    this.setSessionAudioUrl();
  }
  
  setSessionAudioUrl(){
    const campaignName = this.sessionAudio.campaign_details?.name;
    const isMainSession = this.sessionAudio.session_details?.is_main_session;
    const sessionNumber = this.sessionAudio.session_details?.session_number;
    this.sessionAudioUrl =  this.routingService.getRoutePath('sessionaudio', {
      campaign: campaignName, 
      isMainSession, 
      sessionNumber,
    })
  }
}
