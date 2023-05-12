import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompareFormComponent } from './compare-form.component';

describe('CompareFormComponent', () => {
  let component: CompareFormComponent<any>;
  let fixture: ComponentFixture<CompareFormComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompareFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompareFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
