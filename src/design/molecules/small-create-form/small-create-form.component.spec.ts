import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallCreateFormComponent } from './small-create-form.component';

describe('SmallCreateFormComponent', () => {
  let component: SmallCreateFormComponent;
  let fixture: ComponentFixture<SmallCreateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallCreateFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmallCreateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
