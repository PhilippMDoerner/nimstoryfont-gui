import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlySelectDisableFieldComponent } from './formly-select-disable-field.component';

describe('FormlySelectDisableComponent', () => {
  let component: FormlySelectDisableFieldComponent;
  let fixture: ComponentFixture<FormlySelectDisableFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlySelectDisableFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlySelectDisableFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
