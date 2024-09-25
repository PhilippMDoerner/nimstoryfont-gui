import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, filter } from 'rxjs';
import { PermissionGroup } from 'src/app/_models/auth';
import { Campaign, WikiStatistics } from 'src/app/_models/campaign';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';
import { selectAllSiteCampaigns, selectAllSiteGroups, selectAllSiteUsers, selectSiteStatistics } from '../app.reducer';

@Component({
  selector: 'app-site-administration-page',
  templateUrl: './site-administration-page.component.html',
  styleUrls: ['./site-administration-page.component.scss']
})
export class SiteAdministrationPageComponent implements OnInit{
  serverUrl = environment.backendDomain;
  allSiteUsers$!: Observable<User[]>;
  allSiteCampaigns$!: Observable<Campaign[]>;
  siteStatistics$!: Observable<WikiStatistics>;
  allPermissionGroups$!: Observable<PermissionGroup[]>;
  
  constructor(
    private store: Store
  ){}
  
  ngOnInit(): void {
    this.allSiteUsers$ = this.store.select(selectAllSiteUsers)
      .pipe(filter(users => !!users)) as Observable<User[]>;
      
    this.allSiteCampaigns$ = this.store.select(selectAllSiteCampaigns)
      .pipe(filter(users => !!users)) as Observable<Campaign[]>;
    
    this.siteStatistics$ = this.store.select(selectSiteStatistics)
      .pipe(filter(users => !!users)) as Observable<WikiStatistics>;
    
    this.allPermissionGroups$ = this.store.select(selectAllSiteGroups)
      .pipe(filter(users => !!users)) as Observable<PermissionGroup[]>;
  }
}
