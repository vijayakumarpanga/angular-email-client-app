import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms'
@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule
  ],

  exports: [AuthModuleRoutingModule, SignupComponent, SigninComponent]
})
export class AuthModuleModule { }
