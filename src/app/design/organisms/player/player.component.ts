import { Component, ElementRef, Input, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as Plyr from 'plyr';

type HotKey = "Space" | "Enter" | "KeyM" | "ArrowRight" | "ArrowLeft"

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit, OnChanges {
  private SEEK_TIME = 5;
  private VOLUME_STEP = 0.05;
  
  @Input() serverUrl!: string;
  @Input() audioSource!: string;
  @Input() downloadSource!: string;
  @Input() playTime?: number;
  
  @ViewChild('audioPlayer', { static: true }) audioPlayer!: ElementRef<HTMLAudioElement>;
  
  private plyr!: Plyr;

  ngOnInit() {
    this.plyr = new Plyr(
      this.audioPlayer.nativeElement, 
      {
        controls: [
          'play', 
          'rewind',
          'fast-forward',
          'progress', 
          'current-time', 
          'mute', 
          'volume',
          'download',
          'settings',
        ],
        invertTime: false,
        seekTime: this.SEEK_TIME,
        volume: 0,
      }
    );
    
    (this.plyr as any).download = this.downloadSource;
    this.setPlayTime();
  }
  
  ngOnChanges(){
    this.setPlayTime();
  }
  
  setPlayTime(): void{
    if(this.playTime == null){
      return;
    }
    this.plyr.currentTime = this.playTime;
  }
  
  triggerHotkeyAction(keyPressEvent: KeyboardEvent){
    const pressedKey: HotKey = keyPressEvent.code as HotKey;
    switch(pressedKey){
      case 'Space':
        this.play();
        break;
      case 'Enter':
        this.play()
        break;
      case 'KeyM':
        this.mute();
        break;
      case 'ArrowRight':
        this.seekForward();
        break;
      case 'ArrowLeft':
        this.seekBackward();
    }
  }
  
  private play(): void{
    this.plyr.togglePlay();
  }

  private seekBackward(): void{
    this.plyr.rewind(this.SEEK_TIME);
  }
  
  private seekForward(): void{
    this.plyr.forward(this.SEEK_TIME);
  }
  
  private increaseVolume(): void{
    this.plyr.increaseVolume(this.VOLUME_STEP);
  }
  
  private decreaseVolume(): void{
    this.plyr.decreaseVolume(this.VOLUME_STEP);
  }
  
  private mute(): void{
    this.plyr.muted = !this.plyr.muted;
  }
}
