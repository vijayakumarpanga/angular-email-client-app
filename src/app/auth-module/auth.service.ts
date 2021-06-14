import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { FormGroup } from '@angular/forms';
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

  constructor(private http: HttpClient) { }

  fetchUniqueUser(value) {
    return this.http.post<fetchUniqueUserResponse>('https://api.angular-email.com/auth/username', { username: value });
  }
  signup(signupForm : FormGroup){
   return this.http.post<signupResponse>('https://api.angular-email.com/auth/signup',signupForm.value)  

  }
}
