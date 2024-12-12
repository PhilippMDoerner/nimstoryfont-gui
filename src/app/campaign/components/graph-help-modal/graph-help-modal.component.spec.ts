import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphHelpModalComponent } from './graph-help-modal.component';

describe('GraphHelpModalComponent', () => {
  let component: GraphHelpModalComponent;
  let fixture: ComponentFixture<GraphHelpModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraphHelpModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphHelpModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
