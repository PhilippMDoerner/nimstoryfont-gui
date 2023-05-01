import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CampaignRole } from 'src/app/_models/campaign';
import { CampaignMemberships, TokenData, UserData } from 'src/app/_models/token';
import { User } from 'src/app/_models/user';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  static USER_DATA_KEY: string = "user_data";
  
  apiUrl = environment.apiUrl;
  private jwtTokenUrl: string = `${this.apiUrl}/token`;
  private refreshTokenUrl: string = `${this.apiUrl}/refresh`;
  private ID_IDENTIFIER_PREFIX: string = "id_";

  constructor(private http: HttpClient) { }

  public login(userModel: User): Observable<UserData>{
    const loginData: object = {username: userModel.username, password: userModel.password};
    return this.http.post<UserData>(this.jwtTokenUrl, loginData)
  }

  public refreshUserData(): Observable<UserData>{
    const refreshToken = TokenService.getRefreshToken().token;
    const httpHeaders = new HttpHeaders().set("Authorization", `Bearer ${refreshToken}`);
    //TODO Figure out why this was necessary
    return this.http.post<UserData>(this.refreshTokenUrl, {refresh: refreshToken}, {headers: httpHeaders});
  }

  public invalidateJWTToken(): void{
  //   const jwtToken: EncodedJWTToken = {access: this.getAccessToken(), refresh: this.getRefreshToken()};
  //   return this.http.post(`${this.jwtTokenUrl}/logout`, jwtToken); //This feature is not implemented in the backend
  }

  //static for permissionDecorator.ts
  public static getUserData(): UserData{
    const rawUserData = localStorage.getItem(TokenService.USER_DATA_KEY) as string;
    return JSON.parse(rawUserData);
  }


  public hasTokens(): boolean{
    if (TokenService.getUserData() == null) return false;
    return !!TokenService.getAccessToken() && !!TokenService.getRefreshToken();
  }
  
  public hasValidJWTToken(): boolean{
    if (!this.hasTokens()) return false;
    return !this.isTokenExpired(TokenService.getRefreshToken());
  }

  //static for permissionDecorator.ts
  public static getAccessToken(): TokenData{
    return this.getUserData().accessToken;
  }

  //static for permissionDecorator.ts
  public static getRefreshToken(): TokenData{
    return this.getUserData().refreshToken;
  }



  public setUserData(data: UserData): void{
    localStorage.setItem(TokenService.USER_DATA_KEY, JSON.stringify(data));
  }

  public removeJWTTokenFromLocalStorage(): void{
    localStorage.removeItem(TokenService.USER_DATA_KEY);
  }

  public getCurrentUserPk(): number{
    return TokenService.getUserData().userId;
  }

  public isAdmin(): boolean{
    const data: UserData = TokenService.getUserData();
    return (data == null) ? false : data.isAdmin; 
  }

  public isSuperUser(): boolean{
    const data: UserData = TokenService.getUserData();
    return (data == null) ? false : data.isSuperUser; 
  }

  public getCurrentUserName(): string{
    return TokenService.getUserData()?.userName;
  }

  public isCampaignMember(campaignName: string): boolean{
    const role: CampaignRole | undefined = this.getCampaignRole(campaignName);
    if (role == null){
      return false;
    }
    
    return this.isSuperUser() || this.isAdmin() || role === CampaignRole.MEMBER || role === CampaignRole.ADMIN;
  }

  public isCampaignAdmin(campaignName: string): boolean{
    return this.isSuperUser() || this.isAdmin() || this.getCampaignRole(campaignName) === CampaignRole.ADMIN;
  }

  public isCampaignGuest(campaignName: string): boolean{
    return this.isSuperUser() || this.isAdmin() || this.getCampaignRole(campaignName) === CampaignRole.GUEST;
  }

  public getCampaignRole(campaignName: string): CampaignRole | undefined{
    if(campaignName == null) return undefined;

    const memberships: CampaignMemberships = this.getCampaignMemberships();
    if (memberships == null) return undefined;

    const role: string = memberships[campaignName.toLowerCase()];
    return CampaignRole[role?.toUpperCase() as keyof typeof CampaignRole] as any;
  }

  /**Retrieves campaign memberships of a user from their token */
  public getCampaignMemberships(): CampaignMemberships{
    const data: UserData = TokenService.getUserData();

    const campaignMemberships: CampaignMemberships = {}
    for (const campaignIdentifier of Object.keys(data.campaignMemberships)){
      const isIdIdentifier: boolean = campaignIdentifier.startsWith(this.ID_IDENTIFIER_PREFIX);
      if (! isIdIdentifier){
        campaignMemberships[campaignIdentifier.toLowerCase()] = data.campaignMemberships[campaignIdentifier];
      }
    }
    return campaignMemberships;
  }

  public isAccessTokenExpired(): boolean{
    return this.isTokenExpired(TokenService.getAccessToken());
  }

  public isRefreshTokenExpired(): boolean{
    return this.isTokenExpired(TokenService.getRefreshToken());
  }

  public isTokenExpired(token: TokenData): boolean{
    const expiryTimestamp = token.exp;
    const currentTimestamp = Math.floor((new Date).getTime()/1000);

    const isExpired = currentTimestamp >= expiryTimestamp;
    if (isExpired){
      console.log(`${token.type} Token is expired. Request timestamp: ${new Date(currentTimestamp*1000).toString()}. Token expiry timestamp: ${new Date(expiryTimestamp*1000).toString()}`)
    }
    return isExpired;
  }
}
