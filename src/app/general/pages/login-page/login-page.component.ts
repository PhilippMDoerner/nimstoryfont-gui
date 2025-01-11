import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { map, Observable, take } from 'rxjs';
import { Login, SpecialLoginState } from 'src/app/_models/login';
import { RoutingService } from 'src/app/_services/routing.service';
import { MailService } from 'src/app/_services/utils/mail.service';
import { GlobalStore } from 'src/app/global.store';
import { LoginComponent } from '../../../../design/templates/login/login.component';
import { LoginPageStore } from './login-page.store';

@Component({
    selector: 'app-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.scss'],
    imports: [LoginComponent, AsyncPipe, FormlyModule],
    providers: [LoginPageStore]
})
export class LoginPageComponent {
  public readonly globalStore = inject(GlobalStore);
  public readonly store = inject(LoginPageStore);
  specialLoginState$: Observable<SpecialLoginState> = this.route.paramMap.pipe(
    map((params) => {
      return (params.get('state') as SpecialLoginState) ?? undefined;
    }),
  );

  constructor(
    private routingService: RoutingService,
    private mailService: MailService,
    private route: ActivatedRoute,
  ) {}

  onLogin(loginData: Login) {
    this.globalStore
      .login(loginData)
      .pipe(take(1))
      .subscribe(() => this.routingService.routeToPath('campaign-overview'));
  }

  onResetPassword(username: string): void {
    this.mailService.requestPasswordReset(username);
  }
}
