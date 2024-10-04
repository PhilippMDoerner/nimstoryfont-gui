import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Login, SpecialLoginState } from 'src/app/_models/login';
import { RoutingService } from 'src/app/_services/routing.service';
import { MailService } from 'src/app/_services/utils/mail.service';
import { TokenService } from 'src/app/_services/utils/token.service';
import { takeFirstNonNil } from 'src/utils/rxjs-operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  specialLoginState$: Observable<SpecialLoginState> = this.route.paramMap.pipe(
    map((params) => {
      return (params.get('state') as SpecialLoginState) ?? undefined;
    }),
  );
  resetErrorMessage$: Observable<string | undefined> =
    this.mailService.passwordReset.error.pipe(
      takeUntilDestroyed(),
      takeFirstNonNil(),
      map((error) => (error as HttpErrorResponse).message),
    );

  constructor(
    private tokenService: TokenService,
    private routingService: RoutingService,
    private mailService: MailService,
    private route: ActivatedRoute,
  ) {
    this.tokenService.userData.hasSucceeded
      .pipe(takeFirstNonNil())
      .subscribe(() => this.routingService.routeToPath('campaign-overview'));
  }

  onLogin(loginData: Login): void {
    this.tokenService.login(loginData);
  }

  onResetPassword(username: string): void {
    this.mailService.requestPasswordReset(username);
  }
}
