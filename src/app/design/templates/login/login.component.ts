import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Output,
  signal,
} from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { Login, SpecialLoginState } from 'src/app/_models/login';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';

import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { backInUp } from 'src/app/design/animations/backInUp';
import { flipInY } from 'src/app/design/animations/flip';
import { ButtonComponent } from '../../atoms/button/button.component';

type LoginViewState = 'LOGIN' | 'PASSWORD_RESET';
type LoginMessageMap = { [key in SpecialLoginState]: string };

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [
    PageContainerComponent,
    FormsModule,
    FormlyModule,
    FormlyBootstrapModule,
    ButtonComponent,
  ],
  animations: [backInUp, flipInY],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  loginState = input<SpecialLoginState>();
  resetErrorMessage = input<string>();

  @Output() login: EventEmitter<Login> = new EventEmitter();
  @Output() resetPassword: EventEmitter<string> = new EventEmitter();

  loginMessages: LoginMessageMap = {
    'token-expired': 'Your Session expired, please log in again',
    'token-null': 'You do not have a valid token, please log in',
    'invalid-login': 'No active account found with the given credentials',
    'logged-out': 'Log out successful. Log in again?',
    'no-token': 'You are not logged in. Please enter your credentials',
  };

  model: Partial<Login> = {};
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'username',
      placeholder: 'Username',
      inputKind: 'STRING',
    }),
    this.formlyService.buildSinglePasswordConfig({
      key: 'password',
      className: 'mb-0',
      fieldGroupClassName: 'mb-0',
    }),
  ];

  recoveryModel: Partial<{ username: string }> = {};
  recoveryForm = new FormGroup({});
  recoveryFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig<typeof this.recoveryModel>({
      key: 'username',
      placeholder: 'Username',
      inputKind: 'STRING',
    }),
  ];

  state = signal<LoginViewState>('LOGIN');
  isWaitingForPasswordReset: boolean = false;

  constructor(private formlyService: FormlyService) {}

  setState(newState: LoginViewState): void {
    this.state.set(newState);
    this.recoveryModel = {};
    this.model = {};
  }

  onLogin(): void {
    this.login.emit(this.model as Login);
  }

  onPasswordReset(): void {
    this.setState('LOGIN');
    //For some reason this.recoveryModel does not get its value changed. Fix this.
    const username = (this.recoveryForm.value as typeof this.recoveryModel)
      .username;
    this.resetPassword.emit(username);
  }
}
