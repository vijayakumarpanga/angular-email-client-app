import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import {tap} from'rxjs/operators'
interface fetchUniqueUserResponse{
  avaialble :  boolean
}
interface signupResponse{
  username : string;
}
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signedin$ = new BehaviorSubject(false);

  constructor(private http: HttpClient) { }

  fetchUniqueUser(value) {
    return this.http.post<fetchUniqueUserResponse>('https://api.angular-email.com/auth/username', { username: value });
  }
  signup(signupForm : FormGroup){
   return this.http.post<signupResponse>('https://api.angular-email.com/auth/signup',signupForm.value).pipe(
     tap(
       (data)=>{this.signedin$.next(true);
         console.log("inside signup tap",data)
       }
     ))
   

  }
  chechAuth(){
    return this.http.get<{authenticated:boolean,username:string}>('https://api.angular-email.com/auth/signedin').pipe(
      tap(
       (data)=>{
         if(data.authenticated)
          this.signedin$.next(data.authenticated);
         console.log("inside signup tap",data)
       }
     ))
  }
  signout(){
    return this.http.post('https://api.angular-email.com/auth/signout',{}).pipe(
      tap((data)=>{
          this.signedin$.next(false);
         console.log("inside signout tap",data)
       }
     ))
  }
}
