import { isPlatformServer } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';
import { Login } from 'src/app/_models/login';
import {
  CampaignMemberships,
  CampaignRole,
  CampaignRoles,
  TokenData,
  UserData,
} from 'src/app/_models/token';
import { environment } from 'src/environments/environment';
import { log } from 'src/utils/logging';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  static USER_DATA_KEY: string = 'user_data';

  apiUrl = environment.apiUrl;

  private isInServer = isPlatformServer(inject(PLATFORM_ID));
  private jwtTokenUrl: string = `${this.apiUrl}/token`;
  private refreshTokenUrl: string = `${this.apiUrl}/token/refresh`;
  private ID_IDENTIFIER_PREFIX: string = 'id_';

  constructor(private http: HttpClient) {}

  public login(loginData: Login) {
    return this.http.post<UserData>(this.jwtTokenUrl, loginData);
  }

  public logout() {
    return this.http.get<void>(`${this.jwtTokenUrl}/logout`);
  }

  public refreshUserData() {
    log(this.refreshUserData.name);
    const refreshToken = this.getRefreshToken()?.token;
    if (!refreshToken) return;

    const httpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${refreshToken}`,
    );
    //TODO Figure out why this was necessary
    return this.http.post<UserData>(
      this.refreshTokenUrl,
      { refresh: refreshToken },
      { headers: httpHeaders },
    );
  }

  public invalidateJWTToken(): void {
    //   const jwtToken: EncodedJWTToken = {access: this.getAccessToken(), refresh: this.getRefreshToken()};
    //   return this.http.post(`${this.jwtTokenUrl}/logout`, jwtToken); //This feature is not implemented in the backend
  }

  //static for permissionDecorator.ts
  public getUserData(): UserData | undefined {
    if (this.isInServer) return undefined;

    const rawUserData = localStorage.getItem(TokenService.USER_DATA_KEY);
    const hasUserData = rawUserData != null && rawUserData !== 'undefined';
    return hasUserData ? JSON.parse(rawUserData) : undefined;
  }

  //static for permissionDecorator.ts
  public getAccessToken(): TokenData | undefined {
    return this.getUserData()?.accessToken;
  }

  //static for permissionDecorator.ts
  public getRefreshToken(): TokenData | undefined {
    return this.getUserData()?.refreshToken;
  }

  public setUserData(data: UserData | undefined): void {
    if (this.isInServer) return;
    localStorage.setItem(TokenService.USER_DATA_KEY, JSON.stringify(data));
  }

  public getCampaignRole(
    data: UserData,
    campaignName: string | undefined,
  ): CampaignRole | undefined {
    if (campaignName == null) return undefined;

    const memberships = this.getCampaignMemberships(data);
    if (memberships == null) return undefined;

    const role: string = memberships[campaignName.toLowerCase()];
    const isValidRole = CampaignRoles.some((roleName) => roleName === role);
    return isValidRole ? (role as CampaignRole) : undefined;
  }

  /**Retrieves campaign memberships of a user from their token */
  public getCampaignMemberships(
    data: UserData | undefined,
  ): CampaignMemberships | undefined {
    if (data == null) return undefined;

    const campaignMemberships: CampaignMemberships = {};
    for (const campaignIdentifier of Object.keys(data.campaignMemberships)) {
      const isIdIdentifier: boolean = campaignIdentifier.startsWith(
        this.ID_IDENTIFIER_PREFIX,
      );
      if (!isIdIdentifier) {
        campaignMemberships[campaignIdentifier.toLowerCase()] =
          data.campaignMemberships[campaignIdentifier];
      }
    }
    return campaignMemberships;
  }

  public isAccessTokenExpired(): boolean {
    return this.isTokenExpired(this.getAccessToken());
  }

  public isRefreshTokenExpired(): boolean {
    return this.isTokenExpired(this.getRefreshToken());
  }

  public isTokenExpired(token: TokenData | undefined): boolean {
    if (token == null) return true;

    const expiryTimestamp = token.exp;
    const currentTimestamp = Math.floor(new Date().getTime() / 1000);

    const isExpired = currentTimestamp >= expiryTimestamp;
    if (isExpired) {
      const currentDate = new Date(currentTimestamp * 1000).toString();
      const expiryDate = new Date(expiryTimestamp * 1000).toString();
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
