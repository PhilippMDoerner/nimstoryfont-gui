import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignUpdatePageComponent } from './campaign-update-page.component';

describe('CampaignUpdatePageComponent', () => {
  let component: CampaignUpdatePageComponent;
  let fixture: ComponentFixture<CampaignUpdatePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CampaignUpdatePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CampaignUpdatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
