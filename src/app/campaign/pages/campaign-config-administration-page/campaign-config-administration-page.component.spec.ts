import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignConfigAdministrationPageComponent } from './campaign-config-administration-page.component';

describe('CampaignConfigAdministrationPageComponent', () => {
  let component: CampaignConfigAdministrationPageComponent;
  let fixture: ComponentFixture<CampaignConfigAdministrationPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignConfigAdministrationPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignConfigAdministrationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
