import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkEntryComponent } from './link-entry.component';

describe('LinkEntryComponent', () => {
  let component: LinkEntryComponent<any>;
  let fixture: ComponentFixture<LinkEntryComponent<any>>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinkEntryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinkEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
