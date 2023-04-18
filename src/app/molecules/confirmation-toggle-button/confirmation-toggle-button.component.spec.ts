import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationToggleButtonComponent } from './confirmation-toggle-button.component';

describe('ConfirmationToggleButtonComponent', () => {
  let component: ConfirmationToggleButtonComponent;
  let fixture: ComponentFixture<ConfirmationToggleButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationToggleButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmationToggleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
