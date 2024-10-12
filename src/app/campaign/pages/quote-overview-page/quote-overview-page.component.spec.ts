import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteOverviewPageComponent } from './quote-overview-page.component';

describe('QuoteOverviewPageComponent', () => {
  let component: QuoteOverviewPageComponent;
  let fixture: ComponentFixture<QuoteOverviewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuoteOverviewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteOverviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
