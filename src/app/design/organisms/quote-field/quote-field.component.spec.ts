import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteFieldComponent } from './quote-field.component';

describe('QuoteFieldComponent', () => {
  let component: QuoteFieldComponent;
  let fixture: ComponentFixture<QuoteFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuoteFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
