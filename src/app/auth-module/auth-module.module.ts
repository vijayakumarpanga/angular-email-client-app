import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthModuleRoutingModule } from './auth-module-routing.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { SignoutComponent } from './signout/signout.component'
@NgModule({
  declarations: [
    SignupComponent,
    SigninComponent,
    SignoutComponent
  ],
  imports: [
    CommonModule,
    AuthModuleRoutingModule,
    SharedModuleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],

  exports: [AuthModuleRoutingModule, SignupComponent, SigninComponent]
})
export class AuthModuleModule { 
  
}
