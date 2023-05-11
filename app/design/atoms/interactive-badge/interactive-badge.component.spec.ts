import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteractiveBadgeComponent } from './interactive-badge.component';

describe('InteractiveBadgeComponent', () => {
  let component: InteractiveBadgeComponent;
  let fixture: ComponentFixture<InteractiveBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteractiveBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InteractiveBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
