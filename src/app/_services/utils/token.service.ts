import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Login } from 'src/app/_models/login';
import { CampaignMemberships, CampaignRole, CampaignRoles, TokenData, UserData } from 'src/app/_models/token';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TokenService {
  static USER_DATA_KEY: string = "user_data";
  
  apiUrl = environment.apiUrl;
  private jwtTokenUrl: string = `${this.apiUrl}/token`;
  private refreshTokenUrl: string = `${this.apiUrl}/token/refresh`;
  private ID_IDENTIFIER_PREFIX: string = "id_";

  constructor(private http: HttpClient) { }

  public login(loginData: Login): Observable<UserData>{
    return this.http.post<UserData>(this.jwtTokenUrl, loginData)
  }

  public refreshUserData(): Observable<UserData>{
    console.log("Trigger refresh call")
    const refreshToken = TokenService.getRefreshToken().token;
    const httpHeaders = new HttpHeaders().set("Authorization", `Bearer ${refreshToken}`);
    //TODO Figure out why this was necessary
    return this.http.post<UserData>(
      this.refreshTokenUrl, 
      {refresh: refreshToken}, 
      {headers: httpHeaders}
    ).pipe(tap(x => console.log("Refresh call responded: ", x)));
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
    
    return this.isSuperUser() || this.isAdmin() || role === 'member' || role === 'admin';
  }

  public isCampaignAdmin(campaignName: string): boolean{
    return this.isSuperUser() || this.isAdmin() || this.getCampaignRole(campaignName) === 'admin';
  }

  public isCampaignGuest(campaignName: string): boolean{
    return this.isSuperUser() || this.isAdmin() || this.getCampaignRole(campaignName) === 'guest';
  }

  public getCampaignRole(campaignName: string): CampaignRole | undefined{
    if(campaignName == null) return undefined;

    const memberships: CampaignMemberships = this.getCampaignMemberships();
    if (memberships == null) return undefined;

    
    const role: string = memberships[campaignName.toLowerCase()];
    const isValidRole = CampaignRoles.some(roleName => roleName === role);
    return isValidRole ? (role as CampaignRole) : undefined;
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
      const currentDate = new Date(currentTimestamp*1000).toString();
      const expiryDate = new Date(expiryTimestamp*1000).toString();
      const tokenName = token.type.toLocaleUpperCase();
      console.log(`
        ${tokenName} Token is expired. 
        Request timestamp: ${currentDate}. 
        Token expiry timestamp: ${expiryDate}
      `);
    }
    return isExpired;
  }
}
