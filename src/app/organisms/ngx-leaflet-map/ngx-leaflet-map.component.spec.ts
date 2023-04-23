import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxLeafletMapComponent } from './ngx-leaflet-map.component';

describe('NgxLeafletMapComponent', () => {
  let component: NgxLeafletMapComponent;
  let fixture: ComponentFixture<NgxLeafletMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxLeafletMapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgxLeafletMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
