import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyDatepickerFieldComponent } from './formly-datepicker-field.component';

describe('FormlyDatepickerFieldComponent', () => {
  let component: FormlyDatepickerFieldComponent;
  let fixture: ComponentFixture<FormlyDatepickerFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyDatepickerFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyDatepickerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
