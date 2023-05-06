import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { Timestamp } from 'src/app/_models/sessionAudio';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { LinkEntry } from '../../molecules/_models/link-entry';

type TimestampState = 'CREATE' | 'DISPLAY';

@Component({
  selector: 'app-sessionaudio-player',
  templateUrl: './sessionaudio-player.component.html',
  styleUrls: ['./sessionaudio-player.component.scss']
})
export class SessionaudioPlayerComponent implements OnInit, OnChanges{
  @Input() sessionAudioPk!: number;
  @Input() timestamps!: Timestamp[];
  @Input() serverUrl!: string;
  @Input() audioSource!: string;
  @Input() downloadSource!: string;
  @Input() canDelete: boolean = false;
  @Input() canCreate: boolean = false;
  
  @Output() deleteTimestamp: EventEmitter<Timestamp> = new EventEmitter();
  @Output() createTimestamp: EventEmitter<Timestamp> = new EventEmitter();
  
  timestampEntries!: LinkEntry<Timestamp>[];
  timestampState: TimestampState = 'DISPLAY';
  currentTime?: number;
  timestampForm = new FormGroup({});
  timestampFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: "time", 
      maxLength: 8, 
      minLength: 8, 
      className: "timestamp-input black-background px-0 col-lg-2 col-3", 
      validators: ["time"], 
      required: true,
      inputKind: 'STRING'
    }),
    this.formlyService.buildInputConfig({
      key: "name", 
      label: "Title", 
      className: "timestamp-input black-background px-0 col-lg-10 col-9", 
      required: true,
      inputKind: 'STRING',
    }),
  ];
  timestampModel: Partial<Timestamp> = {};
  
  constructor(
    private formlyService: FormlyService,
  ){}
  
  ngOnInit(): void {
    this.setTimestampEntries();
  }
  
  ngOnChanges(): void {
    this.setTimestampEntries();
  }
  
  changeTimestampState(newState: TimestampState){
    this.timestampState = newState;
  }
  
  onLinkClick(timestamp: Timestamp){
    this.currentTime = timestamp.time;
    // currentTime is set to undefined so that clicking the same
    // timestamp again resets the playtime on the player again
    // Must be done async as otherwise the two set operations get
    // optimized to solely setting "undefined" and no change events in
    // player-component get thrown.
    setTimeout(() => this.currentTime = undefined, 1);
  }
  
  onSubmit(timestamp: {name: string, time: string}): void{
    const time: number = this.stringToTime(timestamp.time);
    
    const newTimestamp = {
      name: timestamp.name,
      time,
      session_audio: this.sessionAudioPk,
    };
    
    this.createTimestamp.emit(newTimestamp);
    this.timestampState = 'DISPLAY';
    this.timestamps.unshift(newTimestamp);
    this.ngOnChanges();
  }
  
  private setTimestampEntries(): void{
    this.timestampEntries = this.timestamps.map(
      timestamp => ({
        value: timestamp,
        label: timestamp.name,
        linkText: this.timeToString(timestamp.time),
      })
    )
  }
  
  private timeToString(seconds: number): string{
    const hours = Math.floor(seconds/3600);
    const minutes = Math.floor((seconds - hours*3600)/60);
    const remainingSeconds = Math.floor(seconds - hours*3600 - minutes*60);
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  }
  
  private stringToTime(timeString: string): number{
    const hours: number = parseInt(timeString.substr(0, 2));
    const minutes: number = parseInt(timeString.substr(3, 2));
    const seconds: number = parseInt(timeString.substr(6, 2));
    return hours*3600 + minutes*60 + seconds;
  }
}