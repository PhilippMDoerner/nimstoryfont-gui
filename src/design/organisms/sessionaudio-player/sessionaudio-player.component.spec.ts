import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionaudioPlayerComponent } from './sessionaudio-player.component';

describe('SessionaudioPlayerComponent', () => {
  let component: SessionaudioPlayerComponent;
  let fixture: ComponentFixture<SessionaudioPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionaudioPlayerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionaudioPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
