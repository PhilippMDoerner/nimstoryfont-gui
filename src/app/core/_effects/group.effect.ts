import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GroupService } from 'src/app/_services/article/group.service';
import {
  loadSiteUserGroups,
  loadSiteUserGroupsFailure,
  loadSiteUserGroupsSuccess,
} from '../app.actions';
import { createBasicEffect } from './_effects-factory';

@Injectable()
export class GroupEffects {
  loadGroups$: Observable<Action>;

  constructor(private groupService: GroupService) {
    this.loadGroups$ = createBasicEffect({
      startAction: loadSiteUserGroups,
      serviceCall: () => this.groupService.loadList(),
      endAction: loadSiteUserGroupsSuccess,
      failureAction: loadSiteUserGroupsFailure,
    });
  }
}
