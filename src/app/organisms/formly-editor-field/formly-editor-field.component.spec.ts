import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormlyEditorFieldComponent } from './formly-editor-field.component';

describe('FormlyEditorFieldComponent', () => {
  let component: FormlyEditorFieldComponent;
  let fixture: ComponentFixture<FormlyEditorFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormlyEditorFieldComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormlyEditorFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
