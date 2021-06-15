import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AuthModuleModule } from './auth-module/auth-module.module';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule ,HTTP_INTERCEPTORS} from '@angular/common/http';
import { AuthHttpInterceptor } from './auth-module/auth-http-interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    AuthModuleModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide :HTTP_INTERCEPTORS ,useClass : AuthHttpInterceptor, multi :true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
