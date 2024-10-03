import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OverviewItem } from 'src/app/_models/overview';
import { User, UserRaw } from 'src/app/_models/user';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { BaseService } from '../base.service';
import { TokenService } from '../utils/token.service';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService<UserRaw, User> {
  updateUserGroups = createRequestSubjects<User>();
  thisUser = createRequestSubjects<User>();
  updateUserAdminState = createRequestSubjects<User>();
  patchUser = createRequestSubjects<User>();

  constructor(
    http: HttpClient,
    private tokenService: TokenService,
  ) {
    super(http, 'user');
  }

  runUpdateUserGroups(user: User) {
    const data = { groups: user.groups };
    const entry$ = this.http.patch<User>(
      `${this.baseUrl}/pk/${user.pk}/`,
      data,
    );
    trackQuery(entry$, this.updateUserGroups);
  }

  /**
   * @description An alternate method to set superuser/admin rights for a given user. Only updates
   * the 2 parameters "is_staff" and "is_superuser" to update, nothing else.
   */
  runUpdateUserAdminState(user: User) {
    const data = {
      is_staff: user.is_staff,
      is_superuser: user.is_superuser,
    };
    const entry$ = this.http.patch<User>(
      `${this.baseUrl}/pk/${user.pk}/`,
      data,
    );

    trackQuery(entry$, this.updateUserAdminState);
  }

  runPatchUser(userPk: number, data: any) {
    const entry$ = this.http.patch<User>(`${this.baseUrl}/pk/${userPk}/`, data);

    trackQuery(entry$, this.patchUser);
  }

  loadThisUser() {
    const userPk = this.tokenService.getCurrentUserPk();
    const url: string = `${this.baseUrl}/pk/${userPk}/`;
    const entry$ = this.http.get<User>(url);

    trackQuery(entry$, this.thisUser);
  }

  override parseEntity(data: any): User {
    return data;
  }

  override parseOverviewEntity(data: any): OverviewItem {
    throw 'Overview stuff is not implemented for Users';
  }
}
