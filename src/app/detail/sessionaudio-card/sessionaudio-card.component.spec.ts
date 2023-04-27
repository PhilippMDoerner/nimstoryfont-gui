import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionaudioCardComponent } from './sessionaudio-card.component';

describe('SessionaudioCardComponent', () => {
  let component: SessionaudioCardComponent;
  let fixture: ComponentFixture<SessionaudioCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SessionaudioCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SessionaudioCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
