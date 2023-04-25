import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyServiceService } from 'src/app/_services/formly/formly-service.service';
import { RoutingService } from 'src/app/_services/routing.service';
import { Session, SessionDiaryEntry } from '../_models/session';

type SessionState = "CREATE" | "DISPLAY" | "UPDATE" | "OUTDATED_UPDATE"

interface DiaryEntry{
  name: string;
  author_name: string;
  link: string;
}

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent implements OnInit{
  @Input() session?: Session;
  @Input() canUpdate: boolean = false;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  @Input() serverModel?: Session;
  
  @Output() sessionDelete: EventEmitter<Session> = new EventEmitter();
  @Output() sessionCreate: EventEmitter<Session> = new EventEmitter();
  @Output() sessionUpdate: EventEmitter<Session> = new EventEmitter();
  
  state: SessionState = 'DISPLAY';
  sessionAudioUrl!: string;
  userModel?: Session;
  diaryEntries!: DiaryEntry[];
  
  formlyFields: FormlyFieldConfig[] = [
    this.formlyService.buildCheckboxConfig({
      key: "is_main_session", 
      defaultValue: true, 
      label: "Main Session?"
    }),
    this.formlyService.buildInputConfig({
      key: "session_number", 
      label: "Session Number", 
      required: true, 
      inputKind: 'NUMBER',
    }),
    this.formlyService.buildDatepickerConfig(
      {key: "session_date", 
      label: "Date of the Session (YYYY/MM/DD)", 
      required: true
    }),
    this.formlyService.buildInputConfig({
      key: "start_day", 
      label: "Start Day", 
      required: false,
      inputKind: 'STRING',
    }),
    this.formlyService.buildInputConfig({
      key: "end_day", 
      label: "End Day", 
      required: false,
      inputKind: 'STRING',
    }),
  ];
  
  constructor(
    private formlyService: FormlyServiceService,
    private routingService: RoutingService,
  ){}
  
  ngOnInit(): void {
    const isInCreateScenario = this.session == null && this.canCreate;
    if(isInCreateScenario){
      this.changeState('CREATE', {} as Session);
    }
    
    this.setDiaryEntries();
    this.setSessionAudioUrl();
  }
  
  changeState(newState: SessionState, newModel: Session | undefined){
    this.state = newState;
    this.userModel = { ...newModel } as Session;
  }
  
  onSessionDelete(){
    this.state = 'DISPLAY';
    this.sessionDelete.emit(this.session);
  }
  
  onSubmit(){
    switch(this.state){
      case 'CREATE':
        this.sessionCreate.emit(this.userModel);
        break;
      case 'UPDATE':
      case 'OUTDATED_UPDATE':
        this.sessionUpdate.emit(this.userModel);
    }
    
    this.changeState('DISPLAY', undefined);
  }
  
  onToggle(toggled: boolean){
    const isInDisplayState = this.state === 'DISPLAY';
    const nextState = isInDisplayState ? 'UPDATE' : 'DISPLAY';
    const nextModel: Session | undefined = toggled ? {...this.session} as Session : undefined;
    this.changeState(nextState, nextModel)
  }
  
    
  private setSessionAudioUrl(){
    this.sessionAudioUrl = this.routingService.getRoutePath('sessionaudio', {
      campaign: this.session?.campaign_details?.name as string, 
      isMainSession: this.session?.is_main_session, 
      sessionNumber: this.session?.session_number
    });
  }
  
  private setDiaryEntries() {
    const diaryEntries: SessionDiaryEntry[] = this.session?.diaryentries ?? [];
    this.diaryEntries = diaryEntries.map(entry => {
      const link = this.routingService.getRoutePath('diaryentry', {
        sessionNumber: this.session?.session_number,
        isMainSession: this.session?.is_main_session,
        authorName: entry.author_name,
        campaign: this.session?.campaign_details?.name as string
      });

      return {
        name: entry.name,
        author_name: entry.author_name,
        link,
      };
    });
  }
}
