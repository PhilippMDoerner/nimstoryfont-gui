import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarLegendComponent } from './sidebar-legend.component';

describe('SidebarLegendComponent', () => {
  let component: SidebarLegendComponent;
  let fixture: ComponentFixture<SidebarLegendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarLegendComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarLegendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
