import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaryentryEncountersComponent } from './diaryentry-encounters.component';

describe('DiaryentryEncountersComponent', () => {
  let component: DiaryentryEncountersComponent;
  let fixture: ComponentFixture<DiaryentryEncountersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiaryentryEncountersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiaryentryEncountersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
