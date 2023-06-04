import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CampaignOverview } from './_models/campaign';
import { loadCampaignSet } from './base.actions';
import { selectCurrentCampaign } from './base.reducer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  serverUrl: string = environment.backendDomain;
  campaign$!: Observable<CampaignOverview | undefined>;
  
  constructor(
    private store: Store
  ){}
  
  ngOnInit(): void {
    this.loadCampaignOverview();
    
    this.campaign$ = this.store.select(selectCurrentCampaign);
  }
  
  loadCampaignOverview(): void{
    this.store.dispatch(loadCampaignSet());
  }
}
