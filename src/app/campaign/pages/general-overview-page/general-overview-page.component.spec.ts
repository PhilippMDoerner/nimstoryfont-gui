import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralOverviewPageComponent } from './general-overview-page.component';

describe('GeneralOverviewPageComponent', () => {
  let component: GeneralOverviewPageComponent;
  let fixture: ComponentFixture<GeneralOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
