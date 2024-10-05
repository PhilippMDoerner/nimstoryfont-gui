import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignAdminPageComponent } from './campaign-admin-page.component';

describe('CampaignAdminPageComponent', () => {
  let component: CampaignAdminPageComponent;
  let fixture: ComponentFixture<CampaignAdminPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignAdminPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignAdminPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
