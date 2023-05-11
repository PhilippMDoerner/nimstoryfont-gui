import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OverviewItem } from 'src/app/_models/overview';
import { User } from 'src/app/_models/user';
import { BaseService } from '../base.service';
import { TokenService } from '../utils/token.service';


@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User>{

  constructor(
    http : HttpClient, 
    private tokenService: TokenService
  ) { super(http, 'user')}

  updateUserGroups(user: User): Observable<User>{
    const data = {groups: user.groups};
    return this.http.patch<User>(`${this.baseUrl}/pk/${user.pk}/`, data);
  }

  /** 
   * @description An alternate method to set superuser/admin rights for a given user. Only updates
   * the 2 parameters "is_staff" and "is_superuser" to update, nothing else.
  */
  updateUserAdminState(user: User): Observable<User>{
    const data = {
      is_staff: user.is_staff,
      is_superuser: user.is_superuser
    }
    return this.http.patch<User>(`${this.baseUrl}/pk/${user.pk}/`, data);
  }

  patchUser(userPk: number, data: any): Observable<User>{
    return this.http.patch<User>(`${this.baseUrl}/pk/${userPk}/`, data);
  }

  getThisUser(): Observable<User>{
    const userPk: number = this.tokenService.getCurrentUserPk();
    const url: string = `${this.baseUrl}/pk/${userPk}/`;
    return this.http.get<User>(url);
  }
  
  override parseEntity(data: any): User {
    return data;
  }
  
  override parseOverviewEntity(data: any): OverviewItem {
    throw "Overview stuff is not implemented for Users";
  }
}
