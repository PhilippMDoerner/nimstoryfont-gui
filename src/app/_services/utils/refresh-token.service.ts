import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';
import { TokenData, UserData } from 'src/app/_models/token';
import { createRequestSubjects } from 'src/utils/query';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class RefreshTokenService {
  public isTokenRefreshInProgress$ = this.tokenService.userData.isLoading;
  private refreshAccessToken$ = this.tokenService.userData.data.pipe(
    map((userData) => userData?.accessToken.token),
  );

  userData = createRequestSubjects<UserData>();

  constructor(private tokenService: TokenService) {}

  /**
   * Sends out HTTP request for new Access Token. Returns Observable with only that AccessToken.
   * As a side-effect (in tap) it also sets updates the value for refreshAcessTokenSubject for
   * other waiting requests
   */
  public refreshUserData() {
    this.tokenService.refreshUserData();
  }

  /**
   * Instructs to wait until Access Token was refreshed and then returns an Observable that will
   * contain that access token's value
   */
  public waitForAccessTokenRefresh(): Observable<string> {
    return this.refreshAccessToken$.pipe(
      filter((result) => result != null),
      take(1),
      map((val) => val as string),
    );
  }

  public tokenNeedsRefresh(accessToken: TokenData): Observable<boolean> {
    return this.isTokenRefreshInProgress$.pipe(
      map((isInProgress) => {
        return this.tokenService.isTokenExpired(accessToken) && !isInProgress;
      }),
    );
  }

  public hasToWaitForRefresh(accessToken: TokenData): Observable<boolean> {
    return this.isTokenRefreshInProgress$.pipe(
      map((isInProgress) => {
        return this.tokenService.isTokenExpired(accessToken) && isInProgress;
      }),
    );
  }
}
