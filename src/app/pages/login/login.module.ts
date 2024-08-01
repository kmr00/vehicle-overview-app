import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginRoutingModule} from './login-routing.module';
import {LoginComponent} from "./components/login/login.component";
import {CardModule} from "primeng/card";
import {DividerModule} from "primeng/divider";
import {PasswordModule} from "primeng/password";
import {ReactiveFormsModule} from "@angular/forms";
import {InputTextModule} from "primeng/inputtext";
import {ButtonModule} from "primeng/button";


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    CardModule,
    DividerModule,
    PasswordModule,
    ReactiveFormsModule,
    InputTextModule,
    ButtonModule
  ]
})
export class LoginModule {
}
