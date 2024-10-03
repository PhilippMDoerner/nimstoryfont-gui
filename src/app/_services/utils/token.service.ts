import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest, filter, map, Observable, tap } from 'rxjs';
import { Login } from 'src/app/_models/login';
import {
  CampaignMemberships,
  CampaignRole,
  CampaignRoles,
  TokenData,
  UserData,
} from 'src/app/_models/token';
import { environment } from 'src/environments/environment';
import { createRequestSubjects, trackQuery } from 'src/utils/query';
import { RoutingService } from '../routing.service';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  static USER_DATA_KEY: string = 'user_data';

  apiUrl = environment.apiUrl;
  userData = createRequestSubjects<UserData>();
  isGlobalAdmin$ = this.userData.data.pipe(
    map((data) => !!(data?.isAdmin || data?.isSuperUser)),
  );

  private jwtTokenUrl: string = `${this.apiUrl}/token`;
  private refreshTokenUrl: string = `${this.apiUrl}/token/refresh`;
  private ID_IDENTIFIER_PREFIX: string = 'id_';

  constructor(
    private http: HttpClient,
    private routingService: RoutingService,
  ) {
    this.userData.data.next(TokenService.getUserData());

    this.userData.data
      .pipe(takeUntilDestroyed())
      .subscribe((data) => this.setUserData(data));

    this.userData.data
      .pipe(
        takeUntilDestroyed(),
        filter((data) => data == null),
      )
      .subscribe(() => this.routingService.routeToPath('login'));
  }

  public login(loginData: Login) {
    const entry$ = this.http.post<UserData>(this.jwtTokenUrl, loginData);
    trackQuery(entry$, this.userData);
  }

  public logout() {
    this.userData.data.next(undefined);
    this.userData.error.next(undefined);
    this.userData.state.next('pending');
  }

  public refreshUserData() {
    console.log('Trigger refresh call');
    const refreshToken = TokenService.getRefreshToken()?.token;
    if (!refreshToken) return;

    const httpHeaders = new HttpHeaders().set(
      'Authorization',
      `Bearer ${refreshToken}`,
    );
    //TODO Figure out why this was necessary
    const entry$ = this.http
      .post<UserData>(
        this.refreshTokenUrl,
        { refresh: refreshToken },
        { headers: httpHeaders },
      )
      .pipe(
        tap((x) => console.log('Refresh call responded: ', x)),
        tap((data) => this.setUserData(data)),
      );
    trackQuery(entry$, this.userData);
  }

  public invalidateJWTToken(): void {
    //   const jwtToken: EncodedJWTToken = {access: this.getAccessToken(), refresh: this.getRefreshToken()};
    //   return this.http.post(`${this.jwtTokenUrl}/logout`, jwtToken); //This feature is not implemented in the backend
  }

  //static for permissionDecorator.ts
  public static getUserData(): UserData | undefined {
    const rawUserData = localStorage.getItem(TokenService.USER_DATA_KEY);
    const hasUserData = rawUserData != null && rawUserData !== 'undefined';
    return hasUserData ? JSON.parse(rawUserData) : undefined;
  }

  public hasTokens(): boolean {
    if (TokenService.getUserData() == null) return false;
    return !!TokenService.getAccessToken() && !!TokenService.getRefreshToken();
  }

  public hasValidJWTToken(): boolean {
    if (!this.hasTokens()) return false;
    return !this.isTokenExpired(TokenService.getRefreshToken());
  }

  //static for permissionDecorator.ts
  public static getAccessToken(): TokenData | undefined {
    return this.getUserData()?.accessToken;
  }

  //static for permissionDecorator.ts
  public static getRefreshToken(): TokenData | undefined {
    return this.getUserData()?.refreshToken;
  }

  public setUserData(data: UserData | undefined): void {
    localStorage.setItem(TokenService.USER_DATA_KEY, JSON.stringify(data));
  }

  public removeJWTTokenFromLocalStorage(): void {
    localStorage.removeItem(TokenService.USER_DATA_KEY);
  }

  public getCurrentUserPk(): number | undefined {
    return TokenService.getUserData()?.userId;
  }

  public getCurrentUserName(): string | undefined {
    return TokenService.getUserData()?.userName;
  }

  public isCampaignMember(campaignName: string): Observable<boolean> {
    const role$ = this.getCampaignRole(campaignName);
    return combineLatest({
      isAdmin: this.isGlobalAdmin$,
      role: role$,
    }).pipe(
      map(
        ({ isAdmin, role }) => isAdmin || role === 'admin' || role === 'member',
      ),
    );
  }

  public isCampaignAdmin(campaignName: string): Observable<boolean> {
    const role$ = this.getCampaignRole(campaignName);
    return combineLatest({
      isAdmin: this.isGlobalAdmin$,
      role: role$,
    }).pipe(map(({ isAdmin, role }) => isAdmin || role === 'admin'));
  }

  public isCampaignGuest(campaignName: string): Observable<boolean> {
    const role$ = this.getCampaignRole(campaignName);
    return combineLatest({
      isAdmin: this.isGlobalAdmin$,
      role: role$,
    }).pipe(map(({ isAdmin, role }) => isAdmin || role === 'guest'));
  }

  public getCampaignRole(
    campaignName: string | undefined,
  ): Observable<CampaignRole | undefined> {
    return this.userData.data.pipe(
      map((data) => {
        if (campaignName == null) return undefined;

        const memberships = this.getCampaignMemberships(data);
        if (memberships == null) return undefined;

        const role: string = memberships[campaignName.toLowerCase()];
        const isValidRole = CampaignRoles.some((roleName) => roleName === role);
        return isValidRole ? (role as CampaignRole) : undefined;
      }),
    );
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
    return this.isTokenExpired(TokenService.getAccessToken());
  }

  public isRefreshTokenExpired(): boolean {
    return this.isTokenExpired(TokenService.getRefreshToken());
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
