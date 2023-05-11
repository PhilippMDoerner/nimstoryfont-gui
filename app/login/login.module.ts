import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TemplatesModule } from '../design/templates/templates.module';
import { LoginRoutingModule } from './login-routing.module';



@NgModule({
  declarations: [
  ],
  imports: [
    LoginRoutingModule,
    CommonModule,
    TemplatesModule,
  ]
})
export class LoginModule { }
