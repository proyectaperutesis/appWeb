import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginContentComponent } from './login-content/login-content.component';
import { MaterialModule } from '../shared/material.module';
import { LoginService } from './services/login.service';

@NgModule({
  declarations: [LoginContentComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MaterialModule
  ],
  providers: [
    LoginService
  ]
})
export class LoginModule { }
