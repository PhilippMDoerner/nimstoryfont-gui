import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyFileFieldComponent } from './formly-file-field.component';

describe('FormlyFileFieldComponent', () => {
  let component: FormlyFileFieldComponent;
  let fixture: ComponentFixture<FormlyFileFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyFileFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyFileFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
