import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAdministrationPageComponent } from './site-administration-page.component';

describe('SiteAdministrationPageComponent', () => {
  let component: SiteAdministrationPageComponent;
  let fixture: ComponentFixture<SiteAdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAdministrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SiteAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
