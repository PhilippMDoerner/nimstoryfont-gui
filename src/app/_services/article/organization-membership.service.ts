import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OrganizationMembership } from 'src/app/_models/character';
import { OverviewItem } from 'src/app/_models/overview';
import { BaseService } from '../base.service';
import { CUDService } from '../service.interfaces';

@Injectable({
  providedIn: 'root'
})
export class OrganizationMembershipService extends BaseService<OrganizationMembership> implements CUDService<OrganizationMembership>{

  constructor(
    http: HttpClient
  ) { super(http, 'character/organizationmemberships')}

  override parseEntity(data: any): OrganizationMembership {
    return data;
  }
  
  override parseOverviewEntity(data: any): OverviewItem {
    return data;
  }
  
}
