import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHitComponent } from './search-hit.component';

describe('SearchHitComponent', () => {
  let component: SearchHitComponent;
  let fixture: ComponentFixture<SearchHitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchHitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
