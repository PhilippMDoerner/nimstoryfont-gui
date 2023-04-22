import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCircleTooltipComponent } from './info-circle-tooltip.component';

describe('InfoCircleTooltipComponent', () => {
  let component: InfoCircleTooltipComponent;
  let fixture: ComponentFixture<InfoCircleTooltipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCircleTooltipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCircleTooltipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
