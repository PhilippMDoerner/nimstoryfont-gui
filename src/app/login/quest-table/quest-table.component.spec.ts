import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestTableComponent } from './quest-table.component';

describe('QuestTableComponent', () => {
  let component: QuestTableComponent;
  let fixture: ComponentFixture<QuestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
