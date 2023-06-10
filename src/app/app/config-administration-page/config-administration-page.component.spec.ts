import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigAdministrationPageComponent } from './config-administration-page.component';

describe('ConfigAdministrationPageComponent', () => {
  let component: ConfigAdministrationPageComponent;
  let fixture: ComponentFixture<ConfigAdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfigAdministrationPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfigAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
