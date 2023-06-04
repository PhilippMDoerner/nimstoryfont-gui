import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CampaignOverview } from 'src/app/_models/campaign';
import { TokenService } from 'src/app/_services/utils/token.service';
import { environment } from 'src/environments/environment';
import { selectCampaigns } from '../app.reducer';

@Component({
  selector: 'app-campaign-overview-page',
  templateUrl: './campaign-overview-page.component.html',
  styleUrls: ['./campaign-overview-page.component.scss']
})
export class CampaignOverviewPageComponent implements OnInit{
  serverUrl = environment.backendDomain;
  userName!: string;
  campaigns$!: Observable<CampaignOverview[]>
  isGlobalAdmin!: boolean;
    
  constructor(
    private store: Store,
    private tokenService: TokenService,
  ){}
  
  ngOnInit(): void {
    this.userName = this.tokenService.getCurrentUserName();
    this.isGlobalAdmin = this.tokenService.isAdmin() || this.tokenService.isSuperUser();
    this.campaigns$ = this.store.select(selectCampaigns);
  }
}
