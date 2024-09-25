import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Login, SpecialLoginState } from 'src/app/_models/login';
import { login, resetPassword } from '../app.actions';
import { selectResetPasswordErrorMessage, selectSpecialLoginState } from '../app.reducer';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit{
  specialLoginState$!: Observable<SpecialLoginState | undefined>;
  resetErrorMessage$!: Observable<string | undefined>;
  
  constructor(
    private store: Store,
  ){}
  
  ngOnInit(): void {
    this.specialLoginState$ = this.store.select(selectSpecialLoginState);
    this.resetErrorMessage$ = this.store.select(selectResetPasswordErrorMessage);
  }
  
  onLogin(event: Login): void{
    this.store.dispatch(login(event));
  }
  
  onResetPassword(event: string): void{
    this.store.dispatch(resetPassword({username: event}));
  }
}
