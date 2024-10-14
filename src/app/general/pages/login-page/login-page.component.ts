import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Login, SpecialLoginState } from 'src/app/_models/login';
import { RoutingService } from 'src/app/_services/routing.service';
import { MailService } from 'src/app/_services/utils/mail.service';
import { GlobalStore } from 'src/app/global.store';
import { LoginPageStore } from './login-page.store';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
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

  async onLogin(loginData: Login): Promise<void> {
    await this.globalStore.login(loginData);
    this.routingService.routeToPath('campaign-overview');
  }

  onResetPassword(username: string): void {
    this.mailService.requestPasswordReset(username);
  }
}
