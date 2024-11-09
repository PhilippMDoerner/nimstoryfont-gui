import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { animateElement } from 'src/app/_functions/animate';
import { Login, SpecialLoginState } from 'src/app/_models/login';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';
import { PageContainerComponent } from '../../organisms/page-container/page-container.component';
import { NgIf } from '@angular/common';
import { ButtonComponent } from '../../atoms/button/button.component';

type LoginViewState = 'LOGIN' | 'PASSWORD_RESET';
type LoginMessageMap = {[key in SpecialLoginState]: string};

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    standalone: true,
    imports: [PageContainerComponent, NgIf, FormsModule, FormlyModule, ButtonComponent]
})
export class LoginComponent {
  @Input() loginState?: SpecialLoginState;
  @Input() resetErrorMessage?: string;
  
  @Output() login: EventEmitter<Login> = new EventEmitter();
  @Output() resetPassword: EventEmitter<string> = new EventEmitter();
  
  loginMessages: LoginMessageMap = {
    'token-expired': 'Your Session expired, please log in again',
    'token-null': 'You do not have a valid token, please log in',
    'invalid-login': 'No active account found with the given credentials',
    'logged-out': 'Log out successful. Log in again?',
    'no-token': 'You are not logged in. Please enter your credentials',
  }
  
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
      className:"mb-0", 
      fieldGroupClassName: "mb-0"
    }),
  ];

  recoveryModel: Partial<{username: string}> = {};
  recoveryForm = new FormGroup({});
  recoveryFields: FormlyFieldConfig[] = [
    this.formlyService.buildInputConfig({
      key: 'username', 
      placeholder: 'Username',
      inputKind: 'STRING',
    })
  ];

  
  state: LoginViewState = 'LOGIN';
  isWaitingForPasswordReset: boolean = false;
  
  @ViewChild('loginMainCard') loginMainCard!: any;
  
  constructor(
    private formlyService: FormlyService,
  ){}
  
  ngAfterViewInit(): void {
    this.animateCard('backInUp');
  }
  
  setState(newState: LoginViewState): void{
    this.state = newState;
    this.recoveryModel = {};
    this.model = {};

    this.animateCard('flip');
  }  
  
  onLogin(): void{
    this.login.emit(this.model as Login);
  }
  
  onPasswordReset(): void{
    this.resetPassword.emit(this.recoveryModel.username);
  }
  
  private animateCard(animationName: string): void{
    animateElement(this.loginMainCard?.nativeElement, animationName);
  }
}
