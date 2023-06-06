import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { animateElement } from 'src/app/_functions/animate';
import { Login } from 'src/app/_models/user';
import { FormlyService } from 'src/app/_services/formly/formly-service.service';

type LoginState = 'LOGIN' | 'PASSWORD_RESET';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @Input() extraMessage?: string;
  @Input() resetErrorMessage?: string;
  
  @Output() login: EventEmitter<Login> = new EventEmitter();
  @Output() resetPassword: EventEmitter<string> = new EventEmitter();
  
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

  
  state: LoginState = 'LOGIN';
  isWaitingForPasswordReset: boolean = false;
  
  @ViewChild('loginMainCard') loginMainCard!: any;
  
  constructor(
    private formlyService: FormlyService,
  ){}
  
  ngAfterViewInit(): void {
    this.animateCard('backInUp');
  }
  
  setState(newState: LoginState): void{
    this.state = newState;
    this.recoveryModel = {};
    this.model = {};

    console.log(this.loginMainCard);
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
